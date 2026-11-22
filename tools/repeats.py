#!/usr/bin/env python3
"""Find headwords and phrases that a level teaches again although a lower level (or another unit of the same level)
already teaches them. Usage: repeats.py [course] [--near]   (default tr-fa; --near also lists phrases that contain a
lower-level phrase, for review)

Checks, after normalising case and punctuation (Turkish İ/I aware):
  - word headword of level L == word headword or phrase of a lower level        -> "word repeats"
  - phrase of level L == phrase or word headword of a lower level                 -> "phrase repeats"
  - the same headword / phrase twice inside one level                             -> "duplicate in level"
Exit code 1 if anything is found."""
import json, glob, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LEVELS = ["A1", "A2", "B1", "B2", "C1"]


def norm(t):
    t = t.replace("İ", "i").replace("I", "ı").lower()
    t = re.sub(r"[.,!?;:\"“”„«»…]", "", t)
    return re.sub(r"\s+", " ", t).strip()


def collect(course):
    out = []   # (level, unit, kind, id, text, key)
    for lv in LEVELS:
        for f in sorted(glob.glob(os.path.join(ROOT, "content", course, lv, "u*.json"))):
            d = json.load(open(f, encoding="utf-8"))
            for kind in ("words", "phrases"):
                for it in d.get(kind, []):
                    out.append((lv, d["id"], kind, it.get("id", ""), it["t"], norm(it["t"])))
    return out


def main():
    course = sys.argv[1] if len(sys.argv) > 1 else "tr-fa"
    items = collect(course)
    first = {}
    found = 0
    for lv, u, kind, iid, t, key in items:
        if key in first:
            flv, fu, fkind, fid, ft = first[key]
            if flv == lv:
                print(f"duplicate in level  {lv} {u} {kind} {iid} {t!r}  (also {flv} {fu} {fkind} {fid})")
            else:
                print(f"{kind[:-1]} repeats  {lv} {u} {iid} {t!r}  (taught in {flv} {fu} {fkind} {fid})")
            found += 1
        else:
            first[key] = (lv, u, kind, iid, t)
    print(f"{found} repeat(s) in {course}")
    if "--near" in sys.argv:   # review list, not an error: a higher-level phrase that contains a lower-level phrase
        L = LEVELS
        ph = [i for i in items if i[2] == "phrases"]
        for a in ph:
            for b in ph:
                if L.index(b[0]) < L.index(a[0]) and len(b[5].split()) >= 2 and b[5] in a[5]:
                    print(f"near  {a[0]} {a[1]} {a[3]} {a[4]!r}  contains  {b[0]} {b[1]} {b[3]} {b[4]!r}")
    sys.exit(1 if found else 0)


if __name__ == "__main__":
    main()
