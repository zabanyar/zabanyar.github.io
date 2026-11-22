# Critical review, pass 4 (Nov 2026): en-fa C1 (u01–u10)

Scope: every item in all 10 units. That covers words (t, s, pr, pl, ex, emoji), phrases, dialogues, grammar (title, explain, table, examples, exercises), reading (text and questions), sentences, goals and titles. Before editing I read `content/SCHEMA.md`, `content/CURRICULUM_NEW_LEVELS.md`, `review/BRIEF_PASS3.md`, `review/en-fa-C1-new.md` and `review/en-fa-C1-pass3.md`.

Checks that were scripted rather than done by eye:
- word-by-word alignment of every English token with its `pr` token across the level
- the/ذی before vowel sounds
- Arabic ي/ك and missing ZWNJ
- British spellings and the name "Neda"
- headwords that repeat within C1 or appear in A1–B2
- which words have emoji in each unit
- every short sentence, dialogue line and phrase that the app turns into an `order` exercise (≤ 8 words, see `docs/js/lesson.js`)

Results after the edits:
- `python3 tools/validate.py content/en-fa/C1/*.json`: OK for all 10 files
- `python3 tools/audit.py`: `en-fa C1: {}` (no findings)

## 1. Verdict

This is a strong, accurate C1 level. Each grammar point follows the curriculum, is explained correctly and precisely in Persian, and is pitched at C1. Points taught in B2 are only referred back to. The English is natural American English. Every `choice` item has exactly one correct option, and every reading question can be answered from its text.

The cultural touches fit an Iranian family without feeling forced: taarof, Hafez, Maryam Mirzakhani, Razi, Nowruz, calligraphy and the tar.

The remaining weaknesses are not language errors:
- **App-generated exercises:** several short sentences can be put in a second correct order that the app would have marked wrong.
- **Pictures:** some emoji clashed with another picture in the same unit.
- **Exercise design:** the exercises are almost all single-gap recognition tasks, so learners rarely have to produce the C1 structures themselves.

## 2. Fixed

25 changes:

| Category | Changes |
|---|---|
| Order `alts` | 13 |
| `pr` | 5 |
| Emoji | 3 |
| `type` answers | 3 |
| Translation | 1 |

| Unit | Path | Before → After | Reason |
|---|---|---|---|
| u01 | `sentences[0].alts` | — → ["Never have I heard Persian so beautifully spoken."] | Second correct order with the same tiles; the app builds an order step from every sentence of ≤ 8 words |
| u01 | `sentences[2].alts` | — → ["With beginners, I do try to speak slowly."] | Second correct order (fronted adverbial) |
| u01 | `sentences[7].alts` | — → ["I didn't understand that joke at all."] | The normal, unfronted order uses the same tiles and is correct; learners were marked wrong for it |
| u02 | `words[3].emoji` (conduct research) | 🔬 → "" | 🔬 and 🧪 (*laboratory*) in the same unit are interchangeable in "see the picture, choose the word". The microscope doesn't picture a verb phrase |
| u02 | `words[10].emoji` (correlation) | 📈 → "" | 📈 is indistinguishable in meaning from 📊 (*data*) in the same unit, and a rising chart does not show correlation |
| u03 | `dialogue.title.pr` | دیفیکِلت → دیفِکِلْت | *difficult*: level spelling, as intended by pass 3 (u03 g02, u06 g01) |
| u03 | `grammar[0].exercises[2].answer` | ["bound","sure","certain"] → […, "doomed"] | "the project is doomed to fail" is correct and matches «حتماً شکست می‌خورد» |
| u03 | `sentences[4].alts` | — → ["Yesterday, we were supposed to meet the client."] | Second correct order (fronted time adverbial) |
| u05 | `words[5].ex.pr` | دیفیکِلت → دیفِکِلْت | *difficult*: level spelling |
| u05 | `reading.text[1].pr` | هَبیت → هَبِت | *habit* /ˈhæbɪt/: level spelling (u05 w04 ex). Pass 3 meant to make this change, but it never reached the file |
| u05 | `sentences[0].alts` | — → ["When I'm concentrating, I hate being interrupted."] | Second correct order |
| u06 | `reading.text[12].pr` | هَبیت → هَبِت | *habit*: same as above (listed in pass 3 but not in the file) |
| u06 | `sentences[0].alts` | — → ["Abstract art isn't to everyone's taste, admittedly."] | Second correct order; the same type was already accepted for *as it happens* in u06 g01 ex8 |
| u07 | `grammar[0].exercises[6].answer` | ["rise","increase","jump"] → […, "spike", "surge"] | "a sharp spike / surge in unemployment" is common, correct and fits «افزایش» |
| u07 | `grammar[1].exercises[4].answer` | ["reach","make","conclude"] → […, "strike"] | "failed to strike an agreement" is a standard collocation |
| u07 | `sentences[1].alts` | — → ["A deep recession seems highly unlikely now.", "Now a deep recession seems highly unlikely."] | Other correct positions of *now* |
| u07 | `sentences[2].alts` | — → ["Last year, pistachio exports rose by ten percent."] | Second correct order (as in u07 g01 ex8) |
| u07 | `dialogue.lines[10].alts` | — → ["Thank you very much for your time, Ali."] | Dialogue lines of ≤ 8 words become order steps; the vocative can go at the end |
| u08 | `words[1].emoji` (clinical trial) | 🧪 → "" | A test tube pictures a lab test, not a trial on people, and clashes with *genetic testing* 🧬 and *placebo* 💊 in the same unit |
| u08 | `words[11].ex.pr` | دیفیکِلْت → دیفِکِلْت | *difficult*: level spelling |
| u08 | `sentences[3].alts` | — → ["Legally and morally, it's a gray area."] | Second correct order |
| u09 | `words[2].s` (the last straw) | تیر خلاص، چیزی که کاسه‌ی صبر را لبریز می‌کند → قطره‌ای که کاسه‌ی صبر را لبریز می‌کند | «تیر خلاص» means a final, fatal blow (coup de grâce), not "the last thing that makes you lose patience". The new gloss is the exact Persian idiom |
| u09 | `sentences[0].alts` | — → ["You'll get the hang of it, don't worry."] | Second correct order |
| u09 | `sentences[5].alts` | — → ["I love my job, don't get me wrong."] | Second correct order |
| u10 | `sentences[6].alts` | — → the 5 other orders of "clear, logical, and persuasive" | In a list of three adjectives every order is grammatical, and the tiles allow all of them |

## 3. Remaining issues (not fixed: they need a decision or more work)

### High
1. **Phrases ending in "…" become order exercises with a "…" tile.**
   - **Problem:** `orderStep` takes phrases of ≤ 8 words. "To put it bluntly, …", "If I understand you correctly, …" and 22 other C1 phrases of ≤ 8 words split into tiles, and "…" is one of them. `normalize()` does not strip it, so the learner has to place the "…" tile as well. TTS also reads these phrases with a trailing ellipsis.
   - **Suggestion (app, not content):** either strip "…" when building order tiles and in `normalize`, or skip phrases that contain "…" when generating order steps.
2. **Very little production of the C1 structures.**
   - **Problem:** The level has 160 grammar exercises. Nearly all are one-gap `choice`/`type` items in which the structure is already half given ("Never ___ such a beautiful poem."). The rest are `order` items. Inversion, the subjunctive, cleft-like fronting, *whereby* and *much as* are never transformed by the learner.
   - **Suggestion:** in each grammar point, turn 2 of the 8 exercises into transformation `type` items with full-sentence answer lists. Example: «I had never seen such chaos. → Never ___ such chaos.» with answer ["have I seen"]. Another: «If you need help, … → ___ you need help, …» with answer ["Should"].

### Medium
3. **Idioms illustrated literally.**
   - **Problem:** These pictures test the literal image, not the meaning:
     - u09 *hit the nail on the head* 🔨
     - u09 *a drop in the bucket* 💧
     - u09 *take something with a grain of salt* 🧂
     - u09 *let the cat out of the bag* 🐈
     - u10 *key point* 🔑

     In "see the picture, choose the word" they are solvable, but they rather contradict the unit's message that idioms do not mean what their words say.
   - **Suggestion:** decide course-wide. Either keep them as memory hooks (and say so in the u09 explanation), or set them to "" so that idiom questions are asked through meaning.
4. **Approximate pictures still in place.** Previous passes kept these deliberately; none clashes with another picture in its unit:
   - u01 *interrupt* ✋ (reads as "stop" or "hello")
   - u03 *vision* 🔭
   - u05 *empathy* 🫂
   - u06 *sculpture* 🗿
   - u10 *handout* 📄
   - u10 *stage fright* 😰 (same picture as u05 *anxiety*; the app never offers two identical pictures together)

   **Suggestion:** if a stricter picture policy is adopted, set *interrupt* and *vision* to "" first.
5. **`needn't have` taught as the main form in an American-English course** (u03 g01, dialogue line 4, reading text 10, sentence 0, exercises 0, 4 and 6).
   - **Problem:** The explanation does say it is mainly British. Still, an American manager (Lisa) uses it naturally in the dialogue.
   - **Suggestion:** keep it as the curriculum point, but put *didn't have to* in the dialogue line and table as the everyday American equivalent. For example: "Well, you didn't have to stay in the office until midnight."
6. **Same name, different people.**
   - **Problem:** Mina is an employee with a British manager (u01), a friend helping with a thesis (u05), a gallery visitor (u06) and an exam candidate (u10). Separately, "Mina Karimi" is a software CEO (u03 reading), and "Maryam Karimi" is a calligrapher (u06 reading), while Maryam is also a dialogue speaker (u04, u08). Adults will cope, but it blurs the recurring characters.
   - **Suggestion:** give the u03 CEO a surname-only identity ("Ms. Karimi") or a name that no dialogue speaker uses.
7. **Persian gloss of *What makes you tick?* (u05 p08)** is «چه چیزی به تو انگیزه می‌دهد؟». The idiom is wider: "what drives you, what makes you the person you are".
   - **Suggestion:** «چه چیزی تو را به حرکت درمی‌آورد؛ چه چیزی تو را همان آدمی می‌کند که هستی؟». Optional.

### Low
8. **Optional sukun differences in `pr`.** Two authors' styles remain, e.g. فِرْسْت/فِرسْت, پُینْت/پُینت, وِرْک/وِرک, دُونْت/دُونت, اینْگْلیش/اینگْلیش. Also:
   - *visit*: ویزیت/ویزِت (pass 3 reported a change to u06 `dialogue.title.pr` that is not in the file; both spellings read correctly)
   - *create*: کْریِیت/کْری‌اِیت

   None changes how a word is read. **Suggestion:** normalize them with a script in one sweep only if the whole course is normalized the same way.
9. **u04 g01 ex2 distractor "Was"** ("___ the government to ban cars…"). *Was* inversion is rare and non-standard, so the key is right, but a very strict reader might object. **Suggestion:** "Had" would be a cleaner distractor.
10. **TTS-risky texts (unchanged, handled centrally):**
    - *C1* (u10 reading text 0)
    - *T-shirt* (u07)
    - *1950* (u06 w15 ex)
    - the colon in u10 dialogue line 0 ("The topic is: …")
    - quotation pairs in u06 g02 and the u01/u02 dialogues
11. **u09 g01 explanation, point 1.** "in the long running" is given as an example of changing singular or plural, which it is not. **Suggestion:** use "in the long runs".

## 4. Improvement ideas (prioritised)

1. **Make learners produce the structures** (see issue 2). This is the biggest gap between the content and real C1 performance. Use transformations, plus 1–2 "rewrite more formally" items per unit: nominalization (u02), subjunctive (u04), and phrasal verb → Latinate verb (u09).
2. **Recycle C1 grammar across units.** Hedging (u02) comes back in u10, which is good. The other points (inversion, *were to / should* conditionals, the subjunctive, *much as*, discourse markers) appear almost only in their own unit. Suggestions:
   - In each later unit's reading or dialogue, use 1–2 structures from earlier units on purpose, e.g. a *Not only …* in u07 and a *Should you …* in u10.
   - Add a 10-item mixed test after u05 and u10 (the app already supports `test` lessons).
3. **Recycle vocabulary.** Words from u01–u05 rarely come back later (e.g. *nuance*, *rigorous*, *accountable*, *resilience*). The readings in u06–u10 could use 2–3 earlier headwords each. This costs nothing and helps long-term memory.
4. **More voices and genres in the dialogues.** Most are two friends or colleagues talking calmly. C1 learners need:
   - a disagreement that stays polite under pressure (u04 and u10 come closest)
   - one more formal setting, such as a job interview (u03), a meeting with a doctor (u08) or a radio debate with interruptions (u10)
5. **Bridge from B2.** u09 (phrasal verbs, register) and u07 (collocations) build well on B2 u10. u01's inversion would gain from one sentence linking it to B2's cleft sentences ("both move focus; cleft adds *It was … that*, inversion swaps subject and auxiliary").
6. **Make cultural content work harder.** The readings are culturally apt: a bilingual family in Hamburg, aging in Iran, a calligrapher from Shiraz, and idioms like «مثل آب خوردن». Two follow-ups would help:
   - A short comparison task: "Which Persian idiom matches *a blessing in disguise*?" as a choice item, with Persian options in `s`.
   - A u05/u08 reading question that asks for the writer's stance, not a fact. C1 reading exams test inference, and every current question is literal.
7. **Make reading questions harder.** All 50 questions are literal retrieval with one obviously right option. **Suggestion:** at least one inference or attitude question per unit, e.g. "What is the writer's attitude to opt-out systems?", with options for supportive, skeptical and neutral that can be told apart only by reading closely.

## 5. Pass 5 (Nov 2026)

I carried out BRIEF_FIX5 tasks 1–7 on all 10 units. The course-wide pass (cast sheet, cross-level repeats, `PR_DICT`)
was already done and was not undone: C1 now uses the course spellings دیفیکِلت / هَبیت. As the brief allows at C1,
**3 of the 8 exercises in every grammar point are now production items** (2 rewrites + 1 function item). All new `pr`/`cpr`
follow `content/en-fa/PR_DICT.md`.

Checks:
- `python3 tools/validate.py content/en-fa/C1/*.json`: OK for all 10 files.
- `python3 tools/audit.py`: `en-fa C1: {}`.
- `python3 tools/repeats.py en-fa`: 0 repeats.
- `python3 tools/en_fa_pr_dict.py check`: 0 differences.

### 5.1 Counts

| Category | Count |
|---|---|
| Production items (task 2) | 60: 40 rewrite `type` items (`cue` + `cpr` + `task`) and 20 function `choice` items. Each grammar point has 2 + 1. They replaced one-word auxiliary or particle gaps, and in a few points the order item that repeated the rewrite. Every point still has 8 exercises. |
| `why` (task 3) | 135: 75 added to existing items and 60 on the new items. Every `choice`/`type` grammar exercise of C1 now has one. |
| Inference / attitude questions (task 4) | 20, two per reading. 6 of them ask about the writer's (or a person's) stance or attitude (u02, u05, u07, u08, u10). |
| `sym` marks (task 5) | 27 |
| Order `alts` | 5 |
| Dialogue lines smoothed | 10, in u01, u03, u04, u05 and u08 |
| Other fixes | 7: u04 X1 distractor; u05 P7 gloss; u09 explanation typo + picture note; u03 table row; u01 explanation bridge to B2; u10 reading sentence recycling *Should you …* |

Examples of the new production items:
- *I had never seen such chaos.* → *Never ___ such chaos.* (*had I seen*)
- *If you need any more information, …* → *___ any more information, …* (*Should you need / Should you require*)
- *Ali should see a doctor. That's my suggestion.* → *I suggest that Ali ___ a doctor.* (*see / should see …*)
- *Prices rose sharply, which worried many families.* → *___ worried many families.* (*A sharp rise in prices*)
- *We've put off the meeting until Monday.* → formal *We have ___ the meeting…* (*postponed*)
- *I like him a lot, but I think he's wrong.* → *___, I think he's wrong.* (*Much as I like him*)

### 5.2 Status of every pass-4 issue and idea

| # | Item | Status |
|---|---|---|
| 3.1 | Phrases ending in "…" become order tiles | **App** (not content): strip "…" in `orderStep`/`normalize`, or skip such phrases (see the app requests). |
| 3.2 | Very little production of C1 structures | **Done** (60 production items, see above). Inversion, *should / were to / but for*, the subjunctive, *much as / however much / strange as*, *whereby*, reduced relatives, nominalization, fronting, emphatic *do*, and formal vs phrasal verbs are now all transformed by the learner. |
| 3.3 | Idioms illustrated literally | **Done.** 🔨 💧 🧂 🐈 (u09) and 🔑 *key point* (u10) are `sym`, so the app no longer asks them as picture questions. The u09 g01 explanation now says these pictures are only memory hooks. 🤒 *under the weather* shows the meaning and stays literal. |
| 3.4 | Approximate pictures | **Done with `sym`**: ✋ interrupt, 🔭 vision, 🫂 empathy, 😰 stage fright / anxiety, 🗣️ tone of voice, 🤝 consensus, 📊 data, 🧪 laboratory, 💰 funding, 🏙️ urbanization, 🏘️ affordable housing, 🏅 reward, ✒️ calligraphy, 🖼️ portrait, 📉 recession, 🌐 globalization, 💊 placebo, 🧬 genetic testing, 🏥 healthcare, 👀 eye contact, 🙋 Q&A session. Literal pictures kept: 🗿 sculpture, 📄 handout, 💉 vaccine. |
| 3.5 | *needn't have* from an American speaker | **Done.** u03 L4 (Emma, American) → *Well, you didn't have to stay in the office until midnight.* The g01 table gains the row *didn't have to + verb (everyday American)*. *needn't have* stays the taught point, and a rewrite item practices it. |
| 3.6 | Same name, different people | **Done course-wide** (CAST.md: Shirin Moradi, Nasrin Karimi, Rachel, Dr. Rahimi). |
| 3.7 | Gloss of *What makes you tick?* | **Done**: «چه چیزی به تو انگیزه می‌دهد و تو را همان آدمی می‌کند که هستی؟» |
| 3.8 | Sukun differences | **Done course-wide** (PR_DICT). |
| 3.9 | u04 g01 distractor *Was* | **Done**: options *Were / Had / If*. |
| 3.10 | TTS-risky texts | **App/central**, unchanged (*C1*, *T-shirt*, the colon in u10 L0, quotation pairs). |
| 3.11 | "in the long running" | **Done** → «نه in the long runs». |
| 4.1 | Production and "rewrite more formally" | **Done**: nominalization (u02), formal *Should you…* (u04), subjunctive (u04), phrasal verb → Latinate verb (*put off → postpone*, *set up → establish*, u09). |
| 4.2 | Recycle C1 grammar | **Partly.** u10 `reading.text[12]` now uses *Should you go blank, simply ask your partner a question…* (u04 structure). Some new u05/u08 function items use earlier structures. The mixed 10-item tests after u05 and u10 are **not done**: they need a `kind: "grammar"` review unit or an app test type (lead's decision). |
| 4.3 | Recycle vocabulary | **Partly**, in the new items (e.g. *Hafez* is kept, *the replication* topic, *carpets*, *taarof*). I did not rewrite the readings. |
| 4.4 | More voices and genres in dialogues | **Not done**: this would need new dialogues. Instead I smoothed the showcase dialogues (5.3). |
| 4.5 | Bridge from B2 | **Done**: u01 g01 explanation line linking inversion with B2 *It was … that* clefts. |
| 4.6 | Cultural content | **Partly**: u09 rewrite «مثل آب خوردن» → *a piece of cake*. Stance questions were added to the u05 and u08 readings (and to u02, u07, u10). |
| 4.7 | Harder reading questions | **Done** (20 inference/attitude questions; u08 asks "skeptical / enthusiastic / completely neutral"). |

### 5.3 Dialogue and text changes (`t`, `s`, `pr` together)

| Unit | Line | Before → After | Why |
|---|---|---|---|
| u01 | L2 | *Never have I heard good work described as "not bad"!* → *I've never heard …* | four inversions in one chat |
| u01 | L3 | *Not only is understatement very common…, but it also…* → *Understatement is very common in Britain, and it makes people sound modest.* | same; *I do understand* (emphatic do) kept |
| u01 | L9 | *Hardly had I sat down when…* → *I'd hardly sat down when…* | same; *Only now do I realize* (L6) kept |
| u03 | L4 | *you needn't have stayed* → *you didn't have to stay* | 3.5 |
| u04 | L1 | *Should it go ahead, it would transform…* → *If it goes ahead, it'll transform…* | six advanced conditionals in a couple's chat |
| u04 | L2 | *were rents to rise around it* → *if rents around it went up* | same |
| u04 | L5 | *But for the grassroots campaign, …* → *If it hadn't been for the grassroots campaign, …* | same; subjunctive, *provided that* and *unless* kept |
| u05 | L10 | *Having written something, you'll find it…* → *Once you've written something, it's much easier…* | participle clause in casual speech |
| u08 | L7 | *Be that as it may, the decision isn't ours…* → *But in the end, the decision isn't ours to make.* | four concession markers in a row |
| u08 | L9 | *Patients given time and support…* → *Patients who are given time and support…* | spoken register |
| u10 | `reading.text[12]` | *Good luck!* → *Should you go blank, simply ask your partner a question; it gives you time to think.* | recycles u04; the reading now has 13 informative sentences |

Order `alts` added: u01 L8 (2); u05 L0; u08 S3 (2: *morally and legally*).
