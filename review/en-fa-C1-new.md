# Review: en-fa C1 (u01–u10), new level, Oct 2026

Independent expert pass over every item in u01–u10: all words, examples, phrases, dialogue lines, grammar explanations, tables, examples and exercises, reading texts and questions, and sentences. Every `pr` was checked word by word against General American pronunciation. A word-alignment script also compared each English token with its `pr` token across the whole level, to catch inconsistencies. `python3 tools/validate.py content/en-fa/C1/*.json` prints OK for all 10 files.

## Overall verdict

The level is in good shape. Grammar follows `CURRICULUM_NEW_LEVELS.md` for every unit (2 points each) and is pitched at C1. Points that B2 already taught are only referred back to ("از B2 می‌شناسید": impersonal passive, participle clauses, causative, contrast linkers, relative clauses, phrasal-verb types), never re-taught. No B2/B1 unit already teaches a C1 point.

The explanations are accurate. All `choice` items have exactly one correct option. Every exercise `pr` is the full sentence with the answer filled in (no `___`). Reading answers can all be found in the texts.

The errors were concentrated in four areas:
- `pr` conventions: *your* = «یُر»; *language* = «لَنگْوِیج», which reads /weɪdʒ/; *out* = «اوت»; names
- five headwords and one phrase already taught in B2
- two facts that will go out of date
- a few `type`/`order` items missing correct alternatives

## `pr` conventions applied (identical in all 10 units)

- *your / you're / yourself* = **یور / یورْسِلْف** (BRIEF_NEW rule). 35 tokens of «یُر» were changed.
- *out* /aʊt/ = **آوت**, also in compounds (آوتْسُرس, آوت‌وِی, آپْت‌آوت), as in all other en-fa levels. Word-initial «اوت» is read /ut/.
- *language(s)* = **لَنگْویج(ِز)**. With ِی = /eɪ/, «لَنگْوِیج» reads *lang-weij*. u09 already had «لَنْگْویج».
- *however* = **هاوْاِوِر** (level majority). «هاوِوِر» loses the /aʊ/.
- Persian names in normal Persian spelling throughout: رِضا, علی, حافِظ, مَریَم, نِدا, اَمیر, تِهْران, شیراز, نُوروز. English names are written by sound: جَک, تام.
- Level-internal consistency: *Iranian* ایرِینیِن, *suggest(s)* سِگْجِسْت(ْس), *moving* مووینگ, *being* بیینگ, *wealthier* وِلْثیِر.
- Already correct throughout and left alone: ذ/ث, ُو for /oʊ/, ُر for /ɔr/, او for /aʊ/, ُی for /ɔɪ/, ِی for /eɪ/, ِر for /ɜr/, schwa ِ, *the* = ذی before vowel sounds and ذِ elsewhere (script-checked), *a/an* = اِ/اِن, *me* = میْ, flap t, -ed endings (ت/د/ِد) and -s endings.

## Changes

Category counts by changed field: **pr 95**, target text 21, translation 16, exercises 8, emoji 3, grammar explanation 0.

Headword and phrase replacements (ids kept; each replacement is on-theme, C1-level and new to the course):

| Unit / id | Old (already taught in) | New |
|---|---|---|
| u07 w04 | exchange rate (B2 u08) | subsidy (یارانه) |
| u07 w08 | consumer (B2 u09) | purchasing power (قدرت خرید) |
| u08 w04 | side effect (B2 u03) | placebo (دارونما) |
| u10 w01 | audience (B2 u10) | eye contact (ارتباط چشمی) |
| u10 w08 | evidence (B2 u05) | anecdote (حکایت، خاطره‌ی کوتاه) |
| u09 p07 | Better late than never. (B2 u03) | Speak of the devil! (حلال‌زاده است!) |

| File | JSON path | Old → New | Reason | Category |
|---|---|---|---|---|
| u01 | `words[15].ex.t` | Many of Hafez's wordplays get lost in translation. → Much of Hafez's wordplay gets lost in translation. | "wordplay" is normally uncountable; "wordplays" is unnatural | target |
| u01 | `words[15].ex.pr` | مِنی آو حافِظِز وِرْدْپْلِیز گِت لاسْت این تْرَنْزْلِیشِن. → ماچ آو حافِظِز وِرْدْپْلِی گِتْس لاسْت این تْرَنْزْلِیشِن. | matches corrected t | pr |
| u01 | `words[15].ex.s` | بسیاری از بازی‌های کلامی حافظ در ترجمه از دست می‌روند. → بخش زیادی از بازی‌های کلامی حافظ در ترجمه از دست می‌رود. | matches corrected t | translation |
| u01 | `grammar[1].exercises[5].answer` | ["Do"] → ["Do", "Please"] | "Please sit down and make yourself at home" is equally correct and fits s | exercise |
| u01 | `title.pr` | لَنگْوِیج → لَنگْویج | language /ˈlæŋɡwɪdʒ/ – «وِیج» reads /weɪdʒ/ (ِی = /eɪ/) | pr |
| u01 | `words[0].ex.pr` | لَنگْوِیجِز → لَنگْویجِز | languages /ˈlæŋɡwɪdʒɪz/ – «وِیج» reads /weɪdʒ/ | pr |
| u01 | `words[4].ex.pr` | لَنگْوِیجِز → لَنگْویجِز | languages /ˈlæŋɡwɪdʒɪz/ – «وِیج» reads /weɪdʒ/ | pr |
| u01 | `words[10].pr` | لَنگْوِیج → لَنگْویج | language /ˈlæŋɡwɪdʒ/ – «وِیج» reads /weɪdʒ/ (ِی = /eɪ/) | pr |
| u01 | `words[10].ex.pr` | لَنگْوِیج → لَنگْویج | language /ˈlæŋɡwɪdʒ/ – «وِیج» reads /weɪdʒ/ (ِی = /eɪ/) | pr |
| u01 | `phrases[7].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u01 | `dialogue.lines[1].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u01 | `grammar[0].examples[2].pr` | لَنگْوِیجِز → لَنگْویجِز | languages /ˈlæŋɡwɪdʒɪz/ – «وِیج» reads /weɪdʒ/ | pr |
| u01 | `grammar[1].examples[2].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u01 | `grammar[1].examples[4].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u01 | `grammar[1].exercises[0].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u01 | `grammar[1].exercises[3].pr` | لَنگْوِیج → لَنگْویج | language /ˈlæŋɡwɪdʒ/ – «وِیج» reads /weɪdʒ/ (ِی = /eɪ/) | pr |
| u01 | `grammar[1].exercises[5].pr` | یُرْسِلْف → یورْسِلْف | "yourself" – "your" = «یور» (convention) | pr |
| u01 | `grammar[1].exercises[7].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u01 | `reading.title.pr` | لَنگْوِیجِز → لَنگْویجِز | languages /ˈlæŋɡwɪdʒɪz/ – «وِیج» reads /weɪdʒ/ | pr |
| u01 | `reading.text[3].pr` | لَنگْوِیجِز → لَنگْویجِز | languages /ˈlæŋɡwɪdʒɪz/ – «وِیج» reads /weɪdʒ/ | pr |
| u01 | `reading.text[12].pr` | لَنگْوِیج → لَنگْویج | language /ˈlæŋɡwɪdʒ/ – «وِیج» reads /weɪdʒ/ (ِی = /eɪ/) | pr |
| u01 | `reading.questions[4].q.pr` | لَنگْوِیج → لَنگْویج | language /ˈlæŋɡwɪdʒ/ – «وِیج» reads /weɪdʒ/ (ِی = /eɪ/) | pr |
| u01 | `sentences[1].pr` | لَنگْوِیج → لَنگْویج | language /ˈlæŋɡwɪdʒ/ – «وِیج» reads /weɪdʒ/ (ِی = /eɪ/) | pr |
| u02 | `reading.text[0].t` | A few years ago, a large team of psychologists tried to repeat one hundred published experiments. → In a well-known project, a large team of psychologists tried to repeat one hundred published experiments. | the project (Open Science Collaboration) was published in 2015 – "a few years ago" is already inaccurate and gets worse over time | target |
| u02 | `reading.text[0].pr` | اِ فیو ییرْز اِگُو، اِ لارْج تیم آو سایْکالِجِسْتْس تْراید تو ریپیت وان هاندْرِد پابْلیشْت ایکْسْپِرِمِنْتْس. → این اِ وِل نُون پْراجِکْت، اِ لارْج تیم آو سایْکالِجِسْتْس تْراید تو ریپیت وان هاندْرِد پابْلیشْت ایکْسْپِرِمِنْتْس. | matches corrected t | pr |
| u02 | `reading.text[0].s` | چند سال پیش، گروه بزرگی از روان‌شناسان کوشیدند صد آزمایش منتشرشده را تکرار کنند. → در پروژه‌ای معروف، گروه بزرگی از روان‌شناسان کوشیدند صد آزمایش منتشرشده را تکرار کنند. | matches corrected t | translation |
| u02 | `dialogue.lines[0].pr` | یُرْسِلْف → یورْسِلْف | "yourself" – "your" = «یور» (convention) | pr |
| u02 | `reading.text[8].pr` | هاوِوِر → هاوْاِوِر | however /haʊˈɛvər/ – «هاوِوِر» loses the /aʊ/ diphthong; level majority هاوْاِوِر | pr |
| u03 | `grammar[1].exercises[4].answer` | ["going", "supposed"] → ["going", "supposed", "meaning", "planning", "intending"] | "I was meaning / planning / intending to call you" are equally correct (future in the past) | exercise |
| u03 | `dialogue.lines[6].pr` | یُر → یور; یُرْسِلْف → یورْسِلْف | "your"/"you're" = «یور» (convention); "yourself" – "your" = «یور» (convention) | pr |
| u03 | `dialogue.lines[8].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u03 | `grammar[1].exercises[4].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u04 | `reading.text[0].t` | Two generations ago, most Iranian grandparents lived with their children and grandchildren under one roof. → Two generations ago, many Iranian grandparents lived with their children and grandchildren under one roof. | unverifiable statistic ("most") hedged to "many" | target |
| u04 | `reading.text[0].pr` | تو جِنِرِیشِنْز اِگُو، مُوسْت ایرِینیِن گْرَنْدْپِرِنْتْس لیوْد ویذ ذِر چیلْدْرِن اَند گْرَنْدْچیلْدْرِن آندِر وان روف. → تو جِنِرِیشِنْز اِگُو، مِنی ایرِینیِن گْرَنْدْپِرِنْتْس لیوْد ویذ ذِر چیلْدْرِن اَند گْرَنْدْچیلْدْرِن آندِر وان روف. | matches corrected t | pr |
| u04 | `reading.text[0].s` | دو نسل پیش، بیشتر پدربزرگ‌ها و مادربزرگ‌های ایرانی با فرزندان و نوه‌هایشان زیر یک سقف زندگی می‌کردند. → دو نسل پیش، بسیاری از پدربزرگ‌ها و مادربزرگ‌های ایرانی با فرزندان و نوه‌هایشان زیر یک سقف زندگی می‌کردند. | matches corrected t | translation |
| u04 | `reading.questions[0].q.t` | How did most grandparents live two generations ago? → How did many grandparents live two generations ago? | follows the hedged reading text | exercise |
| u04 | `reading.questions[0].q.pr` | هاو دید مُوسْت گْرَنْدْپِرِنْتْس لیو تو جِنِرِیشِنْز اِگُو؟ → هاو دید مِنی گْرَنْدْپِرِنْتْس لیو تو جِنِرِیشِنْز اِگُو؟ | matches corrected t | pr |
| u04 | `reading.questions[0].q.s` | دو نسل پیش بیشتر پدربزرگ‌ها و مادربزرگ‌ها چطور زندگی می‌کردند؟ → دو نسل پیش بسیاری از پدربزرگ‌ها و مادربزرگ‌ها چطور زندگی می‌کردند؟ | matches corrected t | translation |
| u04 | `grammar[0].exercises[7].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u05 | `phrases[4].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u05 | `phrases[6].pr` | یُرْسِلْف → یورْسِلْف | "yourself" – "your" = «یور» (convention) | pr |
| u05 | `dialogue.lines[2].pr` | یُرْسِلْف → یورْسِلْف | "yourself" – "your" = «یور» (convention) | pr |
| u05 | `dialogue.lines[8].pr` | یُرْسِلْف → یورْسِلْف | "yourself" – "your" = «یور» (convention) | pr |
| u05 | `grammar[1].examples[1].pr` | یُر → یور; یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u05 | `grammar[1].exercises[7].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u05 | `reading.text[1].pr` | هاوِوِر → هاوْاِوِر | however /haʊˈɛvər/ – «هاوِوِر» loses the /aʊ/ diphthong; level majority هاوْاِوِر | pr |
| u05 | `reading.text[9].pr` | هاوِوِر → هاوْاِوِر | however /haʊˈɛvər/ – «هاوِوِر» loses the /aʊ/ diphthong; level majority هاوْاِوِر | pr |
| u05 | `sentences[3].pr` | یُرْسِلْف → یورْسِلْف | "yourself" – "your" = «یور» (convention) | pr |
| u06 | `grammar[0].exercises[7].alts` | — → ["I know the artist, as it happens."] | second natural order with the same words | exercise |
| u06 | `words[0].ex.pr` | ایرانیِن → ایرِینیِن | Iranian – level uses ایرِینیِن (u04) /ɪˈreɪniən/ | pr |
| u06 | `words[2].ex.pr` | ایرانیِن → ایرِینیِن | Iranian – level uses ایرِینیِن (u04) /ɪˈreɪniən/ | pr |
| u06 | `grammar[1].exercises[2].pr` | آلی → علی | Persian name in Persian spelling, as elsewhere in C1 | pr |
| u06 | `reading.text[4].pr` | اوت → آوت | out /aʊt/ = «آوت» (word-initial او reads /u/; all other levels use آوت) | pr |
| u06 | `reading.questions[4].q.pr` | سِجِسْت → سِگْجِسْت | suggest – level majority /səɡˈdʒɛst/ | pr |
| u06 | `sentences[2].pr` | هافِزِز → حافِظِز | Persian name in Persian spelling, as in u01 | pr |
| u07 | `words[3].t` | exchange rate → subsidy | headword already taught in B2 u08 – replaced (id kept) | target |
| u07 | `words[3].pl` | exchange rates → subsidies | new headword | target |
| u07 | `words[3].s` | نرخ ارز → یارانه | new headword | translation |
| u07 | `words[3].pr` | ایکْسْچِینج رِیت → سابْسِدی | new headword /ˈsʌbsədi/ | pr |
| u07 | `words[3].emoji` | 💱 →  | new headword (no fitting emoji) | emoji |
| u07 | `words[3].ex.t` | The exchange rate changes almost every day. → Many governments spend billions on fuel subsidies. | new headword | target |
| u07 | `words[3].ex.pr` | ذی ایکْسْچِینج رِیت چِینجِز آلمُوسْت اِوْری دِی. → مِنی گاوِرْنْمِنْتْس سْپِنْد بیلْیِنْز آن فیوئِل سابْسِدیز. | new headword | pr |
| u07 | `words[3].ex.s` | نرخ ارز تقریباً هر روز تغییر می‌کند. → بسیاری از دولت‌ها میلیاردها صرف یارانه‌ی سوخت می‌کنند. | new headword | translation |
| u07 | `words[7].t` | consumer → purchasing power | headword already taught in B2 u09 – replaced (id kept) | target |
| u07 | `words[7].pl` | consumers → — | uncountable new headword | target |
| u07 | `words[7].s` | مصرف‌کننده → قدرت خرید | new headword | translation |
| u07 | `words[7].pr` | کِنْسومِر → پِرْچِسینگ پاوِر | new headword /ˈpɜrtʃəsɪŋ ˈpaʊər/ | pr |
| u07 | `words[7].emoji` | 🛒 →  | new headword | emoji |
| u07 | `words[7].ex.t` | Consumers are spending less on clothes and more on food. → High inflation has reduced the purchasing power of ordinary families. | new headword | target |
| u07 | `words[7].ex.pr` | کِنْسومِرز آر سْپِندینگ لِس آن کْلُوز اَند مُر آن فود. → های اینْفْلِیشِن هَز ریدوسْت ذِ پِرْچِسینگ پاوِر آو اُرْدِنِری فَمِلیز. | new headword | pr |
| u07 | `words[7].ex.s` | مصرف‌کنندگان برای لباس کمتر و برای غذا بیشتر خرج می‌کنند. → تورم بالا قدرت خرید خانواده‌های عادی را کاهش داده است. | new headword | translation |
| u07 | `grammar[0].exercises[7].alts` | — → ["Last year, sales of electric cars rose sharply."] | second natural order with the same words | exercise |
| u07 | `words[10].pr` | اوتْسُرس → آوتْسُرس | outsource /ˈaʊtsɔrs/ – out = «آوت» | pr |
| u07 | `words[10].ex.pr` | اوتْسُرس → آوتْسُرس | outsource /ˈaʊtsɔrs/ – out = «آوت» | pr |
| u07 | `dialogue.lines[0].pr` | رِزا → رِضا | Persian name in Persian spelling, as elsewhere in C1 | pr |
| u07 | `dialogue.lines[9].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u07 | `dialogue.lines[10].pr` | رِزا → رِضا; یُر → یور | Persian name in Persian spelling, as elsewhere in C1; "your"/"you're" = «یور» (convention) | pr |
| u07 | `reading.text[0].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u07 | `reading.text[7].pr` | موویینگ → مووینگ | moving /ˈmuvɪŋ/ – doubled ی reads two syllables; level uses مووینگ | pr |
| u07 | `reading.text[8].pr` | وِلْثی‌یِر → وِلْثیِر | wealthier – level uses وِلْثیِر | pr |
| u08 | `words[3].t` | side effect → placebo | headword already taught in B2 u03 – replaced (id kept) | target |
| u08 | `words[3].pl` | side effects → placebos | new headword | target |
| u08 | `words[3].s` | عارضه‌ی جانبی → دارونما | new headword | translation |
| u08 | `words[3].pr` | ساید ایفِکْت → پْلِسیبُو | new headword /pləˈsiboʊ/ | pr |
| u08 | `words[3].ex.t` | Drowsiness is a common side effect of this medicine. → Half of the patients were given a placebo instead of the real drug. | new headword | target |
| u08 | `words[3].ex.pr` | دْراوزینِس ایز اِ کامِن ساید ایفِکْت آو ذیس مِدِسِن. → هَف آو ذِ پِیشِنْتْس وِر گیوِن اِ پْلِسیبُو اینْسْتِد آو ذِ ریل دْراگ. | new headword | pr |
| u08 | `words[3].ex.s` | خواب‌آلودگی از عوارض جانبی رایج این دارو است. → به نیمی از بیماران به‌جای داروی واقعی دارونما داده شد. | new headword | translation |
| u08 | `grammar[1].exercises[6].alts` | — → ["He's wrong, much as I like him."] | second natural order with the same words | exercise |
| u08 | `grammar[1].exercises[7].alts` | — → ["She kept working, tired as she was."] | second natural order with the same words | exercise |
| u08 | `reading.text[9].t` | Spain, the world leader in organ donation, owes its success largely to specially trained hospital staff rather than to the law. → Spain, long a world leader in organ donation, owes its success largely to specially trained hospital staff rather than to the law. | "the world leader" is a ranking that can change – hedged | target |
| u08 | `reading.text[9].pr` | سْپِین، ذِ وِرلد لیدِر این اُرگِن دُونِیشِن، اُوز ایتس سِکْسِس لارجْلی تو سْپِشِلی تْرِینْد هاسْپیتِل سْتَف رَذِر ذَن تو ذِ لا. → سْپِین، لانگ اِ وِرلد لیدِر این اُرگِن دُونِیشِن، اُوز ایتس سِکْسِس لارجْلی تو سْپِشِلی تْرِینْد هاسْپیتِل سْتَف رَذِر ذَن تو ذِ لا. | matches corrected t | pr |
| u08 | `reading.text[9].s` | اسپانیا که در اهدای عضو پیشتاز جهان است، موفقیتش را بیشتر مدیون کادر بیمارستانیِ ویژه‌آموزش‌دیده است تا قانون. → اسپانیا که مدت‌هاست از پیشتازان جهان در اهدای عضو است، موفقیتش را بیشتر مدیون کادر بیمارستانیِ ویژه‌آموزش‌دیده است تا قانون. | matches corrected t | translation |
| u08 | `grammar[0].examples[0].pr` | آپْت‌اوت → آپْت‌آوت | opt-out – out = «آوت» | pr |
| u08 | `grammar[1].examples[0].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u08 | `reading.text[1].pr` | آپْت‌اوت → آپْت‌آوت | opt-out – out = «آوت» | pr |
| u08 | `reading.text[5].pr` | اوت → آوت | out /aʊt/ = «آوت» (word-initial او reads /u/; all other levels use آوت) | pr |
| u08 | `reading.text[8].pr` | سِجِسْتْس → سِگْجِسْتْس | suggests – level majority /səɡˈdʒɛsts/ | pr |
| u08 | `reading.text[11].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u08 | `reading.questions[0].q.pr` | آپْت‌اوت → آپْت‌آوت | opt-out – out = «آوت» | pr |
| u09 | `phrases[6].t` | Better late than never. → Speak of the devil! | phrase already taught in B2 u03 – replaced (id kept) | target |
| u09 | `phrases[6].pr` | بِتِر لِیت ذَن نِوِر. → سْپیک آو ذِ دِوِل! | new phrase | pr |
| u09 | `phrases[6].s` | دیر رسیدن بهتر از هرگز نرسیدن است. → حلال‌زاده است! (وقتی کسی درست همان موقع سر می‌رسد که درباره‌اش حرف می‌زنیم) | new phrase | translation |
| u09 | `grammar[1].exercises[7].alts` | — → ["Last year, her business really took off."] | second natural order with the same words | exercise |
| u09 | `reading.text[8].t` | For example, what Americans call “a piece of cake”, we describe as being “like drinking water”. → For example, what Americans call “a piece of cake,” we describe as being “like drinking water.” | American punctuation (comma/period inside quotation marks), as in the rest of the level | target |
| u09 | `words[14].pr` | اوت → آوت | out /aʊt/ = «آوت» (word-initial او reads /u/; all other levels use آوت) | pr |
| u09 | `words[14].ex.pr` | اوت → آوت | out /aʊt/ = «آوت» (word-initial او reads /u/; all other levels use آوت) | pr |
| u09 | `dialogue.lines[0].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u09 | `dialogue.lines[5].pr` | اوت → آوت | out /aʊt/ = «آوت» (word-initial او reads /u/; all other levels use آوت) | pr |
| u09 | `dialogue.lines[7].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u09 | `grammar[0].examples[0].pr` | موویینگ → مووینگ | moving /ˈmuvɪŋ/ – doubled ی reads two syllables; level uses مووینگ | pr |
| u09 | `grammar[0].examples[1].pr` | اوت → آوت | out /aʊt/ = «آوت» (word-initial او reads /u/; all other levels use آوت) | pr |
| u09 | `grammar[0].exercises[5].pr` | اوت → آوت | out /aʊt/ = «آوت» (word-initial او reads /u/; all other levels use آوت) | pr |
| u09 | `grammar[1].examples[3].pr` | اوت → آوت | out /aʊt/ = «آوت» (word-initial او reads /u/; all other levels use آوت) | pr |
| u09 | `grammar[1].exercises[0].pr` | اوت → آوت | out /aʊt/ = «آوت» (word-initial او reads /u/; all other levels use آوت) | pr |
| u09 | `reading.text[1].pr` | اوت → آوت | out /aʊt/ = «آوت» (word-initial او reads /u/; all other levels use آوت) | pr |
| u09 | `reading.text[3].pr` | اوت → آوت | out /aʊt/ = «آوت» (word-initial او reads /u/; all other levels use آوت) | pr |
| u09 | `reading.text[8].pr` | بیئینگ → بیینگ | being – level uses بیینگ | pr |
| u09 | `reading.questions[1].q.pr` | اوت → آوت | out /aʊt/ = «آوت» (word-initial او reads /u/; all other levels use آوت) | pr |
| u10 | `words[0].t` | audience → eye contact | headword already taught in B2 u10 – replaced (id kept) | target |
| u10 | `words[0].pl` | audiences → — | uncountable new headword | target |
| u10 | `words[0].s` | مخاطبان، حاضران → ارتباط چشمی | new headword | translation |
| u10 | `words[0].pr` | آدیِنْس → آی کانْتَکْت | new headword | pr |
| u10 | `words[0].emoji` | 👥 → 👀 | new headword | emoji |
| u10 | `words[0].ex.t` | Make eye contact with your audience. → Good speakers maintain eye contact with their listeners. | new headword | target |
| u10 | `words[0].ex.pr` | مِیک آی کانْتَکْت ویذ یُر آدیِنْس. → گود سْپیکِرز مِینْتِین آی کانْتَکْت ویذ ذِر لیسِنِرز. | new headword | pr |
| u10 | `words[0].ex.s` | با مخاطبانت ارتباط چشمی برقرار کن. → سخنرانان خوب ارتباط چشمی‌شان را با شنوندگان حفظ می‌کنند. | new headword | translation |
| u10 | `words[7].t` | evidence → anecdote | headword already taught in B2 u05 – replaced (id kept) | target |
| u10 | `words[7].pl` | — → anecdotes | countable new headword | target |
| u10 | `words[7].s` | شواهد، مدرک → حکایت، خاطره‌ی کوتاه (برای روشن کردن یک نکته) | new headword | translation |
| u10 | `words[7].pr` | اِوِدِنْس → اَنِکْدُوت | new headword /ˈænɪkdoʊt/ | pr |
| u10 | `words[7].ex.t` | Is there any evidence to support this claim? → Begin your talk with a short personal anecdote. | new headword | target |
| u10 | `words[7].ex.pr` | ایز ذِر اِنی اِوِدِنْس تو سِپُرت ذیس کْلِیم؟ → بیگین یور تاک ویذ اِ شُرت پِرْسِنِل اَنِکْدُوت. | new headword | pr |
| u10 | `words[7].ex.s` | آیا شاهدی برای پشتیبانی از این ادعا وجود دارد؟ → صحبتت را با یک خاطره‌ی کوتاه شخصی شروع کن. | new headword | translation |
| u10 | `words[1].ex.pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u10 | `words[9].ex.pr` | اوت → آوت | out /aʊt/ = «آوت» (word-initial او reads /u/; all other levels use آوت) | pr |
| u10 | `words[11].pr` | اوت‌وِی → آوت‌وِی | outweigh /aʊtˈweɪ/ – out = «آوت» | pr |
| u10 | `words[11].ex.pr` | اوت‌وِی → آوت‌وِی | outweigh /aʊtˈweɪ/ – out = «آوت» | pr |
| u10 | `phrases[3].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u10 | `phrases[7].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u10 | `dialogue.lines[2].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u10 | `grammar[1].exercises[0].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u10 | `reading.text[7].pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |
| u10 | `reading.questions[3].q.pr` | یُر → یور | "your"/"you're" = «یور» (convention) | pr |

## Noticed, not changed

- **B2 overlap the other way.** The B2 reviewer should know that the C1 headwords above were replaced, not the B2 ones.
- **Approximate emoji kept**, because they suggest the meaning and do not mislead:
  - u03 w05 *vision* 🔭 (metaphor of looking ahead)
  - u10 w07 *key point* 🔑
  - u01 w12 *tone of voice* 🗣️ (same as the unit emoji)
  - u02 w04 *conduct research* 🔬 (same as the unit emoji)
  - u06 w07 *sculpture* 🗿
- **u05 reading, cafeteria "nudge" example** ("In one well-known example … fruit sales rose noticeably within weeks"). This is the classic example from the nudge literature and is presented as an illustration, so it was kept. If a stricter standard is wanted, it could be reworded as a hypothetical ("Imagine a school cafeteria that …").
- **u04 reading**, "Iran's population is among the fastest-aging in the world" and the hedged projection ("could be over sixty within thirty years"). Both match UN projections and are already hedged.
- **u08 g01 ex4**, Razi as the first physician to distinguish smallpox from measles. Already hedged ("is often described as").
- **Optional sukun differences** (e.g. وِرْک / وِرک, سْتارْت / سْتارت, ایتْس / ایتس) vary between the two authors. They don't change the reading, so I didn't touch them. «کْریِیت / کْری‌اِیت» for *create* also varies; both are correct.
- **Order items left without alts**, because the other orders would be unnatural: u06 g01 ex6 (*The ending was disappointing, that said*), u06 g02 ex6.
- **Type answers I deliberately did not widen**, because the Persian `s` fixes the meaning:
  - u03 g01 ex2 (*likely* contradicts «حتماً»)
  - u03 g02 ex2 (*might/could* contradict «خواهد بود»)
  - u07 g01 ex6 (*fall/drop* contradict «افزایش»)
- **Register mix.** *needn't have* (u03) is explained as mainly British, and *Each to their own* (u06) is British (American: *To each their own*). Both are flagged or acceptable at C1 and were kept.
- Persian text: ZWNJ and ی/ک are correct throughout (script-checked). No Arabic ي/ك.

## TTS-risky target texts (not changed, handled centrally)

- **Ellipsis "…" in phrase `t`:**
  - u01 p01, p05, p06, p07
  - u02 p01, p02, p04, p05, p06
  - u03 p05
  - u04 p01, p02, p06
  - u05 p01
  - u06 p01
  - u07 p01, p05, p07
  - u08 p05
  - u09 p08
  - u10 p01, p03, p04
- **"…", "+", "/" and ":" in grammar titles and tables:**
  - u01 g01 table
  - u02 g01 table (*tend to + verb*, *is thought to have + past participle*)
  - u03 g01 title (semicolon) and table (*needn't have + past participle*)
  - u03 g02 title (colon)
  - u04 g01 title (colon) and table
  - u05 g01 table header row
  - u05 g02 title and table (*make + object + verb*)
  - u07 g01 table header row
  - u09 g01 table
  - u10 g02 table (*the more …, the more …*, *the + comparative*)
- **Abbreviations and codes:** *C1* (u10 reading text[0], goals), *T-shirt* (u07 reading title, text[0], q0), *Okay* (u10 dialogue line 0).
- **Numbers:** *1950* (u06 w15 ex).
- **Quoted speech and question-plus-answer pairs in one `t`:**
  - u06 g02 examples 0 and 4, exercises 0 and 2
  - u01 dialogue lines 0–2, 5
  - u02 dialogue lines 1, 8
  - u09 reading text[8]
  - u10 reading text[5], text[8]
- **Persian words inside English `t`:** *taarof* (u01 dialogue line 8), *Nowruz* (u09 g02 ex1), *tar* (u06 g02 ex5).
