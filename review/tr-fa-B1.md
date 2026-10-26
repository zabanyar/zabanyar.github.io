# Review: tr-fa B1 (u01–u10)

Every item in u01–u10 was checked: words with `pr`, examples, phrases, dialogues, grammar explanations, tables, examples and exercises, reading texts and questions, and sentences.
The level was already in very good shape. All `pr` guides match the current `t` and follow the A1 conventions:

- ı → ـِ
- i → ی
- ö/o → ـُ
- ü/u → و
- c → ج, ç → چ
- ğ lengthens the vowel before it (ağrı → آارِ). Between o/u and a vowel it is written ئ (doğum → دُئوم). Between front vowels it is ی (düğün → دویون).
- oğ + consonant gives a short o, as in A1 öğrenci → اُرِنجی (fotoğraf → فُتُراف).

There are no Arabic ي/ك, no missing ZWNJ, and no wrong grammar rules or tables. Every reading answer and every `choice` answer index is correct.
`validate.py` prints OK for all 10 files.

## Changes

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u01 | grammar[0].exercises[3].answer | ["görmedim","izlemedim"] → + "seyretmedim" | "Ben o filmi seyretmedim" is equally correct. |
| u01 | grammar[1].exercises[5].answer | ["görmemiş"] → + "okumamış" | "Galiba mesajımı okumamış" is a natural, correct answer. |
| u02 | grammar[1].exercises[3].answer | ["varınca","gelince"] → + "dönünce", "gidince" | "Eve dönünce / gidince sana mesaj atacağım" are equally correct, and "dönünce" is the most natural. |
| u02 | words[11].emoji (binmek) | 🚌 → "" | A bus emoji suggests "otobüs", not "to get on/board". The partner word inmek also has no emoji. |
| u05 | words[10].s (rehber) | «راهنما (ی تور)» → «راهنما، راهنمای تور» | The broken ezafe in brackets was malformed Persian. |
| u07 | grammar[0].exercises[4].answer | ["pişirdi"] → + "yaptı" | "Annem pilavı yaptı, ben de salatayı yaptım" is correct Turkish. |
| u08 | words[15].emoji (komşu) | 🏘️ → "" | 🏘️ pictures houses or a neighbourhood (it is used for *mahalle* in u01), not a neighbour. It is now consistent with komşu in u01 (""). |
| u09 | grammar[0].exercises[4].answer | ["yapıldı","tamamlandı","açıldı"] → + "inşa edildi" | "Boğaziçi Köprüsü 1973'te inşa edildi" is the standard phrasing. |
| u10 | grammar[1].exercises[4].answer | ["geçersin","geçebilirsin"] → + "kazanırsın", "kazanabilirsin" | "sınavı kazanmak" (pass an exam) is very common. |

## Noticed but not changed

- **Turkish free word order in `order` items.** A few items have an equally natural alternative order:
  - u01 g01 ex7: *Dün akşam telefonu neden açmadın?*
  - u07 g01 ex6: *Dün benzinlikte arabamı yıkattım.*

  This is the same for dialogue, phrase and sentence items that the app turns into order drills. Turkish word order is flexible, so this cannot be fixed item by item without restructuring. It might be worth accepting alternative orders in the app, or showing the `s` as a guide.
- **u09 dialogue[7]:** "heft sin" is the Azeri/older form. In Tehran it is *haft sin* (هفت‌سین). Both spellings appear in Turkish texts, so I left it. If the family should hear the Tehran form, change it to "haft sin".
- **u01 w07 fotoğraf → فُتُراف:** the length of the o before ğ is not shown. This follows the established A1/B2 convention for oğ + consonant (öğrenci, öğretmen, öğretim), so I kept it.
- **komşu (u01 w06 and u08 w16) and taşınmak / emekli olmak:** the same words appear in two units. This is a curriculum overlap, not an error, and units were not restructured.
- **u09 w04 ikram etmek ☕ and u10 w15 belki 🤔:** these emoji are loosely related but not misleading, so I kept them.
- **u03 grammar[1].exercises[3]:** "zorunda ___" accepts only "kaldım". "zorunda idim" would also be possible, but it is old-fashioned, so I did not add it.
- **u06 g02 ex4:** "___ hangi renk daha güzel?" accepts only "Sizce", which matches «به نظر شما». "Sence" would also be grammatical, but the `s` asks for the polite/plural form.

## TTS-risky texts (item 6, not changed)

- **Grammar titles with "/", "-(y)…", "…" (if titles are voiced):**
  - u01 g01/g02
  - u02 g01 ("-(y)acak / -(y)ecek") and g02 ("Eve gelince… / Yolda yürürken…")
  - u03 g01/g02
  - u04 g01/g02
  - u05 g01/g02
  - u08 g01 ("-(y)an / -(y)en")
- **Em dash "—" in t:**
  - u02 g01 ex3 "… gelecek misin? — Hayır, ___."
  - u03 g01 ex5
  - u04 g01 ex4
  - u09 phrases[2] "Hoş geldiniz! — Hoş bulduk!"
- **Numbers / ordinals:**
  - u01 words[8].ex "2015'te"
  - u05 dialogue[10] "Odanız 305"
  - u09 g01 examples[3] "16. yüzyılda"
  - u09 g01 ex4 "1973'te"
- **Single letters / codes:**
  - u06 dialogue[6] "Bedenim M."
  - u06 dialogue[9] "Bu L beden;"
  - u10 reading[8] "C1 seviyesine"
- **Hyphenated:**
  - u06 phrases[7] "Fiyat-performans"
  - "e-posta" (u03, u07, u09; usually read fine)
- **Interjection:** u09 dialogue[4] "Ha ha, …"
- **Curly quotes inside t** (usually harmless):
  - u08 reading[2]
  - u09 dialogue[7], reading[3], reading[5]
  - u10 reading[7]
