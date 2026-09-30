# Teden 3 — Predavanje: game loop, delta, skica stanj

**Trajanje:** ~45–60 min.  
**Cilj:** študent zna narisati in razložiti svoj loop (clear → update → draw), ve kaj je `dt`, in ima spremenljivko stanja (`PLAYING` …).  
**Gradiva:** `slides.md`, `VAJA.md`, `PROMPTI.md`, tvoja igra iz tedna 2.  
**Predhodno:** izboljšan premik, README, commiti.

---

## 0. Odprtje (3 min)

- Vprašanje: “Če igra teče 30 FPS ali 144 FPS, mora biti igralec enako hiter. Kako?”
- Odgovor tedna: **čas**, ne “število frejmov”.
- Danes ne dodajamo trkov — utrjujemo **zanko**, na kateri visijo vsi tedni 4–8 in lastni projekt.

---

## 1. Anatomija zanke (12–15 min)

Vsak frejm (poenostavljeno):

```
requestAnimationFrame(loop)
  dt = čas od prejšnjega frejma
  update(dt)    ← pravila, pozicije, HP …
  draw()        ← počisti platno, nariši svet
```

| Korak | Če ga ni |
|-------|----------|
| **clear** | “smeti” / smečkanje prejšnjih pravokotnikov |
| **update** | slika se premika, pravila ne |
| **draw** | stanje se spreminja, igralec ne vidi |

**Zakaj ločiti update in draw?** Lažje testiraš, lažje razložiš, kasneje lahko “pause” samo preskoči update.

Starter to že približno dela — danes naredi strukturo **eksplicitno** (`update(dt)`, `draw()`, morda `state`).

---

## 2. Delta time vs. fiksni korak (12–15 min)

### Delta (`dt`)

- `timestamp` iz rAF je v **milisekundah**.
- `dt = (now - last) / 1000` → sekunde.
- Premik: `x += vx * dt` → enaka hitrost ob različnem FPS.

**Past:** prvi frejm, ali zavihek v ozadju → `dt` je lahko 5 s. Igralec “skoči” skozi zid. Zato **clamp** `dt` (v starterju npr. max 0.05).

### Fiksni korak

- Vedno `update(1/60)` (ali akumulator).
- Bolj predvidljiva fizika; malo več kode.

**Dogovor predmeta:** delta je OK, če jo **razumeš in dokumentiraš**. Fiksni korak je plus, ni obvezen. Ne mešaj obeh brez komentarja.

**Live demo:** odpri DevTools → CPU throttle / skrij zavihek → pokaži skok brez clampa (ali razloži).

---

## 3. Stanja igre — skica (10–12 min)

Igra ni vedno “teče svet”.

```
MENU  →  PLAYING  →  GAME_OVER
              ↑          │
              └──────────┘  (R = restart)
```

Danes **ni treba** lepega menija. Treba je:

- spremenljivka `state` (niz ali konstanta),
- v `update`: `if (state !== 'PLAYING') return;` (ali veje),
- v `draw`: lahko napišeš ime stanja na canvas (debug).

`GAME_OVER` in HP pridejo v tednu 6. Danes skica, da loop ve, *da stanja obstajajo*.

Opcijsko: `PAUSED` ob tipki P — isti vzorec.

---

## 4. Kaj delaš na vaji (5 min)

Glej `VAJA.md`:

1. `update(dt)` / `draw()` jasno ločena.  
2. `dt` razložen + omejen.  
3. `state` obstaja (vsaj `PLAYING`).  
4. AI razloži **tvoj** loop vrstico po vrstici — ti popraviš laži.

---

## 5. Zapiranje (3 min)

- Loop = čas + pravila + slika.  
- `dt` clamp = prijaznost do osredotočenosti.  
- Stanje je podatek, ne “kar se zgodi v draw”.  
- Naslednji teden: trki — update bo dobil zidove.

**Domača misel:** Ali sme `draw` spreminjati `player.hp`? (Ne.)

---

## Opombe za učitelja

- Če je skupina že “razumela dt” v t1–t2, več časa na stanja in pause.  
- Šibkejši: naj narišejo loop na list, preden kodirajo.  
- Ne uvajaj ECS/scen managerjev — ena spremenljivka `state`.
