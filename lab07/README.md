# Teden 7 — Vaja: score, valovi, HUD

**Predviden čas:** ~3–4 ure.  
**Izhod:** točke ob uničenju, vsaj 2 vala, HUD (score, val, HP).  
**Gradiva:** tvoja igra (teden 6), `PROMPTI.md`, svoj GDD.

---

## Korak 0 (~10 min)

- [ ] HP / game over / strel delujejo.
- [ ] Imaš vsaj eno entiteto sovražnika.

---

## Korak 1 — Uničenje in score (~40–50 min)

- [ ] Sovražnik ima lahko `hp` (1 zadetek = smrt je OK).
- [ ] Trk `bullet` vs. `enemy`: odstrani kroglo, zmanjšaj/ubit sovražnika, `score += …`.
- [ ] Konstanta `POINTS_PER_KILL`.

Test: ustreli dummy — izgine (ali umre), score zraste, v HUD se vidi.

Če imaš samo enega in po smrti arena ostane prazna: to reši korak 2 (spawn).

---

## Korak 2 — Valovi (~50–70 min)

- [ ] `wave` začne pri 1.
- [ ] Funkcija `spawnWave(n)` doda N sovražnikov (rob platna, ne prek igralca).
- [ ] Jasno **pravilo** naslednjega vala (prazna arena *ali* čas *ali* ubiti) — zapiši v komentar in GDD.
- [ ] Val 2 je težji: več N in/ali drugačen spawn.

Premik sovražnikov: statik, naključna smer, ali že grob follow — zabeleži, kaj uporabljaš. Seek + 2 tipa je **teden 8**.

- [ ] `resetGame` ponastavi `score`, `wave`, `enemies`.

---

## Korak 3 — HUD (~25–35 min)

- [ ] Med PLAYING: HP, score, wave (canvas `fillText` zadostuje).
- [ ] GAME_OVER: končni score viden.
- [ ] Besedilo berljivo na temnem ozadju.

Ne delaj HTML CSS menija namesto zanke — če dodaš HTML HUD, naj se ujema s `state`.

---

## Korak 4 — GDD (~20–30 min)

- [ ] §4/§7: progressija (kako se val otežuje).
- [ ] Win condition, če ga imaš; sicer “endless survival” + lose = HP 0.

---

## Korak 5 — AI (~25–35 min)

Prompt A: model `wave` + spawn, **pseudokoda ali majhen kos**.

- [ ] Spremeni krivuljo težavnosti (npr. +1 enemy na val vs. +2) in opiši občutek.
- [ ] Commit: `teden 7: score, valovi, HUD`.

---

## Korak 6 — Zapri

### Priprava na teden 8 (milestone)

> Skupna baza = premik, loop, trki, strel, HP, score, valovi + **seek in 2 tipa**. Kaj ti še manjka?

---

## Merila “opravil teden 7”

| Merilo | OK |
|--------|----|
| Uničenje da score | |
| Vsaj prehod val 1 → val 2 po jasnem pravilu | |
| HUD: score, val, HP | |
| Restart ponastavi napredek | |
| GDD progressija dopolnjena | |
| AI model valov + lastna sprememba težavnosti | |
