# Review: en-fa B2 (new level, u01–u10)

Independent expert check of every item in `content/en-fa/B2/u01.json … u10.json`: titles, goals, words + examples, phrases, dialogues, grammar explanations/tables/examples/exercises, readings + questions and sentences. Every `pr` was checked word by word against General American pronunciation, and checked automatically against the other en-fa levels (A1, A2, B1, C1) for consistent conventions. I compared the grammar with B1 (the level below) and C1 (the level above). `python3 tools/validate.py content/en-fa/B2/*.json` prints OK for all 10 files.

**Overall:** The level is in good shape. Grammar matches the curriculum table, the explanations are correct and say what was already taught in A2/B1, and the readings and answer keys are right. The two halves came from different authors and used different `pr` conventions. Also, u06–u10 still had `___` in all 64 exercise `pr` fields. Most changes below fix those two problems.

## `pr` conventions now used in the whole level (identical in u01–u05 and u06–u10)

- **Gaps:** every exercise `pr` is now the full sentence with the correct answer filled in. Before this review, the 64 exercises in u06–u10 still had `___` in `pr`.
- **your / you're = یور, yours = یورز** (BRIEF_NEW). u06–u10 used یُر.
- **Diphthongs without sukun on the glide:** تایم، نایت، لایک، آید، آیل، کاینْد، فاونْد، پِید، جُین … This matches A1–B1 and u01–u05. u06–u10 wrote تایْم، نایْت، لایْک … (≈150 tokens). Sukun inside consonant clusters (نْد، سْت، تْس) was left as it is.
- **the before a vowel sound = ذی** (ذی اِند، ذی اُولْد، ذی اَکْسِدِنْت). This is what u06–u10 and C1 already use. u01–u05 had ذِ in 17 places.
- **Weak forms with schwa:** an = اِن (8× اَن), until = اِنْتیل (4× اَنْتیل), advice = اِدْوایس (2× اَدْوایس).
- **/ʌ/ = ا:** other = آذِر (4× اَذِر).
- **Voiced th = ذ:** mother = ماذِر, grandmother = گْرَنْدْماذِر (7× د for th: مادِر / گْرَنْدمادِر). grandmother, grandfather and grandparents now have one spelling (گْرَنْدْ…), as in A1–B1.
- **Final schwa = ا, not ِا:** اِریا، میدیا، دِیتا، کَمْرا، اِکْسْتْرا، آیدیا.
- **One spelling per word:** over = اُووِر (as u01–u05 and A1–B1), presentation = پْرِزِنْتِیشِن, overrated = اُووِررِیتِد (one word).
- **Persian names and places in normal Persian spelling, without added vowel marks:** اصفهان (not ایسْفِهان), علیز, یزد. This matches تهران، شیراز، مریم، رضا in the rest of the level. English names are written by sound (لیسا، جَک، اِما).
- **Single errors:** adopted اِدابْتِد → اِداپْتِد (/p/, not /b/).

Variants that are both correct were left as they are, because changing them would only reflect taste: sukun in clusters (فِرسْت / فِرْسْت), /ɪ/ written ی or ِ in unstressed syllables (ویزیت / ویزِت, آفیس / آفِس), and have to / has to = هَف تو / هَس تو (as in other levels).

## Changes

Each row lists only the words that changed in the field (old → new). For full-text fields, the whole old and new text is given.

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u01 | `phrases[5].pr` | اِریِا. → اِریا. | اِریِا → اِریا: final schwa written ا (not ِا) |
| u01 | `grammar[1].examples[1].pr` | ذِ → ذی | the before a vowel = ذی (as u06–u10 and C1) |
| u01 | `reading.text[3].pr` | لاوْد → لاود | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u01 | `reading.text[10].pr` | ذِ → ذی | the before a vowel = ذی (as u06–u10 and C1) |
| u01 | `reading.text[12].pr` | اَنْتیل → اِنْتیل | اَنْتیل → اِنْتیل: until /ənˈtɪl/: schwa, as in other levels |
| u01 | `reading.questions[4].q.pr` | ذِ → ذی | the before a vowel = ذی (as u06–u10 and C1) |
| u01 | `grammar[1].exercises[5].answer` | ['get', 'come', 'arrive'] → ['get', 'come', 'arrive', 'return'] | "By the time you return home" is equally correct / add it to the accepted answers |
| u02 | `words[4].ex.pr` | گْرَنْماذِر → گْرَنْدْماذِر | گْرَنْماذِر → گْرَنْدْماذِر: one spelling for grandmother in the level (as A1–B1) |
| u02 | `words[7].ex.pr` | ذِ → ذی | the before a vowel = ذی (as u06–u10 and C1) |
| u02 | `words[11].ex.pr` | گْرَنْفاذِر → گْرَنْدْفاذِر | گْرَنْفاذِر → گْرَنْدْفاذِر: one spelling for grandfather in the level (as A1–B1) |
| u02 | `grammar[1].examples[0].pr` | گْرَنْماذِر → گْرَنْدْماذِر | گْرَنْماذِر → گْرَنْدْماذِر: one spelling for grandmother in the level (as A1–B1) |
| u02 | `reading.text[1].pr` | ذِ → ذی | the before a vowel = ذی (as u06–u10 and C1) |
| u02 | `reading.text[8].pr` | ذِ → ذی | the before a vowel = ذی (as u06–u10 and C1) |
| u02 | `sentences[1].pr` | اَنْتیل → اِنْتیل | اَنْتیل → اِنْتیل: until /ənˈtɪl/: schwa, as in other levels |
| u02 | `sentences[2].pr` | گْرَنْفاذِر → گْرَنْدْفاذِر | گْرَنْفاذِر → گْرَنْدْفاذِر: one spelling for grandfather in the level (as A1–B1) |
| u02 | `grammar[0].exercises[7].alts` | (none) → ['Before that trip, had you ever been abroad?'] | fronted time phrase is an equally natural order of the same words |
| u03 | `words[12].ex.pr` | ذِ → ذی | the before a vowel = ذی (as u06–u10 and C1) |
| u03 | `dialogue.lines[4].pr` | ذِ → ذی | the before a vowel = ذی (as u06–u10 and C1) |
| u03 | `grammar[1].examples[2].pr` | اِدابْتِد → اِداپْتِد | اِدابْتِد → اِداپْتِد: adopted /əˈdɑptɪd/: p, not b |
| u03 | `grammar[1].examples[4].pr` | ذِ → ذی | the before a vowel = ذی (as u06–u10 and C1) |
| u03 | `reading.text[8].pr` | اِکْسْتْرِا → اِکْسْتْرا | اِکْسْتْرِا → اِکْسْتْرا: final schwa written ا (not ِا) |
| u03 | `grammar[0].explain` | «اگر **دانسته بودم** …» → «اگر زودتر **رفته بودم**، به قطار **رسیده بودم**» | «اگر دانسته بودم» is unnatural Persian; replaced by a natural Persian third-conditional example |
ساخت: **If + had + قسمت سوم فعل**، **would have + قسمت سوم فعل**: **If I had slept more, I would have felt better.** (اگر بیشتر خوابیده بودم، حالم بهتر بود.) واقعیت: کم خوابیدم و حالم خوب نبود.
به جای would have می‌توان **could have** (می‌توانستم) یا **might have** (شاید) گذاشت: **If he had trained harder, he might have won.**
منفی: **If I hadn't eaten so much, I wouldn't have felt sick.**
ترتیب دو بخش را می‌شود عوض کرد؛ وقتی بخش if دوم می‌آید، ویرگول لازم نیست: **I would have called you if I had known.**
اشتباه رایج: در بخش if، **would** نمی‌آید. **If I would have known** غلط است؛ درست: **If I had known**.
در گفتار **I'd have** و **would've** (وودِو) زیاد شنیده می‌شود. دقت کنید که **'d** در بخش if یعنی **had** و در بخش دیگر یعنی **would**: **If I'd known, I'd have come.**
فارسی هم ساخت مشابهی دارد: «اگر **می‌دانستم**، **می‌آمدم**» یا «اگر **دانسته بودم** …». → شرطی نوع اول (واقعی، درباره‌ی آینده) و نوع دوم (غیرواقعی، درباره‌ی حال) را از B1 می‌شناسید. **شرطی نوع سوم** درباره‌ی **گذشته‌ای است که اتفاق نیفتاده**: تصور می‌کنیم اگر گذشته طور دیگری بود، چه نتیجه‌ای داشت. از آن برای **پشیمانی، انتقاد یا توضیح نتیجه‌ها** استفاده می‌کنیم.
ساخت: **If + had + قسمت سوم فعل**، **would have + قسمت سوم فعل**: **If I had slept more, I would have felt better.** (اگر بیشتر خوابیده بودم، حالم بهتر بود.) واقعیت: کم خوابیدم و حالم خوب نبود.
به جای would have می‌توان **could have** (می‌توانستم) یا **might have** (شاید) گذاشت: **If he had trained harder, he might have won.**
منفی: **If I hadn't eaten so much, I wouldn't have felt sick.**
ترتیب دو بخش را می‌شود عوض کرد؛ وقتی بخش if دوم می‌آید، ویرگول لازم نیست: **I would have called you if I had known.**
اشتباه رایج: در بخش if، **would** نمی‌آید. **If I would have known** غلط است؛ درست: **If I had known**.
در گفتار **I'd have** و **would've** (وودِو) زیاد شنیده می‌شود. دقت کنید که **'d** در بخش if یعنی **had** و در بخش دیگر یعنی **would**: **If I'd known, I'd have come.**
فارسی هم ساخت مشابهی دارد: «اگر **می‌دانستم**، **می‌آمدم**» یا «اگر زودتر **رفته بودم**، به قطار **رسیده بودم**». | «اگر دانسته بودم» is unnatural Persian / replaced by a natural past-perfect conditional example |
| u04 | `words[3].ex.pr` | ذِ → ذی | the before a vowel = ذی (as u06–u10 and C1) |
| u04 | `words[7].ex.pr` | گْرَنْپِرِنْتْس. → گْرَنْدْپِرِنْتْس. | گْرَنْپِرِنْتْس → گْرَنْدْپِرِنْتْس: as other levels (گْرَنْدْپِرِنْتْس) |
| u04 | `words[13].ex.pr` | میدیِا. → میدیا. | میدیِا → میدیا: final schwa written ا (not ِا) |
| u04 | `dialogue.lines[6].pr` | دِیتِا → دِیتا | دِیتِا → دِیتا: final schwa written ا (not ِا) |
| u04 | `grammar[0].examples[2].pr` | ذِ → ذی | the before a vowel = ذی (as u06–u10 and C1) |
| u04 | `grammar[0].examples[4].pr` | ذِ → ذی | the before a vowel = ذی (as u06–u10 and C1) |
| u04 | `grammar[0].exercises[4].pr` | دِیتِا → دِیتا | دِیتِا → دِیتا: final schwa written ا (not ِا) |
| u04 | `reading.text[1].pr` | آیدیِا: → آیدیا: | آیدیِا → آیدیا: final schwa written ا (not ِا) |
| u05 | `words[14].pr` | سِکیورِتی کَمْرِا → سِکیورِتی کَمْرا | کَمْرِا → کَمْرا: final schwa written ا (not ِا) |
| u05 | `words[14].ex.pr` | کَمْرِا. → کَمْرا. | کَمْرِا → کَمْرا: final schwa written ا (not ِا) |
| u05 | `phrases[5].pr` | اَنْتیل → اِنْتیل | اَنْتیل → اِنْتیل: until /ənˈtɪl/: schwa, as in other levels |
| u05 | `dialogue.lines[3].pr` | اِریِا. → اِریا. | اِریِا → اِریا: final schwa written ا (not ِا) |
| u05 | `dialogue.lines[6].pr` | اَنْتیل → اِنْتیل | اَنْتیل → اِنْتیل: until /ənˈtɪl/: schwa, as in other levels |
| u05 | `dialogue.lines[7].pr` | کَمْرِا → کَمْرا | کَمْرِا → کَمْرا: final schwa written ا (not ِا) |
| u05 | `dialogue.lines[10].pr` | آیدیِا. → آیدیا. | آیدیِا → آیدیا: final schwa written ا (not ِا) |
| u05 | `grammar[1].examples[0].pr` | ذِ → ذی | the before a vowel = ذی (as u06–u10 and C1) |
| u05 | `reading.text[7].pr` | کَمْرِا → کَمْرا | کَمْرِا → کَمْرا: final schwa written ا (not ِا) |
| u05 | `reading.text[8].pr` | ذِ → ذی | the before a vowel = ذی (as u06–u10 and C1) |
| u05 | `sentences[3].pr` | ذِ → ذی | the before a vowel = ذی (as u06–u10 and C1) |
| u05 | `grammar[0].exercises[5].pr` | ذِ → ذی | the before a vowel = ذی (as u06–u10 and C1) |
| u05 | `grammar[1].exercises[5].pr` | ذِ → ذی; ذِ → ذی | the before a vowel = ذی (as u06–u10 and C1) |
| u05 | `grammar[0].exercises[5].answer` | ['warned', 'advised', 'told', 'reminded', 'asked'] → ['warned', 'advised', 'told', 'reminded', 'asked', 'ordered', 'urged'] | "ordered / urged us not to leave" are also correct verb + object + to-infinitive answers |
| u05 | `grammar[1].exercises[3].answer` | ['estimated', 'said', 'reported', 'believed', 'thought'] → ['estimated', 'said', 'reported', 'believed', 'thought', 'known'] | "It is known that …" (a verb listed in the explanation) is also correct |
| u06 | `grammar[0].exercises[0].pr` | لایْتْس → لایتْس; ___ → ماسْت | gap ___ filled with the answer «must» = ماسْت (app shows pr after answering);no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u06 | `grammar[0].exercises[1].pr` | ___ → کَنت | gap ___ filled with the answer «can't» = کَنت (app shows pr after answering) |
| u06 | `grammar[0].exercises[2].pr` | ___ → هَو | gap ___ filled with the answer «have» = هَو (app shows pr after answering) |
| u06 | `grammar[0].exercises[3].pr` | ___ → کَنت; عَلیز → علیز | gap ___ filled with the answer «can't» = کَنت (app shows pr after answering);عَلیز → علیز: Persian names without added vowel marks (as علی elsewhere) |
| u06 | `grammar[0].exercises[4].pr` | ___ → مایت | gap ___ filled with the answer «might» = مایت (app shows pr after answering) |
| u06 | `grammar[0].exercises[5].pr` | ___ → کَنت هَو بین | gap ___ filled with the answer «can't have been» = کَنت هَو بین (app shows pr after answering) |
| u06 | `grammar[1].exercises[0].pr` | ___ → هَد لِرنْد | gap ___ filled with the answer «had learned» = هَد لِرنْد (app shows pr after answering) |
| u06 | `grammar[1].exercises[1].pr` | ___ → لیوْد | gap ___ filled with the answer «lived» = لیوْد (app shows pr after answering) |
| u06 | `grammar[1].exercises[2].pr` | ___ → وود سْتاپ; وایْل → وایل; یُر → یور | gap ___ filled with the answer «would stop» = وود سْتاپ (app shows pr after answering);no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) / یُر → یور: your/you're = «یور» (BRIEF_NEW convention) |
| u06 | `grammar[1].exercises[3].pr` | ___ → هَد | gap ___ filled with the answer «had» = هَد (app shows pr after answering) |
| u06 | `grammar[1].exercises[4].pr` | ___ → وودِنْت | gap ___ filled with the answer «wouldn't» = وودِنْت (app shows pr after answering) |
| u06 | `grammar[1].exercises[5].pr` | ___ → وِرِنْت | gap ___ filled with the answer «weren't» = وِرِنْت (app shows pr after answering) |
| u06 | `words[1].ex.pr` | یُر → یور | یُر → یور: your/you're = «یور» (BRIEF_NEW convention) |
| u06 | `words[7].pr` | وایلْدلایْف → وایلْدلایف | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u06 | `words[7].ex.pr` | وایلْدلایْف. → وایلْدلایف. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u06 | `words[13].ex.pr` | وایلْدلایْف → وایلْدلایف | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u06 | `dialogue.lines[0].pr` | چایْلْد، → چایلْد،; راوْنْد. → راونْد. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u06 | `dialogue.lines[3].pr` | اُوِر → اُووِر | اُوِر → اُووِر: over: one spelling in the level (اُووِر, as u01–u05 and A1–B1) |
| u06 | `dialogue.lines[8].pr` | کاوْنْتْس. → کاونْتْس. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u06 | `dialogue.lines[9].pr` | یُر → یور | یُر → یور: your/you're = «یور» (BRIEF_NEW convention) |
| u06 | `grammar[0].examples[0].pr` | گْراوْنْد → گْراونْد | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u06 | `grammar[0].examples[2].pr` | دایْد → داید | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u06 | `reading.title.pr` | گْرَنْدمادِر → گْرَنْدْماذِر | گْرَنْدمادِر → گْرَنْدْماذِر: grandmother: voiced th = ذ / one spelling for the level |
| u06 | `reading.text[0].pr` | گْرَنْدمادِر → گْرَنْدْماذِر | گْرَنْدمادِر → گْرَنْدْماذِر: grandmother: voiced th = ذ / one spelling for the level |
| u06 | `reading.text[1].pr` | نایْنْتین → ناینْتین; اُوِر → اُووِر | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) / اُوِر → اُووِر: over: one spelling in the level (اُووِر, as u01–u05 and A1–B1) |
| u06 | `reading.text[4].pr` | سایْز. → سایز. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u06 | `reading.text[6].pr` | ثاوْزِنْدْز → ثاوزِنْدْز; دْراوْت. → دْراوت. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u06 | `reading.text[9].pr` | گْرَنْدمادِر → گْرَنْدْماذِر | گْرَنْدمادِر → گْرَنْدْماذِر: grandmother: voiced th = ذ / one spelling for the level |
| u06 | `reading.text[13].pr` | کاوْنْتْس. → کاونْتْس. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u06 | `reading.questions[0].q.pr` | نایْنْتین → ناینْتین | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u06 | `reading.questions[4].q.pr` | گْرَنْدمادِر → گْرَنْدْماذِر | گْرَنْدمادِر → گْرَنْدْماذِر: grandmother: voiced th = ذ / one spelling for the level |
| u06 | `sentences[6].pr` | لایْتْس → لایتْس | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u06 | `words[15].emoji` | 🚰 →  | 🚰 (drinking-water tap) pictures the opposite of a water shortage / no emoji fits |
| u06 | `reading.text[10].t` | There is some good news: in recent years, a rescue program and some rainy winters have brought part of the water back. → There was some good news for a while: a rescue program and some rainy winters brought part of the water back. | factual: the partial recovery (c. 2015–2020) has since been reversed (lake nearly dry again in 2023–2025) / stated as a past episode so it stays true |
| u06 | `reading.text[10].pr` | ایز → واز; نوز: این ریسِنْت ییرز، → نوز فُر اِ وایل:; هَو →  | pr updated to the corrected sentence |
| u06 | `reading.text[10].s` | خبر خوبی هم هست: در سال‌های اخیر، یک برنامه‌ی نجات و چند زمستان پرباران بخشی از آب را برگردانده است. → مدتی خبر خوبی هم بود: یک برنامه‌ی نجات و چند زمستان پرباران بخشی از آب را برگرداند. | translation updated to the corrected sentence |
| u07 | `grammar[0].exercises[0].pr` | ___ → هوز | gap ___ filled with the answer «whose» = هوز (app shows pr after answering) |
| u07 | `grammar[0].exercises[1].pr` | ___ → هوم | gap ___ filled with the answer «whom» = هوم (app shows pr after answering) |
| u07 | `grammar[0].exercises[2].pr` | ___ → ویچ | gap ___ filled with the answer «which» = ویچ (app shows pr after answering) |
| u07 | `grammar[0].exercises[3].pr` | ___ → ویچ | gap ___ filled with the answer «which» = ویچ (app shows pr after answering) |
| u07 | `grammar[0].exercises[4].pr` | ___ → هوز | gap ___ filled with the answer «whose» = هوز (app shows pr after answering) |
| u07 | `grammar[0].exercises[5].pr` | ___ → ویچ | gap ___ filled with the answer «which» = ویچ (app shows pr after answering) |
| u07 | `grammar[0].exercises[6].pr` | ___ → ویچ; پْراوْد. → پْراود. | gap ___ filled with the answer «which» = ویچ (app shows pr after answering);no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u07 | `grammar[1].exercises[0].pr` | ___ → هَوینگ رِد | gap ___ filled with the answer «Having read» = هَوینگ رِد (app shows pr after answering) |
| u07 | `grammar[1].exercises[1].pr` | ___ → ریتِن | gap ___ filled with the answer «Written» = ریتِن (app shows pr after answering) |
| u07 | `grammar[1].exercises[2].pr` | ___ → هَوینگ میسْت | gap ___ filled with the answer «Having missed» = هَوینگ میسْت (app shows pr after answering) |
| u07 | `grammar[1].exercises[3].pr` | ___ → هَوینگ | gap ___ filled with the answer «Having» = هَوینگ (app shows pr after answering) |
| u07 | `grammar[1].exercises[4].pr` | ___ → نات | gap ___ filled with the answer «Not» = نات (app shows pr after answering) |
| u07 | `grammar[1].exercises[5].pr` | ___ → سْتادیئینگ | gap ___ filled with the answer «Studying» = سْتادیئینگ (app shows pr after answering) |
| u07 | `words[2].ex.pr` | مادِر → ماذِر; اَن → اِن | مادِر → ماذِر: mother: voiced th = ذ / اَن → اِن: unstressed "an" /ən/ = اِن (as everywhere else) |
| u07 | `words[5].pr` | اِسایْنْمِنْت → اِساینْمِنْت | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u07 | `words[5].ex.pr` | اِسایْنْمِنْت → اِساینْمِنْت | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u07 | `words[13].ex.pr` | لایْف → لایف | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u07 | `words[15].ex.pr` | یُر → یور | یُر → یور: your/you're = «یور» (BRIEF_NEW convention) |
| u07 | `phrases[1].pr` | اُوِر → اُووِر | اُوِر → اُووِر: over: one spelling in the level (اُووِر, as u01–u05 and A1–B1) |
| u07 | `phrases[3].pr` | ایت فایْنِلی کْلیکْت. → ایت فاینِلی کْلیکْت. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u07 | `dialogue.lines[0].pr` | یُر → یور | یُر → یور: your/you're = «یور» (BRIEF_NEW convention) |
| u07 | `dialogue.lines[2].pr` | اَن → اِن | اَن → اِن: unstressed "an" /ən/ = اِن (as everywhere else) |
| u07 | `dialogue.lines[6].pr` | تْوایْس، → تْوایس، | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u07 | `grammar[0].examples[0].pr` | پْرایْز. → پْرایز. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u07 | `grammar[0].examples[1].pr` | گْرَنْدفاذِر. → گْرَنْدْفاذِر. | گْرَنْدفاذِر → گْرَنْدْفاذِر: one spelling for grandfather in the level |
| u07 | `grammar[0].examples[3].pr` | اِپْلایْد → اِپْلاید | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u07 | `grammar[0].exercises[7].pr` | لاوْد. → لاود. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u07 | `grammar[1].examples[1].pr` | فاوْنْدِد → فاونْدِد;  → آفِن کالْد | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05);pr updated to the corrected sentence |
| u07 | `grammar[1].examples[3].pr` | جُیْن → جُین | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u07 | `grammar[1].exercises[7].pr` | سْتِیْد → سْتِید | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u07 | `reading.text[3].pr` | یُر → یور | یُر → یور: your/you're = «یور» (BRIEF_NEW convention) |
| u07 | `reading.text[5].pr` | اَن → اِن | اَن → اِن: unstressed "an" /ən/ = اِن (as everywhere else) |
| u07 | `reading.text[6].pr` | لایْک → لایک | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u07 | `reading.text[9].pr` | فاوْنْد → فاونْد; سِرپْرایْزینگْلی → سِرپْرایزینگْلی | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u07 | `reading.text[10].pr` | اَذِر → آذِر | اَذِر → آذِر: other /ˈʌðər/: /ʌ/ = ا |
| u07 | `reading.text[11].pr` | اَذِر → آذِر; اِسایْنْمِنْتْس. → اِساینْمِنْتْس. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) / اَذِر → آذِر: other /ˈʌðər/: /ʌ/ = ا |
| u07 | `sentences[1].pr` | اِپْلایْد. → اِپْلاید. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u07 | `sentences[6].pr` | اُوِر → اُووِر | اُوِر → اُووِر: over: one spelling in the level (اُووِر, as u01–u05 and A1–B1) |
| u07 | `grammar[1].examples[1].t` | Founded in the eleventh century, the University of Bologna is the oldest university in Europe. → Founded in the eleventh century, the University of Bologna is often called the oldest university in Europe. | "the oldest university in Europe" is a disputed superlative / hedged ("is often called") |
| u07 | `grammar[1].examples[1].s` | دانشگاه بولونیا که در قرن یازدهم میلادی تأسیس شد، قدیمی‌ترین دانشگاه اروپاست. → دانشگاه بولونیا که در قرن یازدهم میلادی تأسیس شد، اغلب قدیمی‌ترین دانشگاه اروپا نامیده می‌شود. | translation updated to the corrected sentence |
| u07 | `grammar[1].exercises[6].alts` | (none) → ['She left early, having finished the exam.'] | participle clause after the main clause is an equally natural order of the same words |
| u08 | `grammar[0].exercises[0].pr` | ___ تایْم → لیتِل تایم | gap ___ filled with the answer «little» = لیتِل (app shows pr after answering);no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `grammar[0].exercises[1].pr` | ___ → اِ فیو | gap ___ filled with the answer «a few» = اِ فیو (app shows pr after answering) |
| u08 | `grammar[0].exercises[2].pr` | ___ → اِوْری; پْریزِنْتِیشِن. → پْرِزِنْتِیشِن. | gap ___ filled with the answer «Every» = اِوْری (app shows pr after answering);پْریزِنْتِیشِن → پْرِزِنْتِیشِن: one spelling for presentation in the level |
| u08 | `grammar[0].exercises[3].pr` | ___ → نیذِر | gap ___ filled with the answer «neither» = نیذِر (app shows pr after answering) |
| u08 | `grammar[0].exercises[4].pr` | تْرایْد → تْراید; ___ → نان | gap ___ filled with the answer «none» = نان (app shows pr after answering);no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `grammar[0].exercises[5].pr` | ___ → ایذِر | gap ___ filled with the answer «either» = ایذِر (app shows pr after answering) |
| u08 | `grammar[0].exercises[6].pr` | ___ → بُوث | gap ___ filled with the answer «Both» = بُوث (app shows pr after answering) |
| u08 | `grammar[1].exercises[0].pr` | ___ → ساچ | gap ___ filled with the answer «such» = ساچ (app shows pr after answering) |
| u08 | `grammar[1].exercises[1].pr` | ___ کْراوْدِد → سُو کْراودِد | gap ___ filled with the answer «so» = سُو (app shows pr after answering);no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `grammar[1].exercises[2].pr` | ___ → تو | gap ___ filled with the answer «too» = تو (app shows pr after answering) |
| u08 | `grammar[1].exercises[3].pr` | ___ → ایناف | gap ___ filled with the answer «enough» = ایناف (app shows pr after answering) |
| u08 | `grammar[1].exercises[4].pr` | ___ کایْنْد → ساچ کاینْد; اینْوایْتِد → اینْوایتِد | gap ___ filled with the answer «such» = ساچ (app shows pr after answering);no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `grammar[1].exercises[5].pr` | ___ → ایناف تایم | gap ___ filled with the answer «enough time» = ایناف تایم (app shows pr after answering) |
| u08 | `words[0].ex.pr` | یُر → یور | یُر → یور: your/you're = «یور» (BRIEF_NEW convention) |
| u08 | `words[1].ex.pr` | اُوِر → اُووِر; اَن → اِن | اُوِر → اُووِر: over: one spelling in the level (اُووِر, as u01–u05 and A1–B1) / اَن → اِن: unstressed "an" /ən/ = اِن (as everywhere else) |
| u08 | `words[4].ex.pr` | سِرپْرایْزْد → سِرپْرایزْد | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `words[7].pr` | سایْت‌سیئینگ → تورِسْت تْرَپ | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05);new headword |
| u08 | `words[7].ex.pr` |  → ذِ رِسْتِرانْتْس آن ذِ مِین سْکْوِر آر تورِسْت تْرَپْس، سُو; سْپِنْت → اِیت وِر; هُول مُرنینگ سایْت‌سیئینگ این شیراز. → لُوکِلْز ایت. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05);new example |
| u08 | `words[12].ex.pr` | یُر → یور | یُر → یور: your/you're = «یور» (BRIEF_NEW convention) |
| u08 | `words[14].pr` | بْرادِن یُر هِرایْزِنْز → بْرادِن یور هِرایزِنْز | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) / یُر → یور: your/you're = «یور» (BRIEF_NEW convention) |
| u08 | `words[14].ex.pr` | یُر هِرایْزِنْز. → یور هِرایزِنْز. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) / یُر → یور: your/you're = «یور» (BRIEF_NEW convention) |
| u08 | `words[15].pr` | سْتِریِتایْپ → سْتِریِتایپ | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `words[15].ex.pr` | اَذِر → آذِر; سْتِریِتایْپْس. → سْتِریِتایپْس. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) / اَذِر → آذِر: other /ˈʌðər/: /ʌ/ = ا |
| u08 | `phrases[4].pr` | لایْک → لایک | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `phrases[7].pr` | ذَتس کِنْسیدِرْد پِلایْت. → ذَتس کِنْسیدِرْد پِلایت. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `dialogue.lines[0].pr` | اَن → اِن; تایْم → تایم; کایْنْد. → کاینْد. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) / اَن → اِن: unstressed "an" /ən/ = اِن (as everywhere else) |
| u08 | `dialogue.lines[2].pr` | گایْدْبوک → گایدْبوک | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `dialogue.lines[4].pr` | دْرایْوِر → دْرایوِر | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `dialogue.lines[6].pr` | گِیْو → گِیو | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `dialogue.lines[7].pr` | یُر → یور | یُر → یور: your/you're = «یور» (BRIEF_NEW convention) |
| u08 | `dialogue.lines[8].pr` | یَزْد → یزد; تایْم. → تایم. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) / یَزْد → یزد: Persian names in normal Persian spelling |
| u08 | `dialogue.lines[11].pr` | تایْم، → تایم، | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `grammar[0].examples[0].pr` | ایسْفِهان، → اصفهان، | ایسْفِهان → اصفهان: Persian place names in normal Persian spelling (as تهران، شیراز، اصفهان elsewhere) |
| u08 | `grammar[1].examples[1].pr` | فْلایْت → فْلایت | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `grammar[1].examples[4].pr` | آوتْسایْد. → آوتْساید. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `reading.text[4].pr` | نایْن، → ناین،; اِرایْوْز → اِرایوْز | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `reading.text[5].pr` | فاوْنْد → فاونْد | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `reading.text[6].pr` | لایْک → لایک | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `reading.text[7].pr` | اینْوایْتِد → اینْوایتِد; هُوم‌مِیْد → هُوم‌مِید | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `reading.text[9].pr` | تایْم → تایم | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `reading.text[11].pr` | اَدْوایْس → اِدْوایس; اِفْرِیْد → اِفْرِید | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) / اَدْوایس → اِدْوایس: advice /ədˈvaɪs/: schwa |
| u08 | `reading.questions[0].q.pr` | اِرایْوْد؟ → اِرایوْد؟ | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `sentences[2].pr` | سْتِیْد → سْتِید | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `sentences[5].pr` | تْوایْس. → تْوایس. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u08 | `sentences[6].pr` | یُر → یور | یُر → یور: your/you're = «یور» (BRIEF_NEW convention) |
| u08 | `words[11].pr` | آیْتینِرِری → آیتینِرِری | no sukun on the glide of a diphthong (آید، آیل … as u01–u05) |
| u08 | `words[11].ex.pr` | آیْتینِرِری → آیتینِرِری | no sukun on the glide of a diphthong (آید، آیل … as u01–u05) |
| u08 | `dialogue.lines[9].pr` | آیْد → آید | no sukun on the glide of a diphthong (آید، آیل … as u01–u05) |
| u08 | `dialogue.lines[10].pr` | آیْد → آید | no sukun on the glide of a diphthong (آید، آیل … as u01–u05) |
| u08 | `sentences[4].pr` | آیْدیا → آیدیا | no sukun on the glide of a diphthong (آید، آیل … as u01–u05) |
| u08 | `words[7].t` | sightseeing → tourist trap | headword duplicate: "go sightseeing" is already taught in A2 u02 / replaced by a new B2 travel collocation (id kept) |
| u08 | `words[7].pl` | (none) → tourist traps | plural for the new headword |
| u08 | `words[7].s` | گشت‌وگذار، دیدن جاهای دیدنی → تله‌ی توریستی (جای شلوغ و گران مخصوص توریست‌ها) | new headword |
| u08 | `words[7].emoji` | 📸 →  | no emoji pictures "tourist trap" |
| u08 | `words[7].ex.t` | We spent the whole morning sightseeing in Shiraz. → The restaurants on the main square are tourist traps, so we ate where the locals eat. | new example for the new headword |
| u08 | `words[7].ex.s` | تمام صبح را به گشت‌وگذار در شیراز گذراندیم. → رستوران‌های میدان اصلی تله‌ی توریستی‌اند، برای همین جایی غذا خوردیم که اهالی آنجا غذا می‌خورند. | new example |
| u08 | `grammar[1].exercises[5].options` | ['enough time', 'time enough', 'too much time'] → ['enough time', 'enough of time', 'too much time'] | "time enough" is old-fashioned but not wrong / replaced by a clearly wrong distractor |
| u09 | `grammar[0].exercises[0].pr` | آیْل → آیل; ___ → ریسیوینگ; مادِر → ماذِر | gap ___ filled with the answer «receiving» = ریسیوینگ (app shows pr after answering);مادِر → ماذِر: mother: voiced th = ذ;no sukun on the glide of a diphthong (آید، آیل … as u01–u05) |
| u09 | `grammar[0].exercises[1].pr` | ___ → تو تِرن آف; لایْتْس → لایتْس | gap ___ filled with the answer «to turn off» = تو تِرن آف (app shows pr after answering);no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `grammar[0].exercises[2].pr` | ___ → تو هَو | gap ___ filled with the answer «to have» = تو هَو (app shows pr after answering) |
| u09 | `grammar[0].exercises[3].pr` | ___ → سْپِنْدینگ | gap ___ filled with the answer «spending» = سْپِنْدینگ (app shows pr after answering) |
| u09 | `grammar[0].exercises[4].pr` | ___ → پِیینگ | gap ___ filled with the answer «paying» = پِیینگ (app shows pr after answering) |
| u09 | `grammar[0].exercises[5].pr` | ___ → بایینگ | gap ___ filled with the answer «buying» = بایینگ (app shows pr after answering) |
| u09 | `grammar[0].exercises[6].pr` | ___ → لاکینگ | gap ___ filled with the answer «locking» = لاکینگ (app shows pr after answering) |
| u09 | `grammar[1].exercises[0].pr` | ___ → دِسْپایت | gap ___ filled with the answer «Despite» = دِسْپایت (app shows pr after answering) |
| u09 | `grammar[1].exercises[1].pr` | ___ → آلْذُو; سِیْل، → سِیل، | gap ___ filled with the answer «Although» = آلْذُو (app shows pr after answering);no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `grammar[1].exercises[2].pr` | لاوْز → لاوز; ___ → وِرْاَز | gap ___ filled with the answer «whereas» = وِرْاَز (app shows pr after answering);no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `grammar[1].exercises[3].pr` | ___، → نِوِرذِلِس، | gap ___ filled with the answer «Nevertheless» = نِوِرذِلِس (app shows pr after answering) |
| u09 | `grammar[1].exercises[4].pr` | سْپایْت ___ → سْپایت آو; دیسْکاوْنْت، → دیسْکاونْت،; دیسایْدِد → دیسایدِد | gap ___ filled with the answer «of» = آو (app shows pr after answering);no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `grammar[1].exercises[5].pr` | ___ → دِسْپایت | gap ___ filled with the answer «Despite» = دِسْپایت (app shows pr after answering) |
| u09 | `grammar[1].exercises[6].pr` | هاوْس دِسْپایْت → هاوس دِسْپایت; ___ → فَکْت | gap ___ filled with the answer «fact» = فَکْت (app shows pr after answering);no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `words[3].ex.pr` | پِیْد → پِید; پْرایْس. → پْرایس. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `words[4].ex.pr` | اُوِر پْرایْسِز. → اُووِر پْرایسِز. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) / اُوِر → اُووِر: over: one spelling in the level (اُووِر, as u01–u05 and A1–B1) |
| u09 | `words[5].ex.pr` | اَن → اِن | اَن → اِن: unstressed "an" /ən/ = اِن (as everywhere else) |
| u09 | `words[6].ex.pr` | فایْو → فایو | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `words[10].pr` | دیسْکاوْنْت → دیسْکاونْت | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `words[10].ex.pr` | دیسْکاوْنْت → دیسْکاونْت | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `words[13].ex.pr` | بایْک → بایک | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `phrases[1].pr` | پْرایْس؟ → پْرایس؟ | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `phrases[2].pr` | آیم آن اِ تایْت باجِت. → آیم آن اِ تایت باجِت. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `phrases[3].pr` | پْرایْس رِیْنْج. → پْرایس رِینْج. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `dialogue.lines[3].pr` | تایْم. → تایم.; سایْنینگ → ساینینگ | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `dialogue.lines[4].pr` | رایْتینگ → رایتینگ | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `dialogue.lines[5].pr` | تْرایْد → تْراید; گِیْو → گِیو | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `dialogue.lines[6].pr` | اَن → اِن; دِسْپایْت → دِسْپایت; مایْن → ماین | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) / اَن → اِن: unstressed "an" /ən/ = اِن (as everywhere else) |
| u09 | `dialogue.lines[10].pr` | تایْم، → تایم، | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `dialogue.lines[11].pr` | اَدْوایْس. → اِدْوایس. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) / اَدْوایس → اِدْوایس: advice /ədˈvaɪs/: schwa |
| u09 | `grammar[0].examples[2].pr` | یُرز؟ → یورز؟ | یُرز → یورز: yours = «یورز» (your = یور) |
| u09 | `grammar[1].examples[1].pr` | دِسْپایْت → دِسْپایت; لایْن، → لاین، | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `grammar[1].examples[2].pr` | سْپایْت → سْپایت | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `grammar[1].examples[3].pr` | لاوْز → لاوز | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `grammar[1].examples[4].pr` | لایْک → لایک | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `reading.text[2].pr` | بایْز: → بایز: | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `reading.text[3].pr` | تْرایْد → تْراید; دیکْلایْنْد. → دیکْلاینْد. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `reading.text[5].pr` | دیسایْدِد → دیسایدِد | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `reading.text[7].pr` | تْرایْد → تْراید; دیسایْدینگ. → دیسایدینگ. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `reading.text[10].pr` | دِسْپایْت → دِسْپایت | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `sentences[1].pr` | کِیْس → کِیس | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `sentences[4].pr` | دِسْپایْت → دِسْپایت; دیسْکاوْنْت، → دیسْکاونْت،; پْرایْس → پْرایس | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `sentences[5].pr` | گْرَنْدفاذِر → گْرَنْدْفاذِر | گْرَنْدفاذِر → گْرَنْدْفاذِر: one spelling for grandfather in the level |
| u09 | `sentences[7].pr` | تایْت → تایت | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u09 | `phrases[4].pr` | آیْل ثینک اِباوت ایت. → آیل ثینک اِباوت ایت. | no sukun on the glide of a diphthong (آید، آیل … as u01–u05) |
| u09 | `reading.text[4].pr` | آیْل → آیل | no sukun on the glide of a diphthong (آید، آیل … as u01–u05) |
| u09 | `words[13].emoji` | 🚲 →  | 🚲 pictures the example (a bike), not "second-hand" / no emoji fits |
| u09 | `grammar[1].exercises[7].alts` | (none) → ['It was worth it, although it was expensive.'] | main clause first is an equally natural order of the same words |
| u10 | `grammar[0].exercises[0].pr` | ___ → هو | gap ___ filled with the answer «who» = هو (app shows pr after answering) |
| u10 | `grammar[0].exercises[1].pr` | ___ → وات | gap ___ filled with the answer «What» = وات (app shows pr after answering) |
| u10 | `grammar[0].exercises[2].pr` | ___ → ذَت;  → لومیِر بْراذِرز; مووی واز شُون → شُود ذِر فیلْمْز | gap ___ filled with the answer «that» = ذَت (app shows pr after answering);pr updated to the corrected sentence |
| u10 | `grammar[0].exercises[3].pr` | ___ → ایز; ساوْنْدتْرَک. → ساونْدتْرَک. | gap ___ filled with the answer «is» = ایز (app shows pr after answering);no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `grammar[0].exercises[4].pr` | ___ → واز | gap ___ filled with the answer «was» = واز (app shows pr after answering) |
| u10 | `grammar[0].exercises[5].pr` | ___ → وات; نایْت → نایت | gap ___ filled with the answer «What» = وات (app shows pr after answering);no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `grammar[1].exercises[0].pr` | لاوْد. → لاود.; ___؟ → ایت داون؟ | gap ___ filled with the answer «it down» = ایت داون (app shows pr after answering);no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `grammar[1].exercises[1].pr` | مادِر ___ → ماذِر لوکْس اَفْتِر مای کیدْز | gap ___ filled with the answer «looks after my kids» = لوکْس اَفْتِر مای کیدْز (app shows pr after answering);مادِر → ماذِر: mother: voiced th = ذ |
| u10 | `grammar[1].exercises[2].pr` | ___ → تو واچینگ | gap ___ filled with the answer «to watching» = تو واچینگ (app shows pr after answering) |
| u10 | `grammar[1].exercises[3].pr` | ___ → آو; یُر → یور | gap ___ filled with the answer «of» = آو (app shows pr after answering);یُر → یور: your/you're = «یور» (BRIEF_NEW convention) |
| u10 | `grammar[1].exercises[4].pr` | رایْتِرز → رایتِرز; ___ → ویذ | gap ___ filled with the answer «with» = ویذ (app shows pr after answering);no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `grammar[1].exercises[5].pr` | فایْنِلی → فاینِلی; ___ → اُووِر | gap ___ filled with the answer «over» = اُووِر (app shows pr after answering);no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `words[1].ex.pr` | اُوِر → اُووِر | اُوِر → اُووِر: over: one spelling in the level (اُووِر, as u01–u05 and A1–B1) |
| u10 | `words[5].ex.pr` | اَن → اِن | اَن → اِن: unstressed "an" /ən/ = اِن (as everywhere else) |
| u10 | `words[6].pr` | سْپُیْلِر → سْپُیلِر | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `words[6].ex.pr` | سْپُیْلِرز، → سْپُیلِرز، | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `words[7].pr` | ساوْنْدتْرَک → ساونْدتْرَک | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `words[7].ex.pr` | ساوْنْدتْرَک → ساونْدتْرَک | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `words[8].ex.pr` | لاوْد → لاود; فاوْنْد → فاونْد | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `words[10].ex.pr` | نایْت → نایت | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `words[12].pr` | سابْتایْتِلْز → سابْتایتِلْز | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `words[12].ex.pr` | سابْتایْتِلْز → سابْتایتِلْز; یُر → یور | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) / یُر → یور: your/you're = «یور» (BRIEF_NEW convention) |
| u10 | `phrases[5].pr` | ایتس اُوِر رِیتِد. → ایتس اُووِررِیتِد. | اُوِر → اُووِر: over: one spelling in the level (اُووِر, as u01–u05 and A1–B1);overrated is one word /ˌoʊvərˈreɪtɪd/ / over = اُووِر as in the rest of the level |
| u10 | `dialogue.title.pr` | نُو سْپُیْلِرز، پْلیز! → نُو سْپُیلِرز، پْلیز! | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `dialogue.lines[0].pr` | سایْلِنْت → سایلِنْت | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `dialogue.lines[1].pr` | سْپُیْلِرز، → سْپُیلِرز، | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `dialogue.lines[4].pr` | ساوْنْدتْرَک. → ساونْدتْرَک.; تایْم. → تایم. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `dialogue.lines[5].pr` | رایْتِرز → رایتِرز; سِرپْرایْزِز. → سِرپْرایزِز. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `dialogue.lines[6].pr` | نایْت، → نایت، | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `dialogue.lines[9].pr` | اِناوْنْسْت → اِناونْسْت | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `dialogue.lines[10].pr` | اُوِر تِنایْت؟ → اُووِر تِنایت؟; مایْنْد → ماینْد | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) / اُوِر → اُووِر: over: one spelling in the level (اُووِر, as u01–u05 and A1–B1) |
| u10 | `grammar[0].examples[0].pr` | گْرَنْدفاذِر → گْرَنْدْفاذِر | گْرَنْدفاذِر → گْرَنْدْفاذِر: one spelling for grandfather in the level |
| u10 | `grammar[0].examples[1].pr` | دیسِپُیْنْتِد → دیسِپُینْتِد | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `grammar[0].examples[3].pr` | سِرپْرایْزْد → سِرپْرایزْد | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `grammar[1].examples[3].pr` | فایْنِل → فاینِل | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `reading.title.pr` | نایْت؟ → نایت؟ | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `reading.text[3].pr` | وایْل → وایل | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `reading.text[4].pr` | اِماوْنْت → اِماونْت; تایْم، → تایم، | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `reading.text[11].pr` | اَذِر → آذِر | اَذِر → آذِر: other /ˈʌðər/: /ʌ/ = ا |
| u10 | `sentences[4].pr` | سابْتایْتِلْز. → سابْتایتِلْز. | no sukun on the glide of a diphthong (تایم، نایت، لایک … as A1–B1 and u01–u05) |
| u10 | `dialogue.lines[11].pr` | آیْدیا. آیْل → آیدیا. آیل | no sukun on the glide of a diphthong (آید، آیل … as u01–u05) |
| u10 | `sentences[6].pr` | آیْدیا → آیدیا | no sukun on the glide of a diphthong (آید، آیل … as u01–u05) |
| u10 | `grammar[0].exercises[2].t` | It was in Paris ___ the first movie was shown to a paying audience. → It was in Paris ___ the Lumière brothers first showed their films to a paying audience. | factual: "the first movie shown to a paying audience" is disputed (paid screenings in New York and Berlin in 1895 came earlier) / made specific and true |
| u10 | `grammar[0].exercises[2].s` | در پاریس بود که اولین فیلم برای تماشاگرانی که بلیت خریده بودند نمایش داده شد. → در پاریس بود که برادران لومیر برای اولین بار فیلم‌هایشان را برای تماشاگرانی که بلیت خریده بودند نمایش دادند. | translation updated to the corrected sentence |
| u10 | `grammar[1].exercises[6].alts` | (none) → ['Before you leave, please turn it off.'] | fronted before-clause is an equally natural order of the same words |

## Number of changed fields per category

| Category | Fields changed |
|---|---|
| pr | 249 |
| exercises | 8 |
| target text | 6 |
| translation | 5 |
| emoji | 3 |
| grammar explanation | 1 |

## Noticed but not changed

- **Headwords that also appear in C1:** B2 u03 w11 *side effect* (C1 u08 w04), u05 w07 *evidence* (C1 u10 w08), u08 w13 *exchange rate* (C1 u07 w04), u09 w13 *consumer* (C1 u07 w08), u10 w10 *audience* (C1 u10 w01), and the phrase u03 p05 *Better late than never.* (C1 u09 p07). These words fit B2, which is the lower level, so I kept them here. **The C1 reviewer should replace the C1 copies.** The only overlap with a lower level, *sightseeing* (A2 "go sightseeing"), was replaced (see table).
- **Reading questions use "she" or "he" for the writer** although some texts never state the writer's gender (u01, u03, u08, u09). The questions are still answerable, and the gender is a natural reading. Left as is.
- **u06 reading (Lake Urmia):** the 1970s description and "by 2014 … about one tenth of its former size" match commonly reported figures (about 90% loss of area by around 2013–2015), and the sentence is hedged with "about". Only the "recent recovery" sentence was changed, because the lake has dried out again since then.
- **u03 g01:** the Persian comparison «اگر می‌دانستم، می‌آمدم» shows that colloquial Persian often uses the past imperfect for the third conditional. This is correct and was kept.
- **u10 g01 explain:** "after a What-clause, be is usually singular" is hedged with «معمولاً». "What I need are …" also exists, so the hedge is right.
- **Emoji that are loose but acceptable** (kept): 🚀 launch, 📊 budget, 🤝 haggle, 🏫 boarding school, 🧠 knowledge.
- **Type and choice items** were checked for missing correct answers. Only the answers listed in the table were missing. In u04 g02 X2 ("We're ___ the living room painted"), "getting" would also be correct, but it is not among the options, so the item still has exactly one correct option.
- **`they're`** is written ذِیر (/ðeɪr/), which is a real variant. ذِر (/ðɛr/) would be more common, but it is not an error.

## TTS-risky texts (listed only, not changed)

- **Phrases that end in or contain "…":** u01 p08 *To sum up, …*; u02 p04 *Do you remember the time when …?*; u03 p01, p04, p08; u04 p06 *What's the point of …?*; u05 p01, p02, p08; u06 p01, p02, p05, p07; u07 p01; u08 p02.
- **Digits** (read correctly by the voice, but listed): u06 w07 ex "300 years"; u06 R1 / Q0 "the 1970s"; u06 R4 / Q1 "2014".
- **Abbreviation "TV"** (normally read fine): u10 g01 X1, X4; u10 g02 X0; u10 R0; u10 S2.
- **Capitals for emphasis:** u06 Q2 "NOT".
- **Typographic quotes** in readings: u05 R5; u06 R9; u07 R3; u10 R5, R10.
- **Grammar `table` cells** contain "/" and "+" (for example "have / has been + -ing"). This is the expected notation for tables, but listed in case tables are read aloud.
