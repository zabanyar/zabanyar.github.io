# tr-fa C1 — third review pass (Oct 2026)

Scope: `content/tr-fa/C1/u01.json` … `u10.json`, every item read (words + examples, phrases, dialogues, both grammar
points with explanation/table/examples/exercises, readings + questions, sentences).
Automatic audit `review/audit/tr-fa-C1.md`: **no findings** (before and after). No headword is taught twice inside the
level, and no C1 headword repeats an A1–B2 headword (checked by script; only compounds like *pazar payı* / *pazar*).
Extra checks run: an automatic Turkish → Persian-script transliteration of every word/phrase compared with its `pr`
(all differences were artefacts of the checker — the guides follow the course conventions, e.g. *değil* «دِییل»,
*kaynağı* «کاینائِ», *çocukluğumu* «…لوئومو», *doğrulamak* «دُرولاماک» like A2 *doğramak* «دُراماک», *kâr* «کیار»,
*hâkim* «هاآکیم»); level references in the explanations checked against the A2/B1/B2 grammar titles; Persian ي/ك/ZWNJ
scan; "Neda" (none); app code check (`docs/js/lesson.js`): phrases, dialogue lines and sentences of ≤ 8 words are used as
word-order exercises, so missing `alts` there reject correct answers — that is the largest group of changes below.

`python3 tools/validate.py content/tr-fa/C1/*.json` → OK for all 10 files; `python3 tools/audit.py` → `tr-fa C1: {}`.

## Changes

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u01 | `grammar[1].explain` (last paragraph) | «dolayısıyla، bununla birlikte و aksine … بعدشان ویرگول می‌گذارند» → comma usual after *bununla birlikte* / *aksine*, **optional after *dolayısıyla*** (… ; dolayısıyla sonuçlar…) | The rule contradicted the unit's own examples (explain, `examples[0]`, `exercises[0]`, reading text[11] all have *dolayısıyla* without a comma; u05 reading has it with one). |
| u07 | `grammar[0].explain` (first sentence) | «در B2 با **bence** و **bana göre** آشنا شدید.» → «**bence** (B1) و **bana göre** را برای بیان نظر می‌شناسید.» | *bence* is taught in B1 u06, not B2; *bana göre* is not a B2 grammar point. |
| u01 | `reading.text[10].s` | «… به کیفیت آن‌ها توجه می‌کنند.» → «… توجه کرده‌اند.» | *bakmaya başlamıştır* = "have started to look at"; the old Persian said they simply do it. |
| u03 | `dialogue.lines[6].s` | «من مدت‌ها پیش به تهران رسیده‌ام» → «من دیگر به تهران رسیده‌ام» | Mina flies to Tehran **that same day**; *çoktan varmış olacağım* = "I'll already have arrived" — «مدت‌ها پیش» (long ago) was misleading. |
| u01 | `grammar[0].exercises[5].answer` | + **tahmin edildiği**, **öngörüldüğü** | *Tahmin edildiği / öngörüldüğü gibi, sonuçlar hipotezimizi doğruladı* is equally correct for «همان‌طور که انتظار می‌رفت». |
| u06 | `grammar[1].exercises[5].answer` | + **kurlarına** | *döviz kurlarına bağlı olarak* is at least as natural as *döviz kuruna*. |
| u08 | `grammar[0].exercises[6].answer` | + **Ne yazık ki** | Fits the single gap and means «متأسفانه» exactly. |
| u01 | `phrases[6].alts` | + *Teşekkür ederim, çok yerinde bir soru.* | Natural second order (order exercise). |
| u01 | `dialogue.lines[0].alts` | + *Müsaitseniz hocam, tezimin ikinci bölümü hakkında konuşmak istiyorum.* | Same. |
| u02 | `phrases[7].alts` | + *Adayların programlarını oy vermeden önce inceleyin.* | Same. |
| u03 | `phrases[5].alts` | + *Hangi türü en çok okumayı seversin?*, *Hangi türü okumayı en çok seversin?* | Same. |
| u03 | `dialogue.lines[4].alts` | + *Haklısın. Şimdi düşününce, sanki o betimlemeler birer ipucuymuş.* | Same. |
| u03 | `sentences[6].alts` | + *Yazar gerçekten bu sahneyi yaşamış olmalı.* | Same. |
| u04 | `phrases[2].alts` | + *Bu yatırım kendini uzun vadede amorti eder.* | Same. |
| u04 | `phrases[7].alts` | + *Her geçen gün fiyatlar artıyor.* | Same. |
| u04 | `dialogue.lines[1].alts` | + *Evet. Hatırlarsan, herkes yılın başında durgunluktan bahsediyordu.* | Same. |
| u04 | `dialogue.lines[4].alts` | + *Peki ihracatımız bu kadar nasıl arttı?* | Same. |
| u04 | `dialogue.lines[8].alts` | + *Haklısın. Rekabet gücümüzü maliyetleri düşürebildiğimiz ölçüde koruruz.* | Same. |
| u04 | `dialogue.lines[10].alts` | + *Harika. Bu grafiği toplantıda mutlaka göster; rakamlar ortada.* | Same. |
| u04 | `sentences[3].alts` | + *Fiyatlar talep arttıkça yükselir.* | Same. |
| u05 | `phrases[5].alts` | + *Sonuna kadar hakkımı arayacağım.* | Same. |
| u05 | `dialogue.lines[9].alts` | + *Ayşe Hanım, çok teşekkür ederim. İçim rahatladı.* | Same. |
| u06 | `phrases[2].alts` | + *Kesin olarak bunu söylemek mümkün değil.* | Same. |
| u06 | `phrases[6].alts` | + *Uzmanlar bu konuda ikiye bölünmüş durumda.* | Same (u02 `sentences[5]` already accepts the parallel order). |
| u06 | `dialogue.lines[10].alts` | + *Okuyucularımıza son olarak ne söylemek istersiniz?* | Same. |
| u06 | `sentences[3].alts` | + *Talebe bağlı olarak fiyatlar değişmektedir.* | Same order is already accepted in `grammar[1].exercises[7]`. |
| u06 | `sentences[4].alts` | + *Haziran ayından itibaren yeni kurallar geçerli olacak.* | Natural second order. |
| u06 | `sentences[5].alts` | + *Henüz bu konuya dair bir kanıt yok.*, *Bu konuya dair bir kanıt henüz yok.* | Same. |
| u07 | `phrases[3].alts` | + *Neye dayanarak bunu söylüyorsunuz?* | Same. |
| u07 | `phrases[4].alts` | + *Bir de meseleye şu açıdan bakalım.* | Same. |
| u07 | `phrases[5].alts` | + *Sanırım burada bir yanlış anlaşılma var.* | Same. |
| u07 | `dialogue.lines[9].alts` | + *Kesinlikle. Ama hâlâ yasak konusunda farklı düşünüyorum.* | Same. |
| u07 | `sentences[0].alts` | + *Bu tartışma kanımca hiçbir sonuca varmayacak.* | Same. |
| u07 | `sentences[1].alts` | + *Sözümü kesmeyin lütfen.* | Same (parallel to u03 `phrases[1]` alt). |
| u07 | `sentences[7].alts` | + *İki taraf sonunda ortak bir noktada uzlaştı.* | Same. |
| u08 | `phrases[1].alts` | + *Bunun Türkçede tam karşılığı yok.* | Same. |
| u08 | `phrases[4].alts` | + *İki kültür tarih boyunca birbirini etkilemiş.* | Same. |
| u08 | `sentences[4].alts` | + *Şirket bu yıl hiç kâr etmedi.* | Same. |
| u08 | `sentences[7].alts` | + *Bu el yazmasının ilk sayfaları maalesef kayıp.* | Same. |
| u09 | `phrases[1].alts` | + *Biraz kendine zaman ayır.* | Same. |
| u09 | `phrases[7].alts` | + *Şimdi ne demek istediğini anladım.* | Same. |
| u09 | `sentences[0].alts` | + *Telefonumu eve gelir gelmez sessize alıyorum.* | Same. |
| u10 | `phrases[2].alts` | + *Dikkatinizi bu slayta çekmek istiyorum.* | Same. |
| u10 | `phrases[3].alts` | + *Birazdan bu noktaya değineceğim.* | Same. |
| u10 | `phrases[4].alts` | + *Sunumun sonunda sorularınızı alabilirim.* | Same. |
| u10 | `sentences[1].alts` | + *Bütçe konusuna ikinci olarak değineceğim.* | Same. |

Every added alternative was checked by script to use exactly the same tiles as `t` (punctuation is ignored by the app's
`normalize`).

Totals: **pr 0**, **target text 0**, **translation 2**, **grammar explanation 2**, **exercise answers 3**,
**order alternatives 39 items (41 alternatives)**, **emoji 0**, **duplicate headwords 0** (none in the level).

## Noticed but not changed

- **Pronunciation guides**: all word and phrase `pr` match `t` and the course conventions (C1 has `pr` on words and
  phrases only, per CURRICULUM_NEW_LEVELS.md; no exercise `pr` exists, so there is no `___` to convert). Vowel length in
  loanwords without a circumflex (*kanun, hukuk, miras, itiraz, münazara, hitabet*…) is not marked, as everywhere in the
  course (only â/î/û → آ / palatal «کیا»). u07 `phrases[1].pr` «جوملِ‌می» keeps the ZWNJ workaround for the validator's
  می-rule (noted in the earlier review).
- **Names across units**: *Mehmet* is a thesis advisor (u01 "Mehmet Hoca"), a carpet-company owner (u04 reading, "Mehmet
  Yıldız") and a second-hand bookseller (u08); *Ayşe* a lawyer (u05) and a debate coach (u10); *Emre* a manager
  (u04) who has just started a new job (u09); *Mina* a PhD student (u01), a volunteer (u02 example), a book buyer (u08)
  and an advice-column reader (u09). Nothing contradicts (different surnames/roles, no ages or cities that clash), so the
  common names were kept as generic characters.
- **u04 `dialogue.lines[2]`** *…son anda vazgeçmiştik*: colloquial narrative -mıştı ("we had given up back then");
  natural in speech, kept.
- **u04 `grammar[0].examples[0]` / `exercises[4]`** *çoktan* → «مدت‌ها پیش»: acceptable there ("had long since"); only the
  same-day case in u03 was misleading.
- **u05 `grammar[0].explain`** «mecburiyet = مجبوریت در فارسی»: مجبوریت is rare in Iranian Persian (اجبار / ناچاری are
  usual), but it exists in dictionaries and helps recognition; kept.
- **u09 `grammar[1]`** presents *-(y)acak gibi görünmek*, which B2 u04 already introduced; the explanation frames C1 as
  using these forms "with more nuance", so it is revision, not re-teaching. *-ıyor olmalı* appears in both u03 g02 and
  u09 g02 (curriculum design).
- **u10 `grammar[1].exercises[5]`** accepts only *altındır* (the standard proverb form); **u10 dialogue** Ayşe *sen* /
  Amir *siz* fits a student–coach relation.
- **Order items not given alts**: only clearly natural alternatives were added; marked or emphasis-shifting orders
  (e.g. *Kimseye danışmadan belediye karar aldı*, *Halam eski evinde hâlâ oturuyor*) were deliberately not added.
- **Facts**: all hedged facts from the previous pass are still stable (u05 rent law framed as Turkey + "generally",
  u06 quantum hardware "çoğu", u07 social-media ban "tartışılıyor"); 1928 alphabet reform, Sait Faik's fishermen,
  Persian loanwords *pencere / hafta / şehir / dost*, world population above eight billion — all correct.
- **TTS-risky texts**: unchanged from the list in `review/tr-fa-C1-new.md` (slashes and leading-hyphen suffixes in grammar
  titles and tables, "+" and parentheses in tables, hyphenated izafet forms such as *hüsn-ü kabul*, *Divan-ı Hümayun*,
  *soru-cevap*, *Márquez*, ellipses and quoted speech). No digits, "=" or "→" in any `t`.
