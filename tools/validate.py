#!/usr/bin/env python3
"""Validate Zabanyar unit JSON files against SCHEMA.md rules. Usage: validate.py file.json [...]"""
import json, sys, re, unicodedata

def err(errs, path, msg):
    errs.append(f"{path}: {msg}")

def need_ts(errs, obj, path, need_s=True):
    if not isinstance(obj, dict):
        err(errs, path, "must be an object with t/s"); return
    if not isinstance(obj.get("t"), str) or not obj["t"].strip():
        err(errs, path + ".t", "missing/empty")
    if need_s and (not isinstance(obj.get("s"), str) or not obj["s"].strip()):
        err(errs, path + ".s", "missing/empty")

def check_emoji(errs, e, path):
    if e is None:
        err(errs, path, "emoji missing (use \"\" if none)"); return
    if e == "":
        return
    if "‍" in e:
        err(errs, path, f"ZWJ sequence not allowed: {e}")
    for ch in e:
        if 0x1F3FB <= ord(ch) <= 0x1F3FF:
            err(errs, path, f"skin tone modifier not allowed: {e}")
        if 0x1F1E6 <= ord(ch) <= 0x1F1FF:
            err(errs, path, f"flags not allowed: {e}")
    base = [c for c in e if c not in "️︎"]
    if len(base) != 1:
        err(errs, path, f"must be ONE emoji, got {e!r}")

def validate(fn):
    errs = []
    try:
        d = json.load(open(fn, encoding="utf-8"))
    except Exception as ex:
        return [f"{fn}: invalid JSON: {ex}"]
    uid = d.get("id", "")
    if not re.fullmatch(r"u\d\d", uid or ""):
        err(errs, "id", "must be uNN")
    check_emoji(errs, d.get("emoji"), "emoji")
    need_ts(errs, d.get("title"), "title")
    if not isinstance(d.get("goals"), list) or not (2 <= len(d["goals"]) <= 5):
        err(errs, "goals", "2–4 goals required")
    if uid == "u00":
        L = d.get("letters", [])
        if len(L) < 20:
            err(errs, "letters", "u00 needs the full alphabet")
        for i, l in enumerate(L):
            if not l.get("t"): err(errs, f"letters[{i}].t", "missing")
            if "ex" in l:
                need_ts(errs, l["ex"], f"letters[{i}].ex")
                check_emoji(errs, l["ex"].get("emoji"), f"letters[{i}].ex.emoji")
    W = d.get("words", [])
    lo = 6 if uid == "u00" else 10
    if not (lo <= len(W) <= 16):
        err(errs, "words", f"need {lo}–14 words, got {len(W)}")
    ids = set()
    for i, w in enumerate(W):
        p = f"words[{i}]"
        need_ts(errs, w, p)
        if w.get("id") in ids: err(errs, p + ".id", "duplicate")
        ids.add(w.get("id"))
        check_emoji(errs, w.get("emoji"), p + ".emoji")
        if "ex" in w: need_ts(errs, w["ex"], p + ".ex")
        else: err(errs, p + ".ex", "example sentence missing")
    for i, ph in enumerate(d.get("phrases", [])):
        need_ts(errs, ph, f"phrases[{i}]")
    if uid != "u00" and len(d.get("phrases", [])) < 4:
        err(errs, "phrases", "need 4–8")
    dl = d.get("dialogue")
    if uid != "u00" or dl:
        if not dl: err(errs, "dialogue", "missing")
        else:
            need_ts(errs, dl.get("title"), "dialogue.title")
            sp = dl.get("speakers", {})
            if set(sp) != {"A", "B"}: err(errs, "dialogue.speakers", "need A and B")
            for k, v in sp.items():
                if v.get("voice") not in ("f", "m"): err(errs, f"dialogue.speakers.{k}.voice", "f or m")
            lines = dl.get("lines", [])
            if not (5 <= len(lines) <= 12): err(errs, "dialogue.lines", f"6–10 lines, got {len(lines)}")
            for i, l in enumerate(lines):
                need_ts(errs, l, f"dialogue.lines[{i}]")
                if l.get("sp") not in ("A", "B"): err(errs, f"dialogue.lines[{i}].sp", "A or B")
    G = d.get("grammar", [])
    if uid != "u00" and not (1 <= len(G) <= 3):
        err(errs, "grammar", "1–2 grammar points")
    for gi, g in enumerate(G):
        p = f"grammar[{gi}]"
        need_ts(errs, g.get("title"), p + ".title")
        if not isinstance(g.get("explain"), str) or len(g["explain"]) < 30:
            err(errs, p + ".explain", "too short")
        for i, ex in enumerate(g.get("examples", [])): need_ts(errs, ex, f"{p}.examples[{i}]")
        X = g.get("exercises", [])
        if len(X) < 4: err(errs, p + ".exercises", "need 5–8")
        for i, x in enumerate(X):
            q = f"{p}.exercises[{i}]"
            ty = x.get("type")
            need_ts(errs, x, q)
            if ty == "choice":
                o = x.get("options", [])
                if len(o) < 2: err(errs, q, "options < 2")
                a = x.get("answer")
                if not isinstance(a, int) or not (0 <= a < len(o)): err(errs, q, "bad answer index")
                if len(set(o)) != len(o): err(errs, q, "duplicate options")
                if "___" not in x.get("t", ""): err(errs, q, "choice needs ___ gap")
            elif ty == "type":
                if not isinstance(x.get("answer"), list) or not x["answer"]: err(errs, q, "answer must be non-empty list")
                if "___" not in x.get("t", ""): err(errs, q, "type needs ___ gap")
            elif ty == "order":
                n = len(x.get("t", "").split())
                if not (2 <= n <= 9): err(errs, q, f"order sentence should be 3–7 words, got {n}")
            else:
                err(errs, q, f"unknown type {ty}")
    r = d.get("reading")
    if uid != "u00" or r:
        if not r: err(errs, "reading", "missing")
        else:
            need_ts(errs, r.get("title"), "reading.title")
            T = r.get("text", [])
            if len(T) < 4: err(errs, "reading.text", "need 5–9 sentences")
            for i, s in enumerate(T): need_ts(errs, s, f"reading.text[{i}]")
            for i, q in enumerate(r.get("questions", [])):
                need_ts(errs, q.get("q"), f"reading.questions[{i}].q")
                o = q.get("options", [])
                a = q.get("answer")
                if not isinstance(a, int) or not (0 <= a < len(o)): err(errs, f"reading.questions[{i}]", "bad answer")
            if len(r.get("questions", [])) < 2: err(errs, "reading.questions", "need 3–4")
    S = d.get("sentences", [])
    if uid != "u00" and len(S) < 5: err(errs, "sentences", "need 6–8")
    for i, s in enumerate(S): need_ts(errs, s, f"sentences[{i}]")
    # Persian ZWNJ heuristics
    txt = json.dumps(d, ensure_ascii=False)
    for bad in re.findall(r"(?<![\w‌])(می|نمی) (?=[؀-ۿ])", txt):
        err(errs, "persian", "use ZWNJ after می/نمی (e.g. می‌خواهم), found a plain space"); break
    return [f"{fn}: {e}" for e in errs]

if __name__ == "__main__":
    allerr = []
    for fn in sys.argv[1:]:
        e = validate(fn)
        allerr += e
        print(("OK   " if not e else "FAIL ") + fn)
    for e in allerr:
        print("  " + e)
    sys.exit(1 if allerr else 0)
