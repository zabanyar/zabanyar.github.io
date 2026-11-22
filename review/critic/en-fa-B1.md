# Critical review: en-fa B1 (pass 4, Nov 2026)

Scope: `content/en-fa/B1/u01.json … u10.json`. I read every item of every unit: titles, goals, words (t, s, pr, pl, emoji, ex), phrases, dialogues, grammar (titles, explanations, tables, examples, exercises with keys, options and alts), readings and questions, and sentences. I also ran scripted checks: `pr` spelling consistency per word across the level, the/thee before vowels, exercise `pr` = filled-in sentence, Arabic ي/ك, missing ZWNJ, British spellings, "Neda", and headword overlap with A1, A2, B2 and C1.
Before this pass I read `review/en-fa-B1.md` and `review/en-fa-B1-pass3.md`, and I kept their deliberate decisions: `have to` = «هَف تو», `used to` = «یوسْت تو», "soccer", "on the street", the known audit false alarms, and the Iranian Friday weekend in u04.

After editing: `python3 tools/validate.py content/en-fa/B1/*.json` → OK (10/10). `python3 tools/audit.py` → en-fa B1 `{'pr': 1, 'spelling': 3}`. All four are the known false alarms: the u01 w14 hyphen word count, "holiday" (a public holiday) in u05, and "flat tire" ×2 in u07.

## 1. Verdict

The level is solid and generally error-free. Grammar explanations are accurate and well matched to Persian speakers: the «رفته‌ام/رفتم» contrast, «ده سال است که … می‌کنم» for *for/since*, the positive *until*, and «کتابی که آن را خریدم» for relative clauses. Exercise keys are clean, and the `pr` guides are consistent and follow the conventions. I found no wrong target sentence, wrong key or wrong translation in this pass.

The real weakness was level fit of the vocabulary. 14 of the 150 B1 headwords repeated A2 headwords: u03 had boss, colleague, part-time and work from home (all from A2 u04 *Jobs*), u10 had app, download, online, password and battery (all from A2 u08 *Phones*), and there were 5 more. So in some units a third of the "new" words were not new. I replaced these.

What remains is mostly pedagogical. Exercise types are limited (choice/type/order only), new words are rarely recycled after their unit, and many emojis are symbols rather than pictures.

## 2. Fixed

21 changes: 15 headwords replaced (14 below-level A2 repeats, 1 near-duplicate inside B1), 3 misleading emojis, 1 missing `type` answer, 2 `pr` inconsistencies.

| Unit | Path | Before → After | Reason |
|---|---|---|---|
| u02 | `words[11]` (w12) | neighbor (A2 u09 headword) → **hometown** / pl hometowns / «زادگاه، شهری که در آن به دنیا آمده یا بزرگ شده‌ای» / هُوم‌تاون / "" / ex "My hometown has changed a lot since I was a child." | below level: re-taught A2 word; fits *memories*; ex recycles u01 *since* |
| u03 | `words[5]` (w06) | colleague (A2 u04) → **qualification** / pl qualifications / «مدرک، صلاحیت (تحصیلی یا شغلی)» / کْوالِفِکِیشِن / "" / ex "What qualifications do you need for this job?" | below level (A2 u04 *Jobs* repeated in B1 u03 *Work*) |
| u03 | `words[6]` (w07) | boss (A2 u04) → **work overtime** / «اضافه‌کاری کردن» / وِرک اُووِرتایم / "" / ex "I had to work overtime every day last week." | below level; ex recycles *had to* (u04) |
| u03 | `words[13]` (w14) | part-time (A2 u04) → **shift** / pl shifts / «شیفت، نوبت کاری» / شیفْت / "" / ex "My sister is a nurse, and she often works the night shift." | below level; *shift* is then recycled in u04 g01 ex1 |
| u03 | `words[14]` (w15) | work from home (A2 u04), 🏠 → **unemployed** / «بیکار (بدون شغل)» / آنِمْپْلُیْد / "" / ex "He was unemployed for six months before he found this job." | below level; 🏠 also showed "house", not the word |
| u04 | `words[12]` (w13) | sugar (A2 u06) → **calorie** / pl calories / «کالری» / کَلِری / "" / ex "This cake is delicious, but it has a lot of calories." | below level (A1/A2 food word) |
| u04 | `words[6].emoji` (w07 lose weight) | ⚖️ → "" | ⚖️ is a balance (justice) scale, not a bathroom scale. In "Which picture is it?" it invites a wrong match with *balanced diet* (w01) in the same unit |
| u04 | `grammar[1].exercises[4].answer` | [shouldn't, should not, ought not to] → + **had better not** | "You had better not eat so much sugar. It's bad for your teeth." is correct and is this grammar point's own form |
| u06 | `words[13].emoji` (w14 front page) | 🗞️ → "" | the same unit has headline 📰. Two newspaper pictures for two different words can't be told apart in a picture question |
| u07 | `words[5]` (w06) | passport (A2 u02), 🛂 → **customs** / «گمرک» / کاسْتِمْز / "" / ex "We waited at customs for almost an hour." | below level. 🛃 has no picture in the build (audit "no picture"), so emoji is "" |
| u07 | `words[14]` (w15) | crowded (A2 u09) → **check in** / «پذیرش گرفتن، چک‌این کردن (در فرودگاه یا هتل)» / چِک این / "" / ex "You should check in at least two hours before an international flight." | below level; core B1 travel verb |
| u07 | `grammar[0].exercises[2].pr` | … هی وود **ویزِت** … → … هی وود **ویزیت** … | "visit" is ویزیت everywhere else in B1 (u01, u07 g01 ex4, u08, u09) |
| u08 | `words[4]` (w05) | relative (A2 u01) → **jealous** / «حسود، دچار حسادت (get jealous: حسودی‌اش شدن)» / جِلِس / "" / ex "My little son gets jealous when we play with his baby sister." | below level; fills a gap in the personality adjectives |
| u08 | `grammar[1].exercises[0].pr` | … ایز **ویزِتینگ** آس … → … ایز **ویزیتینگ** آس … | same spelling of "visit" as the rest of the level |
| u09 | `words[0].emoji` (w01 take an exam) | 📝 → "" | 📝 (memo + pencil) pictures *take notes* (w03 ✍️) at least as well, so a picture question had two right answers |
| u09 | `words[1]` (w02) | pass, ✅ → **certificate** / pl certificates / «گواهی‌نامه، مدرک (پایان دوره)» / سِرْتیفِکِت (B2 spelling) / "" / ex "You'll get a certificate at the end of the course." | *pass* re-taught u01 w08 *pass an exam* (flagged in pass 3, not fixed); *certificate* is not a headword at any level |
| u10 | `words[3]` (w04) | app (A2 u08) → **search engine** / pl search engines / «موتور جست‌وجو» / سِرچ اِنْجِن / 🔍 / ex "I use a search engine to find recipes online." | below level (A2 u08 *Phones and the internet*) |
| u10 | `words[4]` (w05) | download (A2 u08), 📥 → **upload** / «آپلود کردن، بارگذاری کردن» / آپْلُود / 📤 / ex "She uploaded the wedding photos last night." | below level |
| u10 | `words[9]` (w10) | online (A2 u08), 🌐 → **hacker** / pl hackers / «هکر» / هَکِر / "" / ex "A hacker stole the personal information of thousands of users." | below level; links to the dialogue ("What if someone found out his password?") |
| u10 | `words[10]` (w11) | password (A2 u08), 🔑 → **account** / pl accounts / «حساب کاربری؛ حساب بانکی» / اِکاونت / "" / ex "I created a new email account yesterday." | below level |
| u10 | `words[11]` (w12) | battery (A2 u08), 🔋 → **charger** / pl chargers / «شارژر» / چارْجِر / 🔌 / ex "Don't forget to pack your phone charger." | below level. *battery* is still recycled in u10 g02 and the sentences (*run out of battery*) |

All new headwords were checked: unique within B1, and not headwords in A1, A2, B2 or C1. (*book*, A1 noun vs B1 verb "reserve", is the only overlap left, and it is fine.) The `pr` reuses the level's spellings (اُووِر, فاونْد, ذی اِند, دیلیشِس, رِسِپیز, بِیبی). The old words still appear in dialogues, readings and sentences, where they now act as A2 revision.

## 3. Remaining issues (not fixed: they need a decision or bigger work)

**High**
1. **Symbolic emojis in picture questions.** A1/A2 learners match a picture to a word, so a symbol for the word reads as a wrong answer. Several B1 emojis show a different, simpler word: *brave* 🦁 (lion), *accident* 🚑 (ambulance), *generous* 🎁 (gift), *endangered* 🐆 (leopard), *traffic jam* 🚗 (one car), *electric car* 🚗, *solar panel* ☀️ (sun), *prescription* 💊 (pill), *childhood* 🧸, *adventure* 🗺️, *job interview* 🤝, *smart home* 🏠, *in the future* 🔮, *flood* 🌊, *salary* 💰. None of these collides with another word in the same unit, so I left them. Suggestion: decide one policy for B1+. Either (a) only literal pictures (set the list above to ""), or (b) leave out of "Which picture is it?" any word whose emoji is marked as a symbol (for example a `"emoji_symbolic": true` flag, or an exclusion list in the build).
2. **Recycling of new vocabulary is weak.** A simple stem search finds about 51 of 149 B1 headwords nowhere else in their own unit (not in the dialogue, reading, grammar or sentences), and only about 34 of 149 reappear in any later B1 unit. Examples: *achieve, adventure, once in a lifetime, broadcast, subscribe to, baggage claim, loyal, selfish, lifelong learning, invention*. The 15 new words from this pass are not recycled yet either. Suggestion: in each unit, rework 3–4 `sentences` and 1–2 grammar exercises to reuse headwords from the two previous units, and add a short "review" reading every few units.

**Medium**
3. **Past perfect is used in u06 without being taught.** The reported-speech rule "did / have done → had done", the table ("She said she had seen the news"), w11 ex "had started" and g02 ex5 "had bought" all need *had + past participle*. In this curriculum the past perfect only arrives in B2 u02. Suggestion: add one sentence to u06 g01 `explain`: «**had + قسمت سوم فعل** (گذشته‌ی کامل) یعنی کاری قبل از یک زمان دیگر در گذشته؛ مثل «دیده بود»». Also say in a B2 u02 note that it was introduced here.
4. **u06 *interview* (w04) vs u03 *job interview* (w02).** These are near-duplicate headwords (the audit can't see it because the strings differ). Suggestion: replace u06 w04 with *press conference* or *reporter* (check B2/C1 first), or make the card clearly the verb "interview sb".
5. **Exercise variety and difficulty.** All 160 grammar exercises are `choice` / `type` / `order`, and most `type` gaps want one function word (*was, for, up, out*). At B1, learners should also transform sentences (direct → reported, active → passive, two sentences → one relative clause) and produce whole clauses. Suggestion: if the schema allows, add a "rewrite" `type` exercise with several accepted answers. Otherwise make 2 `type` items per grammar point multi-word (for example "had seen", "was built", "would call").
6. **Present perfect continuous appears before it is taught** (B2 u01): u09 dialogue line 6 "I've been thinking of taking a photography course…". It's harmless as a chunk. Suggestion: either gloss it in `s` (already natural) or change it to "I'm thinking of taking a photography course" (this reuses u09 p01).

**Low**
7. u09 reading: the text never says the writer is a woman, but q0–q3 use *she/her*. Suggestion: change text[9] to "…visit my son in Canada and, as a proud grandmother, talk to his neighbors…", or name the writer in the title.
8. u07 dialogue line 4: "If I took that flight, I'd arrive just in time" uses the second conditional for an option that is really on offer. It's natural English (tentative), but it blurs the "real vs. imaginary" rule the unit teaches. A first conditional ("If I take that flight, I'll arrive…") would model u03 better, but the line as written is not wrong.
9. u10 g01 ex4 "She ___ not come to the meeting. She's very busy." Only may/might are accepted. *will* is grammatical too, though the `s` («شاید») rules it out. Consider adding "Maybe" to the `t` context, or accept it as is.
10. TTS-sensitive `t` text is unchanged: "/" and "+" in grammar titles and tables, "→" with quotes in the u06 exercises, *a.m.*, *AI*, *Si-o-se-pol*, *résumé*, *café*. The audit reports no "voice" findings for B1, so `build.speakable` handles these. Check one u06 "→" exercise and one table row by ear.
11. u05 dialogue statistic ("about a million plastic bags are used every minute") is a widely quoted but dated UN figure. It is hedged ("about"). To avoid a hard number altogether, consider "Did you know that millions of plastic bags are used around the world every day?"

## 4. Improvement ideas (prioritised)

1. **Close the A2 → B1 vocabulary gap systematically.** This pass removed the duplicates. Next, give each unit 3–4 "B1 upgrades" of A2 words that the unit already uses: *crowded → packed*, *boss → manager/supervisor*, *battery → run out of battery* (already there), *relative → close relative / extended family*. Make the progression explicit with a short «از A2 می‌دانید: …» line in the grammar or word notes.
2. **Production at the end of each unit.** B1 goals are can-do statements about *telling stories, giving opinions, complaining, giving advice*, but nothing asks the learner to produce more than one word. Add one guided task per unit, even as an `order` chain or a model answer to compare against: write a 4-sentence complaint email (u07), retell the reading in reported speech (u06), give two pieces of advice with *should / had better* (u04).
3. **More Iranian-family situations in the readings.** u02 (Rasht village), u05 (Yazd solar energy) and u09 (a 62-year-old learning English) work very well. Others are generic (Greenfield river, a UK-style news survey). Ideas: u06 a family debate about news in a Telegram group (fake-news theme); u07 an Iranian family's trip through Istanbul with a missed connection (already partly there); u08 Nowruz visits and a family argument that gets made up; u10 grandparents learning to use video calls with grandchildren abroad. These fit the family's real life (some in Iran, some in Germany).
4. **Make dialogues use more of each unit's phrases and grammar.** Dialogues use between 1 and 5 of the 8 phrases word for word (u02, u08 and u09 use only one). Rewrite one or two lines per dialogue so that each phrase appears once and each grammar point has at least two natural tokens (u05 already does this well with passives; u09 has few gerund-vs-infinitive contrasts).
5. **Contrastive exercises across units.** Mix exercises that force a choice between structures the learner knows: present perfect vs past simple vs used to (u01 + u02), first vs second conditional (u03 + u07), *will / be going to / might* (u10 + A2). These are the exact areas where Persian speakers confuse forms.
6. **Pronunciation focus box per unit.** The `pr` guides are good, but stress and weak forms aren't taught. Add one line per unit in the grammar `explain`, as u02 and u04 already do for *used to* and *mustn't*: «-ed سه تلفظ دارد: /t/ /d/ /ɪd/» (u01/u05), the weak form of *was/were* (u02), contracted *'d* = would/had (u07 vs u04).
7. **Reading questions.** All 40 are 3-option literal recall. Add one inference or vocabulary-in-context question per reading (for example "What does *fined* mean in the text?", or "Why do Mina's friends come from many countries?"), and occasionally a 4th option.
