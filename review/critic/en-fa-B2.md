# Critical review, pass 4 (Nov 2026): en-fa B2

Slice: `content/en-fa/B2/u01.json … u10.json` (English for Persian speakers, B2). I read every item in every unit: titles, goals, words (t, s, pr, pl, ex, emoji), phrases, dialogues, both grammar points (title, explain, table, examples, exercises), readings and their questions, and sentences. Scripts also checked four things:
1. **t/pr alignment.** Each `t` word was lined up with its `pr` word, with gaps filled with the keyed answer. The script then listed every English word written in more than one way, in B2 and in A2, B1 and C1.
2. **ذی/ذِ before vowel sounds.** No errors.
3. **Arabic ي/ك.** None found.
4. **Duplicate headwords** inside the level and across A1–C1. None found.

`python3 tools/validate.py content/en-fa/B2/*.json`: OK for all 10 files. `python3 tools/audit.py`: en-fa B2 `{}` before and after.

## 1. Verdict

This is a solid B2 level. It follows the curriculum exactly, and every grammar explanation I checked is correct. The explanations are precise and compare with Persian where that helps (ماضی بعید, «کاش … کرده بودم», «اگرچه … ولی»). Every `choice` item has exactly one correct option, and every reading answer can be found in its text. Topics and settings suit an Iranian family that lives partly in Germany: Isfahan, Lake Urmia, the Zayandeh Rud, taarof, Yazd, Hamburg. I found no wrong English sentences and no wrong answer keys.

The weak spot is still the pronunciation guide. It is consistent inside most units, but a few common words were spelled differently from unit to unit and from the rest of the course. I also found that **five pr changes reported in pass 3 were never applied to the files**. Their stated reason (“C1 also uses آفِس / ویزِت”) does not match the C1 files. Beyond correctness, the main remaining weaknesses are teaching ones:
- some dialogues pile up the target structures in an unnatural register;
- distractors are often too easy for B2;
- the exercise formats are limited.

## 2. Fixed (23 changes)

Counts by category: pr 17, exercises (accepted answers) 5, translation 1. There were no changes to target text, grammar explanations, emoji or reading keys.

| Unit | Path | Before → After | Reason |
|---|---|---|---|
| u01 | `grammar[1].examples[1].s` | …ده سال می‌شود که اینجا کار کرده‌ام. → …ده سال می‌شود که اینجا کار می‌کنم. | «… می‌شود که … کار کرده‌ام» is not natural Persian. Duration up to a point is said with «می‌شود که … کار می‌کنم» |
| u01 | `grammar[1].exercises[5].answer` | get, come, arrive, return → + are | "By the time you're home, I'll have cooked dinner" is also correct |
| u02 | `grammar[0].exercises[4].answer` | waiting, standing → + sitting | "They had been sitting for two hours when the bus finally came" is also correct |
| u03 | `grammar[1].exercises[1].pr` | وِرِنْت → وِرنت | weren't /wɜrnt/ is one syllable. This matches the course spelling (A2 ×4, B1 ×4) |
| u03 | `grammar[1].exercises[4].pr` | وِرِنْت → وِرنت | same |
| u03 | `grammar[1].exercises[4].pr` | ویزِتِد → ویزیتِد | visit(ed) = ویزیت(ِد) as in A2 (21×), B1 (5× vs 2×) and C1 (4× vs 2×). B2 had both spellings |
| u04 | `grammar[0].exercises[0].pr` | آفِس → آفیس | office = آفیس in every en-fa level (A1 9×, A2 6×, B1, C1 3×) and 4× in B2. This was the only آفِس |
| u04 | `grammar[0].exercises[6].pr` | ویزِتِد → ویزیتِد | course spelling of visit(ed) |
| u04 | `grammar[1].exercises[3].answer` | cut → cut, trimmed | "I need to get it trimmed" is also correct and natural |
| u05 | `grammar[1].exercises[3].answer` | estimated, said, reported, believed, thought, known → + claimed | "It is claimed that …" is a correct impersonal passive. The list already accepts several reporting verbs |
| u06 | `grammar[1].exercises[5].pr` | وِرِنْت → وِرنت | weren't, course spelling |
| u07 | `dialogue.title.pr` | ستادیینگ → سْتادیینگ | studying = سْتادیینگ (B1 6×, C1). The st- cluster needs a sukun (the convention writes سْتُری), otherwise it can be read «setadiing» |
| u07 | `reading.text[1].pr` | ستادیینگ → سْتادیینگ | same |
| u07 | `reading.text[8].pr` | ستادیینگ → سْتادیینگ | same |
| u07 | `sentences[4].pr` | ستادیینگ → سْتادیینگ | same |
| u07 | `grammar[1].exercises[5].pr` | سْتادیئینگ → سْتادیینگ | the only spelling of studying with ئ in the course |
| u08 | `grammar[0].exercises[4].pr` | ویزِت → ویزیت | course spelling of visit (3× ویزیت elsewhere in B2) |
| u08 | `grammar[1].exercises[5].pr` | ویزِت → ویزیت | same |
| u08 | `grammar[1].exercises[0].pr` | بیوتِفِل → بیوتیفِل | beautiful = بیوتیفِل (3× in B2, majority in A1 and A2) |
| u08 | `sentences[3].pr` | کرِدیت → کْرِدیت | the cr- cluster needs a sukun (A2 writes کْرِدیت), otherwise it reads «kerdit» |
| u09 | `words[8].ex.pr` | کرِدیت → کْرِدیت | same |
| u09 | `reading.text[10].pr` | کرِدیت → کْرِدیت | same |
| u09 | `reading.text[6].pr` | …دیفیکِلت هاواِوِر… → …دیفیکِلت؛ هاواِوِر… | `t` has a semicolon before "however", but the `pr` ran the two clauses together |

**About pass 3.** Five pr changes in `review/en-fa-B2-pass3.md` were never applied to the files:
- u01 L8 آفیس → آفِس
- u01 Q3 دویینگ → دوئینگ
- u02 R12 ویزیت → ویزِت
- u04 R10 دیفیکِلت → دیفِکِلْت
- u05 R1 ویزیتِد → ویزِتِد

Their reason, “C1 also uses آفِس / ویزِت”, is wrong: C1 uses آفیس 3× and ویزیت 4×. I did not apply them. Instead, I made the level match the **course-wide majority spelling** (آفیس, ویزیت, دیفیکِلت, دویینگ). The learner has already seen these spellings dozens of times in A1–B1. After my changes, the only words in B2 still written in two ways are legitimate ones:
- has / have: هَس / هَف in "has to" / "have to"
- read: رید / رِد for present and past
- use / used: یوس / یوزْد / یوسْت for "single-use", the verb "used" and "used to"
- perfect: پِرفیکْت once (deliberately kept in pass 3)
- variants that differ only in sukun

## 3. Remaining issues (not fixed: they need a decision or more work)

### High
1. **The course has no pronunciation dictionary.** Each level spells some common words its own way:
   - office: آفیس / آفِس
   - visit: ویزیت / ویزِت
   - weren't: وِرنت / وِرِنْت
   - difficult: دیفیکِلت / دیفِکِلْت / دیفیکِلْت, all three inside C1
   - perfect: پِرفیکْت / پِرْفِکْت
   - officer: آفیسِر in A2, آفِسِر in B2
   - visitor: ویزیتِر / ویزِتِر

   As a result, each reviewer "fixes" these in a different direction, and reports have described changes that were never made. *Suggestion:* generate one `content/en-fa/PRONUNCIATION.json` (headword → pr) from the A1–C1 majority spellings, have `tools/audit.py` flag any token that differs from it, and decide sukun usage once.
2. **Reading questions assume the writer's gender.** In u01, u03, u08 and u09 the questions use "she" or "he", but the text never says who the writer is:
   - u01: a former accountant
   - u03: a lawyer in Chicago
   - u08: Hamburg
   - u09: a year without shopping

   A learner who reads carefully may wonder whether they missed something. *Suggestion:* add a byline title or a first sentence with a name, e.g. "My name is Mina, and …" in u01, or change the questions to "the writer".

### Medium
3. **Register in grammar-showcase dialogues.**
   - u09 dialogue L5–L9 packs *However, … / Despite being simple, … / whereas … / Nevertheless, …* into a casual chat between friends. "Nevertheless, I've already lost thirty dollars" is formal written English, and the unit's own explanation says *nevertheless* is formal.
   - u05 L3/L7 (*He's said to have… / It's believed that…*) is fine for neighbors repeating news, but sounds like a news reader.

   *Suggestion:* keep *although / whereas / despite* in the u09 dialogue and replace *Nevertheless* with *Still,* (and *However* with *But*). Move the formal linkers to the reading, where they belong.
4. **Text the voice may read badly.** This list is unchanged from pass 3:
   - phrases ending in "…": u01 p08; u02 p04; u03 p01, p04, p08; u04 p06; u05 p01, p02, p08; u06 p01, p02, p05, p07; u07 p01; u08 p02
   - digits: "300" in u06 w07 ex; "1970s" in u06 R1 and Q0; "2014" in u06 R4 and Q1
   - "TV": u10 g01 X1, X4; g02 X0; R0; S2
   - Persian words in Latin script: Zayandeh Rud, Urmia, taarof, Chaharshanbe Suri
   - "NOT" in capitals: u06 Q2
   - typographic quotes: u05 R5, u06 R9, u07 R3, u09 L10, u10 R5, R10
   - "vs" in the u01 g01 title

   *Suggestion:* handle these centrally (the voice reads "…" as nothing, which is fine). Check that the Persian place names sound acceptable in the English voice, or add a `tts` override field.
5. **Distractors are too easy in many `choice` items.** One example is u02 g01 X0: *had already started / has already started / already starts*. The real B2 contrast (past simple vs past perfect) is never tested, because "started" would also be correct after "When we arrived". *Suggestion:* add contexts where the two forms really differ and the right one can be identified from the context, for example "When we arrived, the concert ___ (= it was over) → had finished / finished".

### Low
6. **Loose emoji.** None is actively wrong, but these are weak picture clues:
   - 🤝 is used for both *negotiate* (u01) and *haggle* (u09)
   - 📝 is used for both *contract* (u01) and *enroll in* (u07)
   - 🧊 melt (shows ice), 🥦 nutritious (shows broccoli), 🍽️ etiquette, 📊 budget, 🏦 loan
   - 👏 audience, 🍿 binge-watch, 🤐 spoiler, 🤔 critical thinking, 🧠 knowledge

   *Suggestion:* use "" for *melt*, *etiquette* and *haggle* if the "Which picture is it?" question can confuse them with other words.
7. **Phrases that lean British:**
   - u09 w15 *value for money* (US: *a good value*)
   - u09 p08 and S7 *split the bill* (US: *split the check*)
   - u05 dialogue *at number twelve* (US: *at the house on the corner* / *at 12 Oak Street*)
   - u07 *statistics module* (US: *class* / *unit*)

   All of these are understood in the US, so I did not change them. Decide whether the course is strictly American.
8. **u09 g01 X4** ("try ___ for everything in cash"): the grammatical *to pay* is rejected. The context and the Persian «امتحان کن» point to *paying*, but a stronger cue would make this airtight, e.g. "…try ___ in cash for a month and see what happens."
9. **pr word-family mismatch.** employer is ایمْپْلُیِر but employee is اِمپلُیی (u01). scientist is سایِنْتِسْت but scientists is سایِنْتیسْتْس (u04 and u10). Unify these when the dictionary in issue 1 is made.
10. **The same names appear in unrelated roles.** For example, Mina is the friend in Toronto (u02), a graduate (u07) and a cousin. This is harmless but slightly confusing in a family course. A fixed cast with stable identities would help.

## 4. Improvement ideas (prioritized)

1. **Recycle vocabulary across units.** Each unit's words appear almost only inside that unit. *Idea:* in every unit from u03 on, put 3–4 headwords from earlier units into the reading and sentences (for example *burnout* in u09, *job satisfaction* in u07, *evidence* in u10). The `sentences` block is the cheapest place to do this.
2. **Make the exercises harder and more varied.** At B2 the gaps are usually one word, and order items have obvious answers. *Ideas:*
   - Use `type` items that ask for a full transformation, e.g. "They say he is rich. → He ___ rich." (answer *is said to be*). The schema already allows multi-word answers.
   - Add error-correction items as `choice` ("Which sentence is wrong?").
   - Use plausible near-miss distractors (see issue 5).
3. **Add inference questions to the readings.** Today all 50 reading questions test details that are stated in the text. Add one "why / what does the writer mean / what can we infer" question per text. Vary the genres too: there are now seven first-person stories (u01, u02, u03, u06, u07, u08, u09), one news report (u05) and two feature articles (u04, u10). Add a formal email or complaint (u04 or u09), an opinion essay with arguments for and against (u06 or u10), and a short story with dialogue (u02).
4. **Make the step from B1 explicit.** The grammar points already start with «از B1 می‌شناسید», which is excellent. Add one short "B1 review" exercise at the start of each grammar point (e.g. u05 g01: one reported-statement item before the reporting verbs) so learners who skipped B1 notice the gap.
5. **Add stress information to the pronunciation.** pr cannot show stress, and stress is where B2 learners from Persian go wrong (Persian puts stress at the end of the word). Examples: *deVELop*, *CONtract* (noun) vs *conTRACT* (verb), *PHOtograph* vs *phoTOGraphy*, *ESTimate* (noun) vs *ESTimate* (verb, different vowel). *Idea:* add a short Persian note in `s` for 1–2 words per unit, or one "word stress" sound note per unit.
6. **Add more life in Germany.** One branch of the family lives in Germany. u08 (Hamburg) and u02 (Munich) are good. u04 (repair shop), u05 (neighborhood burglary) and u09 (subscriptions and installments) could be set explicitly in Germany, or show an Iranian visitor dealing with an English-speaking system. That would give practical value beyond the US setting.
7. **Explanations.** These are already clear. Two small additions would help:
   - u06 g02: note that *If only* + would is mostly a complaint.
   - u08 g02: Persian speakers often say *"very much expensive"* or *"so much beautiful"*, so add one line on *so* + adjective vs *so much* + noun. The explanation already covers *so much / too much* with nouns, so this only needs a short warning.
