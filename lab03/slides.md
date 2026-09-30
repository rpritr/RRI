# P16 · Teden 3
## Game loop, delta, stanja

---

# Vprašanje

30 FPS in 144 FPS:  
enaka hitrost igralca?

Odgovor: merimo **čas**, ne frejme.

---

# Zanka

```
rAF → dt → update(dt) → draw() → rAF
```

**update** — pravila  
**draw** — slika (najprej clear)

Če zmešaš oboje, ne znaš razložiti napake.

---

# Delta time

`dt = (now - last) / 1000`  → sekunde

`x += speed * dt`

Past: zavihek spi → `dt` = 5 s → skok.

**Clamp** `dt` (npr. max 0.05).

---

# Fiksni korak

Vedno isti `update(1/60)`.

Bolj predvidljivo, malo več kode.

Na tem predmetu: delta **ali** fiksni —  
ampak **dokumentiraj**, kaj uporabljaš.

---

# Stanja (skica)

`MENU` → `PLAYING` → `GAME_OVER`

Danes dovolj: spremenljivka `state`.  
V update: če ni PLAYING, svet miruje.

Lep meni ≠ teden 3.  
HP / game over = teden 6.

---

# Pause (opcijsko)

Tipka P: `PLAYING` ↔ `PAUSED`

Draw še teče. Update sveta ne.

Ista ideja kot GAME_OVER.

---

# AI danes

“Razloži **moj** loop vrstico po vrstici.”

Ti poiščeš, kje AI **laže**.  
To je understand, ne paste.

---

# Izhod

Kratek `loop`.  
Zavarovan `dt`.  
`state` obstaja.

---

# Do naslednjič

Trk: pred premikom, po njem, ali po **oseh**?

Teden 4: **AABB, ovire, entitete**.

---

# Vprašanja?
