# A főoldal első változata – ellenőrzés

Dátum: 2026. november 3.
Irány: Botanikus harmónia, egyetlen jóváhagyott változat.
Fájl: koncepcio-1-botanikus-harmonia.html.
A projekt gyökerében lévő index.html erről az egy változatról ad belépőt. A képek/index.html változatlanul a képleltár.

## Elkészült

- Teljes főoldal: nyitószakasz, vélemények, előnyök, Eliza bemutatkozása, négy lépéses folyamat, felhívás, GYIK, hírlevélblokk, időpontkérő és lábléc.
- Saját Asap betűtípus, zöld arculat, logó, hozzárendelt képek és levéldekoráció.
- 11 optimalizált WebP-változat az eredeti képek megtartásával. Az Eliza-portré webes változata az üres sávok nélkül készült; a növényi dekoráció átlátszóságát az eredeti Figma-maszkból állítottuk helyre.
- Működő mobilmenü és natív details alapú GYIK.
- Oldalcím, meta description, egy H1, strukturált címsorok, képekhez alt attribútumok, látható billentyűzetes fókusz és reduced-motion stílus.
- Önálló HTML, inline CSS és JavaScript; a prototípus a skill szerinti Tailwind Play CDN-t és Google Fonts-betöltést tartalmaz. A saját CSS hálózati Tailwind nélkül is biztosítja az elrendezést.

## Ellenőrzések

- Böngészős vizuális ellenőrzés desktopon (1280px) és mobilon (375px).
- Vízszintes túlcsordulás ellenőrzése 320, 375, 768 és 1280px szélességnél: nincs.
- Asap font betöltése: ellenőrizve, címsor fontvastagsága 700.
- A Tailwind alapstílusai által okozott címsor-felülírás javítva.
- A levéldekoráció fekete háttere megszűnt, az eredeti színréteg és maszk alapján.
- Mobilmenü nyitás és Escape bezárás: sikeres.
- GYIK kérdés lenyitása és válasz megjelenése: sikeres.
- Betöltött képek között nincs hibás kép.
- JavaScript hibanaplóban nincs hiba.
- Statikus ellenőrzés: teljes HTML-zárás; 1 H1; 4 GYIK; 2 form; nincs duplikált id; minden helyi fájl és horgony létezik; mindkét inline JavaScript blokk szintaktikailag helyes.

## Még nincs kész / nem része ennek a főoldal-prototípusnak

- A Kezelések, Rólunk és Kapcsolat külön oldala. A prototípus menüje jelenleg a megfelelő főoldali szakaszokra mutat.
- Az időpontkérő és a hírlevél tényleges beküldése. A gombok letiltottak, az űrlapok nem küldenek adatot és nem jeleznek hamis sikert.
- A Fegyvertár adatkezelési sablonjából készült tájékoztató; a lábléc a hiányt jelzi.
- Valódi e-mail-címzett, kisokos és feliratkozási szolgáltató.
- GitHub-feltöltés és nyilvános Netlify-élesítés.
- Tailwind éles használatra alkalmas CSS-re cserélése.
- Tényleges, élő oldalon telefonról küldött próbaüzenet.

A következő lépés a főoldal felhasználói megtekintése és visszajelzése. Új változat nem készült; egy irány létezik.
