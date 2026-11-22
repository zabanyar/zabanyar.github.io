# Critic review (pass 4): de-en A2 (German explained in English)

**Slice:**
- Theme units: `content/de-en/A2/u01.json` to `u10.json`.
- Grammar units (`"kind": "grammar"`): `u11` Vergangenheit, `u12` Fälle und Präpositionen, `u13` Sätze verbinden.

**What I read first:**
- `content/SCHEMA.md`
- `content/CURRICULUM_NEW_LEVELS.md`, German A2 table
- `content/CURRICULUM_GRAMMAR_A1_A2.md`
- `review/de-en-A2-new.md` and `review/de-en-A2-pass3.md`
- the build and lesson code that uses the content:
  - `tools/build.py`: `speakable()`, `fill_gap()`
  - `docs/js/lesson.js`: order, type and dictation steps; `normalize()`

**What I checked:** every word (t, pl, s, ex, emoji), phrase, dialogue line, grammar title, explanation, table, example and exercise, every reading sentence and question, every practice sentence, and the goals and titles.

The grammar units u11–u13 had no earlier review on record. I checked all 204 of their exercises one by one, as well as the 6 + 6 + 5 explanations and tables.

**Checks after editing:**
- `python3 tools/validate.py content/de-en/A2/*.json`: OK for all 13 files.
- `python3 tools/audit.py`: `de-en A2: {}`, no findings.

## 1. Verdict

This is a strong, accurate A2 level. I found no wrong German sentence, wrong translation, wrong answer key or misleading grammar rule in any of the 13 units. That is rare after three passes, and it shows the earlier fixes held.

The theme units cover the Goethe/telc A2 grammar canon in a sensible order:
- Perfekt
- dative
- two-way prepositions
- modals and imperative
- weil/dass
- Präteritum of sein, haben and the modal verbs
- adjective endings
- comparison
- wenn
- Konjunktiv II politeness
- indirect questions
- prepositional verbs
- reflexives
- future

The grammar units u11–u13 are the best part of the level. The explanations are clear and correct. They have a "Careful" paragraph aimed at English and Persian speakers (ezafe, *az* for "than", *be* for the receiver, verb-final habits). The exercises are well graded, the distractors are real learner errors, and the ae/oe/ue/ss variants are complete.

The weaknesses are not correctness problems:
- **Characters:** the same names stand for different people from unit to unit.
- **Unpractised grammar:** several grammar points appear only in the grammar units, with no dialogue or reading practice: sondern, deshalb, trotzdem, accusative prepositions, Angst haben vor, and the dative reflexive "mir die Zähne".
- **Exercise types:** the level has no writing or speaking production, and few A2 exam task types.

## 2. Fixed

| # | Unit | Path | Before → After | Reason |
|---|---|---|---|---|
| 1 | u05 | `sentences[2].alts` | (none) → `["Weil sie Lehrerin werden möchte, studiert Mina."]` | 7 words, so the app uses it as an order exercise. Putting the weil-clause first is the neutral alternative that this very unit teaches ("If the weil-clause comes first…"), and its own g01 exercise 6 accepts the same pattern. A learner who built it was marked wrong. |
| 2 | u07 | `phrases[0].alts` (p01 "Einmal nach Hamburg, bitte.") | (none) → `["Bitte einmal nach Hamburg."]` | This is an equally natural ticket-counter order made of the same four tiles, and it was missing. |
| 3 | u08 | `phrases[3].alts` (p04 "Für mich bitte den Fisch.") | (none) → `["Für mich den Fisch, bitte."]` | Standard restaurant order using the same tiles. The app ignores punctuation. |
| 4 | u08 | `phrases[5].alts` (p06 "Wir möchten bitte bezahlen.") | (none) → `["Wir möchten bezahlen, bitte."]` | A natural order that was missing. |
| 5 | u09 | `grammar[1].exercises[4].answer` ("___ wartest du? – Auf den Bus.") | `["Worauf"]` → `["Worauf", "Auf was"]` | A common spoken variant. u13 g05 exercise 7, with the identical structure "___ freust du dich?", already accepts "Auf was", and u13 teaches it ("In everyday speech you also hear auf was"). The two units now agree. |

**Fixes by category:**
- Order `alts`: 4.
- Type-answer list: 1.
- Target text, translation, grammar explanation, reading, emoji, TTS, names, spelling: 0. I found nothing clear-cut to change in these.

## 3. Remaining issues (need a decision or bigger work)

### High

None. There is no correctness problem left that I am aware of.

### Medium

1. **Character continuity across units.** The small name pool is reused for different people, so an adult learner following "Mina", "Amir" or "Ali" meets contradictions:
   - **Amir** is Mina's son in u02 and u06, but an adult in u04 (Herr Karimi at the doctor), u08 (restaurant guest) and u10.
   - **Sara** is an adult with a job in u01 and u05, but Mina's daughter in u06.
   - **Ali** is Sara's partner in u01, moves house in u03, is Mina's brother in Isfahan in u09, and has a cousin Reza in u10.
   - **Reza's parents** come to his birthday in u02, but "noch in Teheran wohnen" in u05.

   Pass 3 fixed only contradictions inside a single unit, on purpose.

   *Suggestion:* write a one-page cast sheet for A2. For example:
   - Mina's family in Hamburg: husband Reza, children Sara and Amir.
   - Lena: their neighbour.
   - Jonas and Lukas: colleagues.
   - Maryam and Ali: a couple in Stuttgart.

   Then rename only the speakers and the people in readings that clash. This is roughly 15 name swaps across 8 units, with no grammar changes.

2. **Grammar taught only in u11–u13, then re-taught at B1.**
   - These points never appear in a dialogue or reading:
     - **sondern, deshalb, trotzdem, dann** (u13 g01)
     - the accusative prepositions **für, ohne, gegen, um, durch** (u12 g03)
     - **Angst haben vor** (u13 g05)
     - **wäre** (u13 g06)
     - dative reflexives such as **Ich putze mir die Zähne** (u13 g04)
   - B1 u05 ("Konnektoren: deshalb, trotzdem, obwohl, denn") presents deshalb, trotzdem and denn as new.

   *Suggestion:*
   - Seed one or two of these into existing A2 readings without changing their questions, e.g. in u04 "…, deshalb bleibe ich zu Hause" and in u07 "Trotzdem war die Reise schön."
   - Ask the B1 author to frame deshalb, trotzdem and denn as review, so that only obwohl is new.

3. **Dictation almost never fires.** `lesson.js` uses only sentences of 4 words or fewer for the "type what you hear" step. Six of the ten A2 theme units (u01, u03, u05, u06, u07, u10) have no such sentence, so they never get a dictation.

   *Suggestion:* either add one sentence of 3–4 words to each of these units (a content change), or let A2+ dictation use sentences of up to 6 words (a code change). The second option also needs ä→ae tolerance in `normalize()`.

4. **No production practice and few A2 exam task types.** Every reading is a first-person email or blog text with multiple-choice questions. The Goethe/telc A2 exams test other things:
   - short notices, ads and timetables
   - writing a short message (SMS or email reply)
   - speaking tasks such as asking questions from cards, talking about your life, and planning something together

   *Suggestion:*
   - Add a "write a reply" prompt with a model answer per unit. The u01, u03 and u10 readings are already emails asking for a reply.
   - Make one reading per 3 units an authentic text type: Wohnungsanzeige (u03), Fahrplan or Durchsage (u07), Speisekarte (u08).

### Low

5. **Duplicate unit emoji.** u12 uses 📦, the same as u03, so the map shows the same box twice. *Suggestion:* use ⚖️ or 🧩 for u12.
6. **Two-option choice items (50% guessing):**
   - u01 g02 exercise 2: hat/ist
   - u04 g01 exercises 1 and 2: muss/darf, musst/darfst. These are deliberate binary contrasts.
   - u05 g01 exercise 2: dass/weil

   *Suggestion:* add a third distractor, e.g. "habe"; "dürft"/"müsst"; "denn" (with "denn er krank ist" as the wrong form).
7. **Gap fills where `s` or a hint pins one of several grammatical fillers.** These are documented in pass 3, and I agree with keeping them. Examples:
   - u09 g01 exercise 3: "wann" would also fit.
   - u13 g02 exercise 6: "öffnet" would also fit, but the hint "aufmachen" pins it.
   - u07 g01 exercise 4: "zu dem" would also fit.

   No action is needed unless learners complain.
8. **Respelling hint "in-zhen-YÖR" (u05 Ingenieur).** It uses ö, which English readers cannot sound out. *Suggestion:* "in-zhen-YUR (the ö of schön)".
9. **u07 word examples nearly identical.** The U-Bahn (w09) and Fahrrad (w14) examples are the same sentence ("Ich fahre jeden Tag mit … zur Arbeit."). *Suggestion:* vary w14, e.g. "Am Wochenende fahren wir mit dem Fahrrad an den See."
10. **Table labels differ.**
    - u01 g02 labels the group "Zustandswechsel" and u11 g03 labels it "Veränderung".
    - u01 g02 labels sein and bleiben "Ausnahme", while u11 adds passieren under the same label.

    *Suggestion:* use the same term in both units.
11. **u02 reading question 4.** "Wie hat das Essen Lena geschmeckt?" is correct but slightly stilted. *Suggestion:* "Wie hat Lena das persische Essen gefunden?" The options can stay as they are.
12. **Verb headwords never reach "type the word".** `typeable()` excludes any headword with brackets or "+", which covers most A2 verbs: ausschlafen (…), schenken (+ D + A), warten auf + A and others. The verbs are still practised through pictures, meaning and order exercises, but never through typing. *Suggestion:* in the app, strip the bracket and "+ X" part before testing length (`typeForms` already computes `base`).
13. **TTS-risky headword notation** ("(Pl.)", "+ D", "…" in grammar titles). I checked: `speakable()` in `tools/build.py` strips brackets, "+ D/A" and slashes, and grammar titles are not voiced. Nothing to do.

## 4. Improvement ideas (prioritised)

1. **One continuing story for the level.** This builds on issue 1. A recurring family (Mina, Reza and the children in Hamburg, the grandparents in Isfahan) living through the ten themes would help the learners in three ways:
   - Readings could build on each other: the move in u03, Reza's new job in u05, the trip in u07, the video calls in u09.
   - The same people and places would recycle vocabulary naturally.
   - It mirrors the learners' own lives.
2. **A review lesson after u13.** The grammar units (u11–u13) come after all ten theme units and have no texts. A short mixed-review reading of 10–12 sentences would put the A2 grammar into context. It could be added as a reading inside u13 if the grammar-unit format allows, or as a small u14. It should use:
   - Perfekt and Präteritum
   - weil, dass and wenn
   - a two-way preposition
   - adjective endings
   - werden

   An alternative is to append to each grammar topic 2 exercises that reuse the theme units' readings and characters.
3. **Daily-life-in-Germany scenarios.** The Iranian cultural content is very good: Nouruz, Haft-Sin, ghormeh sabzi, the Isfahan rug, video calls to Tehran, mast-o-khiar and saffron ice cream. A family settling in Germany also needs these situations:
   - Termin beim Bürgeramt or Anmeldung
   - a Hausarzt referral (Überweisung) and the pharmacy
   - a letter from the Kita or school and an Elternabend
   - the Hausordnung, recycling and dealing with the landlord
   - the Jobcenter and the language course

   These fit as readings or phrases in u03, u04, u05 and u09 without new grammar.
4. **Production at A2.** Each theme unit could end with:
   - one "Schreiben" prompt (40–60 words, with a model answer and checklist)
   - one "Sprechen" prompt (three questions to answer aloud, with model answers that have audio)

   The u10 dialogue (planning a Sunday together) is already a perfect model for Goethe A2 Sprechen Teil 3.
5. **More variety and challenge in the theme-unit grammar exercises.** The theme units have 8 exercises per topic, and the type items have no hints. The grammar units have 12 per topic, with hints. Possible changes:
   - Add hints to theme-unit type items where the base form isn't obvious from the English.
   - Add a few "find the mistake" choice items, e.g. *Gestern ich bin krank* vs *Gestern war ich krank*.
   - Use more choice items with full clauses, as the grammar units do, rather than only single words.
6. **Pronunciation support.** de-en has no `pr` by design. Still, a short "Aussprache" note per unit would help Persian speakers, whose own sound system misleads them on German sounds such as:
   - final devoicing (Tag, Hund)
   - vocalised -er (Lehrer, Kinder)
   - the ü/ö vowels
   - the ich-/ach-Laut
   - stress in separable verbs (EINkaufen vs verSTEhen; u11 g04 already uses stress to explain the participles)

   The note could reuse the sentence audio already in the unit.

## Files

- Edited:
  - `content/de-en/A2/u05.json`
  - `content/de-en/A2/u07.json`
  - `content/de-en/A2/u08.json`
  - `content/de-en/A2/u09.json`
- Unchanged after full check: u01–u04, u06, u10–u13.
- This report: `review/critic/de-en-A2.md`.
