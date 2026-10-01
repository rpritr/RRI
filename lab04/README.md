# Teden 4 — Vaja: ovire, AABB, entiteta sovražnika

**Predviden čas:** ~3–4 ure.  
**Izhod:** igralec ne gre skozi vsaj eno oviro; sovražnik obstaja kot `{x,y,w,h}` (brez AI).  
**Gradiva:** tvoja igra (teden 3), `PROMPTI.md`.

Nova datoteka tega tedna je `js/collision.js`. Ostalo dodajaš v obstoječe:

| Datoteka | Kaj |
|----------|-----|
| `js/collision.js` | `aabbOverlap`, `hitsWall`, `moveWithWalls` |
| `js/config.js` | tabela `walls` |
| `js/player.js` | premik gre skozi `moveWithWalls` |
| `js/enemies.js` | dummy sovražnik `{x,y,w,h}` na `world.enemies` — še brez hoje |
| `js/render.js` | nariši ovire in sovražnika |
| `js/world.js` | `world.enemies = []` |

---

## Korak 0 (~10 min)

- [ ] Loop in `state` iz tedna 3 delujeta.
- [ ] Igralec ima `x, y, w, h`.

---

## Korak 1 — Funkcija `aabbOverlap` (~25–35 min)

Napiši (ali po Promptu A, nato **preberi**):

```js
function aabbOverlap(a, b) {
  return (
    a.x < b.x + b.w &&
    a.x + a.w > b.x &&
    a.y < b.y + b.h &&
    a.y + a.h > b.y
  );
}
```

- [ ] Kratek komentar v slovenščini: kaj pomeni vsaka vrstica (ali 4 vrstice skupaj).
- [ ] Mini test v glavi: dva kvadrata, ki se ne dotikata → `false`; ki se prekrivata → `true`.

Ne uporabljaj knjižnice za trke.

---

## Korak 2 — Vsaj ena ovira (~40–50 min)

- [ ] Tabela `walls` v `js/config.js` (lahko ena sama): `{ x, y, w, h }`.
- [ ] Nariši jo v `js/render.js` (npr. siva).
- [ ] `moveWithWalls` v `js/collision.js`: najprej `x`, če zadene zid razveljavi `x`, nato `y`. `updatePlayer` v `js/player.js` kliče to funkcijo.

- [ ] Test: zaleti se z leve, desne, zgoraj, spodaj — **ne gre skozi**.
- [ ] Test: drsi ob zidu (premik vzporedno s steno) — po možnosti deluje (osi).

Opcijsko: 2–3 ovire (soba). Ne delaj mesta 20 zidov namesto učenja resolve.

Clamp na rob platna **ostane** — to so meje sveta, ne `walls`.

---

## Korak 3 — Entiteta sovražnika (brez AI) (~30–40 min)

- [ ] V `js/enemies.js` dodaj enega v `world.enemies`: `x, y, w, h, color` (npr. zelena).
- [ ] Nariši ga v `js/render.js`. **Ne** kliči seeka (teden 8, `updateEnemy`).
- [ ] Lahko stoji v kotu ali na fiksni točki.

Opcijsko: če `aabbOverlap(player, enemy)`, spremeni barvo igralca za en frejm (samo feedback — HP je teden 6).

To je “prazna” entiteta: pripravljena na HP, seek, valove.

---

## Korak 4 — Testni list (~20 min)

Zapiši in obkljukaj:

- [ ] Skozi oviro **ne** grem.
- [ ] Diagonala v vogal ovire ne uide “skozi špranjo” (če uide, poskusi osi ali manjši `dt` skok — ne ignoriraj).
- [ ] Sovražnik je viden vsak frejm.
- [ ] `state !== PLAYING` → se ne premikam v zid (če imaš pauzo).

---

## Korak 5 — AI (~30–40 min)

Prompt A: samo `aabbOverlap` + osni resolve.  
Nato:

- [ ] Spremeni **velikost ali lego** ovire in preveri občutek.
- [ ] V refleksiji: *detect vs. resolve* z lastnimi besedami (3–5 stavkov).

---

## Korak 6 — Zapri (~15 min)

- [ ] Commit: `teden 4: AABB ovire + dummy enemy`.
- [ ] GDD: vrstica o ovirah / areni (mapa).

### Priprava na teden 5

> Kje dobiš koordinate miške **glede na canvas**, ne glede na okno?

---

## Merila “opravil teden 4”

| Merilo | OK |
|--------|----|
| `aabbOverlap` obstaja in se uporablja | |
| ≥1 ovira; igralec ne gre skozi | |
| Dummy sovražnik z `x,y,w,h` + risanje | |
| Detect in resolve sta ločena (funkciji ali jasna koraka) | |
| AI + lastna sprememba (lega/velikost) + razlaga | |
