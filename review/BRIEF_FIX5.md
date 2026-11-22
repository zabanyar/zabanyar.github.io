# Pass 5 (Nov 2026) — fix everything the pass-4 critics found

Ehsan asked: "fix all the problems you found". Pass 4 left ranked issues and improvement ideas in `review/critic/<course>-<LEVEL>.md`
(and `review/critic/app-ux.md` for the app, which the lead fixes). Your job is to carry them out in the unit JSON of your slice.

Read first: `content/SCHEMA.md` (incl. the new **Additions (pass 5)** section), `review/BRIEF_CRITIC.md` (rules for clear-cut
quality: natural target language, correct translations, one correct choice option, complete `answer`/`alts` lists, `pr` conventions,
pictures that really show the word, American English, Persian ی/ک and ZWNJ, no "Neda", no digits/symbols in spoken German/Turkish/
Persian text), the curriculum file of your course, and the pass-4 report(s) of your slice.

Edit JSON with Python (json.load → change → json.dump(obj, f, ensure_ascii=False, indent=2) + "\n"). Keep ids and the overall
structure; you may add items. After every batch of edits run `python3 tools/validate.py <files>` (must print OK) and at the end
`python3 tools/audit.py` (only known false alarms may remain). Keep headwords unique within a level and do not re-teach a headword or
phrase that an earlier level of the same course already teaches (check with a script). Work in `/home/claude/zabanyar` (all courses
except `de-fsp`, which is in `/home/claude/lernpfad`). Only edit files of your slice.

## What to do

1. **Every remaining issue and improvement idea in your report(s)** that can be done in content: do it. Skip only what needs the app
   (the lead does app work) or what the course-wide pass already did. If you decide against an item, give the reason.
2. **Production practice (all levels).** In each grammar point of the theme units, replace 2 of its 8 exercises (pick the most
   repetitive ones, keep the count) with:
   - one **rewrite** `type` item: `cue` = a complete target-language sentence, `task` = a short instruction in the support language
     ("Make it negative.", «با Never شروع کنید.»), `t` = the rewritten sentence with one gap `___` (may cover several words),
     `answer` = every correct variant (contractions, ae/oe/ue/ss for German, both orders where free);
   - one **function** `choice` item: `cue` = what someone says or a situation sentence in the target language, `task` = e.g. "Which
     reply fits?" / "Which sentence is correct?" in the support language, `t` = `___`, `options` = 3 whole sentences, exactly one fits.
   Grammar units (`kind: "grammar"`): add 2 such items per topic instead (max 16 exercises).
   Where the level uses `pr`, give the cue a `cpr` too and the item a `pr` as usual. Keep A1 items short and easy.
3. **`why` for grammar exercises.** Give every `choice` and `type` grammar exercise of your slice a `why`: one short sentence in the
   support language that states the rule behind the answer ("After *he/she/it* the verb takes -s." / «بعد از he/she/it فعل s می‌گیرد.»).
   It is shown after a wrong answer, so it must be correct and specific to that item.
4. **Inference questions (A2–C1).** Add 1 question to every reading at A2 and 1–2 at B1–C1 whose answer follows clearly from the text
   but is not written there word for word (why someone did something, how they feel, what will probably happen). Exactly one option
   must be defensible. Keep the question style of the level (target language, `s` translation, `pr` where used).
5. **Symbolic pictures (all levels).** Mark `"sym": true` on every word/phrase whose emoji is only a symbol (brave 🦁, idea 💡 for
   "creative", 🎁 for generous). Keep literal pictures unmarked. Replace an emoji that misleads even as a symbol, or set it to "".
6. **Recycling.** In every new item you write, reuse words taught earlier in the same level where it sounds natural.
7. **Report.** Append a section `## 5. Pass 5 (Nov 2026)` to each of your reports: a table of what you did per issue (done / not done
   + reason) and counts (production items, `why`s, inference questions, `sym` marks, other fixes).

Final message: counts per category, anything you could not do, and anything the lead must do in the app.
