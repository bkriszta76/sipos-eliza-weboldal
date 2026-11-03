# Eliza Beauty Salon – saját design system

Forrás: a saját Figma-terv Arculati tábla része és a `logók/` mappába másolt saját logófájlok. Ellenőrizve: 2026. november 3.

Figma: https://www.figma.com/design/39mFOEzZ54DfzcogL9cxWk/webdesigner_kozmetikus-moadboard-szeru?node-id=8-4095

Ez a dokumentum a házi feladat eredeti arculati alapját váltja fel. Az eredeti változat: `design-system.eredeti.md`. A Figma-tábláról leolvasott értékeket és az alábbi megvalósítási javaslatokat külön jelöljük. A mobilméretek és a nem specifikált komponensértékek javaslatok, nem exportált Figma-adatok.

## Hangulat

Természetes, nyugodt, tiszta, barátságos és professzionális kozmetikai arculat. Zöld és halványzöld felületek, fehér háttér, növényi motívumok, levegős elrendezés. A címsorok határozott, talpatlan betűkkel jelennek meg.

## Színek

Az arculati táblán feltüntetett HEX-értékek:

| Szerep | Név | HEX | Használat |
|---|---|---|---|
| Elsődleges / kiemelt | Zöld | `#60867B` | Márkaszín, logó, kiemelések, szakaszhátterek, gombfelületek |
| Világos | Halványzöld | `#D6E5E1` | Szakaszháttér, kártya, nyugodt kiemelések |
| Sötét | Mély sötét | `#011111` | Címsor, erős szöveg, sötét felület |
| Szöveg | Szürke | `#62636A` | Törzsszöveg, leírás, mezőcímke |
| Fehér | Fehér | `#FFFFFF` | Oldalháttér, világos kártya |

A zöld SVG-logók kitöltése szintén `#60867B`. A „fekete logo.svg” saját sötét színe `#180802`; ez a logó része, nem az oldal általános szövegszíne. A fájlban külön `#78A79A` nevű réteg is található; az arculati tábla elsődleges színe ettől eltér, ezért ezt nem használjuk automatikusan új alapszínként.

### Kontraszt és használat

A HEX-kódokból számolt kontrasztarányok:

| Szöveg / háttér | Arány | Következmény |
|---|---|---|
| `#62636A` / `#FFFFFF` | 5,98:1 | Normál méretű szöveghez megfelelő |
| `#62636A` / `#D6E5E1` | 4,60:1 | Normál méretű szöveghez megfelelő |
| `#011111` / `#D6E5E1` | 14,83:1 | Címsorhoz és törzsszöveghez megfelelő |
| `#FFFFFF` / `#60867B` | 4,04:1 | Normál méretű szöveghez nem éri el a 4,5:1 célt; nagy szöveghez megfelelő |
| `#011111` / `#60867B` | 4,77:1 | Normál méretű szöveghez megfelelő |

Felhasználó által jóváhagyott szabály: minden márkazöld/olívazöld felületen fehér szöveg legyen. Minden gomb márkazöld hátteret és fehér feliratot kap; a fenti mért kontrasztérték ettől nem változik.

## Betűtípusok

Az arculati tábla minden felsorolt szövegszinthez **Asap** betűtípust ad meg.

- Címsorok: Asap Bold (700), H4: Asap Semibold (600).
- Törzsszöveg: Asap Regular (400).
- Alcím és gomb: Asap Bold (700).
- Gombfelirat: nagybetűs.
- A saját logót a kész SVG/PNG fájlból használjuk; nem helyettesítjük újragépelt szöveggel.

### Méretskála

| Elem | Betűvastagság | Figma desktopméret | Sormagasság | Javasolt mobilméret |
|---|---|---|---|---|
| H1 | Bold 700 | 60px | 130% | 36px |
| H2 | Bold 700 | 40px | 130% | 30px |
| H3 | Bold 700 | 28px | 130% | 24px |
| H4 | Semibold 600 | 24px | 130% | 22px |
| Alcím | Bold 700 | 20px | 130% | 18px |
| Body | Regular 400 | 16px | 160% | 16px |
| Gomb | Bold 700 | 16px | 130% | 16px |

Kis szövegekhez 14px / 150% használható megvalósítási javaslatként. A magyar ékezeteket (ő, ű) a ténylegesen betöltött webfonttal ellenőrizni kell.

## Térközök és elrendezés

A következő értékek az eredeti design system használható elrendezési alapjai, nem a Figma-fájlból kiolvasott méretek:

- 8px alapegység: 8, 16, 24, 32, 48, 64, 96, 128px.
- Szakaszok függőleges térköze: desktopon 96–128px, mobilon 64px.
- Tartalom maximális szélessége: 1200px; hosszabb folyószövegé 680px.
- Mobil oldalsó margó: 20px.
- A drótvázban szereplő váltakozó fehér, halványzöld és márkazöld szakaszok adják az oldal ritmusát.

## Komponensek

A terv szín- és betűrendszerére épülő megvalósítási javaslatok; a pontos padding, rádiusz és interaktív állapotok még nem ellenőrzött Figma-specifikációk.

- **Elsődleges gomb:** márkazöld háttér, fehér Asap Bold 16px nagybetűs felirat; javasolt belső térköz 16px × 32px, rádiusz 4px. Hoverre aláhúzás vagy jól látható sötét keret.
- **Másodlagos gomb:** márkazöld háttér és keret, fehér felirat; az elsődleges gombbal azonos méret.
- **Kártya:** fehér vagy halványzöld háttér, visszafogott lekerekítés és árnyék nélküli megjelenés.
- **Képek:** természetes kozmetikai és növényi fotók, a Figma-terv képkivágásaihoz igazítva. Az eredeti fájlt őrizzük meg, webes változat külön készülhet.
- **Űrlapmező:** fehér háttér, szürke keret, sötét beviteli szöveg, látható mezőcímke. Fókuszjelzés: sötét körvonal megfelelő térközzel.
- **Ikonok:** egyszerű, egységes vonalvezetésű ikonok; világos háttéren funkcionális elemhez sötét szín. A márkazöld dekorációként is használható.

## Logó

Saját, levélmotívumos „ELIZA BEAUTY SALON” logó. A ténylegesen rendelkezésre álló fájlok a `logók/` mappában:

| Változat | SVG | PNG | Használat |
|---|---|---|---|
| Zöld | `zold logo.svg` | `zold logo.png` | Világos háttéren, elsődleges márkajelzés |
| Sötét | `fekete logo.svg` | `fekete logo.png` | Világos háttéren, sötét logóváltozat |
| Zöld sávos | `zoldsavos logo.svg` | `zoldsavos logo.png` | Saját zöld háttérrel készített változat |
| Favicon | `eliza beauty salon favikon 1.svg` | `eliza beauty salon favikon 1.png` | Böngészőikon, külön ellenőrzött méretváltozatokkal |

Weben a logóhoz az SVG az elsődleges. Az arányt meg kell tartani, a logót nyújtani nem szabad; a felhasználó kérésére elkészült fehér változat a zöld fejlécben használható. Biztonsági térként legalább a levélmotívum magasságának felét érdemes szabadon hagyni (javaslat).

Az arculati táblán a faviconhoz 512 × 512px-es használati megjegyzés szerepel; a meglévő SVG 123 × 123-as viewBoxot és beágyazott raszteres képet tartalmaz. Ezért nem tekinthető korlátlanul nagyítható tiszta vektornak. A tervből kinyert 512 × 512px-es forrás elérhető a logók/favicon-figma-512.png fájlban. Fehér logóváltozat: logók/feher logo.svg, az eredeti SVG fehér kitöltésű változata.

## Képek és export állapota

A saját logók nyolc meglévő SVG/PNG exportja a `logók/` mappában található, a tervből kinyert 512px-es faviconforrással együtt. A korábbi `logo_ok` és `képek/logok` mappa az összevonás után megszűnt; az azonos másolatokat tartalomellenőrzés után eltávolítottuk.

A `SiposEliza weboldal.fig` fájl összes beágyazott képe eredeti minőségben a `képek/` mappába került. A `képek/index.html` képes jegyzékként nyitható meg; a `kepleltar.json` az azonosítókat és fájlméreteket tartalmazza. A fájlnevek és a képleltár már a kiolvasott Figma-rétegek és oldalszakaszok alapján készültek. A kicsomagolt eredeti képek nem tartalmazzák a Figma maszkolását és képkivágásait.



## Jóváhagyott főoldali pontosítások (2026-11-03)

- A fejlécben nagyobb, fehér logó szerepel.
- A portrék középre igazítottak, felirat nélküli képekkel.
- A növényi motívum az eredeti átlátszó export, a Figma-rétegek transzformációival.
- Az előnyök ikonjai és szövegei középre rendezettek.
- A folyamat négy lépése halványzöld kép–szöveg kártyákban jelenik meg, számozás nélkül.
- A CTA halványzöld, a GYIK márkazöld, fehér betűkkel.
- Az időpontkérő űrlap mellett a Figma eredeti térképillusztrációja látható.
