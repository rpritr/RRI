# Teden 3 — Vaja: loop, delta, stanje

**Predviden čas:** ~3–4 ure.  
**Izhod:** razumljen in urejen game loop; spremenljivka stanja; zapisano, ali uporabljaš delta ali fiksni korak.  
**Gradiva:** tvoja igra (teden 2), `PROMPTI.md`.

---

## Korak 0 — Zaženi, kjer si ostal (~10 min)

- [ ] Premik iz tedna 2 še dela.
- [ ] Veš, kje je `loop`, `lastTime`, `updatePlayer`, `draw`.

---

## Korak 1 — Nariši zanko na list (~20 min)

Brez kode. Škatle:

1. rAF kliče `loop(timestamp)`  
2. izračun `dt`  
3. `update(dt)`  
4. `draw()`  
5. spet rAF  

- [ ] Označi, kje živi **input** (listenerji zunaj zanke — stanje tipk).
- [ ] En stavek: zakaj `draw` najprej počisti celo platno.

---

## Korak 2 — Refaktor: `update` in `draw` (~40–50 min)

Če še kličeš `updatePlayer` direktno iz `loop`:

- [ ] Naredi `function update(dt)` ki kliče `updatePlayer(dt)` (kasneje tudi sovražnike).
- [ ] `draw()` ostane samo risanje + clear.
- [ ] `loop` naj bo kratek: dt → update → draw → rAF.

Ne dodajaj novih mehanik “ker sem že tu”. Ena funkcija tedna = jasna zanka.

---

## Korak 3 — Delta: razumi in zavaruj (~30–40 min)

- [ ] `dt` je v **sekundah** (ne ms).
- [ ] Prvi frejm ne sme dati ogromnega `dt` (`if (!lastTime) …`).
- [ ] Obstaja zgornja meja (npr. `if (dt > 0.05) dt = 0.05`) **ali** zavestno izključen update po dolgem pauzi.
- [ ] V README ali komentarju na vrhu `game.js`: **“Uporabljam delta time; max dt = …”** *ali* opis fiksnega koraka, če si ga res naredil.

Test:

- [ ] Premikaj se, skrij zavihek ~10 s, vrni se — igralec **ne** preskoči čez pol mape (ali veš, zakaj še skoči, in to popraviš).

---

## Korak 4 — Spremenljivka `state` (~30–40 min)

- [ ] `let state = "PLAYING";` (ali `'MENU'` z takojšnjim preklopom v PLAYING ob tipki, če hočeš skico menija).
- [ ] V `update`: če `state !== "PLAYING"`, ne premikaj sveta (lahko še bereš tipko za preklop).
- [ ] V `draw`: izpiši stanje (npr. `ctx.fillText(state, 12, 24)`) — debug, ni treba lepote.

Opcijsko:

- Tipka **P** preklopi `PLAYING` ↔ `PAUSED`.  
- V `PAUSED` še vedno rišeš (zamrznjen svet) + napis “PAUZA”.

Teden 6 bo dodal `GAME_OVER`. Danes samo **obstoj** stanja.

---

## Korak 5 — AI razloži tvoj loop (~40 min)

Prompt B v `PROMPTI.md`: prilepi **samo** `loop` + izračun `dt` (ne cele datoteke).

- [ ] AI naj razloži vrstico po vrstici.
- [ ] Ti označiš **vsaj eno** napako ali halucinacijo *ali* potrdiš, da je točno (in navedeš, kaj si preveril v kodi).
- [ ] Spremeni en detajl (drugi max `dt`, ali pause) in v 3 stavkih razloži učinek.

---

## Korak 6 — Zapri teden (~15 min)

- [ ] Commit npr. `teden 3: update/draw + state PLAYING`.
- [ ] README: ena vrstica o zanki / dt.

### Priprava na teden 4

> Kje v `update` boš preveril trk z oviro — pred premikom, po njem, ali po osi?

---

## Merila “opravil teden 3”

| Merilo | OK |
|--------|----|
| `loop` = dt + `update` + `draw` + rAF | |
| `dt` dokumentiran in omejen (ali fiksni korak z opisom) | |
| `state` obstaja; svet se ne posodablja, ko ni PLAYING (če imaš pauzo/meni) *ali* vsaj izpis stanja | |
| AI razlaga loopa + tvoja korekcija | |
| Igra iz tedna 2 se ni pokvarila | |
