---
title: Property Scope Confirmation - Working Draft PL
status: draft-source
customer_facing: false
lawyer_review_required: partial
accountant_review_required: partial
owner_review_required: true
language: pl
pathway: private / guest / mixed selectable
source: 01-SCOPE-REGISTER-DRAFT.md v0.3
---

# Potwierdzenie zakresu obsługi nieruchomości / Scope Register

Dokument roboczy operacyjny. Nie jest umową, nie jest finalnym brzmieniem prawnym i nie jest zatwierdzony do podpisu przez właściciela. Wymaga przeglądu Ownera oraz, w oznaczonych miejscach, przeglądu prawnego i księgowego.

Ten dokument służy do uporządkowania informacji o nieruchomości, uzgodnionym zakresie, dostępie, kontakcie decyzyjnym, dokumentacji i ograniczeniach działania Sentinel. Pola niewypełnione muszą mieć status: `nie dotyczy`, `oczekuje na decyzję właściciela` albo `oczekuje na pierwszą wizytę`.

## 1. Kontrola dokumentu

| Pole | Wartość |
|---|---|
| ID dokumentu | `SCO-01 / ______` |
| Referencja nieruchomości | `SEN-PROP-______` |
| Wersja robocza | `______` |
| Data wypełnienia | `______` |
| Etap wypełnienia | `[ ]` rozmowa wstępna `[ ]` częściowo wypełnione - przed pierwszą wizytą `[ ]` po pierwszej wizycie `[ ]` do symulacji `[ ]` wycofane |
| Język rekordu | `[x]` PL `[ ]` EN `[ ]` inny: `______` |
| Kanał wypełnienia | `[ ]` spotkanie `[ ]` telefon `[ ]` wideo `[ ]` email `[ ]` WhatsApp `[ ]` inny: `______` |
| Uczestnicy | `______` |
| Operator wypełniający | `______` |
| Punkty nierozstrzygnięte | `______` |
| Odniesienie do archiwum roboczego | `______` |

## 2. Właściciel / nieruchomość / profil użycia

| Pole | Wartość |
|---|---|
| Referencja właściciela | `OWNER-______` |
| Imię i nazwisko / nazwa właściciela | `______` |
| Email właściciela | `______` |
| Telefon właściciela | `______` |
| Preferowany język kontaktu | `[ ]` polski `[ ]` angielski `[ ]` inny: `______` |
| Obszar nieruchomości | `______` (obszar / miejscowość, bez pełnego adresu w wersji roboczej) |
| Typ nieruchomości | `[ ]` apartament `[ ]` dom `[ ]` willa `[ ]` inny: `______` |
| Profil użycia | `[ ]` Nieobecność prywatna (`private`) `[ ]` Aktywne użycie przez gości (`guest`) `[ ]` Użycie mieszane / nieustalone (`mixed`) |
| Źródło kalendarza pobytów | `[ ]` nie dotyczy `[ ]` właściciel przekazuje daty `[ ]` współdzielony kalendarz `[ ]` email `[ ]` inne: `______` |
| Wiarygodność źródła kalendarza | `[ ]` potwierdzone `[ ]` wymaga testu `[ ]` oczekuje na decyzję właściciela `[ ]` nie dotyczy |
| Uwagi do profilu użycia | `______` |

Źródło kalendarza służy wyłącznie jako źródło terminów gotowości. Nie oznacza obsługi rezerwacji, cen, komunikacji z gośćmi ani zarządzania najmem.

## 3. Pakiet i poziom odpowiedzialności

| Pole | Wartość |
|---|---|
| Pakiet | `[ ]` Podstawowy / Basic `[ ]` Rozszerzony / Extended `[ ]` Pełny / Full `[ ]` do potwierdzenia |
| Znaczenie SLA | Czas reakcji / decyzji, nie gwarancja rozwiązania sprawy |
| Okno reakcji / decyzji | `[ ]` 48h `[ ]` 24h `[ ]` tego samego dnia `[ ]` inne zgodne z pakietem: `______` |
| Rytm wizyt / częstotliwość | `______` |
| Full - minimum wizyt | `min. 3/mies.` jeśli wybrano Full |
| Dodatkowe zdarzenia dostępu | `______` |
| Przypomnienie o odpowiedzialności | Pakiet określa rytm, intensywność, czas reakcji i pozycję decyzyjną; nie przenosi odpowiedzialności właściciela i nie tworzy gwarancji rezultatu |

Zasada stała: odpowiedzialność pakietowa ≠ uprawnienie awaryjne ≠ odpowiedzialność za szkodę. Sentinel dokumentuje widoczne fakty i działa w uzgodnionych granicach; nie stawia diagnoz technicznych.

## 4. Moduły zakresu

Status modułu: `included` / `not included` / `n/a` / `pending owner decision` / `pending first visit`.

| Moduł | Kod | Status | Wyzwalacz / kiedy działa | Częstotliwość / limit | Dowód / rekord | Decyzja właściciela? | Uwagi / wyłączenia |
|---|---|---|---|---|---|---|---|
| Planowa wizyta nadzorcza | `scheduled_oversight_visit` | `______` | `______` | `______` | raport wizyty (`REC-01`) | `[ ]` tak `[ ]` nie | `______` |
| Przechowanie kluczy | `keyholding` | `______` | podpisane przekazanie kluczy | ciągłe / wg rejestru | rejestr kluczy (`AKC-02`) | `[ ]` tak `[ ]` nie | bez pełnego adresu na oznaczeniach |
| Gotowość przed przyjazdem właściciela | `pre_arrival_readiness` | `______` | zgłoszony termin przyjazdu | `______` | raport / checklista | `[ ]` tak `[ ]` nie | zależne od terminu powiadomienia |
| Sprzątanie gotowości | `cleaning_readiness` | `______` | przyjazd właściciela / uzgodniona gotowość | `______` | dowód przed/po | `[ ]` tak `[ ]` nie | funkcja w ramach nadzoru |
| Sprzątanie rotacyjne | `turnover_cleaning` | `______` | wyjazd/przyjazd gości | `______` | dowód przed/po | `[ ]` tak `[ ]` nie | nie oznacza zarządzania najmem |
| Pościel / pranie | `linen_laundry` | `______` | `______` | `______` | `______` | `[ ]` tak `[ ]` nie | kto pierze i uzupełnia stan: `______` |
| Kontrola po gościach | `guest_check` | `______` | termin z kalendarza gotowości | `______` | raport / zdjęcia referencyjne | `[ ]` tak `[ ]` nie | bez obsługi rezerwacji, cen i wiadomości do gości |
| Dostęp dla wykonawcy | `vendor_access` | `______` | decyzja właściciela / zlecenie | `______` | log dostępu + raport | `[ ]` tak `[ ]` nie | Sentinel nie gwarantuje pracy wykonawcy |
| Balkon / zewnętrzna kontrola wizualna | `exterior_visual_check` | `______` | wizyta nadzorcza | `______` | notatka / zdjęcie referencyjne | `[ ]` tak `[ ]` nie | tylko widoczne elementy, bez prac technicznych |
| Media / świadomość odcięć | `utility_shutoff_awareness` | `______` | pierwsza wizyta / zmiana danych | `______` | notatka lokalizacji | `[ ]` tak `[ ]` nie | lokalizacja zaworów/wyłączników, bez napraw |
| Komunikaty wspólnoty / budynku | `community_notice_check` | `______` | wizyta / dostęp do tablicy | `______` | notatka | `[ ]` tak `[ ]` nie | tylko widoczne komunikaty |

## 5. Zasady powiadomienia i przyjazdu

| Temat | Wartość domyślna | Omówione? | Potwierdzone? | Nadpisanie / wyjątek | Status |
|---|---|---|---|---|---|
| Powiadomienie o przyjeździe właściciela | `______` | `[ ]` tak `[ ]` nie | `[ ]` tak `[ ]` nie | `______` | `______` |
| Krótki termin przyjazdu | `______` | `[ ]` tak `[ ]` nie | `[ ]` tak `[ ]` nie | `______` | `______` |
| Gotowość lokalu | `______` | `[ ]` tak `[ ]` nie | `[ ]` tak `[ ]` nie | `______` | `______` |
| Sprzątanie gotowości | `______` | `[ ]` tak `[ ]` nie | `[ ]` tak `[ ]` nie | `______` | `______` |
| Sprzątanie rotacyjne | `______` | `[ ]` tak `[ ]` nie | `[ ]` tak `[ ]` nie | `______` | `______` |
| Dostęp wykonawcy | `______` | `[ ]` tak `[ ]` nie | `[ ]` tak `[ ]` nie | `______` | `______` |

Krótki termin może ograniczyć wykonanie gotowości. Nie zmienia to znaczenia SLA: SLA dotyczy reakcji / decyzji, nie gwarantowanego rezultatu.

## 6. Sprzątanie i gotowość

| Pole | Wartość |
|---|---|
| Model sprzątania | `[ ]` cleaner Sentinel `[ ]` cleaner wybrany przez właściciela `[ ]` nie dotyczy `[ ]` oczekuje na decyzję |
| Zakres sprzątania | `[ ]` gotowość właściciela `[ ]` rotacja gości `[ ]` oba `[ ]` nie obejmuje |
| Odpowiedzialność za środki / produkty | `[ ]` Sentinel `[ ]` właściciel `[ ]` przechowywane w lokalu `[ ]` zakup za zgodą właściciela `[ ]` oczekuje na decyzję |
| Postępowanie przy braku środków | `[ ]` raport bez zakupu `[ ]` zakup po zgodzie właściciela `[ ]` stała zgoda w limicie `[ ]` oczekuje na decyzję |
| Pranie / pościel | `[ ]` Sentinel `[ ]` właściciel `[ ]` cleaner właściciela `[ ]` pralnia zewnętrzna `[ ]` nie obejmuje |
| Pytanie o ponowne sprzątanie | `[ ]` właściciel decyduje `[ ]` Sentinel poprawia, jeśli błąd cleaner Sentinel `[ ]` koszt wg ustalenia `[ ]` oczekuje na przegląd |
| Dowód przed/po | `[ ]` wymagany `[ ]` nie dotyczy `[ ]` oczekuje na decyzję |
| Odniesienie do checklisty | `CLN-02 / ______` |

Sprzątanie jest funkcją w ramach uzgodnionego nadzoru, a nie publiczną kategorią usługi. Dowód przed/po dokumentuje widoczną gotowość; nie jest certyfikatem higieny ani gwarancją stanu technicznego.

## 7. Dostęp, klucze, kody

| Pole | Wartość |
|---|---|
| Liczba kluczy deklarowana przez właściciela | `______` |
| Liczba kluczy potwierdzona przy przekazaniu | `[ ]` oczekuje na pierwszą wizytę / przekazanie `[ ]` potwierdzono: `______` |
| Oznaczenie kluczy | `______` (ID klucza, bez pełnego adresu) |
| Stan przechowania kluczy | `[ ]` nie przekazano `[ ]` przekazano częściowo `[ ]` przekazano i wpisano do rejestru `[ ]` oczekuje na AKC-02 |
| Metoda dostępu | `[ ]` klucz fizyczny `[ ]` smart lock `[ ]` kod alarmu `[ ]` wspólnota / portier `[ ]` inna: `______` |
| Stan kodów | `[ ]` brak systemu kodowego `[ ]` znany, ale nie wpisany tutaj `[ ]` zapisany wyłącznie w bezpiecznym rejestrze `[ ]` zmieniony przez właściciela `[ ]` właściciel odmawia przekazania - respektowane `[ ]` oczekuje na AKC-01 |
| Udostępnienie kodu cleanerowi Sentinel | `[ ]` tak `[ ]` nie `[ ]` nie dotyczy `[ ]` oczekuje na AKC-01 |
| Udostępnienie kodu cleanerowi właściciela | `[ ]` tak `[ ]` nie `[ ]` nie dotyczy `[ ]` oczekuje na AKC-01 |
| Udostępnienie kodu wykonawcy | `[ ]` tak `[ ]` nie `[ ]` nie dotyczy `[ ]` każdorazowo za zgodą właściciela `[ ]` oczekuje na AKC-01 |
| Klucze, które nie mogą opuścić nieruchomości | `______` |
| Osoby upoważnione do dostępu | `______` |
| Odniesienie do rejestru dostępu | `AKC-02 / AKC-04 / ______` |

Nie wolno wpisywać w tym dokumencie rzeczywistych kodów, haseł, PIN-ów, etykiet Wi-Fi, kodów sejfu ani pełnych danych dostępowych. Dokument zapisuje wyłącznie stan i zgodę na użycie dostępu.

## 8. Uprawnienia, płatne działania i decyzje właściciela

| Pole | Wartość |
|---|---|
| Doktryna startowa | Option A |
| Basic / Extended | Brak autonomicznego płatnego działania domyślnie; wymagana zgoda właściciela przed płatnym działaniem lub wydatkiem na wykonawcę |
| Oddzielny instrument uprawnienia dla Basic / Extended | `[ ]` brak `[ ]` istnieje po przeglądzie: `______` `[ ]` oczekuje na przegląd prawny |
| Full - standardowy limit działania ochronnego | EUR 300 na decyzję |
| Full - opcjonalny limit | `[ ]` EUR 500 uzgodnione `[ ]` nie uzgodnione `[ ]` nie dotyczy |
| Próg zgody właściciela | Basic / Extended: każde płatne działanie, chyba że istnieje osobny sprawdzony instrument; Full: powyżej uzgodnionego limitu |
| Kanał decyzji właściciela | `______` |
| Zasada potwierdzenia pisemnego | `[ ]` email `[ ]` WhatsApp jako dowód komunikacji + archiwizacja `[ ]` telefon tylko z pisemnym potwierdzeniem `[ ]` inne: `______` |
| Reguła rachunku / dowodu wydatku | `[ ]` wymagany rachunek `[ ]` próg de minimis oczekuje na księgowego `[ ]` nie dotyczy |
| Odniesienie do księgowości | `[ACCOUNTANT REVIEW REQUIRED]` dla progów, zwrotów i rozliczeń |
| Wydajność wykonawcy | Sentinel może koordynować dostęp i dokumentację; nie gwarantuje rezultatu pracy wykonawcy |

Minimalne działanie wymagane przez służby awaryjne albo administrację wspólnoty może zostać udokumentowane, jeżeli sytuacja tego wymaga. Nie oznacza to jednak wcześniej autoryzowanego mandatu Sentinel do wydatków w Basic / Extended. Nie wolno tworzyć limitu euro dla Basic / Extended.

## 9. Kontakty i kanały decyzyjne

| Kontakt / kanał | Dane / status | Użycie | Uwagi |
|---|---|---|---|
| Główny kontakt decyzyjny właściciela | `______` | decyzje operacyjne i płatne działania | `______` |
| Kontakt zapasowy | `______` | gdy właściciel nie odpowiada | `______` |
| Kontakt wspólnoty / administracji | `______` | sprawy budynku / awarie wspólnotowe | `[ ]` podano `[ ]` oczekuje `[ ]` nie dotyczy |
| Kontakt ubezpieczeniowy / szkoda | `______` | ścieżka roszczeń właściciela | `[ ]` podano `[ ]` oczekuje `[ ]` nie dotyczy |
| Kontakt dostawcy mediów | `______` | woda / prąd / gaz, jeśli podano | `[ ]` podano `[ ]` oczekuje `[ ]` nie dotyczy |
| Oficjalne archiwum | `______` | archiwum rekordu i dowodów | WhatsApp nie jest oficjalnym archiwum |
| Kanał operacyjny pomocniczy | `[ ]` email `[ ]` WhatsApp `[ ]` telefon `[ ]` inny: `______` | komunikacja robocza | musi mieć ślad w archiwum |

## 10. Dowody, zdjęcia i dane

| Pole | Wartość |
|---|---|
| Referencja bazowego zestawu dowodowego | `______` |
| Referencje zdjęć / dowodów | `______` |
| Dostawa wybranych zdjęć | `[ ]` email `[ ]` link z archiwum `[ ]` oba `[ ]` nie dotyczy |
| Pełny zestaw dowodów | strukturalne zaszyfrowane archiwum: `______` |
| Strefy ograniczone | `______` |
| Retencja / prywatność | `[LAWYER REVIEW REQUIRED]` do potwierdzenia z polityką prywatności i harmonogramem retencji |

Nie fotografować:

- dokumentów tożsamości, paszportów, dokumentów prawnych;
- kart płatniczych, faktur z pełnymi danymi, dokumentów bankowych;
- kodów alarmu, haseł, routerów / etykiet Wi-Fi, kodów sejfu;
- dzieci, zdjęć rodzinnych i prywatnych materiałów osobistych;
- wnętrza zamkniętych szaf, sejfów, prywatnych schowków lub stref wyłączonych;
- przedmiotów wrażliwych, jeśli wystarczy notatka operacyjna.

Jeżeli element wrażliwy ma znaczenie operacyjne, zapisać fakt widoczny bez fotografowania. Dowody opisują widoczny stan; nie są diagnozą techniczną.

## 11. Wyłączenia i brak obietnic

| Obszar | Wyłączenie |
|---|---|
| Zarządzanie nieruchomością | Sentinel nie przejmuje ogólnego zarządzania nieruchomością właściciela |
| Zarządzanie najmem | Brak obsługi rezerwacji, cen, ogłoszeń, meldowania gości lub komunikacji z gośćmi, chyba że osobno i wyraźnie poza tym dokumentem |
| Concierge / lifestyle | Brak usług lifestyle, zakupów osobistych, organizacji wygody lub ogólnej opieki |
| Diagnoza techniczna | Sentinel dokumentuje widoczne fakty; diagnoza należy do właściwego specjalisty |
| Gwarancja rozwiązania | SLA oznacza reakcję / decyzję, nie gwarantowany rezultat |
| Wykonawcy | Sentinel nie gwarantuje dostępności, ceny ani jakości pracy wykonawcy |
| Usługi niewymienione | Jeżeli coś nie jest wpisane jako included, nie jest automatycznie objęte zakresem |
| Odpowiedzialność prawna / podatkowa | Zgodność prawna, podatkowa i ubezpieczeniowa pozostaje po stronie właściciela i właściwych doradców |

## 12. Weryfikacja podczas pierwszej wizyty

Pola, które mogą pozostać `pending first visit` przed fizyczną weryfikacją:

| Obszar | Status | Wynik po wizycie | Referencja dowodu |
|---|---|---|---|
| Lokalizacja zaworu wody | `[ ]` pending first visit `[ ]` potwierdzono `[ ]` nie dotyczy | `______` | `______` |
| Lokalizacja wyłącznika prądu | `[ ]` pending first visit `[ ]` potwierdzono `[ ]` nie dotyczy | `______` | `______` |
| Mechanika wejścia do budynku / wspólnoty | `[ ]` pending first visit `[ ]` potwierdzono `[ ]` nie dotyczy | `______` | `______` |
| Znane ryzyka widoczne | `[ ]` pending first visit `[ ]` potwierdzono `[ ]` brak widocznych | `______` | `______` |
| Bazowy zestaw zdjęć | `[ ]` pending first visit `[ ]` wykonano `[ ]` ograniczono | `______` | `______` |
| Liczba i typ kluczy | `[ ]` pending first visit `[ ]` potwierdzono `[ ]` rozbieżność | `______` | `______` |
| Komunikaty wspólnoty / zasady budynku | `[ ]` pending first visit `[ ]` potwierdzono `[ ]` brak dostępu | `______` | `______` |
| Strefy wyłączone / prywatne | `[ ]` pending first visit `[ ]` potwierdzono `[ ]` n/a | `______` | `______` |

## 13. Punkty otwarte i bramki przeglądu

| Kategoria | Punkty | Odpowiedzialny | Status |
|---|---|---|---|
| Decyzje właściciela | `______` | właściciel | `[ ]` otwarte `[ ]` zamknięte |
| Oczekuje na pierwszą wizytę | `______` | Sentinel | `[ ]` otwarte `[ ]` zamknięte |
| Przegląd prawny | `______` | prawnik / Owner | `[ ]` wymagany `[ ]` nie dotyczy |
| Przegląd księgowy | `______` | księgowy / Owner | `[ ]` wymagany `[ ]` nie dotyczy |
| Zmiana zakresu | `______` | właściciel + Sentinel | `[ ]` wymaga pisemnego potwierdzenia |
| Braki danych | `______` | `______` | `[ ]` otwarte `[ ]` zamknięte |

## 14. Potwierdzenie właściciela - robocze

To nie jest klauzula podpisu prawnego.

| Pole | Wartość |
|---|---|
| Właściciel potwierdza, że informacje operacyjne są wystarczająco dokładne do przygotowania pracy Sentinel, z zastrzeżeniem finalnej umowy i wymaganych przeglądów | `[ ]` tak `[ ]` nie `[ ]` częściowo: `______` |
| Właściciel rozumie, że pola oznaczone jako pending wymagają uzupełnienia przed użyciem operacyjnym albo przed użyciem wobec klienta | `[ ]` tak `[ ]` nie |
| Data roboczego potwierdzenia | `______` |
| Potwierdzone przez | `______` |

## 15. Wewnętrzny rejestr zmian

| Wersja | Data | Zmiana | Autor | Status |
|---|---|---|---|---|
| 0.1-working | `______` | Pierwszy czysty roboczy draft PL na bazie SCO-01 v0.3 | `______` | draft-source |
