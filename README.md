# P16 — Razvoj računalniških iger

Visokošolski predmet: **24 ur predavanj + 48 ur vaj**.  
Študenti v semestru zgradijo **delujočo igro** na osnovi HTML Canvas + vanilla JavaScript.

## Cilji predmeta

- Načrtovati mehanike in celotno igro (GDD).
- Razumeti osnovni game loop, vhod, trke, stanja in napredek.
- Delati z nizkonivojskim renderjem (Canvas; priprava na WebGL/frameworke).
- Pripraviti in vključiti assete (sprite, zvok) — predvsem v lastnem projektu.
- Zgraditi in predstaviti **celotno, igrivo igro**.
- Uporabljati AI kot orodje: *generate → run → understand → change → test → explain*.

## Skupna igra semestra

**Top-down Zombie Survival** — pogled od zgoraj, igralec, sovražniki, streljanje, valovi.

Mehkejša alternativa (če skupina potrebuje lažjo zgodbo): **Dungeon Escape** (labirint, ključi, sovražniki). GDD predloga podpira obe.

Po **8 skupnih vajah** vsak naredi **lastno igro** (glej [`projekt/`](projekt/)). To ni še 4 tedni polisha na isti zombie igri.

## Tehnološki sklad

| Plast | Izbira |
|-------|--------|
| Render | HTML5 Canvas 2D |
| Jezik | Vanilla JavaScript (ES modules po potrebi) |
| Zvok / asseti | Web Audio / `<audio>`, PNG/SVG |
| Frameworki | **Ne** Phaser / Three.js (za zdaj) — razumevanje osnove pred abstrakcijo |

## Kako zagnati starter

```bash
cd starter
# katerikoli statični strežnik, npr.:
python3 -m http.server 8080
# ali: npx serve .
```

Odpri `http://localhost:8080` — modri kvadrat, premikanje z **WASD**.

Študenti tedne 2–8 **nadgrajujejo svojo kopijo** (fork / lastni repo), ne prepisujejo `starter/` v tem predmetnem repozitoriju.

## Referenčna igra (teden 8)

Celotna mini **Top-down Zombie Survival** ob koncu skupne baze: premik, ovire, strel, HP, valovi, dva tipa sovražnikov.

```bash
cd demo
python3 -m http.server 8080
```

Odpri `http://localhost:8080`. To je **cilj** tednov 01–08, ne koda za prilepitev v tednu 1. Podrobnosti: [`demo/README.md`](demo/README.md).

## Struktura repozitorija

```
.
├── README.md              ← ta datoteka
├── KURIKUL-MAPIRANJE.md   ← CPI kompetence 1–5 ↔ tedni + projekt
├── TEDENSKI-NACRT.md      ← 8 vaj + lastni projekt
├── DIDAKTIKA-AI.md        ← pravila AI, primeri promptov
├── docs/
│   └── GDD-predloga.md
├── tedni/
│   ├── 01/ … 08/          ← predavanje, vaja, prompti, slajdi
├── projekt/               ← brief, mejniki, ocenjevanje lastne igre
├── starter/               ← teden 1: igriva osnova
└── demo/                  ← referenčna igra (milestone tedna 8)
```

## Tedenska gradiva

| Teden | Tema | Gradiva |
|------:|------|---------|
| 01 | Uvod, GDD, setup | [predavanje](tedni/01/PREDAVANJE.md) · [vaja](tedni/01/VAJA.md) · [prompti](tedni/01/PROMPTI.md) · [slajdi](tedni/01/slides.md) |
| 02 | Premikanje + repo higiene | [predavanje](tedni/02/PREDAVANJE.md) · [vaja](tedni/02/VAJA.md) · [prompti](tedni/02/PROMPTI.md) · [slajdi](tedni/02/slides.md) |
| 03 | Game loop, delta, stanja | [predavanje](tedni/03/PREDAVANJE.md) · [vaja](tedni/03/VAJA.md) · [prompti](tedni/03/PROMPTI.md) · [slajdi](tedni/03/slides.md) |
| 04 | Trki (stene / entitete) | [predavanje](tedni/04/PREDAVANJE.md) · [vaja](tedni/04/VAJA.md) · [prompti](tedni/04/PROMPTI.md) · [slajdi](tedni/04/slides.md) |
| 05 | Streljanje proti miški | [predavanje](tedni/05/PREDAVANJE.md) · [vaja](tedni/05/VAJA.md) · [prompti](tedni/05/PROMPTI.md) · [slajdi](tedni/05/slides.md) |
| 06 | Zdravje, škoda, game over | [predavanje](tedni/06/PREDAVANJE.md) · [vaja](tedni/06/VAJA.md) · [prompti](tedni/06/PROMPTI.md) · [slajdi](tedni/06/slides.md) |
| 07 | Score, valovi, HUD | [predavanje](tedni/07/PREDAVANJE.md) · [vaja](tedni/07/VAJA.md) · [prompti](tedni/07/PROMPTI.md) · [slajdi](tedni/07/slides.md) |
| 08 | AI sovražnikov + skupna baza | [predavanje](tedni/08/PREDAVANJE.md) · [vaja](tedni/08/VAJA.md) · [prompti](tedni/08/PROMPTI.md) · [slajdi](tedni/08/slides.md) |
| nato | **Lastna igra** | [`projekt/`](projekt/) — [brief](projekt/BRIEF.md) · [mejniki](projekt/MEJNIKI.md) · [ocenjevanje](projekt/OCENJEVANJE.md) |

Pregled tem: [`TEDENSKI-NACRT.md`](TEDENSKI-NACRT.md). Mapiranje na CPI: [`KURIKUL-MAPIRANJE.md`](KURIKUL-MAPIRANJE.md).

## Pedagoški model

- **8 tednov** skupna baza (ista igra, skupne mehanike, ena funkcija na teden).
- **Nato** lastni projekt / lastna igra (načrt → vertical slice → polish → demo).
- Vsak teden 01–08: **ena nova funkcija**, pogosto z AI prompti (glej `DIDAKTIKA-AI.md`).
- Cikel: generiraj → zaženi → razumi → spremeni → testiraj → razloži.

## Ocena (okvir)

- Tedenski napredek / commit-i (repo higiene).
- Delujoča **skupna baza do tedna 8**.
- **Lastna igra**: igrivost, koda (loop / vhod / trki / entitete), GDD, README, demo, AI refleksija.
- Kratek GDD + razlaga lastne kode (ne “samo paste iz AI”).

Podrobneje: [`projekt/OCENJEVANJE.md`](projekt/OCENJEVANJE.md).

## Kako uporabljati ta repo

To je uradni predmetni repositorij (**rpritr/RRI**). Zamenjuje lanskoletno Unreal/Unity vsebino s Canvas + vanilla JS kurikulumom.

1. **Študenti**: forkajte ali klonirajte repo, zaženite `starter/` in delajte po [`TEDENSKI-NACRT.md`](TEDENSKI-NACRT.md). Tedne 2–8 nadgrajujte **svojo** kopijo igre.
2. **Arnes učilnica**: povežite tedenske naloge in oddaje na ta repo; URL-je dopolnite, ko so objavljeni.
3. Gradiva za tedne 1–8 so v [`tedni/01/`](tedni/01/) … [`tedni/08/`](tedni/08/); po tem [`projekt/`](projekt/).

## Avtorstvo / kontekst

Predmet P16 — Razvoj računalniških iger. Katalog CPI: 24h P + 48h V.  
Jezik dokumentacije za študente: **slovenščina**.
