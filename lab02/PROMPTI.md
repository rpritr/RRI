# Teden 2 — AI prompti in refleksija

Uporabi ChatGPT / Claude / Cursor chat / podobno.  
Splošna pravila: `../DIDAKTIKA-AI.md`.  
Danes **ne** prosi za cel `game.js`, sovražnike ali Phaser.

---

## Prompt A — samo `updatePlayer` (obvezno)

```
Sem študent P16. Imam Canvas 2D, vanilla JS, brez Phaserja.
Imam player = { x, y, w, h, speed } in objekt keys za WASD
(true, dokler je tipka pritisnjena). dt je v sekundah.
Napiši SAMO funkcijo updatePlayer(dt), ki:
- sestavi dx/dy iz tipk,
- normalizira diagonalo,
- premakne igralca s speed * dt,
- omeji na canvas širine W in višine H.
Komentarji v slovenščini (3–5). Ne piši cele datoteke.
Na koncu mi zastavi ENO vprašanje, da preveriš, ali razumem normalizacijo.
```

Nato **spremeni** funkcijo (sprint, puščice, drugačen clamp). Ne oddaj surovega AI izhoda.

---

## Prompt B — razloži mojo kodo (understand)

Po tem, ko imaš *svoj* `updatePlayer`:

```
Razloži to funkcijo vrstico po vrstici. Če česa ni v kodi, reci "tega ni" — ne izmišljuj.
[prilepi SAMO updatePlayer]

Posebej: (1) kaj je dt, (2) zakaj hypot, (3) kaj se zgodi ob W+S hkrati.
```

**Tvoja naloga:** označi, kje je AI zadel / zgrešil (npr. “rekel je, da imam gravity — nimam”).

---

## Prompt C — Git, ne koda

```
Napiši 4 zgledna git commit sporočila za teden, kjer sem dodal puščice,
sprint s Shiftom in README za Canvas igro. Kratko, v slovenščini,
brez smeškov. Format: teden 2: …
```

Izberi slog in **sam** napiši svoja prava sporočila — AI je zgled, ne avtor tvoje zgodovine.

---

## Prompt D — občutek premika (opcijsko)

```
Imam top-down igralca, konstantna hitrost, brez pospeška.
Predlagaj 3 majhne spremembe "feel" (npr. sprint, trenje, max hitrost),
vsaka max 15 vrstic kode. Za vsako: kaj občuti igralec. Brez refactorja cele igre.
```

Izberi **eno**, vključi, spremeni številko, razloži.

---

## Pričakovana refleksija

1. Kaj v `updatePlayer` si napisal **sam** in kaj je predlagal AI?  
2. Katero **eno** vedenje si spremenil po generate (hitrost, sprint, clamp …)?  
3. Kje je AI v Promptu B **narobe** razložil tvojo kodo (ali “ni zgrešil”)?  
4. Povezava do README / commitov (ali prilepi sporočila).

---

## Česa danes ne prosi AI

- “Napiši cel game.js.”  
- “Dodaj zombie AI.”  
- “Prepiši v Phaser / Unity / Unreal.”  
- “Naredi celoten GitHub repo zanj.”
