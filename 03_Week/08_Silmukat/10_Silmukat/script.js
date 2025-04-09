function countdownTimer() {
  let countDown = 10;

  while (countDown >= 0) {
    console.log(countDown);
    countDown -= 1;
  }
  console.log("Aika loppui!");
}

countdownTimer();

/* 
Kirjoita funktio nimeltä countdownTimer:
- Ota syötteenä luku (esim. 10) ja simuloi lähtölaskenta konsolissa.
- Tulosta jokainen luku laskevassa järjestyksessä nollaan asti
- Lopuksi tulosta: "Aika loppui!".
*/
