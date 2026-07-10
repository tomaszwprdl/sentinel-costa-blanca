# SCO-01 Property Scope Confirmation - Survival Audit v0.3

Status: internal audit only

Audited artifacts: PL Markdown source and functional DOCX v0.3

Audit lens: usefulness and small-operation sanity, not completeness

Score: `1` = no practical value in the visible form; `5` = essential to action, scope control, safety, or dispute protection.

## 1. Executive verdict

**Is v0.3 usable as-is? No.**

It is usable as a Level 2 simulation substrate and it correctly preserves the protected service model. It is not yet a sane day-to-day scope-confirmation form for a small operation. Too much of the visible document serves the document system rather than the owner or operator: internal codes, cross-document references, archive administration, review workflow, duplicate confirmation fields, and first-visit execution detail.

The correct v0.4 direction is subtraction and separation, not a new doctrine or a more polished enterprise form. Preserve the owner/operator decisions and dispute-protection lines; move internal governance and execution records to their proper registers, checklists, and metadata.

## 2. Top 10 cuts or moves

1. Move the entire visible internal revision register (section 15) to file metadata or an internal changelog.
2. Move the visible `Kod` field and all module machine codes out of section 4.
3. Move repeated cross-document references (`REC-01`, `AKC-01/02/04`, `CLN-02`) to internal metadata or the downstream record itself.
4. Move `Odniesienie do archiwum roboczego`, `Operator wypełniający`, and detailed completion-channel administration to the internal record header.
5. Move detailed legal/accounting workflow rows from section 13 to the Document Register while retaining visible unresolved owner decisions.
6. Move detailed first-visit verification rows to the Property Profile / visit checklist; retain only a short completion gate in SCO-01.
7. Move evidence-set IDs and archive architecture from section 10 to the evidence register; keep delivery preference, restricted zones, and photo rules visible.
8. Move detailed contact directories to SCO-06; keep the primary decision contact, backup contact, and approved decision channel in SCO-01.
9. Delete duplicate `Czy omówione?`, `Czy potwierdzone?`, and generic `Status` columns in section 5; one confirmed value plus exception is enough.
10. Delete the visible `Język rekordu`, `Uczestnicy`, and redundant owner-reference field unless simulation proves an operational need.

## 3. Top 10 rewrites

1. Frame the document as the full onboarding scope form, not a brochure or legal agreement.
2. Shorten the purpose paragraph and define one rule for incomplete fields.
3. Rewrite `Full - minimum wizyt` as a direct package fact: `Full: minimum 3 wizyty w miesiącu.`
4. Replace the section 4 eight-field module block with four owner/operator fields: `Zakres`, `Kiedy`, `Rytm/limit`, `Wyłączenia lub decyzja`.
5. Remove visible English status codes from the module-status instruction.
6. Rewrite the Full EUR 500 row as a clean standard/optional selection without the current semicolon ambiguity.
7. Replace `cleaner` with PL-first `osoba sprzątająca` throughout visible fields.
8. Rewrite the archive/channel rule as one operational instruction: WhatsApp may carry messages but the final record goes to email/archive.
9. Expand and simplify the photo prohibition list to match the Owner Decision Memo, including screens, medicine, valuables, and guest belongings.
10. Compress owner acknowledgement into one operational confirmation plus date/name, while clearly stating it is not signature or contract language.

## 4. Must-keep dispute-protection lines

- `Nie jest umową, nie jest finalnym brzmieniem prawnym i nie jest zatwierdzony do podpisu przez właściciela.`
- `Źródło kalendarza ... nie oznacza obsługi rezerwacji, cen, komunikacji z gośćmi ani zarządzania najmem.`
- `SLA = czas reakcji / decyzji, nie gwarancja rozwiązania.`
- `Full: min. 3/mies.`
- `Odpowiedzialność pakietowa ≠ uprawnienie awaryjne ≠ odpowiedzialność za szkodę.`
- `Sentinel dokumentuje widoczne fakty; nie stawia diagnoz technicznych.`
- `Basic / Extended: brak autonomicznego płatnego działania domyślnie; zgoda właściciela przed płatnym działaniem lub wydatkiem na wykonawcę.`
- `Full: EUR 300 standardowo na decyzję; opcjonalnie EUR 500, jeśli uzgodnione.`
- `Nie wolno tworzyć limitu euro dla Basic / Extended.`
- Emergency-services/community-required minimal action is not a pre-authorised Basic/Extended spend mandate.
- No real codes, passwords, PINs, Wi-Fi labels, safe codes, or full access credentials in SCO-01.
- Sentinel does not guarantee vendor availability, price, quality, or result.
- Cleaning/readiness evidence is not hygiene certification or a technical-condition guarantee.
- No rental management, concierge/lifestyle, technical diagnosis, or guaranteed resolution.
- If a service is not expressly in scope, it is not automatically included.

## 5. Section-by-section survival tables

### Opening and page furniture

| Item / exact wording | Current purpose | Who uses it | When | Downstream dependency | Risk if removed | Risk if kept | Score | Verdict | Proposed action / replacement |
|---|---|---|---|---|---|---|---:|---|---|
| `Sentinel Costa Blanca` | Identify issuer | Owner/operator | Every read | Brand identity | Document becomes anonymous | None | 5 | KEEP | Keep. |
| `Potwierdzenie zakresu obsługi nieruchomości` | Name the form | Owner/operator | Onboarding and review | SCO-01 identity | Purpose becomes unclear | None | 5 | KEEP | Keep. |
| `Roboczy dokument operacyjny v0.3` | Mark working state | Owner/operator/reviewer | Before approval | Document status | Draft may be mistaken for final | Version noise after approval | 5 | REWRITE | `Pełny formularz ustalenia zakresu - dokument roboczy.` Keep version in header metadata. |
| Working warning: not a contract, not final legal wording, not approved for signature, pending review | Prevent misuse | Owner/operator/reviewer | Before any reliance | Lawyer/Owner gates | Draft may be signed or relied on | Slightly long | 5 | KEEP | Keep until legal/customer approval. |
| `Cel dokumentu` purpose paragraph | Explain scope and incomplete-field statuses | Owner/operator | Start of completion | All sections | Incomplete fields become ambiguous | Current sentence is long | 5 | REWRITE | `Formularz ustala zakres, dostęp, kanał decyzji i ograniczenia działania Sentinel. Każde niewypełnione pole oznacz: nie dotyczy / decyzja właściciela / pierwsza wizyta.` |
| `Referencja wewnętrzna: SCO-01` | Internal linkage | Sentinel | Filing | Document Register | Minor filing friction | Owner-facing clutter | 2 | MOVE INTERNAL | Keep in header metadata/file name, not opening body. |
| Running header `SCO-01 | wersja robocza v0.3` | Page identification | Operator | Printed pages | Filing | Loose pages harder to identify | Minimal clutter | 4 | KEEP | Keep in running header only. |
| Footer `Dokument roboczy - nie do podpisu` | Prevent signature misuse | Everyone | Printed/exported copy | Review gates | Signature risk | None while draft | 5 | KEEP | Keep while draft. |
| Footer page number | Preserve page order | Owner/operator | Printed/exported copy | Filing | Loose pages may be reordered | None | 4 | KEEP | Keep. |
| Repeated table headers (`Pole / Wartość`, section-specific column labels) | Explain each form schema | Owner/operator | Completion | None | Some blocks become harder to scan | Repetition and enterprise-table feel | 3 | REWRITE | Keep only labels needed to understand a section; simplified schemas are audited in their section rows. |

### 1. Kontrola dokumentu

| Item / exact wording | Current purpose | Who uses it | When | Downstream dependency | Risk if removed | Risk if kept | Score | Verdict | Proposed action / replacement |
|---|---|---|---|---|---|---|---:|---|---|
| `ID dokumentu: SCO-01 / ____` | Unique record ID | Operator | Creation/filing | Archive | Record collisions | Small admin burden | 4 | KEEP | Keep as compact header field. |
| `Referencja nieruchomości: SEN-PROP-____` | Link record to property | Operator | Creation | All downstream records | Misfiled reports | None | 5 | KEEP | Keep. |
| `Wersja robocza` | Revision identity | Operator/reviewer | Each revision | Change control | Wrong version used | Duplicates header version | 2 | MOVE INTERNAL | Keep version in page header and file metadata only. |
| `Data wypełnienia` | Establish timing | Owner/operator | Each completion | Decision/audit chronology | No reliable date | None | 5 | KEEP | Keep. |
| `Etap wypełnienia` with four operational states | Show completion stage | Operator | During onboarding | First-visit follow-up | Partial form mistaken for complete | Adds one choice block | 4 | KEEP | Keep; rename `Status formularza`. |
| `Język rekordu` | Record language | Operator | Creation | Future EN version | Language may be unclear | Obvious from document; unnecessary | 1 | DELETE | Delete from visible PL form; retain file-language metadata. |
| `Kanał wypełnienia` | Record how information arrived | Operator | Onboarding | Dispute trail | Slightly weaker provenance | Bureaucratic; rarely actionable | 2 | MOVE INTERNAL | Move to completion log only if simulation proves useful. |
| `Uczestnicy` | Identify contributors | Operator | Completion | Dispute trail | Harder to know source | Enterprise-style overhead | 2 | MOVE INTERNAL | Keep only `Informacje przekazał(a)` if needed. |
| `Operator wypełniający` | Assign form author | Sentinel | Completion | Internal accountability | Ownership unclear internally | Owner-facing clutter | 3 | MOVE INTERNAL | Internal header only. |
| `Punkty nierozstrzygnięte` | Capture open issues | Owner/operator | End of session | Section 13 | Open issues lost | Duplicates section 13 | 3 | DELETE | Use section 13's single open-items list. |
| `Odniesienie do archiwum roboczego` | Link internal storage | Sentinel | Filing | Archive | Manual search | Exposes system administration | 1 | MOVE INTERNAL | File metadata/archive index only. |

### 2. Właściciel / nieruchomość / profil użycia

| Item / exact wording | Current purpose | Who uses it | When | Downstream dependency | Risk if removed | Risk if kept | Score | Verdict | Proposed action / replacement |
|---|---|---|---|---|---|---|---:|---|---|
| `Referencja właściciela: WLASC-____` | Internal owner ID | Operator | Filing | SCO-06/archive | Duplicate-owner ambiguity | Duplicates name/contact | 2 | MOVE INTERNAL | Keep in CRM/archive metadata, not visible form. |
| `Imię i nazwisko / nazwa właściciela` | Identify principal | Owner/operator | Onboarding | Contract/contact records | Cannot attribute decisions | None | 5 | KEEP | Keep. |
| `Email właściciela` | Delivery/decision contact | Owner/operator | Onboarding | Reports/decisions | No delivery channel | Duplicates section 9/SCO-06 | 4 | REWRITE | `Główny email do raportów i decyzji`; keep once only. |
| `Telefon właściciela` | Urgent contact | Operator | Onboarding/incident | Escalation | Slower escalation | Duplicates section 9/SCO-06 | 4 | REWRITE | `Telefon do pilnego kontaktu`; keep once only. |
| `Preferowany język kontaktu` | Avoid communication failure | Owner/operator | Onboarding | Reports/contact | Miscommunication | Minor extra field | 4 | KEEP | Keep. |
| `Obszar nieruchomości ... bez pełnego adresu w wersji roboczej` | Establish service area without exposing address | Operator | Qualification | Service-area decision | Out-of-area work or ambiguity | Full property identification lives elsewhere | 4 | KEEP | Keep; use locality/zone only. |
| `Typ nieruchomości` | Context for checks | Operator | Onboarding | Checklist depth | Checklist may be mismatched | Low burden | 4 | KEEP | Keep. |
| `Profil użycia` private/guest/mixed | Select operating pathway | Owner/operator | Onboarding | Checklist/report variants | Wrong workflow | None | 5 | KEEP | Keep PL labels; internal codes move to metadata. |
| `Źródło kalendarza pobytów` | Establish readiness trigger source | Owner/operator | Onboarding | Cleaning/readiness | Missed arrivals | Useful only for guest/mixed | 4 | KEEP | Keep as conditional field. |
| `Wiarygodność źródła kalendarza` | Test trigger reliability | Operator | Setup/test | Readiness SLA | Missed or false triggers | Abstract wording | 3 | REWRITE | `Czy terminy przyjazdów są przekazywane w sposób sprawdzony? ☐ tak ☐ do przetestowania ☐ nie dotyczy.` |
| `Uwagi do profilu użycia` | Capture exceptions | Owner/operator | Onboarding | Scope | Important nuance lost | Free-text sprawl | 3 | KEEP | Keep with one-line limit. |
| Calendar boundary sentence excluding bookings/pricing/guest communication/rental management | Protect category boundary | Owner/operator | When calendar is scoped | Contract/scope disputes | Rental-management drift | None | 5 | KEEP | Keep, possibly as short callout. |

### 3. Pakiet i poziom odpowiedzialności

| Item / exact wording | Current purpose | Who uses it | When | Downstream dependency | Risk if removed | Risk if kept | Score | Verdict | Proposed action / replacement |
|---|---|---|---|---|---|---|---:|---|---|
| `Pakiet` Basic/Extended/Full/to confirm | Record service posture | Owner/operator | Onboarding | SLA/cadence/authority | Scope cannot be interpreted | None | 5 | KEEP | Keep. |
| `Znaczenie SLA: Czas reakcji / decyzji, nie gwarancja rozwiązania sprawy` | Prevent resolution promise | Owner/operator | Package confirmation | Dispute protection | Guarantee may be inferred | Repeated later | 5 | KEEP | Keep once prominently; later repeats may be shortened. |
| `Okno reakcji / decyzji` 48h/24h/same day | Record package window | Owner/operator | Onboarding | Operational scheduling | Wrong expectation | Duplicates package data but actionable | 5 | KEEP | Keep; auto/pre-fill from package where possible. |
| `Rytm wizyt / częstotliwość` | Set cadence | Owner/operator | Scope confirmation | Visit plan | Missed/extra visits | None | 5 | KEEP | Keep. |
| `Full - minimum wizyt: min. 3/mies. jeśli wybrano Full` | Preserve locked Full cadence | Owner/operator | Package confirmation | Package contract | Protected promise weakened | Slight duplication with cadence | 5 | REWRITE | `Full: minimum 3 wizyty w miesiącu.` Keep visibly next to package/cadence. |
| `Dodatkowe zdarzenia dostępu` | Capture non-visit access needs | Owner/operator | Scope | Access plan/billing | Unplanned access disputes | Vague field | 3 | REWRITE | `Dodatkowe wejścia poza planowymi wizytami: kiedy i na jakiej podstawie?` |
| `Przypomnienie o odpowiedzialności` | Separate package from liability/result | Owner/operator | Package confirmation | Dispute protection | Package may imply transferred risk | Wordy and overlaps principle below | 5 | REWRITE | Merge with fixed principle below into one callout. |
| Fixed principle: package responsibility ≠ emergency authority ≠ liability; visible facts, no diagnosis | Protect doctrine and technical boundary | Everyone | Scope agreement/incidents | MSA/FAQ/reporting | Severe authority/liability drift | None | 5 | KEEP | Keep as one concise protected callout. |

### 4. Moduły zakresu

| Item / exact wording | Current purpose | Who uses it | When | Downstream dependency | Risk if removed | Risk if kept | Score | Verdict | Proposed action / replacement |
|---|---|---|---|---|---|---|---|---:|---|---|
| Status instruction plus visible English codes `included`, `not_included`, `n/a`, `owner_decision`, `first_visit` | Standardise module state | Operator/system | Completion | Automation/report mapping | Status inconsistency | Looks like database administration | 3 | REWRITE | Visible: `Dla każdego modułu wybierz: w zakresie / poza zakresem / nie dotyczy / decyzja właściciela / pierwsza wizyta.` Move codes internal. |
| Repeated field `Kod` and machine-code values | System mapping | System/operator | Data entry | Future automation | Manual mapping work | High clutter; no owner value | 1 | MOVE INTERNAL | Preserve in source metadata only. |
| Repeated field `Status` | Define inclusion | Owner/operator | Scope confirmation | All checklists/reports | Ambiguous scope | None | 5 | KEEP | Rename `Zakres`. |
| Repeated field `Wyzwalacz / kiedy działa` | Define activation | Owner/operator | Scope confirmation | SOP/checklists | Work triggered incorrectly | None | 5 | KEEP | Keep as `Kiedy działa`. |
| Repeated field `Częstotliwość / limit` | Define cadence/boundary | Owner/operator | Scope confirmation | Operations/billing | Scope creep | `Limit` may be mistaken for spend limit | 5 | REWRITE | `Rytm / liczba zdarzeń`; never use for authority spend. |
| Repeated field `Dowód / rekord` with internal references | Define output | Operator | Scope design | REC/AKC/CLN records | Evidence expectations unclear | Repeated document codes burden form | 3 | REWRITE | Visible `Co właściciel otrzyma`; move record codes internal. |
| Repeated field `Decyzja właściciela?` | Flag approval | Owner/operator | Scope confirmation | Decision record | Approval requirement missed | Duplicates status/authority sections | 2 | DELETE | Put any required decision in `Wyłączenia / decyzja` only. |
| Repeated field `Uwagi / wyłączenia` | Capture boundaries | Owner/operator | Scope confirmation | Dispute protection | Exceptions lost | None | 5 | KEEP | Keep. |
| `Planowa wizyta nadzorcza` block | Define core visit | Owner/operator | Onboarding | REC-01/INS-01 | Core service undefined | Current block over-specified | 5 | REWRITE | Keep module with four visible fields; move `scheduled_oversight_visit` and `REC-01` internal. |
| `Przechowanie kluczy` block | Define custody inclusion and trigger | Owner/operator | Key handover | AKC-02 | Custody ambiguity | Internal register reference | 5 | REWRITE | Keep scope, signed-handover trigger, and no-address rule; move `keyholding`/`AKC-02` internal. |
| `Gotowość przed przyjazdem właściciela` block | Define arrival readiness | Owner/operator | Onboarding | INS-02/CLN | Missed readiness | None beyond form length | 5 | KEEP | Keep, with notice requirement. |
| `Sprzątanie gotowości` block | Define scoped cleaning | Owner/operator | If selected | CLN docs | Cleaning scope dispute | Could suggest cleaning is product category | 5 | REWRITE | `Sprzątanie w ramach gotowości`; retain oversight framing. |
| `Sprzątanie rotacyjne` block | Define guest-turnover cleaning | Owner/operator | Guest/mixed only | GST/CLN | Guest scope ambiguity | Rental-management inference | 5 | REWRITE | Keep conditional and add `bez obsługi rezerwacji lub gości`. |
| `Pościel / pranie` block | Define linen responsibility | Owner/operator | If cleaning scoped | CLN | Refill/laundry dispute | Free-text burden | 4 | KEEP | Keep conditional. |
| `Kontrola po gościach` block | Define post-stay check | Owner/operator | Guest/mixed only | GST/REC | Damage/readiness gap | Rental-management inference | 5 | KEEP | Keep exclusion of bookings/pricing/messages. |
| `Dostęp dla wykonawcy` block | Define vendor access | Owner/operator | When needed | VEN/AKC | Unauthorised access | May imply vendor result responsibility | 5 | KEEP | Keep owner-decision trigger and performance disclaimer. |
| `Balkon / zewnętrzna kontrola wizualna` block | Define visible exterior check | Operator | Visits | INS/REC | Expected area omitted | Technical-service inference | 4 | KEEP | Keep `wizualna / bez prac technicznych`. |
| `Media / świadomość odcięć` block | Locate shutoffs, no repair | Operator | First visit | SCO-04/EMG | Slower protective response | Awkward label | 5 | REWRITE | `Lokalizacja zaworów i wyłączników (bez napraw)`. |
| `Komunikaty wspólnoty / budynku` block | Capture visible notices | Operator | Visit | REC/EMG | Missed building action | Low-value in some properties | 3 | KEEP | Keep conditional. |

### 5. Zasady powiadomienia i przyjazdu

| Item / exact wording | Current purpose | Who uses it | When | Downstream dependency | Risk if removed | Risk if kept | Score | Verdict | Proposed action / replacement |
|---|---|---|---|---|---|---|---|---:|---|---|
| Schema `Wartość domyślna / minimalne powiadomienie` | Record notice rule | Owner/operator | Onboarding | Readiness SOP | No workable lead time | None | 5 | KEEP | Rename `Uzgodnione minimalne powiadomienie`. |
| Columns `Czy omówione?`, `Czy potwierdzone?`, `Status` | Track discussion workflow | Operator | Completion | Internal QA | Weak confirmation trail | Triple administration | 1 | DELETE | One final value plus `Wyjątek / nierozstrzygnięte`. |
| `Powiadomienie o przyjeździe właściciela` | Set readiness lead time | Owner/operator | Onboarding | INS-02 | Missed readiness | None | 5 | KEEP | Keep. |
| `Krótki termin przyjazdu` | Define short-notice handling | Owner/operator | Onboarding | Readiness | Guarantee inferred | Overlaps note below | 4 | REWRITE | `Przy krótszym terminie Sentinel potwierdza, co jest wykonalne.` |
| `Gotowość lokalu` | Define readiness lead time | Owner/operator | Onboarding | INS/CLN | Undefined standard | Vague | 3 | REWRITE | `Termin zgłoszenia gotowości lokalu i wymagany zakres.` |
| `Sprzątanie gotowości` | Define cleaning notice | Owner/operator | If scoped | CLN | Scheduling dispute | Duplicates module | 4 | KEEP | Keep conditional; link by plain label, not code. |
| `Sprzątanie rotacyjne` | Define turnover notice | Owner/operator | Guest/mixed | GST/CLN | Missed turnover | Duplicates module | 4 | KEEP | Keep conditional. |
| `Dostęp wykonawcy` | Define vendor notice | Owner/operator | Vendor event | VEN/AKC | Access failure | Duplicates module | 4 | KEEP | Keep conditional. |
| Short-notice/SLA sentence | Prevent readiness guarantee | Owner/operator | Onboarding/incidents | Dispute protection | Guarantee may be inferred | Repeats SLA definition | 5 | REWRITE | `Krótki termin może ograniczyć gotowość. Sentinel potwierdza reakcję i decyzję, nie gwarantuje rezultatu.` |

### 6. Sprzątanie i gotowość

| Item / exact wording | Current purpose | Who uses it | When | Downstream dependency | Risk if removed | Risk if kept | Score | Verdict | Proposed action / replacement |
|---|---|---|---|---|---|---|---:|---|---|
| `Model sprzątania` | Identify who cleans | Owner/operator | If cleaning scoped | CLN | Responsibility dispute | English `cleaner` | 5 | REWRITE | `Kto wykonuje sprzątanie: ☐ Sentinel / osoba Sentinel ☐ osoba wybrana przez właściciela ...` |
| `Zakres sprzątania` | Define readiness/turnover | Owner/operator | Onboarding | CLN/GST | Scope dispute | None | 5 | KEEP | Keep. |
| `Odpowiedzialność za środki / produkty` | Assign supplies | Owner/operator | Onboarding | CLN/billing | Purchase dispute | `Sentinel` may be too broad | 5 | REWRITE | Distinguish `dostarcza` from `kupuje po zgodzie`. |
| `Postępowanie przy braku środków` including separately reviewed authority instrument | Preserve Option A and handling | Owner/operator | Onboarding/event | Authority/accounting | Unauthorised purchase | Long legalistic option | 5 | REWRITE | `Brak środków: ☐ raport bez zakupu ☐ zakup po zgodzie właściciela ☐ osobny, wcześniej sprawdzony dokument uprawnienia.` Keep review flag internal/adjacent. |
| `Pranie / pościel` | Assign work | Owner/operator | If scoped | CLN | Missing/duplicate work | English `cleaner` | 4 | REWRITE | PL-first role labels. |
| `Pytanie o ponowne sprzątanie` | Allocate re-clean response/cost | Owner/operator | Onboarding/failure | CLN-05 | Dispute after failed cleaning | Provisional rule may look final | 5 | REWRITE | `Ponowne sprzątanie: decyzja i koszt do potwierdzenia po teście operacyjnym.` Keep choices only after simulation. |
| `Dowód przed/po` | Set evidence requirement | Owner/operator | If cleaning scoped | CLN-03 | No proof standard | None | 5 | KEEP | Keep. |
| `Odniesienie do checklisty: CLN-02 / ____` | Internal record link | Operator | Filing | CLN-02 | Manual lookup | Owner clutter | 1 | MOVE INTERNAL | Store in checklist/report metadata. |
| Cleaning boundary/evidence sentence | Keep cleaning inside oversight; reject hygiene/technical guarantee | Everyone | Scope confirmation/reporting | Dispute protection | Category and guarantee drift | None | 5 | KEEP | Keep. |

### 7. Dostęp, klucze, kody

| Item / exact wording | Current purpose | Who uses it | When | Downstream dependency | Risk if removed | Risk if kept | Score | Verdict | Proposed action / replacement |
|---|---|---|---|---|---|---|---:|---|---|
| `Liczba kluczy deklarowana przez właściciela` | Baseline quantity | Owner/operator | Before handover | AKC-02/03 | Handover dispute | Duplicates custody register | 4 | MOVE INTERNAL | Move to signed key receipt; SCO-01 only says whether key custody is in scope. |
| `Liczba kluczy potwierdzona przy przekazaniu` | Confirm custody quantity | Custodian | Handover | AKC-02/03 | Serious custody dispute | Duplicate operational record | 5 | MOVE INTERNAL | Signed receipt/key register, not scope form. |
| `Oznaczenie kluczy ... bez pełnego adresu` | Safe key labelling | Custodian | Handover | AKC-02 | Security/custody gap | Duplicate register detail | 5 | MOVE INTERNAL | Move field to key register; keep no-full-address rule visible in access callout. |
| `Stan przechowania kluczy` | Track custody state | Operator | Handover/offboarding | AKC-02 | Custody ambiguity | Duplicate register | 4 | MOVE INTERNAL | Key register. |
| `Metoda dostępu` | Define practical access path | Owner/operator | Onboarding | Visits/emergency | Failed access | None | 5 | KEEP | Keep without recording secrets. |
| `Stan kodów` | Record whether secure access exists without exposing it | Owner/operator | Onboarding | AKC-01 | Access failure/security error | Too many internal states | 4 | REWRITE | `Dostęp kodowy: ☐ nie dotyczy ☐ dostęp potwierdzony w bezpiecznym rejestrze ☐ nieprzekazany ☐ do ustalenia.` |
| `Udostępnienie kodu cleanerowi Sentinel` | Authorise code sharing | Owner | Onboarding | AKC-01/CLN | Unauthorised access | Role detail better in access annex | 5 | MOVE INTERNAL | Put in reviewed access-authorisation record; keep a visible summary `Komu wolno udostępnić dostęp`. |
| `Udostępnienie kodu cleanerowi właściciela` | Same | Owner | Onboarding | AKC-01/CLN | Unauthorised access | Duplicate detail | 5 | MOVE INTERNAL | Access-authorisation record. |
| `Udostępnienie kodu wykonawcy` | Same, with per-event consent | Owner/operator | Vendor event | AKC/VEN | Unauthorised access | Duplicate detail | 5 | REWRITE | In SCO-01 keep only `Wykonawca: każdorazowa zgoda właściciela`; details in access record. |
| `Klucze, które nie mogą opuścić nieruchomości` | Record physical constraint | Owner/operator | Handover | AKC-02 | Breach/security issue | Better in key register | 5 | MOVE INTERNAL | Signed key receipt/register. |
| `Osoby upoważnione do dostępu` | Define access authority | Owner/operator | Onboarding | SCO-05/AKC | Unauthorised entry | List changes over time | 5 | MOVE INTERNAL | Authorised-persons register; SCO-01 references current approved list without code. |
| `Odniesienie do rejestru dostępu: AKC-02 / AKC-04 / ____` | Internal linkage | Operator | Filing | Access records | Lookup friction | Code clutter | 1 | MOVE INTERNAL | Metadata only. |
| No real codes/passwords/PINs/Wi-Fi/safe/full access data rule | Prevent severe security disclosure | Everyone | Every completion | All access docs | High security/privacy harm | None | 5 | KEEP | Keep prominently. |

### 8. Uprawnienia, płatne działania i decyzje właściciela

| Item / exact wording | Current purpose | Who uses it | When | Downstream dependency | Risk if removed | Risk if kept | Score | Verdict | Proposed action / replacement |
|---|---|---|---|---|---|---|---|---:|---|---|
| `Basic / Extended - zgoda właściciela` Option A row | Prevent autonomous paid spend | Owner/operator | Onboarding/decision | REC-03/EMG | Protected doctrine lost | None | 5 | KEEP | Keep; remove only internal words `Option A` from owner-facing body if unnecessary. |
| `Full - uprawnienie... EUR 300 / opcjonalnie EUR 500...` | Record Full authority | Owner/operator | Onboarding/incident | REC-03/EMG | Wrong authority | Current checkbox line is awkward | 5 | REWRITE | `Full: EUR 300 na decyzję. Limit opcjonalny: ☐ pozostaje EUR 300 ☐ EUR 500 uzgodnione. Powyżej wybranego limitu wymagana jest zgoda właściciela.` |
| `Oddzielny instrument uprawnienia` | Allow reviewed exception | Owner/reviewer | Only if applicable | Legal/accounting | Unreviewed authority invented | Makes rare exception look normal | 4 | REWRITE | Default `brak`; other choice only in separate reviewed document. |
| `Kanał decyzji właściciela` | Define valid approval route | Owner/operator | Onboarding/decision | REC-03 | Approval cannot be evidenced | Duplicates section 9 | 5 | KEEP | Keep once; merge with section 9. |
| `Zasada potwierdzenia pisemnego` | Define evidence of decision | Owner/operator | Onboarding/decision | Decision log | Verbal disputes | Slight detail | 5 | KEEP | Keep concise. |
| `Reguła rachunku / dowodu wydatku` | Require expense evidence | Owner/operator/accountant | Onboarding/action | Finance/REC-04 | Reimbursement dispute | `de minimis` is accountant jargon | 4 | REWRITE | `Dowód wydatku: rachunek wymagany; wyjątki wyłącznie po przeglądzie księgowym.` |
| Visible `Wymagany przegląd księgowy ...` flag | Prevent premature finance rule | Reviewer/operator | Before approval | FIN/legal gates | Provisional rule treated as final | Internal workflow in owner form | 4 | MOVE INTERNAL | Keep flag in source/register; visible form says `zasady rozliczeń do potwierdzenia`. |
| `Wydajność wykonawcy ... nie gwarantuje rezultatu` | Limit third-party responsibility | Owner/operator | Vendor scope | Dispute protection | Vendor result may be attributed to Sentinel | Awkward label | 5 | REWRITE | Label `Wykonawcy zewnętrzni`; keep disclaimer. |
| Emergency/community paragraph; not pre-authorised Basic/Extended spend; no B/E euro limit | Preserve doctrine | Everyone | Incident/onboarding | EMG/REC | Severe authority drift | Long but essential | 5 | KEEP | Keep as protected callout; shorten without changing meaning. |

### 9. Kontakty i kanały decyzyjne

| Item / exact wording | Current purpose | Who uses it | When | Downstream dependency | Risk if removed | Risk if kept | Score | Verdict | Proposed action / replacement |
|---|---|---|---|---|---|---|---|---:|---|---|
| `Główny kontakt decyzyjny właściciela` | Identify decision-maker | Owner/operator | Onboarding/incidents | REC-03/EMG | Decisions delayed/invalid | Duplicates section 2/SCO-06 | 5 | KEEP | Keep once in SCO-01; detailed data in SCO-06. |
| `Kontakt zapasowy` | Non-response fallback | Owner/operator | Onboarding/incidents | EMG-02 | Escalation stalls | None | 5 | KEEP | Keep. |
| `Kontakt wspólnoty / administracji` | Building escalation | Operator | Onboarding/incidents | EMG | Slower containment | Contact changes | 5 | KEEP | Keep or reference current SCO-06 value. |
| `Kontakt ubezpieczeniowy / szkoda` | Owner claim path | Owner/operator | Onboarding/incident | Claims | Delay after damage | May be unavailable | 4 | KEEP | Keep optional. |
| `Kontakt dostawcy mediów` | Utility escalation | Operator | Incident | EMG | Delay | Often unnecessary | 3 | MOVE INTERNAL | Put in Property Profile; keep only if owner supplies it. |
| `Oficjalne archiwum ... WhatsApp nie jest oficjalnym archiwum` | Define record store | Operator | Onboarding/every record | Data workflow | Evidence lost in chat | Technical archive detail | 5 | REWRITE | `Raporty i decyzje trafiają do emaila/archiwum. WhatsApp nie jest archiwum.` |
| `Kanał operacyjny pomocniczy` | Select working communication | Owner/operator | Onboarding | Daily operations | Missed messages | Duplicates decision channel | 4 | REWRITE | Separate `kanał roboczy` from `kanał ważnej decyzji`; each selected once. |

### 10. Dowody, zdjęcia i dane

| Item / exact wording | Current purpose | Who uses it | When | Downstream dependency | Risk if removed | Risk if kept | Score | Verdict | Proposed action / replacement |
|---|---|---|---|---|---|---|---|---:|---|---|
| `Referencja bazowego zestawu dowodowego` | Link baseline set | Operator | First visit | Evidence archive | Harder comparison | Internal ID clutter | 2 | MOVE INTERNAL | Evidence register metadata. |
| `Referencje zdjęć / dowodów` | Link evidence | Operator | Visits | Reports/archive | Traceability loss | Internal ID clutter | 3 | MOVE INTERNAL | Store in each report/evidence record. |
| `Dostawa wybranych zdjęć` | Choose delivery method | Owner/operator | Onboarding | Report workflow | Owner expectation unclear | Minor extra field | 4 | KEEP | Keep; default email with report. |
| `Pełny zestaw dowodów: strukturalne zaszyfrowane archiwum` | Define archive of record | Operator/reviewer | Setup | Data governance | Evidence may be fragmented | Exposes architecture without owner action | 3 | REWRITE | Visible: `Pełny zestaw przechowywany w bezpiecznym archiwum Sentinel.` Detailed structure internal. |
| `Strefy ograniczone` | Respect privacy/no-entry areas | Owner/operator | Onboarding/visits | Checklists/photos | Privacy/access breach | None | 5 | KEEP | Keep. |
| Visible lawyer-review retention/privacy flag | Block premature retention promise | Reviewer | Review | DAT-01/04 | Unsupported retention rule | Internal workflow clutter | 4 | MOVE INTERNAL | Keep flag in register/source; visible form refers to current privacy policy without inventing period. |
| `Nie fotografować:` block heading | Introduce hard photo rules | Operator/owner | Onboarding/field use | DAT-03/reports | Privacy violations | None | 5 | KEEP | Keep. |
| IDs/passports/legal documents prohibition | Data minimisation | Operator | Every photo | DAT-03 | Severe privacy harm | None | 5 | KEEP | Keep. |
| Cards/full-data invoices/bank documents prohibition | Protect financial data | Operator | Every photo | DAT-03 | Severe privacy harm | None | 5 | KEEP | Keep. |
| Alarm/password/router/Wi-Fi/safe-code prohibition | Protect access secrets | Operator | Every photo | DAT-03/AKC | Severe security harm | None | 5 | KEEP | Keep. |
| Children/family photos/private personal materials prohibition | Protect people/privacy | Operator | Every photo | DAT-03 | Severe privacy harm | Broad wording | 5 | REWRITE | Add screens/messages, medicines/medical documents, and intimate items from the memo. |
| Closed cupboards/safes/private storage/restricted zones prohibition | Prevent intrusive evidence | Operator | Every photo | DAT-03 | Privacy/property boundary breach | None | 5 | KEEP | Keep. |
| Sensitive items: prefer note over photo | Minimise data | Operator | Every photo | DAT-03 | Overcollection | Current list omits valuables/guest belongings | 5 | REWRITE | Add valuables and guest belongings; if relevant, crop/minimise or use standard no-photo note. |
| Final sentence: sensitive visible fact may be noted; evidence is not diagnosis | Define safe reporting | Operator/owner | Reports | REC/DAT | Overcollection or diagnosis claim | None | 5 | KEEP | Add standard line: `Element wrażliwy widoczny; nie sfotografowano. Może wymagać decyzji właściciela.` |

### 11. Wyłączenia i brak obietnic

| Item / exact wording | Current purpose | Who uses it | When | Downstream dependency | Risk if removed | Risk if kept | Score | Verdict | Proposed action / replacement |
|---|---|---|---|---|---|---|---|---:|---|---|
| `Zarządzanie nieruchomością` exclusion | Prevent generic management positioning | Owner/operator | Scope confirmation | Product identity | Category drift | Could conflict with owner-representation language if too broad | 5 | REWRITE | `Sentinel wykonuje wyłącznie uzgodniony nadzór i reprezentację właściciela; nie przejmuje nieograniczonego zarządzania.` |
| `Zarządzanie najmem` exclusion | Prevent rental-management drift | Owner/operator | Scope confirmation | Product identity | Severe scope drift | Clause `chyba że osobno...` weakens boundary | 5 | REWRITE | `Sentinel nie obsługuje rezerwacji, cen, ogłoszeń, meldowania ani komunikacji z gośćmi.` Remove exception from SCO-01. |
| `Concierge / lifestyle` exclusion | Protect identity | Owner/operator | Scope confirmation | Product identity | Concierge drift | None | 5 | KEEP | Keep. |
| `Diagnoza techniczna` exclusion | Prevent expert diagnosis claim | Owner/operator | Visits/reports | Liability | Technical liability | None | 5 | KEEP | Keep. |
| `Gwarancja rozwiązania` exclusion | Preserve SLA meaning | Owner/operator | Scope confirmation | Dispute protection | Resolution guarantee | Repeats section 3 | 5 | KEEP | Keep in consolidated boundary callout or section 3, not necessarily both. |
| `Wykonawcy` exclusion | Limit third-party responsibility | Owner/operator | Vendor scope | Liability | Vendor result attributed to Sentinel | Repeats section 8 | 5 | KEEP | Keep once in consolidated boundary callout. |
| `Usługi niewymienione ... included` | Closed-scope rule | Owner/operator | Scope confirmation | SCO-02 | Scope creep | Internal English code | 5 | REWRITE | `Jeżeli usługa nie jest wyraźnie wpisana jako objęta zakresem, nie jest objęta automatycznie.` |
| `Odpowiedzialność prawna / podatkowa ... po stronie właściciela` | Avoid adviser role | Owner/operator | Scope confirmation | Legal/accounting | Adviser liability | May overstate owner responsibility before legal review | 4 | REWRITE | `Sentinel nie świadczy porad prawnych, podatkowych ani ubezpieczeniowych; właściciel korzysta z właściwych doradców.` Lawyer review still required for final placement. |

### 12. Weryfikacja podczas pierwszej wizyty

| Item / exact wording | Current purpose | Who uses it | When | Downstream dependency | Risk if removed | Risk if kept | Score | Verdict | Proposed action / replacement |
|---|---|---|---|---|---|---|---|---:|---|---|
| Intro with internal code `pending first visit` | Permit provisional fields | Operator/owner | Before first visit | Property Profile | Premature completion | Internal code clutter | 4 | REWRITE | `Te informacje można potwierdzić podczas pierwszej wizyty.` |
| Repeated columns `Status / Wynik po wizycie / Referencja dowodu` | Execute verification | Operator | First visit | SCO-04/INS checklist | Verification trail lost | Turns scope form into visit checklist | 3 | MOVE INTERNAL | Property Profile / first-visit checklist. SCO-01 retains one completion summary. |
| `Lokalizacja zaworu wody` | Protective readiness | Operator | First visit | EMG/SCO-04 | Slower leak response | Execution detail | 5 | MOVE INTERNAL | Property Profile; visible SCO-01 may state `lokalizacje odcięć do potwierdzenia`. |
| `Lokalizacja wyłącznika prądu` | Protective readiness | Operator | First visit | EMG/SCO-04 | Slower electrical response | Execution detail | 5 | MOVE INTERNAL | Property Profile. |
| `Mechanika wejścia do budynku / wspólnoty` | Verify access | Operator | First visit | AKC/SCO-04 | Failed access | Execution detail | 5 | MOVE INTERNAL | Access register/Property Profile. |
| `Znane ryzyka widoczne` | Baseline awareness | Operator | First visit | REC/SCO-04 | Missed risk | Could imply diagnosis | 5 | REWRITE | Move to first-visit report as `widoczne kwestie wymagające uwagi - bez diagnozy`. |
| `Bazowy zestaw zdjęć` | Establish baseline evidence | Operator | First visit | DAT/REC | Weak comparisons | Evidence execution detail | 4 | MOVE INTERNAL | First-visit checklist/evidence register. |
| `Liczba i typ kluczy` | Verify custody | Custodian | Handover/first visit | AKC | Custody dispute | Duplicates section 7/register | 5 | MOVE INTERNAL | Signed key receipt/register. |
| `Komunikaty wspólnoty / zasady budynku` | Verify constraints | Operator | First visit | SCO-04/REC | Missed restrictions | Execution detail | 3 | MOVE INTERNAL | Property Profile. |
| `Strefy wyłączone / prywatne` | Verify privacy boundary | Owner/operator | Onboarding/first visit | Checklists/DAT | Intrusion risk | Important enough to remain visible | 5 | KEEP | Keep in section 10; first-visit verification result internal. |

### 13. Punkty otwarte i bramki przeglądu

| Item / exact wording | Current purpose | Who uses it | When | Downstream dependency | Risk if removed | Risk if kept | Score | Verdict | Proposed action / replacement |
|---|---|---|---|---|---|---|---|---:|---|---|
| Schema `Kategoria / Punkty / Odpowiedzialny / Status` | Manage open work | Operator/reviewer | Before activation | Register/tasks | Open items disappear | Enterprise workflow in owner form | 3 | REWRITE | One visible `Co pozostaje do decyzji / kto / termin`; review gates internal. |
| `Decyzje właściciela` | Track owner blockers | Owner/operator | End of onboarding | Activation | Work starts without decisions | None | 5 | KEEP | Keep as concise open-items list. |
| `Oczekuje na pierwszą wizytę` | Track physical verification | Operator | Pre-visit | SCO-04 | Form appears complete | Duplicates section 12 | 4 | REWRITE | One checkbox: `☐ pierwsza wizyta wymagana do zamknięcia zakresu`. |
| `Przegląd prawny` | Preserve legal gate | Reviewer | Before approval | Document Register | Legal gate lost | Owner form carries governance | 5 | MOVE INTERNAL | Mandatory in Register/source metadata; visible warning remains. |
| `Przegląd księgowy` | Preserve accounting gate | Reviewer | Before approval | Document Register | Accounting gate lost | Owner form carries governance | 5 | MOVE INTERNAL | Mandatory in Register/source metadata; visible provisional finance wording remains. |
| `Zmiana zakresu ... wymaga pisemnego potwierdzenia` | Control scope changes | Owner/operator | Any change | Dispute protection | Scope drift | None | 5 | KEEP | Keep prominently. |
| `Braki danych` | Track missing inputs | Owner/operator | Before activation | Onboarding | Hidden gaps | Overlaps open items | 3 | REWRITE | Merge into one `Otwarte decyzje i brakujące dane` list. |

### 14. Potwierdzenie właściciela - robocze

| Item / exact wording | Current purpose | Who uses it | When | Downstream dependency | Risk if removed | Risk if kept | Score | Verdict | Proposed action / replacement |
|---|---|---|---|---|---|---|---|---:|---|---|
| `To nie jest klauzula podpisu prawnego.` | Prevent mistaken signature | Owner/operator | Review | Legal gate | Informal confirmation mistaken for contract | None | 5 | KEEP | Keep while this block exists. |
| Owner confirms information is accurate enough to prepare work, subject to final contract/reviews | Operational reliance | Owner/operator | End of onboarding | Activation | Sentinel acts on unconfirmed data | Long and signature-like | 5 | REWRITE | `Potwierdzam, że podane informacje wystarczają do przygotowania pracy Sentinel. Nie zastępuje to umowy ani wymaganych przeglądów.` |
| Owner understands pending fields must be completed before operational/customer use | Prevent premature activation | Owner/operator | End of onboarding | Activation | Work starts with gaps | Bureaucratic wording | 5 | REWRITE | `Rozumiem, że oznaczone braki muszą zostać uzupełnione przed rozpoczęciem odpowiednich działań.` |
| `Data roboczego potwierdzenia` | Date acknowledgement | Owner/operator | End of review | Decision trail | No timing evidence | None | 4 | KEEP | Keep. |
| `Potwierdzone przez` | Attribute acknowledgement | Owner/operator | End of review | Decision trail | No attribution | Can look like signature | 4 | REWRITE | `Imię osoby potwierdzającej (bez podpisu): ____`. Final signature mechanics await lawyer. |

### 15. Wewnętrzny rejestr zmian

| Item / exact wording | Current purpose | Who uses it | When | Downstream dependency | Risk if removed | Risk if kept | Score | Verdict | Proposed action / replacement |
|---|---|---|---|---|---|---|---|---:|---|---|
| Visible schema `Wersja / Data / Zmiana / Autor / Status` | Internal change history | Reviewer | Revision | Governance | Harder internal history | No owner/operator action; length and repo feel | 1 | MOVE INTERNAL | Move entire section to source control/document metadata. |
| `0.1-working ... pierwszy czysty roboczy draft... źródło robocze` | Record draft provenance | Reviewer | Revision | Git/Register | Minor provenance loss | Explicit source-system chatter | 1 | MOVE INTERNAL | Git history and Document Register only. |

## 6. Proposed v0.4 patch plan

1. **Preserve the doctrine before editing.** Mark the must-keep lines above as protected acceptance checks: Option A, Full authority, SLA meaning, Full cadence, no-code rule, no-diagnosis rule, and service-category exclusions.
2. **Define the visible form boundary.** SCO-01 should contain only owner/operator facts and decisions needed to start work, interpret scope, or defend a dispute.
3. **Move internal administration.** Remove visible machine codes, revision history, archive references, record-template IDs, completion-channel metadata, and detailed legal/accounting workflow. Preserve them in Markdown metadata, the Document Register, or downstream records.
4. **Split execution detail from scope.** Move first-visit verification to SCO-04/INS; key counts and custody states to AKC-02/03; evidence IDs to the evidence register; detailed contacts to SCO-06.
5. **Reduce repeated schemas.** Replace section 4's eight-field module blocks with four visible fields. Replace section 5's six-column workflow with confirmed notice plus exception. Merge duplicate open-item fields.
6. **Compress protected reminders.** Keep each protected proposition once in a prominent location and once only where repetition materially prevents misuse.
7. **Use PL-first operational language.** Replace visible machine English and `cleaner` wording. Keep internal codes in metadata.
8. **Retain conditional modules.** Guest, cleaning, vendor, and calendar fields should appear only when the selected profile/scope requires them.
9. **Target a materially shorter form.** Aim for roughly 12-16 working pages without shrinking type or packing tables. The full form may remain long, but every page must contain owner/operator decisions.
10. **Simulate before accepting v0.4.** Fill private, guest, and mixed cases; record every field skipped, misunderstood, duplicated, or completed from another record. Patch only evidence-backed friction.

## 7. What not to touch

- Package names/count or the Full `min. 3/mies.` cadence.
- SLA windows or the meaning `response/decision timing, not guaranteed resolution`.
- Option A: no autonomous paid action/vendor spend for Basic/Extended by default; owner approval required.
- Full EUR 300 standard protective authority and optional EUR 500 if agreed.
- The prohibition on inventing any Basic/Extended euro amount.
- Emergency-services/community-required minimal-action distinction.
- Package responsibility ≠ emergency authority ≠ liability.
- No-code/no-password/no-full-access-data rule.
- Photo/data-minimisation rules or legal/accounting review gates; gates may move internal but may not disappear.
- Rental-management, concierge/lifestyle, generic property-management, cleaning-only, or keyholding-only exclusions.
- Visible-facts/not-technical-diagnosis boundary.
- Vendor-performance and no-guaranteed-result boundaries.
- Customer-ready, signature, legal, accounting, and Owner approval status: SCO-01 remains Level 2 only until later gates pass.

## 8. Audit conclusion

v0.3 survives as the functional source of truth for simulation, but not every visible item survives. A small operation needs one clear scope record, not a visible projection of its entire document architecture. v0.4 should be shorter because internal records take responsibility for their own data, not because Sentinel weakens scope, authority, safety, evidence, or dispute protection.
