# Helyi ellenőrzés – tájékoztató és Netlify-űrlapok

- A négy főoldal alján és a hozzájárulás mellett működik az adatkezelési link.
- Az adatkezelési oldal oktatási demóként azonosítja a projektet; 10 szakaszban a tényleges teszthez igazítja a kapott sablon témáit.
- Mind a négy kapcsolati űrlap kötelező név, e-mail, üzenet és hozzájárulás mezőt használ. A hozzájárulás nincs előre bejelölve.
- Böngészőben kipróbálva: üres névnél, majd kitöltött szövegmezők és üres hozzájárulás mellett a böngésző megakadályozza a küldést.
- Kitöltött mezőkkel és bejelölt hozzájárulással a localhost-védelem egyértelműen jelzi, hogy nem küldött adatot.
- A tájékoztató desktopon és 375px szélességen nem lóg ki oldalra.
- A nyilvános csomag 6 HTML-oldalt és 33 szükséges eszközfájlt tartalmaz. Nincs hibás helyi fájlhivatkozás vagy belső célpont.
- A címzett személyes Gmail-címe nincs a nyilvános oldalakban, és értesítésként még nincs beállítva a Netlify-on.
- A 30 napos megőrzés kézi feladat: a teszt végén mind a Netlify-beküldést, mind a postaládában lévő másolatot törölni kell.

## Következő Netlify-lépések a felhasználóval

1. A GitHub-tároló importálása.
2. Base directory: üres; Build command: üres; Publish directory: public.
3. Közzététel, majd a Netlify Forms automatikus felismerésének engedélyezése; szükség esetén új deploy.
4. Az űrlapok listájának ellenőrzése: idopont-fooldal, idopont-kezelesek, idopont-rolunk, idopont-kapcsolat.
5. Forms > Submission notifications: e-mail-értesítés a felhasználó által megadott saját címre. A Netlify jelenlegi dokumentációja szerint a címzettnek aktív csapattagnak kell lennie.
6. A felhasználó saját adataival éles próba; a Netlify-beküldés és a tényleges postaládás érkezés külön ellenőrzése.

Az élesítés, az e-mail-értesítés beállítása és a kézbesítési próba ebben a munkamenetben még nem történt meg.
