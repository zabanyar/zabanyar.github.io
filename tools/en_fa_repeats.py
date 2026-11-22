#!/usr/bin/env python3
"""Find en-fa headwords (words[].t) and phrases (phrases[].t) that a higher level teaches again although a lower
level already teaches them. Normalizes case, leading articles/"to", punctuation and ellipses.
Usage: python3 tools/en_fa_repeats.py [--fuzzy]   (--fuzzy also lists near matches: plural -s, sb/sth, one's)"""
import json, glob, os, re, sys
ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "content", "en-fa")
LEVELS = ["A1", "A2", "B1", "B2", "C1"]
# deliberate: same spelling, different word (checked in pass 5)
ALLOW = {("A2", "cold"): "a cold = illness (A1 cold = adjective)",
         ("B1", "book"): "book = reserve, verb (A1 book = noun)"}

def norm(t):
    t = t.lower().replace("’", "'").replace("…", " ").replace("...", " ")
    t = re.sub(r"\([^)]*\)", " ", t)
    t = re.sub(r"[.,!?;:\"“”/]", " ", t)
    t = re.sub(r"^\s*(a|an|the|to)\s+", "", t)
    return re.sub(r"\s+", " ", t).strip()

def fuzzy(t):
    t = norm(t)
    t = re.sub(r"\b(sb|sth|someone|something|one's|your|my)\b", " ", t)
    t = " ".join(w[:-1] if len(w) > 3 and w.endswith("s") and not w.endswith("ss") else w for w in t.split())
    return re.sub(r"\s+", " ", t).strip()

def entries():
    for L in LEVELS:
        for f in sorted(glob.glob(f"{ROOT}/{L}/u*.json")):
            u = json.load(open(f, encoding="utf-8"))
            for kind in ("words", "phrases"):
                for i, w in enumerate(u.get(kind, [])):
                    yield L, os.path.basename(f)[:-5], kind, i, w["t"]

def main():
    fz = "--fuzzy" in sys.argv
    seen, seenf, n = {}, {}, 0
    for L, u, kind, i, t in entries():
        k, kf = norm(t), fuzzy(t)
        if k in seen and seen[k][0] != L and (L, k) not in ALLOW:
            print(f"REPEAT {L} {u} {kind}[{i}] {t!r}  <- {seen[k][0]} {seen[k][1]} {seen[k][2]!r}"); n += 1
        elif fz and kf in seenf and seenf[kf][0] != L and k not in seen:
            print(f"near   {L} {u} {kind}[{i}] {t!r}  ~ {seenf[kf][0]} {seenf[kf][1]} {seenf[kf][2]!r}")
        seen.setdefault(k, (L, u, t)); seenf.setdefault(kf, (L, u, t))
    print(f"{n} cross-level repeats")

if __name__ == "__main__":
    main()
