# Teden 6 — Predavanje: zdravje, škoda, game over

**Trajanje:** ~45–60 min.  
**Cilj:** igralec ima HP, ob stiku izgubi življenje šele po pavzi (`hurtTimer`), ob 0 preklop v `GAME_OVER`, **R** kliče `resetGame`.  
**Gradiva:** `slides.md`, `README.md`, tvoja igra (teden 5).

---

## 0. Odprtje (3 min)

- Vprašanje: “Sovražnik se prekriva z mano 1 sekundo pri 60 FPS. Kolikokrat dobim škodo, če vsak frejm odštejem 1 HP?”
- Odgovor: ~60× — zato `hurtTimer`, ne samo `hp--` vsak frejm.
- Danes sklenemo zanko **poraza**. Zmaga/valovi so teden 7.

---

## 1. HP kot podatek (8–10 min)

```
player.hp, player.maxHp
player.hurtTimer  // sekunde do naslednje dovoljene škode
```

Feedback:

- palica v `js/render.js`: `fillRect` širine `hp / maxHp` (besedilo brez palice se na platnu izgubi),
- drugačna barva igralca, dokler je `hurtTimer > 0`.

GDD: pravilo škode + feedback. Številke v kodi = številke v dokumentu.

---

## 2. Pavza po zadetku (10–12 min)

Ob overlap z nevarnostjo (dummy enemy **ali** rdeča cona):

```
if (hurtTimer <= 0) {
  hp -= DAMAGE
  hurtTimer = HURT_COOLDOWN  // npr. 0.6–1.0 s
}
```

Vsak frejm: `hurtTimer -= dt` (ne pod 0).

Nevarnost je lahko:

- obstoječi dummy iz tedna 4,
- `hazard` pravokotnik,
- oboje.

Seek AI **ni** potreben, da ta teden dela. Če sovražnik stoji, se ti zaletiš vanj namerno za test.

---

## 3. GAME_OVER in restart (10–12 min)

`state` iz tedna 3:

- `hp <= 0` → `state = "GAME_OVER"` (in `hp = 0`).
- V `update`: svet se ne premika (ali se “zamrzne”).
- V `draw`: prekrivno besedilo “GAME OVER — R za znova”.
- Tipka **R**: reset pozicije, HP, krogle, timerjev, `state = "PLAYING"`.

Funkcija `resetGame()` — eno mesto, manj bugov. Pripravi na teden 7 (score/wave na 0).

`MENU` ni obvezen; če ga imaš, R ali klik lahko gre v PLAYING.

---

## 4. Vaja danes (5 min)

1. HP + izpis.  
2. Škoda ob stiku + `hurtTimer` + drugačna barva.  
3. GAME_OVER + R.  
4. AI: samo HP/hurt/state kos; ti spremeniš `maxHp` ali cooldown.

---

## 5. Zapiranje (3 min)

- Škoda brez `hurtTimer` = smrt v enem dotiku, ker se trk ponovi vsak frejm.  
- Restart je del zanke, ne F5.  
- Naslednji teden: smrt **sovražnika** da točke, ne samo tvoja smrt.

---

## Opombe za učitelja

- Šibkejši: hazard cona, če overlap z enemy še ni stabilen.  
- Ne uvajaj inventory/armor.  
- Dungeon Escape: past v tleh = isti HP vzorec.
