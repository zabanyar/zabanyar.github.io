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
