const checkAnimal = (animalType) =>
  animalType == "fox"
    ? "Sinulla on fiksu seuralainen!"
    : "Ei kettu, mtta silti kiva!";

console.log(checkAnimal("fox"));
console.log(checkAnimal("cat"));

/* ANOTHER WAY OF DOING THE TASK
function checkAnimal(animalType){
    return animalType ? "Sinulla on fiksu seuralainen" : "Ei kettu, mutta silti kiva!"
}*/

/* 
Kirjoita funktio nimeltä checkAnimal:
Ota parametri animalType.

Käytä ternary operatoria (eli toinen tapa funktiosta) palauttamaan:
- "Sinulla on fiksu seuralainen!" jos animalType on "fox".
- "Ei kettu, mutta silti kiva!" muussa tapauksessa.

Kutsu funktiota arvoilla kuten "fox" ja "cat".
*/
