# Critic review (pass 4): tr-fa A1 (u00–u10)

I checked every item in all 11 units: letters, sounds, words (`t`, `s`, `pr`, `pl`, `ex`, emoji), phrases, dialogues, grammar
(titles, explanations, tables, examples, every exercise and its answer), readings and questions, sentences, goals and titles.
I also ran three scripted checks:
- A rule-based Turkish-to-Persian transliterator that follows the course `pr` conventions, compared against every `pr` (about 790).
- Persian text: Arabic ي/ك, «می»/«ها» without a half-space, and "Neda".
- Exercise structure: one `___` per gap item, 3–7 tiles per order item, no duplicate options, unique headwords.

`python3 tools/validate.py content/tr-fa/A1/*.json` prints OK for all 11 files. `python3 tools/audit.py` reports `tr-fa A1: {}`.

## 1. Verdict

This is a solid, well-built A1 course. The Turkish is natural standard İstanbul Turkish. The Persian is idiomatic, with correct half-spaces.
The grammar explanations are accurate and well judged for Persian speakers. The comparisons with Persian («ـَم، ـَت، ـَش», «ـی» for -lı, «را» for the accusative) are a real strength.
Every exercise has exactly one correct answer. Every reading answer is right, and the `pr` guides are consistent: apart from conventions the earlier passes chose on purpose, the transliterator found just one real deviation (banyo).
The weak points are not errors. The question particle *mi* is formally taught only in the last unit. A few pictures repeat across units. Exercise types are mostly one-suffix gaps. The course could do much more with what this family already knows: Persian loanwords and Azerbaijani Turkish.

## 2. Fixed

| Unit | Path | Before → After | Reason |
|---|---|---|---|
| u05 | `words[2].pr` (banyo) | «بانیو» → «بانیُ» | Final *o* is «ـُ» everywhere else in the course (radyo «رادیُ», judo «ژودُ», Alo «آلُ»). «بانیو» reads as *banyu*. |
| u05 | `words[2].ex.pr` | «بانیو نِرِدِه؟» → «بانیُ نِرِدِه؟» | Same. |
| u05 | `reading.text[2].pr` | «… وِه بیر بانیو وار.» → «… وِه بیر بانیُ وار.» | Same. |
| u05 | `sentences[0].pr` | «بانیو نِرِدِه؟» → «بانیُ نِرِدِه؟» | Same. |
| u03 | `reading.text[5]` (t, s, pr) | *Annem ve babam Tebrizli.* «مادر و پدرم تبریزی هستند.» → *Annem ve babam Şirazlı.* «مادر و پدرم شیرازی هستند.» «آنِّم وِه بابام شیرازلِ.» | The narrator is Maryam, who is *Şirazlı* in u01 (reading and an order exercise). Pass 3 made the family consistent across units, but this line was missed. |
| u03 | `reading.questions[3].answer` (*Maryam'ın annesi nereli?*) | 0 (Tebrizli) → 2 (Şirazlı) | Follows the text change. The options are unchanged. |
| u04 | `grammar[0].explain` | Added a paragraph after the word-order paragraph: «نکته: وقتی فاعلِ جمع (مثل **çocuklar**) در جمله آمده باشد، **-lar** آخرِ فعل لازم نیست: **Çocuklar süt istiyor.** (یا istiyorlar) = بچه‌ها شیر می‌خواهند.» | The table teaches *onlar istiyorlar*, but the unit uses *Çocuklar süt istiyor* three times (w04 ex, grammar example 5, reading). Without this note it looks like a mistake. |
| u00 | `sentences[2].alts` | + ["Baba ve anne."] | The app also uses `sentences` as word-order tasks. Swapping the two parts of a "ve" pair is just as correct, and pass 3 already accepted the same kind of swap (*Büyükannem ve dedem*). |
| u00 | `sentences[3].alts` | + ["Peynir ve ekmek."] | Same. |
| u01 | `sentences[3].alts` | + ["Mehmet Türk, Ayşe de Türk."] | Same words, and the meaning is the same. |
| u02 | `sentences[4].alts` | + ["İki muz, üç elma."] | Swapping list items. The app strips punctuation before comparing. |
| u05 | `sentences[6].alts` | + ["Masada ekmek ve çay var."] | Swapping a "ve" pair. |
| u09 | `sentences[1].alts` | + ["Hava soğuk, yağmur yağıyor."] | Two clauses whose order is free. |
| u09 | `sentences[6].alts` | + ["Hava nasıl? Sıcak ve güneşli."] | Swapping a "ve" pair. |

**Count:** 4 `pr` fields (1 word), 2 fields for the reading consistency fix (the text line, with its `t`, `s` and `pr`, and one answer index), 1 grammar explanation, and 7 order alternatives.

I left alone everything the earlier passes decided on purpose:
- the oğul / öğrenci / öğretmen guides, rüzgâr «روزگار», tabii «تابیی», sağa «ساآ» and miyim «می‌ییم»
- the half-spaces in «بویوک‌آنِّه» and «ایستی‌یُرسون»
- the lowercase months and «حرف صدادار» vs «واکه»
- the Mina double role

## 3. Remaining issues (not fixed: they need a decision or more work)

### Medium
1. **The question particle *mi* is taught too late.** It is used from u03 (*Kardeşin var mı?*) and u05 (*var mı?*, with one line in the explanation). Its four-way harmony and the rule that the personal ending goes on *mi* (*misin*) are explained only in u10 g02.
   *Suggestion:* in u05 g01, add a short table (*Güzel mi? / Var mı? / Soğuk mu? / Büyük mü?*) plus 1–2 exercises. In u10, keep only the *mi + personal ending* rule.
2. **The copula *-dır* is never mentioned.** The curriculum lists "-sın, -dır…" for u01. Learners will meet *-dır* on signs, in news and in A2 texts.
   *Suggestion:* add one sentence to u01 g01: «در نوشته و خبر گاهی -dır / -dir می‌آید: *O doktordur.* — در صحبتِ روزمره لازم نیست.»
3. **The same picture is used for different words in different units:**
   - ☕ çay (u00) and kahve (u04)
   - 🍳 kahvaltı (u04) and mutfak (u05)
   - 🍲 çorba (u04) and yemek yapmak (u06)
   - 🌳 bahçe (u05) and park (u07)
   - 📺 televizyon (u05) and izlemek (u06)
   - 📖 kitap (u00) and okumak (u06)

   The app never puts two equal pictures in one question, so nothing breaks. But in the mixed review (all words of the level), a learner who sees ☕ has to remember which word it stood for in which unit.
   *Suggestion:* çay → 🫖 (the SVG already exists in `docs/img/e/1fad6.svg`, and a teapot fits Turkish and Iranian tea culture). Park → 🏞️ or "". Leave the others.
4. **The negative of *-iyor* is not explained in u06.** Learners use *istemiyorum* and *sevmiyorum* as chunks in u04, but the -iyor unit never explains the negative (-mi-yor, with the vowel narrowing). A2 u05 covers it.
   *Suggestion:* add one line in u06 g01 that links back to u04 («یادتان هست istemiyorum؟ منفی = ریشه + me/ma + iyor → mi/mı…»). Or add a forward pointer to A2.

### Low
5. **Untaught forms in dialogues** are understandable from `s`, but are not flagged as new:
   - *Otobüse binin* (u07)
   - *Tahran'a gelmek istiyorum*, which uses infinitive + istemek (u09)
   - *Ben sana öğretebilirim* (u10)
   - *oynayalım mı* (u10, A2 grammar)

   *Suggestion:* add *binmek* or *sana* as phrases, or simplify (*Otobüs var.*).
6. **u08 reading has only 3 questions** (all other units have 4).
   *Suggestion:* add *Elif'in annesi ne alıyor?* or a price question about the bag (*Çanta kaç lira? → Üç yüz lira*).
7. **Order items with *ama*:** u10 `sentences[0]` and `g01` ex 7 could take the swapped clause order as alts (*Ben gitar çalamam ama yüzebilirim.*). I did not add them, because the swap changes which fact is emphasised against the `s`.
8. **u09 ağustos «آئوستُس».** The convention says ğ after *a* is a long «ا», which would give «آاوستُس». «آئوستُس» is readable, so this is a convention question, not an error.
9. **u00 `sounds[4].s`** writes «آن‌نه» and «سا‌آت», while the guides write «آنِّه» and «ساآت». This was kept twice already. Making them match would help beginners who compare the two.
10. **TTS:** the list from the earlier reviews still applies. `tools/build.py` `speakable()` now handles `→`, `=`, digits, `7:30` and " / ". What is left: en-dashes in u02 `grammar[0].table` ("1 – bir", which is read as "bir bir") and the leading hyphens in grammar titles ("-lı / -li …").
11. **`yaş` 🎂** (age shown as a birthday cake) and **`pahalı` 💰** are acceptable but weak pictures. "" would be safer if picture questions become harder.

## 4. Improvement ideas (prioritised)

1. **Use what the family already knows: Azerbaijani Turkish.** Some family members speak Azerbaijani, but only u02 mentions it, in one sentence.
   - Add a short «اگر ترکی آذربایجانی می‌دانید» box to u01, u04, u06 and u10. These are the places where the two languages differ in ways that cause mistakes:
     - *mən/sən* → *ben/sen*
     - *yox* → *yok*
     - present tense *-ır* → *-iyor*
     - *istəyirəm* → *istiyorum*
     - *bilmək* -ebil- vs. Azerbaijani -a bil-
   - This prevents interference and makes the family feel the course was written for them.
2. **Point out Persian loanwords** in every unit's explanation (u03 does this for dayı/aile):
   - şehir «شهر», hava «هوا», mevsim «موسم», hesap «حساب», lezzetli «لذیذ», pencere «پنجره», hastane/eczane «‑خانه», rüzgâr «روزگار/باد», renk «رنگ», hafta «هفته»
   - This is cheap to add and makes the vocabulary much easier to remember.
3. **Add exercises that contrast grammar from different units.** All exercises practise only the current unit's suffix. A1 learners mix up the three cases, so this contrast matters most. Add 1–2 "choose the case" items:
   - in u07: *Nerede? / Nereye?*, *okulda / okula*
   - in u10: *seviyorum / severim*
4. **Use more kinds of exercises.** 47 of 141 exercises are `type` items, and most of them ask for a single suffix. Add:
   - full-word `type` answers (e.g. *Ben her gün ___ (gitmek)* → *gidiyorum*)
   - longer order items (6–7 tiles) in u08–u10
   - a true/false (*doğru / yanlış*) reading question in each unit
5. **Cultural fit:**
   - u09: add *Nevruz martta.* (Nowruz is also celebrated in Turkey) and *Tahran'da kışın kar yağıyor.*
   - u04: add a dish the two cultures share (*kebap*, *dolma*), and *çay bardağı* in the reading.
   - u05: the *İran halısı* is a nice touch already. Keep going in this direction.
6. **Use one word for "vowel".** u00–u05 say «حرف صدادار» and u06–u10 say «واکه». Define «واکه» once in u00, then use it everywhere (A2 uses «واکه»). Or keep «حرف صدادار» throughout A1. Either choice helps older learners.
7. **Recycle earlier units more in the readings.** u07–u10 readings reuse the Maryam–Ali–Elif–Amir family well. u05 and u08 introduce new narrators (Sara, Elif with her mother). A short "where are they now" line connecting to the family would make the story arc clearer.

## 5a. Pass 5 course-wide (Nov 2026)

Course-wide work for all of tr-fa A1–C1 (characters, cross-level repeats, untaught grammar, `pr` consistency). The
level-specific pass-5 tasks (production items, `why`, inference questions, `sym`) are left to the level passes.
After the edits `python3 tools/validate.py content/tr-fa/*/*.json` prints OK for all 51 files, `python3 tools/audit.py`
reports `{}` for every tr-fa level, `python3 tools/repeats.py tr-fa` finds 0 repeats and `python3 tools/pr_words.py tr-fa`
finds no Turkish word with two `pr` spellings (except the u00 letter names, on purpose).

### Job 1: cast sheet — `content/tr-fa/CAST.md`
I read every dialogue, reading, example and sentence of A1–C1 and wrote one cast: the Karimi family (Ali, Maryam, Sara,
Amir; Maryam's brother Reza and sister Mina) and Turkish friends (Mehmet and his daughter Ayşe Yılmaz; neighbours Zeynep and
Emre Aydın; Elif and her fiancé Can), with ages at A1 and "one level ≈ one year later". One-off service roles now use a role
label as speaker name (Garson, Satıcı, Doktor, Gişe görevlisi, Resepsiyonist, Satış danışmanı, Tamirci, Görevli, Muhabir,
Sunucu, Sahaf, Gönüllü, Adam/Kadın) instead of a cast name; a short list of side names (Ece, Kerem, Burak, Selin, Nazanin,
Leyla, Parisa, Pardis, Arda, Kaveh, Behzad, Murat, Hakan, Hamid, Ebru, Derya, Kaan, Kemal…) covers the rest. "Neda" is
not used anywhere.

About 150 items in 38 units changed (`t` with its `s` and `pr`; 28 speaker names). The contradictions fixed:

| Contradiction | Fix |
|---|---|
| Maryam is Şirazlı (A1) but her brother Reza and her family are from Tebriz (A1 u01, A2 u04, B1 u01, Mina B1 u01) | Maryam and her parents are Tebrizli: A1 u01 reading + g02 ex5, A1 u03 reading + q4 answer (reverses the pass-4 change to Şirazlı) |
| Maryam's children are Elif (7) and Amir (5) in A1, but Elif and Amir are adults everywhere else; Elif is a Turkish name | The children are Sara (20) and Amir (18): A1 u03 (reading, q2/q3, w02/w09 ex), u04, u08, u10 readings; A1 u03 photo dialogue is now Amir's (mother Maryam, father teacher, sister Sara); A1 u10 swimming dialogue is between Sara and her brother Amir |
| A1 u02 children (Elif 7, Emre 10, Can 12, Sara 11, Zeynep 14, Mehmet 15) are adult cast members later | Side children Ece, Kerem, Burak, Nazanin (Mina's daughter), Selin |
| A2 u04 reading: Ali is 30, married to Mina, cousin of the twins Maryam and Sara | Narrator is Reza (40), wife Leyla (nurse), twin cousins Parisa and Pardis, cousin Arda; w13 ex and g01 ex1 follow |
| Mina is Reza's mother (A1 u03), Maryam's sister (A2), Ali's wife (A2 u04) | Mina is only Maryam's younger sister |
| Amir is Mina's son (B2 u05), a childhood neighbour now in Germany (B1 u01), "Amir Rezaei" in Ankara (B2 u09), travels from Tehran (A2 u02) | Mina's daughter Nazanin; Behzad (also B1 u01 g02 title, B2 u03 g02 ex5); Hamid Rezaei; Kaveh (also B1 u02 letter writer instead of Ali, whose family lives in İstanbul) |
| Reza is a doctor (A1 u01) but an engineer at an architecture firm (A2 u07) and a software engineer in İzmir (B1 u03) | A2 u07 dialogue is Can's (Elif becomes a doctor, not a nurse); B1 u03 reading is about Hakan |
| Ayşe is a student (A1 u01) but also Ali's old friend, an elderly neighbour with harçlık (B1 u09) and a mother (A2 u04 g01) | Ali's friend and neighbour is Zeynep (A1 u09, A2 u09, B1 u09, B2 u04, B2 u10); A2 u04 g01 ex1 "Emre'nin kızı"; B1 u09 g02 "Ayşe ile Sara", "Zeynep ile Emre"; B2 u03 w04 ex "Ayşe … burs kazandı" (was Maryam) |
| Mehmet is a lecturer but also a waiter, market seller, sales colleague, carpet businessman, bookseller, 15-year-old, engaged | Role labels / Murat / Kemal Yıldız; B1 u08 w07 ex "Can'ın nişanlısı doktor"; C1 u01 w13 ex "Mehmet Hoca … doçent oldu" (was Zeynep Hanım, a professor since B2) |
| Zeynep is a doctor, receptionist, TV host; Zeynep and Can marry (B1 u01) while Zeynep is Emre's wife | Role labels; B1 u01 g02 ex4 "Komşumuzun kızı … evlenmiş" |
| Emre has only an older sister (A2 u04) but an older brother in Germany (B2 u06); Emre is a cook but a shop assistant, manager and office worker | "Ablam" in B2 u06; role label / Kaan / Murat; B2 u03 g02 example → Kerem |
| Elif is a doctor but also a soap entrepreneur (B2 u04), a journalist (C1 u06), lives in Germany (B2 u03 g02) | Ebru Kaya; role labels; Behzad |
| Maryam's husband is an engineer and they live in İzmir (B2 u06) | "öğretmen", "İstanbul'a" (text + q1) |
| Amir calls his professor Zeynep "sen" (B2 u07) but "hocam / siz" (B2 u03) | "sizce", "Haklısınız" |
| Old neighbours "Sara Hanım" and "Ali Amca" in Tebriz (B1 u01 reading) | Zehra Hanım, Hüseyin Amca (+ q4) |
| Passers-by named Mehmet (A1 u07) and Zeynep (A2 u08) treated as strangers | Adam / Kadın |
| "Ali Ahmadi" (B2 u09 w11 ex) | "Ali Karimi" |

Left on purpose (listed in CAST.md): Mina at her parents' home in A1 u05, Maryam's father's operation in İstanbul (B2 u05),
friendly *sen* between Mehmet and Sara (B1 u09). Not changed: the Persian spelling of Turkish names in `s` differs by level
(مهمت / محمد, آیشه / عایشه); this is a support-language choice, not a `pr` issue.

### Job 2: cross-level repeats — `tools/repeats.py`
`python3 tools/repeats.py tr-fa [--near]` lists word headwords and phrases that a level teaches again although a lower level
(or another unit of the same level) already teaches them; `--near` also lists phrases that contain a lower-level phrase.
It found 9 exact repeats; I also replaced 3 near repeats and 1 headword. 13 items replaced, all in the higher level, same
format (`t`, `s`, `pr`; word with emoji and `ex`), recycling the unit's words:

| Unit | Before | After |
|---|---|---|
| A1 u06 p05 | Günaydın! (A1 u01) | Kahvaltı hazır! |
| A1 u08 p07 | Buyurun! (A1 u04) | Bunu alıyorum. |
| B1 u03 p02 | Kolay gelsin! (A2 u03) | Yarın izin almam gerekiyor. |
| B1 u04 p01 | Geçmiş olsun! (A2 u05) | Allah şifa versin! |
| B1 u04 p03 | Kendimi iyi hissetmiyorum. (A2 u05) | Ateşim bir türlü düşmüyor. |
| B1 u05 p08 | İyi yolculuklar! (A2 u02) | Bavulum kayboldu! |
| B1 u06 p01 | Sadece bakıyorum, teşekkürler. (A1 u08, near) | Bunun bir büyük bedeni var mı? |
| B1 u09 p03 | Hoş geldiniz! — Hoş bulduk! (A1 u04/u05, near) | Bize de bekleriz! |
| B1 u09 p04 | Afiyet olsun! (A1 u04) | Gözünüz aydın! |
| B2 u03 p03 | Kolay gelsin! (A2 u03) | Mezun olunca ne yapmayı düşünüyorsun? |
| B2 u05 p01 | Geçmiş olsun! (A2 u05) | Sizi uzman doktora sevk ediyorum. |
| B2 u05 p02 | Randevu almak istiyorum. (B1 u04 p06, near) | Sigortam bu tedaviyi karşılıyor mu? |
| B2 u05 w05 | muayene (B1 u04 *muayene olmak*) | yoğun bakım (ex: *Babam ameliyattan sonra iki gün yoğun bakımda kaldı.*) |

The headword repeats from the A2 report (uçak, teyze, hala, kuzen, torun) were already fixed in pass 4 and are not back.
The old formulas stay in the dialogues as known language. Left for the level passes: the B1 grammar points that re-teach A2
(-dı, -acak) and C1 phrases below level (C1 u10 p01 contains *Hoş geldiniz*).

### Job 3: untaught grammar
- **-(I)yordu** (used from B1 u02 on, assumed in C1): B1 u01 g01 now teaches it next to -dı — new title *Ne yaptın, ne
  yapıyordun? -dı / -ıyordu*, a paragraph comparing it with «می‌رفتم / داشتم می‌رفتم» (habit and background vs. finished
  event), 3 table rows (gidiyordum / gidiyordu / gidiyorduk with negatives), 2 examples, 2 exercises (choice, type; with
  `why`), and goal 2 updated.
- **-DIr** (first used in B1 u04 reading: *yaygındır, önemlidir*; then B1 u08, u09): new grammar point **B1 u04 g03**
  *Sağlık her şeyden önemlidir: -dır / -dir / -dur / -dür* — explanation (general truths, advice, signs, news, guesses
  "حتماً / لابد", after var/yok, link to A2 *iki gündür*), a 7-row table, 4 examples, 6 exercises (3 choice, 2 type, 1 order;
  with `why`), and a fourth goal. No earlier use of either form exists in A1–A2.

### Job 4: `pr` consistency — `tools/pr_words.py`, `content/tr-fa/PR_DICT.md`
`python3 tools/pr_words.py tr-fa [--all] [--json out]` pairs the words of every `t`/`pr` (and `cue`/`cpr`) and lists each
Turkish word with more than one `pr` spelling. Per word, the course was already consistent except *mi* «میْ»; checks of the
conventions across words found the rest. 27 `pr` words fixed in 12 files (20 word forms):
- word-final o = «و»: judo «ژودو», radyo «رادیو», banyo «بانیو» (4×, reverses pass 4), alo «آلو»;
- circumflex with palatal g: rüzgâr «روزگیار», rüzgârlı «روزگیارلِ» (like kâr «کیار», zekâ «زِکیا»);
- ğ between a and a: mağaza «ماآزا» (like mağazalar, sağa);
- i-y-i always «ی‌یی» (like iyi «ای‌یی», miyim «می‌ییم»): evliyim, izinliyim, miyiz, yediyi, ikiyi, partiyi, iyileşmek, giyinmek;
- -iyor without a half-space: istiyorsun «ایستیُرسون»; yiyelim «ییِلیم»;
- the sukun workaround «میْ» removed (dedemi, annemi, mi); `tools/validate.py` now skips `pr`/`cpr` in its «می» + space check.
`PR_DICT.md` lists the conventions, these decisions and the `pr` of the 180 most frequent words.

## 5. Pass 5 (Nov 2026)

Level pass for A1 (u00–u10), following `review/BRIEF_FIX5.md`. The course-wide work in 5a (cast, repeats, -ıyordu/-DIr,
`pr` conventions) was kept as is. Edits were made with Python from a snapshot, so the scripts can be re-run.
`python3 tools/validate.py content/tr-fa/A1/*.json` prints OK for all 11 files, `python3 tools/audit.py` reports
`tr-fa A1: {}`, `python3 tools/repeats.py tr-fa` finds 0 repeats, and `python3 tools/pr_words.py tr-fa` finds no new
word with two `pr` spellings.

### Issues from sections 3 and 4

| # | Issue | Status | What was done / reason |
|---|---|---|---|
| 3.1 | *mi* taught too late | done | New grammar point **u03 g03** *Annen öğretmen mi? — mi / mı / mu / mü*. The explanation compares it with Persian «آیا» and rising intonation, covers stress on the syllable before *mi*, says that *mi* is not used with question words, and gives a preview of *mısın*. It has a 4-row harmony table, 5 examples with `pr`, and 6 exercises (2 choice, 1 type, 1 rewrite, 1 function, 1 order, all with `why`). u03 goals: goals 2 and 3 merged and a *mi* goal added (still 4). u05 g01 now refers back to u03. u10 g02 now teaches only the new rule (*mi* + personal ending: *misin, musun, miyim*): new title, new table (ben … siz with *Yüzebilir miyim/misin…?*), new explanation and goal. |
| 3.2 | *-dır* never mentioned | done | One paragraph in u01 g01 (*O doktordur.*: used in writing and the news, not needed in speech, taught in B1 u04 g03). |
| 3.3 | Same picture in several units | done | çay ☕ → 🫖 (word and letter Ç example), park 🌳 → 🏞️. The other pairs are solved by `sym` (mutfak, kahvaltı, yemek yapmak, okumak, izlemek, bahçe are now symbols and are not used in picture questions). |
| 3.4 | Negative of *-iyor* not explained in u06 | done | Paragraph in u06 g01 that links back to *istemiyorum* (u04): stem + *mi/mı/mu/mü* + *yor* (*çalışmıyorum, izlemiyor*), with a forward pointer to A2. A new rewrite item practises *izlemiyor*. |
| 3.5 | Untaught forms in dialogues | partly | *Otobüse binin*: *binmek → binin* added to the u07 g02 table, plus a line on *binmek* + dative. *oynayalım mı* (u10) → *Akşam birlikte oynayabiliriz!* (practises u10 g01). Left: *Tahran'a gelmek istiyorum* (u09) and *sana öğretebilirim* (u10). The infinitive is the dictionary form learners see in every word list, *-ebil* is the u10 grammar, and the `s` translates both, so a rewrite would cost more naturalness than it gains. |
| 3.6 | u08 reading has 3 questions | done | Added *Sara ne alıyor?* → *Yeşil bir elbise*. The text never says this directly: Sara asks *Bunu alabilir miyim?* about the green dress and her mother agrees. |
| 3.7 | *ama* orders without the swapped clause order | done | Alts added: u10 `sentences[0]` (*Ben gitar çalamam ama yüzebilirim.*). u10 g01 ex7 is now *Amir futbol oynayabilir ama yüzemez.* with the swapped alt. The new u08 order item has one too. |
| 3.8 | ağustos «آئوستُس» | no change | `PR_DICT.md` now lists it as the convention (ğ between a and u). |
| 3.9 | u00 «آن‌نه» / «سا‌آت» vs. the guides | done | u00 sounds[4]: *anne* = «آنِّه» (double n with shadda, like «آن‌نه»), *saat* = «ساآت» (two «آ» in a row). |
| 3.10 | TTS: dashes in tables, hyphens in titles | no change | `tools/build.py` does not voice grammar titles or tables (see the correction in the A2 report). Nothing to change in the content. |
| 3.11 | *yaş* 🎂, *pahalı* 💰 weak pictures | done | Both marked `sym`. |
| 4.1 | Azerbaijani Turkish | done | Short «اگر ترکی آذربایجانی می‌دانید» notes: u01 g01 (*mən/sən → ben/sen*, two-way *-am/-əm* vs. four-way *-ım/-im/-um/-üm*), u04 g01 (*istəyirəm → istiyorum*, *istəmirəm → istemiyorum*, *çörək/pendir → ekmek/peynir*), u05 g01 (*yox → yok*), u06 g01 (*gəlirəm, oxuyuram → geliyorum, okuyorum*; *gelirim* means something else), u10 g01 (*üzə bilirəm → yüzebilirim*, *üzə bilmirəm → yüzemem*). |
| 4.2 | Persian loanwords | done | «کلمه‌های آشنا» lines: u01 (*hoş*; *memnun*, which in Turkish means "pleased"), u04 (*pilav, meyve, hesap, lezzetli*, *kebap, dolma*), u05 (*pencere, bahçe*), u06 (*saat, sabah*), u07 (*şehir*; *hastane/eczane* = *hasta/ecza + hane*), u08 (*siyah, renk*; *pahalı* from «بها»), u09 (*hava, mevsim*; *rüzgâr* from «روزگار»), u10 (*satranç*). |
| 4.3 | Exercises that contrast cases | partly | u07: a rewrite (*Annem markette. → Annem markete gidiyor.*) and a function item (*Nereye gidiyorsun? → Parka / ~~Parkta~~ / ~~Park~~ gidiyorum*). The *why*s of u07 g01 ex0 and u07 g02 ex1 explain the *-da/-a* contrast. Not done for *seviyorum / severim* in u10: both are usually correct (*Kitap okumayı seviyorum / severim*), so a one-answer item would be wrong. |
| 4.4 | More exercise kinds | partly | 42 production items (below). Longer order items: u08 g01 ex6 (7 tiles, 1 alt), u08 g02 ex6 (6 tiles), u09 g01 ex6 (6 tiles, 3 alts), u10 g01 ex7 (6 tiles, 1 alt). True/false reading questions were not added: they are binary, the A2 critic flags binary questions as a 50 % guess, and the reading sets already have 4 three-option questions. |
| 4.5 | Cultural fit | done | *Nevruz martta.* (u09 rewrite item), *Tahran'da kışın kar yağıyor.* (new u09 sentence, with alt), *kebap* and *dolma* (u04 explanation, function and rewrite items). Not added: *çay bardağı* in the u04 reading (the reading has no free line). |
| 4.6 | One word for "vowel" | done | u00 introduces «واکه» next to «حرف صدادار» («هماهنگیِ واکه‌ها (هماهنگیِ حروفِ صدادار)»), and u06 g01 glosses it again («واکه = حرفِ صدادار»). u06–u10 and A2 use «واکه». u01–u05 keep «حرف صدادار», which is now defined as the same thing. |
| 4.7 | Family arc in the readings | done in 5a | The cast pass made the u05 and u08 narrators (Sara, Sara and her mother) part of the Karimi family. |

### Tasks 2–6 of the brief

- **Production (task 2):** each of the 20 old grammar points now has one rewrite item (`type` with `task`, `cue`, `cpr`, a whole-word or multi-word answer such as *doktorsunuz, İstanbulluyum, kitabın, istemiyorum, sevmiyor, var mı, evdeyiz, izlemiyor, yedide, markete, dönün, Bu gömlekler, kaç lira / ne kadar, rüzgârlı / rüzgarlı, martta, yüzemem, çalabilir misin*) and one function item (`choice`, `t` = `___`, 3 whole sentences, exactly one fits). Each pair replaced the two most repetitive items, so the counts stayed the same. The new u03 g03 has one more pair. A1 exercises have no `pr`, as before; every `cue` has a `cpr` built from the course dictionary.
- **`why` (task 3):** every one of the 117 `choice` and `type` items in A1 has a `why` (≤ 160 characters, in Persian, specific to the item: the harmony vowel, the consonant change, the person ending, *-da* vs. *-a*, and so on).
- **`sym` (task 5):** 39 words: evet 👍, hayır ❌, öğrenci 🎒, doktor 🩺, yaş 🎂, eş 💍, arkadaş 🤝, bu 👉, kahvaltı 🍳, mutfak 🍳, bahçe 🌳, sabah 🌅, akşam 🌆, gece 🌙, içmek 🥤, kalkmak ⏰, çalışmak 💼, yemek yapmak 🍲, okumak 📖, izlemek 📺, her gün 📅, eczane 💊, market 🛒, gitmek 🚶, pahalı 💰, almak 🛍️, hava 🌤️, ilkbahar 🌸, yaz 🏖️, sonbahar 🍂, kış ⛄, ay 🗓️, oynamak 🎲, resim yapmak 🎨, müzik 🎵, dinlemek 🎧, şarkı söylemek 🎤, yürüyüş 🥾, sinema 🎬. Pictures that show the thing itself stay unmarked (arrows for sağ/sol/düz, 🥵/🥶, 😴, ⚽, ♟️).
- **Recycling (task 6):** the new items reuse the level's names and words (Ali/Maryam/Sara/Amir, Tebrizli, kitap, kahve, mutfak, park, gitar, satranç), and later units use earlier grammar (*-da* in u06 and u07, possessives in u03 g03, *-ebil* in the u10 *mi* items).

### Counts

| Category | Count |
|---|---|
| Production items | 42 (21 rewrite + 21 function; 40 replaced older items, 2 are in the new u03 g03) |
| `why` | 117 (all `choice`/`type` items) |
| Inference questions | 1 (u08, as its 4th question; not required at A1) |
| `sym` marks | 39 |
| New grammar point | 1 (u03 g03: explanation, table, 5 examples, 6 exercises) |
| Explanations extended | 15 (Azerbaijani 5, loanwords 8, *-dır* 1, negative *-iyor* 1), plus 2 rewritten (u05 g01 *mi* reference, u10 g02 *mi* + person) |
| Other fixes | 2 emoji (çay → 🫖 in two places, park → 🏞️), u00 sounds and vowel term (2), u07 table row, u10 dialogue line, u03/u10 goals (2), u08 reading question, u09 new sentence, 4 longer order items, 2 new `ama` alts |
