# Zabanyar unit file schema (v1)

One JSON file per unit: `content/<course>/<level>/uNN.json` (UTF-8, 2-space indent).

Courses:
- `en-fa` — learn **English**, support language **Persian** (UI + explanations in Persian)
- `de-en` — learn **German**, support language **English**
- `tr-fa` — learn **Turkish**, support language **Persian**

Field naming: `t` = text in the TARGET language (what the learner studies; gets audio).
`s` = translation / explanation in the SUPPORT language. `pr` = pronunciation hint written in the
support language's script (Persian script for en-fa and tr-fa; omit for de-en unless really useful).

```jsonc
{
  "id": "u01",                       // u00 … u10
  "level": "A1",
  "emoji": "👋",                     // ONE emoji that represents the unit (picture on the map)
  "title": { "t": "Hello!", "s": "سلام!" },
  "goals": ["…", "…", "…"],          // 2–4 short can-do goals, SUPPORT language

  // u00 only: alphabet & sounds
  "letters": [
    { "t": "A a", "pr": "اِی", "ex": { "t": "apple", "s": "سیب", "emoji": "🍎" } }
  ],
  "sounds": [                         // u00 only, optional: special sounds / spelling rules
    { "t": "sh", "s": "explanation in support language", "ex": [{ "t": "ship", "s": "کشتی" }] }
  ],

  "words": [                          // 10–14 core words (u00: 6–10 simple words)
    {
      "id": "w01",
      "t": "apple",                   // German nouns WITH article: "der Apfel"
      "pl": "apples",                 // optional plural (German: "die Äpfel"); nouns only
      "s": "سیب",
      "pr": "اَپِل",                   // en-fa / tr-fa only
      "emoji": "🍎",                  // ONE standard emoji that clearly pictures the word.
                                      // If no emoji fits (e.g. "but", "very"), use "" (empty).
      "ex": { "t": "I like apples.", "s": "من سیب دوست دارم." }   // example sentence using ONLY known/simple words
    }
  ],

  "phrases": [                        // 4–8 useful chunks / expressions
    { "id": "p01", "t": "How are you?", "s": "حالت چطور است؟", "pr": "هاو آر یو؟" }
  ],

  "dialogue": {                       // one short realistic dialogue, 6–10 lines, two speakers
    "title": { "t": "At school", "s": "در مدرسه" },
    "speakers": { "A": { "name": "Sara", "voice": "f" }, "B": { "name": "Ali", "voice": "m" } },
    "lines": [ { "sp": "A", "t": "Hello! I am Sara.", "s": "سلام! من سارا هستم." } ]
  },

  "grammar": [                        // 1–2 grammar points per unit
    {
      "id": "g01",
      "title": { "t": "to be: am / is / are", "s": "فعل «بودن»" },
      "explain": "Clear, friendly explanation in the SUPPORT language. 2–6 short sentences. Use **bold** for key forms. Use \\n for new paragraphs.",
      "table": [ ["I", "am"], ["you", "are"], ["he / she / it", "is"] ],   // optional, target-language rows (2–3 columns)
      "examples": [ { "t": "She is a teacher.", "s": "او معلم است." } ],    // 3–5
      "exercises": [                  // 5–8, mixed types
        { "type": "choice", "t": "I ___ from Iran.", "options": ["am", "is", "are"], "answer": 0, "s": "من اهل ایران هستم." },
        { "type": "order",  "t": "She is my sister.", "s": "او خواهر من است." },
        { "type": "type",   "t": "They ___ students.", "answer": ["are"], "s": "آن‌ها دانش‌آموز هستند." }
      ]
    }
  ],

  "reading": {                        // short text built from this (and earlier) units' language
    "title": { "t": "My name is Reza", "s": "اسم من رضا است" },
    "text": [ { "t": "Hello! My name is Reza.", "s": "سلام! اسم من رضا است." } ],   // 5–9 sentences
    "questions": [                    // 3–4 comprehension questions, asked in TARGET language
      { "q": { "t": "Where is Reza from?", "s": "رضا اهل کجاست؟" }, "options": ["Iran", "Germany", "Turkey"], "answer": 0 }
    ]
  },

  "sentences": [                      // 6–8 extra practice sentences (used for listening, word-order, translation)
    { "t": "My name is Sara.", "s": "اسم من سارا است." }
  ]
}
```

## Rules
1. **Accuracy first.** Natural, correct target language (standard British/American English OK — be consistent: use American spelling;
   standard Hochdeutsch; standard İstanbul Turkish). Correct, natural Persian (Iranian Farsi) with proper half-spaces (ZWNJ, U+200C)
   e.g. «می‌خواهم», «آن‌ها», «خانه‌ام». Natural English for de-en support.
2. **A1 level:** short sentences, high-frequency words, present tense mostly. Each unit builds on earlier units only.
3. Every `choice` exercise: `answer` is the 0-based index of the correct option; exactly one option is correct.
   `order` exercises: 3–7 words; the app shuffles the words itself. `type`: `answer` is a list of accepted answers (case-insensitive).
   Use exactly three underscores `___` for the gap in `choice` and `type`.
4. `t` strings must not contain hints in brackets; put translations only in `s`.
5. Names: use names familiar to the family — Persian names (Sara, Ali, Maryam, Reza, Neda, Amir) mixed with
   target-country names (Anna, Lukas / Emma, Tom / Ayşe, Mehmet).
6. Emoji: single standard emoji characters only (no flags, no skin-tone modifiers, no ZWJ family sequences). Empty string if none fits.
7. Keep it respectful and family-friendly. No alcohol, no pork; food examples suit an Iranian family.
8. Validate: `python3 /home/claude/zabanyar/tools/validate.py <file.json>` must print OK.
