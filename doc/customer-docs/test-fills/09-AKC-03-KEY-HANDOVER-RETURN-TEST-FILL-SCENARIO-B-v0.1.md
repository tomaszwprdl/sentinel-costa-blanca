---
title: AKC-03 v0.1 — Instrumented Test Fill (Scenario B Key Handover)
status: internal test artifact
customer_facing: false
lawyer_review_required: false
owner_review_required: true
pathway: private-use-only
source_document: AKC-03 v0.1 (uncommitted; HEAD dca3439)
version: test-fill-0.1
---

# 09 — AKC-03 KEY HANDOVER / RETURN TEST FILL — SCENARIO B — v0.1

> **FICTIONAL TEST DATA.** Every reference below is invented for form-testing only. No real personal
> data, no real address, no real codes. This is an instrumented simulation fill of **AKC-03 v0.1** — it
> approves nothing, is **not** a customer document, and is **not** customer-facing approved.

Custody event under test: **owner → Sentinel handover of 3 physical keys**, no digital access, no
secrets. This is the handover SCO-01 §5 and REC-01 kept deferring to "a separate receipt (AKC-03)."

**This is a HANDOVER event, not a return.** The return block (§7B) is deliberately left future / not
applicable.

---

## 1. Simulation header

| Field | Value |
|---|---|
| Source document version | **AKC-03 v0.1** (source + DOCX candidate; uncommitted) |
| Scenario name | **Scenario B — owner → Sentinel key handover** |
| Related SCO-01 status | Keyholding / access **in scope** — Extended, private absence (`SEN-PROP-TEST-001`) |
| Property / profile type | Private absence — apartment, owner abroad (Torrevieja area) *(FIKCYJNE)* |
| Event type | Przekazanie: właściciel → Sentinel |
| Package context | Extended (context only) |
| Key / access context | 3 klucze fizyczne (apartament / budynek / skrzynka); brak dostępu cyfrowego |
| Secrets recorded | **None** — internal key refs only; no address, no codes/PINs |
| Test-data warning | Fictional / internal test only. |

---

## 2. Filled AKC-03

### 1. Rekord zdarzenia

| Pole | Wartość |
|---|---|
| ID potwierdzenia | `AKC-03 / SEN-PROP-TEST-001-KH-0001` |
| Referencja nieruchomości | `SEN-PROP-TEST-001` (bez pełnego adresu) |
| Data / godzina | symulacja — dzień onboardingu |
| Typ zdarzenia | ☒ przekazanie: właściciel → Sentinel |
| Powiązany SCO-01 / pisemne potwierdzenie | `SCO-01 / SEN-PROP-TEST-001` |
| Osoba przekazująca | właściciel *(FIKCYJNE)* |
| Osoba odbierająca | operator Sentinel (symulacja) |
| Miejsce przekazania | Torrevieja (obszar; bez pełnego adresu) |
| Status dokumentu | ☒ potwierdzony |

### 2. Zakres dostępu z SCO-01

| Pole | Wartość |
|---|---|
| Przechowanie / dostęp w zakresie? | ☒ tak |
| Dozwolone użycie | ☒ planowa wizyta · ☒ gotowość / sprzątanie |
| Ograniczenia | ☒ strefy prywatne (zamknięta szafa sypialni, szafka w przedpokoju) · ☒ strefy bez zdjęć |

### 3. Przekazywane elementy fizyczne

| Wewn. ref | Typ | Ilość | Widoczny stan | Uwagi |
|---|---|---|---|---|
| `SEN-K-T001-A` | klucz apartamentu | 1 | dobry | — |
| `SEN-K-T001-B` | klucz budynku / wspólnoty | 1 | dobry | — |
| `SEN-K-T001-C` | klucz skrzynki | 1 | zużyta widoczna etykieta | etykieta nieczytelna, ale nie ujawnia adresu |
| — | nie dotyczy | — | — | brak dalszych elementów (bez garażu, bez pilota / karty / fob) |

### 4. Dostęp cyfrowy / smart lock / alarm — jeśli dotyczy

| Pole | Wartość |
|---|---|
| Rodzaj dostępu cyfrowego | ☒ nie dotyczy |
| Status | ☒ nie dotyczy |
| Kto kontroluje dane dostępowe | nie dotyczy |
| Czy zapisano tu dane dostępowe? | ☒ nie |
| Uwaga o cofnięciu / wygaśnięciu | nie dotyczy |
| Wynik testu (bez kodu) | nie dotyczy — brak dostępu cyfrowego |

### 5. Test dostępu przy odbiorze

| Pole | Wartość |
|---|---|
| Klucz fizyczny | ☒ przetestowany, działa (apartament + budynek) |
| Dostęp do budynku / części wspólnych | ☒ przetestowany, działa |
| Dostęp cyfrowy | ☒ nie dotyczy |
| Opis problemu | klucz skrzynki (`SEN-K-T001-C`) **nie testowany** przy przekazaniu |
| Potrzebny dalszy krok | sprawdzić klucz skrzynki przy najbliższej planowej wizycie |

### 6. Zdjęcia / dowody przekazania

| Pole | Wartość |
|---|---|
| Zdjęcie zestawu kluczy | ☒ wykonane |
| Ograniczenia zdjęć | bez etykiet adresowych; zużyta etykieta skrzynki ujęta bez ujawniania adresu |
| Referencja dowodu | `EV-KH-0001` *(FIKCYJNY ref)* |
| Oznaczenia wrażliwe ukryte / wykadrowane | ☒ tak |

### 7. Potwierdzenie odbioru / zwrotu

#### A. Przekazanie do Sentinel

| Pole | Wartość |
|---|---|
| Przekazał(a) | właściciel *(FIKCYJNE)* |
| Odebrał(a) | operator Sentinel (symulacja) |
| Data / godzina | symulacja — dzień onboardingu |
| Liczba potwierdzona | ☒ tak (3 klucze) |
| Widoczny stan potwierdzony | ☒ tak (uwaga: zużyta etykieta skrzynki) |
| Uwagi | 3 klucze przyjęte; klucz skrzynki nie testowany przy przekazaniu |
| Potwierdzenie (bez podpisu prawnego) | potwierdzone przez obie strony (symulacja) |

#### B. Zwrot od Sentinel

| Pole | Wartość |
|---|---|
| Zwrócił(a) | **nie dotyczy — zdarzenie przyszłe** (zwrot końcowy) |
| Odebrał(a) | nie dotyczy |
| Data / godzina | nie dotyczy — wypełnić przy zwrocie |
| Liczba potwierdzona | nie dotyczy |
| Widoczny stan przy zwrocie | nie dotyczy |
| Różnice / braki / problem | nie dotyczy |
| Potwierdzenie (bez podpisu prawnego) | nie dotyczy — wypełnić przy zwrocie |

### 8. Różnice, braki, problem z dostępem

| Pole | Wartość |
|---|---|
| Problem | Klucz skrzynki nie przetestowany przy przekazaniu; zużyta etykieta. |
| Widoczny fakt | Etykieta skrzynki zużyta i nieczytelna; nie ujawnia adresu. Klucz nie sprawdzony w zamku. |
| Co Sentinel zrobił | Odnotował; sfotografował bez ujawniania adresu; zaplanował test przy najbliższej wizycie. |
| Czego Sentinel nie zrobił | Nie testował klucza skrzynki; nie oceniał zamka technicznie. |
| Dalszy krok | ☒ raport REC-01 (odnotować test skrzynki przy wizycie) |

### 9. Granice potwierdzenia

Sekcja statyczna — potwierdzona. Dokument odnotował przekazanie i status dostępu; nie zastąpił SCO-01;
nie utworzył uprawnień dostępu ponad SCO-01; nie zapisał żadnych kodów ani haseł; nie diagnozował zamka;
nie utworzył nieograniczonej odpowiedzialności.

### 10. Notatki operatora / archiwum

| Pole | Wartość |
|---|---|
| Referencja archiwum | `SEN-ARCH-TEST-001 / AKC-03 / KH-0001` *(FIKCYJNY ref)* |
| Powiązane dokumenty | `SCO-01 / SEN-PROP-TEST-001`; później AKC-02 / AKC-04 |
| Przygotował(a) | operator Sentinel (symulacja) |
| Sprawdził(a) | — |
| Potrzebna aktualizacja | test klucza skrzynki przy pierwszej planowej wizycie |

---

## 3. Fill instrumentation

| Instrument | Result |
|---|---|
| **Estimated fill time** | **~6–10 min.** The core path (§1 record → §3 items → §5 test → §7A handover) is fast; the N/A sections were ticked in seconds. |
| **True blanks left** | 0 — every field resolved to a value, tick, or `nie dotyczy`. |

- **Are the 4 blank rows in §3 enough for a normal key set?** **Yes.** Three keys used, one spare row left. Comfortable default for a typical apartment; a larger set adds rows. Four is sensible.
- **§4 digital-access section — useful coverage or overhead here?** Mild **overhead**: six rows all `nie dotyczy` for a key-only handover. Fast to mark, but it is visible bulk. **Watch-point:** a single "dostęp cyfrowy: nie dotyczy" toggle at the section head could collapse it when not relevant.
- **§7 A/B blocks — clear or confusing for a handover-only event?** Clear **once B is explicitly marked "nie dotyczy — zdarzenie przyszłe."** The risk is an operator leaving B blank (ambiguous) instead of marking it future. It worked here by explicit marking. **Watch-point:** a "to zdarzenie = przekazanie / zwrot" selector at the top of §7 would remove the ambiguity entirely.
- **"potwierdzenie bez podpisu prawnego" — sufficient as operational evidence?** **Yes.** A both-parties confirmation reads as adequate operational proof for an internal working receipt; a final legal signature remains a lawyer-gate item, correctly out of scope here.
- **No-address / no-secrets rules easy to follow?** **Very easy.** Internal key refs (`SEN-K-T001-A/B/C`), area only, the worn label explicitly noted "nie ujawnia adresu," no codes anywhere.
- **Does AKC-03 accidentally become an AKC-01 legal annex?** **No** — no liability wording; identity line states "nie jest aneksem odpowiedzialności."
- **Does AKC-03 accidentally become an AKC-02 full register?** **No** — one event only; AKC-02 referenced as a *later* related document.
- **Field-usable and short enough?** **Yes** — the filled core is ~2–3 pages for 3 keys; not overbuilt. The N/A sections (§4 digital, §7B return) add length but skim fast.
- **Did any missing sibling document block completion?** **No** — completed standalone without AKC-02; the mailbox-key follow-up routes to REC-01. Nothing blocked.

### Minor finding

- **§5 is per-category, not per-key.** With apartment + building tested but mailbox untested, the single "Klucz fizyczny" row couldn't hold a mixed state; I recorded the mailbox exception in the problem note (§5) and §8. It worked, but per-key test capture would be cleaner. **Watch-point, not a blocker.**

---

## 4. Custody-path test

- **Can handover be completed without AKC-02 existing?** **Yes** — AKC-03 stands alone; AKC-02 is referenced only as a later related record.
- **Can return be left open/future without ambiguity?** **Yes** — §7B explicitly "nie dotyczy — zdarzenie przyszłe; wypełnić przy zwrocie."
- **Can digital access be marked not applicable cleanly?** **Yes** — §4 all `nie dotyczy`, credential-not-recorded = "nie."
- **Can physical key condition/count be recorded without full address or secrets?** **Yes** — internal refs + count + visible condition; worn label noted without exposing an address.
- **Would an access problem route cleanly to REC-01 / REC-03 later?** **Yes** — §8 "Dalszy krok" ticks REC-01 for the mailbox re-test; a genuine access failure could instead route to REC-03. Clean.

---

## 5. Verdict

### `simulation-pass`

AKC-03 v0.1 recorded a simple 3-key handover cleanly and quickly, without feeling overbuilt on the core
path. It kept no secrets and no address, marked digital access and the return block cleanly as
not-applicable/future, stayed a custody receipt (not a legal annex, not a full register), and routed the
one small exception (untested mailbox key) to a follow-up without inventing liability or diagnosis.

### Must-fix before commit

- **None.** v0.1 is accept-and-use ready as a Level 2 working candidate.

### Test later (do not pre-solve)

- §4 digital-access section: a collapse/"nie dotyczy" toggle for physical-key-only handovers.
- §7: a "przekazanie / zwrot" event selector at the top to remove B-block ambiguity.
- §5: per-key (not per-category) access-test capture for mixed test states.

### Do-not-touch

- No-secrets / no-address rules; SCO-01-as-scope-source; not-a-legal-annex / not-a-full-register identity.
- Both handover and return supported in one template; digital access as **status only**.

### Recommended next step

**Accept AKC-03 v0.1 as a Level 2 working candidate and commit/push** (AKC-03 source + DOCX + register
update + this fill). That **completes the minimum beta-readable set** (SCO-01, CLN-02, REC-01, REC-03,
AKC-03). Then update tracking and prepare the beta package. Carry the three "test later" items as
watch-points; batch any change into a single v0.2 **only if the Owner approves**.

---

## Validation

- Test data entirely fictional; no real PII, addresses, or codes.
- **No AKC-03 source/DOCX modified**; AKC-03 stub not modified; no SCO-01, CLN-02, REC-01, or REC-03
  source/DOCX modified; no template created; no app/code touched. This file is a new test-fill artifact
  only.
- Doctrine preserved: records custody only · SCO-01 decides scope · no codes/address · digital access as
  status only · not a legal annex · not a full register · no unlimited liability · nothing
  customer-facing approved.
