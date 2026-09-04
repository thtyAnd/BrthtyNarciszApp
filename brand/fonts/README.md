# Betűtípusok

A LinkedIn borító rendereléséhez használt betűkészletek latin és latin-ext
részhalmazai (variable font, 100–900 tengely). Azért vannak a repóban, hogy a
`brand/tools/render-cover.mjs` internet nélkül is bitre azonos képet adjon.

| Fájl | Család | Licenc |
|---|---|---|
| `inter-latin.woff2`, `inter-latin-ext.woff2` | Inter — Rasmus Andersson | SIL Open Font License 1.1 |
| `jbmono-latin.woff2`, `jbmono-latin-ext.woff2` | JetBrains Mono — JetBrains s.r.o. | SIL Open Font License 1.1 |

Mindkét licenc engedi a továbbterjesztést. Teljes szöveg és forrás:

- Inter — <https://github.com/rsms/inter> · <https://fonts.google.com/specimen/Inter>
- JetBrains Mono — <https://github.com/JetBrains/JetBrainsMono> · <https://fonts.google.com/specimen/JetBrains+Mono>

A `latin-ext` részhalmaz a magyar `ő`/`ű` (U+0150–0151, U+0170–0171) miatt kell:
ezek nem szerepelnek a `latin` részhalmazban.
