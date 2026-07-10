---
title: Decision Request - Working Draft PL
status: draft-source
customer_facing: false
lawyer_review_required: partial
accountant_review_required: partial
owner_review_required: true
version: 0.1-working
source: REC-03 old draft + REC-01 v0.1 + SCO-01 v0.5 authority doctrine
---

# REC-03 — Wniosek decyzyjny właściciela

Dokument roboczy. Nie jest umową, fakturą, wyceną ani zleceniem wykonawcy. Służy do uzyskania decyzji właściciela przed działaniem, kosztem albo eskalacją. Opiera się na REC-01 i widocznych faktach. Nie jest diagnozą techniczną. Nie tworzy nowego uprawnienia do wydatku.

Jeden wniosek dotyczy jednej decyzji. REC-03 powstaje tylko wtedy, gdy potrzebna jest decyzja właściciela, zanim Sentinel zadziała, poniesie koszt, zorganizuje dostęp wykonawcy albo wyjdzie poza normalny zakres. Zwykłe uwagi bez decyzji zostają w REC-01.

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

## 2. Krótkie podsumowanie dla właściciela

Napisz tu 2–4 zdania po ludzku: co zaobserwowano, dlaczego potrzebna jest decyzja, czy podjęto jakiekolwiek natychmiastowe działanie i co się stanie, jeśli decyzji nie będzie. Przykład tonu: „Podczas wizyty widoczny był ślad wilgoci przy brodziku. Nie postawiono diagnozy i nie podjęto działania płatnego. Prosimy o decyzję, czy zlecić oględziny — do tego czasu monitorujemy stan przy kolejnej wizycie."

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

Pilność to klasyfikacja ochronna oparta na faktach, nie perswazja. „Pilna ochronna" oznacza widoczne ryzyko (czynny wyciek, naruszone zabezpieczenie, ryzyko wody lub prądu). Sam wniosek nie jest gwarancją rozwiązania sprawy.

## 5. Proponowany następny krok / opcje

| Opcja | Co Sentinel zrobi | Płatne? | Zgoda właściciela? | Uwagi / ograniczenia |
|---|---|---|---|---|
| Brak działania / obserwacja | monitoruje w ramach uzgodnionego rytmu | nie | nie | bez gwarancji rozwiązania |
| Zgoda na zakup drobnych środków | kupuje po zgodzie; rachunek | tak | tak (Basic / Extended); Full: w ramach limitu | kwota do potwierdzenia; brak limitu domyślnego dla Basic / Extended |
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

Nie fotografuje się m.in. dokumentów tożsamości, kodów / haseł, ekranów z danymi logowania, dzieci, leków, przedmiotów intymnych, wnętrza zamkniętych szaf / sejfów i rzeczy gości — chyba że są bezpośrednio związane ze sprawą; wtedy materiał ogranicz lub wykadruj. Pełny zestaw dowodów jest w bezpiecznym archiwum; WhatsApp nie jest archiwum.

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
