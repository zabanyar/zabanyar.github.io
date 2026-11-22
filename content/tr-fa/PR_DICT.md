# tr-fa pronunciation guide (`pr`) dictionary

The `pr` field writes Turkish in Persian letters, word by word. This file fixes the spelling of the frequent words and the
conventions behind them. Check a new `pr` against it; `python3 tools/pr_words.py tr-fa` lists every Turkish word that has
more than one `pr` spelling in the course (after pass 5 only the letter names of A1 u00 remain, on purpose: "B b" → «بِه» / «ب»).

## Conventions

| Turkish | `pr` | Examples |
|---|---|---|
| a (first letter) / a | «آ» / «ا» | ad «آد», kahve «کاهوِه» |
| e | «ـِ», first letter «اِ», word-final «ـِه» | ev «اِو», anne «آنِّه» |
| ı | «ـِ» | kız «کِز», yaşında «یاشِندا» |
| i | «ی», first letter «ای» | iki «ایکی» |
| o | «ـُ», first letter «اُ»; **word-final o = «و»** | okul «اُکول», banyo «بانیو», radyo «رادیو», metro «مِترو», alo «آلو» |
| pronoun **o** | «اُ» | O öğretmen. «اُ اُرِتمِن.» |
| ö | «ـُ», first letter «اُ» | göz «گُز», önce «اُنجِه» |
| u / ü | «و», first letter «او» | su «سو», üç «اوچ», gül «گول» |
| c / ç / j | «ج» / «چ» / «ژ» | cami «جامی», çay «چای», judo «ژودو» |
| ğ after a + consonant or word end | long «اا» | dağ «داا», sağlık «ساالِک», yağmur «یاامور» |
| ğ between a and a | «اآ» | sağa «ساآ», mağaza «ماآزا», sokağa «سُکاآ» |
| ğ between a and ı / u | «ائِ» / «ائو» | durağı «دورائِ», -acağım «اجائِم», ağustos «آئوستُس» |
| ğ after e / i | «ی» | değil «دِییل», eğlenceli «اِیلِنجِلی» |
| ğ after o / u / ö / ü | hiatus «ئ» (or dropped in öğr-) | doğum «دُئوم», yoğun «یُئون», öğretmen «اُرِتمِن» |
| â / î / û | long vowel; after k, g, l the consonant is palatal: «کیا», «گیا» | kâr «کیار» (≠ kar «کار»), zekâ «زِکیا», rüzgâr «روزگیار», şikâyetiniz «شیکیایِتینیز», tarihî «تاریهی», hâkim «هاآکیم» |
| double consonant | shadda «ّ» | anne «آنِّه», elli «اِلّی», İstanbullu «ایستانبولّو», dikkat «دیکّات» |
| -iyor / -ıyor / -uyor / -üyor | «یُر» merged with the preceding vowel letter | geliyor «گِلیُر», istiyorsun «ایستیُرسون», yiyorum «ییُروم» |
| i + y + i (iyi, -iyim, -iyi) | «ی‌یی» with a half-space, so all three sounds show | iyi «ای‌یی», iyiyim «ای‌یی‌ییم», miyim «می‌ییم», evliyim «اِولی‌ییم», partiyi «پارتی‌یی» |
| i + y + other vowel | one «ی» carries the vowel | hediye «هِدیِه», siyah «سیاه», yiyelim «ییِلیم» |
| question particle mi | «می» (no sukun; the validator no longer checks `pr` for «می ») | Geldi mi? «گِلدی می؟» |
| Persian / Iranian names | Persian spelling | Maryam «مریم», Reza «رضا», Sara «سارا», Nazanin «نازنین» |

## Decisions in pass 5 (Nov 2026)
- Word-final **o** is «و» in every level (A1 had «ـُ» in judo, radyo, banyo, alo; the pass-4 change banyo → «بانیُ» is reversed).
- **rüzgâr(lı)** gets the palatal g: «روزگیار(لِ)», like kâr «کیار».
- **mağaza** «ماآزا» like mağazalar, sağa, sokağa.
- **i-y-i** always «ی‌یی»; **-iyor** never with a half-space («ایستیُرسون», not «ایستی‌یُرسون»).
- The sukun in «میْ» (a workaround for the validator) is gone; `tools/validate.py` skips `pr` / `cpr` in its «می» check.

## Frequent words (count = uses in `pr` across A1–C1)

| Turkish | `pr` | n | Turkish | `pr` | n | Turkish | `pr` | n |
|---|---|---|---|---|---|---|---|---|
| çok | چُک | 168 | bir | بیر | 163 | bu | بو | 117 |
| var | وار | 93 | ve | وِه | 87 | ben | بِن | 72 |
| ne | نِه | 61 | saat | ساآت | 54 | güzel | گوزِل | 49 |
| hava | هاوا | 43 | mı | مِ | 42 | iki | ایکی | 41 |
| akşam | آکشام | 38 | lütfen | لوتفِن | 34 | her | هِر | 33 |
| de | دِه | 31 | on | اُن | 31 | sonra | سُنرا | 31 |
| merhaba | مِرحابا | 29 | kaç | کاچ | 29 | biraz | بیراز | 28 |
| gün | گون | 27 | hafta | هافتا | 27 | çay | چای | 25 |
| benim | بِنیم | 25 | ama | آما | 25 | kadar | کادار | 25 |
| bugün | بوگون | 25 | annem | آنِّم | 24 | lira | لیرا | 24 |
| sara | سارا | 23 | o | اُ | 22 | üç | اوچ | 22 |
| babam | بابام | 22 | nasıl | ناسِل | 22 | büyük | بویوک | 22 |
| çocuklar | چُجوکلار | 21 | teşekkürler | تِشِکّورلِر | 20 | sen | سِن | 20 |
| yaşında | یاشِندا | 20 | istiyorum | ایستیُروم | 20 | evet | اِوِت | 19 |
| hayır | هایِر | 19 | olsun | اُلسون | 19 | etmek | اِتمِک | 19 |
| kitap | کیتاپ | 18 | da | دا | 18 | iyi | ای‌یی | 18 |
| önce | اُنجِه | 17 | misin | میسین | 17 | dün | دون | 17 |
| maryam | مریم | 16 | nerede | نِرِدِه | 16 | için | ایچین | 16 |
| sonu | سُنو | 16 | yeni | یِنی | 15 | günü | گونو | 15 |
| mi | می | 15 | ağrıyor | آارِیُر | 15 | biz | بیز | 14 |
| ali | علی | 14 | dört | دُرت | 14 | gidiyor | گیدیُر | 14 |
| yağıyor | یائِیُر | 14 | geçen | گِچِن | 14 | pazar | پازار | 14 |
| iş | ایش | 14 | yağmur | یاامور | 13 | türk | تورک | 13 |
| beş | بِش | 13 | sıcak | سِجاک | 13 | mu | مو | 13 |
| değil | دِییل | 13 | cumartesi | جومارتِسی | 13 | gittik | گیتّیک | 13 |
| işe | ایشِه | 13 | adım | آدِم | 12 | evde | اِودِه | 12 |
| sabah | ساباه | 12 | yapmak | یاپماک | 12 | eczane | اِجزانِه | 12 |
| dönün | دُنون | 12 | yüz | یوز | 12 | bana | بانا | 12 |
| gelecek | گِلِجِک | 12 | öğretmen | اُرِتمِن | 11 | ayşe | آیشِه | 11 |
| şimdi | شیمدی | 11 | çalışıyor | چالِشِیُر | 11 | kaçta | کاچتا | 11 |
| otobüs | اُتُبوس | 11 | düz | دوز | 11 | ederim | اِدِریم | 11 |
| bunu | بونو | 11 | soğuk | سُئوک | 11 | zaman | زامان | 11 |
| geçti | گِچتی | 11 | kız | کِز | 10 | su | سو | 10 |
| ekmek | اِکمِک | 10 | aile | آئیلِه | 10 | süt | سوت | 10 |
| seviyorum | سِویُروم | 10 | mutfakta | موتفاکتا | 10 | yok | یُک | 10 |
| mina | مینا | 10 | geç | گِچ | 10 | yakın | یاکِن | 10 |
| uzak | اوزاک | 10 | yaptık | یاپتِک | 10 | para | پارا | 10 |
| doktor | دُکتُر | 9 | yedi | یِدی | 9 | sekiz | سِکیز | 9 |
| yaşındayım | یاشِندایِم | 9 | yirmi | ییرمی | 9 | doğum | دُئوم | 9 |
| kahvaltı | کاهوالتِ | 9 | hoş | هُش | 9 | televizyon | تِلِویزیُن | 9 |
| yemek | یِمِک | 9 | şehir | شِهیر | 9 | sağa | ساآ | 9 |
| gidin | گیدین | 9 | tamam | تامام | 9 | gömlek | گُملِک | 9 |
| miyim | می‌ییم | 9 | yazın | یازِن | 9 | harika | هاریکا | 9 |
| gibi | گیبی | 9 | çeyrek | چِیرِک | 9 | konuda | کُنودا | 9 |
| kedi | کِدی | 8 | öğrenci | اُرِنجی | 8 | elif | اِلیف | 8 |
| amir | امیر | 8 | kardeşim | کاردِشیم | 8 | kim | کیم | 8 |
| istiyor | ایستیُر | 8 | buyurun | بویورون | 8 | bahçede | باهچِدِه | 8 |
| istanbul'da | ایستانبولدا | 8 | okula | اُکولا | 8 | gidiyoruz | گیدیُروز | 8 |
| gidiyorum | گیدیُروم | 8 | çanta | چانتا | 8 | ay | آی | 8 |
| boş | بُش | 8 | parkta | پارکتا | 8 | yolculuk | یُلجولوک | 8 |
| beri | بِری | 8 | misiniz | میسینیز | 8 | yarın | یارِن | 8 |
| görüşürüz | گُروشوروز | 7 | çorba | چُربا | 7 | başka | باشکا | 7 |
| şey | شِی | 7 | oda | اُدا | 7 | burada | بورادا | 7 |
| gece | گِجِه | 7 | erken | اِرکِن | 7 | kalkıyor | کالکِیُر | 7 |
| kırmızı | کِرمِزِ | 7 | elbise | اِلبیسِه | 7 | pahalı | پاهالِ | 7 |
| kar | کار | 7 | futbol | فوتبُل | 7 | satranç | ساترانچ | 7 |
| severim | سِوِریم | 7 | sever | سِوِر | 7 | bütün | بوتون | 7 |
| hiç | هیچ | 7 | bize | بیزِه | 7 | tren | تْرِن | 7 |
| küçük | کوچوک | 7 | gerekiyor | گِرِکیُر | 7 | lazım | لازِم | 7 |
| otopark | اُتُپارک | 7 | göre | گُرِه | 7 | domates | دُماتِس | 6 |
