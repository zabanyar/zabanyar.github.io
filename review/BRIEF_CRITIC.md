# Critical review (pass 4, Nov 2026) — brief for critics

You are a demanding, independent critic of a free family language-learning website (Zabanyar; its German course is also used on the
sister site Lernpfad). Adult learners: an Iranian family (Persian speakers; some know Turkish or English). Earlier passes fixed many
errors, so do not assume the content is right, but do not change correct content for taste either. Your job has two parts:

**A. Fix clear-cut problems directly in the unit JSON files of your slice** (edit with Python: json.load → change → json.dump(obj, f,
ensure_ascii=False, indent=2) + newline). Clear-cut means one of:
- wrong or unnatural target-language sentence (grammar, spelling, word choice, register), wrong translation (`s`), wrong or misleading
  grammar explanation/table, wrong reading-question answer, a `choice` item where another option is also correct, a `type` item whose
  `answer` list misses a correct answer (incl. ae/oe/ue/ss spellings for German, common variants), `order` alts that miss a correct
  order or include a wrong one, a `pr` pronunciation guide that is wrong or inconsistent with the conventions (see
  `content/CURRICULUM_NEW_LEVELS.md` and `claude`-era review briefs in `review/BRIEF_PASS3.md`), an emoji/picture that does not show the
  word (pictures are used in "Which picture is it?" questions — a misleading picture is a real error; use "" if no emoji fits),
  an item clearly above or below the level, a name "Neda" (never allowed), British spelling in English (American English is required),
  Arabic ي/ك in Persian, missing ZWNJ, text the voice reads containing symbols/digits (German/Turkish/Persian) that would be read badly.
- Keep ids, structure and sizes; do not rewrite whole units; keep headwords unique within the level (check other units of your level).
- After editing run `python3 tools/validate.py <files>` (must print OK) and `python3 tools/audit.py` (only known false alarms may remain:
  adjective + noun German headwords, pr word-count drift on slash titles, "holiday"/"flat tire").

**B. Write a critical report** `review/critic/<course>-<LEVEL>.md` (create the folder if needed) with:
1. Verdict: 3–5 sentences on the overall quality of this level for its learners.
2. Fixed: a table of every change (unit, path, before → after, reason). Be complete.
3. Remaining issues you did not fix because they need a decision or bigger work (ranked: high / medium / low), each with a concrete
   suggestion.
4. Improvement ideas for this level (pedagogy, progression from the previous level, vocabulary recycling, variety and difficulty of
   exercises, dialogue and reading quality, cultural fit for an Iranian family, explanation clarity) — concrete and prioritised.

Read first: `content/SCHEMA.md`, the curriculum file for your course/level (`content/CURRICULUM*.md`), and the previous review of your
slice in `review/` (e.g. `review/<course>-<LEVEL>-pass3.md`) so you do not undo deliberate decisions. Check every single item of every
unit in your slice: words (t, s, pr, pl, ex, emoji), phrases, dialogue, grammar (title, explain, table, examples, exercises), reading
(text, questions), sentences, goals, titles.

Only edit files in your slice. Final message: number of fixes by category, the 5 most important remaining issues, and the report path.
