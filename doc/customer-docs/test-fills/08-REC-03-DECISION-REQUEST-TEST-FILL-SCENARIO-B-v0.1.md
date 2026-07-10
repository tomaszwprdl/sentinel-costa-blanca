---
title: REC-03 v0.1 — Instrumented Test Fill (Scenario B Decision Request)
status: internal test artifact
customer_facing: false
lawyer_review_required: false
owner_review_required: true
pathway: private-use-only
source_document: REC-03 v0.1 (uncommitted; HEAD f360ec1)
version: test-fill-0.1
---

# 08 — REC-03 DECISION REQUEST TEST FILL — SCENARIO B — v0.1

> **FICTIONAL TEST DATA.** Every reference below is invented for form-testing only. No real personal
> data, no real address, no real codes. This is an instrumented simulation fill of **REC-03 v0.1** — it
> approves nothing, is **not** a customer document, and is **not** customer-facing approved.

Chain under test: **SCO-01 scope → CLN-02 event → REC-01 finding → REC-03 decision request.** This
request arises from a REC-01 visit-report finding (visible bathroom damp trace) that needs an owner
decision before any paid/technician action, because the package is Extended.

**Response state: the request is SENT and AWAITING owner response.** §9 is deliberately left open — the
owner has not yet approved anything.

---

## 1. Simulation header

| Field | Value |
|---|---|
| Source document version | **REC-03 v0.1** (source + DOCX candidate; uncommitted) |
| Scenario name | **Scenario B — bathroom damp finding, decision request** |
| Related SCO-01 status | Scope in effect — Extended, private absence (`SEN-PROP-TEST-001`) |
| Related REC-01 reference / status | `REC-01 / SEN-PROP-TEST-001-VR-0008`, finding **F1** — sent |
| Property / profile type | Private absence — apartment, owner abroad (Torrevieja area) *(FIKCYJNE)* |
| Package context | Extended |
| Authority context | **Extended = owner approval required before any paid action / vendor spend** (Option A) |
| Decision needed | Whether Sentinel should ask a technician for availability + an indicative estimate, or wait/observe, or the owner handles it |
| Paid action taken before approval | **None** |
| Test-data warning | Fictional / internal test only. No real PII, property, or codes. |

---

## 2. Filled REC-03

### 1. Rekord wniosku

| Pole | Wartość |
|---|---|
| ID wniosku | `REC-03 / SEN-PROP-TEST-001-DR-0002` |
| Referencja nieruchomości | `SEN-PROP-TEST-001` |
| Data wniosku | symulacja — dzień wizyty |
| Powiązany raport REC-01 | `REC-01 / SEN-PROP-TEST-001-VR-0008` |
| Powiązana uwaga / dowód | uwaga F1; `EV-SB-0008-06`, `EV-SB-0008-07` |
| Pakiet / kontekst | ☒ Rozszerzony / Extended |
| Źródło uprawnienia | ☒ SCO-01 |
| Status wniosku | ☒ wysłany |
| Termin odpowiedzi właściciela | symulacja — +72h (domyślny termin decyzji z SCO-01) |

### 2. Krótkie podsumowanie dla właściciela

Podczas wizyty gotowości zauważyliśmy widoczny ślad wilgoci przy brodziku w łazience. Nie postawiliśmy
diagnozy i nie podejmowaliśmy żadnego płatnego działania. Prosimy o decyzję, czy mamy poprosić technika o
dostępność i orientacyjną wycenę oględzin, czy wolą Państwo, żebyśmy poczekali i sprawdzili stan przy
kolejnej wizycie. Do czasu Państwa decyzji nic nie zlecamy.

### 3. Widoczny fakt i źródło

| Pole | Wartość |
|---|---|
| Widoczny fakt (z REC-01) | Widoczny ślad wilgoci / przebarwienie u podstawy ściany przy brodziku w łazience. |
| Referencja dowodu | `EV-SB-0008-06` (ogólny), `EV-SB-0008-07` (zbliżenie) |
| Co Sentinel zaobserwował | Niewielkie widoczne zawilgocenie/przebarwienie; brak widocznego czynnego wycieku podczas wizyty. |
| Czego Sentinel nie zdiagnozował | Przyczyny, źródła wilgoci ani stanu uszczelnienia — bez oceny technicznej. |
| Znaczenie operacyjne | Może pozostać bez zmian albo się rozwijać; potrzebna decyzja, czy zlecić oględziny. |

### 4. Decyzja potrzebna od właściciela

| Pole | Wartość |
|---|---|
| Treść decyzji do podjęcia | Czy Sentinel ma poprosić technika o dostępność i orientacyjną wycenę oględzin łazienki? |
| Dlaczego potrzebna decyzja | ☒ wymaga płatnego działania · ☒ wymaga dostępu wykonawcy |
| Możliwe opcje | patrz sekcja 5 (istotne tu: ocena/wycena specjalisty · wizyta kontrolna · właściciel załatwia samodzielnie) |
| Jak odpowiedzieć | ☒ email · ☒ WhatsApp |
| Termin odpowiedzi (jeśli dotyczy) | symulacja — +72h |
| Pilność | ☒ uwaga |

> Wybrano „uwaga", nie „pilna ochronna": brak widocznego czynnego wycieku. Sam wniosek nie jest
> gwarancją rozwiązania sprawy.

### 5. Proponowany następny krok / opcje

| Opcja | Co Sentinel zrobi | Płatne? | Zgoda właściciela? | Uwagi / ograniczenia |
|---|---|---|---|---|
| Brak działania / obserwacja | monitoruje w ramach uzgodnionego rytmu | nie | nie | bez gwarancji rozwiązania |
| Zgoda na zakup drobnych środków | nie dotyczy tej sprawy | — | — | to nie jest kwestia środków |
| Dostęp wykonawcy po decyzji | organizuje i dokumentuje dostęp technika | tak | tak | wynik i cena wykonawcy niegwarantowane |
| Ocena / wycena specjalisty | koordynuje oględziny i orientacyjną wycenę | tak / oczekuje | tak | bez diagnozy własnej; wynik niegwarantowany |
| Wizyta kontrolna | sprawdza ponownie przy kolejnej wizycie | nie | nie | w ramach rytmu z SCO-01 |
| Właściciel załatwia samodzielnie | brak działania Sentinel poza dokumentacją | nie | nie | technik właściciela poza odpowiedzialnością Sentinel |
| Inne (instrukcja właściciela) | według pisemnej instrukcji | `______` | `______` | `______` |

> Rekomendacja operacyjna (bez presji): opcja „ocena / wycena specjalisty" pozwala poznać koszt przed
> jakąkolwiek decyzją o naprawie. Wybór należy do właściciela; zapis w sekcji 9.

### 6. Pozycja kosztowa i uprawnienia

| Pole | Wartość |
|---|---|
| Podstawa uprawnienia | ☒ Basic / Extended: zgoda właściciela przed płatnym działaniem lub wydatkiem na wykonawcę |
| Szacowany koszt | ☒ nieznany — potrzebna wycena wykonawcy |
| Płatne działanie przed zgodą? | ☒ nie |
| Wymagany rachunek | ☒ tak (jeśli powstanie koszt) |

> Extended: brak autonomicznego płatnego działania. Żadna kwota nie została tu wpisana ani założona;
> nie wymyśla się limitu euro dla Extended.

### 7. Ryzyko czekania i granice decyzji

| Pole | Wartość |
|---|---|
| Co może się stać, jeśli właściciel czeka | Ślad może pozostać bez zmian lub się powiększyć; bez oględzin nie sposób ocenić przyczyny. |
| Co Sentinel może monitorować | Widoczny stan przy kolejnej planowej wizycie. |
| Czego Sentinel nie gwarantuje | Rozwiązania sprawy; dostępności, ceny, jakości ani rezultatu pracy technika. |
| Charakter wniosku | To nie jest porada techniczna, prawna, podatkowa ani ubezpieczeniowa. |

### 8. Dowody i prywatność

| Pole | Wartość |
|---|---|
| Referencja dowodów | `EV-SB-0008-06`, `EV-SB-0008-07` |
| Wybrane zdjęcia dostarczone | ☒ email z wnioskiem · ☒ link z archiwum |
| Element wrażliwy widoczny; nie sfotografowano | ☒ nie dotyczy |
| Referencja archiwum | `SEN-ARCH-TEST-001 / REC-03 / DR-0002` *(FIKCYJNY ref)* |

### 9. Odpowiedź właściciela

| Pole | Wartość |
|---|---|
| Wybrana decyzja | ☒ brak odpowiedzi — **dokument wysłany; oczekuje na odpowiedź właściciela** |
| Wybrana opcja (z sekcji 5) | oczekuje na decyzję właściciela |
| Instrukcja / uwagi właściciela | oczekuje |
| Zatwierdzona kwota albo instrukcja bez wydatku | oczekuje; do czasu odpowiedzi brak wydatku |
| Zatwierdzony kanał | oczekuje |
| Data / godzina odpowiedzi | oczekuje |
| Imię osoby odpowiadającej | oczekuje |
| Potrzebne podsumowanie działania (REC-04) po wykonaniu? | oczekuje — dopiero po ewentualnym zatwierdzonym działaniu |

> Stan otwarty użyty celowo: to jest wysłany wniosek, nie zaakceptowana decyzja. „Brak odpowiedzi" nie
> tworzy uprawnienia do wydatku w Extended.

### 10. Granice wniosku

Sekcja statyczna — potwierdzona. Wniosek nie postawił diagnozy; nie zagwarantował rezultatu ani
dostępności/ceny/jakości pracy technika; nie utworzył uprawnienia do wydatku ponad SCO-01; nie zmienił
zakresu; nie jest fakturą, wyceną ani zleceniem wykonawcy. Po zatwierdzeniu działanie i wynik
dokumentuje się osobno.

---

## 3. Fill instrumentation

| Instrument | Result |
|---|---|
| **Estimated fill time** | **~10–15 min**, with the REC-01 finding in hand. |
| **True blanks left** | 0 — every field resolved to a value, tick, `nie dotyczy`, or the deliberate `oczekuje` open-response state. |

- **§2 owner summary — clear and non-alarming?** **Yes.** Four plain sentences; the line "do czasu Państwa decyzji nic nie zlecamy" defuses any sense of pressure. No scare framing.
- **§4 ask clear?** **Yes.** One-sentence decision + why (paid + vendor) + how to answer + urgency = "uwaga". The owner sees exactly what is being asked.
- **§5 options menu — too dense or worked?** Worked, but it is the densest element: for *this* single finding only three of the seven rows are relevant, yet the full menu shows. I marked the two clearly-irrelevant rows ("zakup drobnych środków") as `nie dotyczy` inline. **Watch-point:** decide later whether a filled REC-03 trims the menu to relevant rows or always shows the full menu.
- **§4 → §5 → §9 flow — clear or redundant?** **Clear, not redundant.** §4 asks, §5 details the options, §9 records the answer. Keeping the *ask* (§4) and the *answer* (§9) in separate sections avoided any double-ticking and read naturally.
- **§6 reinforced or repeated?** Mild overlap with §5's "Płatne?/Zgoda?" columns, but §6 is the *authoritative* cost/authority block (estimated cost, receipt rule) — reads as reinforcement of the key point, not noise.
- **"Extended = owner approval before paid action" unmistakable?** **Yes** — stated in the header authority line, §4 reason, §6 basis, and the §9 no-response note. Repeated, but this is the point of the document.
- **Avoided inventing a Basic/Extended euro limit?** **Yes** — cost is "nieznany — potrzebna wycena"; no euro amount for Extended; explicit "nie wymyśla się limitu euro."
- **Vendor/specialist path non-guaranteed?** **Yes** — §5 + §7 state result/price/availability not guaranteed.
- **REC-03 distinct from REC-01?** **Yes** — no visit-report content; it references REC-01 as its source finding.
- **Distinct from quote / invoice / vendor order / completed-action report?** **Yes** — no amounts, no vendor order, §10 states it; REC-04 is referenced only as a *later* handoff.
- **Can the owner answer without a phone call?** **Yes** — §4 offers email/WhatsApp; the owner can reply "opcja: ocena specjalisty, zgoda" in one line. §9 is structured to capture exactly that.

---

## 4. Decision-path test

- **Owner approves technician availability/estimate** → Sentinel coordinates access, documents entry/exit, obtains an indicative estimate; **no repair/paid action until the estimate itself is approved**; a REC-04 is created only after any approved action is completed.
- **Owner rejects / no action** → monitor and re-check at the next scheduled visit; recorded in the next REC-01. No cost.
- **Owner asks for more information** → Sentinel provides existing non-sensitive evidence references; owner may consult their own technician (whose advice/result Sentinel does not guarantee).
- **Owner waits / observe next visit** → re-check on the scheduled rhythm; no cost; no diagnosis.
- **Did any path require a missing sibling document?** **No.** AKC access record would only apply *if* vendor access later happens; REC-04 only *after* completed action. Nothing blocked the request now.
- **Would REC-04 be needed only after action is completed?** **Yes** — confirmed; it is referenced as a post-action handoff, never used to pre-authorise.

---

## 5. Verdict

### `simulation-pass`

REC-03 v0.1 worked as a clear owner decision bridge: a non-alarming summary, an unmistakable ask, a
usable options menu, and an authority/cost position that made "Extended = owner approval before paid
action" impossible to miss — with **no invented euro limit**, **no autonomous action**, **no diagnosis**,
and the response block correctly left **open/awaiting**. It stayed distinct from REC-01 and from any
quote/invoice/vendor-order/completed-action report. The owner could answer it by email in one line.

### Must-fix before commit

- **None.** v0.1 is accept-and-use ready as a Level 2 working candidate.

### Test later (do not pre-solve)

- §5: whether a filled REC-03 should trim the options menu to the relevant rows or always present the full seven.
- §6 ↔ §5 mild overlap of the "paid?/approval?" signal — confirm it reads as reinforcement, not repetition, with a real owner.
- §9: whether real owners tick the response block on the document or reply free-form by email (channel-capture ergonomics).

### Do-not-touch

- Option A authority (no Basic/Extended euro limit); "brak odpowiedzi" ≠ approval.
- Visible-facts / no-diagnosis boundary; REC-03 ≠ REC-01; REC-03 ≠ quote/invoice/vendor order/completed-action.
- §2 human prose summary; the ask (§4) / answer (§9) separation.

### Recommended next step

**Accept REC-03 v0.1 as a Level 2 working candidate and commit** (REC-03 source + DOCX + register update
+ this fill). Then build **AKC-03** (the last item in the minimum beta-readable set): the usable key
handover / return receipt. Carry the three "test later" items as watch-points; batch any change into a
single v0.2 **only if the Owner approves**.

---

## Validation

- Test data entirely fictional; no real PII, addresses, or codes.
- **No REC-03 source/DOCX modified**; no SCO-01, CLN-02, or REC-01 source/DOCX modified; no template
  created; no app/code touched. This file is a new test-fill artifact only.
- Doctrine preserved: Option A intact · no Basic/Extended euro limit · no-response ≠ approval · visible
  facts only / no diagnosis · REC-03 ≠ REC-01 · REC-03 ≠ quote/invoice/vendor order/completed-action ·
  vendor result not guaranteed · nothing customer-facing approved.
