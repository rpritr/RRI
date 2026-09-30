# Teden 1 — AI prompti in refleksija

Uporabi ChatGPT / Claude / Cursor chat / podobno.  
**Jezik prompta:** slovenščina ali angleščina — odgovor raje v slovenščini, če pišeš GDD v slovenščini.

Splošna pravila: `../../DIDAKTIKA-AI.md`.  
Danes **ne** prosi za celotno igro ali cel `game.js`.

---

## Prompt A — Zombie Survival (priporočeno)

```
Sem študent predmeta Razvoj računalniških iger.
Delam top-down zombie survival v brskalniku (HTML Canvas 2D, vanilla JS, brez Phaserja).
Predlagaj 5 jedrnih mehanik, primernih za začetni semester.
Za vsako mehaniko napiši: (1) vhod igralca, (2) pravilo, (3) feedback igralcu.
Brez kode. Bodi kratek. Na koncu vprašaj me eno vprašanje, da preveriš, ali razumem razliko med mehaniko in feedbackom.
```

---

## Prompt B — Dungeon Escape (alternativa)

```
Sem študent predmeta Razvoj računalniških iger.
Delam top-down Dungeon Escape (labirint, ključi, sovražniki) v HTML Canvas 2D + vanilla JS.
Predlagaj 5 jedrnih mehanik (premik, interakcija s predmeti, nevarnost, napredek/izhod, …).
Za vsako: vhod, pravilo, feedback. Brez kode. Kratko. Jezik: slovenščina.
```

---

## Prompt C — Elevator pitch (če obtičiš pri GDD §2)

```
Na podlagi teh mehanik: [prilepi 3–4 mehanike iz svoje tabele]
napiši 2 različici elevator pitcha (vsak 2–3 stavki) za igro v brskalniku.
Ton: jasen, ne marketinški. Slovenščina.
```

Nato **prepiši** pitch z lastnimi besedami — ne oddaj surovega AI teksta.

---

## Prompt D — Preveri, ali AI “laže” o tvojem starterju

Po tem, ko prebereš `game.js`:

```
Razloži, kaj počne ta funkcija (samo ta kos):
[prilepi updatePlayer ALI loop iz game.js]

Povej: (1) kaj je dt, (2) zakaj normaliziramo diagonalo, (3) kaj naredi clamp.
Če česa ne vidiš v kodi, reci "ne vem" — ne izmišljuj.
```

**Tvoja naloga:** označi, kje je AI zadel / zgrešil. To je vaja *understand*.

---

## Pričakovana študentska refleksija (oddaj / pripravi za pogovor)

Odgovori našteto (lahko v isti datoteki kot GDD):

1. **Kateri 3 mehanike** si obdržal iz AI predloga in zakaj prav te?  
2. **Katere 1–2** si zavrnil (preveč kompleksne / ne pašejo v Canvas / …)?  
3. Za **eno** mehaniko napiši svojo verzijo feedbacka, drugačno od AI.  
4. V enem stavku: *Kaj bom kodiral v prvih 8 tednih, česa pa ne?*  
5. (Opcijsko) Kaj AI narobe razložil pri Promptu D?

---

## Česa danes ne prosi AI

- “Napiši celoten game.js za zombie igro.”  
- “Dodaj Phaser.”  
- “Naredi multiplayer.”  

To pokvari učenje in teden 1 cilje. Večjo lastno igro shranimo za **projektno fazo** po tednu 8 — in še takrat po kosih.
