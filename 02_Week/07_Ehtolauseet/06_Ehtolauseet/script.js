function isEven(luku) {
  if (luku % 2 == 0) {
    console.log("Numero on parillinen!");
    return true;
  } else {
    console.log("Numero on pariton!");
    return false;
  }
}

isEven(4);
isEven(7);

/* 
Kirjoita funktio nimeltä isEven:
Ota parametrina luku.
Palauta true, jos luku on parillinen, tai false, jos se on pariton.
Kutsu funktiota luvuilla kuten 4 ja 7, ja tulosta "Numero on pariton!" tai "Numero on parillinen!" tuloksen perusteella.
*/
