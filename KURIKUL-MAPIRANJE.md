# Mapiranje tednov na CPI kompetence (P16)

CPI katalog: **24 h predavanj + 48 h vaj**. Študent mora zgraditi **delujočo igro**.

Kompetence so oštevilčene 1–5 po smislu kataloga (načrtovanje mehanik, načrtovanje iger, pogoni/frameworki, asseti, izgradnja igre). Prilagodi imena, če uradni CPI dokument uporablja drugačne naslove.

**Ritem semestra:** 8 skupnih vaj (tedni 01–08, Top-down Zombie Survival) → lastni projekt / lastna igra. Asseti in polna izvedba se zaključijo v **projektni fazi**, ne v dodatnih tednih polisha skupne igre.

| # | CPI kompetenca (smisel) | Kaj študent zna | Tedni / faza | Stične točke v predmetu |
|---|-------------------------|-----------------|--------------|-------------------------|
| **1** | **Načrtovanje mehanik** | Opisati jedrne mehanike (premik, strel, škoda, valovi), vhod/izhod, feedback | 1, 3, 5–7, projekt (načrt) | GDD, game loop, streljanje, zdravje, score; lastne mehanike v projektu |
| **2** | **Načrtovanje iger** | Struktura nivoja/valov, težavnost, stanja (menu/play/game over), UX | 1, 7, **projekt** | GDD, waves, HUD; v projektu: obseg, vertical slice, demo |
| **3** | **Pogoni / ogrodja** | Razumeti nizkonivojski render (Canvas 2D) kot osnovo pred frameworki; priprava na WebGL-adjacent razmišljanje | 2–4, 8, **projekt** | Canvas, delta, trki, AI sovražnikov; v lastni igri ista osnova; *zakaj* še ne Phaser |
| **4** | **Asseti** | Priprava/uvoz spriteov, zvoka; ločitev kode in medijev | **projekt** (polish mejnik) | `assets/`, sprite, sound; dokumentirane licence. V tednih 1–8 so barvni primitivi dovolj. |
| **5** | **Izgradnja celotne igre** | Od prototipa do igrivega produkta: repo, testiranje, dokumentacija, predstavitev | 2, 8, **projekt** | Git higiene, skupna baza (teden 8), lastna igra + README/GDD/demo |

## Tedenska pokritost (povzetek)

| Teden / faza | Primarne kompetence |
|--------------|---------------------|
| 1 | 1, 2 |
| 2 | 3, 5 |
| 3 | 1, 3 |
| 4 | 1, 3 |
| 5 | 1 |
| 6 | 1, 2 |
| 7 | 1, 2 |
| 8 | 3, 5 |
| **Projekt — načrt** | 1, 2 |
| **Projekt — vertical slice** | 3, 5 |
| **Projekt — polish (asseti, UX)** | 2, 4 |
| **Projekt — demo / dokumentacija** | 2, 5 |

## Opombe za učitelja

- **Canvas namesto Phaserja**: namerno — kompetenca 3 se gradi od spodaj; framework pride kasneje ali v nadaljevanju.
- **Skupna baza 8 tednov** pokrije 1–3 in del 5 (igriv prototip z loop/input/trki/entitetami).
- **Asseti (4)** niso več “teden 9–10 na isti igri”. Študent jih dokaže v **lastni igri** (vsaj en sprite *ali* en zvok + vir/licenca; priporočeno oboje). Glej [`projekt/BRIEF.md`](projekt/BRIEF.md).
- **Polna izvedba (5)** se zaključi z lastno igro: repo, testiranje, GDD, README, demo — ne z dodatnim polishom skupne zombie igre kot glavnim ciljem.
- Alternativa **Dungeon Escape** ne spremeni mapiranja — spremeni se le tematika v GDD.
- Lastna igra sme izhajati iz tedna 8 *ali* biti nova Canvas igra; merilo je obvladovanje loop / vhod / trki / entitete, ne zvestoba zombijem.
