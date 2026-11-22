# App UX and learning-design review: Zabanyar + Lernpfad (shared engine), Nov 2026

**Method.** I served both `docs/` folders locally (8801 Zabanyar, 8802 Lernpfad) and drove them with Playwright at 390×844 (phone, touch, DPR 2) and 1280×860 (desktop), in light and dark mode. External API calls were blocked, so sync ran in its offline path. I played real lessons with a bot that answers about two thirds of first attempts wrongly or at random and answers every retry correctly:

- **en-fa:** u00 letters/sounds/words; u01 words/phrases+dialogue/grammar/reading/test.
- **fa-tr (Turkish UI, Persian target):** u00 letters; u01 words/phrases/test.
- **tr-fa (dark):** u01 words/grammar/reading.
- **de-en:** grammar unit u11 g1 and test; u01 words/phrases.
- **Lernpfad:** de-fsp B1.u01 words/phrases/reading/test; de-en u03 grammar on desktop in dark mode.

I also checked review with due words, the word bank, settings, the login screen with recent users, the offline download, the ⚑ report dialog, and course, level and unit pages. On top of that I measured contrast, tap targets, accessible names and the audio promise behaviour. No file under `docs/` or `content/` was changed. Screenshots are in `review/critic/shots/`.

## Verdict

The engine is solid for a hand-built PWA: it is fast, needs no account friction, is RTL-aware in most places, offers a good mix of exercise types, retries wrong answers, keeps spaced repetition per person, and makes reporting a problem easy. Learners and especially older ones are let down by detail rather than structure:

- **Broken layouts.** Persian transliterations render with the wrong direction everywhere. Long German words push the Continue button off the screen.
- **Answer giveaways.** "Listen and choose" options show the transliteration. Match cards leak the answer through long glosses. Order tiles keep the capital letter and the final punctuation.
- **Feedback that punishes success.** A completed matching exercise can end in a red "Correct answer:" with nothing after it.
- **Progress that means nothing.** A lesson scored 0 % counts as done and the path moves on. "۱/۵" reads as 1.5 to a Persian reader.
- **Weak contrast.** The German orange and the dark-mode feedback buttons fail WCAG.

Fix the High list and this becomes a genuinely good family learning app. Most fixes are a few lines in `ui.js`, `lesson.js` and `app.css`.

---

## HIGH

### H1. Long German words overflow the card and push "Next" off the screen, so the learner is stuck (Lernpfad de-fsp, de-en B1+)
- **Where:** word card (`RENDER.card`, `.wordcard .t` at 2.1rem/900), also match cards and MC options. For example, `#/c/de-fsp/u/B1.u01/l/words`, the card for *verschreibungspflichtig*.
- **What happens:** the headword does not wrap. The page becomes 445 px wide on a 390 px phone and the gloss is cut off ("prescription-only · Laie: nur mit Rez…"). With mobile emulation the fixed `.feedback` bar landed at y=880 on an 844 px screen, so the Next button was outside the visible area and my bot could not press it. A real phone would zoom out or scroll sideways at best. I measured 20 headwords that overflow: 12 in de-en (*die Krankenversicherung*, *die Vorsorgeuntersuchung*, *das Vorstellungsgespräch* …) and 8 in de-fsp (*der Thrombozytenaggregationshemmer* is 633 px wide).
- **In the match screen** (shot `33-fsp-B1u01-words-31-match.png`) the right column is cut off at the screen edge.
- **Fix (app.css):**
  - Add `html,body{overflow-x:hidden}`.
  - Add `.wordcard .t, .q-big, .opt, .match .opt, .tile, .wordrow b { overflow-wrap:anywhere; hyphens:auto; }`. `lang="de"` is already set on `T()` spans, so `hyphens:auto` will hyphenate properly.
  - Set `.wordcard .t{font-size:clamp(1.4rem, 7vw, 2.1rem)}`.
  - Set `.match{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}` and `.opt{min-width:0}`.
- **Shots:** `34-fsp-overflow.png`, `33-fsp-B1u01-words-31-match.png`.

### H2. "Listen and choose" shows the Persian transliteration next to every option, which gives the answer away (en-fa, tr-fa)
- **Where:** `mcFrom(..., "listen")` and the `mc` renderer: `o.pr ? h("span", …, "  " + o.pr)`.
- **What happens:** you hear "friend" and the options read "friendفرِند", "Iآی", "youیو"… A Persian reader just matches the sound to the Persian spelling, so no listening is involved. The spaces before `pr` also collapse in RTL, so the word and its transliteration are glued together.
- **Fix:** in `mcFrom`, do not pass `pr` to the options when `kind === "listen"` or `"listenMeaning"`. This matters less for "word" and "reverse" questions, but those should hide it as well, because the reveal already shows `revealPr`. If `pr` is kept anywhere, render it as its own block-level `PR()` element, not as an inline string with spaces.
- **Shots:** `11-enfa-u01-words-07-mc-wrong.png`, `22-tr-fa-u01-words-dark-05-mc-wrong.png`.

### H3. Persian-script transliteration is always forced to `dir="ltr"` and italic, so punctuation flips and text is misaligned
- **Where:** `ui.js PR()` (`dir: "ltr"`), the `.pr{font-style:italic}` rule, and `viewUnit` (`h("div",{class:"pr",dir:"ltr"},un.title.pr)`). It shows on word card examples, the dialogue, the reading, the unit hero, the feedback reveal and the word bank.
- **What happens:**
  - "هِلُو، سارا!" is laid out LTR. The "!" and "." land at the start of the Persian sentence, so a Persian reader sees "!هِلُو".
  - The line is left-aligned under a right-aligned sentence.
  - The Arabic script is fake-slanted, which is typographically wrong and harder to read for older eyes.
  - In the unit hero the pronunciation floats alone at the far left of the card.
- **Fix:** `PR()` should use `dir="auto"`, or `rtl` when the text matches `/[؀-ۿ]/`. Add `.pr:lang(fa), .pr[dir=rtl]{font-style:normal}`. In `viewUnit`, use `PR(un.title.pr)` instead of the hard-coded `dir:"ltr"`. Latin transliterations for fa-tr ("salâm") are unaffected.
- **Shots:** `60-pr-bidi-example-crop.png`, `04-unit-enfa-u01-light.png`, `11-enfa-u01-phrases-13-info.png`, `11-enfa-u01-grammar-03-mc-wrong.png` (".هی ایز اِ تیچِر").

### H4. A finished matching exercise can end in a red "Correct answer:" with nothing after it
- **Where:** `RENDER.match`: `feedback(mistakes <= 1, step)` with `step.reveal = null`.
- **What happens:** the learner finds all five pairs, but because of two wrong taps on the way the board empties and a red panel says "پاسخ درست:" (Correct answer:) followed by nothing. The exercise is then queued again. To a beginner this feels like a bug and like being punished for getting everything right.
- **Fix:**
  - Count the match as correct once it is completed, and use the mistakes only for scoring (e.g. `correct += max(0, 1 - mistakes*0.25)`).
  - If you keep a fail state, use a neutral title such as "Done — watch these pairs" and list the pairs that were confused.
  - Never show `wrongAns` without a reveal. In `feedback()`, fall back to `t("tryAgainLater")`.
- **Shot:** `10-enfa-u00-words-17-match-done.png`.

### H5. Progress is counted from attempts, not from learning: 0 % is still "done", and three different "done" definitions disagree
- **Where:** `finishLesson` stores any score. `levelStats` and `viewCourse` count a unit as complete when every lesson was *attempted*. `viewHome` counts it complete when the test is ≥ 70 %. `nextUp` skips every attempted lesson.
- **What happens:**
  - After the bot scored 6–23 % in every lesson of en-fa u01, the level tab said "۲/۱۱ درس کامل شده", the unit row showed ★, and every lesson showed ★☆☆ in green.
  - The Continue card moved on to unit 2, so the learner is never brought back to material they failed.
  - The result screen showed ☆☆☆ for a 0 % unit test, but the unit page showed ★☆☆ for the same lesson. The unit page formula floors at 1 star: `best >= .9 ? 3 : best >= .7 ? 2 : 1`.
- **Fix:**
  - Define a single "passed" threshold (for example best ≥ 0.6) in `store.js` and use it in `levelStats`, `viewHome`, `viewUnit` and `nextUp`.
  - Below the threshold, show the lesson as "practise again" (amber, ↻) and let `nextUp` return it first.
  - Use the same star formula everywhere, with 0 stars for 0.
- **Shots:** `12-enfa-u01-after.png`, `12-enfa-course-after.png`, `31-deen-u11-after.png`, `11-enfa-u01-grammar-zz-result.png`.

### H6. Contrast failures on primary actions: German orange, dark-mode feedback buttons, course accents in dark mode
Measured (WCAG AA needs 4.5:1 for normal text, 3:1 for large text):

| Element | Ratio |
|---|---|
| White on de-en orange `#d9822b` (every primary button, Continue, "Got it", say buttons in the German course on **both** sites) | **2.93** |
| Dark mode: white on `--ok #46c08a` (Continue after a right answer) | **2.29** |
| Dark mode: white on `--bad #f07a8f` (Continue after a wrong answer) | **2.66** |
| Dark mode: white on Zabanyar brand `#2fa898` | **2.93** |
| Dark mode: white on Lernpfad brand `#6aa3d8` | **2.68** |
| tr-fa red on dark surface (ghost buttons, `th`, `.lvls`) | **2.98** |
| fa-tr purple on dark surface | **2.87** |
| Star / unit progress colour `#e0a100` on white ("۰/۵", ★) | **2.27** |

- **Fix:**
  - In dark mode, keep the saturated colours as backgrounds and set `--brand-ink`/button text to `#10181a` (dark text). Alternatively darken `--ok` to `#2e9e6b` and `--bad` to `#c94a60` for button backgrounds only.
  - Darken the German colour to about `#b4610f` (white on it ≈ 4.6).
  - Give `courses.json` a `colorDark` value, or compute a lighter accent in `useCourse()` under `matchMedia('(prefers-color-scheme: dark)')`.
  - Use `#9a6a00` for `.stars`.
- **Shots:** `30-de-en-u11-g1-01-info.png`, `22-tr-fa-u01-words-dark-05-mc-wrong.png`, `35-lp-desktop-dark-deen-u03-grammar-02-mc-wrong.png`.

### H7. The Turkish course's colour is the "wrong answer" red
- **Where:** `courses.json` tr-fa `color: #c2334d`, which is identical to `--bad`.
- **What happens:** in tr-fa every primary button, the progress bar and the speaker buttons are the same red as the error state. A wrong answer looks the same as normal navigation, and a page full of red reads as "you are failing". In dark mode the progress bar looks like an alarm.
- **Fix:** pick a non-semantic hue for tr-fa, for example teal-blue `#1f6f9a` or a deep turquoise. Keep red and green exclusively for feedback.
- **Shots:** `22-tr-fa-u01-grammar-dark-01-info.png`, `22-tr-fa-u01-words-dark-05-mc-wrong.png`.

### H8. The "Save for offline" download reports success even when files failed, and gives no size warning (76 MB, 5,600 files)
- **Where:** `app.js offlineCard()`.
- **What happens:**
  - Each file is wrapped in `try { … } catch {}` and counted as done anyway. On a flaky connection the button still ends with "ذخیره شد ✓", but lessons fail later offline.
  - There is no size estimate (en-fa is 76 MB / 5,611 files, de-en 79 MB, tr-fa 77 MB), so a parent on mobile data gets surprised.
  - Leaving the page stops the download silently, and the flag is never set, so it shows as not downloaded with no resume.
  - After 6 s the bar had barely moved (`45-offline-after.png`).
- **Fix:**
  - Count failures and show "۱۲ فایل ذخیره نشد — دوباره امتحان کنید" (12 files were not saved — try again) with a retry that only fetches what is missing.
  - Show the size taken from `files.json` (add a `bytes` total when the files list is generated) in the description.
  - Use 16 parallel requests.
  - Save the done-count so the progress survives navigation, and call `navigator.storage.persist()` before starting.

### H9. Dialogue "Play all" freezes after tapping any line; interrupted audio promises never resolve
- **Where:** `ui.js play()`. When a new sound starts, the previous promise's `resolve` is dropped, because `player.onended` is overwritten and `pause()` fires no `ended` event.
- **What happens (verified):** with the dialogue auto-playing, tap line 4. The sequence stops forever, line 1 stays highlighted, and the "▶ Play all" button now needs two taps: the first only flips `playing` off. Reading "Play all" has the same hang if it is tapped twice. Letters `await play(l.a); play(l.ex.a)` also stalls when a learner taps quickly.
- **Fix:** keep `let pending = null` in `ui.js`. At the start of `play()` and in `stop()`, call `pending?.()` to resolve the old promise, optionally with `false`. In `playAll` loops, break when the promise resolves as interrupted, and give reading's playAll the same play/stop toggle and line highlight that dialogue has.
- **Shot:** `51-dialogue-stuck-highlight.png`.

---

## MEDIUM

### M1. The home screen language silently switches after visiting another course; there is no language setting
- **Where:** `useCourse(c)` writes `pref("ui", c.support)`, and the home and settings screens then use it.
- **What happens:** a Persian user who opens the German course once (to look) comes back to an English home page and English settings. Opening fa-tr turns it Turkish. There is no setting to switch back.
- **Fix:** keep the course's language *inside* the course, but let the home and settings screens follow a separate `homeLang` preference. Add a three-button language picker (فارسی / English / Türkçe) in Settings.
- **Shot:** `02-home-zy-after-deen.png`.

### M2. Persian fractions "۱/۵" read as decimals
- **What happens:** in Persian, "/" between digits is the usual decimal separator, so "۱/۵" (1 of 5 lessons) reads as **1.5**, and "۲/۱۱ درس کامل شده" reads as "2.11 units complete". It appears in level tabs, unit rows and the level header.
- **Fix:** in `app.js`, use `${num(a)} از ${num(b)}` for fa (Turkish could use "5'te 1" or keep "1/5"). Wrap it in a helper `frac(a,b)` in `i18n.js`.
- **Shot:** `61-persian-fraction-crop.png`.

### M3. Losing a whole lesson: no mid-lesson save, and browser Back or a swipe exits without confirmation
- **What happens:** a words lesson for 12 words ran 49–54 steps with retries (about 10 minutes for a slow learner). The ✕ asks for confirmation, but the Android back gesture or browser Back fires `hashchange`, then `route()`, and the lesson is gone with no warning. Nothing is saved until the very end, apart from SRS.
- **Fix:**
  - Split long lessons. Cap a words lesson at about 20 graded steps, so 12 words become two lessons, or stop after 8 words.
  - In `viewLesson`, push a history entry and intercept `popstate`/`hashchange` while `.player` exists, asking `t("quit")` before leaving.
  - Save `{i, queue ids, correct}` to `sessionStorage` so a reload resumes the lesson.

### M4. The order exercise gives the answer away through capitals, punctuation and audio
- **Where:** `RENDER.order` splits `step.t` on spaces as-is.
- **What happens:** tiles read "I'm", "Iran.", "you?". The capital tile goes first and the tiles with "." or "?" go last. In addition, the 🔊 button next to the prompt plays the full target sentence, which turns the exercise into dictation.
- **Fix:** lower-case the first word unless it is a proper noun or "I"/German noun (store a `keepCase` flag or compare against the word list), strip trailing punctuation from the tiles and add it back in the reveal. Hide the sentence audio until the learner has checked, or make it the slow version only as a hint that costs the "perfect" mark.
- **Shot:** `11-enfa-u01-phrases-17-order-wrong.png`.

### M5. Match glosses leak the answer and are too long (Lernpfad FSP, some B2/C1)
- **What happens:** the right-hand side shows the full `s` field including notes, for example "(one)self; für Sie selbst: for yourself" next to *selbst*, "pregnant · die Schwangerschaft: pregnancy" next to *schwanger*, and "…· Laie: nur in der Apotheke". The German side appears inside the English side, and the cards are 5–7 lines tall.
- **Fix:** in `buildLesson` for `match`, use a short gloss: `w.s.split(/[;·(]/)[0].trim()`, or a new optional `sShort`. Also exclude pairs whose short gloss contains the German headword.
- **Shot:** `33-fsp-B1u01-words-31-match.png`.

### M6. Wrong-answer feedback explains nothing and never acknowledges the learner's answer
- **What happens:** every wrong answer only says "پاسخ درست:" / "Correct answer:" plus the solution:
  - There is no "Not quite" line.
  - The learner's own wrong choice is not shown in the type exercise.
  - There is no "almost: check the spelling" for one-letter typos.
  - The grammar rule is not shown for gap fills (e.g. "he/she/it → is").
  - Nothing tells the learner "this will come back at the end".
- **Fix:** in `feedback()`, add a title `t("notQuite")` and a line "You wrote: xyz". In `RENDER.type`, accept a Levenshtein distance of 1 for words of at least 5 letters as correct-with-typo (orange panel showing the corrected spelling). For grammar exercises, show `x.why` when the content has it, otherwise the grammar title with a "📘 rule" button that reopens the explanation card. Add a small "↻ will come again" note when the step was re-queued.
- **Shots:** `11-enfa-u01-words-33-type-wrong.png`, `11-enfa-u01-grammar-03-mc-wrong.png`.

### M7. Typed German answers do not accept ae/oe/ue/ss
- **Where:** `normalize(…, "de")` only lower-cases.
- **What happens:** "Strasse" for *Straße* and "hoere" for *höre* are marked wrong. The ä/ö/ü buttons help, but many people on a desktop or a foreign keyboard type the digraphs.
- **Fix:** in `normalize` for de, map `ß→ss, ä→ae, ö→oe, ü→ue` on both sides before comparing. If the raw strings differ, show the correct spelling as a gentle note.

### M8. The grammar explanation is a wall of text with broken bidi in RTL; the rule cannot be reopened during exercises
- **What happens:** in Persian-support grammar, English fragments inside Persian sentences are not isolated. "She is **a** teacher." breaks across lines as "She is a" / ".teacher". "I am Sara." becomes ".I am Sara". The table is below the fold, under a fixed "فهمیدم" (Got it) button. Once the learner taps "Got it", the rule is gone for the rest of the lesson.
- **Fix:**
  - In `ui.js md()`, wrap every Latin run in `<bdi dir="ltr">` when the UI is fa: `/[A-Za-zÄÖÜäöüßçğıİöşü'][^؀-ۿ*]*[A-Za-z.!?'’]/`. Also wrap Persian runs in `<bdi>` when the UI is en/tr.
  - Put the table before the long paragraphs or under a "📋 table" toggle.
  - Add a "📘" button in the player top bar for `g*` and `grammar` lessons that opens the current explanation in the modal used by the report dialog.
- **Shots:** `63-grammar-bidi-crop.png`, `11-enfa-u01-grammar-01-info.png`, `30-de-en-u11-g1-01-info.png`.

### M9. The Persian on-screen keyboard is hard for Turkish learners (fa-tr)
- **What happens:**
  - Keys are in Persian typewriter order (ض ص ث ق ف …). A beginner hunting for "س" has to scan 33 keys.
  - The half-space key is labelled **نیم‌فاصله**, in Persian script, inside a Turkish UI.
  - The ⌨️ key sits on a separate last row and is hidden under the feedback bar after checking.
  - There is no visible caret (`inputmode=none`).
- **Fix:**
  - Order `FA_KEYS` alphabetically (ا ب پ ت ث ج چ …) with the Latin hint as small text, which you already have in `letters[].pr`.
  - Label the half-space key with `t("halfSpace")` ("yarım boşluk").
  - Put ⌫ / space / ⌨️ on one row and add bottom padding equal to the feedback height.
  - Show a fake caret, or set `caret-color: var(--accent)` and keep focus on the input.
- **Shot:** `20-fa-tr-u01-words-33-type.png`.

### M10. Screen-reader support is thin
- **Accessible names in English only:** `aria-label`s are hard-coded English ("back", "close", "settings", "play", "slow") in a Persian or Turkish UI. Fix: use `t("back")`, `t("listen")`, `t("slow")` etc.
- **Picture options are silent:** they are `<button><img alt=""></button>` with no accessible name, so a screen reader announces "button" four times. Fix: add `aria-label` from `o.t` (or the emoji's name) to picture options. Hiding the answer visually is fine, but the label must exist, e.g. "option 1".
- **The whole page is a live region:** `#app` has `aria-live="polite"`, so every screen change is read out in full. Fix: remove it and keep `role="alert"` on feedback only.
- **Focus is lost between steps:** after Continue, focus falls to `<body>`. Fix: move focus to `.step .prompt` (with `tabindex=-1`) after `render()`.
- **No number-key shortcuts:** options show numbers ①②③④ but pressing 1–4 does nothing. Fix: add key handlers for 1–4 and Enter.
- **Dialog semantics:** the report dialog lacks `aria-labelledby` and a focus trap.

### M11. The result screen does not teach or motivate
- **What happens:** the screen only shows 💪, "Lesson complete!", stars and a big percentage. For example "6 %" after a lesson where every item was eventually answered correctly.
  - It does not show the words that were missed, the XP earned, or the streak.
  - It offers no "practise the mistakes" option.
  - In review mode the buttons still say "Next lesson / Back to unit", and "Again" does not restart the review (`onExit` ignores the argument).
- **Fix:**
  - Show "✔ 14 of 18 right the first time" in place of a bare percentage.
  - List the missed items with 🔊.
  - Show "+16 ⭐" and "🔥 day 3".
  - For review, render its own buttons: "Review more" / "Back to course".
  - Score retries partially, so a learner who corrects everything does not see 6 %.
- **Shots:** `11-enfa-u01-grammar-zz-result.png`, `41-review-zz-result.png`.

### M12. Word-bank usability
- **What happens:**
  - About 60 unit tabs sit in a single horizontally scrolling row, with no grouping by level and no search.
  - "۱۶ یاد گرفته‌اید" (16 learned) counts words that were merely *seen*.
  - Unseen words are shown at 60 % opacity, buttons included, with no legend.
  - The pronunciation floats at the far left of each row (see H3).
  - There is no way to practise from it.
- **Fix:**
  - Add level chips first, then units.
  - Add a search field.
  - Rename the count to "seen" and add "strong" (SRS box ≥ 4).
  - Show a 3-dot strength meter per word.
  - Add a "Practise these" button that calls `buildReview` with the unit's words.
- **Shot:** `44-wordbank.png`.

### M13. The type prompt does not say which language to type in
- **What happens:** `q_type` is "بنویسید" / "Yazın" / "Write it". A Persian learner looking at a picture with the Persian gloss "اسم، نام" may well type Persian.
- **Fix:** use `t("q_type")` + the target language name: "به انگلیسی بنویسید" / "Farsça yazın" / "Write it in German". Also set `placeholder` on the input.

---

## LOW

- **L1. Mixed-direction text on the login and home screens.** The secondary lines (`lang="en"`, no `dir`) render as "?Who is learning? · Kim öğreniyor" (shot `62-login-bidi-crop.png`). Fix: add `dir:"ltr"` to those divs in `viewLogin`. The home course card subtitle "English · A1 · درس ۲ · واژه‌ها" wraps with stray "·" separators. Wrap the Latin part in `<bdi>`.
- **L2. Underlined emoji icons.** `a.iconbtn` (⚙️, 📒, ←) shows an underline under the emoji. Fix: `.iconbtn{text-decoration:none}`.
- **L3. Tap targets below 44 px.** These are `.say.sm` 40×40 (used everywhere for example sentences), `.reportbtn` 40×40, `.linkbtn` "Not you?" 38 px tall, the offline `<summary>` 30 px tall, and `.brand` 36×36. Fix: raise them to 44 px, ideally 48 px for older users.
- **L4. "Coming soon" ✨ chip.** The ✨ chip on unstarted course cards means nothing. Use "شروع ▶" (Start) instead.
- **L5. Capital I and lowercase l look the same.** In system-ui fonts, "I i" vs "L l" are indistinguishable on letter tiles and option buttons, which hurts in the ABC unit. Use a font with a serifed I (Atkinson Hyperlegible or Inter with `font-feature-settings:"ss01"`/`cv05`) for `[lang=en] .letter`, `.opt`, `.tile`.
- **L6. The review entry shows "۰" with no meaning.** The review row is always present, and with 0 due words its chip reads "۰". Hide the row, or say "nothing due · next review tomorrow". When words *are* due (16 in my test), the row is visually weaker than the Continue card. Make it the primary card when ≥ 10 words are due.
- **L7. Settings are thin.** There is no UI language (M1), no audio settings (autoplay on/off, normal speed 0.85×), no text size, no light/dark override, and no "reset my progress". The install hint is generic. Add per-platform instructions or the `beforeinstallprompt` button.
- **L8. Autoplay assumptions.** Prompts autoplay through `setTimeout(play, 250)`. On iOS the first autoplay after a cold start can be blocked, and the learner then sees a bare listen screen with nothing happening. Add a pulsing 🔊 hint when `play()` rejects (catch `NotAllowedError` and set `btn.classList.add("nudge")`).
- **L9. Level tabs are hard to read and use.** In fa-tr, A2–C1 are tappable "Yakında" (coming soon) tabs, and the tab label `.small` is 14 px. These tabs use `role=tab` without arrow-key handling or `aria-controls`. Either implement the tab pattern or use plain buttons.
- **L10. Errors and splash are hard-coded in three languages.** The generic error card and the splash use hard-coded fa/en/tr strings. That is fine, but the error card should also offer "Back to home".
- **L11. The quit dialog is the native `confirm()`.** It shows the site's host name and looks like a browser warning to older users. Use the in-app modal (same as the report dialog) with large Yes/No buttons.
- **L12. The words lesson ends with three "type it" questions.** Typing is the hardest step for beginners on a phone and comes at the very end, after about 45 steps. Interleave typing earlier and make it optional on A1 for learners who struggle (e.g. a "can't type now" skip, the `cantListen` string that already exists unused).

---

## Positive notes (keep)

- Wrong answers are re-queued once.
- The SRS is per person and shared devices are handled well.
- There is a 🐢 slow-audio button everywhere.
- The report dialog is simple, works offline and captures the exact step.
- Translation can be toggled in dialogue and reading.
- The level tabs give a clear overview, and there is a "continue where you left off" card on home.
- Persian and Turkish UIs are fully localised, with Persian digits.
- The special-character keys for de/tr work well.
- The desktop layout is clean (`06-home-desktop.png`, `35-…`).

## Screenshot index (most important)

| Problem | Shot |
|---|---|
| Overflow, Next button off-screen | `shots/34-fsp-overflow.png` |
| Match overflow and gloss leak | `shots/33-fsp-B1u01-words-31-match.png` |
| Listening giveaway | `shots/11-enfa-u01-words-07-mc-wrong.png`, `shots/22-tr-fa-u01-words-dark-05-mc-wrong.png` |
| Transliteration bidi | `shots/60-pr-bidi-example-crop.png`, `shots/04-unit-enfa-u01-light.png`, `shots/11-enfa-u01-phrases-13-info.png` |
| Empty "Correct answer:" after match | `shots/10-enfa-u00-words-17-match-done.png` |
| Progress counted from attempts | `shots/12-enfa-course-after.png`, `shots/12-enfa-u01-after.png`, `shots/31-deen-u11-after.png` |
| Contrast / red course colour | `shots/30-de-en-u11-g1-01-info.png`, `shots/22-tr-fa-u01-grammar-dark-01-info.png`, `shots/35-lp-desktop-dark-deen-u03-grammar-02-mc-wrong.png` |
| Offline download | `shots/45-offline-after.png` |
| Dialogue audio stuck | `shots/51-dialogue-stuck-highlight.png` |
| Home flips to English | `shots/02-home-zy-after-deen.png` |
| Persian fraction | `shots/61-persian-fraction-crop.png` |
| Order giveaway | `shots/11-enfa-u01-phrases-17-order-wrong.png` |
| Grammar bidi | `shots/63-grammar-bidi-crop.png` |
| fa-tr keyboard | `shots/20-fa-tr-u01-words-33-type.png` |
| Result screen | `shots/11-enfa-u01-grammar-zz-result.png`, `shots/41-review-zz-result.png` |
| Word bank | `shots/44-wordbank.png` |
| Login bidi | `shots/62-login-bidi-crop.png` |

## 5. Pass 5 (22 Nov 2026): what was done in the app (both sites, sw `*-shell-2026-11-22b`)

| Item | Status |
|---|---|
| M3 losing a lesson | Done: an unfinished lesson is kept on the device for 3 days and offered again ("Continue where you left off?"); browser Back / swipe asks first (in-app dialog); words lessons with more than 12 words have fewer extra steps and typing is spread over the lesson. Theme units with a third grammar point get a second grammar lesson ("Grammar 2"). |
| M6 feedback | Done: "Not quite" title, "You wrote: …", one-letter typo accepted for words ≥ 5 letters (not in grammar gaps) with the correct spelling, spelling note for ae/oe/ue/ss and other accepted forms, the exercise's `why`, a "📘 See the rule" button and "↻ comes again at the end". |
| M8 grammar | Done: table above the explanation, 📘 rule button in the lesson top bar, Latin runs isolated without trailing spaces. |
| M9 Persian keyboard | Done: alphabetical keys with Latin hints, "yarım boşluk" label, one row for half space / space / ⌫ / ⌨️, Persian digits, visible caret. |
| M10 accessibility | Done: translated aria labels, focus moves to the question, number keys 1–9 choose, Enter checks/continues, picture options named "option n", dialogs labelled. |
| M11 result screen | Done: "x of y right the first time", points earned, the missed items with audio, "Practise the mistakes"; review has its own buttons; retries count half. |
| M12 word bank | Done: level and unit chips, search, seen / well learned counts, 3-dot strength, "new" tag, "Practise this unit's words". |
| L1 bidi on login/home | Done (names in `<bdi>`, Latin lines ltr). |
| L4 ✨ chip | Done ("Start ▶"). |
| L5 I/l | Done: Verdana-style font for English tiles, options and letters. |
| L6 review row | Done: quiet when nothing is due, first card when ≥ 10 are due. |
| L7 settings | Done: autoplay, slower speech, larger text, theme (auto/light/dark), show pronunciation guide, platform install hints and install button. Reset of progress not added (risky). |
| L8 autoplay blocked | Done: the 🔊 button pulses when the browser blocks sound. |
| L9 level tabs | Done: plain buttons with aria-current. |
| L10 error card | Done: home button. |
| L11 native confirm | Done: in-app dialog. |
| L12 typing at the end | Done: typing spread over the lesson, "Can't type now" skip. |
| Content support | `cue`/`cpr`/`task`/`why` exercises, `sym` pictures excluded from picture questions, dialogue role play ("Speak B's part"), Turkish â î û keys. |
| Updates | Pages now check for a new version when they come to the front and every 30 minutes and reload outside lessons; the service worker never installs files from the HTTP cache. |
