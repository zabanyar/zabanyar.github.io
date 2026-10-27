# Review pass 3: tr-fa A2 (u01–u10)

I read every item in all 10 units: words and their examples, phrases, dialogues, goals, grammar explanations, tables, examples and exercises, alts, readings and questions, and sentences.

For the pronunciation guides, I also wrote a rule-based Turkish-to-Persian-script transliterator that follows the conventions in CURRICULUM_NEW_LEVELS.md and the A2 decisions recorded in tr-fa-A2-new.md. I compared every `pr` with its `t` word by word.
- No word is missing, extra or out of step anywhere in the level.
- Every difference the tool found is a deliberate convention: iyi «ای‌یی», tabii «تابیی», ğ handling (öğle «اُلِه», doğra «دُرا»), -iyor «یُر», shadda order, and Persian names in Persian spelling.

`tools/validate.py` prints OK for all 10 files.

`tools/audit.py` reports 1 remaining A2 finding, and it is a false alarm. u05 `grammar[1].exercises[7]` has the alt «Başım iki gündür ağrıyor.» This alt uses exactly the same words as the sentence. The audit lowercases with Python's `str.lower()`, which turns «İki» into "i̇ki" (with a combining dot), so the word no longer matches «iki». The app itself compares with `toLocaleLowerCase("tr")`, so it accepts the alt.

**Headwords taught twice inside A2:** none. The audit found none and my own check found none, including phrases. So no word replacements were needed.

**"Neda":** I found 1 occurrence and fixed it (see below).

## Changes

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u04 | `reading.text[1].s` | «اسمِ همسرم **نداست**؛ …» → «اسمِ همسرم **میناست**؛ …» | Leftover "Neda". The Turkish `t` says *Eşimin adı Mina*, and the same reading uses Mina again in text[2]. |
| u04 | `reading.questions[4].options` | ["Dayının evinde", "Anneannenin evinde", "Ali'nin evinde"] → ["Dayısının evinde", "Anneannesinin evinde", "Ali'nin evinde"] | The question asks about Ali's family, so the options need the third-person possessive, as in question 2 (*Halasının ikiz kızları*). *Dayının / anneannenin* reads as "your uncle's / your grandmother's" or as a generic "the uncle's". The answer index (1) is unchanged. |
| u06 | `dialogue.lines[2].t` / `.pr` | "Bu biberler **acılı** mı?" / «… آجِلِ مِ؟» → "Bu biberler **acı** mı?" / «… آجِ مِ؟» | For peppers themselves, a native speaker asks *acı mı?* (*acı biber* / *tatlı biber*). *Acılı* means "containing hot pepper" and is used for dishes (*acılı ezme*, *acılı kebap*). The `s` «تند هستند؟» still fits. |
| u06 | `dialogue.lines[3].t` / `.pr` | "… **Acılılar** şurada, solda." / «آجِلِلار …» → "… **Acılar** şurada, solda." / «آجِلار …» | Same reason, and *acılılar* sounds odd. The line still practises *-siz* (*bunlar acısız*), and so does g01 ex2. |
| u09 | `reading.text[2].t` / `.s` / `.pr` | "Uzungöl … **büyük** bir göl …" / «یک دریاچه‌ی بزرگ» / «بویوک بیر گُل» → "**sakin** bir göl" / «یک دریاچه‌ی آرام» / «ساکین بیر گُل» | Factual claim. Uzungöl is a small lake, about 1 km long (the name means "long lake"). The previous pass noticed this but did not change it. "A calm lake" is true and stable. *sakin* is taught in u08. |
| u02 | `dialogue.speakers.B.name` | Zeynep → Ayşe | Job inconsistency across units. Zeynep is the doctor in u05 («Zeynep Hanım»), but here she was the ticket clerk. The clerk is never named in the lines, so only the speaker name changes (the voice stays `f`). Ayşe has no job elsewhere in A2. |
| u05 | `grammar[0].exercises[5].answer` ("Neden ___? Saat on iki!", s «چرا نمی‌خوابی؟») | ["uyumuyorsun"] → ["uyumuyorsun", "yatmıyorsun"] | *Neden yatmıyorsun?* ("why aren't you going to bed / sleeping?") is just as natural here. u01 g01 ex5 already accepts both *yattım* and *uyudum* for «خوابیدم». |
| u01 | `grammar[0].exercises[7].alts` | + "Dün bize kız kardeşim geldi." | A natural order with the subject in focus position, made of the same tiles. |
| u03 | `sentences[5].alts` | + "Yemeğe Ali'yi ve Ayşe'yi çağırdım.", "Yemeğe Ayşe'yi ve Ali'yi çağırdım." | Natural orders with the same words. Sentences are used as order tasks when they have 8 words or fewer. |
| u06 | `sentences[1].alts` (new) | + "Annem hep çayını şekersiz içiyor." | Natural order with the same words. |
| u07 | `sentences[3].alts` (new) | + "Sekizi çeyrek geçe işe başlıyorum." | Natural order with the same words. |
| u07 | `sentences[5].alts` (new) | + "İş arkadaşlarımla yarın toplantı yapacağız." | Natural order with the same words. |
| u08 | `sentences[7].alts` (new) | + "Şehir merkezinde dün akşam kaybolduk." | Natural order with the same words. |
| u09 | `sentences[0].alts` (new) | + "Hava dün akşam çok serindi." | Natural order with the same words. Matches the alt already used in u09 g01 ex7 (*Hava dün çok soğuktu.*). |
| u09 | `sentences[6].alts` (new) | + "Arkadaşlarımla hafta sonu göle gittik." | Natural order with the same words. |
| u10 | `sentences[1].alts` (new) | + "Maça yarın gelecek misin?" | Natural order with the same words. Matches u10 g01 ex6 (*Konsere yarın gelecek misin?*). |

**Count by category:**

| Category | Changes |
|---|---|
| `pr` | 3, all together with their `t` changes (u06 ×2, u09) |
| Target text | 3 (u06 dialogue ×2, u09 reading) |
| Translation | 2 (u04 Neda → Mina, u09 reading) |
| Grammar explanation | 0 |
| Exercises / questions | 2 (u04 reading options, u05 type answer) |
| `alts` | 9 objects (1 grammar exercise, 8 sentences) |
| Consistency (speaker name) | 1 (u02) |
| Emoji | 0 |
| Headword replacements | 0 (no duplicates inside the level) |

## Noticed but not changed

- **Recurring names with different lives.** The allowed name list is short, so the same name is used for different people in separate scenes. I only fixed the one clear job clash (Zeynep, u02).
  - **Mehmet** is a teacher («Mehmet Bey», u05 reading) and a market seller (u06 dialogue).
    - I could not fix this with the allowed names without causing a new clash: Emre is a cook (u07) and Can is a student (u04).
  - **Amir** spends the weekend in Belgrad Forest and goes to work in Istanbul on Monday (u01). In u02 his family travels from Tehran and goes back to Tehran.
  - **Emre** says «Benim ailem çok küçük … ben ve ablam» (u04). In u07 and u10 he has children.
  - **Mina** is Maryam's sister (u01) and Ali's wife (u04), while Maryam is Ali's cousin (u04).
  - None of these is wrong inside its own unit. They are standalone texts.
- **Choice items decided by the Persian `s`.** These were already noted in pass 2:
  - u08 g01 ex0 (karşısında / arkasında / önünde)
  - u08 g02 ex4 (İlk / Önce / Son — *Son sokaktan* is grammatical but contradicts «کوچه‌ی اول»)
  - u09 g02 ex1 (ailemle / ailem gibi)
  - The meaning in `s` is fixed, so only one option fits. I kept them.
- **Repeats in higher levels** (as reported in pass 2):
  - Words uçak, teyze, hala, kuzen, torun appear again in B1. The word sergi appears again in B2.
  - Phrases *Kolay gelsin*, *Geçmiş olsun*, *Kendimi iyi hissetmiyorum* and *İyi yolculuklar* appear again in B1/B2.
  - These are core A2 items, so the higher-level files should replace their copies.
- **u06 g01 table/explain «acı ← acılı (تند)»** is fine for dishes (*acılı yemek*), so I kept it after the dialogue fix.
- **u06 w15 «Markette poşet ücretli.»** True in Turkey since 2019 (plastic bags have a fee by regulation), and stable.
- **u06 reading «Pazardaki satıcılar genellikle kart kabul etmiyor.»** This refers to the narrator's own market (*-daki*) and is hedged with *genellikle*, so I kept it.
- **No apostrophe in u07 «Şehir Hastanesinde», u08 «Şehir Müzesine», u10 «Şehir Tiyatrosunda».** This is correct. TDK does not separate suffixes on names of institutions with an apostrophe.
- **«میْ» / «آنِّمیْ» / «دِدِمیْ» in u01.** The sukun is a validator workaround, as noted in pass 2. It does not mislead.

## Texts that may be hard for text-to-speech (TTS) in `t`

These are unchanged since pass 2:
- Grammar titles with hyphens, slashes, brackets or "+": u02 g01/g02, u03 g01, u04 g01, u06 g01/g02, u07 g01, u08 g02, u09 g01, u10 g02.
- u07 g02 table times in digits: 5.10, 5.15, 5.30, 5.45, 5.50, 12.30.
- Dash replies inside exercises: u02 g01 ex6 «— Tebriz'den.» and u04 g01 ex2 «— Benim.»
