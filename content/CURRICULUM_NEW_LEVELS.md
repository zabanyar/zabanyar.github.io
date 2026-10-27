# Zabanyar — new levels (Oct 2026): German A2 + B1, English B2 + C1, Turkish A2 + C1

After this, every course has A1 → C1 without gaps. Each new level must start exactly where the level below stops and
lead into the level above (read the neighbouring curricula: `CURRICULUM.md` (A1), `CURRICULUM_EN_A2_B1_TR_B1_B2.md`,
`CURRICULUM_DE_B2_C1.md`). Do not re-teach a grammar point of another level as if it were new; a short revision
sentence ("you already know …") is fine where it helps.

Learners: an Iranian family (adults, mixed ages; some in Iran, some in Germany). Same JSON schema as all other units
(`content/SCHEMA.md`). Files `content/<course>/<LEVEL>/u01.json … u10.json` with `"level": "<LEVEL>"`, no u00.

## Sizes (all six levels)
- `words`: 12–16 topic words / collocations at the right level, each with a natural `ex` sentence.
  German: nouns WITH article and `pl` where a plural exists; verbs with case/preposition where relevant ("warten auf + A").
  `emoji` only if one standard emoji clearly pictures the word, else "".
- `phrases`: 6–8 useful chunks (functional language for the theme).
- `dialogue`: 8–12 lines, two adult speakers (one `f`, one `m`), a realistic situation.
- `grammar`: exactly 2 points; explanation in the support language (clear, precise, **bold** forms, compare with the learner's
  language where it really helps), optional table, 4–5 examples, 6–8 exercises (mix `choice`, `type`, `order`; `order` ≤ 9 words,
  only if there is exactly ONE natural order — otherwise add the other correct orders in `alts`, same words).
- `reading`: A2 8–10 simple sentences; B1 9–12; B2/C1 10–14 sentences of an authentic-style text (email, blog, article, report,
  opinion piece, story); 4–5 questions in the target language with target-language options.
- `sentences`: 7–8 level-appropriate sentences (≤ 12 words preferred).
- `goals`: 3–4 can-do statements in the support language.
- Every `choice`: exactly one correct option (the others must be clearly wrong, not merely less usual); `type`: list ALL
  acceptable answers (German also with ae/oe/ue/ss spellings, as other units do); reading answers answerable from the text.
- Family-friendly; no alcohol/pork/dating. Names: Sara, Ali, Maryam, Reza, Neda, Amir + Emma, Tom, Jack, Lisa (English) /
  Jonas, Anna, Lukas, Lena, Herr/Frau Wagner (German) / Ayşe, Mehmet, Elif, Can, Zeynep, Emre (Turkish).
- Text the voice reads (`t`): avoid "/", "=", "→" and abbreviations in sentences; write numbers in words in German and Turkish
  sentences where natural (the build converts digits anyway).

## Pronunciation guides (`pr`) — very important
- **English (en-fa)**: `pr` in Persian script on EVERY word, phrase, dialogue line, sentence, example and exercise (B2 and C1 too).
  American pronunciation, written by SOUND, not spelling. Conventions (identical to A1–B1):
  voiced th = ذ (the ذِ, that ذَت), voiceless th = ث (three ثری, think ثینک); /oʊ/ = ُو (go گُو, know نُو, home هُوم);
  /ɔr/ = ُر (for فُر, story سْتُری); /aʊ/ = او (about اِباوت, down داون); /ɔɪ/ = ُی (boy بُی); /eɪ/ = ِی (day دِی);
  /ɜr/ = ِر (work وِرک, girl گِرل); schwa = ِ (about اِباوت, problem پْرابْلِم); short /æ/ = َ (cat کَت); /ʌ/ = ا (cut کات);
  /ɑ/ = ا (job جاب); /u/ = و (food فود); /ʊ/ = و (book بوک); w = و; clusters with sukun where it prevents a wrong vowel
  (پْلیز، سْتُری); "me" = «میْ» inside sentences. Silent letters are not written; -ed = ت/د/ِد as pronounced; flap t (water واتِر) as t.
- **Turkish (tr-fa)**: Persian-script `pr` on every word AND phrase (A2 also on dialogue lines and sentences; C1 on words only).
  Conventions (identical to A1–B2): ı = ـِ (kasra), i = ی, ö = اُ, ü = او, o = اُ, u = او, e = ِ / ـه at the end, c = ج, ç = چ, j = ژ,
  ğ after a = long ا (dağ «داا»), ğ between o/ö and u = ئ (soğuk «سُئوک»), double consonants with ّ (anne «آنِّه»),
  long vowels in loanwords (kâr, hâlâ) shown as آ.
- **German (de-en)**: no `pr` fields (the voice is the model) — but `words` that have unexpected stress or pronunciation may get a
  short English hint in `s` (e.g. "Restaurant (French-style ending)") only if really useful.

## German A2 (de-en) — explanations in English
| Unit | Theme | Grammar 1 | Grammar 2 |
|---|---|---|---|
| u01 | Das Wochenende (what I did) | Perfekt mit haben (regular + irregular participles) | Perfekt mit sein (Bewegung, Zustandswechsel) |
| u02 | Familie & Feste (birthday, presents) | Dativ: Artikel und Personalpronomen (dem, der, mir, dir, ihm) | Verben mit Dativ (helfen, gefallen, gehören, schmecken, danken) + Dativ- und Akkusativobjekt |
| u03 | Wohnung & Umzug | Wechselpräpositionen: wo? + Dativ / wohin? + Akkusativ | stellen/stehen, legen/liegen, hängen, setzen/sitzen |
| u04 | Körper & Gesundheit | Modalverben müssen, dürfen, sollen, nicht müssen vs. nicht dürfen | Imperativ (du, ihr, Sie) |
| u05 | Arbeit & Beruf | Nebensätze mit weil und dass (verb at the end) | Präteritum von sein, haben und Modalverben (war, hatte, musste, konnte) |
| u06 | Einkaufen & Kleidung | Adjektivendungen nach dem bestimmten Artikel | Komparativ und Superlativ (gut – besser – am besten; als / so … wie) |
| u07 | Reisen & Verkehr | Präpositionen mit Dativ (mit, nach, aus, bei, von, zu, seit) and nach / in / zu for places | Nebensätze mit wenn (Bedingung, Wiederholung) |
| u08 | Essen & Restaurant | Adjektivendungen nach dem unbestimmten Artikel und kein/mein | Höfliche Bitten: Konjunktiv II von können, haben, werden (Könnten Sie …? Ich hätte gern … Würden Sie …?) |
| u09 | Medien & Kommunikation | Indirekte Fragen (ob, W-Wort + verb at the end) | Verben mit Präpositionen (warten auf, sich freuen auf/über, denken an) + wo(r)- / da(r)- (intro) |
| u10 | Freizeit & Pläne | Reflexive Verben (sich treffen, sich interessieren für, sich ausruhen) | Zukunft: werden + Infinitiv vs. Präsens + Zeitangabe |

## German B1 (de-en) — explanations in English
| Unit | Theme | Grammar 1 | Grammar 2 |
|---|---|---|---|
| u01 | Lebensgeschichten (biography, memories) | Präteritum regelmäßiger und unregelmäßiger Verben (for stories) | als vs. wenn (Vergangenheit) |
| u02 | Arbeitsalltag & Bewerbung | Relativsätze (Relativpronomen im Nominativ, Akkusativ, Dativ) | Infinitiv mit zu (Es ist wichtig, … zu …; Ich habe vor, … zu …) |
| u03 | Beim Arzt & Gesundheitssystem | Passiv Präsens (wird untersucht) | Passiv Präteritum und Perfekt (wurde operiert, ist … worden) |
| u04 | Geld & Konsum | Konjunktiv II Gegenwart: Wünsche und Ratschläge (würde, wäre, hätte, könnte, sollte) | Irreale Bedingungssätze in der Gegenwart (Wenn ich mehr Zeit hätte, würde ich …) |
| u05 | Umwelt im Alltag (Müll, Energie sparen) | Konnektoren: deshalb, trotzdem, obwohl, denn | Finalsätze: um … zu vs. damit |
| u06 | Nachrichten & Medien | Genitiv (des Mannes, der Frau; Name + s) | n-Deklination (der Kunde – den Kunden; der Kollege, der Mensch) |
| u07 | Urlaub & Unterwegs | Adjektivendungen ohne Artikel and review of all types (frisches Brot, mit großer Freude) | Lokale Angaben: woher/wohin, hin/her (hinein, heraus), durch, entlang, gegenüber |
| u08 | Familie & Beziehungen | Reflexivpronomen im Dativ (sich etwas wünschen, sich die Hände waschen) | lassen (etwas reparieren lassen, jemanden etwas machen lassen) |
| u09 | Behörden & Alltag in Deutschland (Anmeldung, Formulare) | Nomen-Verb-Verbindungen (einen Antrag stellen, eine Entscheidung treffen, in Kraft treten) | Wortstellung: Dativ- und Akkusativobjekt, Pronomen (Ich gebe es ihm), TeKaMoLo |
| u10 | Kultur, Feste & Freizeit | Indefinitpronomen (man, jemand, niemand, etwas, nichts, einer, keiner, welche) | Wortbildung: Komposita; Adjektive auf -ig, -lich, -los, -bar |

## English B2 (en-fa) — explanations in Persian
| Unit | Theme | Grammar 1 | Grammar 2 |
|---|---|---|---|
| u01 | Careers and the workplace | present perfect continuous vs present perfect simple | future continuous and future perfect |
| u02 | Relationships and the past | past perfect simple and continuous in narratives | used to / would for past habits; be used to / get used to |
| u03 | Health and lifestyle choices | third conditional | mixed conditionals |
| u04 | Technology and innovation | the passive in all tenses and with modals | causative: have / get something done |
| u05 | News and crime | reporting verbs with patterns (suggest, warn, deny, admit, refuse, accuse sb of) | impersonal passive (It is said that … / He is believed to …) |
| u06 | The environment | modals of deduction, present and past (must / might / can't have done) | wish and if only (present, past, would) |
| u07 | Education and learning | relative clauses: whose, whom, preposition + which, which referring to a whole clause | participle clauses (Having finished …, Built in 1990, …) |
| u08 | Travel and other cultures | quantifiers and determiners (few / a few, little / a little, each / every, either / neither, both, none) | so / such, too / enough |
| u09 | Money and shopping habits | gerund or infinitive with a change of meaning (stop, remember, forget, try, regret) | contrast linkers: although, despite / in spite of, whereas, however, nevertheless |
| u10 | Media and entertainment | cleft sentences for emphasis (What I love is …, It was Tom who …) | phrasal verbs: separable, inseparable, three-part (look forward to, come up with) |

## English C1 (en-fa) — explanations in Persian
| Unit | Theme | Grammar 1 | Grammar 2 |
|---|---|---|---|
| u01 | Language and communication | inversion after negative adverbials (Never have I …, Not only … but also, Hardly … when) | fronting and emphatic do |
| u02 | Science and research | hedging and distancing (It appears that, tends to, may well, is thought to have) | nominalisation in formal English |
| u03 | Leadership and work | modals: needn't have vs didn't need to; be bound to / be supposed to / be likely to | future in the past (was going to, was about to, was to, would) |
| u04 | Society and social change | advanced conditionals (Should you …, Were I to …, But for …, Provided that, Unless) | the subjunctive (I suggest that he be …, It is essential that she attend …) |
| u05 | Psychology and behaviour | perfect and passive infinitives and gerunds (to have done, being told, having been) | verb + object patterns (make sb do, let sb do, have sb do, get sb to do, be made to do) |
| u06 | The arts and creativity | discourse markers (admittedly, that said, by the same token, as it happens) | ellipsis and substitution (so, not, do so, one / ones) |
| u07 | The global economy | complex noun phrases (pre- and post-modification) | strong collocations: adverb + adjective, verb + noun (highly unlikely, deeply concerned, pose a threat) |
| u08 | Medicine and ethics | advanced relative structures (whereby, in which case, reduced relative clauses) | concession (much as, however much, granted, be that as it may) |
| u09 | Idioms and informal English | idioms and fixed expressions (in the long run, a blessing in disguise) | phrasal verbs with several meanings and register (formal verb vs phrasal verb) |
| u10 | Presenting and debating (C1 exam skills) | softening and hedging in argument (I'd argue that, It could be said that) | rhetorical devices (the more … the more, rhetorical questions, groups of three) |

## Turkish A2 (tr-fa) — explanations in Persian
| Unit | Theme | Grammar 1 | Grammar 2 |
|---|---|---|---|
| u01 | Geçen hafta sonu | geçmiş zaman -dı (olumlu, kişi ekleri, ünsüz uyumu -tı) | -dı olumsuz ve soru (gitmedim, gittin mi?) |
| u02 | Yolculuk ve ulaşım | ayrılma hâli -den / -dan / -ten / -tan (nereden?) | -den … -e kadar; ile / -(y)la (otobüsle, trenle) |
| u03 | Mutfakta | belirtme hâli -(y)ı / -(y)i / -(y)u / -(y)ü (belirli nesne) | emir kipi: sen / siz, olumsuz emir (alma, almayın), lütfen |
| u04 | Aile ve akrabalar | ilgi hâli -(n)ın + iyelik eki (annemin arabası) | belirtisiz isim tamlaması (Türk kahvesi, okul çantası) |
| u05 | Sağlık ve vücut | şimdiki zaman olumsuz ve soru (-miyor, -iyor mu?) | süre: -dır / -den beri (iki yıldır, pazartesiden beri) |
| u06 | Alışveriş ve para | -li / -siz / -lik (şekerli, şekersiz, kiralık) | -ki (evdeki, bugünkü, benimki) |
| u07 | İş ve meslekler | gelecek zaman -(y)acak / -(y)ecek (olumlu) | saat: kaçta? beşi çeyrek geçiyor, beşe on var, buçuk |
| u08 | Şehirde yön bulma | yer bildiren sözcükler: yanında, karşısında, arkasında, önünde, arasında | zaman: -den önce / -den sonra; ilk, sonra, en son |
| u09 | Hava ve tatil | isim cümlelerinde geçmiş: -(y)dı (Hava güzeldi, evdeydim) | edatlar: için, ile, gibi (benim için, senin gibi) |
| u10 | Boş zaman ve planlar | gelecek zaman olumsuz ve soru (gitmeyeceğim, gelecek misin?) | istek: -elim / -alım, -elim mi? (Sinemaya gidelim mi?) |

## Turkish C1 (tr-fa) — explanations in Persian
| Unit | Theme | Grammar 1 | Grammar 2 |
|---|---|---|---|
| u01 | Akademik dünya | -dığı / -acağı kalıpları: bilindiği gibi, görüldüğü üzere, belirtildiği üzere | akademik bağlaçlar: dolayısıyla, bununla birlikte, aksine, nitekim, zira |
| u02 | Siyaset ve toplum | resmî koşul: -dığı takdirde, -mediği sürece, -mek kaydıyla, -mesi hâlinde | tarz: -arak, -maksızın, -madan |
| u03 | Edebiyat | öyle … ki, sanki, meğer(se) | birleşik çekimler: -mış olacak, -ıyor olacak, -mış olmalı |
| u04 | Ekonomi ve iş dünyası | hikâye birleşik zamanları: -mıştı, -ıyordu, -acaktı, -ırdı | orantı: -dıkça … -er; -dığı ölçüde; oranında |
| u05 | Hukuk ve haklar | zorunluluk nüansları: -mak zorunda kalmak, -mak durumunda olmak, -mesi şart, -mek mecburiyetinde | isim-fiil kalıpları: -ması için, -masından dolayı, -mesi nedeniyle |
| u06 | Bilim ve teknoloji | olasılık katmanları: -abilir, -ebilmektedir, -mış olabilir, -abileceği düşünülmektedir | resmî edatlar: -e bağlı olarak, -den itibaren, -e dair, -e ilişkin |
| u07 | Medya ve tartışma kültürü | görüş bildirme: kanımca, -dığı kanısındayım, -dığını düşünmekteyim, bana kalırsa | itiraz ve yumuşatma: haklısınız ama, -e katılmakla birlikte, öte yandan |
| u08 | Kültür, tarih ve dil | Farsça ve Arapça kökenli tamlamalar (hüsnükabul, ehvenişer, ahval-i şahsiye — Farsça izafetle karşılaştırma) | şapka ve uzun ünlüler: kâr / kar, hâlâ / hala, âlem / alem |
| u09 | Psikoloji ve insan ilişkileri | -ır … -maz (gelir gelmez), -dığı an, -dığı gibi | çıkarım: -mış olmalı, -ıyor olmalı, -acak gibi görünmek |
| u10 | Sunum ve münazara | sunum dili: öncelikle, ikinci olarak, özetlemek gerekirse, sonuç olarak | ileri deyimler ve atasözleri (taşı gediğine koymak, ağzıyla kuş tutsa) |
