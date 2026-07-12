---
title: Key Handover / Return Receipt - Working Draft PL
status: draft-source
customer_facing: false
lawyer_review_required: partial
accountant_review_required: false
owner_review_required: true
version: 0.3-working
supersedes: DOCX v0.2
source: AKC-03 v0.3 blind-feedback micro-patch
---

<!--
v0.3 = blind-feedback micro-patch: top label OSTRZEŻENIE -> WAŻNE, one line explaining
internal document numbers, confirmation-format clarification, softened liability wording.
Structure and custody doctrine unchanged.
-->

# AKC-03 — Potwierdzenie przekazania / zwrotu kluczy i dostępu

Dokument roboczy. Nie jest umową ani aneksem odpowiedzialności. Służy do udokumentowania jednego przekazania, odbioru albo zwrotu kluczy / dostępu. Zakres przechowania i użycia dostępu wynika z SCO-01 lub późniejszego pisemnego potwierdzenia. Nie wpisuje się tu kodów, haseł ani pełnych danych dostępowych.

Ten dokument chroni właściciela i Sentinel: zapisuje, co dokładnie przekazano albo zwrócono, kiedy, w jakim widocznym stanie i co wymaga dalszego sprawdzenia.

**Kto wypełnia:** formularz wypełnia operator Sentinel podczas przekazania, odbioru albo zwrotu. Osoba przekazująca lub odbierająca może przejrzeć gotowy zapis.

**Dla bezpieczeństwa nie zapisuje się tu:** pełnego adresu, kodów, haseł, PIN-ów, etykiet Wi-Fi ani kodów sejfu. Dostęp cyfrowy zapisujemy wyłącznie jako status (np. przyznany / przetestowany / cofnięty).

Jeden dokument dokumentuje jedno zdarzenie: przekazanie, odbiór albo zwrot. Liczba, identyfikatory i widoczny stan kluczy oraz status dostępu należą tutaj, a nie do SCO-01. To potwierdzenie nie tworzy uprawnień dostępu ponad SCO-01.

Właściciel nie musi znać numerów dokumentów Sentinel; służą one do powiązania tego potwierdzenia z ustalonym zakresem obsługi i dalszymi zapisami operacyjnymi.

## 1. Rekord zdarzenia

| Pole | Wartość |
|---|---|
| ID potwierdzenia | `AKC-03 / ______` |
| Referencja nieruchomości | `SEN-PROP-______` (bez pełnego adresu) |
| Data / godzina | `______` |
| Typ zdarzenia | [ ] przekazanie: właściciel → Sentinel<br>[ ] przekazanie: Sentinel → właściciel<br>[ ] zwrot końcowy<br>[ ] wymiana / aktualizacja dostępu<br>[ ] potwierdzenie dostępu cyfrowego<br>[ ] inne: `______` |
| Powiązany SCO-01 / pisemne potwierdzenie | `SCO-01 / ______` |
| Osoba przekazująca | `______` |
| Osoba odbierająca | `______` |
| Miejsce przekazania | `______` (obszar / miejscowość; bez pełnego adresu) |
| Status dokumentu | [ ] roboczy<br>[ ] potwierdzony<br>[ ] skorygowany<br>[ ] zastąpiony |

## 2. Zakres dostępu z SCO-01

| Pole | Wartość |
|---|---|
| Przechowanie / dostęp w zakresie? | [ ] tak<br>[ ] oczekuje na decyzję właściciela<br>[ ] nie / nie dotyczy |
| Dozwolone użycie | [ ] planowa wizyta<br>[ ] gotowość / sprzątanie<br>[ ] dostęp awaryjny / ochronny<br>[ ] dostęp wykonawcy tylko po decyzji właściciela<br>[ ] inna pisemna instrukcja: `______` |
| Ograniczenia | [ ] strefy prywatne<br>[ ] strefy bez zdjęć<br>[ ] ograniczenia czasu dostępu<br>[ ] inne: `______` |

To potwierdzenie nie tworzy praw dostępu ponad SCO-01 lub pisemną instrukcję właściciela.

## 3. Przekazywane elementy fizyczne

| Wewn. ref | Typ | Ilość | Widoczny stan | Uwagi |
|---|---|---|---|---|
| `______` | `______` | `______` | `______` | `______` |
| `______` | `______` | `______` | `______` | `______` |
| `______` | `______` | `______` | `______` | `______` |
| `______` | `______` | `______` | `______` | `______` |

Typ: klucz apartamentu · klucz budynku / wspólnoty · klucz garażu / komórki · klucz skrzynki · pilot / karta / fob · inny. Na etykietach nie umieszcza się pełnego adresu ani oznaczeń ujawniających dostęp. Zapisuje się wyłącznie widoczny stan.

## 4. Dostęp cyfrowy / smart lock / alarm — jeśli dotyczy

Jeżeli nie ma dostępu cyfrowego, zaznacz `nie dotyczy` i pomiń pozostałe pola tej sekcji.

| Pole | Wartość |
|---|---|
| Rodzaj dostępu cyfrowego | [ ] aplikacja smart lock<br>[ ] kod tymczasowy<br>[ ] aplikacja alarmu<br>[ ] aplikacja budynku<br>[ ] nie dotyczy |
| Status | [ ] przyznany<br>[ ] przetestowany<br>[ ] oczekuje<br>[ ] cofnięty<br>[ ] nie dotyczy |
| Kto kontroluje dane dostępowe | [ ] właściciel<br>[ ] Sentinel<br>[ ] osoba trzecia / administrator |
| Czy zapisano tu dane dostępowe? | [ ] nie |
| Uwaga o cofnięciu / wygaśnięciu | `______` |
| Wynik testu (bez kodu) | `______` |

W AKC-03 nie zapisuje się rzeczywistych kodów, haseł, PIN-ów, danych logowania do aplikacji, etykiet Wi-Fi ani kodów sejfu. Dostęp cyfrowy zapisuje się wyłącznie jako status.

## 5. Test dostępu przy odbiorze

| Pole | Wartość |
|---|---|
| Klucz fizyczny | [ ] przetestowany, działa<br>[ ] nie testowano<br>[ ] problem<br>[ ] nie dotyczy |
| Dostęp do budynku / części wspólnych | [ ] przetestowany, działa<br>[ ] nie testowano<br>[ ] problem<br>[ ] nie dotyczy |
| Dostęp cyfrowy | [ ] przetestowany, działa<br>[ ] nie testowano<br>[ ] problem<br>[ ] nie dotyczy |
| Opis problemu | `______` |
| Potrzebny dalszy krok | `______` |

Jeżeli część kluczy działa, a część nie była testowana albo ma problem, wpisz wyjątek w opisie problemu i w sekcji 8.

## 6. Zdjęcia / dowody przekazania

| Pole | Wartość |
|---|---|
| Zdjęcie zestawu kluczy | [ ] wykonane<br>[ ] nie wykonane<br>[ ] nie dotyczy |
| Ograniczenia zdjęć | `______` |
| Referencja dowodu | `______` |
| Oznaczenia wrażliwe ukryte / wykadrowane | [ ] tak<br>[ ] nie dotyczy |

Zdjęcie może pokazać liczbę i stan kluczy, ale nie może ujawniać etykiet adresowych, kodów ani wrażliwych identyfikatorów.

## 7. Potwierdzenie odbioru / zwrotu

Wypełnij tylko blok odpowiadający temu zdarzeniu. Drugi blok oznacz jako `nie dotyczy` albo `zdarzenie przyszłe`.

### A. Przekazanie do Sentinel

| Pole | Wartość |
|---|---|
| Przekazał(a) | `______` |
| Odebrał(a) | `______` |
| Data / godzina | `______` |
| Liczba potwierdzona | [ ] tak<br>[ ] nie: `______` |
| Widoczny stan potwierdzony | [ ] tak<br>[ ] uwagi: `______` |
| Uwagi | `______` |
| Potwierdzenie (bez podpisu prawnego) | `______` |

### B. Zwrot od Sentinel

| Pole | Wartość |
|---|---|
| Zwrócił(a) | `______` |
| Odebrał(a) | `______` |
| Data / godzina | `______` |
| Liczba potwierdzona | [ ] tak<br>[ ] nie: `______` |
| Widoczny stan przy zwrocie | `______` |
| Różnice / braki / problem | `______` |
| Potwierdzenie (bez podpisu prawnego) | `______` |

Potwierdzenie może oznaczać imię i nazwisko osoby potwierdzającej, potwierdzenie w wiadomości albo wpis operatora wskazujący sposób potwierdzenia; nie zastępuje podpisu prawnego ani umowy.

Potwierdzenie jest dowodem operacyjnym, nie finalną klauzulą prawną. Odnotowuje się wyłącznie widoczne fakty; nie ma ukrytego przyjęcia szkód lub braków ponad to, co widocznie zapisano.

## 8. Różnice, braki, problem z dostępem

| Pole | Wartość |
|---|---|
| Problem | `______` |
| Widoczny fakt | `______` |
| Co Sentinel zrobił | `______` |
| Czego Sentinel nie zrobił | `______` |
| Dalszy krok | [ ] aktualizacja SCO-01<br>[ ] notatka AKC-02 / AKC-04 (później)<br>[ ] raport REC-01<br>[ ] wniosek decyzyjny REC-03<br>[ ] potrzebna instrukcja właściciela |

(Powtórz blok dla każdego problemu.) Wyłącznie widoczne fakty; bez diagnozy zamka ani systemu technicznego.

## 9. Granice potwierdzenia

- Dokumentuje wyłącznie przekazanie, zwrot albo status dostępu.
- Nie zastępuje SCO-01.
- Nie tworzy uprawnień dostępu ponad SCO-01 lub pisemną instrukcję właściciela.
- Nie zapisuje rzeczywistych kodów, haseł ani PIN-ów.
- Nie diagnozuje zamków ani systemów technicznych.
- Nie rozstrzyga odpowiedzialności za szkody lub braki poza widocznie zapisanymi faktami.
- Każdy problem z dostępem dokumentuje się osobno.

## 10. Notatki operatora / archiwum

| Pole | Wartość |
|---|---|
| Referencja archiwum | `______` |
| Powiązane dokumenty | `______` (np. SCO-01; później AKC-02 / AKC-04) |
| Przygotował(a) | `______` |
| Sprawdził(a) | `______` |
| Potrzebna aktualizacja | `______` |
