function createWordPyramid() {
  let word = "koodi";
  let letter = word[0];

  while (letter < word) {
    console.log(letter);
    letter++;
  }
}

createWordPyramid();

/* 
Kirjoita funktio nimeltä createWordPyramid:
- Ota syötteenä sana (esim. "koodi").
- Käytä silmukkaa rakentaaksesi pyramidityylisen kuvion:
    Esimerkki sanalle "koodi":
    k
    ko
    koo
    kood
    koodi
*/
