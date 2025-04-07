function checkFoxLover(age, likesFoxes) {
  if (age >= 18 && likesFoxes == true) {
    return "Olet aikuinen, joka tykkää ketuista!";
  } else if (age >= 18 && likesFoxes == false) {
    return "Olet aikuinen joka ei ole kettufani, mutta se on ok!";
  } else if (age < 18 && likesFoxes == true) {
    return "Olet lapsi joka tykkää ketuista!";
  } else {
    return "Olet lapsi joka ei tykkää ketuista..";
  }
}

console.log(checkFoxLover(20, true));
console.log(checkFoxLover(18, false));
console.log(checkFoxLover(12, true));
console.log(checkFoxLover(10, false));

/* 
Kirjoita funktio nimeltä checkFoxLover:
Ota kaksi parametria: age ja likesFoxes.
Jos ikä on 18 tai enemmän:
Tarkista, onko likesFoxes tosi.
Jos on, palauta "Olet aikuinen, joka tykkää ketuista!"
Muussa tapauksessa palauta "Et ole kettufani, mutta se on ok!"
Kutsu funktiota eri ikä- ja mieltymysyhdistelmillä. Varmista, että ohjelma toimii halutulla tavalla. 
I DID AN EXTRA STEP IN SORRY*/
