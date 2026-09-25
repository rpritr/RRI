# Mapiranje tednov na CPI kompetence (P16)

CPI katalog: **24 h predavanj + 48 h vaj**. Študent mora zgraditi **delujočo igro**.

Kompetence so oštevilčene 1–5 po smislu kataloga (načrtovanje mehanik, načrtovanje iger, pogoni/frameworki, asseti, izgradnja igre). Prilagodi imena, če uradni CPI dokument uporablja drugačne naslove.

| # | CPI kompetenca (smisel) | Kaj študent zna | Tedni | Stične točke v predmetu |
|---|-------------------------|-----------------|-------|-------------------------|
| **1** | **Načrtovanje mehanik** | Opisati jedrne mehanike (premik, strel, škoda, valovi), vhod/izhod, feedback | 1, 3, 5–7 | GDD, game loop, streljanje, zdravje, score |
| **2** | **Načrtovanje iger** | Struktura nivoja/valov, težavnost, stanja (menu/play/game over), UX | 1, 7, 10–12 | GDD, waves, UI, individualne funkcije, demo |
| **3** | **Pogoni / ogrodja** | Razumeti nizkonivojski render (Canvas 2D) kot osnovo pred frameworki; priprava na WebGL-adjacent razmišljanje | 2–4, 8–9 | Canvas, delta, trki, AI sovražnikov; *zakaj* še ne Phaser |
| **4** | **Asseti** | Priprava/uvoz spriteov, zvoka; ločitev kode in medijev | 9–10 | `assets/`, sprite, sound, polish |
| **5** | **Izgradnja celotne igre** | Od prototipa do igrivega produkta: repo, testiranje, dokumentacija, predstavitev | 2, 8, 11–12 | Git higiene, skupna baza, individualne feature-ji, demo |

## Tedenska pokritost (povzetek)

| Teden | Primarne kompetence |
|-------|---------------------|
| 1 | 1, 2 |
| 2 | 3, 5 |
| 3 | 1, 3 |
| 4 | 1, 3 |
| 5 | 1 |
| 6 | 1, 2 |
| 7 | 1, 2 |
| 8 | 3, 5 |
| 9 | 3, 4 |
| 10 | 2, 4 |
| 11 | 2, 5 |
| 12 | 2, 5 |

## Opombe za učitelja

- **Canvas namesto Phaserja**: namerno — kompetenca 3 se gradi od spodaj; framework pride kasneje ali v nadaljevanju.
- **Skupna baza 8 tednov** pokrije 1–3 in del 5; **asseti (4)** in **polna izvedba (5)** se zaključijo v 9–12.
- Alternativa **Dungeon Escape** ne spremeni mapiranja — spremeni se le tematika v GDD.
