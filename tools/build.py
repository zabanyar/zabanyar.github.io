#!/usr/bin/env python3
"""Build docs/data from content/: add audio file names + picture paths, write course index,
offline file lists and the TTS job list (tools/tts_jobs.json). Usage: python3 tools/build.py"""
import json, hashlib, os, re, shutil, glob
import emoji as emojilib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT = os.path.join(ROOT, "content")
DOCS = os.path.join(ROOT, "docs")
FLUENT = "/home/claude/vendor/package/icons/flat"
TWEMOJI = "/home/claude/vendor/package"  # @twemoji/svg extracted (codepoint names) — overwritten check below
TWEMOJI_DIR = "/home/claude/vendor/twemoji"

COURSES = {
    "en-fa": {"target": "en", "support": "fa", "dir": "rtl",
              "name": {"t": "English", "s": "انگلیسی"}, "voices": {"f": "en_f", "m": "en_m"}, "default": "f",
              "color": "#2f6fdb"},
    "de-en": {"target": "de", "support": "en", "dir": "ltr",
              "name": {"t": "Deutsch", "s": "German"}, "voices": {"f": "de_f", "m": "de_m"}, "default": "m",
              "color": "#d9822b"},
    "tr-fa": {"target": "tr", "support": "fa", "dir": "rtl",
              "name": {"t": "Türkçe", "s": "ترکی"}, "voices": {"f": "tr_f", "m": "tr_m"}, "default": "f",
              "color": "#c2334d"},
}
LEVELS = [
    ("A1", {"fa": "مبتدی", "en": "Beginner"}),
    ("A2", {"fa": "مقدماتی", "en": "Elementary"}),
    ("B1", {"fa": "متوسط", "en": "Intermediate"}),
    ("B2", {"fa": "فوق متوسط", "en": "Upper intermediate"}),
    ("C1", {"fa": "پیشرفته", "en": "Advanced"}),
]
LEVEL_OUTLINE = {
    "A2": {"fa": "زمان گذشته، برنامه‌های آینده، سفر، سلامتی، کار، مقایسه", "en": "Past tense, future plans, travel, health, work, comparisons"},
    "B1": {"fa": "تجربه‌ها، نظر دادن، داستان، اخبار، متن‌های بلندتر", "en": "Experiences, opinions, stories, news, longer texts"},
    "B2": {"fa": "بحث و گفت‌وگو، موضوعات انتزاعی، دستور پیشرفته، متن‌های واقعی", "en": "Discussions, abstract topics, complex grammar, authentic texts"},
    "C1": {"fa": "روانی کامل، اصطلاحات، سبک نوشتن، زبان حرفه‌ای", "en": "Fluency, idioms, style, professional language"},
}

jobs = {}          # file -> {text, voice}
images = {}        # emoji -> relative path
missing_img = set()


def akey(course, voice, text):
    h = hashlib.sha1(f"{voice}|{text}".encode("utf-8")).hexdigest()[:12]
    return f"audio/{course}/{h}.mp3"


def speakable(text):
    t = text.replace("___", "…")
    t = re.sub(r"\s+", " ", t).strip()
    return t


def add_audio(course, obj, voice=None, text=None):
    c = COURSES[course]
    v = c["voices"][voice or c["default"]]
    text = text if text is not None else obj.get("t")
    if not text:
        return
    text = speakable(text)
    f = akey(course, v, text)
    jobs[f] = {"text": text, "voice": v}
    obj["a"] = f


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
            missing_img.add(e)
            images[e] = None
            return None
        os.makedirs(os.path.dirname(out), exist_ok=True)
        shutil.copy(src, out)
    images[e] = rel
    return rel


def fill_gap(x):
    t = x["t"]
    if x["type"] == "choice":
        return t.replace("___", x["options"][x["answer"]], 1)
    if x["type"] == "type":
        return t.replace("___", x["answer"][0], 1)
    return t


def process_unit(course, u):
    c = COURSES[course]
    u["img"] = emoji_img(u.get("emoji"))
    add_audio(course, u["title"])
    for l in u.get("letters", []):
        letter = l["t"].split()[0]
        add_audio(course, l, text=letter.lower() if course != "de-en" else letter)
        if l.get("ex"):
            l["ex"]["img"] = emoji_img(l["ex"].get("emoji"))
            add_audio(course, l["ex"])
    for s in u.get("sounds", []):
        for ex in s.get("ex", []):
            add_audio(course, ex)
    for w in u.get("words", []):
        w["img"] = emoji_img(w.get("emoji"))
        add_audio(course, w)
        if w.get("pl"):
            w["pla"] = akey(course, c["voices"][c["default"]], speakable(w["pl"]))
            jobs[w["pla"]] = {"text": speakable(w["pl"]), "voice": c["voices"][c["default"]]}
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
    index = {"version": 1, "courses": []}
    for course, meta in COURSES.items():
        units = []
        offline = set()
        for fn in sorted(glob.glob(os.path.join(CONTENT, course, "A1", "u*.json"))):
            u = json.load(open(fn, encoding="utf-8"))
            u = process_unit(course, u)
            out = os.path.join(DOCS, "data", course, "A1", os.path.basename(fn))
            os.makedirs(os.path.dirname(out), exist_ok=True)
            json.dump(u, open(out, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
            offline.add(f"data/{course}/A1/{os.path.basename(fn)}")
            files_in(u, offline)
            units.append({"id": u["id"], "title": u["title"], "img": u.get("img"), "emoji": u.get("emoji"),
                          "goals": u.get("goals", []),
                          "has": {k: bool(u.get(k)) for k in ("letters", "sounds", "words", "phrases", "dialogue", "grammar", "reading")}})
        levels = []
        for lid, lname in LEVELS:
            lv = {"id": lid, "name": lname[meta["support"]], "units": units if lid == "A1" else []}
            if lid != "A1":
                lv["outline"] = LEVEL_OUTLINE[lid][meta["support"]]
            levels.append(lv)
        offline.discard(None)
        json.dump(sorted(offline), open(os.path.join(DOCS, "data", course, "files.json"), "w"), indent=0)
        index["courses"].append({"id": course, **{k: meta[k] for k in ("target", "support", "dir", "name", "color")}, "levels": levels})
    json.dump(index, open(os.path.join(DOCS, "data", "courses.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    json.dump(jobs, open(os.path.join(ROOT, "tools", "tts_jobs.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=0)
    print(f"units built; audio jobs: {len(jobs)}; images: {len([v for v in images.values() if v])}; missing images: {''.join(sorted(missing_img))}")


if __name__ == "__main__":
    main()
