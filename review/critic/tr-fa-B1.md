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
