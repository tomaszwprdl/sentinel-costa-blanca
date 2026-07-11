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
| 1 | SCO-01 v0.5 — Potwierdzenie zakresu | `doc/customer-docs/working/exports/01-PROPERTY-SCOPE-CONFIRMATION-WORKING-DRAFT-PL-v0.5.docx` |
| 2 | AKC-03 v0.1 — Przekazanie / zwrot kluczy | `doc/customer-docs/working/exports/AKC-03-KEY-HANDOVER-RETURN-RECEIPT-WORKING-DRAFT-PL-v0.1.docx` |
| 3 | CLN-02 v0.1 — Checklista sprzątania / gotowości | `doc/customer-docs/working/exports/CLN-02-CLEANING-READINESS-CHECKLIST-WORKING-DRAFT-PL-v0.1.docx` |
| 4 | REC-01 v0.1 — Raport wizyty | `doc/customer-docs/working/exports/REC-01-VISIT-REPORT-WORKING-DRAFT-PL-v0.1.docx` |
| 5 | REC-03 v0.1 — Wniosek decyzyjny | `doc/customer-docs/working/exports/REC-03-DECISION-REQUEST-WORKING-DRAFT-PL-v0.1.docx` |

Markdown sources sit next to each export in `doc/customer-docs/working/`.

## Canonical packet files (kanoniczne pliki paczki — w repo)

- `doc/customer-docs/beta/connected-set/00_READ_ME_FIRST_PL.md`
- `doc/customer-docs/beta/connected-set/99_FEEDBACK_FORM_PL.md`
- `doc/customer-docs/beta/connected-set/MANIFEST_PL.md` (ten plik)

## Local send folder (folder do wysyłki — generowany lokalnie, nie commitowany)

Ścieżka: `output/beta-send/connected-set/` — kopie hand-off; **źródłowe eksporty pozostają kanoniczne.**

Pliki (8):

| Nazwa do wysyłki | Pochodzenie |
|---|---|
| `00_READ_ME_FIRST_PL.md` | kopia z `beta/connected-set/` |
| `01_SCOPE_CONFIRMATION_SCO-01_v0.5.docx` | kopia eksportu SCO-01 v0.5 |
| `02_KEY_HANDOVER_AKC-03_v0.1.docx` | kopia eksportu AKC-03 v0.1 |
| `03_CLEANING_READINESS_CLN-02_v0.1.docx` | kopia eksportu CLN-02 v0.1 |
| `04_VISIT_REPORT_REC-01_v0.1.docx` | kopia eksportu REC-01 v0.1 |
| `05_DECISION_REQUEST_REC-03_v0.1.docx` | kopia eksportu REC-03 v0.1 |
| `99_FEEDBACK_FORM_PL.md` | kopia z `beta/connected-set/` |
| `MANIFEST_PL.md` | kopia z `beta/connected-set/` |

Kolejność numeracji = kolejność czytania (najpierw onboarding/zakres, potem rekordy operacyjne; klucze
przed sprzątaniem/raportem, bo wyjaśniają, jak Sentinel uzyskuje dostęp).

## Reguły

- Nie zmienia się nazw plików źródłowych w repo; folder wysyłkowy zawiera wyłącznie kopie.
- Numerowane kopie DOCX **nie są commitowane** (duplikaty binarne); regeneruje się je z kanonicznych
  eksportów.
- Po zebraniu opinii: triage na realny defekt / preferencję czytelnika / sprawę prawno-księgową /
  szum-do-pominięcia; łatka tylko po decyzji właściciela.
