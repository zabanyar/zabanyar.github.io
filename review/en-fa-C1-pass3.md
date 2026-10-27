# Review pass 3: en-fa C1 (u01–u10), Oct 2026

I read every item in all 10 units: words, examples, phrases, dialogue lines, grammar explanations, tables, examples and exercises, reading texts and questions, and sentences. Each `pr` was checked against General American pronunciation. I also checked:
- that names and jobs stay the same from one unit to the next
- that facts in the texts are true and stable
- for headwords already taught in other levels
- word by word, that every English word is written the same way in `pr` across the level (alignment script)

The automatic audit (`review/audit/en-fa-C1.md`) had **no findings**, before and after my edits. `python3 tools/validate.py content/en-fa/C1/*.json` prints OK for all 10 files.

## Overall verdict

The level was already in very good shape after the second pass. Grammar explanations are accurate, every `choice` has exactly one correct option, and every exercise `pr` is the full sentence. All reading questions can be answered from the texts. I found no wrong `type` or `order` keys. The remaining problems were:
- one headword already taught in B2
- one doubtful "well-known" factual example
- one British idiom
- two characters whose job changes between dialogues
- reading questions that gave an unnamed first-person writer a gender
- one `pr` that drops a syllable (*Canada*)
- a handful of words spelled two ways in `pr` inside the level

## Changes

Category counts (by changed field): **pr 21, target 10, translation 10, exercise 9**, grammar explanation 0, emoji 0. Total 50.

| File | JSON path | Old → New | Reason | Category |
|---|---|---|---|---|
| u01 | `reading.questions[1].options` | Her son's teacher complained. / Her son answered his grandmother in German. / Her daughter forgot a poem. → A teacher complained about the children. / The writer's son answered his grandmother in German. / The writer's daughter forgot a poem. | the text never says the writer is a woman; options no longer assume it | exercise |
| u05 | `reading.text[3].t` | In one well-known example, a school cafeteria simply put fruit at eye level and moved desserts further away. → In several experiments, school cafeterias simply put fruit at eye level and moved desserts further away. | the 'well-known' single cafeteria case is unverifiable (the classic Nudge cafeteria is a thought experiment; the best-known cafeteria studies were retracted); generalized to several experiments | target |
| u05 | `reading.text[3].pr` | این وان وِل نُون ایگْزَمْپِل، اِ سْکول کَفِتیریا سیمْپْلی پوت فْروت اَت آی لِوِل اَند مووْد دیزِرْتْس فِرْذِر اِوِی. → این سِوْرِل ایکْسْپِرِمِنْتْس، سْکول کَفِتیریاز سیمْپْلی پوت فْروت اَت آی لِوِل اَند مووْد دیزِرْتْس فِرْذِر اِوِی. | matches corrected t | pr |
| u05 | `reading.text[3].s` | در یک نمونه‌ی معروف، سلف یک مدرسه فقط میوه‌ها را هم‌سطح چشم گذاشت و دسرها را دورتر برد. → در چند آزمایش، سلف‌های مدرسه فقط میوه‌ها را هم‌سطح چشم گذاشتند و دسرها را دورتر بردند. | matches corrected t | translation |
| u05 | `reading.text[5].t` | Yet fruit sales rose noticeably within weeks. → Yet fruit sales often rose noticeably. | hedged: no precise result ('within weeks') can be claimed for the generalized experiments | target |
| u05 | `reading.text[5].pr` | یِت فْروت سِیلْز رُوز نُوتِسِبْلی ویذین ویکْس. → یِت فْروت سِیلْز آفِن رُوز نُوتِسِبْلی. | matches corrected t | pr |
| u05 | `reading.text[5].s` | با این حال، فروش میوه در عرض چند هفته به‌طور محسوسی بالا رفت. → با این حال، فروش میوه اغلب به‌طور محسوسی بالا رفت. | matches corrected t | translation |
| u05 | `reading.questions[1].q.t` | What did the school cafeteria do? → What did the school cafeterias do? | follows the corrected text (plural) | exercise |
| u05 | `reading.questions[1].q.pr` | وات دید ذِ سْکول کَفِتیریا دو؟ → وات دید ذِ سْکول کَفِتیریاز دو؟ | matches corrected t | pr |
| u05 | `reading.questions[1].q.s` | سلف مدرسه چه کرد؟ → سلف‌های مدرسه چه کردند؟ | matches corrected t | translation |
| u05 | `reading.questions[1].options` | It banned desserts. / It put fruit at eye level. / It made students eat fruit. → They banned desserts. / They put fruit at eye level. / They made students eat fruit. | options follow the plural subject | exercise |
| u06 | `phrases[6].t` | Each to their own. → To each their own. | 'Each to their own' is British; American English says 'To each their own' | target |
| u06 | `phrases[6].pr` | ایچ تو ذِر اُون. → تو ایچ ذِر اُون. | matches corrected t | pr |
| u06 | `dialogue.lines[8].t` | Each to their own, I suppose. → To each their own, I suppose. | American form of the phrase (as p07) | target |
| u06 | `dialogue.lines[8].pr` | ایچ تو ذِر اُون → تو ایچ ذِر اُون | matches corrected t | pr |
| u06 | `grammar[0].exercises[2].pr` | دیفیکِلْت → دیفِکِلْت | difficult: level spelling دیفِکِلْت (u03, u04) | pr |
| u06 | `reading.text[12].pr` | هَبیت → هَبِت | habit /ˈhæbɪt/: level spelling هَبِت (u05); «بیت» suggests a long /i/ | pr |
| u06 | `dialogue.title.pr` | ویزیت → ویزِت | visit: level spelling ویزِت (u01 g02) | pr |
| u07 | `dialogue.speakers.A.name` | Lisa → Emma | Lisa is Amir's team manager in u03; here she would be a radio host – different job; a different allowed name | target |
| u07 | `dialogue.speakers.B.name` | Reza → Ali | Reza is a student writing his thesis in u05; here he would be an economist interviewed on radio – different job; Ali has no conflicting job in C1 | target |
| u07 | `dialogue.lines[0].t` | Reza, → Ali, | new speaker name | target |
| u07 | `dialogue.lines[0].s` | رضا، → علی، | new speaker name | translation |
| u07 | `dialogue.lines[0].pr` | رِضا، → علی، | new speaker name (Persian name in Persian spelling, as u06) | pr |
| u07 | `dialogue.lines[10].t` | Reza, → Ali, | new speaker name | target |
| u07 | `dialogue.lines[10].s` | رضا، → علی، | new speaker name | translation |
| u07 | `dialogue.lines[10].pr` | رِضا، → علی، | new speaker name (Persian name in Persian spelling, as u06) | pr |
| u07 | `words[13].ex.pr` | لُوِر → لُوئِر | lower: level spelling لُوئِر (u02) | pr |
| u08 | `reading.text[6].pr` | یوژوِلی → یوژوئِلی | usually: level spelling یوژوئِلی (u01, u05) | pr |
| u09 | `words[4].ex.pr` | کَندا → کَنِدا | Canada /ˈkænədə/ has three syllables; «کَندا» drops the schwa | pr |
| u09 | `grammar[1].examples[1].pr` | یوژوِلی → یوژوئِلی | usually: level spelling یوژوئِلی | pr |
| u09 | `reading.text[7].pr` | نُوتیسْت → نُوتِسْت | noticed: level spelling نُوتِسْت (u03, u05) | pr |
| u09 | `reading.questions[0].q.t` | What did the writer think about his English before he moved to Chicago? → What did the writer think about their English before moving to Chicago? | the text never says the writer is a man; question no longer assumes it | exercise |
| u09 | `reading.questions[0].q.pr` | وات دید ذِ رایتِر ثینک اِباوت هیز اینگْلیش بیفُر هی مووْد تو شیکاگُو؟ → وات دید ذِ رایتِر ثینک اِباوت ذِر اینگْلیش بیفُر مووینگ تو شیکاگُو؟ | matches corrected t | pr |
| u09 | `reading.questions[1].q.t` | Why did he look out of the window? → Why did the writer look out of the window? | writer's gender not given in the text | exercise |
| u09 | `reading.questions[1].q.pr` | وای دید هی لوک آوت آو ذِ ویندُو؟ → وای دید ذِ رایتِر لوک آوت آو ذِ ویندُو؟ | matches corrected t | pr |
| u09 | `reading.questions[1].q.s` | چرا از پنجره بیرون را نگاه کرد؟ → چرا نویسنده از پنجره بیرون را نگاه کرد؟ | matches corrected t | translation |
| u09 | `reading.questions[1].options` | He was waiting for his boss. / He misunderstood an idiom. / He wanted to see the cake. → to see if the boss was coming / because of a misunderstood idiom / to look for the cake | options no longer assume the writer's gender | exercise |
| u09 | `reading.questions[2].q.t` | What did he do to learn new expressions? → What did the writer do to learn new expressions? | writer's gender not given in the text | exercise |
| u09 | `reading.questions[2].q.pr` | وات دید هی دو تو لِرن نو ایکْسْپْرِشِنز؟ → وات دید ذِ رایتِر دو تو لِرن نو ایکْسْپْرِشِنز؟ | matches corrected t | pr |
| u09 | `reading.questions[2].q.s` | برای یادگرفتن اصطلاحات تازه چه کرد؟ → نویسنده برای یادگرفتن اصطلاحات تازه چه کرد؟ | matches corrected t | translation |
| u09 | `reading.questions[2].options` | He took an online course. / He asked his kids. / He wrote them down in a notebook. → took an online course / asked the children for help / wrote them down in a notebook | options no longer assume the writer's gender | exercise |
| u09 | `reading.questions[4].q.t` | What is his advice? → What is the writer's advice? | writer's gender not given in the text | exercise |
| u09 | `reading.questions[4].q.pr` | وات ایز هیز اِدْوایْس؟ → وات ایز ذِ رایتِرز اِدْوایْس؟ | matches corrected t | pr |
| u09 | `reading.questions[4].q.s` | توصیه‌ی او چیست؟ → توصیه‌ی نویسنده چیست؟ | matches corrected t | translation |
| u10 | `words[10].t` | to sum up → concise | 'to sum up' already taught in B2 u01 (p05 'To sum up, …'); replaced by a new C1 word (id kept) | target |
| u10 | `words[10].s` | به‌طور خلاصه، در جمع‌بندی → مختصر و مفید، موجز | new headword | translation |
| u10 | `words[10].pr` | تو سام آپ → کِنْسایْس | new headword /kənˈsaɪs/ | pr |
| u10 | `words[10].ex.t` | To sum up, there are three reasons to support the plan. → Keep your answers concise and to the point. | new headword | target |
| u10 | `words[10].ex.s` | به‌طور خلاصه، سه دلیل برای حمایت از این طرح وجود دارد. → پاسخ‌هایت را کوتاه و دقیق و مرتبط با موضوع نگه دار. | new headword | translation |
| u10 | `words[10].ex.pr` | تو سام آپ، ذِر آر ثْری ریزِنْز تو سِپُرت ذِ پْلَن. → کیپ یور اَنْسِرْز کِنْسایْس اَند تو ذِ پُینت. | new headword | pr |

Headword replaced (id kept): **u10 w11** *to sum up* (already a B2 u01 phrase, "To sum up, …") → **concise** «کِنْسایْس», "مختصر و مفید، موجز". It is new to the whole en-fa course and appears nowhere else in C1. "To sum up" is still used in the u10 dialogue as known language.

## Noticed but not changed

- **Two different "Karimi" characters**: Mina Karimi, the software CEO (u03 reading), and Maryam Karimi, the calligrapher from Shiraz (u06 reading). Each is introduced with a full name in a third-person article, so they read as separate people. The dialogue characters Mina and Maryam do not clash with them. Kept.
- **Recurring dialogue characters** are now consistent:
  - Mina: u01, u05, u06, u10
  - Tom: u01, u06
  - Sara and Jack: u02, u09
  - Maryam: u04, u08
  - Ali: u04, u07
  - Amir: u03, u10
  - Lisa: u03
  - Reza: u05
  - Emma: u07

  Jack is a junior doctor in u08 and naive about correlation in u02; that is plausible humor, so I kept it. Names used in example sentences (Reza, Maryam, Ali) are generic and were left alone.
- **`supposed to`**: written «سِپُوزْد تو» in u03 and «سِپُوسْت تو» in u09. Both are correct (/səˈpoʊst tə/ is the connected-speech form), so I kept both.
- **`sometimes`**: written «سامْتایْمْز» and «سام‌تایمْز». The two read identically, so I kept both.
- **B2 also writes *Canada* as «کَندا»** (B2 u02, u08). The B2 reviewer may want «کَنِدا» too, for course-wide consistency.
- **`needn't have`** (u03) is mainly British, and the explanation already says so. It is a curriculum grammar point, so I kept it.
- **u10 p07 *Can I just come in here?*** is common in debates on both sides of the Atlantic ("jump in" is a more American alternative). Kept.
- **u08 g01 ex4** accepts *trialled* (British spelling) as an answer. Accepting extra answers does no harm and teaches nothing British, so I kept it.
- **u04 reading facts**: "among the fastest-aging" and "could be over sixty within thirty years" are hedged and match UN projections. Kept.
- **u08 reading**: Spain is already hedged ("long a world leader"). Kept.
- **TTS-risky texts**: same list as in `review/en-fa-C1-new.md`. The ellipses in phrases, the "+", "/" and ":" in grammar titles and tables, *C1*, *T-shirt*, *1950*, quoted two-speaker lines and the Persian words *taarof*, *Nowruz* and *tar* are all unchanged, and none were added.
