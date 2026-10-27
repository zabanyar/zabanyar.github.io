# Review pass 3: de-en A1 (u00–u10)

This was an independent third pass. I started from `review/audit/de-en-A1.md`, which had no findings. Then I read every item of all 11 units: letters and their `pr` hints, sounds, words with plurals and examples, phrases, dialogues, grammar explanations, tables, examples and exercises, readings with their questions, sentences and emoji. I also checked continuity between units (names, ages, cities, jobs, family facts) and how the app uses each field (`docs/js/lesson.js`).

German spelling, capitalization, ß/ss, cases, plurals, verb-second order, separable verbs, sums, clock times and reading answers were already correct.

The main problems this pass found:
- **Order items had no `alts`.** No A1 order item had any. The app accepts only `t` plus `alts` (it ignores case and punctuation), so correct verb-second orders were marked wrong. The worst case: u06 teaches "Um sechs Uhr stehe ich auf." as correct, but its own order exercise rejected it.
- **Two letter hints displayed badly.** The alphabet grid cuts each `pr` at the first hyphen, so Y showed only "ÜP" and ß showed "ess".
- **R hint.** "err" is ambiguous for American readers.
- **Two over-simplified rules** about kein/keine with mögen.
- **Two continuity clashes:** Frau Müller's job, and Ali's cooking.
- **A few smaller issues:** one duplicated phrase, one British gloss and one mistranslation.

Headwords: no headword appears twice in A1, and no A1 headword is a headword in de-en A2–C1, so task 1 needed no replacements. "Neda" does not occur.

`python3 tools/validate.py content/de-en/A1/*.json` prints OK for all 11 files. `python3 tools/audit.py` reports no findings for de-en A1, and the audit checked that every alt uses exactly the same words.

## Changes

| # | File | JSON path | Old → New | Reason |
|---|---|---|---|---|
| 1 | u00.json | letters[17].pr | err → air | American readers say "err" as /ɜr/ (like "her"); the German letter name is [ɛr], as in "air" |
| 2 | u00.json | letters[24].pr | ÜP-see-lon → ÜP·see·lon | the alphabet grid shows pr only up to the first hyphen, so the tile read just "ÜP"; middle dots keep the syllables visible |
| 3 | u00.json | letters[29].pr | ess-TSET (a sharp 's') → ess·TSET (a sharp 's') | the alphabet grid cut the hyphenated hint to "ess", which looks like the name of S; middle dot keeps the full name ess-tset visible |
| 4 | u01.json | dialogue.title | Im Deutschkurs / In German class → Freut mich! / Nice to meet you! | continuity: "Im Deutschkurs" casts Frau Müller as the German teacher, but u07 says she works at the hospital (where Reza also works); the neutral title removes the clash and names the key phrase of the dialogue |
| 5 | u02.json | grammar[1].exercises[7].alts | (none) → In Köln wohnt Maryam. | `t` = "Maryam wohnt in Köln."; another natural order of the same words (verb still second) would have been marked wrong |
| 6 | u02.json | sentences[2].alts | (none) → In Hamburg wohnt Sara. | `t` = "Sara wohnt in Hamburg."; another natural order of the same words (verb still second) would have been marked wrong |
| 7 | u03.json | sentences[4].alts | (none) → In Köln wohnen wir. | `t` = "Wir wohnen in Köln."; another natural order of the same words (verb still second) would have been marked wrong |
| 8 | u04.json | grammar[0].explain | "Tip: after **haben** and **möchte**, a der-noun changes: Ich möchte **einen** Apfel." → "Tip: after **haben**, **möchte** and **mag**, a der-noun changes: Ich möchte **einen** Apfel. Ich mag **keinen** Käse." | mögen also takes the accusative; without this, learners build *Ich mag kein Käse* from the g02 rule |
| 9 | u04.json | grammar[1].explain | "To say you don't like something, use **kein** / **keine**: Ich mag **keine** Bananen." → "To say you don't like a kind of food, you can use **kein** / **keine** (with der-nouns **keinen**): Ich mag **keine** Bananen. Ich mag **keinen** Reis." | over-simplified: "use kein/keine" is wrong for der-nouns (keinen) and for definite things (Ich mag den Salat nicht) |
| 10 | u04.json | dialogue.lines[8].s | Here you are. Enjoy your meal! → You're welcome. Enjoy your meal! | "Bitte schön" here answers Maryam's "Danke!", so it means "You're welcome", not "Here you are" |
| 11 | u05.json | grammar[1].exercises[4].answer | es → es | das | "Das ist im Schlafzimmer." is also correct, natural German |
| 12 | u05.json | grammar[1].exercises[6].alts | (none) → In der Küche ist der Tisch. | `t` = "Der Tisch ist in der Küche."; another natural order of the same words (verb still second) would have been marked wrong |
| 13 | u05.json | sentences[1].alts | (none) → In der Küche gibt es einen Tisch. | `t` = "Es gibt einen Tisch in der Küche."; another natural order of the same words (verb still second) would have been marked wrong |
| 14 | u05.json | sentences[4].alts | (none) → Im Wohnzimmer ist das Sofa. | `t` = "Das Sofa ist im Wohnzimmer."; another natural order of the same words (verb still second) would have been marked wrong |
| 15 | u05.json | sentences[6].alts | (none) → Hier ist die Lampe. | `t` = "Die Lampe ist hier."; another natural order of the same words (verb still second) would have been marked wrong |
| 16 | u06.json | grammar[1].explain | added after the first example: "(In the table, **ihr** is *you* for two or more friends or family members, and **sie** is *they*.)" | the table introduces ihr and sie (they) for the first time in the level without saying what they mean |
| 17 | u06.json | grammar[1].exercises[6].alts | (none) → Um sechs Uhr stehe ich auf. | `t` = "Ich stehe um sechs Uhr auf."; the unit itself teaches this order as correct ("Um sechs Uhr stehe ich auf.") |
| 18 | u06.json | grammar[1].exercises[7].alts | (none) → Wir sehen am Abend fern. | `t` = "Am Abend sehen wir fern."; equally correct order (it is u06 sentences[6] word for word) |
| 19 | u06.json | sentences[1].alts | (none) → Um sieben Uhr stehe ich auf. | `t` = "Ich stehe um sieben Uhr auf."; another natural order of the same words (verb still second) would have been marked wrong |
| 20 | u06.json | sentences[2].alts | (none) → Ich trinke am Morgen Tee. | `t` = "Am Morgen trinke ich Tee."; another natural order of the same words (verb still second) would have been marked wrong |
| 21 | u06.json | sentences[3].alts | (none) → Jeden Tag arbeitet Herr Schmidt. | `t` = "Herr Schmidt arbeitet jeden Tag."; another natural order of the same words (verb still second) would have been marked wrong |
| 22 | u06.json | sentences[4].alts | (none) → Um halb eins ist das Mittagessen. | `t` = "Das Mittagessen ist um halb eins."; another natural order of the same words (verb still second) would have been marked wrong |
| 23 | u06.json | sentences[5].alts | (none) → Ali ruft am Abend Sara an. | Ali ruft Sara am Abend an. | `t` = "Am Abend ruft Ali Sara an."; another natural order of the same words (verb still second) would have been marked wrong |
| 24 | u06.json | sentences[6].alts | (none) → Am Abend sehen wir fern. | `t` = "Wir sehen am Abend fern."; another natural order of the same words (verb still second) would have been marked wrong |
| 25 | u07.json | grammar[0].exercises[5].alts | (none) → Bitte gehen Sie nach rechts. | Gehen Sie nach rechts, bitte. | `t` = "Gehen Sie bitte nach rechts."; bitte can also come first or last |
| 26 | u07.json | grammar[1].exercises[6].alts | (none) → In der Goethestraße wohne ich. | `t` = "Ich wohne in der Goethestraße."; another natural order of the same words (verb still second) would have been marked wrong |
| 27 | u07.json | sentences[2].alts | (none) → Links ist die Apotheke. | `t` = "Die Apotheke ist links."; another natural order of the same words (verb still second) would have been marked wrong (the reading itself says "Rechts ist ein Supermarkt") |
| 28 | u07.json | sentences[3].alts | (none) → Um acht Uhr kommt der Bus. | `t` = "Der Bus kommt um acht Uhr."; another natural order of the same words (verb still second) would have been marked wrong |
| 29 | u08.json | words[0].s | pants, trousers → pants | American English only ("trousers" is British) |
| 30 | u08.json | phrases[0] | Was möchten Sie? / What would you like? → Ich suche einen Mantel. / I'm looking for a coat. | exact duplicate of u04 p04 "Was möchten Sie?"; replaced with a shopping chunk that practices this unit's accusative (einen) |
| 31 | u08.json | grammar[0].exercises[7].alts | (none) → Den Schal nehme ich. | `t` = "Ich nehme den Schal."; very common shop order ("Den nehme ich.") |
| 32 | u08.json | sentences[2].alts | (none) → Den Mantel nehme ich. | `t` = "Ich nehme den Mantel."; very common shop order |
| 33 | u09.json | words[11].s | fall, autumn → fall; autumn | American "fall" first; semicolon like the other glosses |
| 34 | u09.json | grammar[1].exercises[3].answer | Sommer → Sommer | der Sommer | "… ist der Sommer." is also correct |
| 35 | u09.json | grammar[0].exercises[6].alts | (none) → Es ist heute kalt. | `t` = "Heute ist es kalt."; another natural order of the same words (verb still second) would have been marked wrong |
| 36 | u09.json | grammar[1].exercises[6].alts | (none) → Es ist im Winter kalt. | `t` = "Im Winter ist es kalt."; another natural order of the same words (verb still second) would have been marked wrong |
| 37 | u09.json | phrases[6].alts | (none) → Im Mai habe ich Geburtstag. | `t` = "Ich habe im Mai Geburtstag."; another natural order of the same words (verb still second) would have been marked wrong |
| 38 | u09.json | sentences[1].alts | (none) → Es ist heute sonnig und warm. | `t` = "Heute ist es sonnig und warm."; another natural order of the same words (verb still second) would have been marked wrong |
| 39 | u09.json | sentences[2].alts | (none) → Es ist im Januar kalt. | `t` = "Im Januar ist es kalt."; another natural order of the same words (verb still second) would have been marked wrong |
| 40 | u09.json | sentences[3].alts | (none) → Es ist im August heiß. | `t` = "Im August ist es heiß."; another natural order of the same words (verb still second) would have been marked wrong |
| 41 | u09.json | sentences[4].alts | (none) → Im April habe ich Geburtstag. | `t` = "Ich habe im April Geburtstag."; another natural order of the same words (verb still second) would have been marked wrong |
| 42 | u09.json | sentences[7].alts | (none) → Es regnet im Herbst. | `t` = "Im Herbst regnet es."; another natural order of the same words (verb still second) would have been marked wrong |
| 43 | u10.json | grammar[1].examples[3] | Kann Ali kochen? – Nein, leider nicht. / Can Ali cook? – No, unfortunately not. → Kann Lukas kochen? – Nein, leider nicht. / Can Lukas cook? – No, unfortunately not. | continuity: the u10 reading has the Ahmadi family (Ali included) cooking together, so "Kann Ali kochen? – Nein" clashes; Lukas has no cooking info anywhere |
| 44 | u10.json | phrases[1].alts | (none) → Fußball spiele ich gern. | `t` = "Ich spiele gern Fußball."; another natural order of the same words (verb still second) would have been marked wrong |
| 45 | u10.json | sentences[0].alts | (none) → Musik höre ich gern. | `t` = "Ich höre gern Musik."; another natural order of the same words (verb still second) would have been marked wrong |
| 46 | u10.json | sentences[2].alts | (none) → Kochen ist mein Hobby. | `t` = "Mein Hobby ist Kochen."; another natural order of the same words (verb still second) would have been marked wrong |
| 47 | u10.json | sentences[3].alts | (none) → Am Abend spielen wir Fußball. | `t` = "Wir spielen am Abend Fußball."; another natural order of the same words (verb still second) would have been marked wrong |

**Changes by category:**
- pr: 3 (#1–3)
- target text: 3 (#4 dialogue title, #30 duplicate phrase replaced, #43 grammar example)
- translation: 3 (#10, #29, #33)
- grammar explanation: 3 (#8, #9, #16)
- exercises: 11. Two answer lists (#11, #34) and 9 new `alts` on grammar `order` exercises.
- `alts` on sentences and phrases (the app uses these as order tasks): 24
- emoji: 0

In total there are 47 logged edits.

## Noticed but not changed
- **Dialogue lines have no `alts`.** The app also builds order tasks from dialogue lines of 8 words or fewer, for example u06 "Ich stehe um sechs Uhr auf. Dann frühstücke ich.". These lines are multi-sentence. The task plays the line's audio, so the intended order is given. Not changed.
- **Marked orders were not added as `alts`.** Examples: "Aus dem Iran bin ich.", "Eine Tochter habe ich.", "Gut kochen kann ich.", "Bananen mag ich keine.". These are contrastive or colloquial, not a neutral alternative.
- **u00 has no final-devoicing rule** (Hund, Bad end in [t]) and no word-initial ch (Chef, China). These are curriculum gaps, not errors. Adding new sound items would restructure the unit.
- **u00 Q example "die Qualle" 🪼.** This emoji is Unicode 15 and may not render on old phones. The emoji itself is correct.
- **u03 g01 mein/meine rule** is the nominative only (*Ich habe meinen Bruder* comes later). The g02 tip already flags the change with einen, so this is acceptable at A1.
- **u05 grammar[0].exercises[5] "Es ___ zwei Zimmer."** "Es sind zwei Zimmer." is marginally grammatical but not natural here, so only "gibt" is accepted.
- **u07 dialogue.** Ali asks Frau Müller the way in Hamburg (u07 reading), while his family lives in Cologne. This reads as a visit, not a contradiction.
- **u09 dialogue `s`** "Hi Reza!" / "Hi Anna!" has no comma. It is acceptable in American English.
- **u09 plurals "die Sonnen", "die Frühlinge"** are rare but correct.

## TTS-risky `t` texts (for central handling, unchanged)
- **Slash "/":**
  - u00 sounds "eu / äu", "sp / st", "w / v / z"
  - u06 p05 "am Morgen / am Abend"
  - u07 p04 "Gehen Sie nach links / nach rechts.", p06 "hier / dort"
  - u09 grammar[0].table[1] "warm / heiß", "Es ist warm. / Es ist heiß."
  - table cells "er / sie / es", "sie / Sie"
- **Ellipsis "…":**
  - grammar titles in u01 ("sein: ich bin, du bist …"), u03 ("haben: ich habe, du hast …") and u05 ("Wo ist …? – Er, sie, es")
  - u06 table cells "stehe … auf"
  - u07 table cells "Gehen Sie …!"
- **Plus "+":** u05 grammar[0].title "es gibt + einen, eine, ein"
- **Arrow "→":** u07 grammar[0].exercises[4] "Sie kommen. → ___ Sie bitte!"
- **Middle dot "·":** u09 grammar[1].table month rows. The new u00 `pr` middle dots are not voiced, because `pr` is not read aloud.
- **Digits and clock times:**
  - u02 grammar[0].title "Zahlen 0–20 und Alter" and its table cells "0 null" … "20 zwanzig"
  - u06 table "7:00", "7:30", "3:15", "3:45", "12:00"
  - u06 exercises "7:30 – Es ist ___." etc.
