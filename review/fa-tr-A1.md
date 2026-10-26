# Review: fa-tr A1 (u00–u10)

I proofread every item in all 11 files: letters, sounds, words, examples, phrases, dialogues, grammar explanations, tables, examples and exercises, readings with their questions, and sentences. I checked every `pr` transliteration against standard Tehran pronunciation, the CURRICULUM_FA_TR scheme, and its `t` text. I also checked word counts between `t` and `pr` with a script, and ran checks for Arabic ي/ك, ZWNJ and the `ها` plural spelling.

The level is in very good shape. The transliterations are accurate: short vowels are right, ezafe is marked wherever it is pronounced (and correctly left out on predicates and measure phrases), ' is written only for audible ع/ء, and the forms match the written register of `t` throughout. Answer keys, readings and emoji were all correct. Only three real errors needed fixing.

`python3 tools/validate.py content/fa-tr/A1/*.json` → OK for all 11 files.

## Changes

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u09.json | `phrases[6].pr` | `Sâl-e no mobârak!` → `Sâl-e now mobârak!` | Scheme consistency: نو is written `now` everywhere else (`nowruz` ×14, `sâl-e now` in `words[13].ex`). |
| u02.json | `grammar[1].table[3]` (cols 2–3) | `dâneşcuhâ / dâneşcuyân` · `öğrenciler` → `dâneşcu → dâneşcuhâ / dâneşcuyân` · `öğrenci → öğrenciler` | The `pr` and Turkish columns didn't match the Persian cell (`دانشجو ← دانشجوها / دانشجویان`) or the singular → plural pattern of the other rows. |
| u02.json | `grammar[1].table[4]` (cols 2–3) | `mo'allemhâ / mo'allemân` · `öğretmenler` → `mo'allem → mo'allemhâ / mo'allemân` · `öğretmen → öğretmenler` | Same mismatch as the row above. |
| u07.json | `grammar[0].explain` | "Kökte **o** sesi varsa … **bo-** …: **boro** (git!), **boxor** (ye!). Bazı fiiller düzensizdir: âmadan …" → "…: **boxor** (ye!), **bokon** (yap!). Bazı fiiller düzensizdir: raftan (gitmek) → **boro / beravid** (git / gidin), âmadan …" | The explanation was misleading. In u06 learners learn the stem of raftan as **rav** (miravam), so "boro because the root contains o" contradicted what they already knew. boro is now listed as an irregular imperative. |

Changes by category: pr 3 (u09 phrase and the two u02 table rows, whose Turkish column was fixed along with the `pr`) · target text 0 · translation 0 · grammar explanation 1 (u07) · exercises 0 · emoji 0.

## Noticed but not changed

- **Diphthong ow / `w`**: the only `w` in the whole course is in `nowruz` / `sâl-e now` (u09). `w` is not a Turkish letter, and u00 explains `ey` (xeyli) but never `ow`. I kept it because it is now consistent and *Nowruz* is the familiar spelling. If you want an explanation, add one line to u00 `sounds[4]` (e.g. "و bazen **ow** diftongu: نوروز nowruz"). That would be an addition, so it is outside this review.
- **Order exercises where another order is also correct.** The app accepts only the exact `t` order:
  - u03 `grammar[0].exercises[5]` این خانه‌ی بزرگ من است — «این خانه‌ی من بزرگ است» (this house of mine is big) is also grammatical.
  - u05 `grammar[0].exercises[5]` در اتاق یک تخت هست — «یک تخت در اتاق هست» is equally correct.
  - u06 `grammar[0].exercises[7]` پدرم هر روز کار می‌کند — «هر روز پدرم کار می‌کند» is also natural.
  - u06 `grammar[1].exercises[6]` الان ساعت هشت است — «ساعت الان هشت است» is also natural.
  - u09 `grammar[0].exercises[6]` امروز هوا خیلی سرد است — «هوا امروز خیلی سرد است» is also natural.
  - u06 `grammar[0].exercises[6]` and u07 `grammar[0].exercises[7]` allow less likely variants (time or لطفاً moved).

  Persian adverb order is free, so these can't be fixed without rewriting the sentences. The Turkish `s` steers learners towards the intended order. A fix in the app (accepting any order that matches another sentence in the unit, or a list of alternatives) would solve this better.
- **Written vs. colloquial forms**: `pr` follows the written forms in `t` throughout (ast, mixâham, beravid, hast, sâl-e …), as the curriculum asks. Colloquial forms are mentioned only in the explanations (râ → -ro/-o, hastam → -am). Consistent, left as is.
- **u00 `sounds[3]`**: "Kelime ortasında ve sonunda ا her zaman â'dır" has the exception لطفاً (lotfan, used in u00 `words[0].ex`). Acceptable simplification for beginners; not changed.
- **u08 `grammar[1].exercises[3]`** (این کتاب ارزان است: ___ هزار تومان): پانصد and صد are also grammatical. Only the Turkish `s` ("beş bin") makes پنج the answer. Acceptable.
- **Goals**: u00–u05 use the infinitive form ("…-ebilmek"), u06–u10 the first person ("…-ebilirim"). This is a style difference, not an error.
- **u08 `words[4]`**: the emoji 💵 is a dollar note, used here as a generic picture of money for toman. Acceptable.
- **Grammar table layouts differ by unit** (u06: pronoun | verb | pr; u07: infinitive | imperative | pr; u08: word | pr | emoji). Each table is clear on its own.

## TTS-risky texts (item 6, list only)

- u00 `sounds[3].t` «آ / ا», `sounds[4].t` «و / ی», `sounds[6].t` «س ص ث · ت ط · ه ح», `sounds[7].t` «خ · غ · ق»: slashes, middle dots and bare letters.
- u02 `dialogue.lines[5].t` «یک لحظه… دوباره، لطفاً.»: ellipsis.
- u02 `grammar[0].table[0–9]` col 1 «۱۱ یازده» … «۲۰ بیست»: the digit and the word side by side are read twice.
- u02 `grammar[0].exercises[5].t` «۱۵: ___»: digit, colon and gap.
- u02 `grammar[1].table[0–4]` col 1 «کتاب ← کتاب‌ها», «دانشجو ← دانشجوها / دانشجویان» …: arrow and slash.
- u05 `grammar[0].examples[1].t` «چای هست؟ — بله، هست.» and `grammar[1].examples[3].t` «کلید کجاست؟ — در آشپزخانه است.»: em dash.
- u06 `reading.text[2].t` and u08 `grammar[1].examples[4].t` / `grammar[1].exercises[3].t`: colon inside the sentence (probably harmless).
- u07 `grammar[0].table[0–5]` col 2 «برو / بروید» …, `grammar[1].table[3–4]` «سمت راست / سمت چپ», «به راست / به چپ»: slashes.
- u08 `grammar[1].table[0–5]` col 1 «۱٬۰۰۰», «۱٬۰۰۰٬۰۰۰» …: digits with the Persian thousands separator.
- u08 `reading.text[4]`, `reading.text[5]`: quotation marks «…» (probably harmless).
- u10 `grammar[1].title.t` «دوست دارم شنا کنم. آیا…؟»: ellipsis before the question mark.
