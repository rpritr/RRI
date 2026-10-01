# P16 · Teden 8
## Seek + 2 tipa = skupna baza

---

# Seek ≠ pathfinding

Seek: vsak frejm korak **proti** igralcu.

A* / obid zidov: ni zahteva.  
Omejitev zapiši v README.

---

# Vektor (spet)

```
v = igralec − sovražnik
v = v / |v|
x += v * speed * dt
```

Ista ideja kot krogla.  
Cilj je igralec.

---

# Dva tipa

| | walker | runner |
|--|--------|--------|
| speed | nizka | visoka |
| HP | visok | nizek |
| barva | različna | različna |

`kind` na entiteti, številke v `KINDS`.  
En `updateEnemy`.

---

# Skupna baza

- premik, loop, dt, state  
- ovire, strel, HP, R  
- score, valovi, HUD  
- seek + 2 tipa  

Igrivo. Stabilno. Razložljivo.

---

# Kaj to NI

- tedni 9–12 polish iste igre  
- sprite-ji kot glavni cilj semestra  
- Unreal / Phaser  

Asseti + svoja identiteta = **projekt**.

---

# AI danes

Seek + 2 tipa, brez A*.  
Ti uravnaš meta s številkami.

---

# Izhod

**Milestone.**  
Naprej: lastna igra.

[`projekt/BRIEF.md`](../projekt/BRIEF.md)

---

# Do projekta

Baza ali čist papir —  
obe OK, če ostane Canvas  
in pokažeš loop / input / trki / entitete.

---

# Vprašanja?
