# Teden 5 — Predavanje: streljanje proti miški

**Trajanje:** ~45–60 min.  
**Cilj:** študent razume smer kot vektor (miška − igralec), spawna projektile, jih posodobi z `dt` in odstrani ob robu.  
**Gradiva:** `slides.md`, `README.md`, tvoja igra (teden 4).

---

## 0. Odprtje (3 min)

- Vprašanje: “Kliknem na točko. Kam gre krogla — proti *pixelu okna* ali proti *točki na platnu*?”
- Danes: igrivo streljanje. Sovražnik še umre v tednu 7 (točke); danes krogle letijo.

---

## 1. Koordinate: okno vs. canvas (10–12 min)

`click.clientX` je v oknu brskalnika. Canvas ima `getBoundingClientRect()` in morda CSS skaliranje.

```
const rect = canvas.getBoundingClientRect();
mouse.x = (e.clientX - rect.left) * (canvas.width / rect.width);
mouse.y = (e.clientY - rect.top) * (canvas.height / rect.height);
```

Brez korekcije širine: strel “zamuja”, če je canvas CSS-povečan.

Drži miško v `mousemove` + `mousedown` za hold-to-fire (opcijsko).

---

## 2. Smer = vektor (10–12 min)

```
vx = mouse.x - (player.x + player.w/2)
vy = mouse.y - (player.y + player.h/2)
len = hypot(vx, vy)
vx /= len; vy /= len
```

Za premik krogle zadostuje **enotski vektor**.

Smer računaj od središča igralca. V polje shrani levi-zgornji kot, da ostane `{x, y, w, h}` kot pri vseh ostalih.

---

## 3. Projektili kot seznam (10–12 min)

```
bullets[] = { x, y, w, h, vx, vy }
```

Vsak frejm:

- `x += vx * BULLET_SPEED * dt` (če sta `vx, vy` enotska)
- odstrani, če je krogla ven iz platna

Odstranjevanje: zanka **od konca** (`i--`), nato `splice`.

**Cooldown:** `shotTimer`. Po strelu ga nastavi na `BULLET_COOLDOWN` (npr. 0.25 s) in vsak frejm odštej `dt`. Hold sicer naredi več sto krogle na sekundo.

Krogla–zid: isti `aabbOverlap`. Če se prekrivata, krogla izgine. Minimalno za ta teden: izgine ob robu platna.

---

## 4. Feedback (5 min)

- Majhen kvadrat (`fillRect`).  
- (Opcijsko) črta “aim” od igralca do miške samo za debug.  
- GDD: vhod = klik/hold, pravilo = cooldown + smer, feedback = projektil + kasneje zvok (projekt).

---

## 5. Vaja danes (5 min)

1. Sledenje miške v koordinatah canvasa.  
2. Klik (in/ali hold) → spawn.  
3. Premik + despawn.  
4. Cooldown priporočen.  
5. AI: samo spawn+update krogle; ti spremeniš hitrost ali cooldown.

---

## 6. Zapiranje (3 min)

- Smer je vektor, ne “magični kot”.  
- Seznam entitet + odstranjevanje = vzorec za valove (teden 7).  
- Trk krogla–sovražnik lahko pripraviš, točke so teden 7.

**Domača misel:** Zakaj ne shranimo `mouse` v “pikslih okna” v `update`?

---

## Opombe za učitelja

- `mousedown` / `mousemove` na canvas, `mouseup` na `window` (da strel preneha, če gumb spustiš zunaj platna).
- Če hold naredi kaoso: vsili `shotTimer`.
- Krogla je pravokotnik, ne žarek (hitscan).
