# Teden 6 — Vaja: HP, škoda, game over

**Predviden čas:** ~3–4 ure.  
**Izhod:** stik z nevarnostjo zmanjša HP (z i-frames); ob 0 game over; R restart.  
**Gradiva:** tvoja igra (teden 5), `PROMPTI.md`.

---

## Korak 0 (~10 min)

- [ ] Streljanje in trki z ovirami delujejo.
- [ ] `state` obstaja (teden 3).

---

## Korak 1 — HP (~25–35 min)

- [ ] `player.hp` in `player.maxHp` (npr. 3 ali 100 — bodi dosleden).
- [ ] V `draw` (PLAYING): izpis `HP: n` ali preprosta palica (`fillRect` širine `hp/maxHp`).
- [ ] GDD: zapiši začetni HP.

---

## Korak 2 — Škoda + i-frames (~40–50 min)

Nevarnost: dummy `enemy` in/ali `hazard` `{x,y,w,h}`.

- [ ] `hurtTimer` (sekunde). Vsak frejm v PLAYING: zmanjšaj z `dt`.
- [ ] Če `aabbOverlap(player, nevarnost)` in `hurtTimer <= 0`: odštej HP, nastavi `hurtTimer`.
- [ ] Med i-frames: drugačna barva / utripanje igralca.

Test: stoj na nevarnosti 2 s — umreš postopoma, ne v 3 frejmih (razen če imaš 3 HP in kratek cooldown — prilagodi številke).

- [ ] Konstanti `CONTACT_DAMAGE` in `HURT_COOLDOWN`.

---

## Korak 3 — GAME_OVER (~30–40 min)

- [ ] Ko `hp <= 0`: `state = "GAME_OVER"`.
- [ ] Update sveta (premik, streli) se ustavi.
- [ ] Draw: temnejši overlay ali samo veliko besedilo na canvasu.
- [ ] `keydown` **r** / **R** kliče `resetGame()`.

`resetGame` naj vsaj:

- HP na max,
- igralec na začetno pozicijo,
- `hurtTimer = 0`,
- (priporočeno) sprazni `bullets`,
- `state = "PLAYING"`.

Test: umri, pritisni R, igraj znova **brez** osvežitve strani.

---

## Korak 4 — Robni primeri (~20 min)

- [ ] Škoda se ne dogaja v `GAME_OVER`.
- [ ] Več ovir + nevarnost hkrati ne pokvari clamp/trkov.
- [ ] Pause (če ga imaš): med pauzo ni škode.

---

## Korak 5 — AI (~30 min)

Prompt A: hp, hurtTimer, preklop state.

- [ ] Spremeni `maxHp` **ali** `HURT_COOLDOWN` in opiši občutek (lažje/težje).
- [ ] Commit: `teden 6: HP, i-frames, GAME_OVER + R`.

---

## Korak 6 — Zapri

- [ ] GDD §7 lose condition v 1–2 stavkih.

### Priprava na teden 7

> Kaj šteješ za “val”: čas, število ubitih, ali spawn, ko je arena prazna?

---

## Merila “opravil teden 6”

| Merilo | OK |
|--------|----|
| HP se vidi med igro | |
| Stik z nevarnostjo zmanjša HP; i-frames preprečijo instant smrt | |
| `GAME_OVER` na canvasu | |
| R restart brez F5 (`resetGame`) | |
| AI + lastna sprememba številk + razlaga | |
