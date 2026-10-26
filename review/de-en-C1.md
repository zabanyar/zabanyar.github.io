# Review: de-en C1 (u01–u10)

Every item in all 10 units was checked: words and examples, `pl`, phrases, dialogues (including speaker gender against forms of address), grammar explanations, tables, examples, all 80 exercises, readings and questions, and sentences. The level has no `pr` fields.

Overall the German is correct and natural at C1 level, and the English translations match the current `t`. The grammar explanations are accurate, and every `choice` and reading answer index points to the only correct option. Validator: `OK` for all 10 files.

## Changes

| File | JSON path | Old → New | Reason |
|---|---|---|---|
| u09.json | `grammar[1].exercises[4].answer` | `["zur"]` → `["zur", "für die"]` | "___ Sicherung der Versorgung legt der Staat Reserven an." *Für die Sicherung …* is also correct, and the unit itself teaches *um … zu / damit → zu(r/m), für*. u01 already accepts "Für die" in the parallel exercise. |

Note: following the BRIEF's `json.dump(..., indent=2)` method, u09.json is now fully expanded instead of its earlier compact hand formatting. Only the answer list changed.

## Noticed but not changed

- **Duplicate headwords across units:** *bahnbrechend* (u01 w13 and u06 w15), *der Fachkräftemangel* (u02 w03 and u07 w03), *umstritten* (u04 w13 and u07 w16), *die Fördermittel* (u01 w04 and u08 w09), *sich auseinandersetzen mit* (u01 w08 and u08 w11). Not changed, because replacing them would mean restructuring. Worth swapping in a future content pass.
- **Inconsistent valency notation in headwords:** "+ D" / "+ A" (u01, u02, u04, u05) vs. "(D)" / "(Akk.)" / "+ Akk." (u06, u08, u09, u10). The plural-only noun is marked "(Pl.)" in u08 `t` but "(plural noun)" in u01 `s`. This is a style issue, not an error.
- **Thousands separators** differ: "1.200" (u01) and "20.000" (u04) vs. "200 000" (u08). Duden accepts both.
- **u04 dialogue line 0:** "bei der Europawahl 2024 durften in Deutschland erstmals Sechzehnjährige wählen". This is correct for European elections. 16-year-olds had already voted in some state and local elections before, but the sentence reads naturally as referring to the European election.
- **u07 dialogue:** Dr. Ahmadi says "Herr Wagner", while u04 uses "Herr Professor Wagner". Both are acceptable.
- **u01 g02 ex2** ("Viele Fachleute ___ Kritik an …"): accepts *üben* and *äußern*. *haben* would be grammatical but is not the target Funktionsverbgefüge, so I did not add it.
- **u02 g01 ex3** ("Die noch zu ___ Fragen …"): only *klärenden* is accepted. *beantwortenden* would also fit, but the English prompt ("to be clarified") pins down *klärenden*.
- **u03 g01 ex0** ("Komm ___ herein, die Tür ist offen!"): northern colloquial *eben* (= quickly) is marginally possible, but *doch* is clearly the intended and best answer. Left as is.
- **Order exercises:** I checked all 40. Other word orders are possible only by moving the capitalised first tile, and the app keeps the original capitalisation and punctuation on the tiles, so each solution is unique.
- **u10 w07 "die Fazits":** correct (Duden: *Fazits* / *Fazite*).
- **u07 reading text[7]:** "Obgleich die Politik seit Jahren Besserung gelobt" is correct (*geloben* = to vow). Learners might misread it as *loben*, but the translation is right.

## TTS-risky texts (for central handling, not changed)

- **Grammar shorthand in headwords:** "+ D", "+ A", "(D)", "(Akk.)", "(Pl.)", "(KI)", "etw.", "jdn./etw." in
  - u01 w08
  - u02 w15
  - u04 w11
  - u05 w08
  - u06 w01, w11, w12, w13
  - u07 w12, w13, w14
  - u08 w09–w13
  - u09 w03, w12–w14
  - u10 w08–w13
- **Slash pairs:**
  - u03 w12 "duzen / siezen"
  - u09 w10 "der Verbraucher / die Verbraucherin" (and its `pl`)
  - many grammar `table` cells: u01 g01/g02, u03 g01, u05 g01, u07 g01/g02, u08 g01, u10 g01/g02, e.g. "weil / da", "Soweit bekannt, … / Sofern die Kasse zustimmt, …"
- **"+ G" / "+ Verb" / "+ Partizip" in tables:**
  - u01 g01 table
  - u02 g01 table ("zu + Partizip I", "Partizip II (Passiv)")
  - u04 g01 table ("bekommen + Partizip II")
  - u06 g02 table ("als ob … + Verb")
  - u07 g01 table ("+ Genitiv")
  - u08 g01 table ("dies + Verb")
- **"=" inside exercise `t`:**
  - u02 g01 ex4
  - u02 g02 ex0–ex3
  - u05 g02 ex3
- **Ellipsis "…" in open phrases and titles:** all `phrases` ending in "dass …" / "ob …" (every unit), u07 g02 title, u08 g02 title, u09 g01 title, u10 g01 title, u09 g02 table cells.
- **Abbreviations "Dr."** in `t`:
  - u01 dialogue lines 0 and 10
  - u05 dialogue line 0
  - u06 dialogue lines 0 and 10
  - u06 reading text[4] and question 1
- **Numbers and dates:**
  - "Arbeit 4.0" (u02 title, u02 reading title)
  - "1.200" (u01 w06 ex)
  - "20.000" (u04 g01 ex4)
  - "200 000" (u08 g01 ex1)
  - "am 1. Januar" (u04 w10 ex)
  - "77 Prozent" (u04 w01 ex)
  - years 2021, 2023, 2024, 1938 (u09 reading, u04 reading and dialogue, u05 reading and question options)
