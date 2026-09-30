# Teden 8 — Predavanje: AI sovražnikov + skupna baza

**Trajanje:** ~45–60 min.  
**Cilj:** sovražniki sledijo igralcu (seek) z omejeno hitrostjo; vsaj **2 tipa**; igra je igriv milestone — **skupna baza zaključena**.  
**Gradiva:** `slides.md`, `VAJA.md`, tvoja igra (teden 7), [`projekt/`](../../projekt/).

Po tem tednu glavni fokus **ni** polish iste zombie igre. Naslednji korak je [`projekt/BRIEF.md`](../../projekt/BRIEF.md) — lastna igra.

---

## 0. Odprtje (5 min)

- Kje smo: loop, input, ovire, strel, HP, score, valovi.
- Manjka “igra se počuti živa”: sovražnik **hoče** do tebe.
- Vprašanje: “Kakšna je razlika med seek in pathfinding?”  
  Seek = smer proti cilju vsak frejm. Pathfinding = obid zidov (A*, …) — **ni** zahteva tedna 8.

---

## 1. Seek (12–15 min)

Enotski vektor proti igralcu, kot pri krogli, ampak cilj je igralec:

```
dx = playerCenterX - enemy.x
dy = playerCenterY - enemy.y
len = hypot(dx, dy)
dx /= len; dy /= len
enemy.x += dx * enemy.speed * dt
```

- Omejitev hitrosti = `enemy.speed` (px/s), ne “skok na igralca”.
- `len === 0`: ne deli z 0.
- Trk z ovirami: ista AABB resolve kot igralec (priporočeno, sicer clipajo zidove). Če zmanjka časa: seek brez obida zidov je sprejemljiv, **dokumentiraj** omejitev.

To ni “AI knjižnica”. To je vektor.

---

## 2. Dva tipa (10–12 min)

Tabela, ne copy-paste dveh skoraj istih razredov — `type` ali `kind`:

| Tip | Hitrost | HP | Barva | Score |
|-----|---------|----|-------|-------|
| **walker** | počasni | več | npr. zelen | manj/več po dogovoru |
| **runner** | hitri | manj | npr. oranžen | …

Spawn valov: mešanica (npr. val 1 sami walkerji, val 2+ runnerji).  
Isti `updateEnemy` veja na `type`.

GDD §6 naj se ujema.

---

## 3. Kaj je “skupna baza” (8–10 min)

Igralec lahko:

1. hodi (WASD/puščice),  
2. strelja proti miški,  
3. trči v ovire,  
4. izgubi HP in umre, restart R,  
5. dobi točke, vidi HUD, dočaka naslednji val,  
6. vidi **2 vedenji** sovražnikov (seek + različni stats).

To je dovolj za **kompetence 1–3 in del 5**. Asseti (sprite/zvok) in polna “svoja” igra so **projekt**.

Ni cilj: particle-ji, glavni meni AAA, 12 orožij, Unreal.

---

## 4. Kaj sledi (5 min)

- Brief: [`projekt/BRIEF.md`](../../projekt/BRIEF.md)  
- Lahko nadaljuješ to kodo z **novo identiteto**, ali nov Canvas projekt.  
- Moras pokazati loop / vhod / trki / entitete.  
- Ne: “tedni 9–12 samo lepšam zombije.”

---

## 5. Vaja (5 min)

Seek, 2 tipa, stabilizacija, checklist baze, kratek README “kako igrati skupno bazo”.

---

## 6. Zapiranje (3 min)

- Seek = smer + hitrost.  
- Dva tipa = podatki, ne dva engine-a.  
- Baza je končana, da lahko narediš **svojo** igro.

---

## Opombe za učitelja

- Močnejši: runner z rahlim “jitter” ali walker, ki se ne seka med seboj (ločevanje) — opcijsko.  
- Šibkejši: oba tipa seek, samo različna `speed`/`hp`/`color`.  
- Preveri ustno: naj razložijo `hypot` pri seek.  
- Brez Unreal/Unity primerov.
