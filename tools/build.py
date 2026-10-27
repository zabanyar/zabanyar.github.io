#!/usr/bin/env python3
"""Build docs/data from content/: add audio file names + picture paths, write course index,
offline file lists and the TTS job list (tools/tts_jobs.json). Usage: python3 tools/build.py"""
import json, hashlib, os, re, shutil, glob
import emoji as emojilib
from num2words import num2words

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT = os.path.join(ROOT, "content")
DOCS = os.path.join(ROOT, "docs")
FLUENT = "/home/claude/vendor/package/icons/flat"
TWEMOJI_DIR = "/home/claude/vendor/twemoji"

# dir = direction of the UI (support language); tdir = direction of the language being learned
COURSES = {
    "en-fa": {"target": "en", "support": "fa", "dir": "rtl", "tdir": "ltr",
              "name": {"t": "English", "s": "انگلیسی"}, "voices": {"f": "en_f", "m": "en_m"}, "vv": "2", "default": "f", "color": "#2f6fdb"},
    "de-en": {"target": "de", "support": "en", "dir": "ltr", "tdir": "ltr",
              "name": {"t": "Deutsch", "s": "German"}, "voices": {"f": "de_f", "m": "de_m"}, "default": "m", "color": "#d9822b"},
    "tr-fa": {"target": "tr", "support": "fa", "dir": "rtl", "tdir": "ltr",
              "name": {"t": "Türkçe", "s": "ترکی"}, "voices": {"f": "tr_f", "m": "tr_m"}, "default": "f", "color": "#c2334d"},
    "fa-tr": {"target": "fa", "support": "tr", "dir": "ltr", "tdir": "rtl",
              "name": {"t": "فارسی", "s": "Farsça"}, "voices": {"f": "fa_f", "m": "fa_m"}, "vv": "2", "default": "m", "color": "#7a4fc4"},
}
LEVELS = ["A1", "A2", "B1", "B2", "C1"]
LEVEL_NAME = {
    "fa": {"A1": "مبتدی", "A2": "مقدماتی", "B1": "متوسط", "B2": "فوق متوسط", "C1": "پیشرفته"},
    "en": {"A1": "Beginner", "A2": "Elementary", "B1": "Intermediate", "B2": "Upper intermediate", "C1": "Advanced"},
    "tr": {"A1": "Başlangıç", "A2": "Temel", "B1": "Orta", "B2": "Orta üstü", "C1": "İleri"},
}
LEVEL_OUTLINE = {
    "fa": {"A2": "زمان گذشته، برنامه‌های آینده، سفر، سلامتی، کار، مقایسه", "B1": "تجربه‌ها، نظر دادن، داستان، اخبار، متن‌های بلندتر",
           "B2": "بحث و گفت‌وگو، موضوعات انتزاعی، دستور پیشرفته، متن‌های واقعی", "C1": "روانی کامل، اصطلاحات، سبک نوشتن، زبان حرفه‌ای"},
    "en": {"A2": "Past tense, future plans, travel, health, work, comparisons", "B1": "Experiences, opinions, stories, news, longer texts",
           "B2": "Discussions, abstract topics, complex grammar, authentic texts", "C1": "Fluency, idioms, style, professional language"},
    "tr": {"A2": "Geçmiş zaman, gelecek planları, seyahat, sağlık, iş, karşılaştırma", "B1": "Deneyimler, fikir bildirme, hikâyeler, haberler",
           "B2": "Tartışma, soyut konular, ileri dilbilgisi, gerçek metinler", "C1": "Akıcılık, deyimler, üslup, profesyonel dil"},
}
SPEED = {"A1": (0.8, 0.9), "A2": (0.85, 0.92), "B1": (0.9, 0.95), "B2": (0.92, 1.0), "C1": (0.95, 1.0)}  # (≤2 words, sentences)

jobs = {}          # file -> {text, voice, speed}
images = {}        # emoji -> relative path
missing_img = set()
LEVEL = "A1"


def akey(course, voice, text):
    vv = COURSES[course].get("vv")   # voice-set version: changing a course's voices gives new file names
    h = hashlib.sha1((f"{voice}|{text}" if not vv else f"{voice}@{vv}|{text}").encode("utf-8")).hexdigest()[:12]
    return f"audio/{course}/{h}.mp3"


TR_ONES = ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"]
TR_TENS = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"]
def tr_num(n):
    """Turkish number words WITH spaces (voices read long glued words badly)"""
    if n == 0: return "sıfır"
    out = []
    for size, name in ((10**9, "milyar"), (10**6, "milyon"), (1000, "bin")):
        if n >= size:
            q, n = divmod(n, size)
            out += ([] if (q == 1 and size == 1000) else [tr_num(q)]) + [name]
    if n >= 100:
        q, n = divmod(n, 100); out += ([] if q == 1 else [TR_ONES[q]]) + ["yüz"]
    if n >= 10: out.append(TR_TENS[n // 10]); n %= 10
    if n: out.append(TR_ONES[n])
    return " ".join(out)
TR_ORD = {"bir": "birinci", "iki": "ikinci", "üç": "üçüncü", "dört": "dördüncü", "beş": "beşinci", "altı": "altıncı", "yedi": "yedinci",
          "sekiz": "sekizinci", "dokuz": "dokuzuncu", "on": "onuncu", "yirmi": "yirminci", "otuz": "otuzuncu", "kırk": "kırkıncı",
          "elli": "ellinci", "altmış": "altmışıncı", "yetmiş": "yetmişinci", "seksen": "sekseninci", "doksan": "doksanıncı",
          "yüz": "yüzüncü", "bin": "bininci", "milyon": "milyonuncu", "milyar": "milyarıncı", "sıfır": "sıfırıncı"}
def tr_ord(n):
    w = tr_num(n).split(); w[-1] = TR_ORD[w[-1]]; return " ".join(w)

DE_MONTHS = "Januar|Februar|März|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember|Jahrhundert|Stock|Klasse"
def de_num(n, year=False):
    if year and 1100 <= n <= 1999: return num2words(n, lang="de", to="year")
    return num2words(n, lang="de")

def numbers(t, lang):
    """write numbers as words for the Piper voices (German, Turkish, Persian); Kokoro (English) reads digits well"""
    if lang == "de":
        t = re.sub(r"\b\d{1,3}(?:[ .]\d{3})+\b", lambda m: de_num(int(m.group(0).replace(".", "").replace(" ", ""))), t)   # 1.200 / 200 000
        def clock(m):
            h, mi = int(m.group(1)), int(m.group(2))
            return f"{de_num(h)} Uhr" + (f" {de_num(mi)}" if mi else "")
        t = re.sub(r"\b(\d{1,2}):(\d\d)(?: Uhr)?", clock, t)
        def ordinal(m):
            w = num2words(int(m.group(2)), lang="de", to="ordinal")
            return m.group(1) + (w + "n" if m.group(1).strip().lower() in ("am", "zum", "vom", "beim", "im", "dem") else w) + " "
        t = re.sub(r"(\b\w+ )(\d{1,2})\. (?=" + DE_MONTHS + ")", ordinal, t)
        t = re.sub(r"\b(\d+)\.(\d+)\b", lambda m: f"{de_num(int(m.group(1)))} Punkt {de_num(int(m.group(2)))}", t)       # 4.0
        t = re.sub(r"\b(\d+),(\d+)\b", lambda m: f"{de_num(int(m.group(1)))} Komma {' '.join(de_num(int(c)) for c in m.group(2))}", t)
        t = re.sub(r"\b([ABC])(\d)\b", lambda m: {"A": "A", "B": "Be", "C": "Ze"}[m.group(1)] + " " + de_num(int(m.group(2))), t)   # C1, A3
        t = re.sub(r"\b(\d+)\b", lambda m: de_num(int(m.group(1)), year=True), t)
    elif lang == "tr":
        t = re.sub(r"\b(\d{1,3})(?:\.(\d{3}))+\b", lambda m: m.group(0).replace(".", ""), t)
        t = re.sub(r"\b(\d{1,2}):(\d\d)\b", lambda m: tr_num(int(m.group(1))) + (" " + tr_num(int(m.group(2))) if int(m.group(2)) else ""), t)
        t = re.sub(r"\b(\d+)\. (?=[a-zçğıöşü])", lambda m: tr_ord(int(m.group(1))) + " ", t)
        t = re.sub(r"\b(\d+),(\d+)\b", lambda m: f"{tr_num(int(m.group(1)))} virgül {' '.join(tr_num(int(c)) for c in m.group(2))}", t)
        t = re.sub(r"\b([ABC])([12])\b", lambda m: {"A": "a", "B": "be", "C": "ce"}[m.group(1)] + " " + tr_num(int(m.group(2))), t)
        t = re.sub(r"\b(\d+)['’](?=\w)", lambda m: tr_num(int(m.group(1))), t)                               # 1961'de -> ... birde
        t = re.sub(r"\b(\d+)\b", lambda m: tr_num(int(m.group(1))), t)
    elif lang == "fa":
        t = t.translate(str.maketrans("۰۱۲۳۴۵۶۷۸۹", "0123456789"))
        t = re.sub(r"\d+", lambda m: num2words(int(m.group(0)), lang="fa"), t)
    return t

CONJ = {"en": " or ", "de": " oder ", "tr": " veya ", "fa": " یا "}
ABBR = {"en": [("Dr.", "Doctor"), ("Mr.", "Mister"), ("Mrs.", "Missus"), ("Si-o-se-pol", "See-oh-seh pol")],
        "de": [("Prof. Dr.", "Professor Doktor"), ("Dr.", "Doktor"), ("Prof.", "Professor"), ("z. B.", "zum Beispiel"), ("z.B.", "zum Beispiel"),
               ("usw.", "und so weiter"), ("bzw.", "beziehungsweise"), ("CO₂", "C O zwei")],
        "tr": [("Prof. Dr.", "Profesör Doktor"), ("Dr.", "Doktor"), ("Prof.", "Profesör"), ("Bedenim M.", "Bedenim em."), ("Bu L beden", "Bu el beden")],
        "fa": []}

def speakable(text, lang="en"):
    """the text the voice reads: no grammar notation, symbols, abbreviations or (except English) digits"""
    t = text.replace("___", "…")
    t = re.sub(r"\s*\([^)]*\)", "", t)                     # grammar hints in brackets: "(über + A)"
    t = re.sub(r"\s*\+\s*(A|D|G|N|Akk|Dat|Gen|Akk\.|Dat\.|Gen\.)\b\.?", "", t)  # "+ D"
    t = t.replace("jdn.", "jemanden").replace("jdm.", "jemandem").replace("etw.", "etwas").replace("sth.", "something")
    for a, b in ABBR.get(lang, []):
        t = t.replace(a, b)
    # "18 = eighteen", "۱۵: پانزده": the word after a bare number is what should be heard
    m = re.fullmatch(r"\s*[\d۰-۹]+\s*(?:=|:(?![\d۰-۹]))\s*(.+)", t)
    if m: t = m.group(1)
    t = re.sub(r"\s*(=|→|·)\s*", ". ", t)                    # "A = B", "ev → evler"
    t = re.sub(r"\s+/\s+", ", ", t)                          # "Yes, I do. / No, I don't."
    t = re.sub(r"(?<=\w)/(?=\w)", lambda m: CONJ.get(lang, ", "), t)   # jemanden/etwas
    t = numbers(t, lang)
    t = re.sub(r"([.?!][\"”»])\.", r"\1", t)
    t = re.sub(r"\.\s*\.", ".", t).replace("?.", "?").replace("!.", "!").replace(",.", ".").replace(".,", ".").replace("?,", "?").replace("!,", "!")
    return re.sub(r"\s+", " ", t).strip(" /")


def add_audio(course, obj, voice=None, text=None, key="a"):
    c = COURSES[course]
    v = c["voices"][voice or c["default"]]
    text = text if text is not None else obj.get("t")
    if not text:
        return
    text = speakable(text, c["target"])
    f = akey(course, v, text)
    sp = SPEED[LEVEL][0 if len(text.split()) <= 2 else 1]
    if f not in jobs:
        jobs[f] = {"text": text, "voice": v, "speed": sp}
    obj[key] = f


def emoji_img(e):
    if not e:
        return None
    if e in images:
        return images[e]
    base = "".join(ch for ch in e if ch not in "️︎")
    hexname = "-".join(f"{ord(ch):x}" for ch in base)
    out = os.path.join(DOCS, "img", "e", hexname + ".svg")
    rel = f"img/e/{hexname}.svg"
    if not os.path.exists(out):
        src = None
        name = emojilib.demojize(base, delimiters=("", "")).lower().replace("_", "-").replace("’", "").replace("'", "")
        for cand in (name, name + "-default", name.replace("-face", "")):
            p = os.path.join(FLUENT, cand + ".svg")
            if os.path.exists(p):
                src = p; break
        if not src:
            p = os.path.join(TWEMOJI_DIR, hexname + ".svg")
            if os.path.exists(p):
                src = p
        if not src:
            missing_img.add(e); images[e] = None
            return None
        os.makedirs(os.path.dirname(out), exist_ok=True)
        shutil.copy(src, out)
    images[e] = rel
    return rel


FA_LETTER_NAMES = {"ا": "اَلِف", "ب": "بِه", "پ": "پِه", "ت": "تِه", "ث": "ثِه", "ج": "جیم", "چ": "چِه", "ح": "حِه", "خ": "خِه", "د": "دال",
    "ذ": "ذال", "ر": "رِه", "ز": "زِه", "ژ": "ژِه", "س": "سین", "ش": "شین", "ص": "صاد", "ض": "ضاد", "ط": "طا", "ظ": "ظا", "ع": "عِین",
    "غ": "غِین", "ف": "فِه", "ق": "قاف", "ک": "کاف", "گ": "گاف", "ل": "لام", "م": "میم", "ن": "نون", "و": "واو", "ه": "هِه", "ی": "یِه"}
FA_NONJOIN = set("اآدذرزژو")
ZWJ = "\u200d"
def fa_forms(ch):
    """isolated, initial, medial, final — built with zero-width joiners so the font shapes them"""
    if ch in FA_NONJOIN:
        return [ch, ch, ZWJ + ch, ZWJ + ch]
    return [ch, ch + ZWJ, ZWJ + ch + ZWJ, ZWJ + ch]


def fill_gap(x):
    t = x["t"]
    if x["type"] == "choice":
        return t.replace("___", x["options"][x["answer"]], 1)
    if x["type"] == "type":
        return t.replace("___", x["answer"][0], 1)
    return t


def process_unit(course, u):
    c = COURSES[course]
    u["level"] = LEVEL
    u["img"] = emoji_img(u.get("emoji"))
    add_audio(course, u["title"])
    for l in u.get("letters", []):
        letter = l["t"].split()[0]
        if course == "fa-tr":
            # a lone letter is unpronounceable for TTS — speak the letter's name instead
            l["forms"] = fa_forms(letter)
            add_audio(course, l, text=FA_LETTER_NAMES.get(letter, letter))
        else:
            add_audio(course, l, text=letter.lower() if course in ("en-fa", "tr-fa") else letter)
        if l.get("ex"):
            l["ex"]["img"] = emoji_img(l["ex"].get("emoji"))
            add_audio(course, l["ex"])
    for s in u.get("sounds", []):
        for ex in s.get("ex", []):
            add_audio(course, ex)
            if ex.get("emoji"): ex["img"] = emoji_img(ex["emoji"])
    for w in u.get("words", []):
        w["img"] = emoji_img(w.get("emoji"))
        add_audio(course, w)
        if w.get("pl"):
            add_audio(course, w, text=w["pl"], key="pla")
        if w.get("ex"):
            add_audio(course, w["ex"])
    for p in u.get("phrases", []):
        add_audio(course, p)
    dl = u.get("dialogue")
    if dl:
        add_audio(course, dl["title"])
        for line in dl["lines"]:
            add_audio(course, line, voice=dl["speakers"][line["sp"]]["voice"])
    for g in u.get("grammar", []):
        for ex in g.get("examples", []):
            add_audio(course, ex)
        for x in g.get("exercises", []):
            x["full"] = fill_gap(x)
            add_audio(course, x, text=x["full"])
    r = u.get("reading")
    if r:
        add_audio(course, r["title"])
        for s in r["text"]:
            add_audio(course, s)
        for q in r.get("questions", []):
            add_audio(course, q["q"])
    for s in u.get("sentences", []):
        add_audio(course, s)
    return u


def files_in(obj, acc):
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k in ("a", "pla", "img") and isinstance(v, str):
                acc.add(v)
            else:
                files_in(v, acc)
    elif isinstance(obj, list):
        for v in obj:
            files_in(v, acc)


def main():
    global LEVEL
    index = {"version": 2, "courses": []}
    for course, meta in COURSES.items():
        sup = meta["support"]
        offline = set(); levels = []
        for lid in LEVELS:
            LEVEL = lid
            units = []
            for fn in sorted(glob.glob(os.path.join(CONTENT, course, lid, "u*.json"))):
                u = process_unit(course, json.load(open(fn, encoding="utf-8")))
                out = os.path.join(DOCS, "data", course, lid, os.path.basename(fn))
                os.makedirs(os.path.dirname(out), exist_ok=True)
                json.dump(u, open(out, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
                offline.add(f"data/{course}/{lid}/{os.path.basename(fn)}")
                files_in(u, offline)
                units.append({"id": u["id"], "title": u["title"], "img": u.get("img"), "emoji": u.get("emoji"), "goals": u.get("goals", []),
                              "has": {k: bool(u.get(k)) for k in ("letters", "sounds", "words", "phrases", "dialogue", "grammar", "reading")}})
            lv = {"id": lid, "name": LEVEL_NAME[sup][lid], "units": units}
            if not units:
                lv["outline"] = LEVEL_OUTLINE[sup].get(lid, "")
            levels.append(lv)
        offline.discard(None)
        json.dump(sorted(offline), open(os.path.join(DOCS, "data", course, "files.json"), "w"), indent=0)
        index["courses"].append({"id": course, **{k: meta[k] for k in ("target", "support", "dir", "tdir", "name", "color")}, "levels": levels})
    json.dump(index, open(os.path.join(DOCS, "data", "courses.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    json.dump(jobs, open(os.path.join(ROOT, "tools", "tts_jobs.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=0)
    n = sum(len(l["units"]) for c in index["courses"] for l in c["levels"])
    print(f"{n} units built; audio jobs: {len(jobs)}; images: {len([v for v in images.values() if v])}; missing images: {''.join(sorted(missing_img))}")


if __name__ == "__main__":
    main()
