# Game Design Document — Canvas premikanje

## 1. Osnovni podatki

| Polje | Vsebina |
|-------|---------|
| Naslov igre | Canvas premikanje (delovni naslov) |
| Avtor / ekipa | Ni vpisano |
| Žanr | Preprost 2D prototip |
| Platforma | Spletni brskalnik (HTML Canvas in JavaScript) |
| Ciljna dolžina ene seje | Ni določena; prototip še nima končnega cilja |
| Datum / verzija GDD | 21. 10. 2026 / 1.0 |

## 2. Kratek opis

Igralec vodi modrega lika po igralnem polju s tipkami WASD, s tipko Shift pa začasno pospeši. Trenutna različica še nima sovražnikov, točk ali pogoja za zmago.

## 3. Tema

- Svet in ton: preprosto temno igralno polje.
- Referenčne igre: trenutno niso določene.
- Canvas omogoča sprotno risanje igralca in preprosto posodabljanje njegovega položaja.

## 4. Jedrna mehanika

| Mehanika | Vhod | Pravilo | Povratna informacija |
|----------|------|---------|----------------------|
| Premikanje in sprint | WASD, Shift | WASD premika lik v štiri smeri; diagonalno gibanje je normalizirano. Shift uporabi množilnik hitrosti 1,6. Lik ostane znotraj platna. | Lik se premika po platnu. |

## 5. Igralec

- Velikost: 32 × 32 pikslov; začetni položaj je na sredini platna.
- Hitrost: 220 pikslov na sekundo; med držanjem Shift se pomnoži z 1,6.
- Zdravje in orožje: še nista določena ali implementirana.
- Omejitev: igralec ne more zapustiti platna velikosti 800 × 450 pikslov.

## 6. Sovražniki in ovire

V trenutni različici jih še ni.

## 7. Napredek in težavnost

- Točke, valovi in stopnje težavnosti še niso implementirani.
- Zmaga ali poraz: trenutna različica nima pogoja za zmago ali poraz.

## 8. Stanja igre

Igra ima trenutno samo igralno stanje: na platnu je prikazan lik, ki ga igralec premika.

## 9. Uporabniški vmesnik

- Med igro: temno platno in moder lik.
- Navodilo na strani: premikanje s tipkami WASD in sprint s tipko Shift.
- Meni, rezultat in zaslon za konec igre še niso implementirani.

## 10. Asseti

Zunanji asseti niso uporabljeni. Platno, ozadje in lik so narisani s HTML Canvasom.

## 11. Tehnični okvir

- Datoteke: `index.html`, `style.css` in moduli v `js/` (`config.js`, `world.js`, `input.js`, `player.js`, `render.js`, `game.js`).
- Uporabljena sta HTML Canvas in osnovni JavaScript; zunanje knjižnice niso vključene.
- Znana omejitev: gre za začetni prototip z eno igralno mehaniko.

## 12. Nadaljnji razvoj

- Izhodišče: trenutni prototip premikanja.
- Naslednji koraki in končna ideja igre še niso določeni.
- Prva različica je končana, ko se igra zažene v brskalniku in se lik pravilno premika po platnu.

## 13. Tveganja in plan B

- Tveganje: igra še nima jasnega cilja ali dodatnih mehanik.
- Minimalna različica: ohraniti delujoče premikanje lika po platnu.

## 14. Dnevnik sprememb

| Datum | Sprememba |
|-------|-----------|
| 21. 10. 2026 | Izpolnjen GDD za trenutni prototip. |
