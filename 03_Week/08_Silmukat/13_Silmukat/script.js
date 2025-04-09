function validatePassword() {
  let password = "oikein123";

  while (true) {
    let input = prompt("Syötä salsana: ");

    if (input !== password) {
      alert("Yritä uudelleen!");
      continue;
    }
    if (input === password) {
      console.log("Salasana oikein!");
      break;
    }
  }
}
validatePassword();

/* 
Kirjoita funktio nimeltä validatePassword:
- Käytä silmukkaa salliaksesi käyttäjän syöttää salasana.
- Jos salasana on "oikein123", tulosta: "Salasana oikein!" ja poistu silmukasta.
- Jos salasana on väärä, pyydä käyttäjää uudelleen viestillä: "Yritä uudelleen!".
*/
