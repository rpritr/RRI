# Teden 7 — AI prompti in refleksija

Splošna pravila: `../DIDAKTIKA-AI.md`.

---

## Prompt A — model valov (obvezno)

```
Predlagaj enostaven wave sistem za Canvas vanilla JS:
polja wave, enemies[] (vsak x,y,w,h,hp,points), score.
Funkcija spawnWave(n) postavi N sovražnikov na rob platna.
Ko je enemies.length === 0, pokliči spawnWave(wave + 1) z večjim N.
Samo podatkovni model + pseudokoda. Brez pathfindinga, brez cele datoteke.
Slovenščina. Na koncu vprašaj me, kako preprečim spawn v zidu.
```

Implementiraj to pravilo. Spremeni N in zapiši občutek.

---

## Prompt B — HUD

```
Kako z fillText narišem HUD (HP, score, wave) zgoraj levo
na 800×450 canvasu, bela barva, berljivo. 15 vrstic max.
Ne predlagaj React/DOM UI knjižnice.
```

Prilagodi koordinate, da ne prekrijejo ključne akcije.

---

## Prompt C — težavnost

```
3 predlogi, kako otežiti val 5 proti valu 1
(samo številke: N, HP, hitrost). Za vsakega: kaj občuti igralec.
Brez nove mehanike.
```

Izberi enega, vključi v GDD.

---

## Pričakovana refleksija

1. Kakšno pravilo vala si izbral in zakaj?  
2. Kako se val 3 razlikuje od vala 1 (številke)?  
3. Kaj resetiraš ob R?  
4. Kje je AI hotel “procedural dungeon” ali Phaser group — zavrnjeno?

---

## Česa danes ne prosi AI

- “Procedural map generator.”  
- “Steam leaderboard.”  
- “10 tipov sovražnikov” (teden 8 = **2** tipa).  
- Cel `game.js`.
