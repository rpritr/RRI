# Teden 4 — Predavanje: trki (stene / entitete)

**Trajanje:** ~45–60 min.  
**Cilj:** študent loči *detekcijo* in *razrešitev* trka; igralec ne gre skozi vsaj eno oviro; sovražnik obstaja kot podatki (`x,y,w,h`), še brez AI.  
**Gradiva:** `slides.md`, `README.md`, tvoja igra (teden 3).

---

## 0. Odprtje (3 min)

- Clamp na rob platna **ni** trk z zidom v svetu — je omejitev koordinate.
- Danes: pravokotniki v prostoru, ki si “lastijo” piksle.
- Vprašanje: “Ali sta dva kvadrata v trku, če se samo dotikata po robu?”

---

## 1. AABB — Axis-Aligned Bounding Box (12–15 min)

Brez rotacije. Vsaka entiteta: `x, y, w, h` (levi-zgornji kot + velikost — isti dogovor kot starter).

**Prekrivanje** (ni trka, če obstaja ločitvena os):

```
a.x < b.x + b.w &&
a.x + a.w > b.x &&
a.y < b.y + b.h &&
a.y + a.h > b.y
```

Igralec, ovira, krogla in sovražnik so vsi pravokotniki. En `aabbOverlap` zadošča za cel semester.

**Detect ≠ resolve**

| Detect | Resolve |
|--------|---------|
| “Da, prekrivata se.” | “Potisni igralca ven / razveljavi premik.” |

Brez resolve: veš, da si v zidu, a še vedno si v zidu.

---

## 2. Razrešitev — preprosto in dovolj (10–12 min)

Na vaji naredimo **eno** razrešitev, po oseh:

1. Premakni `x`. Če `aabbOverlap` z zidom, razveljavi samo `x`.
2. Premakni `y`. Če prekrivanje, razveljavi samo `y`.

Tako igralec drsi ob zidu. Na tabli en zid in igralec, ki gre v desno.

Stene platna lahko ostanejo clamp; **ovira** je objekt v `walls[]`.

---

## 3. Entitete (8–10 min)

Sovražnik danes **ne sledi**. Mora pa obstajati kot entiteta:

```
{ x, y, w, h, color }  // kasneje: hp, kind, speed
```

Risanje: `fillRect` kot igralec (druga barva).  
To pripravi tedne 5–8 (projektili, škoda, seek).

Več ovir: tabela `walls`. Več sovražnikov kasneje: `enemies[]` — danes lahko **eden**.

---

## 4. Testiranje trkov (5 min)

- Igralec se zaleti z vseh štirih strani.  
- Diagonala v vogal.  
- “Ne gre skozi” je merilo, ne “izgleda ok približno”.

Debug: ob trku obarvaj oviro / izpiši `HIT`.

---

## 5. Vaja danes (5 min)

1. `aabbOverlap(a, b)`.  
2. Vsaj ena ovira + resolve.  
3. Dummy sovražnik (pozicija, velikost, risanje).  
4. AI sme predlagati **samo** overlap + osni resolve — ti vključiš in spremeniš velikost ovire.

---

## 6. Zapiranje (3 min)

- Detect je matematika; resolve je občutek.  
- Isti AABB bo teden 5 (krogla–zombie) in teden 6 (dotik → škoda).  
- AI sovražnika **ni** danes.

**Domača misel:** Krogla v tednu 5 bo isti pravokotnik `{x,y,w,h}` in isti `aabbOverlap`.

---

## Opombe za učitelja

- Rotacija, krogi in “potisk ven po najkrajši osi” niso del te vaje.
- Dungeon Escape: ovire = stene labirinta; ista funkcija `aabbOverlap`.
