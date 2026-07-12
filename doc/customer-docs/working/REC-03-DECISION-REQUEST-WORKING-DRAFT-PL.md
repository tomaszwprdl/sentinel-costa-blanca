---
title: Decision Request - Working Draft PL
status: draft-source
customer_facing: false
lawyer_review_required: partial
accountant_review_required: partial
owner_review_required: true
version: 0.2-working
supersedes: REC-03 DOCX v0.1
source: REC-03 v0.2 front-decision blind-feedback micro-patch
---

# REC-03 — Wniosek decyzyjny właściciela

Dokument roboczy. Nie jest umową, fakturą, wyceną ani zleceniem wykonawcy. Służy do uzyskania decyzji właściciela przed działaniem, kosztem albo eskalacją. Opiera się na REC-01 i widocznych faktach. Nie jest diagnozą techniczną. Nie tworzy nowego uprawnienia do wydatku.

Jeden wniosek dotyczy jednej decyzji. REC-03 powstaje tylko wtedy, gdy potrzebna jest decyzja właściciela, zanim Sentinel zadziała, poniesie koszt, zorganizuje dostęp wykonawcy albo wyjdzie poza normalny zakres. Zwykłe uwagi bez decyzji zostają w REC-01.

## 0. Decyzja do podjęcia — dla właściciela

| Pole | Wartość |
|---|---|
| Prosimy o decyzję | `______` |
| Czego dotyczy sprawa | `______` |
| Proponowany następny krok | `______` |
| Czy wiąże się z kosztem? | [ ] nie<br>[ ] tak — kwota znana: `______`<br>[ ] możliwe — potrzebna wycena / potwierdzenie wykonawcy |
| Czy bez odpowiedzi Sentinel wykona płatne działanie? | [ ] nie<br>[ ] tylko jeśli mieści się w już pisemnie uzgodnionym uprawnieniu / limicie Full |
| Termin odpowiedzi właściciela | `______` |
| Co stanie się bez odpowiedzi | `______` |

Brak odpowiedzi nie oznacza zgody. Bez wymaganej zgody Sentinel nie podejmie nowego płatnego działania, nie zleci wykonawcy ani nie wyjdzie poza uzgodniony zakres.

Skróty dokumentów są wewnętrznymi referencjami Sentinel: REC-01 oznacza raport wizyty, SCO-01 ustalony zakres i uprawnienia, REC-03 ten wniosek decyzyjny, a REC-04 późniejsze podsumowanie wykonanego działania, jeśli będzie potrzebne.

## 1. Rekord wniosku

| Pole | Wartość |
|---|---|
| ID wniosku | `REC-03 / ______` |
| Referencja nieruchomości | `SEN-PROP-______` |
| Data wniosku | `______` |
| Powiązany raport REC-01 | `REC-01 / ______` |
| Powiązana uwaga / dowód | `______` |
| Pakiet / kontekst | [ ] Podstawowy / Basic<br>[ ] Rozszerzony / Extended<br>[ ] Pełny / Full |
| Źródło uprawnienia | [ ] SCO-01<br>[ ] późniejsze pisemne potwierdzenie: `______` |
| Status wniosku | [ ] roboczy<br>[ ] wysłany<br>[ ] zaakceptowany<br>[ ] odrzucony<br>[ ] oczekuje na informacje<br>[ ] zastąpiony |
| Termin odpowiedzi właściciela | `______` |

## 2. Podsumowanie dla właściciela — opis po ludzku

Napisz tu 2–4 zdania po ludzku: co zaobserwowano, dlaczego potrzebna jest decyzja, czy podjęto jakiekolwiek natychmiastowe działanie i co się stanie, jeśli decyzji nie będzie. Przykład tonu: „Podczas wizyty widoczny był ślad wilgoci przy brodziku. Nie postawiono diagnozy i nie podjęto działania płatnego. Prosimy o decyzję, czy zlecić oględziny — do tego czasu monitorujemy stan przy kolejnej wizycie."

To jest część do szybkiego przeczytania; szczegóły decyzji, opcje i dowody są niżej.

`______`

## 3. Widoczny fakt i źródło

| Pole | Wartość |
|---|---|
| Widoczny fakt (z REC-01) | `______` |
| Referencja dowodu | `______` |
| Co Sentinel zaobserwował | `______` |
| Czego Sentinel nie zdiagnozował | `______` (bez oceny przyczyny ani stanu technicznego) |
| Znaczenie operacyjne | `______` |

Wyłącznie widoczne fakty; bez diagnozy. „Widoczny ślad wilgoci pod oknem" to fakt; „uszczelka uszkodzona" to diagnoza i tu nie należy.

## 4. Decyzja potrzebna od właściciela

| Pole | Wartość |
|---|---|
| Treść decyzji do podjęcia | `______` (jedno zdanie: co właściciel ma zdecydować) |
| Dlaczego potrzebna decyzja | [ ] przekracza zakres<br>[ ] przekracza uprawnienie<br>[ ] wymaga płatnego działania<br>[ ] wymaga dostępu wykonawcy<br>[ ] eskalacja poza normalny zakres |
| Możliwe opcje | patrz sekcja 5 (menu opcji) |
| Jak odpowiedzieć | [ ] email<br>[ ] WhatsApp<br>[ ] telefon (z pisemnym potwierdzeniem)<br>[ ] inny: `______` |
| Termin odpowiedzi (jeśli dotyczy) | `______` |
| Pilność | [ ] rutynowa<br>[ ] uwaga<br>[ ] pilna ochronna |

Pilność to klasyfikacja ochronna oparta na widocznych faktach, nie presja na decyzję ani gwarancja rozwiązania sprawy. „Pilna ochronna" oznacza widoczne ryzyko (czynny wyciek, naruszone zabezpieczenie, ryzyko wody lub prądu).

## 5. Proponowany następny krok / opcje

| Opcja | Co Sentinel zrobi | Płatne? | Zgoda właściciela? | Uwagi / ograniczenia |
|---|---|---|---|---|
| Brak działania / obserwacja | monitoruje w ramach uzgodnionego rytmu | nie | nie | bez gwarancji rozwiązania |
| Zgoda na zakup drobnych środków | kupuje po zgodzie; rachunek | tak | tak, chyba że mieści się w uzgodnionym limicie Full | kwota do potwierdzenia; brak limitu domyślnego dla Basic / Extended |
| Dostęp wykonawcy po decyzji | organizuje i dokumentuje dostęp | tak | tak | wynik i cena wykonawcy niegwarantowane |
| Ocena / wycena specjalisty | koordynuje ocenę lub wycenę | tak / oczekuje | tak | bez diagnozy własnej; wynik niegwarantowany |
| Wizyta kontrolna | sprawdza ponownie przy kolejnej wizycie | nie | nie | w ramach rytmu z SCO-01 |
| Właściciel załatwia samodzielnie | brak działania Sentinel poza dokumentacją | nie | nie | wykonawca właściciela poza odpowiedzialnością Sentinel |
| Inne (instrukcja właściciela) | według pisemnej instrukcji | `______` | `______` | `______` |

Opcje są ogólne, gotowe do użycia; nie są konkretną wyceną wykonawcy. Wybór właściciela zapisuje się w sekcji 9.

## 6. Pozycja kosztowa i uprawnienia

| Pole | Wartość |
|---|---|
| Podstawa uprawnienia | [ ] Basic / Extended: zgoda właściciela przed płatnym działaniem lub wydatkiem na wykonawcę<br>[ ] Full: w ramach uzgodnionego limitu EUR 300 (opcjonalnie EUR 500, jeśli uzgodniony)<br>[ ] oczekuje / do potwierdzenia |
| Szacowany koszt | [ ] brak<br>[ ] nieznany — potrzebna wycena wykonawcy<br>[ ] kwota zatwierdzona przez właściciela: `______`<br>[ ] w ramach limitu Full: `______` |
| Płatne działanie przed zgodą? | [ ] nie<br>[ ] tak — tylko jeśli już uprawnione pisemnie / Full w ramach limitu |
| Wymagany rachunek | [ ] tak<br>[ ] nie dotyczy |

Nie wymyśla się limitu euro dla Basic / Extended. Powyżej wybranego limitu (Full) wymagana jest zgoda właściciela. Minimalne działanie wymagane przez służby awaryjne albo administrację wspólnoty może zostać udokumentowane, ale nie tworzy wcześniej autoryzowanego mandatu do wydatków w Basic / Extended.

## 7. Ryzyko czekania i granice decyzji

| Pole | Wartość |
|---|---|
| Co może się stać, jeśli właściciel czeka | `______` (opis faktów, bez straszenia) |
| Co Sentinel może monitorować | `______` |
| Czego Sentinel nie gwarantuje | rozwiązania sprawy; dostępności, ceny, jakości ani rezultatu pracy wykonawcy / specjalisty |
| Charakter wniosku | to nie jest porada techniczna, prawna, podatkowa ani ubezpieczeniowa |

Język neutralny: opis widocznych faktów i możliwych kroków, nie perswazja. SLA oznacza czas reakcji / decyzji, nie gwarancję rozwiązania.

## 8. Dowody i prywatność

| Pole | Wartość |
|---|---|
| Referencja dowodów | `______` |
| Wybrane zdjęcia dostarczone | [ ] email z wnioskiem<br>[ ] link z archiwum<br>[ ] nie dotyczy |
| Element wrażliwy widoczny; nie sfotografowano | [ ] tak — opis: `______`<br>[ ] nie dotyczy |
| Referencja archiwum | `______` |

**Dokumenty i dane:** nie fotografuje się dokumentów tożsamości ani ekranów z danymi logowania.

**Dostęp i bezpieczeństwo:** nie fotografuje się kodów ani haseł.

**Osoby i prywatność:** nie fotografuje się dzieci, leków ani przedmiotów intymnych.

**Rzeczy osobiste i zamknięte strefy:** nie fotografuje się wnętrza zamkniętych szaf / sejfów ani rzeczy gości.

**Wyjątek operacyjny:** jeśli element jest bezpośrednio związany ze sprawą, materiał ogranicz lub wykadruj.

**Archiwum:** pełny zestaw dowodów jest w bezpiecznym archiwum; WhatsApp nie jest archiwum.

## 9. Odpowiedź właściciela

| Pole | Wartość |
|---|---|
| Wybrana decyzja | [ ] zatwierdzono<br>[ ] odmówiono<br>[ ] prośba o więcej informacji<br>[ ] brak odpowiedzi |
| Wybrana opcja (z sekcji 5) | `______` |
| Instrukcja / uwagi właściciela | `______` |
| Zatwierdzona kwota albo instrukcja bez wydatku | `______` |
| Zatwierdzony kanał | [ ] email<br>[ ] WhatsApp<br>[ ] telefon z pisemnym potwierdzeniem |
| Data / godzina odpowiedzi | `______` |
| Imię osoby odpowiadającej | `______` |
| Potrzebne podsumowanie działania (REC-04) po wykonaniu? | [ ] tak<br>[ ] nie |

To nie jest klauzula podpisu prawnego. Zgoda głosowa wymaga pisemnego potwierdzenia przed działaniem. Do czasu odpowiedzi Sentinel nie podejmuje działania poza uzgodnionym uprawnieniem; „brak odpowiedzi" nie tworzy uprawnienia do wydatku w Basic / Extended.

## 10. Granice wniosku

- Nie stawia diagnozy technicznej.
- Nie gwarantuje rezultatu ani dostępności, ceny czy jakości pracy wykonawcy / specjalisty.
- Nie tworzy uprawnienia do wydatku ponad SCO-01 lub pisemną zgodę właściciela.
- Nie zastępuje umowy ani przeglądu prawnego / księgowego.
- Nie zmienia zakresu ustalonego w SCO-01.
- Nie jest fakturą, wyceną ani zleceniem wykonawcy.
- Po zatwierdzeniu działanie i jego wynik dokumentuje się osobno.
