# Tedenski načrt — 8 vaj + lastni projekt

**Skupna igra:** Top-down Zombie Survival  
**Alternativa:** Dungeon Escape (mehkejša zgodba, iste tehnične teme)  
**Ritem:** **8 tednov skupna baza** (tedni 01–08) → **lastni projekt / lastna igra** (preostanek semestra)

Po tednu 8 **ni** glavni cilj še več tednov polisha na isti skupni igri. Skupna baza je milestone; nato vsak naredi **svojo** igro (lahko iz tedna 8 ali na novo).

Vsak teden 01–08: **ena nova funkcija**. Cikel: *generate → run → understand → change → test → explain* (glej `DIDAKTIKA-AI.md`).

Gradiva: `lab01/` … `lab08/` (vsak: `README.md`, `PREDAVANJE.md`, `PROMPTI.md`, `slides.md`).  
Projekt: [`projekt/`](projekt/).

---

## Teden 1 — Uvod, GDD, setup

**Predavanje**
- Kaj je igra kot sistem (mehanike, pravila, feedback).
- Pregled CPI ciljev in semestra.
- GDD: zakaj načrt pred kodo.
- Stack: HTML + Canvas + JS; kaj *ni* (še) Phaser/Three.js.

**Vaja**
- Klon/odprtje `starter/`, zagon statičnega strežnika.
- Zaženi igro (modri igralec, WASD).
- Izpolni `docs/GDD-predloga.md` (osnutek: Zombie Survival *ali* Dungeon Escape).
- AI: prompt za ideje mehanik — potem **razloži** izbrane mehanike z lastnimi besedami.

**Izhod:** tekoči starter + osnutek GDD.  
**Gradiva:** [`lab01/`](lab01/)

---

## Teden 2 — Premikanje v globino + repo higiene

**Predavanje**
- Hitrost, meja platna, tipkovnica (keydown/keyup vs. “tipka drži”).
- Diagonala, konstante, ločitev vhoda in posodobitve.
- Git: commit sporočila, veje, `.gitignore`, struktura mape.

**Vaja**
- Razdeli igro v `js/` kot `demo/js/` (`config`, `world`, `input`, `player`, `render`, `game`).
- Izboljšaj premik (diagonala, hitrost v konstanti, puščice in/ali sprint).
- Prvi smiselni commit-i; README v lastnem forku.
- Priprava na teden 3: kje bi živel sovražnik?

**Izhod:** čistejši input + urejen repo.  
**Gradiva:** [`lab02/`](lab02/)

---

## Teden 3 — Game loop, delta, skica stanj

**Predavanje**
- `requestAnimationFrame`, delta time vs. fiksni korak.
- Zakaj clear + update + draw.
- Skica stanj: `MENU` / `PLAYING` / `GAME_OVER` (še ne nujno poln UI).

**Vaja**
- Prenesi update na delta (ali jasno dokumentiran fiksni korak).
- Dodaj enostavno spremenljivko stanja (čeprav še samo `PLAYING`).
- AI: “razloži moj game loop vrstico po vrstico” — študent preveri in popravi napake v razlagi.

**Izhod:** razumljen loop; priprava na entitete.  
**Gradiva:** [`lab03/`](lab03/)

---

## Teden 4 — Trki: stene / entitete

**Predavanje**
- AABB (pravokotniki), preprosti krogi; ločitev “detect” in “resolve”.
- Stene platna vs. ovire v svetu.

**Vaja**
- Dodaj vsaj eno oviro ali “steno” in trk igralca.
- Pripravi prazno/entitetno strukturo za sovražnika (pozicija, velikost) — še brez AI.
- Test: igralec ne gre skozi oviro.

**Izhod:** trki delujejo; entitete pripravljene.  
**Gradiva:** [`lab04/`](lab04/)

---

## Teden 5 — Streljanje proti miški

**Predavanje**
- Svetovne vs. zaslonske koordinate; kot / smer vektorja.
- Projektili: pravokotnik `{x,y,w,h}`, smer proti miški, odstranjevanje ob robu.

**Vaja**
- Klik / hold → strel v smeri miške.
- Projektili se premikajo; izginejo ob robu.
- (Opcijsko) cooldown med streli.

**Izhod:** igrivo streljanje.  
**Gradiva:** [`lab05/`](lab05/)

---

## Teden 6 — Zdravje, škoda, game over

**Predavanje**
- HP, pavza po zadetku (`hurtTimer`), feedback (drugačna barva).
- Prehod v `GAME_OVER` in restart.

**Vaja**
- Sovražnik (ali “nevarna cona”) zmanjša HP ob stiku.
- Game over zaslon (besedilo na canvasu zadostuje).
- Tipka R = restart.

**Izhod:** zmaga/poraz zanka obstaja.  
**Gradiva:** [`lab06/`](lab06/)

---

## Teden 7 — Score, valovi, HUD

**Predavanje**
- Napredek: točke, valovi, spawn timing.
- Težavnost: več sovražnikov / hitrejši.
- HUD kot feedback (HP, score, val).

**Vaja**
- Točke ob uničenju; HUD (score, val, HP).
- Valovi: po X ubitih / času pride naslednji val.
- GDD: dopolni “progressijo”.

**Izhod:** osnovna “survival” zanka.  
**Gradiva:** [`lab07/`](lab07/)

---

## Teden 8 — AI sovražnikov (sledenje) + 2 tipa — skupna baza

**Predavanje**
- Seek / follow igralca; omejitev hitrosti.
- Variante: počasni tank, hitri runner (še preprosto).
- Kaj pomeni milestone “skupna baza” in kaj sledi (lastna igra).

**Vaja**
- Sovražniki sledijo igralcu.
- Vsaj 2 tipa (različna hitrost/HP/barva).
- Stabiliziraj skupno bazo — to je **milestone** pred lastnim projektom.

**Izhod:** **skupna baza zaključena** (igriva survival igra).  
**Gradiva:** [`lab08/`](lab08/)

---

## Projektna faza — Lastna igra

Po tednu 8 študent **ne** nadaljuje z polishom skupne igre kot glavnim ciljem. Naredi **lastno igro**.

Lahko:
- izhaja iz kode tedna 8 (nova tema, nove mehanike, svoj pečat), **ali**
- začne novo Canvas + vanilla JS igro.

Obvezno mora pokazati obvladovanje: **game loop, vhod, trki, entitete**.

**Mejniki (priporočeno):** načrt → vertical slice → polish → demo.  
**Oddaja:** igriva igra + README + GDD + kratka AI-vs-lastno-delo refleksija + demo.

Podrobnosti, merila in mejniki: [`projekt/`](projekt/).

---

## Hitri pregled

| Teden | Tema | Gradiva |
|------:|------|---------|
| 1 | intro / GDD / setup | [`lab01/`](lab01/) |
| 2 | movement + repo | [`lab02/`](lab02/) |
| 3 | game loop, delta, states | [`lab03/`](lab03/) |
| 4 | collisions | [`lab04/`](lab04/) |
| 5 | shooting → mouse | [`lab05/`](lab05/) |
| 6 | health / damage / game over | [`lab06/`](lab06/) |
| 7 | score / waves / HUD | [`lab07/`](lab07/) |
| 8 | enemy AI + 2 tipa → **skupna baza** | [`lab08/`](lab08/) |
| nato | **lastni projekt / lastna igra** | [`projekt/`](projekt/) |
