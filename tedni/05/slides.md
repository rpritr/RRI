# P16 · Teden 5
## Strel proti miški

---

# Kam kliknem?

`clientX` = okno brskalnika  
Igra živi v **canvasu**

`getBoundingClientRect`  
+ `width / rect.width` (CSS scale)

---

# Smer

```
v = miška − središče igralca
v = v / |v|
```

`atan2` je za kot / sprite.  
Premik krogle: enotski vektor × hitrost × `dt`.

---

# Seznam krogle

```
bullets[] = { x, y, vx, vy, r }
```

Spawn. Update.  
Ven iz platna → ven iz polja.

Zanka od konca ali `filter`.

---

# Cooldown

Brez omejitve: 200 krogle na hold.

`shotTimer` + konstanta (npr. 0.2 s).

GDD = koda.

---

# Feedback

Majhen krog.  
Debug: točka miške na platnu.

Zvok / sprite = **projekt**, ne obveza tedna 5.

---

# AI danes

Samo `shoot` + `updateBullets`.  
Ti spremeniš hitrost ali cooldown.

---

# Izhod

Igrivo streljanje.  
Vektor, ne magija.

---

# Do naslednjič

Dotik vsak frejm ≠ 1 HP.

Teden 6: **HP, i-frames, GAME_OVER**.

---

# Vprašanja?
