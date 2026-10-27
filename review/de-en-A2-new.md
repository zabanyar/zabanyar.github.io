# Review: de-en A2 (new level, u01–u10)

I checked every item in all ten files: words, plurals, examples, phrases, dialogues and speaker order, grammar explanations, tables, examples, every exercise, readings, reading questions, sentences, `alts` and emoji. I also compared the level with de-en A1, B1, B2 and C1 for progression and duplicate headwords.

The level is in very good shape:
- All ten units teach the grammar that CURRICULUM_NEW_LEVELS.md assigns to them, correctly and completely.
- German spelling, ß/ss, capitalisation, cases, separable verbs, verb position in subordinate clauses, Perfekt auxiliaries and adjective endings are correct throughout.
- No B1 grammar is used as if it were known: no regular Präteritum, relative clauses, genitive, passive, zu-infinitive or obwohl/deshalb. "Schön, dass du gekommen bist" (u02) and "Wie wäre es mit …?" (u10) are fixed phrases.
- Nothing from A1 is presented as new. u04 says "You already know können and möchte" and "You already know the Sie form" of the imperative.
- `als` (past) is correctly deferred to B1 in u07.
- de-en has no `pr` fields, so the `pr` rules (BRIEF_NEW items 2 and 3) do not apply.

After the edits, `python3 tools/validate.py content/de-en/A2/*.json` prints OK for all ten files.

## Changes

| # | File | JSON path | Old → New | Reason |
|---|---|---|---|---|
| 1 | u03 | words[w02] | umziehen (zieht um, ist umgezogen) → **einziehen (zieht ein, ist eingezogen)**, "to move in"; ex "Wir sind letzten Monat in die neue Wohnung eingezogen." | Duplicate headword with B2 u02 w11. The new example also practises wohin + accusative. |
| 2 | u03 | words[w04] | die Miete → **die Treppe** (die Treppen), "stairs, staircase"; ex "Wir tragen die Kartons die Treppe hoch." | Duplicate with B2 u02 w01. "Miete" is still used in the phrase and the reading. |
| 3 | u03 | words[w05] | der Vermieter → **der Schlüssel** (die Schlüssel), "key", 🔑; ex "Der Vermieter gibt uns morgen die Schlüssel." | Duplicate with B2 u02 w03. The example keeps "Vermieter" in context. |
| 4 | u03 | words[w06] | der Nachbar → **der Keller** (die Keller), "basement, cellar"; ex "Im Keller ist noch viel Platz." | Duplicate with B2 u02 w08. "Keller" was already used in g01 examples[1]. |
| 5 | u06 | words[w13] | das Angebot → **reduziert**, "reduced (in price), marked down"; ex "Heute sind alle Stiefel um zwanzig Prozent reduziert." | Duplicate with B1 u04 and B2 u09. "im Angebot" is still used in the dialogue and the reading. |
| 6 | u07 | words[w13] | umsteigen → **einsteigen (steigt ein, ist eingestiegen)**, "to get on, to board"; ex "In Köln sind viele Leute in den Zug eingestiegen." | Duplicate with B2 u07 w03. "Muss ich umsteigen?" is still taught as phrase p04. |
| 7 | u07 | words[w14] | die Verspätung → **das Fahrrad** (die Fahrräder), "bicycle, bike", 🚲; ex "Ich fahre jeden Tag mit dem Fahrrad zur Arbeit." | Duplicate with B2 u07 w01. "Der Zug hat Verspätung." is still phrase p06. "Fahrrad" is used in this unit's wenn-exercises but was never a headword at any level. |
| 8 | u09 | words[w02] | die Nachricht (💬) → **der Videoanruf** (die Videoanrufe), "video call"; ex "Jeden Sonntag mache ich einen Videoanruf mit meinen Eltern." | Duplicate with B2 u04 w01. "Videoanruf" is central to this unit's dialogue and reading. |
| 9 | u10 | words[w11] | die Ausstellung (🖼️) → **das Kino** (die Kinos), "movie theater; the movies", 🎬; ex "Gehen wir heute Abend ins Kino?" | Duplicate with B2 u10 and C1 u08. "Kino" is used in u09 and u10 but is not a headword at any level. |
| 10 | u10 | words[w13] | die Eintrittskarte (🎟️) → **das Schwimmbad** (die Schwimmbäder), "swimming pool (the building)"; ex "Im Sommer gehen die Kinder oft ins Schwimmbad." | Duplicate with B2 u10 w10. |
| 11 | u10 | grammar[0].explain | "Some verbs are always reflexive (sich ausruhen, sich interessieren, sich freuen)." → "Some verbs are always reflexive, e.g. sich ausruhen and sich beeilen. Others are reflexive only in one meaning: Ich interessiere mich für Kunst. but Kunst interessiert mich.; Ich freue mich. but Das freut mich." | Wrong rule: interessieren and freuen are not always reflexive. u05 itself uses "Das freut mich!" |
| 12 | u07 | reading.text[7] t/s + questions[2].options[1] | "Um vier Uhr bin ich endlich in München angekommen." → "Um zwei Uhr …"; option "um vier Uhr" → "um zwei Uhr" | Realism: Köln–München by ICE takes about 4½ h. With an 8:00 departure, a 40-minute delay and a one-hour wait, he arrives around 13:30–14:00. 16:00 would mean an 8-hour trip. The question is still answerable and has one correct option. |
| 13 | u10 | words[w02].s | "to arrange to meet, to make a date (with friends)" → "to arrange to meet (someone)" | "make a date" suggests dating, which the family-friendly rule excludes. |
| 14 | u01 | grammar[1].exercises[6].answer | + "gelaufen" | "Wann seid ihr gestern nach Hause gelaufen?" is also correct. The list already accepts gefahren and gegangen. |
| 15 | u02 | grammar[1].exercises[4].answer | + "dieser" | "Sie gehört dieser Frau dort." is equally correct. |
| 16 | u03 | grammar[1].exercises[6].answer | + "gebracht", "getragen" | "Wohin hast du den Karton gebracht/getragen?" also fits "Where did you put the box?" |
| 17 | u04 | grammar[1].exercises[5].s | "Why don't you sleep a little!" → "… a little?" | English punctuation: this is a question form. |
| 18 | u10 | grammar[0].exercises[5].s | "Why don't you rest a little!" → "Why don't you (all) rest a little?" | Same punctuation fix, plus "(all)" for ihr, as elsewhere in the level. |
| 19 | u07 | sentences[6].alts | + "Im Zug habe ich meinen Koffer vergessen." | This is a natural order with the same words, and it was missing. |
| 20 | u07 | sentences[7].alts | + "Morgen fliege ich nach Teheran zu meinen Eltern.", "Ich fliege morgen nach Teheran zu meinen Eltern." | Both orders of "nach Teheran" and "zu meinen Eltern" are natural. |
| 21 | u08 | sentences[6].alts | + "Meistens gibt man in Deutschland etwas Trinkgeld." | This is a natural order with the same words, and it was missing. |

Changes by category:
- **pr:** 0 (de-en has no `pr` fields).
- **Target text:** 11
  - #1–#10: replaced headwords, each with a new example.
  - #12: the reading sentence.
- **Translation:** 3 (#13, #17, #18). The `s` fields of the new words and examples are included in #1–#10.
- **Grammar explanation:** 1 (#11).
- **Exercises:** 7
  - #14–#16: type answers.
  - #19–#21: sentence `alts`.
  - #12: reading-question option.
- **Emoji:** 6, all as part of the headword replacements.
  - Added: 🔑, 🚲, 🎬.
  - Removed: 💬, 🖼️, 🎟️.

**Duplicates with B1** (Fest, Hochzeit, Umzug, Feierabend, Überstunde, umtauschen, Sendung, Ausflug): I kept these in A2, because they are core A2 words and the lower level should keep basic vocabulary. The B1 reviewer has since replaced them on the B1 side. A final cross-level check of all de-en headwords (A1–C1) shows no duplicates.

## Noticed but not changed

- **Continuity of Mina across units:**
  - u02 reading: "seit fünf Jahren in Hamburg"; u09 reading: "seit sechs Jahren".
  - u02: Mina's son gets money from "seinem Opa" in Hamburg; u09: Mina's parents live in Isfahan.
  - The names are clearly reused for different characters across units (e.g. Ali is Sara's partner in u01, Ali writes to Jonas in u03, Ali is Mina's brother in u09), so I did not force consistency.
- **u04 g01 exercises[4]** "___ ich das Fenster aufmachen?": "Soll" would also be grammatical (an offer). It does not match `s` "May I …?", so it was not added. The list already accepts Darf and Kann.
- **u04 g01 exercises[5], u05 g02 exercises[3]/[4]/[6], u08 g02 exercises[5], u10 g02 exercises[3]/[4]:** other modal or Konjunktiv forms would be grammatical (sollst, kannst, konnten, sollte, Würdest, Willst …). The `s` translation pins the intended verb, so the lists stay strict, as in A1.
- **u05 g01 exercises[4]** "… dass die Pause um zwölf Uhr ___": "ist" would also be grammatical. `s` says "starts", so the answers stay anfängt and beginnt.
- **u05 g01 exercises[7] alt** "Dass sie Lehrerin ist, glaube ich.": marked (contrastive), but correct, so it was kept.
- **u08 sentences[2] alt** "Eine vegetarische Suppe hat meine Schwester bestellt." and similar fronted-object alts: marked but correct. Accepting them does no harm.
- **u07 dialogue lines[10]** "Ich nehme den Zug um neun." The train leaves at 9:10. This is normal casual speech.
- **u03 phrases[2]** "Kannst du mal mit anfassen?": separate spelling, as is usual in speech. Duden also allows "mitanfassen". Kept.
- **u02 w13 "Cousin (koo-ZANG)"** and **u05 w13 "Ingenieur (in-zhen-YÖR)"**: these English respelling hints are approximate but useful, so I kept them. Standard pronunciations are [kuˈzɛ̃ː] and [ɪnʒeˈni̯øːɐ̯].
- **u04 reading:** the health tips ("bei Fieber über 39 Grad zum Arzt", "Arbeitgeber sofort informieren") are generic and correct for Germany, so no hedge is needed.
- **u08 w09 ex** "In Deutschland gibt man meistens fünf bis zehn Prozent Trinkgeld." This is a stable convention, already hedged with "meistens".
- **u03 phrases:** only 7 phrases. This is within the 6–8 range.

## TTS-risky `t` texts (for central handling)

- **"+" and grammar codes in headwords:**
  - u02 words "schenken (+ D + A)", "einladen (…; zu + D)", "gratulieren (+ D)"
  - u04 "wehtun (tut weh; + D)"
  - u06 "passen (+ D)"
  - u09 "warten auf + A", "sich freuen (auf + A, über + A)", "denken an + A"
  - u10 "sich treffen (mit + D)", "sich verabreden (mit + D)", "sich interessieren für + A", "Lust haben (auf + A)"
  - Tables: u03 "Wo? + Dativ", "Wohin? + Akkusativ" (g01 and g02 header rows); u09 g02 table column 1 ("warten auf + A" … "fragen nach + D")
- **Abbreviation:** u02 words[w15] "die Großeltern (Pl.)"
- **Slash:** u04 g01 table "er / sie / es muss|darf|soll", "sie / Sie müssen|dürfen|sollen"
- **Ellipsis "…":**
  - u05 g01 title "…, weil ich müde bin. …, dass sie nett ist."
  - u07 g02 title and table cells "Wenn ich Zeit habe, …" etc.
  - u08 g02 title "Könnten Sie …? Ich hätte gern …"
  - u09 g01 title "Weißt du, wo …? Ich weiß nicht, ob …"
  - u10 g02 title "Morgen fahre ich … Ich werde …"
- **Parenthesised forms in verb headwords**, e.g. "ausschlafen (schläft aus, hat ausgeschlafen)": these follow the course convention and are read aloud as they are.
