# Review pass 3: de-en C1 (u01–u10)

I read every item in all 10 units myself: words, examples, `pl`, phrases, dialogues, grammar explanations, tables, examples, all 160 exercises, readings, questions and sentences. I also cross-checked names and jobs between units, and checked headwords against every other de-en level.

The level has no `pr` fields (de-en convention).

Checks run:
- `python3 tools/validate.py content/de-en/C1/*.json` prints OK for every file.
- `python3 tools/audit.py` shows de-en C1 `{'german': 2}`. Both are false alarms: an adjective, not a noun, follows the article in "der gesellschaftliche Zusammenhalt" and "die künstliche Intelligenz (KI)". The three duplicate findings are fixed.
- An extra check of normalized headwords (ignoring "+ D", "etw.", "sich" and brackets) across A1–C1 now finds no duplicates.

## Audit findings

| Finding | Status |
|---|---|
| u06 `bahnbrechend` (also in u01) | fixed: replaced by *wegweisend* |
| u07 `der Fachkräftemangel` (also in u02) | fixed: replaced by *der Pflegenotstand* |
| u07 `umstritten` (also in u04) | fixed: replaced by *die Gewissensfrage* (the word ends the dialogue) |
| u04 / u06 "noun after article not capitalised" | false alarm (adjective + noun) |

The audit missed three more intra-level duplicates, which are now fixed:
- u08 *die Fördermittel*, also in u01 → *die Uraufführung*
- u08 *sich auseinandersetzen mit*, also in u01 → *etw. verkörpern*
- u06 *jdn./etw. ersetzen (durch + Akk.)*, which is the same headword as u02 *ersetzen durch + A* → *jemanden entlasten*

It also missed 14 headwords already taught in B2. BRIEF_NEW §5 says to avoid them, so these were replaced as well (ids kept, new `ex`, `s`, `pl`, `emoji`).

## Main problems found

1. **People's jobs changed between units.**
   - Dr. Mina Karimi was a psychologist running a reproducibility study (u01). In u06 she was the head of an institute that analyzes satellite data, and in the u06 reading a "Medienwissenschaftlerin". In u10 she was a C1 exam candidate.
   - Jonas Berger was a radio journalist (u01, u06), an economist being interviewed (u02, u09), and an exam candidate (u10).
   - In u02 Berger argues *against* the four-day week; in u10 he argues *for* it.
   - Fix: the journalist in u01 and u06 is now Lukas Brandt, the u06 AI expert (dialogue and reading) is the computer scientist Dr. Sara Rahimi, and the u10 exam candidates are Anna and Ali.
   - Kept as they were: Mina Karimi (u01 psychologist), Jonas Berger (u02/u09 economist), Lena Hoffmann (journalist and moderator), Prof. Wagner (u04, u07).
2. **Order exercises rejected correct answers.** None of the 40 order exercises had `alts`. The app compares answers case-insensitively and ignores punctuation (`normalize()` in docs/js/ui.js), so a capitalized first tile does not make the order unique, contrary to the earlier report. Correct answers were therefore marked wrong. For example:
   - *Die Studie ist aufgrund fehlender Daten kaum aussagekräftig.*
   - *Er ging arbeiten, obgleich er krank war.*
   - *Ich wäre mir da nicht so sicher.*
   - *Wir müssen folglich die Methode überdenken.* The unit's own explanation says connectors can stand in the middle field.

   I added `alts` to 27 of the 40 order exercises (32 alternative orders in total), each made of exactly the same tiles.
3. **Duplicates:** 20 headwords and 4 phrases replaced (see the tables).
4. **Type answers:** 7 ASCII spellings were missing (*ueben, aeussern, klaerenden, loesende, demgegenueber, erhaelt, Fuer/fuer die*), and *Exakt* was added in u03.
5. **Time-stable facts:** the u09 chip-subsidy sentence is now in the perfect tense. The u04 translation now makes clear that "erstmals" refers to European elections.
6. **Accuracy:**
   - u08 grammar said stand-alone *dies* is "always neuter singular". That is misleading, because *Dies sind die Gründe* is standard German.
   - u06 G1 ex 3 translated *Als ob ich das nicht längst wüsste!* as a past perfect.
   - Two cases of British "towards" were changed to "toward".

## Change table (79 changes)

### Headwords replaced (ids kept) (20)

| File | Path | Old → New | Reason |
|---|---|---|---|
| u02.json | `words[1] (w02)` | die Fachkraft → der Quereinsteiger | cross-level duplicate: die Fachkraft = B2 u01 |
| u02.json | `words[3] (w04)` | die Weiterbildung → die Zusatzqualifikation | cross-level duplicate: die Weiterbildung = B2 u01, u06 |
| u02.json | `words[4] (w05)` | die Vereinbarkeit von Familie und Beruf → der Betriebsrat | cross-level duplicate: die Vereinbarkeit von Familie und Beruf = B2 u01 |
| u02.json | `words[8] (w09)` | kündigen → die Abfindung | cross-level duplicate: kündigen = B2 u01 |
| u02.json | `words[13] (w14)` | das Vorstellungsgespräch → die Beförderung | cross-level duplicate: das Vorstellungsgespräch = B2 u01 |
| u04.json | `words[10] (w11)` | sich engagieren für + A → die Gewaltenteilung | cross-level duplicate: sich engagieren für = B2 u08 |
| u05.json | `words[7] (w08)` | sich erholen von + D → die Erschöpfung | cross-level duplicate: sich erholen von = B2 u03 |
| u06.json | `words[1] (w02)` | der Algorithmus → die Mustererkennung | cross-level duplicate: der Algorithmus = B2 u04 |
| u06.json | `words[3] (w04)` | der Datenschutz → die Überwachung | cross-level duplicate: der Datenschutz = B2 u04 |
| u06.json | `words[11] (w12)` | jdn./etw. ersetzen (durch + Akk.) → jemanden entlasten | headword already taught in C1 u02 w15 (ersetzen durch) |
| u06.json | `words[14] (w15)` | bahnbrechend → wegweisend | headword already taught in C1 u01 w13 (bahnbrechend) |
| u07.json | `words[0] (w01)` | die Krankenkasse → die Zuzahlung | cross-level duplicate: die Krankenkasse = B2 u03 |
| u07.json | `words[2] (w03)` | der Fachkräftemangel → der Pflegenotstand | headword already taught in C1 u02 w03 (der Fachkräftemangel) |
| u07.json | `words[15] (w16)` | umstritten → die Gewissensfrage | headword already taught in C1 u04 w13 (umstritten) |
| u08.json | `words[1] (w02)` | die Ausstellung → die Vernissage | cross-level duplicate: die Ausstellung = B2 u10 |
| u08.json | `words[5] (w06)` | das Publikum → das Bühnenbild | cross-level duplicate: das Publikum = B2 u10 |
| u08.json | `words[8] (w09)` | die Fördermittel (Pl.) → die Uraufführung | headword already taught in C1 u01 w04 (die Fördermittel) |
| u08.json | `words[10] (w11)` | sich mit etw. auseinandersetzen → etw. verkörpern | headword already taught in C1 u01 w08 (sich auseinandersetzen mit) |
| u09.json | `words[9] (w10)` | der Verbraucher / die Verbraucherin → das Handelsabkommen | cross-level duplicate: der Verbraucher = B2 u09 |
| u09.json | `words[15] (w16)` | nachhaltig → die Wertschöpfung | cross-level duplicate: nachhaltig = B2 u05, u09 |

### Phrases replaced (duplicates) (4)

| File | Path | Old → New | Reason |
|---|---|---|---|
| u06.json | `phrases[3] (p04)` | Es bleibt abzuwarten, ob … → Das wirft die Frage auf, ob … | phrase duplicate of C1 u01 p06 |
| u06.json | `phrases[4] (p05)` | Man darf nicht außer Acht lassen, dass … → Nach Angaben des Herstellers … | phrase duplicate of C1 u04 p03 |
| u06.json | `phrases[7] (p08)` | Ich gebe zu bedenken, dass … → Die Chancen überwiegen die Risiken. | phrase duplicate of C1 u02 p04 |
| u09.json | `phrases[2] (p03)` | Unterm Strich … → Das ist eine Gratwanderung. | phrase duplicate of C1 u02 p05 and B2 u07 p08 (Unterm Strich) |

### Names / person consistency between units (13)

| File | Path | Old → New | Reason |
|---|---|---|---|
| u01.json | `dialogue.speakers.A.name` | Jonas Berger → Lukas Brandt | name consistency: Jonas Berger is the economist interviewed in u02/u09 – the radio journalist (u01, u06) gets his own name |
| u06.json | `dialogue.speakers.A.name` | Jonas Berger → Lukas Brandt | name consistency (see u01) |
| u06.json | `dialogue.speakers.B.name` | Dr. Mina Karimi → Dr. Sara Rahimi | job consistency: Dr. Mina Karimi is the psychologist of u01; here the expert runs an institute that analyzes satellite data and is called a media scholar in the reading |
| u06.json | `dialogue.lines[0].t` | Frau Dr. Karimi, ein großer Branchenverband behauptet, die neue KI-Verordnung bremse die Innovation in Europa aus. Teilen Sie diese Sorge? → Frau Dr. Rahimi, ein großer Branchenverband behauptet, die neue KI-Verordnung bremse die Innovation in Europa aus. Teilen Sie diese Sorge? | name change (see speakers) |
| u06.json | `dialogue.lines[0].s` | Dr. Karimi, a major industry association claims that the new AI regulation is putting the brakes on innovation in Europe. Do you share this concern? → Dr. Rahimi, a major industry association claims that the new AI regulation is putting the brakes on innovation in Europe. Do you share this concern? | name change (see speakers) |
| u06.json | `dialogue.lines[10].t` | Frau Dr. Karimi, herzlichen Dank für das Gespräch. → Frau Dr. Rahimi, herzlichen Dank für das Gespräch. | name change (see speakers) |
| u06.json | `dialogue.lines[10].s` | Dr. Karimi, thank you very much for the interview. → Dr. Rahimi, thank you very much for the interview. | name change (see speakers) |
| u06.json | `reading.text[4].t` | Die Medienwissenschaftlerin Dr. Mina Karimi warnt jedoch, man dürfe flüssige Texte nicht mit Wissen verwechseln. → Die Informatikerin Dr. Sara Rahimi warnt jedoch, man dürfe flüssige Texte nicht mit Wissen verwechseln. | same expert as in the dialogue (computer scientist), not the psychologist Karimi of u01 |
| u06.json | `reading.text[4].s` | However, media scholar Dr. Mina Karimi warns that fluent texts must not be confused with knowledge. → However, computer scientist Dr. Sara Rahimi warns that fluent texts must not be confused with knowledge. | matches new t |
| u06.json | `reading.questions[1].q.t` | Wovor warnt Dr. Karimi? → Wovor warnt Dr. Rahimi? | name change |
| u06.json | `reading.questions[1].q.s` | What does Dr. Karimi warn against? → What does Dr. Rahimi warn against? | name change |
| u10.json | `dialogue.speakers.A.name` | Dr. Mina Karimi → Anna | consistency: exam candidates, not the researcher Dr. Karimi (u01) |
| u10.json | `dialogue.speakers.B.name` | Jonas Berger → Ali | consistency: Jonas Berger argues against the four-day week in u02 but for it here |

### Order exercises: missing `alts` added (27)

| File | Path | Old → New | Reason |
|---|---|---|---|
| u01.json | `grammar[0].exercises[6].alts` | — → Die Studie ist aufgrund fehlender Daten kaum aussagekräftig. | other natural word order of „Aufgrund fehlender Daten ist die Studie kaum aussagekräftig.“ (app compares case-insensitively, so it was marked wrong) |
| u01.json | `grammar[0].exercises[7].alts` | — → Die Ursache bleibt trotz intensiver Forschung unbekannt. | other natural word order of „Trotz intensiver Forschung bleibt die Ursache unbekannt.“ (app compares case-insensitively, so it was marked wrong) |
| u01.json | `grammar[1].exercises[7].alts` | — → Seine Besorgnis brachte der Minister zum Ausdruck. | other natural word order of „Der Minister brachte seine Besorgnis zum Ausdruck.“ (app compares case-insensitively, so it was marked wrong) |
| u02.json | `grammar[0].exercises[6].alts` | — → Im Vertrieb arbeitet die neu eingestellte Kollegin. | other natural word order of „Die neu eingestellte Kollegin arbeitet im Vertrieb.“ (app compares case-insensitively, so it was marked wrong) |
| u03.json | `grammar[0].exercises[7].alts` | — → Ich habe dir das doch gesagt! | other natural word order of „Das habe ich dir doch gesagt!“ (app compares case-insensitively, so it was marked wrong) |
| u03.json | `grammar[1].exercises[6].alts` | — → Wir müssen folglich die Methode überdenken. \| Wir müssen die Methode folglich überdenken. \| Die Methode müssen wir folglich überdenken. | other natural word order of „Folglich müssen wir die Methode überdenken.“ (app compares case-insensitively, so it was marked wrong) |
| u03.json | `grammar[1].exercises[7].alts` | — → Somit sind die Kosten deutlich gestiegen. | other natural word order of „Die Kosten sind somit deutlich gestiegen.“ (app compares case-insensitively, so it was marked wrong) |
| u04.json | `grammar[0].exercises[6].alts` | — → Ende des Monats erfolgt die Auszahlung. | other natural word order of „Die Auszahlung erfolgt Ende des Monats.“ (app compares case-insensitively, so it was marked wrong) |
| u04.json | `grammar[0].exercises[7].alts` | — → Seit gestern ist der Haushalt beschlossen. | other natural word order of „Der Haushalt ist seit gestern beschlossen.“ (app compares case-insensitively, so it was marked wrong) |
| u04.json | `grammar[1].exercises[7].alts` | — → Schnell muss den Betroffenen geholfen werden. | other natural word order of „Den Betroffenen muss schnell geholfen werden.“ (app compares case-insensitively, so it was marked wrong) |
| u05.json | `grammar[1].exercises[6].alts` | — → Das hängt vermutlich mit dem Stress zusammen. \| Mit dem Stress hängt das vermutlich zusammen. | other natural word order of „Vermutlich hängt das mit dem Stress zusammen.“ (app compares case-insensitively, so it was marked wrong) |
| u05.json | `grammar[1].exercises[7].alts` | — → Angeblich ist der Bericht schon fertig. | other natural word order of „Der Bericht ist angeblich schon fertig.“ (app compares case-insensitively, so it was marked wrong) |
| u06.json | `grammar[0].exercises[6].alts` | — → Das System sei fehlerfrei, behauptet er. | other natural word order of „Er behauptet, das System sei fehlerfrei.“ (app compares case-insensitively, so it was marked wrong) |
| u06.json | `grammar[0].exercises[7].alts` | — → Die Daten seien sicher, versichert der Hersteller. | other natural word order of „Der Hersteller versichert, die Daten seien sicher.“ (app compares case-insensitively, so it was marked wrong) |
| u07.json | `grammar[0].exercises[6].alts` | — → Wir halten nichtsdestotrotz an der Reform fest. \| An der Reform halten wir nichtsdestotrotz fest. | other natural word order of „Nichtsdestotrotz halten wir an der Reform fest.“ (app compares case-insensitively, so it was marked wrong) |
| u07.json | `grammar[0].exercises[7].alts` | — → Er ging arbeiten, obgleich er krank war. | other natural word order of „Obgleich er krank war, ging er arbeiten.“ (app compares case-insensitively, so it was marked wrong) |
| u07.json | `grammar[1].exercises[6].alts` | — → Die Therapie beginnt, sofern die Kasse zustimmt. | other natural word order of „Sofern die Kasse zustimmt, beginnt die Therapie.“ (app compares case-insensitively, so it was marked wrong) |
| u07.json | `grammar[1].exercises[7].alts` | — → Er hat insofern durchaus recht. | other natural word order of „Insofern hat er durchaus recht.“ (app compares case-insensitively, so it was marked wrong) |
| u08.json | `grammar[0].exercises[7].alts` | — → Als Meister der Novelle gilt Letzterer. | other natural word order of „Letzterer gilt als Meister der Novelle.“ (app compares case-insensitively, so it was marked wrong) |
| u08.json | `grammar[1].exercises[6].alts` | — → Ich habe den Roman in einer Nacht gelesen. \| In einer Nacht habe ich den Roman gelesen. | other natural word order of „Den Roman habe ich in einer Nacht gelesen.“ (app compares case-insensitively, so it was marked wrong) |
| u08.json | `grammar[1].exercises[7].alts` | — → Die Musik war es, die mich überzeugte. | other natural word order of „Es war die Musik, die mich überzeugte.“ (app compares case-insensitively, so it was marked wrong) |
| u09.json | `grammar[0].exercises[6].alts` | — → Viele Haushalte sparen angesichts der Krise. | other natural word order of „Angesichts der Krise sparen viele Haushalte.“ (app compares case-insensitively, so it was marked wrong) |
| u09.json | `grammar[0].exercises[7].alts` | — → Viele Züge fielen infolge des Streiks aus. | other natural word order of „Infolge des Streiks fielen viele Züge aus.“ (app compares case-insensitively, so it was marked wrong) |
| u09.json | `grammar[1].exercises[7].alts` | — → Die Verhandlungen scheiterten trotz aller Bemühungen. | other natural word order of „Trotz aller Bemühungen scheiterten die Verhandlungen.“ (app compares case-insensitively, so it was marked wrong) |
| u10.json | `grammar[0].exercises[6].alts` | — → Ich kann dem nur bedingt zustimmen. | other natural word order of „Dem kann ich nur bedingt zustimmen.“ (app compares case-insensitively, so it was marked wrong) |
| u10.json | `grammar[0].exercises[7].alts` | — → Ich komme damit zum nächsten Punkt. | other natural word order of „Damit komme ich zum nächsten Punkt.“ (app compares case-insensitively, so it was marked wrong) |
| u10.json | `grammar[1].exercises[6].alts` | — → Ich wäre mir da nicht so sicher. | other natural word order of „Da wäre ich mir nicht so sicher.“ (app compares case-insensitively, so it was marked wrong) |

### Type exercises: missing accepted answers (8)

| File | Path | Old → New | Reason |
|---|---|---|---|
| u03.json | `grammar[0].exercises[5].answer` | ['Eben', 'Genau', 'Richtig', 'Stimmt'] → ['Eben', 'Genau', 'Richtig', 'Stimmt', 'Exakt'] | „Exakt!“ is an equally correct answer |
| u01.json | `grammar[0].exercises[2].answer` | ['Zur', 'Für die'] → ['Zur', 'Für die', 'Fuer die'] | ASCII spellings ae/oe/ue/ss accepted, as elsewhere in the level |
| u01.json | `grammar[1].exercises[2].answer` | ['üben', 'äußern'] → ['üben', 'äußern', 'ueben', 'aeussern'] | ASCII spellings ae/oe/ue/ss accepted, as elsewhere in the level |
| u02.json | `grammar[0].exercises[3].answer` | ['klärenden'] → ['klärenden', 'klaerenden'] | ASCII spellings ae/oe/ue/ss accepted, as elsewhere in the level |
| u02.json | `grammar[1].exercises[2].answer` | ['lösende'] → ['lösende', 'loesende'] | ASCII spellings ae/oe/ue/ss accepted, as elsewhere in the level |
| u03.json | `grammar[1].exercises[3].answer` | ['hingegen', 'dagegen', 'demgegenüber', 'jedoch', 'aber', 'allerdings', 'indessen'] → ['hingegen', 'dagegen', 'demgegenüber', 'jedoch', 'aber', 'allerdings', 'indessen', 'demgegenueber'] | ASCII spellings ae/oe/ue/ss accepted, as elsewhere in the level |
| u04.json | `grammar[0].exercises[4].answer` | ['bekommt', 'erhält', 'bekam', 'erhielt'] → ['bekommt', 'erhält', 'bekam', 'erhielt', 'erhaelt'] | ASCII spellings ae/oe/ue/ss accepted, as elsewhere in the level |
| u09.json | `grammar[1].exercises[4].answer` | ['zur', 'für die'] → ['zur', 'für die', 'fuer die'] | ASCII spellings ae/oe/ue/ss accepted, as elsewhere in the level |

### Facts, translations, spelling, grammar explanation (7)

| File | Path | Old → New | Reason |
|---|---|---|---|
| u04.json | `dialogue.lines[0].s` | Ms. Hoffmann, in the 2024 European elections sixteen-year-olds in Germany were allowed to vote for the first time. I still consider that a mistake. → Ms. Hoffmann, in the 2024 European elections, sixteen-year-olds in Germany were allowed to vote in a European election for the first time. I still consider that a mistake. | precision: 16-year-olds had already voted in some state and local elections before; „erstmals“ refers to the European election |
| u09.json | `reading.text[7].t` | Zur Sicherung der eigenen Versorgung fördern sowohl die USA als auch die EU die Ansiedlung von Chipfabriken mit Milliardensummen. → Zur Sicherung der eigenen Versorgung haben sowohl die USA als auch die EU die Ansiedlung von Chipfabriken mit Milliardensummen gefördert. | factual stability: subsidy policies change; the perfect states what has verifiably happened (CHIPS Acts 2022/2023) |
| u09.json | `reading.text[7].s` | To secure their own supply, both the USA and the EU are subsidizing the establishment of chip factories with billions. → To secure their own supply, both the USA and the EU have subsidized the establishment of chip factories with billions. | matches new t |
| u07.json | `dialogue.lines[0].s` | attitude towards → attitude toward | American spelling |
| u06.json | `reading.questions[0].q.s` | towards → toward | American spelling |
| u06.json | `grammar[1].exercises[3].s` | As if I hadn't known that for ages! → As if I didn't already know that! | translation drift: „wüsste“ is present Konjunktiv II (= didn't already know), not a past perfect |
| u08.json | `grammar[0].explain` | (always neuter singular, even for plural content) → (its form never changes, even when it sums up plural content or the verb is plural: *Dies sind die Gründe.*) | over-simplification: „dies“ also occurs with a plural verb (Dies sind …) |

### New headword entries in full

| File | id | t | pl | s | ex.t | ex.s |
|---|---|---|---|---|---|---|
| u02 | w02 | der Quereinsteiger | die Quereinsteiger | career changer, lateral entrant (sb who enters a profession without the usual training) | Wegen des Fachkräftemangels stellen viele Schulen inzwischen Quereinsteiger ein. | Because of the shortage of skilled workers, many schools now hire career changers. |
| u02 | w04 | die Zusatzqualifikation | die Zusatzqualifikationen | additional qualification | Mit einer Zusatzqualifikation im Projektmanagement verbessern Sie Ihre Chancen auf dem Arbeitsmarkt. | With an additional qualification in project management, you improve your chances on the job market. |
| u02 | w05 | der Betriebsrat | die Betriebsräte | works council (elected employee representatives) | Der Betriebsrat hat der neuen Homeoffice-Regelung zugestimmt. | The works council has approved the new home-office arrangement. |
| u02 | w09 | die Abfindung | die Abfindungen | severance pay (compensation when a job ends) | Nach zwanzig Jahren im Betrieb erhielt er eine großzügige Abfindung. | After twenty years with the company, he received a generous severance payment. |
| u02 | w14 | die Beförderung | die Beförderungen | promotion (at work) | Nach drei Jahren im Unternehmen stand ihre Beförderung zur Teamleiterin an. | After three years with the company, she was due for promotion to team leader. |
| u04 | w11 | die Gewaltenteilung |  | separation of powers | Die Gewaltenteilung soll verhindern, dass sich zu viel Macht in einer Hand konzentriert. | The separation of powers is meant to prevent too much power from being concentrated in one hand. |
| u05 | w08 | die Erschöpfung |  | exhaustion | Nach Wochen voller Überstunden litt sie unter völliger Erschöpfung. | After weeks of overtime she was suffering from complete exhaustion. |
| u06 | w02 | die Mustererkennung |  | pattern recognition | KI-Systeme sind besonders stark in der Mustererkennung, etwa bei der Auswertung von Röntgenbildern. | AI systems are particularly strong at pattern recognition, for example when analyzing X-ray images. |
| u06 | w04 | die Überwachung |  | surveillance, monitoring | Kritiker befürchten, dass Gesichtserkennung im öffentlichen Raum zu einer flächendeckenden Überwachung führt. | Critics fear that facial recognition in public spaces will lead to blanket surveillance. |
| u06 | w12 | jemanden entlasten |  | to relieve sb (of work), take some of the load off sb | KI-Systeme könnten Ärztinnen und Ärzte bei der Dokumentation spürbar entlasten. | AI systems could noticeably take documentation work off doctors' hands. |
| u06 | w15 | wegweisend |  | pioneering; setting a precedent | Das Urteil könnte wegweisend für den Umgang mit KI-generierten Texten sein. | The ruling could set a precedent for how AI-generated texts are handled. |
| u07 | w01 | die Zuzahlung | die Zuzahlungen | co-payment (the patient's share of the cost) | Für viele Medikamente müssen gesetzlich Versicherte eine Zuzahlung leisten. | For many medicines, people with statutory insurance have to make a co-payment. |
| u07 | w03 | der Pflegenotstand |  | crisis in nursing care (acute shortage of care staff) | Verbände warnen seit Jahren vor einem dramatischen Pflegenotstand. | Associations have been warning of a dramatic crisis in nursing care for years. |
| u07 | w16 | die Gewissensfrage | die Gewissensfragen | matter of conscience | Ob man nach dem Tod seine Organe spenden möchte, ist für viele eine Gewissensfrage. | Whether to donate one's organs after death is a matter of conscience for many people. |
| u08 | w02 | die Vernissage | die Vernissagen | opening (of an art exhibition) | Bei der Vernissage stellte die Fotografin ihre Bilder persönlich vor. | At the opening, the photographer presented her pictures in person. |
| u08 | w06 | das Bühnenbild | die Bühnenbilder | stage set, set design | Das schlichte Bühnenbild lenkt den Blick ganz auf die Schauspieler. | The simple set directs all attention to the actors. |
| u08 | w09 | die Uraufführung | die Uraufführungen | world premiere (very first performance of a work) | Die Uraufführung des Stücks wurde vom Publikum begeistert gefeiert. | The audience gave the world premiere of the play an enthusiastic reception. |
| u08 | w11 | etw. verkörpern |  | to embody sth.; to play (a role) | In der Neuinszenierung verkörpert sie die Rolle der Mutter mit großer Intensität. | In the new production she plays the role of the mother with great intensity. |
| u09 | w10 | das Handelsabkommen | die Handelsabkommen | trade agreement | Das geplante Handelsabkommen soll zahlreiche Zölle abschaffen. | The planned trade agreement is intended to abolish numerous tariffs. |
| u09 | w16 | die Wertschöpfung |  | value creation, value added | Viele Länder wollen einen größeren Teil der Wertschöpfung im eigenen Land halten. | Many countries want to keep a larger share of value creation at home. |

## Noticed but not changed

- **Phrases repeated on purpose in u10 (exam review unit):**
  - *Ich vertrete die Auffassung, dass …* (also u04 p01)
  - *Wenn ich Sie richtig verstanden habe, …* (also u03 p01)

  Both are used in the u10 dialogue, and revising them is the point of u10.
- **Phrases that repeat B2:**
  - *Einerseits …, andererseits …* (u02 p01)
  - *Unterm Strich …* (u02 p05; also used in the u02 and u09 dialogues)
  - *Das kann ich gut nachvollziehen.* (u05 p05)
  - *Es spricht einiges dafür, dass …* (u05 p06)

  They are Redemittel rather than headwords and are used in the dialogues, so I left them.
- **Repeated first names:**
  - Maryam (u03, new to German office culture) and Dr. Maryam Ahmadi (u07, physician).
  - Reza (u03) and Reza Tehrani (u08, theater director).

  They have different or no surnames and do not contradict each other.
- **u02 w12 ex** "von Herrn Berger eingearbeitet" is a generic colleague and does not clash with the economist.
- **u04 dialogue line 0** "bei der Europawahl 2024 durften … erstmals Sechzehnjährige wählen". The German is correct (first time *at a European election*). Only the translation was clarified.
- **u04 w01 ex** "Wahlbeteiligung lag bei knapp 77 Prozent" names no election, so it is a neutral example. (Bundestag 2021: 76.6 %.)
- **u07 reading text[9]** "Solange Kliniken vor allem über Fallpauschalen vergütet werden …" is a conditional, so it stays true during the hospital reform.
- **u02 g01 ex 3** (*zu klärenden*): only *klärenden* is accepted. The English prompt "to be clarified" pins down the verb.
- **u03 g01 ex 0** (*Komm ___ herein*): *doch* is the only intended answer. Northern colloquial *eben* is marginal and is not an option.
- **u09 g02 ex 6** "Bei steigender Nachfrage steigen auch die Preise": no alternative added. Moving *auch* changes the meaning ("even").
- **Notation style:** "+ D" vs "(D)/(Akk.)" and "etw./jdn." differ between units. This is a style issue; TTS is handled centrally.

## TTS-risky texts (for central handling, unchanged)

The previous report's list still applies:
- valency shorthand "+ D", "(Akk.)", "etw.", "jdn."
- slash pairs: u03 w12 "duzen / siezen" and many table cells
- "=" in u02 g01 ex 4, u02 g02 ex 0–3 and u05 g02 ex 3
- "Dr." in u01 and u05
- "Arbeit 4.0", "1.200", "20.000" and "200 000"

The slash pair u09 w10 "der Verbraucher / die Verbraucherin" is gone (the headword was replaced). The new headwords use "etw." (u08 w11) and plain "jemanden" (u06 w12).
