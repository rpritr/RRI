# Game Design Document — predloga (P16)

Izpolni med tednom 1 in dopolnjuj skozi semester.  
Skupna tema: **Top-down Zombie Survival** (alternativa: **Dungeon Escape**).

---

## 1. Osnovni podatki

| Polje | Vsebina |
|-------|---------|
| Naslov igre | |
| Avtor / ekipa | |
| Žanr | top-down survival / dungeon escape / … |
| Platforma | brskalnik (HTML5 Canvas + JS) |
| Ciljna dolžina ene seje | npr. 3–10 min |
| Datum / verzija GDD | |

## 2. Elevator pitch (2–3 stavki)

> Kaj igraš, zakaj je zabavno, kako “umreš” ali zmagaš?

## 3. Fantazija / tema

- Svet in ton (npr. mesto ponoči, podzemlje …):
- Referenčne igre (2–3):
- Zakaj Canvas / ta sklop mehanik ustreza temi:

## 4. Jedrne mehanike

Za vsako mehaniko: **vhod → pravilo → feedback**.

| # | Mehanika | Vhod | Pravilo | Feedback |
|---|----------|------|---------|----------|
| 1 | Premikanje | WASD | … | … |
| 2 | Streljanje | miška | … | … |
| 3 | Škoda / HP | — | … | … |
| 4 | Valovi / napredek | — | … | … |
| 5 | *(tvoja)* | | | |

## 5. Igralec

- Velikost / hitrost (začetne vrednosti):
- Zdravje:
- Orožje / cooldown:
- Omejitve:

## 6. Sovražniki / ovire

| Tip | Vedenje | HP | Hitrost | Nagrada (score) |
|-----|---------|----|--------|-----------------|
| walker | sledi | | | |
| runner | sledi hitro | | | |
| *(opcijsko)* | | | | |

Za **Dungeon Escape**: namesto valov opiši sobe, ključe, izhod.

## 7. Napredek in težavnost

- Score:
- Valovi / sobe:
- Kako se otežuje:
- Win condition (če obstaja) / lose condition:

## 8. Stanja igre

- `MENU` → `PLAYING` → `GAME_OVER` (in morebiti `PAUSE`):
- Kaj vidi igralec v vsakem stanju:

## 9. UI / HUD

- Med igro (HP, score, val …):
- Meni / game over:
- Dostopnost (kontrast, velikost besedila):

## 10. Asseti

| Asset | Opis | Vir / licenca | Status |
|-------|------|---------------|--------|
| sprite igralec | | | |
| sprite sovražnik | | | |
| SFX strel | | | |
| … | | | |

## 11. Tehnični okvir

- Datoteke: `index.html`, `style.css`, `game.js`, `assets/`
- Brez Phaser / Three.js (dogovor predmeta)
- Znane omejitve:

## 12. Individualna razširitev (tedni 11–12)

- Ideja:
- Zakaj je doable v ~2 tednih:
- Merilo “končano”:

## 13. Tveganja in plan B

- Kaj lahko odpade, če zmanjka časa:
- Minimalni igrivi rez (MVP):

## 14. Dnevnik sprememb GDD

| Datum | Spremeba |
|-------|----------|
| | Prva verzija |
| | |

---

*Oddaja: ta GDD + povezava do repozitorija. Posodobi pred demom v tednu 12.*
