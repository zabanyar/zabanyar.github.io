# tr-fa B1 — critic review (pass 4, Nov 2026)

Slice: `content/tr-fa/B1/u01–u10.json`. I read every item in every unit: titles, goals, words (t, s, pr, pl, ex, emoji), phrases with pr, dialogues, grammar (title, explain, table, examples, exercises), readings with questions, and sentences.
I read the pass-1 and pass-3 reviews (`review/tr-fa-B1.md`, `review/tr-fa-B1-pass3.md`) first and did not undo their decisions.
After my edits, `tools/validate.py` prints OK for all 10 files. `tools/audit.py` reports no findings for tr-fa B1, and no other level has new findings.

## 1. Verdict

This is a solid B1 level. The grammar explanations are accurate and Persian-friendly: they compare with Persian where it helps (ماضی نقلی for -mış, «دادم … کنند» for the causative, the «که» clause for participles). Tables and answer keys are correct, and the Turkish is natural İstanbul standard with a few accepted colloquialisms. The readings are authentic in style and culturally well chosen (Tebriz childhood, Kapadokya, kız isteme coffee, Nevruz versus Bayram). Every reading question can be answered from its text. Earlier passes had not caught two problems:
- **Cross-level re-teaching.** Unit 8 re-taught four A2 u04 headwords (kuzen, teyze, hala, torun), and unit 5 re-taught *uçak*.
- **Misleading pictures.** A few pictures did not show their word (🥗 for "healthy", 👕 for "size", 💰 next to 💵 in the same unit).

I fixed both.

The biggest remaining weaknesses are structural:
- `pr` support stops abruptly after A2. At B1 it covers words and phrases only.
- The past continuous *-ıyordu* is used but never taught.
- Order drills built from dialogue lines and sentences do not accept Turkish's free word order.
- Five phrases are A1/A2 formulas repeated as new.

## 2. Fixed

Totals: 4 emoji, 3 translation, 5 headwords replaced (below level / already taught in A2), 3 `type` answers added, 15 `order` alts added. That makes 30 changes.

| Unit | Path | Before → After | Reason |
|---|---|---|---|
| u01 | words[10].emoji (köy) | 🏡 → "" | 🏡 is a house with a garden, not a village; next to mahalle 🏘️ in the same unit the two pictures are easily confused. |
| u01 | grammar[0].exercises[6].alts | [] → ['Dedemi geçen yaz ziyaret ettik.'] | Equally natural word order (time after object). |
| u01 | grammar[0].exercises[7].alts | ['Dün akşam telefonu neden açmadın?', 'Telefonu dün akşam neden açmadın?'] → ['Dün akşam telefonu neden açmadın?', 'Telefonu dün akşam neden açmadın?', 'Neden dün akşam telefonu açmadın?'] | Equally natural word order (question word first). |
| u03 | words[15].s (yorucu) | خسته‌کننده → خستگی‌آور، طاقت‌فرسا | «خسته‌کننده» usually means "boring" in Persian and is the A2 translation of sıkıcı; yorucu = physically/mentally tiring. |
| u03 | words[15].ex.s | این هفته خیلی خسته‌کننده بود. → این هفته خیلی خستگی‌آور بود. | Translation follows the new meaning. |
| u03 | reading.text[5].s | رضا کارش را خیلی دوست دارد، اما کار گاهی خیلی خسته‌کننده می‌شود. → رضا کارش را خیلی دوست دارد، اما کار گاهی خیلی خستگی‌آور می‌شود. | Same: yorucu = tiring, not boring. |
| u03 | grammar[0].exercises[6].alts | [] → ['Akşamları babam haberleri izler.'] | Equally natural word order. |
| u03 | grammar[0].exercises[7].alts | [] → ['Öğle yemeğini genelde ofiste yerim.'] | Equally natural word order. |
| u03 | grammar[1].exercises[6].alts | [] → ['Toplantıya pazartesi katılmak zorundayız.'] | Equally natural word order. |
| u03 | grammar[1].exercises[7].alts | [] → ['Hemen müdüre bir e-posta göndermem gerekiyor.'] | Equally natural word order. |
| u04 | words[13].emoji (sağlıklı) | 🥗 → "" | 🥗 shows a salad (salata), not "healthy"; misleading in "Which picture is it?". |
| u04 | grammar[0].exercises[6].alts | [] → ['Daha çok meyve ve sebze yemeliyiz.'] | Same tiles, sebze/meyve swapped: equally correct. |
| u04 | grammar[0].exercises[7].alts | [] → ['Yemekten sonra bu ilacı almalısın.'] | Equally natural word order. |
| u04 | grammar[1].exercises[7].alts | [] → ['Ateşin yükselirse doktoru hemen ara.'] | Equally natural word order. |
| u05 | words[4] | {"id": "w05", "t": "uçak", "pl": "uçaklar", "s": "هواپیما", "pr": "اوچاک", "emoji": "✈️", "ex": {"t": "Uçağımız iki saat rötar yaptı.", "s": "پرواز ما دو ساعت تأخیر داشت."}} → {"id": "w05", "t": "uçuş", "pl": "uçuşlar", "s": "پرواز", "pr": "اوچوش", "emoji": "", "ex": {"t": "Uçuşumuz iki saat rötar yaptı.", "s": "پروازمان دو ساعت تأخیر داشت."}} | Headword 'uçak' is already taught in A2 u02 (below level); replaced by 'uçuş' (not taught in any tr-fa level; used in this unit: 'uçuşumuzu iptal ettiler'). Also removes the ✈️/🛫 (uçak/havalimanı) picture clash. |
| u05 | grammar[1].exercises[3].answer | ['hazırladıktan'] → ['hazırladıktan', 'topladıktan'] | "Bavulları topladıktan sonra" (packing the bags) is the most natural collocation. |
| u05 | grammar[1].exercises[7].alts | [] → ['Bavulları yola çıkmadan önce kontrol et.'] | Equally natural word order. |
| u06 | words[1].emoji (fiyat) | 💰 → "" | 💰 (money bag) does not show "price" and clashes with nakit 💵 in the same unit (two money pictures in one picture question). |
| u06 | words[7].emoji (beden) | 👕 → "" | 👕 shows a T-shirt (tişört), not a clothing size; misleading in "Which picture is it?". |
| u06 | grammar[1].exercises[7].alts | [] → ['Bu ceket bence daha şık.'] | Equally natural word order. |
| u07 | grammar[1].exercises[6].alts | [] → ['Annemi dün akşam arayamadım.'] | Equally natural word order. |
| u07 | grammar[1].exercises[7].alts | [] → ['Yeni uygulamayı sonunda indirebildik.'] | Equally natural word order. |
| u08 | words[1] | {"id": "w02", "t": "kuzen", "pl": "kuzenler", "s": "فرزندِ عمو، دایی، خاله یا عمه", "pr": "کوزِن", "emoji": "", "ex": {"t": "Kuzenim Ankara'da üniversitede okuyor.", "s": "پسرعمه‌ام در آنکارا دانشجوست."}} → {"id": "w02", "t": "damat", "pl": "damatlar", "s": "داماد", "pr": "دامات", "emoji": "🤵", "ex": {"t": "Damadımız ailemizle çok iyi geçiniyor.", "s": "دامادمان با خانواده‌ی ما خیلی خوب کنار می‌آید."}} | Headword already taught in A2 u04 (kuzen, teyze, hala, torun are all A2 u04 headwords; below level). Replaced by a B1 family/relationship word not taught in any tr-fa level; 'damat' is used in this unit's dialogue, reading and grammar, and pairs with gelin 👰. |
| u08 | words[2] | {"id": "w03", "t": "teyze", "s": "خاله", "pr": "تِیزِه", "emoji": "", "ex": {"t": "Teyzem annemden iki yaş küçük.", "s": "خاله‌ام دو سال از مادرم کوچک‌تر است."}} → {"id": "w03", "t": "kayınpeder", "s": "پدرشوهر، پدرزن", "pr": "کایِنپِدِر", "emoji": "", "ex": {"t": "Kayınpederim her sabah parkta yürüyüş yapar.", "s": "پدرشوهرم هر صبح در پارک پیاده‌روی می‌کند."}} | Headword already taught in A2 u04 (kuzen, teyze, hala, torun are all A2 u04 headwords; below level). Replaced by a B1 family/relationship word not taught in any tr-fa level; pairs with kayınvalide (w06). |
| u08 | words[3] | {"id": "w04", "t": "hala", "s": "عمه", "pr": "هالا", "emoji": "", "ex": {"t": "Halam bize sık sık gelir.", "s": "عمه‌ام زیاد به خانه‌ی ما می‌آید."}} → {"id": "w04", "t": "bekâr", "s": "مجرد", "pr": "بِکیار", "emoji": "", "ex": {"t": "Kuzenim otuz yaşında ama hâlâ bekâr.", "s": "پسرخاله‌ام سی سالش است، ولی هنوز مجرد است."}} | Headword already taught in A2 u04 (kuzen, teyze, hala, torun are all A2 u04 headwords; below level). Replaced by a B1 family/relationship word not taught in any tr-fa level (A2 has evli; bekâr is its partner). |
| u08 | words[4] | {"id": "w05", "t": "torun", "pl": "torunlar", "s": "نوه", "pr": "تُرون", "emoji": "", "ex": {"t": "Dedemin altı torunu var.", "s": "پدربزرگم شش نوه دارد."}} → {"id": "w05", "t": "saygı", "s": "احترام", "pr": "سایگِ", "emoji": "", "ex": {"t": "Ailemizde büyüklere saygı çok önemlidir.", "s": "در خانواده‌ی ما احترام به بزرگ‌ترها خیلی مهم است."}} | Headword already taught in A2 u04 (kuzen, teyze, hala, torun are all A2 u04 headwords; below level). Replaced by a B1 family/relationship word not taught in any tr-fa level; fits the theme (relationships, respect for elders). |
| u08 | grammar[1].exercises[6].answer | ['oturduğumuz', 'yaşadığımız'] → ['oturduğumuz', 'yaşadığımız', 'kaldığımız'] | "Geçen yıl kaldığımız ev" (the house we lived/stayed in) is equally natural. |
| u09 | grammar[0].exercises[6].alts | [] → ['Her bayramda bu yemek pişirilir.'] | Equally natural word order. |
| u09 | grammar[1].exercises[7].alts | [] → ['Bütün komşularla bayramda görüşüyoruz.'] | Equally natural word order. |
| u10 | grammar[0].exercises[4].answer | ['bakmasam'] → ['bakmasam', 'bakmasaydım'] | «کاش … نگاه نمی‌کردم» also fits a regret about the past (-saydı is taught in this point; ex3 already accepts olsaydık). |

Note on the u08 replacements: kuzen, teyze, hala and torun are still used throughout u08 (dialogue, reading, grammar and sentences) as known A2 vocabulary, so this unit now recycles them instead of teaching them again. None of the new headwords (damat, kayınpeder, bekâr, saygı, uçuş) is a headword in any tr-fa level. Their `pr` follows the course conventions: â = «یا» as in B2 *kâr* «کیار», ı = «ـِ», and ğ is written as in *sağlık* «ساا».

## 3. Remaining issues (need a decision or bigger work)

### High
1. **Past continuous *-ıyordu* is used but never taught** (not in A1, A2 or B1).
   - Where it appears: u02 g02 ex4 *yaşıyordum*, u07 g02 *-abiliyordum / kullanamıyordum*, and u08 reading q2 *oturuyordu*.
   - C1 u04 already treats *-ıyordu* as known.
   - Suggestion: add a short third block to u01 g01 (memories): *-ıyordu* for background or habits in the past versus *-dı* for events. Use 2 examples and 1–2 exercises, and contrast it with Persian «می‌رفتم».
2. **Order drills from dialogue lines, phrases and sentences have no `alts`.** The app builds `order` steps from them (`orderStep` in `docs/js/lesson.js`), and Turkish allows many equally natural orders. Examples:
   - u03 sentences[0] *Mesai sabah dokuzda başlar* / *Sabah dokuzda mesai başlar*
   - u04 sentences[1] *Doktordan yarın için randevu aldım* / *Yarın için doktordan randevu aldım*

   Suggestion: either add `alts` systematically to all B1 sentences and lines of 7 words or fewer, or let the app accept any order when the learner has placed the verb last and the first tile is a valid sentence start. An app-level fallback would be cheaper than item-by-item work across all Turkish levels.
3. **Phrases below level.** Five of 80 B1 phrases repeat A1/A2 formulas:
   - *Afiyet olsun!* (A1 u04)
   - *İyi yolculuklar!* (A2 u02)
   - *Kolay gelsin!* (A2 u03, also B2 u03)
   - *Geçmiş olsun!* (A2 u05, also B2 u05)
   - *Kendimi iyi hissetmiyorum.* (A2 u05)

   Pass 3 kept them as revision, so I did not change them. Suggested B1 replacements that fit the dialogues:
   - u04 p03: *Ateşim bir türlü düşmüyor.*
   - u05 p08: *Uçuşum rötar yaptı.*
   - u09 p04: *Bayramınızı tebrik ederim.*
   - u03 p02: *Bugün izinliyim.*

   The formulas can stay in the dialogues.

### Medium
4. **No `pr` on dialogue lines, examples, readings or sentences at B1, although A2 has it.** This matches the curriculum, but the jump is steep for a family that relies on Persian-script guides. Suggestion: add `pr` to dialogue lines and grammar examples in u01–u03 at least (about 100 items), using the same conventions.
5. **Emoji reused across units of the level.** If review sessions mix units in picture questions, these pairs collide:
   - 💰 maaş (u03) / biriktirmek (u10)
   - 🤝 iş görüşmesi (u03) / barışmak (u08)
   - 💭 anı (u01) / hayal (u10)
   - 📦 taşınmak (u01) / ürün (u06)
   - 📅 geçen yıl (u01) / randevu (u04)

   Suggestion: set iş görüşmesi, ürün and geçen yıl to "" (they are the weakest pictures). Do not use 🐷 for biriktirmek (pork association).
6. **Loose pictures kept by earlier passes** (not wrong, but weak):
   - ikram etmek ☕ (u09; looks like *kahve*)
   - giyinmek 👔
   - şifre 🔑 (looks like *anahtar*)
   - egzersiz 🏃
   - yurt dışı ✈️
   - belki 🤔

   Consider "" for ikram etmek and şifre.

### Low
7. **u09 g02 ex1** *Ali ile ben yıllardır **tanışıyoruz***: this is colloquially fine, and pass 3 kept it. In a `choice` item that teaches the reciprocal voice, though, it may teach a non-standard use (normative: *birbirimizi tanıyoruz*). Suggestion: change the item to *Ali ile ben yıllardır e-postayla ___.* (*yazışıyoruz*).
8. **u01 g01 ex4** accepts only *yoruldum*; *yorgundum* (nominal past, taught in the same explain) would also fit the gap. The `s` «خسته شدم» points to *yoruldum*, so I left it.
9. **u07 dialogue[9]** *Üç bin beş yüz lira*: lira prices date quickly with inflation. Consider *Fiyatı parçaya göre değişiyor; yarın size haber veririm* (or simply accept that it will date).
10. **u09 reading[9]** *fala bakılır*: coffee-cup fortune telling is a real custom, but some religious families dislike *fal*. It is presented neutrally, so this is fine; flagged only for awareness.
11. **u06 g02**: the curriculum calls this point "eşitlik -ca / -ce", but the unit teaches *-ca* as opinion, manner and quantity (bence, kolayca, saatlerce), and treats equality with *kadar* in g01. The content is correct; only the curriculum label is off.

## 4. Improvement ideas (prioritised)

1. **Progression from A2.** Two of the first four grammar points are pure revision: -dı (A2 u01/u09) and the future (A2 u07/u10). Keep each to one short "review" paragraph and spend the space on what B1 learners actually lack:
   - *-ıyordu*, as in issue 1
   - contrast drills of *-dı* versus *-mış* (pick the right one from context), which are the real B1 difficulty
   - *-acak* versus the aorist for promises (*yaparım*) versus plans (*yapacağım*)
2. **More production, fewer form-recognition choices.** Many `choice` items test spelling variants (*yatdım / yatım*, *gitceğim*, *çıkünce*), which are mainly harmony drills. At B1, more items should make the learner choose between meanings, for example:
   - *-ınca* or *-ken*?
   - *-malı* or *zorunda*?
   - *-an* or *-dık*? (u08 already does this well in g01 ex0 and g02 ex0)
3. **Vocabulary recycling.** New words are recycled well within each unit but rarely across units. Suggestions:
   - Make the u10 reading reuse u03 (iş, toplantı, maaş) and u05 (seyahat, vize) vocabulary.
   - Add one cumulative review reading after u05 and u10 (e.g. Mina's e-mail to her parents), which would consolidate the level.
4. **Dialogue realism and listening.** Dialogues are good, but every speaker is perfectly polite and complete. Add one or two natural spoken features per dialogue (*Şey…*, *Yani*, *Hani*, *Aynen*) and one misunderstanding or repair. B1 listening needs this, and the phrases already teach repair language (*Seni duyamıyorum*).
5. **Cultural fit.** The Iranian–Turkish comparison works very well in u09 (Nevruz/Bayram, hane tekani, haft sin). Do the same lightly elsewhere:
   - u04: how pharmacies and *reçete* work in Turkey versus Iran
   - u06: *pazarlık* (bargaining) versus fixed prices
   - u08: *kız isteme* versus خواستگاری, now that *damat* is a headword

   These are practical for a family actually living in or visiting Turkey.
6. **Character continuity.** Mina, Reza and Maryam recur. After pass 3, the facts are consistent:
   - Mina: from Tebriz, moved to Tehran at 12, accountant in İstanbul, 32, married, parents in Iran.
   - Reza: 35, engineer in İzmir.

   Consider a one-line "cast" note in the curriculum so future edits keep it that way.
7. **Explanations.** They are clear and correct. Two small additions would help:
   - u02 g02: *-ken* also follows *-yor* and *-mış* (*giderken / gidiyorken*). This matters for reading B2 texts.
   - u07 g01: show the double causative that the unit itself uses (sentences[0] *değiştirttim*), with one line of explanation.


## 5. Pass 5 (Nov 2026)

Brief: `review/BRIEF_FIX5.md` (tasks 1–7) for `content/tr-fa/B1/u01–u10.json`. I read the course-wide pass-5 notes in
`tr-fa-A1.md` § 5a first. I kept everything that pass did: the cast sheet, the cross-level phrase replacements, *-ıyordu* in
u01 g01, the new u04 g03 (*-dır*) and the `pr` conventions. I checked those new parts for quality (correct, natural; one
fix: the u04 g03 explanation said *Ali doktor*, but in `CAST.md` Ali is a teacher → *Ali öğretmen. = علی معلم است.*) and gave
them production items and `why`s like the rest. After the edits `tools/validate.py` prints OK for all 10 files,
`tools/audit.py` reports no findings for any tr-fa level, `tools/repeats.py tr-fa` finds 0 repeats, and
`tools/pr_words.py tr-fa` finds no new word with two `pr` spellings (only the A1 u00 letter names, on purpose).

### 5.1 Status of every pass-4 issue and idea

| # | Issue / idea | Status |
|---|---|---|
| H1 | *-ıyordu* used but never taught | Done by the course-wide pass (u01 g01). Checked: explanation, table, 2 examples, 2 exercises are correct. This pass replaced two spelling drills in the same point with a function item that contrasts *-ıyordu* with present/future (*Çocukken nerede yaşıyordunuz?*). |
| H2 | Order drills from dialogue lines, phrases and sentences have no `alts` | Done. I went through all 227 items of 8 words or fewer without `…()/=` (the ones `orderStep` can use) and added `alts` to 48 of them (49 alternative orders), plus 3 grammar `order` items. I only listed orders that a native speaker would write in a neutral context (mostly time adverbial ↔ subject/object at the start, *burada/bugün* before or after the subject). I did not list inverted orders (verb not last), and I did not list orders that move the focus in an odd way. Fixed formulas (*Allah şifa versin!*, *Kime çekmiş?*) and two-word items have no other order. The full list is in 5.3. App fallback: see 5.8. |
| H3 | Phrases below level (Afiyet olsun, İyi yolculuklar, Kolay gelsin, Geçmiş olsun, Kendimi iyi hissetmiyorum) | Done by the course-wide pass (u03 p02, u04 p01/p03, u05 p08, u06 p01, u09 p03/p04). `repeats.py` shows 0 repeats. |
| M4 | No `pr` on dialogue lines and examples at B1 | Done for u01–u03, as suggested: `pr` on all 33 dialogue lines and all 32 grammar examples (65 items). I followed `PR_DICT.md`: spellings that already exist in the course are reused, and new words follow its rules. `pr_words.py` confirms the course stays consistent. From u04 on, B1 keeps `pr` on words and phrases only, as the curriculum says, so the support fades out gradually across the level. |
| M5 | Emoji reused across units | Done. iş görüşmesi 🤝, ürün 📦 and geçen yıl 📅 are now "". The other duplicates (💭 anı/hayal, 💰 maaş/biriktirmek, 📦 taşınmak, 🤝 barışmak, 📅 randevu) are all `sym` now, so none of them can appear in a picture question. |
| M6 | Loose pictures (ikram etmek ☕, şifre 🔑, giyinmek 👔, egzersiz 🏃, yurt dışı ✈️, belki 🤔) | Done. ikram etmek and şifre are now ""; giyinmek, egzersiz, yurt dışı and belki are marked `sym`. |
| L7 | u09 g02 ex1 *tanışıyoruz* for "know each other for years" | Done. The item is now *Ali ile ben yıllardır e-postayla ___.* [yazışıyoruz / yazılıyoruz / yazdırıyoruz] with a new `s` and `why`. |
| L8 | u01 g01 ex4 accepts only *yoruldum* | Done. *yorgundum* is added to `answer`, and the `why` names both forms. |
| L9 | u07 dialogue[9] lira price dates quickly | Done. The line is now *Parçanın fiyatına bağlı; yarın size haber veririm. Altı ay garantisi var.* with a new `s`. |
| L10 | *fala bakılır* in the u09 reading | Not changed, on purpose. It is presented neutrally as a custom; the pass-4 critic flagged it for awareness only. |
| L11 | Curriculum label "eşitlik -ca / -ce" for u06 g02 | Not done. The label is in the shared curriculum file, which is outside my slice. The unit content is correct. Lead: rename it to "-ca / -ce (bence, kolayca, saatlerce) ve gibi" in `content/CURRICULUM_EN_A2_B1_TR_B1_B2.md`. |
| I1 | Progression from A2: less re-teaching of *-dı* / *-acak*, contrast drills | Partly done. I did not shorten the revision paragraphs, because they are short and correct. The new production items add the contrasts the critic asked for: *-ıyordu* vs. *-ıyor/-acak* (u01 g01), discovered *-mış* (u01 g02), a plan with *-acak* (u02 g01), and an offer or promise with the aorist (*Merak etme, ben taşırım.*, u03 g01). |
| I2 | More production, fewer form-recognition choices | Done. 40 of the 42 replaced items were spelling or person-form drills (*yatdım*, *gitceğim*, *çıkünce*, *kapatur*, *beslenmelıyız*, *içarsen*, *yapdıktan*, *vardıkten*…). Each was replaced by a rewrite item or a function item (5.2). |
| I3 | Vocabulary recycling across units; cumulative review readings | Partly done. The u10 reading now recycles u03 and u05 words (*İşimden ve maaşımdan memnunum*, *her yıl yeni bir ülkeye seyahat etmek*). All new items reuse level words (see 5.2). Extra review readings after u05 and u10 are not done, because the schema allows only one reading per unit. App or structure request in 5.8. |
| I4 | Dialogue realism (*Şey…*, *Yani*, *Hani*, repair) | Partly done: u07 line 4 *Eyvah, fotoğraflar silinir mi?* and u10 line 8 *Şey… iki yıl önce.* Most dialogues already have such features (*Aa*, *Vay*, *Neyse*, *yani*, *Ha ha*, *Bir saniye…*). A full repair sequence would need extra lines, and most dialogues are already at the 12-line maximum. |
| I5 | Cultural fit (pharmacy/prescription, bargaining, kız isteme) | Done for u04 and u06. New u04 reading sentence: *Antibiyotik gibi birçok ilacı eczaneden sadece reçeteyle alabilirsiniz.* It has its own inference question. New u06 reading sentence: *Pazarda biraz pazarlık da yapabilirsiniz; markette ise fiyatlar hep aynıdır.* Kız isteme is already covered by the u09 reading, so I made no change in u08. |
| I6 | Character continuity / cast note | Done by the course-wide pass (`content/tr-fa/CAST.md`). I checked every new item against it: Mina's parents in Iran, Elif a doctor, Nazanin Mina's daughter, Can reading novels. I also changed the u10 reading *derdi* → *der* (and the q4 question with it): with *Keşke babam da burada olsa*, the past habit *derdi* suggested that Mina's father had died, but in the cast sheet he lives in Iran. |
| I7 | Explanations: *-ken* after *-yor/-mış*; double causative | Done. u02 g02 has a new line on *gidiyorken*, *gelmişken*. u07 g01 has a new line on *değiştir → değiştirt* (*Saatimin pilini değiştirttim*). |

### 5.2 Production items (task 2): 42

Every grammar point (20 points + the new u04 g03) has one rewrite `type` item and one function `choice` item. I replaced 2 of each
point's exercises, choosing the most repetitive ones (mostly spelling-variant choices), so the counts stay the same: 8 per point and
10 in u01 g01. u04 g03 had 6 exercises, so I added its 2 items, giving 8. Every new item has a `cue`, a `task` in Persian, a `why`,
and an `s` that translates the correct sentence. No `cpr`/`pr` on exercises, because B1 does not use `pr` in grammar.
For function items, exactly one option fits; the others are wrong in form, person or tense, or do not answer the cue.

| Unit | Point | Replaced | Rewrite (cue → answer) | Function (cue → right reply) |
|---|---|---|---|---|
| u01 | g01 | ex0 *Dün gece erken ___.*; ex1 *Geçen yıl ailemle İzmir'e ___.* | Geçen hafta komşumuzu ziyaret ettik. → Geçen hafta komşumuzu ziyaret **etmedik**. | Çocukken nerede yaşıyordunuz? → Tebriz'de yaşıyorduk. |
| u01 | g02 | ex0 *Duydun mu? Emre yeni bir iş ___.*; ex2 *Ayşe bugün okula ___, hastaymış.* | Komşumuzun oğlu Almanya'ya taşındı. → Komşumuzun oğlu Almanya'ya **taşınmış**. | Bu Nazanin mi? Onu iki yıldır görmedim! → Vay, ne kadar büyümüş! |
| u02 | g01 | ex0 *Yarın Ankara'ya trenle ___.*; ex1 *Acele et, otobüsü ___!* | Dün Kadıköy'e vapurla gittik. → Yarın Kadıköy'e vapurla **gideceğiz**. | Bu akşam ne yapacaksın? → Annemle sinemaya gideceğim. |
| u02 | g02 | ex0 *İşten ___ markete uğradım.*; ex1 *Yolda ___ eski bir arkadaşımı gördüm.* | Vapura bindik. Sonra çay içtik. → Vapura **binince** çay içtik. | Yolda yürüyordum. O sırada Can'ı gördüm. → Yolda yürürken Can'ı gördüm. |
| u03 | g01 | ex0 *Ben her gün sekizde işe ___.*; ex2 *Pencereyi ___ mısınız? Çok soğuk.* | Ben öğle yemeğini ofiste yerim. → Ben öğle yemeğini ofiste **yemem**. | Bu çanta çok ağır! → Merak etme, ben taşırım. |
| u03 | g02 | ex0 *Ben yarın sabah erken kalkmak ___.*; ex1 *Bu formu doldurman ___.* | Yarın erken kalkmak zorundayım. → Yarın erken **kalkmam** gerekiyor. | Cumartesi ofise gelmem gerekiyor mu? → Hayır, gelmek zorunda değilsin. |
| u04 | g01 | ex1 *Biz daha sağlıklı ___.*; ex2 *Bu kadar çok şeker ___, dişlerin için kötü.* | Bu ilacı aç karnına almalısın. → Bu ilacı aç karnına **almamalısın**. | Üç gündür boğazım ağrıyor. → Bence doktora gitmelisin. |
| u04 | g02 | ex0 *Bol su ___ baş ağrın geçer.*; ex2 *İlacı düzenli ___, iyileşmezsin.* | İlacı düzenli alırsan çabuk iyileşirsin. → İlacı düzenli **almazsan** iyileşmezsin. | Akşam ateşim yükselirse ne yapayım? → Ateşin yükselirse bu ilacı al. |
| u04 | g03 | ex6 (added); ex7 (added) | Düzenli egzersiz kalp için iyi. → Düzenli egzersiz kalp için **iyidir**. | Elif neden telefonu açmıyor? → Bilmiyorum, şimdi hastanededir. |
| u05 | g01 | ex0 *Döviz bozdurmak ___ bankaya gittim.*; ex2 *Denizde ___ için Antalya'ya gidiyoruz.* | Balonları görmek istedik, bu yüzden erken kalktık. → Balonları **görmek için** erken kalktık. | Neden bu kadar erken çıkıyorsun? → Toplantıya geç kalmamak için. |
| u05 | g02 | ex0 *Kahvaltı ___ sonra müzeye gittik.*; ex2 *Otele ___ sonra hemen uyudum.* | Önce bavulumu hazırladım, sonra pasaportumu kontrol ettim. → Pasaportumu kontrol **etmeden** önce bavulumu hazırladım. | Müzeye ne zaman gidelim? → Kahvaltı yaptıktan sonra gidelim. |
| u06 | g01 | ex0 *Bu çanta ___ daha ucuz.*; ex5 *Bu, dükkândaki ___ iyi kumaş.* | Bu çanta mağazadaki öteki çantalardan daha ucuz. → Bu, mağazadaki **en ucuz** çanta. | Lacivert mont siyah mont kadar sıcak mı? → Evet, o da siyah mont kadar sıcak. |
| u06 | g02 | ex0 *___ bu mont çok pahalı. Sen ne düşünüyorsun?*; ex2 *Ben de ___ gibi indirimleri bekliyorum.* | Annem pazardan alışveriş yapar; ben de öyle yaparım. → Ben de **annem gibi** pazardan alışveriş yaparım. | Sizce bu ceket bana yakışıyor mu? → Bence çok yakışıyor, çok şık. |
| u07 | g01 | ex1 *Bilgisayarım bozuldu; yarın tamir ___.*; ex4 *Annem pilavı ___, ben de salatayı yaptım.* | Tamirci telefonumu tamir etti. → Telefonumu tamirciye tamir **ettirdim**. | Bu güzel fotoğrafları kim çekti? → Ben çekmedim, düğünde bir fotoğrafçıya çektirdik. |
| u07 | g02 | ex1 *Şifreni hatırlayabildin mi? Evet, sonunda ___.*; ex2 *Telefonumun şarjı bitti, o yüzden seni ___.* | Fotoğraflarımı yedekleyebildim. → Fotoğraflarımı **yedekleyemedim**. | Dün akşamki toplantıya katılabildin mi? → Hayır, internet koptu, katılamadım. |
| u08 | g01 | ex2 *Annemle telefonda ___ kadın teyzem.*; ex5 *Düğünde en çok dans ___ damadın babasıydı.* | Bir kadın gelinin yanında duruyor; o benim teyzem. → Gelinin yanında **duran** kadın benim teyzem. | Düğünde en çok kim dans etti? → En çok dans eden damadın babasıydı. |
| u08 | g02 | ex2 *Bu, babamın bana ___ saat.*; ex3 *Kuzenimin ___ şehir Ankara.* | Annem bir hikâye anlattı. Hikâye çok güzeldi. → Annemin **anlattığı** hikâye çok güzeldi. | Hangi kitabı okuyorsun? → Can'ın bana önerdiği kitabı. |
| u09 | g01 | ex0 *Türkiye'de çay genellikle ince belli bardaklarda ___.*; ex2 *Bu şarkı düğünlerde çok ___.* | Türkiye'de insanlar çayı ince belli bardaklarda içer. → Türkiye'de çay ince belli bardaklarda **içilir**. | Bu şarkıyı düğünlerde hep duyuyorum. → Evet, bu şarkı düğünlerde çok söylenir. |
| u09 | g02 | ex0 *Çocuklar banyoda ___.*; ex2 *Hadi çabuk ___, misafirler geliyor!* | Bayramda akrabalarımızı gördük, onlar da bizi gördü. → Bayramda akrabalarımızla **görüştük**. | Neden hâlâ hazır değilsin? Misafirler geliyor! → Bir dakika, hemen giyiniyorum. |
| u10 | g01 | ex1 *Keşke daha büyük bir evimiz ___.*; ex2 *Keşke ben de sizinle ___.* | Türkçeyi iyi konuşamıyorum. → Keşke Türkçeyi daha iyi **konuşabilsem**. | Dün akşamki partiye neden gelmedin? Çok eğlenceliydi! → Keşke ben de gelseydim! |
| u10 | g02 | ex0 *Erken yatarsan sabah daha kolay ___.*; ex3 *Bu kapıdan ___ miyim?* | Belki bu yıl kendi kafemi açarım. → Bu yıl kendi kafemi **açabilirim**. | Bu akşam bize gelebilir misin? → Çok isterim, ama işim çok; gelemeyebilirim. |

### 5.3 Order `alts` (main issue)

**u01**

- phrases[3] *Şimdi aklıma geldi.* → Aklıma şimdi geldi.
- sentences[1] *Dün akşam eski bir arkadaşımı aradım.* → Eski bir arkadaşımı dün akşam aradım.
- sentences[2] *Bu fotoğrafı on yıl önce çektik.* → On yıl önce bu fotoğrafı çektik.
- sentences[3] *Geçen hafta hiç dışarı çıkmadım.* → Geçen hafta dışarı hiç çıkmadım.
- dialogue.lines[0] *Reza, bak! Dolapta eski fotoğraflarımızı buldum.* → Reza, bak! Eski fotoğraflarımızı dolapta buldum.
- dialogue.lines[5] *Tabii, komşumuzun oğlu Behzad. Çok iyi arkadaştık.* → Tabii, Behzad, komşumuzun oğlu. Çok iyi arkadaştık.

**u02**

- phrases[0] *Bu otobüs Kadıköy'e gidiyor mu?* → Kadıköy'e bu otobüs gidiyor mu?
- sentences[0] *Yarın işe metroyla gideceğim.* → Yarın metroyla işe gideceğim. / İşe yarın metroyla gideceğim.
- sentences[1] *Kabataş'ta tramvaya aktarma yapacağız.* → Tramvaya Kabataş'ta aktarma yapacağız.
- sentences[2] *Eve varınca seni arayacağım.* → Seni eve varınca arayacağım.
- sentences[4] *Sabahları trafik çok yoğun oluyor.* → Trafik sabahları çok yoğun oluyor.
- sentences[6] *Bu akşam bize gelecek misin?* → Bize bu akşam gelecek misin?
- dialogue.lines[0] *Can, cumartesi Kadıköy'e gideceğim ama yolu bilmiyorum.* → Can, Kadıköy'e cumartesi gideceğim ama yolu bilmiyorum.
- grammar[1].exercises[6] *Metroya binince sana haber vereceğim.* → Sana metroya binince haber vereceğim.

**u03**

- phrases[3] *Bugün işim başımdan aşkın.* → İşim bugün başımdan aşkın.
- phrases[5] *Size en kısa zamanda dönüş yapacağım.* → En kısa zamanda size dönüş yapacağım.
- sentences[0] *Mesai sabah dokuzda başlar.* → Sabah dokuzda mesai başlar.
- sentences[1] *Ben hafta sonları çalışmam.* → Hafta sonları ben çalışmam.
- sentences[5] *Müdürümüz her pazartesi toplantı yapar.* → Her pazartesi müdürümüz toplantı yapar.
- sentences[7] *Annem yakında emekli olacak.* → Yakında annem emekli olacak.
- dialogue.lines[3] *Teşekkür ederim. Burada mesai kaçta başlar?* → Teşekkür ederim. Mesai burada kaçta başlar?

**u04**

- sentences[0] *Üç gündür başım ağrıyor.* → Başım üç gündür ağrıyor.
- sentences[1] *Doktordan yarın için randevu aldım.* → Yarın için doktordan randevu aldım.
- sentences[2] *Bu ilacı günde iki kez almalısın.* → Günde iki kez bu ilacı almalısın.
- sentences[5] *Ateşin düşmezse tekrar doktora gideriz.* → Ateşin düşmezse doktora tekrar gideriz.

**u05**

- sentences[3] *Yola çıkmadan önce pasaportunu kontrol et.* → Pasaportunu yola çıkmadan önce kontrol et.
- sentences[6] *Bu fotoğrafı Kapadokya'da çektik.* → Kapadokya'da bu fotoğrafı çektik.
- dialogue.lines[4] *Evet, kahvaltı yedi ile on arasında, restoranda.* → Evet, kahvaltı restoranda, yedi ile on arasında.
- dialogue.lines[7] *Harika. Kaleiçi'ne buradan yürüyerek gidebilir miyiz?* → Harika. Buradan Kaleiçi'ne yürüyerek gidebilir miyiz?
- grammar[0].exercises[6] *Türkçe öğrenmek için her gün çalışıyorum.* → Her gün Türkçe öğrenmek için çalışıyorum.
- grammar[0].exercises[7] *Bilet almak için havalimanına erken gittik.* → Havalimanına bilet almak için erken gittik.

**u06**

- phrases[7] *Fiyat-performans açısından en iyisi bu.* → Fiyat-performans açısından bu en iyisi.
- sentences[1] *Sizce hangi telefon daha iyi?* → Hangi telefon sizce daha iyi?
- sentences[4] *İndirim günlerinde mağazalar çok kalabalık oluyor.* → Mağazalar indirim günlerinde çok kalabalık oluyor.

**u07**

- phrases[4] *Burada internet çekmiyor.* → İnternet burada çekmiyor.
- sentences[0] *Geçen hafta saatimin pilini değiştirttim.* → Saatimin pilini geçen hafta değiştirttim.
- sentences[1] *Dün seni aradım ama sana ulaşamadım.* → Seni dün aradım ama sana ulaşamadım.
- sentences[4] *Annem sonunda yeni telefonunu kullanmayı öğrenebildi.* → Sonunda annem yeni telefonunu kullanmayı öğrenebildi.
- sentences[5] *Öğretmen bize her hafta bir kitap okutuyor.* → Öğretmen her hafta bize bir kitap okutuyor.
- sentences[6] *Burada internet çekmiyor, sonra ararım.* → İnternet burada çekmiyor, sonra ararım.
- dialogue.lines[0] *Merhaba. Telefonum dün yere düştü ve ekranı kırıldı.* → Merhaba. Dün telefonum yere düştü ve ekranı kırıldı.
- dialogue.lines[7] *Parçayı bugün getirtiyorum; yarın öğlene kadar hazır olur.* → Bugün parçayı getirtiyorum; yarın öğlene kadar hazır olur.
- dialogue.lines[10] *Tamam, değiştirelim. Yarın eşimi gönderirim, telefonu o alır.* → Tamam, değiştirelim. Eşimi yarın gönderirim, telefonu o alır.

**u08**

- sentences[4] *Kardeşimle bazen kavga ederiz, ama hemen barışırız.* → Bazen kardeşimle kavga ederiz, ama hemen barışırız.

**u09**

- sentences[0] *Türkiye'de bayramlarda büyükler ziyaret edilir.* → Bayramlarda Türkiye'de büyükler ziyaret edilir.
- sentences[3] *Türkçede buna ne denir?* → Buna Türkçede ne denir?
- sentences[5] *Komşumuzla her sabah merdivende selamlaşırız.* → Her sabah komşumuzla merdivende selamlaşırız.
- sentences[6] *Nevruz'dan önce evler baştan sona temizlenir.* → Evler Nevruz'dan önce baştan sona temizlenir.
- dialogue.lines[6] *Nevruz'dan önce evler temizlenir mi?* → Evler Nevruz'dan önce temizlenir mi?
- dialogue.lines[11] *Seve seve! Gelecek Nevruz'da seni bize davet ediyorum.* → Seve seve! Seni gelecek Nevruz'da bize davet ediyorum.

**u10**

- sentences[6] *Hayallerin için hiçbir zaman geç değil.* → Hiçbir zaman hayallerin için geç değil.

### 5.4 Pictures (task 5)

38 `sym` marks, 5 emoji set to "". Literal pictures (🎂 doğum günü, 📷 fotoğraf, 🚇 metro, 🧳 bavul, 💊 ilaç, 👰 gelin …) stay unmarked.

| Unit | `sym: true` | emoji → "" |
|---|---|---|
| u01 | anı 💭, çocukluk 🧒, taşınmak 📦 | geçen yıl 📅→"" |
| u02 | trafik 🚦, araba sürmek 🚗 |  |
| u03 | maaş 💰, başvurmak 📝 | iş görüşmesi 🤝→"" |
| u04 | ateş 🌡️, grip 🤧, randevu 📅, egzersiz 🏃 |  |
| u05 | seyahat 🗺️, pasaport 🛂, havalimanı 🛫, konaklamak 🏨, tarihî 🏛️, hediyelik eşya 🎁 |  |
| u06 | indirim 🏷️ | ürün 📦→"" |
| u07 | şarj etmek 🔋, mesaj 💬, göndermek 📤, indirmek 📥, bağlantı 🔗, görüntülü arama 📹, tamir etmek 🔧 | şifre 🔑→"" |
| u08 | evlenmek 💍, barışmak 🤝 |  |
| u09 | bayram 🎉, kutlamak 🎊, giyinmek 👔 | ikram etmek ☕→"" |
| u10 | hayal 💭, hedef 🎯, dilek 🌠, biriktirmek 💰, yurt dışı ✈️, başarmak 🏆, belki 🤔, şans 🍀 |  |

### 5.5 Inference questions (task 4): 10

One per reading, added as the last question. Each is in Turkish with a Persian `s`, its answer is option 0, and the answer follows
from the text without being written there word for word.

| Unit | Question | Answer |
|---|---|---|
| u01 | Mina eski evinin yerine gelince ne hissetti? | Şaşırdı, çünkü ev artık yoktu. |
| u02 | Kaveh'in çocukları daha önce İstanbul'a gelmiş mi? | Hayır, muhtemelen ilk kez geliyorlar. |
| u03 | Hakan şu an kendi şirketini kurabilir mi? | Henüz değil, çünkü yeterli parası yok. |
| u04 | Doktora gitmeden eczaneden antibiyotik alabilir miyiz? | Genellikle hayır; önce doktordan reçete almalıyız. |
| u05 | Aile balonları görmek için neden saat beşte kalktı? | Çünkü balonlar güneş doğmadan önce uçuyor. |
| u06 | Pazara akşamüstü giden biri ne kazanır? | Daha ucuza alışveriş yapar. |
| u07 | Telefonsuz hafta yazara ne öğretti? | Telefonu daha az kullanmanın iyi olduğunu. |
| u08 | Yazar bu bayramı nasıl hatırlayacak? | Mutlu ve duygulu bir gün olarak. |
| u09 | İranlı bir misafir bu gelenekleri nasıl bulur? | Tanıdık bulur, çünkü İran'da da misafirperverlik önemlidir. |
| u10 | Mina bu mektubu neden yazıyor? | Beş yıl sonra hayallerini ve hedeflerini hatırlamak için. |

### 5.6 Other changes

- `why` (task 3): 84 kept `choice`/`type` items got a `why`. The 42 production items have one too, and the 7 course-wide items already had one. All 133 grammar `choice`/`type` items of B1 now have a `why`. Each is one Persian sentence, specific to the item, under 160 characters.
- u04 g03 explanation: *Ali doktor.* → *Ali öğretmen.* (cast).
- u04 reading: new sentence 10 (prescriptions). u06 reading: new sentence 4 (bargaining). u10 reading: sentences 2, 7 and 8, and q4 (see I3, I6).
- u07 dialogue lines 4 and 9, and u10 dialogue line 8 (see L9, I4).
- u02 g02 and u07 g01 explanations: one line each (see I7).
- u09 g02 ex1 rewritten; u01 g01 ex4 `answer` + *yorgundum* (see L7, L8).
- `pr` on 65 items in u01–u03 (see M4).

### 5.7 Counts

| Category | Count |
|---|---|
| Production items (rewrite + function) | 42 (21 + 21) |
| `why` added | 126 (84 on kept items + 42 on new items); 133 of 133 items now have one |
| Inference questions | 10 |
| `sym` marks | 38 |
| Emoji set to "" | 5 |
| Order `alts` | 52 alternative orders on 51 items (48 phrases, lines and sentences; 3 grammar `order` items) |
| `pr` added (dialogue lines + examples, u01–u03) | 65 |
| Other content fixes | 14 (1 cast fix, 2 explanation lines, 2 new reading sentences, 3 changed reading sentences, 1 reading question, 3 dialogue lines, u09 g02 ex1, u01 g01 ex4 `answer`) |

### 5.8 For the lead (app)

1. **Render the pass-5 fields.** `grammarEx` in `docs/js/lesson.js` does not use `cue`, `task` or `why` yet. The 42 B1 function items have `t: "___"` and make no sense without the `cue`; `why` should appear after a wrong answer. Picture questions also need to skip words with `sym: true`.
2. **Order drills with free word order.** `alts` now lists the natural alternatives for B1. A cheap safety net for the remaining Turkish levels: also accept an answer when only the constituents before the verb are permuted and the verb tile is last. Better still, never pick a multi-sentence dialogue line (with `. ` or `? ` inside) for an `order` step, because its sentence order is fixed but learners cannot tell where one sentence ends.
3. **Review readings.** A cumulative review reading after u05 and u10 needs either a second reading slot in the schema or a "review" unit kind.
4. **Curriculum label** for tr-fa B1 u06 g02 (see L11).
