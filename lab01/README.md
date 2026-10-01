# Teden 1 — Vaja: starter + GDD + AI ideje

**Predviden čas:** ~3–4 ure (del 48 h vaj v semestru).  
**Izhod:** tekoča igra iz `starter/` + osnutek GDD + kratka AI refleksija.  
**Gradiva:** `../starter/`, `../docs/GDD-predloga.md`, `PROMPTI.md`, `../DIDAKTIKA-AI.md`.

Delaj po korakih. Obkljukaj, ko končaš.

---

## Korak 0 — Priprava okolja (~15–20 min)

- [ ] Imaš urejevalnik (VS Code / Cursor / …) in brskalnik.
- [ ] Imaš dostop do mape predmeta (klon / zip / Arnes datoteke).
- [ ] (Priporočeno) Terminal zna zagnati Python ali drug statični strežnik.

Če delaš samo z `file://` odpiranjem HTML: Canvas bo verjetno delal, a navada semestra je **lokalni strežnik**.

---

## Korak 1 — Zaženi starter (~20–30 min)

```bash
cd starter
python3 -m http.server 8080
```

Odpri [http://localhost:8080](http://localhost:8080).

- [ ] Vidiš temno platno in **modrega** igralca.
- [ ] **W A S D** premika igralca.
- [ ] Igralec **ne gre** čez rob platna.
- [ ] Osveži stran (F5) — igra se spet zažene na sredini.

**Če ne dela:** preveri, da si v mapi `starter/` (tam so `index.html` + `game.js`), ne v korenu repoja. Preveri konzolo brskalnika (F12).

---

## Korak 2 — Preberi kodo (ne spreminjaj še) (~30–40 min)

Odpri `game.js` in poišči:

| Kaj | Kje približno |
|-----|----------------|
| Objekt `player` | `x, y, w, h, speed, color` |
| Objekt `keys` | stanje tipk |
| `updatePlayer(dt)` | premik + clamp |
| `draw()` | clear + `fillRect` |
| `loop(timestamp)` | delta time + rAF |

- [ ] Z lastnimi besedami (2–3 stavki) zapiši: *kaj je `dt` in zakaj ga množimo s `speed`?*
- [ ] Najdi komentar v `loop`, kjer bi kasneje dodal posodobitev sovražnikov in strelov.

**Ne rabiš** danes razumeti vsega — rabiš vedeti, *kje* živijo deli sistema.

Ta teden je vse v `starter/game.js`. Od tedna 2 ista logika živi v mapi `js/`, enako kot referenca [`demo/js/`](../demo/js/) (ena datoteka na sistem).

---

## Korak 3 — Mini sprememba (dokaz, da “lastniš” kodo) (~20–30 min)

Naredi **eno** od tega (ali oboje, če gre hitro):

1. Spremeni `player.color` (npr. v zeleno / oranžno).  
2. Spremeni `player.speed` (npr. 120 ali 320) in občuti razliko.

- [ ] Osveži brskalnik — vidiš spremembo.
- [ ] V eni vrstici zapiši: *Kaj sem spremenil in kaj se zgodi v igri?*

To je isti refleks, ki ga bomo zahtevali pri AI: **change → explain**.

---

## Korak 4 — Osnutek GDD (~60–90 min)

1. Skopiraj predlogo `docs/GDD-predloga.md` v svoj prostor (npr. `moj-gdd.md` v forku / mapi oddaje).  
2. Izberi temo: **Top-down Zombie Survival** *ali* **Dungeon Escape**.  
3. Izpolni vsaj:

- [ ] §1 Osnovni podatki (naslov, avtor, žanr)  
- [ ] §2 Elevator pitch (2–3 stavki)  
- [ ] §4 Tabela mehanik — **vsaj 4 vrstice** (premik, strel/interakcija, škoda ali past, napredek)  
- [ ] §7 Lose condition (in win, če ga imaš) v 1–2 stavkih  

Ostalo lahko ostane osnutek — GDD dopolnjuješ cel semester.

**Pomembno:** pri mehanikah uporabi **vhod → pravilo → feedback**. Če pišeš samo “streljanje je kul”, to ni dovolj.

---

## Korak 5 — AI za ideje mehanik + lastna razlaga (~40–60 min)

1. Odpri `PROMPTI.md` in uporabi **Prompt A** (ali B za Dungeon Escape).  
2. AI naj predlaga mehanike **brez kode**.  
3. Izberi **3 mehanike**, ki jih *res* želiš v semestru.

Za vsako od treh izpolni spodaj (lahko v GDD ali ločen list “AI refleksija”):

| Mehanika (kratko ime) | Kaj je rekel AI (1 stavek) | Moja razlaga (2–4 stavki, lastne besede) | Jo dam v GDD? (da/ne) |
|-----------------------|----------------------------|------------------------------------------|------------------------|
| | | | |
| | | | |
| | | | |

- [ ] Nobena “razlaga” ni copy-paste celotnega AI odstavka.  
- [ ] Vsaj ena mehanika je **prilagojena** (npr. drugačen feedback, kot ga je predlagal AI).

Cikel danes: **generate → understand → change (izbor/prilagoditev) → explain**.

---

## Korak 6 — Zapri teden (~15–20 min)

- [ ] Starter še vedno teče po tvoji mini spremembi.  
- [ ] GDD osnutek shranjen.  
- [ ] AI refleksija izpolnjena.  
- [ ] (Priporočeno) Git commit: `teden 1: starter teče + osnutek GDD`.

### Priprava na teden 2

Odgovori na list (1–3 stavki):

> Kje bi živel sovražnik (`x, y, w, h`), ko bo koda v `js/enemies.js`, risanje pa v `js/render.js`?

---

## Merila “opravil teden 1”

| Merilo | OK |
|--------|----|
| Starter se zažene, WASD dela | |
| Osnutek GDD z pitch + ≥4 mehanike | |
| AI uporaba + lastna razlaga 3 mehanik | |
| Ena zavestna sprememba v kodi *ali* jasen zapis, zakaj še nisi spreminjal | |

Če obtičiš: najprej konzola F12, nato sošolec, nato učitelj — ne “generiraj cel game.js z AI”.
