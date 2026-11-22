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

## 5. Pass 5 (Nov 2026)

I did BRIEF_FIX5 tasks 1–7 for `content/en-fa/B1/u01–u10`, plus the lead's two `repeats.py` items. I kept the
course-wide pass-5 work (CAST.md, cross-level repeats, PR_DICT spellings, see en-fa-A1.md §5a). Every new or changed
`pr`/`cpr` was written from `content/en-fa/PR_DICT.md`. Words that are not in the dictionary yet follow their word family
(hires هایِرْز, reviewing ریویوئینگ, subjects ساب‌جِکْتْس, passwords پَسوِردز, broadcast … live لایو).

Checks after the edits:
- `python3 tools/validate.py content/en-fa/B1/*.json` → OK (10/10).
- `python3 tools/en_fa_pr_dict.py check` → 0 differences.
- `python3 tools/repeats.py en-fa` → 0 repeats.
- `python3 tools/audit.py` → en-fa B1 `{'pr': 1, 'spelling': 4}`. These are the known false alarms: the u01 w14 hyphen word count, "holiday" in u05, and "flat tire" ×3. The third "flat tire" is the new u07 wish rewrite, which recycles the headword.

### 5.1 Status of every pass-4 issue and idea

| # | Item | Status |
|---|---|---|
| 3.1 | Symbolic emojis in picture questions | **Done**: 52 `sym` marks (5.4). No emoji was misleading enough to remove. |
| 3.2 | Weak recycling | **Done.** Before: 55 of 149 headwords appeared nowhere in their unit outside the word card (stem search, articles ignored). After: **0**. Every headword now appears at least once more in its own unit, in a production item, a reading question, a changed sentence or a dialogue line. Headwords that reappear in a later B1 unit went from 24 to 35. 16 headwords from earlier B1 units are reused in the new items (fail, memorable, go abroad, move to, work overtime, happen, drought, stressed, lose weight, forget, pass an exam, brave, give up, attend, hire …). |
| 3.3 | Past perfect used in u06 before it is taught | **Done**: u06 g01 `explain` has a new line on **had + past participle** (with «دیده بود» and a note that B2 covers it fully). |
| 3.4 | u06 *interview* vs u03 *job interview* | **Done**: u06 w04 → **press conference** («کنفرانس خبری», پْرِس کانْفِرِنْس, 🎤 sym, ex "The mayor answered journalists' questions at a press conference."). It is not taught at any other level. The u06 dialogue line 1 now uses it: "At a press conference, the mayor said it would open next spring." |
| 3.5 | Exercise variety and difficulty | **Done** through task 2: 40 production items, most with multi-word answers. The 7 u06 "quote → report" items are now `cue` items (5.3). |
| 3.6 | Present perfect continuous in u09 dialogue | **Done**: line 6 → "I'm thinking of taking a photography course…". This is u09 p01 word for word. |
| 3.7 | u09 reading: writer's gender never stated | **Done**: text[6] → "…my grandchildren, who love correcting their grandma's pronunciation!" This also adds a love + -ing token. |
| 3.8 | u07 dialogue line 4 ("If I took that flight…") | **Not changed.** It is natural tentative English and models the u07 grammar point (second conditional). The new u07 function item contrasts *I'd* with *I'll*. |
| 3.9 | u10 g01 ex4: *will not* also possible | **Done**: t → "I'm not sure, but she ___ not come to the meeting. She's very busy." `s` and `pr` were updated to match. |
| 3.10 | TTS-sensitive text | **Done for the risky part.** The u06 exercises with `"…" →` in `t` (g01 x2–x5, g02 x3–x5) became `cue` + `task` items, so the voice reads two clean sentences. The `/` and `+` in titles and tables stay. The audit reports no voice findings. |
| 3.11 | Dated u05 statistic | **Done**: dialogue line 5 → "Did you know that millions of plastic bags are used around the world every day?" |
| 4.1 | A2 → B1 links | **Done** as «از A2 می‌دانید: …» lines in u01 g01 (ever/never/just/already/yet), u03 g01 (will), u04 g02 (should) and u10 g01 (will / be going to). No more headwords were swapped. |
| 4.2 | Production at the end of each unit | **Partly done** through the 20 rewrite items: reported speech (u06), passive (u05), relative clauses (u08), conditionals (u03, u07), had better / don't have to (u04), and so on. A free-writing task (complaint email, retelling) needs an app format with a model answer. |
| 4.3 | More Iranian-family readings | **Not done.** It means rewriting whole readings with their questions, and the brief says to keep the structure. Inference questions and recycling were added to the existing readings instead. The suggestions in 4.3 still apply. |
| 4.4 | Dialogues use more phrases | **Done** for the three weakest dialogues: u02 lines 3 and 9 (*It happened when I was…*, *I'll never forget it*), u08 line 4 (*We've known each other for years*), u09 line 6 (*I'm thinking of taking a course in…*). In u07, the new phrase *What would you do if you were me?* is in line 8, and line 9 answers with *If I were you, I'd…* (u04 p02, recycled). |
| 4.5 | Contrastive exercises | **Done** inside the function items: past simple vs present perfect (u01), for/since vs ago (u01), used to vs use to vs be used to (u02), first vs second conditional (u03, u07), mustn't vs don't have to (u04), find out vs look for (u10). |
| 4.6 | Pronunciation line per unit | **Done** in 7 more grammar points: u01 g01 (weak *'ve/'s*), u03 g01 (*'ll*), u05 g02 (three -ed sounds), u06 g02 (falling intonation in reported questions), u07 g01 (*'d* = would/had), u09 g01 (-ing without a hard g), u10 g01 (*it'll*, *won't* vs *want*). u02 and u04 already had one. |
| 4.7 | Reading questions | **Done**: 20 new questions (task 4). One of them is vocabulary-in-context (u05 *fined*). I did not add 4th options. |
| lead | `book` (B1 u07) vs A1 `book` | **Done**: u07 w09 → **to book**, «رزرو کردن (اتاق، بلیت، پرواز)», pr تو بوک. The example is unchanged ("I booked a room…"). |
| lead | *If I were you, I'd…* in u04 and u07 | **Done**: u07 p08 → **What would you do if you were me?** «اگر جای من بودی، چه کار می‌کردی؟». It is not taught at any level and asks for advice, where u04 gives it. It is used in the dialogue (line 8). |

### 5.2 Production items (task 2): 40

Each of the 20 grammar points has 1 rewrite (`type` + `task`/`cue`/`cpr`) and 1 function item (`choice`, `t` = `___`, 3 whole sentences, 1 correct). They replace the 2 most repetitive exercises, so every point still has 8. Mostly these were order items that repeated an example or a sentence, or a second choice/type item with the same pattern. Every point keeps at least one `order` item except u01 g01 and u05 g02 (their units still have one in the other point).

| Unit | Point | Rewrite (cue → answer) | Function (cue → correct reply) | Replaced |
|---|---|---|---|---|
| u01 | g01 | My brother went abroad… → **Have you ever gone / been** abroad? | Have you ever taken part in a competition? → Yes, I took part in one last year. | x3 type *saw*, x5 order |
| u01 | g02 | Mina moved to Toronto a year ago… → Mina **has lived / has been living / has been** in Toronto for a year. | How long have you known each other? → Since we were in school. | x2 type *for*, x7 type *We've known* |
| u02 | g01 | I was visiting my hometown. I met… → **While I was visiting** my hometown, I met… | What were you doing when the storm started? → I was reading a book in bed. | x6 choice *ran*, x7 type *was* |
| u02 | g02 | As a child, I often failed… → I **used to fail** my math tests. | What are your happiest memories of your hometown? → We used to swim… (vs use to / are used to) | x6 order, x7 type *use* |
| u03 | g01 | Maybe the company will hire me… → **If the company hires / If they hire** me, I'll move to Tehran. | I have a job interview tomorrow… → If you prepare well, you'll do fine. | x1 choice *will stay*, x4 choice *need* |
| u03 | g02 | I'll get the qualification first… → **As soon as I get / have** the qualification, … | Can you work the night shift tomorrow? → I'll call you when I get to the hospital. | x1 choice *until*, x6 choice *goes* |
| u04 | g01 | It isn't necessary to bring a prescription. → You **don't have to bring** a prescription. | Do I have to count calories to lose weight? → No, you don't have to. Just eat a balanced diet. | x4 type *must*, x6 type *mustn't* |
| u04 | g02 | Eat less junk food… → You **had better eat** less junk food, or you'll gain weight. | I work overtime every day… → You should get more sleep. | x5 order, x6 choice *had* |
| u05 | g01 | Factories cause a lot of pollution. → A lot of pollution **is caused** by factories. | What happens to plastic bottles…? → They're collected and recycled. | x3 type *is spoken*, x7 choice *are cleaned* |
| u05 | g02 | People cut down hundreds of trees… → Hundreds of trees **were cut down**… | How did your town reduce air pollution? → Renewable energy was used instead of oil. | x5 order (= example), x6 type *was published* |
| u06 | g01 | We will broadcast the final live. → The TV channel said that it **would broadcast** the final live. | What did the headline say? → It said that the drought was getting worse. | x1 choice *said*, x7 order |
| u06 | g02 | Do you subscribe to any newspapers? → She asked me **if / whether I subscribed** to any newspapers. | The journalist asked, "Why is the bridge closed?" → The journalist asked why the bridge was closed. | x1 choice *if*, x7 order |
| u07 | g01 | I don't have my boarding pass, so I can't check in. → If I had my boarding pass, I **could / would (be able to) check in**. | What would you do if your luggage didn't arrive? → I'd go to baggage claim and complain about it. | x4 choice *were* (= x1), x6 order (= table) |
| u07 | g02 | We're stuck here because we have a flat tire. → I wish we **didn't have** a flat tire. | The line at customs is so long! → I know. I wish it were shorter. | x4 choice *lived* (= table), x7 order (= explain) |
| u08 | g01 | I have a friend. She is very generous. → I have a friend **who / that is very** generous. | What's a selfish person? → Someone who only thinks about themselves. | x2 choice *that*, x7 order |
| u08 | g02 | My cousin always helps me. She is very loyal. → My cousin, **who is very loyal**, always helps me. | My friend has only one sister… → My friend's sister, who works in a hospital, is very patient. (vs that / who she) | x5 choice (= x0), x7 order |
| u09 | g01 | My daughter wants to attend a summer course. → My daughter **would like to attend**… | Have you finished reviewing for the exam? → Not yet. I need to review two more subjects. | x2 type *to pass*, x7 order (= sentence) |
| u09 | g02 | He passed the exam. He didn't take any notes. → He passed the exam **without taking (any)** notes. | Why are you taking an English course? → Because I'm interested in getting a certificate. | x0 choice (= example), x4 choice *for* |
| u10 | g01 | Hackers will probably steal… → Hackers **are likely to steal**… | Do you think search engines will disappear soon? → I doubt it. They're unlikely to disappear. | x2 choice *might* (= x0), x3 type *will* |
| u10 | g02 | Turn off the device before you clean the screen. → **Turn it off** before you clean the screen. | My phone has run out of battery, and I can't find my charger. → Let's look for it together. | x0 choice *give*, x4 type *out* (= table) |

### 5.3 Other changes

- **u06 cue conversion:** g01 x2–x5 and g02 x3–x5 now have the quoted sentence as `cue` (+ `cpr`), a `task` («حرف را / سؤال را غیرمستقیم نقل کنید.»), a clean `t` without quotes or arrows, and a recomputed `pr`. The keys did not change.
- **Recycling edits** (`t`, `s` and `pr` changed together):
  - u01 `sentences[0]` "She has achieved a lot since she moved to Canada."
  - u01 `sentences[2]` "Have you ever won a prize in a competition?"
  - u01 `sentences[5]` "A trip like this happens only once in a lifetime."
  - u01 `sentences[6]` "My son has just passed all his exams."
  - u03 `sentences[3–5]` (unemployed / hired, work overtime, career)
  - u05 `sentences[2]` "In my opinion, climate change is the biggest problem today."
  - u06 `sentences[0]` "The radio reported that the roads were closed because of the snow."
  - u08 `sentences[1]` "I fell out with my brother, but we made up a week later."
  - u09 `sentences[7]` "My son wants to get a degree in medicine."
  - u10 `sentences[0]` "It only takes a minute to set up an account and upload your photos."
  - u10 `sentences[5]` "A hacker might get into your account if your password is weak."
- **Dialogue lines** (with `pr`): u02 [3] and [9], u05 [5], u06 [1], u07 [8], u08 [4], u09 [6]. **Reading:** u09 text[6].
- **Explanations:** 4 A2 links, 7 pronunciation lines and 1 past-perfect line (5.1).

### 5.4 `sym` marks (52)

u01 adventure 🗺️, go abroad ✈️, achieve 🎯, pass an exam 📝, move to 📦, brave 🦁 · u02 childhood 🧸, tell a story 📖,
accident 🚑 · u03 job interview 🤝, résumé 📄, salary 💰, get promoted 📈, deadline ⏳ · u04 balanced diet 🥗, junk food 🍟,
checkup 🩺, prescription 💊 · u05 environment 🌳, pollution 🏭, climate change 🌡️, cut down 🌲, endangered 🐆, solar panel ☀️,
flood 🌊, drought 🏜️ · u06 headline 📰, article 📄, press conference 🎤, the news 📺, social media 📱, announce 📢, broadcast 📡 ·
u07 delay ⏳, cancel ❌, boarding pass 🎫, connecting flight ✈️, traffic jam 🚗 · u08 friendship 🤝, generous 🎁 ·
u09 degree 🎓, memorize 🧠, make progress 📈, homework 📚 · u10 device 📱, search engine 🔍, upload 📤, update 🔄,
electric car 🚗, invention 💡, smart home 🏠, in the future 🔮.

Pictures that show the word itself were left unmarked, for example win a prize 🏆, recycle ♻️, luggage 🧳, robot 🤖, charger 🔌, the face emojis, and storm ⛈️.

### 5.5 Inference questions (task 4): 20

Each reading has 2 new questions. Together they test 19 inferences and 1 vocabulary-in-context item (u05 "What does *fined* mean in the text?"). The inferences ask about feelings (Mina's year abroad, Maryam's memory of the storm, the u07 writer at Istanbul, the u09 writer's progress), reasons (why Mina got lost, why the lights went out, why the fish came back, why Jack joined the club, why the hotel gave toothbrushes), the audience of the u03 text, and small deductions (the 72-year-old started listening to the radio at about 22). Wrong options often reuse B1 words (jealous, selfish, lose weight, hire, go abroad), so each question also recycles vocabulary.

### 5.6 Counts

| Category | Count |
|---|---|
| Production items | 40 (20 rewrite + 20 function), all with `why`, `cue`/`cpr`, `task` |
| `why` | 142 (every `choice`/`type` grammar exercise in B1) |
| Inference questions | 20 (19 inference + 1 vocabulary-in-context) |
| `sym` marks | 52 |
| Other fixes | 7 cue conversions (u06), 1 headword replaced (interview → press conference), 1 headword re-labelled (to book), 1 phrase replaced (u07 p08), 1 key-context fix (u10 g01 x4), 8 dialogue lines, 1 reading line, 13 sentences, 12 explanation lines |

**Audio:** new or changed `t`/`cue` need TTS: the 40 production items and their cues, 7 u06 cues and re-worded `t`s, u06 w04 + ex, u07 w09 (to book) and p08, 8 dialogue lines, u09 text[6], 13 sentences, 20 question stems, and u10 g01 x4.

### 5.7 For the lead

1. **`sym`:** 52 B1 words rely on the app leaving `sym` items out of "Which picture is it?".
2. **PR_DICT:** the new words below are spelled consistently with their families but are not in `PR_DICT.md` yet. I did not edit that shared file. Run `python3 tools/en_fa_pr_dict.py build` once all en-fa slices are done.
   - hires, qualification, necessary, calories, gain, soft, drinks
   - fined, press, journalists, subscribed, channel, radio, checking, aged
   - shorter, toothbrushes, thinks, club, forgets
   - attend, reviewing, subjects, finding, excuses, correcting, grandma's, pronunciation
   - tests, courses, hackers, steal, passwords, engines, disappear, device, upload, weak, inventions, competition, achieved, climbing, subway, visiting, happiest, laughing
3. **Typed answers with contractions:** gaps that follow a subject ("You ___", "My daughter ___") accept only full forms ("had better eat", "would like to attend"). If the app could also accept "'d better eat" with the space before the apostrophe removed, contracted answers would work there too.
4. **Free production (idea 4.2):** a "write, then compare with a model answer" format would allow short complaint emails (u07) and retellings in reported speech (u06).
