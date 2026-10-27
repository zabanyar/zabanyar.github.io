# Pass 3 review: en-fa A2 (u01–u10)

I checked every item in all 10 units: the title, the words and their examples, phrases, the dialogue, both grammar points (explain, examples, exercises), the reading with its questions, and the sentences. I started from `review/audit/en-fa-A2.md`. After my edits, `tools/validate.py` prints OK for all 10 files, and `tools/audit.py` shows only two false alarms for A2 (see the end of this report).

## Summary of changes

| Category | Count |
|---|---|
| `pr` added (Task 2: every object with a `t` now has one) | 795 |
| Existing `pr` corrected | 16 |
| Repeated headwords replaced with new words (Task 1) | 6 |
| Target text (`t`) | 6 |
| Translation (`s`) | 5 |
| Grammar explanation | 1 |
| Exercises (`alts` added to order items) | 7 |

## 1. New `pr` on every text object (Task 2)

There are now 0 objects with a `t` and no `pr`. I added 795:

| Where | Count |
|---|---|
| Unit titles | 10 |
| Word examples | 152 |
| Dialogue titles | 10 |
| Dialogue lines | 111 |
| Grammar titles | 20 |
| Grammar examples | 100 |
| Exercises | 158 |
| Reading titles | 10 |
| Reading sentences | 104 |
| Reading questions | 40 |
| Sentences | 80 |

Per unit: u01 79, u02 81, u03 80, u04 80, u05 79, u06 78, u07 78, u08 79, u09 80, u10 81.

**Method.** I built one lexicon of about 930 entries for every word form that appears in A2. I took the spellings already used in the A2 word and phrase guides first, and the B2/C1 spellings for words A2 did not yet have. I then checked every entry by hand against American pronunciation. Every sentence was built from this lexicon and then read through item by item, so each word is spelled the same way everywhere in the level.

**Exercise `pr`.** Each one is the full correct sentence, with the gap filled by the keyed answer (`options[answer]` for choice, the first `answer` for type). None contains `___`.

**Reading questions with a gap.** For the three gap-style reading questions (u01 Q0 and Q1, u05 Q1), the `pr` keeps `___`, so it does not reveal the answer.

**Conventions used throughout** (from CURRICULUM_NEW_LEVELS.md, matching the existing A2 words and phrases):

- **"the"**: «ذِ», but «ذی» before a vowel sound (ذی اِرپُرت، ذی اُولد، ذی آذِر، ذی اِگز، ذی اینتِرنِت).
- **Common short words**: a «اِ» / an «اِن», to / too / two «تو», for / four «فُر», of «آو», and «اَند».
- **"me"**: «میْ» everywhere.
- **Obligation "have to" / "has to"**: «هَف تو» / «هَس تو», which is how it is actually said. The u03 explanation already teaches this pronunciation.
- **-ed endings**: ت / د / ِد as pronounced (واچت، کْلیند، ویزیتِد، داونلُودِد).
- **Past tense and participle "read"**: «رِد» (u01 reading [8]; u08 grammar[1] examples[0] and exercises[0]).
- **"lives" (verb)**: «لیوز», not «لایوز».
- **"close" (verb)**: «کْلُوز».
- **"used" in "has never used"**: «یوزد», not «یوست».
- **"herb" / "herbs"**: «اِرب» / «اِربز», with American silent h.
- **"o'clock"**: «اِکلاک» (schwa).
- **"weren't"**: «وِرنت».
- **"they're"**: «ذِر».
- **"Canada"**: «کَنِدا».
- **Persian names and places** are in normal Persian spelling (رضا، مریم، مینا، اصفهان، مشهد، تبریز، کیش، دماوند، نوروز، کوکو سبزی).
- **English names** are written by sound (اِما، تام، جَک، لیسا).
- **Numbers and dates are written out**: 38 is «ثِرتی اِیت», June 12th is «جون تْوِلفث», May 20th is «مِی تْوِنتیِث».
- **Quotation marks** in the text become «…» in the guide.
- **Sukun** goes on initial consonant clusters, as in the existing A2 guides (سْتِی، تْریپ، سْکْرین، سْتْریت).

## 2. Repeated headwords replaced (Task 1)

The id is kept each time. None of the new words appears as a headword anywhere in en-fa A1–C1.

| File | Path | Old → New | Reason |
|---|---|---|---|
| u07 | words[3] | price → **wallet** (pl wallets, «والِت», «کیف پول», 👛). Ex: "I can't find my wallet!" «کیف پولم را پیدا نمی‌کنم!» | "price" is already taught in u05 |
| u07 | words[4] | cheap → **cost** («کاست», «قیمت داشتن»). Ex: "How much does this scarf cost?" «این شال‌گردن چند است؟» | "cheap" is already taught in u05 |
| u07 | words[5] | expensive → **save money** («سِیو مانی», «پس‌انداز کردن»). Ex: "I'm saving money for a new car." | "expensive" is already taught in u05 |
| u09 | words[12] | quiet → **downtown** («داونتاون», «مرکز شهر؛ به مرکز شهر», 🏙️). Ex: "We took the bus downtown." | "quiet" is already taught in u05. "downtown" is also used in u09 sentences[5]. |
| u09 | words[13] | noisy → **parking lot** (pl parking lots, «پارکینگ لات», 🅿️). Ex: "There's a big parking lot behind the supermarket." | "noisy" is already taught in u05 |
| u10 | words[10] | relative → **bride** (pl brides, «بْراید», «عروس», 👰). Ex: "The bride wore a beautiful white dress." | "relative" is already taught in u01. "bride" fits the wedding theme and reading. |

## 3. Other changes

| File | Path | Old → New | Reason |
|---|---|---|---|
| u06 | reading.text[0].s | «اسم من **نداست** و …» → «اسم من **میناست** و …» | The translation still said Neda, but the text says Mina (rule 5) |
| u02 | title.t | Holidays and travel → **Vacations and travel** | American English: a trip away is a "vacation" (rule 4) |
| u02 | words[6].pr (airport) | اِرپورت → اِرپُرت | /ˈɛrpɔrt/: /ɔr/ is written «ُر», as in passport «پَسپُرت» |
| u02 | phrases[1].pr | …یو گو؟ → …یو گُو؟ | "go" /goʊ/ is «گُو» everywhere else |
| u05 | words[10].pr (noisy) | نویزی → نُیزی | /ɔɪ/ is written «ُی» |
| u06 | words[3].pr (oil) | اویل → اُیل | /ɔɪl/. The old guide reads as "u-yl" |
| u06 | words[13].pr (boil) | بویل → بُیل | /bɔɪl/ |
| u06 | phrases[5].pr | …پلیز؟ → …پْلیز؟ | "please" with a cluster sukun, as everywhere else |
| u08 | words[12].pr (video call) | ویدیو کال → ویدیُو کال | The final /oʊ/ is «ُو» |
| u09 | words[5].pr and phrases[3].pr (corner) | کورنِر → کُرنِر | /ˈkɔrnər/: /ɔr/ is «ُر». The old guide reads as "koor-ner" |
| u08 | phrases[0].pr | …هیر می؟ → …هیر میْ؟ | "me" is «میْ» |
| u09 | phrases[0].pr | ایکسکیوز می، → ایکسکیوز میْ، | "me" is «میْ» |
| u10 | phrases[3].pr | …اینوایتینگ می. → …اینوایتینگ میْ. | "me" is «میْ» |
| u01 | phrases[1].pr and phrases[5].pr | گرِیت → گْرِیت | Initial cluster sukun, consistent with every other occurrence |
| u04 | words[14].pr | وِرک فرام هُوم → وِرک فْرام هُوم | Same as above for "from" (13 occurrences) |
| u08 | phrases[3].pr | ذِ اینتِرنِت… → ذی اینتِرنِت… | "the" before a vowel is /ði/ |
| u04 | words[13].ex t/s | "**Mina** has a part-time job at a bookstore." → "**Amir** has …" «امیر در یک کتاب‌فروشی کار پاره‌وقت دارد.» | In this unit's reading, Mina is a full-time dentist. Amir has no job anywhere else in the level. |
| u04 | grammar[0].exercises[4] t/s | "**Mina** ___ English at a school. She's a teacher." → "**Emma** ___ …" «اِما در یک مدرسه…» | Same Mina clash. Emma has no job elsewhere in u04. |
| u05 | grammar[1].exercises[2].t | "… He always gets 20." → "… He always gets **twenty out of twenty**." | "gets 20" is unclear in English (and gave the voice a bare digit). The new wording is natural and keeps the Iranian 20-point scale. The answer "best" is unchanged. |
| u10 | words[9].ex t/s | "We visit our relatives at New Year." → "We always visit our relatives **for the New Year**." «ما همیشه سال نو به دیدن فامیل می‌رویم.» | "at New Year" is British |
| u10 | grammar[1].exercises[4].t | "…relatives at New Year." → "…relatives **for the New Year**." | Same reason. The answer "going" is unchanged. |
| u01 | grammar[1].explain | "«ید» در **visited** (ویزیتید)" → "«اِد» در **visited** (ویزیتِد)" | /ɪd/ is written «ِد» in the guide convention. This now matches every `pr` (ویزیتِد، داونلُودِد، اینوایتِد). |
| u01 | grammar[1].exercises[6] alts | + "On Saturday I cleaned the house." | A natural second word order made from the same tiles |
| u01 | grammar[1].exercises[7] alts | + "After dinner we went for a walk." | Natural second word order |
| u03 | grammar[1].exercises[7] alts | + "Tomorrow we have to get up early." | Natural second word order |
| u04 | grammar[0].exercises[7] alts | + "Today she is working from home." | Natural second word order |
| u04 | grammar[1].exercises[6] alts | + "At ten I'm meeting my boss." | Natural second word order |
| u09 | grammar[0].exercises[6] alts | + "At the lights walk across the street." | Natural in directions |
| u10 | grammar[1].exercises[7] alts | + "I'll bring some flowers, don't worry." | Natural second word order |

## Noticed but not changed

- **Audit false alarm: u04 grammar[1].exercises[3]**, "Ali ___ working tomorrow. It's a holiday." Here "holiday" means a public holiday, which is correct American usage (rule 4). The audit regex flags every "holiday".
- **Audit false alarm: u06 grammar[1].title**, "much / many / a lot of; How much? / How many?". The word-count warning only happens because the "/" signs are counted as words in the `pr`. The `pr` itself is complete and correct.
- **Names across units.** The same names are reused for different people in different units:
  - Mina is "Dr. Mina" (a doctor) in u03 and a dentist in the u04 reading. A dentist is also addressed as "Dr.", so this is a mild clash only.
  - Ali is 45 and works in an office in the u03 reading, but is "the best student in our class" in the u05 exercise.
  - Reza is a taxi driver in the u04 grammar example, but works with Emma in u01.
  - Emma works with Reza in u01, lives abroad and visits Iran in u02, is a shop assistant in u07, and marries Jack in u10.
  - Mina's brother is Amir in u04 and Ali in u10. She could have two brothers.

  The reused names do not contradict each other within any single unit. Fixing them across units would mean rewriting many items, so I only fixed the clash inside u04.
- **u05 grammar[0].exercises[7]**, "The red car is cheaper than the blue one." Swapping red and blue gives a grammatical sentence with the opposite meaning. The Persian prompt settles it, so I added no `alts`.
- **Same spelling for different words.** "were", "where" and "wear" are all «وِر». "boss" and "bus" are both «باس». "to", "too" and "two" are all «تو». "very" and "worry" are both «وِری». Persian script cannot tell these apart, and B2/C1 do the same.
- **"should" «شود»** can be misread as the Persian word "shavad". This is the course-wide convention (/ʊ/ is «و»), so I left it.
- **Ezafe spelling style**: u01–u05 use «هٔ» and u06–u10 use «ه‌ی». Both are correct.

## TTS-risky target texts (not changed, for central handling)

- **"/" in `t`**:
  - u01 g0 title and table
  - u02 p05, g0 title and table, g1 table
  - u03 g0 and g1 titles and tables
  - u05 p07 and tables
  - u06 g0 and g1 titles, g1 table
  - u07 g1 title
  - u08 g0 and g1 titles, g0 table
  - u09 g0 table, g1 title
  - u10 g0 title and table
- **"…"**:
  - u02 g0 title
  - u03 p02 "My … hurts."
  - u05 p06
  - u06 g1 table
  - u08 dialogue [8] "OK… Done!"
  - u08 g0 table
  - u10 g0 title and table
- **"+ − → ('m)"** in tables: u02 g0/g1, u07 g1 table, u08 g0, u10 g1.
- **"–" between two speakers inside one item**:
  - u07 g0 ex[3]
  - u08 g0 ex[3], X3
  - u09 g1 ex[4], X4
  - u10 g1 ex[1], X0, X1
- **Abbreviations and figures**:
  - "vs." (u04 g0 title) and "vs" (u10 g1 title)
  - "June 12th" and "May 20th" (u10 reading [2], [8] and Q3 options)
  - "38 degrees" (u05 g0 X3)
- **Interjections and hyphenated words**:
  - "Hmm" (u03 [4], u05 [3], u07 [5])
  - "Ha!" (u05 [8])
  - "Wi-Fi", "part-time", "old-fashioned"
