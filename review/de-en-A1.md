# Review: de-en A1 (u00–u10)

I checked every item in all 11 files: letters and `pr` hints, sounds, words, plurals, examples, phrases, dialogues, grammar explanations, tables, examples and exercises, readings and questions, sentences, emoji, and continuity between units. The level is very clean. All German spelling, ß/ss, capitalisation, cases, separable verbs, verb-second order, arithmetic, times and reading answers are correct. Only u00 has `pr` fields. All 30 letter-name hints match the standard German letter names.

After the edits, `python3 tools/validate.py content/de-en/A1/*.json` prints OK for all 11 files. The files were rewritten with `json.dump(..., indent=2)` as the brief requires, so the one-line-per-item layout is now fully expanded. The content is otherwise unchanged.

## Changes

| # | File | JSON path | Old → New | Reason |
|---|---|---|---|---|
| 1 | u01.json | grammar[1].exercises[4].answer | `["heißt"]` → `["heißt", "heisst"]` | Accept the ß-less spelling. This matches the other `type` items, which already accept umlaut-less spellings (zwoelf, spaet, Maerz, hoere). |
| 2 | u04.json | grammar[1].exercises[3].answer | `["möchten"]` → `["möchten", "moechten"]` | Same: accept the umlaut-less spelling. |
| 3 | u04.json | grammar[1].exercises[5].answer | `["möchte"]` → `["möchte", "moechte"]` | Same: accept the umlaut-less spelling. |
| 4 | u02.json | grammar[0].explain | "Before a noun, say **ein**: **ein Jahr**." → "Before a noun, say **ein** (or **eine** – more in Unit 4): **ein Jahr**." | The old rule was incomplete. It suggested "ein" before every noun, which would give *ein Frau*. |
| 5 | u06.json | grammar[0].explain | "half way to eight" → "halfway to eight" | English spelling. |
| 6 | u10.json | reading.text[6] (t + s) | "Im Winter sehen sie am Abend gern fern." / "In winter they like watching TV in the evening." → "Im Winter kochen sie am Abend gern zusammen." / "In winter they like cooking together in the evening." | Continuity: in u05 the same Ahmadi family says it has no TV ("wir haben keinen Fernseher", "Es gibt keinen Fernseher"). The new line uses only words the learner already knows (kochen, gern, zusammen). The reading questions are not affected; "Sie sieht fern." is still a wrong option for Q4. |

Changes by category: pr 0, target text 1 (#6), translation 1 (#6 s), grammar explanation 2 (#4, #5), exercises 3 (#1–#3), emoji 0.

## Noticed but not changed

- **u00 letters, R `pr` "err":** Read alone, the English word "err" can be said /ɜr/. In the list (eff, ell, em, en, err, ess) the reader will very likely say /ɛr/, which is right. "air" would be fully unambiguous. Left as a style choice.
- **u00 letters, Y `pr` "ÜP-see-lon":** This uses Ü, which the same list explains a few rows later. It is correct (/ˈʏpsilɔn/).
- **u00:** Final devoicing (Hund → [t], Bad → [t]) and ch at the start of a word (Chef, China) are not explained. These are gaps in the curriculum, not errors, so nothing was added.
- **u00 letters, Q example "die Qualle" 🪼:** The jellyfish emoji is Unicode 15 (2022) and may show as an empty box on older phones. The emoji itself is correct.
- **u05 g02 exercises[4]** ("Wo ist das Bett? – ___ ist im Schlafzimmer.", answer `["es"]`): Colloquial "Das ist im Schlafzimmer" would also be grammatical. Not added, because the exercise drills the pronoun es.
- **u08 w01 s "pants, trousers"** and **u09 w12 s "fall, autumn"** use a comma. Other glosses use ";" (e.g. "clock; watch"). This is cosmetic only.
- **u09 dialogue s "Hi Reza!" / "Hi Anna!"** has no comma before the name, while other units use "Hi, Anna!". Both are acceptable in American English.
- **u09 plurals "die Sonnen", "die Frühlinge":** Both are correct but rare. They are kept because the field is optional and not wrong.
- **u05 w12 Lampe 💡 and u07 w10 Straße 🛣️:** These emoji are close enough (light bulb, road).
- **Order exercises** (e.g. "Ich stehe um sechs Uhr auf." vs "Um sechs Uhr stehe ich auf."): Other word orders are grammatical in principle. In the app, the tiles keep their capitals and the sentence audio is played, so the intended order is clear. No change.

## TTS-risky `t` texts (for central handling)

- **Slash "/":**
  - u00 sounds[2].t "eu / äu", sounds[5].t "sp / st", sounds[6].t "w / v / z"
  - u06 phrases[4] "am Morgen / am Abend"
  - u07 phrases[3] "Gehen Sie nach links / nach rechts.", phrases[5] "hier / dort"
  - u09 grammar[0].table[1] "warm / heiß", "Es ist warm. / Es ist heiß."
  - Table cells "er / sie / es" (u01 ×2, u02, u03, u04, u06, u10) and "sie / Sie" (u06, u10)
- **Ellipsis "…":**
  - u01 grammar[0].title "sein: ich bin, du bist …"
  - u03 grammar[1].title "haben: ich habe, du hast …"
  - u05 grammar[1].title "Wo ist …? – Er, sie, es"
  - u06 grammar[1].table "stehe … auf" etc. (6 cells)
  - u07 grammar[0].table "Gehen Sie …!", "Rufen Sie … an!" etc. (8 cells)
- **Plus "+":** u05 grammar[0].title "es gibt + einen, eine, ein"
- **Arrow "→":** u07 grammar[0].exercises[4] "Sie kommen. → ___ Sie bitte!"
- **Middle dot "·":** u09 grammar[1].table month rows, e.g. "März · April · Mai"
- **Digits and clock times:**
  - u02 grammar[0].title "Zahlen 0–20 und Alter"
  - u02 table cells "0 null" … "20 zwanzig"
  - u02 type answers "16", "12" (not voiced)
  - u06 grammar[0].table "7:00", "7:30", "3:15", "3:45", "12:00"
  - u06 exercises "7:30 – Es ist ___.", "3:15 – Es ist ___ nach drei.", "8:00 – Es ist acht ___.", "4:30 – Es ist ___."
