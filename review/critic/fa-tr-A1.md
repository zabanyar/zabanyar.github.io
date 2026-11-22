# Critic review (pass 4): fa-tr A1 (Persian for Turkish speakers, u00–u10)

I checked every item in all 11 units by hand: letters, sounds, words (t, s, pr, pl, ex, emoji), phrases, dialogues, grammar (title,
explain, table, examples, exercises), readings and questions, sentences, goals and titles. I also ran scripts for four things:
Arabic ي/ك/ة, ZWNJ after می/نمی and before ها, digits in voiced `t`, and the "Neda" name. A last script lined up `t` and `pr`
word by word to find any Persian word transliterated two different ways in the level. It found none, apart from the real homographs
نه (na / noh) and تو (to "you" / tu "inside").

`python3 tools/validate.py content/fa-tr/A1/*.json` → OK (11/11). `python3 tools/audit.py` → fa-tr A1 `{'duplicate': 1, 'pr': 2}`.
All three findings are the known false alarms: نه na/noh is a homograph, and the two ZWNJ word-count findings are in u06
`grammar[0].title` and u09 `reading.text[4]`.

## 1. Verdict

This is a careful, well-built beginner level. The Persian is natural, standard Tehran Persian and the ZWNJ is correct. The Latin
transliteration for Turkish readers is consistent across all units, and the answer keys and reading questions are right. The Turkish
is correct and idiomatic, and the explanations are warm. They make good use of what Turks already know: izafet/Bâb-ı Âli,
dön/dönün, the lütfen/lotfan and dost/dust cognates, and false friends such as mamnun and xâle/hala.

There was one systematic transliteration error: کوچک was written *kuçak* in 10 places, while the Iranian pronunciation is *kuček*.
I also fixed a group of picture problems. In "Which picture is it?" questions some emoji showed a different word from the same
unit: 👦 is literally پسر "boy", but it was on برادر; ⏰ next to 🕐 ساعت; 💰 next to 💵 تومان.

The main weaknesses are not errors but design gaps:
- **Shifting cast:** the same names change roles from unit to unit.
- **Days of the week:** they are never taught, yet جمعه is used seven times in u10.
- **No colloquial Persian:** the Iranian family will speak colloquial Tehrani, and the level never shows it.

## 2. Fixed

| Unit | Path | Before → After | Reason |
|---|---|---|---|
| u03 | `words[12].pr` (کوچک) | `kuçak` → `kuçek` | In Iranian Persian کوچک is pronounced *kuček*. *kučak* is the classical/Dari form, and colloquial Tehrani is *kučik*. The curriculum asks for standard Tehran pronunciation (cf. *hecdah*, not *hejdah*). |
| u03 | `words[12].ex.pr` | `Barâdaram kuçak ast.` → `Barâdaram kuçek ast.` | Same. |
| u03 | `dialogue.lines[5].pr` | `…yek barâdar-e kuçak dâram…` → `…barâdar-e kuçek dâram…` | Same. |
| u03 | `grammar[0].table[4][1]` | `barâdar-e kuçak-e man` → `barâdar-e kuçek-e man` | Same. |
| u03 | `grammar[0].exercises[4].pr` | `Barâdar-e man kuçak ast.` → `…kuçek ast.` | Same. |
| u03 | `reading.text[5].pr` | `Barâdarhâyam kuçak hastand.` → `…kuçek hastand.` | Same. |
| u05 | `grammar[0].examples[4].pr` | `Âşpazxâne kuçak nist.` → `…kuçek nist.` | Same. |
| u05 | `grammar[0].exercises[6].pr` | `Hammâm kuçak nist.` → `…kuçek nist.` | Same. |
| u05 | `reading.text[1].pr` | `Xâne-ye u kuçak ast, …` → `Xâne-ye u kuçek ast, …` | Same. |
| u05 | `sentences[0].pr` | `Xâne-ye mâ kuçak ast.` → `…kuçek ast.` | Same. |
| u03 | `words[3].emoji` (برادر) | 👦 → "" | 👦 means "boy", which is پسر, another word in the same unit. In a "What is this?" question showing 👦, پسر (which had no picture, so it could be a distractor) was the better answer than the key برادر. |
| u03 | `words[4].emoji` (خواهر) | 👧 → "" | Same problem: 👧 means "girl", which is دختر. |
| u03 | `words[5].emoji` (پسر "oğul; erkek çocuk") | "" → 👦 | The picture now goes with the word it shows. |
| u03 | `words[6].emoji` (دختر "kız") | "" → 👧 | Same. |
| u06 | `words[6].emoji` (بیدار شدن "uyanmak") | ⏰ → "" | ⏰ is a clock, and ساعت 🕐 is in the same unit, so a picture question had two clock options. No emoji shows "waking up" without clashing with 😴 خوابیدن. |
| u06 | `words[5].emoji` (شام "akşam yemeği") | 🍽️ → "" | 🍽️ and 🍴 (خوردن, same unit) are both cutlery, so a picture question could not be answered with certainty. |
| u08 | `words[5].emoji` (گران "pahalı") | 💰 → "" | A money bag does not show "expensive", and it competes with 💵 تومان in the same unit. ارزان already had "". |
| u09 | `words[0].emoji` (هوا "hava") | 🌤️ → "" | 🌤️ ("mostly sunny") competes with ☀️ آفتابی and ☁️ ابری in the same unit. "Weather" in general has no picture of its own. |
| u09 | `grammar[1].explain` | haft-sin list "(sabze, sib, sir, **sekke, sonbol**…)" → "(sabze, sib, sir, **serke, somâğ**…)" | The text says "the seven s-things" and then named two items that are not among the classic seven: sabze, samanu, senjed, sib, sir, serke, somâğ. Sekke and sonbol are optional extras. All the examples now belong to the canonical seven. |

**By category:** pr 10 (one word, کوچک, in 10 places) · emoji/picture 8 (6 words, one of them swapped between pairs) ·
explanation/fact 1 · target text 0 · translation 0 · exercises 0.
**Audio:** no `t` changed, so no new TTS is needed.

## 3. Remaining issues (need a decision or bigger work)

**High**
1. **The cast changes roles from unit to unit.** In a family course the characters are the thread, and here they contradict
   each other:
   - **Reza** is a teacher from Shiraz (u01). In u06 he is married with children. In u03 he is Amir's 10-year-old brother (dialogue) and also Maryam's 6-year-old brother (reading).
   - **Mina** is Emre's classmate (u02) and Amir's sister (u03). In u06 `sentences[4]` she works in a hospital, and in u07 Emre meets her as a stranger ("Bebaxşid xânom").
   - **Amir** is Ayşe's friend in u03 and the shop assistant who serves her formally in u08.
   - **Maryam** is the sister of Sara and of two little brothers, Ali and Reza (u03).

   *Suggestion:* write a one-page cast sheet: one Iranian family (Maryam, her parents, siblings and grandparents) and one
   Turkish family (Ayşe, Mehmet, Elif, Emre). Then rename only the clashing speakers or minor characters, for example:
   - the u03 dialogue brother → Kâveh;
   - the u03 reading brothers → Ali and Sinâ;
   - the u07 passer-by and the u08 shop assistant → unnamed "Xânom/Âğâ", or new names;
   - u06 `sentences[4]` → another name.

   This changes `t`/`pr`/`s` and audio in about 10 lines.
2. **Days of the week are never taught but are used.** u10 uses جمعه 7 times: a word example, dialogue lines 8–9, a grammar
   exercise, reading text 0–1 and sentence 4. The u10 reading question has سه‌شنبه / دوشنبه as options. None of these is ever
   introduced. *Suggestion:* add the week (شنبه … جمعه; the شنبه-based pattern is easy for Turks to learn) as a table in u06
   `grammar[1]`, or as phrases in u10, plus one sentence about Friday being the day off.

**Medium**

3. **Colloquial Tehran Persian is absent.** Every `pr` follows the written forms (mixâham, ast, xâne, nemidânam). That is right
   for the curriculum, but the learners' Iranian relatives will say *mixâm, -e, xune, nemidunam, kučik*. Only u01 and u04
   mention spoken forms, and only in passing. *Suggestion:* add one "Konuşmada:" line to each grammar `explain` (u03 possessives,
   u04 mixâm, u06 mixoram/miram, u10 mitunam). This needs no data changes.
4. **Picture clash ⛄ زمستان / ❄️ برف (u09).** In a picture question, "kış" and "kar" can each be matched to either emoji.
   I left it because any winter picture shows snow. *Suggestion:* give برف 🌨️ and زمستان 🧣, or accept the clash. A better
   fix in the app: allow only one picture per unit for "season/weather" pairs, or tag pairs that must not be distractors for
   each other.
5. **Numbers end at 20, then jump to sad/hezâr/milyun (u08).** Learners cannot say a parent's age (40, 50), a price such as
   35,000, or 30–31 days, which the calendar explanation itself uses. *Suggestion:* add the tens (si, çehel, panjâh, şast,
   haftâd, haştâd, navad) as a table row in u08 `grammar[1]`, or in u02 `explain`.
6. **ğ for ق/غ.** Turkish readers naturally read ğ as silent or as a lengthened vowel, while Persian ق/غ is a clear
   uvular stop or fricative. u00 `sounds[7]` warns about this once. *Suggestion:* add a reminder in u04 (ğazâ, ğahve) and u05
   (otâğ). Switching the letter to *q* would be a course-wide decision.

**Low**

7. u10 `dialogue.lines[5]` «آیا استخر نزدیک است؟» uses آیا between friends, which is bookish. It is kept to model the unit's
   grammar. One could drop آیا there and keep it in the grammar examples, which the explanation already marks as formal/written.
8. u02 `grammar[0].exercises[4]` (type, «من ___ سال دارم») accepts only بیست. «۲۰» is also correct written Persian. Add it if the
   on-screen keyboard has digits.
9. u02 `grammar[0].exercises[0].s` "Beş ve beş, on eder." reads slightly unnaturally. "Beş artı beş on eder." is more idiomatic.
10. Goals use the infinitive ("…-ebilmek") in u00–u05 and the first person ("…-ebilirim") in u06–u10. In u07 and u08 the goals use
    "…" quotes while other units use «…». Pick one style.
11. TTS-risky `t` strings listed in pass 3 are still there: u00 `sounds` with slashes/dots, u02 tables with digit + word,
    u02 `grammar[0].exercises[5]` «۱۵: ___», u05 em dashes, u07/u08 slashes and digit tables, u10 «آیا…؟». Check whether table
    cells and `sounds.t` are voiced. If they are, split them or strip the symbols.

## 4. Improvement ideas (prioritised)

1. **Build on what Turks already know.** It is the course's biggest asset and could go further:
   - a short "Tanıdık kelimeler" box per unit (u05: pencere, sandalye, oda; u07: şehir, hastane ← bimârestân; u09: hava, bahar);
   - a list of false friends, including **xaste = yorgun (not "hasta")**. The curriculum asks for this, but it is not taught anywhere in A1. Fitting spots are u06 (daily life) or the u01 phrases ("Xaste nabâşid!").
2. **Use the family vocabulary.** Persian has four aunt/uncle words, like Turkish: amu = amca, amme = hala, dâyi = dayı,
   xâle = teyze. u03 teaches only amu and xâle. A single explanation line mapping all four would be memorable, and dâyi/dayı
   is the same word in both languages.
3. **Keep practising the script.** After u00 the script is never practised on its own. Learners lean on `pr` throughout, and
   readings show `pr` for every line. Ideas:
   - one "letter review" item per unit, for example a word to sound out before its `pr` is shown;
   - from u06 on, reading questions whose options are short script-only words.
4. **Add more about Iranian culture and politeness.** Taarof is touched on (befarmâyid, dastetân dard nakonad, xâne-ye xodetân
   ast). Add a short cultural note in u04 or u05: offering three times, refusing at first, *qâbel nadâre* when paying. Possible
   reading topics: Yaldâ night (u09) and tea with qand (u04). Iranian relatives will expect these.
5. **Vary the exercises.** Each unit has the same mix of choice, type and order. Add a few `choice` items that ask for meaning
   rather than form (pick the right reply to a dialogue line). Add more `type` items with a one-word answer that recycles earlier
   units' words, for example u07 asks for u05 prepositions and u08 for u02 numbers.
6. **Recycle words more systematically.** u08–u10 rarely reuse u03 family words or u05 house words. For example, the u10 reading
   could use خاله/عمو, and the u08 reading could use the u05 place words. Fix this together with the cast sheet.
7. **Progression for the very first lessons.** u01 brings in pronouns, هستم forms, the short endings and ezafe (as «اسم من…»)
   all in one unit, while learners still cannot read. Put u01 `grammar[1]` (the short endings) after a "listen and repeat"
   block, or cut its exercises to forms the dialogue actually uses (xubam, xubi).
