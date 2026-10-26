# Review: tr-fa A1 (u00–u10)

I checked every item in all 11 files: letters, sounds, words, phrases, dialogues, grammar, exercises, reading and sentences.
I also ran automatic checks on the Persian text (Arabic ي/ك, ZWNJ, `می`/`ها` spacing, word counts in `pr` against `t`). They found nothing to fix.
`tools/validate.py` prints OK for all 11 files.

The `pr` conventions are consistent across all units, so I kept them:
- ı = ـِ (kasra)
- ö = اُ and ü = او
- c = ج, ç = چ, j = ژ
- ğ after a = long ا (dağ «داا», sağ «ساا»)
- ğ between o/ö and u = ئ (soğuk «سُئوک», doğum «دُئوم»)
- double consonants = ّ (anne «آنِّه»)

## Changes

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u00 | `sounds[4].s` ("Her harf okunur") | «…و حرفِ بی‌صدا و ساکت نداریم.» → «…و تقریباً هیچ حرفِ ساکتی (نوشته‌شده ولی خوانده‌نشده) نداریم؛ فقط **ğ** که بالاتر دیدید.» | Wrong explanation. «حرف بی‌صدا» is the Persian word for *consonant*, so the old text said "Turkish has no consonants". It also ignored ğ, which the unit itself describes as almost silent. |
| u03 | `words[w10].pr` (oğul) | اُول → اُئول | «اُول» reads as "ovl"/"avval". Changed to match the unit's own ğ style (soğuk «سُئوک», doğum «دُئوم»): [o.ul]. |
| u07 | `phrases[p04].pr` (Sağa dönün.) | ساا دُنون. → ساآ دُنون. | The guide was for *sağ*, not *sağa*: it dropped the dative -a. |
| u09 | `grammar[1].explain` | Month list Ocak, Şubat … Aralık → ocak, şubat … aralık; Temmuz**da**/Eylül**de**/Mart**ta** → lowercase; added «و وسطِ جمله با حرف کوچک نوشته می‌شوند (مگر در تاریخ دقیق، مثل 19 Mayıs)» | Turkish spelling (TDK): a month name is lowercase unless it is part of a specific date. |
| u09 | `grammar[1].table` (12 rows) | Ocak/Ocakta … → ocak/ocakta … | Same TDK rule. |
| u09 | `grammar[1].examples[3].t` | Benim doğum günüm Eylülde. → …eylülde. | Same TDK rule. |
| u09 | `grammar[1].exercises[1].options` | Temmuzde/Temmuzda/Temmuza → temmuzde/temmuzda/temmuza | Same rule (mid-sentence gap). |
| u09 | `grammar[1].exercises[5].answer` | ["Mayısta"] → ["mayısta"] | Same rule (mid-sentence gap). |
| u09 | `reading.text[3].t` | Temmuzda ve Ağustosta… → Temmuzda ve ağustosta… | Same rule. Sentence-initial months keep their capital. |
| u09 | `reading.text[6].t` | Ocakta ve Şubatta… → Ocakta ve şubatta… | Same rule. |
| u09 | `reading.questions[2].q.t` | İnsanlar Temmuzda… → İnsanlar temmuzda… | Same rule. |
| u09 | `reading.questions[3].options[0]` | Ocakta ve Şubatta → Ocakta ve şubatta | Same rule. |
| u09 | `sentences[4].t` | Benim doğum günüm Martta. → …martta. | Same rule. |

## Noticed but not changed

- **u01 öğrenci «اُرِنجی», öğretmen «اُرِتمِن»:** the long ö from ğ is not shown. Writing it in Persian script (e.g. «اُ‌اُرِنجی») would look odd, and the current guide is understandable.
- **u09 rüzgâr «روزگار»:** â here really marks a palatal g ([ɾyzɟaɾ]). «روزگیار» would be misread as gi-yâr, so I kept the Persian word, which is also the word's origin. A note in the unit could mention it.
- **u04 `grammar[0].explain`:** says the negative is "-me- in the middle" (istemiyorum), but -me- becomes -mi- before -yor. u06 explains this vowel change, and the A1 simplification is acceptable.
- **u10 `grammar[1].explain`:** «مصدر فعل را با yi / yı می‌آوریم» is a loose wording. The next sentence (mek → meyi, mak → mayı) makes it correct in practice.
- **Months used as names:** u09 dialogue lines 6 and 7 start sentences with «Nisanda», and the grammar title «Temmuzda, yazın» is a heading, so they stay capitalized. The `type` answer «Aralıkta» (ex. 3) is at the start of the sentence, so it stays as it is.
- **Different terms for "vowel":** u00–u05 say «حرف صدادار», while u06–u10 say «واکه». Both are correct, so this is a style choice.
- **Small `pr` style differences:** «آن‌نه»/«سا‌آت» in the u00 sounds text vs «آنِّه»/«ساآت» in the guides. Some phrase `pr`s end with a period and some don't. Neither is wrong.
- **Spoken pronunciation of buyurun:** it is often "buyrun". The written form and its guide are correct.
- **Reading texts use a few words that units have not taught yet:** şimdi (u05), önce (u07), bugün and mutlu (u08), hafta sonu (u10). They are easy to understand, and the `s` gives them.
- **u08 meyve 🍉:** a watermelon for "fruit" is acceptable.

## Texts that may be hard for text-to-speech (TTS) in `t`

- u02 `grammar[0].table`: "1 – bir", "11 – on bir" … (digits + dash)
- u02 `grammar[0].exercises[0–2]`: "5 = ___", "13 = ___", "8 = ___" ("=" and digits)
- u02/u03/u07 tables and u02 `grammar[1].exercises`: "ev → ev___", "ben → benim" ("→")
- u02 `grammar[0].title.t`: "Sayılar 0–20 ve yaş"; u08 `grammar[1].title.t`: "Sayılar 30–1000"; u08 `grammar[1].table` digits "30", "1000"
- u06 `grammar[1].table`: "1" … "10", "7:30"; u06 `grammar[1].exercises[4]` answer "10'da" (answer only)
- u01 `words[w14].t`: "de / da"; u01 `grammar[1].title.t`: "-lı / -li / -lu / -lü"; u05 `grammar[1].title.t`: "-de / -da / -te / -ta — Nerede?"; u07 `grammar[0].title.t`: "-(y)e / -(y)a"; u03 `grammar[0].table`: "-(ı)m", "-(s)ı", "-ları / -leri"; u10 `grammar[1].table`: "e / i", "a / ı"…; u08 `grammar[0].title.t`: "bu / şu / o"; u04 `grammar[0].title.t`: "istiyorum / istemiyorum" (slashes, hyphens, brackets)
- u00 `letters[].t`: "A a", "B b" … (doubled letters); u00 `sounds[].t`: "ı / i", "c / ç / ş / j"
- u08 `reading.text[6]`: curly quotes “…”
- u09 `grammar[0].title.t`: "güneşli, bulutlu…" (ellipsis); u02 dialogue line 7 "dört… Dört kedi!"
