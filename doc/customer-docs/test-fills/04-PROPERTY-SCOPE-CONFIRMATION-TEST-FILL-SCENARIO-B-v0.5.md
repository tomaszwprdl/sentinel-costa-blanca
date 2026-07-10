---
title: Property Scope Confirmation v0.5 — Instrumented Test Fill (Scenario B)
status: internal test artifact
customer_facing: false
lawyer_review_required: false
owner_review_required: true
pathway: private-use-only
source_document: SCO-01 v0.5 (commit e376572)
version: test-fill-0.1
supersedes: none (companion to 01-SCOPE-REGISTER-TEST-FILL-SCENARIO-B.md, which tested the older v0.3 register)
---

# 04 — PROPERTY SCOPE CONFIRMATION TEST FILL — SCENARIO B — v0.5

> **FICTIONAL TEST DATA.** Every name, contact, key label and reference below is invented for
> form-testing only. No real personal data, no real property, no real codes. This is an instrumented
> simulation fill of **SCO-01 v0.5** (the accepted Level-2 working DOCX candidate) — it approves
> nothing, promises nothing, and is **not** a customer document, **not** customer-ready, **not**
> lawyer/accountant reviewed, **not** signature-approved.

---

## 1. Simulation header

| Field | Value |
|---|---|
| Source document version | **SCO-01 v0.5** (source `01-PROPERTY-SCOPE-CONFIRMATION-WORKING-DRAFT-PL.md`; DOCX v0.5; commit `e376572`) |
| Scenario | **Scenario B** (canonical; reused from `01-SCOPE-REGISTER-TEST-FILL-SCENARIO-B.md`) |
| Pathway | **Private absence** (Nieobecność prywatna / `private-use-only`) |
| Package | **Extended** (Rozszerzony), 24h response window |
| Cleaning / readiness | **Included** (readiness cleaning; Sentinel cleaner) |
| Keyholding | **Included** (3 keys) |
| Guest turnover | **None** |
| First physical verification visit | **NOT performed** — fill deliberately ends in *częściowo wypełnione — przed pierwszą wizytą* |
| Test-data warning | Fictional / internal test only. No real PII, property, codes, or approval. |
| Fill mode | Agreement-stage video call, owner abroad (Poland), owner present |

**No new inputs were introduced.** This fill carries the *existing* Scenario B facts onto the v0.5
form, to isolate one variable: *can v0.5 carry a known case cleanly?* — not *how does a new case
behave?*

---

## 2. Filled SCO-01 v0.5

### 1. Właściciel, nieruchomość i sposób użycia

| Pole | Wartość |
|---|---|
| Imię i nazwisko / nazwa właściciela | Anna Nowak-Testowa *(FIKCYJNE)* |
| Preferowany język kontaktu | ☒ polski |
| Obszar nieruchomości | Torrevieja (obszar; bez pełnego adresu w tym formularzu roboczym) |
| Typ nieruchomości | ☒ apartament |
| Profil użycia | ☒ Nieobecność prywatna |
| Ważne uwagi do sposobu użycia | Właściciel za granicą (Polska); mieszkanie puste między pobytami; 4–6 przyjazdów właściciela w roku, zwykle 1–2 tygodnie; brak gości. |

#### Terminy uruchamiające gotowość

| Pole | Wartość |
|---|---|
| Skąd Sentinel bierze terminy, które uruchamiają gotowość? | ☒ właściciel wysyła terminy ręcznie · ☒ email |
| Czy Sentinel ma działający dostęp do tych terminów? | ☒ właściciel będzie wysyłał terminy ręcznie |

> Brak współdzielonego kalendarza; brak profilu gościnnego. Źródło terminów służy wyłącznie planowaniu
> gotowości przyjazdu właściciela.

### 2. Pakiet, rytm i czas reakcji

| Pole | Wartość |
|---|---|
| Pakiet | ☒ Rozszerzony / Extended |
| Okno reakcji / decyzji | ☒ 24h |
| Uzgodniony rytm wizyt | 2 wizyty w miesiącu (standard Extended) — omówione i potwierdzone |
| Dodatkowe wejścia poza planowymi wizytami | Gotowość przed przyjazdem właściciela (≈4–6×/rok) — uruchamiana przekazanym terminem, poza stałym rytmem 2/mies. |

### 3. Co Sentinel robi i kiedy

#### 3A. Regularne działania Sentinel

| Działanie | Zakres / status | Kiedy działa | Jak często / kiedy sprawdzane | Wynik dla właściciela | Granica działania / uwagi |
|---|---|---|---|---|---|
| Planowa wizyta nadzorcza | w zakresie | zgodnie z planem | 2×/miesiąc | raport wizyty | — |
| Przechowanie kluczy | w zakresie | po udokumentowanym przekazaniu kluczy | stan przy przekazaniu/zwrocie; ruch według rejestru dostępu | potwierdzenie przechowania / log dostępu | 3 klucze; bez adresu na etykietach; liczba potwierdzana przy podpisanym przekazaniu (AKC-03) |
| Komunikaty wspólnoty / budynku | w zakresie | gdy tablica/komunikat dostępny podczas wizyty | podczas uzgodnionych wizyt | notatka | tylko widoczne komunikaty; nazwisko administratora na tablicy — oczekuje na pierwszą wizytę |

#### 3B. Gotowość uruchamiana terminem

| Działanie | Zakres / status | Co uruchamia działanie | Kiedy ma być gotowe / minimalny termin | Wynik dla właściciela | Warunki wykonania / ograniczenia |
|---|---|---|---|---|---|
| Gotowość przed przyjazdem właściciela | w zakresie | termin przyjazdu przekazany zgodnie z sekcją 1 | 5 dni powiadomienia | potwierdzenie gotowości | zależne od terminu powiadomienia |
| Sprzątanie w ramach gotowości | w zakresie | termin przyjazdu właściciela | 5 dni powiadomienia | potwierdzenie gotowości + dowód przed/po | funkcja w ramach nadzoru |
| Sprzątanie rotacyjne | poza zakresem | — | — | — | brak gości |
| Kontrola po gościach | nie dotyczy | — | — | — | brak profilu gościnnego |

#### 3C. Dostęp dla wykonawcy

| Pole | Wartość |
|---|---|
| Czy dostęp dla wykonawcy jest w zakresie? | ☒ oczekuje na decyzję |
| Kiedy dostęp jest możliwy? | oczekuje na decyzję właściciela (brak wykonawcy w planie; właściciel preferuje zgodę każdorazowo) |
| Wymagana decyzja właściciela | ☒ tak; płatne działanie lub wydatek zawsze podlega zasadom z sekcji 7 |
| Co Sentinel dokumentuje? | log dostępu / podsumowanie |
| Granica działania | Sentinel nie gwarantuje dostępności, ceny, jakości ani rezultatu pracy wykonawcy. |

#### 3D. Kontrola wizualna podczas wizyty

| Pole | Wartość |
|---|---|
| Czy kontrola wizualna balkonu / elementów zewnętrznych jest w zakresie? | ☒ tak |
| Kiedy sprawdzane? | podczas uzgodnionej wizyty nadzorczej |
| Wynik dla właściciela | notatka / zdjęcie referencyjne |
| Granica sprawdzenia | tylko widoczne elementy (uszczelka drzwi balkonowych, odpływ, widoczny stan); bez sprzątania, bez roślin, bez diagnozy |

### 4. Terminy powiadomienia i krótkie terminy

| Temat | Ustalona zasada / termin | Wyjątek / krótki termin | Status |
|---|---|---|---|
| Przyjazd właściciela | 5 dni powiadomienia | krótszy termin możliwy; niedobór gotowości nie jest naruszeniem | ☒ uzgodnione |
| Gotowość lokalu | 5 dni | jak wyżej | ☒ uzgodnione |
| Sprzątanie w ramach gotowości | 5 dni | jak wyżej | ☒ uzgodnione |
| Sprzątanie rotacyjne | nie dotyczy | — | ☒ nie dotyczy |
| Dostęp wykonawcy | 48h (proponowane) | — | ☒ oczekuje (nie omówione — brak wykonawcy) |

### 5. Dostęp i klucze

| Pole | Wartość |
|---|---|
| Czy przechowanie kluczy jest w zakresie? | ☒ tak |
| Metoda dostępu | ☒ klucz fizyczny |
| Stan dostępu kodowego | ☒ nie dotyczy (brak alarmu / systemu kodowego) |
| Role dopuszczone do dostępu | ☒ operator Sentinel · ☒ osoba sprzątająca Sentinel · ☒ wykonawca — każdorazowo za zgodą właściciela |
| Ograniczenia dostępu / strefy wyłączone | Zamknięta szafa w sypialni głównej i szafka w przedpokoju — nie wchodzić; Sentinel nie posiada klucza do szafy. Dokumenty w szafie i papiery na biurku w drugiej sypialni — nie ruszać. |
| Kontakt przy problemie z wejściem | Główny kontakt właściciela (sekcja 8); mechanika wejścia do budynku — oczekuje na pierwszą wizytę |

> Klucze: 3 sztuki (mieszkanie / budynek / skrzynka), bez adresu na etykietach. Liczba i identyfikatory
> potwierdzane wyłącznie przy podpisanym przekazaniu (AKC-03), nie w tym formularzu. Brak rzeczywistych
> kodów/haseł zapisanych w dokumencie.

### 6. Sprzątanie i gotowość — ustalenia wykonawcze

| Pole | Wartość |
|---|---|
| Kto wykonuje sprzątanie | ☒ osoba Sentinel |
| Zakres sprzątania | ☒ gotowość właściciela |
| Kto dostarcza środki / produkty | ☒ przechowywane w lokalu (dostarcza właściciel) |
| Brak środków / produktów | ☒ raport bez zakupu (zakup wyłącznie po zgodzie właściciela) |
| Pranie / pościel | ☒ właściciel (właściciel pierze własną pościel podczas pobytów) |
| Ponowne sprzątanie | ☒ Sentinel poprawia, jeśli błąd leży po stronie osoby Sentinel; koszt i zasada oczekują na test operacyjny / decyzję |
| Dowód przed/po | ☒ wymagany |

> Ten formularz ustala model i granice sprzątania. Konkretna checklista wykonania każdej usługi jest
> osobnym dokumentem roboczym **CLN-02** (nie tworzony na tym etapie).

### 7. Płatne działania i decyzje właściciela

| Pole | Wartość |
|---|---|
| Basic / Extended | Brak autonomicznego płatnego działania domyślnie; zgoda właściciela wymagana przed płatnym działaniem lub wydatkiem na wykonawcę. **(zasada pakietu — dotyczy tego wypełnienia Extended)** |
| Full | nie dotyczy (wybrano Extended) |
| Oddzielny dokument uprawnienia | ☒ brak |
| Kanał ważnej decyzji właściciela | WhatsApp (kanał operacyjny) + email (oficjalny zapis) |
| Potwierdzenie decyzji | ☒ WhatsApp jako dowód komunikacji + archiwizacja · ☒ telefon tylko z pisemnym potwierdzeniem |
| Dowód wydatku | Rachunek wymagany; wyjątki wyłącznie po przeglądzie księgowym. |
| Zasady rozliczeń | oczekują na wymagany przegląd księgowy tam, gdzie oznaczono |
| Wykonawcy zewnętrzni | Sentinel może koordynować dostęp i dokumentację; nie gwarantuje dostępności, ceny, jakości ani rezultatu. |

> **Kluczowy wynik:** dla Extended formularz sam podaje zasadę autonomii (brak autonomicznego wydatku,
> zgoda właściciela przed każdym płatnym działaniem). W poprzednim wypełnieniu (v0.3 register) operator
> nie miał na co wskazać przy Extended — patrz sekcja 4, porównanie, ustalenie T1.

### 8. Kontakty, decyzje i dostarczanie raportów

| Kontakt / kanał | Dane | Kiedy użyć |
|---|---|---|
| Główny kontakt decyzyjny właściciela | Anna Nowak-Testowa — email + WhatsApp *(FIKCYJNE)* | decyzje operacyjne i płatne działania |
| Kontakt zapasowy | P. Nowak-Testowy, brat *(FIKCYJNE)* | gdy właściciel nie odpowiada |
| Kontakt wspólnoty / administracji | oczekuje na pierwszą wizytę (nazwisko na tablicy wspólnoty) | sprawy budynku / awarie wspólnotowe |
| Kontakt ubezpieczeniowy / szkoda | oczekuje na decyzję właściciela *(przegląd prawny — lekki flag)* | ścieżka roszczeń właściciela |
| Email do raportów i decyzji | email właściciela *(FIKCYJNE)* | oficjalna dostawa dokumentów |
| Kanał roboczy | ☒ WhatsApp | komunikacja operacyjna |

### 9. Zdjęcia, dowody i prywatność

| Pole | Wartość |
|---|---|
| Dostawa wybranych zdjęć | ☒ link z archiwum · ☒ email z raportem |
| Strefy ograniczone / bez zdjęć | zamknięta szafa w sypialni głównej; szafka w przedpokoju; dokumenty/biurko w drugiej sypialni |
| Zasady retencji i prywatności | do potwierdzenia po wymaganym przeglądzie prawnym / księgowym |

> Statyczna lista „Nie fotografować" odczytana właścicielowi; właściciel potwierdził (m.in. zamknięta
> szafa nie będzie otwierana ani fotografowana; elementy wrażliwe opisywane, nie fotografowane).

### 10. Granice usługi i brak obietnic

Sekcja statyczna — odczytana właścicielowi; brak zastrzeżeń. „Jeżeli usługa nie jest wpisana jako objęta
zakresem, nie jest objęta automatycznie" powtórzone ustnie przy stanie *oczekuje na decyzję* dla dostępu
wykonawcy.

### 11. Co pozostaje do potwierdzenia

| Punkt | Odpowiedzialny | Termin / status |
|---|---|---|
| Otwarte decyzje właściciela | właściciel | stan modułu dostępu wykonawcy; kontakt ubezpieczeniowy; kontakt do dostawcy mediów |
| Brakujące dane | Sentinel | lokalizacja zaworów/wyłączników; mechanika wejścia do budynku; nazwisko administratora; zdjęcia bazowe — oczekuje na pierwszą wizytę |
| Pierwsza wizyta wymagana do zamknięcia zakresu | Sentinel | ☒ tak — nie wykonano |
| Zmiana zakresu | właściciel + Sentinel | wymaga pisemnego potwierdzenia |

### 12. Robocze potwierdzenie ustaleń

| Pole | Wartość |
|---|---|
| Potwierdzenie informacji | ☒ częściowo: przed pierwszą wizytą; sześć pozycji czeka na weryfikację fizyczną |
| Potwierdzenie braków | ☒ rozumiem, że oznaczone braki muszą zostać uzupełnione przed rozpoczęciem odpowiednich działań |
| Data roboczego potwierdzenia | oczekuje (symulacja — brak realnej daty) |
| Imię osoby potwierdzającej (bez podpisu) | Anna Nowak-Testowa *(FIKCYJNE; symulacja — bez podpisu, nie zatwierdzone)* |

### Wewnętrzny pasek rekordu

| Pole | Wartość |
|---|---|
| ID dokumentu | `SCO-01 / SEN-PROP-TEST-001` |
| Referencja nieruchomości | `SEN-PROP-TEST-001` |
| Data wypełnienia | symulacja — brak realnej daty |
| Operator | operator testowy (symulacja) |
| Język rekordu | ☒ PL |
| Status formularza | ☒ częściowo wypełnione — przed pierwszą wizytą |
| Punkty nierozstrzygnięte | dostęp wykonawcy; kontakt ubezpieczeniowy; kontakt do mediów; pozycje pierwszej wizyty |

---

## 3. Fill instrumentation

| Instrument | Result |
|---|---|
| **Estimated fill time** | Agreement-stage (video, owner explanations included): **~40–50 min**. Post-visit completion pass: **+15–25 min**. Down from the v0.3-register fill's ~55–70 min. Two drivers: native-PL form (no live translation) and no template-governance rows to reason about. |
| **True blanks left** | **0**. Every field resolved to a value or to one of the three legitimate states (`nie dotyczy` / `oczekuje na decyzję właściciela` / `oczekuje na pierwszą wizytę`). No forced fake certainty. |
| **Pending first visit** | 5: building-entry mechanics, community-admin name, utility shut-off locations, baseline photos, community-notice detail. |
| **Pending owner decision** | 3: vendor-access module state, insurance/claim contact, utility-provider contact. |

### Fields that were clear

- §1 profile + usage — private absence maps directly; three checkboxes and one notes line.
- §2 package/rhythm/SLA — Extended + 24h + 2/month; unambiguous.
- §5 keys — physical key, `nie dotyczy` code-state fit the no-alarm property exactly.
- §6 cleaning model — Sentinel cleaner / readiness / evidence required; the CLN-02 separation sentence removed the "is this the checklist?" hesitation entirely.
- §7 Extended authority — **the standout**: the form itself states the Option A rule; nothing to improvise.

### Fields that caused hesitation

- §1 "Czy Sentinel ma działający dostęp do tych terminów?" — for a *manual-email-only* owner, the honest answer is "właściciel będzie wysyłał terminy ręcznie". The row reads as if it expects a *system* to test; it works, but a purely-manual owner makes the "access" framing slightly awkward.
- §3B "minimalny termin" (5 dni) is entered here **and again** in §4 "Terminy powiadomienia" — mild duplication; the operator types the same value twice.
- §3A keyholding "Jak często / kiedy sprawdzane" — a continuous-custody module in a frequency column still reads oddly (same residue the old fill noted for "trigger").

### Fields that felt overkill (for this case)

- §3B rows "Sprzątanie rotacyjne" and "Kontrola po gościach" — pure guest-path; both marked `poza zakresem`/`nie dotyczy`. Acceptable (form says fill only selected modules), but they still sit on the page for a no-guest owner.
- §1 trigger-source helper text mentions "goście" — minor guest framing inside a private fill.

### Fields missing for this case

- No dedicated **valuables-inventory-declined** capture (old fill recorded "owner declined; noted per no-liability-for-unreported-valuables rule"). v0.5 covers valuables only indirectly via §9 privacy + §10 boundaries. Small potential gap — see §4 "protection" note.
- No **access-failure procedure reference** row (old §8 pointed to EMG-03). v0.5 keeps only "Kontakt przy problemie z wejściem"; the procedure pointer moved internal. Acceptable.

### Fields correctly moved internal (confirmed against the Operator/Data Map)

- Utility shut-off locations, building-entry mechanics, baseline photos, known risk areas → first-visit / future SCO-04.
- Router/equipment location, utility-provider contact, full contact directory → data map §6 / SCO-04 / SCO-06.
- System codes, version history, archive IDs, review-gate destinations → git + Document Register + data map.
- Key count/ID/condition → AKC-03 / AKC-02.
- The internal record bar now carries **identity only**, not provenance — the old T2 (template rows collecting nothing) is gone.

### Fields that still feel like system scaffolding

- §3A frequency column for a continuous module (keyholding).
- §4 duplicating §3B notice values.
- These are cosmetic residue, not defects. **No patch recommended before the next fill.**

### Ambiguity checks

- **Authority ambiguity:** **none at form level.** §7 states the Extended rule outright. Residual "oczekują na przegląd księgowy" on settlement exceptions is correct deferral, not ambiguity.
- **Cleaning-scope ambiguity:** **low.** Model vs execution (CLN-02) cleanly split; products + shortage now captured; re-clean cost deliberately `oczekuje na test operacyjny`.
- **Key/access ambiguity:** **low.** No-code state, restricted zones, and deferred key-count-at-handover all resolved cleanly.
- **Short-notice/readiness ambiguity:** **low.** §4 records the 5-day rule and "krótki termin może ograniczyć gotowość… nie gwarantuje rezultatu"; the 3-day-flight question is answered without a breach implication.

---

## 4. Comparison to old Scenario B fill

Baseline: `01-SCOPE-REGISTER-TEST-FILL-SCENARIO-B.md` (fill of the older v0.3 *register*).

### What became clearer in v0.5

1. **T1 resolved — the single biggest old dispute risk.** The v0.3 form defined `EUR 300` for Full but gave the operator *nothing to point to* for Extended, cascading two §9 fields into `pending owner decision`. v0.5 §7 writes the Option A doctrine into the form: Basic/Extended = no autonomous paid action, owner approval before any paid action/vendor spend. Extended now has a definite answer, not a gap.
2. **T4 resolved — language.** Old form was English-structured with a Polish record → "must resolve before any owner-visible fill." v0.5 is native Polish. Mismatch gone; fill time dropped.
3. **T5 addressed — supplies run-out.** Old form had no capture row for mid-readiness shortage (informal verbal agreement only). v0.5 §6 "Brak środków / produktów" gives it an explicit state (`raport bez zakupu` / zakup po zgodzie / osobny dokument uprawnienia / oczekuje).
4. **T2 resolved — template/instance confusion.** Old revision-log/governance rows sat inside a per-property fill collecting nothing. v0.5 moves version/codes/gates to git + Register + Operator Data Map; the visible record bar is identity-only.

### What became shorter

- One native-PL owner-facing form instead of a 14-section register carrying provenance, revision log, archive IDs and review-workflow rows.
- Fill time ~40–50 min vs ~55–70 min.
- Fewer "read-aloud-and-skip" repetitions of the package≠authority≠liability warning (was met 3× in one fill).

### What protection might have been lost

- **Access-event allowance / overage basis is gone from the visible form.** The old fill carried "Extended = 2 third-party access events/month" plus an overage-price basis (and flagged T3: "access event" had no plain meaning). v0.5 replaces this with a pure per-event owner-decision block (§3C). This is *doctrine-consistent* (no autonomous vendor spend) and it removes the confusing unit — but if Sentinel ever intends to **meter or charge for extra third-party access**, that concept now has no home on the form. **Observation, not a break** — it is an Owner product decision, not a form defect.
- **Valuables-inventory-declined** has no explicit row (see §3). Covered indirectly; worth a decision on whether it needs a capture line.
- Notice defaults are less granular (no "discussed?/override?" columns). Adequate here; noted.

### What still requires future internal documents

- **CLN-02** — cleaning execution checklist (referenced in §6; **do not build yet**).
- **AKC-02 / AKC-03** — key custody register + handover receipt (key count verified only at signed handover; AKC-03 stub exists).
- **SCO-04** — property profile / first-visit record (shut-offs, risk areas, building entry, baseline photos).
- **REC-01** — visit report (evidence delivery downstream).
- **DAT-03 / DAT-04** — photo policy + retention (privacy/retention "do potwierdzenia po przeglądzie prawnym").

---

## 5. Verdict

### `simulation-pass`

v0.5 carried the known Scenario B case cleanly with **zero forced fake data**, resolved the old fill's
single biggest dispute risk (T1 Extended authority) plus T4 (language) and T5 (supplies), and preserved
the first-visit discipline that was the old fill's main strength. The residual issues are cosmetic
scaffolding, not defects.

### Must-fix before next fill

- **None blocking.** Do not patch pre-emptively. The only item worth an eventual Owner decision (not a
  form bug): whether the removed **access-event allowance/overage** concept needs a visible home if
  Sentinel intends to meter extra third-party access.

### Test during the private-profile fill

- Whether §3A's frequency column for continuous keyholding reads awkwardly a second time.
- Whether the §3B ↔ §4 notice-value duplication annoys the operator.
- Whether the absence of a **valuables-inventory-declined** row leaves a felt liability gap.
- Whether "Czy Sentinel ma działający dostęp do tych terminów?" is clear for a manual-only owner.

### Do-not-touch

- §7 Option A authority doctrine — do not weaken; do not invent a Basic/Extended euro limit.
- §6 cleaning separation — do not turn SCO-01 into a checklist; **CLN-02 stays unbuilt**.
- The three fill-state discipline (`nie dotyczy` / `oczekuje na decyzję właściciela` / `oczekuje na pierwszą wizytę`).
- No new templates (CLN-02, REC-01, REC-03, SCO-04, AKC-02, etc.).

### Recommended next step

Proceed to **one fresh private-profile fill** (the Owner's stated order). Keep CLN-02 unbuilt until
SCO-01 also survives that fill. Then compare the two private-profile fills and **patch only if the Owner
approves**.

---

## Validation

- Test data entirely fictional; no real PII, addresses, codes, or property details.
- **No SCO-01 source modified**; no DOCX modified; no app/estimator/pricing/package/route/contact/legal
  code touched. This file is a new test-fill artifact only.
- Doctrine preserved: Option A intact · no Basic/Extended euro limit invented · SLA = timing not
  resolution · cleaning inside oversight · no concierge/rental/management drift · no codes recorded ·
  nothing marked customer-facing approved.
