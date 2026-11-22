# Critic review (pass 4): de-en A1 (u00–u13)

Scope: all 14 files in `content/de-en/A1/`. That is the alphabet unit, the theme units u01–u10 and the grammar units u11–u13 (`"kind": "grammar"`). I checked every item: letters and `pr`, sounds, words (t, s, pl, ex, emoji), phrases, dialogues, grammar titles, explanations, tables, examples and exercises, readings with their questions, sentences, goals and titles. I also checked character continuity across all 14 units, `type` answers for ae/oe/ue/ss variants, `order` alts, and what the build actually voices (`tools/build.py` `speakable()`). I read the pass-3 reviews (`review/de-en-A1.md`, `review/de-en-A1-pass3.md`) first and kept their decisions.

After editing, `python3 tools/validate.py content/de-en/A1/*.json` prints OK for all 14 files, and `python3 tools/audit.py` reports `de-en A1: {}`.

## 1. Verdict

The theme units u00–u10 are in very good shape after three passes. The German is correct and natural. The explanations are short and accurate, the readings are answerable, and I found only small problems there: two pairs of near-identical pictures, two missing alts and one continuity slip. The grammar units u11–u13 had never been reviewed. Their German and their explanations are strong: the Persian/English contrast notes are accurate, and the paradigms and exercises are well graded. Their main weakness was the story world. They were written without checking the established characters, so nine example or exercise sentences contradicted u01–u10 (Mina's siblings, age and swimming; the Ahmadi family's city and TV; Maryam's tea; Anna's city). Overall the level is now a coherent, accurate A1 course for this family. The biggest gap left is vocabulary: days of the week are used in u13 but never taught as words.

## 2. Fixed

| # | Unit | Path | Before → After | Reason |
|---|---|---|---|---|
| 1 | u02 | grammar[1].exercises[3] (t, s) | "Ali ___ in Hamburg." / Ali lives in Hamburg. → "Ali ___ in Köln." / Ali lives in Cologne. | Continuity. Ali and his family live in Cologne (u03 reading, u05, u10 reading). |
| 2 | u06 | words[4].emoji (aufstehen) | ⏰ → "" | In "Which picture is it?" for **die Uhr** (🕒), ⏰ is also a clock, so two options are correct. No emoji shows *getting up*. |
| 3 | u06 | words[11].emoji (halb) | 🕢 → "" | Same problem. 🕢 is a clock face, so it is a correct answer to "die Uhr" too. |
| 4 | u07 | sentences[4].alts | (none) → "In der Bank ist Ali." | Neutral verb-second order with a fronted place. The same pattern already has alts in u05 ("Im Wohnzimmer ist das Sofa."). |
| 5 | u07 | sentences[5].alts | (none) → "Im Restaurant essen wir." | Same reason as #4. |
| 6 | u09 | words[5].emoji (sonnig) | 🌞 → "" | **die Sonne** in the same unit is ☀️. In a picture question for either word, both pictures show the sun. |
| 7 | u09 | words[8].emoji (regnen) | ☔ → "" | **der Regen** in the same unit is 🌧️, so both pictures show rain. The nouns keep their pictures. |
| 8 | u11 | grammar[0].exercises[5] (t, s) | "Sara ___ im Krankenhaus." / Sara works … → "Reza ___ im Krankenhaus." / Reza works … | Continuity. Sara is sixteen and at school (u02, u07). Reza is the one who works at the hospital (u07). |
| 9 | u11 | grammar[1].examples[4] (t, s) | "Mina ist zwölf Jahre alt und hat zwei Brüder." → "… und hat einen Bruder." / … has a brother. | Continuity. Mina's only sibling is Amir (u03 dialogue and reading). The new sentence also models accusative **einen** after haben. |
| 10 | u12 | grammar[0].explain | "Das Kind heißt Mina. **Es** ist fünf." → "… **Es** ist zwölf." | Continuity. Mina is twelve everywhere else. |
| 11 | u12 | grammar[0].examples[2] (t, s) | "… Es ist fünf Jahre alt." / She is five … → "… Es ist zwölf Jahre alt." / She is twelve … | Same as #10. |
| 12 | u12 | grammar[2].examples[5] (t, s) | "Reza hat keinen Fernseher." → "Ali hat keinen Fernseher." / Ali doesn't have a TV. | Continuity. Reza watches TV in the evening (u06 dialogue). Ali's family has no TV (u05). |
| 13 | u12 | grammar[2].explain | not *einen* Tisch → not "einen Tisch" | Italics mark English glosses in these units. A wrong German form was in italics, so it looked like a gloss. Quotes match u11. |
| 14 | u12 | grammar[3].explain | Don't say *nicht ein* → Don't say "nicht ein" | Same as #13. |
| 15 | u12 | grammar[3].examples[5] (t, s) | "Mina kann nicht schwimmen." → "Amir kann nicht schwimmen." / Amir can't swim. | Continuity. Mina "kann gut schwimmen" (u10 dialogue). Amir can't swim (u10 reading). |
| 16 | u12 | grammar[4].examples[1] (t, s) | "Ali und seine Schwester wohnen in Hamburg." → "Ali und seine Frau wohnen in Köln." / Ali and his wife live in Cologne. | Continuity (Ali lives in Cologne with his wife Maryam). The point is unchanged: **seine** before a die-noun. |
| 17 | u12 | grammar[5].explain | not *es* → not "es" | Same as #13. |
| 18 | u13 | grammar[0].explain | **Heute ich arbeite**; **Ich in Teheran wohne** → "Heute ich arbeite"; "Ich in Teheran wohne" | In these units, bold marks the forms to learn. Wrong forms were also in bold, and a learner who skims the bold would pick them up. Changed to quotes, as in u11. |
| 19 | u13 | grammar[0].exercises[5] (t, s) | "Am Morgen ___ Maryam Kaffee." → "Am Morgen ___ Maryam Tee." / … drinks tea. | Continuity. Maryam drinks tea (u04 and u06 readings), and u12 g03 even says "Maryam trinkt keinen Kaffee". |
| 20 | u13 | grammar[1].explain | not **Was heißt du?** → not "Was heißt du?" | Wrong form in bold (see #18). |
| 21 | u13 | grammar[1].examples[2] (t, s) | "Wohnt Anna in Köln? – Ja, sie wohnt in Köln." → "Wohnt Anna in Berlin? – Ja, sie wohnt in Berlin." | Continuity. Anna lives in Berlin (u02 g02, u09 dialogue). |
| 22 | u13 | grammar[1].exercises[5].answer | ["Wann"] → ["Wann", "Um wie viel Uhr"] | "Um wie viel Uhr stehst du auf? – Um sieben Uhr." is equally correct and is taught in u10 and u13 g05. |
| 23 | u13 | grammar[2].explain | **Am Abend sieht Amir fern.** → **Am Abend sieht Lukas fern.** | Continuity. Amir's family has no TV (u05; pass 2 fixed the same clash in u10). Lukas watches TV in u06. |
| 24 | u13 | grammar[2].explain | **Ich muss arbeiten heute**; **Ich kann schwimme**; **Ich stehe um sieben Uhr** → the same three in quotes | Wrong or incomplete forms in bold (see #18). |
| 25 | u13 | grammar[2].table[5] | Am Abend / sieht / Amir / fern. → Am Abend / sieht / Lukas / fern. | Same as #23. |
| 26 | u13 | grammar[2].exercises[10] (t, s, alts) | "Am Abend sieht Amir fern." (alt "Amir sieht am Abend fern.") → "Am Abend sieht Lukas fern." / In the evening Lukas watches TV. (alt "Lukas sieht am Abend fern.") | Same as #23. |
| 27 | u13 | grammar[3].explain | **Du komm!**, **Trinkst!**, **Ess!**, **Fähr!** → the same four in quotes | Wrong forms in bold (see #18). |
| 28 | u13 | grammar[4].explain | never **in Mai** or **am Mai** → never "in Mai" or "am Mai" | Wrong forms in bold (see #18). |

Changes by category:
- Continuity (target text plus translation): 13 (#1, 8, 9, 10, 11, 12, 15, 16, 19, 21, 23, 25, 26)
- Grammar explanations (wrong forms no longer formatted like correct ones): 8 edits covering 15 wrong forms (#13, 14, 17, 18, 20, 24, 27, 28)
- Emoji: 4 (#2, 3, 6, 7)
- `order` alts: 2 (#4, 5)
- `type` answer list: 1 (#22)

In total there are 28 logged edits. There were no `pr`, spelling, British-English, Neda, digit or symbol problems to fix.

Checked and clean: every `type` answer with ä/ö/ü/ß has its ae/oe/ue/ss variant. Every gap uses exactly `___`. All reading answers are correct. No headword appears twice in the level, and no new headwords were added.

## 3. Remaining issues (not fixed: they need a decision or bigger work)

### High
1. **Days of the week and *Nacht* are never taught as vocabulary.** They first appear inside the u13 g05 explanation, and its exercises then use them ("am Sonntag", "Am Montag arbeite ich.", "Von Montag bis Freitag …"). An A1 learner needs them, and the A1 exam requires them. *Suggestion:* add a phrase "Montag, Dienstag, Mittwoch …" and "am Montag" to u06 (My day), or swap a low-value u06 word (e.g. **spät** or **dann**) for **der Montag** / **die Woche**. Then mention them in the u06 g01 explanation.

### Medium
2. **Picture overlap in u09: der Schnee ❄️, der Winter ⛄, kalt 🥶.** A snowflake and a snowman both fit "Schnee" and "Winter". *Suggestion:* set **der Winter** to "" (the other seasons keep 🌷 🏖️ 🍂) or **der Schnee** to "". I left them because neither emoji is wrong in itself.
3. **Reza has no clear identity.** He is "Reza Ahmadi" (u01) but is never linked to Ali Ahmadi. He works at a hospital in Germany (u07) but describes the weather "here" in Tehran (u09). He "has two daughters" (u12 g02) and is "Mein Bruder" in u11 examples. *Suggestion:* write a short character sheet in `content/` that all authors must follow. Proposed: Reza is Ali's brother, works at the Cologne hospital, and visits Tehran for Nowruz. Then let the u09 dialogue open with "Du bist in Teheran?"
4. **Sara is inconsistent.** She is sixteen and at school (u02, u07), from Tehran, living in Hamburg. She also stands in for "my sister" in u03 examples, and "Sara liest nicht gern" (u10) sits next to "Ali kocht und Sara liest" (u13). This is not a hard contradiction, but the character sheet should fix her profile.

### Low
5. **u10 picture overlap: die Musik 🎵 vs hören 🎧.** Headphones can be read as "music". *Suggestion:* set hören to 👂 (u00 uses 👂 for das Ohr, but only as a letter example, not as a word).
6. **u11 g01 explain:** "… and so does **regnen**: Es regnet." This sits under the -t/-d rule, but the stem *regn-* ends in n. *Suggestion:* add "(also stems in consonant + n or m: **es regnet**, **du öffnest**)".
7. **u11 g05 exercises[4]:** the hint "wollen" is the answer itself (wir wollen). *Suggestion:* change the subject to **ihr** ("Ihr ___ im Park spielen.", answer **wollt**, hint "wollen").
8. **u06 g01 exercises** start with "7:30 –" etc. `speakable()` voices this as "sieben Uhr dreißig – Es ist halb acht.", which is acceptable. Note that the earlier passes' "TTS-risky" list is mostly moot: grammar titles and table cells are never voiced, and slashes become commas.
9. **u09 dialogue `s`** "Hi Reza!" / "Hi Anna!" have no comma, while other units write "Hi, Anna!". This is cosmetic.

## 4. Improvement ideas (prioritized)

1. **Write a character sheet and enforce it.** Twelve of the thirteen continuity edits (nine separate clashes) were in the grammar units, which were written after the theme units. A short `content/CHARACTERS_DE.md` would prevent more clashes in A2 and up. Proposed content:
   - Ahmadi family in Cologne: Ali, who drinks coffee and plays soccer; Maryam, who drinks tea and reads; Mina, twelve, who sings, swims and reads; Amir, ten, who can't swim but cooks. They have no TV and a cat named Mimi.
   - Anna in Berlin: two brothers, birthday in December.
   - Lukas: eleven, born in Berlin, lives in Cologne, has a sister, watches TV.
   - Frau Müller: Hamburg, works at the hospital.
   - Reza and Sara: as decided under issues 3 and 4.
2. **Fill the A1 vocabulary gaps the grammar units assume.** Days of the week, *die Woche*, *die Nacht*, *Persisch*/*Englisch*, *helfen*, *sprechen*, *brauchen* and *suchen* all appear in u11–u13 but are only glossed there. Add the weekday set and *sprechen* (Sprechen Sie Deutsch? / Ich spreche Persisch) to the theme units. Language names matter most for this family.
3. **Pronunciation tips for Persian speakers in u00.** Add short `sounds` notes:
   - No helper vowel before **sp/st/schr** ("Schule", not "eSchule"), a typical Persian transfer.
   - Final devoicing (Hund → [t]).
   - Long versus short vowels (Staat / Stadt).
   - Pronounce **h** in "haben" but not in "gehen".

   This targets the family's real accent problems better than generic tips.
4. **Make readings ask for more than literal recall.** Every A1 reading question is a direct lookup. Add one simple inference question per reading, e.g. u05: "Hat Familie Ahmadi ein großes Wohnzimmer?", u08: "Warum kauft Sara keine Tasche?" (answer "zu teuer").
5. **Exercise variety in theme units.** Each theme unit has the same 7–8 choice/type/order mix. Add a gap fill built from the unit's own dialogue (one line with the key form removed). Make one `order` item per unit use a modal or separable verb once those are taught (u06+), so the sentence bracket is practiced before u13.
6. **Practical scenes for an immigrant family.** The A1 dialogues are café, shop, directions, weather and hobbies. A short doctor's office or registration-office (*Anmeldung*) exchange would be very useful, for example a u07 alternative dialogue or a reading. It needs only A1 language: Wie ist Ihr Name? Wo wohnen Sie? Haben Sie einen Termin? Nowruz in u09 is a good cultural anchor. Yalda night (*die längste Nacht*, December) would fit the u13 time expressions.
7. **Link the grammar units to the theme units in the UI or goals.** u11 g01–g02 build on u01–u03, u12 g03 on u05/u08, and u13 g03 on u06/u10. A one-line "first seen in Unit X" at the start of each grammar explanation would help learners who open the grammar units early.

## 5a. Pass 5 course-wide (Nov 2026)

Two course-wide jobs for all de-en levels (A1–C1). Level-specific pass-5 work (production items, `why`, inference
questions, `sym`) is left to the level passes. `validate.py`: all 57 files OK. `audit.py`: only the known adjective + noun
false alarms. New check `tools/repeats.py`: 0 cross-level repeats.

### Cast sheet

New file `content/de-en/CAST.md`. Decisions:
- **Ahmadi family in Köln** (from Isfahan, about six years in Germany, no TV, cat Mimi): **Ali** (about 45, Maryam's husband, parents and brother in Tehran), **Maryam** (about 42, part-time office job, colleague Jonas; her mother lives with them), **Mina** (12) and **Amir** (10). The A1 facts are kept, so the children stay children at every level.
- **Reza Ahmadi** (Ali's cousin; Shiraz, Aachen 2009 on a scholarship, engineer in Köln, married, one daughter) and his sister **Sara Karimi** (office job, husband **Hamid Karimi**, an electrician, two small children). Their parents live in Köln.
- **Herr Wagner** (58, accountant, twenty years in the Ahmadis' building, repairs bikes, repair café, chess, refugee help) and **Frau Dr. Wagner** (family doctor); **Lena** (journalist, later radio host Lena Hoffmann); **Jonas** (Maryam's colleague); **Anna** (24, student in Berlin); **Lukas** (11, Mina's friend); **Frau Müller** (Hamburg, A1).
- Stories that did not fit a main character now use a **side character** with one fixed role: Karim Hosseini (newcomer, B1), Leila, Nasrin, Behnam, Felix, Fatemeh and others (full list in CAST.md). C1 guests no longer share a first name with the family.
- I fixed one-line grammar examples only where they gave a main character a clashing hard fact: a married Lukas, a Mina at university or in an office, Sara aged 16, Reza living at his brother's.

Changes: 187 text items in 44 units, mostly name swaps in `t` and `s`, reading questions and options, and dialogue speakers.

| Level | Unit | Change |
|---|---|---|
| A1 | u02 | example "Sara ist sechzehn" → **Emma**; sentence "Sara wohnt in Hamburg" → **Frau Müller** (+ alt) |
| A1 | u07, u12 | "Sara ist in der Schule" → **Mina**; "Sara wohnt nicht in Köln" → **Anna** |
| A2 | u01 | dialogue Mina → **Maryam** (Jonas's colleague), *an den Wannsee* → *an einen See*; Sara's email: Ali → her husband **Hamid** (text + 2 questions) |
| A2 | u02 | reading narrator Mina in Hamburg → **Maryam in Köln**, Amir's money from his *Oma* (who lives with them); example "Lukas schenkt seiner Frau …" → Jonas |
| A2 | u03 | helper Lukas → **Reza** (dialogue + reading); *vier* → *fünf Zimmer* (they had four in A1); carpet "von meiner Oma" → "von Maryams Oma" (the dialogue says it is from Maryam's grandma) |
| A2 | u04 | patient Amir "Herr Karimi" → **Reza** "Herr Ahmadi" (Frau Dr. Wagner stays: the family doctor) |
| A2 | u05 | reading Reza (came two years ago, Stuttgart) → **Behnam**; word example Reza "in Stuttgart" → "in Köln"; sentence "Mina studiert …" → **Anna** (+ alt) |
| A2 | u06 | salesman Lukas → *Verkäufer*; reading Mina with children Sara and Amir → **Maryam** with **Mina** and Amir; "Lukas ist zwanzig" → Tim |
| A2 | u07 | ticket clerk Frau Wagner → **Frau Krause**; Reza's friend in Munich Jonas → **Felix**; "Amir wohnt seit drei Jahren in Köln" → *fünf*; "Reza wohnt bei seinem Bruder" → Arash |
| A2 | u08 | waitress Lena → *Kellnerin*; guest Amir → **Ali** (matches Maryam's reading "mein Mann") |
| A2 | u09 | reading narrator Mina (Hamburg, brother Ali in Isfahan) → **Ali** (Köln, parents and brother in Tehran); question options |
| A2 | u10 | Amir (adult, works Saturdays) → **Reza** |
| A2 | u11–u13 | adult Lukas → Jonas (2), "Mina wohnt bei ihrer Tante" → Lena, "Lena ist so alt wie Lukas" → Jonas, "Mina ist keine Ärztin, sondern Lehrerin" → "Lena … Journalistin" |
| B1 | u01 | "Meine Großmutter Maryam" (born 1948) → **Fatemeh** |
| B1 | u02 | interview: Amir → **Hamid** (Herr Karimi), Frau Wagner → **Frau Lange**; reading Mina → **Leila**, colleague Lena → **Julia** |
| B1 | u03 | doctor Herr Wagner → **Dr. Neumann**; Maryam "arbeite in einem Lager" → "in einem Büro" |
| B1 | u04 | street poll in Bonn: Anna → Laura, Herr Wagner (72) → Herr Lorenz, Maryam (41, doctor) → Narges, Jonas → Paul |
| B1 | u05 | newcomer "Herr Hosseini" was Ali → **Karim** |
| B1 | u06 | Mina/Lukas with children → **Maryam/Jonas**; Herr Wagner *zweiundsiebzig* → *achtundfünfzig*, "Werkstatt des alten Herrn" → "Werkstatt in der Garage" |
| B1 | u07 | Bodensee email "deine Mina" (with Ali) → **Maryam** |
| B1 | u08 | parents' *fünfunddreißigster* → *fünfundvierzigster* Hochzeitstag (Reza came 2009 after his degree); Maryam's mother moved to Hamburg → **Köln** |
| B1 | u09 | newcomer Amir → **Karim**, Frau Wagner → **Frau Fischer**; reading Mina → **Leila** |
| B1 | u10 | reading "Reza came to Köln a year ago and knew nobody" → **Karim** |
| B2 | u01 | Mina/Jonas (daughter in the Kita) → **Sara/Tobias**; "Stelle bei der Stadt München" → Köln |
| B2 | u02 | reading Lena Hoffmann (Taunus) → **Katrin Vogel** |
| B2 | u03 | dialogue Mina → **Sara**; reading Ali Karimi (45, Stuttgart) → **Farid Rahmani** |
| B2 | u05 | climate researcher Jonas Weber → **Martin Weber**; repair café Reza Amini (Kassel) → **Kaveh Amini** |
| B2 | u06 | reading Mina (34, engineer) → **Nasrin**; adult-Mina examples → Nasrin, "Nach dem Studium … in Berlin" → Anna |
| B2 | u07 | commuter Reza (Darmstadt/Frankfurt) → **Omid** |
| B2 | u08 | Herr Ahmadi "seit sechs Jahren in Leipzig" → **Köln**; Hoffest "Leipziger Stadtteil Grünau" → "Kölner Stadtteil Chorweiler"; adult-Mina examples → Nasrin; "Maryam nimmt an einem Integrationskurs teil" → Karim |
| B2 | u09, u10 | adult-Mina examples → Nasrin; Maryam's email "Liebe Mina" → **Leila** |
| C1 | u01–u10 | guests renamed: Lukas Brandt → Markus Brandt, Dr. Mina Karimi → Dr. Laleh Karimi, Jonas Berger → Thomas Berger, Prof. Wagner → Prof. Brenner, Dr. Amir Sadeghi → Dr. Kian Sadeghi, Dr. Sara Rahimi → Dr. Parisa Rahimi, Dr. Maryam Ahmadi → Dr. Narges Rostami, Reza Tehrani → Babak Tehrani, exam partner Anna (who uses *Sie* with Ali) → Elena |

Left on purpose: one-line examples that give a name no hard fact, and generic Wagner examples ("Herr Wagner arbeitet …"), which fit a working 58-year-old. The family's single move is told three times (A2 u03 letter, B1 u03 back pain, B2 u02 meeting Herr Wagner); this is consistent, so I left it.

### Cross-level repeats

New script `tools/repeats.py [course …]`. It normalizes case, articles, *sich*, valency brackets and punctuation, and
also catches a frame taught again with its gap filled ("Wie wäre es mit …?" vs "Wie wäre es mit Sonntag?"). Headwords had
no repeats left after pass 3 and pass 4. I replaced 12 repeated Redemittel in the higher level. Ids are kept, the new
phrases are taught nowhere else in de-en, and `alts` are given where a neutral second order exists. No exercise depended on
an old phrase. Dialogues that still use an old phrase (B1 u03 "Gute Besserung!", C1 u02 "Unterm Strich", C1 u05
"Das kann ich gut nachvollziehen") now recycle it from the earlier level.

| Level | Unit | Old (first taught in) | New |
|---|---|---|---|
| A2 | u02 p07 | Frohes neues Jahr! (A1 u09) | Kommst du zu meiner Party? |
| B1 | u02 p08 | Schönen Feierabend! (A2 u05) | Ich freue mich auf die Zusammenarbeit. |
| B1 | u03 p08 | Gute Besserung! (A2 u04; B2 already fixed in pass 4) | Ich bin allergisch gegen Penicillin. |
| B1 | u07 p06 | Was können Sie uns empfehlen? (A2 u08) | Was gibt es hier zu sehen? |
| B1 | u10 p01 | Frohes neues Jahr! (A1 u09) | Komm gut ins neue Jahr! |
| B1 | u10 p04 | Ich bin dabei! (A2 u10) | Soll ich etwas mitbringen? (also a line in the unit's dialogue) |
| B1 | u10 p05 | Wie wäre es mit …? (A2 u10 "Wie wäre es mit Sonntag?") | Was hältst du davon, wenn wir …? |
| B2 | u03 p03 | An deiner Stelle würde ich … (B1 u04) | Ich achte auf eine ausgewogene Ernährung. |
| C1 | u02 p01 | Einerseits …, andererseits … (B2 u01) | Das lässt sich nicht pauschal beantworten. |
| C1 | u02 p05 | Unterm Strich … (B2 u07) | Letzten Endes … |
| C1 | u05 p05 | Das kann ich gut nachvollziehen. (B2 u07) | Ich kann mich gut in Ihre Lage versetzen. |
| C1 | u05 p06 | Es spricht einiges dafür, dass … (B2 u09) | Vieles deutet darauf hin, dass … |

## 5. Pass 5 (Nov 2026)

I carried out BRIEF_FIX5 tasks 1–7 for all 14 A1 units. The course-wide work in 5a (cast sheet, cross-level repeats) is kept; I undid no rename. New names follow `content/de-en/CAST.md`.

Checks: `python3 tools/validate.py content/de-en/A1/*.json` → OK (14/14). `python3 tools/audit.py` → `de-en A1: {}`. `python3 tools/repeats.py de-en` → 0 repeats.

### 5.1 Status of every pass-4 issue and idea

| # | Item | Status |
|---|---|---|
| 3.1 | Days of the week and *Nacht* never taught | **Done.** u06: words **die Woche**, **das Wochenende** and a new grammar point `g03` "am Montag, am Wochenende" (all seven days in the table, explanation, 5 examples, 8 exercises including a rewrite and a function item); a 5th goal merged into the u06 goals; reading line "Am Wochenende arbeite ich nicht." u09: words **der Tag**, **die Nacht** (🌙, `sym`) and the example "Am Tag ist es warm, aber in der Nacht ist es kalt." u10: words **der Samstag**, **der Sonntag**. u13 g05 now says "You know the days from Unit 6". |
| — | Lead's request: numbers above twenty | **Done.** u02: words **dreißig**, **hundert**; g01 is now "Zahlen 0–100": the tens in -zig, the three special tens (dreißig, sechzig, siebzig), how **einundzwanzig** is built (unit first, *und*, one word, *ein* not *eins*) with a Persian/English contrast note, 4 new table rows, 2 new examples. Exercises: "Zwanzig plus fünf ist ___" (fünfundzwanzig) and the rewrite "zwanzig → dreißig Jahre". u08 rewrite: "Der Mantel kostet zwanzig Euro → dreißig Euro". To avoid a cross-level repeat, A2 u01 w01 **das Wochenende** became **der See** (see the A2 report). |
| 3.2 | ❄️ Schnee / ⛄ Winter overlap | **Done** with `sym`: all four seasons, das Wetter ⛅, der Monat 📅 and kalt 🥶 are now symbols, so they never appear in picture questions. ❄️ Schnee stays literal. |
| 3.3 | Reza's identity | Cast sheet done in 5a. The u09 dialogue now opens "Hallo, Reza! Du bist in Teheran, richtig? Wie ist das Wetter dort?" – "Ja, richtig. …", which matches "visits Tehran for Nowruz". |
| 3.4 | Sara's profile | Done in 5a; nothing left in A1 contradicts CAST.md. |
| 3.5 | 🎵 Musik / 🎧 hören | **Done.** hören → 👂; die Musik 🎵 is `sym` (A2 Konzert 🎵 too). |
| 3.6 | u11 g01 *regnen* under the -t/-d rule | **Done.** "Stems that end in a consonant + **n** also add the **e**: **regnen → es regnet**, **öffnen** → **du öffnest**." |
| 3.7 | u11 g05 x4 hint = answer | **Done.** Now "Ihr ___ im Park spielen." → **wollt** (hint wollen). |
| 3.8 | u06 "7:30 –" digits | No change needed (`speakable()` reads them; audit 0 voice findings). The one item with "→" in voiced text (u07 g01 "Sie kommen. → ___ Sie bitte!") was replaced by a production item. |
| 3.9 | "Hi Reza!" without comma | **Done** with the new u09 lines 0–1 ("Hi, Reza! …", "Hi, Anna! …"). |
| 4.1 | Character sheet | Done in 5a. Two more clashes fixed here: u12 g02 "Reza hat zwei Töchter" → **Jonas** (Reza has one daughter); u01 g02 order item "Ich heiße Maryam Karimi" (Maryam is an Ahmadi) was replaced by a production item. |
| 4.2 | Vocabulary the grammar units assume | **Done** for days, Woche, Wochenende, Tag, Nacht, numbers to 100, **sprechen** + **Persisch** (u01), **suchen** + **brauchen** (u08). Not added: *helfen* (taught in u11 g03; u10 is at the 16-word maximum) and *Englisch*. |
| 4.3 | Pronunciation tips for Persian speakers | **Done**: 4 new u00 `sounds` – no helper vowel before sch/sp/st clusters, final devoicing (Hund, Tag, halb), long vs short vowels (Stadt/Staat, Bett), pronounced vs silent h. |
| 4.4 | Inference questions | **Done**: 1 per reading, u01–u10 (10), e.g. u09 "Wie ist das Wetter an Annas Geburtstag?" (December → winter → cold), u08 "Warum kauft Sara keine Tasche?" |
| 4.5 | Exercise variety | **Done** through task 2 (42 theme-unit production items). Several function items reuse dialogue lines (Wo ist der Bahnhof, bitte? / Hast du Geschwister? / Was möchten Sie? / Kannst du Rad fahren?). |
| 4.6 | Doctor / Anmeldung scenes, Yalda | **Partly.** Registration-style function items in u01 g02 ("Woher kommen Sie, Frau Ahmadi?") and u12 g05 ("Wie ist Ihr Name, bitte?"). Not done: a new dialogue (each unit has exactly one; replacing one is a lead decision) and Yalda (needs *feiern*, *die längste Nacht*, above A1). |
| 4.7 | Link grammar units to theme units | **Done**: every u11–u13 topic now starts with "You first met … in Unit X" (16 topics). |

### 5.2 Production items (task 2): 74

- Theme units u01–u10: 2 per grammar point (1 rewrite `type` with `cue`/`task`, 1 function `choice` with 3 whole sentences). 40 replace the most repetitive items (mostly `order` items that repeated a phrase, example or sentence, and duplicate gap fills), so counts stay the same. The new u06 g03 has its own pair (2). Total 42.
- Grammar units u11–u13: 2 appended per topic (16 topics × 2 = 32); every topic now has 14 exercises.

| Unit | Replaced (→ R = rewrite, F = function) |
|---|---|
| u01 | g01 "Du ___ Ali." → R; order "Sind Sie Herr Schmidt?" → F. g02 order "Woher kommen Sie?" → R; order "Ich heiße Maryam Karimi." → F |
| u02 | g01 "Wie ___ bist du?" → F; order "Wie alt sind Sie?" → R; also "Neun plus drei ist ___" → "Zwanzig plus fünf ist ___". g02 "Ali ___ in Köln." → R; order "Wo wohnen Sie?" → F |
| u03 | g01 "Das ist ___ Vater." → R; order "Wie heißt deine Schwester?" → F. g02 "Frau Müller ___ zwei Töchter." → R; order "Haben Sie Kinder?" → F |
| u04 | g01 "Das ist ___ Ei." → F; order "Das ist kein Brot." → R. g02 "Lukas ___ eine Suppe." → R; order "Möchten Sie Tee?" → F |
| u05 | g01 "Es gibt ___ Sofa …" → R; order "Es gibt keinen Schrank." → F. g02 "Wo ___ Ali?" → R; order "Wo sind die Kinder?" → F |
| u06 | g01 "8:00 – Es ist acht ___." → R; order "Wie spät ist es?" → F. g02 order "Ich stehe um sechs Uhr auf." → R; "Ich kaufe am Abend ___." → F. g03 new |
| u07 | g01 "Sie kommen. → ___ Sie bitte!" → R; order "Gehen Sie hier nach links." → F. g02 "Reza arbeitet ___ Krankenhaus." → R; "Frau Müller ist ___ Bank." → F |
| u08 | g01 "Sara kauft ___ Schal." → R; "Ich kaufe ___ Schal." → F. g02 "Das Kleid ___ fünfzehn Euro." → R; "Wie viel kostet ___ Tasche?" → F |
| u09 | g01 "Es ___ kalt." → R; order "Die Sonne scheint." → F. g02 "Dezember, Januar und Februar sind im ___." → R; "___ Herbst regnet es." → F |
| u10 | g01 "Maryam ___ gut singen." → R; order "Ich kann gut kochen." → F. g02 order "Wandern Sie gern?" → R; "Ich ___ gern Musik." → F |

Examples of the new formats: u02 "Wie alt sind Sie?" → *Ich bin vierzig Jahre alt.* / *Ich habe vierzig Jahre.* / *Ich wohne in Köln.*; u06 rewrite "Ich stehe um sechs Uhr auf." + "Start with Um sechs Uhr." → "Um sechs Uhr ___ auf." (stehe ich); u13 g04 "Ich habe Hunger!" → *Iss doch einen Apfel!* / *Isst doch …* / *Esse doch …*.

### 5.3 `why` (task 3): 312

Every `choice` and `type` grammar exercise in A1 (theme and grammar units, old and new) has a `why` of at most 160 characters that names the rule for that item ("Kaffee is a der-noun, so a is ein …", "anrufen splits: the prefix an goes to the end."). The script matched each `why` to its item by the item's text, not by index.

### 5.4 Inference questions (task 4)

The brief asks for them from A2 up; the A1 report (idea 4) asked for them too, so every A1 reading got one simple question (10).

### 5.5 `sym` (task 5): 37

u00 ja ✅, nein ❌, danke 🙏 · u01 der Name 📛, gut 👍 · u03 die Mutter 👩, der Vater 👨, der Sohn 👦, die Tochter 👧 · u05 die Wohnung 🏢, die Küche 🍳, die Lampe 💡 · u06 der Morgen 🌅, der Abend 🌆, das Mittagessen 🍽️, frühstücken 🍳, arbeiten 💼, einkaufen 🛒, fernsehen 📺 · u07 die Apotheke 💊, der Park 🌳 · u08 teuer 💰, suchen 🔍 (new) · u09 das Wetter ⛅, kalt 🥶, the four seasons, der Monat 📅, die Nacht 🌙 (new) · u10 lesen 📖, die Musik 🎵, kochen 🍲, singen 🎤, Rad fahren 🚲, wandern 🥾. Several of these share an emoji with a literal word elsewhere (🍳 Küche/frühstücken, 📺 Fernseher/fernsehen, 📖 Buch/lesen, 🍲 Suppe/kochen, 🚲 A2 Fahrrad). Emoji replaced: hören 🎧 → 👂.

### 5.6 Other fixes

- New words (12): u01 sprechen 🗣️, Persisch; u02 dreißig, hundert; u06 die Woche, das Wochenende; u08 suchen, brauchen; u09 der Tag, die Nacht; u10 der Samstag, der Sonntag. Every headword is unique in the level, and none is taught at another level.
- New grammar point: u06 g03 (days of the week).
- u00: 4 new `sounds`.
- Explanations: u02 g01 (numbers to 100), u11 g01 (regnen), u13 g05 (days refer back to u06), plus 16 "first met in Unit X" lines.
- Cast: u12 g02 Reza → Jonas; u09 dialogue lines 0–1.
- Answer lists widened in new items: "halb neun / acht Uhr dreißig", "Er / Der", "dreißig / dreissig / 30".

### 5.7 Counts

| Category | Count |
|---|---|
| Production items | 74 (37 rewrite, 37 function): 42 in theme units, 32 in grammar units |
| `why` | 312 |
| Inference questions | 10 |
| `sym` marks | 37 |
| New words / grammar points / sounds | 12 / 1 / 4 |
| Other content fixes | 9 (regnen, ihr wollt, Reza → Jonas, u09 dialogue ×2, hören emoji, u02 exercise 25, u13 g05 days, u06 goals) |

### 5.8 For the lead (app)

- Render `cue` (with its own audio), `task` and `why` (after a wrong answer) for grammar exercises. Choice options are already shuffled, so every function item has `answer: 0`.
- A1 u06 now has **three** grammar points; please check that the lesson list and unit test handle a third point.
- `sym` words must be left out of "Which picture is it?" questions.
- u00 `sounds` now has 11 entries; check that the sounds lesson is not too long on a phone.
