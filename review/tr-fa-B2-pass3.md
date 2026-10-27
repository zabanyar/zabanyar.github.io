# Review pass 3: tr-fa B2 (u01–u10)

I started from the automatic audit (`review/audit/tr-fa-B2.md`), which listed 80 phrases without `pr` and no other findings. I then read every item in all 10 units: words with examples, phrases, dialogue, both grammar points (explanation, table, examples, every exercise and its key), the reading with its questions, and the sentences. I also checked each unit against the B1 and C1 levels for repeated headwords and phrases, and checked the people across units (Mina, Maryam, Amir, Zeynep, Elif).

**Phrase `pr` conventions.** These are the same as the B2 word guides and the A2 and C1 phrase guides:
- ı = ـِ (final ı = ِ alone), i = ی, o/ö = اُ, u/ü = او, final e = ـه, c = ج, ç = چ, j = ژ
- ğ after a before a consonant = اا (ağrıyor آارِیُر, rağmen راامِن)
- a/ı/u + ğ + vowel = ئ (kaynağı کاینائِ, duyduğuma دویدوئوما)
- e/i + ğ + i = ِیی (değil دِییل, gereğini گِرِیینی)
- ve = وِه, de = دِه, iyi = ای‌یی
- -iyor = یُر, -ıyor = ِیُر
- double consonants take ّ (ettiğim اِتّییم, belli بِلّی)

After the edits, `python3 tools/validate.py content/tr-fa/B2/*.json` prints OK for all 10 files, and `python3 tools/audit.py` reports **no findings** for tr-fa B2.

## Changes

| File | Path | Old → New | Reason |
|---|---|---|---|
| u01.json | `phrases[0].pr` | — → سُن داکیکا! | missing phrase `pr` (task 3) |
| u01.json | `phrases[1].pr` | — → دویدوئوما گُرِه… | missing phrase `pr` (task 3) |
| u01.json | `phrases[2].pr` | — → سُیلِنتیلِرِه گُرِه… | missing phrase `pr` (task 3) |
| u01.json | `phrases[3].pr` | — → کولائِما چالِندِ کی… | missing phrase `pr` (task 3) |
| u01.json | `phrases[4].pr` | — → بو هابِرین کاینائِ نِه؟ | missing phrase `pr` (task 3) |
| u01.json | `phrases[5].pr` | — → اُنجِه هابِری تِییت اِتمِک لازِم. | missing phrase `pr` (task 3) |
| u01.json | `phrases[6].pr` | — → آچِکچاسِ بانا پِک ایناندِرِجِ گِلمِدی. | missing phrase `pr` (task 3) |
| u01.json | `phrases[7].pr` | — → بو کُنودا نِه دوشونویُرسون؟ | missing phrase `pr` (task 3) |
| u01.json | `words[12] (w13)` | sosyal medya → paylaşım (پایلاشِم) = پست (در شبکه‌های اجتماعی)؛ اشتراک‌گذاری; ex: Bu paylaşım bir günde bir milyon kez görüntülendi. | Headword already taught in B1 u07 (*sosyal medya*). New B2 word; used in this unit's dialogue (*Paylaşımımı hemen sileyim*). |
| u02.json | `phrases[0].pr` | — → بانا کالِرسا… | missing phrase `pr` (task 3) |
| u02.json | `phrases[1].pr` | — → بو کُنودا سانا کاتِلِیُروم. | missing phrase `pr` (task 3) |
| u02.json | `phrases[2].pr` | — → پِک اِمین دِییلیم، چونکو… | missing phrase `pr` (task 3) |
| u02.json | `phrases[3].pr` | — → بیر یاندان هاکلِسِن، اُتِه یاندان… | missing phrase `pr` (task 3) |
| u02.json | `phrases[4].pr` | — → سُرون شو کی… | missing phrase `pr` (task 3) |
| u02.json | `phrases[5].pr` | — → هِرکِس اوزِرینِه دوشِنی یاپمالِ. | missing phrase `pr` (task 3) |
| u02.json | `phrases[6].pr` | — → ایش ایشتِن گِچمِدِن اُنلِم آلمالِیِز. | missing phrase `pr` (task 3) |
| u02.json | `phrases[7]` | Damlaya damlaya göl olur. → Gelecek nesillere yaşanabilir bir dünya bırakmalıyız. / باید دنیایی قابل‌زندگی برای نسل‌های آینده باقی بگذاریم. / pr گِلِجِک نِسیلِّرِه یاشانابیلیر بیر دونیا بِراکمالِیِز. | Duplicate inside B2: *Damlaya damlaya göl olur* is also u10 p01, where it is the core proverb used in the u10 dialogue, reading and grammar explanation. Replaced the u02 entry with a new environment phrase (the u02 dialogue line still quotes the proverb). |
| u02.json | `grammar[0].exercises[7].alts` | — → ["Hem üniversitede okuyor hem de çalışıyor."] | Order item: another equally natural order with the same tiles exists; added to `alts` |
| u03.json | `phrases[0].pr` | — → سِناوِن ناسِل گِچتی؟ | missing phrase `pr` (task 3) |
| u03.json | `phrases[1].pr` | — → اِلیمدِن گِلِنی یاپتِم. | missing phrase `pr` (task 3) |
| u03.json | `phrases[2].pr` | — → کُلای گِلسین! | missing phrase `pr` (task 3) |
| u03.json | `phrases[3]` | Bol şans! → Sınavı kıl payı geçtim. / امتحان را به‌زور و لب‌مرز قبول شدم. / pr سِناوِ کِل پایِ گِچتیم. | *Bol şans!* is already a B1 phrase (B1 u10) and A1-level; replaced with a B2 idiom on the exam theme (the dialogue still uses *Bol şans!*). |
| u03.json | `phrases[4].pr` | — → اُنِملی اُلان آنلاماک، اِزبِرلِمِک دِییل. | missing phrase `pr` (task 3) |
| u03.json | `phrases[5].pr` | — → کافام چُک کارِشِک. | missing phrase `pr` (task 3) |
| u03.json | `phrases[6].pr` | — → بو ایشین پوف نُکتاسِ نِه؟ | missing phrase `pr` (task 3) |
| u03.json | `phrases[7].pr` | — → نِه کادار چُک چالِشِرسان اُ کادار باشارِلِ اُلورسون. | missing phrase `pr` (task 3) |
| u03.json | `words[0].pr` | اِئیتیم → اِییتیم | Consistency: everywhere else in the course e-ğ-i is written ِیی (değil دِییل, ekmeği اِکمِیی, yemeğine یِمِیینِه) |
| u03.json | `words[8].pr` | اوزاکتان اِئیتیم → اوزاکتان اِییتیم | Same as w01 |
| u04.json | `phrases[0].pr` | — → آی سُنونو زُر گِتیریُروز. | missing phrase `pr` (task 3) |
| u04.json | `phrases[1].pr` | — → فیاتلار اوچتو! | missing phrase `pr` (task 3) |
| u04.json | `phrases[2].pr` | — → کِمِرلِری سِکمامِز لازِم. | missing phrase `pr` (task 3) |
| u04.json | `phrases[3].pr` | — → ریسک آلمادان کازانچ اُلماز. | missing phrase `pr` (task 3) |
| u04.json | `phrases[4].pr` | — → بو ایش بانا پِک مانتِکلِ گِلمیُر. | missing phrase `pr` (task 3) |
| u04.json | `phrases[5].pr` | — → بیر دوشونِییم، سیزِه دُنِریم. | missing phrase `pr` (task 3) |
| u04.json | `phrases[6].pr` | — → هِسابِنِ کیتابِنِ ای‌یی یاپماک لازِم. | missing phrase `pr` (task 3) |
| u04.json | `phrases[7].pr` | — → هایِرلِ اُلسون! | missing phrase `pr` (task 3) |
| u04.json | `words[5] (w06)` | maaş → asgari ücret (آسگاری اوجرِت) = حداقل دستمزد; ex: Asgari ücretle geçinmek her geçen gün zorlaşıyor. | *maaş* already taught in B1 u03. New B2 economy collocation. |
| u04.json | `words[8] (w09)` | şirket → kredi (کْرِدی) = وام (بانکی); ex: Ev almak için bankadan kredi çektik. | *şirket* already taught in B1 u03. New word; used in the u04 dialogue and reading (*kredi çekmek*). (*kredi kartı* in B1 is a different headword.) |
| u04.json | `grammar[0].exercises[6].alts` | — → ["Gelecek ay fiyatlar yine artabilir."] | Order item: another equally natural order with the same tiles exists; added to `alts` |
| u04.json | `grammar[0].exercises[7].alts` | — → ["Bu yıl şirket zarar etmiş olmalı."] | Order item: another equally natural order with the same tiles exists; added to `alts` |
| u04.json | `words[14].ex.t` | Türkiye'nin ihracatında otomotiv sektörü ilk sırada geliyor. → Türkiye'nin ihracatında otomotiv sektörü ilk sıralarda yer alıyor. | Factual claim may change over time (rank of the automotive sector in exports varies by year/measure); hedged |
| u04.json | `words[14].ex.s` | در صادرات ترکیه، صنعت خودروسازی رتبه‌ی اول را دارد. → در صادرات ترکیه، صنعت خودروسازی جزو بخش‌های پیشتاز است. | Matches the new `t` |
| u05.json | `phrases[0].pr` | — → گِچمیش اُلسون! | missing phrase `pr` (task 3) |
| u05.json | `phrases[1].pr` | — → راندِوو آلماک ایستیُروم. | missing phrase `pr` (task 3) |
| u05.json | `phrases[2]` | Şikâyetiniz ne? → Hangi bölüme gitmem gerekiyor? / باید به کدام بخش بروم؟ / pr هانگی بُلومِه گیتمِم گِرِکیُر؟ | *Şikâyetiniz ne?* is the same phrase as B1 u04; replaced with a new hospital phrase. |
| u05.json | `phrases[3].pr` | — → اوچ گوندور باشِم آارِیُر. | missing phrase `pr` (task 3) |
| u05.json | `phrases[4].pr` | — → ایلاجِ گوندِه ایکی کِز، تُک کارنِنا آلِن. | missing phrase `pr` (task 3) |
| u05.json | `phrases[5].pr` | — → ساالِک هِر شِیدِن اُنِملی. | missing phrase `pr` (task 3) |
| u05.json | `phrases[6].pr` | — → کِشکِه داها اِرکِن گِلسِیدینیز. | missing phrase `pr` (task 3) |
| u05.json | `phrases[7].pr` | — → آجیل بیر دوروم وار! | missing phrase `pr` (task 3) |
| u05.json | `words[5] (w06)` | randevu → katkı payı (کاتکِ پایِ) = سهم پرداختیِ بیمار (فرانشیز); ex: Bazı ilaçlar için eczanede küçük bir katkı payı ödüyoruz. | *randevu* already taught in B1 u04. New B2 health-system word. |
| u05.json | `words[6] (w07)` | reçete → nöbetçi eczane (نُبِتچی اِجزانِه) = داروخانه‌ی کشیک (شبانه‌روزی); ex: Gece yarısı ilaç lazım olunca nöbetçi eczaneye gittik. | *reçete* already taught in B1 u04. New word (*eczane* alone is A1; the collocation is new). |
| u06.json | `phrases[0]` | Bu konuda ne düşünüyorsun? → Artık kendimi buraya ait hissediyorum. / دیگر احساس می‌کنم به این‌جا تعلق دارم. / pr آرتِک کِندیمی بورایا آئیت هیسِّدیُروم. | Duplicate inside B2: identical to u01 p08. New migration phrase (fits u06 reading text[9] and dialogue). |
| u06.json | `phrases[1].pr` | — → بِنجِه بو کُنودا هاکلِسِن. | missing phrase `pr` (task 3) |
| u06.json | `phrases[2].pr` | — → بیر یاندان زُر، اُتِه یاندان چُک اُرِتیجی. | missing phrase `pr` (task 3) |
| u06.json | `phrases[3].pr` | — → آچِکچاسِ بِن پِک اِمین دِییلیم. | missing phrase `pr` (task 3) |
| u06.json | `phrases[4].pr` | — → شونو دا اونوتماماک لازِم… | missing phrase `pr` (task 3) |
| u06.json | `phrases[5].pr` | — → کُلای دِییل آما اینسان زامانلا آلِشِیُر. | missing phrase `pr` (task 3) |
| u06.json | `phrases[6].pr` | — → مِملِکِتیمی چُک اُزلویُروم. | missing phrase `pr` (task 3) |
| u06.json | `phrases[7].pr` | — → هِر شِیِه راامِن بورادا موتلویوم. | missing phrase `pr` (task 3) |
| u06.json | `words[3] (w04)` | yurt dışı → gurbet (گوربِت) = غربت؛ دوری از وطن; ex: Gurbette geçen yıllar ona çok şey öğretti. | *yurt dışı* already taught in B1 u10. New B2 migration word. |
| u06.json | `grammar[1].exercises[7].alts` | — → ["Burada her şeye rağmen çok mutluyum."] | Order item: another equally natural order with the same tiles exists; added to `alts` |
| u06.json | `dialogue.lines[1].t` | Üç yıl oldu. Gelmeye karar vermek benim için hiç kolay olmadı. → İki yıl oldu. Gelmeye karar vermek benim için hiç kolay olmadı. | Cross-unit inconsistency: in u05 reading Mina says *iki yıldır … İstanbul'da yaşıyorum* |
| u06.json | `dialogue.lines[1].s` | سه سال شده. تصمیم گرفتن برای آمدن اصلاً برایم آسان نبود. → دو سال شده. تصمیم گرفتن برای آمدن اصلاً برایم آسان نبود. | Matches the new `t` |
| u06.json | `dialogue.lines[3].t` | Hayır, iş bulmam kolay oldu ama ailemden ayrılmak çok zordu. → Hayır, iş bulmam kolay oldu ama annemle babamdan ayrılmak çok zordu. | Cross-unit inconsistency: in u05 Mina lives in Istanbul *ailemle birlikte* (with her son Amir); here she means the family left behind, so this now says her parents |
| u06.json | `dialogue.lines[3].s` | نه، کار پیدا کردنم آسان بود، اما جدا شدن از خانواده‌ام خیلی سخت بود. → نه، کار پیدا کردنم آسان بود، اما جدا شدن از پدر و مادرم خیلی سخت بود. | Matches the new `t` |
| u07.json | `phrases[0].pr` | — → آراشتِرمالارا گُرِه… | missing phrase `pr` (task 3) |
| u07.json | `phrases[1].pr` | — → بیلیم اینسانلارِنِن بِلیرتّیینِه گُرِه… | missing phrase `pr` (task 3) |
| u07.json | `phrases[2].pr` | — → بو کُنودا کِسین بیر شِی سُیلِمِک ایچین هِنوز اِرکِن. | missing phrase `pr` (task 3) |
| u07.json | `phrases[3].pr` | — → تِکنُلُژینین هِم فایدالارِ هِم دِه ریسکلِری وار. | missing phrase `pr` (task 3) |
| u07.json | `phrases[4].pr` | — → بِنجِه بو بیراز آبارتِلِیُر. | missing phrase `pr` (task 3) |
| u07.json | `phrases[5].pr` | — → گِلِجِکتِه نِه اُلاجائِنِ کیمسِه بیلِمِز. | missing phrase `pr` (task 3) |
| u07.json | `phrases[6].pr` | — → بو چُک ایلگینچ بیر گِلیشمِه! | missing phrase `pr` (task 3) |
| u07.json | `phrases[7].pr` | — → کِساجاسِ… | missing phrase `pr` (task 3) |
| u08.json | `phrases[0].pr` | — → بو کیتابِ هِرکِسِه تاوسیِه اِدِریم. | missing phrase `pr` (task 3) |
| u08.json | `phrases[1].pr` | — → بِنی اِن چُک اِتکیلِیِن ساهنِه… | missing phrase `pr` (task 3) |
| u08.json | `phrases[2].pr` | — → آچِکچاسِ بِکلِدییم کادار ای‌یی دِییلدی. | missing phrase `pr` (task 3) |
| u08.json | `phrases[3].pr` | — → کُنوسو بیراز آئِر آما چُک اِتکیلِییجی. | missing phrase `pr` (task 3) |
| u08.json | `phrases[4].pr` | — → ساکِن سُنونو سُیلِمِه! | missing phrase `pr` (task 3) |
| u08.json | `phrases[5].pr` | — → بیر سُلوکتا اُکودوم. | missing phrase `pr` (task 3) |
| u08.json | `phrases[6].pr` | — → بِنجِه اُیونجولوک هاریکایدِ. | missing phrase `pr` (task 3) |
| u08.json | `phrases[7].pr` | — → زِوکلِر وِه رِنکلِر تارتِشِلماز. | missing phrase `pr` (task 3) |
| u08.json | `words[7] (w08)` | sergi → heykel (هِیکِل) = مجسمه; ex: Müzenin bahçesinde bronz heykeller sergileniyor. | *sergi* already taught in A2 u10. New art word; the ex reuses *sergilemek*. |
| u08.json | `grammar[0].exercises[7].alts` | — → ["Çocuklar gülerek bahçede oynuyordu.", "Bahçede çocuklar gülerek oynuyordu."] | Order item: another equally natural order with the same tiles exists; added to `alts` |
| u08.json | `grammar[0].table[2]` | ["-casına / -cesine", "yaşamışçasına, bilircesine", "kaçarcasına, delicesine"] → ["-casına / -cesine", "yaşamışçasına, kaçarcasına", "bilircesine, delicesine"] | Column 2 = back-vowel forms, column 3 = front-vowel forms in the other rows; *bilircesine* and *kaçarcasına* were in the wrong columns |
| u08.json | `reading.text[0].t` | Mevlânâ Celâleddin Rûmî, 1207 yılında bugünkü Afganistan'daki Belh şehrinde doğdu. → Genel kabule göre Mevlânâ Celâleddin Rûmî, 1207 yılında Belh şehrinde doğdu. | Factual hedge: 1207 and Balkh are the traditional dates/places (several historians place his birth in Vakhsh, today's Tajikistan), so 'bugünkü Afganistan'daki' was not certain. Question 0 (*Belh'te*) is still answerable. |
| u08.json | `reading.text[0].s` | مولانا جلال‌الدین رومی در سال ۱۲۰۷ میلادی در شهر بلخ، در افغانستانِ امروزی، به دنیا آمد. → بنا بر روایت مشهور، مولانا جلال‌الدین رومی در سال ۱۲۰۷ میلادی در شهر بلخ به دنیا آمد. | Matches the new `t` |
| u09.json | `phrases[0].pr` | — → سیزِه ناسِل یاردِمجِ اُلابیلیریم؟ | missing phrase `pr` (task 3) |
| u09.json | `phrases[1].pr` | — → راهاتسِز اِتّییم ایچین کوسورا باکمایِن. | missing phrase `pr` (task 3) |
| u09.json | `phrases[2].pr` | — → مومکونسِه یارِن گُروشِبیلیر مییز؟ | missing phrase `pr` (task 3) |
| u09.json | `phrases[3].pr` | — → ایلگینیز ایچین تِشِکّور اِدِریم. | missing phrase `pr` (task 3) |
| u09.json | `phrases[4].pr` | — → یانِتِنِزِ بِکلیُروم. | missing phrase `pr` (task 3) |
| u09.json | `phrases[5].pr` | — → بیلگیلِرینیزِه سونارِم. | missing phrase `pr` (task 3) |
| u09.json | `phrases[6].pr` | — → گِرِیینی آرز اِدِریم. | missing phrase `pr` (task 3) |
| u09.json | `phrases[7].pr` | — → گُروشمِک اوزِرِه! | missing phrase `pr` (task 3) |
| u09.json | `grammar[0].exercises[6].alts` | — → ["Biraz bana yardım eder misiniz?"] | Order item: another equally natural order with the same tiles exists; added to `alts` |
| u09.json | `grammar[1].exercises[6].alts` | — → ["Sizi tam aramak üzereydim."] | Order item: another equally natural order with the same tiles exists; added to `alts` |
| u10.json | `phrases[0].pr` | — → داملایا داملایا گُل اُلور. | missing phrase `pr` (task 3) |
| u10.json | `phrases[1].pr` | — → آیائِنِ یُرگانِنا گُرِه اوزات. | missing phrase `pr` (task 3) |
| u10.json | `phrases[2].pr` | — → بیر اِلین نِسی وار، ایکی اِلین سِسی وار. | missing phrase `pr` (task 3) |
| u10.json | `phrases[3].pr` | — → سابرِدِن دِرویش مورادِنا اِرمیش. | missing phrase `pr` (task 3) |
| u10.json | `phrases[4].pr` | — → آک آکچِه کارا گون ایچیندیر. | missing phrase `pr` (task 3) |
| u10.json | `phrases[5].pr` | — → اوزوم اوزومِه باکا باکا کارارِر. | missing phrase `pr` (task 3) |
| u10.json | `phrases[6].pr` | — → دُست کارا گوندِه بِلّی اُلور. | missing phrase `pr` (task 3) |
| u10.json | `phrases[7].pr` | — → گولو سِوِن دیکِنینِه کاتلانِر. | missing phrase `pr` (task 3) |
| u10.json | `grammar[1].exercises[6].alts` | — → ["Bayramda bize bütün eş dost geldi.", "Bütün eş dost bayramda bize geldi."] | Order item: another equally natural order with the same tiles exists; added to `alts` |
| u10.json | `words[11].pr` | کولاانا کوپِه اُلماک → کولائِنا کوپِه اُلماک | Consistency: a-ğ-ı is written ائِ everywhere else in the course (kulağım کولائِم, kaynağı کاینائِ, bardağı باردائِ) |
**Totals (107 changes):**
- Phrase `pr` added: 76. The other 4 of the 80 audited phrases were replaced and got their `pr` with the replacement.
- Phrases replaced: 4. Two were duplicates inside B2; two repeated B1 phrases.
- Headwords replaced: 7. All were taught in a lower level. Each kept its id and got a new `t`, `s`, `pr`, emoji and `ex`. None of the new words appears anywhere else in tr-fa.
- Word `pr` made consistent: 3.
- Factual hedges: 2 items (4 field edits).
- Cross-unit consistency: 2 dialogue lines (4 field edits).
- Grammar table: 1.
- Order `alts` added: 8 items.

## Noticed but not changed
- **Repeated across levels, kept on purpose.**
  - *Kolay gelsin!* (u03 p03) is also in A2 u03 and B1 u03/u09.
  - *Geçmiş olsun!* (u05 p01) is also in A2 u05 and B1 u04.
  - Both are core courtesy formulas, and the unit dialogues use them (u03 line 0, u05 line 8). I replaced the two phrases that were plain repeats with nothing unit-specific about them (*Bol şans!*, *Şikâyetiniz ne?*).
- **Near-duplicates between u02 and u06.** These phrases are similar in function but differently worded, so I kept them:
  - u02 p03 *Pek emin değilim, çünkü…* / u06 p04 *Açıkçası ben pek emin değilim.*
  - u02 p04 *Bir yandan haklısın, öte yandan…* / u06 p03 *Bir yandan zor, öte yandan çok öğretici.*
  - u02 p02 / u06 p02 (agreeing).
- **u02 *Damlaya damlaya göl olur*** is still quoted in the u02 dialogue (line 8). That is fine: it is now taught as a phrase only in u10.
- **Possibly one person or two?** Zeynep and Amir: in u03 Amir calls Zeynep *hocam* and uses *siz*. In u07 the same pair use *sen* (*sence*, *haklısın*) and say *bizim üniversitede*. If they are meant to be the same people, the register is inconsistent. The text does not say so, and the names recur elsewhere (u07 reading has a different *Prof. Dr. Zeynep Aydın*), so I left it.
- **Amir** appears as Mina's son (u05, Istanbul), Amir Rezaei (u09, in Ankara for six months, works) and a master's applicant (u03). Nothing says these are the same person, so there is no hard contradiction.
- **u02 g02 exercises[3]/[5]** also accept the misspelling *oysa ki*. This is lenient for learners and harmless, so I kept it.
- **u03 reading text[0].s** translates «Hocam» as «خانم» (already noted in pass 2). This is fine.
- **u06 goals** write «این‌که» while the rest of the level writes «اینکه». Both spellings are valid.
- **Order items with marked but possible variants** (for example u01 g02 ex7 *Mehmet duyduğuma göre…*): I did not add these to `alts`, because they are focus-marked rather than equally natural.

## TTS-risky texts (for central handling)
The list from pass 2 still applies. In brief:
- slashes in grammar titles (u01 g01, u02 g01/g02, u03 g02, u04 g01, u06 g02)
- suffix-only, hyphen and "+" strings in titles and tables (u02–u09)
- decimals (u01 g02 ex0 «4,5», u03 w05 ex «3,0»)
- numerals with suffixes (u07 «1961'de», «1950'lerde», «16. yüzyılda»; u08 «1207», «1244'te»; u04 «29 yaşındaki»; u09 «1 Eylül'de»)
- abbreviations (u07 «Prof. Dr.», u09 «B2», «B1»)
- label prefixes with a colon (u07 g02 «Haber: …», «Rapor: …»; u09 reading «Konu: …»)
- ellipses in phrases

The phrase `pr` strings keep the ellipsis «…» as it appears in `t`.
