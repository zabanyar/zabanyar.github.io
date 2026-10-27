# Review: de-en B1 (new level, u01–u10)

I checked every item in all 10 units against the curriculum (CURRICULUM_NEW_LEVELS.md) and the neighbouring levels A2 and B2. That covered goals, words with their examples, phrases, dialogue, grammar explanations, tables, examples and exercises, reading text and questions, and sentences.

**Overall:** the level is in very good shape.
- **German:** correct and natural throughout.
- **English:** natural American English.
- **Grammar explanations:** all accurate and at the right level. They cover Präteritum, als/wenn/wann, relative clauses, zu + infinitive, Passiv Präsens/Präteritum/Perfekt, Konjunktiv II, connectors, um … zu/damit, Genitiv, n-Deklination, adjective endings, hin/her, the reflexive dative, lassen, Nomen-Verb-Verbindungen, TeKaMoLo, indefinite pronouns and word formation.
- **Building on A2:** grammar that A2 already taught is marked as known ("you already know …"). This applies to Präteritum of sein/haben/modals, polite Konjunktiv II, the accusative reflexive and adjective endings with an article.

**Structure checks (all pass):**
- Every `choice` answer index points to the single correct option.
- Every `type` answer with ä/ö/ü/ß also lists its ae/oe/ue/ss spelling.
- Every `order` alt uses exactly the same words, and no `order` item is longer than 9 words.
- All reading answers can be found in the text.
- The level has **no `pr` fields**, as the de-en convention requires. So there is nothing to convert from "___", and no `pr` conventions to align.
- Sizes are within limits: words 15–16, phrases 8, dialogue 11–12 lines, grammar 2 × (5 examples + 8 exercises), reading 10–12 sentences with 5 questions, sentences 8.

**Main problem: duplicate headwords.** 25 headwords had already been taught in A2, B2 or C1. Following BRIEF_NEW rule 5, I replaced each one with a fitting new topic word (ids kept, new `ex` sentences). I checked every new word against all de-en levels.

## Changes

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u01.json | words[w09] | der Abschluss (degree, qualification (from a school or university); ex: Ich habe meinen Abschluss an der Universität Teheran gemacht.) → **die Schulzeit (school days, school years; ex: In meiner Schulzeit war Mathe mein Lieblingsfach.)** | Duplicate headword: already taught in B2 u06. |
| u02.json | words[w02] | die Bewerbung ((job) application; ex: Bitte schicken Sie Ihre Bewerbung per E-Mail.) → **die Stärke (strength, strong point; ex: Was sind Ihre größten Stärken?)** | Duplicate headword: already taught in B2 u01. |
| u02.json | words[w05] | die Kenntnisse (knowledge, skills (usually plural); Deutschkenntnisse = knowledge of German; ex: Haben Sie gute Computerkenntnisse?) → **die Schwäche (weakness, weak point; ex: Eine kleine Schwäche von mir: Ich bin manchmal ungeduldig.)** | Duplicate headword: already taught in B2 u06. |
| u02.json | words[w10] | die Überstunde (hour of overtime; Überstunden machen = to work overtime; ex: Diese Woche habe ich fünf Überstunden gemacht.) → **der Urlaubstag (day of (paid) vacation; ex: Ich habe dreißig Urlaubstage im Jahr.)** | Duplicate headword: already taught in A2 u05. |
| u02.json | words[w13] | die Teilzeit (part-time; in Teilzeit arbeiten = to work part-time (full-time = die Vollzeit); ex: Sara arbeitet in Teilzeit, zwanzig Stunden pro Woche.) → **die Gleitzeit (flextime (you choose when to start and finish work, within limits); ex: Mit Gleitzeit kann ich meine Kinder morgens selbst zur Schule bringen.)** | Duplicate headword: already taught in A2 u05 (Teilzeit arbeiten). |
| u02.json | words[w15] | einarbeiten (to train sb in a new job, show sb the ropes; ex: Lukas arbeitet die neue Kollegin ein.) → **der Praktikant (intern; female: die Praktikantin; ex: Unser neuer Praktikant kommt aus Spanien.)** | Duplicate headword: already taught in C1 u02 (jemanden einarbeiten). |
| u02.json | words[w16] | der Feierabend (end of the working day; time after work; Feierabend machen = to finish work; ex: Um fünf mache ich Feierabend.) → **die Kantine ((staff) cafeteria, canteen; ex: Mittags essen wir zusammen in der Kantine.)** | Duplicate headword: already taught in A2 u05. |
| u03.json | words[w02] | die Krankenkasse (health insurance fund (statutory health insurer); ex: Bei welcher Krankenkasse sind Sie versichert?) → **die Praxis ((doctor's) office, practice; ex: Die Praxis ist am Mittwochnachmittag geschlossen.)** | Duplicate headword: already taught in B2 u03, C1 u07. |
| u03.json | words[w04] | der Hausarzt (family doctor, GP; female: die Hausärztin; ex: Mein Hausarzt hat seine Praxis gleich um die Ecke.) → **der Krankenwagen (ambulance; ex: Der Krankenwagen war nach zehn Minuten da.)** | Duplicate headword: already taught in B2 u03. |
| u03.json | words[w06] | die Überweisung (referral (to a specialist); also: bank transfer; ex: Der Hausarzt hat mir eine Überweisung zum Augenarzt gegeben.) → **das Röntgenbild (X-ray (image); ex: Auf dem Röntgenbild sieht man, dass der Arm gebrochen ist.)** | Duplicate headword: already taught in B2 u03. |
| u03.json | words[w16] | die Beschwerden (symptoms, health problems (plural); ex: Welche Beschwerden haben Sie?) → **die Behandlung (treatment; ex: Die Behandlung hat mir sehr gut geholfen.)** | Duplicate headword: already taught in B2 u03. |
| u04.json | words[w06] | sparen für + A (to save (up) for; ex: Wir sparen für eine größere Wohnung.) → **das Taschengeld (pocket money, allowance; ex: Unsere Kinder bekommen jede Woche Taschengeld.)** | Duplicate headword: already taught in B2 u09 (sparen). |
| u04.json | words[w10] | das Angebot (offer; im Angebot = on sale, on special; ex: Diese Woche sind Äpfel im Angebot.) → **das Bargeld (cash; ex: Hast du Bargeld dabei? Ich habe nur meine Karte.)** | Duplicate headword: already taught in A2 u06, B2 u09. |
| u04.json | words[w11] | das Schnäppchen (bargain; ex: Die Jacke war ein echtes Schnäppchen.) → **der Kontoauszug (bank statement; ex: Auf dem Kontoauszug sehe ich alle Überweisungen.)** | Duplicate headword: already taught in B2 u09. |
| u04.json | words[w13] | die Quittung (receipt; ex: Heben Sie die Quittung gut auf.) → **der Kassenbon (receipt (from a store); ex: Heben Sie den Kassenbon gut auf.)** | Duplicate headword: already taught in B2 u09. |
| u04.json | words[w14] | umtauschen (to exchange (something you bought); ex: Kann ich die Schuhe umtauschen, wenn sie nicht passen?) → **die Geheimzahl (PIN (number); ex: Bitte geben Sie Ihre Geheimzahl ein.)** | Duplicate headword: already taught in A2 u06. |
| u04.json | words[w15] | die Garantie (warranty, guarantee; ex: Auf den Kühlschrank gibt es zwei Jahre Garantie.) → **die Zinsen (interest (on a loan or savings; plural); ex: Für den Kredit zahlen wir jeden Monat Zinsen.)** | Duplicate headword: already taught in B2 u09. |
| u05.json | words[w14] | umweltfreundlich (environmentally friendly, eco-friendly; ex: Fahrradfahren ist gesund und umweltfreundlich.) → **der Restmüll (general waste (trash that can't be recycled); ex: Alte Zahnbürsten kommen in den Restmüll.)** | Duplicate headword: already taught in B2 u05. |
| u06.json | words[w04] | die Sendung (program, show (on TV or radio); ex: Die Sendung beginnt um acht Uhr.) → **die Redaktion (editorial office, newsroom; editorial team; ex: Die Redaktion bekommt jeden Tag viele E-Mails von Lesern.)** | Duplicate headword: already taught in A2 u09. |
| u07.json | words[w06] | der Ausflug (trip, outing, excursion; ex: Am Sonntag machen wir einen Ausflug an den See.) → **die Jugendherberge (youth hostel; ex: Die Jugendherberge liegt direkt am See.)** | Duplicate headword: already taught in A2 u10. |
| u07.json | words[w15] | sich erholen (to relax, rest, recover; ex: Im Urlaub möchte ich mich vor allem erholen.) → **übernachten (to stay overnight, spend the night; ex: Auf dem Weg nach Italien übernachten wir in München.)** | Duplicate headword: already taught in B2 u03, C1 u05. |
| u08.json | words[w11] | die Hochzeit (wedding; ex: Zur Hochzeit meiner Cousine kommen über zweihundert Gäste.) → **der Hochzeitstag (wedding anniversary; wedding day; ex: Zum Hochzeitstag schenkt Reza seiner Frau Blumen.)** | Duplicate headword: already taught in A2 u02. |
| u10.json | words[w01] | das Fest (festival, celebration; ex: Nouruz ist das wichtigste Fest im Iran.) → **das Neujahrsfest (New Year festival; ex: Nouruz, das persische Neujahrsfest, beginnt am ersten Frühlingstag.)** | Duplicate headword: already taught in A2 u02. |
| u10.json | words[w11] | der Umzug (parade, procession (also: moving house); ex: Am Rosenmontag zieht ein großer Umzug durch die Stadt.) → **der Karneval (carnival (in southern Germany also: Fasching, Fastnacht); ex: In Köln feiert man Karneval besonders laut und bunt.)** | Duplicate headword: already taught in A2 u03. |
| u10.json | words[w14] | jemandem gratulieren zu + D (to congratulate someone on something; ex: Wir gratulieren dir herzlich zum Geburtstag!) → **die Einladung (invitation; ex: Vielen Dank für die Einladung zu deinem Geburtstag!)** | Duplicate headword: already taught in A2 u02 (gratulieren + D). |
| u03.json | reading.text[2] | „Bei Arbeitnehmern wird der Beitrag jeden Monat direkt vom Gehalt abgezogen.“ → „Bei **gesetzlich versicherten** Arbeitnehmern wird der Beitrag …“ (s: "For employees with statutory insurance, …") | Factual accuracy: the previous sentence mentions privately insured people too. Privately insured employees normally pay their insurer themselves and get an employer subsidy, so the general claim was wrong for them. |
| u05.json | words[w10].ex | „Der Strom ist im letzten Jahr teurer geworden.“ → „**Unser** Strom ist im letzten Jahr teurer geworden.“ (s: "Our electricity …") | Factual stability: as a general claim about German electricity prices, "last year" is often false (prices fell in some years). Now it is a personal statement. |
| u07.json | grammar[0].exercises[4].answer | ["leckeren"] → ["leckeren", "leckere"] | „Das Café ist bekannt für ___ Kuchen.“: *leckere Kuchen* (plural, very natural) is also correct and would have been marked wrong. |
| u09.json | grammar[1].exercises[6].alts | (none) → ["Den Antrag hat sie ihm erklärt."] | A natural alternative order of the same words (object fronted). The level does the same elsewhere, e.g. u06 g02 ex[7] „Den Kunden kenne ich schon lange.“ |

**Changes by category:**

| Category | Changes |
|---|---|
| pr | 0 (no `pr` fields at this level) |
| target text | 2 (u03 reading, u05 example) |
| translation | 0 standalone; the `s` of the 2 target-text changes was updated with them |
| grammar explanation | 0 |
| exercises | 2 |
| emoji | 0 standalone; the 25 replaced words got matching emoji: 🚑 Krankenwagen, 💵 Bargeld, 🧾 Kassenbon, and "" for the rest |
| duplicates (headwords replaced) | 25 |

## Noticed but not changed

- **Remaining overlaps that are only partial:**
  - u05 w09 *Energie sparen* vs. B2 u09 *sparen*: a different collocation, and the unit's main point.
  - u05 w01 *der Müll* / w02 *den Müll trennen*: noun and collocation in the same unit.
  - u01 w14 *verlassen* / u08 w10 *sich verlassen auf*: different verbs.
- **Grammar topics shared with B2:** u05 g02 (um … zu / damit) partly overlaps B2 u10 g01 (um … zu, ohne … zu, statt … zu). u09 g01 (Nomen-Verb-Verbindungen) is close to C1 u01 g02 (Funktionsverbgefüge). The curriculum assigns both, and the higher levels extend them, so I left them.
- **u09 reading.text[1]** (register within two weeks): this is current law (Bundesmeldegesetz) and has been stable since 2015. Q0 depends on it, so I left it unhedged.
- **u03 reading.text[1]** "etwa jeder Zehnte ist privat versichert": correct (about 10–11 %) and already hedged with *etwa*.
- **u05 w06** "bis zu fünfundzwanzig Cent" deposit: correct and hedged with *bis zu*. The amounts have been unchanged for 20+ years.
- **u10 w10** "sich verkleiden als + N": usage varies (*als Pirat* / *als Piraten*). The nominative is the common form, so I left the label.
- **u10 reading.text[5]** uses the Plusquamperfekt (*hatte … gedeckt*). It is not taught at A2 or B1 in this curriculum, but it is a single, easily understood form in a reading.
- **u01 w12** *das Studium*, pl *die Studien*: correct, though the plural is rare in this meaning.
- **u02 reading** *Bürokauffrau*: the official title is now *Kauffrau für Büromanagement*, but the old word is still in common use.

## TTS-risky target texts (for central handling)

- **Headwords with case/preposition notation:**
  - u01 w04 "sich erinnern an + A"
  - u04 w07 "ausgeben für + A"
  - u08 w04 "sich kümmern um + A", w05 "sich verstehen mit + D", w10 "sich verlassen auf + A"
  - u09 w14 "zuständig sein für + A"
  - u10 w10 "sich verkleiden als + N"
- **Ellipsis "…" in titles and phrases:**
  - u02 g02 title "Ich habe vor, … zu …"
  - u04 g01 title "Ich hätte gern … Du solltest …", g02 title "Wenn ich mehr Geld hätte, …"
  - u05 g02 title "um … zu oder damit?"
  - u06 p01–p04 ("…, dass …"), p08 "Meiner Meinung nach …"
  - u07 p07 "Gibt es hier in der Nähe …?"
  - u10 p05 "Wie wäre es mit …?"
  - u10 g01 title (comma list "man, jemand, niemand, …")
- **Dash between two speakers in one `t`:** u05 p07 "Brauchen Sie eine Tüte? – Nein, danke, …"; u05 g02 example[4] "Wozu brauchst du die alten Gläser? – Um …"
- **Digits:**
  - Years: u01 w06 ex "1955", w16 ex "2015", dialogue[5] "2009", g01 ex[1] "2010", reading[0] "1948", sentences[2] "2012"
  - Ages after names: u04 reading[1], [4], [6], [8] ("Lena, 24, Studentin" etc.). These read awkwardly as bare numbers.
- **Apostrophe genitive:** u06 g01 table "Jonas' Fahrrad" and ex[5] option "Jonas'". u04 Q4 "Jonas' Frau" (question text).
- **Single letter / hyphenated names:** u10 dialogue[5] "dem Buchstaben S"; u10 reading[5] "Haft-Sin-Tisch"; u07 w14 "die Hin- und Rückfahrt" (hyphen ellipsis).
