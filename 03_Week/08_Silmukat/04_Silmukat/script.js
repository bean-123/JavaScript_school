function countEvenNumbers() {
  let evenCount = 0;

  for (let x = 0; x < 20; x++) {
    let input = prompt(`Syötä luku ${x + 1}/20`);
    let number = parseInt(input);

    //Checks that it is a valid number and that it is even
    if (!isNaN(number) && number % 2 === 0) {
      evenCount++;
    }
  }
  console.log(`Parillisia lukuja: ${evenCount}`);
}
countEvenNumbers();

// Tee funktio countEvenNumbers, joka pyytää käyttäjää syöttämään 20 lukua.
// Kun kaikki luvut on syötetty, ohjelman tulisi näyttää konsolissa montako
// näistä luvuista on parillisia.
// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
