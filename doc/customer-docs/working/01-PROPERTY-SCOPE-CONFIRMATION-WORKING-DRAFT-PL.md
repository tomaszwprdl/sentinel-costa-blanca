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

<!--
DOCX generator note: the YAML frontmatter above is internal repo metadata only.
It must not be rendered into the visible Word/PDF document body.
-->

# Potwierdzenie zakresu obsługi nieruchomości / Scope Register

Dokument roboczy operacyjny. Nie jest umową, nie jest finalnym brzmieniem prawnym i nie jest zatwierdzony do podpisu przez właściciela. Wymaga przeglądu po stronie Sentinel oraz, w oznaczonych miejscach, przeglądu prawnego i księgowego.

Ten dokument służy do uporządkowania informacji o nieruchomości, uzgodnionym zakresie, dostępie, kontakcie decyzyjnym, dokumentacji i ograniczeniach działania Sentinel. Pola niewypełnione muszą mieć status: `nie dotyczy`, `oczekuje na decyzję właściciela` albo `oczekuje na pierwszą wizytę`.

## 1. Kontrola dokumentu

| Pole | Wartość |
|---|---|
| ID dokumentu | `SCO-01 / ______` |
| Referencja nieruchomości | `SEN-PROP-______` |
| Wersja robocza | `______` |
| Data wypełnienia | `______` |
| Etap wypełnienia | ☐ rozmowa wstępna<br>☐ częściowo wypełnione - przed pierwszą wizytą<br>☐ po pierwszej wizycie<br>☐ test wewnętrzny<br>☐ wycofane |
| Język rekordu | ☒ PL<br>☐ EN<br>☐ inny: `______` |
| Kanał wypełnienia | ☐ spotkanie<br>☐ telefon<br>☐ wideo<br>☐ email<br>☐ WhatsApp<br>☐ inny: `______` |
| Uczestnicy | `______` |
| Operator wypełniający | `______` |
| Punkty nierozstrzygnięte | `______` |
| Odniesienie do archiwum roboczego | `______` |

## 2. Właściciel / nieruchomość / profil użycia

| Pole | Wartość |
|---|---|
| Referencja właściciela | `WLASC-______` |
| Imię i nazwisko / nazwa właściciela | `______` |
| Email właściciela | `______` |
| Telefon właściciela | `______` |
| Preferowany język kontaktu | ☐ polski<br>☐ angielski<br>☐ inny: `______` |
| Obszar nieruchomości | `______` (obszar / miejscowość, bez pełnego adresu w wersji roboczej) |
| Typ nieruchomości | ☐ apartament<br>☐ dom<br>☐ willa<br>☐ inny: `______` |
| Profil użycia | ☐ Nieobecność prywatna (`private`)<br>☐ Aktywne użycie przez gości (`guest`)<br>☐ Użycie mieszane / nieustalone (`mixed`) |
| Źródło kalendarza pobytów | ☐ nie dotyczy<br>☐ właściciel przekazuje daty<br>☐ współdzielony kalendarz<br>☐ email<br>☐ inne: `______` |
| Wiarygodność źródła kalendarza | ☐ potwierdzone<br>☐ wymaga testu<br>☐ oczekuje na decyzję właściciela<br>☐ nie dotyczy |
| Uwagi do profilu użycia | `______` |

Źródło kalendarza służy wyłącznie jako źródło terminów gotowości. Nie oznacza obsługi rezerwacji, cen, komunikacji z gośćmi ani zarządzania najmem.

## 3. Pakiet i poziom odpowiedzialności

| Pole | Wartość |
|---|---|
| Pakiet | ☐ Podstawowy / Basic<br>☐ Rozszerzony / Extended<br>☐ Pełny / Full<br>☐ do potwierdzenia |
| Znaczenie SLA | Czas reakcji / decyzji, nie gwarancja rozwiązania sprawy |
| Okno reakcji / decyzji | ☐ 48h<br>☐ 24h<br>☐ tego samego dnia<br>☐ inne zgodne z pakietem: `______` |
| Rytm wizyt / częstotliwość | `______` |
| Full - minimum wizyt | `min. 3/mies.` jeśli wybrano Full |
| Dodatkowe zdarzenia dostępu | `______` |
| Przypomnienie o odpowiedzialności | Pakiet określa rytm, intensywność, czas reakcji i pozycję decyzyjną; nie przenosi odpowiedzialności właściciela i nie tworzy gwarancji rezultatu |

Zasada stała: odpowiedzialność pakietowa ≠ uprawnienie awaryjne ≠ odpowiedzialność za szkodę. Sentinel dokumentuje widoczne fakty i działa w uzgodnionych granicach; nie stawia diagnoz technicznych.

## 4. Moduły zakresu

Status modułu: objęte zakresem / poza zakresem / nie dotyczy / oczekuje na decyzję właściciela / oczekuje na pierwszą wizytę. Wewnętrzne kody mogą zostać użyte pomocniczo: `included`, `not_included`, `n/a`, `owner_decision`, `first_visit`.

| Moduł | Kod | Status | Wyzwalacz / kiedy działa | Częstotliwość / limit | Dowód / rekord | Decyzja właściciela? | Uwagi / wyłączenia |
|---|---|---|---|---|---|---|---|
| Planowa wizyta nadzorcza | `scheduled_oversight_visit` | `______` | `______` | `______` | raport wizyty (`REC-01`) | ☐ tak<br>☐ nie | `______` |
| Przechowanie kluczy | `keyholding` | `______` | podpisane przekazanie kluczy | ciągłe / wg rejestru | rejestr kluczy (`AKC-02`) | ☐ tak<br>☐ nie | bez pełnego adresu na oznaczeniach |
| Gotowość przed przyjazdem właściciela | `pre_arrival_readiness` | `______` | zgłoszony termin przyjazdu | `______` | raport / checklista | ☐ tak<br>☐ nie | zależne od terminu powiadomienia |
| Sprzątanie gotowości | `cleaning_readiness` | `______` | przyjazd właściciela / uzgodniona gotowość | `______` | dowód przed/po | ☐ tak<br>☐ nie | funkcja w ramach nadzoru |
| Sprzątanie rotacyjne | `turnover_cleaning` | `______` | wyjazd/przyjazd gości | `______` | dowód przed/po | ☐ tak<br>☐ nie | nie oznacza zarządzania najmem |
| Pościel / pranie | `linen_laundry` | `______` | `______` | `______` | `______` | ☐ tak<br>☐ nie | kto pierze i uzupełnia stan: `______` |
| Kontrola po gościach | `guest_check` | `______` | termin z kalendarza gotowości | `______` | raport / zdjęcia referencyjne | ☐ tak<br>☐ nie | bez obsługi rezerwacji, cen i wiadomości do gości |
| Dostęp dla wykonawcy | `vendor_access` | `______` | decyzja właściciela / zlecenie | `______` | log dostępu + raport | ☐ tak<br>☐ nie | Sentinel nie gwarantuje pracy wykonawcy |
| Balkon / zewnętrzna kontrola wizualna | `exterior_visual_check` | `______` | wizyta nadzorcza | `______` | notatka / zdjęcie referencyjne | ☐ tak<br>☐ nie | tylko widoczne elementy, bez prac technicznych |
| Media / świadomość odcięć | `utility_shutoff_awareness` | `______` | pierwsza wizyta / zmiana danych | `______` | notatka lokalizacji | ☐ tak<br>☐ nie | lokalizacja zaworów/wyłączników, bez napraw |
| Komunikaty wspólnoty / budynku | `community_notice_check` | `______` | wizyta / dostęp do tablicy | `______` | notatka | ☐ tak<br>☐ nie | tylko widoczne komunikaty |

## 5. Zasady powiadomienia i przyjazdu

| Temat | Wartość domyślna / minimalne powiadomienie | Czy omówione? | Czy potwierdzone? | Nadpisanie / wyjątek | Status |
|---|---|---|---|---|---|
| Powiadomienie o przyjeździe właściciela | `______` | ☐ tak<br>☐ nie | ☐ tak<br>☐ nie | `______` | `______` |
| Krótki termin przyjazdu | `______` | ☐ tak<br>☐ nie | ☐ tak<br>☐ nie | `______` | `______` |
| Gotowość lokalu | `______` | ☐ tak<br>☐ nie | ☐ tak<br>☐ nie | `______` | `______` |
| Sprzątanie gotowości | `______` | ☐ tak<br>☐ nie | ☐ tak<br>☐ nie | `______` | `______` |
| Sprzątanie rotacyjne | `______` | ☐ tak<br>☐ nie | ☐ tak<br>☐ nie | `______` | `______` |
| Dostęp wykonawcy | `______` | ☐ tak<br>☐ nie | ☐ tak<br>☐ nie | `______` | `______` |

Krótki termin może ograniczyć wykonanie gotowości. Nie zmienia to znaczenia SLA: SLA dotyczy reakcji / decyzji, nie gwarantowanego rezultatu.

## 6. Sprzątanie i gotowość

| Pole | Wartość |
|---|---|
| Model sprzątania | ☐ cleaner Sentinel<br>☐ cleaner wybrany przez właściciela<br>☐ nie dotyczy<br>☐ oczekuje na decyzję |
| Zakres sprzątania | ☐ gotowość właściciela<br>☐ rotacja gości<br>☐ oba<br>☐ nie obejmuje |
| Odpowiedzialność za środki / produkty | ☐ Sentinel<br>☐ właściciel<br>☐ przechowywane w lokalu<br>☐ zakup za zgodą właściciela<br>☐ oczekuje na decyzję |
| Postępowanie przy braku środków | ☐ raport bez zakupu<br>☐ zakup po zgodzie właściciela<br>☐ stała zgoda w limicie<br>☐ oczekuje na decyzję |
| Pranie / pościel | ☐ Sentinel<br>☐ właściciel<br>☐ cleaner właściciela<br>☐ pralnia zewnętrzna<br>☐ nie obejmuje |
| Pytanie o ponowne sprzątanie | ☐ właściciel decyduje<br>☐ Sentinel poprawia, jeśli błąd cleaner Sentinel<br>☐ koszt wg ustalenia<br>☐ oczekuje na przegląd |
| Dowód przed/po | ☐ wymagany<br>☐ nie dotyczy<br>☐ oczekuje na decyzję |
| Odniesienie do checklisty | `CLN-02 / ______` |

Sprzątanie jest funkcją w ramach uzgodnionego nadzoru, a nie publiczną kategorią usługi. Dowód przed/po dokumentuje widoczną gotowość; nie jest certyfikatem higieny ani gwarancją stanu technicznego.

## 7. Dostęp, klucze, kody

| Pole | Wartość |
|---|---|
| Liczba kluczy deklarowana przez właściciela | `______` |
| Liczba kluczy potwierdzona przy przekazaniu | ☐ oczekuje na pierwszą wizytę / przekazanie<br>☐ potwierdzono: `______` |
| Oznaczenie kluczy | `______` (ID klucza, bez pełnego adresu) |
| Stan przechowania kluczy | ☐ nie przekazano<br>☐ przekazano częściowo<br>☐ przekazano i wpisano do rejestru<br>☐ oczekuje na AKC-02 |
| Metoda dostępu | ☐ klucz fizyczny<br>☐ smart lock<br>☐ kod alarmu<br>☐ wspólnota / portier<br>☐ inna: `______` |
| Stan kodów | ☐ brak systemu kodowego<br>☐ znany, ale nie wpisany tutaj<br>☐ zapisany wyłącznie w bezpiecznym rejestrze<br>☐ zmieniony przez właściciela<br>☐ właściciel odmawia przekazania - respektowane<br>☐ oczekuje na AKC-01 |
| Udostępnienie kodu cleanerowi Sentinel | ☐ tak<br>☐ nie<br>☐ nie dotyczy<br>☐ oczekuje na AKC-01 |
| Udostępnienie kodu cleanerowi właściciela | ☐ tak<br>☐ nie<br>☐ nie dotyczy<br>☐ oczekuje na AKC-01 |
| Udostępnienie kodu wykonawcy | ☐ tak<br>☐ nie<br>☐ nie dotyczy<br>☐ każdorazowo za zgodą właściciela<br>☐ oczekuje na AKC-01 |
| Klucze, które nie mogą opuścić nieruchomości | `______` |
| Osoby upoważnione do dostępu | `______` |
| Odniesienie do rejestru dostępu | `AKC-02 / AKC-04 / ______` |

Nie wolno wpisywać w tym dokumencie rzeczywistych kodów, haseł, PIN-ów, etykiet Wi-Fi, kodów sejfu ani pełnych danych dostępowych. Dokument zapisuje wyłącznie stan i zgodę na użycie dostępu.

## 8. Uprawnienia, płatne działania i decyzje właściciela

| Pole | Wartość |
|---|---|
| Zasada uprawnień startowych | Basic / Extended: brak autonomicznego płatnego działania domyślnie; zgoda właściciela wymagana przed płatnym działaniem lub wydatkiem na wykonawcę (wewnętrzna referencja: Option A) |
| Basic / Extended | Brak autonomicznego płatnego działania domyślnie; wymagana zgoda właściciela przed płatnym działaniem lub wydatkiem na wykonawcę |
| Oddzielny instrument uprawnienia dla Basic / Extended | ☐ brak<br>☐ istnieje po przeglądzie: `______`<br>☐ oczekuje na przegląd prawny |
| Full - standardowy limit działania ochronnego | EUR 300 na decyzję |
| Full - opcjonalny limit | ☐ EUR 500 uzgodnione<br>☐ nie uzgodnione<br>☐ nie dotyczy |
| Próg zgody właściciela | Basic / Extended: każde płatne działanie, chyba że istnieje osobny sprawdzony instrument; Full: powyżej uzgodnionego limitu |
| Kanał decyzji właściciela | `______` |
| Zasada potwierdzenia pisemnego | ☐ email<br>☐ WhatsApp jako dowód komunikacji + archiwizacja<br>☐ telefon tylko z pisemnym potwierdzeniem<br>☐ inne: `______` |
| Reguła rachunku / dowodu wydatku | ☐ wymagany rachunek<br>☐ próg de minimis oczekuje na księgowego<br>☐ nie dotyczy |
| Odniesienie do księgowości | `[ACCOUNTANT REVIEW REQUIRED]` dla progów, zwrotów i rozliczeń |
| Wydajność wykonawcy | Sentinel może koordynować dostęp i dokumentację; nie gwarantuje rezultatu pracy wykonawcy |

Minimalne działanie wymagane przez służby awaryjne albo administrację wspólnoty może zostać udokumentowane, jeżeli sytuacja tego wymaga. Nie oznacza to jednak wcześniej autoryzowanego mandatu Sentinel do wydatków w Basic / Extended. Nie wolno tworzyć limitu euro dla Basic / Extended.

## 9. Kontakty i kanały decyzyjne

| Kontakt / kanał | Dane / status | Użycie | Uwagi |
|---|---|---|---|
| Główny kontakt decyzyjny właściciela | `______` | decyzje operacyjne i płatne działania | `______` |
| Kontakt zapasowy | `______` | gdy właściciel nie odpowiada | `______` |
| Kontakt wspólnoty / administracji | `______` | sprawy budynku / awarie wspólnotowe | ☐ podano<br>☐ oczekuje<br>☐ nie dotyczy |
| Kontakt ubezpieczeniowy / szkoda | `______` | ścieżka roszczeń właściciela | ☐ podano<br>☐ oczekuje<br>☐ nie dotyczy |
| Kontakt dostawcy mediów | `______` | woda / prąd / gaz, jeśli podano | ☐ podano<br>☐ oczekuje<br>☐ nie dotyczy |
| Oficjalne archiwum | `______` | archiwum rekordu i dowodów | WhatsApp nie jest oficjalnym archiwum |
| Kanał operacyjny pomocniczy | ☐ email<br>☐ WhatsApp<br>☐ telefon<br>☐ inny: `______` | komunikacja robocza | musi mieć ślad w archiwum |

## 10. Dowody, zdjęcia i dane

| Pole | Wartość |
|---|---|
| Referencja bazowego zestawu dowodowego | `______` |
| Referencje zdjęć / dowodów | `______` |
| Dostawa wybranych zdjęć | ☐ email<br>☐ link z archiwum<br>☐ oba<br>☐ nie dotyczy |
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
| Usługi niewymienione | Jeżeli coś nie jest wpisane jako objęte zakresem (`included`), nie jest automatycznie objęte zakresem |
| Odpowiedzialność prawna / podatkowa | Zgodność prawna, podatkowa i ubezpieczeniowa pozostaje po stronie właściciela i właściwych doradców |

## 12. Weryfikacja podczas pierwszej wizyty

Pola, które mogą pozostać jako oczekujące na pierwszą wizytę (`pending first visit`) przed fizyczną weryfikacją:

| Obszar | Status | Wynik po wizycie | Referencja dowodu |
|---|---|---|---|
| Lokalizacja zaworu wody | ☐ oczekuje na pierwszą wizytę<br>☐ potwierdzono<br>☐ nie dotyczy | `______` | `______` |
| Lokalizacja wyłącznika prądu | ☐ oczekuje na pierwszą wizytę<br>☐ potwierdzono<br>☐ nie dotyczy | `______` | `______` |
| Mechanika wejścia do budynku / wspólnoty | ☐ oczekuje na pierwszą wizytę<br>☐ potwierdzono<br>☐ nie dotyczy | `______` | `______` |
| Znane ryzyka widoczne | ☐ oczekuje na pierwszą wizytę<br>☐ potwierdzono<br>☐ brak widocznych | `______` | `______` |
| Bazowy zestaw zdjęć | ☐ oczekuje na pierwszą wizytę<br>☐ wykonano<br>☐ ograniczono | `______` | `______` |
| Liczba i typ kluczy | ☐ oczekuje na pierwszą wizytę<br>☐ potwierdzono<br>☐ rozbieżność | `______` | `______` |
| Komunikaty wspólnoty / zasady budynku | ☐ oczekuje na pierwszą wizytę<br>☐ potwierdzono<br>☐ brak dostępu | `______` | `______` |
| Strefy wyłączone / prywatne | ☐ oczekuje na pierwszą wizytę<br>☐ potwierdzono<br>☐ nie dotyczy | `______` | `______` |

## 13. Punkty otwarte i bramki przeglądu

| Kategoria | Punkty | Odpowiedzialny | Status |
|---|---|---|---|
| Decyzje właściciela | `______` | właściciel | ☐ otwarte<br>☐ zamknięte |
| Oczekuje na pierwszą wizytę | `______` | Sentinel | ☐ otwarte<br>☐ zamknięte |
| Przegląd prawny | `______` | prawnik / Sentinel | ☐ wymagany<br>☐ nie dotyczy |
| Przegląd księgowy | `______` | księgowy / Sentinel | ☐ wymagany<br>☐ nie dotyczy |
| Zmiana zakresu | `______` | właściciel + Sentinel | ☐ wymaga pisemnego potwierdzenia |
| Braki danych | `______` | `______` | ☐ otwarte<br>☐ zamknięte |

## 14. Potwierdzenie właściciela - robocze

To nie jest klauzula podpisu prawnego.

| Pole | Wartość |
|---|---|
| Właściciel potwierdza, że informacje operacyjne są wystarczająco dokładne do przygotowania pracy Sentinel, z zastrzeżeniem finalnej umowy i wymaganych przeglądów | ☐ tak<br>☐ nie<br>☐ częściowo: `______` |
| Właściciel rozumie, że pola oznaczone jako oczekujące wymagają uzupełnienia przed użyciem operacyjnym albo przed przekazaniem jako dokument właściciela | ☐ tak<br>☐ nie |
| Data roboczego potwierdzenia | `______` |
| Potwierdzone przez | `______` |

## 15. Wewnętrzny rejestr zmian

| Wersja | Data | Zmiana | Autor | Status |
|---|---|---|---|---|
| 0.1-working | `______` | Pierwszy czysty roboczy draft PL na bazie SCO-01 v0.3 | `______` | źródło robocze (`draft-source`) |
