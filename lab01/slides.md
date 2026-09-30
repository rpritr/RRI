# P16 · Teden 1
## Uvod, GDD, Canvas starter

---

# Kaj je igra?

Animacija + naključje ≠ nujno igra.

**Igra** = odločitve + pravila + odziv sistema.

---

# Igra kot sistem

**Mehanika** — kaj lahko narediš  
**Pravilo** — kdaj / kako velja  
**Feedback** — kaj vidiš / slišiš

→ **vhod → pravilo → feedback**

---

# Primer: premik

| | |
|--|--|
| Vhod | WASD |
| Pravilo | hitrost, rob platna, diagonala |
| Feedback | igralec se premakne na platnu |

---

# Semester v eni sliki

- **1–8** skupna baza (Zombie Survival)
- **nato** lastna igra (projekt)

CPI: mehanike → igra → “engine” (Canvas) → asseti (v projektu) → celota

---

# AI na tem predmetu

```
generate → run → understand
     → change → test → explain
```

AI predlaga. **Ti** razumeš, spremeniš in razložiš.

---

# Zakaj GDD?

Brez načrta: 3 ure kode → brišeš.  
Z načrtom: 4–5 mehanik → **ena na teden**.

GDD je kompas, ne roman.

---

# Kaj danes v GDD?

1. Pitch (2–3 stavki)
2. Tabela mehanik (vhod / pravilo / feedback)
3. Kako izgubiš (in morebiti zmagaš)

Predloga: `docs/GDD-predloga.md`

---

# Sklad

| | |
|--|--|
| Render | HTML Canvas 2D |
| Jezik | Vanilla JS |
| Ne (še) | Phaser, Three.js |

Najprej razumi loop, input, trke — potem framework.

---

# Starter (demo)

- Modri igralec
- WASD
- `requestAnimationFrame` + delta time
- Clamp na rob

Mapa: `starter/`

---

# Vaja danes

1. Zaženi starter
2. Preberi `game.js`
3. Osnutek GDD
4. AI: ideje mehanik → **razloži z lastnimi besedami**

Podrobnosti: `README.md`

---

# Skupna igra

**Top-down Zombie Survival**

Alternativa: **Dungeon Escape**  
(ista tehnika, mehkejša zgodba)

---

# Do naslednjič

Kje v kodi bi živel **sovražnik**  
(`x, y, w, h`)?

---

# Vprašanja?
