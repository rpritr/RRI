# P16 · Teden 6
## HP, škoda, game over

---

# Past

Overlap 1 s pri 60 FPS  
+ `hp--` vsak frejm  
= instant smrt.

Zato **hurtTimer** (i-frames).

---

# Podatki

```
hp, maxHp
hurtTimer
state
```

Številke v GDD = številke v kodi.

---

# Ob stiku

Če `hurtTimer <= 0`:
- odštej HP
- nastavi cooldown
- flash barve

Sovražnik sme stati.  
Lov = teden 8.

---

# GAME_OVER

`hp <= 0` → stanje, ne samo `alert()`.

Svet se ustavi.  
Besedilo na canvasu zadostuje.

---

# Restart = R

`resetGame()`:
HP, pozicija, krogle, state.

Brez F5.  
To je zanka igre.

---

# AI danes

Samo HP / hurt / state / reset.  
Ti spremeniš težavnost s številkami.

---

# Izhod

Zanka poraza obstaja.

---

# Do naslednjič

Val = čas, ubiti, ali prazna arena?

Teden 7: **score, valovi, HUD**.

---

# Vprašanja?
