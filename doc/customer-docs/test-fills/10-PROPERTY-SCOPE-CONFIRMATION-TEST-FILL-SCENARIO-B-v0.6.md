---
title: Property Scope Confirmation v0.6 — Instrumented Test Fill (Scenario B)
status: internal test artifact
customer_facing: false
lawyer_review_required: false
owner_review_required: true
pathway: private-use-only
source_document: SCO-01 v0.6 (uncommitted)
version: test-fill-0.1
supersedes: none (comparison companion to 04-...SCENARIO-B-v0.5.md)
---

# 10 — PROPERTY SCOPE CONFIRMATION TEST FILL — SCENARIO B — v0.6

> **FICTIONAL TEST DATA.** Every reference below is invented for form-testing only. No real personal
> data, no real address, no real codes. This is an instrumented simulation fill of **SCO-01 v0.6** — it
> approves nothing, is **not** customer-ready, and is **not** customer-facing approved.

Same Scenario B facts as test-fill 04 (v0.5), refilled on v0.6 to isolate one variable: **did the
beta-feedback usability patch fix the heaviness without breaking doctrine?**

**Employee-led intake assumption (v0.6):** a Sentinel operator fills this during the intake conversation
from the owner's answers; the owner later reviews the completed record.

---

## 1. Simulation header

| Field | Value |
|---|---|
| Source document version | **SCO-01 v0.6** (source + DOCX candidate; uncommitted) |
| Scenario name | **Scenario B — pre-onboarding scope confirmation (employee-led)** |
| Comparison target | test-fill 04 (v0.5) + the beta feedback that drove v0.6 |
| Pathway / package | Private absence · Extended · 24h |
| Property type | Apartment, owner abroad (Torrevieja area) *(FIKCYJNE)* |
| First physical visit | **Not performed** — ends *częściowo wypełnione — przed pierwszą wizytą* |
| Test-data warning | Fictional / internal test only. |

---

## 2. Filled SCO-01 v0.6

### 1. Właściciel, nieruchomość i sposób używania

| Pole | Wartość |
|---|---|
| Imię i nazwisko / nazwa właściciela | Anna Nowak-Testowa *(FIKCYJNE)* |
| Preferowany język kontaktu | ☒ polski |
| Obszar nieruchomości | Torrevieja (obszar; bez pełnego adresu) |
| Typ nieruchomości | ☒ apartament |
| Sposób używania nieruchomości | ☒ Nieobecność prywatna |
| Ważne uwagi | Właściciel za granicą (Polska); mieszkanie puste między pobytami; 4–6 przyjazdów w roku, 1–2 tygodnie; brak gości. |

**Terminy uruchamiające gotowość**

| Pole | Wartość |
|---|---|
| Skąd Sentinel bierze terminy? | ☒ właściciel wysyła ręcznie · ☒ email |
| Czy Sentinel ma działający dostęp do tych terminów? | ☒ właściciel będzie wysyłał ręcznie |

### 2. Pakiet, rytm i czas reakcji

| Pole | Wartość |
|---|---|
| Pakiet | ☒ Rozszerzony / Extended |
| Okno reakcji / decyzji | ☒ 24h |
| Uzgodniony rytm wizyt | 2 wizyty w miesiącu (standard Extended) |
| Dodatkowe wejścia poza planowymi wizytami | Gotowość przed przyjazdem (≈4–6×/rok), poza stałym rytmem, na podstawie przekazanego terminu. |

### 3. Co Sentinel robi i kiedy

#### 3A. Regularne działania

| Działanie | Status | Kiedy / jak często | Wynik i granice |
|---|---|---|---|
| Planowa wizyta nadzorcza | w zakresie | wg planu; 2×/mies. | raport wizyty |
| Przechowanie kluczy | w zakresie | po przekazaniu; ruch wg rejestru | 3 klucze, bez adresu na etykietach; liczba potwierdzana w AKC-03 |
| Komunikaty wspólnoty / budynku | w zakresie | podczas wizyt, gdy dostępne | notatka; nazwisko administratora — do ustalenia po pierwszej wizycie |

#### 3B. Gotowość uruchamiana terminem

| Działanie | Status | Co uruchamia / termin | Wynik i granice |
|---|---|---|---|
| Gotowość przed przyjazdem właściciela | w zakresie | termin z sekcji 1; gotowe na: 5 dni powiadomienia | potwierdzenie gotowości |
| Sprzątanie w ramach gotowości | w zakresie | termin przyjazdu; gotowe na: 5 dni | potwierdzenie + dowód przed/po |
| Sprzątanie rotacyjne (goście) | poza zakresem | — | brak gości |
| Kontrola po gościach | nie dotyczy | — | brak profilu gościnnego |

#### 3C. Dostęp dla wykonawcy

| Pole | Wartość |
|---|---|
| Czy dostęp dla wykonawcy jest w zakresie? | ☒ do decyzji właściciela |
| Kiedy dostęp jest możliwy? | do decyzji właściciela (brak wykonawcy w planie) |
| Wymagana decyzja właściciela | ☒ tak; każdy płatny krok podlega sekcji 7 |
| Co Sentinel dokumentuje? | log dostępu / podsumowanie |
| Ograniczenia | Sentinel nie gwarantuje dostępności, ceny, jakości ani rezultatu pracy wykonawcy. |

#### 3D. Kontrola wizualna podczas wizyty

| Pole | Wartość |
|---|---|
| Czy kontrola wizualna balkonu / elementów zewnętrznych jest w zakresie? | ☒ tak |
| Kiedy sprawdzane? | podczas uzgodnionej wizyty nadzorczej |
| Wynik dla właściciela | notatka / zdjęcie referencyjne |
| Ograniczenia | tylko widoczne elementy (uszczelka drzwi, odpływ); bez sprzątania balkonu, bez diagnozy |

### 4. Terminy powiadomienia i krótkie terminy

| Temat | Ustalona zasada / wyjątek | Status |
|---|---|---|
| Przyjazd właściciela | 5 dni; krótszy możliwy — niedobór gotowości nie jest naruszeniem | ☒ uzgodnione |
| Gotowość lokalu | 5 dni | ☒ uzgodnione |
| Sprzątanie (gotowość / rotacja) | 5 dni; rotacja — nie dotyczy (brak gości) | ☒ uzgodnione |
| Dostęp wykonawcy | 48h (proponowane; nie omówione — brak wykonawcy) | ☒ do ustalenia |

### 5. Dostęp i klucze

| Pole | Wartość |
|---|---|
| Czy przechowanie kluczy jest w zakresie? | ☒ tak |
| Metoda dostępu | ☒ klucz fizyczny |
| Stan dostępu kodowego | ☒ nie dotyczy (brak alarmu / systemu kodowego) |
| Kto może korzystać z dostępu | ☒ operator Sentinel · ☒ osoba sprzątająca Sentinel · ☒ wykonawca - za zgodą właściciela |
| Ograniczenia dostępu / strefy wyłączone | Zamknięta szafa w sypialni głównej i szafka w przedpokoju — nie wchodzić; Sentinel nie posiada klucza do szafy. |
| Kontakt przy problemie z wejściem | Główny kontakt właściciela (sekcja 8); mechanika wejścia do budynku — do ustalenia po pierwszej wizycie |

### 6. Sprzątanie i gotowość - ustalenia wykonawcze

| Pole | Wartość |
|---|---|
| Kto wykonuje sprzątanie | ☒ osoba Sentinel |
| Zakres sprzątania | ☒ gotowość właściciela |
| Kto dostarcza środki / produkty | ☒ przechowywane w lokalu |
| Gdy zabraknie środków | ☒ raport bez zakupu (zakup wyłącznie po zgodzie właściciela) |
| Pranie / pościel | ☒ właściciel |
| Ponowne sprzątanie | ☒ Sentinel poprawia, jeśli błąd leży po stronie osoby Sentinel; koszt i zasada do ustalenia po teście operacyjnym |
| Dowód przed/po | ☒ wymagany |

### 7. Płatne działania i decyzje właściciela

| Pole | Wartość |
|---|---|
| Basic / Extended | W pakietach Basic i Extended Sentinel nie zleca płatnych działań ani nie ponosi wydatków bez wcześniejszej zgody właściciela. **(dotyczy tego wypełnienia — Extended)** |
| Full | nie dotyczy (wybrano Extended) |
| Oddzielny dokument uprawnienia | ☒ brak |
| Kanał ważnej decyzji właściciela | WhatsApp (operacyjny) + email (oficjalny zapis) |
| Potwierdzenie decyzji | ☒ WhatsApp jako dowód komunikacji + archiwizacja · ☒ telefon tylko z pisemnym potwierdzeniem |
| Dowód wydatku | Rachunek wymagany; wyjątki wyłącznie po przeglądzie księgowym. |
| Wykonawcy zewnętrzni | Sentinel może koordynować dostęp i dokumentację; nie gwarantuje dostępności, ceny, jakości ani rezultatu. |

### 8. Kontakty, decyzje i dostarczanie raportów

| Kontakt / kanał | Dane | Kiedy użyć |
|---|---|---|
| Główny kontakt decyzyjny właściciela | Anna Nowak-Testowa — email + WhatsApp *(FIKCYJNE)* | decyzje operacyjne i płatne działania |
| Kontakt zapasowy | P. Nowak-Testowy, brat *(FIKCYJNE)* | gdy właściciel nie odpowiada |
| Kontakt wspólnoty / administracji | do ustalenia po pierwszej wizycie | sprawy budynku / awarie wspólnotowe |
| Kontakt ubezpieczeniowy / szkoda | do decyzji właściciela | ścieżka roszczeń właściciela |
| Email do raportów i decyzji | email właściciela *(FIKCYJNE)* | oficjalna dostawa dokumentów |
| Kanał roboczy | ☒ WhatsApp | komunikacja operacyjna |

### 9. Zdjęcia, dowody i prywatność

| Pole | Wartość |
|---|---|
| Dostawa wybranych zdjęć | ☒ email z raportem · ☒ link z archiwum |
| Strefy ograniczone / bez zdjęć | zamknięta szafa w sypialni głównej; szafka w przedpokoju |
| Jak długo Sentinel przechowuje zdjęcia i dokumenty | do potwierdzenia po wymaganym przeglądzie prawnym / księgowym |

### 10. Granice usługi i brak obietnic

Sekcja statyczna — odczytana właścicielowi; brak zastrzeżeń.

### 11. Co pozostaje do potwierdzenia

| Punkt | Odpowiedzialny | Termin / status |
|---|---|---|
| Otwarte decyzje właściciela | właściciel | stan modułu dostępu wykonawcy; kontakt ubezpieczeniowy |
| Brakujące dane | Sentinel | zawory/wyłączniki; wejście do budynku; nazwisko administratora; zdjęcia bazowe — do ustalenia po pierwszej wizycie |
| Pierwsza wizyta wymagana do zamknięcia zakresu | Sentinel | ☒ tak — nie wykonano |
| Zmiana zakresu | właściciel + Sentinel | wymaga pisemnego potwierdzenia |

### 12. Podsumowanie ustaleń

| Pole | Wartość |
|---|---|
| Informacje są kompletne na tym etapie | ☒ częściowo: przed pierwszą wizytą; kilka pozycji czeka na weryfikację fizyczną |
| Braki do uzupełnienia | ☒ rozumiem, że oznaczone braki muszą zostać uzupełnione przed rozpoczęciem odpowiednich działań |
| Data potwierdzenia ustaleń | symulacja — brak realnej daty |
| Kto potwierdził ustalenia (imię, bez podpisu) | symulacja — przygotował operator Sentinel; zapis do przeglądu właściciela |

### Pasek rekordu (wypełnia Sentinel)

| Pole | Wartość |
|---|---|
| ID dokumentu | `SCO-01 / SEN-PROP-TEST-001` |
| Referencja nieruchomości | `SEN-PROP-TEST-001` |
| Data wypełnienia | symulacja — brak realnej daty |
| Operator | operator testowy (symulacja) |
| Język rekordu | ☒ PL |
| Status formularza | ☒ częściowo wypełnione - przed pierwszą wizytą |
| Punkty nierozstrzygnięte | dostęp wykonawcy; kontakt ubezpieczeniowy; pozycje pierwszej wizyty |

---

## 3. Comparison instrumentation (v0.6 vs v0.5)

| Instrument | Result |
|---|---|
| **Estimated fill time** | **~35–40 min** (v0.5 fill 04 was ~40–50). The term map + employee-led framing removed ramp-up; the lighter §3/§4 scanned faster. |
| **True blanks left** | 0 — every field resolved to a value or one of the three legit states. |

- **Does employee-led framing solve "who fills what?"** **Yes — the headline fix.** The "KTO WYPEŁNIA" callout + the "Pasek rekordu (wypełnia Sentinel)" label make it unmistakable that the operator fills during intake and the owner reviews. The beta confusion (owner asked "am I filling all this alone?") is answered before the first table.
- **Does the top owner intro help?** Yes — it sets "what this is / what it isn't" before any grid, so the tables read as detail, not a wall.
- **Does the term map help?** Yes — the exact comprehension gaps beta flagged (nadzór vs sprzątanie vs klucze vs raport vs decyzja) now share one vocabulary up front; the fill referenced those terms without re-explaining.
- **Does §3 feel lighter than v0.5?** **Yes.** 4 columns instead of 6; merging "wynik" + "granica" and "kiedy" + "jak często" removed the repeated-cell fatigue that was v0.5's first tiredness point. Same operational meaning, faster scan.
- **Does §4 feel less duplicative?** **Yes.** 3 columns, the two cleaning rows merged, and the note "szczegóły co i kiedy są w sekcji 3" reframes §4 as *notice periods only* — it no longer reads like a restatement of §3B.
- **Does the simplified status vocabulary work?** **Yes.** Five consistent statuses; the old "oczekuje na decyzję" vs "decyzja właściciela" split is gone, so filling was more consistent and less second-guessed.
- **Does "Podsumowanie ustaleń" feel less signature-like?** **Yes.** Reframed as "Sentinel ma dość informacji" with an explicit "nie jest podpisem, umową ani zgodą na płatne działania"; it reads as a working checkpoint, not a sign-off.
- **Did any protective boundary become weaker?** **No** (see §4 doctrine check — all intact).
- **Did any required detail disappear?** **No.** §4's two cleaning rows merged, but that detail lives in §3B; nothing operational was lost.
- **Does v0.6 still feel too heavy despite improvements?** **Reduced, not eliminated.** It is still a full 12-section scope record (which it should be), but the heaviness is now front-explained and §3/§4 scan materially better. Net: it reads as an intake record an operator walks through, not an internal manual.
- **Palette / readability:** blue accepted; consistent with CLN-02/REC-01/REC-03/AKC-03 for the connected set. No readability concern from the palette.

---

## 4. Doctrine regression check

All confirmed **preserved** in v0.6 (and in this fill):

- **Option A** — Basic/Extended: owner approval before paid action/vendor spend. ✓
- **No invented Basic/Extended euro limit** — explicit "nie ustala się żadnego stałego limitu kwotowego." ✓
- **Full EUR 300 / optional EUR 500** — intact and unchanged. ✓
- **No codes/passwords rule** — intact (REGUŁA callout). ✓
- **Do-not-photograph list** — intact and complete. ✓
- **Not rental management** — intact. ✓
- **No concierge / lifestyle** — intact. ✓
- **No technical diagnosis** — intact. ✓
- **Vendor result not guaranteed** — intact. ✓
- **CLN-02 cleaning separation** — intact (model here, checklist in CLN-02). ✓
- **Owner decision channel** — intact (§7/§8). ✓
- **Not a contract / not for signature** — intact (WAŻNE callout + §12). ✓

---

## 5. Verdict

### `simulation-pass`

v0.6 fixed the beta-feedback problems — employee-led framing, owner intro, term map, lighter §3/§4,
simpler statuses, plainer wording, a less signature-like confirmation — **without weakening any protected
boundary**. Zero forced fake data; the same Scenario B filled faster and read more clearly than on v0.5.

### Must-fix before commit

- **None.** v0.6 is accept-and-use ready as the current Level-2 working candidate (v0.5 kept for history).

### Test later (do not pre-solve)

- Whether the §3 4-column tables still feel slightly dense on a phone/print (watch in the connected beta read).
- Whether "do ustalenia po pierwszej wizycie" (a long phrase) is comfortable as a repeated checkbox label.
- Whether §4, now very light, could eventually fold into §3 entirely — a future consideration, not now.

### Do-not-touch

- Option A / no euro limit; no-codes rule; do-not-photograph list; CLN-02 separation; employee-led framing; term map; the five-status vocabulary.

### Recommended next step

**Accept SCO-01 v0.6 and commit** (v0.6 source + v0.6 DOCX + register + this fill; keep v0.5 DOCX; v0.3
restored). Then, as a follow-up step, **update the connected beta packet** to point at v0.6 (MANIFEST +
regenerate the send folder's `01_SCOPE_CONFIRMATION` copy from the v0.6 export), so the beta reader gets
the improved scope document in the connected set.

---

## Validation

- Test data entirely fictional; no real PII, addresses, or codes.
- **No SCO-01 v0.6 source/DOCX modified during this fill**; v0.5 DOCX untouched; CLN-02 / REC-01 / REC-03
  / AKC-03 and the connected beta packet untouched; no app/code touched. This file is a new test-fill
  artifact only.
- Doctrine preserved: Option A · no Basic/Extended euro limit · no codes · do-not-photograph · not rental
  management / concierge / diagnosis · vendor result not guaranteed · CLN-02 separation · not
  contract/signature · nothing customer-facing approved.
