# en-fa B2: third review pass (Oct 2026)

I checked every item in `content/en-fa/B2/u01.json … u10.json` myself: titles, goals, words and examples, phrases, dialogues, grammar explanations, tables, examples and exercises, readings with their questions, and sentences. On top of that, a script lined up every `t` word with its `pr` word and listed all words written in more than one way in the level. Another script checked that every `the` before a vowel sound is ذی and before a consonant is ذِ. It found no errors. A third script compared the number of words in every `t` and its `pr`, with gaps filled with the keyed answer. All differences are legitimate (numbers, Persian names), so no `pr` is missing a word.

- **Automatic audit** (`review/audit/en-fa-B2.md`): no findings before or after this pass.
- **Headwords taught twice inside the level:** none. There are also no exact duplicates of A1, A2, B1 or C1 headwords or phrases. *Experienced* (B2) vs *experience* (B1) are different words.
- **Name "Neda":** not used anywhere.
- `python3 tools/validate.py content/en-fa/B2/*.json`: OK for all 10 files. `python3 tools/audit.py`: en-fa B2 shows `{}`.

The level was already in very good shape. All grammar explanations are correct, every `choice` has exactly one right option, and all reading answers can be found in the text. Every `pr` is a full sentence that matches the current `t`. The changes below are:
- missing correct answers in `type` items,
- four British words or phrases changed to American English,
- three Persian translations that misled,
- spellings that differed between units, now one spelling per word,
- one real misreading: Canada written as two syllables.

## Changes (47)

Counts: pr 27, exercises 10 (accepted answers or alts), target text 5, translation 4, grammar explanation 1, emoji 0.

| File | JSON path | Old → New | Category | Reason |
|---|---|---|---|---|
| u01 | `grammar[0].exercises[4].answer` | ['waiting'] → ['waiting', 'here', 'sitting', 'standing'] | exercise | "Have you been here / sitting / standing long?" is equally correct; accept it |
| u01 | `dialogue.lines[8].pr` | آفیس → آفِس | pr | office = آفِس in the whole level (2× آفیس, 3× آفِس; C1 also آفِس) |
| u01 | `reading.text[1].pr` | گْرُوینگ → گْرُوئینگ | pr | -o/-u + ing written ُوئینگ everywhere (going, doing, knowing, borrowing already so; 6 tokens were without ئ) |
| u01 | `reading.text[3].pr` | فالُوینگ → فالُوئینگ | pr | -o/-u + ing written ُوئینگ everywhere (going, doing, knowing, borrowing already so; 6 tokens were without ئ) |
| u01 | `reading.questions[3].q.pr` | دویینگ → دوئینگ | pr | -o/-u + ing written ُوئینگ everywhere (going, doing, knowing, borrowing already so; 6 tokens were without ئ) |
| u02 | `grammar[0].exercises[4].answer` | ['waiting'] → ['waiting', 'standing'] | exercise | "They had been standing for two hours when the bus finally came" is also correct |
| u02 | `grammar[1].exercises[4].answer` | ['speaking', 'using'] → ['speaking', 'using', 'hearing', 'reading', 'writing', 'learning', 'studying'] | exercise | "get used to hearing / reading / writing / learning / studying English every day" are all correct; accept them |
| u02 | `grammar[1].exercises[5].answer` | ["isn't", 'is not'] → ["isn't", 'is not', "wasn't", 'was not'] | exercise | "She wasn't used to the noise of the city yet" (past) is also correct |
| u02 | `words[9].ex.pr` | گْرَجواِیشِن → گْرَجوئِیشِن | pr | one spelling for graduate/graduated/graduation in the level (u07 گْرَجوئِیت، گْرَجوئِیتِد) |
| u02 | `dialogue.lines[8].pr` | گْرَجواِیتِد → گْرَجوئِیتِد | pr | one spelling for graduate/graduated/graduation in the level (u07 گْرَجوئِیت، گْرَجوئِیتِد) |
| u02 | `words[8].ex.pr` | کَندا → کَنِدا | pr | Canada /ˈkænədə/ has three syllables; کَندا reads «kanda», so the schwa is written: کَنِدا |
| u02 | `reading.text[3].pr` | کَندا → کَنِدا | pr | Canada /ˈkænədə/ has three syllables; کَندا reads «kanda», so the schwa is written: کَنِدا |
| u02 | `reading.text[12].pr` | ویزیت → ویزِت | pr | visit /ˈvɪzət/ = ویزِت in the whole level (u08 ویزِت ×2, C1 ویزِت/ویزِتِد) |
| u02 | `reading.text[12].pr` | گُوینگ → گُوئینگ | pr | -o/-u + ing written ُوئینگ everywhere (going, doing, knowing, borrowing already so; 6 tokens were without ئ) |
| u03 | `grammar[0].exercises[5].answer` | ['won'] → ['won', 'finished'] | exercise | "I might have finished the race" is also correct and natural |
| u03 | `grammar[1].exercises[3].answer` | ['be', 'feel'] → ['be', 'feel', 'look'] | exercise | "I wouldn't look so tired now" is also correct |
| u03 | `dialogue.lines[6].pr` | گُوینگ → گُوئینگ | pr | -o/-u + ing written ُوئینگ everywhere (going, doing, knowing, borrowing already so; 6 tokens were without ئ) |
| u03 | `grammar[1].exercises[4].pr` | ویزیتِد → ویزِتِد | pr | visit /ˈvɪzət/ = ویزِت in the whole level (u08 ویزِت ×2, C1 ویزِت/ویزِتِد) |
| u03 | `reading.text[2].pr` | فالُوینگ → فالُوئینگ | pr | -o/-u + ing written ُوئینگ everywhere (going, doing, knowing, borrowing already so; 6 tokens were without ئ) |
| u04 | `grammar[0].exercises[5].answer` | ['fixed', 'solved'] → ['fixed', 'solved', 'resolved', 'addressed'] | exercise | "should have been resolved / addressed" is equally correct |
| u04 | `grammar[0].exercises[0].pr` | آفیس → آفِس | pr | office = آفِس in the whole level (2× آفیس, 3× آفِس; C1 also آفِس) |
| u04 | `grammar[0].exercises[6].pr` | ویزیتِد → ویزِتِد | pr | visit /ˈvɪzət/ = ویزِت in the whole level (u08 ویزِت ×2, C1 ویزِت/ویزِتِد) |
| u04 | `grammar[1].examples[2].pr` | سِرْویسْت → سِرْوِسْت | pr | service /ˈsɜrvəs/ = سِرْوِس in the whole level (u10 سِرْوِس، سِرْوِسِز) |
| u04 | `reading.text[12].pr` | سِرْویس → سِرْوِس | pr | service /ˈsɜrvəs/ = سِرْوِس in the whole level (u10 سِرْوِس، سِرْوِسِز) |
| u04 | `reading.text[10].pr` | دیفیکِلْت → دیفِکِلْت | pr | difficult = دیفِکِلْت in the whole level (3× vs 1×) |
| u05 | `grammar[0].exercises[6].answer` | ['taking', 'getting', 'calling'] → ['taking', 'getting', 'calling', 'ordering', 'booking'] | exercise | "suggested ordering / booking a taxi" is equally correct |
| u05 | `reading.text[1].pr` | ویزیتِد → ویزِتِد | pr | visit /ˈvɪzət/ = ویزِت in the whole level (u08 ویزِت ×2, C1 ویزِت/ویزِتِد) |
| u05 | `grammar[1].explain` | **She is known to be very generous.** (معلوم است که خیلی دست‌ودل‌باز است.) → **She is known to be very generous.** (معروف است که خیلی دست‌ودل‌باز است.) | grammar | «معلوم است» reads as "obviously"; is known to be = has this reputation → «معروف است» |
| u05 | `grammar[1].examples[4].s` | معلوم است که مظنون → مشخص شده است که مظنون | translation | «معلوم است» reads as "it is obvious"; "is known to have lived" = it has been established → «مشخص شده است» |
| u06 | `grammar[1].exercises[2].t` | leaving the tap running → leaving the water running | target | American English: "tap" is British; Americans say "leave the water running" (s unchanged: شیر آب را باز نگذاری) |
| u06 | `grammar[1].exercises[2].pr` | لیوینگ ذِ تَپ رانینگ → لیوینگ ذِ واتِر رانینگ | pr | pr follows the new t (water) |
| u06 | `grammar[1].examples[3].t` | garden waste → yard waste | target | American English: leaves and branches from your yard = "yard waste" ("garden waste" is British) |
| u06 | `grammar[1].examples[3].pr` | گاردِن وِیسْت → یارد وِیسْت | pr | pr follows the new t (yard) |
| u06 | `grammar[1].examples[3].s` | زباله‌های باغچه‌شان → برگ و شاخه‌های حیاطشان | translation | matches "yard waste" (leaves and branches from the yard) |
| u06 | `sentences[0].pr` | سام‌وان → سامْوان | pr | someone = سامْوان (as u01; written like سامْثینگ) |
| u06 | `sentences[5].s` | آتش‌سوزی جنگل شاید به دست یک کمپ‌زن بی‌احتیاط شروع شده باشد. → شاید آتش‌سوزی جنگل را کسی شروع کرده باشد که بی‌احتیاط آنجا چادر زده بود. | translation | «کمپ‌زن» is not a Persian word; camper = someone camping there |
| u07 | `grammar[1].exercises[7].alts` | (none) → ['He stayed at home, not feeling well.'] | exercise | the participle clause can also follow the main clause (like u07 g02 X6 "She left early, having finished the exam.") |
| u08 | `words[6].t` | off the beaten track → off the beaten path | target | American English: "off the beaten path" (track = British) |
| u08 | `words[6].pr` | آف ذِ بیتِن تْرَک → آف ذِ بیتِن پَث | pr | pr follows the new t (path /pæθ/) |
| u08 | `words[6].ex.t` | off the beaten track → off the beaten path | target | American English: "off the beaten path" |
| u08 | `words[6].ex.pr` | آف ذِ بیتِن تْرَک → آف ذِ بیتِن پَث | pr | pr follows the new t (path) |
| u08 | `words[9].ex.t` | Accommodation in the city center is very expensive. → Accommodations in the city center are very expensive. | target | American English uses the plural "accommodations" for places to stay |
| u08 | `words[9].ex.pr` | اِکامِدِیشِن این ذِ سیتی سِنْتِر ایز وِری ایکْسْپِنْسیو. → اِکامِدِیشِنْز این ذِ سیتی سِنْتِر آر وِری ایکْسْپِنْسیو. | pr | pr follows the new t |
| u08 | `words[13].ex.pr` | کَندا → کَنِدا | pr | Canada /ˈkænədə/ has three syllables; کَندا reads «kanda», so the schwa is written: کَنِدا |
| u09 | `dialogue.lines[6].pr` | بیئینگ → بیینگ | pr | being = بیینگ (8× in the level and C1) |
| u10 | `dialogue.lines[5].s` | غافلگیری‌های تازه‌ای سرهم می‌کنند → غافلگیری‌های تازه‌ای خلق می‌کنند | translation | «سرهم کردن» = cobble together / make up (negative); "come up with new surprises" is praise |
| u10 | `grammar[0].exercises[4].answer` | ['was'] → ['was', 'is'] | exercise | "It's my brother who broke the TV, not me!" (present be in a cleft about a past event) is also correct |

## Noticed but not changed

- **u09 g01 X4** "If you want to spend less, try ___ for everything in cash for a month." Learners could type *to pay*. That gives a grammatical sentence, but in this context (a suggestion to test a method) and with the Persian «امتحان کن» the item tests *try doing*, so only *paying* is accepted.
- **u08 g01 X3** (two locals → *neither*): *none* is not keyed. With exactly two people, *neither* is the standard form, and that contrast is what the unit teaches.
- **u09 w15 "value for money"** and **"split the bill"** (u09 p08, S7): both are more common in British English. Americans also say them and they are fully understood, so they were kept. Natural American alternatives are "a good value" and "split the check".
- **u05 dialogue "at number twelve"**: house numbers used without a street name are more British. This is understandable and not wrong, so it was kept.
- **Spelling variants that only differ in sukun** were left as they are (فِرسْت / فِرْسْت، ایتس / ایتْس، اُونلی / اُونْلی، آنلاین / آنْلاین، چِینج / چِینْج، اِند / اِنْد). The same applies to unstressed /ɪ/ written ی or ِ in a few other words (perfect پِرفیکْت in u07 g02 X1 and u09 g02 X3, پِرْفِکْت elsewhere). These are readable and correct either way, and the pass-2 reviewer made the same choice. Whole-word variants were unified (see the table).
- **Reading questions use "she" or "he"** in u01, u03, u08 and u09, although those texts never state the writer's gender. The questions can still be answered. This was noted in pass 2 and kept.
- **Facts checked and found correct or properly hedged:** dodo extinct more than 300 years ago (u06); Lake Urmia, "one of the largest salt lakes" in the 1970s and about one tenth of its size by 2014, with a later partial recovery (u06); the University of Bologna is "often called" the oldest in Europe (u07); the Lumière brothers' first paid screening was in Paris (u10); the telephone was invented in the 19th century (u04); almost every shop in Germany is closed on Sundays (u08); many countries have banned single-use straws (u06).
- **People across units**: Mina, Sara, Tom and others appear in unrelated stories (for example, Mina is a doctor in Toronto in the u02 reading and a graduate in u07). They are used as generic names in separate texts and nothing contradicts within a text, so nothing was changed.

## TTS-risky texts (listed only)

- Abbreviation **"vs"** in the u01 g01 title (`pr` reads وِرْسِز); **"TV"** in u10 g01 X1 and X4, g02 X0, the reading and S2.
- Phrases that contain or end in **"…"**: u01 p08; u02 p04; u03 p01, p04 and p08; u04 p06; u05 p01, p02 and p08; u06 p01, p02, p05 and p07; u07 p01; u08 p02.
- **Digits**: u06 w07 ex "300"; u06 R1 and Q0 "1970s"; u06 R4 and Q1 "2014".
- **Persian words in Latin script** inside English sentences: *Chaharshanbe Suri* (u08 w02 ex), *taarof* (u08 dialogue), *Zayandeh Rud* (u06 dialogue), *Urmia* (u06 reading).
- **Capitals for emphasis**: u06 Q2 "NOT".
- **Typographic quotes**: u05 R5; u06 R9; u07 R3; u09 dialogue L10 (“buy.”); u10 R5 and R10.
- Grammar `table` cells contain "/" and "+" by design.
