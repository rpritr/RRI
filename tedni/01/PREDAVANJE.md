# Teden 1 — Predavanje: uvod, GDD, setup

**Trajanje:** ~45–60 min vsebine (lahko del 2h termina; ostalo demo + vprašanja).  
**Cilj:** študent razume igro kot sistem, ve zakaj GDD, pozna sklad predmeta in ve, kaj dela na vaji.  
**Gradiva:** `slides.md`, `starter/`, `docs/GDD-predloga.md`, `DIDAKTIKA-AI.md`.

---

## 0. Odprtje (3 min)

- Pozdrav, kje so datoteke (repo / Arnes).
- Danes: **ne** pišemo cele igre — razumemo *kaj* gradimo in *zakaj* najprej načrt.
- Skupna igra semestra: **Top-down Zombie Survival** (alternativa: **Dungeon Escape**).

**Vprašanje v dvorano:** “Kaj naredi igro *igro*, ne samo animacijo?”

---

## 1. Igra kot sistem (12–15 min)

### Trije deli

| Del | Kaj je | Primer (zombie) |
|-----|--------|-----------------|
| **Mehanika** | Dejanje / sposobnost | Premik WASD, strel |
| **Pravilo** | Kdaj / kako velja | Strel stane cooldown; HP ob stiku |
| **Feedback** | Kaj igralec *vidi/sliši* | Flash, zvok, score ↑ |

Formula za vaje: **vhod → pravilo → feedback**.

### Mini vaja na tabli (2 min)

Vzemi “skok v platformerju”:
- vhod = tipka Space  
- pravilo = en skok v zraku, gravitacija  
- feedback = animacija, zvok, senca  

Študenti v paru napišejo isto za **premik igralca** (že imajo v starterju).

### Kaj *ni* (še) fokus

- Grafika AAA, story 50 strani, multiplayer mreža.
- Fokus: **jedrne mehanike**, ki jih boš kodil 12 tednov.

---

## 2. CPI in semester na hitro (8–10 min)

Predmet: **24 h predavanj + 48 h vaj** → mora nastati **delujoča igra**.

Pet kompetenc (glej `KURIKUL-MAPIRANJE.md`):

1. Načrtovanje **mehanik**
2. Načrtovanje **iger** (struktura, stanja, UX)
3. **Pogoni / ogrodja** — pri nas Canvas kot nizka plast
4. **Asseti**
5. **Izgradnja** celotne igre

**Ritem semestra**
- Tedni **1–8**: skupna baza (ista igra, skupne mehanike).
- Tedni **9–10**: asseti + UI polish.
- Tedni **11–12**: tvoja razširitev + demo.

**Pedagogika:** AI dovoljen, a cikel je obvezen:

```
generate → run → understand → change → test → explain
```

(Danes: generate idej mehanik → explain z lastnimi besedami.)

---

## 3. Zakaj GDD pred kodo (10–12 min)

**GDD** = Game Design Document — živ dokument, ne birokracija.

### Brez načrta (pogosta zanka)

1. Kodiram 3 ure “kul” feature.  
2. Ne paše k ostalemu.  
3. Brišem.  
4. Semester zmanjka.

### Z načrtom

1. Zapišem 4–5 mehanik (vhod / pravilo / feedback).  
2. Kodiram **eno** na teden.  
3. GDD dopolnjujem — ne pišem romana na dan 1.

**Kaj izpolnimo danes (osnutek):**
- pitch (2–3 stavki),
- tabela mehanik,
- win/lose v eni vrstici,
- tema: Zombie Survival *ali* Dungeon Escape.

Predloga: `docs/GDD-predloga.md`.

**Demonstracija (3 min):** odpri predlogo, izpolni *ena* vrstica mehanike v živo (npr. premikanje).

---

## 4. Tehnološki sklad — zakaj Canvas, ne Phaser (10–12 min)

| Plast | Izbira |
|-------|--------|
| Render | HTML5 **Canvas 2D** |
| Jezik | **Vanilla JavaScript** |
| Framework | **Ne** Phaser / Three.js (za zdaj) |

### Zakaj tako?

- Phaser skrije game loop, trke, input — ti pa moraš to **razumeti** (kompetenca 3).
- Canvas je blizu “kaj GPU/rastriranje počne”; kasneje WebGL / framework lažje.
- Manj magije = lažje debug + lažje razložiti pri oceni.

### Kaj že imamo v `starter/`

- `index.html` — canvas 800×450  
- `style.css` — temno, centrirano  
- `game.js` — igralec, WASD, `requestAnimationFrame` + **delta time**, clamp na rob  

**Live demo (5 min):** zaženi `python3 -m http.server` v `starter/`, pokaži WASD, odpri `game.js` na `updatePlayer` in `loop`.

Napovej teden 2: sovražnik bo “sosed” igralca (`x, y, w, h`).

---

## 5. Kaj delaš na vaji danes (5 min)

Glej `VAJA.md`. Na kratko:

1. Zaženi starter.  
2. Preberi komentarje v `game.js`.  
3. Osnutek GDD (ne mora biti popoln).  
4. AI prompt za mehanike → **izberi 3** in jih razloži z lastnimi besedami v GDD / listu.  
5. (Opcijsko) spremeni barvo ali `speed` — en stavek “kaj / zakaj”.

**Oddaja / izhod tedna:** tekoči starter + osnutek GDD (+ kratka AI refleksija).

---

## 6. Zapiranje (3–5 min)

- Igra = mehanike + pravila + feedback.  
- GDD = kompas, ne papir za polico.  
- Canvas = namerno “nizko”, da se naučiš.  
- AI = orodje; **razlaga** je tvoja.

**Domača misel do tedna 2:** Kje v `game.js` bi živel sovražnik?

---

## Opombe za učitelja

- Če termin 2h: po predavanju takoj vaja; predavanje skrajšaj na 45 min.  
- Šibkejša skupina → več časa na demo starterja, manj CPI detajlov.  
- Močnejša → 5 min debate “mech vs. feel” (npr. zakaj diagonalni premik normaliziramo).  
- Slajdi: `slides.md`. Prompti: `PROMPTI.md`.
