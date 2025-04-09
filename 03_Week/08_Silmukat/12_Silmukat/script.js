function buildGroceryList() {
  let groceries = [];

  while (true) {
    let input = prompt("Insert items one by one: ");

    if (!isNaN(input)) {
      alert("Insert a valid item!");
      continue;
    }

    if (input == "valmis") {
      break;
    }

    groceries.push(input);
  }
  console.log(`Groceries: ${groceries}.`);
}

buildGroceryList();

/* 
Kirjoita funktio nimeltä buildGroceryList:
- Pyydä käyttäjää syöttämään ruokakauppaostoksia yksi kerrallaan.
- Lopeta, kun käyttäjä kirjoittaa "valmis".
Tulosta koko ostoslista konsoliin.
*/
