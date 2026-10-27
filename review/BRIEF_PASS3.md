# Third review pass (all 16 levels, Oct 2026) — brief

You are a fresh, independent expert checker. Correctness, rigour and CLEAR, CORRECT pronunciation are the top priorities.
Read and follow `review/BRIEF.md` (general rules: what to check, how to edit, what not to change) and the extra rules in
`review/BRIEF_NEW.md` (level fit, exercise `pr` = full correct sentence, `pr` conventions, factual claims, duplicates, `alts`).
Pronunciation conventions: `content/CURRICULUM_NEW_LEVELS.md` (English and Turkish), `content/CURRICULUM_FA_TR.md` (Persian for Turks).

Start with the automatic findings for your level in `review/audit/<course>-<LEVEL>.md` (fix the real ones, ignore false alarms),
then read EVERY item of EVERY unit yourself. Earlier reviewers already passed over this material, so look hard for what they missed:
wrong or misleading pronunciation guides, unnatural or incorrect sentences, translations that drift from the target text,
exercises with a second correct answer or a wrong key, grammar explanations that over-simplify into something false,
reading questions not answerable from the text, inconsistencies between units (a person's age, city, job…).

Extra tasks in this pass:
1. **Headwords taught twice inside your level** (listed in the audit): replace the later occurrence with a new, fitting word
   of the right level (keep the id; new `ex`, `s`, `pr`, `emoji`/""), and make sure the new word is not taught elsewhere in your level.
2. **English A1, A2, B1**: add a `pr` to EVERY object that has a `t` and no `pr` yet (titles, word examples, dialogue lines, grammar
   examples, exercises = full correct sentence, reading sentences, reading questions, sentences), exactly like B2/C1 already have.
   Reuse the spellings already used in your level for the same words, so every word is written the same way everywhere.
3. **Turkish A1**: add `pr` to every dialogue line, sentence, grammar example, word example and reading sentence that lacks one.
   **Turkish B1 and B2**: add `pr` to every phrase (the audit lists them). Same conventions as the rest of the course.
4. American English only (e.g. "vacation" for a trip away; "holiday" only for a public/religious holiday).
5. Never use the name "Neda" (it was replaced by Mina everywhere — keep Mina).

Edit with a Python read-modify-write per file (`json.dump(..., ensure_ascii=False, indent=2)` + newline); only touch your own
level's files; run `python3 tools/validate.py content/<course>/<LEVEL>/*.json` (all OK) and `python3 tools/audit.py` (your level
should show no real findings). Use your own scratch folder under /tmp/claude-0/-home-claude/dab235b4-6945-5e03-866e-119bf3bd9c15/scratchpad/.
Report: `review/<course>-<LEVEL>-pass3.md` (change table: file, path, old → new, reason; then noticed-but-unchanged).
Final message: number of changes per category and the most important fixes.
