# Critical review, pass 4: de-en B1 (German explained in English), u01–u10

I checked every item in all 10 units: titles, goals, words (t, s, pl, ex, emoji), phrases, dialogues, grammar (titles, explanations, tables, examples, exercises), readings with their questions, and sentences. I also read the B1 curriculum, the two earlier reviews (`review/de-en-B1-new.md`, `review/de-en-B1-pass3.md`) and the app code that turns content into exercises (`docs/js/lesson.js`), so I could see how each field is actually used.

## 1. Verdict

This is a strong level. The German is correct, natural and idiomatic throughout. I found no wrong sentence, no wrong translation, no wrong answer key and no reading question that the text does not answer. The grammar explanations are accurate and well pitched for B1. They connect explicitly to A2 ("you already know …") and anticipate B2, and they compare with English where that helps. The themes suit an Iranian family well: Nouruz, Isfahan and Tabriz biographies, registering at the Bürgeramt, health insurance and Pfand. The two real weaknesses are not in the German. First, the app turns short sentences and phrases into word-order exercises, but unlike A1 and A2 the level had no `alts` there, so learners were marked wrong for correct German. Second, the recurring characters contradict each other from unit to unit. A smaller gap is that the level never teaches the Plusquamperfekt, which B1 learners need and which the level's own readings already use.

## 2. Fixed

66 changes in all 10 files. `tools/validate.py` prints OK for all of them. `tools/audit.py` shows only the known false alarm for de-en B1: u05 *die öffentlichen Verkehrsmittel*, an adjective + noun headword.

| Category | Changes |
|---|---|
| `order` alts: short sentences, phrases and dialogue lines | 59 items, 67 alternative orders |
| `order` alts: grammar exercises | 4 items, 5 alternative orders |
| Emoji/picture | 2 |
| Grammar explanation | 1 |

**Why the alts were missing.** `lesson.js` uses every sentence, phrase and dialogue line of 8 words or fewer as a word-order exercise (`orderStep`), and it accepts only `t` plus `alts`. de-en A1 and A2 carry `alts` on these items (A2 on nearly every sentence). B1 had none on any of them, so for example *Wir zogen im Jahr 2012 nach Deutschland.* was marked wrong for *Im Jahr 2012 zogen wir nach Deutschland.* I added only alternatives that are fully natural and unmarked, made of exactly the same tiles. The fix script asserted the same tiles for every alt. I did not add stylistically marked orders, such as fronting a bare *es*/*das* or the participle.

| Unit | Path | Before → After | Reason |
|---|---|---|---|
| u01 | sentences[0] | (none) → + In einer kleinen Stadt bin ich aufgewachsen. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u01 | sentences[1] | (none) → + Ich spielte als Kind oft im Garten. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u01 | sentences[2] | (none) → + Wir zogen im Jahr 2012 nach Deutschland. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u01 | sentences[4] | (none) → + Ich verließ meine Heimat, als ich zwanzig war. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u01 | sentences[7] | (none) → + Wir hatten damals noch kein Handy. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u01 | phrases[2] | (none) → + Alles war damals ganz anders. | Natural alternative order would be marked wrong (short phrases are used as word-order exercises). |
| u01 | phrases[3] | (none) → + Ich erinnere mich noch gut daran. | Natural alternative order would be marked wrong (short phrases are used as word-order exercises). |
| u01 | phrases[5] | (none) → + Ich bin mit achtzehn nach Deutschland gekommen. | Natural alternative order would be marked wrong (short phrases are used as word-order exercises). |
| u02 | sentences[0] | (none) → + Die Stellenanzeige habe ich im Internet gefunden. / Im Internet habe ich die Stellenanzeige gefunden. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u02 | sentences[3] | (none) → + Für die Bestellungen bin ich zuständig. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u02 | sentences[5] | (none) → + Heute habe ich keine Zeit, Überstunden zu machen. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u02 | sentences[6] | (none) → + Ich habe morgen um neun Uhr eine Besprechung. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u02 | sentences[7] | (none) → + Heute mache ich früher Feierabend. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u02 | phrases[1] | (none) → + In diesem Bereich habe ich drei Jahre Berufserfahrung. | Natural alternative order would be marked wrong (short phrases are used as word-order exercises). |
| u02 | phrases[2] | (none) → + Im Team arbeite ich gern. | Natural alternative order would be marked wrong (short phrases are used as word-order exercises). |
| u03 | sentences[1] | (none) → + Zuerst wird beim Hausarzt der Blutdruck gemessen. / Der Blutdruck wird beim Hausarzt zuerst gemessen. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u03 | sentences[2] | (none) → + Gestern wurde mein Bruder am Knie operiert. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u03 | sentences[3] | (none) → + Leider hat das Medikament starke Nebenwirkungen. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u03 | sentences[6] | (none) → + Viele Patienten saßen im Wartezimmer. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u03 | sentences[7] | (none) → + Von der Krankenkasse werden die Kosten übernommen. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u03 | phrases[6] | (none) → + Für meinen Arbeitgeber brauche ich eine Krankschreibung. | Natural alternative order would be marked wrong (short phrases are used as word-order exercises). |
| u04 | sentences[0] | (none) → + Ich hebe Geld am Automaten ab. / Am Automaten hebe ich Geld ab. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u04 | sentences[2] | (none) → + Für ein neues Auto sparen wir. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u04 | phrases[0] | (none) → + Ich kann mir das nicht leisten. | Natural alternative order would be marked wrong (short phrases are used as word-order exercises). |
| u04 | phrases[3] | (none) → + Diese Jacke würde ich gern umtauschen. | Natural alternative order would be marked wrong (short phrases are used as word-order exercises). |
| u04 | phrases[4] | (none) → + Haben Sie noch den Kassenbon? | Natural alternative order would be marked wrong (short phrases are used as word-order exercises). |
| u04 | phrases[5] | (none) → + Mir ist das zu teuer. | Natural alternative order would be marked wrong (short phrases are used as word-order exercises). |
| u04 | phrases[6] | (none) → + Ich würde an deiner Stelle noch warten. | Natural alternative order would be marked wrong (short phrases are used as word-order exercises). |
| u04 | grammar[0].exercises[7] | (none) → + So viel Geld solltest du nicht ausgeben. | Natural alternative order would be marked wrong. |
| u04 | words[w04].emoji | 💶 → "" | Picture questions: bar bezahlen (💶) and Bargeld (💵) showed near-identical banknotes, so either could appear as the other one's distractor. Now only Bargeld has a picture, and it shows euro notes (as in Germany). |
| u04 | words[w10].emoji | 💵 → 💶 | Picture questions: bar bezahlen (💶) and Bargeld (💵) showed near-identical banknotes, so either could appear as the other one's distractor. Now only Bargeld has a picture, and it shows euro notes (as in Germany). |
| u05 | sentences[1] | (none) → + Schalte bitte das Licht aus! / Schalte das Licht bitte aus! | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u05 | sentences[6] | (none) → + Ich bringe die Pfandflaschen in den Supermarkt zurück. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u05 | phrases[2] | (none) → + Mach das Licht bitte aus! / Bitte mach das Licht aus! | Natural alternative order would be marked wrong (short phrases are used as word-order exercises). |
| u05 | phrases[4] | (none) → + Die Pfandflaschen bringe ich zurück. | Natural alternative order would be marked wrong (short phrases are used as word-order exercises). |
| u06 | sentences[0] | (none) → + Die Nachrichten lese ich meistens auf dem Handy. / Meistens lese ich die Nachrichten auf dem Handy. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u06 | sentences[1] | (none) → + Leider ist die Wettervorhersage für morgen schlecht. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u06 | sentences[3] | (none) → + Den Präsidenten hat der Journalist interviewt. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u06 | sentences[5] | (none) → + Beim Essen sprechen wir oft über aktuelle Themen. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u06 | sentences[6] | (none) → + Mir fällt der Name des Kollegen nicht ein. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u06 | phrases[5] | (none) → + Ich kann das kaum glauben. | Natural alternative order would be marked wrong (short phrases are used as word-order exercises). |
| u06 | grammar[1].exercises[7] | Den Kunden kenne ich schon lange. → + Schon lange kenne ich den Kunden. | Natural alternative order would be marked wrong. |
| u06 | grammar[1].explain | foreign words ending in -ent, -ant … → foreign words for **people** ending in -ent, -ant … | Over-generalization: masculine -ent/-at nouns that are not people (der Moment, der Kontinent, der Salat) are not weak. |
| u07 | sentences[1] | (none) → + Wir besuchen bei schlechtem Wetter lieber ein Museum. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u07 | sentences[3] | (none) → + Durch die ganze Altstadt sind wir gelaufen. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u07 | sentences[4] | (none) → + Es gibt gegenüber vom Hotel einen kleinen Supermarkt. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u07 | sentences[6] | (none) → + Ich esse im Urlaub gern frischen Fisch. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u07 | sentences[7] | (none) → + In der Altstadt haben wir uns verlaufen. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u07 | phrases[7] | (none) → + Auf jeden Fall lohnt sich das. | Natural alternative order would be marked wrong (short phrases are used as word-order exercises). |
| u07 | grammar[0].exercises[7] | Wir fahren bei gutem Wetter an die Küste. → + An die Küste fahren wir bei gutem Wetter. | Natural alternative order would be marked wrong. |
| u08 | sentences[0] | (none) → + Mit meiner Schwiegermutter verstehe ich mich sehr gut. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u08 | phrases[1] | (none) → + Grüß von mir deine Eltern! | Natural alternative order would be marked wrong (short phrases are used as word-order exercises). |
| u08 | phrases[5] | (none) → + Lass uns darüber in Ruhe reden. | Natural alternative order would be marked wrong (short phrases are used as word-order exercises). |
| u08 | dialogue.lines[11] | (none) → + Keine Sorge, sie erfährt nichts von mir. | Natural alternative order would be marked wrong (short dialogue lines are used as word-order exercises). |
| u09 | sentences[0] | (none) → + Beim Bürgeramt muss ich einen neuen Ausweis beantragen. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u09 | sentences[2] | (none) → + Sie können das Formular auch online ausfüllen. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u09 | sentences[4] | (none) → + Die Bescheinigung schicke ich Ihnen per Post. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u09 | sentences[5] | (none) → + Endlich haben wir eine Entscheidung getroffen. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u09 | sentences[6] | (none) → + Leider ist mein Reisepass nicht mehr gültig. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u09 | phrases[6] | (none) → + Ich bin dafür leider nicht zuständig. / Leider bin ich dafür nicht zuständig. | Natural alternative order would be marked wrong (short phrases are used as word-order exercises). |
| u09 | grammar[1].exercises[7] | Morgen fahren wir mit dem Zug nach Berlin. → + Mit dem Zug fahren wir morgen nach Berlin. / Nach Berlin fahren wir morgen mit dem Zug. | Natural alternative order would be marked wrong. |
| u10 | sentences[0] | (none) → + Jedes Jahr findet das Stadtfest im Juni statt. / Im Juni findet das Stadtfest jedes Jahr statt. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u10 | sentences[2] | (none) → + Für die Feier habe ich nichts Besonderes vorbereitet. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u10 | sentences[3] | (none) → + Der Eintritt ins Museum ist sonntags kostenlos. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u10 | sentences[4] | (none) → + Wir besuchen zu Nouruz alle unsere Verwandten. | Natural alternative order would be marked wrong (short sentences are used as word-order exercises). |
| u10 | phrases[5] | (none) → + Ich lasse mir das nicht entgehen. | Natural alternative order would be marked wrong (short phrases are used as word-order exercises). |

## 3. Remaining issues (need a decision or bigger work)

**High**

1. **The recurring characters contradict each other.** The pass-3 review saw this, but it now matters more because the readings form a life story the family follows:
   - **Reza** came to Aachen in 2009 on a scholarship and later worked as an engineer (u01). In u10 he "came to Köln a year ago and knew nobody".
   - **Amir** has two years in Köln after six years as an electrician in Iran (u02). In u09 he "came to Germany a week ago".
   - **Maryam** is a grandmother born 1948 (u01), a warehouse worker "Frau Ahmadi" (u03), a 41-year-old doctor (u04) and Ali's wife in Hamburg (u08).

   *Suggestion:* agree on a short cast sheet for all de-en levels. Then rename only the readings that clash. For example, u10 reading: Reza → a new arrival such as *Lukas' Kollege Karim* or *Mina's cousin*. u09 dialogue: Amir → *Herr Karimi's brother* or another name. u01: *meine Großmutter Maryam* → *meine Großmutter Fatemeh*. Each fix is a find-and-replace in one reading or dialogue plus its questions.

2. **The Plusquamperfekt is never taught.** B1 standards (Goethe/telc B1) include it. In this course it appears only at B2 u07, as a side note to *nachdem*. Meanwhile the u10 reading already uses it (reading[5] *Jemand hatte … gedeckt*). *Suggestion:* add a short paragraph and one table row to u01 g01, which covers past-tense storytelling: *hatte/war + Partizip II* = "had done", with *Als ich ankam, hatte der Kurs schon angefangen*. Then add one `choice` exercise in place of one of the current eight. This changes the level's grammar scope, so it needs sign-off.

3. **Word-order checking is fragile for German.** German allows almost any constituent in position 1, so `alts` can never be complete. Long dialogue lines that contain two sentences are also used as order items. *Suggestion (app):* for `de`, accept an answer whenever it matches `t` or an alt, **or** it differs from `t` only by swapping the first constituent with the subject. A simpler option is to use only items with 7 words or fewer and one clause.

**Medium**

4. **u04 g02 examples[3]** *wenn du im Lotto gewinnen würdest*: gambling is haram for many religious Iranian families. *Suggestion:* *wenn du plötzlich viel Geld erben würdest* (inherit) or *wenn du eine Million Euro hättest*.
5. **"Herr/Frau Wagner"** is a doctor (u03), a neighbor (u05), an interviewer (u02), a Bürgeramt official (u09) and a retiree (u04, u06). The curriculum allows it, but in one level it reads like the same person. *Suggestion:* add a second set of German surnames (e.g. Frau Becker, Herr Schulz) to the curriculum name list.
6. **TTS of `dem Buchstaben S`** (u10 dialogue[5]) and **`Haft-Sin-Tisch`** (u10 reading[5]): the Piper voice may read "S" and the hyphenated loan word oddly. *Suggestion:* listen to the generated audio. If needed, write *mit dem Buchstaben „Sin"* or *Haft-Sin* only in `s`.

**Low (English wording in `s`; correct but could be more natural)**

7. u02 g02 X[2] "I have to work longer today" → "I have to work late today".
8. u06 w09 ex "published a conversation with the minister" → "published an interview with the minister" (*Gespräch* in the press).
9. u10 sentences[6] "Do you still have some?" → "Do you have any left?"
10. u04 reading[3] "If there was any money left" → "If there were any money left" (more formal American usage; optional).

## 4. Improvement ideas (prioritized)

1. **Recycle vocabulary across units.** A rough stem check shows that only about 25 of 154 B1 headwords appear again in a later B1 unit. Make each reading and dialogue reuse 3–4 headwords from earlier units on purpose. For example, u09 (Behörden) can reuse *Krankenversicherung* and *Arbeitsvertrag*, and u10 can reuse *Erinnerung* and *Heimat*. Each grammar block can also contain one sentence that reviews the previous unit's grammar.
2. **Raise exercise difficulty to B1.** Almost all `type` items fill one gap with one word, and most `choice` items have three options with an obviously wrong form, such as *kommte* or *Jonass*. Add items that make the learner transform a sentence while staying inside the schema:
   - active → passive: *Man misst den Blutdruck → Der Blutdruck ___ gemessen.*
   - real → unreal condition
   - two sentences → one relative clause, using `order` items with the relative pronoun as a tile
3. **Make the readings more varied and longer.** Every reading has 10–12 sentences with five 3-option questions about one detail each. Add one inference or main-idea question per reading, such as *Warum schreibt Mina den Brief?*. Add one text type that the family will meet in real life: a Bürgeramt letter, a Hausordnung notice, a doctor's instructions or a job ad with abbreviations explained.
4. **Close the gap to B2.** B2 starts with *Passiv mit Modalverben* and *Konjunktiv II Vergangenheit*. B1 u03 and u04 could each end their explanation with one "coming at B2" line (*muss operiert werden*, *hätte gekauft*). Learners then meet these forms as a preview and not as a shock.
5. **Use the support language more for Persian and Turkish speakers.** The explanations compare only with English. A few short notes would help this family:
   - Persian, like German, puts the verb at the end of clauses: a helpful hook for *weil/dass/obwohl*.
   - Turkish also has no articles but marks case with endings: a hook for adjective endings without an article.

   These would fit well in u02 g01, u05 g01 and u07 g01.
6. **Make the dialogues more interactive.** Most dialogues are question-answer interviews (u01, u02, u09). Add at least one negotiation or complaint at B1 level, such as returning a product in u04 or disagreeing with a landlord about Nebenkosten. The useful phrases for this (*Ich bin damit nicht einverstanden*, *Könnten wir uns darauf einigen, dass …*) are currently missing.
7. **Practise pronunciation explicitly.** de-en has no `pr`. The level already gives stress hints in `s` (*Kredit*, *Kassenbon*, *Journalist*). Extend this to the few B1 words Persian speakers typically misstress, such as *Behörde*, *Bescheinigung* and *Formular*, or add one "sounds" note per unit.

## 5. Pass 5 (Nov 2026)

Brief: `review/BRIEF_FIX5.md`. All edits made with Python (json.load → change → json.dump). `tools/validate.py content/de-en/B1/*.json`: all 10 OK. `tools/audit.py`: de-en B1 shows only the known false alarm (u05 *die öffentlichen Verkehrsmittel*, adjective + noun headword). `tools/repeats.py de-en`: no B1 findings (the 2 reported repeats are duplicates inside C1, not in this slice). No headwords or phrases were added, so no new repeats are possible.

### Counts

| Category | Count |
|---|---|
| New grammar point: Plusquamperfekt (u01 g03: explanation, 8-row table, 5 examples, 8 exercises) | 1 |
| Production items: rewrite (`type` with `task` + `cue`) | 21 (one per grammar point, incl. g03) |
| Production items: function (`choice` with `task` + `cue`, three whole-sentence options) | 21 (one per grammar point, incl. g03) |
| `why` on grammar `choice`/`type` exercises | 142 (every choice/type item of the level: 95 existing + 5 new in g03 + 42 production items) |
| Inference questions in readings | 15 (2 in u01, u02, u04, u09, u10; 1 in u03, u05, u06, u07, u08) |
| `sym` marks | 7 |
| ae/oe/ue/ss spellings added to `answer` lists | 9 |
| Other fixes (report items, names, B2 previews, support-language hooks, stress hints, TTS) | 19 |

Each of the 20 existing grammar points still has 8 exercises: 2 were replaced (the most repetitive ones: a second item testing the same form, or a third order item). Every point now has one rewrite and one function item.

### Report items

| # | Issue (section 3 / 4) | Status | What I did |
|---|---|---|---|
| 3.1 | Recurring characters contradict each other | done before | Course-wide pass 5a (cast sheet). I kept it and followed `CAST.md` in all new items (Reza in Aachen, Mina 12, Lena journalist, Frau Fischer at the Bürgeramt, Karim the newcomer). |
| 3.2 | Plusquamperfekt never taught | **done** | New **u01 g03** "Ich hatte gegessen, ich war gegangen". It comes after Präteritum and als/wenn in the "life stories" unit, so it is taught before the u10 reading that uses it. Explanation: *had + participle*, hatte vs war (same choice as in the Perfekt), explicit comparison of Perfekt, Präteritum and Plusquamperfekt, signals *schon, vorher, noch nie, bevor* (and a pointer to *nachdem* at B2), verb at the end in subordinate clauses. Table: the three past tenses side by side + full conjugation. 5 examples (one ties to Reza's arrival in Aachen). 8 exercises: 2 choice, 3 type, 1 order, 1 rewrite, 1 function. New u01 goal: "Say what had happened before with the Plusquamperfekt". |
| 3.3 | Word-order checking for German is fragile | not done (app) | Needs the app; see app requests. |
| 3.4 | u04 g02 lottery example | done | *wenn du im Lotto gewinnen würdest* → *wenn du plötzlich viel Geld hättest* (also models *hätte* in the wenn-clause, as the explanation recommends). |
| 3.5 | Herr/Frau Wagner in too many roles | done | The course-wide pass fixed the clashing roles. The remaining Wagner one-liners that did not fit the cast sheet: u02 g01 example and exercise (colleague, head of department) → **Herr Koch**; u02 g02 example and u07 g02 X0 (office worker) → **Frau Peters**. Herr Wagner (neighbor, u06) and Frau Wagner (house rules, u05) stay. |
| 3.6 | TTS of *dem Buchstaben S* and *Haft-Sin-Tisch* (u10) | done | Dialogue[5]: *… mit sieben Dingen. Auf Persisch beginnen ihre Namen alle mit demselben Buchstaben.* Reading[5]: *Jemand hatte einen wunderschönen Tisch mit sieben traditionellen Dingen gedeckt …* ("Haft-Sin" and "S" now only in `s`). The Plusquamperfekt of the reading is kept. |
| 3.7 | u02 g02 X2 "work longer" | done | → "I have to work late today." |
| 3.8 | u06 w09 ex "conversation" | done | → "published an interview with the minister". |
| 3.9 | u10 sentences[6] "Do you still have some?" | done | → "Do you have any left?" |
| 3.10 | u04 reading[3] "If there was" | done | → "If there were any money left …" |
| 4.1 | Vocabulary recycling | partly | Every new item reuses earlier B1 words (Heimat, Studium, Arbeitsvertrag, Stellenanzeige, Blutdruck, Röntgenbild, Facharzt, Schulden, bar bezahlen, Heizung, Energie sparen, Praktikant, Leser, Tagebuch, Unterlagen, Eintritt …). Rewriting the readings for more recycling was not done: it would change working texts and their questions. |
| 4.2 | Raise exercise difficulty (transformations) | done | The 21 rewrite items are exactly these transformations: Perfekt → Präteritum, two sentences → als-clause, → relative clause, → zu-infinitive, active → passive, Präteritum → Perfekt passive, imperative → advice with sollte, real → unreal condition, obwohl → trotzdem, → um … zu, von → genitive, → dative weak noun, singular → plural without article, am … entlang → den … entlang, → dative reflexive, dürfen → lassen, simple verb → noun-verb combination, nouns → two pronouns, jemanden → niemanden, two words → compound, Perfekt → Plusquamperfekt. |
| 4.3 | Readings: inference questions, more text types | partly | 15 inference questions added (task 4). A new real-life text type (Bürgeramt letter, Hausordnung, job ad) was not added: it would replace a reading and needs a content decision. |
| 4.4 | "Coming at B2" previews | done | u03 g02: passive with modal verbs (*Das Formular muss noch unterschrieben werden*); u04 g02: unreal conditions in the past (*Wenn ich Zeit gehabt hätte, hätte ich dich besucht*). |
| 4.5 | Hooks for Persian and Turkish speakers | done | u02 g01 (verb at the end, like a Persian *ke*-clause), u05 g01 (obwohl ≈ Persian *bā inke*, verb at the end), u07 g01 (Turkish shows case with noun endings; German adjectives without an article do the same job). |
| 4.6 | A negotiation or complaint dialogue | not done | It needs a new dialogue (and new phrases such as *Ich bin damit nicht einverstanden*), not a fix. Suggestion for a later content pass: u04 dialogue → returning a faulty phone, or u08 → disagreeing with a landlord about Nebenkosten. |
| 4.7 | Stress hints | done | u09: *die Behörde* (be-HÖR-de), *das Formular* (for-moo-LAR), *die Bescheinigung* (be-SHY-nee-goong) in `s`, in the style of the existing *kre-DIT* hint. |

### Production items (one rewrite + one function per grammar point)

| Unit | Point | Rewrite (cue → answer) | Function (cue → correct option) |
|---|---|---|---|
| u01 | g01 | *Mit achtzehn hat sie ihre Heimat verlassen.* → verließ | *Was hast du nach dem Studium gemacht?* → *Ich fand …* |
| u01 | g02 | *Ich kam in Köln an. Es regnete stark.* → *Als ich in Köln ankam* | *Wann hast du mit dem Deutschkurs angefangen?* → *Als ich nach Deutschland kam, …* |
| u01 | g03 | *Der Unterricht hat schon angefangen.* → *Als ich ankam, hatte der Unterricht schon angefangen.* | *Warum bist du gestern so spät gekommen?* → *Ich hatte den Bus verpasst.* |
| u02 | g01 | *Ich habe einen Kollegen. Er spricht fünf Sprachen.* → *der fünf Sprachen spricht* | *Das ist die Chefin, der ich …* |
| u02 | g02 | *Ich will morgen meinen Arbeitsvertrag unterschreiben.* → *Ich habe vor, … zu unterschreiben* | *Es ist wichtig, die Stellenanzeige genau zu lesen.* |
| u03 | g01 | *Die Ärztin misst meinen Blutdruck.* → *Mein Blutdruck wird …* | *Es wird zum Facharzt geschickt.* |
| u03 | g02 | *Unser Sohn wurde … geimpft.* → *ist … geimpft worden* | *Ich bin krankgeschrieben worden.* |
| u04 | g01 | *Mach keine Schulden!* → *Du solltest keine Schulden machen.* | *An deiner Stelle würde ich öfter bar bezahlen.* |
| u04 | g02 | *Wenn ich genug Geld habe, fliege ich nach Isfahan.* → *Wenn ich genug Geld hätte* | *Ich würde gern mitkommen, wenn ich nicht so müde wäre.* |
| u05 | g01 | obwohl-sentence → *trotzdem fährt mein Nachbar …* (both orders accepted) | *Ja, denn der Bus ist mir zu voll.* |
| u05 | g02 | *… Wir wollen Energie sparen.* → *um Energie zu sparen* | *Wozu trennt ihr den Müll?* → *Damit die Umwelt sauber bleibt.* |
| u06 | g01 | *Die Meinung von den Lesern …* → *der Leser* | *Wessen Handy ist das?* → *… meiner Schwester.* |
| u06 | g02 | *Der Kunde wartet schon lange.* → *Ich helfe dem Kunden, …* | *Mit einem jungen Praktikanten aus Spanien.* |
| u07 | g01 | *ein großes Zimmer* → *große Zimmer* | *Wir hatten fast immer schönes Wetter.* |
| u07 | g02 | *am Rhein entlang* → *den Rhein entlang* | *Gleich gegenüber, auf der anderen Straßenseite.* |
| u08 | g01 | *Mina putzt sich die Zähne.* → *Ich putze mir …* | *Ich wünsche mir ein neues Tagebuch.* |
| u08 | g02 | *Die Kinder dürfen heute länger aufbleiben.* → *Wir lassen die Kinder …* | *… reparieren lassen.* (not gelassen) |
| u09 | g01 | *Wir haben uns endlich entschieden.* → *eine Entscheidung getroffen* | *Nehmen Sie bitte Platz.* |
| u09 | g02 | *Ich gebe der Beamtin den Antrag.* → *ihn ihr* | *Ja, ich habe sie ihr gestern geschickt.* |
| u10 | g01 | *Ich habe heute jemanden getroffen.* → *niemanden* | *Nein, ich habe auch keine mehr.* |
| u10 | g02 | *eine Karte für den Eintritt* → *Eintrittskarte* | *Ja, sie ist waschbar.* |

Replaced exercises (each the more repetitive of two similar items): u01 g01 X1 (choice with a year in digits), X6 (order); g02 X4, X5 (second wenn / als choice); u02 g01 X3, X6; g02 X5 (second *zu* gap), X6 (order); u03 g01 X1, X2 (third and fourth werden form); g02 X2, X4; u04 g01 X4, X6; g02 X4, X6; u05 g01 X4 (second denn), X6 (order); g02 X0, X4; u06 g01 X3 (second *meines*), X6; g02 X0, X6 (third -en choice); u07 g01 X0, X3 (second *frisches*); g02 X3, X7 (second gegenüber); u08 g01 X4 (second *mir*), X7; g02 X4 (second Perfekt *lassen*), X7; u09 g01 X0, X5; g02 X2 (second *es mir/es ihm*), X5 (third order); u10 g01 X5, X6; g02 X1 (second article choice), X3.

### Inference questions

| Unit | Question | Answer (follows from) |
|---|---|---|
| u01 | *Warum ging Fatemeh nach Teheran?* | *Sie wollte Lehrerin werden.* (wanted to be a teacher → training in Tehran) |
| u01 | *Wie fanden die Kinder die Geschichten aus dem Tagebuch?* | *sehr spannend* (listened for hours) |
| u02 | *Worüber möchte Leila mit ihrer Chefin sprechen?* | *über die Überstunden* (*darüber* refers back) |
| u02 | *Wie fühlt sich Leila nach der ersten Woche?* | *Sie ist meistens zufrieden.* |
| u03 | *Was sollte man zu jedem Arztbesuch mitnehmen?* | *die Versichertenkarte* (it is read at every visit) |
| u04 | *Wer braucht das Geld eigentlich nicht?* | *Herr Lorenz* (has all he needs) |
| u04 | *Warum hat Narges ihre Familie lange nicht besucht?* | *Die Flüge sind zu teuer.* (*endlich wieder*) |
| u05 | *Wie findet Sara das Experiment am Ende?* | *Sie ist zufrieden damit.* (15 % saved, they carry on) |
| u06 | *Warum schreiben so viele Leser einen Kommentar?* | *Die Geschichte von Herrn Wagner gefällt ihnen.* (they want to help) |
| u07 | *Wie gefällt Maryam der Urlaub?* | *sehr gut* |
| u08 | *Was denkt Maryam über die Hilfe ihrer Mutter?* | *Sie ist sehr dankbar dafür.* (*ein großes Glück*, *verlassen auf*) |
| u09 | *Wie hat sich Leila wohl gefühlt, als sie ihre Meldebescheinigung bekam?* | *froh und zufrieden* |
| u09 | *Warum gibt Leila am Ende Tipps?* | *Sie möchte neuen Leuten in Deutschland helfen.* |
| u10 | *Warum kamen wohl viele deutsche Freunde zur Feier mit?* | *Sie wollten das persische Neujahrsfest kennenlernen.* |
| u10 | *Wie fühlt sich Karim heute in Köln?* | *Er fühlt sich wohl.* |

### `sym` marks

u04 *Geld abheben* 🏧, u05 *den Müll trennen* ♻️, u05 *der Strom* ⚡, u06 *das Interview* 🎤, u07 *die Wanderung* 🥾, u10 *das Theaterstück* 🎭, u10 *das Brettspiel* 🎲. Literal pictures (🚑, 💉, 💳, 💶, 🧾, 🗑️, 🚰, 📰, 🧳, 🎒, ✍️, 🪪, 🎆, 🏫, 📔) stay unmarked. No emoji was misleading enough to remove.

### Not done / for the lead

- **App:** the more tolerant German word-order check (3.3).
- **App / lesson length:** the app puts all grammar points of a theme unit into one grammar lesson, so u01's grammar lesson now has 24 exercises. If that is too long, split it into one lesson per grammar point (as grammar units already do).
- **CAST.md:** the new one-line names **Herr Koch** (u02, head of department) and **Frau Peters** (u02/u07, office worker) should be added to the side-character list (I only edit my slice).
- Existing years in digits (*1948, 2009, 2015*) are left as they are: `build.speakable` turns them into words, and none of the new text contains digits.
