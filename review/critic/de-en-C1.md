# Critic pass 4: de-en C1 (German explained in English), u01–u10

I checked every item in all 10 units:
- words (`t`, `s`, `pl`, `emoji`, `ex`)
- phrases and dialogues
- grammar titles, explanations, tables and examples
- all 160 exercises (every `choice` option, `type` answer list and `order` alt)
- readings and their questions
- sentences, goals and titles

I read the pass-3 report (`review/de-en-C1-pass3.md`) and the first review first, so their deliberate decisions are respected:
- replaced headwords
- renamed people
- the `alts` added in pass 3
- *klärenden* as the only answer
- no alt for *Bei steigender Nachfrage …*

I also checked `tools/build.py` `speakable()`. It already converts "1.200", "4.0", "Dr.", "Prof.", "=", "+ D", "(…)", "etw./jdn.", " / " and years into speakable text. Those are therefore no longer TTS risks and were not changed.

## 1. Verdict

This is a strong C1 level. The German is idiomatic and at the right register. The texts are authentic in style (radio interviews, commentary, review, *Stellungnahme*), and the grammar explanations are precise and go beyond textbook simplifications: Funktionsverbgefüge negation, *vermeintlich* vs *angeblich*, Vorfeld/Nachfeld, and Konjunktiv II as a signal of doubt in reported speech. Earlier passes removed most errors. What remained were a handful of exercises that rejected a correct answer or offered a second correct option, and four British usages in the English. The main weakness now is pedagogical, not linguistic:
- every unit has the same exercise pattern (3 choice, 2 type, 2 order, mostly gap-fill)
- the dialogues are all formal interviews or debates
- the level gives little guided speaking practice, though the main learner's stated goal is speaking

## 2. Fixed (11 changes in 7 files)

| Unit | Path | Before → After | Reason |
|---|---|---|---|
| u01 | `grammar[0].exercises[2].answer` | Zur, Für die, Fuer die → + **Zwecks** | „Zwecks Überprüfung der Hypothese …“ is correct and taught in u09 (zwecks + article-less noun). It was marked wrong. |
| u01 | `grammar[1].exercises[6].alts` | — → **Diese Theorie stellen neue Befunde in Frage.** | This is a natural object-first order, unambiguous because *stellen* is plural and *Theorie* singular. Pass 3 accepted the same kind of order elsewhere (*Seine Besorgnis brachte der Minister zum Ausdruck.*). |
| u02 | `dialogue.lines[1].s` | In a care home → In a **nursing home** | American English required |
| u02 | `dialogue.lines[4].s` | are less often off sick → are **out sick** less often | American English required |
| u03 | `grammar[0].exercises[5].answer` | Eben, Genau, Richtig, Stimmt, Exakt → + **Allerdings, Ja, Ganz genau** | „Ein Fauxpas? – Allerdings! / Ja! / Ganz genau! Genau das meine ich.“ are all correct. The list already accepts non-particle answers. |
| u03 | `grammar[1].exercises[3].answer` | … indessen → + **indes** | *indes* is taught in the same explanation as a variant of *indessen* |
| u03 | `grammar[1].exercises[5].answer` | Folglich … Also → + **Dementsprechend** | „Dementsprechend kann Ihr Antrag nicht mehr berücksichtigt werden.“ is a correct consequence connector |
| u05 | `grammar[0].exercises[0].options` | soll, will, **muss** → soll, will, **darf** | Second correct option. „Ich habe ihn nicht selbst gesehen, aber der Film muss sehr gut sein.“ is natural German (inference). *darf* is unambiguously wrong here, so *soll* (hearsay) is now the only answer. |
| u07 | `grammar[1].examples[1].s` | there is a lack of GPs in rural areas → there is a **shortage of family doctors** in rural areas | "GP" is British. *Hausarzt* is rendered "family doctor" elsewhere in the level (u05). |
| u08 | `grammar[1].exercises[6].alts` | (2 alts) → + **Ich habe in einer Nacht den Roman gelesen.** | A grammatical Mittelfeld order (new information at the end). It was marked wrong. |
| u09 | `grammar[1].exercises[4].answer` | zur, für die, fuer die → + **zwecks** | Same as u01: „Zwecks Sicherung der Versorgung …“ is correct, and *zwecks* is taught in this very unit (g01) |
| u09 | `sentences[3].s` | there is a risk of redundancies → there is a risk of **layoffs** | "redundancies" (job losses) is British |

Checks after editing:
- `python3 tools/validate.py content/de-en/C1/*.json` prints OK for all 10 files.
- `python3 tools/audit.py` gives de-en C1 `{'german': 2}`. Both are the known false alarms (adjective + noun: *der gesellschaftliche Zusammenhalt*, *die künstliche Intelligenz (KI)*).
- No headwords were changed, so headword uniqueness is unaffected.
- No "Neda" anywhere.

## 3. Remaining issues (not fixed: they need a decision or bigger work)

**High**

1. **Too little speaking practice for a learner whose stated goal is speaking** (curriculum: "listening, vocabulary and above all speaking").
   - Every exercise is receptive or a one-word gap.
   - No unit asks the learner to produce a Redemittel in context, for example "react to this claim with partial agreement → *Ich gebe Ihnen insofern recht, als …*".
   - Suggestion: add 1–2 `choice` items per unit that are about *function*, not form. Example: "Your partner says X. Which reply politely disagrees?" with three Redemittel as options. Also make the dialogue lines usable in a "speak the B part" shadowing mode in the app.

**Medium**

2. **The exercise pattern is identical in all 20 grammar points** (choice–choice–type–choice–type–choice–order–order).
   - Many `choice` items test the adjective ending or the auxiliary rather than the C1 point itself.
   - Suggestion: in g02 of u01, u02 and u09 (all transformation topics), replace 2 gap-fills with full transformation items, for example `type` with the whole nominal phrase as the answer, with a few accepted variants.
   - These units teach *Umformung*, but no exercise asks for a complete one.
3. **Nominalization is taught twice.** u01 g01 (Nominalstil ↔ Verbalstil) and u09 g02 (Nominale Präpositionalgruppen ↔ Nebensätze) have almost the same explanation and table: weil → wegen, obwohl → trotz, wenn → bei … zur Sicherung.
   - Suggestion: make u09 g02 explicitly "part 2". Drop the pairs list, refer back to u01, and focus on what is new: *ohne*, *seit*, *während*, *bis zu*, agent/object changes, and *bei Nichtbeachtung*-type negative nouns.
4. **All 10 dialogues are formal interviews or debates** (8 of 10 in the *Sie* form, 5 hosted by Lena Hoffmann). Only u03 (Maryam/Reza) is informal.
   - C1 listening also needs informal everyday registers: a WG or neighborhood conflict, a phone call with an authority, a colleague chat.
   - Suggestion: when a unit is next revised, change one or two dialogues (u05 or u08 are good candidates) to an informal *du* conversation. This would also give the u03 modal particles a second use.
5. **The reading questions are all literal retrieval** (the answer is a paraphrase of one sentence).
   - C1 exams test inference, author's intention and text function.
   - u10 q0 ("Wie ist die Stellungnahme aufgebaut?") and u08 q1 (reference of *Letztere*) are good models.
   - Suggestion: make at least one question per reading an inference or text-structure question.

**Low**

6. u04 dialogue line 5: Lena opens her turn with „Lassen Sie mich bitte ausreden“, but she had not been interrupted, because Wagner's line 4 is a complete turn. It is pragmatically odd. Possible fixes:
   - cut line 4 short with a dash ("… Die Daten sprechen eine andere Sprache –")
   - replace the phrase with „Darf ich darauf kurz eingehen?“ (then p07 is no longer used in the dialogue)
7. u05 w15 *der Schlafmangel* 😴: the sleeping face shows sleep, not the lack of it. 🥱 (yawning face) would fit better, but I could not verify that the build's emoji sources (`/home/claude/vendor/…`) contain it in this environment. Decide when building.
8. "KI" in `t` (u06: *KI-Verordnung, KI-Systeme, KI-Werkzeuge* …) is not expanded by `speakable()`. Check whether the Piper voice reads it as *Ka-I*. If not, add `("KI", "Ka-I")` to `ABBR["de"]` centrally.
9. u01 g01 ex4 („___ Abschluss der Studie …“) accepts only *Nach*. *Mit Abschluss / Bei Abschluss der Studie* (= upon completion) are also correct German. I left this because the English prompt says "after". Add them if the team prefers lenient grading.
10. Notation of valency in headwords is still mixed: "+ D", "(D)", "(Akk.)", "etw. (D)". It is harmless for TTS now, but unifying it to one style (e.g. "+ D/+ A") would look more polished.

## 4. Improvement ideas (prioritised)

1. **Speaking scaffolds.**
   - Each unit already has 8 Redemittel. Add a short "Ihre Meinung" task: one discussion prompt (e.g. "Sollte das Wahlrecht ab 16 gelten?") with a model answer of 3–4 sentences that uses 3 of the unit's Redemittel and the unit's grammar.
   - This maps directly onto Goethe C1 *Sprechen Teil 2*. It is the best investment for this learner.
2. **Recycling across units.** Good recycling already happens: *bahnbrechend* (u01 → u06 reading), *Fachkräftemangel* (u02 → u07, u10), *Dem ist entgegenzuhalten* (u01 → u04 → u10), *Unterm Strich* (u02 → u09). Two ways to make it systematic:
   - each reading reuses 3–4 headwords from earlier units, marked in the app
   - u10 as the exam-review unit gets a reading or exercise set that mixes grammar from u01–u09 (participial attribute, Konjunktiv I, *insofern … als*, genitive prepositions), not only Redemittel
3. **Bridge from B2.**
   - u04 g01 says "already known from B2: sich lassen, sein + zu, -bar". Do the same in u05 g01 (B2 u09 taught *müsste/dürfte/könnte* for conjecture) and u06 g01 (B2 u04 taught Konjunktiv I), so learners see C1 as an extension.
   - Right now u05 g01 and u06 g01 re-explain basics at length.
4. **Cultural fit.** The family's background already comes through well: Maryam/Reza on direct vs. indirect communication, the Tehran family novel with Persian expressions, Hafez, Dr. Sara Rahimi, Einbürgerung, Arbeitszeugnisse. Further ideas:
   - an Anerkennung ausländischer Berufsabschlüsse topic (e.g. in u02 or u10's reading)
   - a mention of *taarof* in the u03 dialogue
   - a reading on Persian loanwords in German (*Basar, Schach, Pyjama, Paradies*) in u03 or u08, which links to the Denglisch text
5. **Variety in exercise types.** Use `order` for longer C1 structures (≤ 9 words) where word order *is* the point:
   - *Es war die Musik, die …*
   - extended participial attribute order: *die im letzten Jahr eingeführte Regel*
   - *insofern … als* sentence frames

   Use fewer `order` items for simple adverb-fronting sentences, which mostly need `alts` and test little.
6. **Explanations.** They are excellent but long; several are 8–10 lines (u01 g01/g02, u03 g01, u05 g02, u09 g01). Adding a one-line **"In short:"** summary at the top of each would help learners on mobile.

## 5. Pass 5 (Nov 2026)

Brief: `review/BRIEF_FIX5.md`. Slice: `content/de-en/C1/u01–u10.json`. The course-wide pass (cast sheet, cross-level repeats, see `de-en-A1.md` §5a) was kept as it is. `validate.py`: all 10 files OK. `audit.py`: only the 2 known adjective + noun false alarms. `repeats.py de-en`: 0 repeats (before this pass there were 2 inside C1).

### Issues and ideas from §3 and §4

| # | Item | Status | What was done / why not |
|---|---|---|---|
| 3.1 | Too little speaking practice | done (content part) | 21 function items with Redemittel in context. Each gives what a partner says as an audio cue and asks for the reply with a given function: "Which reply corrects the claim politely / partly agrees and adds a condition / concedes the point but disagrees / shows empathy / moves the discussion toward an agreement …?". There are 23 rewrite items on top. A speaking or shadowing step needs the app. |
| 3.2 | Same exercise pattern in all 20 points | done | 2–3 items per point were converted, at different positions, so the old choice–choice–type–choice–type–choice–order–order pattern is broken everywhere. The transformation topics (u01 g01, u02 g02, u09 g02) each have 2 full transformations in both directions, with the whole phrase as the answer. 27 of the 39 order items were replaced, mostly ones that only tested adverb fronting (12 remain). The remaining order items test cleft sentences, Konjunktiv I, *als*, *insofern*, participial attributes and similar structures. |
| 3.3 | Nominalization taught twice (u01 g01 / u09 g02) | done | u09 g02 is now explicitly "part 2". Its explanation was rewritten to point back to unit 1 for the basic pairs and to teach what is new: *ohne* (= wenn … nicht), *bei Nicht-*, *während*, *seit Inkrafttreten*, *bis zu*, *durch*, what happens to subjects and objects, and how to choose a subject when going back to a clause. The new table and 2 new examples match. Title: *Bei Nichtbeachtung der Regeln …* / "Nominal phrases and clauses (part 2)". |
| 3.4 | All dialogues are formal interviews or debates | done | Three dialogues are now everyday conversations at C1 register. Each keeps its unit's Redemittel and grammar (details below). Together with u03 (Maryam/Reza), 4 of 10 C1 dialogues are now everyday conversations. |
| 3.5 | Reading questions are all literal | done | Every reading has 1 new inference or attitude question (10). |
| 3.6 | u04 "Lassen Sie mich bitte ausreden" without an interruption | done | In the new u04 dialogue, Ali interrupts Frau Koch (her line ends with a dash) before she says it. |
| 3.7 | *der Schlafmangel* 😴 | done (partly) | Marked `sym`. 🥱 is not in `docs/img/e/` and the vendor emoji folder is not available here, so I did not switch the emoji. |
| 3.8 | "KI" read by the voice | not done (build/app) | Lead: add `("KI", "Ka-I")` to `ABBR["de"]` in `tools/build.py`. New items avoid KI except one cue (*KI-Verordnung*). |
| 3.9 | u01 g01 ex4 only *Nach* | done | + *Mit*, *Bei* (= upon completion). |
| 3.10 | Mixed valency notation | done | Now *anspielen auf + A*, *eingehen auf + A*, *sich auswirken auf + A*, *profitieren von + D*, *die Abhängigkeit von + D*, *angewiesen sein auf + A* (this also removes "jdn./etw." with its slash). The forms with optional words in brackets stay: *etw. (gegeneinander) abwägen*, *etw. (mit etw.) untermauern*, *sich (D) etw. zunutze machen*. |
| 4.1 | "Ihre Meinung" speaking scaffolds with model answers | partly | The function items model short Redemittel answers in context. A discussion prompt with a 3–4-sentence model answer per unit needs a new content field and an app step (see app requests). |
| 4.2 | Systematic recycling; a mixed-grammar review in u10 | partly | New items recycle earlier C1 items: *Das wäre zu kurz gegriffen* (u01 dialogue), *Das greift zu kurz* (u04) in u09, *Ich räume ein* and *Dem ist entgegenzuhalten* in u10, *Das mag zwar sein* in u07, and *Ich wage zu bezweifeln* in u05. A full mixed-grammar set does not fit the curriculum's "exactly 2 grammar points" per unit. I suggest a C1 grammar review unit (`kind: "grammar"`), like the other levels have. |
| 4.3 | Bridges from B2 | done | "Already known from B2 …" lines at the top of u05 g01 (B2 u09 *müsste/dürfte/könnte*) and u06 g01 (B2 u04 Konjunktiv I). u04 g01 already had one. |
| 4.4 | Cultural fit | partly | Taarof is now mentioned in the u03 dialogue (line 2). The u08 dialogue discusses Lessing's tolerance parable from the view of an Iranian family. A Persian-loanwords reading was not written, because it would replace the good Denglisch text in u03 (a candidate for a future extra reading). |
| 4.5 | Order items for longer C1 structures | partly | Simple adverb-fronting order items were removed (see 3.2), and structurally interesting ones were kept. No new long order items were added: the production items now practice the same structures actively. |
| 4.6 | "In short:" summaries | done | All 20 grammar points start with a one-line **In short:** summary. |

### Reworked dialogues

| Unit | Before | After | Redemittel and grammar kept |
|---|---|---|---|
| u04 | Prof. Brenner vs. Lena Hoffmann, TV-style debate on voting at 16 | **Elternabend: Juniorwahl in der siebten Klasse?** Frau Koch (class teacher, new side character) and Ali at Mina's parents' evening, 11 lines | All 8 phrases (*Ich vertrete die Auffassung*, *Man darf nicht außer Acht lassen*, *Davon kann keine Rede sein*, *Lassen Sie mich bitte ausreden*, *Ich stimme Ihnen insofern zu, als*, *greift das nicht zu kurz?*, *… sprechen eine andere Sprache*, *Letztlich geht es hier um die Frage, ob*). Zustandspassiv *ist … beschlossen*, *erfolgt*, *gilt als*, subjectless passive *wird darüber diskutiert*, *Es gilt, … zu*. Words: *Spaltung*, *politische Bildung*. |
| u05 | Radio advice hour with Dr. Kian Sadeghi | **In der Hausarztpraxis: Wenn der Akku leer ist.** Reza (engineer, project at the hospital) visits his family doctor Frau Dr. Wagner (both on the cast sheet), 11 lines | 7 of 8 phrases. Subjective modals *das müsse ein Burn-out sein*, *das soll ja jeder Dritte haben*, *sie müssen scheitern*, *Das dürfte schwierig werden*, *zweifellos*. Words: *Leistungsdruck, grübeln, abschalten, Schlafmangel, Achtsamkeit, Psychotherapie, Erschöpfung*. |
| u08 | Culture-radio interview with the director Babak Tehrani | **Im Treppenhaus: Nathan in der Erstaufnahme.** Maryam and her neighbor Herr Wagner discuss Babak Tehrani's production the morning after, 11 lines | All 8 phrases. *derart radikal*, *dies gilt heute genauso*, Vorfeld participle *Überzeugt hat mich …*, pseudo-cleft *Was mich … berührt hat, war …*, Nachfeld *einiger, als wir dachten*. Words: *Inszenierung, eindringlich, verkörpern, Bühnenbild, Rezension, Feuilleton, anspielen auf, Werk*. |

Goals were adjusted: u04 goal 4 now says "… in a debate, e.g. at a parents' evening", and u08 goal 4 says "Discuss a theater production with a neighbor and understand a literary review". Dr. Kian Sadeghi no longer appears in C1, so the lead may drop him from `CAST.md`. Frau Koch is a new side character (class teacher, C1 u04).

### Repeats (`tools/repeats.py`)
- u10 p05 *Ich vertrete die Auffassung, dass …* (also u04 p01) → **Könnten wir uns darauf verständigen, dass …?** This is the Redemittel for reaching agreement in Goethe C1 Sprechen Teil 2, and it is already said in the u10 dialogue.
- u10 p07 *Wenn ich Sie richtig verstanden habe, …* (also u03 p01) → **Da würde ich gern einhaken.** (alt *Ich würde da gern einhaken.*), also already in the u10 dialogue.

The u10 dialogue still uses the two old phrases, which now recycle u03 and u04.

### Pass-5 brief tasks

- **Production (task 2).** Every point has 2 or 3 converted items, 44 in total (23 rewrite, 21 function), and still 8 exercises. Also, 4 old items whose `t` contained "=" (u02 g01 ex4, u02 g02 ex0/ex1, u05 g02 ex3) now use the `cue` format, so no "=" is left in text the voice reads.
- **`why` (task 3).** All 148 `choice` and `type` items have an item-specific `why`. The rule note that sat in brackets in u06 g01 ex1 `s` was moved into its `why`.
- **Inference (task 4).** 10 questions, 1 per reading.
- **Symbolic pictures (task 5).** 21 `sym` marks:
  - u01 Erkenntnis 💡, Fördermittel 💶, Veröffentlichung 📄, Versuchsaufbau 🧪
  - u02 Digitalisierung 💻, Gehaltsverhandlung 💰
  - u04 Wahlbeteiligung 🗳️, Rechtsstaat ⚖️, Kundgebung 📢
  - u05 Achtsamkeit 🧘, Erschöpfung 😩, Schlafmangel 😴, Zufriedenheit 😊
  - u06 KI 🤖, Überwachung 📹
  - u07 Wartezeit ⏳, abwägen ⚖️
  - u08 Vernissage 🖼️, Inszenierung 🎭
  - u09 Wirtschaftswachstum 📈
  - u10 Vortrag 🎤

  *der Roman* 📖 stays literal.
- **Alts for automatic order steps.** 47 alternatives on sentences, dialogue lines and phrases of 8 words or fewer, wherever German has another fully correct, unmarked order. Examples: *Vorsicht ist hier geboten.*, *Meines Erachtens greift das zu kurz.*, *Derzeit werden die Daten noch ausgewertet.*, *Vielen Dank für das Gespräch, Frau Dr. Karimi.*, *Ich muss mich wohl erst noch daran gewöhnen.*, *Für Ihre Aufmerksamkeit danke ich Ihnen.* Strongly marked object-first orders were not added.
- **Voice.** The titles *Nominalstil ↔ Verbalstil*, *Partizipialattribut ↔ Relativsatz* and *Weil … → wegen …* are now *Nominalstil und Verbalstil*, *Partizipialattribut oder Relativsatz* and *Bei Nichtbeachtung der Regeln …*.

### Counts

| Category | C1 |
|---|---|
| Production items (rewrite + function) | 44 (23 + 21) |
| Old "=" items moved to the cue format | 4 |
| `why` added | 148 (104 on existing items, 44 on new items) |
| Inference questions | 10 |
| `sym` marks | 21 |
| `alts` added | 47 |
| Dialogues reworked into everyday conversations | 3 (u04, u05, u08), plus 1 line in u03 (taarof) |
| Repeated Redemittel replaced | 2 (u10) |
| Explanations: "In short:" lines / B2 bridges / u09 g02 rewritten | 20 / 2 / 1 |
| Titles fixed for the voice | 3 |
| ae/oe/ue/ss answer variants | 16 |
| Other fixes (u01 g01 ex4 answers, u06 g01 ex1 `s`, valency notation 6, goals 2) | 10 |

### For the lead (app / build)
- Show `cue` (with audio), `task` and `why` in `grammarEx()`. Without the cue, the 44 new items and the 4 converted items cannot be solved.
- Skip `sym` words in the "pic" and "word" question kinds.
- Add `("KI", "Ka-I")` to `ABBR["de"]` in `tools/build.py`.
- A speaking step: shadowing or "say B's line" for dialogues, and optionally a per-unit discussion prompt with a model answer (ideas 3.1 and 4.1).
- `CAST.md`: add Frau Koch (class teacher, C1 u04) and drop Dr. Kian Sadeghi (no longer used).
