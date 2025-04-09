function createWordPyramid() {
  let word = "koodi";
  let sliced = "";

  for (let x = 0; x < word.length; x++) {
    sliced += word[x];
    console.log(sliced);
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
