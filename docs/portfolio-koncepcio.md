# Személyes portfólió — webdesign és strukturális koncepció

**Terület:** grafika · fotó · webdesign · kód · (előkészítés alatt) ipari termék- és formatervezés
**Státusz:** koncepció, megvalósítás előtt
**Verzió:** 1.0 — 2026-09

---

## 0. Hogyan használd ezt a dokumentumot

Ez nem inspirációs gyűjtemény, hanem **döntési dokumentum**. Minden fejezet
végén ott van, hogy mit kell eldönteni és mi az ajánlás. Ha csak egyetlen
dolgot olvasol el belőle, az az [1.2](#12-a-multidiszciplináris-portfólió-alapproblémája)
legyen: az egész szerkezet abból következik.

A fejezetek szándékosan ebben a sorrendben vannak: **pozicionálás → struktúra →
felület → technológia**. Ha fordítva kezded (előbb a template, aztán a
tartalom), a végén a template fogja megmondani, mit gondolsz a saját munkádról.

| Fejezet | Mit ad | Mikor kell |
|---|---|---|
| [1–2](#1-kiindulás) | pozicionálás, közönség, állítás | 1. hét |
| [3–4](#3-információs-architektúra) | sitemap, URL-ek, tartalommodell | 1–2. hét |
| [5](#5-oldalankénti-terv) | oldalankénti vázlat | 2–4. hét |
| [6](#6-design-system) | tokenek, tipográfia, komponensek | 3–5. hét |
| [7](#7-diszciplína-specifikus-prezentációs-minták) | hogyan mutasd az 5 területet | 4–8. hét |
| [8–9](#8-technológiai-stack) | stack, teljesítmény, SEO, akadálymentesség | 5–8. hét |
| [10–13](#10-tartalomkészítési-munkafolyamat) | munkafolyamat, mérés, ütemterv | folyamatos |

---

## 1. Kiindulás

### 1.1 Mit kell az oldalnak elérnie

Egy portfólió nem galéria. Négy konkrét dolga van, ebben a prioritási sorrendben:

1. **Minősít.** 20 másodperc alatt eldönthető legyen, hogy te vagy-e a megfelelő
   ember erre a munkára. A rossz megkeresés is érték, ha időben kiszűrődik.
2. **Bizonyít.** Nem azt, hogy szép dolgokat készítesz — azt, hogy **problémát
   oldasz meg**. Ez a kettő nem ugyanaz, és a felület szerkezete dönti el,
   melyiket kommunikálod.
3. **Elér.** A kapcsolatfelvétel legyen triviális, és legyen világos, mi történik
   utána (mit vársz, mennyi idő alatt válaszolsz, mi az első lépés).
4. **Kitart.** Két év múlva is fel tudd tölteni bele az új munkát 20 perc alatt,
   anélkül, hogy újratervezned kellene. Ez tisztán architektúra-kérdés.

### 1.2 A multidiszciplináris portfólió alapproblémája

Öt terület, öt különböző közönség, öt különböző értékelési szempont. Ebből
adódik a műfaj klasszikus csapdája: **„mindenhez értek” = „semmihez sem
igazán”.** Egy art director, aki plakátot keres, nem akar 3D-rendereket látni;
egy termékcég, aki formatervezőt keres, nem tudja értelmezni az Instagram-arculatot.

Két rossz megoldás létezik erre, és mindkettő gyakori:

- **Egy kupac.** Egyetlen „Munkáim” rács, mindent összekeverve. Eredmény: senki
  nem találja meg, ami neki kell, és a portfólió hobbi-gyűjteménynek látszik.
- **Öt külön oldal.** Diszciplína-menü a nyitóképernyőn, öt párhuzamos aloldal.
  Eredmény: öt félkész portfólió egy domainen, és a látogató az első kattintásnál
  már döntést kényszerül hozni rólad, mielőtt bármit látott volna.

**A javasolt megoldás: egy közös módszertan, öt kimenet.**

Nem az öt terület a termék, hanem **az a tervezői gondolkodás, ami mind az ötben
ugyanaz**: megfigyelés → keretezés → rendszer → kivitelezés → mérés. A plakát,
a fotósorozat, a weboldal és a termék ennek négy különböző anyagú kimenete. Ha
ezt a felület szerkezete is állítja, akkor a sokféleség nem szórtságnak, hanem
**tartománynak** látszik — és ez pont az, amiért egy stúdió a generalistát
felveszi.

Ebből három kötelező szerkezeti következmény adódik. A dokumentum további része
lényegében ezt a hármat fejti ki:

| # | Következmény | Hol |
|---|---|---|
| K1 | A nyitóoldal **állítás + kurált vegyes válogatás**, nem diszciplína-menü | [5.1](#51-nyitóoldal-home) |
| K2 | A diszciplína **szűrő** és nem navigáció; az alapállapot kurált, vegyes | [5.2](#52-munkák-index) |
| K3 | **Minden** case study ugyanazt a 6 szekciós vázat követi, plakáttól termékig | [5.3](#53-case-study--a-legfontosabb-oldaltípus) |

### 1.3 Célközönségek

Öt reális megkeresési forgatókönyv. Mindegyikhez tartozik egy „első kérdés”,
amire az oldalnak 20 másodperc alatt válaszolnia kell:

| Közönség | Első kérdése | Mit keres a felületen | Elsődleges belépés |
|---|---|---|---|
| **Ügynökség / art director** | „Van benne kézjegy?” | tipográfia, kompozíció, ízlés, tempó | nyitóoldal → 1–2 case study |
| **Márka- / marketingvezető** | „Ért a mi problémánkhoz?” | előtte–utána, rendszer, eredmény | Munkák → szűrő iparágra |
| **Termék- / gyártócég** | „Ismeri a gyártást?” | anyag, technológia, tűrés, prototípus | Formatervezés / Kutatás |
| **Tech / product csapat** | „Le is tudja szállítani?” | élő demó, kód, teljesítmény-számok | Webdesign & kód → repo |
| **Magánmegbízó** | „Mennyi és mikor?” | folyamat, ár-keret, elérhetőség | Szolgáltatások → Kapcsolat |

**Döntés:** a fenti öt közül **kettőt** válassz elsődlegesnek, és arra optimalizálj.
Öt közönségre optimalizálni annyi, mint egyre sem. A többi három kapjon
működő, de nem kiemelt útvonalat.

### 1.4 Pozicionáló állítás

A nyitóképernyő állítása egy mondat, ami **kizár** dolgokat. Ha nem zár ki
semmit, nem állítás, hanem díszlet.

Sablon:

> `[Mit tervezek]` `[kinek]`, `[milyen szemlélettel]`. `[Mi a bizonyíték.]`

Három példa, növekvő élességgel:

- ❌ *„Kreatív tervező vagyok, aki szeret szép dolgokat készíteni.”*
  → nem zár ki semmit, bárkire igaz.
- ⚠️ *„Grafikát, fotót és weboldalt tervezek.”*
  → igaz, de csak felsorolás; nem mond semmit a szemléletről.
- ✅ *„Vizuális rendszereket tervezek — arculattól a weboldalig, fotótól a
  termékig. Ugyanazzal a módszerrel, ötféle anyagban.”*
  → állít valamit (rendszer, nem darab), és megmagyarázza a sokféleséget.

**Döntés:** egy mondat, maximum 140 karakter, és **ne** tartalmazza a
„szenvedélyes”, „kreatív”, „innovatív” szavakat. Ezek nem információk.

---

## 2. Márka és hangnem

### 2.1 Alapelvek

Öt alapelv, ami a design systemtől a szövegig mindent eldönt. Nem szlogen —
minden elv mellett ott van, mit **utasít el**:

| Elv | Amit jelent | Amit elutasít |
|---|---|---|
| **A munka a főszereplő** | a felület keret, nem tartalom | belépő animáció, egyedi kurzor, scroll-jacking |
| **Rendszer, nem darab** | ismétlődő minták, egy tokenkészlet | oldalankénti kivétel-design |
| **Szerkesztett, nem teljes** | 12–20 kiváló munka | „minden, amit valaha csináltam” |
| **Mérhető állítás** | számok, előtte–utána, konkrét eredmény | „a kliens nagyon örült” |
| **Két év múlva is** | tartalommodell + tokenek | egyszer használatos hero-layoutok |

### 2.2 Hangnem

- **Egyes szám első személy**, de nem bratyizó. „Ezt terveztem” — nem „mi a
  csapatnál”, ha egyedül dolgoztál, és nem „Berthóty András tervezte”, mert az
  harmadik személyben beszélni magadról idegen.
- **Konkrét számok** minden állításban: nem „gyorsabb lett”, hanem „az LCP
  4,1 s-ról 1,4 s-ra”. Ha nincs szám, írd le, hogy nincs — az is hitelesebb.
- **Nevezd meg a megszorítást.** „Két hét volt rá” vagy „nem volt fotóbüdzsé”
  — a megszorítás bemutatása erősebb, mint elhallgatása, mert ez mutatja meg a
  döntéseket.
- **NDA:** ne kerülgesd. „A megbízó nevét nem hozhatom, a folyamatot igen” —
  egy mondat, és mehetünk tovább.

### 2.3 Névhasználat és domain

- Domain: `keresztnév+családnév.hu`/`.design`/`.studio` — a `.hu` a magyar
  piacon bizalmi jel, egy nemzetközi `.design` a nemzetközi felé.
  Ha mindkettő megvan: az egyik 301-el a másikra. **Egy** kanonikus domain legyen.
- E-mail: saját domainen (`hello@sajatdomain.hu`), ne szabad e-mail szolgáltató.
  Ez a portfóliónál mérhető bizalmi tényező.
- Egységes kézjegy mindenhol: LinkedIn borító, e-mail aláírás, számla,
  prezentáció — ugyanaz a tokenkészlet. A [LinkedIn borító](../brand/linkedin-cover/)
  ennek az első alkalmazása.

---

## 3. Információs architektúra

### 3.1 Sitemap

Két szint, sekély és bejárható. A `/munkak` az oldal gravitációs középpontja —
minden út oda vagy onnan vezet.

```
/                          Nyitóoldal — állítás + 6 kurált munka
│
├── /munkak                Munkák index — szűrhető, alapból kurált vegyes
│   ├── /munkak/{slug}     Case study (egységes 6 szekciós váz)
│   └── ?d=…&i=…&e=…       szűrők: diszciplína / iparág / év (URL-ben!)
│
├── /foto                  Fotó — a fotó saját logikát kap (lásd 7.2)
│   └── /foto/{slug}       Sorozat (nem „galéria”: sorozat)
│
├── /kod                   Webdesign & kód — élő demók, repók, számok
│   └── /kod/{slug}        Technikai case study
│
├── /formatervezes         Ipari termék- és formatervezés
│   └── /formatervezes/kutatas   Önálló kutatás / folyamatban (lásd 7.4)
│
├── /rolam                 Rólam + a módszer (a „miért így”)
├── /szolgaltatasok        Mit vállalok, hogyan, milyen keretben
├── /naplo                 Napló — írások, folyamat, jegyzetek
│   └── /naplo/{slug}
├── /kapcsolat             Kapcsolat + brief-űrlap
│
└── rendszeroldalak        /kereses · /404 · /adatvedelem · /impresszum
                           /sitemap.xml · /rss.xml · /robots.txt
```

**Fő navigáció (5 elem, nem több):**
`Munkák · Fotó · Kód · Rólam · Kapcsolat`

A `/formatervezes` és a `/szolgaltatasok` a láblécből és a szövegtörzsből
érhető el, amíg nincs elég anyag. Amikor a formatervezés beindul, **kicseréli a
`Fotó`-t** vagy bekerül hatodikként — de csak akkor, ha van mögötte 3+ munka.
Üres menüpont rosszabb, mint a nem létező.

> **Miért nincs diszciplína-menü?** Mert a diszciplína **szűrő**, nem hely
> ([K2](#12-a-multidiszciplináris-portfólió-alapproblémája)). A `/foto` és a
> `/kod` kivétel, mert ezeknek olyan sajátos prezentációs igénye van
> (fotósorozat-ritmus, illetve élő demó), amit a közös case study váz nem tud
> jól kiszolgálni. A grafika és a formatervezés viszont pontosan a közös vázba
> illik.

### 3.2 URL-elvek

| Elv | Példa | Miért |
|---|---|---|
| Kisbetű, kötőjel, ékezet nélkül | `/munkak/hotel-arculat-2025` | megoszthatóság, log-olvashatóság |
| Nincs dátum az útvonalban | `/naplo/kepoptimalizalas` | a tartalom nem öregszik el az URL-től |
| Nincs `/kategoria/alkategoria/` mélység | `/munkak/{slug}` | a munka egy dolog, nem egy fa-levele |
| A szűrő query, nem útvonal | `/munkak?d=grafika` | egy munka több diszciplínába tartozhat |
| A slug **véglegesen** rögzül | — | átnevezés = 301, és a 301-ek örökre veled maradnak |

A szűrők legyenek az URL-ben (`?d=grafika&i=vendeglatas`). Így megoszthatók,
visszalépéssel működnek, és szerveroldalról renderelhetők — ez SEO- és
akadálymentességi kérdés is, nem csak kényelmi.

### 3.3 Taxonómia

Négy tengely, szándékosan zárt szótárral. A szabad kulcsszó két év alatt
kezelhetetlen szemétté nő.

| Tengely | Értékek | Hol jelenik meg |
|---|---|---|
| **Diszciplína** | `grafika` · `foto` · `webdesign` · `kod` · `formatervezes` | szűrő, kártyacímke |
| **Kimenet** | `arculat` · `kiadvany` · `csomagolas` · `weboldal` · `alkalmazas` · `sorozat` · `termek` | case study meta |
| **Iparág** | `vendeglatas` · `ingatlan` · `kultura` · `retail` · `ipar` · `nonprofit` · `sajat` | szűrő |
| **Év** | 2019– | rendezés, szűrő |

Kulcsszabály: **egy munka több diszciplínát is kaphat.** Egy étterem-projekt
lehet egyszerre `grafika` + `foto` + `webdesign` — és pont ez a legjobb fajta
munka a portfóliódban, mert ez bizonyítja a
[K1-állítást](#12-a-multidiszciplináris-portfólió-alapproblémája). Az ilyen
munkák kapjanak kiemelést az indexben.

**Döntés:** ne indulj 4 tengelynél többel, és ne indulj `iparag` nélkül — ez
az, amit a megbízók tényleg használnak („dolgoztál már ingatlanosnak?”).

---

## 4. Tartalommodell

Ez a dokumentum legfontosabb technikai része. **A tartalommodell dönti el,
hogy két év múlva 20 perc vagy 2 nap egy új munkát feltölteni.** Írd meg
_előbb_, mint az első komponenst.

### 4.1 `Project` — a központi típus

```yaml
# content/munkak/hotel-arculat-2025.md  (frontmatter)
title:        "Hotel Kanyar — arculat és jelenlét"
slug:         "hotel-arculat-2025"          # véglegesen rögzül
year:         2025
disciplines:  [grafika, foto, webdesign]    # zárt szótár, több érték
output:       [arculat, weboldal]
industry:     ingatlan
client:       "Hotel Kanyar"                # vagy null, ha NDA
nda:          false
role:         "Arculat, fotó, weboldal — egyedül"
duration:     "6 hét"
collaborators: []                            # ha van, névvel: hitelesség
tools:        [Figma, Illustrator, Capture One, Astro]

# --- kártya / index ---
featured:     true                           # kerül-e a nyitóoldalra
order:        3                               # kurált sorrend (nem dátum!)
teaser:       "Egy 14 szobás hotel arculata, ahol a fotó és a tipográfia
               ugyanabból a rácsból épül."   # max 120 karakter
cover:
  src:        "/media/hotel/cover.jpg"
  ratio:      "3:2"
  alt:        "A hotel névjegykártyája és brosúrája fa asztalon"
  focal:      "50% 40%"                      # art direction: crop középpont
accent:       "#7A6A55"                       # projekt-specifikus akcentus (opc.)

# --- eredmény: a 3 legfontosabb szám ---
metrics:
  - { label: "Közvetlen foglalás",  value: "+34%", note: "6 hónap, saját analitika" }
  - { label: "LCP",                 value: "1,3 s", note: "mobil, 4G" }
  - { label: "Fotó",                value: "48 kép", note: "2 nap helyszín" }

# --- külső hivatkozások ---
links:
  - { label: "Élő oldal", href: "https://…", rel: "noopener" }
  - { label: "Forráskód", href: "https://github.com/…" }

# --- SEO / megosztás ---
seo:
  description: "…"                            # 150–160 karakter
  ogImage:     "/media/hotel/og.jpg"          # 1200×630, generált
published:    true
updated:      2026-03-11
```

Néhány mező, ami könnyen kimarad, és utólag drága:

- **`order` a `year` helyett a rendezéshez.** A kurálás nem kronológia. A
  legjobb munka legyen elöl, akkor is, ha 2023-as.
- **`focal`** — a fedőkép crop-középpontja. Enélkül a reszponzív vágás
  levágja a fejeket. Egy szám, ami sok szenvedést megtakarít.
- **`nda`** külön mezőben, ne a `client: null`-ból következtetve. Az űrlap
  máshogy jelenít meg egy NDA-s és egy önálló munkát.
- **`collaborators`** — ha nem egyedül csináltad, írd ki. A `role` mező
  önmagában nem elég; a névvel megnevezett közreműködő hitelesít.
- **`metrics`** pontosan 3 elem. Kettő kevés, öt zaj.

### 4.2 A többi típus

| Típus | Kulcsmezők | Megjegyzés |
|---|---|---|
| `PhotoSeries` | `title, year, location, camera, frames[], sequence, license` | a `sequence` a képek **sorrendje**, ami a sorozat lényege |
| `Photo` | `src, alt, ratio, focal, caption, exif{}, credit` | az `exif` opcionális, de fotósoknál bizalmi jel |
| `CodeProject` | `Project` + `stack[], liveUrl, repoUrl, lighthouse{}, decisions[]` | a `decisions[]` a technikai döntésnapló |
| `ProductConcept` | `Project` + `materials[], process[], dimensions, trl, status` | `status: koncepcio\|prototipus\|gyartasban` — **soha ne hazudj róla** |
| `Post` | `title, date, tags[], readingTime, excerpt` | napló |
| `Service` | `title, deliverables[], typicalDuration, priceFrom, notIncluded[]` | a `notIncluded` legalább annyira hasznos, mint a `deliverables` |
| `Page` | `title, body` | statikus oldalak |

**Döntés:** indulj `Project` + `Post` kettőssel. A `PhotoSeries` és a
`ProductConcept` **öröklődjön** a `Project`-ből, ne legyen külön séma —
így egy szűrő és egy kártyakomponens elég mindhez.

---

## 5. Oldalankénti terv

A vázlatok fentről lefelé, szekciónként. A `▸` jelöli a görgetési sorrendet.

### 5.1 Nyitóoldal (Home)

Cél: **20 másodperc alatt megminősíteni.** Egyetlen dolga van: eljuttatni a
látogatót az első case studyba.

```
▸ Fejléc — vékony, sticky-nélküli. Logó/monogram + 5 menüpont + nyelvváltó.
          Nincs hamburger desktopon, nincs mega-menü.

▸ Nyitóképernyő (100vh-nál KEVESEBB — kb. 72vh)
  ┌──────────────────────────────────────────────────────────────┐
  │  Vizuális rendszereket tervezek — arculattól                  │  ← állítás
  │  a weboldalig, fotótól a termékig.                            │    (step-5/6)
  │  ──                                                            │
  │  Grafika · Fotó · Webdesign · Kód · Formatervezés             │  ← mono, ritkított
  │                                                                │
  │  [Munkák megtekintése]   [Beszéljünk →]                       │  ← 1 elsődleges CTA
  └──────────────────────────────────────────────────────────────┘
  Kritikus: a hero NE legyen teljes képernyős. 72vh-nál a következő szekció
  felső 20%-a belátszik — ez a legerősebb létező görgetési jelzés, és nem
  kell hozzá lefelé nyíl animáció.

▸ Kurált munkák — 6 db, VEGYES diszciplínával             ← [K1]
  Aszimmetrikus rács: 1 nagy (2 kolumnás) + 2 kicsi, ismételve.
  Minden kártyán: fedőkép · cím · diszciplína-címkék · év.
  A kártyán NINCS teaser-szöveg — a kép és a címke elég.
  A legelső legyen olyan munka, ami 2+ diszciplínát fog össze.

▸ A módszer — 5 lépés egy sorban, ikon nélkül, számozva
  01 Megfigyelés · 02 Keretezés · 03 Rendszer · 04 Kivitelezés · 05 Mérés
  Ez az a szekció, ami a sokféleséget megmagyarázza. Egy bekezdés, nem több.
  Link: → /rolam

▸ Kiemelt terület — EGY blokk, rotálva (fotó VAGY kód VAGY formatervezés)
  Nem mindhárom. Egy full-bleed vizuál + két mondat + link.

▸ Rövid „rólam” csík — arckép + 2 mondat + elérhetőség
  Az arckép nem opcionális. Mérhetően növeli a megkeresést.

▸ Lezáró CTA — „Van egy projektje? / Beszéljünk.” + e-mail + válaszidő
  ▸ Lábléc — sitemap, nyelv, jogi, közösségi (max 3)
```

**Amit a nyitóoldal NEM tartalmaz:** logó-fal ügyfelekkel, amíg nincs 6+
ismert név; „szolgáltatások” ikonrács; számláló-animáció; ajánlások, amíg
nincs 3 igazi; „letölthető CV” gomb (az a `/rolam` dolga).

### 5.2 Munkák index

```
▸ Fejléc-blokk: H1 „Munkák” + egy mondat (mit látok itt, hány db)

▸ Szűrősáv — vízszintesen görgethető chip-sor, NEM legördülő
  [ Mind ] [ Grafika ] [ Fotó ] [ Webdesign ] [ Kód ] [ Formatervezés ]
  [ Iparág ▾ ]  [ Év ▾ ]                       [ Rács ⊞ / Lista ☰ ]

  Szabályok:
  · Az alapállapot „Mind”, KURÁLT sorrenddel (order), nem dátummal.   ← [K2]
  · A szűrő az URL-ben él (?d=grafika) → megosztható, visszaléphető.
  · A chip mutatja a találatszámot: „Fotó (7)”. Üres szűrő ne is látszódjon.
  · Kliensoldali szűrés max ~60 elemig; fölötte szerveroldali.
  · A szűrés után élő régió (aria-live="polite") mondja be: „7 munka”.

▸ Rács — 3 kolumna (≥1200px) / 2 (≥720px) / 1 (mobil)
  Egységes 3:2 fedőkép-arány. A vegyes arány itt kaotikus, a case studyn belül
  viszont kötelező a variáció.
  Hover: 1,02 scale + a címke színesedik. NINCS overlay-szöveg felugrás.
  Lazy-load a 6. kártyától; az első 6 `fetchpriority="high"`.

▸ Lapozás — „Továbbiak betöltése” gomb, NEM végtelen scroll.
  (A végtelen scroll elérhetetlenné teszi a láblécet és tönkreteszi a
  visszalépést. Egy portfólión soha nincs rá indok.)
```

### 5.3 Case study — a legfontosabb oldaltípus

Itt dől el a megkeresés. **Egyetlen váz, minden diszciplínára** —
ez a [K3](#12-a-multidiszciplináris-portfólió-alapproblémája), és
ez bizonyítja, hogy módszered van, nem csak ízlésed.

```
▸ 1. FEDÉS
  Full-bleed vizuál (21:9 desktop / 4:5 mobil), fölötte vagy alatta:
  H1 cím · egy mondatos alcím
  Meta-sáv (mono, kicsi): ÉV · SZEREP · IDŐTARTAM · DISZCIPLÍNÁK · [Élő oldal ↗]

▸ 2. KONTEXTUS   (~120 szó)
  Ki a megbízó, mi volt a helyzet, mi volt a MEGSZORÍTÁS.
  A megszorítás a legérdekesebb mondat az egész oldalon — ne hagyd ki.

▸ 3. FELADAT   (~60 szó, kiemelt tipográfia)
  Egy bekezdés arról, mit kellett megoldani. Nem feladatlista — probléma.

▸ 4. MEGOLDÁS   (a terjedelem 60%-a)
  3–6 alszekció, mindegyik: felirat + vizuál + 40–80 szó.
  A vizuál típusa itt tér el diszciplína szerint — lásd 7. fejezet.
  Ez az a rész, ahol a képarányok VÁLTOZNAK: full-bleed, 2-fel osztás,
  középre zárt keskeny, előtte-utána csúszka. A ritmus maga is érv.

▸ 5. EREDMÉNY
  A 3 `metrics` szám nagy tipográfiával + 1 bekezdés.
  Ha nincs szám: „Mérési adat nem áll rendelkezésre” — és helyette
  egy megbízói idézet vagy egy konkrét megfigyelés. Ne találj ki számot.

▸ 6. REFLEXIÓ   (~60 szó)  ← ez a szekció szinte mindig kimarad, és ez a kár
  Mit csinálnál másképp. Ez a bekezdés különíti el a tervezőt a portfólió-
  összeállítótól, és minden interjún ez lesz az első kérdés.

▸ LÁBLÉC-NAVIGÁCIÓ
  ← Előző munka | Következő munka →   (ugyanaz a szűrő-kontextus!)
  + „Hasonló munkák” — 3 db, diszciplína- VAGY iparág-egyezés alapján
  + CTA: „Ilyen projektet tervez? Beszéljünk.”
```

**Terjedelem-célok:** 350–600 szó, 8–16 vizuál. Ennél hosszabbat senki nem olvas
el; ennél rövidebb nem bizonyít. A vizuálok legyenek **feliratozva** — a
képaláírás a leggyakrabban elolvasott szöveg egy portfólión.

### 5.4 Fotó

A fotó nem case study, hanem **sorozat**. Külön oldaltípus kell neki, mert a
sorrend és a tempó itt maga a tartalom.

```
▸ /foto index — sorozatok listája, nem képek listája.
  Nagy fedőkép + sorozatcím + év + helyszín + képszám. 2 kolumna, nagy méret.

▸ /foto/{slug} — a sorozat
  · Egy nyitókép, full-bleed, felirat nélkül. Csak a kép.
  · Rövid bevezető (~80 szó): mi ez, hol, mikor, miért.
  · A sorozat: váltakozó ritmus — full-bleed / páros / hármas / egyedi.
    A ritmus a szerkesztés eszköze; egyenletes rács halálra öli a sorozatot.
  · Lightbox: nyíl + ESC + swipe + fókuszcsapda. Az URL frissüljön (#kep-07),
    hogy egy konkrét kép megosztható legyen.
  · Lábban: technikai adatok (gép, objektív, film/ISO) — összecsukható.
    Csak ha valóban vállalsz fotós munkát; egyébként zaj.
  · Licenc és felhasználás: egy mondat + link. Fotósnál ez nem opcionális.
```

### 5.5 Webdesign & kód

Itt a portfólió **maga** a legfontosabb bizonyíték — és ez a legerősebb
adottságod: az oldal, amit a látogató éppen használ, a saját case studyd.

```
▸ /kod index — projektkártyák + stack-címkék + élő/repo linkek

▸ /kod/{slug}
  · Az 5.3 váz + három extra:
    – ÉLŐ DEMÓ: valódi link vagy beágyazott, interaktív részlet.
      Egy statikus képernyőkép itt majdnem értéktelen.
    – SZÁMOK: Lighthouse / Core Web Vitals táblázat, dátummal.
      A dátum kötelező — enélkül nem ellenőrizhető állítás.
    – DÖNTÉSNAPLÓ: 3–5 tétel „Döntés — Alternatíva — Miért” formában.
      Ez mutatja meg a mérnöki gondolkodást, amit egy screenshot nem tud.
  · Kódrészlet: 10–25 sor, szintaxiskiemelés, nyelvi címke, másolás gomb.
    Ne fájlt mutass, hanem a projekt EGY érdekes döntését.

▸ Külön blokk a saját oldalról: „Ez az oldal” — stack, számok, repo-link.
  Ha a portfólió maga is nyílt forráskódú, az önmagában erős érv.
```

### 5.6 Formatervezés (előkészítés)

Ez a rész **most még nem létezik**, és pont ezért kell most eldönteni, hogyan
készül elő. A cél: úgy legyen kész az architektúra, hogy az első igazi munka
napján csak fel kell tölteni — és közben ne állítson semmit, ami nem igaz.

```
▸ /formatervezes  — amíg nincs megbízás, ez egy SZÁNDÉK-oldal, nyíltan:
  · H1 + 2 bekezdés: mi érdekel, milyen léptékben, mihez van hozzáférésed
    (CAD, 3D nyomtatás, műhely, gyártói kapcsolat)
  · Ami már van: önálló tanulmányok, skiccek, 3D-kísérletek
    → mindegyik `status: koncepcio` jelöléssel, félreérthetetlenül
  · A szomszédos kompetencia: termékfotó, csomagolás, műszaki illusztráció
    — ezek MOST is valós munkák, és ugyanabba az irányba mutatnak
  · Egy mondat, ami vállalja a helyzetet: „Ez a terület nálam most épül.
    Az alábbi munkák önálló kutatások, nem megbízások.”

▸ /formatervezes/kutatas — a folyamat naplója
  Skicc → CAD → render → nyomtatott prototípus → tanulság.
  Ez a folyamatnapló hitelesebb, mint három kitalált megbízás,
  és pontosan azt mutatja, amit egy termékcég keres: gondolkodást.
```

**Ez a legfontosabb tanács ebben a fejezetben:** ne csinálj fiktív
márkás koncepciót („Nike koncepció-cipő”). A szakma azonnal felismeri, és
egyetlen valós, végigvitt önálló tanulmány többet ér tíznél.

### 5.7 Rólam · Szolgáltatások · Kapcsolat

**`/rolam`** — nem CV, hanem **a módszer indoklása**. Sorrendben:
arckép (rendes portré, nem szelfi) → egy bekezdés arról, hogyan lett ötféle
terület egyetlen gyakorlat → az 5 lépéses módszer kifejtve (5×~60 szó) →
eszközök és kompetenciák (őszinte szintjelöléssel, nem 100%-os csíkokkal) →
életút röviden → letölthető CV (PDF) → elérhetőség.

**`/szolgaltatasok`** — 3–5 csomag, mindegyik: mit tartalmaz · **mit nem** ·
tipikus időtartam · **ár-keret** (`-tól` érték vagy sáv). Az árkeret kiírása
kiszűri a nem illeszkedő megkereséseket, és ez az oldal fő haszna.
Alá: a folyamat idővonala (brief → ajánlat → munka → átadás), fizetési
feltételek, mit kérsz a megbízótól.

**`/kapcsolat`** — e-mail **szövegként is** (ne csak `mailto:`), válaszidő
(„2 munkanap”), és egy rövid brief-űrlap:

| Mező | Típus | Kötelező |
|---|---|---|
| Név, e-mail | text | ✓ |
| Miről van szó | select (a taxonómia `output` értékei) | ✓ |
| Határidő | select (`1 hónapon belül` / `1–3 hónap` / `még nyitott`) | ✓ |
| Költségkeret | select (sávok) | – de kérdezd meg |
| Leírás | textarea | ✓ |
| Hozzájárulás | checkbox + link az adatvédelemre | ✓ |

Az űrlap után **ne** „Köszönjük!” toast legyen, hanem külön visszaigazoló
állapot azzal, hogy mi történik ezután. Spam-védelem: honeypot + időbélyeg-
ellenőrzés, **ne** CAPTCHA (akadálymentességi és konverziós ok egyaránt).

### 5.8 Rendszeroldalak

- **`/404`** — ne legyen vicces illusztráció. Legyen kereső + a 6 kurált munka.
- **`/kereses`** — egyszerű, kliensoldali index (title + teaser + címkék).
  Csak 25+ munka fölött van értelme.
- **`/adatvedelem`, `/impresszum`** — magyar szolgáltatónál kötelező. Írd meg
  egyszer, rendesen.
- **`/sitemap.xml`, `/rss.xml`, `/robots.txt`** — generálva, nem kézzel.

---

## 6. Design system

Ez a készlet **együtt él a [LinkedIn borítóval](../brand/linkedin-cover/)** —
ugyanazok a tokenek, ugyanaz a tipográfia, ugyanaz az egyetlen akcentus. Nem
véletlen: az összes felületnek (weboldal, LinkedIn, e-mail aláírás, ajánlat-PDF)
egy nyelvet kell beszélnie, és az egyetlen módszer erre az, ha egyetlen
tokenkészletből származnak.

### 6.1 Alapdöntés: sötét vagy világos?

| | Sötét alap | Világos alap |
|---|---|---|
| Fotó | a képek „világítanak”, galéria-hatás | pontosabb színítélet, nyomdai hűség |
| Grafika | a színes arculatok kiugranak | a fehér mockup-háttér összeolvad |
| Kód | természetes (kódblokk, terminál) | kódblokknál kontraszt-váltás kell |
| Formatervezés | rendermarketing-hatás | műszaki rajz, gyártói dokumentum-hatás |
| Kockázat | szöveg-olvasás hosszú távon terhelőbb | a fotók „szürkébbnek” látszanak |

**Ajánlás: sötét alap az alapértelmezett, világos téma választható**, és a
`prefers-color-scheme` legyen tiszteletben tartva. A fotósorozat-oldalak
viszont **mindig sötétek**, témától függetlenül — ott a képnek kell dominálnia.
Ez nem inkonzisztencia, hanem szándékos kivétel, amit dokumentálni kell.

### 6.2 Színtokenek

Minden érték le van ellenőrizve WCAG 2.2 kontrasztra, **mindkét témán** — a
zárójeles számok a saját hátterükön mért arányok.

```css
:root {
  /* --- Akcentus: egyetlen szín, mindkét témán ugyanaz --- */
  --accent:        #C1552F;   /* égetett terrakotta — 4,2:1 mindkét alapon:
                                 vonalra, ikonra, nagy szövegre igen,
                                 kisbetűs szövegre NEM */

  /* --- Rács (= a LinkedIn borítón is ugyanez) --- */
  --grid-unit:     44px;      /* alapmodul */
  --grid-major:    176px;     /* 4 × modul */
}

/* Sötét téma — alapértelmezett */
:root, [data-theme="dark"] {
  --bg:            #0E0F11;   /* alap */
  --bg-raised:     #16181B;   /* kártya */
  --bg-inset:      #1E2125;   /* input, kódblokk */

  --fg-1:          #F4F5F6;   /* elsődleges szöveg      17,6:1 */
  --fg-2:          #9AA1AA;   /* másodlagos              7,4:1 */
  --fg-3:          #7A8188;   /* meta, felirat           4,9:1 */

  --line:          rgba(255,255,255,.10);
  --line-strong:   rgba(255,255,255,.26);

  --accent-strong: #D4693E;   /* hover / akcentus-szöveg 5,4:1 */
  --focus:         #5AA9E8;   /* fókuszgyűrű             7,6:1 */
}

/* Világos téma */
[data-theme="light"] {
  --bg:            #F7F6F3;   /* meleg törtfehér, NEM #FFF */
  --bg-raised:     #FFFFFF;
  --bg-inset:      #EFEDE8;

  --fg-1:          #14161A;   /*                        16,8:1 */
  --fg-2:          #5C6167;   /*                         5,8:1 */
  --fg-3:          #686E76;   /*                         4,8:1 */

  --line:          rgba(0,0,0,.09);
  --line-strong:   rgba(0,0,0,.24);

  --accent-strong: #A8451F;   /*                         5,5:1 */
  --focus:         #1F6FB8;   /*                         4,8:1 */
}

/* Szemantikus — visszafogott, nem „bootstrap-piros” */
:root, [data-theme="dark"] { --ok:#5BA37B; --warn:#C89A3C; --err:#D25A4C; }
[data-theme="light"]       { --ok:#3D7355; --warn:#8A6420; --err:#A93A2E; }
```

Négy szabály, ami mögött konkrét mérés van:

1. **A `--fg-3` is szövegkontraszt-biztos** (4,9:1 és 4,8:1). Ez fontos:
   a portfóliókon a legtöbb WCAG-hiba a „csak egy kis felirat” szürkéken
   keletkezik. Ha a harmadlagos szín is átmegy, akkor nincs hol elrontani.
2. **A fókuszgyűrű nem az akcentus, és témánként külön szín.** A terrakotta
   4,2:1 — vonalra elég, fókuszjelzésre határeset. Egy közös kék viszont nem
   tud egyszerre ≥3:1 lenni a `#0E0F11`-en és a `#F7F6F3`-on, ezért
   témánként külön értéket kap. Ez nem inkonzisztencia, hanem az egyetlen
   helyes megoldás.
3. **Az akcentus szövegre nem elég** (4,2:1 < 4,5:1). Ha akcentus-színű
   szöveget akarsz (link, kiemelés), az `--accent-strong` kell hozzá.
   A `--accent` a vonalaknak, ikonoknak és nagy fokozatoknak van.
4. **A világos alap ne `#FFFFFF` legyen.** A `#F7F6F3` meleg törtfehér a
   fotókat és a nyomdai munkákat hűbben mutatja, és jóval kevésbé fárasztó.
   Emelt felületre (`--bg-raised`) viszont jöhet a tiszta fehér — így lesz
   érzékelhető rétegzés árnyék nélkül.

> **Ellenőrzés a CI-ben.** A fenti számokat ne bizalomból hidd el: tedd be
> egy 10 soros tesztet, ami minden `--fg-*` / `--bg-*` párra kiszámolja a
> kontrasztot, és bukik, ha 4,5 alá esik. A tokenek idővel mozognak; a teszt
> nem felejt.

### 6.3 Tipográfia

Két betűcsalád. Kettő elég; a harmadik már bizonytalanság.

| Szerep | Család | Súly | Használat |
|---|---|---|---|
| Display, címek | **Inter** | 200 / 250 | nagybetűs, `letter-spacing: .055em`, csak nagy méretben |
| Törzsszöveg, UI | **Inter** | 400 / 500 | normál betűköz |
| Meta, felirat, címke, kód | **JetBrains Mono** | 400 / 500 | nagybetűs, `letter-spacing: .15em` |

A mono nem díszítés: **a kódot és a műszaki rajz annotációját idézi** — vagyis
pontosan azt a két szálat, ami a te profilodban a grafikát és a formatervezést
összekapcsolja. Ezért van rajta minden meta-információ.

Ha egyszer szükség lesz hosszú esszékre, egy harmadik, kizárólag a
`/naplo` törzsszövegére szánt szerif (Newsreader, Source Serif 4) beköthető —
de csak akkor, és csak oda.

```css
/* Folyékony skála — clamp(min, fluid, max), 1.25 lépték */
--step--1: clamp(0.80rem, 0.78rem + 0.10vw, 0.86rem);  /* 13–14  felirat, meta */
--step-0:  clamp(1.00rem, 0.97rem + 0.15vw, 1.06rem);  /* 16–17  törzs */
--step-1:  clamp(1.20rem, 1.13rem + 0.35vw, 1.38rem);  /* 19–22  lead */
--step-2:  clamp(1.44rem, 1.31rem + 0.65vw, 1.75rem);  /* 23–28  h3 */
--step-3:  clamp(1.73rem, 1.49rem + 1.20vw, 2.44rem);  /* 28–39  h2 */
--step-4:  clamp(2.07rem, 1.62rem + 2.25vw, 3.44rem);  /* 33–55  h1 */
--step-5:  clamp(2.49rem, 1.55rem + 4.70vw, 5.00rem);  /* 40–80  display */
```

| Paraméter | Érték | Miért |
|---|---|---|
| Törzsszöveg mérete mobilon | **min. 16px** | iOS alatt kisebb inputnál automatikus zoom |
| Sorhossz (`measure`) | **62–72 karakter** (`max-width: 68ch`) | ennél hosszabb sort a szem elveszít |
| Sormagasság törzs | **1.6** | |
| Sormagasság display | **1.02–1.08** | nagy fokozatnál a 1.5 szétesik |
| Betűköz display | **-0.01em … +0.055em** | nagybetűs display ritkítva, kisbetűs szűkítve |
| Betűköz mono címke | **+0.15em** | nagybetűs mono ritkítás nélkül olvashatatlan |

### 6.4 Rács és térkezelés

```
Tartalom max. szélesség      1440px
Szövegtörzs max. szélesség     68ch  (~720px)
Full-bleed                    100vw  (case study vizuálok)

Kolumnák     desktop 12 · tablet 6 · mobil 4
Gutter       24px (≥1024px) · 16px (<1024px)
Oldalmargó   64px (≥1024px) · 24px (≥600px) · 20px (mobil)

Térköz-skála (8px alap):
4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 192
```

Két gyakorlati szabály:

- **A szekciók közötti térköz legyen nagy** — 96–192px desktopon. A portfóliók
  90%-a azért néz ki amatőrnek, mert a szekciók összeérnek. A levegő nem
  üresség, hanem a szerkesztés jele.
- **A full-bleed vizuál kilóg a rácsból, a szöveg soha.** A szöveg a
  68ch-s mértékhez van kötve, akkor is, ha a kép mellette 100vw.

Töréspontok: `600 · 900 · 1200 · 1600`. Négy elég; ne eszközökhöz, hanem a
tartalom törési pontjaihoz igazítsd őket.

### 6.5 Képarányok és médiakezelés

| Arány | Mire | Megjegyzés |
|---|---|---|
| `3:2` | fotó alap, kártya-fedőkép | 35mm-es arány; az index EGYSÉGESEN ezt használja |
| `4:5` | portré, mobil hero | mobilon a legjobb kitöltés |
| `16:9` | weboldal-képernyőkép | |
| `1:1` | grafika, termékfotó, arculati elem | |
| `21:9` | case study fedés, full-bleed | mobilon `4:5`-re **art direction**-nal cserél |

Kötelező minden médiánál:

- `width`/`height` attribútum vagy `aspect-ratio` → **CLS = 0**
- `alt` — leíró, nem „kép”; dekoratívnál `alt=""`
- `loading="lazy"` az első képernyő alatt; `fetchpriority="high"` a heroon
- LQIP: 20px-es elmosott placeholder (base64) vagy egyszínű dominant-color
- `focal` a tartalommodellből → `object-position` (lásd [4.1](#41-project--a-központi-típus))

### 6.6 Komponenskönyvtár

Kb. 24 komponens elég a teljes oldalhoz. Ha ennél több lesz, a system csúszik szét.

**Alap:** `Button` (elsődleges/másodlagos/csak-szöveg) · `Link` (aláhúzás
`text-underline-offset: .2em`) · `Tag` · `Meta` · `Rule` · `Icon`

**Elrendezés:** `Container` · `Grid` · `Stack` · `Bleed` (full-bleed kitörés) ·
`Section` (a szekció-térközt kapszulázza)

**Média:** `Figure` (kép + felirat) · `MediaPair` (páros) ·
`BeforeAfter` (csúszka) · `Lightbox` · `VideoLoop` (néma, autoplay, poszter)

**Tartalom:** `ProjectCard` · `ProjectGrid` · `FilterBar` · `CaseSection` ·
`MetricRow` (a 3 szám) · `DecisionList` (döntésnapló) · `SpecTable` (anyag /
technológia / méret) · `CodeBlock` · `Prose` (a 68ch-s szövegtörzs) ·
`Quote` · `Timeline`

**Navigáció / rendszer:** `Header` · `Footer` · `PrevNext` · `Breadcrumb` ·
`ThemeToggle` · `LangToggle` · `Form` + `Field` · `SkipLink`

**Döntés:** a `MetricRow`, a `DecisionList` és a `SpecTable` az a három
komponens, ami a portfóliódat elkülöníti egy sablonétól. Ezeket ne hagyd ki.

### 6.7 Mozgás

```
120ms   mikro-interakció (hover, fókusz)
200ms   UI-átmenet (szűrő, legördülő)
320ms   nagyobb átmenet (lightbox, oldalváltás)
500ms+  KIZÁRÓLAG scroll-reveal, és max. egyszer elemenként

belépés:  cubic-bezier(.20, .80, .20, 1)
kilépés:  cubic-bezier(.40, .00, 1, 1)
```

Négy szabály:

1. **Csak `transform` és `opacity` animálódik.** Minden más layoutot számol újra.
2. **Scroll-reveal:** 12px eltolás + opacity, egyszer, `IntersectionObserver`-rel.
   Nincs parallax, nincs scroll-jacking, nincs horizontális scroll-hijack.
3. **`prefers-reduced-motion: reduce`** → minden `transform`-animáció kikapcsol,
   csak azonnali opacity-váltás marad. Ez nem opcionális, hanem WCAG 2.2 tétel.
4. **A képváltás soha ne animálódjon.** A lightboxban a kép jelenjen meg, ne
   csúszkáljon. Fotós portfólión ez ízlés-kérdés is.

### 6.8 Fókusz és interakciós állapotok

```css
:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: 3px;
  border-radius: 2px;
}
```

- **Sarok-lekerekítés:** `2px` mindenre (gomb, input, kártya). A `0px` túl
  nyers, a `12px+` „SaaS-os”. A `2px` visszafogott és mai.
- **A `--focus` témánként más** ([6.2](#62-színtokenek)) — a `:focus-visible`
  a tokent használja, nem fix színt.
- **Nincs `:hover`-only funkció.** Amit hoverrel elérsz, azt fókusszal és
  érintéssel is el kell érni.
- **Kattintható terület** min. `44×44px`, akkor is, ha az ikon 20px.
- **`SkipLink`** az első fókuszálható elem, „Ugrás a tartalomra”.

---

## 7. Diszciplína-specifikus prezentációs minták

A közös case study váz ([5.3](#53-case-study--a-legfontosabb-oldaltípus))
mind az öt területre érvényes — de a **4. MEGOLDÁS** szekció vizuáljai
területenként másfélék. Ez a fejezet arról szól, mi a bizonyíték az egyes
területeken. Ez az, amit egy általános portfólió-sablon nem tud megadni.

### 7.1 Grafika

| Mutasd | Ne mutasd |
|---|---|
| **Rendszer-diagram**: hogyan épül a logó a rácsból, mi a variáns-logika | csak a végleges logót, kontextus nélkül |
| **Előtte–utána** — csúszkával, azonos nézetben | két egymás melletti képet, más léptékben |
| **Alkalmazás valós léptékben**: névjegy a kézben, tábla a homlokzaton | ingyenes mockup-sablont sorban |
| **Tipográfiai skála és színpaletta** mint önálló vizuál | „moodboard” Pinterestről |
| **A tervezői döntés**: 2–3 elvetett irány, egy mondattal, hogy miért | 12 variációt döntés nélkül |

Két konkrét tanács:

- **A mockup-etika számít.** Egy jól fényképezett, valóban legyártott
  névjegykártya többet ér tíz ingyenes mockupnál. Ha nincs legyártva, mondd
  ki: „koncepció, nem került gyártásba”.
- **Az elvetett irányok bemutatása a legerősebb eszközöd.** Ez mutatja, hogy
  a végeredmény döntés volt, nem az egyetlen dolog, ami eszedbe jutott.

### 7.2 Fotó

- **Sorozat, nem kép.** A `sequence` a tartalommodellben nem véletlen: a
  szerkesztett sorrend az, amit a szakma értékel. 12 jó kép jó sorrendben
  többet ér 40 nagyszerű képnél véletlen sorrendben.
- **Színkezelés:** exportálj **sRGB**-be és **ágyazd be az ICC-profilt**.
  Enélkül a Display-P3 gépeken túltelített, máshol fakó lesz. Ez a
  legmagasabb hozamú technikai lépés a fotós portfóliónál.
- **Ne kicsinyítsd le a technikát:** `AVIF` (q≈50) + `WebP` tartalék,
  `srcset` 640/1024/1600/2400px szélességekkel. A 2400px a retina-lightbox
  miatt kell; enélkül a képed a saját oldalán látszik a legrosszabbul.
- **Jog és engedély:** modell-engedély portrénál, helyszíni engedély
  ingatlannál. Egy `license` mező a tartalommodellben + egy mondat az oldalon.
- **Vízjel:** ne. Rombolja a képet, és nem védi meg. Helyette IPTC-metaadat
  a szerzőséggel — az a fájlban marad.
- **EXIF:** összecsukható blokkban, opcionálisan. Csak akkor tedd ki, ha
  fotós megbízást is vállalsz — egyébként zaj.

### 7.3 Webdesign és kód

Itt van a legnagyobb bizonyítási lehetőséged, mert **maga az oldal a
bizonyíték**. Négy dolog kell hozzá:

1. **Élő demó, nem képernyőkép.** Ha az eredeti oldal már nem él, csinálj
   egy izolált, működő részletet (a szűrőt, az animációt, a formot) és
   ágyazd be. Egy interaktív 200 soros demó erősebb, mint tíz screenshot.
2. **Számok, dátummal.** Táblázat: LCP · INP · CLS · Lighthouse (mobil) ·
   JS-méret. A dátum kötelező, különben nem ellenőrizhető állítás.
3. **Döntésnapló.** 3–5 tétel ebben a formában:

   | Döntés | Alternatíva | Miért ez |
   |---|---|---|
   | Statikus generálás | SSR Node-on | 400 oldal, napi 1 build; a CDN-cache 40 ms-os TTFB-t ad |
   | Saját lightbox (2 kB) | könyvtár (18 kB) | csak nyíl + ESC + swipe kellett |
   | AVIF + WebP tartalék | csak WebP | 34%-kal kisebb fájl azonos minőségen |

4. **Kódrészlet, nem kódbázis.** 10–25 sor, ami **egy érdekes döntést** mutat.
   Egy `App.tsx` beillesztése nulla információ.

> **Ez az oldal.** Legyen egy külön blokk vagy aloldal a saját portfóliódról:
> stack, Core Web Vitals számok, és — ha vállalod — nyilvános repo. Egy fejlesztést
> is vállaló tervezőnél ez a legerősebb létező referencia, mert a látogató
> éppen benne van.

### 7.4 Ipari termék- és formatervezés

Ez a terület nálad **most épül**, ezért itt a felkészülés a feladat. A
termékcégek és a gyártók mást keresnek, mint a grafikai megbízók: nem
látványt, hanem **megvalósíthatóságot**.

A teljes folyamatot kell mutatni, ebben a sorrendben — a `status` mező
mindig legyen kitöltve, és soha ne állítson többet, mint az igazság:

```
01  Kutatás      →  kontextus, felhasználó, konkurens teardown, mérések
02  Skicc        →  kézi vázlatok, VÁLLALD a nyers oldalakat is
03  Ergonómia    →  méretek, fogás, tűrés, antropometriai hivatkozás
04  CAD          →  3D-modell, alkatrészrobbantás, keresztmetszet
05  Anyag        →  anyag + technológia + felület, indoklással
06  Prototípus   →  FOTÓ a nyomtatott/megmunkált darabról, hibákkal együtt
07  Tanulság     →  mi nem működött és mit változtatnál
```

**A `SpecTable` komponens** ennek a területnek a `MetricRow`-ja:

| Paraméter | Érték |
|---|---|
| Anyag | PA12 (SLS), matt üveggyöngyszórt felület |
| Technológia | szelektív lézerszinterezés, 0,2 mm rétegmagasság |
| Méret | 128 × 64 × 22 mm |
| Falvastagság | 2,4 mm (min. 1,8 mm) |
| Sorozat | 1 db funkcionális prototípus |
| Státusz | **koncepció** — nem került gyártásba |

Négy szabály, ami hitelesít:

1. **A prototípus-fotó a legerősebb elem.** Egy közepes fizikai darab fotója
   erősebb, mint egy kifogástalan KeyShot-render. A render bárki tud; a
   megvalósítás nem.
2. **Ne csinálj fiktív márkás koncepciót.** A „koncepció-cipő ismert
   márkának” a műfaj legmegbízhatóbb hitelrontója.
3. **A `status` mező szent.** `koncepcio` / `prototipus` / `gyartasban` —
   ez az a mező, aminél a félreérthetőség a szakmai hitelbe kerül.
4. **A szomszédos kompetenciát MOST is mutasd.** Termékfotó, csomagolás,
   műszaki illusztráció — ezek valós, mai munkák, és ugyanabba az irányba
   mutatnak. Ez hitelesebb átvezetés, mint egy üres „hamarosan” oldal.

---

## 8. Technológiai stack

### 8.1 Három forgatókönyv

| | **A — Astro + Markdown** | **B — Next.js + headless CMS** | **C — Framer / Webflow** |
|---|---|---|---|
| Tartalom | `.md`/`.mdx` fájlok a repóban | Sanity / Payload / Directus | a szolgáltató szerkesztője |
| JS a kliensen | ~0–30 kB | ~90–160 kB | ~300 kB+ |
| Bővítés | git commit | admin felület | vizuális szerkesztő |
| Költség | 0 Ft (Cloudflare/Netlify free) | 0–20 EUR/hó | 15–40 EUR/hó |
| Kép-pipeline | build-time, saját kontroll | beépített CDN | beépített, kevés kontroll |
| Tanulási idő | 1–2 nap | 1 hét | fél nap |
| **Alkalmas, ha…** | a kód is a portfólió része | 50+ munka, több szerkesztő | nulla karbantartást akarsz |
| Kockázat | mindent te tartasz fenn | túltervezés 15 munkára | **nem bizonyítja a kód-kompetenciát** |

**Ajánlás: A (Astro).** Három okból, a te helyzetedben:

1. **A `kod` diszciplína bizonyítéka maga az oldal.** Egy Webflow-portfólió,
   ami azt állítja, hogy kódolsz, önmagát cáfolja. Ez nem stílus-, hanem
   pozicionálási kérdés.
2. **Az Astro alapból nulla JS-t szállít**, és szigetenként (`client:visible`)
   engedi be az interaktivitást — pont ez kell egy kép-nehéz portfóliónak.
3. **A Markdown-tartalom a repóban** azt is jelenti, hogy a portfólió
   verziózott, migrálható és nem függ egy szolgáltatótól. 15–30 munkánál a CMS
   tiszta felesleg.

A `B` felé akkor kell lépni, ha (a) 50+ munka lesz, (b) más is szerkeszt,
vagy (c) a tartalom napi frissítést igényel. Egyik sem valószínű 2 éven belül.

### 8.2 Javasolt konkrét összeállítás

```
Keretrendszer   Astro 5 (statikus kimenet)
Stílus          natív CSS + custom properties (a 6. fejezet tokenjei)
                  → Tailwind NEM kell: a design system fix, a tokenkészlet zárt,
                    és a natív CSS itt kevesebb absztrakció ugyanazért
Interaktivitás  vanilla TS szigetek (szűrő, lightbox, téma) — összesen <10 kB
Tartalom        Markdown + zod-sémás content collections (a 4. fejezet modellje)
Kép             astro:assets → AVIF + WebP, srcset, build-time
Betű            self-hosted woff2 subset, 2 fájl (Inter + JetBrains Mono)
Űrlap           Cloudflare Pages Function / Netlify Function + Resend
Hosting         Cloudflare Pages (vagy Netlify) — git push = deploy
Analitika       Plausible / Umami (self-hosted) — cookie-mentes
Hibafigyelés    Sentry free (opcionális)
CI              GitHub Actions: build + Lighthouse CI + linkellenőrzés
```

**Amit tudatosan nem használunk:** komponens-könyvtár (a system a sajátod);
CSS-in-JS (nincs futásidejű stílus-igény); animációs könyvtár (a 6.7 mozgás
tokenekkel megvan); jQuery; Google Analytics (a GDPR-terhe nem áll arányban a
haszonnal egy portfólión).

### 8.3 Kép-pipeline

Ez nem utólagos optimalizálás. **Egy fotó- és grafikaportfólión a kép-pipeline
a legfontosabb technikai döntés**, mert a teljes oldalsúly 90%-a kép.

```
Eredeti (RAW / vektor)         →   nem kerül a repóba (git-lfs vagy külső tár)
        ↓  export
Mester JPEG/PNG, sRGB + ICC    →   /media-src/  (repón kívül, vagy .gitignore)
        ↓  build-time (astro:assets / sharp)
AVIF  q≈50   +   WebP  q≈78    →   /_astro/  hash-elt fájlnév, immutable cache
        ↓
srcset: 640 / 1024 / 1600 / 2400 px
sizes:  a tényleges layout szerint, nem „100vw”
```

| Szabály | Miért |
|---|---|
| **AVIF elsőként**, WebP tartalékkal | 30–50%-kal kisebb azonos minőségen |
| `srcset` + **valós `sizes`** | a `sizes="100vw"` egy 3 kolumnás rácsban 3× annyit tölt le |
| sRGB + **beágyazott ICC** | különben P3-kijelzőn túltelített |
| LQIP (20px blur vagy dominant color) | a képváltás ne ugráljon |
| `width`/`height` **mindig** | CLS = 0 |
| A mester fájl **nincs** a repóban | a git nem bináris archívum |

Ha a build-time feldolgozás túl lassú lesz (200+ kép), akkor — és csak akkor —
jöhet külső képszolgáltatás (Cloudflare Images, Imgix). Addig a build-time
megoldás gyorsabb, ingyenes és teljesen a te kontrollod alatt van.

---

## 9. Teljesítmény, akadálymentesség, SEO

### 9.1 Teljesítmény-költségkeret

Ez nem cél, hanem **keret**: amit túllép a build, azt a CI utasítsa el.

| Metrika | Cél | Maximum | Hol méred |
|---|---|---|---|
| LCP (mobil, 4G) | < 1,8 s | 2,5 s | Lighthouse CI + valós CWV |
| INP | < 120 ms | 200 ms | valós CWV |
| CLS | < 0,02 | 0,05 | Lighthouse CI |
| TTFB | < 200 ms | 500 ms | CDN-mérés |
| JS a nyitóoldalon (gzip) | < 20 kB | 60 kB | build-riport |
| CSS (gzip) | < 15 kB | 30 kB | build-riport |
| Betűfájlok | 2 db / < 90 kB | 4 db / 160 kB | — |
| Első képernyő képei | < 250 kB | 450 kB | — |
| Lighthouse mobil (Perf) | ≥ 95 | 90 | CI, PR-onként |
| Lighthouse (A11y / BP / SEO) | 100 | 100 | CI, PR-onként |

Építsd be a CI-be (`Lighthouse CI` + `budget.json`), és a PR bukjon el, ha
átlépi. Így a keret nem jószándék marad. **Bónusz:** ezek a számok
egyszerre a [7.3](#73-webdesign-és-kód) szerinti nyilvános bizonyítékok is.

### 9.2 Akadálymentesség — WCAG 2.2 AA

Portfólió-specifikus ellenőrzőlista. A generikus a11y-listákból ezek az
elemek szoktak kimaradni, és pont ezek a képnehéz oldalak buktatói:

- [ ] **Kontraszt:** szöveg 4,5:1, nagy szöveg (18px+ / 14px bold) 3:1,
      UI-elem és fókuszgyűrű 3:1 — **mindkét témán mérve**
      (a [6.2](#62-színtokenek) készlet ezt teljesíti; a projekt-specifikus
      `accent` értékeket viszont egyedileg át kell mérni)
- [ ] **Minden kép `alt`-ja leíró**; dekoratív kép `alt=""`; a felirat nem
      helyettesíti az `alt`-ot (más a funkciójuk)
- [ ] **Lightbox:** fókuszcsapda, ESC-zárás, a fókusz visszatér a kiváltó
      elemre, `role="dialog"` + `aria-modal="true"` + `aria-label`
- [ ] **Szűrősáv:** valódi `<button>`-ok, `aria-pressed`, és a találatszám
      `aria-live="polite"` régióban bemondva
- [ ] **`prefers-reduced-motion`** minden animációnál tiszteletben
- [ ] **Csak billentyűzettel** bejárható az egész oldal, látható
      fókuszjelzéssel — a lightbox és a szűrő is
- [ ] **Fejezet-hierarchia** nem ugrik (h1 → h2 → h3), egy `h1` oldalanként
- [ ] **Nyelv-attribútum** helyes (`<html lang="hu">`), és a
      nyelvváltó `hreflang`-gel jelöl
- [ ] **Űrlap:** `<label>` minden mezőn, `aria-describedby` a hibaüzenetre,
      a hiba szövegben is közölve (nem csak színnel)
- [ ] **Videó/loop:** néma, `poster`, és van szüneteltető gomb, ha >5 s
- [ ] **Nagyítás:** 200%-on és `400%` (`320px` viewport) mellett is használható,
      vízszintes scroll nélkül
- [ ] **`SkipLink`** az első fókuszálható elem

Eszközök: `axe DevTools` (kézi), `@axe-core/playwright` (CI), és **egy
igazi képernyőolvasó-átjárás** (NVDA vagy VoiceOver) a nyitóoldalon, egy
case studyn és a fotó-lightboxon. Az automata teszt a hibák ~40%-át találja meg.

### 9.3 SEO és megosztás

**Strukturált adatok** (JSON-LD), oldaltípusonként:

| Oldal | Séma |
|---|---|
| `/` | `WebSite` + `Person` (`sameAs`: LinkedIn, Behance, GitHub, Instagram) |
| `/munkak/{slug}` | `CreativeWork` (fotónál `Photograph`, grafikánál `VisualArtwork`) + `ImageObject` |
| `/naplo/{slug}` | `Article` + `BreadcrumbList` |
| `/szolgaltatasok` | `Service` |
| minden aloldal | `BreadcrumbList` |

**Megosztási képek:** `1200×630` OG-kép **generálva**, ne kézzel. Astronál
`satori`/`@vercel/og` build-time — a projekt fedőképéből + a címből + a
[LinkedIn borító](../brand/linkedin-cover/) tipográfiájából. Egy sablon,
minden oldalra. Ez az a részlet, amit senki nem csinál meg, és amitől a
LinkedIn-megosztásod máshogy néz ki.

**Alapok, amiket nem szabad kihagyni:**

- Egy `<title>` sablon: `{oldal} — {Név}, {fő diszciplína}`, max 60 karakter
- `meta description` oldalanként **kézzel írva**, 150–160 karakter
- Kanonikus URL minden oldalon (a szűrt `?d=` változatokra is!)
- `sitemap.xml` + `robots.txt` generálva
- RSS a `/naplo`-ra
- **`hreflang`** HU/EN párosítás, `x-default` a HU-ra
- A képek fájlneve leíró: `hotel-kanyar-nevjegykartya.jpg`, ne `IMG_4471.jpg`
  — a képkeresés valós forgalmat hoz egy fotós portfólióra

---

## 10. Tartalomkészítési munkafolyamat

### 10.1 Case study írási sablon

Töltsd ki **szövegként, előbb**, mint bármilyen layoutot csinálnál. Ha a
kitöltött sablon nem érdekes, a layout sem fogja megmenteni.

```
CÍM (max 60 karakter, tartalmazza a megbízót vagy a kimenetet)
TEASER (max 120 karakter, egy mondat, ami megmondja, mi ebben az érdekes)

KONTEXTUS (120 szó)
  · Ki a megbízó, mi a helyzet
  · Mi volt a megszorítás: idő / büdzsé / örökölt rendszer / jogszabály
FELADAT (60 szó)
  · Egy probléma-állítás. Nem feladatlista.
MEGOLDÁS (3–6 blokk × 40–80 szó + vizuál)
  · Blokkonként EGY döntés, és a döntés indoklása
  · Legalább egy blokk mutasson elvetett irányt
EREDMÉNY (60 szó + 3 szám)
  · Ha nincs szám: mondd ki, és adj helyette konkrét megfigyelést
REFLEXIÓ (60 szó)
  · Mit csinálnál másképp. EZT NE HAGYD KI.
```

### 10.2 Asset-előkészítési ellenőrzőlista

Minden új munkánál, sorrendben:

- [ ] Fedőkép kiválasztva, `3:2`, `focal` pont meghatározva
- [ ] 8–16 vizuál kiválasztva és **sorrendbe rendezve**
- [ ] Minden kép sRGB + ICC, max 2400px hosszabb oldal
- [ ] Minden képhez `alt` és felirat megírva
- [ ] A 3 `metrics` szám megvan (vagy leírva, hogy nincs)
- [ ] NDA tisztázva → `nda` és `client` mező kitöltve
- [ ] Közreműködők megnevezve
- [ ] `disciplines`, `output`, `industry`, `year` a zárt szótárból
- [ ] `order` beállítva (hova kerül a kurált sorrendben)
- [ ] `seo.description` megírva (150–160 karakter)
- [ ] Külső linkek élnek
- [ ] Előnézet mobilon és sötét/világos témán is megnézve

### 10.3 Fájl- és mappaszervezés

```
content/
  munkak/        hotel-arculat-2025.md
  foto/          balaton-tel-2024.md
  naplo/         kepoptimalizalas.md
media-src/       ← mesterfájlok, .gitignore-ban (vagy git-lfs)
  hotel-arculat-2025/
    cover.jpg
    01-nevjegy.jpg
    02-brosura.jpg
public/media/    ← csak ami tényleg kell futásidőben
```

Elnevezés: `{projekt-slug}/{sorszám}-{leírás}.{kiterjesztés}`, kisbetű,
kötőjel, ékezet nélkül. A sorszám a **sorrendet** kódolja — ez a legegyszerűbb
működő megoldás arra, hogy két év múlva is tudd, mi mi.

### 10.4 Kurálás — a legfontosabb tartalmi szabály

| Hely | Mennyi | Szabály |
|---|---|---|
| Nyitóoldal | **6** | vegyes diszciplína, a legerősebb elöl |
| Munkák index | **12–20** | ennél több hígít |
| Fotó | **3–6 sorozat** × 12–20 kép | a sorozat szerkesztve, nem teljes |
| Kód | **3–5** | mindegyikhez élő demó |
| Formatervezés | **2–4** | önálló kutatás is jó, ha `status` jelölt |

**Évente egyszer törölj.** Ha egy munka ma már nem képvisel, vedd le. A
portfólió nem archívum; a legrosszabb munka határozza meg, hogyan
értékelik az egészet.

---

## 11. Kétnyelvűség (HU / EN)

| Szempont | Döntés |
|---|---|
| URL-szerkezet | `/` (HU, alapértelmezett) és `/en/…` prefixszel |
| Alapértelmezés | **HU**, `x-default` is a HU-ra |
| Mit fordítunk | UI, navigáció, `/rolam`, `/szolgaltatasok`, `/kapcsolat`, case study `title` + `teaser` + `metrics` |
| Mit **nem** | a napló-cikkek törzse (fordítsd, ha a cikk megérdemli), és a fotósorozatok bevezetői |
| Nyelvváltó | fejlécben, a **jelenlegi oldal** párjára mutat (ne a főoldalra!) |
| Technika | Astro i18n routing + `hreflang` párok minden oldalon |
| Tartalommodell | `title_hu` / `title_en` mezőpárok, **ne** külön fájl-fa |

**Kritikus, és gyakran elrontott:** a nyelvváltó a jelenlegi oldal
megfelelőjére mutasson. Ha nincs fordítás, mondja meg („Ez a munka csak
magyarul olvasható”), ne dobjon a főoldalra — az a leggyakoribb ok, amiért
valaki elhagyja az oldalt.

**Ütemezés:** ne kezdd kétnyelvűen. Előbb legyen kész és jó magyarul, aztán
jöjjön az angol. A félig lefordított oldal rosszabb, mint az egynyelvű.
De az **architektúra** (URL-ek, mezőpárok) az első naptól legyen kétnyelvűre
képes — utólag betenni sokkal drágább.

---

## 12. Mérés és konverzió

### 12.1 CTA-hierarchia

Oldalanként **egy** elsődleges CTA. Kettő már megosztja a figyelmet.

| Oldal | Elsődleges CTA | Másodlagos |
|---|---|---|
| Nyitóoldal | „Munkák megtekintése” | „Beszéljünk” |
| Munkák index | egy konkrét munka megnyitása | szűrés |
| Case study | „Ilyen projektet tervez? Beszéljünk” | Következő munka |
| Fotósorozat | Kapcsolat | Következő sorozat |
| Rólam | „Beszéljünk” | CV letöltése |
| Szolgáltatások | brief-űrlap | e-mail |

### 12.2 Amit mérni érdemes

Cookie-mentes, privacy-first analitikával (Plausible / Umami), így nincs
sütibanner-kényszer — ami önmagában is konverziót javít:

| Esemény | Miért ez a mutató |
|---|---|
| `case_study_scroll_75` | **a legfontosabb egyetlen szám**: valóban elolvasták-e |
| `filter_used` + érték | melyik diszciplína iránt van tényleges érdeklődés |
| `contact_form_submit` | konverzió |
| `email_click` | a legtöbb megkeresés e-mailben jön, nem űrlapon |
| `live_demo_click` | a kód-terület iránti érdeklődés |
| `cv_download` | álláskeresési relevancia |
| `lightbox_open` | fotó-elköteleződés |

Amit **ne** mérj: „oldalon töltött idő” (portfólión értelmezhetetlen),
és semmi, amiért sütibannert kellene kitenni.

### 12.3 Negyedéves felülvizsgálat

Négy kérdés, 30 perc, negyedévente:

1. Melyik case studyt olvassák végig (`scroll_75`) — és melyiket nem? A nem
   olvasottat vagy írd újra, vagy vedd le.
2. Melyik szűrőt használják? Ha egy diszciplínát senki nem szűr, az vagy
   nem érdekes, vagy nem látszik.
3. Honnan jön a megkeresés (LinkedIn / keresés / ajánlás)? Oda tegyél többet.
4. Teljesítmény-keret: átlépte-e valami a [9.1](#91-teljesítmény-költségkeret)
   táblázatot?

---

## 13. Ütemterv

Négy fázis, ~12 hét mellékprojekt-tempóban. A sorrend nem cserélhető:
minden fázis a korábbira épül.

### 1. fázis — Alap (1–3. hét)
- [ ] Pozicionáló állítás megírva ([1.4](#14-pozicionáló-állítás)), 2 elsődleges közönség kiválasztva
- [ ] Sitemap és URL-ek véglegesítve ([3](#3-információs-architektúra))
- [ ] Tartalommodell `zod`-sémaként leírva ([4](#4-tartalommodell))
- [ ] Design tokenek CSS-ben ([6.2](#62-színtokenek)–[6.4](#64-rács-és-térkezelés))
- [ ] Astro projekt, hosting, domain, CI váz
- [ ] **3 case study szövege megírva** — layout nélkül, sablonból ([10.1](#101-case-study-írási-sablon))

> A 3 megírt case study a fázis kimenete. Ha ez nincs meg, ne menj tovább:
> a layout-tervezés tartalom nélkül a legdrágább módja az időveszteségnek.

### 2. fázis — Váz (4–6. hét)
- [ ] Komponenskönyvtár alapja ([6.6](#66-komponenskönyvtár)) — 12 komponens
- [ ] Nyitóoldal, Munkák index + szűrő, Case study sablon
- [ ] Kép-pipeline működik ([8.3](#83-kép-pipeline))
- [ ] Az első 6 munka feltöltve
- [ ] Reszponzív ellenőrzés 320 / 768 / 1440 / 1920 px
- [ ] Lighthouse CI + `budget.json` bekötve

### 3. fázis — Terület-oldalak (7–9. hét)
- [ ] `/foto` + 2 sorozat lightboxszal
- [ ] `/kod` + 2 technikai case study élő demóval és számokkal
- [ ] `/formatervezes` szándék-oldal + `kutatas` első bejegyzés
- [ ] `/rolam`, `/szolgaltatasok`, `/kapcsolat` + működő űrlap
- [ ] Akadálymentességi átjárás ([9.2](#92-akadálymentesség--wcag-22-aa)), képernyőolvasóval is

### 4. fázis — Élesítés (10–12. hét)
- [ ] OG-kép generálás, JSON-LD, sitemap, RSS
- [ ] Sötét/világos téma végigellenőrizve minden oldalon
- [ ] 404, adatvédelem, impresszum
- [ ] Analitika + a [12.2](#122-amit-mérni-érdemes) események
- [ ] Külső átolvasás: **2 szakmai + 1 laikus** ember
- [ ] LinkedIn borító, e-mail aláírás, profilok egységesítve
- [ ] Élesítés, majd 2 hét múlva az első felülvizsgálat

**Kész-definíció** (minden oldalra): mobilon és desktopon rendben ·
mindkét témán rendben · Lighthouse ≥ 95/100/100/100 · billentyűzettel
bejárható · minden képen `alt` · nincs elgépelés (magyar helyesírás-ellenőrzés
külön futtatva) · minden link él.

---

## 14. Anti-patternek

Amit tudatosan kerülünk, és miért. Ezek nem stílus-preferenciák — mindegyik
mögött konverziós vagy hitelességi ok van.

| Anti-pattern | Miért baj |
|---|---|
| **Belépő animáció, „loading” képernyő** | 1,5 s-ot ad az LCP-hez azért, hogy késleltesse a tartalmat |
| **Scroll-jacking, horizontális scroll-hijack** | elveszi a felhasználó kontrollját; billentyűzettel bejárhatatlan |
| **Egyedi kurzor** | pár száz byte élményért elveszik a rendszer-affordanciák |
| **Végtelen scroll a munkák indexén** | a lábléc elérhetetlen, a visszalépés eltörik |
| **„Minden munkám” 60 elemmel** | a legrosszabb elem határozza meg az egész megítélését |
| **Ingyenes mockup-sablonok sorban** | azonnal felismerhető, és nem bizonyít semmit |
| **Fiktív márkás koncepció** | a szakma azonnal kiszúrja; hitelrontó |
| **Készség-százalékok („Photoshop 92%”)** | mérhetetlen, tehát nem információ |
| **„Szenvedélyes, kreatív, innovatív”** | nulla információtartalom, mindenki ezt írja |
| **Ajánlások 3 alatt** | egyetlen ajánlás gyengébb, mint egy sem |
| **Logó-fal 6 ismert név alatt** | ha nem ismerik fel, csak zaj |
| **Elrejtett elérhetőség** | a legdrágább hiba, amit portfólión el lehet követni |
| **CAPTCHA a kapcsolati űrlapon** | akadálymentességi hiba és konverziógyilkos |
| **Csak `mailto:` link** | asztali kliens nélkül nem működik; írd ki szövegként is |
| **Kép nélküli `alt`, `IMG_4471.jpg` fájlnév** | elveszít valós keresési forgalmat |
| **100vh hero** | elrejti, hogy van lejjebb tartalom; mobilon a böngészősáv miatt ugrik |
| **Case study „Reflexió” nélkül** | pont az a szekció marad ki, ami a tervezőt bizonyítja |
| **Dátum szerinti rendezés a kurált helyett** | a legjobb munkád véletlenszerű helyre kerül |

---

## Függelék

### A. Repo-struktúra javaslat

```
.
├── docs/
│   └── portfolio-koncepcio.md      ← ez a dokumentum
├── brand/
│   ├── linkedin-cover/             LinkedIn borító (forrás + PNG-k)
│   ├── fonts/                      self-hosted woff2 subsetek
│   └── tools/                      render-cover.mjs
├── content/
│   ├── munkak/                     Project (.md)
│   ├── foto/                       PhotoSeries (.md)
│   └── naplo/                      Post (.md)
├── media-src/                      mesterfájlok (.gitignore / git-lfs)
├── src/
│   ├── components/                 a 6.6 komponensei
│   ├── layouts/
│   ├── pages/
│   ├── styles/tokens.css           a 6.2–6.4 tokenjei
│   └── content.config.ts           zod sémák (4. fejezet)
├── public/
└── .github/workflows/ci.yml        build + Lighthouse CI + linkellenőrzés
```

### B. Első hét — konkrét teendők

1. Írd meg a pozicionáló mondatot. Egy mondat, 140 karakter. Ez a legnehezebb
   feladat az egész projektben; szánj rá egy egész napot.
2. Válaszd ki a **2 elsődleges közönséget** a [1.3](#13-célközönségek) táblázatból.
3. Listázd ki az összes munkádat egy táblázatba: `cím · év · diszciplínák ·
   iparág · van-e szám · van-e jó kép`. Ez a lista fogja megmondani, mi a
   valódi portfóliód — és általában kiderül, hogy 8–12 munka az, ami tényleg áll.
4. Válassz ki hármat, és írd meg a case study szövegét a
   [10.1](#101-case-study-írási-sablon) sablonnal. Layout nélkül, sima szövegben.
5. Csak ezután nyisd ki a Figmát.

### C. Ellenőrzőlisták egy helyen

- Asset-előkészítés → [10.2](#102-asset-előkészítési-ellenőrzőlista)
- Akadálymentesség → [9.2](#92-akadálymentesség--wcag-22-aa)
- Teljesítmény-keret → [9.1](#91-teljesítmény-költségkeret)
- Kurálási limitek → [10.4](#104-kurálás--a-legfontosabb-tartalmi-szabály)
- Kész-definíció → [13](#13-ütemterv)

### D. Kapcsolódó anyagok a repóban

| Mi | Hol |
|---|---|
| LinkedIn borító (PNG-k, forrás, biztonságos zóna) | [`brand/linkedin-cover/`](../brand/linkedin-cover/) |
| Borító újragenerálása | `node brand/tools/render-cover.mjs` |
| Betűtípus-licencek | [`brand/fonts/README.md`](../brand/fonts/README.md) |
