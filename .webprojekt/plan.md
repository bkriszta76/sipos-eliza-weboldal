# Weboldal-generálási terv

## Állapot

A felhasználó 2026. november 3-án kifejezetten jóváhagyta a briefet, és egyetlen változat generálását kérte. A felhasználó a külön megvalósítási tervet is jóváhagyta: „Mehet a főoldalnak az elkészítése.” A főoldal-prototípus elkészítése megkezdődött.

## Brand brief összefoglaló

Az Eliza Beauty Salon személyre szabott kozmetikai kezeléseket kínáló szalon. Az oldal fő feladata az időpontkérések támogatása. A megadott oldalszövegekből, rendezett képekből és saját arculatból dolgozunk. A saját Figma-terv a megjelenés alapja, nem új márkát tervezünk.

## Egyetlen irány: Botanikus harmónia

- **Paletta:** márkazöld #60867B, halványzöld #D6E5E1, sötét #011111, szürke #62636A és fehér #FFFFFF.
- **Betű:** Asap címsorokhoz és törzsszöveghez; 400, 600 és 700 vastagság, a design system méretskálájával.
- **Logó:** a saját levélmotívumos Eliza Beauty Salon SVG a logók mappából.
- **Nyitószakasz:** a Figma szerinti szöveg bal oldalon, hozzárendelt portré jobb oldalon; bőséges tér és visszafogott levéldekoráció.
- **Ritmus:** fehér, halványzöld és zöld felületek váltakozása, természetes kozmetikai fotók.
- **Szerkezet:** a briefben rögzített főoldalszakaszok, a saját drótvázhoz igazítva.
- **Mobil:** a szöveg és kép jól olvasható egyoszlopos elrendezést kap; a menü, a kártyák és az űrlap kis képernyőre igazodik.
- **Mozgás:** nyugodt, visszafogott interakciók; a csökkentett mozgást kérő beállítás figyelembevétele.
- **Kontraszt:** a design systemben jelzett fehér/zöld kisbetűs kontrasztproblémát kezeljük.
- **Tartalom:** a kapott magyar, tegező szövegeket használjuk; nem találunk ki új statisztikát, árat, véleményt vagy szolgáltatási ígéretet.

### Elrendezési vázlat

Fejléc: saját logó és navigáció.
Nyitószakasz: bal oldalon a megadott cím, leírás és gomb; jobb oldalon a portré.
Ezután: vélemények → előnyök → Eliza bemutatkozása → a kezelés négy lépése → felhívás → GYIK → hírlevél/kisokos → időpontkérő → lábléc.

A szövegek alapvetően balra igazodnak. A fotókat a Figma szerinti helyükön használjuk. A nyitóportré és a levélmotívum adja a karaktert; a többi szakasz rendezett és jól olvasható marad.

### Ellenőrzés a briefhez képest

Az irány megtartja a saját színeket, Asap fontot, logót, tényleges szövegeket és Figma-képeket. Nem vezet be új színpalettát, új tipográfiát, új stockfotókat vagy további látványváltozatokat. A frontend-design skill általános esztétikai javaslatait ezeknek a kötöttségeknek alárendelve használjuk.

## Mi készül el ebben a generálási lépésben?

- Egy reszponzív, böngészőben megtekinthető **főoldal-prototípus**, a generalas skill szerinti statikus HTML + Tailwind Play CDN + Google Fonts megoldással.
- Kimenet: **koncepcio-1-botanikus-harmonia.html**.
- Egy egyszerű **index.html** belépőoldal, amelyről ez az egy változat nyitható meg.
- A már létező Git-adattárban további commitok; nem inicializáljuk újra.
- Desktop- és mobilnézet ellenőrzése, az észlelt hibák javítása.
- Az állapot és a ténylegesen elvégzett lépések dokumentálása.

**Egy változat nem jelent egyoldalas beadandót.** A házi feladat végén továbbra is négy oldal kell. A Kezelések, Rólunk és Kapcsolat ugyanennek az elfogadott iránynak a folytatásaként készül majd. A mostani generalas lépés a skill szerint az első főoldal megmutatásáig tart.

## Funkciók és későbbi feladatok

- A prototípusban a GYIK és a mobilmenü kipróbálható.
- Az időpontkérő és a hírlevél vizuális kialakítása megjelenik, de valódi szolgáltatási beállítás nélkül nem mutathatnak hamis sikeres küldést.
- A hiányzó valódi e-mail-címzettet, adatkezelési sablont, kisokost és hírlevélszolgáltatást nem találjuk ki.
- A prototípus nem kerül automatikusan GitHubra vagy Netlifyra; ezek a következő munkafázisok részei.
- Élesítés előtt a prototípushoz használt Tailwind Play CDN-t éles használatra alkalmas CSS váltja.
- A WebP-képek, a négy oldal SEO-ja, az élő űrlapteszt és az adatkezelési dokumentum a végleges weboldal elkészítésének része.

## Beadás és időkeret

A leadás a felhasználó tájékoztatása szerint 2026. november 3. Emiatt egy változat készül. A beadandó: nyilvános Netlify-link, GitHub-repó linkje és 5–10 mondatos összehasonlítás a saját Figma-tervvel. Az összehasonlításba a tényleges tapasztalatok és a felhasználó által megadott időráfordítás kerülnek.

## Megtekintés

A generálás után a projekt gyökerében lévő index.html-ről nyitható meg a koncepcio-1-botanikus-harmonia.html. A képek/index.html továbbra is a képleltár, nem a weboldal kezdőlapja.

## Következő lépés

A terv kifejezett jóváhagyása után következik a prototípus felállítása és generálása. További koncepciószámot nem kérdezünk: a felhasználó választása egy.
