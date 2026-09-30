# Teden 4 — AI prompti in refleksija

Splošna pravila: `../../DIDAKTIKA-AI.md`.  
Ne prosi za fizikalni engine ali tilemap editor.

---

## Prompt A — overlap + resolve (obvezno)

```
Napiši funkcijo aabbOverlap(a, b) za objekte z x,y,w,h
(levi zgornji kot). Nato pokaži, kako po osi preprečiti,
da igralec gre v oviro: shrani prevX/prevY, premakni x, če overlap
vrni x, nato y. SAMO ti dve funkciji / ta kos.
Komentarji v slovenščini. Ne piši draw, ne piši cele igre.
Na koncu vprašaj me, zakaj ločimo detect in resolve.
```

Vključi, **spremeni** dimenzijo ovire, testiraj vogale.

---

## Prompt B — “preveri moj trk”

```
To je moja funkcija trka. Povej, ali je AABB pravilen.
Če vidiš off-by-one ali napačen kot (center vs. top-left), reci.
Ne dodajaj novih feature-jev.
[prilepi aabbOverlap in kos update, kjer resolve-aš]
```

Označi, ali AI razume **tvoj** dogovor o `x,y`.

---

## Prompt C — krogi (opcijsko, ne obvezno za oceno tedna)

```
Kako detektiram trk dveh krogov (cx, cy, r)? Ena funkcija,
brez resolve. Kdaj bi v top-down igri raje krog kot AABB?
```

Če uporabiš kroge za krogle v tednu 5, naj bo to zavestna izbira.

---

## Pričakovana refleksija

1. Z lastnimi besedami: kaj je **detect**, kaj **resolve**?  
2. Ali tvoj igralec “lepi” na vogalu? Če da, kaj si poskusil?  
3. Kje v kodi živi dummy sovražnik in zakaj nima `updateEnemy` še seek?  
4. Ena stvar, ki jo je AI narobe predlagal (npr. rotacija, sat, Phaser arcade).

---

## Česa danes ne prosi AI

- “Naredi Unity CharacterController.”  
- “Implementiraj SAT za rotirane oblike.”  
- “Cel labirint generator.”  
- “Sovražnik naj me že lovi” (to je teden 8).
