# German (de-en) — grammar units at the end of A1 and A2

Ehsan asked (3 Nov 2026) for proper grammar courses with exercises for German A1 and A2. Each level already has 10 theme units
with two short grammar points each. These **grammar units** come after them (A1 u11–u13, A2 u11–u13). They bring the level's grammar
together as a system, explain it more fully than the theme units, and practise it with many graded exercises.
The same units go into both sites (Lernpfad and Zabanyar, course `de-en`, explained in English).

## Unit format (`"kind": "grammar"`)
Same JSON as other units (`content/SCHEMA.md`), but **only** these fields: `id`, `level`, `kind: "grammar"`, `emoji`, `title`, `goals`, `grammar`.
No words, phrases, dialogue, reading or sentences. The app makes **one lesson per grammar topic** (explanation card, then the exercises)
and a unit test mixing exercises from all topics.

- `title`: t = German (e.g. "Grammatik: Verben im Präsens"), s = English ("Grammar: verbs in the present tense").
- `goals`: 3–5 English lines ("Conjugate regular verbs for all persons" …).
- `grammar`: **5–6 topics**, ids g01…g06, each with:
  - `title` {t: a short German example or label, s: English name of the topic}.
  - `explain`: a **detailed but clear** English explanation (roughly 600–1,400 characters), in short paragraphs separated by `\n`.
    Use **bold** for forms and *italics* for English glosses. No lists, headings or tables inside the text (the renderer only does
    paragraphs, bold and italics). Structure: what it is and when you use it → how it is formed → the rules/exceptions → a short
    "Careful:" paragraph with the typical mistakes of Persian/English speakers.
  - `table`: one clear table (first row = header row), e.g. the full paradigm. Cells short.
  - `examples`: 5–6 natural example sentences {t, s}.
  - `exercises`: **12 exercises**, ordered from easy to harder:
    1. 4–5 `choice` (3 options; distractors = typical learner mistakes; exactly one correct option),
    2. 4–5 `type` (the learner writes one word or form; `answer` lists **every** correct answer, plus ae/oe/ue/ss spellings for ä/ö/ü/ß;
       use `"hint"` — a short string shown next to the gap — whenever the form to write is not obvious from the English: usually the
       infinitive or base form, e.g. `"hint": "fahren"`, `"hint": "der Tisch"`, `"hint": "groß"`),
    3. 2–3 `order` (3–8 words; `alts` lists every other correct word order, and nothing incorrect).
    Every exercise has `s` = the English translation of the complete sentence. The last 2–3 exercises of each topic may combine it with
    earlier grammar of the level.
- Vocabulary: only words of the level and below (A1 units u01–u10 for A1; A1 + A2 units for A2). Everyday situations, varied.
- Names: Sara, Ali, Maryam, Reza, Mina, Amir, Jonas, Anna, Lukas, Lena, Herr Wagner, Frau Wagner. Never "Neda".
- Text the voice reads (`t` of examples and exercises, titles): no digits, "/", "=", "→", brackets or abbreviations.
  The gap `___` is fine. Use American English in all English text.

## A1 (after A1 u01–u10)
| Unit | Title | Topics (g01 … g06) |
|---|---|---|
| u11 | Grammatik: Verben im Präsens | 1 regular verbs, all persons (incl. stems in -t/-d: du arbeitest; in -s/-ß/-z: du heißt) · 2 sein and haben, full forms and typical uses (Ich bin müde. Ich habe Hunger.) · 3 verbs with a vowel change (e→i: essen, nehmen, sprechen, helfen, geben; e→ie: lesen, sehen; a→ä: fahren, schlafen; au→äu: laufen) and wissen · 4 separable verbs (aufstehen, einkaufen, anrufen, fernsehen, mitkommen, anfangen) · 5 modal verbs können, müssen, wollen, möchten (forms, verb at the end) |
| u12 | Grammatik: Nomen, Artikel, Pronomen | 1 gender: der/die/das, ein/eine, er/sie/es for things, helpful endings (-ung/-heit/-keit/-e → mostly die, -chen → das) · 2 plural forms (-e, -(e)n, -er, -s, no ending, umlaut) and die in the plural · 3 the accusative: den/einen/keinen/meinen, which verbs take it (haben, brauchen, kaufen, nehmen, sehen, es gibt) · 4 nicht or kein · 5 possessive articles mein … Ihr, nominative and accusative · 6 personal pronouns in the accusative (mich, dich, ihn, sie, es, uns, euch, sie, Sie) |
| u13 | Grammatik: Sätze und Fragen | 1 the verb in position 2 (inversion: Heute arbeite ich.) · 2 W-questions and yes/no questions; ja, nein, doch · 3 the sentence bracket: modal verb … infinitive, separable verb … prefix · 4 the imperative (Sie, du, ihr; sein; separable verbs: Ruf mich an!) · 5 time expressions: um, am, im, von … bis, ab |

## A2 (after A2 u01–u10)
| Unit | Title | Topics |
|---|---|---|
| u11 | Grammatik: Vergangenheit | 1 Perfekt with haben, regular participles ge-…-t (incl. gearbeitet) and word order · 2 irregular participles ge-…-en, with vowel changes · 3 Perfekt with sein (movement, change of state, sein, bleiben, passieren) · 4 special participles: separable (eingekauft, aufgestanden), inseparable be-/ver-/er-/ent- (besucht, verstanden), -ieren (studiert) · 5 Präteritum of sein, haben and the modal verbs (war, hatte, konnte, musste, wollte, durfte, sollte) and when it is used |
| u12 | Grammatik: Fälle und Präpositionen | 1 the dative: articles, possessives and personal pronouns (mir, dir, ihm …), dative plural -n · 2 verbs with the dative (helfen, danken, gefallen, gehören, schmecken, passen) and with dative + accusative (geben, schenken, zeigen) incl. word order · 3 prepositions with the dative (aus, bei, mit, nach, seit, von, zu; zum, zur, beim, vom) and with the accusative (für, ohne, gegen, um, durch) · 4 two-way prepositions: Wo? + dative, Wohin? + accusative; stellen/stehen, legen/liegen, hängen; im/ins, am/ans · 5 adjective endings after der/die/das and after ein/kein/mein (nominative, accusative, dative) · 6 comparative and superlative (-er als, so … wie, am -sten; älter, größer; gut, besser, am besten; gern, lieber, am liebsten; viel, mehr) |
| u13 | Grammatik: Sätze verbinden | 1 und, aber, oder, denn, sondern (position 0) versus deshalb, trotzdem, dann (position 1) · 2 subordinate clauses with weil, dass, wenn (verb at the end; separable and modal verbs; subordinate clause first) · 3 indirect questions with ob and question words (Können Sie mir sagen, wo …?) · 4 reflexive verbs (sich freuen, sich treffen, sich ausruhen, sich anziehen; mir/dir with a direct object: Ich putze mir die Zähne.) · 5 verbs with prepositions (warten auf, sich freuen auf/über, denken an, sprechen über, sich interessieren für, Angst haben vor) and worauf/darauf · 6 polite requests and the future: würde, könnte, hätte gern, wäre; werden + infinitive and the present tense for the future |
