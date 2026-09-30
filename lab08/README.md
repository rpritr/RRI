# Teden 8 — Vaja: seek, 2 tipa, milestone skupna baza

**Predviden čas:** ~3–4 ure.  
**Izhod:** igriva survival igra z seek AI in dvema tipoma sovražnikov; README “kako igrati”; pripravljen prehod v [`projekt/`](../projekt/).  
**Gradiva:** tvoja igra (teden 7), `PROMPTI.md`, referenca [`demo/`](../demo/).

Referenčna igra je razdeljena v `demo/js/` (vhod, trki, igralec, streli, sovražniki, risanje, zanka). **Tvoja oddaja sme ostati v enem `game.js`.** Razdelitev je vzorec za trenutek, ko datoteka postane nepregledna — ni zahteva tega tedna. Zagon reference: `python3 -m http.server` v mapi `demo/` (moduli ne tečejo prek `file://`).

---

## Korak 0 (~10 min)

- [ ] Valovi, score, HP, strel iz tedna 7 delujejo.

---

## Korak 1 — Seek (~40–50 min)

- [ ] `updateEnemy(e, dt)`: vektor proti središču igralca, normalizacija, `e.speed * dt`.
- [ ] Vsi aktivni sovražniki v PLAYING kličejo to (ali veja po tipu, ista smer).
- [ ] Test: stoji pri miru — pridejo do tebe. Odmakni se — sledijo.

Ovire: poskusi isti resolve kot igralec. Če runner “obtiči”, zabeleži v README kot znano omejitev (pathfinding ni zahteva).

---

## Korak 2 — Dva tipa (~40–50 min)

- [ ] `walker` in `runner` (imena lahko prilagodiš): različna **hitrost**, **HP**, **barva**.
- [ ] Spawn valov uporablja oba (vsaj od vala 2).
- [ ] GDD §6 tabela izpolnjena.

Test: vizualno ločiš tipa v 2 sekundah igranja.

---

## Korak 3 — Stabilizacija (~40–50 min)

Prehodi checklist **skupna baza**:

- [ ] Premik + clamp / ovire
- [ ] Loop + `dt` + `state`
- [ ] Strel proti miški
- [ ] HP, i-frames, GAME_OVER, R
- [ ] Score, valovi, HUD
- [ ] Seek + 2 tipa
- [ ] Ni očitnih crashov v konzoli (F12) pri 2–3 minutah igre

Popravi 1–2 kvardarja (npr. spawn v zidu, score se ne resetira). **Ne** začni particle-jev in menijev namesto stabilizacije.

---

## Korak 4 — README skupne baze (~20–30 min)

V svojem repoju:

- [ ] Kako zagnati
- [ ] Kontrole
- [ ] Kaj je “teden 8 baza” (2–5 stavkov)
- [ ] Znane omejitve (npr. ni pathfindinga)

---

## Korak 5 — AI (~25–35 min)

Prompt A: seek + dva tipa, **brez pathfindinga**.

- [ ] Spremeni številke enega tipa (npr. runner še hitrejši, 1 HP) in razloži meta (koga ubiješ prej).
- [ ] Commit: `teden 8: seek walker/runner — skupna baza`.

---

## Korak 6 — Prehod v projekt (~15 min)

Preberi [`projekt/BRIEF.md`](../projekt/BRIEF.md).

Odgovori (oddaja tedna ali list):

1. Ali bom **nadgradil to bazo** ali začel **novo** Canvas igro?  
2. Ena stavčna ideja lastne igre (lahko osnutek).  
3. Česa iz tednov 1–8 **ne** bom vrgel stran (loop/input/trki/entitete)?

---

## Merila “opravil teden 8”

| Merilo | OK |
|--------|----|
| Sovražniki seekajo igralca z omejeno hitrostjo | |
| ≥2 tipa (hitrost/HP/barva) | |
| Checklist skupne baze (korak 3) | |
| README kako igrati | |
| AI + lastna sprememba stats + razlaga | |
| Zapisana odločitev: baza vs. nova igra za projekt | |
