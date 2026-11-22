#!/usr/bin/env python3
"""en-fa pronunciation dictionary.

Aligns every English `t` (exercise gaps filled with the key) with its Persian-script `pr` word by word (only where the
word counts match), collects the spellings used for each English word, and

  python3 tools/en_fa_pr_dict.py report [N]   lists words written in more than one way (most frequent first)
  python3 tools/en_fa_pr_dict.py build        (re)writes content/en-fa/PR_DICT.md: keeps its existing entries, adds new
                                              words (majority spelling; OVERRIDES below; ties -> headword, then first use)
  python3 tools/en_fa_pr_dict.py check        lists pr tokens that differ from content/en-fa/PR_DICT.md
  python3 tools/en_fa_pr_dict.py apply        rewrites differing tokens to the PR_DICT.md spelling (aligned items,
                                              plus unambiguous variant tokens in non-aligned items whose t has the word)

Weak forms and homographs (ALTS below) keep several spellings: the ذِ/ذی, can کَن/کِن, read رید/رِد, live, close, use(d) …;
only their sukun/ZWNJ is unified.
"""
import json, glob, os, re, sys, collections, difflib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT = os.path.join(ROOT, "content", "en-fa")
DICT_MD = os.path.join(CONTENT, "PR_DICT.md")
LEVELS = ["A1", "A2", "B1", "B2", "C1"]
PUNCT = "\"'.,!?؟،؛:;«»“”…()[]—–-"
# weak forms / homographs: allowed spellings (a token keeps the one with the same letters; only sukun/ZWNJ are unified)
ALTS = {"the": ["ذِ", "ذی"], "a": ["اِ", "اِی"], "can": ["کَن", "کِن"], "have": ["هَو", "هَف"], "has": ["هَز", "هَس"],
        "use": ["یوز", "یوس"], "used": ["یوسْت", "یوزْد"], "read": ["رید", "رِد"], "live": ["لیو", "لایو"],
        "lives": ["لیوْز", "لایوْز"], "close": ["کْلُوز", "کْلُوس"]}
ALT_NOTES = {"the": "ذِ before a consonant sound, ذی before a vowel sound", "a": "اِ; strong/letter name اِی",
             "can": "کَن stressed (Yes, I can. / Can you …? / can't کَنت), کِن weak before a verb where a level uses it",
             "have": "هَو; هَف only in have to", "has": "هَز; هَس only in has to",
             "use": "یوز verb, یوس noun", "used": "یوسْت in used to (habit), یوزْد = was used / used a …",
             "read": "رید present/infinitive, رِد past", "live": "لیو verb, لایو adjective (live music)",
             "lives": "لیوْز verb (she lives), لایوْز noun (our lives)", "close": "کْلُوز verb (close the door), کْلُوس adjective (close to)"}
# pass 5 decisions where the majority was not used or there was no majority (conventions: /ɪ/ = ی, kw = کْو, word families agree)
OVERRIDES = {"perfect": "پِرْفِکْت", "beautiful": "بیوتیفِل", "museum": "میوزیئِم", "message": "مِسیج", "messages": "مِسیجِز",
             "difficult": "دیفیکِلت", "comfortable": "کامفِرتِبِل", "accident": "اَکسیدِنت", "actually": "اَکْچوِلی",
             "scientists": "سایِنْتِسْتْس", "environment": "اِنوایرِنمِنت", "practice": "پْرَکْتیس", "practical": "پْرَکْتیکِل",
             "habit": "هَبیت", "habits": "هَبیتْس", "supposed": "سِپُوزْد", "hmm": "هِم", "officer": "آفیسِر",
             "created": "کْری‌اِیتِد", "create": "کْری‌اِیت", "experiment": "ایکْسْپِرِمِنت", "visitors": "ویزیتِرز",
             "service": "سِرْوِس", "fuel": "فیوئِل", "shortage": "شُرتِج", "enroll": "اینْرُول", "whatever": "وات‌اِوِر",
             "me": "میْ", "weren't": "وِرنت", "quiet": "کْوایِت", "quieter": "کْوایِتِر", "quite": "کْوایت"}
SUK = re.compile("[\u0652\u200c]")

TOK_T = re.compile(r"___|[A-Za-z0-9À-ÿ][A-Za-z0-9À-ÿ'’]*")


def strip_p(tok):
    return tok.strip(PUNCT + " ")


def t_tokens(t, join_hyphen):
    t = t.replace("’", "'")
    if join_hyphen:
        t = re.sub(r"(?<=\w)-(?=\w)", "", t)
    return [w for w in TOK_T.findall(t)]


def pr_tokens(pr):
    return [strip_p(x) for x in pr.replace("/", " ").split() if strip_p(x)]


def filled(o):
    """the t of an exercise with its gap filled by the key (pr is always the full sentence)"""
    t = o["t"]
    if "___" in t:
        if o.get("type") == "choice" and isinstance(o.get("answer"), int):
            t = t.replace("___", o["options"][o["answer"]])
        elif o.get("type") == "type" and o.get("answer"):
            t = t.replace("___", o["answer"][0])
        elif o.get("type") in ("choice", "type"):
            return None
    return t


def objects():
    """yield (level, unit, path, obj, tfield, prfield) for every object carrying a t/pr (or cue/cpr) pair"""
    for L in LEVELS:
        for f in sorted(glob.glob(f"{CONTENT}/{L}/u*.json")):
            u = json.load(open(f, encoding="utf-8"))

            def walk(o, p):
                if isinstance(o, dict):
                    if isinstance(o.get("t"), str) and isinstance(o.get("pr"), str):
                        yield p, o, "t", "pr"
                    if isinstance(o.get("cue"), str) and isinstance(o.get("cpr"), str):
                        yield p, o, "cue", "cpr"
                    for k, v in o.items():
                        yield from walk(v, f"{p}.{k}" if p else k)
                elif isinstance(o, list):
                    for i, v in enumerate(o):
                        yield from walk(v, f"{p}[{i}]")
            for p, o, tf, pf in walk(u, ""):
                if p.startswith("letters"):
                    continue
                yield f, u, L, os.path.basename(f)[:-5], p, o, tf, pf


def align(o, tf, pf):
    t = filled(o) if tf == "t" else o[tf]
    if t is None:
        return None
    pt = pr_tokens(o[pf])
    for jh in (False, True):
        tt = t_tokens(t, jh)
        if len(tt) == len(pt):
            return list(zip(tt, pt))
    return None


def collect():
    sp = collections.defaultdict(collections.Counter)   # word -> Counter(spelling)
    single = collections.defaultdict(collections.Counter)
    for f, u, L, uid, p, o, tf, pf in objects():
        a = align(o, tf, pf)
        if not a:
            continue
        for w, s in a:
            k = w.lower()
            sp[k][s] += 1
            if len(a) == 1:
                single[k][s] += 1
    return sp, single


def load_dict():
    d = {}
    if os.path.exists(DICT_MD):
        text = open(DICT_MD, encoding="utf-8").read()
        for line in text[text.find("\n| word | pr |"):].splitlines():
            m = re.match(r"\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|", line)
            if m and m.group(2) != "pr" and not m.group(1).startswith("-"):
                d[m.group(1)] = m.group(2)
    return d


DIA = re.compile("[\u064B-\u0652\u200c]")


def same_word(a, b):
    """a and b are plausibly spellings of the same word (guards against coincidental misalignment)"""
    x, y = DIA.sub("", a), DIA.sub("", b)
    return x == y or difflib.SequenceMatcher(None, x, y).ratio() >= 0.75


def canon(D, k, s):
    """target spelling for token s of word k, or None"""
    if k not in D:
        return None
    alts = D[k].split(" / ")
    if len(alts) == 1:
        return alts[0] if same_word(alts[0], s) else None
    for a in alts:
        if SUK.sub("", a) == SUK.sub("", s):
            return a
    return None


def replace_token(pr, i, new):
    """replace the i-th non-punctuation token of pr by new, keeping attached punctuation"""
    parts = re.split(r"(\s+)", pr)
    k = -1
    for j, part in enumerate(parts):
        if part.isspace() or not strip_p(part.replace("/", " ")):
            continue
        if part.strip() == "/":
            continue
        k += 1
        if k == i:
            core = strip_p(part)
            parts[j] = part.replace(core, new, 1)
            break
    return "".join(parts)


def run(apply):
    D = load_dict()
    sp, _ = collect()
    allcanon = {a for v in D.values() for a in v.split(" / ")}
    changed, files = [], {}
    for f, u, L, uid, p, o, tf, pf in objects():
        files[f] = u
        a = align(o, tf, pf)
        if a:
            new = o[pf]
            for i, (w, s) in enumerate(a):
                c = canon(D, w.lower(), s)
                if c and s != c:
                    new = replace_token(new, i, c)
            if new != o[pf]:
                changed.append((L, uid, p, pf, o[pf], new))
                if apply:
                    o[pf] = new
        else:
            # not aligned: rewrite a token only if it differs from the listed spelling of a word of this t by sukun/ZWNJ
            tw = {w.lower() for w in t_tokens(o[tf], False) + t_tokens(o[tf], True)}
            new = o[pf]
            for tok in set(pr_tokens(o[pf])):
                if tok in allcanon:
                    continue
                cand = {a for k in tw if k in D for a in D[k].split(" / ") if SUK.sub("", a) == SUK.sub("", tok)}
                if len(cand) == 1:
                    new = re.sub(r"(?<![^\s(«“\"/])" + re.escape(tok) + r"(?![^\s.,!?؟،؛:;»”\"…)/])", cand.pop(), new)
            if new != o[pf]:
                changed.append((L, uid, p, pf, o[pf], new))
                if apply:
                    o[pf] = new
    if apply:
        touched = {c[0] + c[1] for c in changed}
        for f, u in files.items():
            if os.path.basename(os.path.dirname(f)) + os.path.basename(f)[:-5] in touched:
                with open(f, "w", encoding="utf-8") as fh:
                    json.dump(u, fh, ensure_ascii=False, indent=2)
                    fh.write("\n")
    return changed


def build():
    old = load_dict()
    sp, single = collect()
    first = {}
    for f, u, L, uid, p, o, tf, pf in objects():
        a = align(o, tf, pf)
        for w, x in a or []:
            first.setdefault((w.lower(), x), len(first))
    D = {}
    for w, c in sp.items():
        if re.search(r"[\d_]", w):
            continue
        if w in ALTS:
            D[w] = " / ".join(ALTS[w])
        elif w in OVERRIDES:
            D[w] = OVERRIDES[w]
        elif w in old:
            D[w] = old[w]
        else:
            D[w] = max(c, key=lambda x: (c[x], single[w].get(x, 0), -first.get((w, x), 10 ** 9)))
    for w, v in old.items():          # keep entries whose word is currently unused
        D.setdefault(w, v)
    keep = sorted((w for w in D if w in ALTS or w in old or sum(sp.get(w, {}).values()) >= 2 or len(sp.get(w, {})) > 1),
                  key=lambda w: (w.lower().replace("'", ""), w))
    head = open(DICT_MD, encoding="utf-8").read().split("\n| word | pr |")[0] if os.path.exists(DICT_MD) else "# PR_DICT\n\n"
    with open(DICT_MD, "w", encoding="utf-8") as fh:
        fh.write(head.rstrip("\n") + "\n\n| word | pr |\n|---|---|\n")
        for w in keep:
            fh.write(f"| {w} | {D[w]} |\n")
    print(len(keep), "entries written to", DICT_MD)


def main():
    cmd = sys.argv[1] if len(sys.argv) > 1 else "report"
    if cmd == "report":
        n = int(sys.argv[2]) if len(sys.argv) > 2 else 400
        sp, single = collect()
        rows = [(sum(c.values()), w, c) for w, c in sp.items() if len(c) > 1 and w not in ALTS]
        rows.sort(key=lambda r: -r[0])
        for tot, w, c in rows[:n]:
            print(f"{tot:4d} {w:16s} " + "  ".join(f"{s}×{k}" for s, k in c.most_common()) +
                  (f"   [single: {dict(single[w])}]" if single.get(w) else ""))
        print(len(rows), "inconsistent words")
    elif cmd == "build":
        build()
    elif cmd in ("check", "apply"):
        ch = run(cmd == "apply")
        for L, uid, p, pf, old, new in ch:
            print(f"{L} {uid} {p}.{pf}: {old}\n{' ' * (len(L + uid) + 2)}→ {new}")
        print(len(ch), "pr fields", "changed" if cmd == "apply" else "differ from PR_DICT.md")


if __name__ == "__main__":
    main()
