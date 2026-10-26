# Review: en-fa B1 (u01–u10)

Reviewer pass: every word, phrase, dialogue line, grammar explanation/table/example/exercise, reading text/question and sentence in u01–u10 was checked. `python3 tools/validate.py content/en-fa/B1/*.json` → OK for all 10 files.

## Conventions applied to `pr` (aligned with en-fa A2 and the majority of B1)

- voiced *th* (the/that) = **ذ** (u01–u05 used د, u06–u10 and A2 use ذ)
- /oʊ/ (go, know, home, don't, so…) = **ُو** (گُو, نُو, هُوم, دُونت), as in A2 (هُوم, هُوتِل, اُوکِی); plain و is read /u/ (نو even reads as Persian «نو» = now)
- /ɔr/ (story, course, report…) = **ُر** (سْتُری, کُرس), as in فُر/مُر/فُروِرد already used
- /aʊ/ (about, down, out) = **او** (اِباوت, داون), as in هاو/ساوندز; replaced the mixed variants اَو / ائو
- unstressed schwa = **اِ** (adventure, apply, along, journalist, memorize, probably…)
- *me* = می (mid-sentence میْ, as in other levels, because «مِی» reads /mey/)

## Changes

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u01 | `words[1].pr` (w02) | اَدْوِنچِر → اِدْوِنچِر | first syllable is schwa /əd-/ |
| u01 | `words[2].pr` (w03) | گو اَبْراد → گُو اِبْراد | go /oʊ/ (اُو, as A2); abroad /əˈbrɑd/ schwa |
| u01 | `words[3].pr` (w04) | اَچیو → اِچیو | achieve /əˈtʃiv/ schwa |
| u01 | `words[7].pr` (w08) | پَس اَن ایگْزَم → پَس اِن ایگْزَم | unstressed "an" /ən/, like "a" = اِ |
| u01 | `phrases[1].pr` (p02) | آیو نِوِر دان دَت بیفور → آیو نِوِر دان ذَت بیفُر | voiced th = ذ (convention of A2 and u06–u10); before /bɪˈfɔr/ |
| u01 | `phrases[3].pr` (p04) | ایت واز دِ بِست دِی آو مای لایف → ایت واز ذِ بِست دِی آو مای لایف | the = ذِ |
| u01 | `phrases[6].pr` (p07) | هاو دید ایت گو؟ → هاو دید ایت گُو؟ | go /oʊ/ |
| u02 | `words[2].pr` (w03) | گْرو آپ → گْرُو آپ | grow /oʊ/ |
| u02 | `words[5].pr` (w06) | تِل اِ سْتوری → تِل اِ سْتُری | story /ˈstɔri/ (o, not u) |
| u02 | `words[9].pr` (w10) | سْتورم → سْتُرم | storm /stɔrm/ (o, not u) |
| u02 | `phrases[5].pr` (p06) | این دِ اِند → این ذِ اِند | the = ذِ |
| u02 | `phrases[6].pr` (p07) | دَت ریمایندز مِی آو → ذَت ریمایندز میْ آو | me = /mi/ (مِی reads "mey"); that = ذَت |
| u03 | `words[0].pr` (w01) | اَپْلای فُر → اِپْلای فُر | apply /əˈplaɪ/ schwa |
| u03 | `words[9].pr` (w10) | گِت پْرِموتِد → گِت پْرِمُوتِد | promoted /oʊ/ |
| u03 | `words[14].pr` (w15) | وِرک فْرام هوم → وِرک فْرام هُوم | home /hoʊm/ (A2: هُوم) |
| u03 | `phrases[0].pr` (p01) | آیم کالینگ اِبَوت دِ جاب اَد → آیم کالینگ اِباوت ذِ جاب اَد | about /aʊ/ = او (as هاو); the = ذِ |
| u03 | `phrases[1].pr` (p02) | کود یو تِل مِی مُر اِبَوت دِ جاب؟ → کود یو تِل میْ مُر اِباوت ذِ جاب؟ | me /mi/; about; the |
| u03 | `phrases[2].pr` (p03) | وات آر دِ وِرکینگ اَوِرز؟ → وات آر ذِ وِرکینگ آوِرز؟ | the = ذِ; hours /ˈaʊərz/ |
| u03 | `phrases[5].pr` (p06) | دَت ساوندز گْرِیت → ذَت ساوندز گْرِیت | that = ذَت |
| u03 | `phrases[6].pr` (p07) | ویل لِت یو نو بای فْرایدِی → ویل لِت یو نُو بای فْرایدِی | know /noʊ/ (نو reads Persian "now") |
| u04 | `words[4].pr` (w05) | وِرک اَوت → وِرک آوت | out /aʊt/ = آوت (convention) |
| u04 | `phrases[0].pr` (p01) | وای دونت یو…؟ → وای دُونت یو…؟ | don't /doʊnt/ |
| u04 | `phrases[4].pr` (p05) | آی دونت فیل وِری وِل → آی دُونت فیل وِری وِل | don't /doʊnt/ |
| u04 | `phrases[6].pr` (p07) | دَتس اِ گود پوینت → ذَتس اِ گود پوینت | that = ذ |
| u05 | `words[9].pr` (w10) | کات دَوْن → کات داون | down /daʊn/ (دَوْن reads "dawn/dowń") |
| u05 | `words[12].pr` (w13) | سولِر پَنِل → سُولِر پَنِل | solar /ˈsoʊlər/ |
| u05 | `words[14].pr` (w15) | دْرَوت → دْراوت | drought /draʊt/ |
| u05 | `phrases[1].pr` (p02) | آی توتِلی اِگْری → آی تُوتِلی اِگْری | totally /ˈtoʊtəli/ |
| u05 | `phrases[2].pr` (p03) | آیم نات شور اِبَوت دَت → آیم نات شور اِباوت ذَت | about /aʊ/; that = ذ |
| u05 | `phrases[5].pr` (p06) | وی نید تو دو سامثینگ اِبَوت → وی نید تو دو سامثینگ اِباوت | about /aʊ/ |
| u05 | `phrases[6].pr` (p07) | دِ پْرابلِم ایز دَت → ذِ پْرابلِم ایز ذَت | the/that = ذ |
| u06 | `words[2].pr` (w03) | جِرنالیست → جِرنِلیست | journalist /ˈdʒɜrnəlɪst/ – unstressed schwa, not ā |
| u06 | `words[5].pr` (w06) | سوشِل میدیا → سُوشِل میدیا | social /ˈsoʊʃəl/ |
| u06 | `words[7].pr` (w08) | سورس → سُرس | source /sɔrs/ (o, not u) |
| u06 | `words[9].pr` (w10) | اِنائونس → اِناونس | announce /aʊ/ = او (convention) |
| u06 | `words[10].pr` (w11) | ریپورت → ریپُرت | report /rɪˈpɔrt/ |
| u06 | `words[14].pr` (w15) | گو وایرِل → گُو وایرِل | go /oʊ/ |
| u06 | `phrases[0].pr` (p01) | دید یو هیر اِبائوت…؟ → دید یو هیر اِباوت…؟ | about – convention |
| u06 | `phrases[1].pr` (p02) | اِکوردینگ تو ذِ نوز، … → اِکُردینگ تو ذِ نوز، … | according /əˈkɔrdɪŋ/ |
| u06 | `phrases[3].pr` (p04) | ایتس آل اوِر ذِ نوز → ایتس آل اُوِر ذِ نوز | over /ˈoʊvər/ |
| u06 | `phrases[7].pr` (p08) | لِت مِی چِک → لِت میْ چِک | me /mi/ (مِی reads "mey") |
| u07 | `words[5].pr` (w06) | پَسپورت → پَسپُرت | passport /ˈpæspɔrt/ |
| u07 | `words[6].pr` (w07) | بوردینگ پَس → بُردینگ پَس | boarding /ˈbɔrdɪŋ/ |
| u07 | `words[10].pr` (w11) | کَمپْلِین اِبائوت → کِمپْلِین اِباوت | complain /kəmˈpleɪn/ schwa; about |
| u07 | `words[12].pr` (w13) | بْرِیک دائون → بْرِیک داون | down – convention |
| u07 | `words[14].pr` (w15) | کْرائودِد → کْراودِد | crowded /aʊ/ – convention |
| u07 | `phrases[4].pr` (p05) | آید لایک تو مِیک اِ کَمپْلِینت → آید لایک تو مِیک اِ کِمپْلِینت | complaint /kəmˈpleɪnt/ schwa |
| u07 | `phrases[6].pr` (p07) | ذَتس سو فْراسْتْرِیتینگ! → ذَتس سُو فْراسْتْرِیتینگ! | so /soʊ/ (سو reads "su") |
| u08 | `words[0].pr` (w01) | گِت اَلانگ ویذ → گِت اِلانگ ویذ | along /əˈlɔŋ/ schwa |
| u08 | `words[1].pr` (w02) | گِت تو نو → گِت تو نُو | know /noʊ/ |
| u08 | `words[2].pr` (w03) | کْلوس → کْلُوس | close /kloʊs/ |
| u08 | `words[8].pr` (w09) | فال آئوت ویذ → فال آوت ویذ | out – convention |
| u08 | `phrases[0].pr` (p01) | ویر ریلی کْلوس → ویر ریلی کْلُوس | close /kloʊs/ |
| u08 | `phrases[1].pr` (p02) | ویو نون ایچ آذِر فور ییرز → ویو نُون ایچ آذِر فُر ییرز | known /noʊn/; for = فُر (convention) |
| u08 | `phrases[3].pr` (p04) | وی دونت سی آی تو آی آن… → وی دُونت سی آی تو آی آن… | don't /doʊnt/ |
| u08 | `phrases[4].pr` (p05) | آی کَن آل‌وِیز کائونت آن هیم → آی کَن آل‌وِیز کاونت آن هیم | count – convention |
| u09 | `words[6].pr` (w07) | کورس → کُرس | course /kɔrs/ |
| u09 | `words[8].pr` (w09) | مِمورایز → مِمِرایز | memorize /ˈmeməraɪz/ – schwa, not u |
| u09 | `words[12].pr` (w13) | هوم‌وِرک → هُوم‌وِرک | home /hoʊm/ |
| u09 | `phrases[0].pr` (p01) | آیم ثینکینگ آو تِیکینگ اِ کورس این… → آیم ثینکینگ آو تِیکینگ اِ کُرس این… | course /kɔrs/ |
| u09 | `phrases[7].pr` (p08) | آیم لوکینگ فوروِرد تو ایت → آیم لوکینگ فُروِرد تو ایت | forward /ˈfɔrwərd/ (as u03 p08) |
| u10 | `words[1].pr` (w02) | روبات → رُوبات | robot /ˈroʊbɑt/ |
| u10 | `words[4].pr` (w05) | دائونلود → داونلُود | download /ˈdaʊnloʊd/ |
| u10 | `words[12].pr` (w13) | سْمارت هوم → سْمارت هُوم | home /hoʊm/ |
| u10 | `words[14].pr` (w15) | پْرابابْلی → پْرابِبْلی | probably /ˈprɑbəbli/ – schwa |
| u10 | `phrases[1].pr` (p02) | آی دائوت ایت → آی داوت ایت | doubt – convention |
| u10 | `phrases[6].pr` (p07) | هو نوز؟ → هو نُوز؟ | knows /noʊz/ |
| u10 | `phrases[7].pr` (p08) | ذَت سائوندز اِ بیت سْکِری → ذَت ساوندز اِ بیت سْکِری | sounds – convention (as u03 ساوندز) |
| u01 | `sentences[6].s` | پسرم همین تازگی در امتحان رانندگی قبول شده است. → پسرم تازه در امتحان رانندگی قبول شده است. | «همین تازگی» is unidiomatic; *has just passed* = «تازه … قبول شده است» |
| u03 | `grammar[1].exercises[2].answer` | [have, save, earn, make] → [have, save, earn, make, get] | *When I get enough money* is equally correct |

## Noticed, not changed

- Emoji kept although only approximate: u01 w02 *adventure* 🗺️, u08 w04 *colleague* 💼, u10 w07 *electric car* 🚗 (no electric-car emoji exists), u05 w10 *cut down* 🌲. All picture the topic and aren't misleading.
- u03 w03 *résumé* `pr` رِزومِی: /ˈrezʊmeɪ/ ~ /ˈrezəmeɪ/, both fine.
- u09 g02 ex3 *tired ___ waiting* accepts "from". It's marginal but possible, so I kept it.
- u04 g01 ex4 doesn't accept *should*: the sentence (“It's very important”, s = باید) asks for necessity, so this is correct.
- u02 w03/w11 ex: *grew up* is translated «بزرگ شده است» (perfect). That's the natural Persian rendering, so I kept it.
- u04 dialogue/examples use colloquial «بهتره» for *had better*. This is deliberate and explained in the grammar text.
- A2 is itself not fully consistent (e.g. «گو» in *go for a walk*, «پَسپورت»). B1 now follows the dominant A2 diacritic convention; the A2 reviewer may want to align.
- Grammar, exercises (choice answers unique, type answers complete, order sentences unambiguous), reading answers, dialogue speakers: no other errors found. Persian text: ZWNJ and ی/ک correct throughout.

## TTS-risky target texts (not changed)

- Ellipsis “…” in phrase `t` and `pr` (all units, e.g. u01 p01 *Have you ever…?*, u02 p03–p07, u04 p01–p03, u05 p01/p04/p06/p07, u06 p01–p03, u07 p01/p08, u08 p03/p04, u09 p01/p02, u10 p01/p03/p05).
- Slashes and “+” in grammar titles/tables: u01 g01/g02 tables (*have / has + past participle*, *for three days / for six months / …*), u02 g01 title and table (*I / he / she / it*, *when + past simple*), u02 g02 table row labels “+”, “−”, “?”, u03 g01 table (*If + present simple,*), u03 g02 title, u04 g01/g02 titles and table, u06 g01/g02 titles, u07 g02 title, u08 g01 title and table, u09 g01 table (*+ -ing*, *+ to*, *learning / to learn*), u09 g02 title and table, u10 g01 table.
- Dash “–” between Q/A in examples: u01 g01 ex2, u01 g02 ex2.
- Quotes plus “→” in exercise prompts: u06 g01 ex2–ex5, u06 g02 ex1, ex3–ex5; quoted direct speech in u06 tables.
- Abbreviations: u07 dialogue lines 3–4 *six a.m.*; u10 dialogue lines 4–5, g01 table, reading text[4] *AI*.
- Hyphenated name: u05 g02 ex0 *Si-o-se-pol*. Accented *résumé* (u03).
- Years (read fine but listed): 2015/2016/2018/2010/2019 (u01), 2016/1975/1889/1928/1997 (u05), 2010 (u08), 2040/2050 (u10).
