# Teden 3 — AI prompti in refleksija

Splošna pravila: `../DIDAKTIKA-AI.md`.  
Ne prosi za cel `game.js` ali fizikalni pogon.

---

## Prompt A — razlika delta vs. fiksni korak (brez tvoje kode)

```
Razloži razliko med (1) delta time in (2) fiksnim korakom v requestAnimationFrame.
Za vsakega: prednost, past, en stavek kdaj ga izbrati.
Nato pokaži MINIMALEN vzorec z lastTime in clamp dt.
Brez Phaserja. Komentarji v slovenščini. Ne piši cele igre.
Na koncu vprašaj mene, kaj naredim z dt, ko je zavihek v ozadju.
```

Preberi, primerjaj s **svojim** loopom. Ne zamenjaj delujoče kode, če AI vpelje drug slog — prilagodi ali zavrni.

---

## Prompt B — razloži MOJ loop (obvezno)

```
Razloži ta game loop vrstico po vrstici.
Če česa ni v kodi, napiši "tega ni v tem izseku" — ne izmišljuj si gravity, kamer, scene managerja.
[prilepi SAMO funkcijo loop in kodo za lastTime / dt]

Povej: (1) v čem je dt, (2) kdaj se kliče update, (3) zakaj je rAF na koncu.
```

**Tvoja naloga:** v komentarju ali listu označi zadetke in napake AI.

---

## Prompt C — stanja (samo skica)

```
Predlagaj podatkovni model za state: MENU | PLAYING | PAUSED | GAME_OVER
v vanilla JS (ena spremenljivka + switch ali if).
Pokaži, kje v update in draw veja. Brez HTML gumbov, brez cele datoteke.
3–5 slovenskih komentarjev.
```

Vključi **samo** tisto, kar danes rabiš (`PLAYING` + morebiti `PAUSED`). Ostalo shrani za teden 6.

---

## Prompt D — “popravi moj dt” (če kaj skače)

```
Ob vrnitvi na zavihek mi igralec skoči. Tukaj je izračun dt:
[prilepi 10–20 vrstic]
Predlagaj najmanjši popravek. Ne refaktoriraj vsega. Razloži zakaj.
```

Spremeni številko clampa sam in preizkusi.

---

## Pričakovana refleksija

1. Uporabljaš delta ali fiksni korak? **Zakaj** (2 stavka)?  
2. Kaj je AI narobe rekel o tvojem `loop`?  
3. Kaj se zgodi v tvoji kodi, če je `dt` 2 sekundi — *pred* in *po* popravku?  
4. Česa `draw()` v tvoji igri **ne sme** delati?

---

## Česa danes ne prosi AI

- “Napiši mi Unity/Unreal tick.”  
- “Dodaj fiziko Matter.js / Box2D.”  
- “Cel state machine framework.”  
- “Prepiši vse na Phaser Scene.”
