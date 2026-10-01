# Referenčna igra — teden 8

Igriva **Top-down Zombie Survival** ob koncu skupne baze (tedni 01–08).  
To je **referenca** (jasen cilj), ne rešitev, ki jo prilepiš v tednu 1.

Študenti to igro zgradijo **postopoma** v vajah. `starter/` ostane minimalen (modri kvadrat + WASD).  
Referenca je razdeljena po sistemih v `js/`. Od tedna 2 ima študentska igra iste datoteke.

## Zagon

Iz mape `demo/`:

```bash
python3 -m http.server 8080
```

Odpri brskalnik: [http://localhost:8080](http://localhost:8080)

Če zaženeš strežnik iz korena repoja, odpri `http://localhost:8080/demo/`.

Igra je v ES modulih (`<script type="module">`). Dvojni klik na HTML (`file://`) modulov ne naloži.

Če že teče starter na 8080, izberi druga vrata, npr. `python3 -m http.server 8081`.

## Kontrole

| Vhod | Dejanje |
|------|---------|
| **W A S D** / puščice | Premik. Na meniju ali game over tudi začne igro. |
| **Miška** | Drži gumb: strel proti kazalcu |
| **ENTER** / klik | Začetek iz menija ali po game over |
| **R** | Ponovni zagon (med igro ali ob game over) |

Diagonala je normalizirana (`Math.hypot`), da W+D ni hitrejši od W.

## Kaj demonstrira (po tednih)

| Teden | V kodi |
|------:|--------|
| 1–2 | `player`, `keys`, `updatePlayer`, clamp na platno |
| 3 | `loop` → `dt` → `update` → `draw`; `state` je `"MENU"` / `"PLAYING"` / `"GAME_OVER"` |
| 4 | `walls`, `aabbOverlap`, `moveWithWalls` (najprej x, nato y) |
| 5 | `bullets` so pravokotniki `{x,y,w,h,vx,vy}`; smer proti miški; `shotTimer` |
| 6 | `player.hp`, palica `hp / maxHp` v `render.js`, `hurtTimer`, game over, `resetGame` na **R** |
| 7 | `score`, `wave`, HUD; nov val, ko je `enemies.length === 0` |
| 8 | `updateEnemy`: seek; `walker` (počasen, 3 HP) in `runner` (hiter, 1 HP) |

Vse entitete so pravokotniki `{x, y, w, h}` (levi-zgornji kot). Isti `aabbOverlap` velja za igralca, zid, kroglo in sovražnika.

Barvni kvadrati so namerni. Sprite, zvok in polish niso del skupne baze (to gre v [`projekt/`](../projekt/), če jih želiš).

## Datoteke

| Datoteka | Namen |
|----------|--------|
| `index.html` | stran + canvas |
| `style.css` | centiranje, temno ozadje (isti jezik kot `starter/`) |
| `js/game.js` | `resetGame`, `update`, zanka |
| `js/config.js` | konstante, `KINDS`, `walls` |
| `js/world.js` | skupno stanje (`state`, `player`, `bullets`, `enemies`, …) |
| `js/input.js` | WASD, puščice, miška |
| `js/collision.js` | `aabbOverlap`, `moveWithWalls` |
| `js/player.js` | premik in `hurtTimer` |
| `js/bullets.js` | `shoot`, `updateBullets` |
| `js/enemies.js` | `spawnWave`, `updateEnemy` |
| `js/render.js` | risanje, HUD, meni |

Števila za vajo *change → test* so v `js/config.js`.

## Kaj to ni

- Ni oddaja za teden 1 in ni predloga za kopiranje pred vajo.
- Ni pathfinding (sovražnik gre proti tebi in se ob zidu ustavi).
- Ni lastna igra po tednu 8 — to je [`projekt/`](../projekt/).

Več: [`../TEDENSKI-NACRT.md`](../TEDENSKI-NACRT.md), [`../DIDAKTIKA-AI.md`](../DIDAKTIKA-AI.md), [`../starter/`](../starter/), [`../projekt/`](../projekt/).
