function askToContinue() {
  let numbers = [];
  let sum = 0;

  //While true, it keeps asking the same question
  while (true) {
    let input = prompt("Give me a number: ");

    //Checks that input is not an empty or not a number
    if (input === null || isNaN(input)) {
      alert("That was not a number, try again: ");
      continue;
    }

    //Transforms input into a number form, and stores it in veriable number + adds numbers to numbers and sum
    let number = parseInt(input);
    numbers.push(number);
    sum += number;

    let input2 = prompt("Would you like to continue giving numbers? y/n : ");

    //If input2 is no it stops and if its not a yes it will give an alert
    if (input2 == "n") {
      break;
    } else if (input2 !== "y") {
      alert("Please input y or n");
      continue;
    }
  }

  //Checks that there are numbers stored in numbers array, and then devides it with sum to get average
  if (numbers.length > 0) {
    let average = sum / numbers.length;
    console.log(`The average of all the numbers ${numbers} is ${average}`);
  }
}

askToContinue();

/* Tee funktio askToContinue, joka 
1. Kysyy käyttäjältä yhtä numeroa. 
2. Tämän jälkeen ohjelma kysyy: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
3. Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. 
4. Jos vastaus on 'e', ohjelma lopettaa. 
5. Lopetettuaan ohjelma laskee ja näyttää konsolissa kaikkien syötettyjen numeroiden keskiarvon.*/

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
