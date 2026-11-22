# Critic review: tr-fa C1 (pass 4, Nov 2026)

Slice: `content/tr-fa/C1/u01.json` … `u10.json` (Turkish for Persian speakers, C1). I read every item in every unit: title, goals, words (`t`, `s`, `pr`, `pl`, `ex`, emoji), phrases, dialogue, both grammar points (title, explanation, table, examples, every exercise and its key/answers/alts), reading (text and questions) and sentences.

I also ran these scripted checks:
- Persian ي/ك, missing ZWNJ (می/نمی, ها, تر/ترین, ام/اید…), double spaces: none found.
- "Neda": none.
- Digits, "/", "=" or "→" in voiced `t`: only the known grammar-title slashes.
- Duplicate headwords and phrases inside C1 and against A1–B2: none. Only compounds such as *pazar payı* / *pazar* overlap.
- A Persian-script skeleton comparison of every word and phrase `pr` with its `t`: all consistent. Final *-o* is «و» as in *banyo*, *metro*, *tablo*; ğ follows the course conventions.
- Every level reference in the explanations against the A2/B1/B2 grammar titles: all correct, for example *-mak üzere* in B2 u09, *bir yandan … öte yandan* in B2 u02/u06, *-casına* in B2 u08.
- The app logic in `docs/js/lesson.js`: phrases, dialogue lines and sentences of ≤ 8 words become word-order tasks, and words with an emoji become "Which picture is it?" questions.

`python3 tools/validate.py content/tr-fa/C1/*.json` prints OK for all 10 files. `python3 tools/audit.py` gives `tr-fa C1: {}`.

## 1. Verdict

This is a strong, well-made C1 level. The Turkish is natural and idiomatic and follows TDK spelling (*hüsnükabul*, *öz güven*, *yapay zekâ*, *resmî* vs *siyasi*). The grammar explanations are precise and compare usefully with Persian (izafet, «نگو» for *meğer*, «آب ندیده موزه نکش»). The readings are authentic in genre: op-ed, municipal notice, short story, company profile, legal guide, popular-science article, advice column and speech. Cultural fit for an Iranian family is excellent: Tabriz letters, Hedayat's *Kör Baykuş*, Hafez, the Persian loanwords and the *hâlâ* ≠ «حالا» trap. After three earlier passes very few hard errors were left. The one real content error was a point-of-view slip in the u03 story. The main weaknesses now are pedagogical: some vocabulary and phrases sit below C1, the exercises are almost all single-gap fills, the reading questions only test literal recall, and the two "guessing" structures (*-mış olmalı*) are taught three times across B2 and C1.

## 2. Fixed

| Unit | Path | Before → After | Reason |
|---|---|---|---|
| u03 | `reading.text[5].t` | Annem, “Bunlar **babaannemin** bir yakınından gelmiş olmalı,” dedi. → Annem, “Bunlar **babaannenin** bir yakınından gelmiş olmalı,” dedi. | Point-of-view error. The *babaanne* is the narrator's paternal grandmother. In the mother's mouth *babaannem* means the mother's own grandmother, which is a different person. Addressed to the narrator it must be *babaannen(in)*. |
| u03 | `reading.text[5].s` | «… از طرف یکی از نزدیکان **مادربزرگم** آمده باشد.» → «… نزدیکان **مادربزرگت** …» | Same fix in the translation. |
| u03 | `grammar[1].exercises[1].s` | «… در کاپادوکیه داریم **سوار بالن می‌شویم**.» → «… داریم **بالن‌سواری می‌کنیم**.» | *balona biniyor olacağız* = "we'll be riding in a balloon" (an ongoing action at that moment). «داریم سوار … می‌شویم» means "we are boarding", which misreads the *-ıyor olacak* point of the exercise. |
| u02 | `dialogue.lines[6].s` | «… شما را هم به فهرست **اضافه می‌کنم**.» → «… **می‌توانم** شما را هم به فهرست **اضافه کنم**.» | The Turkish says *ekleyebilirim* ("I can add"); the translation dropped the modal. |
| u10 | `phrases[4].s` | «سؤال‌هایتان را می‌توانم در پایان ارائه پاسخ دهم.» → «می‌توانم در پایان ارائه به سؤال‌هایتان پاسخ دهم.» | «پاسخ دادن» takes «به», not «را». The old sentence was ungrammatical in formal Persian. |
| u08 | `words[13].emoji` (*kervansaray*) | 🐫 → "" | A camel is *deve*, not a caravanserai. In a picture question it would mislead, and no emoji shows a caravanserai. |
| u08 | `words[10].emoji` (*yazım kılavuzu*) | 📖 → "" | An open book pictures *kitap*, which learners know since A1, not a spelling guide. Misleading in picture and "which word?" questions. |
| u08 | `words[6].emoji` (*hattat*) | 🖋️ → "" | A fountain pen is *dolma kalem*, not a calligrapher. No emoji shows the person or the reed pen. |
| u09 | `sentences[6].alts` | (none) → + *Uzun vadede duygularını bastırmak zarar verir.* | A word-order task (6 words). This second order is fully natural and was rejected. It is parallel to the accepted u04 *uzun vadede* alternatives. |
| u10 | `sentences[4].alts` | (none) → + *Sunucu, konuşmacı süreyi aşınca sözünü kesti.* | A word-order task (6 words). Subject-first with an embedded time clause is a standard, natural order and was rejected. |

Totals: **target text 1** (with its translation), **translation only 3**, **emoji 3**, **order alternatives 2**. pr 0, grammar explanation 0, exercise keys 0. Every added alt uses exactly the same tiles as `t`; punctuation is ignored by `normalize`.

## 3. Remaining issues (need a decision or bigger work)

### High
1. **u08 g02 (kâr/kar, hâlâ/hala, âlem/alem) is a pronunciation lesson with no pronunciation guide where learners practise.** The table rows, examples and exercises have no `pr`, because C1 has `pr` on words and phrases only. The contrast «کیار» / «کار», «هاآلا» / «هالا» is shown only in brackets inside the explanation.
   *Suggestion*: allow `pr` on this grammar point's table and examples, as a single exception to the C1 rule, so learners can see the contrast next to the audio. Alternatively, add 2–3 phrases such as *Bu işten kâr ettik.* / *Hâlâ kar yağıyor.* that carry `pr`.

### Medium
2. **Some vocabulary and phrases are below C1.** Words: *makale, tez, doktora* (u01), *sunum, slayt, jüri* (u10), *vergi, borsa* (u04). Phrases: *Seni çok iyi anlıyorum.*, *Kafana takma, geçer.* (u09), *Hepinize hoş geldiniz demek istiyorum.* (u10), *Davayı kazandık!* (u05).
   *Suggestion*: replace 1–2 per unit with real C1 collocations, for example *atıf yapmak / atıf almak*, *etik kurul onayı* (u01); *temyize gitmek*, *içtihat*, *zamanaşımı* (u05); *söz hakkı almak*, *sözü bağlamak*, *dinleyiciyi avucunun içine almak* (u10); *içini kemirmek*, *kendini paralamak* (u09).
3. **Triple teaching of *-mış olmalı*.** It appears in B2 u04, C1 u03 g02 and C1 u09 g02, and C1 u03's title also lists it. This comes from the curriculum.
   *Suggestion*: make u03 g02 strictly "*-mış olacak / -ıyor olacak*" (future perfect and progressive). Move all *olmalı* practice to u09, which already frames it as inference.
4. **Exercise monotony.** About 95 % of grammar exercises are one-word gap fills or 3-option choices. At C1 learners should transform and rephrase.
   *Suggestion*: add `type` items with a whole-clause answer. Examples: "rewrite with *zira*: *…çünkü örneklem küçüktü*"; register shifts such as *-dığı için* → *-masından dolayı* / *-mesi nedeniyle*, or *bence* → *-dığı kanısındayım*; and error-spotting choices.
5. **Reading questions are literal retrieval only** (5 × 10 items, every answer copied from one sentence).
   *Suggestion*: per unit, replace one question with an inference or stance question. Examples: u07 "*Yazar tartışma programlarına karşı nasıl bir tutum içinde?*"; u02 "*Muhalefetin tutumu nasıl özetlenebilir?*"; u09 "*Uzmanın Mina Hanım'a genel mesajı nedir?*"

### Low
6. **u01 `grammar[0].exercises[2]`** *Bir sonraki bölümde ___ gibi* offers *açıklanacağı* (key) and *açıklandığı*. The second is also seen in academic prose in a present reading ("as is explained in the next section"). The Persian «توضیح داده خواهد شد» disambiguates it, so I kept it. *Suggestion*: change the distractor to *açıklanmak*.
7. **u02 `dialogue.lines[8]`** *kamuoyu baskısı arttığı takdirde belediyelerin geri adım attığı çok görülmüştür*. *takdirde* is meant for hypothetical or rule-like conditions; for a past generalisation, *arttığında* is more natural. It works as a grammar showcase but is slightly stilted. Decide whether to keep it.
8. **Weak emoji kept**: 📱 *teknoloji bağımlılığı*, 🤖 *otomasyon*, 🔬 *laboratuvar* (u06), 📝 *sözleşme* (u05), 📊 *sunum*, ⏱️ *süreyi aşmak* (u10). They are acceptable on word cards. In picture quizzes, learners may answer by the depicted object (*telefon, robot, mikroskop*). A course-wide policy for abstract C1 nouns would help: I suggest "" unless the emoji is the conventional icon.
9. **Repetition of model sentences.** In u06, *Fiyatlar talebe bağlı olarak değişir / değişmektedir* appears in the explanation, X7 and sentences[3]. In u04, *Talep arttıkça fiyatlar yükselir* appears in the explanation, table, X0 and sentences[3]. u02 has both *Yangın hâlinde asansörü kullanmayınız* and *Deprem hâlinde asansörü kullanmayın*. *Suggestion*: vary one of each pair.
10. **TTS-risky strings** (unchanged, for central handling): slashes and leading-hyphen suffixes in grammar titles and tables; "+" in tables; hyphenated izafet forms (*hüsn-ü kabul*, *Divan-ı Hümayun*); *Márquez*. The full list is in `review/tr-fa-C1-new.md`.
11. **Small translation choices**, defensible but could be revisited: u02 L10 *Perşembe akşamı* → «پنجشنبه عصر» («شب» is closer to *akşam* after sunset); u03 L0 the name *Can* written «جان» may be read as "dear" (it could be «جان (Can)»).
12. **Names recycled across roles**: Mehmet is a professor, a businessman and a bookseller; Mina a PhD student, a volunteer, a book buyer and an advice-column reader; Ayşe a lawyer and a debate coach. There is no contradiction, but a family member following the course may wonder. This was noted in pass 3.

## 4. Improvement ideas (prioritised)

1. **Make C1 truly productive.** Add one "rephrase in formal register" exercise per grammar point, as in item 4. This is the core C1 skill (register control), and the current gap-fills only test recognition.
2. **Spoken C1 next to written C1.** Eight of ten units are formal or written in register. Add a light strand of high-level spoken Turkish in the dialogues and phrases: discourse markers (*hani, yani, şöyle ki, derken, neyse*), hedging (*nasıl desem*), and colloquial contractions in the audio. That is what the family will hear in Turkey.
3. **Inference reading questions and one longer text.** Add stance and inference questions (item 5). Consider making one reading per level noticeably longer (18–20 sentences, for example u03's story or u07's op-ed), with a "main idea" question for C1 reading stamina.
4. **Practical "Iranian in Türkiye" C1 topics.** u05 (tenant rights) is excellent and directly useful. Similar real-life formal language could be woven into existing themes: *ikamet izni*, *denklik* (diploma recognition), *noter onaylı tercüme*, *e-Devlet* (u02 or u05 phrases/sentences).
5. **Exploit the Persian bridge further in u08.** Add an exercise that asks for the Turkish meaning of a "false friend" (*hâlâ* «هنوز» ≠ «حالا», *mahsus* in speech «عمداً» (only formally «مخصوصِ»), *tarif* «دستور پخت / نشانی» ≠ «تعریف», *ihtiyar* «پیر» ≠ «اختیار»). This trap matters most for Persian speakers, and u08 currently tests it only once, in the reading.
6. **Vocabulary recycling.** Reuse 2–3 words from the previous C1 unit in each new reading or dialogue. u10 already reuses u07's *çürütmek / ikna*, and u09 reuses *tükenmiş*. Track this with a simple script (headword of unit n−1 found in the text of unit n).
7. **Bridge from B2.** C1 builds correctly on B2 (*-dıkça, -dığı sürece, -arak, -makta, -casına, -mak üzere* are all referenced accurately). The B2 → C1 jump in text length and register is smooth. What the learner does not get is an explicit "review" moment. One short u01 phrase or example set that recycles B2's *-dığını söyledi / diye* in academic citation ("*X, … olduğunu belirtmektedir*") would make the continuity visible.
