# Review de-en B2 — pass 3 (Oct 2026)

I started with the automatic audit (`review/audit/de-en-B2.md`). Then I read every item of u01–u10 myself: words and examples, phrases, dialogues, grammar explanations, tables, examples and exercises, readings with their questions, and sentences. I also compared people, places and facts across units.

German B2 has no `pr` fields (per CURRICULUM_NEW_LEVELS.md, the voice is the model), so there were no pronunciation guides to check. The German was already correct and natural, the grammar explanations were accurate, and every `choice` key points to the one correct option.

The real problems were:
- three headwords taught twice inside B2, plus a fourth one that the audit's exact-match check missed;
- missing alternative word orders on `order` items. The app compares answers case-insensitively and ignores punctuation, so a capital letter on a tile does not rule out another correct order;
- British English in the support text;
- a few contradictions between units about the same people;
- two reading statements that could become false over time.

Audit after my edits: only the 4 `german` false alarms remain. They are adjective + noun headwords where the lowercase adjective is correct: *die sozialen Medien, die erneuerbaren Energien, der zweite Bildungsweg, der öffentliche Nahverkehr*. `validate.py`: all 10 files OK.

## Changes

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u01.json | dialogue.lines[5].t | Hast du schon mit Frau Becker darüber gesprochen? Vielleicht lässt sich eine Lösung finden. → Hast du schon mit Frau Schneider darüber gesprochen? Vielleicht lässt sich eine Lösung finden. | target: Frau Becker is the retired neighbor in u02/u08/u10; here a manager |
| u01.json | dialogue.lines[5].s | Have you talked to Ms. Becker about it yet? Maybe a solution can be found. → Have you talked to Ms. Schneider about it yet? Maybe a solution can be found. | translation: follows |
| u01.json | grammar[0].examples[4].t | Frau Becker sagt, dass das Problem sofort gelöst werden muss. → Frau Schneider sagt, dass das Problem sofort gelöst werden muss. | target: same (manager context) |
| u01.json | grammar[0].examples[4].s | Ms. Becker says that the problem must be solved immediately. → Ms. Schneider says that the problem must be solved immediately. | translation: follows |
| u01.json | grammar[1].exercises[2].answer | einzureichen · abzugeben · zu stellen · abzuschicken → einzureichen · abzugeben · zu stellen · abzuschicken · einzusenden | exercise: einzusenden is an equally correct answer |
| u01.json | grammar[0].exercises[6].alts | — → Online muss die Bewerbung eingereicht werden. | exercise: missing alternative natural word order (app compares case-insensitively without punctuation) |
| u02.json | words[6].s | shared apartment, flat share → shared apartment (with roommates) | translation: American English |
| u02.json | words[6].ex.s | Jonas lived in a shared apartment while he was at university. → Jonas lived in a shared apartment while he was in college. | translation: American English |
| u02.json | dialogue.lines[8].s | Yes, our caretaker, Mr. Schulz, whose phone number is posted downstairs in the stairwell. → Yes, our building superintendent, Mr. Schulz, whose phone number is posted downstairs in the stairwell. | translation: American English |
| u02.json | reading.text[9].s | In addition, there's a lack of cultural offerings such as cinemas or theaters, which you find on every corner in the city. → In addition, there's a lack of cultural offerings such as movie theaters or playhouses, which you find on every corner in the city. | translation: American English |
| u03.json | sentences[0].t | Ich hätte gern einen Termin bei Frau Dr. Becker. → Ich hätte gern einen Termin bei Frau Dr. Neumann. | target: Frau Becker is the retired neighbor elsewhere in B2, not a doctor |
| u03.json | sentences[0].s | I'd like an appointment with Dr. Becker. → I'd like an appointment with Dr. Neumann. | translation: follows |
| u03.json | words[4].s | family doctor, GP (female: die Hausärztin) → family doctor, primary care doctor (female: die Hausärztin) | translation: American English |
| u03.json | dialogue.lines[8].s | Well, at least now you can recover in peace. Shall I bring you something from the pharmacy? → Well, at least now you can recover in peace. Should I bring you something from the pharmacy? | translation: American English |
| u03.json | grammar[0].exercises[6].alts | — → Früher hätte ich zum Arzt gehen sollen. | exercise: missing alternative natural word order (app compares case-insensitively without punctuation) |
| u03.json | grammar[0].exercises[7].alts | — → Das wäre ohne Helm schlimmer gewesen. | exercise: missing alternative natural word order (app compares case-insensitively without punctuation) |
| u03.json | grammar[1].exercises[7].alts | — → Ich würde kochen, wenn ich Zeit hätte. | exercise: missing alternative natural word order (app compares case-insensitively without punctuation) |
| u04.json | phrases[6].s | We mustn't forget that … → We must not forget that … | translation: American English |
| u04.json | grammar[0].exercises[6].alts | — → Er habe keine Zeit, sagt er. | exercise: missing alternative natural word order (app compares case-insensitively without punctuation) |
| u04.json | grammar[0].exercises[7].alts | — → Niemand sei verletzt worden, meldet die Polizei. | exercise: missing alternative natural word order (app compares case-insensitively without punctuation) |
| u04.json | grammar[1].exercises[6].alts | — → Sie hätten keine Zeit, sagen sie. | exercise: missing alternative natural word order (app compares case-insensitively without punctuation) |
| u04.json | grammar[1].exercises[7].alts | — → Sie würden zu wenig schlafen, meinen viele. | exercise: missing alternative natural word order (app compares case-insensitively without punctuation) |
| u05.json | grammar[0].exercises[6].alts | — → Ich esse weder Fisch noch Fleisch. | exercise: missing alternative natural word order (app compares case-insensitively without punctuation) |
| u05.json | grammar[0].exercises[7].alts | — → Zwar ist das teuer, aber nachhaltig. | exercise: missing alternative natural word order (app compares case-insensitively without punctuation) |
| u06.json | words[0] | die Weiterbildung (further training, continuing education); ex: Die Firma bezahlt jedem Mitarbeiter eine Weiterbildung pro Jahr. → die Umschulung (retraining (for a new occupation)); ex: Nach zwanzig Jahren als Koch hat er eine Umschulung zum Pflegefachmann gemacht. | duplicate: die Weiterbildung already taught in u01 w11; replaced with a new lifelong-learning word |
| u06.json | words[5] | die Voraussetzung (requirement, prerequisite); ex: Gute Deutschkenntnisse sind eine wichtige Voraussetzung für das Studium. → der Nachweis (proof, certificate (e.g. of language skills)); ex: Für die Anmeldung brauchen Sie einen Nachweis über Ihre Deutschkenntnisse. | duplicate: die Voraussetzung already taught in u01 w06 |
| u06.json | words[3].s | certificate; school report; job reference → certificate; report card; letter of reference | translation: American English |
| u06.json | grammar[0].examples[1].s | The decision to go to university wasn't easy for me. → The decision to go to college wasn't easy for me. | translation: American English |
| u06.json | grammar[0].examples[2].s | After completing his vocational training, Ali found a job straight away. → After completing his vocational training, Ali found a job right away. | translation: American English |
| u06.json | grammar[1].exercises[4].s | It was raining heavily. Despite the rain, Ali cycled to university. → It was raining heavily. Despite the rain, Ali rode his bike to campus. | translation: American English |
| u06.json | grammar[0].exercises[6].alts | — → Ich mache beim Lernen regelmäßig Pausen. | exercise: missing alternative natural word order (app compares case-insensitively without punctuation) |
| u06.json | grammar[0].exercises[7].alts | — → Mina möchte nach dem Studium in Berlin arbeiten. · In Berlin möchte Mina nach dem Studium arbeiten. | exercise: missing alternative natural word order (app compares case-insensitively without punctuation) |
| u06.json | grammar[1].exercises[7].alts | — → Mina hat während des Studiums viel gearbeitet. | exercise: missing alternative natural word order (app compares case-insensitively without punctuation) |
| u07.json | grammar[1].examples[3].t | Seitdem Reza mit dem Fahrrad zur Arbeit fährt, fühlt er sich fitter. → Seitdem Jonas mit dem Fahrrad zur Arbeit fährt, fühlt er sich fitter. | target: same unit's reading: Reza commutes by train from near Darmstadt to Frankfurt, not by bike |
| u07.json | grammar[1].examples[3].s | Since Reza started cycling to work, he has been feeling fitter. → Since Jonas started cycling to work, he has been feeling fitter. | translation: follows the name change |
| u07.json | words[8].s | detour, diversion → detour | translation: American English |
| u07.json | words[8].ex.s | Because of the construction work, a detour is signposted. → Because of the construction work, a detour is marked. | translation: American English |
| u07.json | phrases[1].s | According to the timetable, the train should have arrived at … → According to the schedule, the train should have arrived at … | translation: American English |
| u07.json | dialogue.lines[5].s | The regional express to Bremen leaves in twenty minutes from platform 7. In Bremen you then change to the S-Bahn to Bremerhaven. → The regional express to Bremen leaves in twenty minutes from track 7. In Bremen you then change to the S-Bahn to Bremerhaven. | translation: American English |
| u07.json | dialogue.lines[11].s | You're welcome. Have a good onward journey! → You're welcome. Enjoy the rest of your trip! | translation: American English |
| u07.json | reading.text[0].s | Millions of people in Germany commute to work every day – and their journeys are getting longer and longer. → Millions of people in Germany commute to work every day – and their commutes are getting longer and longer. | translation: American English |
| u07.json | reading.questions[2].q.s | What does Reza do during the journey? → What does Reza do during the ride? | translation: American English |
| u07.json | grammar[0].exercises[6].alts | — → Endlich ist der verspätete Zug angekommen. | exercise: missing alternative natural word order (app compares case-insensitively without punctuation) |
| u07.json | grammar[1].exercises[7].alts | — → Wir steigen aus, sobald der Zug hält. | exercise: missing alternative natural word order (app compares case-insensitively without punctuation) |
| u08.json | reading.text[4].t | Deshalb hat sie gemeinsam mit Maryam, einer Mutter aus dem dritten Stock, Einladungen in fünf Sprachen verteilt. → Deshalb hat sie gemeinsam mit Maryam, einer Mutter aus dem zweiten Stock, Einladungen in fünf Sprachen verteilt. | target: Maryam (Ahmadi) lives im zweiten Stock in u02 |
| u08.json | reading.text[4].s | So, together with Maryam, a mother from the fourth floor, she handed out invitations in five languages. → So, together with Maryam, a mother from the third floor, she handed out invitations in five languages. | translation: follows; zweiter Stock = US third floor (as in u02) |
| u08.json | phrases[6].s | We mustn't forget that … → We must not forget that … | translation: American English |
| u08.json | grammar[0].exercises[7].alts | — → An das Wetter habe ich mich gewöhnt. | exercise: missing alternative natural word order (app compares case-insensitively without punctuation) |
| u09.json | words[13] | nachhaltig (sustainable); ex: Nachhaltig einzukaufen heißt oft, weniger zu kaufen. → die Lebenshaltungskosten (cost of living (plural only)); ex: In Großstädten sind die Lebenshaltungskosten besonders hoch. | duplicate: nachhaltig already taught in u05 w05 (der Rabatt is taught in B1, so not used) |
| u09.json | reading.text[8].t | Auch die Politik reagiert: In einigen Bundesländern übernimmt ein sogenannter Reparaturbonus einen Teil der Reparaturkosten. → Auch die Politik reagiert: Einige Bundesländer haben einen sogenannten Reparaturbonus eingeführt, der einen Teil der Reparaturkosten übernimmt. | target: factual hedge: the state repair bonuses are temporary programs (some have already ended); 'have introduced' stays true |
| u09.json | reading.text[8].s | Politicians are responding, too: in some federal states, a so-called repair bonus covers part of the repair costs. → Politicians are responding, too: some federal states have introduced a so-called repair bonus that covers part of the repair costs. | translation: follows |
| u09.json | reading.text[12].t | Eine neue EU-Richtlinie zum „Recht auf Reparatur“ dürfte die Situation für Verbraucher in den nächsten Jahren verbessern. → Eine EU-Richtlinie zum „Recht auf Reparatur“ dürfte die Situation für Verbraucher in den nächsten Jahren verbessern. | target: directive is from 2024 (to be applied from 2026); 'neue' will soon be false |
| u09.json | reading.text[12].s | A new EU directive on the “right to repair” is likely to improve the situation for consumers in the coming years. → An EU directive on the “right to repair” is likely to improve the situation for consumers in the coming years. | translation: follows |
| u09.json | reading.title | Reparieren statt wegwerfen / Repair instead of throwing away → Reparieren liegt im Trend / Repairing is trending | target: u05 reading already has the same title 'Reparieren statt wegwerfen' (also repair cafés) |
| u09.json | grammar[1].examples[2].s | The refund should be in your account within three to five working days. → The refund should be in your account within three to five business days. | translation: American English |
| u09.json | goals[3] | Weigh up arguments and reach a compromise → Weigh arguments and reach a compromise | translation: American English ('weigh up' is British) |
| u10.json | words[4] | sich einsetzen für + A (to stand up for, to campaign for); ex: Die Initiative setzt sich für mehr Grünflächen in der Stadt ein. → das Engagement (commitment, involvement (pronounced the French way)); ex: Ohne das Engagement vieler Freiwilliger gäbe es die Tafel nicht. | duplicate: sich einsetzen für + A already taught in u05 w16 |
| u10.json | grammar[0].exercises[7].alts | — → Um etwas zurückzugeben, hilft Lena bei der Tafel. | exercise: missing alternative natural word order (app compares case-insensitively without punctuation) |
| u10.json | grammar[1].exercises[7].alts | — → Am Wochenende habe ich arbeiten müssen. | exercise: missing alternative natural word order (app compares case-insensitively without punctuation) |

Counts: 4 duplicate headwords replaced. 8 target-text changes (consistency, facts, title). 28 translation changes: 21 American English and 7 that follow a target change. 19 exercise changes (18 missing `alts`, 1 extra `type` answer). No pr, grammar-explanation or emoji changes were needed.

None of the new headwords is taught anywhere in de-en:
- *die Umschulung*, *der Nachweis*, *die Lebenshaltungskosten* do not appear in any level;
- *das Engagement* appears only in a C1 reading sentence, not as a headword.

I first considered *der Rabatt* for u09, but it is already a B1 headword, so I chose *die Lebenshaltungskosten* instead.

## Noticed but not changed

- **Headwords shared with C1:** *das Vorstellungsgespräch, die Fachkraft, die Weiterbildung, kündigen, die Vereinbarkeit von Familie und Beruf, die Krankenkasse, der Algorithmus, der Datenschutz, nachhaltig, sich engagieren für + A, die Ausstellung, das Publikum*. C1 is the later level, so these are for the C1 reviewer. No B2 headword overlaps with A1, A2 or B1.
- **Same first names for different people:** *Ali Karimi* (u03: 45, Stuttgart, project manager) and *Ali Ahmadi* (u08: Leipzig). *Reza Amini* (u05: electrician in Kassel) and the commuter Reza (u07: near Darmstadt). The surnames mark them as different people.
- **Small details in loose example sentences:** Jonas is a student in u02 and u06 g02, but an office colleague in u01 and u06. Mina wants to work in Berlin (u06) and has got used to Hamburg (u08). These are separate example sentences with no stated identity, so I left them.
- **Herr Wagner:** he quits a job in u01 and is a 58-year-old accountant in u06. That is compatible, so I left it.
- **u03 "ill":** "make you ill", "been ill" and "become ill" are fine in American English ("sick" would be more colloquial).
- **"Dreizimmerwohnung":** u02 reading gives "three-room apartment". That is a literal translation (US: two-bedroom), but it is not wrong.
- **Exercises with a second possible answer** that I left because the English `s` makes the intended one clear:
  - u03 g02 ex4 (*gewusst*; *erfahren* would also fit);
  - u04 g01 ex2/ex3 (only *gebe* / *sei* accepted, per the Konjunktiv I rule taught there);
  - u09 g02 ex3 (only *muss* accepted);
  - u06 g02 ex2/ex3 (*dieses* would also fit).
- **u07 reading text / dialogue facts:**
  - The 25 % compensation from 60 minutes' delay matches the current EU and German passenger rules.
  - "jeder vierte Beschäftigte" working from home (u01) is hedged with "laut Umfragen" and close to official figures.
  - "mehr als tausend" repair initiatives (u09) is true.
- **`order` items where another order is only marked or emphatic:** I added no alts for u01 g01 ex7, u01 g02 ex6/ex7, u07 g01 ex7 or u09 g01/g02 ex7. For u07 g01 ex7, *Viele Pendler ärgern die steigenden Ticketpreise* would be ambiguous between subject and object.

## TTS-risky target texts (unchanged; for central handling)

- Headwords with `( + A / + D )` or `+ A` notation: u01 w02, u02 w10, u03 w12–w14, u04 w02–w03, u05 w16, u06 w11, u08 w11–w16, u10 w12. The u10 w05 notation is gone with the new word.
- Abbreviations:
  - "die Wohngemeinschaft (WG)" (u02 w07); WG, ICE, EU, S-Bahn in running text;
  - "Frau Dr. Neumann" (u03 sentences[0]);
  - "CO₂" (u05 w06 and g02 examples[1]).
- Digits and codes: "7:15 Uhr" (u07 w04), "A3" and "A5" (u07), "18- bis 29-Jährigen" (u04 reading), ordinal dates ("15. September", "30. April", "1. September", "14. Dezember").
- Grammar tables with `+ D`, `/`, `=`, `(e)`, `…` (u02, u03, u04, u06, u07, u08, u09, u10); phrases with `…` placeholders (all units); "Das lohnt sich (nicht)." (u09 p06).
