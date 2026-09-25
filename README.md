# P16 — Razvoj računalniških iger

Visokošolski predmet: **24 ur predavanj + 48 ur vaj**.  
Študenti v semestru zgradijo **delujočo igro** na osnovi HTML Canvas + vanilla JavaScript.

## Cilji predmeta

- Načrtovati mehanike in celotno igro (GDD).
- Razumeti osnovni game loop, vhod, trke, stanja in napredek.
- Delati z nizkonivojskim renderjem (Canvas; priprava na WebGL/frameworke).
- Pripraviti in vključiti assete (sprite, zvok).
- Zgraditi in predstaviti **celotno, igrivo igro**.
- Uporabljati AI kot orodje: *generate → run → understand → change → test → explain*.

## Skupna igra semestra

**Top-down Zombie Survival** — pogled od zgoraj, igralec, sovražniki, streljanje, valovi.

Mehkejša alternativa (če skupina potrebuje lažjo zgodbo): **Dungeon Escape** (labirint, ključi, sovražniki). GDD predloga podpira obe.

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

## Struktura repozitorija

```
.
├── README.md              ← ta datoteka
├── KURIKUL-MAPIRANJE.md   ← CPI kompetence 1–5 ↔ tedni
├── TEDENSKI-NACRT.md      ← 12 tednov (predavanje + vaja)
├── DIDAKTIKA-AI.md        ← pravila AI, primeri promptov
├── docs/
│   └── GDD-predloga.md
├── tedni/
│   └── 01/                ← predavanje, vaja, prompti, slajdi
└── starter/               ← teden 1: igriva osnova
```


## Tedenska gradiva

| Teden | Gradiva |
|------:|---------|
| 01 | [`tedni/01/`](tedni/01/) — [predavanje](tedni/01/PREDAVANJE.md), [vaja](tedni/01/VAJA.md), [prompti](tedni/01/PROMPTI.md), [slajdi](tedni/01/slides.md) |

Ostali tedni sledijo isti mapi (`tedni/02/` …), ko so pripravljeni. Pregled tem: [`TEDENSKI-NACRT.md`](TEDENSKI-NACRT.md).

## Pedagoški model

- **8 tednov** skupna baza (enaka igra, skupne mehanike).
- **4 tedni** individualne funkcije + demo in dokumentacija.
- Vsak teden: **ena nova funkcija**, pogosto z AI prompti (glej `DIDAKTIKA-AI.md`).
- Cikel: generiraj → zaženi → razumi → spremeni → testiraj → razloži.

## Ocena (okvir)

- Tedenski napredek / commit-i (repo higiene).
- Delujoča skupna baza do tedna 8.
- Individualna razširitev + kratka predstavitev (tedni 11–12).
- Kratek GDD + razlaga lastne kode (ne “samo paste iz AI”).

## Kako uporabljati ta repo

To je uradni predmetni repositorij (**rpritr/RRI**). Zamenjuje lanskoletno Unreal/Unity vsebino s Canvas + vanilla JS kurikulumom.

1. **Študenti**: forkajte ali klonirajte repo, zaženite `starter/` in delajte po [`TEDENSKI-NACRT.md`](TEDENSKI-NACRT.md).
2. **Arnes učilnica**: povežite tedenske naloge in oddaje na ta repo; URL-je dopolnite, ko so objavljeni.
3. Gradiva za teden 1 so v [`tedni/01/`](tedni/01/); naslednji tedni sledijo isti mapi.

## Avtorstvo / kontekst

Predmet P16 — Razvoj računalniških iger. Katalog CPI: 24h P + 48h V.  
Jezik dokumentacije za študente: **slovenščina**.
