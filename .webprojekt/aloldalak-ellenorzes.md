# Négyoldalas weboldal és design system ellenőrzése

Dátum: 2026. november 3.

## Elkészült
- index.html: a jóváhagyott főoldal; a korábbi koncepcióválasztó helyét átvette.
- kezelesek.html: hero, négy problémaikon, Belico, Mesotica, további kezelések, eredmények, garancia, három eredeti csomag és ár, vélemények, folyamat, időpontkérő.
- rolunk.html: hero, teljes szakmai történet, négy szakmai kiemelés, öt érték, szalon, CTA, időpontkérő.
- kapcsolat.html: egy kapcsolati űrlap, elérhetőség és nyitvatartás, térkép, GYIK.
- assets/site.css és site.js: minden oldal közös megjelenése és menüviselkedése.
- design-system.md: a jóváhagyott főoldal tényleges CSS-értékei alapján frissítve és megnyitva.
- Kilenc optimalizált aloldali WebP-kép; az eredetik változatlanok.

## Automatizált szerkezeti ellenőrzés
A négy oldalon pontosan egy H1 szerepel; nincs duplikált id, hiányzó helyi fájl, hiányzó belső célpont vagy alt nélküli kép. A Kapcsolat, Kezelések és Rólunk oldalon egy-egy űrlap van; a főoldalon időpontkérő és hírlevél. Az oldalak nem tartalmaznak egymástól eltérő beágyazott stílusokat; ugyanaz a közös stílusforrás szolgálja ki őket.

## Böngészős ellenőrzés
1280px és 375px szélességen mind a négy oldalon nincs vízszintes túlcsordulás. A Kezelések oldal 320px szélességen is egyoszlopos csomagkártyákkal működik. A mobilmenüből a Kezelések oldal megnyitható. A fejléc aktív menüpontja az adott oldalt jelöli.

A nagy fotók számított rádiusza 12px, a gombfelirat fehér, az elsődleges szín #60867B, a törzs Asap. Az aloldali hero szövege animáció nélkül, teljes fedettséggel jelenik meg. A betöltött képek között nincs hibás kép. A hivatkozások teljes helyi fájlállományát külön ellenőriztük.

Az eredeti csomagárak megmaradtak: 79 000 Ft, 99 000 Ft, 59 000 Ft.

## Még hátravan
- Felhasználói vizuális átnézés és további finomhangolás.
- Valódi címzetthez kézbesítő űrlap és ellenőrzött próbaüzenet.
- A kapott adatvédelmi PDF tartalmi egyeztetése és beillesztése.
- Hírlevél/kisokos szolgáltatási döntések.
- Netlify-élesítés és élő telefonos próba.
