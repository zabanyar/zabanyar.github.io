#!/usr/bin/env python3
"""Automatic content audit for all units. Writes review/audit/<course>-<LEVEL>.md and prints a summary.
Checks: exercise structure and answers, alternative orders, reading questions, dialogue speakers, pronunciation-guide
presence / script / gaps / word-count drift, duplicate headwords, Persian ي/ك and spacing, British spellings (en),
German noun articles, Turkish suffix apostrophes on common nouns, emoji, and leftover symbols in the text the voice reads."""
import json, glob, os, re, sys, collections
sys.path.insert(0, os.path.dirname(__file__))
import build  # speakable()

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "review", "audit")
os.makedirs(OUT, exist_ok=True)
TARGET = {"en-fa": "en", "de-en": "de", "tr-fa": "tr", "fa-tr": "fa"}
PERSIAN = re.compile(r"[؀-ۿ]")
LATIN = re.compile(r"[A-Za-zÇĞİÖŞÜçğıöşü]")
BRIT = re.compile(r"\b(?!analys)(colour|favour|honour|neighbour|behaviour|labour|centre|theatre|metre|litre|organis|realis|recognis|apologis|travelling|travelled|cancelled|programme|cheque|grey|mum|flat\b|lorry|holiday(?!s? (season|card))|queue|whilst|amongst|learnt|spelt|dreamt|towards|practise|licence|defence|offence|catalogue|dialogue|tyre|jewellery|aluminium)", re.I)
words_re = lambda s: re.findall(r"[\wçğıöşüâîûÇĞİÖŞÜ'’-]+", s)


def items(u):
    """yield (path, obj) for every object with a `t`"""
    def walk(o, p):
        if isinstance(o, dict):
            if isinstance(o.get("t"), str):
                yield p, o
            for k, v in o.items():
                yield from walk(v, f"{p}.{k}" if p else k)
        elif isinstance(o, list):
            for i, v in enumerate(o):
                yield from walk(v, f"{p}[{i}]")
    yield from walk(u, "")


def audit_unit(course, level, f, u, F, seen_words):
    lang = TARGET[course]
    uid = os.path.basename(f)[:-5]
    add = lambda kind, path, msg: F.append((uid, kind, path, msg))
    # ---- exercises ----
    for gi, g in enumerate(u.get("grammar", [])):
        for xi, x in enumerate(g.get("exercises", [])):
            p = f"grammar[{gi}].exercises[{xi}]"
            t = x.get("t", "")
            if x["type"] in ("choice", "type") and t.count("___") != 1:
                add("exercise", p, f"gap count {t.count('___')} in {t!r}")
            if x["type"] == "choice":
                o = x.get("options", [])
                if len(set(o)) != len(o): add("exercise", p, f"duplicate options {o}")
                if not (0 <= x.get("answer", -1) < len(o)): add("exercise", p, "answer index out of range")
                if len(o) < 2: add("exercise", p, "fewer than 2 options")
            if x["type"] == "type":
                a = x.get("answer", [])
                if not a or any(not s.strip() for s in a): add("exercise", p, "empty type answer")
                if any("___" in s for s in a): add("exercise", p, "answer contains ___")
            if x["type"] == "order":
                n = len(t.split())
                if n > 10: add("exercise", p, f"order sentence has {n} words")
                low = (lambda w: w.replace("İ", "i").replace("I", "ı").lower()) if lang == "tr" else str.lower
                norm = lambda z: sorted(low(re.sub(r"[.,!?;:\"“”„«»'’؟،؛]", "", w)) for w in z.split())
                for alt in x.get("alts", []):
                    if norm(alt) != norm(t):
                        add("exercise", p, f"alt uses other words: {alt!r}")
            if isinstance(x.get("pr"), str) and "___" in x["pr"]:
                add("pr", p, "exercise pr still contains ___")
    # ---- reading ----
    r = u.get("reading")
    if r:
        for qi, q in enumerate(r.get("questions", [])):
            o = q.get("options", [])
            if len(set(o)) != len(o): add("reading", f"reading.questions[{qi}]", f"duplicate options {o}")
            if not (0 <= q.get("answer", -1) < len(o)): add("reading", f"reading.questions[{qi}]", "answer out of range")
    # ---- dialogue ----
    d = u.get("dialogue")
    if d:
        sp = set(d.get("speakers", {}))
        for li, l in enumerate(d.get("lines", [])):
            if l.get("sp") not in sp: add("dialogue", f"dialogue.lines[{li}]", f"unknown speaker {l.get('sp')}")
        voices = [s.get("voice") for s in d.get("speakers", {}).values()]
        if len(set(voices)) < 2: add("dialogue", "dialogue.speakers", f"both speakers use voice {voices}")
    # ---- words ----
    for wi, w in enumerate(u.get("words", [])):
        key = w["t"].lower().strip()
        if key in seen_words: add("duplicate", f"words[{wi}]", f"headword {w['t']!r} also in {seen_words[key]}")
        else: seen_words[key] = f"{level}.{uid}"
        if lang == "de":
            first = w["t"].split()[0] if w["t"].split() else ""
            if first in ("der", "die", "das") and len(w["t"].split()) > 1 and not w["t"].split()[1][:1].isupper():
                add("german", f"words[{wi}]", f"noun after article not capitalised: {w['t']!r}")
    # ---- every text item ----
    for p, o in items(u):
        t, s, pr = o["t"], o.get("s"), o.get("pr")
        if "  " in t or t != t.strip(): add("spacing", p, f"extra spaces in t {t!r}")
        if isinstance(s, str) and re.search(r"[يك]", s): add("persian", p, f"Arabic ي/ك in s: {s[:60]!r}")
        if lang == "fa" and re.search(r"[يك]", t): add("persian", p, f"Arabic ي/ك in t: {t[:60]!r}")
        if lang == "en" and BRIT.search(t): add("spelling", p, f"British spelling? {BRIT.search(t).group(0)!r} in {t[:70]!r}")
        if lang in ("en", "tr", "fa") and course != "de-en":
            if pr is None:
                if p.startswith(("words", "phrases")) and not p.endswith(".ex"):
                    add("pr", p, f"missing pr for {t[:60]!r}")
            elif isinstance(pr, str):
                if course in ("en-fa", "tr-fa") and LATIN.search(pr): add("pr", p, f"Latin letters in pr {pr[:60]!r}")
                if course == "fa-tr" and PERSIAN.search(pr): add("pr", p, f"Persian letters in pr {pr[:60]!r}")
                if "___" in pr and "___" not in t: add("pr", p, "pr has ___ but t has none")
                tw, pw = len(words_re(t.replace("___", "x"))), len(pr.replace("‌", "").split())
                if tw >= 3 and "___" not in t and abs(tw - pw) > max(2, tw // 4): add("pr", p, f"word count t={tw} pr={pw}: {t[:50]!r} / {pr[:50]!r}")
        # voice input
        if o.get("a") is not None or p.endswith(("title", ".q")) or True:
            sp = build.speakable(t.replace("___", "…"), lang)
            if re.search(r"[=/→·\[\]{}<>*#@&%|\\]", sp): add("voice", p, f"symbol left in spoken text {sp[:70]!r}")
            if lang != "en" and re.search(r"\d", sp): add("voice", p, f"digit left in spoken text {sp[:70]!r}")
    # emoji
    for p, o in items(u):
        e = o.get("emoji")
        if e and not build.emoji_img(e): add("emoji", p, f"no picture for emoji {e}")


def main():
    total = collections.Counter()
    for course in TARGET:
        for level in build.LEVELS:
            files = sorted(glob.glob(os.path.join(ROOT, "content", course, level, "u*.json")))
            if not files: continue
            F, seen = [], {}
            for f in files:
                audit_unit(course, level, f, json.load(open(f, encoding="utf-8")), F, seen)
            c = collections.Counter(k for _, k, _, _ in F)
            total.update(c)
            with open(os.path.join(OUT, f"{course}-{level}.md"), "w", encoding="utf-8") as fh:
                fh.write(f"# Automatic audit: {course} {level}\n\n{dict(c) or 'no findings'}\n\n")
                for uid, k, p, m in F:
                    fh.write(f"- {uid} `{p}` [{k}] {m}\n")
            print(f"{course} {level}: {dict(c)}")
    print("TOTAL", dict(total))


if __name__ == "__main__":
    main()
