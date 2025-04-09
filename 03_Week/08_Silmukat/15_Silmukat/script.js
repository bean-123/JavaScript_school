function askFiveTimes() {
  let words = [];
  let times = 0;

  while (times < 5) {
    let input = prompt("Give me five words");

    // Check if user is just trying to press ok w/o typing anything, if its a number or its just empty(just spaces)
    if (input == null || !isNaN(input) || input.trim() === "") {
      alert("Input words");
      continue;
    }

    //If everything is OK then push the word to the array and add to the counter
    words.push(input);
    times++;
  }
  console.log(words);
}
askFiveTimes();

/* Kysy käyttäjältä viisi kertaa jotain sanaa. Jos käyttäjä painaa vain "OK" ilman syötettä (eli antaa tyhjän vastauksen), ohita se. 

Tulosta lopuksi konsoliin kaikki annetut sanat. 
 */
