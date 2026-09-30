# Ocenjevanje — okvir (P16, lastna igra + semester)

To **ni** uradni pravilnik fakultete; je pregleden okvir, da veš, kaj se gleda. Učitelj lahko prilagodi uteži.

---

## Kaj se ocenjuje skozi semester

| Sklop | Kaj dokazuješ |
|-------|----------------|
| Tedni 01–08 | Redno delo, commit-i, tedenski izhodi, **skupna baza** ob tednu 8 |
| Lastna igra | Igrivost, obvladovanje osnove, zasnova, asseti, dokumentacija, demo |
| AI praksa | Cikel generate → … → explain; spremembe; poštena refleksija |

Brez skupne baze (teden 8) je projekt težji, ni pa izgovor za črno skrinjico.

---

## Lastna igra — merila (predlog)

| Merilo | Približna teža | Kaj je “dovolj” | Kaj je šibko |
|--------|----------------|-----------------|--------------|
| **Igrivost** | visoka | Dá se igrati; pravila so jasna; krog se sklene | Crash, ni cilja, “demo scene” brez igre |
| **Tehnika** | visoka | Loop, vhod, trki, entitete — tvoja koda, razložljivo | Copy Phaser/Unity; ne veš, kaj je `dt` |
| **Zasnova (GDD)** | srednja | Mehanike z vhod/pravilo/feedback; GDD ≈ igra | Prazen GDD ali roman, ki ni v kodi |
| **Asseti** | srednja | `assets/`, vsaj sprite *ali* zvok + licenca | Samo kvadratki *ali* ukradeni asseti brez vira |
| **Dokumentacija + repo** | srednja | README z zagonom; smiselni commiti | “works on my machine”, en commit `final` |
| **Demo / zagovor** | visoka | 5–8 min, odgovori na kodo | Ne znaš pojasniti strel/trk/loop |
| **AI uporaba** | vpeto v zgornje | Spremembe + refleksija | Paste cele igre, laž o avtorstvu |

Uteži niso točke v sistemu — so **prioriteta**. Igrivost + razlaga kode običajno odločata.

---

## Lestvica (besedna, za orientacijo)

**Odlično** — ozka ideja, tekoča igra, jasna koda, asseti z viri, GDD živ, zagovor suveren, AI viden kot orodje.

**Prav dobro** — igrivo, osnova obvladana, manjši robovi (HUD, en bug), dokumentacija v redu.

**Dobro** — baza + skromna lastna mehanika; vidi se trud; zagovor z luknjami.

**Zadostno** — teče vertical slice, GDD osnutek, šibki asseti ali README; razlaga delno.

**Nezadostno** — ne teče; napačen sklad (Unreal/Phaser); ni mogoče razložiti; očitno tuje delo brez predelave.

---

## Tedensko (01–08)

Vsak teden ima tabelo “opravil teden” v `labXX/README.md`. To je **formativno**: zamuda se da nadoknaditi, a teden 8 milestone mora stati pred (ali kmalu ob) začetku projekta.

---

## AI — rdeče črte

- Oddaja, ki je ne znaš spremeniti in razložiti, ni tvoja.  
- En prompt → cel projekt = neuspeh pri zagovoru, tudi če “izgleda kul”.  
- Dovoljeno: osnutki funkcij, debug, ideje mehanik — vedno **change + explain**.

Podrobnosti: [`../DIDAKTIKA-AI.md`](../DIDAKTIKA-AI.md).

---

## Demo — kaj pripraviti

1. 30 s: kaj igramo in kako se konča.  
2. 2–4 min: ti igraš (ali gledalec), pokažeš jedro.  
3. 1–2 min: odpri `update` / trk / entiteto — razloži.  
4. Vprašanja.

Časovnica 5–8 min; ne predvajaj trailera namesto igre.

---

## Posebni primeri

- **Delo v paru:** samo če učitelj dovoli; avtorstvo v README razdeljeno.  
- **Nova igra vs. baza:** ista merila.  
- **Dungeon Escape vs. zombie:** brez razlike v točkah.
