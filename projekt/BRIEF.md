# Brief — lastna igra (P16)

**Komu:** študentom po tednu 8 (skupna baza).  
**Kaj:** ena **igriva** igra v brskalniku, ki je tvoja — tema, mehanike, identiteta.  
**Sklad:** HTML5 Canvas 2D + vanilla JS (brez Phaser / Three.js / Unreal / Unity).

---

## Namen

Tedni 01–08 so **skupna učna baza**: loop, vhod, trki, entitete, stanja, napredek.  
Projekt dokaže, da to **obvladaš** in znaš načrtovati ter dokončati **celotno igro** (CPI: mehanike, načrt iger, pogon na nizki plasti, asseti, izgradnja).

Glavni cilj faze **ni** polish iste Top-down Zombie Survival igre (spritei + meni na isti kodi brez lastnega pečata). To sme biti *izhodišče*, ne sme biti *celoten projekt*.

---

## Izhodišče (izberi eno)

| Pot | Kaj narediš | Kaj mora ostati vidno |
|-----|-------------|------------------------|
| **A — iz baze tedna 8** | Nova tema ali jedrna mehanika na svoji kodi (ne samo barve). Jasno v README, kaj je novo. | Loop, input, trki, entitete |
| **B — nova Canvas igra** | Nov prototip (platformer, puzzle, arena, …) v istem skladu | Isti štirje stebri, igrivo |

Oboje je legitimno. **Ni** legitimno: oddaja tujega Phaser tutoriala, prepis v Unreal, ali igra, ki je ne znaš razložiti.

---

## Obseg (naj bo doable)

Igra naj se da **dokončati** v preostanku semestra (glej [MEJNIKI.md](MEJNIKI.md)), ne “odprt svet z multiplayerjem”.

**Mora imeti**

- Igriv krog: začetek → igranje → konec (win in/ali game over) → ponovni poskus.
- **Game loop** z jasnim update/draw in časom (`dt` ali dokumentiran fiksni korak).
- **Vhod** (tipkovnica in/ali miška), ki ga razložiš.
- **Trki** ali ekvivalentno preverjanje prekrivanja (AABB/krogi/ploščice — zavestno).
- **Entitete** (igralec + vsaj ena druga vrsta: sovražnik, predmet, ovira, projektil …).
- Stanja (npr. meni ali vsaj start + playing + end).
- **Asseti:** vsaj **en** sprite *ali* **en** zvok, v mapi `assets/`, z **virom in licenco**. Priporočeno oboje. Barvni kvadrati iz tednov 1–8 niso dovolj za kompetenco assetov — v projektu jih zamenjaš ali dopolniš.
- HUD ali jasen feedback (točke, življenja, cilj …).

**Ni treba** (razen če zmoreš brez ogrožanja igrivosti)

- Multiplayer, 3D, fizikalni pogon, proceduralni svet “AAA”, trgovina z 20 predmeti.

Če dvomiš o obsegu: raje **ozka, dovršena** igra kot seznam feature-jev.

---

## Oddaja (deliverables)

1. **Igriva igra** — repo (ali dogovorjena oddaja) + navodilo za zagon v README.  
2. **README** — naslov, kako zagnati, kontrole, kaj je tvoje, znane napake, asseti (vir/licenca).  
3. **GDD** — dopolnjena predloga [`docs/GDD-predloga.md`](../docs/GDD-predloga.md) (ali enakovredno): pitch, mehanike (vhod → pravilo → feedback), win/lose, entitete, asseti.  
4. **AI vs. lastno delo** — kratek odsek (v README ali ločeni datoteki, ~½–1 stran): kaj je AI predlagal, kaj si **spremenil**, kaj znaš razložiti brez lista. Cikel iz `DIDAKTIKA-AI.md` velja.  
5. **Demo** — kratka predstavitev (ciljno **5–8 min**): zaženeš igro, pokažeš jedro, odgovoriš na vprašanja o kodi.

Učitelj lahko zahteva tudi povezavo (GitHub/Arnes) — spremljaj navodila učilnice.

---

## Kaj “mastery” pomeni na zagovoru

Pripravljen bodi v živo razložiti **svojo** kodo:

- kako teče zanka in kaj je `dt`,
- kako bereš vhod,
- kako detektiraš (in morebiti razrešiš) trk,
- kako živi entiteta (podatki + update).

Če igra “dela”, a je črna skrinjica, ocena pade — glej [OCENJEVANJE.md](OCENJEVANJE.md).

---

## Dungeon Escape / zombie

Skupna tema tednov 1–8 sme ostati v srcu, če jo **predelaš** (svoja mehanika, svoj napredek, svoji asseti).  
Lahko jo tudi zapustiš. CPI mapiranje se ne veže na zombije.

---

## Česa ne oddajaš

- Unreal / Unity projekt “ker sem vajen lanskega”.  
- Phaser igra “ker je hitreje”.  
- Celoten `game.js` iz enega AI prompta brez predelave.  
- Samo polish (sprite + zvok) na nespremenjeni bazi tedna 8 brez lastne zasnove.
