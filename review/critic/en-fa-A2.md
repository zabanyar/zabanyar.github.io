# Critic review (pass 4): en-fa A2 (u01–u10)

Scope: every item of all 10 units: titles, goals, words (t, pl, s, pr, emoji, ex), phrases, dialogue, both grammar points
(title, explain, table, examples, exercises), reading (text, questions) and sentences. I read the earlier reviews first
(`review/en-fa-A2.md`, `review/en-fa-A2-pass3.md`), so this pass does not undo the deliberate decisions they recorded.
Those include "holiday" as a public holiday, «میْ» for "me", «هَف تو» for "have to", «نو» for "new" and the ezafe style.

Besides reading everything, I ran these automatic checks:

- **Headword duplicates**: within A2, against A1, and against B1–C1.
- **`pr` consistency**: I aligned the words of every `t` with its `pr`, about 1,000 objects. Every English word now has exactly one spelling across the level.
- **"the" before vowels**: «ذِ» versus «ذی» is right everywhere.
- **"have to" / "has to"**: always «هَف تو» / «هَس تو».
- **Persian text**: no Arabic ي/ك, no missing ZWNJ, no stray spaces, no "Neda".
- **British spellings**: none left.

After my edits, `tools/validate.py` prints OK for all 10 files. `tools/audit.py` shows only the two known false alarms for A2: "holiday" in u04 g02 X3, and the pr word count on the slash title in u06 g02.

## 1. Verdict

This is a solid, carefully corrected A2 level. The grammar follows the curriculum exactly. The Persian explanations are accurate and pitched well for adults, with useful comparisons to Persian (ماضی نقلی, «فردا می‌روم», bread being uncountable). Exercise keys are almost all unambiguous. The pronunciation guides are now very consistent across the whole level. The cultural fit is good: Nowruz, kuku sabzi, Isfahan's bridges, the Iranian Saturday-to-Wednesday work week and the 20-point grading scale all appear naturally.

The remaining weaknesses are mostly structural, not errors:

- Many reused names give contradictory biographies across units.
- B1 re-teaches 14 A2 headwords.
- Several emoji are pictures of a related thing rather than the word itself.
- The exercises are fairly uniform: mostly 3-option gap fills, with only literal-recall reading questions.

## 2. Fixed

| Unit | Path | Before → After | Reason |
|---|---|---|---|
| u08 | `words[13]` (id w14 kept) | **take a photo** («تِیک اِ فُوتُو», «عکس گرفتن», 📷; ex "Can you take a photo of us, please?") → **laptop** (pl laptops, pr «لَپتاپ», s «لپ‌تاپ», 💻; ex "My laptop is old, but it still works." / «لپ‌تاپم قدیمی است، ولی هنوز کار می‌کند.» / «مای لَپتاپ ایز اُولد، بات ایت سْتیل وِرکس.») | A duplicate headword inside the level: u02 w11 already teaches **take photos** (📸) with the same meaning. The earlier audits missed it because the strings differ. "laptop" fits the theme, is A2, and is not a headword anywhere in en-fa A1–C1. The u08 reading still uses "take photos", which is now recycled from u02. |
| u05 | `grammar[1].exercises[7].alts` | (none) → `["Which car is the most expensive?"]` | The same six tiles make a second fully natural (indeed more common) word order. Without this alt, a correct answer was marked wrong. |
| u09 | `grammar[1].exercises[6].alts` | (none) → `["In our town there wasn't a library."]` | A natural second order made from the same tiles, the same kind as the fronted-adverbial alts pass 3 added ("On Saturday I cleaned the house."). |
| u05 | `grammar[1].explain` | «قبل از صفت عالی **همیشه** the می‌آید.» → «قبل از صفت عالی **معمولاً** the می‌آید (یا یک صفت ملکی مثل **my**: **my best friend**).» | "Always" was false. A possessive replaces "the" (my best friend, our biggest problem), and learners meet "my best friend" constantly. |
| u05 | `words[6].emoji` (comfortable) | 🛋️ → "" | The picture shows a sofa, not "comfortable". In "Which picture is it?" and picture-to-word questions it teaches sofa = comfortable. No standard emoji pictures the adjective (😌 is already used for "relaxing"). |
| u09 | `grammar[0].exercises[4].pr` | …ایت واز **بیوتِفِل**. → …ایت واز **بیوتیفِل**. | The only `pr` spelling in the level that differed from the other four occurrences of "beautiful" (u01, u02, u10). |

Totals: 1 headword replaced, 2 order alts added, 1 grammar explanation corrected, 1 emoji corrected, 1 `pr` made consistent (6 fixes).

## 3. Remaining issues (need a decision or bigger work)

### High

1. **B1 re-teaches 14 A2 headwords**: app, battery, boss, colleague, crowded, download, neighbor, online, part-time, passport, password, relative, sugar, work from home. Most are in B1 u03 and u10. Learners meet them as "new" words twice, and the B1 review queue gets duplicates.
   - *Suggestion:* A2 is the earlier level, so replace them in **B1** with B1-level collocations. For example: password → "two-factor authentication" or "log in"; battery → "run out of battery"; colleague → "coworker relationship"; boss → "manager"; sugar → "sugar-free"; passport → "visa". The B1 critic or central coordination should decide.
2. **Cast continuity across units.** The same names have contradictory biographies:
   - Mina is a doctor ("Dr. Mina") in u03 and a dentist who moves from Shiraz to Tehran in u04. In u10 she is the friend Emma invites to her wedding, and her brother is Ali, but in u04 her brother is Amir.
   - Ali is 45 with an office job in u03, but "the best student in our class" in u05 g02.
   - Emma works with Reza in u01 (Monday at work), lives abroad and visits Iran in u02, is a shop assistant in u07, and marries Jack in u10.
   - Reza is a taxi driver in u04 g01, Emma's colleague in u01, and Maryam's husband in u05 and u07.

   Adults notice this, and the readings feel less like one story.
   - *Suggestion:* Write a one-page cast sheet for the course (fixed jobs, families, cities). Then make about 10 small edits: for example, the u05 "best student" → Amir, the u04 g01 taxi driver → Jack, and the u03 doctor → "Dr. Ahmadi" (a surname also fixes the "Dr. + first name" oddity).
3. **Text the voice reads aloud (TTS) contains symbols.** The details are in the pass 3 list.
   - "/" in about 15 titles and tables.
   - "…" in titles, tables, u03 p03, u05 p07 and u08 dialogue [8].
   - "→" and "+" in the u07 g02 and u10 g02 tables.
   - "vs." and "vs" in the u04 g01 and u10 g02 titles.
   - "June 12th" and "May 20th" in u10.
   - "38 degrees" in u05 g01 X3.
   - "–" as a speaker change inside one item (u07, u08, u09, u10).
   - *Suggestion:* Handle these centrally in the build: strip or replace "/" "…" "→" "+" in titles and tables before TTS. For the "–" items, either split them into two audio parts or remove the dash.

### Medium

4. **Metonymic emoji** (a related object instead of the word):
   - driver 🚕, farmer 🚜, dentist 🦷, bakery 🥖, library 📚, trip 🗺️, fast 🐇, slow 🐢, wallet 👛 (coin purse), invitation 💌 ("love letter")
   - These also share a picture with another word: dentist 🦷 = tooth (u03), work from home 🏠 = stay at home (u01), building 🏢 = office (u04), earn money 💰 = money (u07).

   The app never shows two identical pictures as options (`picPool` in `docs/js/lesson.js`), so nothing breaks. However, the "see picture → choose word" question teaches 🦷 = dentist and 🏠 = work from home, which is shaky.
   - *Suggestion:* For the shared-picture pairs, set the later headword to "" or give it a custom `img`. Keep the conventional ones (🐇/🐢, 🚕, 🚜) unless the team wants a strict rule.
5. **u04 g01 X4** "Emma ___ English at a school. She's a teacher.", key ["teaches"]. "is teaching" is also grammatical (temporary job), and a learner who types it is marked wrong. Adding "is teaching" to the key would weaken the point of the item.
   - *Suggestion:* Add a frequency signal, e.g. "Emma ___ English at a school. She **always** loves her classes." Or turn it into a `choice` where the distractor is clearly wrong ("teach").
6. **u06 reading**: walnuts appear suddenly. The ingredient list (text [3]–[4]) has no walnuts, then text [7] says "We didn't have any walnuts, so my brother went to the store." Q3 depends on this sentence, so it works, but the logic jumps.
   - *Suggestion:* Add "and some walnuts" to text [4] (with `s` and `pr`).

### Low

7. **"Shall I …?"** (u07 g01 explain, table, X2) is correct but sounds formal or British to many Americans, since the course is American English.
   - *Suggestion:* Add one line to the explain: «در انگلیسی آمریکایی بیشتر **Should I …?** یا **Do you want me to …?** می‌گویند.»
8. **Weak forms are not shown.** `pr` always gives strong forms (was «واز», can «کَن», to «تو», for «فُر»), but in connected speech they are /wəz/, /kən/, /tə/, /fər/. This is a course-wide convention.
   - *Suggestion:* Explain it once in u01 g01 ("in fast speech *was* sounds like «وِز»") rather than changing hundreds of guides.
9. **Course-wide `pr` conventions** already noted in earlier passes: «شود» for "should" can be read as Persian *shavad*, and «نو» for "new" as Persian *now*. Change them only at course level, if at all.
10. **Ezafe style** differs by unit: «هٔ» in u01–u05, «ه‌ی» in u06–u10. Both are correct, but unifying them would look more polished.

## 4. Improvement ideas (prioritised)

1. **Recycle more and say so.** A2 reuses A1 vocabulary well, but the grammar barely revisits itself.
   - u08 (present perfect) should contrast explicitly with past simple. The reading already does this ("has made three video calls" / "Yesterday, she sent…"). Add one explain line and two exercises: "Have you ever…? – Yes, I went there last year."
   - u10's will vs going to could add a short review item for present continuous for arrangements (u04). That gives learners all three future forms side by side before B1.
2. **Irregular verbs need a home.** u01 gives six past forms and u08 adds participles (seen, eaten, been, made, bought) in passing. A three-column table (base / past / participle) of about 20 high-frequency verbs in u08, plus two `type` items on participles, would help adults who like to memorise systematically.
3. **More varied exercises.** About 70% are 3-option gap fills, and reading questions are all literal recall. Per unit, consider:
   - one error-correction item ("I didn't went" → "go")
   - one contrast item (should vs have to; too vs very; some vs any in offers)
   - one inference question per reading ("Is Mina happy about the move?")
   - order items that are longer and nearer the 9-word maximum (most are 5–7 words)
4. **Pronunciation teaching, not just guides.** The guides are good, but only u01 (-ed endings) and u03 (have to) explain pronunciation.
   - Add short notes on the -s ending (/s/ /z/ /ɪz/: works, plays, watches) in u04.
   - Add a note on stress in comparatives (more ex-PEN-sive) in u05.
   - Persian speakers' typical problems are /w/ vs /v/, initial clusters (the «اِسْ» epenthesis in "school", "store") and /æ/ vs /ɛ/. Point these out where the words first appear.
5. **Diaspora situations.** Part of the family lives in Germany, yet every situation is in Iran or abstract. One or two dialogues abroad would add realism and motivation: booking a doctor's appointment by phone (u03), a job interview small-talk (u04), returning an item with a receipt (u07, which already has "refund").
6. **Cast sheet**: see remaining issue 2. A stable cast (Maryam & Reza as a couple, Mina the dentist, Emma the English friend who marries Jack) would let readings build on each other across units.
7. **Goal–content check.** u07 goal 4 promises «پس دادن جنس» (returns), but only phrase p08 ("Can I get a refund?") covers it. Add one dialogue or sentences line about returning something, or reword the goal.

## 5. Pass 5 (Nov 2026)

Level tasks of `review/BRIEF_FIX5.md` for A2 (u01–u10). The course-wide pass (cast sheet, cross-level repeats, `pr`
dictionary) was kept. After the edits `tools/validate.py content/en-fa/A2/*.json` prints OK for all 10 files, `tools/audit.py`
shows only the known slash-title `pr` false alarm (the "holiday" alarm is gone because that item was replaced), the repeat
tools report 0, and `tools/en_fa_pr_dict.py check` reports 0 differences.

### Issues and ideas from sections 3 and 4

| # | Item | Status | What was done / reason |
|---|---|---|---|
| 3.1 | B1 re-teaches A2 headwords | not mine | B1 slice; `tools/repeats.py` and `tools/en_fa_repeats.py` now report 0 repeats. |
| 3.2 | Cast continuity | done in 5a + 1 fix | Leftover from the cast pass: u07 reading Q3 option "Maryam paid." → "Sara paid." (Reza's wife is Sara). New items follow CAST.md (e.g. the new u04 rewrite uses Sara, not Jack, because Jack walks to work since u03). |
| 3.3 | Symbols in spoken text | not done | Central build/TTS work (lead). No new "/" "…" "→" "+" added to spoken text except the new u08 g03 table (slashes for was / were, gone / been, like the existing tables). |
| 3.4 | Metonymic emoji, shared pictures | done | `sym` on 41 items (see below), including the shared-picture ones (dentist, work from home, office, earn money, do the shopping, downtown). invitation 💌 → ✉️ (and `sym`). |
| 3.5 | u04 g01 X4 accepts only "teaches" | done | → "Lisa ___ English at a school every day. She's a teacher." (`every day` rules out "is teaching"). |
| 3.6 | Walnuts appear suddenly | done | Reading text[4]: "…some salt, some flour, some walnuts, and a little oil." |
| 3.7 | "Shall I …?" formal / British | done | Note in u07 g01: in American English **Should I …?** / **Do you want me to …?** |
| 3.8 | Weak forms not shown | done (note) | u01 g01: in fast speech *was* is «وِز», strong in short answers. Guides unchanged (course convention). |
| 3.9 | «شود» / «نو» conventions | not done | Course-level convention, unchanged. |
| 3.10 | Ezafe style | done | «ه‌ی» → «هٔ» in all support-language text of u06–u10 (59 replacements), so the level now uses «هٔ» everywhere like A1. |
| 4.1 | Recycle grammar | done | u08 g01: note + function item "Have you ever been to Shiraz? – Yes, I have. I went there last year." (present perfect vs past). u10 g02: function item with all three futures (I'm meeting … / We're going to …). u04 g02 function item contrasts the arrangement with past forms. |
| 4.2 | Irregular verbs need a home | done | New **u08 g03 "Irregular verbs: go, went, gone"**: explanation (regular vs irregular, the three patterns, gone vs been, American *gotten*), 20-verb table (base / past / participle), 5 examples, 8 exercises (participle choice and type items with `hint`, a rewrite and a function item). |
| 4.3 | More varied exercises | done | 42 production items (rewrite, whole-sentence choice incl. error spotting: "should to drink", "don't have go", "opposite of"), 10 inference questions. Longer `order` items not added (counts kept). |
| 4.4 | Pronunciation teaching | done | -s ending (u04 g01), stress in *more expensive* (u05 g01), weak *was* (u01 g01). /w/ vs /v/, s-clusters (school, store) and ship / sheep are now taught in A1 u00 where the words first appear. /æ/ vs /ɛ/ not added: it needs minimal-pair audio to be useful. |
| 4.5 | Diaspora situations | not done | Needs new dialogues (bigger work); suggestion stays. |
| 4.6 | Cast sheet | done in 5a | `content/en-fa/CAST.md`. |
| 4.7 | u07 goal "returns" | done | Sentence "Do you have enough money?" → "I'd like to return this shirt. Here's the receipt." (s, pr). |

### Brief tasks 2–6

- **Production practice:** 42 items: in each of the 20 grammar points 2 of the most repetitive exercises were replaced by one rewrite (`type` with `cue`, `task`) and one function `choice` (counts kept: 7 or 8); the new u08 g03 has its own pair. All have `cpr`, `pr`, `s` and `why`.
- **`why`:** 131 (every `choice` and `type` grammar exercise of A2).
- **Inference questions:** 10, one per reading (u01 where the family was at lunchtime; u02 where Emma would like to stay; u03 why Jack walks to work; u04 why Mina moves; u05 why the Mini suits Grandma; u06 how much kuku was left; u07 how Reza felt about the brown shoes; u08 why the letters were made bigger; u09 how the writer feels about the changes; u10 how Emma feels about the wedding). Exactly one option is defensible in each.
- **`sym`:** 41 marks (weekend, last night, picnic, movie, museum, clean the house, do the shopping, stay at home, fun, vacation, trip, airport, abroad, cough, doctor, job, driver, farmer, dentist, office, earn money, work from home, fast, slow, light, quiet, noisy, dangerous, cut, wallet, website, password, message, charge, library, bakery, downtown, celebrate, party, invitation, wedding).
- **Recycling:** new items reuse A2 words (museum, picnic, medicine, boss, sofa, walnuts, receipt, password, Wi-Fi, bakery, wedding …) and A1 words.

### Counts

| Category | Count |
|---|---|
| Production items (rewrite + function) | 42 |
| `why` | 131 |
| Inference questions | 10 |
| `sym` marks | 41 |
| New grammar point | 1 (u08 g03, 8 exercises, 20-verb table) |
| Explanation notes | 5 (u01 g01, u04 g01, u05 g01, u07 g01, u08 g01) |
| Ezafe unified | 59 replacements in u06–u10 |
| Other fixes | u04 g01 X4 (every day), u04 g02 "holiday" item replaced, u06 reading walnuts, u07 Q3 option Sara, u07 return sentence, invitation emoji ✉️, u08 "used" `pr` = «یوزْد» in the new item |

### For the lead (app)

- Render `cue` (with audio), `task`, `why`; skip `sym` items in picture questions; show `hint` (already supported).
- u08 now has 3 grammar points (24 exercises in one grammar lesson); consider one lesson per grammar point.
- TTS cleanup of "/" "…" "→" "+" and "–" speaker changes (3.3).
