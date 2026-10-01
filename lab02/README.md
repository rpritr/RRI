# Teden 2 — Vaja: premik v globino + repo

**Predviden čas:** ~3–4 ure.  
**Izhod:** izboljšan premik v **tvoji kopiji** igre + README + smiselni commit-i.  
**Gradiva:** tvoja kopija `starter/` (teden 1), `PROMPTI.md`, `../DIDAKTIKA-AI.md`, vzorec imen v [`demo/js/`](../demo/js/).

Delaj po korakih. Obkljukaj, ko končaš. Ne prepisuj predmetnega `starter/` na GitHubu — to je tvoja igra od danes naprej.

---

## Korak 0 — Tvoja kopija (~15 min)

- [ ] Imaš fork ali lastni repo (ali vsaj mapo, ki jo boš oddal).
- [ ] Igra iz tedna 1 se še zažene (`python3 -m http.server` v mapi z `index.html`).
- [ ] GDD osnutek je ob igri (npr. `moj-gdd.md`).

Če delaš samo lokalno: na koncu vseeno naredi README in zabeleži spremembe.

---

## Korak 1 — Preberi svoj `updatePlayer` (~20 min)

Odpri še nerazdeljen `game.js` iz tedna 1 in preveri (starter to že ima — *razumi*, ne zbriši):

| Kaj | Zakaj |
|-----|--------|
| `keys` true/false | stanje, ne enkratni dogodek |
| `hypot` + deljenje | diagonala ni hitrejša |
| `* player.speed * dt` | hitrost v px/s |
| `Math.max` / `Math.min` | clamp na platno |

- [ ] Z lastnimi besedami (2–3 stavki): *zakaj je W+D brez normalizacije prehiter?*
- [ ] Izmeri občutek: spremeni `speed` na `80` in na `400`, osveži, vrni na vrednost, ki ti paše.

---

## Korak 2 — Iste datoteke kot demo (~40–50 min)

Starter je ena `game.js`. Od danes je tvoja igra razdeljena kot [`demo/js/`](../demo/js/). Ta teden ustvari samo datoteke, ki jih že rabiš. Ovir, strelov in sovražnikov še ni — demo jih ima, ti jih ne kopiraj.

| Datoteka | Kaj prestaviš iz starterja |
|----------|----------------------------|
| `js/config.js` | `PLAYER_SPEED` |
| `js/world.js` | objekt `world`: canvas, `W`, `H`, `player`, `keys` |
| `js/input.js` | `keydown` / `keyup` (samo zapišeta `world.keys`) |
| `js/player.js` | `updatePlayer` |
| `js/render.js` | `draw` |
| `js/game.js` | `loop` |

V `index.html` zamenjaj skripto:

```html
<script type="module" src="js/game.js"></script>
```

- [ ] Zaženeš s `python3 -m http.server` v mapi igre. `file://` modulov ne naloži.
- [ ] WASD še dela. Igralec je še na platnu.
- [ ] `export` / `import` veže datoteke. Skupne stvari so na `world`, ker `let` iz ene datoteke v drugi ni viden.

---

## Korak 3 — Izboljšaj premik (~50–70 min)

Naredi **vsaj dve** od tega (priporočeno vse tri, če gre):

1. **Konstanta** v `js/config.js`: `PLAYER_SPEED` (in `SPRINT_MULTIPLIER`, če narediš sprint). GDD naj se ujema s številkami.
2. **Puščice** v `js/input.js`: `ArrowUp/Down/Left/Right` nastavijo ista `world.keys` kot WASD.
3. **Sprint** v `js/player.js`: ob držanju Shift je hitrost večja (npr. ×1.6). V `keydown` ne pozabi `e.preventDefault()`, kjer je smiselno.

Opcijsko (če si hiter):

- Majhen debug napis na canvasu: `x, y` zaokrožena, ali “SPRINT”.  
- `Math.round` pozicije pri risanju, če vidiš “drsenje” po subpikslu — ni obvezno.

- [ ] Diagonala + sprint še vedno deluje (ni “rakete” po W+D+Shift brez kontrole).
- [ ] Igralec **ne gre** čez rob.
- [ ] V eni vrstici: *Kaj sem spremenil in kako se igra zdaj počuti?*

---

## Korak 4 — README v lastnem forku (~30–40 min)

V korenu **svoje** mape/igre napiši ali dopolni `README.md`:

- [ ] Naslov igre / “P16 teden 2”
- [ ] Kako zagnati (strežnik + URL)
- [ ] Kontrole (WASD, puščice, Shift …)
- [ ] Kaj je novega glede na teden 1 (2–4 vrstice)
- [ ] Avtor

To ni marketinški tekst. Naj sošolec po README zažene igro brez Slack sporočila.

---

## Korak 5 — Git higiene (~30–40 min)

- [ ] `.gitignore` pokriva vsaj: `node_modules/`, `.env`, `.DS_Store` (lahko skopiraš vzorec iz predmetnega repoja — **preberi**, kaj pomeni).
- [ ] **Vsaj 2 commita** z razumljivim sporočilom, npr.:
  - `teden 2: puščice in sprint`
  - `teden 2: README kako zagnati`
- [ ] `git status` je čist (ali veš, zakaj kaj ostaja nenadano).

Če Git še ni nastavljen: naredi korake z učiteljem; ne preskoči README.

---

## Korak 6 — AI: samo `updatePlayer` (~30–40 min)

Uporabi **Prompt A** v `PROMPTI.md`. Pravila:

- [ ] AI sme vrniti **samo funkcijo** (ne cel `game.js`).
- [ ] Kodo **zlepiš samo, če jo razumeš**.
- [ ] Nato **spremeni** eno vedenje (drugačen sprint, drugačna hitrost, drugačen clamp).
- [ ] V README ali listu: 3–5 stavkov *kaj je AI predlagal, kaj si spremenil, zakaj*.

Cikel: **generate → run → understand → change → test → explain**.

---

## Korak 7 — Zapri teden (~15 min)

- [ ] Igra teče po osvežitvi.
- [ ] README + commiti.
- [ ] AI refleksija.

### Priprava na teden 3

Odgovori (1–4 stavki):

> Kaj je `dt` v tvojem `loop`? Kaj bi se zgodilo, če ga ne bi omejil, ko se vrneš z zavihka v ozadju?

---

## Merila “opravil teden 2”

| Merilo | OK |
|--------|----|
| Koda je v `js/config.js`, `world.js`, `input.js`, `player.js`, `render.js`, `game.js` | |
| Premik izboljšan (konstante in/ali puščice in/ali sprint), diagonala OK | |
| Igralec ostane na platnu | |
| README z zagonom in kontrolami | |
| ≥2 smiselna commita *ali* dogovorjeni nadomestek | |
| AI kos + lastna sprememba + razlaga | |
