# P16 · Teden 7
## Score, valovi, HUD

---

# Survival potrebuje napredek

Brez score/valov: prazna arena.

**Progressija** = mehanika.  
Zapiši jo v GDD.

---

# Score

Krogla zadene sovražnika  
→ ubij / HP  
→ `score += …`

Ista AABB ideja kot teden 4.

---

# Valovi

Eno pravilo:

Ko je `enemies.length === 0`: `spawnWave(wave + 1)`, več sovražnikov.

---

# Spawn

Rob platna.  
Ne na igralcu.

Sovražnik sme stati ali driftati.  
**Seek + 2 tipa = teden 8.**

---

# HUD

HP · score · wave  
na canvasu, kontrast.

GAME_OVER: končni score.

To je UX, ne “UI framework”.

---

# Reset

R ponastavi tudi score in wave.  
Sicer je drugi run laž.

---

# AI danes

Model valov + pseudokoda.  
Ti izbereš krivuljo težavnosti.

---

# Izhod

Osnovna survival zanka.

---

# Naslednjič

Teden 8 = **skupna baza**:  
seek + 2 tipa, potem **lastna igra**.

Ne 4 tedni polisha iste igre.

---

# Vprašanja?
