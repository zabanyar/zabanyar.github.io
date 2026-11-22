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
