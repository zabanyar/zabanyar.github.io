# Critic review (pass 4): tr-fa B2 (u01–u10)

Scope: every item of `content/tr-fa/B2/u01.json` … `u10.json`. I checked words (t, s, pr, pl, emoji, ex), phrases with `pr`, dialogues, both grammar points per unit (title, explanation, table, examples, every exercise and its key, every `order` item for missing `alts`), readings and their questions, sentences, goals and titles.

I also ran these checks:
- Scripted scans of the Persian (Arabic ي/ك, missing ZWNJ after می/نمی and before ها/ترین/ام…, double spaces). All were clean.
- A scan for Latin letters in `pr`. Clean.
- A side-by-side list of all 151 word `pr` guides, checked against the course conventions in `CURRICULUM_NEW_LEVELS.md` and pass 3.
- The app code. Picture questions exclude only an *identical* emoji (`docs/js/lesson.js`), and `order` matching ignores case and punctuation (`docs/js/ui.js normalize`). The TTS text normalizer in `tools/build.py speakable/numbers` already handles years with suffixes (1961'de), "16. yüzyılda", decimals, «Prof. Dr.», B1/B2 and slashes. So the TTS-risky texts that passes 2 and 3 listed are covered centrally, and grammar titles and tables are not voiced at all.

I read the previous reviews (`review/tr-fa-B2.md`, `review/tr-fa-B2-pass3.md`) so as not to undo their decisions. After my edits, `python3 tools/validate.py content/tr-fa/B2/*.json` prints OK for all 10 files, and `python3 tools/audit.py` reports `tr-fa B2: {}`.

## 1. Verdict

This is a strong, carefully built B2 level. The Turkish is natural and correct. The Persian is idiomatic, with clean ZWNJ use. The grammar explanations are accurate and compare usefully with Persian: «که» for reported speech, «انگار» for -mış gibi, «کتاب‌متاب» for m-ikileme. The `pr` guides are consistent with the course conventions.

The themes fit an Iranian family well:
- Tehran smog and the Iranian–Turkish water crisis
- Hafez, and a Rumi biography
- Turkish proverbs paired with their Persian equivalents
- migration and health-system stories told from an Iranian newcomer's point of view

Earlier passes had already fixed the real errors, so this pass found only small things:
- 3 misleading pictures, where two words in the same unit showed near-identical images
- 1 case error in a grammar exercise
- 2 type answers that rejected correct variants
- 2 order items that rejected a correct word order

The main weaknesses are pedagogical rather than factual. The exercise types are narrow (only choice, type and order, all at sentence level), and some B1 grammar is re-taught without explicitly building on it.

## 2. Fixed

| Unit | Path | Before → After | Reason |
|---|---|---|---|
| u01 | `words[0].emoji` (haber) | 📰 → "" | 📰 (newspaper) and 🗞️ (rolled-up newspaper, `words[1]` *gazete*) are near-identical pictures in the same unit. A "Which picture?" question for *haber* or *gazete* can therefore offer two newspapers. *haber* ("news") has no picture of its own. |
| u01 | `words[3].emoji` (muhabir) | 🎙️ → "" | 🎙️ (studio microphone) and 🎤 (`words[11]` *röportaj*) are both microphones in the same unit, so picture questions are ambiguous. 🎤 fits *röportaj* better; a reporter has no emoji of its own (no ZWJ sequences allowed). |
| u02 | `grammar[0].exercises[6].alts` (*Ne elektrik var ne de su.*) | — → `["Ne su var ne de elektrik."]` | The same tiles form an equally correct sentence, and the app accepts only `t` plus `alts`. This matches pass 3, which added the swapped order for the parallel *hem … hem de* item (`exercises[7]`). |
| u05 | `grammar[1].exercises[4].answer` (*Sanki bizi yıllardır ___ gibi sarıldı.*) | `["tanıyormuş"]` → `["tanıyormuş", "tanırmış"]` | *yıllardır tanırmış gibi* is an equally common, correct form. The g02 explanation mentions -mış after other tenses, and u01 g02 teaches *gelirmiş*. |
| u06 | `grammar[0].exercises[5].answer` (*Sabah erken ___ alışkın değilim.*) | `["kalkmaya"]` → `["kalkmaya", "uyanmaya"]` | The Persian «بیدار شدن» is literally *uyanmak*. *erken uyanmaya alışkın değilim* is fully correct. |
| u06 | `grammar[1].exercises[4].t` | *Onlar Türkçe ___ rağmen çok iyi anlaştık.* → *Onların Türkçe ___ rağmen çok iyi anlaştık.* | Case error. The subject of a -mA nominal clause takes the genitive when it differs from the main-clause subject (here *biz*, from *anlaştık*). Nominative *Onlar* only works when it is also the main subject, as in the table's *Sen yorgun olmana rağmen bize yardım ettin*. Both accepted answers (*bilmemelerine*, *bilmemesine*) remain correct with *Onların*. |
| u08 | `words[14].emoji` (edebiyat) | 📚 → "" | 📚 shows "books", not "literature", and the same unit has *roman* 📖. In a picture question for *roman* or *edebiyat*, both book pictures are plausible answers. |
| u08 | `grammar[0].exercises[6].alts` (*Kitabı alıp hemen okumaya başladım.*) | — → `["Kitabı alıp okumaya hemen başladım."]` | Equally natural placement of *hemen* with the same tiles. A learner who builds it would wrongly be marked wrong. |

**Totals: 8 fixes.**
- Emoji/picture: 3
- Grammar exercise text (case error): 1
- `type` answer lists: 2
- `order` alts: 2
- `pr`, translation, explanation or reading: 0 (I found no errors in these)

## 3. Remaining issues (not fixed: need a decision or bigger work)

**High**
- None found. No content errors remain that would teach something wrong.

**Medium**
1. **Auto-generated `order` steps from dialogue lines, phrases and sentences have no `alts`.** `lesson.js` builds word-order tasks from short dialogue lines, phrases and `sentences` (lines 142–172), but `alts` exist only on grammar exercises. Turkish word order is free, so short sentences such as u03 `sentences[7]` *Hava gittikçe soğuyor* (safe) or u04 `sentences[1]` *Bu yıl benzine yine zam gelebilir* (also *Benzine bu yıl yine zam gelebilir*) can reject correct orders. *Suggestion:* either allow `alts` on `sentences` and dialogue lines and have a reviewer add them course-wide, or limit auto-order to items that have only one natural order (for example, ≤ 4 words).
2. **The `pr` convention for circumflex (palatal) vowels is inconsistent across levels.** B1 and B2 write *şikâyet* شیکیایِت, *kâr* کیار, *zekâ* زِکیا. A1 writes *rüzgâr* روزگار, C1 writes *hâli* هاآلی, and `CURRICULUM_NEW_LEVELS.md` says "long vowels in loanwords (kâr, hâlâ) shown as آ". The B2 forms are a reasonable rendering of the palatal k, and they distinguish *kâr* from *kar* («برف»), so I left them. *Suggestion:* decide once (I recommend «کیا/گیا» for palatal kâ/gâ and «آ» only for true length, as in *hâlâ*), then update the curriculum note and A1/C1.
3. **Some B1 grammar is re-taught with little explicit link to B1:**
   - u01 g02 -mış (B1 u01 g02 already teaches *duyulan geçmiş*)
   - u08 g02 -(y)ınca (B1 u02 g02)
   - u05 g01 -saydı (keşke + -sa is in B1 u10)

   The B2 versions do extend the topic: news register, -dığında versus -ınca, and -mış olsaydı. *Suggestion:* add one sentence to each explanation, such as «در B1 دیدیم … ؛ این‌جا …», so learners see the progression, as u07 g01 already does («در B1 دیدیم که ettirgen…»).

**Low**
4. u01 g02 `exercises[3]` *Ali'yi gördün mü? Galiba yeni bir araba ___.* accepts only *almış*. *aldı* is grammatical with *galiba*, although the unit's target is -mış. *Suggestion:* reword the prompt so that only evidential -mış fits, for example *Ali'nin kapısının önünde yeni bir araba var; galiba yeni bir araba ___.*
5. u01 g01 `exercises[4]` accepts only *gelmeyeceğini*. *gelemeyeceğini* is also correct, but the Persian «نمی‌آید» steers to the plain negative. Pass 2 already left this as it is.
6. u02 g02 `exercises[3]` and `exercises[5]` still accept *oysa ki*, while pass 2 removed it as a choice distractor because it is a misspelling. Accepting it is lenient, but the unit sends mixed signals. *Suggestion:* keep accepting it, but have the app show the TDK spelling *oysaki* in the feedback.
7. Loose but not wrong pictures:
   - u02 *sel* 🌊 (a wave)
   - u02 *yenilenebilir enerji* ☀️ (reads as "sun")
   - u07 *keşfetmek* 🔭
   - u10 idioms pictured literally: *etekleri zil çalmak* 🔔, *burnu büyük* 👃, *pireyi deve yapmak* 🐪

   Passes 2 and 3 kept these on purpose. If picture questions turn out confusing in practice, set the u02 pair to "".
8. u09 g01 `table` puts the example sentence in column 1 and the pattern in column 2, the reverse of every other table in the level. *Suggestion:* swap the columns for consistency. This is a layout change, so I did not make it.
9. Recurring names with shifting identities, already noted in pass 3:
   - Zeynep and Amir use *siz/hocam* in u03 but *sen* in u07.
   - Amir is a son (u05), a master's applicant (u03) and a Rezaei working in Ankara (u09).

   *Suggestion:* give the level one or two recurring characters with a stable backstory, for example Mina's family in Istanbul. That would also make the course feel more like a story.

## 4. Improvement ideas for this level (prioritised)

1. **Add production at text level, not only sentence level.** At B2 the can-do goals are «یک ایمیل رسمی بنویسم», «نظرم را بگویم», «نقد کوتاهی بگویم», but every exercise is choice, type or order on a single sentence.
   - Add one guided writing or speaking task per unit, even ungraded: rewrite the u01 dialogue as a news report with *-dığını açıkladı*; write the reply to the u09 e-mail; give a 3-sentence opinion with *bana kalırsa / öte yandan*.
   - The app's "ask Claude" or self-check could support this later.
2. **Make the readings richer.** All 4 questions per reading are literal retrieval.
   - Add one inference or opinion question per reading. Examples: u03 «Yazar ezber hakkında ne düşünüyor?»; u06 «Maryam'ın ailesi neden artık kendini yabancı hissetmiyor?»
   - Add one vocabulary-in-context question, such as the meaning of *ayakta kalmak* in u04.
3. **Recycle vocabulary across units on purpose.** Several B2 headwords appear only in their own unit, for example *sürdürülebilir*, *önyargı*, *talep*, *eleştiri*.
   - Use 2–3 earlier-unit words in each later reading or dialogue: u07 could reuse *gündem* and *kaynak* from u01; u09 could reuse *başvuru* and *burs* from u03.
   - In u10 the idioms could appear inside the earlier themes (*kafa patlatmak* in u03 education, *ayağını yorganına göre uzat* in u04 economy) instead of only in u10.
4. **Contrast exercises between neighbouring structures.** The level teaches many near-synonyms that are only contrasted in the explanations:
   - -dığı halde / -masına rağmen / -sa da
   - -dığında / -ınca / -dıkça
   - -mış olmalı / -mış gibi / -mış (rumor)

   Add a mixed "which one fits?" exercise in u06, u08 and u10 that recycles earlier B2 structures. This is where B2 learners actually make mistakes.
5. **Register awareness.** u07 g02 (-mektedir) and u09 (resmî yazışma) are the most useful units for adults dealing with Turkish bureaucracy. Add a "formal ↔ everyday" transformation exercise, for example *Fiyatlar artıyor → Fiyatlar artmaktadır*, and real-life document snippets: an e-Devlet notice, a residence-permit appointment SMS, a hospital MHRS text.
6. **Listening.** Dialogues are only read along with audio. One "listen and answer" question per dialogue (the app already has `listenMeaning`) would train the fast colloquial forms used here: *-mış* rumors, *halbuki*, *yeter ki*.
7. **Cultural fit is already a strength; deepen it.**
   - u08 could add one short Persian–Turkish parallel (a Rumi bayt in Persian with a Turkish translation).
   - u05 could mention practical items an Iranian family actually needs: MHRS appointments, *e-Nabız*, and the fact that *yabancı sağlık sigortası* is required for a residence permit.

   Keep factual claims hedged, as pass 3 did.

## 5. Pass 5 (Nov 2026)

Brief: `review/BRIEF_FIX5.md`, tasks 1–7, for `content/tr-fa/B2/u01–u10`. The course-wide pass (A1 report §5a: cast sheet,
cross-level repeats, `pr` consistency) was not undone. After the edits `python3 tools/validate.py content/tr-fa/B2/*.json`
prints OK for all 10 files, `python3 tools/audit.py` gives `tr-fa B2: {}`, `python3 tools/repeats.py tr-fa` finds 0 repeats,
and `python3 tools/pr_words.py tr-fa` finds no word with two `pr` spellings outside the A1 u00 letter names.

### 5.1 Issues and ideas from §3–§4

| # | Issue / idea | Status | What was done / reason |
|---|---|---|---|
| M1 | Auto-generated `order` steps from short dialogue lines, phrases and sentences have no `alts` | done | Every item of ≤ 8 words without «…» (what `lesson.js` turns into word-order tasks) was checked; 52 alternative orders added to 50 items where Turkish has another fully natural order (e.g. u04 *Benzine bu yıl yine zam gelebilir*, u03 *Gittikçe hava soğuyor*, u06 *Hep birlikte ayrımcılığa karşı durmalıyız*). Proverbs, fixed formulas and right-dislocated orders were left without alts. |
| M2 | `pr` convention for circumflex vowels | done (course-wide) | Settled by the course-wide pass in `PR_DICT.md` («کیا/گیا», rüzgâr «روزگیار»). B2 was already consistent; nothing to change. |
| M3 | B1 grammar re-taught without a link | done | One opening sentence added to u01 g02 (-mış, B1 u01), u05 g01 (-saydı, B1 u10 keşke/-sa) and u08 g02 (-dığında, B1 u02 -ınca/-ken). |
| L4 | u01 g02 X3 *Galiba yeni bir araba ___* also allows *aldı* | done | Now *Söylentilere göre Ali yeni bir araba ___.* (recycles phrase p03), `s` adjusted; only evidential *almış* fits. |
| L5 | u01 g01 *gelemeyeceğini* | not done | Kept as pass 2 decided: the Persian «نمی‌آید» asks for *gelmeyeceğini*; *gelemeyeceğini* means "cannot come". |
| L6 | *oysa ki* accepted in u02 g02 | not done (app) | Still accepted on purpose; app request below (show the TDK spelling *oysaki* in feedback). |
| L7 | Loose pictures (sel 🌊, yenilenebilir enerji ☀️, keşfetmek 🔭, idioms 🔔 👃 🐪) | done | Marked `"sym": true` (task 5), so they stay on word cards but never appear in picture questions. |
| L8 | u09 g01 table columns reversed | done | Columns swapped to pattern \| example, like every other table. |
| L9 | Recurring names with shifting identities | done (course-wide) | `content/tr-fa/CAST.md`; two suffix slips left by the rename were fixed here (see 5.2). |
| I1 | Text-level production (writing/speaking tasks) | partly | Sentence-level production added (40 rewrite/function items, task 2). Ungraded free writing needs an app step type → app request. |
| I2 | Inference and vocabulary-in-context reading questions | done | 12 questions: 1 inference per reading, 2 in u03 (incl. the suggested *Yazar ezber hakkında ne düşünüyor?*), and the suggested *ayakta kalmak* vocabulary-in-context question in u04. |
| I3 | Deliberate vocabulary recycling | partly | Every new item reuses words of its unit or earlier B2 units (dialogue and reading words, phrases such as *Söylentilere göre*, *Hesabını kitabını*). Moving u10 idioms into earlier themes would mean rewriting dialogues; not done. |
| I4 | Contrast exercises between neighbouring structures | done | Function items that contrast -masına rağmen / -dığı için / -dığı sürece (u06 g02), -dığı için / -dığı halde / -dığı sürece (u03 g02), -(y)arak / -mayarak / -casına (u08 g01), -(y)abilir / -malıydı (u04 g01) and -saydı … -ırdı / -ırsa … -ır (u05 g01). |
| I5 | Register: formal ↔ everyday | done | u07 g02 rewrite *değiştiriyor → değiştirmektedir* and a "which sentence does the news reader say?" item; u09 g01 rewrite and "e-mail to an official" item. Authentic document snippets (e-Devlet, MHRS) not added: they would need new reading content. |
| I6 | Listening questions on dialogues | not done (app) | The app already makes `listenMeaning` steps from lines; a dedicated question type is app work. |
| I7 | Cultural deepening (Rumi bayt, MHRS/e-Nabız) | not done | A Persian bayt cannot go into `t` (Turkish TTS); MHRS facts would need hedged new reading text. Left for a content pass. |

### 5.2 Other fixes found in this pass

| Unit | Path | Before → After | Reason |
|---|---|---|---|
| u04 | `reading.questions[1].q.t`, `[2].q.t` | *Ebru'in* → *Ebru'nun* | Suffix left by the cast rename (Elif'in → Ebru'in). |
| u06 | `dialogue.lines[4].t` | *Ablam de* → *Ablam da* | Vowel harmony left by the cast rename. |
| u01 | `grammar[1].examples[0].t` | *4,5 büyüklüğünde* → *dört buçuk büyüklüğünde* | No digits in voiced text. |
| u03 | `words[4].ex.t` | *en az 3,0* → *en az üç* | Same. |
| u04 | `reading.text[3].t` | *29 yaşındaki* → *yirmi dokuz yaşındaki* | Same. |
| u07 | `words[7].ex.t`, `grammar[0].examples[0].t`, `grammar[0].exercises[3].t` | *1961'de*, *1950'lerde*, *16. yüzyılda* → *bin dokuz yüz altmış bir yılında*, *bin dokuz yüz ellili yıllarda*, *on altıncı yüzyılda* | Same. |
| u08 | `reading.text[0].t`, `[4].t` | *1207 yılında*, *1244'te* → *bin iki yüz yedi yılında*, *Bin iki yüz kırk dört yılında* | Same. |
| u09 | `reading.text[3].t` | *1 Eylül'de* → *eylülün birinde* | Same. |

Left: *B1 / B2* in u09 reading (level names; `tools/build.py` already reads them correctly).

### 5.3 Brief tasks 2–6

- **Production (task 2):** in all 20 grammar points 2 of the 8 exercises were replaced (mostly a duplicate `order` item and the most
  repetitive gap fill) with one **rewrite** (`type` with `cue`, `task`, multi-word gap where needed, all variants in `answer`) and one
  **function** item (`choice`, `t` = `___`, 3 whole sentences, exactly one fits). Every grammar point keeps 8 exercises and at least one
  `order` item. B2 has no `pr` on grammar items, so no `cpr`.
- **`why` (task 3):** all 140 `choice`/`type` grammar exercises have a specific one-sentence Persian rule (≤ 160 chars).
- **Inference (task 4):** 12 new reading questions (Turkish question, Persian `s`, one defensible option).
- **`sym` (task 5):** 55 words marked: abstract nouns pictured by an object (ekonomi 📈, veri 📊, uzay 🚀, aile hekimi 🩺, acil servis 🚑, oturma izni 🪪, memleket 🏡…) and all 11 idioms of u10. Literal pictures (gazete 🗞️, uydu 🛰️, tablo 🖼️, aşı 💉, geri dönüşüm ♻️…) stay unmarked. No emoji was misleading enough to remove.
- **Recycling (task 6):** new items reuse the unit's dialogue, reading and words (e.g. u01 park/belediye story, u05 Can/Maryam's father, u08 *çay demleyip*, u09 *tercüme*, u10 *pireyi deve yapmak*).

### 5.4 Counts

| Category | Count |
|---|---|
| Production items (rewrite + function) | 40 (20 + 20) |
| `why` added | 140 (100 on existing items + 40 on new items) |
| Inference / vocabulary-in-context questions | 12 |
| `sym` marks | 55 |
| `alts` on auto-order items (phrases, dialogue lines, sentences) | 52 alternative orders on 50 items |
| Other fixes | 18 edits: 9 digits → words, 3 cast-rename suffixes, 3 B1 links in explanations, 1 exercise reworded (`t` + `s`), 1 table |

### 5.5 App requests
- Show the TDK spelling (*oysaki*) in feedback when a lenient variant (*oysa ki*) is accepted.
- An ungraded "write / say it yourself" step for text-level production (B2 goals: formal e-mail, opinion, short review).
