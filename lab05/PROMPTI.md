# Teden 5 — AI prompti in refleksija

Splošna pravila: `../DIDAKTIKA-AI.md`.

---

## Prompt A — projektil (obvezno)

```
Canvas 2D, vanilla JS. Igralec ima x,y,w,h. Miška mouse.x/y je že
v koordinatah canvasa. Funkcija shoot() ustvari pravokotnik
{ x, y, w, h, vx, vy }: smer od središča igralca proti miški,
vx in vy sta enotski vektor. x,y sta levi-zgornji kot.
updateBullets(dt) premakne z BULLET_SPEED * dt in odstrani,
ko zapusti canvas (0..W, 0..H). Zanka od konca.
Samo shoot + updateBullets, ne cele igre.
Komentarji v slovenščini. Na koncu vprašaj, zakaj delimo z hypot.
```

Nato **ti** dodaš cooldown in spremeniš hitrost.

---

## Prompt B — koordinate (understand)

```
Zakaj clientX ni enak mouse.x na canvasu? Razloži getBoundingClientRect
in razmerje canvas.width / rect.width. Kratek primer. Brez knjižnic.
```

Primerjaj s **svojo** pretvorbo. Če AI pozabi CSS scale, to zapiši.

---

## Prompt C — cooldown

```
Dodaj shotTimer: ne smem streljati pogosteje kot vsakih 0.25 s.
Po shoot() nastavi shotTimer = BULLET_COOLDOWN, v update ga zmanjšaj z dt.
Samo ta kos. Ne dodaj orožij in inventory.
```

Spremeni 0.2 na svojo vrednost; v GDD naj se ujema.

---

## Pričakovana refleksija

1. Kako izračunaš smer (formule v 2–3 vrsticah, lastne besede)?  
2. Kaj se zgodi, če **ne** pretvoriš `clientX` (si testiral?)?  
3. Kakšen cooldown si izbral in zakaj?  
4. Kje AI predlagal cel `game.js` ali Phaser — in si zavrnil?

---

## Česa danes ne prosi AI

- “Hitscan raycast kot v Unity.”  
- “Object pooling framework.”  
- “Particle engine za muzzle flash” (shrani za projekt, če sploh).  
- “Cel weapon system z 5 orožji.”
