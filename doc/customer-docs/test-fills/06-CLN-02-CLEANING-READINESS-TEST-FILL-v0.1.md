---
title: CLN-02 v0.1 — Instrumented Test Fill (Pre-arrival Readiness Clean)
status: internal test artifact
customer_facing: false
lawyer_review_required: false
owner_review_required: true
pathway: private-use-only
source_document: CLN-02 v0.1 (uncommitted; HEAD af00120)
version: test-fill-0.1
---

# 06 — CLN-02 CLEANING / READINESS TEST FILL — v0.1

> **FICTIONAL TEST DATA.** Every reference below is invented for form-testing only. No real personal
> data, no real property, no real codes. This is an instrumented simulation fill of **CLN-02 v0.1** —
> it approves nothing, is **not** a customer document, and is **not** customer-facing approved.

CLN-02 is a **per-event execution checklist**. It consumes scope from SCO-01; it does not set or change
scope. This fill runs **one** cleaning/readiness event to see whether the checklist works in the field.

---

## 1. Simulation header

| Field | Value |
|---|---|
| Source document version | **CLN-02 v0.1** (source + DOCX candidate; uncommitted) |
| Scenario name | **Pre-arrival readiness clean** |
| Related SCO-01 status | Cleaning / readiness **in scope** — Extended package, Sentinel cleaner, readiness included (from the Scenario B property, `SEN-PROP-TEST-001`) |
| Property / profile type | Private absence — apartment, owner abroad (Torrevieja area) *(FIKCYJNE)* |
| Event type | Gotowość przed przyjazdem właściciela + sprzątanie w ramach gotowości |
| Package context | Extended (context only — **authority not reopened here**) |
| Test-data warning | Fictional / internal test only. No real PII, property, or codes. |
| Fill mode | Sentinel cleaner performs the readiness clean; operator checks the record |

---

## 2. Filled CLN-02

### 1. Rekord zdarzenia

| Pole | Wartość |
|---|---|
| ID checklisty | `CLN-02 / SEN-PROP-TEST-001-CLN-0007` |
| Referencja nieruchomości | `SEN-PROP-TEST-001` |
| Data zdarzenia | symulacja — dzień −3 przed przyjazdem właściciela |
| Typ zdarzenia | ☒ gotowość przed przyjazdem właściciela · ☒ sprzątanie w ramach gotowości |
| Źródło terminu / trigger | termin przyjazdu przekazany przez właściciela mailem (zgodnie z SCO-01 §1) |
| Termin gotowości | na dzień przyjazdu; 5-dniowe powiadomienie dotrzymane |
| Osoba wykonująca | ☒ osoba Sentinel |
| Status zakresu z SCO-01 | ☒ w zakresie |
| Dostęp / pierwsza wizyta | ☒ dostęp potwierdzony (klucz w przechowaniu Sentinel) |

### 2. Przed rozpoczęciem

| Kontrola | OK | Problem / notatka |
|---|---|---|
| Dostęp działa | ☒ | — |
| Brak kodów / haseł wpisanych do checklisty | ☒ | potwierdzenie zasady *(patrz uwaga instrumentacyjna)* |
| Strefy prywatne / bez zdjęć sprawdzone | ☒ | zamknięta szafa sypialni + szafka w przedpokoju — nie wchodzić |
| Produkty / środki dostępne | — | **częściowo:** płyn do podłóg prawie pusty (patrz §3) |
| Pościel / pranie ustalone | ☒ | pranie po stronie właściciela; readiness bez prania |
| Brak widocznego ryzyka blokującego normalne sprzątanie | ☒ | — |

### 3. Produkty, środki i braki

| Pole | Wartość |
|---|---|
| Środki dostępne | ☒ częściowo |
| Braki produktów | płyn do podłóg prawie pusty — starczył na to sprzątanie, brak zapasu na kolejne |
| Zakup | ☒ brak zakupu (brak zgody właściciela na ten moment) |
| Notatka o brakach | zgłoszono; rekomendacja uzupełnienia przed następną gotowością; ewentualny zakup wymaga zgody właściciela |

### 4. Checklista wykonania — wnętrze

| Element | Wykonano | Nie dotyczy | Problem / notatka |
|---|---|---|---|
| Wejście / ogólny stan | ☒ | ☐ | — |
| Kuchnia | ☒ | ☐ | — |
| Łazienka | ☒ | ☐ | — |
| Sypialnia / pościel | ☒ | ☐ | pościel: właściciel (patrz §6) |
| Salon / przestrzeń dzienna | ☒ | ☐ | — |
| Podłogi | ☒ | ☐ | użyto resztki płynu; wystarczyło |
| Śmieci | ☒ | ☐ | — |
| Zapach / przewietrzenie | ☒ | ☐ | — |
| Widoczne uszkodzenia / plamy | ☐ | ☐ | drobna widoczna rysa na drzwiach szafki w przedpokoju — tylko obserwacja, bez diagnozy; zdjęcie referencyjne |

### 5. Balkon / taras / element zewnętrzny — jeśli w zakresie

| Element | Wykonano | Nie dotyczy | Problem / notatka |
|---|---|---|---|
| Widoczny stan | ☒ | ☐ | kontrola wizualna zgodnie z SCO-01 §3D |
| Meble zewnętrzne | ☐ | ☒ | — |
| Podłoga / powierzchnia | ☐ | ☒ | balkon poza zakresem sprzątania; SCO-01 = tylko kontrola wizualna |
| Śmieci / liście | ☐ | ☒ | — |
| Problem wymagający decyzji | ☐ | ☒ | — |

### 6. Pościel / pranie — jeśli w zakresie

| Pole | Wartość |
|---|---|
| Pościel zmieniona | ☒ nie dotyczy (właściciel zarządza własną pościelą) |
| Ręczniki | ☒ nie dotyczy |
| Pranie | ☒ nie dotyczy |
| Braki zapasu (pościel / ręczniki) | nie dotyczy |
| Decyzja właściciela potrzebna | ☒ nie |

### 7. Dowody przed / po

| Pole | Wartość |
|---|---|
| Zdjęcia „przed" | ☒ wymagane — wykonane |
| Zdjęcia „po" | ☒ wymagane — wykonane |
| Miejsca bez zdjęć | zamknięta szafa sypialni; szafka w przedpokoju (strefy prywatne) |
| Element wrażliwy widoczny; nie sfotografowano | ☒ nie dotyczy |
| Referencja dowodów | `SEN-ARCH-TEST-001 / CLN-0007` *(FIKCYJNY ref)* |

### 8. Wynik gotowości

| Pole | Wartość |
|---|---|
| Status końcowy | ☒ gotowe z uwagami: (1) płyn do podłóg do uzupełnienia przed kolejną gotowością; (2) drobna rysa na drzwiach szafki w przedpokoju — obserwacja |

### 9. Problemy i eskalacja

| Pole | Wartość |
|---|---|
| Widoczny problem | (1) niski stan płynu do podłóg; (2) drobna rysa na drzwiach szafki w przedpokoju |
| Co zrobiono | sprzątanie wykonane pozostałym środkiem; rysa udokumentowana zdjęciem referencyjnym; oba punkty ujęte w raporcie |
| Czego nie zrobiono | nie kupiono środka (brak zgody właściciela); nie oceniano rysy technicznie (bez diagnozy) |
| Potrzebny raport wizyty (REC-01)? | ☒ tak (uwagi + zdjęcia) |
| Potrzebny wniosek decyzyjny (REC-03)? | ☒ nie (brak pilnego płatnego działania; ewentualny zakup środka do ujęcia przy zwykłej decyzji, nie awaryjnie) |
| Potrzebny kontakt z właścicielem? | ☒ nie (raport wystarczy; brak pilnej decyzji) |

### 10. Potwierdzenie wykonania

| Pole | Wartość |
|---|---|
| Osoba wykonująca | osoba sprzątająca Sentinel (symulacja) |
| Osoba sprawdzająca (jeśli dotyczy) | operator Sentinel (symulacja) |
| Data / godzina | symulacja — brak realnej daty |
| Notatki końcowe | lokal gotowy na przyjazd; dwie uwagi przekazane do raportu |
| Status przekazania właścicielowi / do raportu | ☒ w raporcie REC-01 |

### 11. Granice checklisty

Sekcja statyczna — potwierdzona. Checklista udokumentowała widoczną gotowość i wykonane czynności; nie
jest certyfikatem higieny ani inspekcją techniczną; nie zastąpiła SCO-01 i nie zmieniła zakresu; nie
utworzyła nowego uprawnienia do wydatku.

---

## 3. Fill instrumentation

| Instrument | Result |
|---|---|
| **Estimated field fill time** | **~10–15 min**, filled during/after the clean. The `nie dotyczy` sections (§5 exterior cleaning, §6 linen) were skipped in seconds. |
| **True blanks left** | 0 — every field resolved to a value, a tick, or `nie dotyczy` / `problem`. |

### Sections that were clear

- §1 record — event type, trigger, scope-status pulled straight from SCO-01; fast.
- §4 interior grid — the *Wykonano / Nie dotyczy / Problem* columns are exactly how a cleaner thinks; the one issue (scratch) dropped naturally into the Problem column.
- §7 evidence + §8 readiness status — clean, unambiguous.
- §9 escalation — the REC-01/REC-03/contact flags made "what happens next" explicit without extra prose.

### Sections that caused hesitation

- **§2 "Brak kodów / haseł wpisanych do checklisty" → OK tick.** Confirmed the concern: ticking **OK** for a *negative rule* ("I did **not** write codes") reads slightly oddly — it's a rule-confirmation dressed as a task check. It works, but a cleaner could misread it. **Watch-point, not blocker.**
- **§5 balcony** — the property's balcony is *visual-only* in SCO-01, so every **cleaning** row went `nie dotyczy` while only "widoczny stan" was ticked. The grid handled it, but a "balcony not in cleaning scope → skip" hint would speed it up.

### Rows that felt overkill (this scenario)

- §6 linen — all `nie dotyczy` (owner manages linen). Correct, but a full 5-row table for "not applicable" is heavier than needed here.
- §5 exterior cleaning rows — same, four `nie dotyczy` for a visual-only balcony.

### Missing rows for this scenario

- No explicit **"recommendation for next event"** field — the "refill floor cleaner before next readiness" note had to ride in §3 notatka + §8 status. Minor; a one-line "rekomendacja na kolejne zdarzenie" row would fit naturally.

### Targeted answers to the three review concerns

1. **Does the §2 "no codes written" OK tick feel weird in use?** — Slightly, yes. Usable but reads as a rule-confirmation, not an action. Candidate for rewording later (e.g. "Potwierdzam: nie wpisano kodów/haseł") — **do not patch before more use.**
2. **Is the 6-page length too long for a routine readiness clean?** — **No.** Field-usable; the not-in-scope sections skip fast. Length felt proportional, not exhausting.
3. **Are REC-01 / REC-03 references acceptable before those working docs exist?** — **Yes.** They function as "this event needs a report / needs a decision" flags, not as hard dependencies. Nothing broke by referencing them early.

### Boundary / doctrine checks

- **Reopens SCO-01 scope?** **No.** CLN-02 pulled scope *from* SCO-01 (balcony visual-only, linen = owner, Sentinel cleaner) and respected it; it defined nothing.
- **Stays out of legal/authority/contract?** **Yes.** The low-supply case resolved as "no purchase without owner approval" — it referenced the rule, invented no spend authority, created no contract language.
- **Actionable enough for repeated use?** **Yes.** Grids + readiness status + escalation give a repeatable, compact per-event record.

---

## 4. Verdict

### `simulation-pass`

CLN-02 v0.1 worked as a field checklist for one readiness event: fast to fill, zero forced fake data,
the one small problem (low supply + minor scratch) dropped into the right rows, and it stayed strictly
downstream of SCO-01 — no scope reopened, no authority invented, no contract drift.

### Must-fix before commit

- **None.** v0.1 is accept-and-use ready as a Level 2 working candidate.

### Test later (do not pre-solve)

- §2 "no codes written" OK-tick wording (rule-confirmation vs task check).
- Whether §5/§6 deserve a "not in scope → skip this section" hint for visual-only / owner-linen properties.
- Whether small supply refills want a lightweight REC-03 or just a REC-01 note (this fill chose REC-01 note).
- Whether a one-line "recommendation for next event" row is worth adding.

### Do-not-touch

- SCO-01-as-scope-source boundary; no-new-spend-authority rule; Option A (no Basic/Extended euro limit).
- The interior/exterior tick-grid shape; the escalation flag block.

### Recommended next step

**Accept CLN-02 v0.1 as a Level 2 working candidate and commit** (with the pending `af00120` tracking
commit): CLN-02 source + DOCX + register update + this fill. Then continue the beta-readable set
(REC-01 / REC-03 / AKC-03). Carry the "test later" items as watch-points; batch any wording change into
a single v0.2 **only if the Owner approves** after more real use.

---

## Validation

- Test data entirely fictional; no real PII, addresses, or codes.
- **No CLN-02 source/DOCX modified**; no SCO-01 source/DOCX modified; no template created; no app/code
  touched. This file is a new test-fill artifact only.
- Doctrine preserved: CLN-02 executes, SCO-01 decides · no new spend authority · no Basic/Extended euro
  limit · owner-selected-cleaner result not guaranteed · no codes recorded · nothing customer-facing
  approved.
