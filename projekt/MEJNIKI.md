# Mejniki — lastna igra

Projektna faza je **preostanek semestra** po tednu 8 (ure predavanj + vaj po urniku). Delo vodi po štirih mejnikih, ne po “tednih polisha skupne igre”.

Datume uskladi z učiteljem / Arnes učilnico. Spodaj je **vrstni red in izhod**, ne koledar.

```
načrt  →  vertical slice  →  polish  →  demo
```

---

## Mejnik 1 — Načrt (design)

**Cilj:** vedeti, kaj gradiš, preden se izgubiš v kodi.

- [ ] Izbira poti: baza tedna 8 **ali** nova Canvas igra ([BRIEF.md](BRIEF.md)).
- [ ] Elevator pitch (2–3 stavki).
- [ ] 4–6 jedrnih mehanik v tabeli **vhod → pravilo → feedback**.
- [ ] Win / lose / dolžina seje.
- [ ] Seznam “ne bom delal” (plan B).
- [ ] GDD osnutek oddan/posodobljen.

**Izhod:** učitelj (ali ti v dnevniku) lahko v 2 minutah pove, kaj je igra.

Če je ideja preširoka: reži na **eno** jedrno zanko.

---

## Mejnik 2 — Vertical slice

**Cilj:** igriv **najkrajši** krog, ki je že igra — ne vsi nivoji, ne vsi asseti.

Mora teči:

- start (lahko tipka / klik),
- jedrna mehanika (tista, zaradi katere je igra tvoja),
- neuspeh ali uspeh,
- restart.

Še vedno Canvas + vanilla JS. Loop / input / trki / entitete vidni v kodi.

**Izhod:** sošolec zaigra 1–2 minuti brez tvoje razlage ob ramenu (README sme pomagati).

---

## Mejnik 3 — Polish (asseti + občutek)

**Cilj:** kompetenca assetov + berljivost — brez razbijanja slice-a.

- [ ] Mapa `assets/` ločena od kode.
- [ ] Vsaj en sprite **ali** en zvok; priporočeno oboje.
- [ ] Vir in licenca v README (in GDD §10).
- [ ] HUD / stanja berljiva; 1–2 občutka (shake, flash, jasen game over) — ne 20 efektov.
- [ ] Ni novih velikih mehanik, ki ogrozijo demo.

**Izhod:** igra izgleda in/ali zveni namerno, ne samo kot teden 4 kvadratki — in še vedno se zažene.

---

## Mejnik 4 — Demo + dokumentacija

**Cilj:** ocenljiva oddaja.

- [ ] README končen (zagon, kontrole, avtorstvo, omejitve).
- [ ] GDD usklajen s tem, kar je **res** v igri.
- [ ] AI refleksija ([BRIEF.md](BRIEF.md)).
- [ ] Repo čist (`.gitignore`, smiselni commiti).
- [ ] Demo 5–8 min: pitch → gameplay → 1 kos kode na zagovor.

**Izhod:** oddaja po navodilih učilnice + predstavitev.

---

## Predlagana razporeditev ur (orientacija)

CPI: preostanek **48 h vaj** in **24 h predavanj** po 8 tednih gre v projekt (natančen razrez je odvisen od urnika). Grobo:

| Mejnik | Teža |
|--------|------|
| Načrt | kratko, a obvezno (prepreči napačen obseg) |
| Vertical slice | največji kos kode |
| Polish | omejen; asseti so tu |
| Demo / docs | ne podceni — GDD in zagovor štejeta |

Če zmanjka časa: reži polish in **dodatne** mehanike, ne vertical slice in ne razlage kode.

---

## Preveri pred vsakim mejnikom

1. Ali je še Canvas + vanilla JS?  
2. Ali znam razložiti loop / input / trk / entiteto?  
3. Ali AI nisem pustil kot edinega avtorja?
