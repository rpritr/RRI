# Teden 6 — AI prompti in refleksija

Splošna pravila: `../DIDAKTIKA-AI.md`.

---

## Prompt A — HP in state (obvezno)

```
Canvas vanilla JS. Igralec ima hp, maxHp, hurtTimer.
Ob aabbOverlap z enemy (x,y,w,h) zmanjšaj hp samo, če hurtTimer <= 0,
nato nastavi hurtTimer na cooldown. Vsak update: hurtTimer -= dt.
Ko hp <= 0, state = 'GAME_OVER'.
Pokaži tudi resetGame() ki vrne hp, pozicijo in state = 'PLAYING'.
Samo ta kos, ne cele datoteke. Komentarji v slovenščini.
Vprašaj me, zakaj hurtTimer obstaja.
```

Spremeni številke. Ne sprejmi, da AI doda seek ali inventory.

---

## Prompt B — feedback

```
Predlagaj 3 preproste vizualne feedbacke za zadetek igralca
na Canvas 2D (brez slik): drugačna barva, besedilo HP, krajši kvadratek.
Vsak max 10 vrstic ideje. Brez particle sistema in brez utripanja.
```

Implementiraj **enega** in ga prilagodi.

---

## Prompt C — preveri moj reset

```
To je moj resetGame. Kaj pozabim sprazniti, da drugi poskus
ni “duhov” krogle ali negativni HP?
[prilepi resetGame in začetna polja]
Ne piši nove igre.
```

---

## Pričakovana refleksija

1. Koliko HP in kakšen `HURT_COOLDOWN` — zakaj te številke?  
2. Kaj bi se zgodilo brez `hurtTimer` (en stavek + si poskusil?)?  
3. Kaj `resetGame` ponastavi in kaj si **zavestno** pustil (če kaj)?  
4. AI napaka ali odvečen feature, ki si ga zavrnil.

---

## Česa danes ne prosi AI

- “Unity heart UI prefab.”  
- “Save/load high score v bazo.”  
- “Celoten meni z nastavitvami.”  
- Seek AI (teden 8).
