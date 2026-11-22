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

## 5. Pass 5 (Nov 2026)

I carried out BRIEF_FIX5 tasks 1–7 for all 13 A2 units. The course-wide pass (cast sheet, cross-level repeats; see 5a in `de-en-A1.md`) is kept, and new names follow `content/de-en/CAST.md`.

Checks: `python3 tools/validate.py content/de-en/A2/*.json` → OK (13/13). `python3 tools/audit.py` → `de-en A2: {}`. `python3 tools/repeats.py de-en` → 0 repeats.

### 5.1 Status of every pass-4 issue and idea

| # | Item | Status |
|---|---|---|
| 3.1 | Character continuity | Done in 5a. Two more clashes fixed here. (1) u09 reading questions 4–5 still said "Sie schreibt / Sie ruft … an" and "von **ihren** Eltern" after the narrator became Ali; they now use **Er** and **seinen**. (2) u05 w12 example "Maryam arbeitet Teilzeit, weil sie zwei kleine Kinder hat" → **Sara** (Mina and Amir are 12 and 10; Sara has two small children). New items reuse the cast (Sara picks up her daughter, Anna visits Köln, Reza, Maryam, Lena). |
| 3.2 | Grammar only practiced in u11–u13 | **Partly.** Readings: u04 "Kinder mit Fieber sind oft sehr müde, **deshalb** sollen sie zu Hause bleiben." and u07 "**Trotzdem** war es ein schöner Tag mit Felix." (questions unchanged). Production items now practice deshalb, ohne + accusative, *mir die Hände*, woran/darauf, wäre/würden. Not mine to do: the B1 u05 author should present deshalb/trotzdem/denn as review (lead). |
| 3.3 | Dictation almost never fires | **Done** in content: a 3–4-word sentence added to u01 "Ich habe ausgeschlafen.", u03 "Der Karton ist schwer.", u05 "Der Chef ist nett.", u06 "Die Jacke ist eng.", u07 "Wir nehmen ein Taxi.", u10 "Wir gehen ins Kino." |
| 3.4 | Production and exam task types | **Partly.** 74 production items (5.2). Not done: Schreiben/Sprechen prompts need an app format (no schema field), and authentic text types (Wohnungsanzeige, Fahrplan, Speisekarte) need a table-like reading format and would replace whole readings. |
| 3.5 | Duplicate unit emoji | **Done.** u12 📦 → ⚖️. |
| 3.6 | Two-option choice items | **Done.** u01 g02 x2 + "sind"; u04 g01 x1 + "darfst"; u04 g01 x2 (musst/darfst) replaced by a 3-option function item on nicht müssen vs nicht dürfen; u05 g01 x2 + "denn". |
| 3.7 | Gap fills pinned by `s` or hint | Agree, no action. |
| 3.8 | Ingenieur respelling | **Done**: "in-zhen-YUR, with the ö of schön". |
| 3.9 | u07 identical examples | **Done**: w14 Fahrrad → "Am Wochenende fahren wir mit dem Fahrrad an den See." |
| 3.10 | Table labels | **Done**: u11 g03 "Veränderung" → "Zustandswechsel", as in u01 g02. |
| 3.11 | u02 reading question 4 | **Done**: "Wie hat Lena das persische Essen gefunden?" |
| 3.12 | Verb headwords never typed | App (lead). |
| 3.13 | TTS notation | Nothing to do. |
| — | Cross-level repeat | A1 now teaches **das Wochenende** (lead's request), so A2 u01 w01 became **der See**, die Seen (*lake; die See = the sea*), example "Am Sonntag sind wir an einen See gefahren." (matches the u01 dialogue). |
| 4.1 | One continuing story | Done in 5a; new items follow it. |
| 4.2 | Review lesson after u13 | **Alternative done**: grammar units can't hold a reading, so each of the 17 grammar-unit topics got 2 production items that reuse the cast and theme vocabulary. A real review reading (u14) needs a format decision. |
| 4.3 | Daily life in Germany | **Partly**: u03 p08 "Wo stehen die Mülltonnen?" (house rules/recycling). u04, u05 and u09 already have 8 phrases; new scenes would mean replacing dialogues. |
| 4.4 | Schreiben/Sprechen per unit | App/format (lead). |
| 4.5 | Hints, find-the-mistake, full-clause choices | **Done**: 25 hints on theme-unit `type` items where the base form is not obvious (aufräumen, anrufen, du/er/Sie, das Sofa, anziehen, dürfen, neu, gut, gern, englisch, können, werden …). The 37 function items are full-sentence choices, many of them "which sentence is correct" (e.g. "Weil ich krank bin." / "Weil ich bin krank." / "Dass ich krank bin."). |
| 4.6 | Aussprache note per unit | Not done: there is no field for it outside u00 `sounds`. The Persian-speaker tips are now in A1 u00. Suggestion: allow `sounds` in any unit. |

### 5.2 Production items (task 2): 74

- Theme units u01–u10: 40, 2 per grammar point, replacing the most repetitive items (count unchanged).
- Grammar units u11–u13: 34, 2 appended per topic (12 → 14 exercises).

| Unit | Replaced (→ R = rewrite, F = function) |
|---|---|
| u01 | g01 "Was ___ ihr am Wochenende gemacht?" → R (Gestern ___: habe ich Reis gekocht); order "Was hast du am Wochenende gemacht?" → F. g02 "Ich ___ heute sehr früh aufgewacht." → F; "Am Samstag ___ Maryam zu Hause geblieben." → R (Anna ist nach Köln gefahren) |
| u02 | g01 "Lena gibt ___ Oma die Blumen." → F (Wem? – Meiner Oma.); "Wie geht es ___, Frau Wagner?" → R (ihnen). g02 "Ich gratuliere ___ …" → R (Das Kleid gefällt mir); order "Das Geschenk gefällt mir sehr." → F |
| u03 | g01 "Er ist auf ___ Balkon." → F; "unter ___ Bett" → R (legen → auf den Tisch). g02 "Der Teppich ___ vor dem Sofa." → R (stellen → steht); "Wohin hast du den Karton ___?" → F |
| u04 | g01 "Du ___ nicht früh aufstehen." → F; "Du ___ heute nicht in die Schule gehen." → R (sollen). g02 "Schlaf doch ein bisschen!" → R (Trink!); "___ mich bitte morgen an!" → F (Nimm doch eine Tablette!) |
| u05 | g01 "Lena sagt, ___ sie …" → R (weil … abholt); order "Ich glaube, dass sie Lehrerin ist." → F. g02 "Letzte Woche ___ ich …" → R (konnte); "Gestern ___ ich krank." → F |
| u06 | g01 "Der ___ Pullover …" → F; "Das ___ T-Shirt …" → R (den blauen Pullover). g02 "Tim ist zwanzig …" → R (teurer als); "billiger ___ der Mantel" → F (am bequemsten) |
| u07 | g01 "mit ___ U-Bahn" → F (nach / zu); "vom Bahnhof ___ Flughafen" → R (mit dem Zug). g02 "Wenn der Zug pünktlich ___" → R (Wenn es regnet, nehme ich …); "wenn es keinen Stau ___" → F |
| u08 | g01 "ein ___ Restaurant" → R (eine kleine Suppe); "an einem ___ Tisch" → F (ein großes Wasser). g02 "Ich ___ Ihnen den Fisch empfehlen." → R (Könnten/Würden Sie …); "Würden Sie bitte das Fenster ___?" → F |
| u09 | g01 order "Weißt du, ob Lena ein Handy hat?" → R (wann der Bus abfährt); "Weißt du, wann Mina nach Hause ___?" → F (ob). g02 "Wir freuen uns ___ die Ferien" → R (Woran); "Denk bitte ___ deinen Schlüssel!" → F (darauf) |
| u10 | g01 "Lukas ruht ___ am Sonntag aus." → R (Interessierst du dich …?); "Langweilen Sie ___?" → F. g02 "Meine Eltern ___ uns … besuchen." → R; "___ du am Samstag zum Picknick kommen?" → F |

### 5.3 `why` (task 3): 339

Every `choice` and `type` grammar exercise in A2 has a `why` of at most 160 characters that names the rule for that item, e.g. "liegen answers Wo? (no movement), so auf takes the dative: auf dem Boden." or "With two pronouns, the accusative comes first: ihn (den Schlüssel), then ihm (Ali)." The script matched each `why` to its item by the item's text.

### 5.4 Inference questions (task 4): 10

One per reading, answerable but not written word for word: u01 Sara on Sunday evening (sehr müde – she fell asleep at once); u02 why Amir got money (grandparents give children money at Nowruz); u03 what Ali thinks of the apartment; u04 why hand washing matters; u05 whether Behnam is happy at work; u06 why Amir didn't take the black jacket; u07 how long Reza was on the road (8:00 → 14:00); u08 what Maryam thinks of the restaurant; u09 why Ali's mother learns German (she visits Köln in summer); u10 what the family does if it rains (camping only "wenn das Wetter schön ist").

### 5.5 `sym` (task 5): 13

u01 aufwachen ⏰ · u02 der Geburtstag 🎂, feiern 🎉 · u04 die Erkältung 🤧, das Fieber 🤒, der Arzt 🩺 · u05 verdienen 💶 · u08 der Nachtisch 🍰, scharf 🌶️ · u09 das Internet 🌐 · u10 das Kino 🎬, das Konzert 🎵 (also A1 Musik 🎵), das Theater 🎭.

### 5.6 Counts

| Category | Count |
|---|---|
| Production items | 74 (37 rewrite, 37 function): 40 in theme units, 34 in grammar units |
| `why` | 339 |
| Inference questions | 10 |
| `sym` marks | 13 |
| Hints added | 25 |
| Dictation sentences / new phrase / reading seeds | 6 / 1 / 2 |
| Other fixes | 12 (w01 der See, u09 questions ×2, u05 w12 cast, Ingenieur, u07 w14, u02 question, u11 table label, u12 emoji, 3 third options) |

### 5.7 For the lead (app and other levels)

- Render `cue` (own audio), `task` and `why`. Every function item has `answer: 0`; the app shuffles options.
- B1 u05 should present deshalb/trotzdem/denn as review (they are taught in A2 u13 g01 and now appear in A2 readings).
- Schreiben/Sprechen prompts and table-style reading texts (ads, timetables, menus) need a schema/app format first.
- Optional: allow `sounds` (Aussprache notes) in units other than u00.
