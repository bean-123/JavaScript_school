function calculateAverageUntilZero() {
  let count = 0;
  let sum = 0;

  while (true) {
    let input = parseFloat(prompt("Syötä numeroita, syötä 0 lopettaaksesi: "));

    if (!isNaN(input)) {
      count++;
      sum += input;
    }

    if (input === 0) {
      break;
    }
  }
  let keskiarvo = sum / count;
  console.log(`Keskiarvo on ${keskiarvo}`);
}

calculateAverageUntilZero();

// Tee funktio calculateAverageUntilZero, joka pyytää käyttäjää syöttämään numeroita,
// kunnes käyttäjä syöttää 0.
// Tässä vaiheessa ohjelma lopettaa toimintansa.
// Lopetettuaan ohjelman tulisi laskea ja näyttää konsolissa kaikkien syötettyjen
// numeroiden keskiarvo.

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
