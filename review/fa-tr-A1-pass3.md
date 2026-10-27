# Review pass 3: fa-tr A1 (u00–u10)

I read every item in all 11 units: letters, sounds, words and their examples, phrases, dialogues, grammar explanations, tables, examples and exercises, readings with their questions, and sentences. I checked each Latin `pr` against standard Tehran pronunciation, the scheme in CURRICULUM_FA_TR.md and its `t`. The checks covered short vowels, ezafe, `'` for ع/ء, ow/ey, and written versus spoken forms. I also checked Persian spelling (ZWNJ, ی/ک) and the Turkish translations. Scripts checked ZWNJ, Arabic letters, missing `pr` and `t`/`pr` word counts (the ZWNJ-aware count found no gaps).

The transliterations were already accurate; I found no wrong vowel or ezafe. The real problems were the duplicate headwords, inconsistencies inside and between units, one rule that was overstated, two facts that may not stay true, and missing `alts` / `type` answers.

`python3 tools/validate.py content/fa-tr/A1/*.json` → OK for all 11 files. `python3 tools/audit.py` → fa-tr A1 now has only 3 findings, all false alarms (see the end of this report).

## Changes

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u00 | `letters[23].pr` | `ğâf — ğ sesi (غ ile aynı)` → `ğâf — ğ sesi (ğeyn ile aynı)` | Audit: Persian letter inside the Latin `pr`. The letter is now named in Latin. |
| u00 | `sounds[3].s` | "Kelime ortasında ve sonunda ا **her zaman** â'dır" → "**neredeyse** her zaman â'dır … İstisna: üstünde ً işareti olan اً kelime sonunda **-an** okunur: لطفاً (lotfan)." | The rule was false, and the exception لطفاً is used in this same unit (`words[0].ex`, `sentences`) and throughout the course. |
| u00 | `sounds[4].s` | added: "Bazen de **ow** diftongudur: kısa o'nun hemen ardından hafif bir u (İngilizce 'low' gibi): نوروز (nowruz), نو (now = yeni)." | `w` is not a Turkish letter. It appears in `nowruz` / `sâl-e now` in u09 (about 14 times) but was never explained, so readers could not pronounce it. |
| u01 | `grammar[0].exercises[7].alts` | (none) → `["مریم و آیشه دانشجو هستند."]` | The two names joined with و can be swapped; the app would have marked a correct answer wrong. |
| u02 | `dialogue.lines[1]` (t, pr, s) | سلام مینا! **بیست** سال دارم… / Bist sâl dâram / Yirmi yaşındayım → سلام مینا! **نوزده** سال دارم… / Nuzdah sâl dâram / On dokuz yaşındayım | Contradiction inside the unit: in the dialogue Emre was 20 and Mina 18, but the reading (and its question 3) says Emre is 19 and Mina 20. The dialogue now matches the reading. |
| u02 | `dialogue.lines[2]` (t, pr, s) | من **هجده** سال دارم. / Man hecdah sâl dâram. / Ben on sekiz yaşındayım. → من **بیست** سال دارم. / Man bist sâl dâram. / Ben yirmi yaşındayım. | Same reason. |
| u02 | `grammar[1].exercises[6].alts` | (none) → `["علی و مریم دانشجو هستند."]` | Names joined with و can be swapped. |
| u03 | `words[1]` (id w02) | مادر / mâdar / anne → **عمو** / amu / amca (babanın erkek kardeşi), pl عموها, ex «عموی من دو پسر دارد.» Amu-ye man do pesar dârad. / Amcamın iki oğlu var. | Duplicate headword (already taught in u00 `words[5]`). The new word fits the family theme and is not taught anywhere else in the level. Its example also shows ezafe -ye after -u, which this unit teaches. |
| u03 | `words[2]` (id w03) | پدر / pedar / baba → **خاله** / xâle / teyze (annenin kız kardeşi; Türkçedeki 'hala' değil!), pl خاله‌ها, ex «خاله‌ی من معلم است.» Xâle-ye man mo'allem ast. / Teyzem öğretmen. | Duplicate headword (u00 `words[6]`). The word is a useful false friend for Turks, and the example shows the ـه‌ی ezafe from `grammar[0]`. |
| u04 | `words[1]` (id w02) | آب / âb / su → **تخم‌مرغ** / toxm-e morğ / yumurta 🥚, ex «دو تخم‌مرغ، لطفاً.» Do toxm-e morğ, lotfan. / İki yumurta, lütfen. | Duplicate headword (u00 `words[0]`). تخم‌مرغ was already used in this unit's reading (`text[5]`, question 2) without being taught. |
| u04 | `words[2]` (id w03) | چای / çây / çay → **شکر** / şekar / şeker, emoji "", ex «چای با شکر می‌خواهی؟» Çây bâ şekar mixâhi? / Şekerli çay ister misin? | Duplicate headword (u00 `words[2]`). The new word is also a shared word with Turkish. |
| u04 | `words[3]` (id w04) | نان / nân / ekmek → **ماست** / mâst / yoğurt, emoji "", ex «با کباب ماست می‌خواهی؟» Bâ kabâb mâst mixâhi? / Kebabın yanında yoğurt ister misin? | Duplicate headword (u00 `words[1]`). The new word is everyday Iranian food. |
| u05 | `words[0]` (id w01) | خانه / xâne / ev 🏠 → **مبل** / mobl / koltuk, kanepe 🛋️, pl مبل‌ها, ex «مبل کنار پنجره است.» Mobl kenâr-e pancere ast. / Koltuk pencerenin yanında. | Duplicate headword (u00 `words[4]`). The new word is a house item, and its example practises کنارِ from this unit. |
| u06 | `grammar[0].exercises[6].alts` | (none) → `["ساعت هفت من بیدار می‌شوم."]` | Putting the time first is a natural, correct Persian order. |
| u08 | `grammar[1].explain` | "(1 toman = 10 riyal). Etiketlerde bazen riyal yazar, dikkat!" → "(**geleneksel hesapla** 1 toman = 10 riyal). Etiketlerde bazen riyal yazar, dikkat! Buradaki fiyatlar sadece örnektir; gerçek fiyatlar sık değişir." | This fact is not stable: Iran has passed a law to drop zeros from the currency (redenomination), and prices change quickly with inflation. The claim is now hedged so it stays true. |
| u09 | `reading.text[0]` (t, pr, s) | …در **شیراز** زندگی می‌کنم / dar Şirâz / Şiraz'da → …در **تهران** زندگی می‌کنم / dar Tehrân zendegi mikonam / Tahran'da yaşıyorum | Contradiction between units: Maryam is "ahl-e Tehrân" in u01 (`reading.text[3–4]`, question 3). No question in u09 depends on the city. |
| u09 | `grammar[1].exercises[6].alts` | (none) → `["اول فروردین نوروز است."]` | Equally natural order made from the same words. |
| u10 | `reading.text[0]` (t, pr, s) | در ایران آخر هفته جمعه است. / Dar İrân âxar-e hafte com'e ast. / İran'da hafta sonu cuma günüdür. → در ایران جمعه روز تعطیل است. / Dar İrân com'e ruz-e ta'til ast. / İran'da cuma tatil günüdür. | This fact may change: Iran has been changing its weekend (adding Saturday as a day off has been passed and argued over). "Friday is a day off" stays true either way. ta'til = Turkish *tatil*, so the word is easy for Turks. |
| u10 | `reading.questions[0]` | q: در ایران آخر هفته کدام روز است؟ → در ایران کدام روز تعطیل است؟ (pr Dar İrân kodâm ruz ta'til ast?, s İran'da hangi gün tatil?); options شنبه → **سه‌شنبه** | Matches the new text. The option شنبه (Saturday) was removed so the question can never have two correct answers. |
| u10 | `grammar[1].exercises[5].answer` | `["آیا"]` → `["آیا", "تو"]` | «تو دوچرخه داری؟» is an equally correct answer for "Bisikletin var mı?"; a `type` exercise must accept every reasonable answer. |

**Changes by category:** pr 1 (u00 letter) · target text 7 (u02 dialogue ×2, u09 reading, u10 reading text and question, each with its `pr` and `s`) · duplicate headwords replaced 6 (u03 ×2, u04 ×3, u05 ×1, each with new `t`/`s`/`pr`/`ex`/emoji) · translation 0 on its own (the `s` changes go with the rows above) · grammar/sound explanations 3 (u00 sounds ×2, u08) · exercises 5 (4 `alts`, 1 `type` answer) · emoji 0 on its own (new emoji only on the replaced words).

**Audio:** these `t` texts are new or changed and need TTS: u02 `dialogue.lines[1–2]`; u03 `words[1–2]` and their `ex`; u04 `words[1–3]` and their `ex`; u05 `words[0]` and its `ex`; u09 `reading.text[0]`; u10 `reading.text[0]`, `reading.questions[0].q` and its option سه‌شنبه.

## Noticed but not changed

- **Audit "duplicate" u02 `words[9]` نه**: this is a false alarm and a homograph. In u00 نه means **na** (hayır, no); in u02 it is **noh** (dokuz, nine). They are two different words, and u02 `grammar[0].explain` points out exactly this. The numbers unit needs 9 and u00 needs "no", so I kept both.
- **Audit "pr word count" u06 `grammar[0].title`, u09 `reading.text[4]`**: false alarms. The audit counts each ZWNJ half-space as a word break (می‌خورم, سفره‌ی هفت‌سین). The `pr` is complete.
- **Duplicate replacements, why the later occurrence**: as the brief says, the later occurrence (u03/u04/u05) was replaced. u00 still teaches مادر، پدر، آب، چای، نان، خانه, and the later units go on using them in dialogues, readings and exercises as known words. Nothing else had to change.
- **Characters reused in different roles** (minor, left as is):
  - u02: Emre and Mina are classmates who say تو to each other. In u07 Emre asks Mina for directions as a stranger ("ببخشید خانم", بروید).
  - u03: Ayşe and Amir are friends. In u08 Amir is the shop assistant who serves Ayşe formally.
  - u06 `sentences[4]`: «مینا در بیمارستان کار می‌کند» although Mina is a student in u02/u03.

  Fixing these would mean renaming speakers, and the brief says to keep Mina. The role-play reading is acceptable. If you want, rename the u07 speaker B and the u08 speaker B to unused names.
- **Choice and type exercises where only the Turkish `s` picks the answer** (for example u05 `grammar[1].exercises[0–1]` روی/زیر/کنار, u08 `grammar[0].exercises[0]` colours, u08 `grammar[1].exercises[3]` پنج/پانصد/صد, u09 `grammar[0].exercises[2]` سرد/آفتابی): the other options are grammatical Persian but wrong translations of the given `s`. Acceptable as translation tasks.
- **Order exercises with only a marked or unlikely variant** (u07 `grammar[0].exercises[6–7]`, u09 `grammar[0].exercises[7]`, `grammar[1].exercises[7]`, u10 `grammar[1].exercises[6]` «تو آیا…»): no `alts` added, because those orders are not natural enough to teach.
- **u09 `grammar[1].explain` haft-sin list** "(sabze, sib, sir, sekke, sonbol…)": sekke and sonbol are common extras rather than part of the classic seven (sabze, samanu, senjed, sib, sir, serke, somâğ). The "…" keeps the list from being false; left as is.
- **Written versus colloquial forms**: `pr` follows the written forms in `t` throughout (ast, mixâham, mişavam, beravid, çahâr, hecdah). This is consistent and matches the curriculum.
- **u08 `words[4]` تومان 💵**: dollar-note emoji used as a generic picture of money. Acceptable.

## TTS-risky texts (list only, unchanged)

- u00 `sounds[3].t` «آ / ا», `sounds[4].t` «و / ی», `sounds[6].t` «س ص ث · ت ط · ه ح», `sounds[7].t` «خ · غ · ق»: slashes, middle dots and bare letters.
- u02 `dialogue.lines[5].t` «یک لحظه… دوباره، لطفاً.»: ellipsis. `grammar[0].table` col 1 «۱۱ یازده» … «۲۰ بیست»: digit next to the word. `grammar[0].exercises[5].t` «۱۵: ___». `grammar[1].table` col 1: arrows «←» and slashes.
- u05 `grammar[0].examples[1].t`, `grammar[1].examples[3].t`: em dash «—».
- u06 `reading.text[2].t`, u08 `grammar[1].examples[4].t` / `grammar[1].exercises[3].t`: colon inside the sentence.
- u07 `grammar[0].table` col 2 «برو / بروید» …, `grammar[1].table[3–4]`: slashes.
- u08 `grammar[1].table` col 1 «۱٬۰۰۰», «۱٬۰۰۰٬۰۰۰» …: digits with the Persian thousands separator. `reading.text[4–5]`: quotation marks «…».
- u10 `grammar[1].title.t` «دوست دارم شنا کنم. آیا…؟»: ellipsis before the question mark.
