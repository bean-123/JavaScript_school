/* Tämä tehtävä on vapaaehtoinen.

Luo Magic 8-Ball -ohjelma, joka matkii klassista kohtalon ennustamisen lelua. 
Käyttäjä syöttää kyllä-tai-ei -kysymyksen, ja ohjelma antaa satunnaisen vastauksen 8-pallosta. 
Määrittele itse vastausvaihtoehdot. 
Tarvitset tähän tehtävään myös html-sivua ja sinne prompt() kysymyksen esittämiseen. */

let question = prompt("Kysy kyllä tai ei kysymys: ");

let answers = [
  "Ehdottomasti!",
  "Ei todellakaan!",
  "Kyllä.",
  "Ei.",
  "Ehkä..",
  "Ehkä myöhemmin.",
  "En osaa sanoa varmasti.",
];

let randomIndex = Math.floor(Math.random() * answers.length);
let answer = answers[randomIndex];

alert("Kysymyksesi: " + question + "\nVastaus: " + answer);
