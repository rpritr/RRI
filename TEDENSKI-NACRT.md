# Tedenski načrt — 8 vaj + lastni projekt

**Skupna igra:** Top-down Zombie Survival  
**Alternativa:** Dungeon Escape (mehkejša zgodba, iste tehnične teme)  
**Ritem:** **8 tednov skupna baza** (tedni 01–08) → **lastni projekt / lastna igra** (preostanek semestra)

Po tednu 8 **ni** glavni cilj še več tednov polisha na isti skupni igri. Skupna baza je milestone; nato vsak naredi **svojo** igro (lahko iz tedna 8 ali na novo).

Vsak teden 01–08: **ena nova funkcija**. Cikel: *generate → run → understand → change → test → explain* (glej `DIDAKTIKA-AI.md`).

Gradiva: `tedni/01/` … `tedni/08/` (vsak: `PREDAVANJE.md`, `VAJA.md`, `PROMPTI.md`, `slides.md`).  
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
**Gradiva:** [`tedni/01/`](tedni/01/)

---

## Teden 2 — Premikanje v globino + repo higiene

**Predavanje**
- Hitrost, meja platna, tipkovnica (keydown/keyup vs. “tipka drži”).
- Diagonala, konstante, ločitev vhoda in posodobitve.
- Git: commit sporočila, veje, `.gitignore`, struktura mape.

**Vaja**
- Izboljšaj premik (diagonala, hitrost v konstanti, puščice in/ali sprint).
- Prvi smiselni commit-i; README v lastnem forku.
- Priprava na teden 3: kje bi živel sovražnik?

**Izhod:** čistejši input + urejen repo.  
**Gradiva:** [`tedni/02/`](tedni/02/)

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
**Gradiva:** [`tedni/03/`](tedni/03/)

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
**Gradiva:** [`tedni/04/`](tedni/04/)

---

## Teden 5 — Streljanje proti miški

**Predavanje**
- Svetovne vs. zaslonske koordinate; kot / smer vektorja.
- Projektili: spawn, hitrost, življenjska doba, odstranjevanje.

**Vaja**
- Klik / hold → strel v smeri miške.
- Projektili se premikajo; izginejo ob robu.
- (Opcijsko) cooldown med streli.

**Izhod:** igrivo streljanje.  
**Gradiva:** [`tedni/05/`](tedni/05/)

---

## Teden 6 — Zdravje, škoda, game over

**Predavanje**
- HP, damage cooldown (i-frames), feedback (barva, flash).
- Prehod v `GAME_OVER` in restart.

**Vaja**
- Sovražnik (ali “nevarna cona”) zmanjša HP ob stiku.
- Game over zaslon (besedilo na canvasu zadostuje).
- Tipka R = restart.

**Izhod:** zmaga/poraz zanka obstaja.  
**Gradiva:** [`tedni/06/`](tedni/06/)

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
**Gradiva:** [`tedni/07/`](tedni/07/)

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
**Gradiva:** [`tedni/08/`](tedni/08/)

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
| 1 | intro / GDD / setup | [`tedni/01/`](tedni/01/) |
| 2 | movement + repo | [`tedni/02/`](tedni/02/) |
| 3 | game loop, delta, states | [`tedni/03/`](tedni/03/) |
| 4 | collisions | [`tedni/04/`](tedni/04/) |
| 5 | shooting → mouse | [`tedni/05/`](tedni/05/) |
| 6 | health / damage / game over | [`tedni/06/`](tedni/06/) |
| 7 | score / waves / HUD | [`tedni/07/`](tedni/07/) |
| 8 | enemy AI + 2 tipa → **skupna baza** | [`tedni/08/`](tedni/08/) |
| nato | **lastni projekt / lastna igra** | [`projekt/`](projekt/) |
