# Pass 3 review: de-en A2 (u01–u10)

I started with `review/audit/de-en-A2.md`, which reported no findings. Then I read every item in all ten units:
- words, plurals and examples
- phrases
- dialogues
- grammar explanations, tables, examples and every exercise
- readings and reading questions
- sentences, `alts` and emoji

I also did these checks:
- **Duplicate headwords:** I ran a cross-level check of headwords in de-en A1–C1. A2 has no duplicates inside the level or with any other level, so pass-3 extra task 1 needs no replacements.
- **Pronunciation guides:** de-en has no `pr` fields (CURRICULUM_NEW_LEVELS: "German: no `pr`"). I checked the English respelling hints inside `s` instead: Cousin, Cousine, Ingenieur, Balkon.
- **Other checks:**
  - American English in all `s` fields.
  - No "Neda" anywhere.
  - Factual claims are stable.
  - Character facts are consistent across units.
  - Word order: which items the app turns into order exercises. `docs/js/lesson.js` uses sentences, dialogue lines and phrases of up to 8 words, and accepts `alts`.

After the edits, `python3 tools/validate.py content/de-en/A2/*.json` prints OK for all ten files, and `python3 tools/audit.py` still reports "no findings" for de-en A2.

## Changes

| # | File | Path | Old → New | Reason |
|---|---|---|---|---|
| 1 | u02 | grammar[0].explain | "In the plural the noun also gets **-n**: die Kinder → den Kindern (but not after -s: den Autos)." → "… – unless the plural already ends in -n or ends in -s: **den Eltern, den Autos**." | The rule was incomplete. As written, learners would add -n to plurals that already end in -n (\*den Elternn, \*den Frauenn), and the same text uses "meinen Eltern". |
| 2 | u02 | reading.text[3] t / s | "Meine Mutter hat den Haft-Sin-Tisch gedeckt, …" / "My mother set …" → "Ich habe den Haft-Sin-Tisch gedeckt, …" / "I set …" | Same character in both readings ("Ich heiße Mina und wohne seit fünf Jahren in Hamburg."). In u09, Mina's parents live in Isfahan, she talks to them only by video call, and they visit "im Sommer". So her mother cannot have set the table in Hamburg in March. |
| 3 | u01 | sentences[3] t / s | "Mina ist am Samstag nach Köln gefahren." → "Lena ist am Samstag nach Köln gefahren." (s to match) | Contradiction inside the unit. In the dialogue, Mina spent Saturday sleeping in and tidying the apartment. |
| 4 | u05 | grammar[1].exercises[6] t / s | "Jonas ___ Arzt werden, aber jetzt ist er Lehrer." → "Mein Bruder ___ Arzt werden, …" (s: "My brother wanted …") | Contradiction inside the unit. Jonas does a bank apprenticeship (w07), and in the dialogue he talks about his old job and his new one. The answer "wollte" is unchanged. |
| 5 | u07 | words[2].ex t / s | "Mit dem Flugzeug dauert die Reise von Frankfurt nach Teheran etwa fünf Stunden." → "Mit dem Flugzeug dauert die Reise von Berlin nach München etwa eine Stunde." | The fact was unstable. There are currently no direct Frankfurt–Tehran flights, so "about five hours" is not reliably true. Berlin–Munich takes about 1 h 05 and is a stable fact. |
| 6 | u04 | dialogue.lines[8].s | "I'll give you a sick note." → "I'll write you a doctor's note." | "Sick note" is British; "doctor's note" is the American term. |
| 7 | u08 | words[2].s (Vorspeise) | "appetizer, starter" → "appetizer" | "Starter" is British. |
| 8–35 | u01–u05, u08 | sentences[…].alts | **28 sentences**, 30 new alternatives:<br>• u01: [0] Ich habe gestern drei Stunden gearbeitet. [1] Am Sonntag haben wir einen Kuchen gebacken. [2] Hast du schon die Wäsche gewaschen? [3] Am Samstag ist Lena nach Köln gefahren. [4] Gestern Abend bin ich früh eingeschlafen. [5] Im Park haben die Kinder Fußball gespielt. [6] Wir sind am Sonntag zu Hause geblieben.<br>• u02: [1] Meiner Schwester schenke ich ein Buch. / Ein Buch schenke ich meiner Schwester. [2] Mir gefällt das Kleid sehr gut. [4] Dreißig Gäste haben wir eingeladen. [6] Für das schöne Geschenk danke ich dir. [7] Zur Hochzeit hat uns meine Tante eingeladen.<br>• u03: [0] Nächsten Monat ziehen wir nach Berlin um. [1] Im Flur stehen schon die Kartons. [3] Auf dem Schreibtisch liegt mein Handy. [4] Den Spiegel hängen wir in den Flur. / In den Flur hängen wir den Spiegel. [5] Auf dem Teppich sitzen die Kinder.<br>• u04: [0] Der Kopf tut mir weh. [1] Morgen muss ich zum Zahnarzt gehen. [4] Eine Woche dürfen Sie keinen Sport machen. [6] Seid bitte leise, Kinder! [7] Schlaf viel und gute Besserung!<br>• u05: [0] Seit drei Jahren arbeite ich bei dieser Firma. [4] Ich hatte gestern keine Pause. [5] Letzte Woche war mein Kollege krank. [6] Das Problem konnten wir schnell lösen. [7] Bis morgen und schönen Feierabend!<br>• u08: [1] Könnten Sie uns die Rechnung bitte bringen? | The app turns sentences of up to 8 words into order exercises. In u01–u05, no sentence had `alts`, while u06–u10 did. So a learner who built a natural alternative order was marked wrong. The two halves of the level now follow the same convention (BRIEF_NEW 3 and 6). Every alt uses exactly the same words. |
| 36–47 | u02–u06, u09, u10 | dialogue lines / phrases `.alts` | **12 items** (lines and phrases of up to 8 words, which the app also uses for order exercises):<br>• u02: lines[10] Lecker! Mir schmeckt persisches Essen sehr gut.; phrases[5] Mir gefällt das sehr.<br>• u03: lines[3] Zwischen die Fenster, an die Wand.<br>• u04: phrases[1] Es geht mir nicht gut.; phrases[3] Der Bauch tut mir weh.<br>• u05: phrases[2] Mir macht die Arbeit Spaß.; phrases[5] Heute habe ich frei.<br>• u06: lines[6] Natürlich. Dort hinten ist die Umkleidekabine.; lines[10] Ja, natürlich. Gleich da vorne ist die Kasse.<br>• u09: phrases[2] Später rufe ich dich zurück.; phrases[7] Ich freue mich darauf!<br>• u10: phrases[3] Leider kann ich da nicht. | These are equally natural orders that were missing (BRIEF_NEW 6). Case and punctuation are normalised by the app. |

**Changes by category:**
- **pr:** 0. de-en has no `pr` fields.
- **Target text:** 4 (#2, #3, #4, #5).
- **Translation / `s`:** 6
  - The 4 `s` fields matching the changed `t` (#2–#5).
  - #6 and #7 (American English).
- **Grammar explanation:** 1 (#1).
- **Exercises:** 41
  - #4.
  - The `alts` in #8–#47: 40 items, 42 new alternatives.
- **Emoji:** 0.
- **Duplicate-headword replacements:** 0. There are none in this level.

## Noticed but not changed

- **Names reused for different people.** The name pool is small (six Persian and four German names), so the same name sometimes stands for different people:
  - Sara is an adult in u01 and u05, and Mina's child in u06.
  - Amir is Mina's son in u02 and u06, and an adult (Herr Karimi) in u04, u08 and u10.
  - Reza's parents come to his birthday in u02, but "noch in Teheran wohnen" in u05.
  - Jonas lives in Munich in u07 but works in an office with Mina in u01.
  - Lukas is a salesman in u06 and has a wife in u02.

  I fixed only real contradictions: inside a unit (#3, #4), or for a clearly identical character, Mina's self-introduction in u02 and u09 (#2). Making every character consistent across units would mean restructuring.
- **u01 dialogue "an den Wannsee":** Berlin, while the reading Mina of u02 and u09 lives in Hamburg. They are different scenes and not the same identified character, so I kept this cultural detail.
- **A1 u00 letter examples:** der Fisch, der Computer, die Jacke and das Taxi appear there as alphabet example words, not as headwords. A2 teaches Fisch, Computer and Taxi as headwords, and Jacke is the u06 headword. The audit does not count these as duplicates, so I left them.
- **Respelling hints in `s`:**
  - Cousin "koo-ZANG" ([kuˈzɛ̃ː]/[kuˈzɛŋ]) and Ingenieur "in-zhen-YÖR" ([ɪnʒeˈni̯øːɐ̯]) are approximate but give the right stress and sounds.
  - Cousine "koo-ZEE-nuh" and Balkon "stress on -kon" are correct.
- **Gap-fill exercises with other grammatical fillers:** in these, `s` pins the intended word, so the answer lists stay strict, as in pass 2:
  - u09 g01 exercises[3]: "wann" would also be grammatical; `s` pins "whether".
  - u04 g01 exercises[1]: "muss" would be grammatical, but not with the meaning "not allowed".
- **Marked but correct alts** (for example "Dass sie Lehrerin ist, glaube ich.") are kept. I did not add clearly contrastive orders such as "Weil sie Lehrerin werden möchte, studiert Mina."
- **Factual claims I checked and kept:**
  - Nouruz in March, Haft-Sin items, Eidi from grandparents (u02).
  - Cold and fever advice and the employer-notification duty (u04).
  - Trinkgeld 5–10 %, hedged with "meistens" (u08).
  - Lake Constance = Bodensee (u10).
  - The Köln–Frankfurt–München timing (u07), corrected in pass 2.
- **u06 w01 "Kleidung (no plural)":** the plural "Kleidungen" is very rare, so the hint is fine.
- **"bill" next to "check" (u08 w08):** I kept it. "Bill" is also common in American restaurants, and "check" comes first.

## TTS-risky `t` texts (unchanged; handled centrally)

These are the same as in pass 2:
- **"+ D", "+ A" and "+ Dativ/Akkusativ" in headwords and tables:**
  - u02: schenken, einladen, gratulieren
  - u04: wehtun
  - u06: passen
  - u09: warten auf, sich freuen, denken an; g02 table
  - u10: sich treffen, sich verabreden, sich interessieren, Lust haben
  - u03: g01 and g02 table headers
- **"(Pl.)":** u02 w15 "die Großeltern (Pl.)"
- **Slashes in u04 g01 table:** "er / sie / es", "sie / Sie"
- **Ellipses in grammar titles and tables:** u05 g01, u07 g02, u08 g02, u09 g01, u10 g02
- **Speaker name "Frau Dr. Wagner"** (u04): an abbreviation, if speaker names are ever read aloud.
