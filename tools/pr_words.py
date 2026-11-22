#!/usr/bin/env python3
"""Pronunciation-guide consistency for a course whose `pr` is a word-by-word transcription (tr-fa, en-fa).
For every item with `t` and `pr` (and `cue`/`cpr`) whose word counts match, pair the words and collect, per target word,
every `pr` spelling used. Prints the words that have more than one spelling, most frequent first.

Usage: pr_words.py [course] [--all] [--json out.json]
  --all   print every word (with its spellings), not only the inconsistent ones"""
import json, glob, os, re, sys, collections

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LEVELS = ["A1", "A2", "B1", "B2", "C1"]
TPUNCT = r"[.,!?;:\"“”„«»…()—–]"
PPUNCT = r"[.,!?;:\"“”„«»…()—–،؛؟]"


def tnorm(w):
    w = re.sub(TPUNCT, "", w)
    return w.replace("İ", "i").replace("I", "ı").lower().replace("’", "'")


def pnorm(w):
    return re.sub(PPUNCT, "", w)


def pairs_of(obj):
    """yield (t, pr) pairs from any nested object"""
    if isinstance(obj, dict):
        if isinstance(obj.get("t"), str) and isinstance(obj.get("pr"), str):
            yield obj["t"], obj["pr"]
        if isinstance(obj.get("cue"), str) and isinstance(obj.get("cpr"), str):
            yield obj["cue"], obj["cpr"]
        for v in obj.values():
            yield from pairs_of(v)
    elif isinstance(obj, list):
        for v in obj:
            yield from pairs_of(v)


def collect(course):
    seen = collections.defaultdict(collections.Counter)   # word -> Counter(pr)
    where = collections.defaultdict(list)                 # (word, pr) -> [level/unit]
    skipped = 0
    for lv in LEVELS:
        for f in sorted(glob.glob(os.path.join(ROOT, "content", course, lv, "u*.json"))):
            d = json.load(open(f, encoding="utf-8"))
            for t, pr in pairs_of(d):
                if "___" in t or "___" in pr:
                    continue
                tw = [w for w in (tnorm(x) for x in re.split(r"[\s/]+", t)) if w and w not in ("-",)]
                pw = [w for w in (pnorm(x) for x in re.split(r"[\s/]+", pr)) if w and w not in ("-",)]
                if len(tw) != len(pw):
                    skipped += 1
                    continue
                for a, b in zip(tw, pw):
                    seen[a][b] += 1
                    if len(where[(a, b)]) < 6:
                        where[(a, b)].append(f"{lv}/{d['id']}")
    return seen, where, skipped


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    course = args[0] if args else "tr-fa"
    seen, where, skipped = collect(course)
    rows = sorted(seen.items(), key=lambda kv: -sum(kv[1].values()))
    bad = 0
    for w, c in rows:
        if len(c) > 1 or "--all" in sys.argv:
            bad += len(c) > 1
            print(f"{w}: " + " | ".join(f"{p} ×{n} ({', '.join(where[(w, p)])})" for p, n in c.most_common()))
    print(f"# {bad} word(s) with more than one spelling; {len(seen)} words; {skipped} items skipped (word counts differ)")
    if "--json" in sys.argv:
        out = sys.argv[sys.argv.index("--json") + 1]
        json.dump({w: dict(c) for w, c in seen.items()}, open(out, "w", encoding="utf-8"), ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main()
