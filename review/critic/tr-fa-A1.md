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
