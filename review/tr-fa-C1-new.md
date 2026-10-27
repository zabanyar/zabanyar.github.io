# Review: tr-fa C1 (new level, u01–u10)

I checked every item in all 10 units. That covers words (`pr`, `pl`, emoji, example), phrases (`pr`), dialogues, both grammar points (explanation, table, examples, every exercise including `alts`), reading texts and questions, and sentences. I compared against the conventions in `CURRICULUM_NEW_LEVELS.md` and the usage in tr-fa A1–B2 (for example kâr = «کیار», sağa = «ساآ», düğün = «دویون», değil = «دِییل», -iyor = «یُر»), and against the B2 units for level progression.

I also ran these scripted checks:
- an automatic Turkish → Persian-script transliteration that compares every word and phrase `pr` with its `t`;
- a duplicate-headword and duplicate-phrase check against the whole tr-fa course;
- Persian scans for ي/ك, ZWNJ and double spaces;
- a check that every order `alts` uses the same tiles;
- a scan of `t` for TTS-risky strings.

C1 has `pr` on words and phrases only; no exercise carries a `pr`, so there are no `___` guides to convert.

`python3 tools/validate.py content/tr-fa/C1/*.json` prints OK for all 10 files after the edits.

Overall the level is in good shape. The Turkish is natural and follows TDK spelling (hâl/hâlde/hâline, öz güven, iş birliği, yapay zekâ, talepkâr, keyfî, resmî/tarihî vs. siyasi/hukuki, hüsnükabul/ehvenişer/suiistimal joined, ahval-i şahsiye/Divan-ı Hümayun with a hyphen). The Persian idiom equivalents in u06, u09 and u10 are apt. The main problems were facts that could change (u05 rent law, u06, u07), headwords repeated from A2, one phrase repeated within the level, and a few `pr` inconsistencies.

## Changes

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u02.json | `phrases[6].pr` | «… سیاسی **دِئیل** …» → «… سیاسی **دِییل** …» | Level and course convention for *değil* is «دِییل» (u06 P0/P2, A2). |
| u03.json | `phrases[4].pr` | «… گوزِل **دِئیل**.» → «… گوزِل **دِییل**.» | Same. |
| u02.json | `phrases[7].pr` | «پرُگراملارِنِ» → «پْرُگراملارِنِ» | Initial cluster *pr-* needs a sukun so it is not read «پُرُ…». This matches «سْلایت» in u10 and «پْرُژِلِر / تْرِن» in A2, so both halves of the level now agree. |
| u07.json | `words[2].pr` | «تارتِشما پرُگرامِ» → «تارتِشما پْرُگرامِ» | Same. |
| u02.json | `words[6]` (w07) | *belediye* «شهرداری» → **muhtar** (pl *muhtarlar*), pr «موهتار», s «مختار (رئیس منتخب محله یا روستا)», ex *Mahallemizin muhtarı, sakinlerin sorunlarını belediyeye iletiyor.* / «مختار محله‌ی ما مشکلات ساکنان را به شهرداری منتقل می‌کند.» | *belediye* is already a headword in A2 u08. *muhtar* fits the theme and is used in this unit's dialogue and reading (muhtarımız, muhtarlık). |
| u05.json | `words[5]` (w06) | *avukat* «وکیل» → **duruşma** (pl *duruşmalar*), pr «دوروشما», s «جلسه‌ی دادرسی», ex *Duruşmaya avukatımla birlikte katıldım.* / «همراه وکیلم در جلسه‌ی دادرسی شرکت کردم.» | *avukat* is already a headword in A2 u07. *duruşma* is used throughout the unit's examples and sentences but was never taught. |
| u04.json | `phrases[3]` | *Kemerleri sıkmamız gerekiyor.* → **Kâr marjımız giderek daralıyor.** pr «کیار مارژِمِز گیدِرِک دارالِیُر.» s «حاشیه‌ی سودمان مدام کمتر می‌شود.» | Near-copy of the B2 u04 phrase *Kemerleri sıkmamız lazım.* The new chunk is C1 business language and matches dialogue line 7. |
| u10.json | `phrases[5]` | *Çok yerinde bir soru, teşekkür ederim.* → **Sorunuzu biraz açar mısınız?** pr «سُرونوزو بیراز آچار مِسِنِز؟» s «می‌شود سؤالتان را کمی بازتر کنید؟» | Exact duplicate of u01 `phrases[6]` inside the level. The new phrase is useful in a Q&A session. |
| u05.json | `reading.text[0]` | *Büyük şehirlerde …* → *Türkiye'nin büyük şehirlerinde ailelerin önemli bir kısmı kirada oturuyor.* (s: «در شهرهای بزرگ ترکیه …») | The text states specific rules (no written form required, deposit at most three months' rent) that are true for Turkey (TBK) but not everywhere, for example in Iran. The text now says which country it means. |
| u05.json | `reading.text[4]` | *…yıllık artış, yasaya göre son on iki aylık enflasyon ortalamasını geçemez.* → *Konut kiralarındaki yıllık artış da yasal bir sınıra bağlıdır; bu sınır genellikle enflasyona göre belirlenir.* (s adjusted) | Rent-cap law changes; for example Turkey had a temporary 25 % cap in 2022–24. As asked, I made the claim general. |
| u05.json | `reading.text[5]` | *…bunun üzerinde bir artış…* → *…bu sınırın üzerinde bir artış…* (s «…بیش از این سقف…») | Follows from the change to text[4]. |
| u05.json | `reading.text[7]` | *Tahliye isteyebilmesi için …* → *Örneğin ihtiyaç nedeniyle tahliye isteyebilmesi için …* (s «برای مثال، … به دلیل نیاز …») | Owner's need is only one of several legal grounds for eviction. The old sentence presented it as the only one. |
| u05.json | `reading.text[11]` | *…dava açmadan önce bir arabulucuya başvurmak zorundasınız.* → *…bazı durumlarda dava açmadan önce…* (s «در برخی موارد …») | Mandatory mediation for rent disputes (Turkey, since 2023) is recent and could change. The claim is now hedged, and the *zorunda* structure is kept. |
| u05.json | `reading.questions[4].q` | *Bir anlaşmazlıkta dava açmadan önce ne yapmak gerekir?* → *Metne göre bazı anlaşmazlıklarda dava açmadan önce ne yapmak gerekir?* (s adjusted) | Keeps the question consistent with the hedged text[11]. The answer is unchanged. |
| u06.json | `reading.text[7]` | *Bazı standartların önümüzdeki yıldan itibaren zorunlu hâle getirilmesi planlanıyor.* → *Bazı ülkelerde bu standartların belirli bir tarihten itibaren zorunlu hâle getirilmesi planlanıyor.* (s adjusted) | "From next year" is a dated claim that becomes false over time. The -den itibaren structure is kept. |
| u06.json | `reading.text[10]` | *Bugünkü kuantum bilgisayarları çok düşük sıcaklıklarda çalışıyor…* → *Bugünkü kuantum bilgisayarlarının çoğu çok düşük sıcaklıklarda çalışıyor…* (s «بیشتر …») | Not all platforms need cryogenic cooling (some photonic ones do not), so the claim is now hedged. Q4 is still answerable. |
| u07.json | `dialogue.lines[0]` | *…bazı ülkeler on altı yaşın altındaki çocuklara sosyal medyayı yasakladı.* → *…bazı ülkelerde on altı yaşın altındaki çocuklara sosyal medyanın yasaklanması tartışılıyor.* (s adjusted) | Which countries have actually banned it, and from when, is uncertain and keeps changing. "Is being debated" is stable and true. |
| u08.json | `grammar[1].explain` | «…در ترکی **معمولاً** کشیده تلفظ می‌شود (عالم ← âlem، عادت ← âdet).» → «…در ترکی **گاهی** کشیده تلفظ می‌شود (…)، اما نه همیشه: zaman (زمان) و insan (انسان) در ترکی با واکه‌ی کوتاه تلفظ می‌شوند.» | The rule was overstated. Most Persian/Arabic long vowels became short in Turkish (zaman, insan, hayvan, devam…), so "usually" would mislead learners. |
| u09.json | `grammar[1].exercises[5].answer` | + **hazırlıyor** | *annem yemek hazırlıyor olmalı* is equally natural for «دارد غذا درست می‌کند». |
| u09.json | `grammar[1].exercises[6].answer` | + **uyuyamamış** | *dün gece hiç uyuyamamış olmalısın* is a correct and natural fill. |

Totals: **pr 4**, **target text 13** (4 duplicate replacements and 9 factual fixes, each with its `s` updated), **translation-only 0**, **grammar explanation 1**, **exercises 2**, **emoji 0**.

## Noticed but not changed

- **u07 `phrases[1].pr` «جوملِ‌می»**: the ZWNJ inside *cümlemi* looks odd. The plain form «جوملِمی» trips the validator's می/نمی rule, because the kasra before «می» is not a word character, so this is the authors' deliberate workaround. It is readable as a half-space join, so I kept it. (The validator heuristic could be refined centrally.)
- **Final *h* written «ح»**: «تاریح» (u08 P4 *Tarih*) and «روح» (u09 W3 *ruh*), while «ه» is used elsewhere. This is deliberate: a final «ه» after a vowel would be read as *-e*. The sound is identical, so I kept it.
- **Long â** is shown as «اآ» in *hâkim* «هاآکیم» and *hâli* «هاآلی» (like *maaş* «ماآش»). *kâr* is «کیار» (as in B2). *kulağa* «کولاآ» follows A1/A2 *sağa* «ساآ»; ü-ğ-ü in *özgürlüğü* «…لویو» follows B1 *düğün* «دویون». All are consistent with earlier levels.
- **Overlap of guessing structures**: *-mış olmalı* is in B2 u04, in C1 u03 g2 and again in C1 u09 g2. This comes from the curriculum. Both C1 units say it was seen in B2, and u09 focuses on *-ıyor olmalı* and *gibi görünmek*, so it is acceptable. *Bana kalırsa* (B2 u02 phrase) is likewise presented as revision in u07.
- **u05 `reading.text[6]`** *…ev sahibi sizi keyfî olarak çıkaramaz.* This is true in principle under Turkish law. After the ten-year extension period a landlord may terminate without a reason, but at reading level the general statement is fair. **text[2]** (no written form required) and **text[3]** (deposit at most three months' rent, TBK 342) are stable facts now that the text names Turkey.
- **u05 dialogue** (lines 2 and 6) only states general principles: need must be shown, there is a legal cap on increases. I left it.
- **siyasi / insani / hukuki** without î, beside **askerî / resmî / tarihî / keyfî** with î: this follows TDK, which marks the nisbe î only where it could be confused with a possessive.
- **u10 dialogue**: Ayşe says *sen* and Amir answers *Haklısınız*. This is plausible for a student talking to his debate coach, so I left it.
- **u10 `grammar[1].exercises[5]`** accepts only *altındır*. That is the standard proverb form; the colloquial *Söz gümüşse sükût altın* is rarer.
- **u03 dialogue line 2** translates *kardeşi* as «برادر». *kardeş* is gender-neutral, but the guess is natural in context.
- **u01 `sentences[1]`** *savunacağım* → «دفاع می‌کنم»: a present-for-future in Persian, which is acceptable.
- **u02 `words[1].ex`** (*iki milyon genç seçmen*) and **u04** company figures are fictional and name no country, so they are not factual claims.
- **Emoji**: all fit, or are empty where nothing fits. The unit emoji 🗳️, ⚖️, 🖋️, ⏱️ include the standard VS16 selector, as elsewhere in the course.
- **Level fit**: no structure above C1 is used as if already known. Each grammar point says which earlier level it builds on (B1 -sa, -madan önce, -mak için; B2 -dığı sürece, -arak, -dıkça, -mekte, -ma/-me), and those references are correct against the B1/B2 curricula.
- **Order `alts`**: all checked. Each alternative uses exactly the same tiles and is natural, and none is missing.

## TTS-risky texts (item 6, for central handling)

- **Slashes in grammar titles (`t`)**: u01 g01 «Bilindiği gibi… / Görüldüğü üzere…»; u03 g01 «Öyle güzeldi ki… / Sanki… / Meğer…»; u04 g02 «-dıkça … -er / -dığı ölçüde / oranında»; u07 g01 «Kanımca… / -dığı kanısındayım»; u07 g02 «Haklısınız ama… / -e katılmakla birlikte… / öte yandan»; u08 g02 «kâr / kar, hâlâ / hala, âlem / alem»; u09 g01 «Gelir gelmez / -dığı an / -dığı gibi».
- **Suffix-only strings with a leading hyphen (titles and tables)**: u02 g01/g02 titles and g01 table column 0; u03 g02 title and g01 table («sanki … -mış gibi», «meğer(se) … -mış»); u04 g01/g02 titles and tables; u05 g01/g02 titles and tables; u06 g01/g02 titles and tables; u07 g01 table columns 1–2; u09 g02 title and table column 0.
- **"+" in tables**: u02 g01 «isim + hâlinde»; u03 g01 «öyle + sıfat … ki», «öyle bir + isim … ki»; u04 g02 «isim + oranında», «sayı + oranında»; u05 g02 «isim + nedeniyle».
- **Parentheses in `t`**: u06 g01/g02 tables «-(y)abilir», «-(y)amayabilir», «-(y)abilmektedir», «-(y)e bağlı olarak», «-(y)e dair», «-(y)e ilişkin»; u09 g02 table «-(ı)yor olmalı», «-(y)acak gibi görünüyor»; u08 g01 table «kişisel hâller (hukuk)»; u08 g02 table «kâr (kazanç)», «kar (yağan kar)», «hâlâ (henüz, daha)», «hala (babanın kız kardeşi)», «âlem (dünya, evren)», «alem (bayrak, hilal)», «âdet (gelenek)», «adet (sayı)», «askerî (askerle ilgili)», «askeri (onun askeri)».
- **Hyphenated izafet forms** (should be read as one word): u08 g01 title «ahval-i şahsiye», table column 0 «hüsn-ü kabul», «hüsn-ü niyet», «ehven-i şer», «su-i istimal»; u08 dialogue line 2 «hüsn-ü kabul»; u08 g01 exercises[4] options «Divan-ı Hümayun'da / Divan-i… / Divan-u…»; u10 words[12] «soru-cevap bölümü».
- **Foreign name with an accent**: u03 words[13].ex «Márquez».
- **Ellipsis "…" in phrases and dialogue**: u01 phrases[1]; u03 dialogue line 1; u05 phrases[3]; u06 phrases[1]; u07 phrases[0]. Probably harmless.
- **Quoted speech in `t`**: u01 reading text[0], g02 exercises[3]; u02 reading text[0], g02 exercises[3]; u03 reading text[3], [5], [9]; u04 reading text[10]; u07 reading text[12]; u08 dialogue line 3; u09 reading text[0], [1], [2], [5], [7]; u10 dialogue line 10, reading text[5].
- No digits, abbreviations, "=" or "→" appear in any `t`.
