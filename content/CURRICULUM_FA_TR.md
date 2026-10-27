# Zabanyar — Persian for Turkish speakers (course `fa-tr`), A1 (total beginner)

Target language: **Persian (Iranian Farsi)**, written in Persian script. Support language: **Turkish** (all explanations,
translations, goals and UI in Turkish). Learners: Turkish-speaking relatives/friends of an Iranian family; adults; total
beginners who do not know the Persian alphabet.

Same JSON schema as the other courses (`content/SCHEMA.md`) with these course-specific rules:
- Files: `content/fa-tr/A1/u00.json` … `u10.json`, `"level": "A1"`.
- `t` = Persian in Persian script, standard written/polite spoken Tehran Persian, correct spelling with proper ZWNJ (U+200C)
  half-spaces (می‌خواهم، کتاب‌ها، خانه‌ام), Persian ی and ک (never Arabic ي ك). Add short-vowel diacritics (fatha/kasra/damma)
  ONLY in u00 example words if helpful; normally write without them.
- `pr` = **Latin transliteration written for Turkish readers** on EVERY letter, word, phrase AND every `ex`, dialogue line,
  sentence, reading sentence and exercise (beginners cannot read the script yet). Use Turkish spelling conventions:
  ş = ش, ç = چ, c = ج, j = ژ, h = ه/ح, x = خ (explain in u00: like German "ch"/Arabic kh), ğ̄ → write "ğ" for غ/ق,
  â (long a, like Turkish "â"/"a" in "kâr") for آ/ا, a for short a (fatha), e for kasra, o for damma, i (long), u (long),
  ' for ع/ء where audible. Ezafe written as "-e"/"-ye" (ketâb-e man, xâne-ye man). Example: سلام → "salâm",
  خوب هستم → "xub hastam", می‌خواهم → "mixâham". Be consistent across all units.
- For `dialogue.lines`, `reading.text`, `sentences`, `grammar.examples`, `phrases`, `words[].ex`: add a `pr` field with the transliteration.
- For exercises, add `pr` with the transliteration of the full correct sentence.
- `s` = natural Turkish translation/explanation (correct Turkish orthography with ç ğ ı İ ö ş ü).
- Grammar `explain` in Turkish: warm, simple; point out what is similar to Turkish (many shared words: kitap/کتاب, pencere/پنجره,
  çay/چای, şehir/شهر, hafta/هفته, dost/دوست, hasta? (careful: Persian «خسته» = yorgun, Turkish "hasta" = sick — false friend!).
  Mention that Persian has NO grammatical gender and NO vowel harmony, verb at the end like Turkish (SOV), but uses
  prepositions (not suffixes) and the ezafe.
- Exercises: `choice` (exactly one correct option, options in Persian script), `type` (answers in Persian script; learners
  get an on-screen Persian keyboard, so keep answers SHORT: 1–2 words), `order` (3–6 words).
- Names: Persian names (Sara, Ali, Maryam, Reza, Mina, Amir) and Turkish names (Ayşe, Mehmet, Elif, Can, Zeynep, Emre).

| Unit | Theme (Turkish title) | Grammar focus |
|---|---|---|
| u00 | Fars alfabesi ve sesler | 32 letters (t like "ب", pr = letter name + sound, ex = simple picturable word with emoji); `sounds`: right-to-left writing, letters that don't connect to the left (ا د ذ ر ز ژ و), short vowels not written, آ vs ا, the 4 letters for "z" (ز ذ ض ظ) and 3 for "s" (س ص ث), خ, ق/غ. 8–10 easy words |
| u01 | Merhaba! Selamlaşma ve tanışma | personal pronouns (من، تو، او، ما، شما، آن‌ها); "to be": هستم/هستی/است … and the short endings (-am, -i, -e/ast); اسم من … است; اهل کجا هستید؟ |
| u02 | Sayılar 0–20 ve yaş | numbers (also Persian digits ۰–۹!); چند سال دارید؟ … سال دارم; plural -hâ / -ân |
| u03 | Ailem | ezafe (-e) for possession and adjectives (مادرِ من، خانه‌ی بزرگ); possessive endings (-am, -at, -aš: مادرم) ; داشتن (dâram, dâri, dârad) |
| u04 | Yiyecek ve içecek | می‌خواهم / نمی‌خواهم; دوست دارم / دوست ندارم; یک … لطفاً; را (direct object marker) intro |
| u05 | Evim | هست / نیست ("var/yok"); prepositions در، روی، زیرِ، کنارِ; کجاست؟ |
| u06 | Günlük hayat ve saat | present tense mi- + stem + ending (می‌روم، می‌خورم، می‌خوابم); ساعت چند است؟ ساعت هفت است |
| u07 | Şehirde | imperative be- (برو، بروید، بپیچید); کجاست؟ ; به … می‌روم; سمتِ راست/چپ، مستقیم |
| u08 | Alışveriş, renkler | این / آن; چند است؟ / قیمتش چند است؟ (tomans); colours after the noun with ezafe (پیراهنِ قرمز) |
| u09 | Hava, aylar, mevsimler | هوا آفتابی است / باران می‌آید; Persian (solar) months فروردین … اسفند and Nowruz; seasons |
| u10 | Boş zaman ve hobiler | می‌توانم / نمی‌توانم + subjunctive (می‌توانم شنا کنم); دوست دارم + subjunctive/infinitive; yes/no questions with آیا and intonation |
