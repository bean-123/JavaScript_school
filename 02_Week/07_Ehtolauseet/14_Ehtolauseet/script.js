function rainAdvice(isRaining) {
  return isRaining ? "Pysy sisällä" : "Nauti ulkoilmasta!";
}

console.log(rainAdvice(true));
console.log(rainAdvice(false));

/* ANOTHER WAY OF DOING THE TASK
const rainAdvice = (isRaining) =>
  isRaining ? "Pysy sisällä" : "Nauti ulkoilmasta!";

console.log(rainAdvice(true));
console.log(rainAdvice(false)); */

/* 
Kirjoita funktio nimeltä rainAdvice:
Ota parametri isRaining.
Käytä ternary operatoria palauttamaan:
- "Pysy sisällä" jos isRaining on tosi.
- "Nauti ulkoilmasta!" muussa tapauksessa.
Kutsu funktiota eri arvoilla isRaining.
*/
