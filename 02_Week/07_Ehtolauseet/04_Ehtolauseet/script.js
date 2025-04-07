function canVote(ikä) {
  if (ikä >= 18) {
    console.log("Saat äänestää");
  } else {
    console.log("Et saa vielä äänestää");
  }
}

canVote(18);
canVote(7);
canVote(80);

/* 
Kirjoita funktio nimeltä canVote:
Ota ikä parametrina.
Palauta true, jos ikä on 18 tai enemmän, muuten false.
Tulosta "Saat äänestää" tai "Et saa vielä äänestää" funktion palauttaman tuloksen perusteella.
*/
