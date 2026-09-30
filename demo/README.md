# Referenčna igra — teden 8

Igriva **Top-down Zombie Survival** ob koncu skupne baze (tedni 01–08).  
To je **referenca** (jasen cilj za učitelje in študente), ne rešitev, ki jo prilepiš v tednu 1.

Študenti to igro zgradijo **postopoma** v vajah. `starter/` ostane minimalen (modri kvadrat + WASD).

## Zagon

Iz mape `demo/`:

```bash
python3 -m http.server 8080
```

Odpri brskalnik: [http://localhost:8080](http://localhost:8080)

**Pomembno:** zaženi strežnik **iz mape `demo/`** (tam sta `index.html` in `game.js`). Če zaženeš iz korena repoja, odpri `http://localhost:8080/demo/`.

`file://` (dvojni klik na HTML) običajno deluje, ker ni modulov — vseeno raje http.server, kot na vajah.

Če tipke ne reagirajo: **najprej klikni platno** (vgrajen predogled / iframe pogosto požre tipke, dokler igra nima fokusa). Pod platnom vidiš vrstico `tipke: OK · zadnji: …`, ko dogodki pridejo skozi.

(Druge možnosti: VS Code Live Server, `npx serve .` …)

Če že teče starter na 8080, izberi drugo vrata, npr. `python3 -m http.server 8081`.

## Kontrole

| Vhod | Dejanje |
|------|---------|
| **W A S D** / puščice | Premik (diagonala je normalizirana). Na meniju ali game over tudi **začne igro**. |
| **Miška** | Merjenje; klik ali drži = strel proti kazalcu |
| **ENTER** / klik | Začetek iz menija ali po game over |
| **R** | Ponovni zagon (med igro ali ob game over) |

## Kaj demonstrira (po tednih)

| Teden | V kodi |
|------:|--------|
| 1–2 | Igralec, WASD, clamp na platno, diagonalna normalizacija |
| 3 | `requestAnimationFrame`, delta time, stanja `MENU` / `PLAYING` / `GAME_OVER` |
| 4 | Ovire + AABB (`aabbOverlap`, resolve po oseh) |
| 5 | Projektili proti miški, cooldown, odstranitev ob robu / steni |
| 6 | HP, škoda ob stiku, i-frames (`hurtCooldown`), game over, **R** |
| 7 | Točke, valovi, HUD (HP, točke, val) |
| 8 | Seek AI; **walker** (počasen, več HP) in **runner** (hiter, 1 HP) |

Barvni pravokotniki in krogi so namerni — sprite, zvok in polish niso del skupne baze (to gre v [`projekt/`](../projekt/), če jih želiš).

## Datoteke

| Datoteka | Namen |
|----------|--------|
| `index.html` | stran + canvas |
| `style.css` | centiranje, temno ozadje (isti jezik kot `starter/`) |
| `game.js` | celotna logika (brez bundlerja, brez Phaser / Three.js) |

Spremenljivke za vajo *change → test*: objekt `CONFIG` in `ENEMY_TYPES` na vrhu `game.js` (hitrost, HP, cooldown, število v valu).

## Kaj to ni

- Ni oddaja za teden 1 in ni “paste-all” predloga pred vajo.
- Ni polirana komercialna igra (ni spriteov, zvoka, pause menija).
- Ni lastna igra po tednu 8 — to je [`projekt/`](../projekt/).

Več: [`../TEDENSKI-NACRT.md`](../TEDENSKI-NACRT.md), [`../DIDAKTIKA-AI.md`](../DIDAKTIKA-AI.md), [`../starter/`](../starter/), [`../projekt/`](../projekt/).
