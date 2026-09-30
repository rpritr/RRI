# Teden 2 — Predavanje: premikanje v globino + repo higiene

**Trajanje:** ~45–60 min vsebine (lahko del 2h termina; ostalo demo + vaja).  
**Cilj:** študent razume, *zakaj* se igralec premika tako, kot se, in zna to spremeniti; zna narediti smiseln commit in urejen README.  
**Gradiva:** `slides.md`, `VAJA.md`, `PROMPTI.md`, `../../starter/`, `../../DIDAKTIKA-AI.md`.  
**Predhodno:** teden 1 — tekoči starter + osnutek GDD.

Študenti delajo na **svoji kopiji** igre (fork / lastni repo), ne v predmetnem `starter/` na GitHubu.

---

## 0. Odprtje (3 min)

- Kje smo: igralec se premika, GDD je osnutek.
- Danes **ne** dodajamo sovražnika v polni meri — poglobimo premik in uredimo repo.
- Vprašanje: “Zakaj je diagonalni premik brez normalizacije *hitrejši*?”

---

## 1. Vhod: dogodek vs. stanje (10–12 min)

Starter že loči **keydown/keyup** od **update**:

| Pristop | Kaj se zgodi | Problem |
|---------|----------------|---------|
| Premik samo v `keydown` | En korak na ponovitev tipke | Ritem OS, neenakomerno |
| Stanje `keys.w = true/false` | Vsak frejm v `update` | Gladko, predvidljivo |

**Pravilo:** input listenerji samo **zabeležijo** stanje; premik živi v `updatePlayer(dt)`.

### Bonus vhod

- Puščice poleg WASD (isti `dx`/`dy`).
- `Shift` = sprint (začasno večja hitrost) — merilo “spremeni vedenje”, ne magija.

**Live demo (3 min):** v starterju drži W+D. Če bi pozabili `hypot`, bi šel igralec hitreje po diagonali.

---

## 2. Hitrost, delta, clamp (10–12 min)

Že imamo: `player.x += dx * player.speed * dt`.

- `speed` v **pikslih na sekundo** — zato množimo z `dt`.
- Konstante na vrh datoteke (`PLAYER_SPEED`, `SPRINT_MULTIPLIER`) — lažje uravnavanje in GDD.
- **Clamp** na rob platna ≠ trk z oviro v svetu (to je teden 4).

Na tabli:

```
dx, dy ∈ {-1, 0, 1}
len = hypot(dx, dy)
dx /= len     ← enotski vektor
x += dx * speed * dt
x = clamp(x, 0, W - w)
```

Če `dt` ni, je hitrost odvisna od FPS — teden 3 to še utrdi.

---

## 3. Kje bi živel sovražnik? (5 min)

Igralec je objekt `{ x, y, w, h, speed, color }`. Sovražnik je **isti oblikovni vzorec**.

- Kje v datoteki? Poleg `player` (ali kasneje `enemies[]`).
- Kdaj `update`? V `loop` za `updatePlayer` — komentar v starterju že kaže mesto.
- Danes **ni treba** kodirati AI. Dovolj: vedeti *kje* in *zakaj* ista polja.

To je priprava na tedne 3–4 (stanja, entitete, trki).

---

## 4. Repo higiene (12–15 min)

Igra, ki “dela na mojem disku”, ni oddaja. Predmet zahteva **sledljiv napredek**.

### Kaj pričakujemo

| Praksa | Zakaj |
|--------|--------|
| Lasten fork / repo | Tvoja kopija, tedni 2–8 in projekt |
| `.gitignore` | Brez `node_modules/`, `.env`, `.DS_Store` |
| README | Kako zagnati, WASD, kaj je tvoj teden 2 |
| Majhni commit-i | “teden 2: sprint + puščice”, ne “fix” × 40 |

### Sporočila

Slabo: `update`, `asdf`, `final2`.  
Bolje: `teden 2: normalizacija že v starterju; dodan sprint in README`.

Veje niso obvezne tedna 2, ampak: `main` naj bo to, kar se zažene.

**Demo (3 min):** `git status` → `git add` → `git commit` na predavateljevem primeru (ali na tabli).

---

## 5. Kaj delaš na vaji danes (5 min)

Glej `VAJA.md`. Na kratko:

1. Izboljšaj premik (konstante, puščice in/ali sprint, debug pozicije).  
2. Uredi README v **svojem** forku.  
3. 2–3 smiselni commiti.  
4. AI: funkcija `updatePlayer` **samo ta kos** — potem **spremeni** en parameter in razloži.

**Izhod tedna:** čistejši input + urejen repo.

---

## 6. Zapiranje (3 min)

- Input = stanje tipk; fizika = `update` × `dt`.  
- Diagonala brez normalizacije laže.  
- Git ni birokracija — je dokaz napredka in “kaj sem spremenil”.  
- Sovražnik bo sosed igralca, ne druga vesolja.

**Domača misel do tedna 3:** Kaj se zgodi z `dt`, če zavihek pustiš v ozadju 30 s in se vrneš?

---

## Opombe za učitelja

- Močnejša skupina: kratka razprava o acceleration vs. constant speed (feel).  
- Šibkejša: najprej puščice + konstanta, sprint opcijsko.  
- Če kdo nima Gita: vsaj zip + README; Git uredite do tedna 3.  
- Ne odpirajte Unreal/Unity — sklad ostane Canvas + vanilla JS.
