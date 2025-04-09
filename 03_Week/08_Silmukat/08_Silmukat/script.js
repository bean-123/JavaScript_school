function findMinMax() {
  let allNumbers = [];

  let input = parseFloat(prompt("Montako numeroa haluat syöttää?"));

  let numbers = 0;
  while (numbers < input) {
    let input2 = prompt(`Number ${numbers + 1} out of ${input}`);

    if (isNaN(input2)) {
      alert("Please give a number");
      continue;
    }

    let numinput = parseFloat(input2);
    allNumbers.push(numinput);
    numbers++;
  }

  if (allNumbers.length > 0) {
    let min = Math.min(...allNumbers);
    let max = Math.max(...allNumbers);

    console.log(
      `Smallest number you typed was ${min} and the biggest was ${max}`
    );
  }
}

findMinMax();

/* 
Kirjota funktio nimeltä findMinMax:
- Kysy käyttäjältä kuinka monta numeroa he haluavat antaa. 
- Sen jälkeen pyydä käyttäjältä heidän haluamansa määrä numeroita. 
- Kun numerot on syötetty päättele ja tulosta konsoliin:
    - Pienin numero.
    - Suurin numero. 
*/
