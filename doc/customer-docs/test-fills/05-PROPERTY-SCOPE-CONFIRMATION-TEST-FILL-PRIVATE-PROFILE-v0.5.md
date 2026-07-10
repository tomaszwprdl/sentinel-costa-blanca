---
title: Property Scope Confirmation v0.5 — Instrumented Test Fill (Fresh Private Profile)
status: internal test artifact
customer_facing: false
lawyer_review_required: false
owner_review_required: true
pathway: private-use-only
source_document: SCO-01 v0.5 (commit e376572)
version: test-fill-0.1
supersedes: none (second simulation after 04-...SCENARIO-B-v0.5.md)
---

# 05 — PROPERTY SCOPE CONFIRMATION TEST FILL — FRESH PRIVATE PROFILE — v0.5

> **FICTIONAL TEST DATA.** Every name, contact, key label and reference below is invented for
> form-testing only. No real personal data, no real property, no real codes. This is an instrumented
> simulation fill of **SCO-01 v0.5** — it approves nothing, promises nothing, and is **not** a customer
> document, **not** customer-ready, **not** lawyer/accountant reviewed, **not** signature-approved.

This is **not** Scenario B. It is a fresh fictional private-absence onboarding case, built from scratch,
deliberately different on four axes so it exercises *different* rows: **villa** (not apartment),
**Basic** (not Extended), **smart lock** (not "no alarm"), **cleaning undecided** (not
cleaning-included).

---

## 1. Simulation header

| Field | Value |
|---|---|
| Source document version | **SCO-01 v0.5** (source `01-PROPERTY-SCOPE-CONFIRMATION-WORKING-DRAFT-PL.md`; DOCX v0.5; commit `e376572`) |
| Scenario name | **Fresh private-profile fill** (fictional; new case, not Scenario B) |
| Pathway | **Private absence** (Nieobecność prywatna / `private-use-only`) |
| Package selected | **Basic** (Podstawowy) — see rationale below; response window 48h |
| Cleaning / readiness | Pre-arrival readiness **included**; **cleaning oczekuje na decyzję właściciela** (owner wants to decide after first visit) |
| Keyholding | **Included** — smart lock + physical backup key |
| First physical verification visit | **NOT performed** — fill ends *częściowo wypełnione — przed pierwszą wizytą* |
| Test-data warning | Fictional / internal test only. No real PII, property, codes, or approval. |
| Fill mode | Onboarding video call, owner in Poland, owner present |

**Package rationale (Basic):** low-risk private absence, infrequent owner visits (~3–4/year), a modest
villa with no pool and an owner-arranged exterior gardener. The owner is retired, responsive, and
comfortable **approving each paid action himself**, so he does not need Full's autonomous EUR 300
authority or Extended's higher visit rhythm. Basic fits: scheduled oversight + keyholding + readiness on
request, **no autonomous paid spend**. This also lets the fill exercise the **Basic** branch of §7,
which Scenario B (Extended) did not.

---

## 2. Filled SCO-01 v0.5

### 1. Właściciel, nieruchomość i sposób użycia

| Pole | Wartość |
|---|---|
| Imię i nazwisko / nazwa właściciela | Krzysztof Malinowski *(FIKCYJNE)* |
| Preferowany język kontaktu | ☒ polski |
| Obszar nieruchomości | Jávea / Xàbia (obszar; bez pełnego adresu w tym formularzu roboczym) |
| Typ nieruchomości | ☒ willa |
| Profil użycia | ☒ Nieobecność prywatna |
| Ważne uwagi do sposobu użycia | Właściciel mieszka w Polsce (Wrocław); willa pusta między pobytami; 3–4 przyjazdy właściciela w roku, zwykle 1 tydzień. Ogród przy willi obsługuje niezależny ogrodnik wynajęty przez właściciela (co 2 tyg., wyłącznie teren zewnętrzny, bez wejścia do środka) — poza odpowiedzialnością Sentinel. Brak basenu. Brak gości. |

#### Terminy uruchamiające gotowość

| Pole | Wartość |
|---|---|
| Skąd Sentinel bierze terminy, które uruchamiają gotowość? | ☒ właściciel wysyła terminy ręcznie · ☒ email |
| Czy Sentinel ma działający dostęp do tych terminów? | ☒ właściciel będzie wysyłał terminy ręcznie |

### 2. Pakiet, rytm i czas reakcji

| Pole | Wartość |
|---|---|
| Pakiet | ☒ Podstawowy / Basic |
| Okno reakcji / decyzji | ☒ 48h |
| Uzgodniony rytm wizyt | 1 wizyta w miesiącu — omówione i potwierdzone |
| Dodatkowe wejścia poza planowymi wizytami | Gotowość przed przyjazdem właściciela (≈3–4×/rok) — uruchamiana przekazanym terminem, poza stałym rytmem 1/mies. |

### 3. Co Sentinel robi i kiedy

#### 3A. Regularne działania Sentinel

| Działanie | Zakres / status | Kiedy działa | Jak często / kiedy sprawdzane | Wynik dla właściciela | Granica działania / uwagi |
|---|---|---|---|---|---|
| Planowa wizyta nadzorcza | w zakresie | zgodnie z planem | 1×/miesiąc | raport wizyty | — |
| Przechowanie kluczy | w zakresie | po udokumentowanym przekazaniu kluczy | stan przy przekazaniu/zwrocie; ruch według rejestru dostępu | potwierdzenie przechowania / log dostępu | 1 klucz fizyczny zapasowy; dostęp główny przez smart lock (patrz sekcja 5); bez adresu na etykietach; liczba potwierdzana przy AKC-03 |
| Komunikaty wspólnoty / budynku | w zakresie | gdy komunikat urbanizacji dostępny podczas wizyty | podczas uzgodnionych wizyt | notatka | tylko widoczne komunikaty; kontakt administracji urbanizacji — oczekuje na pierwszą wizytę |

#### 3B. Gotowość uruchamiana terminem

| Działanie | Zakres / status | Co uruchamia działanie | Kiedy ma być gotowe / minimalny termin | Wynik dla właściciela | Warunki wykonania / ograniczenia |
|---|---|---|---|---|---|
| Gotowość przed przyjazdem właściciela | w zakresie | termin przyjazdu przekazany zgodnie z sekcją 1 | 5 dni powiadomienia | potwierdzenie gotowości | zależne od terminu powiadomienia; sprawdzenie i przewietrzenie willi |
| Sprzątanie w ramach gotowości | decyzja właściciela | (jeśli dodane) termin przyjazdu właściciela | oczekuje na decyzję | — | właściciel zdecyduje po pierwszej wizycie; patrz sekcja 6 |
| Sprzątanie rotacyjne | poza zakresem | — | — | — | brak gości |
| Kontrola po gościach | nie dotyczy | — | — | — | brak profilu gościnnego |

#### 3C. Dostęp dla wykonawcy

| Pole | Wartość |
|---|---|
| Czy dostęp dla wykonawcy jest w zakresie? | ☒ nie |
| Kiedy dostęp jest możliwy? | nie dotyczy obecnie (ogrodnik właściciela pracuje wyłącznie na zewnątrz, bez wejścia do środka; brak innego wykonawcy w planie) |
| Wymagana decyzja właściciela | ☒ tak; płatne działanie lub wydatek zawsze podlega zasadom z sekcji 7 |
| Co Sentinel dokumentuje? | log dostępu / podsumowanie (jeśli w przyszłości) |
| Granica działania | Sentinel nie gwarantuje dostępności, ceny, jakości ani rezultatu pracy wykonawcy. |

#### 3D. Kontrola wizualna podczas wizyty

| Pole | Wartość |
|---|---|
| Czy kontrola wizualna balkonu / elementów zewnętrznych jest w zakresie? | ☒ tak |
| Kiedy sprawdzane? | podczas uzgodnionej wizyty nadzorczej |
| Wynik dla właściciela | notatka / zdjęcie referencyjne |
| Granica sprawdzenia | tylko widoczne elementy (taras, elewacja od strony wejścia, widoczny stan ogrodu); bez prac ogrodowych, bez diagnozy; ogród pielęgnuje ogrodnik właściciela |

### 4. Terminy powiadomienia i krótkie terminy

| Temat | Ustalona zasada / termin | Wyjątek / krótki termin | Status |
|---|---|---|---|
| Przyjazd właściciela | 5 dni powiadomienia | krótszy termin możliwy; niedobór gotowości nie jest naruszeniem | ☒ uzgodnione |
| Gotowość lokalu | 5 dni | jak wyżej | ☒ uzgodnione |
| Sprzątanie w ramach gotowości | oczekuje na decyzję | — | ☒ oczekuje |
| Sprzątanie rotacyjne | nie dotyczy | — | ☒ nie dotyczy |
| Dostęp wykonawcy | nie dotyczy | — | ☒ nie dotyczy |

### 5. Dostęp i klucze

| Pole | Wartość |
|---|---|
| Czy przechowanie kluczy jest w zakresie? | ☒ tak |
| Metoda dostępu | ☒ smart lock · ☒ klucz fizyczny (zapasowy) |
| Stan dostępu kodowego | ☒ do ustalenia (operatorski dostęp w aplikacji smart lock zostanie skonfigurowany po pierwszej wizycie; kod nie jest zapisywany w tym dokumencie) |
| Role dopuszczone do dostępu | ☒ operator Sentinel · ☒ osoba wybrana przez właściciela: ogrodnik — wyłącznie teren zewnętrzny, bez dostępu do wnętrza |
| Ograniczenia dostępu / strefy wyłączone | Gabinet na piętrze zamknięty na klucz — nie wchodzić; Sentinel nie posiada klucza. Garaż poza zakresem obsługi. |
| Kontakt przy problemie z wejściem | Główny kontakt właściciela (sekcja 8); mechanika wejścia do urbanizacji — oczekuje na pierwszą wizytę |

> Dostęp główny to smart lock; klucz fizyczny jest zapasem. Stan dostępu kodowego zapisany wyłącznie jako
> „do ustalenia" — żaden rzeczywisty kod/PIN nie jest wpisany. Provisioning dostępu operatorskiego i
> weryfikacja klucza zapasowego następują przy podpisanym przekazaniu (AKC-03) / pierwszej wizycie.

### 6. Sprzątanie i gotowość — ustalenia wykonawcze

> Sprzątanie **nie jest jeszcze objęte zakresem** — właściciel zdecyduje po pierwszej wizycie. Poniżej
> zapisano wyłącznie stan „oczekuje na decyzję"; ustalenia wykonawcze zostaną uzupełnione, jeśli
> sprzątanie zostanie dodane.

| Pole | Wartość |
|---|---|
| Kto wykonuje sprzątanie | ☒ oczekuje na decyzję |
| Zakres sprzątania | oczekuje na decyzję (rozważane: gotowość właściciela) |
| Kto dostarcza środki / produkty | ☒ oczekuje na decyzję |
| Brak środków / produktów | ☒ oczekuje na decyzję |
| Pranie / pościel | ☒ właściciel |
| Ponowne sprzątanie | oczekuje na decyzję |
| Dowód przed/po | ☒ oczekuje na decyzję |

> Ten formularz ustala model i granice sprzątania. Konkretna checklista wykonania każdej usługi jest
> osobnym dokumentem roboczym **CLN-02** (nie tworzony na tym etapie).

### 7. Płatne działania i decyzje właściciela

| Pole | Wartość |
|---|---|
| Basic / Extended | Brak autonomicznego płatnego działania domyślnie; zgoda właściciela wymagana przed płatnym działaniem lub wydatkiem na wykonawcę. **(zasada pakietu — dotyczy tego wypełnienia Basic)** |
| Full | nie dotyczy (wybrano Basic) |
| Oddzielny dokument uprawnienia | ☒ brak |
| Kanał ważnej decyzji właściciela | telefon + email (oficjalny zapis); WhatsApp pomocniczo |
| Potwierdzenie decyzji | ☒ email · ☒ telefon tylko z pisemnym potwierdzeniem |
| Dowód wydatku | Rachunek wymagany; wyjątki wyłącznie po przeglądzie księgowym. |
| Zasady rozliczeń | oczekują na wymagany przegląd księgowy tam, gdzie oznaczono |
| Wykonawcy zewnętrzni | Sentinel może koordynować dostęp i dokumentację; nie gwarantuje dostępności, ceny, jakości ani rezultatu. |

> **Wynik dla Basic:** identyczna zasada autonomii jak w Extended — brak autonomicznego wydatku, zgoda
> właściciela przed każdym płatnym działaniem. Wspólny wiersz Basic/Extended obsłużył Basic bez żadnej
> luki (żaden limit euro dla Basic nie został wymyślony).

### 8. Kontakty, decyzje i dostarczanie raportów

| Kontakt / kanał | Dane | Kiedy użyć |
|---|---|---|
| Główny kontakt decyzyjny właściciela | Krzysztof Malinowski — telefon + email *(FIKCYJNE)* | decyzje operacyjne i płatne działania |
| Kontakt zapasowy | Marta Malinowska-Ruiz, córka, mieszka w Walencji *(FIKCYJNE)* | gdy właściciel nie odpowiada; kontakt lokalny |
| Kontakt wspólnoty / administracji | oczekuje na pierwszą wizytę (administracja urbanizacji) | sprawy urbanizacji / awarie wspólnotowe |
| Kontakt ubezpieczeniowy / szkoda | oczekuje na decyzję właściciela *(przegląd prawny — lekki flag)* | ścieżka roszczeń właściciela |
| Email do raportów i decyzji | email właściciela *(FIKCYJNE)* | oficjalna dostawa dokumentów |
| Kanał roboczy | ☒ telefon · ☒ WhatsApp | komunikacja operacyjna |

### 9. Zdjęcia, dowody i prywatność

| Pole | Wartość |
|---|---|
| Dostawa wybranych zdjęć | ☒ email z raportem |
| Strefy ograniczone / bez zdjęć | zamknięty gabinet na piętrze; garaż |
| Zasady retencji i prywatności | do potwierdzenia po wymaganym przeglądzie prawnym / księgowym |

> Statyczna lista „Nie fotografować" odczytana właścicielowi; właściciel potwierdził (m.in. zamknięty
> gabinet nie będzie otwierany ani fotografowany).

### 10. Granice usługi i brak obietnic

Sekcja statyczna — odczytana właścicielowi; brak zastrzeżeń. Wyraźnie potwierdzono ustnie, że pielęgnacja
ogrodu należy do ogrodnika właściciela (nie do Sentinel) oraz że „jeżeli usługa nie jest wpisana jako
objęta zakresem, nie jest objęta automatycznie" — powtórzone przy stanie sprzątania *oczekuje na decyzję*.

### 11. Co pozostaje do potwierdzenia

| Punkt | Odpowiedzialny | Termin / status |
|---|---|---|
| Otwarte decyzje właściciela | właściciel | dodanie sprzątania (tak/nie); kontakt ubezpieczeniowy |
| Brakujące dane | Sentinel | lokalizacja zaworów/wyłączników; mechanika wejścia do urbanizacji; provisioning dostępu smart lock; weryfikacja klucza zapasowego; kontakt administracji; zdjęcia bazowe — oczekuje na pierwszą wizytę |
| Pierwsza wizyta wymagana do zamknięcia zakresu | Sentinel | ☒ tak — nie wykonano |
| Zmiana zakresu | właściciel + Sentinel | wymaga pisemnego potwierdzenia |

### 12. Robocze potwierdzenie ustaleń

| Pole | Wartość |
|---|---|
| Potwierdzenie informacji | ☒ częściowo: przed pierwszą wizytą; kilka pozycji czeka na weryfikację fizyczną i jedną decyzję właściciela (sprzątanie) |
| Potwierdzenie braków | ☒ rozumiem, że oznaczone braki muszą zostać uzupełnione przed rozpoczęciem odpowiednich działań |
| Data roboczego potwierdzenia | oczekuje (symulacja — brak realnej daty) |
| Imię osoby potwierdzającej (bez podpisu) | Krzysztof Malinowski *(FIKCYJNE; symulacja — bez podpisu, nie zatwierdzone)* |

### Wewnętrzny pasek rekordu

| Pole | Wartość |
|---|---|
| ID dokumentu | `SCO-01 / SEN-PROP-TEST-002` |
| Referencja nieruchomości | `SEN-PROP-TEST-002` |
| Data wypełnienia | symulacja — brak realnej daty |
| Operator | operator testowy (symulacja) |
| Język rekordu | ☒ PL |
| Status formularza | ☒ częściowo wypełnione — przed pierwszą wizytą |
| Punkty nierozstrzygnięte | decyzja o sprzątaniu; kontakt ubezpieczeniowy; provisioning smart lock; pozycje pierwszej wizyty |

---

## 3. Fill instrumentation

| Instrument | Result |
|---|---|
| **Estimated fill time** | Onboarding video call: **~35–45 min**. Post-visit completion pass: **+15–20 min**. Slightly faster than the Scenario B v0.5 fill (~40–50 min): Basic, fewer active modules, cleaning deferred. |
| **True blanks left** | **0**. Every field resolved to a value or a legitimate state. |
| **Pending first visit** | 6: shut-off locations, urbanización entry mechanics, smart-lock operator provisioning, backup-key verification, community-admin contact, baseline photos. |
| **Pending owner decision** | 2: whether to add cleaning; insurance/claim contact. |

### Fields that were clear

- §1 villa + private absence — direct; "willa" type present.
- §2 Basic + 48h + 1/month — unambiguous (rhythm is free-text; see hesitation note).
- §7 Basic authority — the combined Basic/Extended row stated the rule outright; nothing to improvise.
- §5 smart lock — method checkbox present; the "do ustalenia" code-state fit a not-yet-provisioned digital access without recording any code.
- §3C vendor access = "nie" — clean, because the owner's gardener is exterior-only with no interior access.

### Fields that caused hesitation

- **§6 cleaning while undecided.** The section header says "Wypełnij tylko wtedy, gdy sprzątanie jest objęte zakresem" (binary: in-scope → fill). But cleaning here is a *third* state — pending owner decision. The per-row "oczekuje na decyzję" options let me record it, so it works, but the header instruction and the pending state pull slightly against each other. Mild friction, first exposed by this case.
- **§5 code-state "do ustalenia" vs "nieprzekazany".** For a smart lock whose operator PIN isn't set up yet, both read plausible; I chose "do ustalenia". Minor wording overlap.
- **§1 vs §5 for the owner's gardener.** The gardener is recorded in §1 notes *and* in §5 "Role dopuszczone" (osoba wybrana przez właściciela — teren zewnętrzny). Slight duplication; needed because there is no single "owner-arranged independent contractor" row.

### Fields that felt overkill (for this case)

- §3B "Sprzątanie rotacyjne" and "Kontrola po gościach" — guest-path rows, `poza zakresem`/`nie dotyczy` (same as Scenario B).
- §3D exterior row still asks a full block for what is, here, a light visual glance at a garden someone else maintains — acceptable, but slightly heavy for Basic.

### Fields missing for this case

- **No capture row for an owner-arranged independent exterior contractor** (the gardener). It lands in §1 free-text + §5 roles. A villa/pool owner with independent gardeners/pool techs is common; today they have no clean home and no explicit "not Sentinel's responsibility" checkbox.
- **Smart-lock digital-access provisioning** has no dedicated capture beyond the §5 state row. AKC-03 is a *physical* key handover/return receipt; granting/revoking an operator app PIN is not a key handover. Fine for now (state row + first-visit note), but the digital-access lifecycle may need its own internal home (AKC-04 log / SCO-05 authorised persons) later.

### Fields that should stay in SCO-01

- Package/rhythm/SLA, authority rule (§7), key method + code-state (state only), restricted zones, notice rules, cleaning **model** (§6), privacy restricted-zones (§9), boundaries (§10), open confirmations (§11). All are scope-defining and owner-facing — correct to keep visible.

### Fields that should stay internal (confirmed vs Operator/Data Map)

- Shut-offs, urbanización entry, baseline photos, risk areas → first-visit / SCO-04.
- Smart-lock actual PIN/app credentials → never in SCO-01; provisioning tracked in AKC records.
- Backup-key count/ID/condition → AKC-03 / AKC-02.
- Utility-provider contact, full contact directory → data map / SCO-06.

### Ambiguity checks

- **Authority ambiguity:** **none.** §7's combined Basic/Extended row handled Basic exactly as it handled Extended; no euro limit invented.
- **Cleaning-scope ambiguity:** **low-moderate.** The *model vs checklist* separation is clean and CLN-02 pointer intact — but the *undecided* state sits awkwardly against §6's binary header (see hesitation). It resolved correctly; it just isn't as smooth as included/not-included.
- **Key/access ambiguity:** **low.** Smart lock + backup key + "do ustalenia" state all captured without recording a code; provisioning deferred cleanly.
- **Short-notice/readiness ambiguity:** **low.** 5-day rule + non-breach note carried over cleanly.

### Does the form feel natural for a 30–60 minute onboarding call?

**Yes.** ~35–45 minutes with an owner present, no dead ends, no forced fake data, and the three-state
discipline let genuinely-open items (cleaning decision, first-visit facts) stay open honestly. The only
two rough spots are the §6 undecided-cleaning friction and the missing owner-arranged-contractor row —
both minor, neither stops the call.

---

## 4. Comparison against Scenario B re-fill

### Did the fresh case expose anything Scenario B did not?

**Yes — three genuinely new observations:**
1. **§6 handles "included" and "not included" cleanly, but "undecided/pending" has header friction.** Scenario B had cleaning definitely included, so this never surfaced. The per-row pending options save it, but the section header is binary.
2. **Owner-arranged independent exterior contractor (gardener) has no capture row.** Scenario B had no such third party. Common for villas; currently free-text only.
3. **Smart-lock digital access.** Scenario B was "no alarm / nie dotyczy". This case exercised the code-state row for a to-be-provisioned digital PIN — it worked (state only, no code), but highlighted that AKC-03 (physical handover) doesn't naturally cover digital-access provisioning.

It also **confirmed** something Scenario B could not: **§7's Basic branch works** (same combined row; no gap, no invented Basic limit).

### Did the date-trigger fields work?

**Yes.** Manual-email date source again; readiness trigger for owner arrivals recorded cleanly. Same mild "manual-only owner" framing note as Scenario B — not worse.

### Did the cleaning-establishment section work without becoming a checklist?

**Yes.** Even while deferred, §6 stayed a *model/boundary* section and pointed execution to CLN-02. It did not drift toward a task list. The CLN-02 separation held under the harder "undecided" case.

### Did keyholding separation into AKC-03 make sense?

**Yes for the physical backup key** (count/verification deferred to signed handover). **Partial for the smart lock:** AKC-03 is a physical receipt; the digital operator-PIN grant/revoke isn't a "handover" and may need its own internal record eventually. SCO-01 correctly recorded only the *state*, not the credential.

### Did the first-visit / property-profile note prevent overloading SCO-01?

**Yes.** Six items (shut-offs, urbanización entry, smart-lock provisioning, backup-key check, admin
contact, baseline photos) deferred to first visit / SCO-04 without bloating the form.

---

## 5. Verdict

### `simulation-pass`

SCO-01 v0.5 carried a fresh, structurally-different private case (villa / Basic / smart lock / cleaning
undecided) with **zero forced fake data**, confirmed the Basic authority branch, and preserved the
cleaning-model separation and first-visit discipline under harder conditions than Scenario B. The two
new findings are minor and non-blocking.

### Must-fix before beta read

- **None.** Nothing here blocks a beta read.

### Test during beta read

- **§6 undecided-cleaning ergonomics** — does the binary header confuse a real owner/operator when cleaning is "decide later"? (Candidate for a one-line header tweak in a future v0.6 — *not now*.)
- **Owner-arranged independent contractor** (gardener/pool tech) — do real villa owners expect an explicit "their contractor, not Sentinel's responsibility" line? Watch whether free-text is enough.
- **Smart-lock digital-access lifecycle** — is the §5 state row + first-visit note sufficient, or do owners ask "how is the app access granted/removed?"
- **Basic visit rhythm is free-text** — confirm operators consistently agree a sensible Basic rhythm (form prescribes only Full ≥ 3/month).

### Do-not-touch

- §7 Option A authority doctrine — do not weaken; **do not invent a Basic/Extended euro limit** (this fill deliberately did not).
- §6 cleaning separation — do not turn SCO-01 into a checklist; **CLN-02 stays unbuilt**.
- The three fill-state discipline.
- No new templates (CLN-02, REC-01, REC-03, SCO-04, AKC-02, etc.).

### Recommended next step

**SCO-01 v0.5 is stable enough for beta read.** Two clean simulation-passes (known-case migration +
fresh case), no blocking issues, doctrine intact. Hold all patches: carry the four "test during beta
read" items as watch-points and batch any wording changes into a single **v0.6 only if the Owner
approves** after the beta read. Do not patch pre-emptively.

---

## Validation

- Test data entirely fictional; no real PII, addresses, codes, or property details.
- **No SCO-01 source modified**; no DOCX modified; **CLN-02 not created**; no REC-01/REC-03/SCO-04/AKC-02
  or any template created; no app/estimator/pricing/package/route/contact/legal code touched. This file
  is a new test-fill artifact only.
- Doctrine preserved: Option A intact · no Basic/Extended euro limit invented (Basic tested and held) ·
  SLA = timing not resolution · cleaning inside oversight, model-only · no concierge/rental/management
  drift · no codes recorded · nothing marked customer-facing approved.
