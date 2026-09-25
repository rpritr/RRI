# Tedenski načrt — 12 tednov

**Skupna igra:** Top-down Zombie Survival  
**Alternativa:** Dungeon Escape (mehkejša zgodba, iste tehnične teme)  
**Ritem:** 8 tednov skupna baza → 4 tedni individualne funkcije + demo  

Vsak teden: **ena nova funkcija**. Cikel: *generate → run → understand → change → test → explain* (glej `DIDAKTIKA-AI.md`).

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

---

## Teden 2 — Premikanje v globino + repo higiene

**Predavanje**
- Hitrost, meja platna, tipkovnica (keydown/keyup vs. “tipka drži”).
- Git: commit sporočila, veje, `.gitignore`, struktura mape.

**Vaja**
- Izboljšaj premik (npr. diagonalna normalizacija, hitrost v konstanti).
- Prvi smiselni commit-i; README v lastnem forku.
- Priprava na teden 3: kje bi živel sovražnik?

**Izhod:** čistejši input + urejen repo.

---

## Teden 3 — Game loop, delta, skica stanj

**Predavanje**
- `requestAnimationFrame`, delta time vs. fiksni korak.
- Zakaj clear + update + draw.
- Skica stanj: `MENU` / `PLAYING` / `GAME_OVER` (še ne nujno UI).

**Vaja**
- Prenesi update na delta (ali jasno dokumentiran fiksni korak).
- Dodaj enostavno spremenljivko stanja (čeprav še samo `PLAYING`).
- AI: “razloži moj game loop vrstico po vrstico” — študent preveri in popravi napake v razlagi.

**Izhod:** razumljen loop; priprava na entitete.

---

## Teden 4 — Trki: stene / entitete

**Predavanje**
- AABB (pravokotniki), preprosti krugi; ločitev “detect” in “resolve”.
- Stene platna vs. ovire v svetu.

**Vaja**
- Dodaj vsaj eno oviro ali “steno” in trk igralca.
- Pripravi prazno/entitetno strukturo za sovražnika (pozicija, velikost) — še brez AI.
- Test: igralec ne gre skozi oviro.

**Izhod:** trki delujejo; entitete pripravljene.

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

---

## Teden 7 — Score, valovi

**Predavanje**
- Napredek: točke, valovi, spawn timing.
- Težavnost: več sovražnikov / hitrejši.

**Vaja**
- Točke ob uničenju; HUD (score, val, HP).
- Valovi: po X ubitih / času pride naslednji val.
- GDD: dopolni “progressijo”.

**Izhod:** osnovna “survival” zanka.

---

## Teden 8 — AI sovražnikov (sledenje) + začetek variant

**Predavanje**
- Seek / follow igralca; omejitev hitrosti.
- Variante: počasni tank, hitri runner (še preprosto).

**Vaja**
- Sovražniki sledijo igralcu.
- Vsaj 2 tipa (različna hitrost/HP/barva).
- Stabiliziraj skupno baza — to je “milestone” pred individualnim delom.

**Izhod:** **skupna baza zaključena** (igralna survival igra).

---

## Teden 9 — Spritei, zvok, asseti

**Predavanje**
- Ločitev `assets/`; load slik; frame / enostaven sprite.
- Zvok: strel, zadetek, game over (kratki clipi).

**Vaja**
- Zamenjaj barvne kvadrate s spritei *ali* dodaj vsaj en sprite + en zvok.
- Dokumentiraj vire assetov (licenca!).

**Izhod:** vizualno/avditivno bogatejša igra (kompetenca assetov).

---

## Teden 10 — UI meniji + polish

**Predavanje**
- Menu, pause, HUD layout; berljivost.
- Polish: particle-ji (preprosto), shake, barve, feedback.

**Vaja**
- Začetni meni (Start) + morebiti Pause (Esc).
- Polish 1–2 detajla (ne 20).
- Priprava seznama individualnih idej za 11–12.

**Izhod:** urejen vstop v igro.

---

## Tedna 11–12 — Individualne funkcije + demo / dokumentacija

**Predavanje (11)**
- Kako izbrati *eno* smiselno razširitev (power-up, boss, shop, proceduralni zemljevid, coop lokalno …).
- Merila: igrivost, koda, razlaga.

**Vaja (11)**
- Implementacija lastne funkcije; AI dovoljen, a moraš **razložiti** in **spremeniti**.

**Predavanje (12)**
- Kratke predstavitve; kaj gledamo pri oceni.
- Dokumentacija: README + posodobljen GDD.

**Vaja (12)**
- Demo (5–8 min), Q&A.
- Oddaja: repo + GDD + kratek “kaj sem naredil sam / z AI”.

**Izhod:** ocenljiva, igriva igra z individualnim pečatom.

---

## Hitri pregled uskladitve (ChatGPT progresija)

| Teden | Tema |
|------:|------|
| 1 | intro / GDD / setup |
| 2 | movement + repo |
| 3 | game loop, delta, states |
| 4 | collisions |
| 5 | shooting → mouse |
| 6 | health / damage / game over |
| 7 | score / waves |
| 8 | enemy AI + variants |
| 9 | sprites / sound / assets |
| 10 | UI menus + polish |
| 11–12 | individual + demo / docs |
