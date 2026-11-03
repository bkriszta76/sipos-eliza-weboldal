# Eliza Beauty Salon – a jóváhagyott főoldal design systeme

Állapot: a felhasználó által jóváhagyott főoldalból rögzített megvalósítási rendszer. Frissítve: 2026. november 3.

Elsődleges referencia: index.html (a korábbi koncepcio-1-botanikus-harmonia.html ugyanennek a kompatibilis előnézeti másolata). A közös megvalósítás az assets/site.css és assets/site.js fájlokban található. Minden főoldal és aloldal ezt használja, nem tartalmaz saját beágyazott stílusrendszert.

A korábbi, általános elrendezési javaslatok helyett az alábbi értékek a kész főoldal tényleges CSS-szabályait rögzítik. A Figma és a felhasználó legutóbbi képes korrekciói a vizuális referencia. Az eredeti oktatási arculat változatlanul a design-system.eredeti.md fájlban marad.

## 1. Színek

| Szerep / CSS-változó | Érték | Alkalmazás |
|---|---|---|
| --color-brand-primary, --color-brand-accent | #60867B | Fejléc, sötétzöld szakasz, gomb |
| --color-brand-secondary, --color-brand-surface | #D6E5E1 | Világos szakasz, folyamatkártya, véleménykártya, lábléc |
| --color-brand-bg | #FFFFFF | Oldalháttér, űrlapmező |
| --color-brand-text | #011111 | Címsorok és erős szövegek világos háttéren |
| --color-brand-muted | #62636A | Törzsszöveg világos háttéren |
| Gomb hover | #4B6A60 | Egérrel rámutatott gomb |
| Fehér szöveg | #FFFFFF | Márkazöld felületen minden szöveg és gombfelirat |

A felhasználó kifejezett döntése a márkazöld alapon fehér szöveg. A halványzöld kártyák szövege sötét marad. A fehér / #60867B számított kontrasztja 4,04:1; ez a jóváhagyott paletta ismert tulajdonsága, nem teljes körű akadálymentességi minősítés.

## 2. Tipográfia

Betűcsalád: Asap, tartalék: system-ui, sans-serif. Betöltött vastagságok: 400, 600, 700. Magyar szöveg, tegező hang, valódi ékezetes karakterek.

| Elem | Tényleges méret | Vastagság | Sormagasság |
|---|---|---|---|
| H1 | clamp(38px, 4.6vw, 60px) | 700 | 1.25; a főoldali hero 460px alatt 1.18 |
| H2 | clamp(30px, 3.2vw, 40px) | 700 | 1.25 |
| H3 általános | 24px | 700 | 1.25 |
| Folyamatkártya H3 | 24px desktop, 21px 760px alatt, 22px 460px alatt | 700 | 1.25 |
| Kicker | 20px, hero mobilon 18px | 600 | 1.4 |
| Törzsszöveg | 16px | 400 | 1.65 |
| Gomb | 16px, nagybetűs | 700 | 1.4 |
| Mezőcímke | 15px | 600 | örökölt |
| Lábléc oszlopcím | 20px | 700 | 1.25 |
| Lábléc alsó sor | 12px | 400 | örökölt |

H1 betűköz: -0.035em; H2: -0.025em; H3: -0.015em. A véleményblokk címe mobilon 32px. A H4 jelenleg nem önállóan használt szint, ezért nincs hozzá külön megvalósított méretszabály.

Az aloldali csomagkártyák címe 28px, 1050px alatt 24px; az ár 36px, 1050px alatt 30px. Ezek tartalmi kiegészítések, a közös betű- és színrendszer részei.

## 3. Szélességek és térközök

- .wrap: min(1260px, 87.5%), középre rendezve.
- 760px és az alatti képernyőn .wrap: calc(100% - 40px), vagyis 20px oldalsó margó.
- Általános .section függőleges padding: clamp(64px, 7vw, 104px).
- Hero függőleges padding: clamp(80px, 11.11vw, 160px); mobilon 64px.
- .hero-grid, .about-grid és .content-split: két egyenlő oszlop, clamp(32px, 5.55vw, 80px) köz.
- A középre rendezett .section-head alatt 52px térköz, mobilon 35px.
- Főoldali szekciófej max. 760px, véleményeknél 850px; aloldalon legfeljebb 900px. A közvetlen szekciófej szélessége min(900px, 87.5%), mobilon calc(100% - 40px).
- GYIK lista max. 1046px.
- Szöveges bekezdések között jellemzően 20–24px.
- CTA .invitation: 80px függőleges padding, mobilon 64px; szöveg balra, gomb jobbra, mobilon egymás alatt.

## 4. Közös komponensek

| Elnevezés / CSS-osztály | Szerep és megjelenés |
|---|---|
| .site-header, .header-inner | Ragadós, márkazöld fejléc, 88px minimális magasság |
| .brand | Fehér SVG-logó zöld alapon, 328px szélesség, max. 40%; magasság legfeljebb 48px |
| .main-nav | Fehér menüpontok, aktív/hover fehér aláhúzás; valódi HTML-oldalakra vezet |
| .menu-toggle | Fehér mobil menügomb; aria-expanded állapottal |
| .hero, .hero-grid | Bal oldali bevezető, jobb oldali középre komponált fotó |
| .button | Olívazöld háttér és keret, fehér felirat, 4px rádiusz; min-height 54px; padding 15px 26px, keskeny mobilon vízszintesen 20px |
| .button-light, .button-outline | A felhasználó döntése alapján szintén olívazöld/fehér változat; nincs eltérő világos gomb |
| .text-link | Aláhúzott szöveges hivatkozás, 5px aláhúzási eltolás |
| .benefit-grid, .benefit | Középre rendezett előnyök, az ikon középen a cím és szöveg fölött |
| .reviews, .review | Zöld szakasz fehér címmel; halványzöld véleménykártya sötét szöveggel, idézőjel-dekoráció nélkül |
| .about-grid, .about-photo | Két egyenlő oszlop; nagy, négy finoman kerekített sarkú portré, képfelirat nélkül |
| .process-grid, .process-step | Négy halványzöld kép–szöveg kártya; padding 20px; nincs lépésszám |
| .faq, .faq-list | Márkazöld szakasz fehér címmel és szöveggel; natív details/summary nyitás |
| .form-grid, .field | Közös név/e-mail/üzenet űrlap; látható címkék, fehér mezők |
| .contact-grid, .contact-map | Balra űrlap, jobbra Figma-térképillusztráció; mobilon egymás alatt |
| .site-footer, .footer-grid | Halványzöld lábléc: logó/leírás; elérhetőség/nyitvatartás; oldalak; közösségi ikonok |
| .package-grid, .package | Aloldali csomagok, halványzöld háttér, közös gombok |
| .values-list | Rólunk oldal értékei, sötét szöveg és márkazöld pipák |

A szöveges linkek a szöveg színét öröklik. Nem minden szöveg link. A közösségi ikonokhoz nincs megadott profilcím, ezért nem vezetnek kitalált profilokra.

Űrlapmezők: 1px #62636A88 keret, 3px rádiusz, 12px 15px padding, legalább 52px magas beviteli mező; textarea min. 136px. Fókusz: 3px sötét körvonal, 5px eltolás.

## 5. Fotók, logók, növénydekoráció

- A nagy fotók négy sarka egyformán 12px rádiuszú. Nincs félkörös vagy egyetlen sarkon nagy kivágás.
- A hero és a bemutatkozó képe négyzetes; a portré látható része középre igazított.
- A vélemények apró portréi 56 × 56px-es körök maradnak.
- A levélminta eredeti, átlátszó exportjának webes változata: képek/web/figma-leveldekoracio.webp.
- A halványzöld bemutatkozás és CTA hátterében a növény opacity értéke 0.12.
- A véleménynél jobbra felül, az előnyöknél balra, a GYIK-nál balra, a láblécben jobbra lent jelenik meg a minta.
- A dekoráció z-index: 0, a tartalom fölötte; pointer-events: none, alt üres, aria-hidden: true; a szakasz levágja a kifutó részeket.
- Fejléc: logók/feher logo.svg; lábléc: logók/zold logo.svg; böngészőikon: logók/eliza beauty salon favikon 1.svg.
- A logó oldalarányát megőrizzük. Nem gépeljük újra és nem nyújtjuk.
- Az eredeti fotók megmaradnak, a weboldalak WebP-változatokat használnak.

## 6. Mobilos viselkedés

- 1050px alatt a főoldali előnyök és folyamat két oszlopra váltanak; a lábléc két oszlopos.
- 760px alatt a fejléc hamburgeres menüt használ; a hero, bemutatkozás, tartalmi osztott szakaszok és a kapcsolat egy oszlopba rendeződnek.
- Mobil logó: 220px, 460px alatt 195px; legfeljebb 62% szélesség.
- Az előnyök ikonjai és szövegei mobilon is középre rendezettek.
- 460px alatt a folyamat és a lábléc egy oszlopos.
- Az aloldali csomagok 760px alatt egy oszloposak; a problémaikonok 1050px alatt kettő, 760px alatt egy oszlopban jelennek meg.
- Az időpontkérő és a fontos gombok kényelmes szélességűek; nincs vízszintes görgetés.
- A menü kiválasztás, Escape és a fejlécen kívüli kattintás után bezárul.
- A reduced-motion beállítás kikapcsolja az animációt és a sima görgetést.

## 7. Fájlok és újrahasználat

- index.html: a jóváhagyott főoldal, már nem koncepcióválasztó.
- kezelesek.html: kezelések, problémaikonok, csomagok, vélemények, folyamat, közös időpontkérő.
- rolunk.html: Eliza története, értékek, szalon, CTA, közös időpontkérő.
- kapcsolat.html: egyetlen kapcsolati űrlap, elérhetőségek, nyitvatartás, térkép, GYIK.
- assets/site.css: az összes oldal közös stílusforrása.
- assets/site.js: közös mobilmenü és fejlécviselkedés.
- A fejléc/lábléc HTML-je statikusan szerepel az oldalakon, közös sablonból készült. A CSS és JS nem ismétlődik oldalanként.

## 8. Ellenőrzés és jelenlegi funkcionális határ

A színeket, méretképleteket, rádiuszokat, paddingeket és töréspontokat a tényleges assets/site.css alapján egyeztettük. A böngészős ellenőrzés eredménye a .webprojekt/aloldalak-ellenorzes.md fájlba kerül.

Az űrlapok vizuálisan elkészültek, de a kézbesítés külön következő feladat. A tiltott gombok nem mutatnak hamis sikerüzenetet. Az adatkezelési PDF és a hírlevél működése még nincs ebbe a lépésbe integrálva. Nyilvános Netlify-élesítés nem történt.

