---
title: REC-01 v0.1 — Instrumented Test Fill (Scenario B Visit Report)
status: internal test artifact
customer_facing: false
lawyer_review_required: false
owner_review_required: true
pathway: private-use-only
source_document: REC-01 v0.1 (uncommitted; HEAD 743f5dc)
version: test-fill-0.1
---

# 07 — REC-01 VISIT REPORT TEST FILL — SCENARIO B — v0.1

> **FICTIONAL TEST DATA.** Every reference below is invented for form-testing only. No real personal
> data, no real address, no real codes. This is an instrumented simulation fill of **REC-01 v0.1** — it
> approves nothing, is **not** a customer document, and is **not** customer-facing approved.

Chain under test: **SCO-01 scope → CLN-02 cleaning event → REC-01 owner report → (maybe) REC-03 flag.**
This report covers the same pre-arrival readiness visit whose cleaning was recorded in CLN-02 event
`CLN-0007` (test fill 06).

---

## 1. Simulation header

| Field | Value |
|---|---|
| Source document version | **REC-01 v0.1** (source + DOCX candidate; uncommitted) |
| Scenario name | **Scenario B — pre-arrival readiness visit report** |
| Related SCO-01 status | Scope in effect — Extended, private absence, readiness + keyholding in scope, balcony visual-only (`SEN-PROP-TEST-001`) |
| Related CLN-02 reference / status | `CLN-0007` — **gotowe z uwagami** (floor cleaner low; minor scratch) |
| Property / profile type | Private absence — apartment, owner abroad (Torrevieja area) *(FIKCYJNE)* |
| Visit type | Gotowość przed przyjazdem właściciela |
| Package context | Extended (context only — authority not reopened) |
| Paid action / REC-03 | **No paid action taken; no urgent REC-03** (one latent owner decision surfaced — see §8) |
| Test-data warning | Fictional / internal test only. No real PII, property, or codes. |

---

## 2. Filled REC-01

### 1. Rekord raportu

| Pole | Wartość |
|---|---|
| ID raportu | `REC-01 / SEN-PROP-TEST-001-VR-0007` |
| Referencja nieruchomości | `SEN-PROP-TEST-001` |
| Data i godzina wizyty | symulacja — dzień −3 przed przyjazdem, ok. 90 min |
| Typ wizyty | ☒ gotowość przed przyjazdem właściciela |
| Pakiet / kontekst | ☒ Rozszerzony / Extended |
| Operator | operator Sentinel (symulacja) |
| Źródło zakresu | ☒ SCO-01 |
| Powiązane dokumenty | ☒ CLN-02 (`CLN-0007`) · ☐ rekord dostępu AKC · ☐ REC-03 |
| Język raportu | ☒ PL |
| Status raportu | ☒ roboczy (test — nie wysłany) |

### 2. Cel wizyty i zakres wykonany

| Pole | Wartość |
|---|---|
| Cel wizyty | Przygotowanie lokalu na przyjazd właściciela: sprawdzenie stanu, gotowość, sprzątanie w ramach gotowości. |
| Co było w zakresie tej wizyty | nadzór wizyty; przechowanie kluczy (wejście/zamknięcie); sprzątanie w ramach gotowości (CLN-0007); kontrola wizualna balkonu |
| Co nie było w zakresie | sprzątanie rotacyjne; kontrola po gościach; dostęp wykonawcy — brak gości i brak wykonawcy |
| Czego nie sprawdzono i dlaczego | wnętrze zamkniętej szafy sypialni i szafki w przedpokoju — strefy prywatne, nie wchodzić (SCO-01 §5) |
| Status wykonania | ☒ wykonano zgodnie z zakresem |

### 3. Dostęp i przebieg wejścia

| Pole | Wartość |
|---|---|
| Dostęp uzyskany | ☒ tak |
| Metoda dostępu | ☒ klucz fizyczny |
| Problem z wejściem | ☒ brak |
| Obecne role podczas wizyty | operator Sentinel + osoba sprzątająca Sentinel |
| Uwaga o kluczach / dostępie | klucz w przechowaniu Sentinel; brak systemu kodowego; żadnych kodów nie zapisano |

### 4. Podsumowanie dla właściciela

Wizyta gotowości wykonana. Lokal sprawdzony i przygotowany na przyjazd — bez istotnych problemów. Dwie
drobne uwagi: kończy się płyn do podłóg (brak zapasu na kolejne sprzątanie, nic nie kupiono bez Państwa
zgody) oraz drobna, widoczna rysa na drzwiach szafki w przedpokoju (tylko obserwacja, ze zdjęciem). Żadne
działanie płatne nie było potrzebne i żadne nie zostało wykonane.

### 5. Obserwacje według obszaru

| Obszar | Widoczny stan / obserwacja | Dowód / zdjęcie ref | Status |
|---|---|---|---|
| Wejście / ogólny stan | drobna widoczna rysa na drzwiach szafki w przedpokoju; bez diagnozy | EV-SB-0007-02 | uwaga |
| Kuchnia | bez uwag | EV-SB-0007-03 | bez uwag |
| Łazienka | bez uwag | EV-SB-0007-04 | bez uwag |
| Sypialnia / salon | bez uwag; strefy prywatne nienaruszone | EV-SB-0007-05 | bez uwag |
| Balkon / taras / element zewnętrzny | kontrola wizualna; odpływ drożny, stan w porządku | EV-SB-0007-06 | bez uwag |
| Komunikaty wspólnoty / budynku | brak nowych komunikatów widocznych podczas wizyty | — | bez uwag |
| Zawory / wyłączniki (jeśli widoczne i istotne) | nie sprawdzono — poza zakresem tej wizyty | — | poza zakresem |
| Inne | brak dodatkowych uwag | — | bez uwag |

### 6. Sprzątanie / gotowość — jeśli dotyczy

| Pole | Wartość |
|---|---|
| Sprzątanie / gotowość w tej wizycie | ☒ tak |
| Referencja CLN-02 | `CLN-0007` |
| Wynik gotowości | ☒ gotowe z uwagami: niski stan płynu do podłóg; drobna rysa (obserwacja) |
| Wyjątki / uwagi | balkon — tylko kontrola wizualna (bez sprzątania, zgodnie z SCO-01) |
| Dowód przed / po (ref) | EV-SB-0007-08 (przed) · EV-SB-0007-09 (po) |
| Problem ze środkami / pościelą | ☒ tak: płyn do podłóg prawie pusty; pościel — nie dotyczy (właściciel) |

### 7. Znalezione problemy / uwagi

| Pole | Wartość |
|---|---|
| ID uwagi | `SEN-PROP-TEST-001-VR-0007-U1` |
| Widoczny fakt (bez diagnozy) | Drobna widoczna rysa na drzwiach szafki w przedpokoju. |
| Znaczenie operacyjne | Kosmetyczne; brak wpływu na bezpieczeństwo lub gotowość. |
| Co Sentinel zrobił | Udokumentował zdjęciem referencyjnym; ujął w raporcie. |
| Czego Sentinel nie zrobił / nie sprawdzono | Nie oceniał przyczyny ani stanu technicznego; bez diagnozy. |
| Czy decyzja właściciela potrzebna? | ☒ nie |
| Czy potrzebny REC-03? | ☒ nie |
| Podstawa uprawnienia (jeśli działanie) | nie dotyczy — brak działania płatnego |
| Dowód ref | EV-SB-0007-02 |

Uwaga: niski stan płynu do podłóg potraktowano jako sprawę zaopatrzenia (§6 + §8), nie jako osobną
uwagę wymagającą decyzji — nie było działania płatnego ani potrzeby diagnozy.

### 8. Decyzje i dalsze kroki

| Pole | Wartość |
|---|---|
| Wynik decyzyjny | ☒ wizyta kontrolna / obserwacja przy kolejnej wizycie (rysa) |
| Płatne działanie w tej wizycie | ☒ brak płatnego działania |
| Termin decyzji właściciela (jeśli dotyczy) | brak pilnego terminu |

Uwaga do rozważenia przez właściciela (nie pilna): uzupełnienie płynu do podłóg przed kolejną gotowością.
Ewentualny zakup przez Sentinel to płatne działanie i w pakiecie Extended wymaga zgody właściciela;
nie wykonano go i nie utworzono uprawnienia do wydatku.

### 9. Zdjęcia i dowody

| Pole | Wartość |
|---|---|
| Referencja zestawu dowodów | `SEN-ARCH-TEST-001 / REC-01 / VR-0007` *(FIKCYJNY ref)* |
| Wybrane zdjęcia dostarczone | ☒ email z raportem · ☒ link z archiwum |
| Pełny zestaw w archiwum | ☒ tak — ref: `SEN-ARCH-TEST-001 / VR-0007` |
| Element wrażliwy widoczny; nie sfotografowano | ☒ nie dotyczy |

### 10. Granice raportu

Sekcja statyczna — potwierdzona. Raport podał widoczne fakty; nie postawił diagnozy technicznej; nie jest
certyfikatem higieny ani stanu technicznego; nie zmienił zakresu z SCO-01; nie utworzył uprawnienia do
wydatku.

### 11. Dostarczenie raportu

| Pole | Wartość |
|---|---|
| Dostarczono do | właściciel (email) — symulacja, nie wysłano |
| Kanał dostarczenia | ☒ email · ☒ link z archiwum |
| Data / godzina dostarczenia | symulacja — brak realnej daty |
| Referencja archiwum | `SEN-ARCH-TEST-001 / VR-0007` |
| Punkty nierozstrzygnięte | rysa do obserwacji przy kolejnej wizycie; ewentualne uzupełnienie płynu do podłóg (za zgodą właściciela) |
| Termin działania właściciela (jeśli dotyczy) | brak pilnego terminu |

---

## 3. Fill instrumentation

| Instrument | Result |
|---|---|
| **Estimated report fill time** | **~12–18 min** after the visit, with CLN-0007 in hand. Most time went to §4 prose + §5 observations. |
| **True blanks left** | 0 — every field resolved to a value, tick, `nie dotyczy`, `poza zakresem`, or `nie sprawdzono`. |

- **§4 owner prose summary — natural or awkward?** **Natural.** Writing 3 sentences for the owner was faster and warmer than a grid, and it reads like a report an owner would actually open. The design choice (prose, not table) was right.
- **Did visit type need multi-select?** **Not here** — a routine readiness visit is single-context. (The old first-verification case would still want multi-context; not exposed by this scenario. Single-select + the "inna" catch was enough.)
- **§5 status column — free text or checkbox-like?** Worked as free text; the four legend values (bez uwag / uwaga / decyzja właściciela / poza zakresem) were enough. A careful operator stayed consistent, but free text invites drift — a controlled value would harden it. **Watch-point.**
- **§6 summarize CLN-02 without repeating?** **Yes.** One CLN-02 ref + readiness result + supply flag + before/after refs. It did not restate the cleaning checklist.
- **§7 single-finding block with two small issues?** Held — because the two issues split *honestly*: the scratch is a visible-fact finding (§7), the low supply is a supply/next-step matter (§6 + §8). The single block was not strained. **But** if a visit ever has two *decision-bearing* findings, the block must be duplicated by hand — worth a "repeat per finding" affordance later.
- **REC-03 flagging clear?** **Yes.** REC-01 determined **no urgent REC-03**, and still surfaced a *latent* owner decision (restock approval) in §8 without inventing a decision request. Clean separation.
- **Owner-readable vs internal checklist?** Owner-readable — summary first, detail after; no cleaning-checklist creep.
- **Boundaries enough but not exhausting?** Yes — §10 six lines, proportional; authority rule stated once in §8.
- **Anything still feels like system scaffolding?** Minor: §5 free-text status; §7 single block for a potential multi-finding visit. Neither blocked the fill.

---

## 4. Chain test

- **Did SCO-01 provide enough scope?** **Yes** — package, in-scope modules, restricted zones, balcony-visual-only, and authority all pulled cleanly into the report.
- **Did CLN-02 provide enough cleaning evidence?** **Yes** — `CLN-0007` gave the readiness result ("gotowe z uwagami"), before/after refs, and the supply flag; REC-01 referenced them without duplication.
- **Did REC-01 summarize CLN-02 correctly?** **Yes** — §6 is a summary + reference, not a repeat of the checklist.
- **Did REC-01 identify whether REC-03 is needed?** **Yes** — decided *no urgent* REC-03; surfaced a latent owner-approval item (restock) as a note, not a forced decision request.
- **Did any missing sibling document block the report?** **No.** AKC record and REC-03 are referenced as optional flags; neither is required to complete the report. Evidence archive refs are fictional placeholders. Nothing blocked.

---

## 5. Verdict

### `simulation-pass`

REC-01 v0.1 turned one readiness visit into a clean, owner-readable record: it summarized CLN-02 without
becoming a cleaning checklist, correctly decided **no urgent REC-03** while surfacing a latent owner
decision, took no paid action, invented no spend authority, and stayed strictly in visible-facts /
no-diagnosis territory. The chain SCO-01 → CLN-02 → REC-01 held end-to-end with zero forced fake data.

### Must-fix before commit

- **None.** v0.1 is accept-and-use ready as a Level 2 working candidate.

### Test later (do not pre-solve)

- §5 status column: free text vs a controlled value set (drift risk).
- §7: a "repeat per finding" affordance for multi-finding visits.
- Visit type: multi-context (first-verification + readiness) — latent, not exposed by this routine visit.

### Do-not-touch

- Visible-facts / no-diagnosis boundary; no-new-spend-authority; Option A (no Basic/Extended euro limit).
- §6 CLN-02 summary discipline (summary + ref, never repeat).
- REC-03 as a *flag*, never a decision form inside REC-01.
- §4 owner prose summary (human, not a table).

### Recommended next step

**Accept REC-01 v0.1 as a Level 2 working candidate and commit** (REC-01 source + DOCX + register update
+ this fill). Then build **REC-03**, now informed by what REC-01 actually surfaces: an urgent finding →
decision request, and the distinction between an urgent REC-03 and a latent "owner may decide later"
note. Carry the three "test later" items as watch-points; batch any change into a single v0.2 **only if
the Owner approves**.

---

## Validation

- Test data entirely fictional; no real PII, addresses, or codes.
- **No REC-01 source/DOCX modified**; no SCO-01 or CLN-02 source/DOCX modified; no template created; no
  app/code touched. This file is a new test-fill artifact only.
- Doctrine preserved: visible facts only · no diagnosis · REC-01 ≠ REC-03 · REC-01 ≠ CLN-02 · no new
  spend authority · no Basic/Extended euro limit · SLA = timing not resolution · nothing customer-facing
  approved.
