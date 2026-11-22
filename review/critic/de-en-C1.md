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
