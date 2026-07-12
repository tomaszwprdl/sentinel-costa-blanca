# Sentinel — manifest paczki beta (zestaw połączony)

Internal manifest for the connected-set beta packet. Not customer-facing wording.

## Status

- Zestaw beta obejmuje **pięć roboczych dokumentów** (Level 2 working candidates), każdy z jednym
  przejściem symulacji (`simulation-pass`).
- **Nic w tym zestawie nie jest customer-ready ani zatwierdzone.** Nie jest to przegląd prawny ani
  księgowy i nie jest do podpisu.
- Ten packet **zastępuje** wcześniejszy packet beta dotyczący samego SCO-01
  (`doc/customer-docs/beta/SCO-01-v0.5-BETA-READ-INSTRUCTIONS-PL.md` oraz
  `...-BETA-FEEDBACK-FORM-PL.md`), które oznaczono jako superseded (nie usunięto).

## Canonical repo sources (kanoniczne źródła — pozostają nadrzędne)

| # | Dokument | Źródło DOCX (repo) |
|---|---|---|
| 1 | SCO-01 v0.7 — Potwierdzenie zakresu | `doc/customer-docs/working/exports/01-PROPERTY-SCOPE-CONFIRMATION-WORKING-DRAFT-PL-v0.7.docx` |
| 2 | AKC-03 v0.3 — Przekazanie / zwrot kluczy | `doc/customer-docs/working/exports/AKC-03-KEY-HANDOVER-RETURN-RECEIPT-WORKING-DRAFT-PL-v0.3.docx` |
| 3 | CLN-02 v0.2 — Checklista sprzątania / gotowości | `doc/customer-docs/working/exports/CLN-02-CLEANING-READINESS-CHECKLIST-WORKING-DRAFT-PL-v0.2.docx` |
| 4 | REC-01 v0.2 — Raport wizyty | `doc/customer-docs/working/exports/REC-01-VISIT-REPORT-WORKING-DRAFT-PL-v0.2.docx` |
| 5 | REC-03 v0.2 — Wniosek decyzyjny | `doc/customer-docs/working/exports/REC-03-DECISION-REQUEST-WORKING-DRAFT-PL-v0.2.docx` |

Markdown sources sit next to each export in `doc/customer-docs/working/`.

SCO-01 v0.7 zastępuje v0.6 w połączonym teście beta (mikro-poprawka: cieplejsze ramowanie roli, zdanie uspokajające przed sekcją 3, prostsze objaśnienia limitu Full i działania awaryjnego). v0.7 jest bieżącym eksportem DOCX; wcześniejsze eksporty SCO-01 pozostają wyłącznie w historii Git.

AKC-03 v0.3 zastępuje v0.2 w połączonym teście beta (mikro-poprawka po opiniach: etykieta WAŻNE zamiast OSTRZEŻENIE, wyjaśnienie numerów dokumentów, doprecyzowanie formatu potwierdzenia, złagodzone brzmienie odpowiedzialności). v0.3 jest bieżącym eksportem DOCX; wcześniejsze eksporty AKC-03 pozostają wyłącznie w historii Git.

CLN-02 v0.2 zastępuje v0.1 w połączonym teście beta (mikro-poprawka po opiniach: etykieta WAŻNE, zdanie o celu, „kto wypełnia", proste objaśnienie skrótów SCO-01/REC-01/REC-03, pogrupowana reguła zdjęć/prywatności bez skracania). v0.2 jest bieżącym eksportem DOCX; wcześniejsze eksporty CLN-02 pozostają wyłącznie w historii Git.

REC-01 v0.2 replaces v0.1 for the connected beta read.

REC-03 v0.2 replaces v0.1 for the connected beta read.

## Canonical packet files (kanoniczne pliki paczki — w repo)

- `doc/customer-docs/beta/connected-set/00_READ_ME_FIRST_PL.md`
- `doc/customer-docs/beta/connected-set/99_FEEDBACK_FORM_PL.md`
- `doc/customer-docs/beta/connected-set/MANIFEST_PL.md` (ten plik)

## Local send folder (folder do wysyłki — generowany lokalnie, nie commitowany)

Ścieżka: `output/beta-send/connected-set/` — kopie hand-off; **źródłowe eksporty pozostają kanoniczne.**

Do beta-czytelnika wysyła się **wyłącznie pliki Word (7 plików)**. Nie wysyła się plików `.md` ani manifestu.

| Nazwa do wysyłki (Word) | Pochodzenie |
|---|---|
| `00_READ_ME_FIRST_PL.docx` | wygenerowany z `beta/connected-set/00_READ_ME_FIRST_PL.md` |
| `01_SCOPE_CONFIRMATION_SCO-01_v0.7.docx` | kopia eksportu SCO-01 v0.7 |
| `02_KEY_HANDOVER_AKC-03_v0.3.docx` | kopia eksportu AKC-03 v0.3 |
| `03_CLEANING_READINESS_CLN-02_v0.2.docx` | kopia eksportu CLN-02 v0.2 |
| `04_VISIT_REPORT_REC-01_v0.2.docx` | kopia eksportu REC-01 v0.2 |
| `05_DECISION_REQUEST_REC-03_v0.2.docx` | kopia eksportu REC-03 v0.2 |
| `99_FEEDBACK_FORM_PL.docx` | wygenerowany z `beta/connected-set/99_FEEDBACK_FORM_PL.md` |

Kolejność numeracji = kolejność czytania (najpierw onboarding/zakres, potem rekordy operacyjne; klucze
przed sprzątaniem/raportem, bo wyjaśniają, jak Sentinel uzyskuje dostęp). Pliki `.md` i `MANIFEST_PL.md`
są wewnętrzne i nie trafiają do beta-czytelnika.

## Reguły

- Nie zmienia się nazw plików źródłowych w repo; folder wysyłkowy zawiera wyłącznie kopie.
- Numerowane kopie DOCX **nie są commitowane** (duplikaty binarne); regeneruje się je z kanonicznych
  eksportów.
- Po zebraniu opinii: triage na realny defekt / preferencję czytelnika / sprawę prawno-księgową /
  szum-do-pominięcia; łatka tylko po decyzji właściciela.
