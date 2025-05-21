/* Tehtävä 1
Luo JavaScript-olio nimeltä `student`, jolla on ominaisuudet:
- `name`
- `age`
- `grade`
Muunna olio JSON-merkkijonoksi ja tulosta se konsoliin.
*/

let student = {
  name: "Amy",
  age: 29,
  grade: 100,
};

const jsonString = JSON.stringify(student);
console.log(jsonString);

/* Tehtävä 2
Ota Tehtävä 1:ssä luotu JSON-merkkijono ja muunna se takaisin JavaScript-olioksi.
Tulosta muunnetun olion `name`-ominaisuus.
*/

const personObject = JSON.parse(jsonString);
console.log(personObject);

/* Tehtävä 3
Luo taulukko nimeltä `classroom`, jossa jokainen alkio on opiskelijaa kuvaava olio.
Jokaisella opiskelijaoliolla tulee olla ominaisuudet `name`, `age` ja `grade`.
Muunna taulukko JSON-merkkijonoksi ja tulosta se konsoliin.
*/

let classroom = [
  { name: "Amy", age: 20, grade: 100 },
  { name: "Nathaniel", age: 90, grade: 120 },
  { name: "Eliott", age: 12, grade: 10 },
  { name: "New student", age: 25, grade: 50 },
];

const jsonString3 = JSON.stringify(classroom);
console.log(jsonString3);

/* Tehtävä 4
Ota Tehtävä 3:ssa luotu JSON-merkkijono, muunna se takaisin JavaScript-taulukoksi
ja tulosta kaikkien opiskelijoiden nimet.
*/

const personObject3 = JSON.parse(jsonString3);
console.log(personObject3);

/* Tehtävä 5
Luo olio nimeltä `weatherReport`, jossa on seuraavat ominaisuudet:
- `temperature`
- `humidity`
- `conditions` (esim. "Sunny", "Rainy")

Muunna olio JSON-merkkijonoksi ja tallenna se muuttujaan `weatherJSON`.
Sen jälkeen pura JSON takaisin olioksi ja tulosta `conditions`-ominaisuus.
*/

let weatherReport = {
  temperature: 28,
  humidity: 20,
  conditions: "Rainy",
};

const weatherJSON = JSON.stringify(weatherReport);
console.log(weatherJSON);

const weatherObject = JSON.parse(weatherJSON);
console.log(weatherObject.conditions);

/* Tehtävä 6
Määrittele taulukko nimeltä `movies`, jossa jokaisella elokuvalla on:
- `title`
- `director`
- `rating`

Muunna tämä taulukko JSON-merkkijonoksi ja pura se takaisin JavaScript-olioksi.
Tulosta kaikki elokuvien nimet, joiden arvosana on yli 8.
*/

let movies = [
  { title: "Hunger Games", director: "Gary Ross", rating: 10 },
  { title: "Avengers", director: "Joss Whedon", rating: 9 },
  { title: "Longlegs", director: "Oz Perkins", rating: 7 },
];

const moviesJSON = JSON.stringify(movies);
console.log(moviesJSON);
const moviesJS = JSON.parse(moviesJSON);

moviesJS.forEach((movie) => {
  if (movie.rating > 8) {
    console.log(movie.title);
  }
});

/* Tehtävä 7
Kirjoita funktio `filterHighRatedMovies(jsonString)`, joka:
- Ottaa vastaan JSON-merkkijonon, joka edustaa elokuvataulukkoa.
- Muuntaa sen JavaScript-taulukoksi.
- Palauttaa uuden taulukon, joka sisältää vain elokuvat, joiden arvosana on yli 8.
*/

function filterHighRatedMovies(jsonString) {
  const movies = JSON.parse(jsonString);

  return movies.filter((movie) => movie.rating > 8);
}

const highRatedMovies = filterHighRatedMovies(moviesJSON);
console.log(highRatedMovies);

/* Tehtävä 8
Määrittele olio nimeltä `shoppingCart`, jossa on:
- `items` (taulukko tuotteista, jokaisella on `name` ja `price`)
Muunna `shoppingCart` JSON-merkkijonoksi ja tulosta se konsoliin.
*/

let shoppingCart = {
  items: [
    { name: "Kahvi", price: 7 },
    { name: "Suklaa", price: 2 },
    { name: "Jäätelö", price: 3 },
    { name: "Leipä", price: 2 },
  ],
};

const shoppingCartJSON = JSON.stringify(shoppingCart);
console.log(shoppingCartJSON);

/* Tehtävä 9
Kirjoita funktio `totalCartValue(jsonString)`, joka:
- Saa parametrina ostoskorin JSON-merkkijonon.
- Muuntaa sen JavaScript-olioksi.
- Palauttaa ostoskorin kaikkien tuotteiden yhteenlasketun hinnan.
*/

function totalCartValue(jsonString) {
  const shoppingCartJS = JSON.parse(jsonString);
  let sum = 0;

  shoppingCartJS.items.forEach((item) => {
    sum += item.price;
  });
  return sum;
}
console.log("Total Cart Value: " + totalCartValue(shoppingCartJSON));

/* Tehtävä 10
Luo olio nimeltä `gameProgress`, jossa on:
- `level`
- `score`
- `livesRemaining`

Muunna olio JSON-merkkijonoksi ja tulosta se.
Pura JSON takaisin olioksi ja päivitä `score`-ominaisuutta lisäämällä siihen 100 pistettä.
Tulosta päivitetty olio.
*/

let gameProgress = {
  level: 48,
  score: 239,
  livesRemaining: 3,
};

const gameProgressJSON = JSON.stringify(gameProgress);
console.log(gameProgressJSON);

const gameProgressJS = JSON.parse(gameProgressJSON);
console.log(gameProgressJS);

gameProgress.score += 100;

console.log(gameProgress);
