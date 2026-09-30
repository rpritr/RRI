# P16 · Teden 4
## Trki: stene in entitete

---

# Clamp ≠ trk

Rob platna: `x = clamp(x, 0, W - w)`

Ovira v svetu: pravokotnik, ki te **vrže ven**.

---

# AABB

`x, y, w, h` — brez rotacije

Prekrivanje = ni ločitvene osi.

Štiri neenakosti.  
To je **detect**.

---

# Detect ≠ resolve

**Detect:** da, sekata se.  
**Resolve:** igralec naj ne ostane v zidu.

Priporočilo: premik **po oseh**  
(x, potem y) → drsenje ob steni.

---

# Ovire

```
walls = [{ x, y, w, h }, …]
```

Risanje + overlap z igralcem.  
Ena ovira je dovolj za teden.

---

# Dummy sovražnik

Isti kalup: `{ x, y, w, h, color }`

Nariši. **Ne** lovi.

Seek = teden 8.  
Škoda = teden 6.  
Strel = teden 5.

---

# Test

Štiri smeri v zid.  
Diagonala v vogal.  
“Ne gre skozi” = merilo.

---

# AI danes

Samo `aabbOverlap` + osni resolve.  
Ti spremeniš velikost ovire.

---

# Izhod

Trki delujejo.  
Entitete obstajajo.

---

# Do naslednjič

Miška: koordinate **canvasa**, ne okna.

Teden 5: **strel proti miški**.

---

# Vprašanja?
