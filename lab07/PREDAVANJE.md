# Teden 7 — Predavanje: score, valovi, HUD

**Trajanje:** ~45–60 min.  
**Cilj:** uničevanje sovražnikov daje točke; valovi povečajo pritisk; HUD kaže score, val, HP.  
**Gradiva:** `slides.md`, `README.md`, tvoja igra (teden 6).

---

## 0. Odprtje (3 min)

- Survival brez napredka = “hodim naokoli”. **Progressija** je mehanika.
- Vprašanje: “Kdaj se začne val 2?”
- Pravilo te vaje: ko je arena prazna (`enemies.length === 0`), pokliči `spawnWave(wave + 1)`.

Po tem tednu imaš osnovno survival zanko. Teden 8 doda seek + 2 tipa (skupna baza). Lastna igra pride **po** tednu 8, ne kot polish iste mape.

---

## 1. Score (8–10 min)

```
score += POINTS_PER_KILL
```

Pogoj kill: `aabbOverlap` krogla–sovražnik. Krogla izgine. Sovražniku zmanjšaj `hp`; ko je `hp <= 0`, ga odstrani in prištej `points`.

Dummy iz tedna 4 mora postati **uničljiv**. Če je samo en in stoji: po smrti spawnaj naslednjega (že mini-val).

---

## 2. Valovi (12–15 min)

```
wave = 1
enemies = []
```

Ko je `enemies.length === 0` in je `state === "PLAYING"`, pokliči `spawnWave(wave + 1)`.

Težavnost: več sovražnikov. V referenci je walkerjev `2 + wave`. Hitrost in drugi tip prideta v tednu 8.

Spawn: nekaj fiksnih točk na robu platna. Preskoči točko, ki je v zidu ali preblizu igralca.

Sovražniki danes smejo stati. **Seek ni obvezen** — teden 8 doda `updateEnemy` in tipa `walker` / `runner`.

---

## 3. HUD (8–10 min)

Med `PLAYING` na canvasu (ali HTML overlay — canvas je dovolj):

- HP  
- Score  
- Wave  

Berljivo: kontrast, `font` 16–20 px, ne čez igralca na sredini — običajno zgoraj levo/desno.

`GAME_OVER`: pokaži končni score.

To je kompetenca načrtovanja igre (UX feedback), ne “lepa UI knjižnica”.

---

## 4. GDD progressija (5 min)

Dopolni `docs` / svoj GDD: kako se otežuje, win (če obstaja: preživi val N) ali endless. Lose že imaš.

---

## 5. Vaja (5 min)

1. Kill + score.  
2. Spawn valov po pravilu.  
3. HUD.  
4. Reset v `resetGame` (score/wave).  
5. AI: podatkovni model valov, ne cel `game.js`.

---

## 6. Zapiranje (3 min)

- HUD = feedback napredka.  
- Val je pravilo, ne naključje “ker je AI rekel”.  
- Teden 8: isti spawn, boljši AI, milestone baza.

---

## Opombe za učitelja

- Če kill še ni: najprej en sovražnik z HP, potem valovi.  
- Endless je OK; win condition ni obvezen za teden 7.  
- Ne zahtevaj spriteov — kompetenca 4 je v projektu.
