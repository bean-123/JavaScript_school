function sumAndAverage() {
  let trackNumbers = 0;
  let numbers = [];
  let sum = 0;

  for (let x = 0; x < 10; x++) {
    let input = prompt(`Please give ${trackNumbers}/10 numbers`);

    if (isNaN(input)) {
      alert("Please give a number");
      continue;
    }

    let numinput = parseInt(input);
    trackNumbers++;
    numbers.push(numinput);
    sum += numinput;
  }

  if (numbers.length > 0) {
    let average = sum / numbers.length;
    // ... are used to spread the elements of an array into individual arguments for a function
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);

    console.log(
      `All the numbers sum: ${sum}, average: ${average}, min: ${min} and max: ${max}`
    );
  }
}

sumAndAverage();

/* 
Kirjoita funktio nimeltä sumAndAverage:
- Pyydä käyttäjältä 10 numeroa
- Laske ja lokita konsoliin: 
    - Kaikkien numeroiden summa.
    - Annettujen numeroiden keskiarvo.
    - Suurin ja pienin numero
*/
