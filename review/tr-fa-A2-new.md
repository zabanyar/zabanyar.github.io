# Review: tr-fa A2 (u01–u10), new level

I checked every item in all 10 files: words, examples, phrases, dialogues, grammar explanations, tables, examples, exercises, alts, readings, questions and sentences.
For the `pr` fields, I aligned every sentence guide with its `t` word by word (1,253 distinct word forms, no word missing or extra) and read every word-to-guide pair.
I also compared them with A1, B1, B2 and C1.
I also ran automatic checks: Arabic ي/ك, ZWNJ, `___` left in a `pr`, Latin letters in a `pr`, and duplicate headwords across all tr-fa levels.
`tools/validate.py` prints OK for all 10 files.

## `pr` conventions used in A2 (now consistent with A1)

- **ğ before a vowel** follows A1 everywhere:
  - a + a = آ: sağa «ساآ», sokağa «سُکاآ», ocağa «اُجاآ», mağaza «ماآزا»
  - a/ı + ı = ئِ: yağıyor «یائِیُر», bardağı «باردائِ», ışığı «اِشِئِ»
  - o/u + u = ئو: soğuk «سُئوک», koltuğum «کُلتوئوم»
  - e/i + i = یی: değil «دِییل», ekmeği «اِکمِیی», as in A1 sevdiğim «سِودییم»
  - ö + e is dropped: öğle «اُلِه», as in A1 öğretmen «اُرِتمِن»
  - Before a consonant, ğ after a = long اا: yağmur «یاامور», yağdı «یاادِ», as in A1 sağlık «ساالِک»
- **Word-final o** is now و, as in A1 banyo «بانیو»: kilo «کیلو», tiyatro «تیاترو».
  - Inside a word, o stays ُ: kilosu «کیلُسو», tiyatroda «تیاترُدا».
  - The pronoun o stays «اُ», as in A1.
- **Initial consonant clusters** have a sukun on the first consonant: tren «تْرِن», plaj «پْلاژ», plan «پْلان», proje «پْرُژِ», krem «کْرِم», trafik «تْرافیک», Trabzon «تْرابزُن».
  - A1 has no such word, so there was nothing to align with.
  - Both halves of A2 already used the sukun.
  - It stops Persian readers from adding a vowel ("teren", "pelaj"). It also matches the project-wide English rule (پْلیز).
- Other conventions are the same as A1:
  - -yor = «یُر»
  - final ı = ـِ
  - final e = ـِه
  - double consonants = ّ
  - iyi «ای‌یی»
  - aile «آئیلِه»
  - afiyet «آفیِت»
  - Persian names in Persian spelling (علی، رضا، مینا، مریم، سارا، امیر)
  - Turkish names by sound (آیشِه، مِهمِت، اِلیف، جان، زِینِپ، اِمرِه)

## Changes

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u01 | `reading.text[0].pr` | «مِرهابا، …» → «مِرحابا، …» | Consistency with A1, which always writes merhaba as «مِرحابا». Both letters sound the same in Persian, but one level should use one spelling. |
| u02 | `dialogue.lines[0].pr`, `reading.text[0].pr` | مِرهابا → مِرحابا | Same as above. |
| u03 | `reading.text[0].pr` | مِرهابا → مِرحابا | Same as above. |
| u04 | `reading.text[0].pr` | مِرهابا → مِرحابا | Same as above. |
| u05 | `reading.text[0].pr` | مِرهابا → مِرحابا | Same as above. |
| u06 | `reading.text[0].pr` | مِرهابا → مِرحابا | Same as above. |
| u07 | `dialogue.lines[0].pr`, `dialogue.lines[1].pr` | مِرهابا → مِرحابا | Same as above. |
| u08 | `reading.text[0].pr` | مِرهابا → مِرحابا | Same as above. |
| u09 | `dialogue.lines[0].pr`, `dialogue.lines[1].pr` | مِرهابا → مِرحابا | Same as above. |
| u10 | `reading.text[0].pr` | مِرهابا → مِرحابا | Same as above. |
| u08 | `dialogue.lines[3].pr` | «تابی. …» → «تابیی. …» | tabii is pronounced [tabiː]. The other 3 places in A2 write «تابیی»; this one dropped the second i. |
| u06 | `dialogue.lines[2].pr` | ایکی کیلُ → ایکی کیلو | Word-final o follows A1 (banyo «بانیو»). The two authors differed here. |
| u06 | `dialogue.lines[4].pr` | بیر کیلُ → بیر کیلو | Same as above. |
| u06 | `reading.text[4].pr` | کیلُ (×2) → کیلو | Same as above. |
| u10 | `words[1].pr` (tiyatro) | تیاترُ → تیاترو | Same as above. |
| u03 | `phrases[6]` (id p07) `t` / `s` / `pr` | "Çok lezzetli!" / «خیلی خوشمزه است!» / «چُک لِزِّتلی!» → "Tadına bak!" / «مزه‌اش را بچش!» / «تادِنا باک!» | Duplicate: A1 u04 p06 already teaches "Çok lezzetli!". The new phrase fits the kitchen theme and practises the unit's `sen` imperative. It is not used anywhere else in tr-fa. |
| u09 | `dialogue.lines[1].s` | «سلام عایشه! …» → «سلام آیشه! …» | The name is spelled «آیشه» everywhere else in the course. «عایشه» also points to the Arabic name and its pronunciation. |
| u10 | `grammar[0].exercises[2].answer` ("Onlar bu yaz tatile git___.") | ["meyecekler"] → ["meyecekler", "meyecek"] | With an explicit subject *onlar*, *gitmeyecek* without -ler is also correct and very common. The course itself uses this form, e.g. "Çocuklar da geldi" in u01. |
| u10 | `reading.text[2].t` | "… Emre ile Belgrad Ormanı'na gideceğiz ve orada kamp yapacağız." → "… Emre ile bir göl kenarına gideceğiz ve orada kamp yapacağız." | Possible false fact. Belgrad Forest is a day-use nature park with picnic areas. Overnight tent camping, and campfires like the one in the next sentence, are not allowed there. I made the place general. ("göl" was taught in u09.) |
| u10 | `reading.text[2].pr` | «… بِلگراد اُرمانِنا …» → «… بیر گُل کِنارِنا …» | Matches the new `t`. |
| u10 | `reading.text[2].s` | «… به جنگلِ بلگراد می‌رویم …» → «… به کنارِ یک دریاچه می‌رویم …» | Matches the new `t`. |
| u10 | `reading.questions[0].options` | ["Bir konsere", "Belgrad Ormanı'na", "Denize"] → ["Bir konsere", "Bir göl kenarına", "Denize"] | Matches the new text. The answer index (1) is unchanged. |

**Count by category:**

| Category | Changes |
|---|---|
| `pr` | 18 fields: 13 merhaba, 1 tabii, 3 kilo, 1 tiyatro. The u03 p07 and u10 reading `pr` are counted with their `t` changes. |
| Target text | 2: u03 p07 and u10 reading text[2] |
| Translation | 3: u09 dialogue, plus the `s` of the two target-text changes |
| Grammar explanation | 0 |
| Exercises / questions | 2: u10 type answer, u10 reading options |
| Emoji | 0 |

## Noticed but not changed

- **«میْ» / «آنِّمیْ» / «دِدِمیْ» in u01** (w11 ex, dialogue lines 7–8, sentences[1]):
  - The sukun on a final ی is a workaround. Without it, `tools/validate.py` treats a stand-alone «می» followed by a space as the Persian prefix می and the file fails.
  - en-fa uses the same «میْ» form. It does not mislead the reader, so I kept it.
  - I tried removing it, the validator failed, and I put it back.
- **Final o across the course:**
  - A1 (banyo «بانیو») and now A2 use و.
  - B1 (metro «مِترُ»), B2 (tablo «تابلُ») and C1 (ciro «جیرُ») use ُ.
  - The course lead should pick one convention for B1–C1.
- **A1 yağmur «یامور»** does not follow the written rule "ğ after a = long ا". A2 writes «یاامور», like A1's own sağlık «ساالِک» and dağ «داا». I kept A2 as it is; the fix belongs in A1.
- **ağabey «آابِی»:** in this word, ğa only lengthens the first a ([aːbej]), so the guide is right. It does not need the «اآ» pattern of sağa [saːa].
- **Headwords repeated in higher levels:**
  - teyze, hala, kuzen, torun appear again in B1 u08.
  - uçak appears again in B1 u05.
  - sergi appears again in B2 u08.
  - avukat and belediye appear again in C1 u02 and u05.
  - These basic words belong at A2. The units' dialogues and readings are built on them, so the repeated entries in B1/B2/C1 should be replaced instead.
- **Phrases repeated in higher levels:**
  - "Geçmiş olsun!" and "Kendimi iyi hissetmiyorum." appear again in B1 u04, and "Geçmiş olsun!" also in B2 u05.
  - "Kolay gelsin!" appears again in B1 u03, B1 u09 and B2 u03.
  - "İyi yolculuklar!" appears again in B1 u05.
  - All are A2-level chunks. The higher levels should replace them.
- **Future tense taught twice:** A2 u07 (positive) and u10 (negative and question) teach -(y)acak. B1 u02 teaches -(y)acak again as its main grammar point. That is a curriculum overlap for the B1 reviewer or the lead, not an A2 error.
- **u05 g01 (negative present tense):** A1 u04/u06 already showed *istemiyorum* and the -mi- vowel change. A2 presents the full negative and question forms, as the curriculum asks. A "you already know istemiyorum" line would be nice, but it is not needed.
- **Choice items decided by the Persian `s`:** u08 g01 ex0 (karşısında / arkasında / önünde) and u09 g02 ex1 (ailemle / ailem gibi) give options that are grammatical, but only one matches the Persian meaning shown. This is acceptable as a vocabulary choice.
- **Plural ها attached without ZWNJ** in some `s` texts (مسافرها، عصرها، کارهای، ضمیرها…): both spellings are accepted in Persian, so this is a style point, not an error.
- **Diacritic order:** shadda+kasra and kasra+shadda are mixed in «آنِّم». Both render the same.
- **Prices** in u06 (30 TL/kg tomatoes, rent 15,000 TL): these are fictional dialogue prices, not factual claims. Real prices change fast with inflation, but nothing claims they are current.
- **u09 reading:** "Uzungöl … büyük bir göl" — the lake is not very big. It is the writer's personal impression, so I left it.

## Texts that may be hard for text-to-speech (TTS) in `t`

- Grammar titles with hyphens, slashes and brackets:
  - u02 g01 "Nereden? -den / -dan / -ten / -tan" and u02 g02 "-den … -e kadar; otobüsle, trenle"
  - u03 g01 "Domatesi doğra: -(y)ı / -(y)i / -(y)u / -(y)ü"
  - u04 g01 "Annemin arabası: -(n)ın + iyelik eki" ("+")
  - u06 g01 "-li / -siz / -lik: …" and u06 g02 "-ki: evdeki, bugünkü, benimki"
  - u07 g01 "Gelecek zaman: -(y)acak / -(y)ecek"
  - u08 g02 "-den önce / -den sonra; önce, sonra, en son"
  - u09 g01 "Hava güzeldi, evdeydim: -(y)dı"
  - u10 g02 "-elim / -alım: Sinemaya gidelim mi?"
- u07 g02 table times in digits: "5.10", "5.15", "5.30", "5.45", "5.50", "12.30".
- Exercises with a dash: u02 g01 ex6 "___ geliyorsunuz? — Tebriz'den." and u04 g01 ex2 "Bu ___ kitabı? — Benim."
- u03 `title.t` of g02 "Al, alın, alma, almayın": a list, but fine for a voice.
