# Critical review, pass 4: tr-fa A2 (u01–u10)

I read every item in all 10 units: titles, goals, words (`t`, `s`, `pr`, `pl`, `ex`, emoji), phrases, dialogues, grammar (title, explanation, table, examples, exercises, `alts`), readings, questions and sentences.

Before this I read `content/SCHEMA.md`, the Turkish A2 table in `content/CURRICULUM_NEW_LEVELS.md`, `review/BRIEF_PASS3.md`, and the earlier reviews `review/tr-fa-A2-new.md` and `review/tr-fa-A2-pass3.md`. I did not undo any decision recorded there.

Automatic checks I ran myself:
- **`pr` alignment with `t`**, word by word, across the whole level.
  - No field has a word missing or extra.
  - Every Turkish word form is spelled the same way in every place it appears.
  - The only exception is the known «میْ» validator workaround in u01.
- **Rule-based transliteration check of every `pr` word.** Every difference is a documented convention, such as -iyor «یُر», iyi «ای‌یی», ğ handling, shadda and Persian names.
- **Persian text:** I scanned for Arabic ي/ك/ى/ة, missing ZWNJ (می / ها / ه ی / تر / ه ام…) and "Neda". Nothing real was found.
- **Voiced text:** I scanned for digits, slashes, brackets and symbols.
- **Headword duplicates** inside A2 and against A1, B1, B2 and C1.
- `tools/validate.py` prints OK for all 10 files. `tools/audit.py` reports `tr-fa A2: {}`.

## 1. Verdict

This is a solid, accurate A2 level, and it is ready for the family to use.
- The Turkish is natural standard İstanbul Turkish. The Persian translations are idiomatic.
- The `pr` guides are fully consistent with the A1 conventions.
- The grammar explanations are correct and well pitched. Each one starts from what the learner knows in Persian and in A1 (*«را»* for -(y)ı, *«از»* for -den, *«به»* in *beşe on var*, the reversed order in *annemin arabası*).
- The themes, the dialogues (a Tebriz family photo, Nevruz at grandmother's, mercimek çorbası, haggling at the *salı pazarı*) and the readings suit an Iranian family well.
- I found no wrong sentence, translation, answer key or explanation in this pass.

The weaknesses are structural rather than errors:
- **Overlap with B1:** headwords, phrases and two grammar points are repeated there.
- **The same people have different lives in different units.**
- **Exercise formats are monotonous:** many suffix-only `type` gaps, few `order` items, and three-option multiple-choice reading questions.
- **A few `choice` items are decided only by the Persian `s`.**

## 2. Fixed

| Unit | Path | Before → After | Reason |
|---|---|---|---|
| u01 | `sentences[5].alts` (new) | — → ["Evde bütün gün kaldık."] | Natural order with the same tiles: a time adverbial right before the verb is normal focus position. Sentences of 8 words or fewer are used as `order` tasks, so without this alt a correct answer was rejected. |
| u08 | `sentences[3].alts` (new) | — → ["Parkta yemekten sonra yürüyoruz."] | Same reason: the place and time adverbials can swap. |
| u09 | `sentences[1].alts` (new) | — → ["Hava bugün yirmi beş derece."] | Same reason. This is the most neutral alternative order. It matches the alt pattern already used in u09 `sentences[0]` and `g01 ex7` (*Hava dün …*). |

**Count by category:**

| Category | Fixes |
|---|---|
| `alts` | 3 |
| Target text | 0 |
| Translation (`s`) | 0 |
| `pr` | 0 |
| Grammar explanation / table | 0 |
| Exercise keys / reading answers | 0 |
| Emoji | 0 |
| Persian orthography (ZWNJ, ي/ك) | 0 |
| Voiced text with symbols or digits | 0 |

## 3. Remaining issues (need a decision or bigger work)

### High

1. **B1 repeats A2 material.** This should be fixed in B1/B2, not in A2.
   - **Headwords:** uçak (B1 u05), teyze, hala, kuzen, torun (B1 u08).
   - **Phrases:**
     - *İyi yolculuklar!* (B1 u05)
     - *Kolay gelsin!* (B1 u03, B2 u03)
     - *Geçmiş olsun!* (B1 u04, B2 u05)
     - *Kendimi iyi hissetmiyorum.* (B1 u04)
   - **Grammar:** B1 u01 g01 (-dı / -madı / -dı mı) and B1 u02 g01 (-(y)acak) re-teach A2 u01 and u07/u10 as main points.
   - **Suggestions:**
     - Replace the B1/B2 copies with level-appropriate items. Examples: *aktarma yapmak* instead of uçak; *kayınvalide* or *görümce* instead of teyze/hala; *Allah şifa versin* instead of Geçmiş olsun.
     - Turn B1 u01 g01 into "-dı vs. -mış contrast". Turn B1 u02 g01 into "-acak vs. -ecek gibi / -mak üzere" or a short "tekrar" block, with a "you already know …" line.

### Medium

2. **The same people have different lives in different units.** The A2 units are standalone, but a family reading them in order notices.
   - Mehmet is a teacher (u05 reading) and a market seller (u06 dialogue).
   - Emre has "a very small family: me and my sister" (u04). In u07 and u10 he has children.
   - Mina is Maryam's sister (u01) and Ali's wife (u04). In u04, Maryam is Ali's cousin.
   - Amir is in Istanbul (u01) and travels from Tehran (u02).
   - **Suggestion:** write a one-page cast sheet for tr-fa (name → age, city, job, family) and adjust the 3–4 lines that clash. Examples:
     - u06: make the seller "Mehmet Amca" and the teacher in u05 "Hasan Bey". The allowed list would need one extra older male name.
     - u04: change Emre's line 9 to *Benim ailem küçük: eşim, oğlum ve ben.* Lines 10–11 (*Kaç kardeşsiniz? — İki kardeşiz: ben ve ablam.*) still fit.
3. **`choice` items where a second option is grammatical and only the Persian `s` rules it out.**
   - u08 g01 ex0: karşısında / arkasında / önünde.
   - u08 g02 ex4: İlk / Önce / Son. *Son sokaktan…* and even *Önce sokaktan…* are grammatical.
   - u09 g02 ex1: ailemle / *ailem gibi* / ailemi.
   - u10 g01 ex1: misin / mısın / *miyim*. *Cumartesi partiye gelecek miyim?* is grammatical; only «می‌آیی؟» excludes it.
   - Earlier passes kept these deliberately, so I left them.
   - **Suggestion:** keep the meaning contrast but make the distractors ungrammatical in the sentence:
     - u08 g02 ex4: İlk / Önce / *İlkin*. Or add *ilk* vs. *birinci* to the explanation instead.
     - u10 g01 ex1: misin / mısın / *musun*.
     - u09 g02 ex1: replace *ailem gibi* with *ailemden*, which is ungrammatical here. Do not use *ailem için*: it is still grammatical.
4. **Exercise formats are monotonous.**
   - 38 of the 59 `type` items ask only for a bare suffix (*den*, *yi*, *lu*, *ünde*). That trains morphology but not production of the whole word.
   - u02–u05 and u09 have only 2 `order` items out of 16.
   - **Suggestions:**
     - Convert about 2 suffix gaps per unit into whole-word gaps (e.g. *Okul ___ çok uzak.* → *evden*), and list every accepted form.
     - Turn 1 `choice` per grammar point into an `order` item where the unit has only 2.
5. **Reading questions are three-option multiple choice, and some are binary Evet/Hayır** (u01 q3, u05 q4), which gives a 50% guess rate.
   - Replace the binary items with a three-option "what/when/where" question.
   - Add one inference question per reading, for example in u10: *Pazar akşamı nerede olacaklar?* → *Konserde*.

### Low

6. **u01 `pr` «میْ»** (dialogue line 7, w11 ex, dialogue line 8, sentences[1]):
   - The sukun is only there because `tools/validate.py` mistakes a stand-alone «می» for the Persian verb prefix. It is the only `pr` inconsistency in the level (13× «می» vs. 1× «میْ» for *mi*).
   - **Suggestion:** exempt `pr` fields from that validator rule, then drop the sukun.
7. **The final-o convention differs between levels.** A1 and A2 write word-final o as و (*kilo* «کیلو»). B1–C1 write ُ (*metro* «مِترُ»). The course lead should pick one.
8. **u05 dialogue line 10:** the doctor's *Geçmiş olsun!* is translated «بلا به دور!».
   - That is correct as a dictionary equivalent and fine in p01. From a doctor, «ان‌شاءالله زود خوب می‌شوید!» sounds more natural in Persian.
   - **Suggestion:** change only the dialogue `s` if the team agrees.
9. **Voiced exercises with an em-dash reply:** u02 g01 ex6 *«___ geliyorsunuz? — Tebriz'den.»* and u04 g01 ex2 *«Bu ___ kitabı? — Benim.»*
   - They will probably sound fine as a pause, but it is worth a listen once the audio is built.
   - **Correction to the pass-2/3 TTS lists:** `tools/build.py` does not voice grammar titles or tables. So the hyphens, slashes and "5.10"-style times listed there are not an audio problem.

## 4. Improvement ideas (prioritized)

1. **Recycle the earlier A2 grammar inside later units.** Each grammar point is practised almost only in its own unit.
   - u09 (-(y)dı) is a natural place to recycle u01 -dı: *Hava soğuktu ve evde kaldık*.
   - u10 can contrast past and future: *Geçen hafta sonu evde kaldım, bu hafta sonu kamp yapacağım*.
   - u05 can reuse u03's accusative: *Bu ilacı …* already does it, so do more of this.
   - **Concrete plan:**
     - In u06–u10, rewrite 2 of the 7–8 `sentences` per unit so that each uses one grammar point from an earlier A2 unit.
     - Make the last unit's reading a mixed-tense text: last weekend, now, next weekend.
2. **Use the Persian–Turkish shared vocabulary on purpose.** Many A2 words are Persian or Arabic loans with a shifted meaning:
   - *tarif* (recipe, not «تعریف» "praise")
   - *hala* (paternal aunt, not «حالا»)
   - *müsait* (free / available)
   - *ziyaret*, *hediye*, *şemsiye*, *eczane*, *belediye*, *misafir*
   - **Suggestion:** a one-line "دوستِ دروغین" note in the `s` of *tarif* and *hala* would prevent real misunderstandings. A short "words you already know" box in u03 and u04 would also build confidence.
3. **Add comparison (daha / en / kadar) in a light form.** It is a core A2 function: comparing prices, cities and weather. The curriculum postpones it to B1 u06.
   - It is not a grammar point here, but it could come in as phrases and sentences: *daha ucuz*, *en güzel* in u06, and *İstanbul'dan daha serin* in u09.
   - B1 u06 would then build on it.
4. **Add situations specific to Iranians in Turkey,** at A2 vocabulary:
   - u02: buying a Tahran–Van or Tebriz–İstanbul bus ticket.
   - u06: changing money at a *döviz bürosu* (*Bugünkü kur ne?* fits the -ki point perfectly).
   - u08: asking for the *İran Başkonsolosluğu*.
   - u05: getting medicine at a *nöbetçi eczane*.
5. **Make the reading texts more varied.** Six of the ten readings open with a self-introduction ("Merhaba, ben X." / "Merhaba, benim adım X."). Nine are first-person accounts or messages; u09 has no greeting but is also first person.
   - Use other A2 text types: a short notice (u08 *Müze saatleri*), a weather forecast (u09), a job advertisement (u07), a WhatsApp chat (u10), a recipe card without a narrator (u03).
6. **Give the dialogues more varied interaction.** Every dialogue is a cooperative exchange: one person asks, the other informs, in a service setting or a friendly catch-up. Nobody disagrees.
   - Add one peer-to-peer disagreement or negotiation (u10 is the closest). This would practise disagreeing politely: *Bence…, Ama…, Olmaz, çünkü…*. That is the bridge to B1's opinion language.
7. **Add an "A1 → A2 bridge" line at the top of u01 and u05.**
   - u05 g01 already says "you know -iyor from A1". u01 could say the same about *Saat kaçta? / dün* from A1 u06.
   - u07 g02 could say "A1 taught *Saat yedi buçuk*". It already does, which is good. Keep that pattern in every unit.

## Files changed

- `content/tr-fa/A2/u01.json`, `content/tr-fa/A2/u08.json`, `content/tr-fa/A2/u09.json` (one new `alts` entry each)

## 5. Pass 5 (Nov 2026)

Level pass for A2 (u01–u10), following `review/BRIEF_FIX5.md`. The course-wide pass (cast sheet `content/tr-fa/CAST.md`,
cross-level repeats, `PR_DICT.md`; see `tr-fa-A1.md` §5a) was kept as is. `python3 tools/validate.py content/tr-fa/A2/*.json`
prints OK for all 10 files, `python3 tools/audit.py` reports `tr-fa A2: {}`, `python3 tools/repeats.py tr-fa` finds
0 repeats, and `python3 tools/pr_words.py tr-fa` finds no new word with two `pr` spellings. New `pr`/`cpr` were built
from the course's own word list. New words were spelled by the conventions, for example *evdeydik* «اِودِیدیک» (like
*Bodrum'daydık* «بُدرومدایدِک») and *Başkonsolosluğu* «باشکُنسُلُسلوئو».

### Issues from sections 3 and 4

| # | Issue | Status | What was done / reason |
|---|---|---|---|
| 3.1 | B1 repeats A2 material | done in 5a / not in this slice | The course-wide pass replaced the B1/B2 copies. The B1 grammar re-teach belongs to the B1 slice. |
| 3.2 | Same people, different lives | done in 5a, plus 1 fix | One leftover fixed: the u08 dialogue passer-by was named **Kadın** with a male voice (`m`). Now **Adam** (voice `m`; the lines are gender-neutral). |
| 3.3 | `choice` decided only by the Persian `s` | done | u08 g01 ex0 *karşısında / ~~arkasında~~ / ~~önünde~~* → *karşısında / karşısını / karşıda*. u08 g02 ex4 → *Evimiz ___ sokakta, köşede.* with *ilk / önce / sonra* (an adverb cannot stand before a noun). u09 g02 ex1 *ailem gibi* → *ailemden*. u10 g01 ex1 *miyim* → *musun*. All four now have a `why`. |
| 3.4 | Monotonous formats | done | 7 suffix gaps became whole-word gaps (u02 g01 *evden*, u02 g02 *Annemle / Annem ile*, u04 g01 *odası*, u05 g02 *yıldır*, u06 g01 *tuzlu*, u06 g02 *Bugünkü*, u07 g01 *olacak*). 10 `choice` items became `order` items, one per grammar point in u02–u05 and u09, with alts where the order is free. These units now have 4 order items in 16 instead of 2. The 40 new production items (below) all ask for whole words or whole sentences. |
| 3.5 | Binary reading questions | done | u01 q4 (*okudu mu?*) → *Maryam neden kitabını okumadı?* (3 options). u05 q5 (*ateşi var mı?*) → *Sara bugün evde ne yapıyor?* (3 options). Plus one inference question per reading (below). |
| 3.6 | «میْ» in u01 | done in 5a | |
| 3.7 | Final-o convention | done in 5a | «و» in every level. |
| 3.8 | u05 doctor's *Geçmiş olsun!* | done | Dialogue line 10 `s` now ends «ان‌شاءالله زود خوب می‌شوید!». The phrase p01 keeps «بلا به دور!». |
| 3.9 | Em-dash reply in voiced exercises | app | Content is fine. The lead should listen to u02 g01 ex6 and u04 g01 ex2 once the audio is built. |
| 4.1 | Recycle earlier A2 grammar | done | 11 sentences rewritten. u05: *Bu gece hangi eczane nöbetçi?* u06: *Döviz bürosunda bugünkü kuru sordum.* (-dı, -(y)ı, -ki) and *Pazardaki domatesler marketten daha ucuz.* u07: *Teyzemin oğlu bir hastanede hemşire.* (genitive) and *Dün yeni işime başladım ve çok yoruldum.* (-dı). u08: *İran Başkonsolosluğu postanenin yanında mı?* and *Haritayı unutma, yolu bilmiyorum.* (imperative, -(y)ı, -miyor). u09: *Hava soğuktu ve bütün gün evde kaldık.* (-dı) and *Uzungöl İstanbul'dan daha serindi.* u10: *Geçen hafta sonu evde kaldık, bu hafta sonu kamp yapacağız.* and *Dün sinemaya gittik ama film çok sıkıcıydı.* The u10 reading now mixes tenses: line 2 = *Geçen hafta sonu hep evdeydik ve çok sıkıldık. Bu hafta sonu büyük bir planımız var!* |
| 4.2 | Persian–Turkish false friends | done | `s` of *tarif* «دستورِ پخت (نه «تعریف و تمجید»!)» and *hala* «عمه (نه «خاله»!)». «کلمه‌های آشنا / دوستِ دروغین» lines in u03 g01 (*tava, tabak, tarif*) and u04 g01 (*hala ≠ خاله ≠ حالا*, *teyze*, *aile, dayı*). |
| 4.3 | Light comparison (daha) | done | Sentences in u06 and u09 (above) and the u09 inference question (*İstanbul'dan daha serindi*). No grammar point, so B1 u06 still introduces it. |
| 4.4 | Situations for Iranians in Turkey | partly | *nöbetçi eczane* (u05), *döviz bürosu / bugünkü kur* (u06), *İran Başkonsolosluğu* (u08), all as sentences. Not done: the Tahran–Van / Tebriz–İstanbul bus ticket in u02, which would mean rewriting the whole dialogue. |
| 4.5 | More varied reading text types | not done | This means rewriting whole readings and their questions. That is a writing task for a separate pass, because the readings are correct now. |
| 4.6 | A dialogue with polite disagreement | not done | Same reason. Every dialogue is already 11–12 lines, so a disagreement needs a rewrite, not an added line. |
| 4.7 | A1 → A2 bridge lines | done | u01 g01 now starts with «در A1 زمانِ حال را با -iyor یاد گرفتید … حالا زمانِ گذشته». u05 and u07 already had bridge lines. |

### Tasks 2–6 of the brief

- **Production (task 2):** each of the 20 grammar points has one rewrite item (`type`: `task`, `cue` + `cpr`, multi-word answers where needed, such as *gittim, gitmedim, okuldan, otobüsle, Çorbayı, açma, annemin / benim annemin, doğum günü, içiyor mu, üç gündür, sütsüz, benimki, çalışacağım, sekize çeyrek kala, arkasında, Yemekten, evdeydim, onunla / onun ile, gelecek mi, izleyelim mi*) and one function item (3 whole sentences, exactly one fits; for example *Bu hediye kimden? → Elif'ten.*, *Ali'yi gördün mü? → Evet, onu gördüm.*, *Saat kaç? → Dokuzu çeyrek geçiyor.* rather than *geçe*, *Hafta sonu kamp yapalım mı? → … Nerede buluşalım?* rather than *buluşalım mı?*). Each pair replaced 2 of the 8 exercises, so every point still has 8.
- **`why` (task 3):** all 122 `choice`/`type` items have one.
- **Inference (task 4):** one per reading. u01 *Cumartesi akşamı nerede yemek yaptılar?* → Maryam's home (*Mina bize geldi*). u02 *Bursa'da nerede kaldılar?* → a hotel. u03 *Bu çorbada hangisi yok?* → meat. u04 *Arda'nın annesi nereli?* → Turkish (dayı's wife = Arda's mother). u05 *Sara bu mesajı neden yazıyor?* → she cannot come to class. u06 *Sara şalı neyle ödedi?* → cash. u07 *Emre otelde öğle yemeği pişirecek mi?* → no, breakfast. u08 *Akşamları evin karşısındaki park nasıl?* → crowded. u09 *Karadeniz'de hava nasıldı?* → cooler than İstanbul. u10 *Zeynep bu mesajı neden yazıyor?* → to invite Mina to the camp. In each, the two wrong options contradict the text.
- **`sym` (task 5):** 11 words: evde kalmak 🏠, temizlik yapmak 🧹, piknik yapmak 🧺, eğlenmek 🎉, evli 💍, harcamak 💸, otopark 🅿️, derece 🌡️, tiyatro 🎭, kamp yapmak ⛺, parti 🎉. Body parts, vehicles, kitchen objects and buildings stay literal.
- **Recycling (task 6):** the new items use the level's cast (Mina, Ali, Elif, Emre, Ayşe, Zeynep) and the words of earlier A2 units (*otobüs, bıçak, çorba, cüzdan, kütüphane, konser, kamp*). Later units mix in earlier grammar (*-den önce* + *-dı*, *ile* in u09, future + *-ebil* in u10).

### Counts

| Category | Count |
|---|---|
| Production items | 40 (20 rewrite + 20 function) |
| `why` | 122 (all `choice`/`type` items) |
| Inference questions | 10, plus 2 binary questions replaced |
| `sym` marks | 11 |
| Format changes | 10 choice → order, 7 suffix gap → whole-word gap |
| `choice` ambiguity fixes | 4 |
| Other fixes | 1 speaker name/voice, 1 dialogue `s`, 2 word `s` (false friends), 3 explanation additions (u01 bridge, u03 and u04 loanwords), 11 sentences, 1 reading line |
