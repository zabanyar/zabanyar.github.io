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

## 5a. Pass 5 course-wide (Nov 2026)

Course-wide work for all five en-fa levels (A1–C1), done before the level-specific pass-5 tasks (production items, `why`,
inference questions, `sym`), which were not touched. After the edits `tools/validate.py content/en-fa/*/*.json` prints OK
for all 51 files, and `tools/audit.py` shows only the known false alarms (A1 `pr` ×4 slash titles / phone number;
A2 "holiday" + slash title; B1 hyphen word count, "holiday", "flat tire" ×2; B2 and C1 clean).

### Cast sheet: `content/en-fa/CAST.md`

Decisions (the majority of existing facts was kept, so most edits are one name or one word):
- **Timeline:** A1 shows the family when Mina (15) and Amir (12) are teenagers; from A2 on the story is about fifteen
  years later. This keeps A1 u02/u03 intact and explains Mina the dentist and Amir the web designer.
- **Family in Shiraz:** Ali (teacher, from Tehran) + Maryam (nurse, from Shiraz), Mina (dentist → Tehran → Toronto),
  Amir (student → web designer in Emma's company).
- **Friends:** Sara (nurse, from Isfahan, later Munich) is married to **Reza** (international company, children);
  Maryam is no longer Reza's wife.
- **English speakers:** Emma (Tom's sister, manager at Reza's and Amir's company, marries Jack), Tom (English teacher),
  Lisa (English teacher, the Rezas' neighbor, moves to Canada), Jack (computer office job, back pain → stress → mild heart attack).
- **One-off roles** (shop assistants, doctors, airline staff, radio host, people in news/feature readings) got names
  outside the cast.

65 items changed (t + s + pr together), 14 speaker names, 4 reading option lists:

| Level unit | Item(s) | Before → after | Why |
|---|---|---|---|
| A1 u02 | words[7].ex | Jack is seven → My brother is seven | Jack is an adult from A2 on |
| A1 u03 | words[8].ex, words[9].ex | Her husband is Reza / Ali's wife is a teacher → Her husband is Ali / Ali's wife is Maryam | Reza is 14 in u02; Maryam is a nurse |
| A1 u03 | g0 examples[2] | Reza is from Iran. His wife is from Tabriz. → Ali is from Tehran. His wife is from Shiraz. | same |
| A1 u03 | g0 examples[3], exercises[1] | Maryam is a teacher. Her son is ten / … son is a student → Lisa is a teacher … | Maryam's son Amir is 12; she is a nurse (u07) |
| A1 u03 | sentences[2] | Reza's wife is from Tabriz → Ali's mother is from Tabriz | Reza is 14 |
| A1 u06 | reading (title, 8 lines, 4 questions) | Reza's day (Reza, teacher from Tehran) → Ali's day; goes to work at seven → at half past six | adult teacher = Ali; time now matches the u06 dialogue ("Dad … goes to work at half past six") |
| A1 u06 | g0 examples[2], exercises[2] | Reza works every day / Ali goes to work at eight → Maryam … / Sara … | Reza is 14; Ali leaves at half past six |
| A1 u08 | dialogue speaker A | Tom (shop assistant) → Ben | Tom is a teacher (u01) |
| A2 u03 | dialogue speaker A; reading | Dr. Mina → Dr. Ahmadi; Ali (45, office, back pain) → Jack | Mina is a dentist (u04); Ali is a teacher |
| A2 u04 | words[1].ex, words[8].ex, g0 examples[0], g0 exercises[4] | Maryam is an engineer → My aunt …; Tom works for a big company → Jack …; Reza is a (taxi) driver → My uncle …; Emma teaches English → Lisa … | jobs clashed with the cast |
| A2 u05 | dialogue speaker A; g1 exercises[2] | Maryam (buying a sofa with Reza) → Sara; Ali is the best student in our class → Amir | Reza's wife is Sara; Ali is 45+ and a teacher |
| A2 u07 | dialogue speaker A; reading [0], [5] | Emma (shop assistant) → Kate; Reza's wife Maryam → Sara | Emma is a manager; Reza's wife |
| A2 u10 | reading [7] | Your brother Ali → Your brother Amir | Ali is Mina's father |
| B1 u01 | dialogue [0]; g1 exercises[2] | Tom, have you ever been to Iran? → … to Japan?; Reza has worked for this company for five years → Jack … | Tom visits Iran in A2; Reza has been there two years in B2 u01 |
| B1 u07 | dialogue speaker A | Lisa (airline staff) → Anna | Lisa is a teacher (u08) |
| B1 u08 | reading [1], [3] | Maryam, a nurse from Tehran → from Shiraz; Tom, who has just retired → who is a teacher | Maryam is from Shiraz; Tom teaches in B2 |
| B2 u01 | speaker A, lines [2], [11], words[2].ex | manager Lisa → Emma; Tom is retiring → David …; Maryam is in charge of marketing → Emma | Lisa is a teacher; Tom teaches in B2 u07; Maryam is a nurse |
| B2 u02 | speaker B + line [0]; reading + 2 options | Tom (Sara's school friend) → Kaveh; Mina (friend in Toronto, a doctor, left Iran at 12) → Leila | Sara and Tom first meet in A1 u01; cast Mina grew up in Shiraz |
| B2 u03 | speaker B + line [0] | Amir (heart attack; Maryam "heard you were in the hospital") → Jack | a mother would know; fits Jack's sedentary story |
| B2 u05 | reading [4] + question | retired teacher Emma Clark → Ann Clark | Emma is a manager |
| B2 u06 | speaker A | Mina ("When I was a child", Zayandeh Rud) → Sara | Mina is from Shiraz; Sara grew up in Isfahan |
| B2 u07 | speaker B + line [0]; reading [7] + question | Jack, you're a teacher → Tom …; Professor Tom Hill → Daniel Hill | Jack works with computers |
| B2 u10 | speaker B + line [0]; reading + options | Ali (Maryam invites him to "come over", "my sister") → Amir; Lisa Park → Karen Park; Maryam Ahmadi (ten-year-old son) → Parisa Ahmadi | Ali lives with Maryam; Amir is her son, Mina his sister |
| C1 u01 | words[0].ex, g0 examples[2] | After ten years abroad, Maryam … → Sara …; Reza speaks four languages and teaches them → Tom … | Maryam lives in Shiraz; Tom is the teacher |
| C1 u03 | speaker A; reading + options | manager Lisa → Emma; CEO Mina Karimi → Shirin Moradi | Emma manages Amir; Mina is not a CEO |
| C1 u06 | reading [2] + question | calligrapher Maryam Karimi → Nasrin Karimi | Maryam is a nurse |
| C1 u07 | speaker A | radio host Emma → Rachel | Emma is a manager |
| C1 u08 | speaker B | Jack (doctor) → Dr. Rahimi | Jack works with computers |

Not changed (no explicit clash): neutral one-line examples ("Tom broke his arm", "Mina has a cold"), unnamed first-person
narrators, B1 u05 "Lisa Brown" (a volunteer, compatible with Lisa), places where two cast members talk without saying
where they live (e.g. B2 u05 Lisa and Ali).

### Cross-level repeats: `tools/en_fa_repeats.py`

The script normalizes case, leading a/an/the/to, brackets, punctuation and "…" and compares every `words[].t` and
`phrases[].t` with all lower levels (`--fuzzy` also lists plural/sb/sth near matches). A2–C1 were checked against all lower
levels (B1 included again). Replaced in the higher level (s + pr written, headwords unique in the level and the course):

| Level unit | Old (also taught in) | New |
|---|---|---|
| B1 u05 phrases[0] | In my opinion, … (A2 u05) | It can make a big difference. / می‌تواند تأثیر زیادی داشته باشد. |
| B1 u10 phrases[0] | In my opinion, … (A2 u05) | Let's hope so! / امیدوارم همین‌طور باشد! (recycles the u10 dialogue) |
| C1 u04 phrases[1] | On the one hand, … On the other hand, … (B1 u10) | In theory, … but in practice, … / در تئوری … ولی در عمل … (recycles "In theory, yes." in the u04 dialogue) |

These are kept on purpose and allow-listed in the script, because they are different words: A2 u03 **a cold** (illness)
vs A1 **cold** (adjective), and B1 u07 **book** (verb, reserve) vs A1 **book** (noun). B2 u08 **custom** vs B1 u07 **customs**
is only a near match. No exercise, reading or sentence depended on the replaced phrases. The script now reports 0 repeats.

### Pronunciation dictionary: `tools/en_fa_pr_dict.py` + `content/en-fa/PR_DICT.md`

- **Method:** every `t` (exercise gaps filled with the key; `cue`/`cpr` too) is aligned word by word with its `pr` where
  the counts match. That covers 5,118 of 5,173 objects. The rest are mostly years and numbers written out.
- **Before:** 465 English words were written in more than one way. 27 of them differed in letters (difficult
  دیفیکِلت/دیفِکِلْت, beautiful, museum, message, habit, officer, visitors, perfect, practice …), 3 in vowel marks only
  (weren't, names), and the rest in sukun or ZWNJ only (last لَسْت/لَست, first, it's, online …).
- **Choice:** the majority spelling, with ties going to the headword spelling and then to first use. Overrides follow the
  conventions:
  - /ɪ/ = ی: difficult دیفیکِلت, habit هَبیت, visitors ویزیتِرز (= visit ویزیت), officer آفیسِر (= office آفیس), practical پْرَکْتیکِل
  - kw = کْو: quiet کْوایِت, quite کْوایت (the majority «کوایت» invites "ku-")
  - me = میْ, in "Excuse me." as well
- **Not unified:** weak forms and homographs. The dictionary gives both spellings for the ذِ/ذی, a, can کَن/کِن, have/has
  (هَف/هَس in have/has to), use, used (یوسْت/یوزْد), read رید/رِد, live, lives and close. Only their sukun was unified.
- **Applied:** 1,291 `pr` fields in all levels (A1 59, A2 300, B1 201, B2 328, C1 399 + 4), with 660 distinct token
  changes. Afterwards `report` finds 0 inconsistent words outside the weak forms, and `check` reports 0 differences.
- **PR_DICT.md:** 2,337 entries, alphabetical, covering every word used at least twice plus every word that had variants.
  It also lists the conventions and the weak-form rules. `build` keeps existing entries and adds new words. Later
  authors should run `check` (or `apply`).
- **Note:** this overrides some level-internal choices from pass 4. C1's دیفِکِلْت / هَبِت now follow the course-wide
  majority دیفیکِلت / هَبیت. A few majority choices are careful rather than casual pronunciations (comfortable
  کامفِرتِبِل, supposed سِپُوزْد also in *supposed to*). They were kept for consistency.

## 5. Pass 5 (Nov 2026)

Level tasks of `review/BRIEF_FIX5.md` for A1 (u00–u10), done after the course-wide pass (5a), which was not undone.
After the edits `tools/validate.py content/en-fa/A1/*.json` prints OK for all 11 files, `tools/audit.py` shows only the four
known `pr` false alarms (three slash titles, the u02 phone number), `tools/repeats.py en-fa` and `tools/en_fa_repeats.py`
report 0 repeats, and `tools/en_fa_pr_dict.py check` reports 0 differences (new words were added with `build`).

### Issues and ideas from sections 3 and 4

| # | Item | Status | What was done / reason |
|---|---|---|---|
| 3.1 | A1 does not teach what A2 assumes | done | Instead of a u11 grammar unit, each gap went into the theme unit where it fits, as a third grammar point `g03` (7–8 exercises, explanation, table, examples): **u02** numbers 20–100 (-teen vs -ty stress, forty without u); **u06** does / doesn't in questions, negatives and short answers; **u07** present continuous for "now" (Where are you going? / I'm going to the bank); **u08** object pronouns me, him, her, it, us, them; **u09** days of the week + on Monday / on Fridays (vs in May), the Iranian weekend; **u10** always / usually / sometimes / never with word order (before the verb, after be). New words: thirty, hundred (u02), week, Friday (u09), always, never (u10). New goals in u02, u06–u10. |
| 3.2 | /w/ never taught | done | New u00 sound card **w** (round lips, no teeth on the lip, contrast with very / violin; examples we, water, window). w note added to the u02 g01 explanation (one, twelve, twenty). |
| 3.3 | Cast unstable | done in 5a | Cast sheet and edits by the course-wide pass. All new items follow `content/en-fa/CAST.md` (Ali can't drive, Mina sings, Amir 12 goes to school, Maryam = Amir's mother). |
| 3.4 | Choice items where only `s` excludes a 2nd answer | done | Competing options replaced by impossible forms: u05 g02 X0 [under, next, of], X1 [next to, next, to]; u07 g02 X1 [opposite, next, of]; u09 g01 X1 [raining, rain, rains], X3 [snowing, snow, snows] (now also drills the -ing form). |
| 3.5 | u09 season table vs reading | done | Sentence added to u09 g02: the table is the English division; Iranian seasons start on 1 Farvardin, Tir, Mehr, Dey (about the 21st). |
| 3.6 | Two goal styles | done (content) | All 11 units now use «می‌توانم …». **App:** the heading «در این درس یاد می‌گیرید» does not fit «می‌توانم …»; the lead should change it (e.g. «بعد از این درس:»). |
| 3.7 | u08 reading Q0 presupposes Mina owns the dress | done | → "Mina would like a ___ dress." (s, pr updated; options and key unchanged). |
| 3.8 | "half past seven" is mostly British | done | u06 g02: note + example "It's seven thirty." + table row 7:30. |
| 3.9 | u10 g02 teaches only like + -ing | done | Note: «I like to read هم درست است و در آمریکا رایج است». |
| 3.10 | Phrase `pr` without final period | done | 15 `pr` (phrases, sentences) got the final . / ! / ؟ of their `t`. |
| 3.11 | Emoji repeats across units | done | month 📅 → 🗓️, park 🌳 → 🏞️; the other pairs are solved with `sym` (he/she, brother/sister, wife/husband, breakfast, watch TV, go to bed, go, read, drive, living room, free time are marked, the literal partner stays a picture question). |
| 3.12 | th card "softer" | done | Now: voiced, «با لرزش گلو … مثل فرق «س» و «ز»». |
| 3.13 | TTS risks (digits in tables, slashes, em dashes, Mmm/Hmm) | not done | Central build/TTS work (lead). The new u02 g03 table uses digits like the existing g01 table. |
| 3.14 | «و» for /u/, «ی» for /ɪ/ and /i/ | partly | Convention kept (course level). The ee card now warns that ship / sheep are both «ی» in `pr` and adds the example sheep. |
| 4.1 | Bridge to A2 | done | See 3.1. |
| 4.2 | Adult relevance: jobs, "What do you do?" | not done | A2 u04 is the jobs unit and teaches nurse, engineer, driver, dentist and "What do you do?"; adding them to A1 would make A2 repeat A1 headwords. New A1 items use adults where possible (Tom the teacher, Ali, Maryam, grandparents). Adult dialogues for u07–u09 need new dialogues (bigger work, next pass). |
| 4.3 | Pronunciation in explanations | done | Plural -s /s/ /z/ /ɪz/ (u02 g02), 3rd-person -s (u06 g01), w (u00, u02), ship / sheep (u00), new card **st / sp / sk** (no «اِ» before s: school, street, spring), Wednesday without d (u09 g03), -teen / -ty stress (u02 g03). |
| 4.4 | More varied reading genres | not done | Would need new readings and questions in u06, u08, u09; lower priority than the A2 bridge. Suggestion stays for the next pass. |
| 4.5 | Productive exercises | done | The 52 production items (below) include whole short answers ("No, I don't", "Are you …?", "There are …", "How much are …?", "When is …?") and whole-sentence choices. Longer 7-word `order` items: one new (u06 g03); not more, to keep the counts. |
| 4.6 | Recycling of early words | done | New sentences u05 "My grandmother's chair is next to the window." and u10 "I always have bread and cheese for breakfast."; new items reuse family, food, clothes, places and times. |
| 4.7 | Cultural fit: dollars, polite address | partly | Iranian weekend (Friday) is now taught explicitly (u09 g03). Dollar context and Mr./Mrs. / sir / ma'am chunks not added: the phrase lists are full (8 each) and the three freed slots went to grammar-linked phrases. |
| lead | In-level duplicate phrases | done | u07 p01 "Excuse me." → **"Where are you going?"** (present continuous, u07 g03); u08 p08 "Here you are." → **"Do you have this in blue?"**; u10 p06 "Yes, I do. / No, I don't." → **"Let's play chess!"**. The old chunks stay in the dialogues as recycling. |

### Brief tasks 2–6

- **Production practice:** 52 items (26 grammar points × 1 rewrite + 1 function). In the 20 existing points 40 items replaced the most repetitive ones (counts kept: 7 or 8); the 6 new `g03` points have their own pair. Every item has `cue` + `cpr`, `task`, `s`, `pr`, `why`.
- **`why`:** 155 (every `choice` and `type` grammar exercise of A1).
- **Inference questions:** not required for A1.
- **`sym`:** 40 marks (name, friend, student, yes, no, year, he, she, brother, sister, husband, wife, breakfast, apartment, living room, get up, lunch, dinner, work, go, watch TV, go to bed, morning, evening, night, supermarket, restaurant, pharmacy, weather, the four seasons, month, read, drive, sing, draw, speak English, free time). Literal pictures (food, clothes, colors, rooms, animals) stay unmarked.
- **Recycling:** new items reuse earlier A1 words (family, food, rooms, places, clothes, times, days).

### Counts

| Category | Count |
|---|---|
| Production items (rewrite + function) | 52 |
| `why` | 155 |
| `sym` marks | 40 |
| New grammar points (`g03`) | 6 (43 exercises, 25 examples) |
| New words | 6 (thirty, hundred, week, Friday, always, never) |
| Duplicate phrases replaced | 3 |
| New / changed sound cards | 2 new (w, st / sp / sk), 2 changed (th, ee + sheep) |
| Choice options made unambiguous | 5 |
| Explanation additions | 9 (u01 g02, u02 g01, u02 g02, u06 g01, u06 g02, u09 g02, u10 g02, + w and st cards) |
| Goals unified / added | 6 units prefixed, 6 new goals, 1 reworded (u00) |
| Emoji changed | 3 (month 🗓️, park 🏞️, hundred "" because 💯 has no picture in the image set) |
| `pr` final punctuation | 15 |
| Other | u08 reading Q0 reworded; 2 recycling sentences; u02 g02 X4 now "We are ___." (friends) so it does not repeat the new rewrite |

### For the lead (app)

- Render `cue` (with audio), `task` and `why`, and skip `sym` items in "Which picture is it?" (not yet in `docs/js/lesson.js`).
- Theme units now have 3 grammar points in u02, u06–u10; the single grammar lesson becomes long (21–23 exercises). Consider one lesson per grammar point.
- Goals heading (see 3.6).
- TTS of digits / slashes / em dashes in tables, titles and examples (3.13).
