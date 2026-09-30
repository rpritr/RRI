# Teden 5 — Vaja: strel proti miški

**Predviden čas:** ~3–4 ure.  
**Izhod:** klik (ali hold) izstreli projektil proti miški; krogle letijo in izginejo ob robu.  
**Gradiva:** tvoja igra (teden 4), `PROMPTI.md`.

---

## Korak 0 (~10 min)

- [ ] Igralec, ovire, dummy sovražnik še delujejo.
- [ ] Veš, kje je `update` in `draw`.

---

## Korak 1 — Miška v prostoru igre (~30–40 min)

- [ ] Objekt `mouse = { x, y, down: false }`.
- [ ] `mousemove` / `mousedown` / `mouseup` (ali `pointer*`) na `canvas` ali `window`.
- [ ] Pretvorba `clientX/Y` → koordinate canvasa (`getBoundingClientRect` + razmerje `canvas.width / rect.width`).

Test: nariši majhen križec ali krog na `mouse.x/y`. Mora sovpadati s kazalcem **na platnu**.

---

## Korak 2 — Spawn projektila (~40–50 min)

Ob kliku (ali ob `mouse.down` + cooldown):

- [ ] Izračunaj enotski vektor od **središča igralca** do miške.
- [ ] `bullets.push({ x, y, vx, vy, r })` — `x,y` središče (ali levi-zgornji, ampak bodi dosleden v draw).
- [ ] Konstanta `BULLET_SPEED` (px/s).

Če `len === 0` (klik na središče): ne spawnaj ali uporabi zadnjo smer.

- [ ] Cooldown **priporočeno** (`shotTimer` / `lastShot`), npr. 0.15–0.3 s.

---

## Korak 3 — Update in despawn (~30–40 min)

- [ ] V `update`: za vsako kroglo `x += vx * speed * dt` (če sta vx,vy enotska).
- [ ] Odstrani, če je izven platna (z robom) in/ali `life` potekel.
- [ ] V `draw`: krog ali majhen kvadrat.

Pazljivo na spreminjanje polja med `for` — raje zanka nazaj ali nov seznam.

- [ ] 10 krogle leti hkrati brez “zmrzovanja” (če zmrzne, imaš neskončen spawn — cooldown).

---

## Korak 4 — Ovire in dummy (opcijsko, a koristno) (~20–30 min)

- [ ] (Opcijsko) krogla izgine ob `aabbOverlap` z `walls`.
- [ ] (Opcijsko) ob trku z dummy enemy spremeni barvo sovražnika — **kill/score ni obvezen danes** (teden 7).

---

## Korak 5 — AI + change (~30–40 min)

Prompt A: spawn + update, samo ta kos.

- [ ] Spremeni **hitrost ali cooldown ali velikost** krogle in zapiši občutek.
- [ ] README: kontrole (miška).

---

## Korak 6 — Zapri (~15 min)

- [ ] Commit: `teden 5: strel proti miški + cooldown`.
- [ ] GDD: vrstica streljanja (vhod / pravilo / feedback).

### Priprava na teden 6

> Kaj se zgodi, če te dummy sovražnik “dotakne” vsak frejm — koliko HP na sekundo?

---

## Merila “opravil teden 5”

| Merilo | OK |
|--------|----|
| Miška v koordinatah canvasa (križec se ujema) | |
| Strel v smeri miške | |
| Projektili se premikajo z `dt` in izginejo ob robu | |
| Ni “mitraljeza” 1000/s *ali* zavesten cooldown | |
| AI kos + lastna sprememba parametra | |
