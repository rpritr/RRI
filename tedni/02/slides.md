# P16 · Teden 2
## Premikanje + repo higiene

---

# Kje smo

Teden 1: starter teče, GDD je osnutek.

Danes: **boljši premik** + **urejen repo**.  
Ne še poln sovražnik.

---

# Input ≠ fizika

`keydown` / `keyup` → stanje `keys.w = true`

`updatePlayer(dt)` → premik vsak frejm

Če premikaš samo ob dogodku tipke: ritem OS, ne igre.

---

# Diagonala

W+D brez normalizacije = ~1.41× hitrost.

```
len = hypot(dx, dy)
dx /= len
```

Enotski vektor × `speed` × `dt`.

---

# Hitrost

`speed` = piksli **na sekundo**

Zato: `x += dx * speed * dt`

Konstante na vrh: `PLAYER_SPEED`, morebiti sprint.

Clamp na rob ≠ trk z zidom v svetu (teden 4).

---

# Vaja: izboljšaj

- Puščice = WASD
- Shift = sprint
- Številke v GDD = številke v kodi

Nato **spremeni** en parameter in občuti.

---

# Sovražnik (samo misel)

Isti vzorec: `{ x, y, w, h, speed, color }`

V `loop` za `updatePlayer` — starter že ima komentar.

AI sledenja **ni** danes.

---

# Repo higiene

| | |
|--|--|
| Fork / tvoj repo | tedni 2–8 + projekt |
| `.gitignore` | node_modules, .env |
| README | zagon + kontrole |
| Commits | “teden 2: sprint”, ne “fix” |

---

# AI danes

Samo funkcija `updatePlayer`.  
Ne cel `game.js`.

```
generate → run → understand
     → change → test → explain
```

---

# Izhod tedna

Čistejši input.  
Urejen README.  
Sledljivi commiti.

---

# Do naslednjič

Kaj je `dt`, če zavihek 30 s spi?

Teden 3: **game loop, delta, stanja**.

---

# Vprašanja?
