# Zabanyar — brief for unit authors (new levels, Oct 2026)

You write lesson units for Zabanyar, a free family language-learning website (Iranian family, adults). Correctness,
rigour and pronunciation are the top priorities: every sentence must be correct, natural and at the right CEFR level,
every translation exact, every exercise answer unambiguous, every grammar explanation factually right.

Read first (in /home/claude/zabanyar):
1. `content/SCHEMA.md` — the JSON format (fields, sizes for A1; level sizes are in the next file).
2. `content/CURRICULUM_NEW_LEVELS.md` — your level's unit table, sizes, and the pronunciation-guide (`pr`) conventions.
3. The neighbouring curricula, so you neither repeat nor skip material: `content/CURRICULUM.md` (A1),
   `content/CURRICULUM_EN_A2_B1_TR_B1_B2.md`, `content/CURRICULUM_DE_B2_C1.md`.
4. Two finished units as format models (copy their structure exactly, including how grammar tables, exercises,
   dialogue speakers and reading questions are written): see your task message.

Write each unit with a Python script that builds the dict and `json.dump(obj, f, ensure_ascii=False, indent=2)` + newline.
Then run `python3 tools/validate.py content/<course>/<LEVEL>/uNN.json` — every file must print OK; fix until it does.
Self-check every unit before finishing: re-read each `t` / `s` / `pr` triple, each exercise and its answer, each reading
question against the text. Only write your own files (another author writes the other five units of the level at the same
time — use the unit table to stay on your themes, and avoid using the same headwords as the other units of the level).

Persian text: Iranian Persian, proper ZWNJ half-spaces (می‌خواهم، کتاب‌ها، خانه‌ام), Persian ی/ک (never ي/ك).
Turkish text: correct ç ğ ı İ ö ş ü, TDK spelling (apostrophes only for proper nouns; months lowercase mid-sentence unless a
specific date). German: correct Rechtschreibung, ß/ss, capitalisation, cases. English: American spelling.

Final message: list of files written and, for each unit, one line with the theme and any doubt you could not resolve.
