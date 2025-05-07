/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `library`, joka edustaa kirjakokoelmaa.
Jokaisella kirjalla tulee olla ominaisuudet `title` (otsikko), `author` (kirjoittaja) ja `yearPublished` (julkaisuvuosi).
Lisää kokoelmaan vähintään kaksi kirjaoliota.
*/

const library = [
  { title: "Fourth Wing", author: "Rebecca Yarros", yearPublished: 2020 },
  { title: "Iron Flame", author: "Rebecca Yarros", yearPublished: 2023 },
  { title: "Onyx Storm", author: "Rebecca Yarros", yearPublished: 2025 },
];

/* Tehtävä 2
Hae `library`-kokoelman ensimmäisen kirjan `title` ja tulosta se konsoliin.
Muokkaa toisen kirjan `yearPublished` uudeksi vuodeksi ja tulosta päivitetty kirja konsoliin.
*/

console.log("Ensimmäisen kirjan nimi", library[0].title);
library[0].yearPublished = 2023; // muokataan vuotta
console.log("Ensimmäisen kirjan julkaisuvuosi", library[0].yearPublished);

/* Tehtävä 3
Käytä piste-notaatiota lisätäksesi uuden ominaisuuden `genres` (merkkijonotaulukko) ensimmäiseen kirjaan `library`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-tyyppisen ominaisuuden `isAvailable`, joka kertoo onko kirja saatavilla.
*/

library[0].genres = ["Fantasy", "Romance"];
console.log(library[0]);

/* Tehtävä 4
Määrittele konstruktori-funktio nimeltä `Book`, joka luo uusia kirjoja, joilla on `title`, `author`, `yearPublished` ja `genres`.
Luo uusi kirjaolio `Book`-konstruktorilla ja lisää se `library`-kokoelmaan.
*/

function Book(title, author, yearPublished, genres) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.genres = genres;
}
let book1 = new Book("A Court of Thorns and Roses", "Sarah J. Maas", 2015, [
  "Fantasy",
  "Romance",
]);

library.push(book1);

console.log(library);

/* Tehtävä 5
Kirjoita funktio nimeltä `createBook`, joka ottaa parametreina `title`, `author`, `yearPublished` ja `genres` (taulukko).
Funktion tulee palauttaa uusi kirjaolio näillä ominaisuuksilla.
Testaa `createBook`-funktiota luomalla uusi kirja käyttäjän antamilla arvoilla ja tulosta se konsoliin.
*/

function createBook(title, author, yearPublished, genres) {
  return {
    title: title,
    author: author,
    yearPublished: yearPublished,
    genres: genres,
  };
}

let newBook = createBook("A Court of Mist and Fury", "Sarah J. Maas", 2016, [
  "Fantasy",
  "Romance",
]);

console.log(newBook);

/* Tehtävä 6
Muunna `library`-kokoelma JSON-merkkijonoksi ja tulosta se konsoliin.
Jäsennä JSON-merkkijono takaisin JavaScript-olioksi ja tulosta ensimmäisen kirjan `title` konsoliin.
*/

const jsonString = JSON.stringify(library);
console.log("JSON-merkkijono: ", jsonString);

const parsedLibrary = JSON.parse(jsonString);

console.log("Ensimmäisen kirjan nimi: ", parsedLibrary[0].title);

/* Tehtävä 7
Luo taulukko nimeltä `students`, jossa jokaisella oppilaalla on `name`, `age` ja `grade`.
Tulosta niiden oppilaiden nimet, joiden arvosana on yli 90.
*/

const students = [
  { name: "Amy", age: 13, grade: 99 },
  { name: "Matti", age: 12, grade: 80 },
  { name: "Liisa", age: 7, grade: 30 },
  { name: "Tuomas", age: 15, grade: 91 },
];

students.forEach((student) => {
  if (student.grade > 90) {
    console.log(student.name);
  }
});

/* Tehtävä 8
Määrittele olio nimeltä `car`, jossa on ominaisuudet `brand`, `model`, `year` ja `isElectric`.
Käytä funktiota tarkistamaan onko auto sähköinen. Jos on, tulosta `"This car is eco-friendly!"`, muussa tapauksessa `"This car runs on fuel."`
*/

const car = {
  brand: "Tesla",
  model: "Model S",
  year: 2022,
  isElectric: true,
};

function checkCarType(car) {
  if (car.isElectric) {
    console.log("This car is eco-friendly!");
  } else {
    console.log("This car runs on fuel.");
  }
}

checkCarType(car);

/* Tehtävä 9
Luo `movies`-taulukko, jossa jokainen elokuva on olio, jolla on ominaisuudet `title`, `director` ja `rating`.
Kirjoita silmukka, joka tulostaa kaikkien niiden elokuvien otsikot, joiden arvio on yli 8.
*/

const movies = [
  { title: "Titanic", director: "Random", rating: 9 },
  { title: "Hunger Games", director: "Another", rating: 10 },
  { title: "Saw", director: "Noidea", rating: 6 },
];

movies.forEach((movie) => {
  if (movie.rating > 8) {
    console.log(movie.title);
  }
});

/* Tehtävä 10
Kirjoita funktio `findOldestCar`, joka ottaa vastaan taulukon auto-olioita ja palauttaa auton, jolla on varhaisin `year`.
*/

function findOldestCar(cars) {
  if (cars.length === 0) return null;

  let oldestCar = cars[0]; // compare the cars to the first car

  for (let i = 1; i < cars.length; i++) {
    // we are starting from 1 bc we already compare it to the first one
    if (cars[i].year < oldestCar.year) {
      // checks if the current car’s year is earlier to the oldestCar year
      oldestCar = cars[i]; // if the condition is true, we replace the current oldestCar with the new one
    }
  }
  return oldestCar;
}

/* Tehtävä 11
Määrittele `userProfiles`-taulukko, joka sisältää käyttäjäolioita.
Jokaisella käyttäjällä tulee olla `username`, `email` ja `isAdmin` -ominaisuudet.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne käyttäjät, jotka ovat ylläpitäjiä.
*/

const userProfiles = [
  { username: "bean", email: "amy.platt@hotmail.com", isAdmin: true },
  { username: "NOVAS", email: "novas@gmail.com", isAdmin: false },
  { username: "loverboy", email: "loverboy@windowslive.com", isAdmin: true },
];

function areAdmin(users) {
  return users.filter((user) => user.isAdmin === true); // filter loops through each user in the array
}
console.log(areAdmin(userProfiles));

/* Tehtävä 12
Määrittele taulukko nimeltä `orders`, jossa jokaisella tilauksella on `orderId`, `customerName`, `totalAmount` ja `status` ("pending" tai "completed").
Kirjoita funktio, joka palauttaa vain valmiit tilaukset.
*/

const orders = [
  { orderId: 1234, customerName: "Amy", totalAmount: 250, status: "completed" },
  {
    orderId: 12225,
    customerName: "Eliott",
    totalAmount: 80,
    status: "pending",
  },
  {
    orderId: 8871,
    customerName: "Nathaniel",
    totalAmount: 430,
    status: "completed",
  },
];

function completedOrders(orders) {
  return orders.filter((order) => order.status === "completed");
}

console.log(completedOrders(orders));

/* Tehtävä 13
Luo olio nimeltä `smartphone`, jolla on ominaisuudet `brand`, `model`, `batteryLife` ja `is5GEnabled`.
Kirjoita funktio, joka tulostaa `"This phone supports 5G!"` jos `is5GEnabled` on `true`, muussa tapauksessa tulostaa `"This phone does not support 5G."`
*/

let smartphone = {
  brand: "iPhone",
  model: "13 Plus",
  batteryLife: 80,
  is5GEnabled: true,
};

function checkPhone(smartphone) {
  if (smartphone.is5GEnabled === true) {
    console.log("This phone supports 5G!");
  } else {
    console.log("This phone does not support 5G");
  }
}
checkPhone(smartphone);

/* Tehtävä 14
Määrittele olio nimeltä `fox`, jolla on ominaisuudet `name`, `age` ja `habitat`.
Kirjoita funktio, joka tulostaa `"This fox is young"` jos ikä on alle 3, ja `"This fox is an adult"` jos 3 tai enemmän.
*/

const fox = { name: "Cairo", age: 5, habitat: "bed" };

function isYoung(fox) {
  if (fox.age < 3) {
    console.log("This fox is young");
  } else {
    console.log("This fox is an adult");
  }
}
isYoung(fox);

/* Tehtävä 15
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `position` ja `salary`.
Kirjoita funktio, joka laskee kaikkien työntekijöiden yhteenlasketun palkan.
*/

const employees = [
  { name: "Amy", position: "Boss", salary: 5000 },
  { name: "Eliott", position: "Customer service", salary: 2000 },
  { name: "Nathaniel", position: "Social media", salary: 4500 },
];

function salarySum(employees) {
  return employees.reduce((total, employee) => total + employee.salary, 0);
}

console.log(salarySum(employees));
