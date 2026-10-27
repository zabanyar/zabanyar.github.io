# Review: en-fa A2 (u01–u10)

I checked every item in all 10 units: words (t, pl, s, pr, emoji, ex), phrases, dialogue, both grammar points (explain, table, examples, exercises), reading (text and questions) and sentences. I also ran scans for Arabic ي/ك, missing ZWNJ, spacing before suffixes, stray whitespace and Latin letters in `pr`, and compared the word count of `t` and `pr` for every word and phrase. Persian orthography is clean: there is no Arabic ي/ك and ZWNJ is used correctly throughout. All 10 files pass `tools/validate.py`.

## Changes

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u06 | phrases[0].pr | واتس فور دینِر؟ → واتس فُر دینِر؟ | "for" is /fər/ or /fɔr/. «فور» reads as "fur". Now matches «فُر» in u01 w12. |
| u07 | phrases[0].pr | آیم لوکینگ فور اِ جَکِت. → آیم لوکینگ فُر اِ جَکِت. | Same fix for "for". |
| u10 | phrases[3].pr | ثَنکس فور اینوایتینگ می. → ثَنکس فُر اینوایتینگ می. | Same fix for "for". |
| u06 | words[5].pr (potato) | پِتِیتو → پِتِیتُو | The final /oʊ/ is written «ُو» everywhere else in A2 (فُوتُوز، سْلُو، هُوم). A bare final «تو» reads as /to/ or /tu/. |
| u06 | words[6].pr (tomato) | تِمِیتو → تِمِیتُو | Same reason. |
| u08 | words[13].pr (take a photo) | تِیک اِ فُوتو → تِیک اِ فُوتُو | Same reason, and it now matches «فُوتُوز» in u02 w11. |
| u04 | grammar[0].exercises[3].answer | ["am cooking","am making"] → + "am preparing" | "I'm preparing dinner" is also correct and matches the Persian «شام درست می‌کنم». |
| u04 | grammar[1].exercises[0].options[0] | "see" → "sees" | "I see the dentist tomorrow at four" (present simple for a scheduled appointment) is acceptable to many native speakers, so the exercise had two correct answers. "sees" is clearly wrong with "I", which leaves "am seeing" as the only answer. |

## Noticed but not changed

- **u08 phrases[4].pr «تِکست میْ وِن…»**: the sukun on «میْ» looks odd. I tried plain «می», but the validator rejects «می» followed by a space because it treats it as the Persian prefix that needs a ZWNJ. I restored the sukun, which works around the validator and does no harm when read.
- **"go" written «گو»** (u01 w12, u02 w13, u02 p02): sound-wise «گُو» would be better (/oʊ/), but «گو» is the convention for the whole course, including A1 and B1. I left it so the levels stay consistent. If it changes, it should change everywhere at once.
- **"do" «دو», "should" «شود», "good" «گود», "could" «کود»**: these follow the course convention that /uː/ and /ʊ/ are written «و». «شود» could be misread as the Persian word "shavad". Adding a diacritic («شُود») would clash with the «ُو» = /oʊ/ convention, so I left them.
- **"new"**: u04 p05 has «نیو», which is closer to British /nju/. u09 p06 and u10 w10/p08 have «نو», which is American /nu/, the same choice B1 makes for «نوز». It's inconsistent, but neither is clearly wrong, and «نو» can be read as the Persian word "now". This is a course-wide decision.
- **Spelling style for ezafe after silent ه**: u01–u05 write «هٔ» (آخر هفتهٔ) and u06–u10 write «ه‌ی» (درباره‌ی). Both are correct, so this is only a style difference between units.
- **u05 grammar[0].exercises[7] (order)**: "The red car is cheaper than the blue one." Swapping red and blue gives another valid sentence from the same tiles. The Persian prompt shows which one is meant, so I left it.
- **u10 words[9].ex and grammar[1].exercises[4]**: "at New Year" is British. American English says "at New Year's" or "for New Year's". In the Nowruz context it's understandable, so I didn't change it.
- **Repeated words across units**: price, cheap and expensive appear in both u05 and u07. quiet and noisy appear in both u05 and u09. relative appears in both u01 and u10. Fixing this would mean restructuring units, which the brief doesn't allow.
- **u03 dialogue speaker "Dr. Mina"**: using "Dr." with a first name is unusual in English, but it's fine in this family context.

## TTS-risky target texts (item 6, not changed)

- **"/" in `t`**:
  - u01 g01 title "was / were", table "I / he / she / it", "you / we / they"
  - u02 p06 "by train / by plane"; g01 title "Did you…? / I didn't…"; g01 table "Yes / No", "Yes, I did. / No, I didn't."; g02 table "he / she / it", "you / we / they"
  - u03 g01 title "should / shouldn't", g02 title "have to / don't have to", g02 table "I / you / we / they", "he / she / it"
  - u05 p08 "I agree. / I don't agree."; tables "good / bad", "better / worse", "the best / the worst"
  - u06 g01 title "some / any"; g02 title "How much? / How many?"; g02 table "a lot of eggs / a lot of rice"
  - u07 g02 title "too / enough"
  - u08 g01 title "ever / never", table "I / you / we / they", "he / she / it"; g02 title "just / already / yet"
  - u09 g01 table "into / out of", "go into / come out of the building", "up / down", "go up / down the stairs"; g02 title "there was / there were"
  - u10 g01 title "Would you like to …? / I'd love to.", table "I'd love to! / Yes, I'd like that.", "I'm sorry, I can't. / I'd love to, but …"
- **"…" in `t`**: u02 g01 title; u03 p03 "My … hurts."; u05 p07 "In my opinion, …"; u06 g02 table "How many …?", "How much …?"; u08 dialogue line 8 "OK… Done!"; u08 g01 table "Have you ever used …?"; u10 g01 title and table.
- **Symbols "+", "−", "→" and "('m)"-style parentheses in tables**:
  - u02 g01 table "+", "−"
  - u02 g02 table "am ('m)", "is ('s)", "are ('re)"
  - u08 g01 table "have ('ve) used", "has ('s) used"
  - u07 g02 table "too + adjective", "adjective + enough", "enough + noun"
  - u10 g02 table "plan → be going to", "decision now → will", "evidence now → be going to", "opinion → will"
- **"–" (dash) as a speaker-change marker**: u07 g01 ex[3]; u08 g01 ex[3], ex X3; u09 g02 ex[4], X4; u10 g02 ex[1], X0, X1.
- **Abbreviations and ordinals**:
  - "vs." in u04 g01 title; "vs" in u10 g02 title
  - "June 12th" and "May 20th" in u10 reading[2] and [8], and in Q3's options
  - "Dr. Mina" as a speaker name in u03
- **Digits**: u05 g01 X3 "38 degrees", u05 g02 X2 "gets 20".
- **Interjections**: "Hmm" (u03 dialogue line 4, u05 line 3, u07 line 5), "Ha!" (u05 line 8). "OK" appears in many lines, which is probably fine.
- **Hyphenated words**: "Wi-Fi" (u08 several), "part-time" and "old-fashioned" (normally read correctly).
