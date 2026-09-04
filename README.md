# BrthtyNarciszApp
lakás assistent - szerver, telegram, webes UI 

---

## Személyes portfólió (új projekt)

Grafika · fotó · webdesign · kód · ipari termék- és formatervezés — egy
személyes portfólió-weboldal koncepciója és a hozzá tartozó arculati elemek.

| Mi | Hol |
|---|---|
| **Webdesign és strukturális koncepció** — pozicionálás, információs architektúra, tartalommodell, oldalankénti terv, design system, technológiai stack, ütemterv | [`docs/portfolio-koncepcio.md`](docs/portfolio-koncepcio.md) |
| **LinkedIn borítókép** — kész PNG-k (sötét/világos, HU/EN, 1×/2×) + szerkeszthető forrás | [`brand/linkedin-cover/`](brand/linkedin-cover/) |

A borító újragenerálása a szöveg átírása után:

```bash
node brand/tools/render-cover.mjs
```

A borító és a koncepció **ugyanabból a tokenkészletből** származik (szín,
tipográfia, 44 px-es rács), hogy a LinkedIn profil és a későbbi weboldal egy
vizuális nyelvet beszéljen.
