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
