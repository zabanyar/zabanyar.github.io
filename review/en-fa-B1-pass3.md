# en-fa B1 — third review pass (Oct 2026)

Scope: `content/en-fa/B1/u01.json … u10.json`. I worked from the automatic audit and then read every item of every unit (words, examples, phrases, dialogues, grammar explanations/tables/examples/exercises, readings, questions, sentences).
`python3 tools/validate.py content/en-fa/B1/*.json` → OK for all 10 files. `python3 tools/audit.py` → en-fa B1: only false alarms are left (listed below).

## Summary of changes

| Category | Count |
|---|---|
| `pr` added (every object with `t` now has a guide) | 796 |
| existing `pr` corrected / aligned | 9 |
| duplicate headwords replaced (new word, ex, s, pr, emoji) | 3 |
| target text (American English, factual precision, cross-item consistency) | 6 (incl. 1 table cell) |
| translation `s` | 1 (with the changed example) + the 3 new words/examples |
| grammar explanation | 1 |
| exercises (`alts` added) | 5 |
| emoji | 3 (part of the headword replacements) |

### `pr` added (task 2), per unit

| Unit | added | where |
|---|---|---|
| u01 | 79 | title 1, word examples 14, dialogue title + 12 lines, 2 grammar titles, 10 grammar examples, 16 exercises, reading title + 10 sentences + 4 questions, 8 sentences |
| u02 | 81 | same structure (15 word examples, 12 lines, 11 reading sentences) |
| u03 | 81 | same structure |
| u04 | 81 | same structure |
| u05 | 81 | same structure |
| u06 | 78 | 10 dialogue lines, 10 reading sentences |
| u07 | 79 | 10 dialogue lines |
| u08 | 79 | 11 dialogue lines, 10 reading sentences |
| u09 | 79 | 10 dialogue lines |
| u10 | 78 | 10 dialogue lines, 10 reading sentences |
| **total** | **796** | titles 10, word examples 149, dialogue titles 10 + lines 111, grammar titles 20, grammar examples 100, exercises 160, reading titles 10 + sentences 106 + questions 40, sentences 80 |

How the guides were made: one B1 word→spelling lexicon (taken from the existing B1 word/phrase guides first, then from A2/B2/C1, every entry checked by hand against American pronunciation), so each word is spelled the same way everywhere in the level. Then I read all 796 sentences one by one.
Conventions used (same as B2/C1 and CURRICULUM_NEW_LEVELS.md):
- exercise `pr` = full correct sentence, gap filled with the key (for `type` with several answers: the contracted form when one is listed (I've, you'll, didn't), otherwise the first answer; u01 g01 ex3 uses "saw").
- **the** = ذِ, but **ذی** before a vowel sound (ذی اِند، ذی اَکسیدِنت، ذی اِرْپُرت، ذی آوِرز); **a** = اِ, **an** = اِن; **me** = میْ.
- **have to / has to** (necessity) = هَف تو / هَس تو (/hæf tə/, /hæs tə/), possession have = هَو; **had to** = هَد تو.
- **used to** = یوسْت تو, **didn't use to / Did you use to** = یوس تو, passive **is/are used** = یوزْد.
- **read**: present رید, past/participle رِد (I read an interesting article, I read somewhere, they read [reported], had read).
- **lives** verb لیوْز, noun (our lives) لایوْز; **broadcast live** = لایو.
- -ed endings as pronounced (پَسْت، اِرایوْد، دیسایدِد), /oʊ/ ُو, /ɔr/ ُر (وُرْمِر، اِوُرْد، هُرس، بُرن، فْلُر), /ɔɪ/ ُی (نُیزی، اِوُیْدْز، لُیِل), schwa ِ.
- numbers in words: years as in B2 (twenty fifteen تْوِنْتی فیفْتین, nineteen seventy-five ناینْتین سِوِنْتی فایو, eighteen eighty-nine), 400 فُر هاندْرِد, 72 سِوِنْتی تو; **a.m.** = اِی اِم; **AI** = اِی آی; **TV** = تی‌وی; **o'clock** = اِکْلاک.
- Persian names and places in normal Persian spelling (مریم، رضا، تهران، رشت، سی‌وسه‌پل، نوروز); foreign names by sound (تام، اِما، لیسا بْراون، تِرانْتُو، سْکاتْلِند، بِن نِویس، نایَگْرا فالْز، آیفِل تاوِر).
- punctuation kept in Persian form (، ؟ ؛ « »); in titles " / " is written «،» because the voice reads a slash as a pause; the arrow in the u06 reported-speech exercises is dropped («آیم هانْگْری.» یِسْتِرْدِی، لیسا سِد شی واز هانْگْری.).

## Change table (everything except the 796 added guides)

| File | Path | Old → New | Reason |
|---|---|---|---|
| u07 | `words[13] (w14)` | get lost (duplicate of u01 w11) → flat tire / pl flat tires / «پنچری…» / فْلَت تایِر / emoji "" / new ex | headword taught twice in B1 |
| u08 | `words[3] (w04)` | colleague (duplicate of u03 w06), pl, 💼 → loyal / «وفادار، باوفا» / لُیِل / emoji "" / new ex | headword taught twice in B1 |
| u08 | `grammar[1].exercises[1].t` | The Caspian Sea, ___ is the largest lake in the world, is in the north of Iran. → The Caspian Sea, ___ is the largest lake in the world, lies north of Iran. | the Caspian Sea is not inside Iran; it lies to the north of Iran |
| u09 | `words[2] (w03)` | fail (duplicate of u01 w09) → take notes / «یادداشت برداشتن» / تِیک نُوتْس / ✍️ / new ex | headword taught twice in B1 |
| u09 | `grammar[0].examples[1].t/s` | Reza hopes to get a scholarship. \| رضا امیدوار است بورسیه بگیرد. → Sara hopes to get a scholarship. \| سارا امیدوار است بورسیه بگیرد. | same unit already says Reza GOT a scholarship (w12 ex) – contradiction |
| u07 | `phrases[2].pr (p03)` | کود یو هِلپ می، پْلیز؟ → کود یو هِلپ میْ، پْلیز؟ | "me" inside a sentence = «میْ» (convention; used everywhere else in B1) |
| u02 | `phrases[5].pr (p06)` | این ذِ اِند → این ذی اِند | "the" before a vowel = /ði/ «ذی», as in u10 p05 «ذی آذِر» and all new sentence guides |
| u08 | `phrases[4].pr (p05)` | آی کَن آل‌وِیز کاونت آن هیم → آی کَن آلوِیز کاونت آن هیم | same spelling of "always" as the rest of B1 (آلوِیز) |
| u05 | `phrases[6].pr (p07)` | ذِ پْرابلِم ایز ذَت → ذِ پْرابْلِم ایز ذَت | same spelling of "problem" as u07 p01 and the curriculum convention (پْرابْلِم) |
| u06 | `phrases[5].pr (p06)` | ذَت کَنت بی ترو! → ذَت کَنت بی تْرو! | cluster tr- with sukun («ترو» can be read "taru"); same as all new guides |
| u06 | `phrases[6].pr (p07)` | آیم نات شور ایتس ترو → آیم نات شور ایتس تْرو | cluster tr- with sukun, consistent spelling of "true" |
| u09 | `words[0].pr (w01)` | تِیک اِن ایگزَم → تِیک اِن ایگْزَم | same spelling of "exam" as u01 w08 (ایگْزَم) |
| u09 | `phrases[5].pr (p06)` | گود لاک ویذ یور ایگزَمز! → گود لاک ویذ یور ایگْزَمز! | same spelling of "exams" as the rest of B1 |
| u03 | `words[10].pr (w11)` | کْوئیت → کْویت | quit /kwɪt/: «کْوئیت» suggests two syllables (ko-it); w = و as in quickly کْویکْلی |
| u02 | `words[13].ex.t (+pr)` | I was so embarrassed when I fell down in the street. → I was so embarrassed when I fell down on the street. | American English: "on the street" ("in the street" = in the roadway) |
| u02 | `grammar[1].table[0][1]` | I used to play football. → I used to play soccer. | American English (A1, A2, B2 all use "soccer") |
| u06 | `words[2].ex.t (+pr)` | The journalist interviewed people in the street. → The journalist interviewed people on the street. | American English: "on the street" |
| u08 | `words[7].ex.t (+pr)` | My brother and I sometimes argue about football. → My brother and I sometimes argue about soccer. | American English: "soccer" (football = American football in AmE; other levels use soccer) |
| u02 | `grammar[0].exercises[5].alts` | — → When the phone rang, she was reading. | second natural order of the same tiles (clause order) was rejected |
| u03 | `grammar[0].exercises[5].alts` | — → I'll buy a car if I get the job. | second natural order of the same tiles (clause order) was rejected |
| u03 | `grammar[1].exercises[5].alts` | — → When she gets home, I'll tell her. | second natural order of the same tiles (clause order) was rejected |
| u07 | `grammar[0].exercises[6].alts` | — → I'd book early if I were you. | second natural order of the same tiles (clause order) was rejected |
| u10 | `grammar[1].exercises[6].alts` | — → Before you leave, please turn it off. | second natural order of the same tiles (clause order) was rejected |
| u02 | `grammar[1].explain (last line)` | تلفظ: used to را «یوستْ تو» می‌گوییم. → تلفظ: used to را «یوسْت تو» می‌گوییم (با «س»، نه «ز»)، و use to را در منفی و سؤالی «یوس تو». | note now matches the pr convention used in all B1 guides (sukun on س; use to without t) |
| u01–u10 | 8 grammar-title `pr` written in this pass | " / " → "، " | the voice reads "/" as a comma pause; keeps the audit word count honest |

## Noticed, not changed

- **Audit false alarms left on purpose:** u05 g02 ex7 "because of the holiday" — a public holiday (trash not collected), which is correct American usage; u07 w14 *flat tire* (the regex looks for British *flat* = apartment); u01 w14 ex word count (the hyphenated *once-in-a-lifetime* counts as 1 word in `t` but is 4 words in the guide).
- u09 w02 *pass* overlaps in meaning with u01 w08 *pass an exam* (different headword strings, so the audit doesn't flag it). I kept it because u09 needs the pair pass/take an exam. A later pass could swap it (e.g. *graduate* is already taken by B2, so it would need something like *semester* or *certificate*).
- u09 reading: the text never says the writer is a woman, but the questions use *she*. The answers don't depend on it.
- u05 dialogue "about a million plastic bags are used every minute" is the widely quoted UN figure, already hedged with "about". Kept.
- u04 g01 ex0 "Tomorrow is Friday, so I don't have to go to work" assumes the Iranian weekend; the Persian `s` makes this clear. Kept.
- u02 g01 ex3 accepts only *dropped* (the `s` «انداخت» fixes the verb). u06 g02 ex4 accepts *was* only (standard backshift). Both fine.
- **Note for the B2 reviewer:** B2 writes *have to* as «هَو تو». B1 now uses «هَف تو / هَس تو», which is how the words are actually pronounced.
- Earlier noted emoji approximations are still fine (u01 w02 🗺️, u10 w07 🚗, u05 w10 🌲).

## TTS-risky target texts (unchanged, handled centrally)

- Ellipsis "…" in phrase `t` and in titles (u01 dialogue title and g02 title, u07 g01 title).
- Slashes, "+" and "-ing" in grammar titles and tables (u01 g02, u02 g01, u03 g02, u04 g01/g02, u06 g01/g02, u07 g02 "I wish + past simple", u08 g01, u09 g01 "Verb + -ing or verb + to", u09 g02 "Preposition + -ing"), plus the table cells.
- Quotes plus "→" in u06 g01 ex2–ex5 and u06 g02 ex1, ex3–ex5.
- Dash "–" between question and answer: u01 g01 ex2, u01 g02 ex2.
- Abbreviations: u07 dialogue lines 3–4 "six a.m."; u10 dialogue lines 4–5, g01 table and reading text[4] "AI".
- Hyphenated name *Si-o-se-pol* (u05 g02 ex0), accented *résumé* (u03), *café* (u08).
- Digits that the voice reads: years 2015/2016/2018/2010 (u01), 1889/1928/1975/1997/2016 (u05), 2010 (u08), 2040/2050 (u10); 400 (u05), 500/72 (u06), 80 (u04), 85 (u08).
