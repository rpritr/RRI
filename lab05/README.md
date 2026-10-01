# Teden 5 — Vaja: strel proti miški

**Predviden čas:** ~3–4 ure.  
**Izhod:** klik (ali hold) izstreli projektil proti miški; krogle letijo in izginejo ob robu.  
**Gradiva:** tvoja igra (teden 4), `PROMPTI.md`.

| Datoteka | Kaj |
|----------|-----|
| `js/input.js` | `mouseOnCanvas`, `mousedown` / `mouseup` pišeta `world.mouse` |
| `js/bullets.js` | `shoot`, `updateBullets` |
| `js/config.js` | `BULLET_SPEED`, `BULLET_COOLDOWN`, `BULLET_SIZE` |
| `js/world.js` | `world.bullets = []`, `world.shotTimer`, `world.mouse` |
| `js/game.js` | `update` kliče `updateBullets` in `shoot`, ko je gumb pritisnjen |
| `js/render.js` | `fillRect` za vsako kroglo |

---

## Korak 0 (~10 min)

- [ ] Igralec, ovire, dummy sovražnik še delujejo.
- [ ] Veš, kje je `update` (`js/game.js`) in `draw` (`js/render.js`).

---

## Korak 1 — Miška v prostoru igre (~30–40 min)

- [ ] `world.mouse = { x, y, down: false }` v `js/world.js`. Poslušalci ostanejo v `js/input.js`.
- [ ] `mousemove`, `mousedown` na `canvas`, `mouseup` na `window`.
- [ ] Pretvorba v funkciji `mouseOnCanvas`: `getBoundingClientRect` + razmerje `canvas.width / rect.width`.

Test: nariši majhen kvadrat na `mouse.x/y`. Mora sovpadati s kazalcem **na platnu**.

---

## Korak 2 — Spawn projektila (~40–50 min)

Ob kliku (ali ob `mouse.down` + cooldown):

- [ ] Izračunaj enotski vektor od **središča igralca** do miške.
- [ ] `bullets.push({ x, y, w, h, vx, vy })`. `x, y` sta levi-zgornji kot, kot pri igralcu. `vx, vy` sta enotski vektor.
- [ ] Konstanta `BULLET_SPEED` (px/s). Smer računaj od **središča** igralca, nato kvadratek postavi okoli te točke.

Če je razdalja do miške skoraj 0: ne spawnaj.

- [ ] `shotTimer`: po strelu ga nastavi (npr. 0.25 s) in vsak frejm zmanjšaj z `dt`. Strel samo, ko je `<= 0`.

---

## Korak 3 — Update in despawn (~30–40 min)

- [ ] V `updateBullets`: `x += vx * BULLET_SPEED * dt` (isto za `y`).
- [ ] Odstrani, če je izven platna. Zanka **od konca**, da `splice` ne preskoči naslednje krogle.
- [ ] V `draw`: `fillRect`, isti kvadratek kot ostale entitete.

Pazljivo na spreminjanje polja med `for` — raje zanka nazaj ali nov seznam.

- [ ] 10 krogle leti hkrati brez “zmrzovanja” (če zmrzne, imaš neskončen spawn — cooldown).

---

## Korak 4 — Ovire in dummy (opcijsko, a koristno) (~20–30 min)

- [ ] (Opcijsko) krogla izgine ob `aabbOverlap` z `walls` — isti test kot pri igralcu.
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
