# Teden 8 — AI prompti in refleksija

Splošna pravila: `../../DIDAKTIKA-AI.md`.  
Po tem tednu so prompti za **lastno igro** v projektu — ne “dodaj 20 polishov na iste zombije”.

---

## Prompt A — seek + 2 tipa (obvezno)

```
Canvas 2D vanilla JS, brez Phaserja.
Sovražnik naj sledi igralcu s konstantno hitrostjo (seek):
vektor proti igralcu, hypot, omejitev speed * dt. Brez pathfindinga,
brez A*, brez steering knjižnice.

Dva tipa v istem seznamu enemies[]:
- walker: počasnejši, več HP
- runner: hitrejši, manj HP
Različna color polja.

Samo updateEnemy + zgled dveh objektov za spawn. Ne cele datoteke.
Komentarji v slovenščini. Vprašaj me, kaj naredim, ko je len == 0.
```

Spremeni številke. Zavrni, če AI doda Unity NavMesh.

---

## Prompt B — razloži moj seek (understand)

```
Razloži to funkcijo vrstico po vrstici. Ne dodajaj obida zidov,
če ga ni v kodi.
[prilepi SAMO updateEnemy]
```

Označi halucinacije.

---

## Prompt C — prehod v lastno igro (ideje, ne koda)

```
Naredil sem 8-tedensko Canvas zombie survival bazo
(loop, WASD, AABB, strel, HP, valovi, seek, 2 tipa).
Predlagaj 8 idej za LASTNO igro (lahko nova tema),
doable v preostanku semestra. Označi težavnost 1–5.
Ne predlagaj Unreal/Unity. Ne predlagaj “samo dodaj sprite
in meni na isto igro” kot glavni projekt.
```

Izberi smer; podrobnosti v [`projekt/`](../../projekt/).

---

## Pričakovana refleksija

1. Formula seeka z lastnimi besedami.  
2. Razlika walker vs. runner (številke).  
3. Kaj v bazi še šepa in **ne** boš silil v polish tednov, ampak vzameš v projekt ali opustiš?  
4. Baza ali nova igra — odločitev in zakaj.

---

## Česa danes ne prosi AI

- “Prepiši v Unreal / Unity / Phaser.”  
- “A* pathfinding za cel tilemap.”  
- “Naredi mi celoten projekt za oceno.”  
- “10 enemy types + boss rush + shop.”
