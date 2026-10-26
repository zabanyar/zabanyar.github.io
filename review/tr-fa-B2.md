# Review: tr-fa B2 (u01–u10)

I checked every item in all 10 units: words with `pr`, `pl`, emoji and examples; phrases; dialogues; both grammar points (explanation, table, examples, every exercise); reading with its questions; and sentences. I also ran scripted scans of the Persian text (Arabic ي/ك, missing ZWNJ in می/ها/ترین/ای/ام…, double spaces, digits) and the Turkish text (proper-noun apostrophes, circumflexes, TTS-risky symbols). I checked the `pr` conventions against A1 u00 and B1 (ı=اِ, ö=اُ, ü=او, c=ج, ç=چ, ğ as a lengthened vowel such as ساالِک or آازِ, or as a glide between vowels such as سِئِنماجِ). All 151 word guides are consistent and match standard Istanbul pronunciation.

The level was already in very good shape. `python3 tools/validate.py content/tr-fa/B2/*.json` prints OK for all 10 files after the edits.

## Changes

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u02.json | `grammar[1].exercises[0].options[1]` | `oysa ki` → `oysaki` | TDK spelling: the conjunction *oysaki* is written as one word (like *halbuki*, *sanki*). The distractor taught a misspelling. |
| u02.json | `grammar[1].explain` | `**oysa (ki)** و **halbuki**` → `**oysa / oysaki** و **halbuki**` | Same: the old form suggested writing *oysa ki* as two words. |
| u05.json | `grammar[0].explain` | Added after the -saydı example: «در عمل **-saydı** برای حالِ غیرواقعی هم بسیار رایج است: Sigortam **olsaydı** bu kadar para ödemezdim. = اگر بیمه داشتم، این‌قدر پول نمی‌دادم.» | The explanation said -saydı is used only for the unreal *past*. The unit's own table and examples (Bilseydim söylerdim = اگر می‌دانستم…; Sigortam olsaydı… = اگر بیمه داشتم…) use it for present unreal conditions, so the rule contradicted the examples. |
| u09.json | `reading.text[2].t` | `Türkçe Öğretim Merkezi'ndeki` → `Türkçe Öğretim Merkezindeki` | TDK: suffixes on institution names are not separated with an apostrophe (cf. *Millî Eğitim Bakanlığı*, *Türkiye Burslarına* elsewhere in this level). The Persian `s` is unaffected. |

Totals: pr 0, target text 1, translation 0, grammar explanation 2, exercises 1, emoji 0.

## Noticed but not changed

- **Order exercises where another order is also correct.** The app accepts only the exact order.
  - u05 `grammar[0].exercises[7]` *Keşke daha önce doktora gitseydim.*: *Keşke doktora daha önce gitseydim* is just as natural.
  - u01 `grammar[1].exercises[6]` *Gazeteye göre benzine yine zam gelmiş.*: *…yine benzine zam gelmiş* is also natural, and the Persian `s` ("باز بنزین") actually points to that order.
  - Both are free adverb positions in Turkish. Fixing them would mean rewriting the sentence, so I left them for a central decision.
  - Other order items with swappable conjuncts (u02 *Hem çalışıyor hem de üniversitede okuyor*, u10 *Bayramda bütün eş dost bize geldi*) are steered clearly enough by the `s` word order.
- u03 `reading.text[0].s`: «Hocam» is translated «خانم», which assumes a female teacher-narrator. The text never gives the narrator's gender. It is not wrong, so I left it.
- u01 `words[10]` *yayınlamak* is glossed «منتشر کردن؛ پخش کردن». TDK separates *yayımlamak* (publish) from *yayınlamak* (broadcast), but everyday usage mixes them, and the example (Kanal, belgeseli… yayınladı) uses the broadcast sense correctly. u07 correctly uses *yayımlanmıştır* for a journal.
- u01 `grammar[0].exercises[4]` accepts only *gelmeyeceğini*. *gelemeyeceğini* would also be grammatical, but the Persian «نمی‌آید» asks for the plain negative, so it is fine.
- u10 idiom emoji (👃 *burnu büyük*, 🔔 *etekleri zil çalmak*) picture the literal words rather than the meaning. That is acceptable for idioms, so I kept them.
- u06 goal uses «این‌که» while the rest of the level uses «اینکه». Both spellings are valid, so this is a style difference only.

## TTS-risky texts (item 6, for central handling)

- **Slashes in `t` (grammar titles):** u01 g01 title «Geleceğini söyledi. / “Geliyorum” diye aradı.»; u02 g01 «hem… hem de / ne… ne de / ya… ya da»; u02 g02 «Ben ise… / Oysa… / Halbuki…»; u03 g02 «-dığı için / -dığı halde / -dığı sürece»; u04 g01 «Evde olmalı. / Gelebilir. / Yağmur yağacak gibi.»; u06 g02 «-masına rağmen / -mesine karşın».
- **Suffix-only / hyphen / slash / "+" strings in titles and tables:** u02 g02 table «-(y)sa / -(y)se»; u03 g02 table column 0; u04 g01 table column 0; u05 g01 + g02 table column 0; u06 g01 title «İsim-fiiller: -ma, -ış, -mak» and table header «-mak / -mek», «-ma / -me + iyelik», «-ış / -iş / -uş / -üş»; u07 g01 table header «ettirgen + edilgen»; u07 g02 title «-makta / -mekte ve resmî üslup»; u08 g01 title and table column 0 («-(y)arak / -(y)erek», «-(y)ıp / -(y)ip / -(y)up / -(y)üp», «-casına / -cesine»); u08 g02 title; u09 g01 title and table column 1 («-(ı)r mısınız?», «-manızı rica ederim», «-sam olur mu?»…); u09 g02 title «-mak üzere, -mak üzereyim».
- **Decimal numbers:** u01 g02 examples[0] «4,5 büyüklüğünde»; u03 words[4].ex «en az 3,0».
- **Years / numerals with suffixes:** u07 words[7].ex «1961'de»; u07 g01 examples[0] «1950'lerde»; u07 g01 exercises[3] «16. yüzyılda»; u08 reading text[0] «1207 yılında», text[4] «1244'te»; u04 reading text[3] «29 yaşındaki»; u09 reading text[3] «1 Eylül'de».
- **Abbreviations:** u07 reading text[5] and questions[2] «Prof. Dr.»; u09 reading text[2] «B2 kursuna», text[6] «B1 sertifikamı».
- **Label prefixes with a colon in exercises** (read aloud as part of the sentence): u07 g02 exercises[0]–[5] «Haber: …», «Rapor: …», «Basın açıklaması: …»; u09 reading text[0] «Konu: …».
- **Ellipsis "…"** in phrases and dialogue (u01 p02–p04, u01 dialogue[5], u02 p01–p05, u06 p05, u07 p01/p02/p08, u08 p02, u09 dialogue[4]). These are probably harmless; listed for completeness.
- **Quoted direct speech in the u01 g01 table** («“Yorgunum.”», «“Yardım edin!” diye bağırdı.», etc.).
