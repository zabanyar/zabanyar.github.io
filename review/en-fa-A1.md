# Review: en-fa A1 (u00–u10)

I checked every item in u00–u10: every pr guide, every t/s pair, the grammar explanations and tables, all exercises, the reading questions, the dialogues and the emoji.
`python3 tools/validate.py content/en-fa/A1/*.json` prints OK for all 11 files.

**Conventions I applied** (taken from the units' own majority usage):
- /oʊ/ is written «ُو» (نُو، نُوز، اُولد، هُوم، ویندُو).
- /ɔ(r)/ is written with ُ (دُر، اُر).
- Schwa is written with ِ (بِنَنا، لِمِن).
- A plain «و» stands for /u/ or /ʊ/ (مون، فود، بوک).

## Changes (34)

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u00 | `letters[14].ex.pr` | اورِنج → اُرِنج | pr: /ɔr/ written ُ (as دُر، اُر); «او» reads /u/ |
| u01 | `words[0].pr` | هِلو → هِلُو | pr: final /oʊ/ needs «ُو» (course convention, cf. نُو); «هلو» reads like Persian «holu» |
| u01 | `phrases[0].pr` | گود مورنینگ! → گود مُرنینگ! | pr: morning /ɔr/ → «مُر»; «مور» reads «mur» |
| u02 | `words[0].pr` | زیرو → زیرُو | pr: final /oʊ/ → «ُو» (course convention) |
| u02 | `words[4].pr` | فور → فُر | pr: four /fɔr/; «فور» reads «fur/fowr» (cf. door دُر) |
| u02 | `words[12].pr` | بوی → بُی | pr: boy /bɔɪ/; «بوی» reads as Persian «buy» (smell) |
| u03 | `words[8].pr` | هازبَند → هازبِند | pr: unstressed 2nd syllable is schwa /bənd/ (course uses ِ for schwa), not /bænd/ |
| u04 | `words[11].pr` | اورِنج → اُرِنج | pr: /ɔr/ → «اُر» |
| u04 | `phrases[7].pr` | اِنجوی یور میل! → اِنجُی یور میل! | pr: enjoy /ɪnˈdʒɔɪ/; «جوی» reads «juy» |
| u05 | `phrases[0].pr` | وِلکام تو مای هُوم! → وِلکِم تو مای هُوم! | pr: welcome /ˈwɛlkəm/, reduced 2nd syllable (schwa) |
| u06 | `words[5].pr` | گو → گُو | pr: go /ɡoʊ/ → «گُو» (course convention ُو for /oʊ/); «گو» reads «gu» |
| u06 | `words[9].pr` | گو تو بِد → گُو تو بِد | pr: go /ɡoʊ/ |
| u06 | `words[10].pr` | مورنینگ → مُرنینگ | pr: morning /ɔr/ → «مُر» |
| u06 | `phrases[5].pr` | کام هوم → کام هُوم | pr: home /hoʊm/ (as in u05 هُوم); «هوم» reads «hum» |
| u07 | `words[3].pr` | هاسپیتال → هاسپیتِل | pr: hospital ends in schwa /təl/, not «تال» (spelling-based) |
| u07 | `words[8].pr` | پوست آفیس → پُوست آفیس | pr: post /poʊst/; «پوست» reads as Persian «pust» (skin) |
| u07 | `phrases[0].pr` | اِکسکیوز می → ایکسکیوز می | pr: made consistent with u05 (/ɪk-/) |
| u07 | `phrases[3].pr` | گو سْتْرِیت → گُو سْتْرِیت | pr: go /ɡoʊ/ |
| u07 | `phrases[7].pr` | یور وِلکام → یور وِلکِم | pr: welcome /ˈwɛlkəm/ (schwa) |
| u08 | `title.s` | خرید، لباس و رنگ‌ها → خرید و رنگ‌ها | translation: title s did not match t "Shopping and colors" |
| u08 | `words[5].pr` | کوت → کُوت | pr: coat /koʊt/; «کوت» reads «kut» |
| u08 | `words[13].pr` | یِلو → یِلُو | pr: final /oʊ/ → «ُو» (cf. ویندُو) |
| u09 | `title.s` | هوا، ماه‌ها و فصل‌ها → هوا و فصل‌ها | translation: title s did not match t "Weather and seasons" |
| u09 | `words[3].pr` | سْنو → سْنُو | pr: snow /snoʊ/ |
| u09 | `words[7].pr` | کُلد → کُولد | pr: cold /koʊld/, consistent with اُولد (old) |
| u09 | `phrases[3].pr` | ایتس سْنوئینگ → ایتس سْنُوئینگ | pr: snowing /ˈsnoʊɪŋ/ |
| u09 | `phrases[4].pr` | تودِی → تِدِی | pr: today /təˈdeɪ/ – first vowel reduced; «تو» is spelling-based |
| u10 | `title.s` | وقت آزاد و سرگرمی‌ها → وقت آزاد | translation: title s did not match t "Free time" |
| u10 | `words[0].pr` | سْوِیم → سْویم | pr: swim /swɪm/; «وِی» = /eɪ/ in this course (نِیم) → would read «sweym» |
| u10 | `phrases[2].pr` | کَن یو سْوِیم؟ → کَن یو سْویم؟ | pr: swim /swɪm/ |
| u10 | `phrases[3].pr` | یِس، آی کَن / نو، آی کَنت → یِس، آی کَن / نُو، آی کَنت | pr: no /noʊ/ → «نُو» (as u01) |
| u10 | `phrases[5].pr` | یِس، آی دو / نو، آی دونت → یِس، آی دو / نُو، آی دُونت | pr: no /noʊ/, don't /doʊnt/ (as u04) |
| u10 | `grammar[1].exercises[2].answer` | ["reading"] → ["reading", "to read"] | exercise: "She likes to read." is also correct |
| u10 | `grammar[1].exercises[4].answer` | ["riding"] → ["riding", "to ride"] | exercise: "We like to ride bikes." is also correct |

**By category:**
- pr: 29
- target text: 0
- translation: 3
- grammar explanation: 0
- exercises: 2
- emoji: 0

## Noticed but not changed
- **Plain «و» for /uː/ in short words.** These guides are «تو» (two, too, to), «دو» (do) and «شو» (shoe). Persian readers may read them with /o/, because «تو», «دو» and «شو» are Persian words. Still, plain «و» = /u/ is the course's consistent convention (مون، فود، جوس، یو), and no clearer spelling exists in Persian script («توو» could be read «tuv»). Left as is.
- **Sukun (ْ) on consonant clusters.** u06–u10 use it (سْکول، بْرِکفِست، سْتْریت، آمبْرِلا). u00–u05 do not (برِکفِست، فرِند، آمبرِلا، ستودِنت). This is a mild inconsistency, but it is harmless. In u06 the sukun also does useful work: it marks «و» as /v/ in ایوْنینگ and اِوْری. I did not mass-edit it; decide centrally if you want one style.
- **u10 `phrases[7].pr` «میْ تو!».** The sukun on ی is odd; «می تو!» would be cleaner. But the validator rejects «می» + space (it treats it as a missing ZWNJ), so I kept the original. It is still read «mi».
- **«اُکلاک» (o'clock).** This is really /əˈklɑk/. I kept «اُ» because it is a common, readable spelling and is close enough.
- **«کَن» in questions (Can I…? Can you…?).** These are usually reduced to /kən/. «کَن» is still acceptable, so I kept it.
- **Order exercises with another possible order.** u02 g02 `exercises[7]` "Sara and Neda are girls." (the names could swap) and u07 g01 `exercises[4]` "Go straight and turn left." (the clauses could swap). In both, the Persian `s` fixes the intended order, so I left them.
- **Choice exercises where a second option is grammatical without the Persian prompt.** Examples: u05 "The cat is ___ the bed." (on/in), u07 g02 `exercises[1]` (near/opposite) and u09 "It's ___ in Tabriz." In every case the `s` translation makes exactly one option correct. This is the course's design, so I left them.
- **Seasons.** u09 lists spring as March–May (meteorological seasons), and the reading also says Nowruz (March 20/21) is "the first day of spring". This is a small inconsistency but fine at A1.
- **Borderline emoji.** 🤵/👰 for husband/wife, 🌳 for park and 🛣️ for street are acceptable pictures, so I kept them.
- **"Amir is one year old."** (u02 example) Amir is 12 in u10. These are separate example sentences, so it is not an error.

## TTS-risky target texts (item 6, for central handling)
- **Ellipsis «…»:**
  - u01 `phrases[5]`
  - u02 `phrases[1]`
  - u04 `phrases[0]`, `phrases[2]`
  - u05 `phrases[3]`; `grammar[0].table` rows "There is …", "There are …", "Is there …?", "Are there …?"
  - u07 `grammar[1].title.t`
  - u10 `grammar[1].title.t`
- **Slash «/» in t:**
  - u04 `phrases[3]`, `grammar[1].table[2][1]`
  - u05 `grammar[0].table[0..3][1]`
  - u07 `grammar[0].table[1][1]`
  - u09 `grammar[0].table[*][1]`
  - u10 `phrases[3]`, `phrases[5]`, `grammar[0].table[0..1][0]`
  - u01, u03 and u06 tables ("he / she / it", "he's / she's / it's", "we / they")
  - grammar titles in u01, u03, u04, u05, u06, u08, u09 and u10
- **«=» and digits:** u02 `grammar[0].exercises[4].t` "18 = ___"; u02 `grammar[0].table[*][0]` (11…20); u02 `grammar[0].title.t` "Numbers 11–20 and age".
- **Clock times:** u06 `grammar[1].table` "7:00", "7:30", "at 8:00".
- **«+»:** u07 `grammar[0].table[2][0]` "don't + verb"; u08 `grammar[1].table[2][0]` "a + color + thing".
- **Em dash «—» between question and answer:**
  - u01 `grammar[1].examples[1]`, `[3]`, `exercises[3]`
  - u02 `grammar[0].examples[3]`
  - u04 `grammar[1].examples[2]`, `exercises[1]`
  - u05 `grammar[0].examples[3]`, `[4]`, `grammar[1].examples[4]`
- **Hyphenated items:**
  - u02 `dialogue.lines[7]` "five-five-five, one-two-three-four"
  - u00 "yo-yo"
  - u02 `grammar[1].title.t` "Plural -s"
  - u08 "T-shirt" (in words[1], several examples and the reading)
- **Interjections and abbreviations:**
  - u04 `dialogue.lines[9]` "Mmm"
  - u08 `dialogue.lines[5]` "Hmm"
  - "OK" in u06 `dialogue.lines[7]`, u07 `dialogue.lines[4]` and u08 `dialogue.lines[7]`
  - "TV" in u05–u06
- **Apostrophe-initial title:** u03 `grammar[1].title.t` "'s and have / has".
