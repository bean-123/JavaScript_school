function findFox(hasFox, foxName) {
  if (hasFox && foxName == "Kikka") {
    return "Kikka-kettu on täällä!";
  } else {
    return "No foxes found.";
  }
}

console.log(findFox(true, "Kikka"));
console.log(findFox(true, "Amy"));
console.log(findFox(false, "Anna"));

/* 
Kirjoita funktio nimeltä findFox:
Ota kaksi parametria: hasFox ja foxName.
Jos hasFox on tosi JA foxName on "Kikka", palauta "Kikka-kettu on täällä!"
Muussa tapauksessa palauta "No foxes found."
Kutsu funktiota eri ketunnimillä ja hasFox arvoilla.
*/
