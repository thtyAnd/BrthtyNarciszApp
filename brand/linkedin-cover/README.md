# LinkedIn borító

Minimalista, statikus borítókép a személyes LinkedIn profilhoz. Ugyanazt a
design systemet használja, mint a portfólió-koncepció
([`docs/portfolio-koncepcio.md`](../../docs/portfolio-koncepcio.md) — 6. fejezet),
így a borító és a későbbi weboldal egy nyelvet beszél.

## Fájlok

| Fájl | Méret | Mikor |
|---|---|---|
| `linkedin-cover-dark-3168x792.png` | 2× | **Ez töltsd fel.** Sötét változat, magyar |
| `linkedin-cover-dark-1584x396.png` | 1× | Sötét, natív méret (ha valami 2×-et nem fogad el) |
| `linkedin-cover-light-3168x792.png` | 2× | Világos változat, magyar |
| `linkedin-cover-light-1584x396.png` | 1× | Világos, natív méret |
| `linkedin-cover-dark-en-3168x792.png` | 2× | Sötét, angol felirat |
| `linkedin-cover-light-en-3168x792.png` | 2× | Világos, angol felirat |
| `guide-safezone-1584x396.png` | 1× | **Nem feltöltésre** — a biztonságos zónát mutató segédkép |

A 2× fájlokat töltsd fel: a LinkedIn a borítót veszteségesen újratömöríti, és a
kétszeres felbontás megvédi a hajszálvonalakat és a ritkított betűket. Minden
fájl jóval a LinkedIn 8 MB-os korlátja alatt van.

**Melyiket válaszd?** A sötét változat visszafogottabb és jobban tűri, ha a
profilképed világos hátterű. A világos változat galéria-hatású — fotós és
formatervezői munkákhoz áll közelebb. Ugyanazt a változatot használd, mint amit
majd a weboldal nyitóképernyője használ.

## Méretek és biztonságos zóna

- Natív vászon: **1584 × 396 px** (4:1) — ez a LinkedIn személyes profil borító mérete.
- A profilkép **bal alul belevág** a borítóba, ezért a bal oldali ~460 px
  szándékosan üres. Önmagában nézve a kép balra „üresnek” tűnik; a profilon a
  profilkép tölti ki ezt a helyet. Ezt mutatja a `guide-safezone` segédkép.
- A LinkedIn a borítót a felületen kb. 1128 px szélesre skálázza, mobilon
  jóval kisebbre. Ezért van minden másodlagos szöveg 19 px-en vagy fölötte:
  ennél kisebb felirat mobilon olvashatatlan.

## Szerkesztés és újragenerálás

A forrás a [`cover.html`](cover.html). A szövegek a fájl tetején lévő `CONFIG`
blokkban vannak, magyar és angol változatban:

```js
const CONFIG = {
  hu: {
    name:        'Berthóty András',
    disciplines: 'Grafika · Fotó · Webdesign · Kód · Formatervezés',
    eyebrow:     '',   // opcionális kis felirat a név fölött
    meta:        ''    // opcionális felirat jobbra alul, pl. saját domain
  },
  ...
};
```

Az `eyebrow` és a `meta` alapból ki van kapcsolva (üres sztring = nem
jelenik meg). A `meta` a jó hely a saját domainnek, amikor már él az oldal.

Újragenerálás a repo gyökeréből:

```bash
node brand/tools/render-cover.mjs
```

Ha a `playwright` nincs a projektben telepítve, a script a globális
`npm root -g` alól is betölti. Chromium kell hozzá.

Böngészőben is megnyitható előnézethez, query paraméterekkel:

```
cover.html?theme=dark&lang=hu
cover.html?theme=light&lang=en
cover.html?theme=dark&safezone=1
```

## Design-döntések

- **Tipográfia** — Inter 200/250 a névre, nagybetűvel, `0.055em` ritkítással;
  JetBrains Mono a szakterület-sorra. A mono nem dísz: a kódot és a műszaki
  rajz annotációját idézi, vagyis pont azt a két szálat, ami a grafikát és a
  formatervezést összekapcsolja.
- **Geometriai jel** — négyzet (felülnézet) + beírt kör (metszet) +
  tengelykereszt + méretvonal. Vetületi rajz utalás, nem logó: nem állít semmit,
  amit később egy igazi arculat ne írhatna felül.
- **Akcentus** — egyetlen szín (`#C1552F`), két helyen: a 56 px-es vonal a név
  alatt, és egy 8 px-es bázispont a jel sarkában. Ennyi. Egy borítón egy
  akcentus elég.
- **Raszter** — 44 px-es alapmodul, a jobb szélen 176 px-es erősebb modulháló.
  Az opacitása 0.026–0.07 között van: textúra, nem grafika.
- **Statikus** — nincs fotó, nincs raszteres háttér, nincs gradiens-effekt.
  Így a kép a LinkedIn újratömörítése után is tiszta marad, és a szöveg
  bármikor átírható újrafotózás nélkül.

## Betűtípusok

A `../fonts/` mappában lokálisan is megvannak (Inter, JetBrains Mono — SIL Open
Font License 1.1), így a render offline is bitre azonos. A `@font-face`
szabályok tartalék CDN-URL-t is megadnak, hogy a `cover.html` bárhol jól
jelenjen meg. Részletek: [`../fonts/README.md`](../fonts/README.md).
