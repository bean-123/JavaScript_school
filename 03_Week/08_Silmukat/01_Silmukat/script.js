function logOddNumbers() {
  let x = 1;
  while (x <= 100) {
    if (x % 2 !== 0) {
      console.log(x);
    }
    x++;
  }
}

logOddNumbers();

//Tee funktio nimeltä logOddNumbers:
// - Se tulostaa konsoliin kaikki parittomat numerot 1 ja 100 välillä.
// Eli 1, 3, 5, 7, 9, 11 jne. lukuun 99 asti.
