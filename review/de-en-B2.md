# Review de-en B2 (u01–u10)

I checked every item in all 10 units: words, ex, phrases, dialogue, grammar explain/table/examples/exercises, reading text and questions, and sentences. Overall the level is in very good shape. The German is correct and idiomatic, the English is natural American English, the grammar explanations are accurate, and every `choice` answer index points to the one correct option. Order exercises are unambiguous, because tiles keep capitalisation and punctuation. All `type` answers containing ä/ö/ü/ß already have ae/oe/ue/ss variants. There are no `pr` fields at this level.

## Changes

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u07.json | reading.text[7].t | „Nachdem ich endlich angekommen war, war das Meeting schon vorbei“, erzählt er. → „Als ich endlich ankam, war das Meeting schon vorbei“, erzählt er. | *nachdem* means the main-clause event comes after the subordinate one. Here the meeting ended before he arrived (*schon vorbei*), so *als* is the natural connector. The translation already says "By the time I finally arrived". This unit teaches nachdem, so the old sentence modelled a misuse. |
| u08.json | reading.text[4].s | …a mother from the **third** floor… → …a mother from the **fourth** floor… | *dritter Stock* is the 4th floor in American English. This also matches u02, where *zweiter Stock* is already translated as "third floor". |
| u09.json | grammar[1].exercises[2].answer | ["müsste","muesste","dürfte","duerfte"] → + "sollte" | "Die Lieferung ___ morgen ankommen." (s: "should arrive… very likely"). *sollte* is an equally natural correct answer and would have been marked wrong. |

Changes by category: pr 0 · target text 1 · translation 1 · grammar explanation 0 · exercises 1 · emoji 0.

## Noticed but not changed

- **Duplicate vocabulary across units:** *die Weiterbildung* (u01 w11 / u06 w01), *die Voraussetzung* (u01 w06 / u06 w06), *nachhaltig* (u05 w05 / u09 w14) and *sich einsetzen für + A* (u05 w16 / u10 w05). Removing them would be restructuring, and repetition is defensible.
- **Repeated reading topic:** u05 and u09 have the same reading title, "Reparieren statt wegwerfen", and both are about repair cafés (Kassel/Reza vs. Köln/Herr Wagner). The content differs. Changing a title or topic is a style/structure decision.
- **u02 grammar[1].examples[0]:** *Erdgeschoss* is translated "ground floor". That is understood in American English, so I left it.
- **u09 grammar[1].exercises[3]:** "Er ___ großen Hunger haben." accepts only *muss*. *müsste/dürfte* would also be grammatical, but the translation ("must be") clearly asks for *muss*.
- **Konjunktiv I exercises u04 g01 ex[2]/ex[3]:** only *gebe* / *sei* are accepted. *gäbe/wäre* also occur in real usage, but the exercise targets Konjunktiv I where it is distinct, which is the exam rule taught in g02.
- **u10 g02 ex[5] and example[3]:** these use the Perfekt (*hat … können*) after a Präteritum main clause, where the translation says "hadn't been able". This is common and acceptable in German, so I left it.

## TTS-risky target texts (for central handling)

- **Word headwords with case/preposition notation `( + A / + D )`:**
  - u01 w02 "sich bewerben (um + A / bei + D)"
  - u02 w10 "sich beschweren (über + A / bei + D)"
  - u03 w12 "sich erholen (von + D)", w13 "vorbeugen (+ D)", w14 "verzichten (auf + A)"
  - u04 w02 "sich informieren (über + A)", w03 "berichten (über + A)"
  - u05 w16 "sich einsetzen (für + A)"
  - u06 w11 "teilnehmen an + D"
  - u08 w11–w16 ("sich gewöhnen an + A" etc.)
  - u10 w05 "sich einsetzen für + A", w12 "sich Zeit nehmen für + A"
- **Abbreviation in brackets:** u02 w07 "die Wohngemeinschaft (WG)". The abbreviations WG (u02), ICE (u07) and EU (u04, u09) also appear in running text.
- **Grammar tables with `+ D`, `/`, `=`, `(e)` or `…`:**
  - u02 g01 table ("mit + D", "wo(r)- + Präposition", "von + D (Plural)")
  - u03 g01 table ("wär(e)st … gegangen", "wär(e)t … gegangen", "er / sie / es", "sie / Sie")
  - u04 g02 table ("ich käme / würde kommen")
  - u06 g01 table ("-t / -ft → meist die", "-nis → das / die"); u06 g02 "statt / anstatt"
  - u07 g01 table column 3 (starts with "= …"); u07 g02 "seit / seitdem"
  - u08 g01 table ("… + A / + D")
  - u09 g01 table ("Futur I + wohl", "Futur II + haben/sein"); u09 g02 "kann / könnte"
  - u10 g01 table ("(an)statt … zu", "(an)statt dass")
- **Phrases with `…` placeholders:** all units. Particularly odd mid-sentence: u03 p05 "Du hättest … sollen.", u07 p02 "Laut Fahrplan hätte der Zug um … ankommen sollen.", u10 p01 "Ich möchte euch kurz von … erzählen."
- **Other:**
  - u09 p06 "Das lohnt sich (nicht)."
  - u03 sentences[0] "Frau Dr. Becker" (abbreviation)
  - u05 w06.ex and g02 examples[1] "CO₂" (subscript)
  - u07 w04.ex "7:15 Uhr"; u07 w08.ex "A3" and reading.text[2] "A5" (motorway names)
  - Ordinal dates such as "15. September", "30. April", "1. September", "14. Dezember" (u01, u06, u10) — usually fine, but listed for completeness
