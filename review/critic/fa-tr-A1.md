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

## 5. Pass 5 (Nov 2026)

I carried out BRIEF_FIX5 tasks 1–7 on all 11 units and also worked through the lead's extra requests: cast sheet, days of
the week, numbers 30–100, and simple production items. I wrote a new cast sheet, `content/fa-tr/CAST.md`: one extended
Iranian family (grandparents from Tabriz; Maryam's family; Amir's family with Reza as the father) plus the Turkish friends.
Contradictions were fixed with minimal edits (renames, ages, relations), with `t`, `pr` and `s` changed together.

`python3 tools/validate.py content/fa-tr/A1/*.json` → OK (11/11). `python3 tools/audit.py` → fa-tr A1
`{'duplicate': 1, 'pr': 4}`, all known false alarms:
- نه *na/noh* is a homograph.
- The other four are the ZWNJ word-count drift of the audit's word splitter: u06 `grammar[0].title`, u09 `reading.text[4]`,
  and the two new lines u06 `grammar[2].examples[2]` and u10 `reading.text[7]`.

### 5.1 Status of every pass-4 issue and idea

| # | Item | Status |
|---|---|---|
| 3.1 | Cast changes roles | **Done.** Added `content/fa-tr/CAST.md` and made 17 edits (table 5.2). Reza = Amir's father, a teacher from Shiraz. Amir's family: Mina (20), Omid (10). Maryam's family: Sara, Ali (8), Sina (6); her father is a doctor and her mother a teacher. The u07 passer-by → «Xânom»; the u08 shop assistant → «Foruşande». |
| 3.2 | Days of the week missing | **Done.** u06: words شنبه, جمعه + new grammar point `g03` «روزهای هفته» (table of all 7 days, explanation with the çarşamba/perşembe link, 4 examples, 7 exercises). u02 `words[7].ex` «هفته هفت روز دارد.» prepares it. u10's جمعه / سه‌شنبه / دوشنبه are now taught before use. |
| 3.3 | No colloquial Persian | **Done** as «Konuşmada:» lines in u03 G1 (-et/-eş, -e), u04 G0 (mixâm/mixây/mixâd), u06 G0 (miram/miri/mire/mixore) and u10 G0 (mitunam). No `t` changed. |
| 3.4 | ⛄ زمستان / ❄️ برف clash | **Done** with `sym`: all four seasons (🌸 🏖️ 🍂 ⛄) are now symbols, so the app never uses them in picture questions. ❄️ برف stays literal. |
| 3.5 | Numbers stop at 20 | **Done.** u02: words سی, صد; G0 title 0–100; explanation of the tens and of «bist-o yek» compounds; table rows 30–100 + 25; example «او هفتاد سال دارد.»; rewrite item 20 → 30. u08: word پنجاه, an explanation link, and the rewrite item «pancâh hezâr → sad hezâr». |
| 3.6 | ğ for ق/غ | **Done**: «Okunuş hatırlatması» in u04 G1 (ğazâ, ğahve) and u05 G1 (otâğ). I kept the letter ğ: changing it would be a course-wide decision. |
| 3.7 | آیا between friends | **Done**: u10 `dialogue.lines[5]` → «استخر نزدیک است؟». |
| 3.8 | ۲۰ not accepted | **Done**: u02 G0 x4 accepts «۲۰». The new type items with numbers also accept digits (۳۰, ۱۰۰). |
| 3.9 | "Beş ve beş, on eder." | **Done**: the item was replaced by a production item (u02 G0 x0). |
| 3.10 | Goals / quote style | **Done**: u00–u05 goals now use the first person «…-ebilirim». All goals, grammar titles and explanations use «…». |
| 3.11 | TTS-risky strings | **Checked, no change needed.** `sounds[].t` and grammar tables are not voiced (only `sounds[].ex` is). «۱۵: ___» is handled by `speakable()`. «آیا…؟» is only in a grammar title, which is not voiced. The em dashes in u05 are read as pauses. Audit: 0 voice findings. |
| 4.1 | Familiar words / false friends | **Done**: «Tanıdık kelimeler» lines in u04, u05, u07 and u09. New u10 word خسته "yorgun (dikkat: Türkçedeki «hasta» değil!)" teaches the false friend the curriculum asks for. |
| 4.2 | Four aunt/uncle words | **Done**: u03 words دایی, عمه + explanation line (amu/amme/dâyi/xâle = amca/hala/dayı/teyze). |
| 4.3 | Script practice | **Not done: needs the app.** Every item must have `pr` (curriculum), so script-only practice needs an app feature, e.g. hide `pr` until the learner taps, from u06 on. |
| 4.4 | Culture / taarof | **Done**: taarof + tea with ğand + «ğâbel nadâre» (u04 G0), şab-e yaldâ (u09 G1). |
| 4.5 | Vary the exercises | **Done** through task 2: 21 «Hangi cevap uygun/doğru?» items that test meaning, and 21 rewrites, several of which recycle earlier units (numbers in u06/u08, u04 «dust nadâram» in u09, ezafe in u08). |
| 4.6 | Recycle words | **Done** in part: u10 `reading.text[7]` uses xânevâde-ye xâleam; u06 `sentences[4]` uses pedar-e Maryam; new items reuse u02 numbers, u03 family words, u04 dust dâram and u05 places. The u08 reading is unchanged. |
| 4.7 | u01 progression | **Done** in part: u01 G1 drops «xubim» (not in the dialogue) and adds the reply-fits item after «سلام، حال شما چطور است؟» and the rewrite «من خوب هستم → من خوبم». I did not reorder the grammar points: that needs an app decision. |

### 5.2 Cast fixes (`t`, `pr` and `s` changed together)

| Unit | Path | Before → After | Reason |
|---|---|---|---|
| u01 | `words[11].ex` | آیشه معلم است. → رضا معلم است. | Ayşe is a student (G0 x7); Reza is the teacher. |
| u02 | `words[6].ex` | مریم شش سال دارد. → سینا شش سال دارد. | Maryam is a 20-year-old student; Sina is 6. |
| u02 | `words[7].ex` | علی هفت سال دارد. → هفته هفت روز دارد. | Ali is 8 (u03); this also prepares the week. |
| u02 | `words[9].ex` | امیر نه سال دارد. → او نه سال دارد. | Amir is an adult. |
| u02 | `grammar[1].exercises[6]` (+alts) | مریم و علی دانشجو هستند. → مریم و مینا دانشجو هستند. | Ali is a schoolboy. |
| u03 | `dialogue.lines[5]`, `[6]` | …اسمش رضا است / رضا چند سال دارد؟ → …اسمش امید است / امید چند سال دارد؟ | Reza is Amir's father. |
| u03 | `reading.text[6]`, `questions[3].q` | …و رضا شش سال دارد / رضا چند سال دارد؟ → …و سینا… / سینا چند سال دارد؟ | Maryam's brothers are Ali and Sina. |
| u06 | `words[9].ex` | سارا هر روز به مدرسه می‌رود. → علی هر روز به مدرسه می‌رود. | Sara is a university student. |
| u06 | `sentences[2]` | امیر ساعت هشت به مدرسه می‌رود. → امید ساعت هشت به مدرسه می‌رود. | Amir is an adult. |
| u06 | `sentences[4]` | مینا در بیمارستان کار می‌کند. → پدر مریم در بیمارستان کار می‌کند. | Mina is a student; Maryam's father is the doctor. |
| u06 | `grammar[0].exercises[1]` | علی در یک مدرسه کار ___. → رضا در یک مدرسه کار ___. | Ali is 8. |
| u07 | `dialogue.speakers.B.name` | Mina → Xânom | Emre's classmate cannot be a stranger he calls «xânom». |
| u08 | `dialogue.speakers.B.name` | Amir → Foruşande | Ayşe's friend would not serve her formally. |
| u10 | `dialogue.speakers.A.name` | Ali → Amir | An 8-year-old cannot teach Ayşe to swim. |
| u10 | `grammar[0].exercises[7]` | رضا نمی‌تواند گیتار بزند. → علی نمی‌تواند گیتار بزند. | Contradicted e1 «رضا می‌تواند گیتار بزند». |

### 5.3 New words (validator maximum 16 words per unit)

| Unit | Word | `pr` | `s` | Emoji |
|---|---|---|---|---|
| u02 | سی | si | otuz | "" |
| u02 | صد | sad | yüz (100) | "" (💯 has no image) |
| u03 | دایی | dâyi | dayı | "" |
| u03 | عمه | amme | hala | "" |
| u06 | شنبه | şanbe | cumartesi | "" |
| u06 | جمعه | com'e | cuma | "" |
| u08 | پنجاه | pancâh | elli | "" |
| u10 | خسته | xaste | yorgun (not «hasta») | 😫 |

The other tens (چهل … نود) and days (یکشنبه … پنجشنبه) are taught in the grammar tables and exercises, not as words:
u02, u03 and u06 are now at the validator's maximum of 16 words. All headwords are unique in the level.

### 5.4 Production items (task 2): 42

Each theme grammar point has 1 rewrite (`type` with `cue`/`cpr`/`task`) and 1 function item (`choice`, `t` = `___`, 3 whole
sentences). They replace the 2 most repetitive exercises, mostly order items that duplicated an example or a sentence, so the
counts stay the same. The new u06 `g03` has its own pair. All items are short (answers of 1–2 words).

| Unit | Path | Replaced → New | Note |
|---|---|---|---|
| u01 | `grammar[0].exercises[0]` | choice: من دانشجو ___. → type (Cümleyi «mâ» (biz) için yazın.): من دانشجو هستم. → ما دانشجو ___. | rewrite (replaces a 2nd hastam/hasti choice). |
| u01 | `grammar[0].exercises[5]` | choice: آن‌ها ترک ___. → choice (Hangi cevap uygun?): اهل کجا هستید؟ → ___ | function (replaces a repetitive choice). |
| u01 | `grammar[1].exercises[2]` | type: ما خوب___. → choice (Hangi cevap uygun?): سلام، حال شما چطور است؟ → ___ | function (replaces «xubim», a form the dialogue never uses; pass-4 idea 7). |
| u01 | `grammar[1].exercises[7]` | order: شما اهل کجا هستید؟ → type (Kısa biçimle yazın (hastam → -am).): من خوب هستم. → من ___. | rewrite (replaces an order item that repeated G0 x4 / sentences[5]). |
| u02 | `grammar[0].exercises[0]` | choice: پنج و پنج می‌شود ___. → type (On yıl sonra kaç yaşında? Sayıyı yazın.): او بیست سال دارد. → او ___ سال دارد. | rewrite with the new tens (replaces the «Beş ve beş, on eder» item, pass-4 #9). |
| u02 | `grammar[0].exercises[3]` | choice: دو ___، لطفاً. → choice (Hangi cevap uygun?): چند سال دارید؟ → ___ | function (replaces «do çây», which G1 x1 already tests). |
| u02 | `grammar[1].exercises[4]` | choice: آن‌ها دانشجو ___. → choice (Hangi cevap doğru?): این کتاب‌ها خوب هستند؟ → ___ | function (replaces a «hastand» item that belongs to u01). |
| u02 | `grammar[1].exercises[5]` | order: کتاب‌ها خوب هستند. → type (Çoğul yapın.): سیب خوب است. → ___ خوب هستند. | rewrite (replaces an order item identical to e0, sentences[4] and reading[6]). |
| u03 | `grammar[0].exercises[2]` | choice: ___ علی دکتر است. → choice (Hangi cevap doğru?): این مادر توست؟ → ___ | function (replaces a weak choice with «است» as an option). |
| u03 | `grammar[0].exercises[4]` | type: برادر ___ کوچک است. → type («Büyük bir evim var» deyin.): خانه بزرگ است. → من یک ___ دارم. | rewrite (replaces a 2nd type item with the same pattern as x3). |
| u03 | `grammar[1].exercises[0]` | choice: من یک خواهر ___. → type (İyelik ekiyle (-am) yazın.): مادر من معلم است. → ___ معلم است. | rewrite (replaces the easiest «dâram» choice). |
| u03 | `grammar[1].exercises[6]` | order: آن‌ها یک دختر دارند. → choice (Hangi cevap uygun?): خواهر یا برادر دارید؟ → ___ | function (replaces an order item close to words[5].ex / sentences[5]). |
| u04 | `grammar[0].exercises[0]` | choice: من یک چای ___. → type (Olumsuz yapın.): من چای می‌خواهم. → من چای ___. | rewrite (replaces the easiest choice). |
| u04 | `grammar[0].exercises[5]` | order: من کباب دوست دارم. → choice (Hangi cevap uygun?): چای یا قهوه؟ → ___ | function (replaces an order item repeated in the dialogue). |
| u04 | `grammar[1].exercises[3]` | choice: غذای مادرم ___ دوست دارم. → type («Bu kebabı» deyin: in + râ.): من کباب می‌خواهم. → من این کباب ___ می‌خواهم. | rewrite (replaces a duplicate of x0). |
| u04 | `grammar[1].exercises[5]` | order: این میوه را دوست داری؟ → choice (Hangi cevap doğru?): این کباب خیلی خوشمزه است! → ___ | function (replaces the 2nd order item). |
| u05 | `grammar[0].exercises[2]` | choice: من دانشجو ___، معلم هستم. → type (Olumsuz yapın.): من معلم هستم. → من معلم ___. | rewrite (replaces a «nistam» choice). |
| u05 | `grammar[0].exercises[6]` | order: حمام کوچک نیست. → choice (Hangi cevap uygun?): چای هست؟ → ___ | function (replaces an order item close to e4). |
| u05 | `grammar[1].exercises[2]` | choice: مادرم ___ آشپزخانه است. → type (Tersini söyleyin: «üstünde» → «altında».): گربه روی میز است. → گربه ___ میز است. | rewrite (replaces a 3rd preposition choice). |
| u05 | `grammar[1].exercises[5]` | order: کلید روی میز است. → choice (Hangi cevap uygun?): ببخشید، دستشویی کجاست؟ → ___ | function (replaces an order item identical to words[11].ex). |
| u06 | `grammar[0].exercises[2]` | choice: ما شب ساعت ده ___. → type (Cümleyi «u» (o) için yazın.): من هر روز کار می‌کنم. → او هر روز کار ___. | rewrite (replaces a 4th person-ending choice). |
| u06 | `grammar[0].exercises[6]` | order: من ساعت هفت بیدار می‌شوم. → choice (Hangi cevap uygun?): تو الان چه کار می‌کنی؟ → ___ | function (replaces an order item identical to words[6].ex / G1 x5). |
| u06 | `grammar[1].exercises[4]` | type: ساعت یازده و ___ است. → type (Bir saat sonrasını yazın.): ساعت هفت است. → ساعت ___ است. | rewrite (replaces a 2nd «nim» item). |
| u06 | `grammar[1].exercises[5]` | order: ساعت چند بیدار می‌شوی؟ → choice (Hangi cevap uygun?): ساعت چند است؟ → ___ | function (replaces an order item identical to the dialogue title). |
| u07 | `grammar[0].exercises[4]` | type: لطفاً ___. → type («Siz» için kibarca söyleyin.): بیا! → لطفاً ___. | rewrite (replaces a type item that only copied «beneşinid» from e3). |
| u07 | `grammar[0].exercises[7]` | order: لطفاً مستقیم بروید. → choice (Hangi cevap uygun?): ببخشید، بانک کجاست؟ → ___ | function (replaces an order item identical to x0). |
| u07 | `grammar[1].exercises[5]` | type: ایستگاه مترو ___؟ → type (Bu yeri soran soruyu yazın.): ایستگاه مترو کنار پارک است. → ایستگاه مترو ___؟ | rewrite (the old gap item now starts from a statement). |
| u07 | `grammar[1].exercises[6]` | order: من به بانک می‌روم. → choice (Hangi cevap uygun?): کجا می‌روی؟ → ___ | function (replaces an order item identical to e0). |
| u08 | `grammar[0].exercises[3]` | choice: برف ___ است. → type («Kırmızı bir gömleğim var» deyin.): پیراهن قرمز است. → من یک ___ دارم. | rewrite (replaces «barf sefid», identical to words[12].ex). |
| u08 | `grammar[0].exercises[6]` | order: این پیراهن قرمز است. → choice (Hangi cevap uygun?): چه رنگی دوست دارید؟ → ___ | function (replaces an order item identical to e0). |
| u08 | `grammar[1].exercises[3]` | choice: این کتاب ارزان است: ___ هزار تومان. → type (Fiyat iki katına çıktı. Yeni fiyatı yazın.): قیمتش پنجاه هزار تومان است. → قیمتش ___ هزار تومان است. | rewrite; also removes a choice where «pânsad / sad hezâr» for a cheap book were arguable. |
| u08 | `grammar[1].exercises[6]` | order: قیمتش چند است؟ → choice (Hangi cevap uygun?): قیمتش چند است؟ → ___ | function (replaces an order item identical to phrases[1]). |
| u09 | `grammar[0].exercises[4]` | type: برف ___. → type (Olumsuz yapın.): امروز باران می‌آید. → امروز باران ___. | rewrite (replaces a duplicate of x1). |
| u09 | `grammar[0].exercises[7]` | order: در تبریز برف می‌آید. → choice (Hangi cevap uygun?): هوا چطور است؟ → ___ | function (replaces an order item close to e1). |
| u09 | `grammar[1].exercises[3]` | choice: دی و بهمن ماه‌های ___ هستند. → type (Olumsuz yapın.): من زمستان را دوست دارم. → من زمستان را دوست ___. | rewrite, recycles u04 (replaces a choice identical to e3). |
| u09 | `grammar[1].exercises[6]` | order: نوروز اول فروردین است. → choice (Hangi cevap uygun?): نوروز مبارک! → ___ | function (replaces an order item identical to e0). |
| u10 | `grammar[0].exercises[0]` | choice: من می‌توانم شنا ___. → type (Olumsuz yapın.): من می‌توانم شنا کنم. → من ___ شنا کنم. | rewrite (replaces a duplicate of x4). |
| u10 | `grammar[0].exercises[6]` | order: من می‌توانم شنا کنم. → choice (Hangi cevap uygun?): می‌توانی گیتار بزنی؟ → ___ | function (replaces an order item identical to e0 / sentences[0]). |
| u10 | `grammar[1].exercises[3]` | choice: آیا امیر فوتبال بازی می‌کند؟ ___، هر جمعه. → type («Severim» ile yazın: dust dâram + dilek kipi.): من کتاب می‌خوانم. → من دوست دارم کتاب ___. | rewrite (replaces a trivial bale/na choice). |
| u10 | `grammar[1].exercises[6]` | order: آیا تو فوتبال دوست داری؟ → choice (Hangi cevap uygun?): آیا فوتبال دوست داری؟ → ___ | function (replaces an order item identical to the table row). |
| u06 | `grammar[2].exercises[4]` | (new) → type («Cumaları» deyin): جمعه کار نمی‌کنم. → ___ کار نمی‌کنم. | rewrite in the new days point |
| u06 | `grammar[2].exercises[5]` | (new) → choice (Hangi cevap uygun?): امروز چه روزی است؟ → ___ | function in the new days point |

Spaced «نمی خواهم» variants were left out of the `answer` lists because the validator rejects them. The ZWNJ form and the
form without a space are both accepted.

### 5.5 Other changes

- **`why`:** all 135 `choice`/`type` grammar exercises have one short Turkish `why` (≤ 160 chars) specific to the item.
- **`sym`:** 40 marks. These are role pictures (👩 mother, 👨 father, 👴 👵 grandparents, 💑 spouse, 🎓 student) and symbols
  (👍 yes/good, ❌ no, ❓ how many, 📅 year/every day/weekend, 🙏 please, 🍇 fruit, 🍳 kitchen/breakfast, 🍚 lunch, 🌅 morning, 🌙 night,
  🍴 eat, 💼 work, 📖 read, 💊 pharmacy, 🌳 park, 🚦 crossroads, 💵 toman, 🌡️ hot, the 4 seasons, 🗓️ month, 🌱 Nowruz, 🎲 play,
  📚 reading, 🎬 film, 🥘 cooking, 🥾 walking, 💪 can). Literal pictures stay unmarked.
- **Explanations:** 14 added lines: colloquial ×4, Tanıdık kelimeler ×4, ğ reminder ×2, taarof, Yaldâ, aunt/uncle words,
  and an u08 link to the tens. I also added the u06 days explanation and the u02 tens paragraph.
- **Recycling:** u10 `reading.text[7]` «شب با خانواده‌ی خاله‌ام فیلم می‌بینیم.»; u08 `words[3].ex.s` drops the «(sad = yüz…)» note now that
  sad is taught.
- **Inference questions (task 4):** not applicable. The task covers A2–C1, and A1 readings stay literal for total beginners.

### 5.6 Counts

| Category | Count |
|---|---|
| Production items | 42 (21 rewrite + 21 function; 40 replacements + 2 in the new u06 g03) |
| `why` | 135 |
| Inference questions | 0 (A1 is out of scope) |
| `sym` marks | 40 |
| Cast edits | 17 (14 text items + 3 speaker labels) + `content/fa-tr/CAST.md` |
| A1 gaps | 8 new words, 1 new grammar point (u06 g03), u02 G0 extended to 100 |
| Other fixes | 8 goals / quote-style edits, 14 explanation additions, 1 dialogue line (âyâ), 1 reading line, 1 answer list (۲۰), 1 `s` |

**Audio:** new or changed `t`/`cue` need TTS: 42 production items (+ cues), 17 cast items, 8 words + examples, the u06 g03
examples and exercises, the u02 G0 title and example, u10 `dialogue.lines[5]` and `reading.text[7]`.

### 5.7 For the lead (app)

1. **Persian keyboard:** the type answers now include days (جمعه‌ها, سه‌شنبه) and numbers (سی, صد, هشت). Please check that the
   on-screen keyboard order and the ZWNJ key work for them, and that it offers Persian digits (۲۰ / ۳۰ / ۱۰۰ are accepted).
2. **`sym`:** 40 words in fa-tr A1 rely on the app leaving `sym` words out of "Which picture is it?".
3. **Script practice** (4.3): an option to hide `pr` until tapped, from about u06 on.
4. **Speaker labels:** u07 «Xânom» and u08 «Foruşande» are role labels, not names. Show them as they are.
5. **Validator:** the brief allows up to 18 words per unit, but `tools/validate.py` stops at 16. I kept to 16. Raise the limit
   if more days or tens should become word cards.
