# Review pass 3: en-fa A1 (u00–u10)

I read every item of every unit (letters, sounds, words and examples, phrases, dialogues, grammar explanations, tables, examples and exercises, readings and questions, sentences). I started from the audit file `review/audit/en-fa-A1.md`.

`python3 tools/validate.py content/en-fa/A1/*.json` prints OK for all 11 files. `python3 tools/audit.py` shows 4 findings for A1, and all 4 are false alarms: the word counter counts the "/" separators in grammar-title guides (u03, u05, u08) and the hyphenated phone number in u02 `dialogue.lines[7]`. There are no duplicates left.

## Conventions used for the new `pr` guides

- I reused the level's existing word spellings everywhere. Every English word in A1 now has one spelling in all units (checked automatically). The only planned exceptions are weak/strong **can** and **the** before a vowel (both explained below).
- I wrote the guides by sound, in American English, following CURRICULUM_NEW_LEVELS.md:
  - the = «ذِ», and «ذی» before a vowel sound (ذی اَپِل، ذی ایوْنینگ، ذی اَفتِرنون)
  - a = «اِ», an = «اِن», of = «آو»
  - there/their/they're = «ذِر»
  - those = «ذُوز», our = «آوِر», has = «هَز», his/he's = «هیز»
  - "me" inside a sentence = «میْ»
- **Exercise guides give the full correct sentence**, with the gap filled by the key (the first accepted answer for `type`).
- **Reading questions that contain ___** (u06 q1–q3, u10 q1) keep ___ in the guide, because the gap is the question itself.
- **Names:** Persian names are in normal Persian spelling (علی، مینا، رضا، تهران، شیراز، نوروز). English names are written by sound (تام، اِما، جَک، لیسا، مَکس). Possessives add ز (میناز، علیز), as in B2. America = «اِمِریکا».
- **Weak can:** «کِن» before a verb or subject (I can swim «آی کِن سْویم», Can you …? «کِن یو …؟»). Strong «کَن» in short answers and in the title (Yes, I can «یِس، آی کَن»). can't is always «کَنت». This is the main way American listeners tell can from can't. I added one line about it to the u10 grammar explanation.
- **Sukun on consonant clusters** (convention: پْلیز، سْتُری): u06–u10 already used it, but u00–u05 did not. I made the level consistent by adding the sukun to the u00–u05 words that start with a cluster (table B).
- **o'clock:** «اُکلاک» → «اِکْلاک». The first vowel is a schwa /əˈklɑk/, which is the course convention and the B2/C1 spelling.

## A. Content changes (target text, translation, exercises, headwords, explanation)

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u01 | `reading.text[3].t` | This is Emma. → This is Lisa. | reading: Emma is 13 and a student in u02 (dialogue + reading) but a teacher here; renamed this teacher Lisa (course name list) |
| u01 | `reading.text[3].s` | این اِما است. → این لیزا است. | reading: Emma is 13 and a student in u02 (dialogue + reading) but a teacher here; renamed this teacher Lisa (course name list) |
| u01 | `reading.text[5].t` | Emma is from America. → Lisa is from America. | reading: Emma is 13 and a student in u02 (dialogue + reading) but a teacher here; renamed this teacher Lisa (course name list) |
| u01 | `reading.text[5].s` | اِما اهل آمریکاست. → لیزا اهل آمریکاست. | reading: Emma is 13 and a student in u02 (dialogue + reading) but a teacher here; renamed this teacher Lisa (course name list) |
| u01 | `reading.questions[2].q.t` | Where is Emma from? → Where is Lisa from? | reading: Emma is 13 and a student in u02 (dialogue + reading) but a teacher here; renamed this teacher Lisa (course name list) |
| u01 | `reading.questions[2].q.s` | اِما اهل کجاست؟ → لیزا اهل کجاست؟ | reading: Emma is 13 and a student in u02 (dialogue + reading) but a teacher here; renamed this teacher Lisa (course name list) |
| u01 | `reading.questions[3].q.t` | Is Emma a student? → Is Lisa a student? | reading: Emma is 13 and a student in u02 (dialogue + reading) but a teacher here; renamed this teacher Lisa (course name list) |
| u01 | `reading.questions[3].q.s` | آیا اِما دانشجو است؟ → آیا لیزا دانشجو است؟ | reading: Emma is 13 and a student in u02 (dialogue + reading) but a teacher here; renamed this teacher Lisa (course name list) |
| u02 | `words[1].ex.t` | Amir is one year old. → My cat is one year old. | consistency: Amir is 12 (u10) — "one year old" made him a baby |
| u02 | `words[1].ex.s` | امیر یک‌ساله است. → گربهٔ من یک‌ساله است. | consistency: Amir is 12 (u10) — "one year old" made him a baby |
| u02 | `words[5].ex.t` | Maryam is five years old. → My dog is five years old. | consistency: Maryam is the mother of Mina and Amir (u03, u04, u06, u08), not five years old |
| u02 | `words[5].ex.s` | مریم پنج‌ساله است. → سگ من پنج‌ساله است. | consistency: Maryam is the mother of Mina and Amir (u03, u04, u06, u08), not five years old |
| u02 | `words[7].ex.t` | Tom is seven years old. → Jack is seven years old. | consistency: Tom is a teacher in u01 (and an adult later), not a 7-year-old boy; used Jack (course name list) |
| u02 | `words[7].ex.s` | تام هفت‌ساله است. → جک هفت‌ساله است. | consistency: Tom is a teacher in u01 (and an adult later), not a 7-year-old boy; used Jack (course name list) |
| u02 | `words[12].ex.t` | Tom is a boy. He is seven. → Amir is a boy. He is twelve. | consistency: Tom is a teacher (u01); Amir is the 12-year-old boy of the course family (u10) |
| u02 | `words[12].ex.s` | تام پسر است. او هفت‌ساله است. → امیر پسر است. او دوازده‌ساله است. | consistency: Tom is a teacher (u01); Amir is the 12-year-old boy of the course family (u10) |
| u02 | `words[13].ex.t` | Sara is a girl. She is six. → Emma is a girl. She is thirteen. | consistency: Sara is an adult with her own apartment (u05); Emma is the 13-year-old girl of this unit |
| u02 | `words[13].ex.s` | سارا دختر است. او شش‌ساله است. → اِما دختر است. او سیزده‌ساله است. | consistency: Sara is an adult with her own apartment (u05); Emma is the 13-year-old girl of this unit |
| u02 | `grammar[0].exercises[2].t` | Amir is one ___ old. → My cat is one ___ old. | consistency: Amir is 12 (u10), not one year old |
| u02 | `grammar[0].exercises[2].s` | امیر یک‌ساله است. → گربهٔ من یک‌ساله است. | consistency: Amir is 12 (u10), not one year old |
| u02 | `dialogue.speakers.B.name` | Ali → Amir | consistency: Ali is the father of Mina and Amir (u03, u10); the 11-year-old friend is now Amir (12, as in u10) |
| u02 | `dialogue.lines[0].t` | Hi, Ali! → Hi, Amir! | consistency: Ali is the father of Mina and Amir (u03, u10); the 11-year-old friend is now Amir (12, as in u10) |
| u02 | `dialogue.lines[0].s` | سلام علی! → سلام امیر! | consistency: Ali is the father of Mina and Amir (u03, u10); the 11-year-old friend is now Amir (12, as in u10) |
| u02 | `dialogue.lines[5].t` | I'm eleven years old. → I'm twelve years old. | consistency: Ali is the father of Mina and Amir (u03, u10); the 11-year-old friend is now Amir (12, as in u10) |
| u02 | `dialogue.lines[5].s` | من یازده سالم است. → من دوازده سالم است. | consistency: Ali is the father of Mina and Amir (u03, u10); the 11-year-old friend is now Amir (12, as in u10) |
| u02 | `dialogue.lines[6].t` | What's your phone number, Ali? → What's your phone number, Amir? | consistency: Ali is the father of Mina and Amir (u03, u10); the 11-year-old friend is now Amir (12, as in u10) |
| u02 | `dialogue.lines[6].s` | علی، شمارهٔ تلفنت چیست؟ → امیر، شمارهٔ تلفنت چیست؟ | consistency: Ali is the father of Mina and Amir (u03, u10); the 11-year-old friend is now Amir (12, as in u10) |
| u02 | `reading.title.t` | Hello, I'm Mina! → Hello, I'm Emma! | consistency: Mina is 15 (u03) and Ali her father; reading now told by Emma (13, as in this dialogue) with friends Mina (15), Amir (12) and Reza |
| u02 | `reading.title.s` | سلام، من مینا هستم! → سلام، من اِما هستم! | consistency: Mina is 15 (u03) and Ali her father; reading now told by Emma (13, as in this dialogue) with friends Mina (15), Amir (12) and Reza |
| u02 | `reading.text[0].t` | Hello! My name is Mina. → Hello! My name is Emma. | consistency: Mina is 15 (u03) and Ali her father; reading now told by Emma (13, as in this dialogue) with friends Mina (15), Amir (12) and Reza |
| u02 | `reading.text[0].s` | سلام! اسم من مینا است. → سلام! اسم من اِما است. | consistency: Mina is 15 (u03) and Ali her father; reading now told by Emma (13, as in this dialogue) with friends Mina (15), Amir (12) and Reza |
| u02 | `reading.text[1].t` | I'm from Iran, and I'm twelve years old. → I'm from America, and I'm thirteen years old. | consistency: Mina is 15 (u03) and Ali her father; reading now told by Emma (13, as in this dialogue) with friends Mina (15), Amir (12) and Reza |
| u02 | `reading.text[1].s` | من اهل ایران هستم و دوازده سالم است. → من اهل آمریکا هستم و سیزده سالم است. | consistency: Mina is 15 (u03) and Ali her father; reading now told by Emma (13, as in this dialogue) with friends Mina (15), Amir (12) and Reza |
| u02 | `reading.text[2].t` | Emma is my friend. → Mina is my friend. | consistency: Mina is 15 (u03) and Ali her father; reading now told by Emma (13, as in this dialogue) with friends Mina (15), Amir (12) and Reza |
| u02 | `reading.text[2].s` | اِما دوست من است. → مینا دوست من است. | consistency: Mina is 15 (u03) and Ali her father; reading now told by Emma (13, as in this dialogue) with friends Mina (15), Amir (12) and Reza |
| u02 | `reading.text[3].t` | She is from America. She is thirteen. → She is from Iran. She is fifteen. | consistency: Mina is 15 (u03) and Ali her father; reading now told by Emma (13, as in this dialogue) with friends Mina (15), Amir (12) and Reza |
| u02 | `reading.text[3].s` | او اهل آمریکاست. او سیزده سالش است. → او اهل ایران است. او پانزده سالش است. | consistency: Mina is 15 (u03) and Ali her father; reading now told by Emma (13, as in this dialogue) with friends Mina (15), Amir (12) and Reza |
| u02 | `reading.text[4].t` | Ali and Reza are my friends, too. → Amir and Reza are my friends, too. | consistency: Mina is 15 (u03) and Ali her father; reading now told by Emma (13, as in this dialogue) with friends Mina (15), Amir (12) and Reza |
| u02 | `reading.text[4].s` | علی و رضا هم دوستان من هستند. → امیر و رضا هم دوستان من هستند. | consistency: Mina is 15 (u03) and Ali her father; reading now told by Emma (13, as in this dialogue) with friends Mina (15), Amir (12) and Reza |
| u02 | `reading.text[6].t` | Ali is eleven, and Reza is fourteen. → Amir is twelve, and Reza is fourteen. | consistency: Mina is 15 (u03) and Ali her father; reading now told by Emma (13, as in this dialogue) with friends Mina (15), Amir (12) and Reza |
| u02 | `reading.text[6].s` | علی یازده سالش است و رضا چهارده سالش است. → امیر دوازده سالش است و رضا چهارده سالش است. | consistency: Mina is 15 (u03) and Ali her father; reading now told by Emma (13, as in this dialogue) with friends Mina (15), Amir (12) and Reza |
| u02 | `reading.questions[0].options` | ['twelve', 'thirteen', 'twenty'] → ['fifteen', 'thirteen', 'twenty'] | consistency: Mina is 15 (u03) and Ali her father; reading now told by Emma (13, as in this dialogue) with friends Mina (15), Amir (12) and Reza |
| u02 | `reading.questions[1].q.t` | Where is Emma from? → Where is Mina from? | consistency: Mina is 15 (u03) and Ali her father; reading now told by Emma (13, as in this dialogue) with friends Mina (15), Amir (12) and Reza |
| u02 | `reading.questions[1].q.s` | اِما اهل کجاست؟ → مینا اهل کجاست؟ | consistency: Mina is 15 (u03) and Ali her father; reading now told by Emma (13, as in this dialogue) with friends Mina (15), Amir (12) and Reza |
| u02 | `reading.questions[1].answer` | 1 → 0 | consistency: Mina is 15 (u03) and Ali her father; reading now told by Emma (13, as in this dialogue) with friends Mina (15), Amir (12) and Reza (answer: Iran) |
| u02 | `reading.questions[3].q.t` | Are Ali and Reza girls? → Are Amir and Reza girls? | consistency: Mina is 15 (u03) and Ali her father; reading now told by Emma (13, as in this dialogue) with friends Mina (15), Amir (12) and Reza |
| u02 | `reading.questions[3].q.s` | آیا علی و رضا دختر هستند؟ → آیا امیر و رضا دختر هستند؟ | consistency: Mina is 15 (u03) and Ali her father; reading now told by Emma (13, as in this dialogue) with friends Mina (15), Amir (12) and Reza |
| u03 | `dialogue.speakers.B.name` | Reza → Amir | consistency: the reading of this unit gives Amir exactly this family (father Ali, mother Maryam, sister Mina 15) plus a baby brother; the boy is now Amir and names both siblings |
| u03 | `dialogue.lines[0].t` | Who is this, Reza? → Who is this, Amir? | consistency: the reading of this unit gives Amir exactly this family (father Ali, mother Maryam, sister Mina 15) plus a baby brother; the boy is now Amir and names both siblings |
| u03 | `dialogue.lines[0].s` | رضا، این کیست؟ → امیر، این کیست؟ | consistency: the reading of this unit gives Amir exactly this family (father Ali, mother Maryam, sister Mina 15) plus a baby brother; the boy is now Amir and names both siblings |
| u03 | `dialogue.lines[5].t` | Yes, I have one sister. Her name is Mina. She's fifteen. → Yes, I have one sister and one brother. My sister's name is Mina. She's fifteen. | consistency: the reading of this unit gives Amir exactly this family (father Ali, mother Maryam, sister Mina 15) plus a baby brother; the boy is now Amir and names both siblings |
| u03 | `dialogue.lines[5].s` | بله، یک خواهر دارم. اسمش مینا است. پانزده سالش است. → بله، یک خواهر و یک برادر دارم. اسم خواهرم مینا است. پانزده سالش است. | consistency: the reading of this unit gives Amir exactly this family (father Ali, mother Maryam, sister Mina 15) plus a baby brother; the boy is now Amir and names both siblings |
| u04 | `words[6].ex.t` | I'd like an orange juice, please. → I'd like some orange juice, please. | consistency with g01 (juice/water/tea are uncountable: no a/an, use some); "an orange juice" contradicted the rule |
| u04 | `words[6].ex.s` | لطفاً یک آب‌پرتقال می‌خواهم. → لطفاً کمی آب‌پرتقال می‌خواهم. | consistency with g01 (juice/water/tea are uncountable: no a/an, use some); "an orange juice" contradicted the rule |
| u04 | `grammar[1].exercises[2].t` | ___ like a coffee, please. → ___ like some coffee, please. | consistency with g01 (drinks are uncountable → some); "a coffee" contradicted the rule taught in this unit |
| u04 | `grammar[1].exercises[2].s` | لطفاً یک قهوه می‌خواهم. → لطفاً کمی قهوه می‌خواهم. | consistency with g01 (drinks are uncountable → some); "a coffee" contradicted the rule taught in this unit |
| u06 | `words[1]` | breakfast (taught in u04) → afternoon / بعدازظهر / اَفتِرنون / emoji "" / ex "I come home in the afternoon." | duplicate headword (breakfast = u04 words[13]); afternoon completes morning/evening/night and is not taught elsewhere in en-fa |
| u08 | `words[7]` | bag (taught in u00) → hat / کلاه / هَت / 🧢 / ex "This hat is too big." | duplicate headword (bag = u00 words[2]); hat fits clothes and is not taught elsewhere in en-fa |
| u09 | `reading.text[1].t` | Spring is in March, April, and May. → Spring starts in March and ends in June. | fact: the reading is about Iran, where spring runs from Nowruz (20/21 March) to about 21 June; "March, April, and May" also contradicted the next sentence (Nowruz = first day of spring) |
| u09 | `reading.text[1].s` | بهار در ماه‌های مارس، آوریل و مه است. → بهار در ماه مارس شروع می‌شود و در ماه ژوئن تمام می‌شود. | fact: the reading is about Iran, where spring runs from Nowruz (20/21 March) to about 21 June; "March, April, and May" also contradicted the next sentence (Nowruz = first day of spring) |
| u10 | `grammar[0].explain` | … → (added one line on weak can /kən/ vs full can't /kænt/) | pronunciation: Americans tell can from can't mainly by the weak vowel of can; the pr guides now show «کِن» for weak can |

## B. Existing `pr` corrected or normalised (28)

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u00 | `letters[6].ex.pr` | گرِیپس → گْرِیپس | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u00 | `letters[8].ex.pr` | آیس کریم → آیس کْریم | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u00 | `letters[19].ex.pr` | تری → تْری | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u00 | `letters[20].ex.pr` | آمبرِلا → آمبْرِلا | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u00 | `sounds[2].ex[0].pr` | ثری → ثْری | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u00 | `sounds[3].ex[0].pr` | تری → تْری | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u00 | `sounds[3].ex[2].pr` | گرین → گْرین | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u01 | `words[8].pr` | فرِند → فْرِند | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u01 | `words[9].pr` | ستودِنت → سْتودِنت | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u01 | `words[11].pr` | فرام → فْرام | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u01 | `phrases[6].pr` | وِر آر یو فرام؟ → وِر آر یو فْرام؟ | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u02 | `words[3].pr` | ثری → ثْری | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u03 | `words[4].pr` | براذِر → بْراذِر | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u03 | `words[10].pr` | گرَندماذِر → گْرَندماذِر | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u03 | `words[11].pr` | گرَندفاذِر → گْرَندفاذِر | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u03 | `phrases[2].pr` | دو یو هَو اِنی براذِرز اُر سیستِرز؟ → دو یو هَو اِنی بْراذِرز اُر سیستِرز؟ | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u03 | `phrases[3].pr` | آی هَو وان براذِر اَند تو سیستِرز. → آی هَو وان بْراذِر اَند تو سیستِرز. | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u04 | `words[0].pr` | برِد → بْرِد | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u04 | `words[13].pr` | برِکفِست → بْرِکفِست | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u04 | `phrases[0].pr` | آید لایک …، پلیز. → آید لایک …، پْلیز. | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u05 | `words[12].pr` | فریج → فْریج | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u05 | `words[13].pr` | پلَنت → پْلَنت | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u05 | `phrases[1].pr` | کام این، پلیز. → کام این، پْلیز. | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u05 | `phrases[7].pr` | سیت داون، پلیز. → سیت داون، پْلیز. | consonant cluster gets a sukun, so the word is written the same in every unit (u06–u10 and convention: پْلیز، سْتْریت) |
| u06 | `phrases[1].pr` | ایتس سِوِن اُکلاک → ایتس سِوِن اِکْلاک | o'clock = /əˈklɑk/: schwa «اِ», not «اُ»; same as B2/C1 |
| u06 | `phrases[3].pr` | اَت اِیت اُکلاک → اَت اِیت اِکْلاک | o'clock = /əˈklɑk/: schwa «اِ», not «اُ»; same as B2/C1 |
| u08 | `phrases[3].pr` | کَن آی هِلپ یو؟ → کِن آی هِلپ یو؟ | weak can /kən/ in a question (see conventions) |
| u10 | `phrases[2].pr` | کَن یو سْویم؟ → کِن یو سْویم؟ | weak can /kən/ in a question (see conventions) |

## C. `pr` added (731)

I added a pr to every object that has a `t` but had no pr: titles, word examples, dialogue lines, grammar titles and examples, exercises (as full sentences), reading sentences and questions, sentences, and the six u00 sound headers (sh «ش», ch «چ», th «ث / ذ», ee «ای», oo «او», silent e «سایلِنت ای»). Per unit: u00: 15, u01: 73, u02: 72, u03: 75, u04: 70, u05: 74, u06: 71, u07: 70, u08: 71, u09: 70, u10: 70. The full list is in the appendix.

## Counts by category

- **pr:** 731 added, plus 28 corrected or normalised (2 weak can, 2 o'clock, 24 cluster sukun).
- **target text:** 27 field edits:
  - u01 reading: Emma → Lisa (4)
  - u02: word examples (5), dialogue (4), reading title and 6 sentences (7), questions (2)
  - u03 dialogue (3)
  - u04 word example (1)
  - u09 reading spring (1)
- **translation:** 25. These are the `s` fields that go with the target-text edits above.
- **exercises:** 6:
  - u02 g01 ex2: t and s
  - u02 reading q0 options and q1 answer
  - u04 g02 ex2: t and s
- **grammar explanation:** 1 (u10 g01: weak can vs can't)
- **duplicate headwords replaced:** 2:
  - u06 w02 breakfast → afternoon
  - u08 w08 bag → hat
- **emoji:** 0 changed. The new headwords got "" (afternoon) and 🧢 (hat).

## Noticed but not changed
- **Reza is not one stable person.** He is a student in the u01 reading, 14 in the u02 reading, a husband in the u03 examples, a host in the u05 dialogue, a teacher in the u06 reading and a father in the u10 dialogue. The pool of six Persian names makes reuse unavoidable, and the texts never say this is the same man. Fixing it would mean rewriting several readings.
- **The course family is now consistent in the readings and dialogues:**
  - Ali: father, teacher
  - Maryam: mother, from Shiraz
  - Mina: 15
  - Amir: 12
  - a baby brother
  - their friend Emma: 13, from America
  - Tom: an adult (teacher, guest, shop assistant)

  Isolated grammar examples still use the names freely (for example "Ali is my brother. His wife is Maryam." and "Maryam works at a hospital."). I left them, because example sentences in grammar are not a story.
- **u09 grammar table** uses the usual English grouping of seasons (spring = March, April, May). The reading is about Iran, so it now says that spring starts in March and ends in June. The table is the general English convention, so I kept it.
- **u10 dialogue line 9:** "Me too!" answers "I can't sing, but I like listening to music." Reza said earlier that he can sing "a little". Natural speakers attach "Me too" to the last clause, so I left it.
- **Plain «و» for /u/** (تو، دو، شو) and the plain long-vowel letters for /ɪ/ (ایز، ایت) are limits of the course convention, as the earlier reviewer noted. I did not change them.
- **Choice exercises where the Persian `s` decides the answer** (u05 on/under, u07 near/opposite, u09 sunny/snowing) were accepted by the earlier reviewers. The app shows the `s`, so I left them.
- **u04:** "I'd like a coffee" or "an orange juice" is fine English for ordering. I changed both only because the same unit teaches "no a/an with drinks, use some".

## TTS-risky target texts (unchanged; handled centrally)
These are the same as in the first review: "/" in grammar titles and tables, "…" in phrases and titles, "18 = ___" (u02), "Numbers 11–20" (u02 title), "five-five-five, one-two-three-four" (u02), "Mmm" (u04), "Hmm" (u08), "OK", "TV", "T-shirt", "yo-yo", "Plural -s", "'s and have / has", and the em dashes between a question and its answer. "Hi, Amir!" and "Hello, I'm Emma!" add nothing new.

## Appendix: all added `pr` guides

| File | Path | t (gap filled) | pr |
|---|---|---|---|
| u00 | `title` | The ABCs | ذی اِی بی سیز |
| u00 | `sounds[0]` | sh | ش |
| u00 | `sounds[1]` | ch | چ |
| u00 | `sounds[2]` | th | ث / ذ |
| u00 | `sounds[3]` | ee | ای |
| u00 | `sounds[4]` | oo | او |
| u00 | `sounds[5]` | silent e | سایلِنت ای |
| u00 | `words[0].ex` | This is a book. | ذیس ایز اِ بوک. |
| u00 | `words[1].ex` | This is a pen. | ذیس ایز اِ پِن. |
| u00 | `words[2].ex` | This is a bag. | ذیس ایز اِ بَگ. |
| u00 | `words[3].ex` | This is a box. | ذیس ایز اِ باکس. |
| u00 | `words[4].ex` | This is a car. | ذیس ایز اِ کار. |
| u00 | `words[5].ex` | This is a bus. | ذیس ایز اِ باس. |
| u00 | `words[6].ex` | This is a bird. | ذیس ایز اِ بِرد. |
| u00 | `words[7].ex` | This is a cat. | ذیس ایز اِ کَت. |
| u01 | `title` | Hello! | هِلُو! |
| u01 | `words[0].ex` | Hello, Sara! | هِلُو، سارا! |
| u01 | `words[1].ex` | My name is Ali. | مای نِیم ایز علی. |
| u01 | `words[2].ex` | I am Reza. | آی اَم رضا. |
| u01 | `words[3].ex` | You are Mina. | یو آر مینا. |
| u01 | `words[4].ex` | He is Amir. | هی ایز امیر. |
| u01 | `words[5].ex` | She is Maryam. | شی ایز مریم. |
| u01 | `words[6].ex` | We are friends. | وی آر فْرِندز. |
| u01 | `words[7].ex` | They are from Iran. | ذِی آر فْرام ایران. |
| u01 | `words[8].ex` | Tom is my friend. | تام ایز مای فْرِند. |
| u01 | `words[9].ex` | I am a student. | آی اَم اِ سْتودِنت. |
| u01 | `words[10].ex` | She is a teacher. | شی ایز اِ تیچِر. |
| u01 | `words[11].ex` | I am from Iran. | آی اَم فْرام ایران. |
| u01 | `words[12].ex` | Yes, I am a student. | یِس، آی اَم اِ سْتودِنت. |
| u01 | `words[13].ex` | No, I am not a teacher. | نُو، آی اَم نات اِ تیچِر. |
| u01 | `dialogue.title` | In English class | این اینگلیش کْلَس |
| u01 | `dialogue.lines[0]` | Hello! I'm Sara. | هِلُو! آیم سارا. |
| u01 | `dialogue.lines[1]` | Hi, Sara! My name is Tom. | های، سارا! مای نِیم ایز تام. |
| u01 | `dialogue.lines[2]` | Nice to meet you, Tom. | نایس تو میت یو، تام. |
| u01 | `dialogue.lines[3]` | Nice to meet you, too. Where are you from? | نایس تو میت یو، تو. وِر آر یو فْرام؟ |
| u01 | `dialogue.lines[4]` | I'm from Iran. And you? | آیم فْرام ایران. اَند یو؟ |
| u01 | `dialogue.lines[5]` | I'm from America. | آیم فْرام اِمِریکا. |
| u01 | `dialogue.lines[6]` | Are you a student? | آر یو اِ سْتودِنت؟ |
| u01 | `dialogue.lines[7]` | No, I'm not. I'm a teacher. | نُو، آیم نات. آیم اِ تیچِر. |
| u01 | `dialogue.lines[8]` | Goodbye, Tom! | گودبای، تام! |
| u01 | `dialogue.lines[9]` | Goodbye, Sara! | گودبای، سارا! |
| u01 | `grammar[0].title` | to be: am / is / are | تو بی: اَم / ایز / آر |
| u01 | `grammar[0].examples[0]` | I am Ali. | آی اَم علی. |
| u01 | `grammar[0].examples[1]` | She is from Iran. | شی ایز فْرام ایران. |
| u01 | `grammar[0].examples[2]` | We are students. | وی آر سْتودِنتس. |
| u01 | `grammar[0].examples[3]` | They're teachers. | ذِر تیچِرز. |
| u01 | `grammar[0].examples[4]` | You're my friend. | یور مای فْرِند. |
| u01 | `grammar[0].exercises[0]` | I am Maryam. | آی اَم مریم. |
| u01 | `grammar[0].exercises[1]` | He is a teacher. | هی ایز اِ تیچِر. |
| u01 | `grammar[0].exercises[2]` | We are from Iran. | وی آر فْرام ایران. |
| u01 | `grammar[0].exercises[3]` | She is a student. | شی ایز اِ سْتودِنت. |
| u01 | `grammar[0].exercises[4]` | They are friends. | ذِی آر فْرِندز. |
| u01 | `grammar[0].exercises[5]` | You are my friend. | یو آر مای فْرِند. |
| u01 | `grammar[0].exercises[6]` | I am from Iran. | آی اَم فْرام ایران. |
| u01 | `grammar[0].exercises[7]` | She is a teacher. | شی ایز اِ تیچِر. |
| u01 | `grammar[1].title` | Questions and short answers | کْوِسچِنز اَند شُرت اَنسِرز |
| u01 | `grammar[1].examples[0]` | Are you from Iran? | آر یو فْرام ایران؟ |
| u01 | `grammar[1].examples[1]` | Is she a teacher? — Yes, she is. | ایز شی اِ تیچِر؟ — یِس، شی ایز. |
| u01 | `grammar[1].examples[2]` | I'm not a student. | آیم نات اِ سْتودِنت. |
| u01 | `grammar[1].examples[3]` | Where is Tom from? — He's from America. | وِر ایز تام فْرام؟ — هیز فْرام اِمِریکا. |
| u01 | `grammar[1].exercises[0]` | Are you a student? | آر یو اِ سْتودِنت؟ |
| u01 | `grammar[1].exercises[1]` | Is he from Iran? | ایز هی فْرام ایران؟ |
| u01 | `grammar[1].exercises[2]` | Where are you from? | وِر آر یو فْرام؟ |
| u01 | `grammar[1].exercises[3]` | Are you Sara? — Yes, I am. | آر یو سارا؟ — یِس، آی اَم. |
| u01 | `grammar[1].exercises[4]` | What is your name? | وات ایز یور نِیم؟ |
| u01 | `grammar[1].exercises[5]` | I am not a teacher. | آی اَم نات اِ تیچِر. |
| u01 | `grammar[1].exercises[6]` | Where are you from? | وِر آر یو فْرام؟ |
| u01 | `grammar[1].exercises[7]` | What is your name? | وات ایز یور نِیم؟ |
| u01 | `reading.title` | My name is Reza | مای نِیم ایز رضا |
| u01 | `reading.text[0]` | Hello! My name is Reza. | هِلُو! مای نِیم ایز رضا. |
| u01 | `reading.text[1]` | I am from Iran. | آی اَم فْرام ایران. |
| u01 | `reading.text[2]` | I am a student. | آی اَم اِ سْتودِنت. |
| u01 | `reading.text[3]` | This is Lisa. | ذیس ایز لیسا. |
| u01 | `reading.text[4]` | She is my friend. | شی ایز مای فْرِند. |
| u01 | `reading.text[5]` | Lisa is from America. | لیسا ایز فْرام اِمِریکا. |
| u01 | `reading.text[6]` | She is not a student. She is a teacher. | شی ایز نات اِ سْتودِنت. شی ایز اِ تیچِر. |
| u01 | `reading.questions[0].q` | Where is Reza from? | وِر ایز رضا فْرام؟ |
| u01 | `reading.questions[1].q` | Is Reza a student? | ایز رضا اِ سْتودِنت؟ |
| u01 | `reading.questions[2].q` | Where is Lisa from? | وِر ایز لیسا فْرام؟ |
| u01 | `reading.questions[3].q` | Is Lisa a student? | ایز لیسا اِ سْتودِنت؟ |
| u01 | `sentences[0]` | Hello, my name is Mina. | هِلُو، مای نِیم ایز مینا. |
| u01 | `sentences[1]` | I'm from Iran. | آیم فْرام ایران. |
| u01 | `sentences[2]` | He is a teacher. | هی ایز اِ تیچِر. |
| u01 | `sentences[3]` | Are you a student? | آر یو اِ سْتودِنت؟ |
| u01 | `sentences[4]` | Where is Ali from? | وِر ایز علی فْرام؟ |
| u01 | `sentences[5]` | Nice to meet you. | نایس تو میت یو. |
| u01 | `sentences[6]` | They are my friends. | ذِی آر مای فْرِندز. |
| u01 | `sentences[7]` | Good morning, Maryam! | گود مُرنینگ، مریم! |
| u02 | `title` | Numbers and age | نامبِرز اَند اِیج |
| u02 | `words[0].ex` | Zero, one, two, three! | زیرُو، وان، تو، ثْری! |
| u02 | `words[1].ex` | My cat is one year old. | مای کَت ایز وان ییر اُولد. |
| u02 | `words[2].ex` | One and one is two. | وان اَند وان ایز تو. |
| u02 | `words[3].ex` | Two and one is three. | تو اَند وان ایز ثْری. |
| u02 | `words[4].ex` | Two and two is four. | تو اَند تو ایز فُر. |
| u02 | `words[5].ex` | My dog is five years old. | مای داگ ایز فایو ییرز اُولد. |
| u02 | `words[6].ex` | Three and three is six. | ثْری اَند ثْری ایز سیکس. |
| u02 | `words[7].ex` | Jack is seven years old. | جَک ایز سِوِن ییرز اُولد. |
| u02 | `words[8].ex` | Four and four is eight. | فُر اَند فُر ایز اِیت. |
| u02 | `words[9].ex` | Five and four is nine. | فایو اَند فُر ایز ناین. |
| u02 | `words[10].ex` | Five and five is ten. | فایو اَند فایو ایز تِن. |
| u02 | `words[11].ex` | I am twenty years old. | آی اَم تْوِنتی ییرز اُولد. |
| u02 | `words[12].ex` | Amir is a boy. He is twelve. | امیر ایز اِ بُی. هی ایز تْوِلْو. |
| u02 | `words[13].ex` | Emma is a girl. She is thirteen. | اِما ایز اِ گِرل. شی ایز ثِرتین. |
| u02 | `dialogue.title` | Happy birthday! | هَپی بِرثدِی! |
| u02 | `dialogue.lines[0]` | Hi, Amir! | های، امیر! |
| u02 | `dialogue.lines[1]` | Hi, Emma! How are you? | های، اِما! هاو آر یو؟ |
| u02 | `dialogue.lines[2]` | I'm fine, thank you. It's my birthday! | آیم فاین، ثَنک یو. ایتس مای بِرثدِی! |
| u02 | `dialogue.lines[3]` | Happy birthday! How old are you? | هَپی بِرثدِی! هاو اُولد آر یو؟ |
| u02 | `dialogue.lines[4]` | I'm thirteen. And you? | آیم ثِرتین. اَند یو؟ |
| u02 | `dialogue.lines[5]` | I'm twelve years old. | آیم تْوِلْو ییرز اُولد. |
| u02 | `dialogue.lines[6]` | What's your phone number, Amir? | واتس یور فُون نامبِر، امیر؟ |
| u02 | `dialogue.lines[7]` | It's five-five-five, one-two-three-four. | ایتس فایو فایو فایو، وان تو ثْری فُر. |
| u02 | `dialogue.lines[8]` | Thank you! Goodbye! | ثَنک یو! گودبای! |
| u02 | `dialogue.lines[9]` | Goodbye, Emma! | گودبای، اِما! |
| u02 | `grammar[0].title` | Numbers 11–20 and age | نامبِرز ایلِوِن تو تْوِنتی اَند اِیج |
| u02 | `grammar[0].examples[0]` | How old are you? | هاو اُولد آر یو؟ |
| u02 | `grammar[0].examples[1]` | I'm twelve years old. | آیم تْوِلْو ییرز اُولد. |
| u02 | `grammar[0].examples[2]` | Emma is thirteen. | اِما ایز ثِرتین. |
| u02 | `grammar[0].examples[3]` | How old is Reza? — He's fourteen. | هاو اُولد ایز رضا؟ — هیز فُرتین. |
| u02 | `grammar[0].exercises[0]` | How old are you? | هاو اُولد آر یو؟ |
| u02 | `grammar[0].exercises[1]` | I'm sixteen years old. | آیم سیکستین ییرز اُولد. |
| u02 | `grammar[0].exercises[2]` | My cat is one year old. | مای کَت ایز وان ییر اُولد. |
| u02 | `grammar[0].exercises[3]` | ten, eleven, twelve, thirteen | تِن، ایلِوِن، تْوِلْو، ثِرتین |
| u02 | `grammar[0].exercises[4]` | 18 = eighteen | اِیتین |
| u02 | `grammar[0].exercises[5]` | Ten and ten is twenty. | تِن اَند تِن ایز تْوِنتی. |
| u02 | `grammar[0].exercises[6]` | How old are you? | هاو اُولد آر یو؟ |
| u02 | `grammar[0].exercises[7]` | I am twenty years old. | آی اَم تْوِنتی ییرز اُولد. |
| u02 | `grammar[1].title` | Plural -s | پْلورِل اِس |
| u02 | `grammar[1].examples[0]` | One boy and two girls. | وان بُی اَند تو گِرلز. |
| u02 | `grammar[1].examples[1]` | Sara and Mina are students. | سارا اَند مینا آر سْتودِنتس. |
| u02 | `grammar[1].examples[2]` | Ali and Reza are friends. | علی اَند رضا آر فْرِندز. |
| u02 | `grammar[1].examples[3]` | Three cats and four dogs. | ثْری کَتس اَند فُر داگز. |
| u02 | `grammar[1].exercises[0]` | two cats | تو کَتس |
| u02 | `grammar[1].exercises[1]` | one book | وان بوک |
| u02 | `grammar[1].exercises[2]` | three buses | ثْری باسِز |
| u02 | `grammar[1].exercises[3]` | five children | فایو چیلدْرِن |
| u02 | `grammar[1].exercises[4]` | They are students. | ذِی آر سْتودِنتس. |
| u02 | `grammar[1].exercises[5]` | two cats and one dog | تو کَتس اَند وان داگ |
| u02 | `grammar[1].exercises[6]` | We are students. | وی آر سْتودِنتس. |
| u02 | `grammar[1].exercises[7]` | Sara and Mina are girls. | سارا اَند مینا آر گِرلز. |
| u02 | `reading.title` | Hello, I'm Emma! | هِلُو، آیم اِما! |
| u02 | `reading.text[0]` | Hello! My name is Emma. | هِلُو! مای نِیم ایز اِما. |
| u02 | `reading.text[1]` | I'm from America, and I'm thirteen years old. | آیم فْرام اِمِریکا، اَند آیم ثِرتین ییرز اُولد. |
| u02 | `reading.text[2]` | Mina is my friend. | مینا ایز مای فْرِند. |
| u02 | `reading.text[3]` | She is from Iran. She is fifteen. | شی ایز فْرام ایران. شی ایز فیفتین. |
| u02 | `reading.text[4]` | Amir and Reza are my friends, too. | امیر اَند رضا آر مای فْرِندز، تو. |
| u02 | `reading.text[5]` | They are boys. | ذِی آر بُیز. |
| u02 | `reading.text[6]` | Amir is twelve, and Reza is fourteen. | امیر ایز تْوِلْو، اَند رضا ایز فُرتین. |
| u02 | `reading.text[7]` | We are students. | وی آر سْتودِنتس. |
| u02 | `reading.questions[0].q` | How old is Mina? | هاو اُولد ایز مینا؟ |
| u02 | `reading.questions[1].q` | Where is Mina from? | وِر ایز مینا فْرام؟ |
| u02 | `reading.questions[2].q` | How old is Reza? | هاو اُولد ایز رضا؟ |
| u02 | `reading.questions[3].q` | Are Amir and Reza girls? | آر امیر اَند رضا گِرلز؟ |
| u02 | `sentences[0]` | I am eighteen years old. | آی اَم اِیتین ییرز اُولد. |
| u02 | `sentences[1]` | How old is your friend? | هاو اُولد ایز یور فْرِند؟ |
| u02 | `sentences[2]` | She is twenty. | شی ایز تْوِنتی. |
| u02 | `sentences[3]` | Ten, eleven, twelve! | تِن، ایلِوِن، تْوِلْو! |
| u02 | `sentences[4]` | Two boys and three girls. | تو بُیز اَند ثْری گِرلز. |
| u02 | `sentences[5]` | They are students. | ذِی آر سْتودِنتس. |
| u02 | `sentences[6]` | Happy birthday, Amir! | هَپی بِرثدِی، امیر! |
| u03 | `title` | My family | مای فَمیلی |
| u03 | `words[0].ex` | This is my family. | ذیس ایز مای فَمیلی. |
| u03 | `words[1].ex` | My mother is a teacher. | مای ماذِر ایز اِ تیچِر. |
| u03 | `words[2].ex` | His father is from Iran. | هیز فاذِر ایز فْرام ایران. |
| u03 | `words[3].ex` | Our parents are from Shiraz. | آوِر پِرِنتس آر فْرام شیراز. |
| u03 | `words[4].ex` | I have two brothers. | آی هَو تو بْراذِرز. |
| u03 | `words[5].ex` | Sara is my sister. | سارا ایز مای سیستِر. |
| u03 | `words[6].ex` | They have a son. | ذِی هَو اِ سان. |
| u03 | `words[7].ex` | Our daughter is six years old. | آوِر داتِر ایز سیکس ییرز اُولد. |
| u03 | `words[8].ex` | Her husband is Reza. | هِر هازبِند ایز رضا. |
| u03 | `words[9].ex` | Ali's wife is a teacher. | علیز وایف ایز اِ تیچِر. |
| u03 | `words[10].ex` | My grandmother is from Tabriz. | مای گْرَندماذِر ایز فْرام تبریز. |
| u03 | `words[11].ex` | His grandfather is a teacher. | هیز گْرَندفاذِر ایز اِ تیچِر. |
| u03 | `words[12].ex` | Our baby is one year old. | آوِر بِیبی ایز وان ییر اُولد. |
| u03 | `words[13].ex` | They have two children. | ذِی هَو تو چیلدْرِن. |
| u03 | `dialogue.title` | Who is this? | هو ایز ذیس؟ |
| u03 | `dialogue.lines[0]` | Who is this, Amir? | هو ایز ذیس، امیر؟ |
| u03 | `dialogue.lines[1]` | This is my father. His name is Ali. | ذیس ایز مای فاذِر. هیز نِیم ایز علی. |
| u03 | `dialogue.lines[2]` | And who is this? | اَند هو ایز ذیس؟ |
| u03 | `dialogue.lines[3]` | This is my mother. Her name is Maryam. | ذیس ایز مای ماذِر. هِر نِیم ایز مریم. |
| u03 | `dialogue.lines[4]` | Do you have any brothers or sisters? | دو یو هَو اِنی بْراذِرز اُر سیستِرز؟ |
| u03 | `dialogue.lines[5]` | Yes, I have one sister and one brother. My sister's name is Mina. She's fifteen. | یِس، آی هَو وان سیستِر اَند وان بْراذِر. مای سیستِرز نِیم ایز مینا. شیز فیفتین. |
| u03 | `dialogue.lines[6]` | Is this Mina's cat? | ایز ذیس میناز کَت؟ |
| u03 | `dialogue.lines[7]` | Yes! The cat's name is Max. | یِس! ذِ کَتس نِیم ایز مَکس. |
| u03 | `dialogue.lines[8]` | You have a nice family! | یو هَو اِ نایس فَمیلی! |
| u03 | `dialogue.lines[9]` | Thank you, Emma! | ثَنک یو، اِما! |
| u03 | `grammar[0].title` | my / your / his / her / our / their | مای / یور / هیز / هِر / آوِر / ذِر |
| u03 | `grammar[0].examples[0]` | My name is Amir. | مای نِیم ایز امیر. |
| u03 | `grammar[0].examples[1]` | What's your name? | واتس یور نِیم؟ |
| u03 | `grammar[0].examples[2]` | Reza is from Iran. His wife is from Tabriz. | رضا ایز فْرام ایران. هیز وایف ایز فْرام تبریز. |
| u03 | `grammar[0].examples[3]` | Maryam is a teacher. Her son is ten. | مریم ایز اِ تیچِر. هِر سان ایز تِن. |
| u03 | `grammar[0].examples[4]` | Our parents are from Shiraz. | آوِر پِرِنتس آر فْرام شیراز. |
| u03 | `grammar[0].exercises[0]` | Ali is my brother. His wife is Maryam. | علی ایز مای بْراذِر. هیز وایف ایز مریم. |
| u03 | `grammar[0].exercises[1]` | Maryam is a teacher. Her son is a student. | مریم ایز اِ تیچِر. هِر سان ایز اِ سْتودِنت. |
| u03 | `grammar[0].exercises[2]` | We are from Iran. Our family is big. | وی آر فْرام ایران. آوِر فَمیلی ایز بیگ. |
| u03 | `grammar[0].exercises[3]` | What's your name? | واتس یور نِیم؟ |
| u03 | `grammar[0].exercises[4]` | I am Tom. My name is Tom. | آی اَم تام. مای نِیم ایز تام. |
| u03 | `grammar[0].exercises[5]` | They are my parents. Their names are Ali and Maryam. | ذِی آر مای پِرِنتس. ذِر نِیمز آر علی اَند مریم. |
| u03 | `grammar[0].exercises[6]` | Her brother is a teacher. | هِر بْراذِر ایز اِ تیچِر. |
| u03 | `grammar[0].exercises[7]` | This is our family. | ذیس ایز آوِر فَمیلی. |
| u03 | `grammar[1].title` | 's and have / has | اِس اَند هَو / هَز |
| u03 | `grammar[1].examples[0]` | Sara's brother is twenty. | ساراز بْراذِر ایز تْوِنتی. |
| u03 | `grammar[1].examples[1]` | Reza's mother is a teacher. | رضاز ماذِر ایز اِ تیچِر. |
| u03 | `grammar[1].examples[2]` | I have two sisters. | آی هَو تو سیستِرز. |
| u03 | `grammar[1].examples[3]` | Ali has a son and a daughter. | علی هَز اِ سان اَند اِ داتِر. |
| u03 | `grammar[1].examples[4]` | We have a big family. | وی هَو اِ بیگ فَمیلی. |
| u03 | `grammar[1].exercises[0]` | She has two brothers. | شی هَز تو بْراذِرز. |
| u03 | `grammar[1].exercises[1]` | I have a sister. | آی هَو اِ سیستِر. |
| u03 | `grammar[1].exercises[2]` | They have three children. | ذِی هَو ثْری چیلدْرِن. |
| u03 | `grammar[1].exercises[3]` | Ali has a baby. | علی هَز اِ بِیبی. |
| u03 | `grammar[1].exercises[4]` | This is Mina's cat. | ذیس ایز میناز کَت. |
| u03 | `grammar[1].exercises[5]` | Ali's father is from Tabriz. | علیز فاذِر ایز فْرام تبریز. |
| u03 | `grammar[1].exercises[6]` | Sara's mother is a teacher. | ساراز ماذِر ایز اِ تیچِر. |
| u03 | `grammar[1].exercises[7]` | We have two daughters. | وی هَو تو داتِرز. |
| u03 | `reading.title` | Amir's family | امیرز فَمیلی |
| u03 | `reading.text[0]` | Hi! I'm Amir, and this is my family. | های! آیم امیر، اَند ذیس ایز مای فَمیلی. |
| u03 | `reading.text[1]` | My father's name is Ali. | مای فاذِرز نِیم ایز علی. |
| u03 | `reading.text[2]` | He is a teacher. | هی ایز اِ تیچِر. |
| u03 | `reading.text[3]` | My mother's name is Maryam. | مای ماذِرز نِیم ایز مریم. |
| u03 | `reading.text[4]` | She is from Shiraz. | شی ایز فْرام شیراز. |
| u03 | `reading.text[5]` | I have one sister and one brother. | آی هَو وان سیستِر اَند وان بْراذِر. |
| u03 | `reading.text[6]` | My sister, Mina, is fifteen. | مای سیستِر، مینا، ایز فیفتین. |
| u03 | `reading.text[7]` | My brother is a baby. He is one year old. | مای بْراذِر ایز اِ بِیبی. هی ایز وان ییر اُولد. |
| u03 | `reading.text[8]` | We are a happy family! | وی آر اِ هَپی فَمیلی! |
| u03 | `reading.questions[0].q` | Who is Ali? | هو ایز علی؟ |
| u03 | `reading.questions[1].q` | Where is Amir's mother from? | وِر ایز امیرز ماذِر فْرام؟ |
| u03 | `reading.questions[2].q` | How old is Mina? | هاو اُولد ایز مینا؟ |
| u03 | `reading.questions[3].q` | Is Amir's brother a student? | ایز امیرز بْراذِر اِ سْتودِنت؟ |
| u03 | `sentences[0]` | This is my grandmother. | ذیس ایز مای گْرَندماذِر. |
| u03 | `sentences[1]` | My father has two brothers. | مای فاذِر هَز تو بْراذِرز. |
| u03 | `sentences[2]` | Reza's wife is from Tabriz. | رضاز وایف ایز فْرام تبریز. |
| u03 | `sentences[3]` | Do you have any sisters? | دو یو هَو اِنی سیستِرز؟ |
| u03 | `sentences[4]` | Our son is seven years old. | آوِر سان ایز سِوِن ییرز اُولد. |
| u03 | `sentences[5]` | His parents are teachers. | هیز پِرِنتس آر تیچِرز. |
| u03 | `sentences[6]` | Who is this? | هو ایز ذیس؟ |
| u04 | `title` | Food and drink | فود اَند دْرینک |
| u04 | `words[0].ex` | I like bread and cheese. | آی لایک بْرِد اَند چیز. |
| u04 | `words[1].ex` | I'd like some rice, please. | آید لایک سام رایس، پْلیز. |
| u04 | `words[2].ex` | We like tea. | وی لایک تی. |
| u04 | `words[3].ex` | I don't like coffee. | آی دُونت لایک کافی. |
| u04 | `words[4].ex` | Some water, please. | سام واتِر، پْلیز. |
| u04 | `words[5].ex` | We have some milk. | وی هَو سام میلک. |
| u04 | `words[6].ex` | I'd like some orange juice, please. | آید لایک سام اُرِنج جوس، پْلیز. |
| u04 | `words[7].ex` | I'd like two eggs, please. | آید لایک تو اِگز، پْلیز. |
| u04 | `words[8].ex` | Do you like cheese? | دو یو لایک چیز؟ |
| u04 | `words[9].ex` | We like chicken and rice. | وی لایک چیکِن اَند رایس. |
| u04 | `words[10].ex` | An apple, please. | اِن اَپِل، پْلیز. |
| u04 | `words[11].ex` | I have an orange. | آی هَو اِن اُرِنج. |
| u04 | `words[12].ex` | They like bananas. | ذِی لایک بِنَنِز. |
| u04 | `words[13].ex` | We have bread and cheese for breakfast. | وی هَو بْرِد اَند چیز فُر بْرِکفِست. |
| u04 | `dialogue.title` | At Maryam's house | اَت مریمز هاوس |
| u04 | `dialogue.lines[0]` | Hello, Tom! Would you like some tea? | هِلُو، تام! وود یو لایک سام تی؟ |
| u04 | `dialogue.lines[1]` | Yes, please. I like tea. | یِس، پْلیز. آی لایک تی. |
| u04 | `dialogue.lines[2]` | Here you are. | هیر یو آر. |
| u04 | `dialogue.lines[3]` | Thank you! | ثَنک یو! |
| u04 | `dialogue.lines[4]` | Are you hungry? | آر یو هانگری؟ |
| u04 | `dialogue.lines[5]` | Yes, I am. | یِس، آی اَم. |
| u04 | `dialogue.lines[6]` | We have rice and chicken. Do you like chicken? | وی هَو رایس اَند چیکِن. دو یو لایک چیکِن؟ |
| u04 | `dialogue.lines[7]` | Yes, I do! I'd like some rice and chicken, please. | یِس، آی دو! آید لایک سام رایس اَند چیکِن، پْلیز. |
| u04 | `dialogue.lines[8]` | Enjoy your meal! | اِنجُی یور میل! |
| u04 | `dialogue.lines[9]` | Mmm, it's delicious! | مْم، ایتس دیلیشِس! |
| u04 | `grammar[0].title` | a / an / some | اِ / اِن / سام |
| u04 | `grammar[0].examples[0]` | I'd like an apple. | آید لایک اِن اَپِل. |
| u04 | `grammar[0].examples[1]` | Ali has a banana. | علی هَز اِ بِنَنا. |
| u04 | `grammar[0].examples[2]` | We have some bread. | وی هَو سام بْرِد. |
| u04 | `grammar[0].examples[3]` | Some eggs, please. | سام اِگز، پْلیز. |
| u04 | `grammar[0].exercises[0]` | I'd like an egg, please. | آید لایک اِن اِگ، پْلیز. |
| u04 | `grammar[0].exercises[1]` | Ali has a banana. | علی هَز اِ بِنَنا. |
| u04 | `grammar[0].exercises[2]` | We have some water. | وی هَو سام واتِر. |
| u04 | `grammar[0].exercises[3]` | Sara has an orange. | سارا هَز اِن اُرِنج. |
| u04 | `grammar[0].exercises[4]` | This is an apple. | ذیس ایز اِن اَپِل. |
| u04 | `grammar[0].exercises[5]` | I'd like some rice, please. | آید لایک سام رایس، پْلیز. |
| u04 | `grammar[0].exercises[6]` | I'd like an orange, please. | آید لایک اِن اُرِنج، پْلیز. |
| u04 | `grammar[0].exercises[7]` | We have some bread. | وی هَو سام بْرِد. |
| u04 | `grammar[1].title` | I like / I don't like / I'd like | آی لایک / آی دُونت لایک / آید لایک |
| u04 | `grammar[1].examples[0]` | I like bananas. | آی لایک بِنَنِز. |
| u04 | `grammar[1].examples[1]` | We don't like coffee. | وی دُونت لایک کافی. |
| u04 | `grammar[1].examples[2]` | Do you like cheese? — Yes, I do. | دو یو لایک چیز؟ — یِس، آی دو. |
| u04 | `grammar[1].examples[3]` | I'd like some tea, please. | آید لایک سام تی، پْلیز. |
| u04 | `grammar[1].exercises[0]` | I don't like fish. | آی دُونت لایک فیش. |
| u04 | `grammar[1].exercises[1]` | Do you like eggs? — Yes, I do. | دو یو لایک اِگز؟ — یِس، آی دو. |
| u04 | `grammar[1].exercises[2]` | I'd like some coffee, please. | آید لایک سام کافی، پْلیز. |
| u04 | `grammar[1].exercises[3]` | I like apples. | آی لایک اَپِلز. |
| u04 | `grammar[1].exercises[4]` | We don't like milk. | وی دُونت لایک میلک. |
| u04 | `grammar[1].exercises[5]` | Do you like tea? | دو یو لایک تی؟ |
| u04 | `grammar[1].exercises[6]` | I don't like coffee. | آی دُونت لایک کافی. |
| u04 | `grammar[1].exercises[7]` | Do you like chicken? | دو یو لایک چیکِن؟ |
| u04 | `reading.title` | Breakfast with Mina | بْرِکفِست ویذ مینا |
| u04 | `reading.text[0]` | My name is Mina, and I'm from Iran. | مای نِیم ایز مینا، اَند آیم فْرام ایران. |
| u04 | `reading.text[1]` | I like breakfast! | آی لایک بْرِکفِست! |
| u04 | `reading.text[2]` | We have bread, cheese, and tea for breakfast. | وی هَو بْرِد، چیز، اَند تی فُر بْرِکفِست. |
| u04 | `reading.text[3]` | I like tea. I don't like coffee. | آی لایک تی. آی دُونت لایک کافی. |
| u04 | `reading.text[4]` | My brother Amir and I like eggs. | مای بْراذِر امیر اَند آی لایک اِگز. |
| u04 | `reading.text[5]` | My mother has an apple and some milk. | مای ماذِر هَز اِن اَپِل اَند سام میلک. |
| u04 | `reading.text[6]` | Do you like breakfast, too? | دو یو لایک بْرِکفِست، تو؟ |
| u04 | `reading.questions[0].q` | What do they have for breakfast? | وات دو ذِی هَو فُر بْرِکفِست؟ |
| u04 | `reading.questions[1].q` | Who has an apple? | هو هَز اِن اَپِل؟ |
| u04 | `reading.questions[2].q` | Do Mina and Amir like eggs? | دو مینا اَند امیر لایک اِگز؟ |
| u04 | `sentences[0]` | I'd like some water, please. | آید لایک سام واتِر، پْلیز. |
| u04 | `sentences[1]` | Do you like rice? | دو یو لایک رایس؟ |
| u04 | `sentences[2]` | We don't like coffee. | وی دُونت لایک کافی. |
| u04 | `sentences[3]` | Here you are. | هیر یو آر. |
| u04 | `sentences[4]` | An egg and some bread, please. | اِن اِگ اَند سام بْرِد، پْلیز. |
| u04 | `sentences[5]` | They like oranges and bananas. | ذِی لایک اُرِنجِز اَند بِنَنِز. |
| u04 | `sentences[6]` | Enjoy your meal! | اِنجُی یور میل! |
| u05 | `title` | My home | مای هُوم |
| u05 | `words[0].ex` | We have an apartment in Tehran. | وی هَو اِن اِپارتمِنت این تهران. |
| u05 | `words[1].ex` | My apartment has three rooms. | مای اِپارتمِنت هَز ثْری رومز. |
| u05 | `words[2].ex` | My mother is in the kitchen. | مای ماذِر ایز این ذِ کیچِن. |
| u05 | `words[3].ex` | There are two bedrooms. | ذِر آر تو بِدرومز. |
| u05 | `words[4].ex` | The bathroom is next to the bedroom. | ذِ بَثروم ایز نِکست تو ذِ بِدروم. |
| u05 | `words[5].ex` | There is a TV in the living room. | ذِر ایز اِ تی‌وی این ذِ لیوینگ روم. |
| u05 | `words[6].ex` | The cat is under the table. | ذِ کَت ایز آندِر ذِ تِیبِل. |
| u05 | `words[7].ex` | There are four chairs in the kitchen. | ذِر آر فُر چِرز این ذِ کیچِن. |
| u05 | `words[8].ex` | My book is on the bed. | مای بوک ایز آن ذِ بِد. |
| u05 | `words[9].ex` | The dog is next to the door. | ذِ داگ ایز نِکست تو ذِ دُر. |
| u05 | `words[10].ex` | There is a plant next to the window. | ذِر ایز اِ پْلَنت نِکست تو ذِ ویندُو. |
| u05 | `words[11].ex` | Is there a TV in your room? | ایز ذِر اِ تی‌وی این یور روم؟ |
| u05 | `words[12].ex` | There is some milk in the fridge. | ذِر ایز سام میلک این ذِ فْریج. |
| u05 | `words[13].ex` | The plant is on the table. | ذِ پْلَنت ایز آن ذِ تِیبِل. |
| u05 | `dialogue.title` | Welcome! | وِلکِم! |
| u05 | `dialogue.lines[0]` | Hello, Emma! Welcome to my home! | هِلُو، اِما! وِلکِم تو مای هُوم! |
| u05 | `dialogue.lines[1]` | Thank you, Reza! Your home is beautiful. | ثَنک یو، رضا! یور هُوم ایز بیوتیفِل. |
| u05 | `dialogue.lines[2]` | Thank you. Come in, please. This is the living room. | ثَنک یو. کام این، پْلیز. ذیس ایز ذِ لیوینگ روم. |
| u05 | `dialogue.lines[3]` | Oh, there is a big TV! | اُو، ذِر ایز اِ بیگ تی‌وی! |
| u05 | `dialogue.lines[4]` | Yes! And the kitchen is next to the living room. | یِس! اَند ذِ کیچِن ایز نِکست تو ذِ لیوینگ روم. |
| u05 | `dialogue.lines[5]` | How many bedrooms are there? | هاو مِنی بِدرومز آر ذِر؟ |
| u05 | `dialogue.lines[6]` | There are two bedrooms. | ذِر آر تو بِدرومز. |
| u05 | `dialogue.lines[7]` | Excuse me, where is the bathroom? | ایکسکیوز میْ، وِر ایز ذِ بَثروم؟ |
| u05 | `dialogue.lines[8]` | It's next to my bedroom. | ایتس نِکست تو مای بِدروم. |
| u05 | `dialogue.lines[9]` | Thank you! | ثَنک یو! |
| u05 | `grammar[0].title` | there is / there are | ذِر ایز / ذِر آر |
| u05 | `grammar[0].examples[0]` | There is a bed in my room. | ذِر ایز اِ بِد این مای روم. |
| u05 | `grammar[0].examples[1]` | There are three chairs in the kitchen. | ذِر آر ثْری چِرز این ذِ کیچِن. |
| u05 | `grammar[0].examples[2]` | There's some water in the fridge. | ذِرز سام واتِر این ذِ فْریج. |
| u05 | `grammar[0].examples[3]` | Is there a TV in the kitchen? — No, there isn't. | ایز ذِر اِ تی‌وی این ذِ کیچِن؟ — نُو، ذِر ایزِنت. |
| u05 | `grammar[0].examples[4]` | How many rooms are there? — There are four. | هاو مِنی رومز آر ذِر؟ — ذِر آر فُر. |
| u05 | `grammar[0].exercises[0]` | There is a table in the kitchen. | ذِر ایز اِ تِیبِل این ذِ کیچِن. |
| u05 | `grammar[0].exercises[1]` | There are two windows in my room. | ذِر آر تو ویندُوز این مای روم. |
| u05 | `grammar[0].exercises[2]` | There is some milk in the fridge. | ذِر ایز سام میلک این ذِ فْریج. |
| u05 | `grammar[0].exercises[3]` | Is there a TV in your room? | ایز ذِر اِ تی‌وی این یور روم؟ |
| u05 | `grammar[0].exercises[4]` | There are four chairs. | ذِر آر فُر چِرز. |
| u05 | `grammar[0].exercises[5]` | How many bedrooms are there? | هاو مِنی بِدرومز آر ذِر؟ |
| u05 | `grammar[0].exercises[6]` | There is a bed in my room. | ذِر ایز اِ بِد این مای روم. |
| u05 | `grammar[0].exercises[7]` | There are two bathrooms. | ذِر آر تو بَثرومز. |
| u05 | `grammar[1].title` | in / on / under / next to | این / آن / آندِر / نِکست تو |
| u05 | `grammar[1].examples[0]` | The cat is under the table. | ذِ کَت ایز آندِر ذِ تِیبِل. |
| u05 | `grammar[1].examples[1]` | My book is on the bed. | مای بوک ایز آن ذِ بِد. |
| u05 | `grammar[1].examples[2]` | The TV is in the living room. | ذِ تی‌وی ایز این ذِ لیوینگ روم. |
| u05 | `grammar[1].examples[3]` | The kitchen is next to the bathroom. | ذِ کیچِن ایز نِکست تو ذِ بَثروم. |
| u05 | `grammar[1].examples[4]` | Where's the dog? — It's under the chair. | وِرز ذِ داگ؟ — ایتس آندِر ذِ چِر. |
| u05 | `grammar[1].exercises[0]` | The cat is under the bed. | ذِ کَت ایز آندِر ذِ بِد. |
| u05 | `grammar[1].exercises[1]` | The plant is next to the window. | ذِ پْلَنت ایز نِکست تو ذِ ویندُو. |
| u05 | `grammar[1].exercises[2]` | My mother is in the kitchen. | مای ماذِر ایز این ذِ کیچِن. |
| u05 | `grammar[1].exercises[3]` | The book is on the table. | ذِ بوک ایز آن ذِ تِیبِل. |
| u05 | `grammar[1].exercises[4]` | The milk is in the fridge. | ذِ میلک ایز این ذِ فْریج. |
| u05 | `grammar[1].exercises[5]` | The chair is next to the door. | ذِ چِر ایز نِکست تو ذِ دُر. |
| u05 | `grammar[1].exercises[6]` | The dog is under the table. | ذِ داگ ایز آندِر ذِ تِیبِل. |
| u05 | `grammar[1].exercises[7]` | Where is the bathroom? | وِر ایز ذِ بَثروم؟ |
| u05 | `reading.title` | Sara's apartment | ساراز اِپارتمِنت |
| u05 | `reading.text[0]` | Hi! I'm Sara. | های! آیم سارا. |
| u05 | `reading.text[1]` | I have an apartment in Tehran. | آی هَو اِن اِپارتمِنت این تهران. |
| u05 | `reading.text[2]` | There are three rooms: a living room, a bedroom, and a kitchen. | ذِر آر ثْری رومز: اِ لیوینگ روم، اِ بِدروم، اَند اِ کیچِن. |
| u05 | `reading.text[3]` | There is a big window in the living room. | ذِر ایز اِ بیگ ویندُو این ذِ لیوینگ روم. |
| u05 | `reading.text[4]` | My TV is next to the window. | مای تی‌وی ایز نِکست تو ذِ ویندُو. |
| u05 | `reading.text[5]` | There are two chairs in the kitchen. | ذِر آر تو چِرز این ذِ کیچِن. |
| u05 | `reading.text[6]` | My cat is under the table. | مای کَت ایز آندِر ذِ تِیبِل. |
| u05 | `reading.text[7]` | I like my home! | آی لایک مای هُوم! |
| u05 | `reading.questions[0].q` | Where is Sara's apartment? | وِر ایز ساراز اِپارتمِنت؟ |
| u05 | `reading.questions[1].q` | How many rooms are there? | هاو مِنی رومز آر ذِر؟ |
| u05 | `reading.questions[2].q` | Where is the TV? | وِر ایز ذِ تی‌وی؟ |
| u05 | `reading.questions[3].q` | Where is the cat? | وِر ایز ذِ کَت؟ |
| u05 | `sentences[0]` | There is a TV in the living room. | ذِر ایز اِ تی‌وی این ذِ لیوینگ روم. |
| u05 | `sentences[1]` | Where is my book? | وِر ایز مای بوک؟ |
| u05 | `sentences[2]` | It's on the table. | ایتس آن ذِ تِیبِل. |
| u05 | `sentences[3]` | There are two windows in my room. | ذِر آر تو ویندُوز این مای روم. |
| u05 | `sentences[4]` | The kitchen is next to the living room. | ذِ کیچِن ایز نِکست تو ذِ لیوینگ روم. |
| u05 | `sentences[5]` | Welcome to my home! | وِلکِم تو مای هُوم! |
| u05 | `sentences[6]` | Is there a fridge in the kitchen? | ایز ذِر اِ فْریج این ذِ کیچِن؟ |
| u06 | `title` | My day | مای دِی |
| u06 | `words[0].ex` | I get up at seven o'clock. | آی گِت آپ اَت سِوِن اِکْلاک. |
| u06 | `words[1].ex` | I come home in the afternoon. | آی کام هُوم این ذی اَفتِرنون. |
| u06 | `words[2].ex` | We have lunch at one o'clock. | وی هَو لانچ اَت وان اِکْلاک. |
| u06 | `words[3].ex` | We have dinner at eight o'clock. | وی هَو دینِر اَت اِیت اِکْلاک. |
| u06 | `words[4].ex` | Ali works every day. | علی وِرکس اِوْری دِی. |
| u06 | `words[5].ex` | I go to work at eight o'clock. | آی گُو تو وِرک اَت اِیت اِکْلاک. |
| u06 | `words[6].ex` | Mina goes to school. | مینا گُوز تو سْکول. |
| u06 | `words[7].ex` | Tom watches TV at night. | تام واچِز تی‌وی اَت نایت. |
| u06 | `words[8].ex` | The children sleep in the bedroom. | ذِ چیلدْرِن سْلیپ این ذِ بِدروم. |
| u06 | `words[9].ex` | I go to bed at eleven o'clock. | آی گُو تو بِد اَت ایلِوِن اِکْلاک. |
| u06 | `words[10].ex` | I have tea in the morning. | آی هَو تی این ذِ مُرنینگ. |
| u06 | `words[11].ex` | I watch TV in the evening. | آی واچ تی‌وی این ذی ایوْنینگ. |
| u06 | `words[12].ex` | It's ten o'clock at night. | ایتس تِن اِکْلاک اَت نایت. |
| u06 | `words[13].ex` | There is a clock in the kitchen. | ذِر ایز اِ کْلاک این ذِ کیچِن. |
| u06 | `dialogue.title` | A busy morning | اِ بیزی مُرنینگ |
| u06 | `dialogue.lines[0]` | Good morning, Amir! Get up, please. | گود مُرنینگ، امیر! گِت آپ، پْلیز. |
| u06 | `dialogue.lines[1]` | Good morning, Mom. What time is it? | گود مُرنینگ، مام. وات تایم ایز ایت؟ |
| u06 | `dialogue.lines[2]` | It's seven o'clock. | ایتس سِوِن اِکْلاک. |
| u06 | `dialogue.lines[3]` | Oh no! I'm late! | اُو نُو! آیم لِیت! |
| u06 | `dialogue.lines[4]` | You aren't late. School is at eight o'clock. | یو آرِنت لِیت. سْکول ایز اَت اِیت اِکْلاک. |
| u06 | `dialogue.lines[5]` | And Dad? Is he at home? | اَند دَد؟ ایز هی اَت هُوم؟ |
| u06 | `dialogue.lines[6]` | No. Dad gets up at six o'clock. He goes to work at half past six. | نُو. دَد گِتس آپ اَت سیکس اِکْلاک. هی گُوز تو وِرک اَت هَف پَست سیکس. |
| u06 | `dialogue.lines[7]` | OK. I'd like some tea, please. | اُوکِی. آید لایک سام تی، پْلیز. |
| u06 | `dialogue.lines[8]` | Breakfast is on the table. | بْرِکفِست ایز آن ذِ تِیبِل. |
| u06 | `grammar[0].title` | Present simple: I work / she works | پْرِزِنت سیمپِل: آی وِرک / شی وِرکس |
| u06 | `grammar[0].examples[0]` | I get up at seven o'clock. | آی گِت آپ اَت سِوِن اِکْلاک. |
| u06 | `grammar[0].examples[1]` | My sister gets up at eight o'clock. | مای سیستِر گِتس آپ اَت اِیت اِکْلاک. |
| u06 | `grammar[0].examples[2]` | Reza works every day. | رضا وِرکس اِوْری دِی. |
| u06 | `grammar[0].examples[3]` | Amir goes to school. | امیر گُوز تو سْکول. |
| u06 | `grammar[0].examples[4]` | Tom watches TV in the evening. | تام واچِز تی‌وی این ذی ایوْنینگ. |
| u06 | `grammar[0].exercises[0]` | She works every day. | شی وِرکس اِوْری دِی. |
| u06 | `grammar[0].exercises[1]` | I get up at seven o'clock. | آی گِت آپ اَت سِوِن اِکْلاک. |
| u06 | `grammar[0].exercises[2]` | Ali goes to work at eight o'clock. | علی گُوز تو وِرک اَت اِیت اِکْلاک. |
| u06 | `grammar[0].exercises[3]` | My mother watches TV in the evening. | مای ماذِر واچِز تی‌وی این ذی ایوْنینگ. |
| u06 | `grammar[0].exercises[4]` | We have breakfast at seven o'clock. | وی هَو بْرِکفِست اَت سِوِن اِکْلاک. |
| u06 | `grammar[0].exercises[5]` | He gets up at six o'clock. | هی گِتس آپ اَت سیکس اِکْلاک. |
| u06 | `grammar[0].exercises[6]` | Mina has lunch at one o'clock. | مینا هَز لانچ اَت وان اِکْلاک. |
| u06 | `grammar[1].title` | What time is it? | وات تایم ایز ایت؟ |
| u06 | `grammar[1].examples[0]` | What time is it? It's nine o'clock. | وات تایم ایز ایت؟ ایتس ناین اِکْلاک. |
| u06 | `grammar[1].examples[1]` | It's half past ten. | ایتس هَف پَست تِن. |
| u06 | `grammar[1].examples[2]` | I have lunch at one o'clock. | آی هَو لانچ اَت وان اِکْلاک. |
| u06 | `grammar[1].examples[3]` | Sara goes to bed at half past ten. | سارا گُوز تو بِد اَت هَف پَست تِن. |
| u06 | `grammar[1].exercises[0]` | It's seven o'clock. | ایتس سِوِن اِکْلاک. |
| u06 | `grammar[1].exercises[1]` | It's half past four. | ایتس هَف پَست فُر. |
| u06 | `grammar[1].exercises[2]` | I get up at six o'clock. | آی گِت آپ اَت سیکس اِکْلاک. |
| u06 | `grammar[1].exercises[3]` | It's half past eleven. | ایتس هَف پَست ایلِوِن. |
| u06 | `grammar[1].exercises[4]` | What time is it? | وات تایم ایز ایت؟ |
| u06 | `grammar[1].exercises[5]` | It's twelve o'clock. | ایتس تْوِلْو اِکْلاک. |
| u06 | `grammar[1].exercises[6]` | It's half past three. | ایتس هَف پَست ثْری. |
| u06 | `reading.title` | Reza's day | رضاز دِی |
| u06 | `reading.text[0]` | This is Reza. He is from Tehran. | ذیس ایز رضا. هی ایز فْرام تهران. |
| u06 | `reading.text[1]` | Reza is a teacher. He works at a school. | رضا ایز اِ تیچِر. هی وِرکس اَت اِ سْکول. |
| u06 | `reading.text[2]` | He gets up at six o'clock every day. | هی گِتس آپ اَت سیکس اِکْلاک اِوْری دِی. |
| u06 | `reading.text[3]` | He has bread, cheese, and tea for breakfast. | هی هَز بْرِد، چیز، اَند تی فُر بْرِکفِست. |
| u06 | `reading.text[4]` | He goes to work at seven o'clock. | هی گُوز تو وِرک اَت سِوِن اِکْلاک. |
| u06 | `reading.text[5]` | He comes home at four o'clock. | هی کامز هُوم اَت فُر اِکْلاک. |
| u06 | `reading.text[6]` | In the evening, he watches TV. | این ذی ایوْنینگ، هی واچِز تی‌وی. |
| u06 | `reading.text[7]` | He has dinner at eight o'clock and goes to bed at eleven o'clock. | هی هَز دینِر اَت اِیت اِکْلاک اَند گُوز تو بِد اَت ایلِوِن اِکْلاک. |
| u06 | `reading.questions[0].q` | Where is Reza from? | وِر ایز رضا فْرام؟ |
| u06 | `reading.questions[1].q` | Reza gets up at ___. | رضا گِتس آپ اَت ___. |
| u06 | `reading.questions[2].q` | Reza is a ___. | رضا ایز اِ ___. |
| u06 | `reading.questions[3].q` | Reza goes to bed at ___. | رضا گُوز تو بِد اَت ___. |
| u06 | `sentences[0]` | I get up at six o'clock. | آی گِت آپ اَت سیکس اِکْلاک. |
| u06 | `sentences[1]` | She goes to school every day. | شی گُوز تو سْکول اِوْری دِی. |
| u06 | `sentences[2]` | What time is it? It's half past two. | وات تایم ایز ایت؟ ایتس هَف پَست تو. |
| u06 | `sentences[3]` | My father works every day. | مای فاذِر وِرکس اِوْری دِی. |
| u06 | `sentences[4]` | We have dinner at eight o'clock. | وی هَو دینِر اَت اِیت اِکْلاک. |
| u06 | `sentences[5]` | Emma goes to bed at ten o'clock. | اِما گُوز تو بِد اَت تِن اِکْلاک. |
| u06 | `sentences[6]` | There is a clock in the kitchen. | ذِر ایز اِ کْلاک این ذِ کیچِن. |
| u06 | `sentences[7]` | It's twelve o'clock at night. | ایتس تْوِلْو اِکْلاک اَت نایت. |
| u07 | `title` | In the city | این ذِ سیتی |
| u07 | `words[0].ex` | Tehran is a big city. | تهران ایز اِ بیگ سیتی. |
| u07 | `words[1].ex` | My house is on Hafez Street. | مای هاوس ایز آن حافظ سْتْریت. |
| u07 | `words[2].ex` | The bank is next to the park. | ذِ بَنک ایز نِکست تو ذِ پارک. |
| u07 | `words[3].ex` | Maryam works at a hospital. | مریم وِرکس اَت اِ هاسپیتِل. |
| u07 | `words[4].ex` | There is a big park in our city. | ذِر ایز اِ بیگ پارک این آوِر سیتی. |
| u07 | `words[5].ex` | Is there a supermarket near here? | ایز ذِر اِ سوپِرمارکِت نیر هیر؟ |
| u07 | `words[6].ex` | We have dinner at a restaurant. | وی هَو دینِر اَت اِ رِسْتِرانت. |
| u07 | `words[7].ex` | The pharmacy is opposite the hospital. | ذِ فارمِسی ایز آپِزِت ذِ هاسپیتِل. |
| u07 | `words[8].ex` | Where is the post office? | وِر ایز ذِ پُوست آفیس؟ |
| u07 | `words[9].ex` | There is a mosque near my house. | ذِر ایز اِ ماسک نیر مای هاوس. |
| u07 | `words[10].ex` | The bus stop is next to the bank. | ذِ باس سْتاپ ایز نِکست تو ذِ بَنک. |
| u07 | `words[11].ex` | The train station is near the park. | ذِ تْرِین سْتِیشِن ایز نیر ذِ پارک. |
| u07 | `words[12].ex` | Turn left at the bank. | تِرن لِفت اَت ذِ بَنک. |
| u07 | `words[13].ex` | Turn right at the park. | تِرن رایت اَت ذِ پارک. |
| u07 | `dialogue.title` | Where is the post office? | وِر ایز ذِ پُوست آفیس؟ |
| u07 | `dialogue.lines[0]` | Excuse me. Where is the post office? | ایکسکیوز میْ. وِر ایز ذِ پُوست آفیس؟ |
| u07 | `dialogue.lines[1]` | The post office? It's near the park. | ذِ پُوست آفیس؟ ایتس نیر ذِ پارک. |
| u07 | `dialogue.lines[2]` | Is it far? | ایز ایت فار؟ |
| u07 | `dialogue.lines[3]` | No, it isn't. Go straight and turn left at the bank. | نُو، ایت ایزِنت. گُو سْتْرِیت اَند تِرن لِفت اَت ذِ بَنک. |
| u07 | `dialogue.lines[4]` | Turn left at the bank. OK. | تِرن لِفت اَت ذِ بَنک. اُوکِی. |
| u07 | `dialogue.lines[5]` | The post office is opposite the supermarket. | ذِ پُوست آفیس ایز آپِزِت ذِ سوپِرمارکِت. |
| u07 | `dialogue.lines[6]` | And is there a pharmacy near here? | اَند ایز ذِر اِ فارمِسی نیر هیر؟ |
| u07 | `dialogue.lines[7]` | Yes, there is. It's next to the post office. | یِس، ذِر ایز. ایتس نِکست تو ذِ پُوست آفیس. |
| u07 | `dialogue.lines[8]` | Thank you very much! | ثَنک یو وِری ماچ! |
| u07 | `dialogue.lines[9]` | You're welcome. | یور وِلکِم. |
| u07 | `grammar[0].title` | Go straight. Turn left. | گُو سْتْرِیت. تِرن لِفت. |
| u07 | `grammar[0].examples[0]` | Go straight. | گُو سْتْرِیت. |
| u07 | `grammar[0].examples[1]` | Turn left at the bank. | تِرن لِفت اَت ذِ بَنک. |
| u07 | `grammar[0].examples[2]` | Turn right, please. | تِرن رایت، پْلیز. |
| u07 | `grammar[0].examples[3]` | Don't turn left. Go straight. | دُونت تِرن لِفت. گُو سْتْرِیت. |
| u07 | `grammar[0].exercises[0]` | Go straight. | گُو سْتْرِیت. |
| u07 | `grammar[0].exercises[1]` | Turn right at the park. | تِرن رایت اَت ذِ پارک. |
| u07 | `grammar[0].exercises[2]` | Turn left at the hospital. | تِرن لِفت اَت ذِ هاسپیتِل. |
| u07 | `grammar[0].exercises[3]` | Don't turn right. Go straight. | دُونت تِرن رایت. گُو سْتْرِیت. |
| u07 | `grammar[0].exercises[4]` | Go straight and turn left. | گُو سْتْرِیت اَند تِرن لِفت. |
| u07 | `grammar[0].exercises[5]` | Turn right at the bank. | تِرن رایت اَت ذِ بَنک. |
| u07 | `grammar[0].exercises[6]` | Go straight and turn right. | گُو سْتْرِیت اَند تِرن رایت. |
| u07 | `grammar[1].title` | Where is …? near / opposite | وِر ایز …؟ نیر / آپِزِت |
| u07 | `grammar[1].examples[0]` | Where is the post office? It's near the bank. | وِر ایز ذِ پُوست آفیس؟ ایتس نیر ذِ بَنک. |
| u07 | `grammar[1].examples[1]` | The pharmacy is opposite the hospital. | ذِ فارمِسی ایز آپِزِت ذِ هاسپیتِل. |
| u07 | `grammar[1].examples[2]` | The bus stop is next to the park. | ذِ باس سْتاپ ایز نِکست تو ذِ پارک. |
| u07 | `grammar[1].examples[3]` | Is there a restaurant near here? | ایز ذِر اِ رِسْتِرانت نیر هیر؟ |
| u07 | `grammar[1].exercises[0]` | Where is the bank? | وِر ایز ذِ بَنک؟ |
| u07 | `grammar[1].exercises[1]` | The park is opposite the school. | ذِ پارک ایز آپِزِت ذِ سْکول. |
| u07 | `grammar[1].exercises[2]` | The pharmacy is near the bank. | ذِ فارمِسی ایز نیر ذِ بَنک. |
| u07 | `grammar[1].exercises[3]` | The mosque is next to the park. | ذِ ماسک ایز نِکست تو ذِ پارک. |
| u07 | `grammar[1].exercises[4]` | Where is the train station? | وِر ایز ذِ تْرِین سْتِیشِن؟ |
| u07 | `grammar[1].exercises[5]` | Where is the post office? | وِر ایز ذِ پُوست آفیس؟ |
| u07 | `grammar[1].exercises[6]` | The bank is opposite the hospital. | ذِ بَنک ایز آپِزِت ذِ هاسپیتِل. |
| u07 | `reading.title` | My street | مای سْتْریت |
| u07 | `reading.text[0]` | Hello! I am Mina. I am from Shiraz. | هِلُو! آی اَم مینا. آی اَم فْرام شیراز. |
| u07 | `reading.text[1]` | Shiraz is a big city. | شیراز ایز اِ بیگ سیتی. |
| u07 | `reading.text[2]` | My house is on Hafez Street. | مای هاوس ایز آن حافظ سْتْریت. |
| u07 | `reading.text[3]` | There is a park opposite my house. | ذِر ایز اِ پارک آپِزِت مای هاوس. |
| u07 | `reading.text[4]` | The supermarket is next to the park. | ذِ سوپِرمارکِت ایز نِکست تو ذِ پارک. |
| u07 | `reading.text[5]` | There is a mosque near the supermarket. | ذِر ایز اِ ماسک نیر ذِ سوپِرمارکِت. |
| u07 | `reading.text[6]` | The bus stop is next to the mosque. | ذِ باس سْتاپ ایز نِکست تو ذِ ماسک. |
| u07 | `reading.text[7]` | My school is not near my house. | مای سْکول ایز نات نیر مای هاوس. |
| u07 | `reading.questions[0].q` | Where is Mina from? | وِر ایز مینا فْرام؟ |
| u07 | `reading.questions[1].q` | What is opposite Mina's house? | وات ایز آپِزِت میناز هاوس؟ |
| u07 | `reading.questions[2].q` | Where is the supermarket? | وِر ایز ذِ سوپِرمارکِت؟ |
| u07 | `reading.questions[3].q` | Is Mina's school near her house? | ایز میناز سْکول نیر هِر هاوس؟ |
| u07 | `sentences[0]` | Excuse me, where is the hospital? | ایکسکیوز میْ، وِر ایز ذِ هاسپیتِل؟ |
| u07 | `sentences[1]` | The bank is opposite the park. | ذِ بَنک ایز آپِزِت ذِ پارک. |
| u07 | `sentences[2]` | Go straight and turn right. | گُو سْتْرِیت اَند تِرن رایت. |
| u07 | `sentences[3]` | The pharmacy is near the train station. | ذِ فارمِسی ایز نیر ذِ تْرِین سْتِیشِن. |
| u07 | `sentences[4]` | Don't turn left. | دُونت تِرن لِفت. |
| u07 | `sentences[5]` | Is there a restaurant near here? | ایز ذِر اِ رِسْتِرانت نیر هیر؟ |
| u07 | `sentences[6]` | The bus stop is next to the mosque. | ذِ باس سْتاپ ایز نِکست تو ذِ ماسک. |
| u08 | `title` | Shopping and colors | شاپینگ اَند کالِرز |
| u08 | `words[0].ex` | This shirt is blue. | ذیس شِرت ایز بْلو. |
| u08 | `words[1].ex` | I'd like a white T-shirt, please. | آید لایک اِ وایت تی‌شِرت، پْلیز. |
| u08 | `words[2].ex` | These pants are black. | ذیز پَنتس آر بْلَک. |
| u08 | `words[3].ex` | Maryam's dress is red. | مریمز دْرِس ایز رِد. |
| u08 | `words[4].ex` | I like these shoes. | آی لایک ذیز شوز. |
| u08 | `words[5].ex` | My coat is black. | مای کُوت ایز بْلَک. |
| u08 | `words[6].ex` | My grandmother has a green scarf. | مای گْرَندماذِر هَز اِ گْرین سْکارف. |
| u08 | `words[7].ex` | This hat is too big. | ذیس هَت ایز تو بیگ. |
| u08 | `words[8].ex` | The apple is red. | ذی اَپِل ایز رِد. |
| u08 | `words[9].ex` | Ali's shirt is blue. | علیز شِرت ایز بْلو. |
| u08 | `words[10].ex` | I'd like the green bag, please. | آید لایک ذِ گْرین بَگ، پْلیز. |
| u08 | `words[11].ex` | I like black tea. | آی لایک بْلَک تی. |
| u08 | `words[12].ex` | Milk is white. | میلک ایز وایت. |
| u08 | `words[13].ex` | Bananas are yellow. | بِنَنِز آر یِلُو. |
| u08 | `dialogue.title` | At the clothing store | اَت ذِ کْلُوذینگ سْتُر |
| u08 | `dialogue.lines[0]` | Hello. Can I help you? | هِلُو. کِن آی هِلپ یو؟ |
| u08 | `dialogue.lines[1]` | Yes, please. How much is this scarf? | یِس، پْلیز. هاو ماچ ایز ذیس سْکارف؟ |
| u08 | `dialogue.lines[2]` | The green scarf? It's five dollars. | ذِ گْرین سْکارف؟ ایتس فایو دالِرز. |
| u08 | `dialogue.lines[3]` | And that bag? | اَند ذَت بَگ؟ |
| u08 | `dialogue.lines[4]` | The black bag is twenty dollars. | ذِ بْلَک بَگ ایز تْوِنتی دالِرز. |
| u08 | `dialogue.lines[5]` | Hmm. And how much are those shoes? | هْم. اَند هاو ماچ آر ذُوز شوز؟ |
| u08 | `dialogue.lines[6]` | These white shoes? They're fifteen dollars. | ذیز وایت شوز؟ ذِر فیفتین دالِرز. |
| u08 | `dialogue.lines[7]` | OK. I'd like the scarf and the shoes, please. | اُوکِی. آید لایک ذِ سْکارف اَند ذِ شوز، پْلیز. |
| u08 | `dialogue.lines[8]` | That's twenty dollars, please. | ذَتس تْوِنتی دالِرز، پْلیز. |
| u08 | `dialogue.lines[9]` | Here you are. | هیر یو آر. |
| u08 | `grammar[0].title` | this / that / these / those | ذیس / ذَت / ذیز / ذُوز |
| u08 | `grammar[0].examples[0]` | This bag is red. | ذیس بَگ ایز رِد. |
| u08 | `grammar[0].examples[1]` | That coat is black. | ذَت کُوت ایز بْلَک. |
| u08 | `grammar[0].examples[2]` | These shoes are white. | ذیز شوز آر وایت. |
| u08 | `grammar[0].examples[3]` | Those T-shirts are green. | ذُوز تی‌شِرتس آر گْرین. |
| u08 | `grammar[0].examples[4]` | I like these pants. | آی لایک ذیز پَنتس. |
| u08 | `grammar[0].exercises[0]` | These shoes are black. | ذیز شوز آر بْلَک. |
| u08 | `grammar[0].exercises[1]` | That bag is blue. | ذَت بَگ ایز بْلو. |
| u08 | `grammar[0].exercises[2]` | These shirts are white. | ذیز شِرتس آر وایت. |
| u08 | `grammar[0].exercises[3]` | This coat is red. | ذیس کُوت ایز رِد. |
| u08 | `grammar[0].exercises[4]` | Those T-shirts are yellow. | ذُوز تی‌شِرتس آر یِلُو. |
| u08 | `grammar[0].exercises[5]` | I like this green scarf. | آی لایک ذیس گْرین سْکارف. |
| u08 | `grammar[0].exercises[6]` | Those pants are black. | ذُوز پَنتس آر بْلَک. |
| u08 | `grammar[1].title` | How much is it? / a red dress | هاو ماچ ایز ایت؟ / اِ رِد دْرِس |
| u08 | `grammar[1].examples[0]` | How much is this T-shirt? It's twelve dollars. | هاو ماچ ایز ذیس تی‌شِرت؟ ایتس تْوِلْو دالِرز. |
| u08 | `grammar[1].examples[1]` | How much are these shoes? They're twenty dollars. | هاو ماچ آر ذیز شوز؟ ذِر تْوِنتی دالِرز. |
| u08 | `grammar[1].examples[2]` | I'd like a white shirt, please. | آید لایک اِ وایت شِرت، پْلیز. |
| u08 | `grammar[1].examples[3]` | Sara has a green bag. | سارا هَز اِ گْرین بَگ. |
| u08 | `grammar[1].exercises[0]` | How much is this scarf? | هاو ماچ ایز ذیس سْکارف؟ |
| u08 | `grammar[1].exercises[1]` | How much are these pants? | هاو ماچ آر ذیز پَنتس؟ |
| u08 | `grammar[1].exercises[2]` | I'd like a red bag, please. | آید لایک اِ رِد بَگ، پْلیز. |
| u08 | `grammar[1].exercises[3]` | How much is this coat? | هاو ماچ ایز ذیس کُوت؟ |
| u08 | `grammar[1].exercises[4]` | She has a blue dress. | شی هَز اِ بْلو دْرِس. |
| u08 | `grammar[1].exercises[5]` | How much is it? | هاو ماچ ایز ایت؟ |
| u08 | `grammar[1].exercises[6]` | It's fifteen dollars. | ایتس فیفتین دالِرز. |
| u08 | `reading.title` | At the clothing store | اَت ذِ کْلُوذینگ سْتُر |
| u08 | `reading.text[0]` | Maryam and her daughter Mina are at a clothing store. | مریم اَند هِر داتِر مینا آر اَت اِ کْلُوذینگ سْتُر. |
| u08 | `reading.text[1]` | Mina likes red. She would like a red dress. | مینا لایکس رِد. شی وود لایک اِ رِد دْرِس. |
| u08 | `reading.text[2]` | The red dress is eighteen dollars. | ذِ رِد دْرِس ایز اِیتین دالِرز. |
| u08 | `reading.text[3]` | Maryam likes the black coat, but it's too big. | مریم لایکس ذِ بْلَک کُوت، بات ایتس تو بیگ. |
| u08 | `reading.text[4]` | There are some white T-shirts next to the coats. | ذِر آر سام وایت تی‌شِرتس نِکست تو ذِ کُوتس. |
| u08 | `reading.text[5]` | They are six dollars. | ذِی آر سیکس دالِرز. |
| u08 | `reading.text[6]` | Maryam would like a white T-shirt for Amir. | مریم وود لایک اِ وایت تی‌شِرت فُر امیر. |
| u08 | `reading.text[7]` | Amir is her son. | امیر ایز هِر سان. |
| u08 | `reading.questions[0].q` | What color is Mina's dress? | وات کالِر ایز میناز دْرِس؟ |
| u08 | `reading.questions[1].q` | How much is the red dress? | هاو ماچ ایز ذِ رِد دْرِس؟ |
| u08 | `reading.questions[2].q` | How much are the white T-shirts? | هاو ماچ آر ذِ وایت تی‌شِرتس؟ |
| u08 | `reading.questions[3].q` | Who is Amir? | هو ایز امیر؟ |
| u08 | `sentences[0]` | How much is this bag? | هاو ماچ ایز ذیس بَگ؟ |
| u08 | `sentences[1]` | These shoes are black. | ذیز شوز آر بْلَک. |
| u08 | `sentences[2]` | I'd like a blue T-shirt, please. | آید لایک اِ بْلو تی‌شِرت، پْلیز. |
| u08 | `sentences[3]` | That coat is too big. | ذَت کُوت ایز تو بیگ. |
| u08 | `sentences[4]` | Those pants are fifteen dollars. | ذُوز پَنتس آر فیفتین دالِرز. |
| u08 | `sentences[5]` | My sister has a yellow dress. | مای سیستِر هَز اِ یِلُو دْرِس. |
| u08 | `sentences[6]` | What color is your scarf? | وات کالِر ایز یور سْکارف؟ |
| u09 | `title` | Weather and seasons | وِذِر اَند سیزِنز |
| u09 | `words[0].ex` | How's the weather in Tehran? | هاوز ذِ وِذِر این تهران؟ |
| u09 | `words[1].ex` | It's sunny today. | ایتس سانی تِدِی. |
| u09 | `words[2].ex` | It's raining. Take your umbrella! | ایتس رِینینگ. تِیک یور آمبْرِلا! |
| u09 | `words[3].ex` | It's snowing in Tabriz. | ایتس سْنُوئینگ این تبریز. |
| u09 | `words[4].ex` | It's cloudy and cold. | ایتس کْلاودی اَند کُولد. |
| u09 | `words[5].ex` | It's windy today. | ایتس ویندی تِدِی. |
| u09 | `words[6].ex` | In summer, it's very hot in Ahvaz. | این سامِر، ایتس وِری هات این اهواز. |
| u09 | `words[7].ex` | It's cold in winter. | ایتس کُولد این وینتِر. |
| u09 | `words[8].ex` | There are four seasons in a year. | ذِر آر فُر سیزِنز این اِ ییر. |
| u09 | `words[9].ex` | Nowruz is in spring. | نوروز ایز این سْپْرینگ. |
| u09 | `words[10].ex` | In Iran, summer is hot. | این ایران، سامِر ایز هات. |
| u09 | `words[11].ex` | It's windy in the fall. | ایتس ویندی این ذِ فال. |
| u09 | `words[12].ex` | It snows in winter. | ایت سْنُوز این وینتِر. |
| u09 | `words[13].ex` | There are twelve months in a year. | ذِر آر تْوِلْو مانثس این اِ ییر. |
| u09 | `dialogue.title` | A phone call | اِ فُون کال |
| u09 | `dialogue.lines[0]` | Hi, Ali! How's the weather in Tehran? | های، علی! هاوز ذِ وِذِر این تهران؟ |
| u09 | `dialogue.lines[1]` | Hi, Emma! It's cold, but it's sunny. And in New York? | های، اِما! ایتس کُولد، بات ایتس سانی. اَند این نو یُرک؟ |
| u09 | `dialogue.lines[2]` | It's very cold and windy here. It's snowing! | ایتس وِری کُولد اَند ویندی هیر. ایتس سْنُوئینگ! |
| u09 | `dialogue.lines[3]` | Snow! I like snow. | سْنُو! آی لایک سْنُو. |
| u09 | `dialogue.lines[4]` | I don't like winter. I like summer. | آی دُونت لایک وینتِر. آی لایک سامِر. |
| u09 | `dialogue.lines[5]` | Summer in Tehran is very hot! Come to Tehran in spring. | سامِر این تهران ایز وِری هات! کام تو تهران این سْپْرینگ. |
| u09 | `dialogue.lines[6]` | In spring? In April? | این سْپْرینگ؟ این اِیپْرِل؟ |
| u09 | `dialogue.lines[7]` | Yes, or in March. Nowruz is in March. It's the Iranian New Year. | یِس، اُر این مارچ. نوروز ایز این مارچ. ایتس ذی ایرِینیِن نو ییر. |
| u09 | `dialogue.lines[8]` | Great! See you in March, Ali! | گْرِیت! سی یو این مارچ، علی! |
| u09 | `grammar[0].title` | It's sunny. / It's raining. | ایتس سانی. / ایتس رِینینگ. |
| u09 | `grammar[0].examples[0]` | How's the weather today? It's sunny. | هاوز ذِ وِذِر تِدِی؟ ایتس سانی. |
| u09 | `grammar[0].examples[1]` | It's raining in Rasht. | ایتس رِینینگ این رشت. |
| u09 | `grammar[0].examples[2]` | It's cold and windy. | ایتس کُولد اَند ویندی. |
| u09 | `grammar[0].examples[3]` | It's snowing! | ایتس سْنُوئینگ! |
| u09 | `grammar[0].exercises[0]` | It's sunny today. | ایتس سانی تِدِی. |
| u09 | `grammar[0].exercises[1]` | It's raining. Take your umbrella! | ایتس رِینینگ. تِیک یور آمبْرِلا! |
| u09 | `grammar[0].exercises[2]` | It's cold in winter. | ایتس کُولد این وینتِر. |
| u09 | `grammar[0].exercises[3]` | It's snowing in Tabriz. | ایتس سْنُوئینگ این تبریز. |
| u09 | `grammar[0].exercises[4]` | How's the weather in Shiraz? | هاوز ذِ وِذِر این شیراز؟ |
| u09 | `grammar[0].exercises[5]` | It's cloudy and cold. | ایتس کْلاودی اَند کُولد. |
| u09 | `grammar[0].exercises[6]` | It's hot in summer. | ایتس هات این سامِر. |
| u09 | `grammar[1].title` | in May, in summer | این مِی، این سامِر |
| u09 | `grammar[1].examples[0]` | Nowruz is in March. | نوروز ایز این مارچ. |
| u09 | `grammar[1].examples[1]` | My birthday is in July. | مای بِرثدِی ایز این جولای. |
| u09 | `grammar[1].examples[2]` | It's very hot in August. | ایتس وِری هات این آگِست. |
| u09 | `grammar[1].examples[3]` | It's cold in January. | ایتس کُولد این جَنیوِری. |
| u09 | `grammar[1].examples[4]` | We go to the park in spring. | وی گُو تو ذِ پارک این سْپْرینگ. |
| u09 | `grammar[1].exercises[0]` | My birthday is in June. | مای بِرثدِی ایز این جون. |
| u09 | `grammar[1].exercises[1]` | Nowruz is in March. | نوروز ایز این مارچ. |
| u09 | `grammar[1].exercises[2]` | It's cold in winter. | ایتس کُولد این وینتِر. |
| u09 | `grammar[1].exercises[3]` | October is in the fall. | آکْتُوبِر ایز این ذِ فال. |
| u09 | `grammar[1].exercises[4]` | My birthday is in May. | مای بِرثدِی ایز این مِی. |
| u09 | `grammar[1].exercises[5]` | It's hot in summer. | ایتس هات این سامِر. |
| u09 | `grammar[1].exercises[6]` | It's windy in the fall. | ایتس ویندی این ذِ فال. |
| u09 | `reading.title` | Seasons in Iran | سیزِنز این ایران |
| u09 | `reading.text[0]` | There are four seasons in Iran. | ذِر آر فُر سیزِنز این ایران. |
| u09 | `reading.text[1]` | Spring starts in March and ends in June. | سْپْرینگ سْتارتس این مارچ اَند اِندز این جون. |
| u09 | `reading.text[2]` | Nowruz is in March. It's the first day of spring. | نوروز ایز این مارچ. ایتس ذِ فِرست دِی آو سْپْرینگ. |
| u09 | `reading.text[3]` | In summer, it's very hot in Ahvaz. | این سامِر، ایتس وِری هات این اهواز. |
| u09 | `reading.text[4]` | In the fall, it's cloudy and windy. | این ذِ فال، ایتس کْلاودی اَند ویندی. |
| u09 | `reading.text[5]` | In winter, it's cold. It snows in Tabriz. | این وینتِر، ایتس کُولد. ایت سْنُوز این تبریز. |
| u09 | `reading.text[6]` | I like spring. It's sunny, but it isn't hot. | آی لایک سْپْرینگ. ایتس سانی، بات ایت ایزِنت هات. |
| u09 | `reading.questions[0].q` | When is Nowruz? | وِن ایز نوروز؟ |
| u09 | `reading.questions[1].q` | How's the weather in Ahvaz in summer? | هاوز ذِ وِذِر این اهواز این سامِر؟ |
| u09 | `reading.questions[2].q` | Is it hot in winter? | ایز ایت هات این وینتِر؟ |
| u09 | `reading.questions[3].q` | How many seasons are there in Iran? | هاو مِنی سیزِنز آر ذِر این ایران؟ |
| u09 | `sentences[0]` | How's the weather today? | هاوز ذِ وِذِر تِدِی؟ |
| u09 | `sentences[1]` | It's raining in Rasht. | ایتس رِینینگ این رشت. |
| u09 | `sentences[2]` | It's sunny and hot. | ایتس سانی اَند هات. |
| u09 | `sentences[3]` | My birthday is in April. | مای بِرثدِی ایز این اِیپْرِل. |
| u09 | `sentences[4]` | It's cold in winter. | ایتس کُولد این وینتِر. |
| u09 | `sentences[5]` | There are twelve months in a year. | ذِر آر تْوِلْو مانثس این اِ ییر. |
| u09 | `sentences[6]` | Nowruz is in spring. | نوروز ایز این سْپْرینگ. |
| u09 | `sentences[7]` | It's windy in the fall. | ایتس ویندی این ذِ فال. |
| u10 | `title` | Free time | فْری تایم |
| u10 | `words[0].ex` | My son can swim. | مای سان کِن سْویم. |
| u10 | `words[1].ex` | My mother reads every day. | مای ماذِر ریدز اِوْری دِی. |
| u10 | `words[2].ex` | My father can cook. | مای فاذِر کِن کوک. |
| u10 | `words[3].ex` | Mina can sing. | مینا کِن سینگ. |
| u10 | `words[4].ex` | My daughter likes drawing. | مای داتِر لایکس دْرائینگ. |
| u10 | `words[5].ex` | Amir plays soccer in the park. | امیر پْلِیز ساکِر این ذِ پارک. |
| u10 | `words[6].ex` | My grandfather plays chess every evening. | مای گْرَندفاذِر پْلِیز چِس اِوْری ایوْنینگ. |
| u10 | `words[7].ex` | Tom can play the guitar. | تام کِن پْلِی ذِ گیتار. |
| u10 | `words[8].ex` | I listen to music in the evening. | آی لیسِن تو میوزیک این ذی ایوْنینگ. |
| u10 | `words[9].ex` | Sara can ride a bike. | سارا کِن راید اِ بایک. |
| u10 | `words[10].ex` | My grandfather can't drive. | مای گْرَندفاذِر کَنت دْرایو. |
| u10 | `words[11].ex` | We walk in the park every day. | وی واک این ذِ پارک اِوْری دِی. |
| u10 | `words[12].ex` | I can speak a little English. | آی کِن سْپیک اِ لیتِل اینگلیش. |
| u10 | `words[13].ex` | I read in my free time. | آی رید این مای فْری تایم. |
| u10 | `dialogue.title` | In the park | این ذِ پارک |
| u10 | `dialogue.lines[0]` | What do you do in your free time, Reza? | وات دو یو دو این یور فْری تایم، رضا؟ |
| u10 | `dialogue.lines[1]` | I like playing chess. Can you play chess? | آی لایک پْلِیینگ چِس. کِن یو پْلِی چِس؟ |
| u10 | `dialogue.lines[2]` | No, I can't. But I can swim. I like swimming. | نُو، آی کَنت. بات آی کِن سْویم. آی لایک سْویمینگ. |
| u10 | `dialogue.lines[3]` | I can't swim! | آی کَنت سْویم! |
| u10 | `dialogue.lines[4]` | Do you like music? | دو یو لایک میوزیک؟ |
| u10 | `dialogue.lines[5]` | Yes, I do. My daughter and I play the guitar. | یِس، آی دو. مای داتِر اَند آی پْلِی ذِ گیتار. |
| u10 | `dialogue.lines[6]` | Can you sing, too? | کِن یو سینگ، تو؟ |
| u10 | `dialogue.lines[7]` | A little. And you? | اِ لیتِل. اَند یو؟ |
| u10 | `dialogue.lines[8]` | I can't sing, but I like listening to music. | آی کَنت سینگ، بات آی لایک لیسِنینگ تو میوزیک. |
| u10 | `dialogue.lines[9]` | Me too! | میْ تو! |
| u10 | `grammar[0].title` | can / can't | کَن / کَنت |
| u10 | `grammar[0].examples[0]` | I can swim. | آی کِن سْویم. |
| u10 | `grammar[0].examples[1]` | My grandfather can play chess. | مای گْرَندفاذِر کِن پْلِی چِس. |
| u10 | `grammar[0].examples[2]` | Sara can't drive. | سارا کَنت دْرایو. |
| u10 | `grammar[0].examples[3]` | Can you cook? Yes, I can. | کِن یو کوک؟ یِس، آی کَن. |
| u10 | `grammar[0].exercises[0]` | She can swim. | شی کِن سْویم. |
| u10 | `grammar[0].exercises[1]` | I can play the guitar. | آی کِن پْلِی ذِ گیتار. |
| u10 | `grammar[0].exercises[2]` | Amir is twelve. He can't drive. | امیر ایز تْوِلْو. هی کَنت دْرایو. |
| u10 | `grammar[0].exercises[3]` | Can you speak English? | کِن یو سْپیک اینگلیش؟ |
| u10 | `grammar[0].exercises[4]` | Can you cook? Yes, I can. | کِن یو کوک؟ یِس، آی کَن. |
| u10 | `grammar[0].exercises[5]` | My mother can play chess. | مای ماذِر کِن پْلِی چِس. |
| u10 | `grammar[0].exercises[6]` | Can you ride a bike? | کِن یو راید اِ بایک؟ |
| u10 | `grammar[1].title` | I like swimming. / Do you …? | آی لایک سْویمینگ. / دو یو …؟ |
| u10 | `grammar[1].examples[0]` | I like reading. | آی لایک ریدینگ. |
| u10 | `grammar[1].examples[1]` | Ali likes playing soccer. | علی لایکس پْلِیینگ ساکِر. |
| u10 | `grammar[1].examples[2]` | I don't like cooking. | آی دُونت لایک کوکینگ. |
| u10 | `grammar[1].examples[3]` | Do you like swimming? Yes, I do. | دو یو لایک سْویمینگ؟ یِس، آی دو. |
| u10 | `grammar[1].examples[4]` | Do you play chess? No, I don't. | دو یو پْلِی چِس؟ نُو، آی دُونت. |
| u10 | `grammar[1].exercises[0]` | I like swimming. | آی لایک سْویمینگ. |
| u10 | `grammar[1].exercises[1]` | Do you like music? | دو یو لایک میوزیک؟ |
| u10 | `grammar[1].exercises[2]` | She likes reading. | شی لایکس ریدینگ. |
| u10 | `grammar[1].exercises[3]` | Do you like cooking? No, I don't. | دو یو لایک کوکینگ؟ نُو، آی دُونت. |
| u10 | `grammar[1].exercises[4]` | We like riding bikes. | وی لایک رایدینگ بایکس. |
| u10 | `grammar[1].exercises[5]` | Do you like playing chess? | دو یو لایک پْلِیینگ چِس؟ |
| u10 | `grammar[1].exercises[6]` | My father likes listening to music. | مای فاذِر لایکس لیسِنینگ تو میوزیک. |
| u10 | `reading.title` | Our free time | آوِر فْری تایم |
| u10 | `reading.text[0]` | My name is Amir. I am twelve years old. | مای نِیم ایز امیر. آی اَم تْوِلْو ییرز اُولد. |
| u10 | `reading.text[1]` | In my free time, I play soccer. | این مای فْری تایم، آی پْلِی ساکِر. |
| u10 | `reading.text[2]` | My sister Mina likes reading and drawing. | مای سیستِر مینا لایکس ریدینگ اَند دْرائینگ. |
| u10 | `reading.text[3]` | My father likes cooking. | مای فاذِر لایکس کوکینگ. |
| u10 | `reading.text[4]` | My mother can drive, but my father can't. | مای ماذِر کِن دْرایو، بات مای فاذِر کَنت. |
| u10 | `reading.text[5]` | My grandmother can't ride a bike, but she likes walking in the park. | مای گْرَندماذِر کَنت راید اِ بایک، بات شی لایکس واکینگ این ذِ پارک. |
| u10 | `reading.text[6]` | In the evening, my grandfather and I play chess. | این ذی ایوْنینگ، مای گْرَندفاذِر اَند آی پْلِی چِس. |
| u10 | `reading.questions[0].q` | How old is Amir? | هاو اُولد ایز امیر؟ |
| u10 | `reading.questions[1].q` | Mina likes ___. | مینا لایکس ___. |
| u10 | `reading.questions[2].q` | Can Amir's father drive? | کِن امیرز فاذِر دْرایو؟ |
| u10 | `reading.questions[3].q` | Who likes walking in the park? | هو لایکس واکینگ این ذِ پارک؟ |
| u10 | `sentences[0]` | I can swim, but I can't drive. | آی کِن سْویم، بات آی کَنت دْرایو. |
| u10 | `sentences[1]` | Do you like reading? | دو یو لایک ریدینگ؟ |
| u10 | `sentences[2]` | My brother likes playing soccer. | مای بْراذِر لایکس پْلِیینگ ساکِر. |
| u10 | `sentences[3]` | Can you speak English? Yes, a little. | کِن یو سْپیک اینگلیش؟ یِس، اِ لیتِل. |
| u10 | `sentences[4]` | We like listening to music. | وی لایک لیسِنینگ تو میوزیک. |
| u10 | `sentences[5]` | My grandmother can play chess. | مای گْرَندماذِر کِن پْلِی چِس. |
| u10 | `sentences[6]` | What do you do in your free time? | وات دو یو دو این یور فْری تایم؟ |
