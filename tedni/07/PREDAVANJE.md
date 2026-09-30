# Teden 7 — Predavanje: score, valovi, HUD

**Trajanje:** ~45–60 min.  
**Cilj:** uničevanje sovražnikov daje točke; valovi povečajo pritisk; HUD kaže score, val, HP.  
**Gradiva:** `slides.md`, `VAJA.md`, tvoja igra (teden 6).

---

## 0. Odprtje (3 min)

- Survival brez napredka = “hodim naokoli”. **Progressija** je mehanika.
- Vprašanje: “Kdaj se začne val 2 — ko ubiješ vse, ali ko mine čas?”
- Oba sta veljavna; izberi **eno** pravilo in ga zapiši v GDD.

Po tem tednu imaš osnovno survival zanko. Teden 8 doda seek + 2 tipa (skupna baza). Lastna igra pride **po** tednu 8, ne kot polish iste mape.

---

## 1. Score (8–10 min)

```
score += POINTS_PER_KILL
```

Pogoj kill: overlap krogla–sovražnik (AABB ali krog). Odstrani kroglo in sovražnika (ali `hp` sovražnika → 0).

Dummy iz tedna 4 mora postati **uničljiv**. Če je samo en in stoji: po smrti spawnaj naslednjega (že mini-val).

---

## 2. Valovi (12–15 min)

Minimalni model:

```
wave = 1
enemiesRemaining  // ali enemies.length
```

Pravilo (izberi in dokumentiraj):

| Sprožilec | Primer |
|-----------|--------|
| Arena prazna | `enemies.length === 0` → `wave++`, spawn N |
| Števec ubitih | vsakih K ubitih nov val |
| Čas | vsakih T sekund, tudi če stari še živijo |

Težavnost: `N = BASE + wave` in/ali večja hitrost (hitrost seek je teden 8; danes lahko hitrejši **drift** ali več spawnov).

Spawn: naključni rob platna, ne na igralcu (preveri razdaljo).

Sovražniki smejo stati ali imeti preprost naključni `vx,vy`. **Seek ni obvezen danes** — če ga dodaš zgodaj, teden 8 ga utrdi in razdeli na 2 tipa.

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
