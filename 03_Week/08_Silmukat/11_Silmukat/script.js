function generateMultiplicationTable() {
  let number = 5;
  let x = 0;

  while (x < 10) {
    x++;
    let result = number * x;

    console.log(`${number} X ${x} = ${result}`);
  }
}

generateMultiplicationTable();

/* Kirjoita funktio nimeltä generateMultiplicationTable:
- Ota syötteenä luku (esim. 5).
- Käytä silmukkaa luodaksesi kertotaulun kyseiselle luvulle.
Tulosta taulu konsoliin.

Esimerkki luvulle 5:

5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50

*/
