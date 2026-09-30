# Didaktika z AI — pravila in primeri

Predmet je **AI-assisted**: AI je orodje, ne avtor oddaje. Cikel, ki ga ponavljamo vsak teden:

```
generate → run → understand → change → test → explain
```

1. **Generate** — AI predlaga kodo ali idejo.  
2. **Run** — zaženeš v brskalniku.  
3. **Understand** — prebereš in razumeš (komentarji, lastne ante).  
4. **Change** — spremeniš parametre / logiko (to dokazuje lastništvo).  
5. **Test** — preveriš robne primere.  
6. **Explain** — ustno ali v README/komentarju: *zakaj* tako deluje.

## Pravila za študente

**Dovoljeno**
- Generirati osnutke funkcij, refactor predloge, razlage napak.
- Uporabljati Copilot / Cursor / ChatGPT / Claude za predloge.
- Pastati kratek snippet, če ga razumeš in ga prilagodiš.

**Obvezno**
- Vsak večji AI kos: **spremeni** vsaj eno vedenje (hitrost, spawn, feedback …) in to zapiši.
- Znati razložiti lastno `update` / trk / strel brez branja z lista.
- Navesti v kratkem dnevniku (ali commit sporočilu), kaj je AI pomagal.

**Prepovedano / tvegano za oceno**
- Oddati igro, ki je “črna škatla” — dela, a ne znaš razložiti.
- Generirati celoten projekt v enem promptu in ga ne predelati.
- Lagati o avtorstvu.

## Orodja (praktično)

| Orodje | Kako ga uporabljamo |
|--------|---------------------|
| **GitHub Copilot** | Dopolnjevanje v editorju; sprejmi predlog šele, ko razuměš naslednje vrstice. |
| **Cursor** | Chat ob kodi; prosi za *razlago* in *majhne* diff-e, ne “prepiši cel game.js”. |
| **ChatGPT / podobno** | Ideje za mehanike, debug koraki, GDD odstavki — potem skrajšaj in prilagodi tonu predmeta. |

Priporočilo: v Cursorju / Copilotu delaj **funkcijo za funkcijo**, ne celotne datoteke naenkrat.

## Primeri promptov (slovenščina / angleščina OK)

Kopiraj in prilagodi. Vedno dodaj kontekst: “imam Canvas 2D, vanilla JS, igralec je pravokotnik …”

### Teden 1 — GDD
> Predlagaj 5 jedrnih mehanik za top-down zombie survival (HTML Canvas). Za vsako: vhod igralca, pravilo, feedback. Brez kode.

### Teden 2 — premik
> Imam `player = { x, y, w, h, speed }` in objekt `keys` za WASD. Napiši funkcijo `updatePlayer(dt)`, ki premakne igralca, normalizira diagonalo in ga omeji na canvas širine `W` višine `H`. Samo ta funkcija, z komentarji v slovenščini.

### Teden 3 — delta
> Razloži razliko med fiksni update in delta time v `requestAnimationFrame`. Potem pokaži minimalen vzorec z `lastTime` v mojem stilu kode: [prilepi svoj loop].

### Teden 4 — trk
> Napiši funkcijo `aabbOverlap(a, b)` za objekte z `x,y,w,h`. Nato primer, kako preprečiti, da igralec gre v oviro (preprosto: razveljavi premik po osi).

### Teden 5 — strel
> Ob kliku miške ustvari projektil na položaju igralca, smer proti `mouse.x/y`. Hitrost konstanta. Posodobi in odstrani, ko zapusti canvas.

### Teden 6 — HP
> Dodaj `hp`, `maxHp`, `hurtCooldown`. Ob stiku s sovražnikom zmanjšaj hp, nastavi cooldown, ob 0 preklopi `state = 'GAME_OVER'`.

### Teden 7 — valovi
> Predlagaj enostaven wave sistem: `wave`, `enemiesRemaining`, spawn N zombiejev, ko so mrtvi → `wave++` in težje (več / hitreje). Samo podatkovni model + pseudokoda.

### Teden 8 — AI
> Sovražnik naj sledi igralcu s konstantno hitrostjo (seek). Dva tipa: `walker` (počasno) in `runner` (hitro, manj HP). Brez pathfindinga.

### Projektna faza — lastna igra (ne polish tednov 9–12 na isti igri)
> Predlagaj 8 idej za LASTNO Canvas igro (lahko nova tema), doable v preostanku semestra. Označi težavnost 1–5. Ne Unreal/Phaser. Ne “samo sprite + meni na isto zombie igro” kot celoten projekt.

> Kako naložiti `Image` in narisati sprite namesto `fillRect` — minimalen primer. Potem: kje v README zapišem vir in licenco?

> Seznam 5 majhnih polish idej (max 1 ura vsaka) za **mojo** igro po vertical slice-u — ne 20 efektov.

## Prompt, ki ga učitelj pogosto doda

> Ne piši cele datoteke. Vrni samo funkcijo X. Dodaj 3–5 slovenskih komentarjev. Na koncu vprašaj me eno vprašanje, da preveriš, ali razumem.

## Kako ocenjujemo uporabo AI

- Ali je študent **spremenil** generirano kodo?
- Ali zna **razložiti** kritične dele?
- Ali so commit-i / dnevnik smiselni?
- Ali igra deluje in ustreza tedenskemu cilju?

AI, ki pospeši učenje = uspeh. AI, ki nadomesti učenje = težava pri ustnem zagovoru.
