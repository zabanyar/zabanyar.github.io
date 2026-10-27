# Review pass 3: de-en B1 (u01–u10)

I read every item in all 10 units: goals, words and examples, phrases, dialogues, grammar explanations, tables, examples and exercises, readings and questions, and sentences. I also checked the automatic audit (`review/audit/de-en-B1.md`) and compared the headwords against de-en A1, A2, B2 and C1.

**Result:** the German is correct and natural throughout. All `choice` keys, `type` answer lists, `order` alts and reading answers check out, with the few additions listed below. `tools/validate.py` prints OK for all 10 files.

**Audit:**
- The only automatic finding is u05 `words[15]` *die öffentlichen Verkehrsmittel*. It is a false alarm: the word after the article is an adjective, so lower case is correct.
- No headword is taught twice inside B1, so extra task 1 needed no replacements. My own fuzzy check (compounds and collocations) found only the partial overlap *verlassen* (u01) / *sich verlassen auf* (u08). These are different verbs, and the earlier review already accepted them.
- Extra tasks 2 and 3 (English and Turkish `pr`) do not apply to de-en. Following the curriculum, this course has no `pr` fields.
- The name "Neda" does not occur.

## Changes

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u01.json | words[w12].ex.t | fand Reza schnell → **fand meine Schwester schnell** | Same unit: in the dialogue Reza found a job only after two years in Germany; the example said he found one quickly after university. Made the example about another person. |
| u01.json | words[w12].ex.s | Reza quickly found → **my sister quickly found** | Matches new t. |
| u01.json | grammar[1].exercises[1].s | brought sweets → **brought candy** | American English (Süßigkeiten = candy). |
| u01.json | sentences[1].s | played in the garden → **played in the yard** | American English: a family garden around the house is a yard. |
| u02.json | grammar[1].exercises[4].s | fill in the form → **fill out the form** | American English (fill out a form), as elsewhere in the level. |
| u02.json | grammar[1].explain | Put a **comma** before the zu-group: after a noun (Lust, Zeit) or with **es** it is required, and elsewhere it is always correct. → **A **comma** before the zu-group is required after a noun (Lust, Zeit) or with **es**; after verbs like vorhaben, versuchen or hoffen it is optional, so a comma is never wrong there.** | Over-simplification: "elsewhere it is always correct" is false (e.g. no comma with scheinen/brauchen + zu). Restricted to the verbs taught here. |
| u02.json | grammar[1].explain | Use zu + infinitive when both parts have the same subject; otherwise use a **dass**-clause: → **After verbs like **hoffen**, use zu + infinitive when the person is the same in both parts; when it is someone else, use a **dass**-clause:** | "Same subject" rule was stated as general but the unit's own examples (Es ist wichtig, … zu …; Vergiss nicht, …) have no matching subject, and Ich bitte dich, … zu … contradicts it. Narrowed to the hoffen-type verbs the example shows. |
| u04.json | words[w09].s | loan; einen Kredit → **loan (stress on -dit: kre-DIT); einen Kredit** | Pronunciation hint (A2 style): English speakers stress the first syllable as in "credit". |
| u04.json | words[w13].s | receipt (from a store) → **receipt (from a store); Bon is said the French way: KASS-en-bong** | Pronunciation hint: "Bon" is not read by German spelling rules (A2 style, like Cousin, Ingenieur). |
| u04.json | grammar[1].exercises[4].s | If I weren't so tired, I would still go shopping. → **If I weren't so tired, I would go shopping now.** | "would still go shopping" reads as a concession (= nevertheless); here noch means "now, before the day is over". |
| u04.json | reading.text[1].t | Lena, 24, Studentin → **Anna, 24, Studentin** | Cross-unit consistency: Lena is a journalist (u06), interviewer (u01) and long-time employee (u02); a 24-year-old student is now Anna. |
| u04.json | reading.text[1].s | Lena, 24, student → **Anna, 24, student** | Matches t. |
| u04.json | reading.questions[0].q.t | Was würde Lena zuerst machen? → **Was würde Anna zuerst machen?** | Matches the reading. |
| u04.json | reading.questions[0].q.s | What would Lena do first? → **What would Anna do first?** | Matches t. |
| u04.json | reading.text[4].t | Herr Wagner, 67, Rentner → **Herr Wagner, 72, Rentner** | Cross-unit consistency: the retired Herr Wagner is 72 in u06 (zweiundsiebzig). |
| u04.json | reading.text[4].s | Mr. Wagner, 67, retiree → **Mr. Wagner, 72, retiree** | Matches t. |
| u06.json | words[w06].s | journalist (n-declension → **journalist (J said as in French: zhoor-na-LIST; n-declension** | Pronunciation hint: J here is /ʒ/, not the German /j/ or the English /dʒ/. |
| u07.json | grammar[1].explain | **her** movement **towards** the speaker → ****her** movement **toward** the speaker** | American spelling (toward). |
| u07.json | grammar[1].explain | (come in – towards me) → **(come in – toward me)** | American spelling (toward). |
| u08.json | words[w03].ex.t | Maryam und Reza → **Maryam und Ali** | Same unit: the reading has Maryam and Ali as the parents (Ali = Maryam's husband); Reza is Sara's brother in the dialogue. |
| u08.json | words[w03].ex.s | Maryam and Reza → **Maryam and Ali** | Matches t. |
| u08.json | dialogue.lines[4].s | celebrate in my garden → **celebrate in my backyard** | American English (Garten at a house = yard/backyard). |
| u08.json | grammar[1].exercises[6].alts | (none) → **["Mein Auto lasse ich reparieren."]** | Natural alternative order with the same words (object fronted), would have been marked wrong. |
| u09.json | words[w12].s | queue number (the ticket you take while you wait) → **number ticket (the numbered ticket you take while you wait your turn)** | American English: "queue" is British. |
| u09.json | grammar[0].explain | usually goes towards the **end** → **usually goes toward the **end**** | American spelling (toward). |
| u09.json | grammar[0].exercises[2].answer | ["gestellt", "eingereicht"] → **["gestellt", "eingereicht", "abgegeben"]** | „einen Antrag auf Wohngeld abgegeben“ (handed in) is also correct and natural. |
| u09.json | reading.text[0].t | in Leipzig → **in Köln** | Cross-unit consistency: Mina's postcard in u07 ends "wir fahren … zurück nach Köln"; her own blog here said she lives in Leipzig. |
| u09.json | reading.text[0].s | in Leipzig → **in Cologne** | Matches t. |
| u10.json | reading.text[8].s | roasted almonds → **candied almonds** | gebrannte Mandeln are sugar-coated (candied) roasted almonds, not plain roasted ones. |

**Changes by category:**

| Category | Changes |
|---|---|
| translation | 13 |
| consistency | 6 |
| grammar explanation | 5 |
| pronunciation hint | 3 |
| exercises | 2 |

Notes on the categories:
- **pr:** 0, because there are no `pr` fields in de-en.
- **Pronunciation hints:** added to `s`, the same way A2 does it (*Balkon (stress on -kon)*, *Cousin (koo-ZANG)*, *Ingenieur*).
- **Emoji:** 0 changes. I checked them all and they fit.

## Noticed but not changed

- **Names are reused for different people across units**, as in A2 and B2. I fixed only the conflicts inside a unit and the cases where the same kind of person contradicts itself (same retiree, same letter writer). These remain:
  - **Maryam:** grandmother born 1948 (u01 reading), warehouse worker "Frau Ahmadi" (u03), 41-year-old doctor (u04), Ali's wife in Hamburg (u08, u10).
  - **Amir:** two years in Köln after six years as an electrician in Iran (u02), but arrived in Germany a week ago (u09).
  - **Reza:** came to Aachen in 2009 (u01), but came to Köln a year ago knowing nothing about German festivals (u10).
  - **Lena:** colleague (u02), interviewer (u01), journalist (u06).
  - **Herr/Frau Wagner:** the curriculum's stock surname, used for a colleague, a doctor, a neighbor and an official.

  Making all of these consistent would mean rewriting dialogues and readings. That is beyond a proofreading pass, so I left them.
- **u10 w11 *der Karneval*, pl *die Karnevale*:** *die Karnevals* is equally common. The plural shown is correct, so I left it.
- **u05 dialogue:** "Plastikflaschen … Das sind Pfandflaschen" is true for these bottles, but not every plastic bottle carries a deposit. This is fine in context.
- **u09 reading.text[1]:** "Wer nach Deutschland zieht, muss sich innerhalb von zwei Wochen … anmelden" matches the Bundesmeldegesetz. The rule actually applies to every move into a new home, but the sentence is not wrong.
- **u03 reading.text[7]:** "Wer arbeitet und krank ist, wird vom Arzt krankgeschrieben" is slightly general (it applies only if you see a doctor and cannot work). This is acceptable at B1.
- **u04 w04 *bar bezahlen* (💶) and w10 *das Bargeld* (💵):** the two headwords are related but different. The 💵 dollar note is a generic money picture, so I left it.
- **u10 sentences[6].s** "Do you still have some?": "Do you have any left?" would be more idiomatic, but the current wording is not wrong.

## TTS-risky target texts (unchanged; for central handling)

- **Headwords with case/preposition notation:**
  - u01 w04 "sich erinnern an + A"
  - u04 w07 "ausgeben für + A"
  - u08 w04 "sich kümmern um + A", w05 "sich verstehen mit + D", w10 "sich verlassen auf + A"
  - u09 w14 "zuständig sein für + A"
  - u10 w10 "sich verkleiden als + N"
- **Ellipsis "…" in titles and phrases:**
  - u02 g02 title
  - u04 g01 and g02 titles
  - u05 g02 title
  - u06 p01–p04 and p08
  - u07 p07
  - u10 p05
- **Long comma list in a title:** u10 g01 title.
- **Dash between two speakers in one `t`:** u03 g02 ex[4]; u05 p07; u05 g02 example[4].
- **Digits:**
  - Years: u01 w06 (in `s` and ex "1955"), w16 ex "2015", dialogue[5] "2009", g01 ex[1] "2010", reading[0] "1948", sentences[2] "2012".
  - Ages after names: u04 reading[1], [4], [6], [8] ("Anna, 24, Studentin" …).
- **Apostrophe genitive:** "Jonas' Fahrrad" (u06 g01 table; ex[5] options); "Jonas' Frau" (u04 Q4).
- **Other:**
  - u07 w14 "die Hin- und Rückfahrt" (hyphen ellipsis)
  - u10 dialogue[5] "dem Buchstaben S"
  - u10 reading[5] "Haft-Sin-Tisch"
