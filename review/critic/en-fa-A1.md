# Critic review (pass 4, Nov 2026): en-fa A1 (u00–u10)

I read every item of all 11 units: letters, sounds, words with their examples, phrases, dialogues, grammar (titles, explanations, tables, examples, exercises), readings and questions, sentences, goals and titles. Before that I read SCHEMA.md, CURRICULUM.md, the `pr` conventions in CURRICULUM_NEW_LEVELS.md, BRIEF/BRIEF_NEW/BRIEF_PASS3, and both earlier reviews (`review/en-fa-A1.md`, `review/en-fa-A1-pass3.md`). I did not undo their deliberate decisions: weak «کِن» vs strong «کَن», ذی before a vowel, the cast ages, the s-decided location choices, and the u09 season table.

`python3 tools/validate.py content/en-fa/A1/*.json` prints OK for all 11 files. `python3 tools/audit.py` reports `en-fa A1: {'pr': 4}`. All four are the known false alarms: the word counter trips on the slash titles in u03 g01, u05 g02 and u08 g01, and on the hyphenated phone number in u02 `dialogue.lines[7]`.

## 1. Verdict

This is a clean, careful A1. The target English is correct and natural American English. The Persian translations are accurate and use proper ZWNJ and Persian ی/ک. Every `t` has a sound-based `pr` that follows the course conventions, and an automatic check found only one stray spelling (`فَمیلی`). The exercise keys are right.

The weaknesses are not errors:
- **Coverage is thin for what A2 assumes.** There are no days of the week, no numbers above 20, no does/doesn't, no object pronouns and no frequency adverbs.
- **Adult life is under-represented.** The only jobs are teacher and student, and much of the story is about children aged 12 to 15. The learners are adults.
- **Pronunciation teaching is thin.** The `pr` guides do a lot of the work, but the explanations hardly ever say *why*. The w/v distinction, which matters a lot for Persian speakers, is never taught.
- **The recurring characters are still not fully stable.** This pass fixed the most visible clashes (see the table).

## 2. Fixed

| Unit | Path | Before → After | Reason |
|---|---|---|---|
| u00 | `letters[16].ex.pr` (queen) | کوئین → کْوین | /kwin/ is one syllable; «کوئین» invites "ku-in". The level writes /kw/ as «کْوِ» elsewhere (questions «کْوِسچِنز») |
| u01 | `grammar[0].explain`, last line | نکته: قبل از شغل یک **a** می‌آید: She is **a** teacher. → نکته: قبل از شغلِ یک نفر **a** می‌آید: She is **a** teacher. برای چند نفر a نمی‌آید و شغل جمع بسته می‌شود: They're teacher**s**. | The old rule was misleading ("a before a job", with no singular restriction), and learners write "They are a teachers". The unit's own example "They're teachers." contradicted it |
| u02 | `grammar[1].examples[1]` t / s / pr | Sara and Mina are students. / سارا و مینا دانش‌آموز هستند. / سارا اَند مینا … → Emma and Mina are students. / اِما و مینا دانش‌آموز هستند. / اِما اَند مینا آر سْتودِنتس. | Cast consistency. Sara is an adult with her own apartment (u05), so «دانش‌آموز» (school pupil) did not fit her. Emma (13) and Mina (15) are the school-age friends of this unit. Pass 3 already moved "Sara is a girl" to Emma for the same reason |
| u02 | `grammar[1].exercises[7]` t / s / pr / alts | Sara and Mina are girls. / سارا و مینا دختر هستند. / … / alts ["Mina and Sara are girls."] → Emma and Mina are girls. / اِما و مینا دختر هستند. / اِما اَند مینا آر گِرلز. / alts ["Mina and Emma are girls."] | Same reason. Calling adult Sara a "girl" contradicted the pass-3 cast fix |
| u03 | `grammar[0].exercises[2].pr` | … آوِر فَمیلی ایز بیگ. → … آوِر فَمِلی ایز بیگ. | It was the only spelling of "family" that differed from the other 12 (schwa = ِ) |
| u09 | `words[6].emoji` (hot) | 🌡️ → 🥵 | A thermometer pictures "temperature", not "hot", and it can stand for "cold" just as well. "cold" in the same unit is 🥶, so 🥵 is the clear matching picture for "Which picture is it?" |
| u09 | `dialogue.speakers.B.name` | Ali → Amir | Cast consistency and cultural fit. Ali is the father of Emma's friends (u03), and a 13-year-old calling her friends' father by first name to say "See you in March, Ali!" is odd for this family. Amir (12) is Emma's friend, who gave her his phone number in u02, so this phone call now continues that story |
| u09 | `dialogue.lines[0]` t / s / pr | Hi, Ali! How's the weather in Tehran? / سلام علی! هوای تهران چطور است؟ / … → Hi, Amir! How's the weather in Shiraz? / سلام امیر! هوای شیراز چطور است؟ / های، امیر! هاوز ذِ وِذِر این شیراز؟ | Same change. Amir's family lives in Shiraz: his mother is from Shiraz (u03), and his sister Mina's house is on Hafez Street in Shiraz (u07) |
| u09 | `dialogue.lines[5]` t / s / pr | Summer in Tehran is very hot! Come to Tehran in spring. / … → Summer in Shiraz is very hot! Come to Shiraz in spring. / تابستانِ شیراز خیلی گرم است! بهار به شیراز بیا. / سامِر این شیراز ایز وِری هات! کام تو شیراز این سْپْرینگ. | Same change. The facts still hold: Shiraz summers are very hot, winters cold but mostly sunny, and spring is the classic time to visit |
| u09 | `dialogue.lines[8]` t / s / pr | Great! See you in March, Ali! / … علی! / … علی! → Great! See you in March, Amir! / عالی! مارس می‌بینمت، امیر! / گْرِیت! سی یو این مارچ، امیر! | Same change |
| u10 | `dialogue.lines[5]` t / s / pr | Yes, I do. My daughter and I play the guitar. / … من و دخترم … / … مای داتِر … → Yes, I do. My sister and I play the guitar. / بله، دوست دارم. من و خواهرم گیتار می‌زنیم. / یِس، آی دو. مای سیستِر اَند آی پْلِی ذِ گیتار. | Cast consistency. Reza is Emma's 14-year-old friend in u02 and the teen host in u05, and here he chats with 13-year-old Emma as a peer in the park, so "my daughter" made him a father. The line now fits, and it also follows on from u09, where Emma plans to come to Iran in March |

**Counts:**
- 11 edits, covering 24 JSON fields.
- `pr`: 2 (u00 queen, u03 family).
- Grammar explanation: 1 (u01).
- Cast and content consistency, changing t, s and pr together: 7 items (u02 ×2, u09 ×4, u10 ×1).
- Emoji: 1 (u09 hot).
- Exercise keys: 0 wrong keys found.
- British spelling, Arabic ي/ك, missing ZWNJ, "Neda", ___ inside exercise `pr`: none found. I checked these automatically across all 11 files.

## 3. Remaining issues (need a decision or bigger work)

### High
1. **A1 does not cover what A2 assumes.** en-fa A2 uses Monday/Saturday/Sunday in 3–5 units, does/doesn't in 5–6, always/usually/never, him/them, thirty and hundred. A1 teaches none of these. Present continuous chunks are also used without being explained ("It's raining", "I'm just looking", "I'm late"). *Suggestion:* add an A1 grammar unit u11 (`"kind": "grammar"`, as de-en A1 has) covering:
   - does / doesn't in questions and negatives (he/she)
   - present continuous for "now"
   - object pronouns
   - frequency adverbs

   Also teach days of the week and the tens 30–100 as words in u06 (days) and u02 (or u11). If units stay fixed, at least add one-line "you already saw this chunk" notes in A2 u01/u04.
2. **The /w/ sound is never taught, and its `pr` hides the problem.** The convention writes w and v both as «و» (we «وی», twelve «تْوِلْو», very «وِری», violin «وایِلین»). Persian speakers read «و» as [v], so "we", "west" and "wine" come out with a v. That is the most typical Iranian accent error after th. *Suggestion:* add a sounds card in u00 (`sounds` is optional, so adding one item is cheap): "w: لب‌ها را گرد کنید مثل «او» کوتاه، دندان به لب نخورد (برخلاف v)", with examples we / water / window vs very / violin. Mention it again in the u02 numbers explanation (one, twelve, twenty).

### Medium
3. **Cast is still unstable** (pass 3 left this on purpose).
   - Reza is a student (u01), a 14-year-old friend (u02, u05, u10), a husband (u03 examples) and an adult teacher "from Tehran" with a full workday (u06 reading).
   - Maryam is a teacher (u03 g01 examples) but "works at a hospital" (u07 word example).
   - u03 g01 example "Maryam is a teacher. Her son is ten." clashes with Amir being 12.

   *Suggestion:* write a one-paragraph cast sheet into CURRICULUM.md: Ali (father, teacher), Maryam (mother, from Shiraz), Mina 15, Amir 12, baby brother, all in Shiraz; Emma 13 from New York and Reza 14 from Tehran as friends; Tom, Lisa and Sara as adults. Then:
   - rename the u06 reading's Reza to Ali (he is already "a teacher" in u03), and make him live in Shiraz
   - change "Her son is ten" to "twelve"
4. **Choice items where the Persian `s` is the only thing that excludes a second answer** (kept by passes 1–3 on purpose):
   - u05 g02 ex0 (on / under / in the bed)
   - u05 g02 ex1: "The plant is in the window" is idiomatic and correct
   - u07 g02 ex1: "opposite" implies "near"
   - u09 g01 ex1 and ex3

   *Suggestion:* swap the competing option for one that is grammatically impossible, which also drills the form:
   - u05 ex1 options → ["next to", "next", "to"]
   - u07 ex1 options → ["opposite", "next", "of"]
5. **u09 season table vs reading.** The table says spring = March, April, May. The reading (correct for Iran) says spring runs March–June. *Suggestion:* add one sentence to g02: «این جدول تقسیم‌بندی رایج در انگلیسی است؛ در ایران فصل‌ها از اول فروردین، تیر، مهر و دی (حدود ۲۱ ماه میلادی) شروع می‌شوند.»
6. **Goals use two styles inside the level.** u00–u05 use the subjunctive («… را بشناسم»), u06–u10 use «می‌توانم …». The app heading is «در این درس یاد می‌گیرید», which matches neither person. *Suggestion:* unify all 11 units, for example to «… را بشناسید / بگویید», or to «می‌توانم …» with a heading like «بعد از این درس».
7. **u08 reading Q0 "What color is Mina's dress?"** presupposes that Mina owns the dress, but the text only says she "would like a red dress". *Suggestion:* "Mina would like a ___ dress." (gap question, same options), and update the s and pr to match.
8. **"half past seven" is mostly British.** American English, which the course requires, usually says "seven thirty". *Suggestion:* add «در آمریکا بیشتر می‌گویند: It's seven thirty.» to the u06 g02 explanation, plus one example.
9. **u10 g02 explanation teaches only like + -ing**, while two type exercises (correctly) also accept "to read" / "to ride". *Suggestion:* add «I like to read هم درست است و در آمریکا رایج است.»

### Low
10. 18 phrase `pr`s lack the final period that their `t` has: u06 p02–p03, u07 p01 p04–p06 p08, u08 p03 p05 p07 p08, u09 p02–p04 p07, u10 p02 p04 p06. This is harmless, but could be normalised in a central script.
11. Some emoji repeat across units: 📅 year (u02) and month (u09); 🛋️ living room (u05) and free time (u10); 🍳 breakfast (u04) and cook (u10); 📖 book (u00) and read (u10); 🌳 tree (u00) and park (u07); 👩/👨 she/he (u01) and mother/father (u03). This only matters if picture questions ever mix units, for example in a level review. Then use 🗓️ for month and 🏞️ for park.
12. The u00 th card calls voiced th "softer" («نرم‌تر»). It is really *voiced*, like ز vs س. *Suggestion:* «این صدا با لرزش گلو گفته می‌شود، مثل فرق «س» و «ز»».
13. Known TTS risks, handled centrally:
    - digits in tables (u02 11–20, u06 7:00) and "18 = ___"
    - slashes in titles, tables and short-answer phrases
    - "Mmm" / "Hmm" / "OK" / "TV" / "T-shirt"
    - em dashes between question and answer
14. Known limits of the convention, as earlier reviews noted:
    - plain «و» for /u/ («تو», «دو», «شو»)
    - «ی» for both /ɪ/ and /i/ (ship / sheep look the same)

## 4. Improvement ideas (prioritised)

1. **Bridge to A2** (see issue 1). A grammar unit u11 with graded exercises would give A1 a real review and fill the gaps in one place: be / have / can / present simple incl. does / there is / this-that / a-an-some, plus does/doesn't, present continuous and object pronouns. The same pattern already exists for German.
2. **Adult relevance.** The learners are adults, some of them older, but teens drive most of the dialogues and readings (Amir 12, Emma 13, Mina 15, Reza 14).
   - Add basic jobs (doctor, nurse, engineer, driver, housewife/homemaker, retired) and "What do you do? — I'm a nurse." to u01 or u06. That is a standard A1 can-do that is missing completely.
   - Give adults one dialogue per unit in a few places: a pharmacy or doctor's reception in u07, paying at a supermarket in u08, a phone call with a relative abroad in u09.
3. **Pronunciation in the explanations, not only in `pr`.** The guides show plural and 3rd-person endings correctly (کَتس، داگز، باسِز، واچِز), but no explanation says why. Add one line each:
   - u02 plural: /s/ after p t k f, /z/ elsewhere, /ɪz/ after s sh ch x
   - u06 3rd person: same rule (works «وِرکس», goes «گُوز», watches «واچِز»)
   - u00: w (issue 2) and the short /ɪ/ vs long /i/ pair (ship / sheep)
4. **More varied reading genres.** u06, u07, u10 and partly u03 are all "Hello, I'm X, this is my …". Use a postcard or text message for u09 (Emma writing from New York would fit the new phone-call storyline), a shop receipt or price list for u08, and a short note from a parent for u06.
5. **Productive exercises.** Most gaps take one word, and `order` items mostly have 4–6 words.
   - Add a few `type` items that need a whole short answer: "Can you swim? — Yes, ___." → "I can"; "Do you like tea? — No, ___." → "I don't"
   - Add one `order` per unit with 7 words that includes a question word or a place phrase
6. **Recycling.** Later units already reuse earlier words well (park, grandfather, breakfast, TV). A small "review" sentence set in u05 and u10 would close the loop for early items that never come back after their own unit: family members after u03, food after u04, clothes after u08.
7. **Cultural fit.**
   - It is good that Nowruz, Hafez Street, Tabriz snow and the Ahvaz heat appear, and that food stays halal.
   - Prices are only in dollars. That is fine for an English course, but one line of context would help, for example "in New York" in the u08 dialogue title or reading.
   - Iranian learners will meet "Mr./Mrs. + surname" and "Excuse me, sir/ma'am" in real life. Add these polite-address chunks to u01 or u07.
