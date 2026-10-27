# tr-fa B1 — pass 3 review

Scope: content/tr-fa/B1/u01–u10, every item read (words + examples, phrases, dialogues, grammar explanations/tables/examples/exercises, readings + questions, sentences). Started from review/audit/tr-fa-B1.md (80 missing phrase pr, 3 duplicate headwords — all real, all fixed).
After the edits: `tools/validate.py` OK for all 10 files; `tools/audit.py` → tr-fa B1: no findings.

Counts: pr 83 (80 new phrase guides + 3 cluster fixes) · duplicates replaced 5 (3 headwords, 2 phrases) · target text 6 · translation 8 · exercises/reading questions 5 · emoji 1 (new word).

## Changes (content, duplicates, pr fixes)

| File | Path | Old → New | Reason |
|---|---|---|---|
| u02 | words.6.pr | ترافیک → تْرافیک | Initial cluster tr- with sukun, as in the rest of the course (A2 trafik/tren), so it is not read «تِرافیک». |
| u02 | words.3.pr | ترامْوای → تْرامْوای | Same cluster convention (tr-). |
| u05 | words.13.ex.t | İranlıların Türkiye'ye gitmek için vizeye ihtiyacı yok. → Bu ülkeye gitmek için vize gerekiyor mu? | Factual claim about current visa rules can change (BRIEF_NEW 4); replaced with a neutral question. |
| u05 | words.13.ex.s | ایرانی‌ها برای رفتن به ترکیه به ویزا نیازی ندارند. → برای رفتن به این کشور ویزا لازم است؟ | Translation of the new example. |
| u05 | reading.text.7.t | Rehberimiz anlattı: insanlar binlerce yıl önce bu şehirlerde saklanmışlar. → Rehberimiz anlattı: insanlar yüzyıllar önce bu şehirlerde saklanmışlar. | The underground cities were used as hiding places mainly in Byzantine times (c. 1,000–1,500 years ago); "thousands of years" is doubtful, "centuries" is safely true. |
| u05 | reading.text.7.s | راهنمایمان تعریف کرد: گویا مردم هزاران سال پیش در این شهرها پنهان می‌شدند. → راهنمایمان تعریف کرد: گویا مردم قرن‌ها پیش در این شهرها پنهان می‌شدند. | Translation follows. |
| u05 | reading.questions.3.options | Çömlek yaptılar / Yer altı şehrini gezdiler / Hediyelik eşya aldılar → Balona bindiler / Yer altı şehrini gezdiler / Hediyelik eşya aldılar | "Dönmeden önce ne yaptılar?": pottery was also done on the last day before going home, so 'Çömlek yaptılar' was arguably a second correct answer; replaced with a distractor the text rules out (they only watched the balloons). |
| u06 | words.11.pr | کرِدی کارتِ → کْرِدی کارتِ | Same cluster convention (kr-). |
| u07 | phrases.6.t | Ne kadar sürer? → Ne zaman hazır olur? | Duplicate phrase inside B1 (also u02 p04); replaced with a new repair-shop phrase that matches the dialogue ("yarın öğlene kadar hazır olur"). |
| u07 | phrases.6.s | چقدر طول می‌کشد؟ → کی آماده می‌شود؟ | Translation of the new phrase. |
| u08 | words.6.ex.t | Elif'in nişanlısı doktor. → Mehmet'in nişanlısı doktor. | Contradicted the unit's reading, where Elif's fiancé Can is an engineer (and 'Doktor' is a distractor in reading q3). |
| u08 | words.6.ex.s | نامزد الیف پزشک است. → نامزد محمد پزشک است. | Translation follows. |
| u08 | words[15] | {"id": "w16", "t": "komşu", "pl": "komşular", "s": "همسایه", "pr": "کُمشو", "emoji": "", "ex": {"t": "Yeni komşumuz çok yardımsever.", "s": "همسایه‌ی جدیدمان خیلی اهل کمک است."}} → {"id": "w16", "t": "gelin", "pl": "gelinler", "s": "عروس", "pr": "گِلین", "emoji": "👰", "ex": {"t": "Gelin ve damat çok mutluydu.", "s": "عروس و داماد خیلی خوشحال بودند."}} | Headword 'komşu' taught twice in B1 (u01 w06); replaced by 'gelin' (not taught in any tr-fa level), which the unit's dialogue uses (gelinin yanında, gelinin annesi). |
| u09 | phrases.5.t | Kolay gelsin! → Sıhhatler olsun! | Duplicate phrase inside B1 (also u03 p02); replaced with a new everyday-custom phrase (fits yıkanmak in this unit). |
| u09 | phrases.5.s | خسته نباشید! → عافیت باشد! (به کسی که حمام کرده یا تازه موهایش را کوتاه کرده) | Translation of the new phrase. |
| u10 | words[4] | {"id": "w05", "t": "emekli olmak", "s": "بازنشسته شدن", "pr": "اِمِکلی اُلماک", "emoji": "", "ex": {"t": "Babam gelecek yıl emekli olacak.", "s": "پدرم سال آینده بازنشسته می‌شود."}} → {"id": "w05", "t": "planlamak", "s": "برنامه‌ریزی کردن", "pr": "پْلانلاماک", "emoji": "", "ex": {"t": "Tatilimizi şimdiden planlıyoruz.", "s": "از همین حالا تعطیلاتمان را برنامه‌ریزی می‌کنیم."}} | Headword 'emekli olmak' taught twice in B1 (u03 w13); replaced by 'planlamak' (not taught in any tr-fa level; used in this unit's sentence 'emekli olmayı planlıyor'). |
| u10 | words[7] | {"id": "w08", "t": "taşınmak", "s": "اسباب‌کشی کردن، نقل مکان کردن", "pr": "تاشِنماک", "emoji": "📦", "ex": {"t": "Gelecek ay yeni bir eve taşınacağız.", "s": "ماه آینده به خانه‌ی جدیدی اسباب‌کشی می‌کنیم."}} → {"id": "w08", "t": "gerçekleşmek", "s": "برآورده شدن، به حقیقت پیوستن", "pr": "گِرچِکلِشمِک", "emoji": "", "ex": {"t": "Umarım bütün dileklerin gerçekleşir.", "s": "امیدوارم همه‌ی آرزوهایت برآورده شود."}} | Headword 'taşınmak' taught twice in B1 (u01 w09); replaced by 'gerçekleşmek' (not taught in any tr-fa level; fits the unit's theme of wishes). |
| u10 | reading.text.0.t | Sevgili Reza, bu mektubu beş yıl sonra okuyacaksın. → Sevgili Mina, bu mektubu beş yıl sonra okuyacaksın. | Character consistency: Reza in u03 is 35, a software engineer in İzmir planning his own company next year; this letter's Reza is 32 and works in Istanbul. Writer renamed to Mina, which matches Mina in u03/u10 dialogue (office job in Turkey, parents in Iran). |
| u10 | reading.text.0.s | رضای عزیز، این نامه را پنج سال بعد خواهی خواند. → مینای عزیز، این نامه را پنج سال بعد خواهی خواند. | Translation follows. |
| u10 | reading.text.11.t | Sevgilerle, otuz iki yaşındaki Reza → Sevgilerle, otuz iki yaşındaki Mina | Same rename. |
| u10 | reading.text.11.s | با محبت، رضای سی‌ودوساله → با محبت، مینای سی‌ودوساله | Translation follows. |
| u10 | reading.questions.0.q.t | Reza şu an nerede çalışıyor? → Mina şu an nerede çalışıyor? | Same rename. |
| u10 | reading.questions.0.q.s | رضا الان کجا کار می‌کند؟ → مینا الان کجا کار می‌کند؟ | Same rename. |
| u10 | reading.questions.1.q.t | Reza'nın en büyük hedefi ne? → Mina'nın en büyük hedefi ne? | Same rename. |
| u10 | reading.questions.1.q.s | بزرگ‌ترین هدف رضا چیست؟ → بزرگ‌ترین هدف مینا چیست؟ | Same rename. |
| u10 | reading.questions.2.q.t | Reza her ay ne yapıyor? → Mina her ay ne yapıyor? | Same rename. |
| u10 | reading.questions.2.q.s | رضا هر ماه چه کار می‌کند؟ → مینا هر ماه چه کار می‌کند؟ | Same rename. |
| u10 | reading.questions.3.q.t | Reza'nın babası her zaman ne derdi? → Mina'nın babası her zaman ne derdi? | Same rename. |
| u10 | reading.questions.3.q.s | پدر رضا همیشه چه می‌گفت؟ → پدر مینا همیشه چه می‌گفت؟ | Same rename. |

## Phrase `pr` added (pass-3 task; conventions as in A1–A2: ı = ـِ, mı = «مِ», ğ after a = ا / between a and ı = ئ, double consonants with ّ, kâ = کیا, Persian ؟)

| File | phrases[i]: new pr |
|---|---|
| u01 | phrases: هاتِرلِیُر موسون؟<br>phrases: نِه گوزِل گونلِردی!<br>phrases: چُک اوزون زامان اُنجِیدی.<br>phrases: شیمدی آکلِما گِلدی.<br>phrases: اُ گونو هیچ اونوتمادِم.<br>phrases: دویدون مو؟<br>phrases: هابِرین وار مِ؟<br>phrases: وای، اینانامِیُروم! |
| u02 | phrases: بو اُتُبوس کادِکُیِه گیدیُر مو؟<br>phrases: نِرِدِه اینمِم لازِم؟<br>phrases: کاچ دوراک کالدِ؟<br>phrases: نِه کادار سورِر؟<br>phrases: تْرافیِه تاکِلدِم.<br>phrases: بیرازدان اُرادایِم.<br>phrases: یورویِرِک اُن داکیکا سورِر.<br>phrases: کارتِما پارا یوکلِمِم لازِم. |
| u03 | phrases: نِه ایش یاپِیُرسونوز؟<br>phrases: کُلای گِلسین!<br>phrases: ایشلِر ناسِل گیدیُر؟<br>phrases: بوگون ایشیم باشِمدان آشکِن.<br>phrases: بیر داکیکانِز وار مِ؟<br>phrases: سیزِه اِن کِسا زاماندا دُنوش یاپاجائِم.<br>phrases: یِنی ایشینیز هایِرلِ اُلسون!<br>phrases: دون آکشام مِسائیِه کالدِم. |
| u04 | phrases: گِچمیش اُلسون!<br>phrases: شیکیایِتینیز نِه؟<br>phrases: کِندیمی ای‌یی هیسِّتمیُروم.<br>phrases: باشِم دُنویُر.<br>phrases: میدِم بولانِیُر.<br>phrases: دُکتُردان راندِوو آلماک ایستیُروم.<br>phrases: بو ایلاجِ ناسِل کولّانمالِیِم؟<br>phrases: هِمِن آمبولانس چائِرِن! |
| u05 | phrases: بُش اُدانِز وار مِ؟<br>phrases: ایکی کیشیلیک بیر اُدا آیِرتماک ایستیُروم.<br>phrases: کاهوالتِ داهیل می؟<br>phrases: ساآت کاچتا چِکِش یاپمامِز گِرِکیُر؟<br>phrases: فُتُرافِمِزِ چِکِر میسینیز؟<br>phrases: نِرِلِری گِزمِمیزی اُنِریرسینیز؟<br>phrases: تاتیل ناسِل گِچتی؟<br>phrases: ای‌یی یُلجولوکلار! |
| u06 | phrases: سادِجِه باکِیُروم، تِشِکّورلِر.<br>phrases: بونون داها اوجوزو وار مِ؟<br>phrases: باشکا رِنگی وار مِ؟<br>phrases: بونو دِنِیِبیلیر مییم؟<br>phrases: دِنِمِه کابینی نِرِدِه؟<br>phrases: بانا بیراز دار گِلدی.<br>phrases: کارتلا اُدِیِبیلیر مییم؟<br>phrases: فیات پِرفُرمانس آچِسِندان اِن ای‌ییسی بو. |
| u07 | phrases: شارژِم بیتّی.<br>phrases: سِنی دویامِیُروم، سِس گیدیپ گِلیُر.<br>phrases: سُنرا آرارِم، تامام مِ؟<br>phrases: بانا بیر مِساژ آت.<br>phrases: بورادا اینتِرنِت چِکمیُر.<br>phrases: تِلِفُنوم دُندو.<br>phrases: نِه زامان هازِر اُلور؟<br>phrases: گارانتیسی وار مِ؟ |
| u08 | phrases: آلّاه مِسوت اِتسین!<br>phrases: گُزون آیدِن!<br>phrases: کیمِه چِکمیش؟<br>phrases: تِپکِ باباسِنا بِنزیُر.<br>phrases: بِندِن دِه سِلام سُیلِه.<br>phrases: آئیلِجِک گُروشِلیم.<br>phrases: بیزیمکیلِر ای‌یی، ساا اُل.<br>phrases: کوسورا باکما، هاکلِسِن. |
| u09 | phrases: بایرامِنِز کوتلو اُلسون!<br>phrases: نیجِه یِلّارا!<br>phrases: هُش گِلدینیز! — هُش بولدوک!<br>phrases: آفیِت اُلسون!<br>phrases: اِلِّرینیزِه ساالِک!<br>phrases: سِهّاتلِر اُلسون!<br>phrases: باشِنِز ساا اُلسون.<br>phrases: ماشالّاه! |
| u10 | phrases: اینشالّاه!<br>phrases: آه، کِشکِه!<br>phrases: هایِرلِسِ اُلسون.<br>phrases: بُل شانس!<br>phrases: هایالِّرین گِرچِک اُلسون!<br>phrases: باکالِم، نِه اُلاجاک.<br>phrases: نِدِن اُلماسِن؟<br>phrases: هِر شِی گُنلونجِه اُلسون! |

## Noticed but not changed

- **Cross-level phrase repeats**: *Geçmiş olsun!* and *Kendimi iyi hissetmiyorum.* (also A2 u05), *Kolay gelsin!* (also A2 u03 and B2 u03). They are revision of high-frequency formulas, not headwords, so I kept them; the in-level repeats (u07 *Ne kadar sürer?*, u09 *Kolay gelsin!*) were replaced.
- **Unmarked long vowels** (tarih, sahil, dahil, mesai: long a in Istanbul speech) are not shown in pr. This follows the course convention, which marks length only for â/î/û and doubled vowels (saat «ساآت», maaş «ماآش»). The new phrase guide *Kahvaltı dahil mi?* follows the same rule («داهیل»). TDK spells it *dâhil*; *dahil* is very common, so I left `t` as it is.
- **u09 g01 ex5**: Boğaziçi Köprüsü opened in 1973, so the year is correct. Its official name since 2016 is *15 Temmuz Şehitler Köprüsü*, but the old name is still widely used, so I kept it.
- **u10 g02**: this point revisits the real conditional (-ırsa) from u04 g02. It is presented as an extension, adding -abilir and the unreal -sa … -ırdı, so it is not taught twice.
- **u10 w06 *terfi almak***: very common in speech, though *terfi etmek* is the more formal form. Kept.
- **u09 g02 ex2 *Ali ile ben yıllardır tanışıyoruz*** (natural colloquial "we've known each other for years") and **u08 reading[9] *Dedemle evlendikleri gün*** (colloquial plural agreement): both are acceptable. Kept.
- **Initial clusters**: tr-, kr- now carry sukun, like the course majority (A2 «تْرِن», «تْرافیک»). Other B1 clusters had no case where a wrong vowel was likely.
- **u01 dialogue**: Maryam says *dedemin bahçesinde* to Reza, who was there too. That is fine unless they are siblings, which the text never says.

## TTS-risky texts (unchanged; see also the pass-1 list in review/tr-fa-B1.md)

- Em dash: u02 g01 ex4, u03 g01 ex6, u04 g01 ex5, u09 phrases[2] *Hoş geldiniz! — Hoş bulduk!*
- Digits / ordinals: u01 w09 ex *2015'te*, u05 dialogue[10] *Odanız 305*, u09 g01 ex4 *16. yüzyılda*, u09 g01 ex5 *1973'te*.
- Letters / codes: u06 dialogue[6] *Bedenim M.*, u06 dialogue[9] *L beden*, u10 reading[8] *C1*.
- Hyphen and slash: u06 phrases[7] *Fiyat-performans*; grammar titles containing "/" and "-(y)…".
