# Critic report: de-en B2 (pass 4, Nov 2026)

Slice: `content/de-en/B2/u01–u10.json`. I checked every item: titles, goals, words (t, s, pl, emoji, ex), phrases, dialogues, grammar (explain, table, examples, exercises), readings and questions, and sentences. I also read the previous reviews (`review/de-en-B2.md`, `review/de-en-B2-pass3.md`) and did not undo their decisions. I checked what the app does with this content (`docs/js/lesson.js`) and how the build prepares text for the voice (`tools/build.py`).

## 1. Verdict

B2 is the strongest German level I have seen in this project. The German is correct and idiomatic, and the English is natural American English. The ten grammar explanations are accurate, well scoped and exam-relevant, and every hand-written `choice`/`type`/`order` item has a single defensible key. The topics suit an Iranian family living in Germany: recognition of an Iranian degree, Ausländerbehörde, Integrationskurs, Linsen and persischer Reis, Tafel and Ehrenamt.

Hardly any language errors were left. The real problems were in how the app uses the content:
- word-order steps built automatically from short sentences, dialogue lines and phrases had no `alts`, so obvious correct orders were marked wrong;
- 8 Redemittel were taught twice inside B2, plus *Gute Besserung!* (an A2 phrase taught for the third time) and *Meiner Meinung nach …* (already in B1);
- a few glosses and pictures gave the automatic quizzes two right answers.

The level's main weakness is pedagogical, not linguistic. Exercises and reading questions are easier than real B2 exam tasks, and the course gives little practice in producing speech, which is the main learner's stated goal.

## 2. Fixed

`validate.py`: all 10 files OK. `audit.py`: only the 4 known false alarms remain (adjective + noun headwords: *die sozialen Medien, die erneuerbaren Energien, der zweite Bildungsweg, der öffentliche Nahverkehr*).

Why the `alts` matter: `lesson.js` builds an `order` step from every sentence, dialogue line and phrase of 8 words or fewer, and passes `item.alts`. The comparison ignores case and punctuation. Without `alts`, for example, *Letzte Woche hat Herr Wagner gekündigt.* was marked wrong. I added alternatives only when they use exactly the same tiles and are neutral, unmarked German. My script checked the tile identity.

Why the meaning glosses changed: the automatic meaning and reverse quizzes take their distractors from the other words of the same unit. If two words share a gloss, a question can have two right answers.

| Unit | Path | Before → After | Reason |
|---|---|---|---|
| u01 | words[3].s | CV, résumé → résumé, CV | American English: résumé is the US word for a job-application CV |
| u01 | words[3].ex.s | In Germany, a CV in table form is standard. → In Germany, a résumé in table form is standard. | American English (CV → résumé) |
| u01 | sentences[2].alts | — → Ich wurde im Vorstellungsgespräch nach meinen Stärken gefragt. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u01 | sentences[5].alts | — → Letzte Woche hat Herr Wagner gekündigt. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u01 | sentences[6].alts | — → Reza konnte durch die Weiterbildung wertvolle Erfahrungen sammeln. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u01 | phrases[4].alts | — → Ich stimme dir da zu. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u01 | phrases[5].alts | — → Ich sehe das etwas anders. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u02 | words[1].s | utility costs, service charges (plural only) → utilities, additional housing costs (plural only) | American English: 'service charges' is British for these housing costs |
| u02 | sentences[1].alts | — → In der Miete sind die Nebenkosten nicht enthalten. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u02 | sentences[3].alts | — → Ab 22 Uhr ist laut Hausordnung Nachtruhe. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u02 | sentences[5].alts | — → Man bekommt die Kaution nach dem Auszug zurück. · Nach dem Auszug bekommt man die Kaution zurück. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u02 | phrases[7].alts | — → Das kommt für mich nicht infrage. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u03 | words[9].emoji | 🤒 → "" | picture: 🤒 shows being ill (fits 'die Beschwerden' in the same unit as well), not calling in sick; misleading in 'which word is it?' questions |
| u03 | phrases[7] | Gute Besserung! / Get well soon! → Das hätte ins Auge gehen können. / That could have gone badly wrong. | level/duplicate: 'Gute Besserung!' is A2 and already a phrase in A2 u04 and B1 u03; replaced with a B2 idiom that uses this unit's past subjunctive (the dialogue still ends with 'Gute Besserung!') |
| u03 | sentences[1].alts | — → Ich habe seit drei Tagen starke Kopfschmerzen. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u03 | sentences[2].alts | — → Bitte bringen Sie Ihre Gesundheitskarte mit. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u03 | sentences[6].alts | — → Seit einem Monat verzichte ich auf Fast Food. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u03 | phrases[2].alts | — → Ich würde an deiner Stelle … | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u03 | phrases[5].alts | — → Man ist im Nachhinein immer klüger. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u04 | sentences[0].alts | — → Meistens lese ich die Nachrichten auf dem Handy. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u04 | sentences[3].alts | — → Sie habe den Artikel nicht gelesen, sagte sie. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u04 | sentences[4].alts | — → Die Daten seien sicher, behauptet die Firma. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u04 | phrases[5].alts | — → Ich halte das für übertrieben. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u05 | sentences[0].alts | — → Gegen den Klimawandel müssen wir dringend etwas tun. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u05 | sentences[4].alts | — → Der Müll wird in Deutschland sorgfältig getrennt. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u05 | sentences[5].alts | — → Zwar ist Bio teurer, aber es lohnt sich. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u05 | dialogue.lines[10].alts | — → Vielen Dank für das Gespräch, Herr Weber! | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u05 | phrases[4].alts | — → Ich gebe dir da recht. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u06 | words[5].s | proof, certificate (e.g. of language skills) → proof, evidence (e.g. of language skills) | meaning quiz: 'certificate' also glosses das Zeugnis (w04) in the same unit, so the auto-generated meaning/reverse questions had two right answers |
| u06 | words[7].s | ability, skill → ability, capability | meaning quiz: 'skill' also glosses die Kenntnisse (w07) in the same unit |
| u06 | phrases[0] | Meiner Meinung nach … / In my opinion … → Aus meiner Sicht … / From my point of view … | duplicate/level: 'Meiner Meinung nach …' is already a B1 u06 phrase |
| u06 | phrases[2] | Dagegen spricht, dass … / An argument against this is that … → Man sollte bedenken, dass … / You should bear in mind that … | duplicate: 'Dagegen spricht, dass …' is already u05 p03 |
| u06 | phrases[4] | Das hängt davon ab, ob … / That depends on whether … → Was mich betrifft, … / As far as I'm concerned, … | duplicate: 'Das hängt davon ab, ob …' is already u01 p04 |
| u06 | phrases[7] | Zusammenfassend lässt sich sagen, dass … / To sum up, one can say that … → Alles in allem … / All in all … | duplicate: 'Zusammenfassend lässt sich sagen, dass …' is already u04 p08 |
| u06 | sentences[1].alts | — → Der Unterricht fällt heute wegen des Streiks aus. · Heute fällt der Unterricht wegen des Streiks aus. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u06 | sentences[2].alts | — → Eine feste Routine hilft mir beim Lernen. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u06 | sentences[4].alts | — → Ali hat innerhalb eines Jahres die B2-Prüfung bestanden. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u06 | sentences[5].alts | — → Maryam hat während der Elternzeit einen Online-Kurs gemacht. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u06 | sentences[7].alts | — → Heute ist lebenslanges Lernen wichtiger denn je. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u06 | phrases[3].alts | — → Da bin ich anderer Meinung. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u06 | phrases[6].alts | — → Du hast da völlig recht. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u07 | phrases[0] | Ich möchte mich über … beschweren. / I'd like to complain about … → Welche Möglichkeiten habe ich jetzt? / What are my options now? | duplicate: 'Ich möchte mich über … beschweren.' is already u02 p03; replaced with a phrase for the missed-connection situation of this unit |
| u07 | phrases[3] | Einerseits …, andererseits … / On the one hand …, on the other hand … → Das hat Vor- und Nachteile. / That has its pros and cons. | duplicate: 'Einerseits …, andererseits …' is already u01 p03 |
| u07 | sentences[0].alts | — → Heute fällt der Zug nach Hamburg leider aus. · Leider fällt der Zug nach Hamburg heute aus. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u07 | sentences[1].alts | — → Sie müssen in Hannover umsteigen. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u07 | sentences[2].alts | — → Es gibt wegen einer Baustelle eine Umleitung. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u07 | sentences[4].alts | — → Wir suchten unsere Unterkunft, nachdem wir angekommen waren. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u07 | phrases[4].alts | — → Die Bahn ist im Vergleich zum Auto … | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u07 | phrases[6].alts | — → Ich kann das gut nachvollziehen. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u08 | phrases[6] | Man darf nicht vergessen, dass … / We must not forget that … → Man sollte nicht unterschätzen, wie … / You shouldn't underestimate how … | duplicate: 'Man darf nicht vergessen, dass …' is already u04 p07 |
| u08 | phrases[3].alts | — → Ich muss dir da widersprechen. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u08 | phrases[4].alts | — → Ich sehe das genauso. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u09 | words[6].emoji | 💰 → "" | picture: 💰 shows money (fits das Einkommen in the same unit as well), not saving; misleading in 'which word is it?' questions |
| u09 | sentences[0].alts | — → Heute achten viele Verbraucher stärker auf Nachhaltigkeit. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u09 | sentences[1].alts | — → Dieses Jahr ist ein Urlaub leider nicht drin. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u09 | sentences[3].alts | — → Wir werden bis Dezember genug Geld gespart haben. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u09 | sentences[5].alts | — → Heben Sie bitte die Quittung gut auf. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u10 | phrases[7] | Abschließend möchte ich sagen, dass … / Finally, I'd like to say that … → Es würde mich freuen, wenn du dabei wärst. / I'd be really glad if you could be there. | duplicate: 'Abschließend möchte ich sagen, dass …' is already u05 p08; replaced with an invitation phrase (goal 4) |
| u10 | sentences[1].alts | — → Leider habe ich die Ausstellung nicht besuchen können. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |
| u10 | sentences[2].alts | — → Man muss früh buchen, um Karten zu bekommen. | missing alt: natural order with the same tiles was marked wrong in the auto-generated order step |

Counts: 60 changes.
- 44 missing `alts` on auto-generated order steps (sentences, dialogue lines, phrases).
- 9 phrases replaced: 8 duplicates within B2 or with B1, and 1 below level and a triple duplicate.
- 5 support-language changes: 3 American English and 2 glosses disambiguated for the automatic quizzes.
- 2 emoji removed.
- No German target-sentence errors, grammar-explanation errors, `choice`/`type` key errors or reading-answer errors were found. There are no `pr` fields at this level, as the conventions require.

New phrases: none of them occurs anywhere else in de-en as a phrase. *Vor- und Nachteile* appears only inside two C1 sentences.

## 3. Remaining issues (not fixed)

### High
1. **The automatic "type the word" step gives no ae/oe/ue/ss tolerance** (app, all German levels).
   - `typeWordStep`/`typeForms` and `normalize()` in `docs/js/ui.js` accept only the exact spelling.
   - A learner without a German keyboard who types *Muelltrennung* or *Hitzewelle*-style umlaut words is marked wrong. Grammar `type` items list the variants by hand, but the automatic step cannot.
   - Suggestion: in `normalize()` for `lang === "de"`, map ä→ae, ö→oe, ü→ue, ß→ss on both sides before comparing.

### Medium
2. **"See the picture, choose the word" questions with abstract B2 nouns.**
   - No B2 unit has 4 or more words with an emoji, so the "pic" question kind never appears. The remaining emoji only feed the "word" question, which takes its distractors from any other word in the unit.
   - Cases where a same-unit word fits the picture as well:
     - 🥗 *die Ernährung* vs *sich ernähren*;
     - 🌡️ *die Hitzewelle* and 🌍 *der Klimawandel* vs *die Erderwärmung*;
     - 📜 *das Zeugnis* vs *der Nachweis* / 🎓 *der Abschluss*;
     - 🏫 *die Volkshochschule* vs *die Umschulung*.
   - I removed only the two clearest misfits (🤒, 💰).
   - Suggestion (app): from B2 upward, skip the "word" kind (fall back to "meaning"), or draw its distractors only from words that have their own emoji.
3. **Auto order steps from phrases with placeholders.**
   - Phrases like *Ich möchte euch kurz von … erzählen.*, *Einerseits …, andererseits …* (u01) and *Das lohnt sich (nicht).* (u09) become order puzzles with a `…` or `(nicht).` tile.
   - Suggestion (app): skip phrases containing `…` or `(` in `orderStep`, as `typeable` already does for words.
4. **Two readings on the same topic.**
   - u05 (*Reparieren statt wegwerfen*: Repair-Café in Kassel, Reza) and u09 (*Reparieren liegt im Trend*: Repair-Cafés, Köln, Herr Wagner) share their topic and much of their vocabulary. Pass 3 only changed the title.
   - Suggestion: replace the u09 reading with another consumer topic that uses u09's words and grammar, e.g. "Jetzt kaufen, später zahlen" (buy now, pay later, *in Raten zahlen*, *Schnäppchen*, *sich etwas leisten können*, with Futur II / *dürfte* predictions).
5. **Speaking/exam practice is thin for a learner whose goal is speaking.**
   - Most dialogues use few of their own unit's Redemittel. For example, u06's dialogue uses none of its phrases, and u09's uses only *Auf lange Sicht* and *Das ist ein gutes Argument*.
   - Suggestion: when a dialogue is next revised, weave 2–3 of the unit's phrases into it so learners hear them in context.

### Low
6. **Character continuity.**
   - Herr Wagner is the Ahmadis' neighbor of 20 years (u02), a 58-year-old accountant (u06), a volunteer for refugees (u08), a repair-café helper in Köln (u09) and a chess-club member (u10).
   - The Ahmadis' building appears to be the Leipzig one (u08: Maryam from the *zweiter Stock*, Frau Becker), so the Köln detail clashes.
   - Suggestion: change *in Köln* in u09 reading[4] to *in Leipzig*, or give the u09 helper another name.
7. **Type items that still accept only the intended form** (left by pass 3 because the English `s` points to one answer):
   - u03 g02 ex4 (*gewusst*; *erfahren* would also fit);
   - u06 g02 ex2/ex3 (*des*/*einer*; *dieses*/*dieser* would also fit);
   - u09 g02 ex3 (*muss*; *müsste*/*dürfte* would also fit).
   - Suggestion: either accept the alternatives or add a hint in `s` ("(the semester)", "(certain)").
8. **Near-synonym glosses left for the automatic meaning quiz:** u10 *das Engagement* "commitment" vs *der Zeitaufwand* "time commitment"; u09 *das Angebot* "special offer" vs *das Schnäppchen* "bargain". Both are distinguishable, but could be sharpened.
9. **Overlaps with C1 phrases** (for the C1 critic, since C1 is the later level): *Einerseits …, andererseits …* (C1 u02), *Unterm Strich …* (C1 u02), *Das kann ich gut nachvollziehen.* and *Es spricht einiges dafür, dass …* (C1 u05). The 12 headwords shared with C1 are listed in pass 3.
10. **u02 g02 example 0, "ground floor":** understood in American English, but the course otherwise uses US floor numbering (*zweiter Stock* = third floor). Either keep it or use "first floor (ground floor)".
11. **Voice:** the build already handles `( + A / + D )`, `CO₂`, `Dr.`, `A3`/`A5`, clock times, ordinal dates and digits (`tools/build.py` `speakable`). I found nothing in B2 that it would read badly.

## 4. Improvement ideas (prioritised)

1. **Make exercises exam-strength.**
   - Most `order` items have 5–7 words in simple main-clause order, and the `choice` distractors are often easy to rule out on form alone (*leslich*, *machlich*, *gewollen*).
   - Add per unit: one 8–9-word order item with a subordinate clause or a double infinitive; one transformation `type` item (e.g. *kann gelöst werden → lässt sich ___*, *weil es regnete → wegen ___ Regens*); and choice items whose distractors are all real forms (e.g. *dessen/deren/denen*, *hätte/wäre/würde*), as u02 g02 and u03 already do.
2. **Harder reading questions.**
   - Correct options are often copied word for word from the text, and the distractors are clearly absurd (*ein Verbot von TikTok*, *Sie verdienen mehr Geld*).
   - Paraphrase the correct option, make at least one distractor a near-miss taken from the text, and add one *richtig / falsch / steht nicht im Text* style item per unit to match Goethe/telc Lesen.
3. **Speaking output.** Each unit has strong Redemittel, but nothing makes the learner use them.
   - Content-only option: make one sentence per unit an opinion prompt that requires a phrase, e.g. *Ein großer Vorteil ist, dass …* completed in the sentences list.
   - App option: a "say it" step that plays a dialogue line with one speaker muted.
   - Align u05, u08 and u09 more clearly with Goethe B2 Sprechen Teil 2 (discuss and reach a compromise), as u09 already does.
4. **Vary text types.** We have news reports (u01, u04, u09), features (u02, u03, u05, u06, u07, u08) and one email (u10). Add a forum post or reader's letter (u04 or u08) and a description of a chart (u01 home office or u07 commuting), both standard B2 exam formats.
5. **Recycle vocabulary across units.** Words from early units rarely come back. Reuse *die Frist*, *die Voraussetzung* and *kündigen* (u01), *die Kaution* and *der Vermieter* (u02), and *die Krankenkasse* (u03) in later readings and examples, so B2 builds a cumulative word list.
6. **Contrastive notes for Persian and English speakers.**
   - Add a sentence to the relevant explanations:
     - relative-pronoun gender comes from the antecedent (Persian *ke* never changes);
     - *dessen/deren* agree with the owner, not the thing owned (unlike English *his/her*);
     - *seit* + present tense (English uses the present perfect, Persian often the present).
   - These are the classic errors of this family.
7. **Cultural content.** This is already good: degree recognition, Linsen, Safranreis, Integrationskurs. u10 (culture and leisure) could mention Nowruz or Yalda celebrations in an Iranian association (*Verein*), or a German–Persian choir or reading event. This fits the family and the unit's Ehrenamt/Verein vocabulary.
8. **Progression from B1.** B2 builds well on B1:
   - passive → passive with modal verbs and its alternatives;
   - Konjunktiv II present → past and indirect speech;
   - relative clauses → with prepositions and genitive;
   - genitive → genitive prepositions.
   A short "Wiederholung" example from the B1 form at the start of each B2 explanation would bridge it explicitly (as u03 g02 does with *Gegenwart → Vergangenheit*).
