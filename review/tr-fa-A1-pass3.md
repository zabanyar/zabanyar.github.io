# Review pass 3: tr-fa A1 (u00–u10)

I read every item in all 11 units: letters and sounds, words and their examples, phrases, dialogues, goals, grammar explanations, tables, examples and exercises, readings and questions, and sentences. I also made a list of every named person and what each text says about them (age, city, job, family).

`tools/validate.py` prints OK for all 11 files.

`tools/audit.py` reports 1 remaining A1 finding, and it is a false alarm. u09 `grammar[1].exercises[6]` has the new alt «Hava ilkbaharda çok güzel.». It uses exactly the same words as «İlkbaharda hava çok güzel.». The audit lowercases with Python's `str.lower()`, which turns «İ» into "i̇" (i plus a combining dot), so «ilkbaharda» no longer matches. The app compares with `toLocaleLowerCase("tr")`, so it accepts the alt. tr-fa A2 has the same false alarm.

**"Neda":** there was 1 leftover, in u03 `dialogue.lines[1].s` («اسمش نداست» while `t` says «Adı Mina»). I fixed it, and no other occurrence remains.

## Summary of changes

| Category | Count |
|---|---|
| `pr` added (task 3) | 554 (`pr` existed only on words, phrases and letters before) |
| Duplicate headwords replaced (task 1) | 6 |
| Character consistency (names, ages, jobs, cities; `t` + `s` + options) | 63 field edits in 9 units |
| Exercises (`alts` added to order items and sentences) | 11 |
| Grammar or sound explanations | 2 |
| Translation (`s`) | 1 (the Neda leftover) |

### Task 3: `pr` added everywhere

I added `pr` to every item in these groups:
- u00 letter examples (29) and sound examples (18)
- every `words[].ex` (150)
- every dialogue line (99)
- every grammar example (95)
- every reading sentence (80)
- every `sentences[]` item (83)

The `pr` key goes right after `s`, as in A2. I drafted the guides with a rule-based transliterator that follows the course conventions, using the spelling already found in the A1 word and phrase guides. Then I read every result against its `t`. The full list is in the appendix.

The conventions are the same as the rest of the course and A2:
- **Vowels:** ı = ـِ, i = ی, o/ö = ُ (اُ at the start), u/ü = و (او at the start), e = ِ / final ـِه.
- **Letters:** c = ج, ç = چ, j = ژ.
- **Doubled consonants** take ّ: anne «آنِّه», teşekkürler «تِشِکّورلِر», İstanbullu «ایستانبولّو», şubatta «شوباتّا», Temmuz «تِمّوز».
- **-iyor** is written «یُر» (gidiyorum «گیدیُروم»).
- **ğ:**
  - after a = long ا (yağmur «یاامور», sağda «ساادا»)
  - ağı = «ائِ» (yağıyor «یائِیُر», durağı «دورائِ»)
  - o/u-ğ-u = «ئو» (doğum «دُئوم», tavuğu «تاووئو», çocuğum «چُجوئوم»)
  - e/i-ğ-i = «یی» (değil «دِییل», sevdiğim «سِودییم»)
  - dropped before a consonant after o/ö, as in A2: oğlum «اُلوم», öğretmen «اُرِتمِن»
- **iy + vowel** is written as one ی (siyah «سیاه», afiyet «آفیِت»), but **iyi** = «ای‌یی» and **miyim** = «می‌ییم».
- **Single words:** tabii «تابیی» (as in A2), büyükannem «بویوک‌آنِّم» (like the headword «بویوک‌آنِّه»).
- **Names:** Persian names use Persian spelling (رضا، علی، مریم، سارا، مینا، امیر). Turkish names are written by sound (آیشِه، مِهمِت، اِلیف، جان، زِینِپ، اِمرِه). Proper nouns with a suffix are written as one word (Reza'yım «رضایِم», Türkiye'de «تورکیِدِه», İstanbul'da «ایستانبولدا»).
- **Punctuation:** Persian ، and ؟, and « » for quotation marks.

I checked all 227 existing word and phrase guides with the same tool, and all of them follow the conventions. The only differences are «ایستی‌یُرسون» (p03 in u04, which has a half-space; elsewhere it is «یُر» with no half-space) and the half-space in «بویوک‌آنِّه». Both are fine, so I kept them.

### Task 1: duplicate headwords

All 6 duplicates were replaced with new words that no other A1 unit teaches as a headword. None of them is a headword in A2, B1, B2 or C1 either. I avoided teyze and hala because A2 u04 and B1 teach them.

| File | Path | Old → New | Reason |
|---|---|---|---|
| u03 | `words[1]` (w02) | anne «آنِّه» مادر, ex *Annem öğretmen.* → **kardeş** «کاردِش» «خواهر یا برادر», pl *kardeşler*, emoji "", ex *Reza ve Sara kardeş.* «رضا و سارا خواهر و برادرند.» «رضا وِه سارا کاردِش.» | anne is already taught in u00. kardeş is used all through u03 (*Kardeşin var mı?*, *Bir kardeşim var*, the grammar table *kardeşim/kardeşin/kardeşi*) but was never taught on its own. Reza and Sara are siblings in the u03 dialogue. |
| u03 | `words[2]` (w03) | baba «بابا» پدر, ex *Babam doktor.* → **bebek** «بِبِک» «نوزاد، بچه‌ی کوچک», pl *bebekler*, 👶, ex *Bebek bir yaşında.* «نوزاد یک ساله است.» | baba is already taught in u00. bebek fits the family theme and is used later in u06 (*Bebek uyuyor.*). |
| u04 | `words[0]` (w01) | çay «چای» → **ayran** «آیران» «دوغ», emoji "", ex *Bir ayran, lütfen.* «یک دوغ، لطفاً.» | çay is already taught in u00. Ayran is a very common drink, and it is familiar to Iranians as دوغ. |
| u04 | `words[2]` (w03) | su «سو» → **meyve suyu** «مِیوِه سویو» «آبمیوه», 🧃, ex *Meyve suyu istiyorum.* «آبمیوه می‌خواهم.» | su is already taught in u00. |
| u04 | `words[4]` (w05) | ekmek «اِکمِک» → **et** «اِت» «گوشت», 🥩, ex *Eti çok seviyorum.* «گوشت را خیلی دوست دارم.» | ekmek is already taught in u00. The example also practises the unit's accusative (*eti*). |
| u06 | `words[4]` (w05) | kahvaltı «کاهوالتِ» → **içmek** «ایچمِک» «نوشیدن», 🥤, ex *Çocuklar süt içiyor.* «بچه‌ها شیر می‌نوشند.» | kahvaltı is already taught in u04. içmek is used many times in u06 (*çay içiyorum, içiyoruz*) but was never taught. |

The u00, u03 and u04 texts still use çay, su, ekmek, anne and baba, and the learner knows these words from u00.

## Other changes

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u03 | `dialogue.lines[1].s` | «این مادرِ من است. اسمش **نداست**.» → «… اسمش **میناست**.» | Leftover "Neda". `t` says *Adı Mina*. |
| u00 | `sounds[2].s` (ğ) | «تقریباً صدایی ندارد! فقط حرف صدادارِ قبل از خودش را **کشیده** می‌کند.» → «… **معمولاً** فقط … کشیده می‌کند. ⏎ بینِ e و i کمی شبیه «ی» شنیده می‌شود: **değil** را «دِییل» بخوانید.» | "Only lengthens the vowel before it" is false between front vowels: *değil* is [dejil], and the level itself uses it (u10 *Zor değil*) with the guide «دِییل». |
| u07 | `grammar[1].explain` | after «ریشه‌ی فعل + **in / ın / un / ün** (هماهنگی چهارتایی).» added «اگر ریشه به واکه ختم شود، یک **y** وسط می‌آید: dinle → **dinleyin**.» | Without the buffer -y- the rule produces *dinlein*. u10 uses *Lütfen dinleyin!*. |
| u05 | `grammar[1].exercises[6]` | + `alts` ["Büyükannem ve dedem bahçede."] | Same words in another natural order. |
| u09 | `grammar[0].exercises[6]` | + `alts` ["Hava bugün çok rüzgârlı."] | Moving the time adverb is just as natural. |
| u09 | `grammar[1].exercises[6]` | + `alts` ["Hava ilkbaharda çok güzel."] | Same reason. |
| u03 / u06 / u08 / u09 / u10 | `sentences[…].alts` | u03 s3 "Büyükannem ve dedem Şirazlı."; u06 s0 "Sabah annem çay içiyor.", s1 "Akşam biz yemek yapıyoruz.", s3 "Şimdi sen ne yapıyorsun?"; u08 s5 "Teşekkürler, sadece bakıyorum."; u09 s0 "Hava bugün çok güzel.", s5 "Hava sonbaharda bulutlu."; u10 s6 "Parkta çocuklar bisiklete biniyor." | The app also uses `sentences` as word-order tasks, and A2 gives alts there. I added only orders that are just as natural. I did not add orders where the subject would move right before the verb (that makes it a focus, e.g. *Her gün babam çalışıyor*). |

### Character consistency

Earlier passes did not check this. The A1 storyline has one family that appears in many units: **Maryam** (Şirazlı teacher, u01), her husband **Ali** (teacher, u03), their daughter **Elif** and their son. They appear in the u03, u04, u07 and u08 readings, the u06 grammar (*Ali bir okulda çalışıyor*) and others. Several texts contradicted this or contradicted other texts in the same unit. I fixed each case by renaming or changing the age in the text that broke the pattern, using the three unused course names Amir, Zeynep and Emre. I kept "Mina" everywhere.

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u01 | `words[11].ex` (öğretmen) | *Ayşe öğretmen.* / آیشه معلم است → *Maryam öğretmen.* / مریم معلم است | The u01 reading says *Ayşe öğrenci* and *Maryam … O öğretmen*. |
| u01 | `grammar[0].examples[3]` | *Ali doktor.* → *Ali öğretmen.* (s too) | Ali is the teacher in u03 (*Eşim Ali. O öğretmen.*) and u06. |
| u01 | `grammar[1].examples[3]` | *Mehmet İzmirli.* → *Emre İzmirli.* (s: امره ازمیری است) | In the u01 dialogue Mehmet says *Ben İstanbulluyum*. |
| u01 | `grammar[1].exercises[3]` | *Mehmet Ankara___.* → *Can Ankara___.* (s: جان اهل آنکارا است) | Same reason. Can is from Ankara in the u02 reading. The answer *lı* is unchanged. |
| u01 | `grammar[1].exercises[5]` (order) | *Maryam İsfahanlı bir öğretmen.* → *Maryam Şirazlı bir öğretmen.* (s too) | The reading in the same unit says Maryam is *Şirazlı*. |
| u02 | `words[6].ex` (altı) | *Ali altı yaşında.* → *Altı çocuk.* / شش بچه | In the same unit Ali was 10, and from u03 on he is a father. The new example is nameless, like the other number examples. |
| u02 | `words[9].ex` (dokuz) | *Can dokuz yaşında.* → *Ben dokuz yaşındayım.* / من نُه سال دارم | Can is 12 in the u02 reading. |
| u02 | `dialogue` speaker B + lines 1, 2 | Ali → **Emre** (*Adım Emre.*, *Kaç yaşındasın, Emre?*, s too) | A 10-year-old boy meeting Elif for the first time cannot be Ali, who is Elif's father from u03 on. |
| u02 | `reading.text[4]`, `text[6]`, `questions[2]` | *Sara ve Reza İranlı.* → *Sara İranlı, Zeynep Türk.*; *… Reza on dört yaşında* → *… Zeynep on dört yaşında*; *Reza kaç yaşında?* → *Zeynep kaç yaşında?* (all s too) | Reza is an adult doctor from Tabriz in the u01 reading and in w13, not a 14-year-old pupil. Question 3 (*Sara nereli? → İranlı*) still works. |
| u03 | `words[8].ex`, `reading.text[3]`, `reading.questions[1].options` | Elif *sekiz* → *yedi* (s too); options [beş, sekiz, on] → [beş, yedi, on] | Elif is 7 in u02 (dialogue, w08, grammar example, order exercise). The answer index is unchanged. |
| u03 | `words[9].ex`, `reading.text[4]`, `reading.questions[0]` and `[2].options` | *Oğlum Can.* → *Oğlum Amir.*; *Oğlumuz Can, beş yaşında* → *Oğlumuz Amir, …*; option Can → Amir (s too) | Can was Maryam and Ali's 5-year-old son, but he is also the 12-year-old Turkish boy from Ankara (u02 reading) and Mina's guest (u05). A Persian name also suits the Iranian parents. |
| u03 | `dialogue.lines[7]` | *On iki yaşında.* → *On bir yaşında.* (s: یازده سال دارد) | Reza's sister Sara is 11 in the u02 reading. |
| u04 | `reading.text[5]`, `questions[3].options` | *Oğlumuz Can sütü sevmiyor.* → *Oğlumuz Amir …*; option Can → Amir (s too) | Same son as u03. |
| u06 | `reading.title`, `text[0]`, `questions[0,1,3]` | *Reza'nın günü* / *Benim adım Reza* / *Reza saat kaçta…* → **Ali** (all t and s) | This narrator is a teacher at a school with a wife and children, which is exactly Ali (u03). Reza is a doctor (u01). |
| u08 | `dialogue.speakers.A.name` | Elif → **Ayşe** | In the reading of the same unit, Elif is the little girl shopping with her mother, so she cannot be the shop assistant. The lines do not mention the name. |
| u10 | `reading.text[1–3]`, `questions[0–2]` | *Babam Reza satranç…* / *Annem resim yapabilir…* / *Kardeşim Ali futbol… yüzemez* → *Eşim Ali satranç oynamayı çok sever.* / *Kızım Elif resim yapabilir; resimleri çok güzel.* / *Oğlum Amir futbol oynamayı sever ama yüzemez.*; questions *Ali ne yapmayı sever?* (answer still *Satranç oynamayı*), *Amir yüzebilir mi?* (still *Hayır, yüzemez.*), options [Maryam, Ali, Amir] (answer still Maryam); s for all | The old text made Maryam Reza's daughter and Ali's sister. Now it is the same family of four (*Ailemde dört kişi var* still fits) and matches the unit's own examples (*Elif resim yapıyor*, *Maryam gitar çalıyor*). |

## Noticed but not changed

- **Mina** is Reza's mother in u03 and a woman showing Can her parents' home in u05. This is not a strict contradiction (an adult can live with her parents), and the brief says to keep Mina, so I left it.
- **Minor characters** (Sara, Mehmet, Ayşe) appear in several dialogues in roles that are generic but never contradict a stated fact. For example, *Mehmet on beş yaşında* (u02 sentence) has no conflict, because no text gives Mehmet another age.
- **The oğul / oğlum guides:** the headword is «اُئول» (o-ul), and the new sentence guides write oğlum «اُلوم», as A2 does («اُلو»). Both match the real sound [oːɫum]. I kept the headword as the earlier pass decided.
- **The *öğrenci* «اُرِنجی» and *öğretmen* «اُرِتمِن» guides do not show the long ö.** I kept them for the reasons in the earlier A1 review and because A2 uses the same spelling.
- **rüzgâr «روزگار»** does not show the palatal g [ɟ]. The earlier review explains why it was kept.
- **u04 grammar[1]** says that with *sevmek* the noun takes the accusative. u10 then uses the natural generic form *Sen futbol sever misin?* with a bare noun. This is normal in Turkish, and the A1 learner is not misled.
- **u08 reading** *Elif ve annesi alışverişe gidiyor*: the plural *gidiyorlar* is more usual with two human subjects, but the singular is acceptable.
- **Previous review notes** (*buyurun* is often said "buyrun"; the vowel terms «حرف صدادار» and «واکه»; the -me-/-mi- simplification in u04) still apply. They are not errors.

## Texts that may be hard for text-to-speech (TTS) in `t`

These are unchanged from the earlier A1 review:
- u02 tables "1 – bir" …
- u02 exercises "5 = ___", "13 = ___", "8 = ___"
- the "→" in u02, u03 and u07 tables and in the u02 grammar[1] exercises
- u02 title "Sayılar 0–20 ve yaş" and u08 title "Sayılar 30–1000", plus the digits in the u06 and u08 tables ("7:30", "1000")
- the slashes and hyphens in titles: "de / da", "-lı / -li / -lu / -lü", "-de / -da / -te / -ta — Nerede?", "-(y)e / -(y)a", "bu / şu / o", "istiyorum / istemiyorum", and "-(ı)m" etc. in the u03 table
- u00 "A a", "ı / i", "c / ç / ş / j"
- the curly quotes in u08 reading.text[6]
- the ellipses in the u09 grammar[0] title and u02 dialogue line 7

## Appendix: every `pr` added (554)

**u00**

- `letters[0].ex` araba → «آرابا»
- `letters[1].ex` balık → «بالِک»
- `letters[2].ex` cami → «جامی»
- `letters[3].ex` çay → «چای»
- `letters[4].ex` domates → «دُماتِس»
- `letters[5].ex` elma → «اِلما»
- `letters[6].ex` fil → «فیل»
- `letters[7].ex` gül → «گول»
- `letters[8].ex` dağ → «داا»
- `letters[9].ex` horoz → «هُرُز»
- `letters[10].ex` ışık → «اِشِک»
- `letters[11].ex` inek → «اینِک»
- `letters[12].ex` judo → «ژودُ»
- `letters[13].ex` kedi → «کِدی»
- `letters[14].ex` limon → «لیمُن»
- `letters[15].ex` muz → «موز»
- `letters[16].ex` nane → «نانِه»
- `letters[17].ex` okul → «اُکول»
- `letters[18].ex` ördek → «اُردِک»
- `letters[19].ex` peynir → «پِینیر»
- `letters[20].ex` radyo → «رادیُ»
- `letters[21].ex` saat → «ساآت»
- `letters[22].ex` şeker → «شِکِر»
- `letters[23].ex` top → «تُپ»
- `letters[24].ex` uçak → «اوچاک»
- `letters[25].ex` üzüm → «اوزوم»
- `letters[26].ex` vapur → «واپور»
- `letters[27].ex` yumurta → «یومورتا»
- `letters[28].ex` zeytin → «زِیتین»
- `sounds[0].ex[0]` ışık → «اِشِک»
- `sounds[0].ex[1]` kız → «کِز»
- `sounds[0].ex[2]` inek → «اینِک»
- `sounds[1].ex[0]` ördek → «اُردِک»
- `sounds[1].ex[1]` göz → «گُز»
- `sounds[1].ex[2]` üzüm → «اوزوم»
- `sounds[2].ex[0]` dağ → «داا»
- `sounds[2].ex[1]` yağmur → «یاامور»
- `sounds[2].ex[2]` öğretmen → «اُرِتمِن»
- `sounds[3].ex[0]` cami → «جامی»
- `sounds[3].ex[1]` çay → «چای»
- `sounds[3].ex[2]` şeker → «شِکِر»
- `sounds[4].ex[0]` anne → «آنِّه»
- `sounds[4].ex[1]` saat → «ساآت»
- `sounds[4].ex[2]` kitap → «کیتاپ»
- `sounds[5].ex[0]` evler → «اِولِر»
- `sounds[5].ex[1]` kitaplar → «کیتاپلار»
- `sounds[5].ex[2]` okullar → «اُکولّار»
- `words[0].ex` Anne ve baba. → «آنِّه وِه بابا.»
- `words[1].ex` Merhaba, baba! → «مِرحابا، بابا!»
- `words[2].ex` Bu bir ev. → «بو بیر اِو.»
- `words[3].ex` Bu bir kitap. → «بو بیر کیتاپ.»
- `words[4].ex` Bir çay, lütfen. → «بیر چای، لوتفِن.»
- `words[5].ex` Su, lütfen. → «سو، لوتفِن.»
- `words[6].ex` Ekmek ve peynir. → «اِکمِک وِه پِینیر.»
- `words[7].ex` Bu bir elma. → «بو بیر اِلما.»
- `words[8].ex` Evet, bu bir ev. → «اِوِت، بو بیر اِو.»
- `words[9].ex` Hayır, teşekkürler. → «هایِر، تِشِکّورلِر.»
- `sentences[0]` Bu bir elma. → «بو بیر اِلما.»
- `sentences[1]` Bir çay, lütfen. → «بیر چای، لوتفِن.»
- `sentences[2]` Anne ve baba. → «آنِّه وِه بابا.»
- `sentences[3]` Ekmek ve peynir. → «اِکمِک وِه پِینیر.»
- `sentences[4]` Evet, bu bir kitap. → «اِوِت، بو بیر کیتاپ.»
- `sentences[5]` Su, lütfen. → «سو، لوتفِن.»

**u01**

- `words[0].ex` Merhaba! Ben Sara. → «مِرحابا! بِن سارا.»
- `words[1].ex` Ben Reza'yım. → «بِن رضایِم.»
- `words[2].ex` Sen öğrencisin. → «سِن اُرِنجیسین.»
- `words[3].ex` O öğretmen. → «اُ اُرِتمِن.»
- `words[4].ex` Biz İranlıyız. → «بیز ایرانلِیِز.»
- `words[5].ex` Siz öğretmensiniz. → «سیز اُرِتمِنسینیز.»
- `words[6].ex` Onlar Türk. → «اُنلار تورک.»
- `words[7].ex` Adım Sara. → «آدِم سارا.»
- `words[8].ex` Ben İranlıyım. → «بِن ایرانلِیِم.»
- `words[9].ex` Mehmet Türk. → «مِهمِت تورک.»
- `words[10].ex` Ben öğrenciyim. → «بِن اُرِنجی‌ییم.»
- `words[11].ex` Maryam öğretmen. → «مریم اُرِتمِن.»
- `words[12].ex` Reza doktor. → «رضا دُکتُر.»
- `words[13].ex` Ben de öğrenciyim. → «بِن دِه اُرِنجی‌ییم.»
- `dialogue.lines[0]` Merhaba! → «مِرحابا!»
- `dialogue.lines[1]` Merhaba! Nasılsın? → «مِرحابا! ناسِلسِن؟»
- `dialogue.lines[2]` İyiyim, teşekkürler. Sen nasılsın? → «ای‌یی‌ییم، تِشِکّورلِر. سِن ناسِلسِن؟»
- `dialogue.lines[3]` Ben de iyiyim. Adın ne? → «بِن دِه ای‌یی‌ییم. آدِن نِه؟»
- `dialogue.lines[4]` Adım Sara. Ya sen? → «آدِم سارا. یا سِن؟»
- `dialogue.lines[5]` Ben Mehmet. Nerelisin, Sara? → «بِن مِهمِت. نِرِلیسین، سارا؟»
- `dialogue.lines[6]` İranlıyım. Tahranlıyım. Sen nerelisin? → «ایرانلِیِم. تاهرانلِیِم. سِن نِرِلیسین؟»
- `dialogue.lines[7]` Ben İstanbulluyum. Memnun oldum! → «بِن ایستانبولّویوم. مِمنون اُلدوم!»
- `dialogue.lines[8]` Ben de memnun oldum. Görüşürüz! → «بِن دِه مِمنون اُلدوم. گُروشوروز!»
- `dialogue.lines[9]` Görüşürüz, Sara! → «گُروشوروز، سارا!»
- `grammar[0].examples[0]` Ben öğretmenim. → «بِن اُرِتمِنیم.»
- `grammar[0].examples[1]` Sen öğrencisin. → «سِن اُرِنجیسین.»
- `grammar[0].examples[2]` Biz İranlıyız. → «بیز ایرانلِیِز.»
- `grammar[0].examples[3]` Ali öğretmen. → «علی اُرِتمِن.»
- `grammar[0].examples[4]` Siz Türksünüz. → «سیز تورکسونوز.»
- `grammar[1].examples[0]` Nerelisin? — Tahranlıyım. → «نِرِلیسین؟ — تاهرانلِیِم.»
- `grammar[1].examples[1]` Ayşe İstanbullu. → «آیشِه ایستانبولّو.»
- `grammar[1].examples[2]` Biz Tebrizliyiz. → «بیز تِبریزلی‌ییز.»
- `grammar[1].examples[3]` Emre İzmirli. → «اِمرِه ایزمیرلی.»
- `reading.text[0]` Merhaba! Adım Reza. → «مِرحابا! آدِم رضا.»
- `reading.text[1]` Ben İranlıyım, Tebrizliyim. → «بِن ایرانلِیِم، تِبریزلی‌ییم.»
- `reading.text[2]` Ben doktorum. → «بِن دُکتُروم.»
- `reading.text[3]` Maryam da İranlı. → «مریم دا ایرانلِ.»
- `reading.text[4]` O Şirazlı. O öğretmen. → «اُ شیرازلِ. اُ اُرِتمِن.»
- `reading.text[5]` Ayşe Türk, İstanbullu. → «آیشِه تورک، ایستانبولّو.»
- `reading.text[6]` Ayşe öğrenci. → «آیشِه اُرِنجی.»
- `sentences[0]` Merhaba, adım Ali. → «مِرحابا، آدِم علی.»
- `sentences[1]` Ben İranlıyım. → «بِن ایرانلِیِم.»
- `sentences[2]` İyiyim, teşekkürler. → «ای‌یی‌ییم، تِشِکّورلِر.»
- `sentences[3]` Ayşe Türk, Mehmet de Türk. → «آیشِه تورک، مِهمِت دِه تورک.»
- `sentences[4]` Biz öğrenciyiz. → «بیز اُرِنجی‌ییز.»
- `sentences[5]` Siz nerelisiniz? → «سیز نِرِلیسینیز؟»
- `sentences[6]` Memnun oldum, Elif! → «مِمنون اُلدوم، اِلیف!»
- `sentences[7]` O bir öğretmen. → «اُ بیر اُرِتمِن.»

**u02**

- `words[0].ex` Sıfır, bir, iki, üç. → «سِفِر، بیر، ایکی، اوچ.»
- `words[1].ex` Bir çay, lütfen. → «بیر چای، لوتفِن.»
- `words[2].ex` İki kitap. → «ایکی کیتاپ.»
- `words[3].ex` Üç elma. → «اوچ اِلما.»
- `words[4].ex` Dört öğrenci. → «دُرت اُرِنجی.»
- `words[5].ex` Beş ev. → «بِش اِو.»
- `words[6].ex` Altı çocuk. → «آلتِ چُجوک.»
- `words[7].ex` Elif yedi yaşında. → «اِلیف یِدی یاشِندا.»
- `words[8].ex` Sekiz kedi. → «سِکیز کِدی.»
- `words[9].ex` Ben dokuz yaşındayım. → «بِن دُکوز یاشِندایِم.»
- `words[10].ex` On öğretmen. → «اُن اُرِتمِن.»
- `words[11].ex` Ben yirmi yaşındayım. → «بِن ییرمی یاشِندایِم.»
- `words[12].ex` Kaç yaşındasın? → «کاچ یاشِنداسِن؟»
- `words[13].ex` Bir çocuk ve bir kedi. → «بیر چُجوک وِه بیر کِدی.»
- `dialogue.lines[0]` Merhaba! Ben Elif. Adın ne? → «مِرحابا! بِن اِلیف. آدِن نِه؟»
- `dialogue.lines[1]` Merhaba Elif! Adım Emre. → «مِرحابا اِلیف! آدِم اِمرِه.»
- `dialogue.lines[2]` Kaç yaşındasın, Emre? → «کاچ یاشِنداسِن، اِمرِه؟»
- `dialogue.lines[3]` On yaşındayım. Ya sen? → «اُن یاشِندایِم. یا سِن؟»
- `dialogue.lines[4]` Ben yedi yaşındayım. → «بِن یِدی یاشِندایِم.»
- `dialogue.lines[5]` Bak! Kediler! → «باک! کِدیلِر!»
- `dialogue.lines[6]` Kaç tane? → «کاچ تانِه؟»
- `dialogue.lines[7]` Bir, iki, üç, dört… Dört kedi! → «بیر، ایکی، اوچ، دُرت… دُرت کِدی!»
- `dialogue.lines[8]` Çok güzel! → «چُک گوزِل!»
- `grammar[0].examples[0]` On iki öğrenci. → «اُن ایکی اُرِنجی.»
- `grammar[0].examples[1]` Kaç yaşındasın? — On beş yaşındayım. → «کاچ یاشِنداسِن؟ — اُن بِش یاشِندایِم.»
- `grammar[0].examples[2]` Elif yedi yaşında. → «اِلیف یِدی یاشِندا.»
- `grammar[0].examples[3]` Biz on sekiz yaşındayız. → «بیز اُن سِکیز یاشِندایِز.»
- `grammar[1].examples[0]` Çocuklar on yaşında. → «چُجوکلار اُن یاشِندا.»
- `grammar[1].examples[1]` Öğretmenler İranlı. → «اُرِتمِنلِر ایرانلِ.»
- `grammar[1].examples[2]` Kızlar yedi yaşında. → «کِزلار یِدی یاشِندا.»
- `grammar[1].examples[3]` Öğrenciler Türk. → «اُرِنجیلِر تورک.»
- `reading.text[0]` Merhaba! Ben Can. → «مِرحابا! بِن جان.»
- `reading.text[1]` Ben Türküm, Ankaralıyım. → «بِن تورکوم، آنکارالِیِم.»
- `reading.text[2]` On iki yaşındayım. → «اُن ایکی یاشِندایِم.»
- `reading.text[3]` Ben öğrenciyim. → «بِن اُرِنجی‌ییم.»
- `reading.text[4]` Sara İranlı, Zeynep Türk. → «سارا ایرانلِ، زِینِپ تورک.»
- `reading.text[5]` Onlar da öğrenci. → «اُنلار دا اُرِنجی.»
- `reading.text[6]` Sara on bir yaşında, Zeynep on dört yaşında. → «سارا اُن بیر یاشِندا، زِینِپ اُن دُرت یاشِندا.»
- `reading.text[7]` Öğretmenler Türk. → «اُرِتمِنلِر تورک.»
- `sentences[0]` Bir, iki, üç, dört, beş. → «بیر، ایکی، اوچ، دُرت، بِش.»
- `sentences[1]` Kaç yaşındasın? → «کاچ یاشِنداسِن؟»
- `sentences[2]` Ben yirmi yaşındayım. → «بِن ییرمی یاشِندایِم.»
- `sentences[3]` Mehmet on beş yaşında. → «مِهمِت اُن بِش یاشِندا.»
- `sentences[4]` Üç elma, iki muz. → «اوچ اِلما، ایکی موز.»
- `sentences[5]` Çocuklar on yaşında. → «چُجوکلار اُن یاشِندا.»
- `sentences[6]` Öğrenciler İranlı. → «اُرِنجیلِر ایرانلِ.»
- `sentences[7]` Doğum günün kutlu olsun! → «دُئوم گونون کوتلو اُلسون!»

**u03**

- `words[0].ex` Bu benim ailem. → «بو بِنیم آئیلِم.»
- `words[1].ex` Reza ve Sara kardeş. → «رضا وِه سارا کاردِش.»
- `words[2].ex` Bebek bir yaşında. → «بِبِک بیر یاشِندا.»
- `words[3].ex` Kız kardeşim on yaşında. → «کِز کاردِشیم اُن یاشِندا.»
- `words[4].ex` Erkek kardeşin kaç yaşında? → «اِرکِک کاردِشین کاچ یاشِندا؟»
- `words[5].ex` Dedem Tebrizli. → «دِدِم تِبریزلی.»
- `words[6].ex` Büyükannem Şirazlı. → «بویوک‌آنِّم شیرازلِ.»
- `words[7].ex` Eşim Maryam. → «اِشیم مریم.»
- `words[8].ex` Kızım Elif, yedi yaşında. → «کِزِم اِلیف، یِدی یاشِندا.»
- `words[9].ex` Oğlum Amir. → «اُلوم امیر.»
- `words[10].ex` Amcam İstanbullu. → «آمجام ایستانبولّو.»
- `words[11].ex` Dayın nereli? → «دایِن نِرِلی؟»
- `words[12].ex` Ayşe benim arkadaşım. → «آیشِه بِنیم آرکاداشِم.»
- `words[13].ex` Bu kim? — Bu benim babam. → «بو کیم؟ — بو بِنیم بابام.»
- `dialogue.lines[0]` Bu kim, Reza? → «بو کیم، رضا؟»
- `dialogue.lines[1]` Bu benim annem. Adı Mina. → «بو بِنیم آنِّم. آدِ مینا.»
- `dialogue.lines[2]` Annen çok güzel! Peki bu kim? → «آنِّن چُک گوزِل! پِکی بو کیم؟»
- `dialogue.lines[3]` Bu babam. O doktor. → «بو بابام. اُ دُکتُر.»
- `dialogue.lines[4]` Kardeşin var mı? → «کاردِشین وار مِ؟»
- `dialogue.lines[5]` Evet, bir kız kardeşim var. Adı Sara. → «اِوِت، بیر کِز کاردِشیم وار. آدِ سارا.»
- `dialogue.lines[6]` Sara kaç yaşında? → «سارا کاچ یاشِندا؟»
- `dialogue.lines[7]` On bir yaşında. O öğrenci. → «اُن بیر یاشِندا. اُ اُرِنجی.»
- `dialogue.lines[8]` Ne güzel bir aile! → «نِه گوزِل بیر آئیلِه!»
- `dialogue.lines[9]` Teşekkürler, Ayşe! → «تِشِکّورلِر، آیشِه!»
- `grammar[0].examples[0]` Annem Tahranlı. → «آنِّم تاهرانلِ.»
- `grammar[0].examples[1]` Baban kaç yaşında? → «بابان کاچ یاشِندا؟»
- `grammar[0].examples[2]` Kız kardeşi on yaşında. → «کِز کاردِشی اُن یاشِندا.»
- `grammar[0].examples[3]` Arkadaşımız Türk. → «آرکاداشِمِز تورک.»
- `grammar[0].examples[4]` Oğlum öğrenci. → «اُلوم اُرِنجی.»
- `grammar[1].examples[0]` Benim adım Maryam. → «بِنیم آدِم مریم.»
- `grammar[1].examples[1]` Senin adın ne? → «سِنین آدِن نِه؟»
- `grammar[1].examples[2]` Onun babası doktor. → «اُنون باباسِ دُکتُر.»
- `grammar[1].examples[3]` Bizim ailemiz büyük. → «بیزیم آئیلِمیز بویوک.»
- `grammar[1].examples[4]` Sizin eviniz çok güzel. → «سیزین اِوینیز چُک گوزِل.»
- `reading.text[0]` Merhaba! Benim adım Maryam. → «مِرحابا! بِنیم آدِم مریم.»
- `reading.text[1]` Bu benim ailem. → «بو بِنیم آئیلِم.»
- `reading.text[2]` Eşim Ali. O öğretmen. → «اِشیم علی. اُ اُرِتمِن.»
- `reading.text[3]` Kızımız Elif, yedi yaşında. → «کِزِمِز اِلیف، یِدی یاشِندا.»
- `reading.text[4]` Oğlumuz Amir, beş yaşında. → «اُلوموز امیر، بِش یاشِندا.»
- `reading.text[5]` Annem ve babam Tebrizli. → «آنِّم وِه بابام تِبریزلی.»
- `reading.text[6]` Dayım doktor. → «دایِم دُکتُر.»
- `reading.text[7]` Ailemiz büyük. → «آئیلِمیز بویوک.»
- `sentences[0]` Bu benim babam. → «بو بِنیم بابام.»
- `sentences[1]` Annen nereli? → «آنِّن نِرِلی؟»
- `sentences[2]` Kız kardeşim on beş yaşında. → «کِز کاردِشیم اُن بِش یاشِندا.»
- `sentences[3]` Dedem ve büyükannem Şirazlı. → «دِدِم وِه بویوک‌آنِّم شیرازلِ.»
- `sentences[4]` Onun oğlu öğrenci. → «اُنون اُلو اُرِنجی.»
- `sentences[5]` Bizim ailemiz büyük. → «بیزیم آئیلِمیز بویوک.»
- `sentences[6]` Arkadaşım Mehmet Türk. → «آرکاداشِم مِهمِت تورک.»
- `sentences[7]` Senin adın ne? → «سِنین آدِن نِه؟»

**u04**

- `words[0].ex` Bir ayran, lütfen. → «بیر آیران، لوتفِن.»
- `words[1].ex` Kahve istemiyorum. → «کاهوِه ایستِمیُروم.»
- `words[2].ex` Meyve suyu istiyorum. → «مِیوِه سویو ایستیُروم.»
- `words[3].ex` Çocuklar süt istiyor. → «چُجوکلار سوت ایستیُر.»
- `words[4].ex` Eti çok seviyorum. → «اِتی چُک سِویُروم.»
- `words[5].ex` Peyniri çok seviyorum. → «پِینیری چُک سِویُروم.»
- `words[6].ex` İki yumurta istiyorum. → «ایکی یومورتا ایستیُروم.»
- `words[7].ex` Pilavı çok seviyoruz. → «پیلاوِ چُک سِویُروز.»
- `words[8].ex` Tavuk ve pilav, lütfen. → «تاووک وِه پیلاو، لوتفِن.»
- `words[9].ex` Elif meyve istiyor. → «اِلیف مِیوِه ایستیُر.»
- `words[10].ex` Bir salata, lütfen. → «بیر سالاتا، لوتفِن.»
- `words[11].ex` Çorba çok lezzetli. → «چُربا چُک لِزِّتلی.»
- `words[12].ex` Kahvaltıyı çok seviyorum. → «کاهوالتِیِ چُک سِویُروم.»
- `words[13].ex` Su, lütfen. → «سو، لوتفِن.»
- `dialogue.lines[0]` Hoş geldiniz! Buyurun. → «هُش گِلدینیز! بویورون.»
- `dialogue.lines[1]` Merhaba! Bir çay, lütfen. → «مِرحابا! بیر چای، لوتفِن.»
- `dialogue.lines[2]` Tabii. Başka bir şey? → «تابیی. باشکا بیر شِی؟»
- `dialogue.lines[3]` Evet, bir çorba ve pilav istiyorum. → «اِوِت، بیر چُربا وِه پیلاو ایستیُروم.»
- `dialogue.lines[4]` Peki, su? → «پِکی، سو؟»
- `dialogue.lines[5]` Hayır, su istemiyorum. Teşekkürler. → «هایِر، سو ایستِمیُروم. تِشِکّورلِر.»
- `dialogue.lines[6]` Buyurun! → «بویورون!»
- `dialogue.lines[7]` Teşekkürler. Çorba çok lezzetli! → «تِشِکّورلِر. چُربا چُک لِزِّتلی!»
- `dialogue.lines[8]` Afiyet olsun! → «آفیِت اُلسون!»
- `dialogue.lines[9]` Hesap, lütfen. → «هِساپ، لوتفِن.»
- `grammar[0].examples[0]` Ben çay istiyorum. → «بِن چای ایستیُروم.»
- `grammar[0].examples[1]` Ali kahve istemiyor. → «علی کاهوِه ایستِمیُر.»
- `grammar[0].examples[2]` Biz su istiyoruz. → «بیز سو ایستیُروز.»
- `grammar[0].examples[3]` Bir çorba, lütfen. → «بیر چُربا، لوتفِن.»
- `grammar[0].examples[4]` Çocuklar süt istiyor. → «چُجوکلار سوت ایستیُر.»
- `grammar[1].examples[0]` Pilavı çok seviyorum. → «پیلاوِ چُک سِویُروم.»
- `grammar[1].examples[1]` Reza kahveyi sevmiyor. → «رضا کاهوِیی سِومیُر.»
- `grammar[1].examples[2]` Elif sütü seviyor. → «اِلیف سوتو سِویُر.»
- `grammar[1].examples[3]` Biz çayı çok seviyoruz. → «بیز چایِ چُک سِویُروز.»
- `reading.text[0]` Merhaba! Ben Ali. → «مِرحابا! بِن علی.»
- `reading.text[1]` Kahvaltıyı çok seviyorum. → «کاهوالتِیِ چُک سِویُروم.»
- `reading.text[2]` Ben ekmek, peynir ve çay istiyorum. → «بِن اِکمِک، پِینیر وِه چای ایستیُروم.»
- `reading.text[3]` Eşim Maryam yumurtayı çok seviyor. → «اِشیم مریم یومورتایِ چُک سِویُر.»
- `reading.text[4]` Kızımız Elif süt istiyor. → «کِزِمِز اِلیف سوت ایستیُر.»
- `reading.text[5]` Oğlumuz Amir sütü sevmiyor. → «اُلوموز امیر سوتو سِومیُر.»
- `reading.text[6]` O meyve istiyor. → «اُ مِیوِه ایستیُر.»
- `reading.text[7]` Biz çayı çok seviyoruz! → «بیز چایِ چُک سِویُروز!»
- `sentences[0]` Bir çay, lütfen. → «بیر چای، لوتفِن.»
- `sentences[1]` Ben kahve istemiyorum. → «بِن کاهوِه ایستِمیُروم.»
- `sentences[2]` Pilavı çok seviyorum. → «پیلاوِ چُک سِویُروم.»
- `sentences[3]` Afiyet olsun! → «آفیِت اُلسون!»
- `sentences[4]` Çorba çok lezzetli. → «چُربا چُک لِزِّتلی.»
- `sentences[5]` Elif süt istiyor. → «اِلیف سوت ایستیُر.»
- `sentences[6]` Hesap, lütfen. → «هِساپ، لوتفِن.»
- `sentences[7]` Babam tavuğu seviyor. → «بابام تاووئو سِویُر.»

**u05**

- `words[0].ex` Evde üç oda var. → «اِودِه اوچ اُدا وار.»
- `words[1].ex` Annem mutfakta. → «آنِّم موتفاکتا.»
- `words[2].ex` Banyo nerede? → «بانیو نِرِدِه؟»
- `words[3].ex` Salonda bir televizyon var. → «سالُندا بیر تِلِویزیُن وار.»
- `words[4].ex` Yatak odası çok güzel. → «یاتاک اُداسِ چُک گوزِل.»
- `words[5].ex` Masada çay var. → «ماسادا چای وار.»
- `words[6].ex` Mutfakta dört sandalye var. → «موتفاکتا دُرت ساندالیِه وار.»
- `words[7].ex` Kedi kanepede. → «کِدی کانِپِدِه.»
- `words[8].ex` Salonda iki pencere var. → «سالُندا ایکی پِنجِرِه وار.»
- `words[9].ex` Kapıda kim var? → «کاپِدا کیم وار؟»
- `words[10].ex` Salonda bir İran halısı var. → «سالُندا بیر ایران هالِسِ وار.»
- `words[11].ex` Çocuklar bahçede. → «چُجوکلار باهچِدِه.»
- `words[12].ex` Odada televizyon yok. → «اُدادا تِلِویزیُن یُک.»
- `words[13].ex` Masada bir lamba var. → «ماسادا بیر لامبا وار.»
- `dialogue.lines[0]` Hoş geldin, Can! → «هُش گِلدین، جان!»
- `dialogue.lines[1]` Hoş bulduk, Mina! Evin çok güzel. → «هُش بولدوک، مینا! اِوین چُک گوزِل.»
- `dialogue.lines[2]` Teşekkürler! Bu salon. → «تِشِکّورلِر! بو سالُن.»
- `dialogue.lines[3]` Bu halı çok güzel! → «بو هالِ چُک گوزِل!»
- `dialogue.lines[4]` Evet, bu bir İran halısı. → «اِوِت، بو بیر ایران هالِسِ.»
- `dialogue.lines[5]` Annen ve baban nerede? → «آنِّن وِه بابان نِرِدِه؟»
- `dialogue.lines[6]` Annem mutfakta, babam bahçede. → «آنِّم موتفاکتا، بابام باهچِدِه.»
- `dialogue.lines[7]` Evde kaç oda var? → «اِودِه کاچ اُدا وار؟»
- `dialogue.lines[8]` Üç oda var. Gel, mutfakta çay var! → «اوچ اُدا وار. گِل، موتفاکتا چای وار!»
- `dialogue.lines[9]` Çok güzel! Çayı çok seviyorum. → «چُک گوزِل! چایِ چُک سِویُروم.»
- `grammar[0].examples[0]` Evimizde üç oda var. → «اِویمیزدِه اوچ اُدا وار.»
- `grammar[0].examples[1]` Mutfakta ekmek yok. → «موتفاکتا اِکمِک یُک.»
- `grammar[0].examples[2]` İki çocuğum var. → «ایکی چُجوئوم وار.»
- `grammar[0].examples[3]` Bahçede bir kedi var. → «باهچِدِه بیر کِدی وار.»
- `grammar[0].examples[4]` Evde süt var mı? — Hayır, yok. → «اِودِه سوت وار مِ؟ — هایِر، یُک.»
- `grammar[1].examples[0]` Annem mutfakta. → «آنِّم موتفاکتا.»
- `grammar[1].examples[1]` Kitap masada. → «کیتاپ ماسادا.»
- `grammar[1].examples[2]` Babam nerede? — Bahçede. → «بابام نِرِدِه؟ — باهچِدِه.»
- `grammar[1].examples[3]` Dayım İstanbul'da. → «دایِم ایستانبولدا.»
- `grammar[1].examples[4]` Ben evdeyim. → «بِن اِودِییم.»
- `reading.text[0]` Merhaba! Ben Sara. → «مِرحابا! بِن سارا.»
- `reading.text[1]` Evimiz İstanbul'da. → «اِویمیز ایستانبولدا.»
- `reading.text[2]` Evimizde üç oda, bir mutfak ve bir banyo var. → «اِویمیزدِه اوچ اُدا، بیر موتفاک وِه بیر بانیو وار.»
- `reading.text[3]` Salonda büyük bir kanepe ve bir İran halısı var. → «سالُندا بویوک بیر کانِپِه وِه بیر ایران هالِسِ وار.»
- `reading.text[4]` Televizyon yok. → «تِلِویزیُن یُک.»
- `reading.text[5]` Mutfakta bir masa ve dört sandalye var. → «موتفاکتا بیر ماسا وِه دُرت ساندالیِه وار.»
- `reading.text[6]` Bahçede bir kedi var. → «باهچِدِه بیر کِدی وار.»
- `reading.text[7]` Şimdi annem mutfakta, babam bahçede. → «شیمدی آنِّم موتفاکتا، بابام باهچِدِه.»
- `reading.text[8]` Ben odamdayım. → «بِن اُدامدایِم.»
- `sentences[0]` Banyo nerede? → «بانیو نِرِدِه؟»
- `sentences[1]` Annem mutfakta. → «آنِّم موتفاکتا.»
- `sentences[2]` Evde süt yok. → «اِودِه سوت یُک.»
- `sentences[3]` Salonda bir kanepe var. → «سالُندا بیر کانِپِه وار.»
- `sentences[4]` Kedi bahçede. → «کِدی باهچِدِه.»
- `sentences[5]` Ben odamdayım. → «بِن اُدامدایِم.»
- `sentences[6]` Masada çay ve ekmek var. → «ماسادا چای وِه اِکمِک وار.»
- `sentences[7]` Dayım Tahran'da. → «دایِم تاهراندا.»

**u06**

- `words[0].ex` Saatim masada. → «ساآتیم ماسادا.»
- `words[1].ex` Sabah çay içiyorum. → «ساباه چای ایچیُروم.»
- `words[2].ex` Akşam televizyon izliyoruz. → «آکشام تِلِویزیُن ایزلیُروز.»
- `words[3].ex` Gece saat on birde uyuyorum. → «گِجِه ساآت اُن بیردِه اویویُروم.»
- `words[4].ex` Çocuklar süt içiyor. → «چُجوکلار سوت ایچیُر.»
- `words[5].ex` Ben saat yedide kalkıyorum. → «بِن ساآت یِدیدِه کالکِیُروم.»
- `words[6].ex` Babam bir okulda çalışıyor. → «بابام بیر اُکولدا چالِشِیُر.»
- `words[7].ex` Annem mutfakta yemek yapıyor. → «آنِّم موتفاکتا یِمِک یاپِیُر.»
- `words[8].ex` Sara kitap okuyor. → «سارا کیتاپ اُکویُر.»
- `words[9].ex` Çocuklar televizyon izliyor. → «چُجوکلار تِلِویزیُن ایزلیُر.»
- `words[10].ex` Bebek uyuyor. → «بِبِک اویویُر.»
- `words[11].ex` Şimdi saat sekiz. → «شیمدی ساآت سِکیز.»
- `words[12].ex` Kahvaltı yapıyorum, sonra çalışıyorum. → «کاهوالتِ یاپِیُروم، سُنرا چالِشِیُروم.»
- `words[13].ex` Her gün çay içiyorum. → «هِر گون چای ایچیُروم.»
- `dialogue.lines[0]` Günaydın Mehmet! → «گونایدِن مِهمِت!»
- `dialogue.lines[1]` Günaydın Maryam! Nasılsın? → «گونایدِن مریم! ناسِلسِن؟»
- `dialogue.lines[2]` İyiyim, teşekkürler. Sen her sabah saat kaçta kalkıyorsun? → «ای‌یی‌ییم، تِشِکّورلِر. سِن هِر ساباه ساآت کاچتا کالکِیُرسون؟»
- `dialogue.lines[3]` Yedide kalkıyorum. Ya sen? → «یِدیدِه کالکِیُروم. یا سِن؟»
- `dialogue.lines[4]` Ben altıda kalkıyorum ve kahvaltı yapıyorum. → «بِن آلتِدا کالکِیُروم وِه کاهوالتِ یاپِیُروم.»
- `dialogue.lines[5]` Altıda! Çok erken! → «آلتِدا! چُک اِرکِن!»
- `dialogue.lines[6]` Evet, ama gece saat onda uyuyorum. → «اِوِت، آما گِجِه ساآت اُندا اویویُروم.»
- `dialogue.lines[7]` Şimdi saat kaç? → «شیمدی ساآت کاچ؟»
- `dialogue.lines[8]` Saat sekiz buçuk. → «ساآت سِکیز بوچوک.»
- `dialogue.lines[9]` Eyvah, geç kalıyorum! İyi günler, Maryam! → «اِیواه، گِچ کالِیُروم! ای‌یی گونلِر، مریم!»
- `grammar[0].examples[0]` Ben her gün çalışıyorum. → «بِن هِر گون چالِشِیُروم.»
- `grammar[0].examples[1]` Sen şimdi ne yapıyorsun? → «سِن شیمدی نِه یاپِیُرسون؟»
- `grammar[0].examples[2]` Ayşe kitap okuyor. → «آیشِه کیتاپ اُکویُر.»
- `grammar[0].examples[3]` Biz akşam televizyon izliyoruz. → «بیز آکشام تِلِویزیُن ایزلیُروز.»
- `grammar[0].examples[4]` Çocuklar saat dokuzda uyuyor. → «چُجوکلار ساآت دُکوزدا اویویُر.»
- `grammar[1].examples[0]` Saat kaç? Saat sekiz. → «ساآت کاچ؟ ساآت سِکیز.»
- `grammar[1].examples[1]` Saat on bir buçuk. → «ساآت اُن بیر بوچوک.»
- `grammar[1].examples[2]` Saat kaçta kalkıyorsun? Altıda. → «ساآت کاچتا کالکِیُرسون؟ آلتِدا.»
- `grammar[1].examples[3]` Saat üçte çay içiyoruz. → «ساآت اوچتِه چای ایچیُروز.»
- `grammar[1].examples[4]` Babam saat beşte kalkıyor. → «بابام ساآت بِشتِه کالکِیُر.»
- `reading.text[0]` Merhaba! Benim adım Ali. → «مِرحابا! بِنیم آدِم علی.»
- `reading.text[1]` Her gün saat altı buçukta kalkıyorum. → «هِر گون ساآت آلتِ بوچوکتا کالکِیُروم.»
- `reading.text[2]` Saat yedide kahvaltı yapıyorum: ekmek ve peynir yiyorum, çay içiyorum. → «ساآت یِدیدِه کاهوالتِ یاپِیُروم: اِکمِک وِه پِینیر ییُروم، چای ایچیُروم.»
- `reading.text[3]` Ben öğretmenim. Bir okulda çalışıyorum. → «بِن اُرِتمِنیم. بیر اُکولدا چالِشِیُروم.»
- `reading.text[4]` Akşam eşim ve ben yemek yapıyoruz. → «آکشام اِشیم وِه بِن یِمِک یاپِیُروز.»
- `reading.text[5]` Çocuklar kitap okuyor. → «چُجوکلار کیتاپ اُکویُر.»
- `reading.text[6]` Saat dokuzda hep birlikte televizyon izliyoruz. → «ساآت دُکوزدا هِپ بیرلیکتِه تِلِویزیُن ایزلیُروز.»
- `reading.text[7]` Gece saat on birde uyuyorum. → «گِجِه ساآت اُن بیردِه اویویُروم.»
- `sentences[0]` Annem sabah çay içiyor. → «آنِّم ساباه چای ایچیُر.»
- `sentences[1]` Biz akşam yemek yapıyoruz. → «بیز آکشام یِمِک یاپِیُروز.»
- `sentences[2]` Çocuklar saat dokuzda uyuyor. → «چُجوکلار ساآت دُکوزدا اویویُر.»
- `sentences[3]` Sen şimdi ne yapıyorsun? → «سِن شیمدی نِه یاپِیُرسون؟»
- `sentences[4]` Babam her gün çalışıyor. → «بابام هِر گون چالِشِیُر.»
- `sentences[5]` Saat sekiz buçuk. → «ساآت سِکیز بوچوک.»
- `sentences[6]` Ayşe kitap okuyor. → «آیشِه کیتاپ اُکویُر.»

**u07**

- `words[0].ex` İstanbul büyük bir şehir. → «ایستانبول بویوک بیر شِهیر.»
- `words[1].ex` Çocuklar okula gidiyor. → «چُجوکلار اُکولا گیدیُر.»
- `words[2].ex` Hastane çok yakın. → «هاستانِه چُک یاکِن.»
- `words[3].ex` Eczane solda. → «اِجزانِه سُلدا.»
- `words[4].ex` Babam bankada çalışıyor. → «بابام بانکادا چالِشِیُر.»
- `words[5].ex` Annem markete gidiyor. → «آنِّم مارکِتِه گیدیُر.»
- `words[6].ex` Akşam parka gidiyoruz. → «آکشام پارکا گیدیُروز.»
- `words[7].ex` Cami çok güzel. → «جامی چُک گوزِل.»
- `words[8].ex` Otobüs geliyor. → «اُتُبوس گِلیُر.»
- `words[9].ex` Durak sağda. → «دوراک ساادا.»
- `words[10].ex` Ben eve gidiyorum. → «بِن اِوِه گیدیُروم.»
- `words[11].ex` Sağa dönün. → «ساآ دُنون.»
- `words[12].ex` Banka solda. → «بانکا سُلدا.»
- `words[13].ex` Düz gidin. → «دوز گیدین.»
- `dialogue.lines[0]` Affedersiniz, eczane nerede? → «آفِّدِرسینیز، اِجزانِه نِرِدِه؟»
- `dialogue.lines[1]` Eczane çok yakın. Düz gidin, sonra sağa dönün. → «اِجزانِه چُک یاکِن. دوز گیدین، سُنرا ساآ دُنون.»
- `dialogue.lines[2]` Düz gidiyorum, sonra sağa dönüyorum. Tamam. → «دوز گیدیُروم، سُنرا ساآ دُنویُروم. تامام.»
- `dialogue.lines[3]` Evet. Eczane solda. → «اِوِت. اِجزانِه سُلدا.»
- `dialogue.lines[4]` Teşekkür ederim. Hastane nerede? → «تِشِکّور اِدِریم. هاستانِه نِرِدِه؟»
- `dialogue.lines[5]` Hastane biraz uzak. Otobüse binin. → «هاستانِه بیراز اوزاک. اُتُبوسِه بینین.»
- `dialogue.lines[6]` Otobüs durağı nerede? → «اُتُبوس دورائِ نِرِدِه؟»
- `dialogue.lines[7]` Durak orada, solda. → «دوراک اُرادا، سُلدا.»
- `dialogue.lines[8]` Çok teşekkürler! İyi günler! → «چُک تِشِکّورلِر! ای‌یی گونلِر!»
- `dialogue.lines[9]` Rica ederim. İyi günler! → «ریجا اِدِریم. ای‌یی گونلِر!»
- `grammar[0].examples[0]` Ben okula gidiyorum. → «بِن اُکولا گیدیُروم.»
- `grammar[0].examples[1]` Annem markete gidiyor. → «آنِّم مارکِتِه گیدیُر.»
- `grammar[0].examples[2]` Akşam eve gidiyoruz. → «آکشام اِوِه گیدیُروز.»
- `grammar[0].examples[3]` Otobüs hastaneye gidiyor. → «اُتُبوس هاستانِیِه گیدیُر.»
- `grammar[0].examples[4]` Nereye gidiyorsun? Parka. → «نِرِیِه گیدیُرسون؟ پارکا.»
- `grammar[1].examples[0]` Düz gidin. → «دوز گیدین.»
- `grammar[1].examples[1]` Sonra sağa dönün. → «سُنرا ساآ دُنون.»
- `grammar[1].examples[2]` Banka solda. → «بانکا سُلدا.»
- `grammar[1].examples[3]` Lütfen oturun. → «لوتفِن اُتورون.»
- `grammar[1].examples[4]` Eczane nerede? Düz gidin, sonra sola dönün. → «اِجزانِه نِرِدِه؟ دوز گیدین، سُنرا سُلا دُنون.»
- `reading.text[0]` Saat dokuz. Maryam ve Ali durakta. → «ساآت دُکوز. مریم وِه علی دوراکتا.»
- `reading.text[1]` Otobüs geliyor. → «اُتُبوس گِلیُر.»
- `reading.text[2]` Önce bankaya gidiyorlar. → «اُنجِه بانکایا گیدیُرلار.»
- `reading.text[3]` Sonra Maryam eczaneye gidiyor. → «سُنرا مریم اِجزانِیِه گیدیُر.»
- `reading.text[4]` Ali markete gidiyor. → «علی مارکِتِه گیدیُر.»
- `reading.text[5]` Saat on ikide parka gidiyorlar. → «ساآت اُن ایکیدِه پارکا گیدیُرلار.»
- `reading.text[6]` Park çok güzel ve camiye çok yakın. → «پارک چُک گوزِل وِه جامیِه چُک یاکِن.»
- `reading.text[7]` Akşam saat altıda eve gidiyorlar. → «آکشام ساآت آلتِدا اِوِه گیدیُرلار.»
- `sentences[0]` Ben her gün okula gidiyorum. → «بِن هِر گون اُکولا گیدیُروم.»
- `sentences[1]` Babam bankaya gidiyor. → «بابام بانکایا گیدیُر.»
- `sentences[2]` Affedersiniz, hastane nerede? → «آفِّدِرسینیز، هاستانِه نِرِدِه؟»
- `sentences[3]` Düz gidin, sonra sola dönün. → «دوز گیدین، سُنرا سُلا دُنون.»
- `sentences[4]` Eczane sağda. → «اِجزانِه ساادا.»
- `sentences[5]` Otobüs durağı çok yakın. → «اُتُبوس دورائِ چُک یاکِن.»
- `sentences[6]` Akşam eve gidiyoruz. → «آکشام اِوِه گیدیُروز.»
- `sentences[7]` Nereye gidiyorsun? → «نِرِیِه گیدیُرسون؟»

**u08**

- `words[0].ex` Ben kırmızı elmayı seviyorum. → «بِن کِرمِزِ اِلمایِ سِویُروم.»
- `words[1].ex` Benim çantam mavi. → «بِنیم چانتام ماوی.»
- `words[2].ex` Yeşil çay istiyorum. → «یِشیل چای ایستیُروم.»
- `words[3].ex` Muz sarı. → «موز سارِ.»
- `words[4].ex` Benim ayakkabılarım siyah. → «بِنیم آیاکّابِلارِم سیاه.»
- `words[5].ex` Süt beyaz. → «سوت بِیاز.»
- `words[6].ex` Bu gömlek çok güzel. → «بو گُملِک چُک گوزِل.»
- `words[7].ex` Ayşe mavi bir elbise istiyor. → «آیشِه ماوی بیر اِلبیسِه ایستیُر.»
- `words[8].ex` Bu pantolon kaç lira? → «بو پانتُلُن کاچ لیرا؟»
- `words[9].ex` Yeni ayakkabı istiyorum. → «یِنی آیاکّابِ ایستیُروم.»
- `words[10].ex` Çantam masada. → «چانتام ماسادا.»
- `words[11].ex` Bu çanta çok pahalı. → «بو چانتا چُک پاهالِ.»
- `words[12].ex` Bu gömlek ucuz. → «بو گُملِک اوجوز.»
- `words[13].ex` Annem ekmek alıyor. → «آنِّم اِکمِک آلِیُر.»
- `dialogue.lines[0]` Hoş geldiniz! Buyurun. → «هُش گِلدینیز! بویورون.»
- `dialogue.lines[1]` Merhaba. Bir gömlek istiyorum. → «مِرحابا. بیر گُملِک ایستیُروم.»
- `dialogue.lines[2]` Bu mavi gömlek çok güzel. → «بو ماوی گُملِک چُک گوزِل.»
- `dialogue.lines[3]` Evet, güzel. Başka renk var mı? → «اِوِت، گوزِل. باشکا رِنک وار مِ؟»
- `dialogue.lines[4]` Var. Beyaz ve siyah da var. → «وار. بِیاز وِه سیاه دا وار.»
- `dialogue.lines[5]` Beyaz gömlek kaç lira? → «بِیاز گُملِک کاچ لیرا؟»
- `dialogue.lines[6]` Sekiz yüz lira. → «سِکیز یوز لیرا.»
- `dialogue.lines[7]` Biraz pahalı. İndirim var mı? → «بیراز پاهالِ. ایندیریم وار مِ؟»
- `dialogue.lines[8]` Tamam, sizin için yedi yüz elli lira. → «تامام، سیزین ایچین یِدی یوز اِلّی لیرا.»
- `dialogue.lines[9]` Tamam, bunu alıyorum. Teşekkürler! → «تامام، بونو آلِیُروم. تِشِکّورلِر!»
- `grammar[0].examples[0]` Bu gömlek çok güzel. → «بو گُملِک چُک گوزِل.»
- `grammar[0].examples[1]` Şu çanta kaç lira? → «شو چانتا کاچ لیرا؟»
- `grammar[0].examples[2]` O ayakkabılar pahalı. → «اُ آیاکّابِلار پاهالِ.»
- `grammar[0].examples[3]` Bunu alabilir miyim? → «بونو آلابیلیر می‌ییم؟»
- `grammar[0].examples[4]` Ben şunu istiyorum. → «بِن شونو ایستیُروم.»
- `grammar[1].examples[0]` Bu çanta kaç lira? Dört yüz lira. → «بو چانتا کاچ لیرا؟ دُرت یوز لیرا.»
- `grammar[1].examples[1]` Gömlek ne kadar? Altı yüz elli lira. → «گُملِک نِه کادار؟ آلتِ یوز اِلّی لیرا.»
- `grammar[1].examples[2]` Ekmek on beş lira. → «اِکمِک اُن بِش لیرا.»
- `grammar[1].examples[3]` Ayakkabılar bin iki yüz lira. → «آیاکّابِلار بین ایکی یوز لیرا.»
- `reading.text[0]` Bugün Elif ve annesi alışverişe gidiyor. → «بوگون اِلیف وِه آنِّسی آلِشوِریشِه گیدیُر.»
- `reading.text[1]` Elif sarı bir elbise istiyor. → «اِلیف سارِ بیر اِلبیسِه ایستیُر.»
- `reading.text[2]` Ama sarı elbise yok. → «آما سارِ اِلبیسِه یُک.»
- `reading.text[3]` Yeşil bir elbise var; çok güzel. → «یِشیل بیر اِلبیسِه وار؛ چُک گوزِل.»
- `reading.text[4]` Elbise dokuz yüz lira. Biraz pahalı. → «اِلبیسِه دُکوز یوز لیرا. بیراز پاهالِ.»
- `reading.text[5]` Annesi siyah bir çanta alıyor. Çanta ucuz, üç yüz lira. → «آنِّسی سیاه بیر چانتا آلِیُر. چانتا اوجوز، اوچ یوز لیرا.»
- `reading.text[6]` Elif, “Bunu alabilir miyim?” diyor. Annesi, “Tamam.” diyor. → «اِلیف، «بونو آلابیلیر می‌ییم؟» دیُر. آنِّسی، «تامام.» دیُر.»
- `reading.text[7]` Elif çok mutlu! → «اِلیف چُک موتلو!»
- `sentences[0]` Bu kırmızı çanta çok güzel. → «بو کِرمِزِ چانتا چُک گوزِل.»
- `sentences[1]` Şu ayakkabılar kaç lira? → «شو آیاکّابِلار کاچ لیرا؟»
- `sentences[2]` Beyaz gömlek beş yüz lira. → «بِیاز گُملِک بِش یوز لیرا.»
- `sentences[3]` Mavi pantolon biraz pahalı. → «ماوی پانتُلُن بیراز پاهالِ.»
- `sentences[4]` Bunu alabilir miyim? → «بونو آلابیلیر می‌ییم؟»
- `sentences[5]` Sadece bakıyorum, teşekkürler. → «سادِجِه باکِیُروم، تِشِکّورلِر.»
- `sentences[6]` Annem yeşil bir elbise alıyor. → «آنِّم یِشیل بیر اِلبیسِه آلِیُر.»

**u09**

- `words[0].ex` Bugün hava nasıl? → «بوگون هاوا ناسِل؟»
- `words[1].ex` Bugün güneş var. → «بوگون گونِش وار.»
- `words[2].ex` Yağmur yağıyor. → «یاامور یائِیُر.»
- `words[3].ex` Kar çok güzel! → «کار چُک گوزِل!»
- `words[4].ex` Bugün çok bulut var. → «بوگون چُک بولوت وار.»
- `words[5].ex` Bugün çok rüzgâr var. → «بوگون چُک روزگار وار.»
- `words[6].ex` Çay çok sıcak. → «چای چُک سِجاک.»
- `words[7].ex` Su çok soğuk. → «سو چُک سُئوک.»
- `words[8].ex` Dört mevsim var: ilkbahar, yaz, sonbahar ve kış. → «دُرت مِوسیم وار: ایلکباهار، یاز، سُنباهار وِه کِش.»
- `words[9].ex` İlkbaharda hava güzel. → «ایلکباهاردا هاوا گوزِل.»
- `words[10].ex` Yazın hava çok sıcak. → «یازِن هاوا چُک سِجاک.»
- `words[11].ex` Sonbaharda yağmur yağıyor. → «سُنباهاردا یاامور یائِیُر.»
- `words[12].ex` Kışın hava çok soğuk. → «کِشِن هاوا چُک سُئوک.»
- `words[13].ex` Bir yılda on iki ay var. → «بیر یِلدا اُن ایکی آی وار.»
- `dialogue.lines[0]` Alo, Ali! Nasılsın? → «آلُ، علی! ناسِلسِن؟»
- `dialogue.lines[1]` İyiyim Ayşe, teşekkürler. İstanbul'da hava nasıl? → «ای‌یی‌ییم آیشِه، تِشِکّورلِر. ایستانبولدا هاوا ناسِل؟»
- `dialogue.lines[2]` Burada yağmur yağıyor. Hava biraz soğuk. Tahran'da hava nasıl? → «بورادا یاامور یائِیُر. هاوا بیراز سُئوک. تاهراندا هاوا ناسِل؟»
- `dialogue.lines[3]` Tahran'da hava çok güzel. Güneşli ve sıcak. → «تاهراندا هاوا چُک گوزِل. گونِشلی وِه سِجاک.»
- `dialogue.lines[4]` Ne güzel! Ben de Tahran'a gelmek istiyorum. → «نِه گوزِل! بِن دِه تاهرانا گِلمِک ایستیُروم.»
- `dialogue.lines[5]` Gel! Ama yazın Tahran çok sıcak. İlkbaharda gel. → «گِل! آما یازِن تاهران چُک سِجاک. ایلکباهاردا گِل.»
- `dialogue.lines[6]` Tamam! Nisanda geliyorum. → «تامام! نیساندا گِلیُروم.»
- `dialogue.lines[7]` Harika! Nisanda Tahran çok güzel. → «هاریکا! نیساندا تاهران چُک گوزِل.»
- `dialogue.lines[8]` Görüşürüz, Ali! → «گُروشوروز، علی!»
- `dialogue.lines[9]` Görüşürüz, Ayşe! → «گُروشوروز، آیشِه!»
- `grammar[0].examples[0]` Hava nasıl? Hava güneşli. → «هاوا ناسِل؟ هاوا گونِشلی.»
- `grammar[0].examples[1]` Bugün hava çok soğuk. → «بوگون هاوا چُک سُئوک.»
- `grammar[0].examples[2]` Yağmur yağıyor. → «یاامور یائِیُر.»
- `grammar[0].examples[3]` Hava bulutlu ve rüzgârlı. → «هاوا بولوتلو وِه روزگارلِ.»
- `grammar[0].examples[4]` Bugün kar yağıyor. → «بوگون کار یائِیُر.»
- `grammar[1].examples[0]` Temmuzda hava çok sıcak. → «تِمّوزدا هاوا چُک سِجاک.»
- `grammar[1].examples[1]` Kışın kar yağıyor. → «کِشِن کار یائِیُر.»
- `grammar[1].examples[2]` İlkbaharda hava güzel. → «ایلکباهاردا هاوا گوزِل.»
- `grammar[1].examples[3]` Benim doğum günüm eylülde. → «بِنیم دُئوم گونوم اِیلولدِه.»
- `grammar[1].examples[4]` Yazın denize gidiyoruz. → «یازِن دِنیزِه گیدیُروز.»
- `reading.text[0]` Türkiye'de dört mevsim var. → «تورکیِدِه دُرت مِوسیم وار.»
- `reading.text[1]` İlkbaharda hava güzel; bazen yağmur yağıyor. → «ایلکباهاردا هاوا گوزِل؛ بازِن یاامور یائِیُر.»
- `reading.text[2]` Yazın hava çok sıcak ve güneşli. → «یازِن هاوا چُک سِجاک وِه گونِشلی.»
- `reading.text[3]` Temmuzda ve ağustosta insanlar denize gidiyor. → «تِمّوزدا وِه آئوستُستا اینسانلار دِنیزِه گیدیُر.»
- `reading.text[4]` Sonbaharda hava bulutlu ve rüzgârlı. → «سُنباهاردا هاوا بولوتلو وِه روزگارلِ.»
- `reading.text[5]` Kışın hava soğuk. → «کِشِن هاوا سُئوک.»
- `reading.text[6]` Ocakta ve şubatta İstanbul'da bazen kar yağıyor. → «اُجاکتا وِه شوباتّا ایستانبولدا بازِن کار یائِیُر.»
- `reading.text[7]` Benim en sevdiğim mevsim ilkbahar. → «بِنیم اِن سِودییم مِوسیم ایلکباهار.»
- `sentences[0]` Bugün hava çok güzel. → «بوگون هاوا چُک گوزِل.»
- `sentences[1]` Yağmur yağıyor, hava soğuk. → «یاامور یائِیُر، هاوا سُئوک.»
- `sentences[2]` Kışın kar yağıyor. → «کِشِن کار یائِیُر.»
- `sentences[3]` Yazın denize gidiyoruz. → «یازِن دِنیزِه گیدیُروز.»
- `sentences[4]` Benim doğum günüm martta. → «بِنیم دُئوم گونوم مارتّا.»
- `sentences[5]` Sonbaharda hava bulutlu. → «سُنباهاردا هاوا بولوتلو.»
- `sentences[6]` Hava nasıl? Güneşli ve sıcak. → «هاوا ناسِل؟ گونِشلی وِه سِجاک.»

**u10**

- `words[0].ex` Boş zamanımda kitap okuyorum. → «بُش زامانِمدا کیتاپ اُکویُروم.»
- `words[1].ex` Yazın denizde yüzüyoruz. → «یازِن دِنیزدِه یوزویُروز.»
- `words[2].ex` Babam her sabah parkta koşuyor. → «بابام هِر ساباه پارکتا کُشویُر.»
- `words[3].ex` Ali her akşam futbol oynuyor. → «علی هِر آکشام فوتبُل اُینویُر.»
- `words[4].ex` Çocuklar parkta oynuyor. → «چُجوکلار پارکتا اُینویُر.»
- `words[5].ex` Elif resim yapıyor. → «اِلیف رِسیم یاپِیُر.»
- `words[6].ex` Akşam müzik dinliyorum. → «آکشام موزیک دینلیُروم.»
- `words[7].ex` Lütfen dinleyin! → «لوتفِن دینلِیین!»
- `words[8].ex` Sara çok güzel şarkı söylüyor. → «سارا چُک گوزِل شارکِ سُیلویُر.»
- `words[9].ex` Ben bisiklete binebilirim. → «بِن بیسیکلِتِه بینِبیلیریم.»
- `words[10].ex` Maryam gitar çalıyor. → «مریم گیتار چالِیُر.»
- `words[11].ex` Akşam yürüyüş yapıyoruz. → «آکشام یورویوش یاپِیُروز.»
- `words[12].ex` Sinema çok yakın. → «سینِما چُک یاکِن.»
- `words[13].ex` Dedem ve ben satranç oynuyoruz. → «دِدِم وِه بِن ساترانچ اُینویُروز.»
- `dialogue.lines[0]` Ali, boş zamanında ne yapıyorsun? → «علی، بُش زامانِندا نِه یاپِیُرسون؟»
- `dialogue.lines[1]` Futbol oynamayı severim. Sen futbol sever misin? → «فوتبُل اُینامایِ سِوِریم. سِن فوتبُل سِوِر میسین؟»
- `dialogue.lines[2]` Hayır, sevmem. Ama yüzmeyi çok severim. → «هایِر، سِومِم. آما یوزمِیی چُک سِوِریم.»
- `dialogue.lines[3]` Ben yüzemem. Zor mu? → «بِن یوزِمِم. زُر مو؟»
- `dialogue.lines[4]` Zor değil. Ben sana öğretebilirim! → «زُر دِییل. بِن سانا اُرِتِبیلیریم!»
- `dialogue.lines[5]` Harika! Sen satranç oynayabilir misin? → «هاریکا! سِن ساترانچ اُینایابیلیر میسین؟»
- `dialogue.lines[6]` Evet, oynayabilirim. Satranç oynamayı da severim. → «اِوِت، اُینایابیلیریم. ساترانچ اُینامایِ دا سِوِریم.»
- `dialogue.lines[7]` Ben de! Akşam birlikte oynayalım mı? → «بِن دِه! آکشام بیرلیکتِه اُینایالِم مِ؟»
- `dialogue.lines[8]` Tamam! Saat yedide? → «تامام! ساآت یِدیدِه؟»
- `dialogue.lines[9]` Evet, saat yedide! → «اِوِت، ساآت یِدیدِه!»
- `grammar[0].examples[0]` Ben yüzebilirim. → «بِن یوزِبیلیریم.»
- `grammar[0].examples[1]` Maryam gitar çalabilir. → «مریم گیتار چالابیلیر.»
- `grammar[0].examples[2]` Biz bisiklete binebiliriz. → «بیز بیسیکلِتِه بینِبیلیریز.»
- `grammar[0].examples[3]` Babam şarkı söyleyemez. → «بابام شارکِ سُیلِیِمِز.»
- `grammar[0].examples[4]` Ben satranç oynayamam. → «بِن ساترانچ اُینایامام.»
- `grammar[1].examples[0]` Kitap okumayı severim. → «کیتاپ اُکومایِ سِوِریم.»
- `grammar[1].examples[1]` Yüzmeyi sever misin? Evet, çok severim. → «یوزمِیی سِوِر میسین؟ اِوِت، چُک سِوِریم.»
- `grammar[1].examples[2]` Babam futbol oynamayı sever. → «بابام فوتبُل اُینامایِ سِوِر.»
- `grammar[1].examples[3]` Gitar çalabilir misin? Hayır, çalamam. → «گیتار چالابیلیر میسین؟ هایِر، چالامام.»
- `grammar[1].examples[4]` Hava soğuk mu? → «هاوا سُئوک مو؟»
- `reading.text[0]` Benim adım Maryam. Ailemde dört kişi var. → «بِنیم آدِم مریم. آئیلِمدِه دُرت کیشی وار.»
- `reading.text[1]` Eşim Ali satranç oynamayı çok sever. → «اِشیم علی ساترانچ اُینامایِ چُک سِوِر.»
- `reading.text[2]` Kızım Elif resim yapabilir; resimleri çok güzel. → «کِزِم اِلیف رِسیم یاپابیلیر؛ رِسیملِری چُک گوزِل.»
- `reading.text[3]` Oğlum Amir futbol oynamayı sever ama yüzemez. → «اُلوم امیر فوتبُل اُینامایِ سِوِر آما یوزِمِز.»
- `reading.text[4]` Ben kitap okumayı ve müzik dinlemeyi severim. → «بِن کیتاپ اُکومایِ وِه موزیک دینلِمِیی سِوِریم.»
- `reading.text[5]` Gitar da çalabilirim. → «گیتار دا چالابیلیریم.»
- `reading.text[6]` Hafta sonu hep birlikte parka gidiyoruz ve bisiklete biniyoruz. → «هافتا سُنو هِپ بیرلیکتِه پارکا گیدیُروز وِه بیسیکلِتِه بینیُروز.»
- `reading.text[7]` Sen boş zamanında ne yapmayı seversin? → «سِن بُش زامانِندا نِه یاپمایِ سِوِرسین؟»
- `sentences[0]` Ben yüzebilirim ama gitar çalamam. → «بِن یوزِبیلیریم آما گیتار چالامام.»
- `sentences[1]` Kitap okumayı severim. → «کیتاپ اُکومایِ سِوِریم.»
- `sentences[2]` Futbol oynamayı sever misin? → «فوتبُل اُینامایِ سِوِر میسین؟»
- `sentences[3]` Babam her sabah koşuyor. → «بابام هِر ساباه کُشویُر.»
- `sentences[4]` Akşam sinemaya gidiyoruz. → «آکشام سینِمایا گیدیُروز.»
- `sentences[5]` Satranç oynayabilir misin? → «ساترانچ اُینایابیلیر میسین؟»
- `sentences[6]` Çocuklar parkta bisiklete biniyor. → «چُجوکلار پارکتا بیسیکلِتِه بینیُر.»
- `sentences[7]` Annem şarkı söylemeyi çok sever. → «آنِّم شارکِ سُیلِمِیی چُک سِوِر.»
