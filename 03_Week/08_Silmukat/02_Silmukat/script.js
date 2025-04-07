function logEvenNumbers() {
  let x = 1;
  while (x <= 100) {
    if (x % 2 == 0) {
      console.log(x);
    }
    x++;
  }
}

logEvenNumbers();

// Tee funktio logEvenNumbers, joka:
// - tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä tällä kaavalla:  2, 98, 4, 96, ..., 50.
// - Tulosta luvut samalle riville konsolissa.
