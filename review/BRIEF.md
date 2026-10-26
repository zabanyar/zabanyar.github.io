# Zabanyar content review — brief for each reviewer

Zabanyar is a free family language-learning website for an Iranian family (adults, mixed ages, some live in Iran).
Lesson content lives in JSON files `content/<course>/<level>/uNN.json` in /home/claude/zabanyar.
Read `content/SCHEMA.md` first (field meanings) and the curriculum file for your course
(`content/CURRICULUM.md`, `CURRICULUM_DE_B2_C1.md`, `CURRICULUM_FA_TR.md`, `CURRICULUM_EN_A2_B1_TR_B1_B2.md`).

Courses: `en-fa` = learn English, explained in Persian. `de-en` = learn German, explained in English.
`tr-fa` = learn Turkish, explained in Persian. `fa-tr` = learn Persian (total beginners), explained in Turkish.
Fields: `t` = target-language text (a voice reads it aloud), `s` = support-language translation/explanation,
`pr` = pronunciation guide (Persian script for en-fa / tr-fa; Latin transliteration for Turkish readers in fa-tr, with the
scheme in CURRICULUM_FA_TR.md; de-en rarely has it). Grammar has `explain`, `table`, `examples`, `exercises`
(`choice` with `options` + `answer` index, `type` with list of accepted `answer`s, `order` with words to arrange).
`reading` has `text` sentences and `questions` with options + answer index.

## Your job: a careful expert proofread of YOUR level only. Fix every real error directly in the files.
Check EVERYTHING, item by item — do not sample:
1. **Pronunciation guides (`pr`) — top priority.** Each must match how the word/sentence is actually pronounced by a native
   speaker (standard American English for en-fa; standard Istanbul Turkish for tr-fa; standard Tehran Persian for fa-tr),
   written so a reader of the support language would say it right. Watch for: spelling-based instead of sound-based guides
   (English silent letters, "th", schwa, -ed endings /t/ /d/ /ɪd/, -s endings, stress-reduced vowels; Turkish ğ, ı, ö, ü, â,
   long vowels in loanwords; Persian short vowels (unwritten!) — wrong a/e/o is the most likely error, ezafe -e/-ye,
   و read as o/u/v, ی as i/y, silent final ه (=e), stress-neutral), mismatch between `pr` and `t` (guide for a different word or
   an outdated version of the sentence), missing words in sentence guides, inconsistent conventions between units.
   For Persian-script guides of English/Turkish use diacritics (َ ِ ُ) where they prevent misreading, consistently.
2. **Target language correct and natural** (spelling, grammar, punctuation, register, CEFR level fit). Persian `t`: proper ZWNJ
   half-spaces (می‌خواهم، کتاب‌ها), Persian ی/ک never Arabic ي/ك. Turkish: correct ç ğ ı İ ö ş ü, apostrophes for proper-noun suffixes.
   German: correct capitalisation, cases, Rechtschreibung (ss/ß), separable verbs. English: American spelling.
3. **Translations `s` / explanations** correct, natural, and matching the CURRENT `t` (Persian with ZWNJ and ی/ک; Turkish orthography).
   Grammar explanations must be factually right (no wrong rules, wrong table forms, wrong examples).
4. **Exercises**: `choice` has exactly one correct option and `answer` points to it (other options must really be wrong, not
   also acceptable); `type` lists ALL reasonable correct answers (contractions, capitalisation is normalised anyway); `order`
   words form exactly the intended sentence and no other equally correct order is plausible; gap `___` positions make sense;
   reading questions are answerable from the text and the marked answer is correct. Dialogue speakers/lines consistent.
5. Emoji: must picture the word ("" if none fits). Wrong/misleading emoji → fix or set "".
6. Anything a voice would read badly in `t` (stray symbols, "/", "=", abbreviations) — just LIST these in your report;
   they are handled centrally, do not rewrite for that alone.

Do NOT: restructure units, add/remove items, change ids, change style choices that are fine, or "improve" correct text
for taste. Only fix real errors (and clearly unnatural/misleading text). Keep names family-friendly as is.

## How to edit
Edit with a short Python read-modify-write per file: `json.load` → change → `json.dump(obj, f, ensure_ascii=False, indent=2)`
plus a trailing newline. Never retype a whole file. After your edits run
`python3 tools/validate.py content/<course>/<level>/*.json` (must print OK for every file).
Only touch files of your own course/level (other reviewers work on the other levels at the same time).

## Report
Write `review/<course>-<level>.md`: a table of every change (file, JSON path, old → new, reason), then a short list of
things you noticed but did not change (with reason), then the TTS-risky texts (item 6). Your final message: number of
changes per category (pr / target text / translation / grammar explanation / exercises / emoji) and the 5 most important fixes.
