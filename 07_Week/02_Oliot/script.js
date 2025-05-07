/* Tehtävä 1
Luo olio `weather`, jossa on ominaisuudet `temperature`, `humidity` ja `condition` (esim. "Aurinkoinen", "Sateinen").
Kirjoita funktio, joka tulostaa `"Ota sateenvarjo!"` jos sää on sateinen.
*/

const weather = {
  temperature: 10,
  humidity: 45,
  condition: "Aurinkoinen",
};

function checkWeather() {
  if (weather.condition === "Sateinen") {
    console.log("Ota sateenvarjo!");
  } else {
    console.log("Nauti ilmasta");
  }
}
checkWeather(weather);

/* Tehtävä 2
Määrittele olio nimeltä `shoppingCart`, joka sisältää taulukon tuotteista.
Jokaisella tuotteella on `name`, `price` ja `quantity`.
Kirjoita funktio, joka laskee kaikkien ostoskorin tuotteiden kokonaishinnan.
*/

const shoppingCart = [
  { name: "Milk", price: 2, quantity: 1 },
  { name: "Bread", price: 3, quantity: 2 },
  { name: "Pastries", price: 1, quantity: 3 },
];

function totalPrice(products) {
  let total = 0;
  for (let item of products) {
    total += item.price * item.quantity;
  }
  return total;
}

console.log("Kokonais hinta:", totalPrice(shoppingCart));

/* EXAMPLE 2
function totalPrice(cart) {
  return cart.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
}
*/

/* Tehtävä 3
Luo taulukko nimeltä `restaurants`, jossa jokainen ravintola on olio, jolla on ominaisuudet `name`, `cuisineType` ja `rating`.
Kirjoita funktio, joka palauttaa vain ne ravintolat, joiden arvio on 4 tai enemmän.
*/

const restaurants = [
  { name: "Koti pizza", cuisineType: "Pizza", rating: 8 },
  { name: "McDonalds", cuisineType: "Fast food", rating: 3 },
  { name: "Olive Garden", cuisineType: "Greek", rating: 10 },
];
function ratings(restaurants) {
  const result = [];
  for (let restaurant of restaurants) {
    if (restaurant.rating >= 4) {
      result.push(restaurant);
    }
  }
  return result;
}
console.log(ratings(restaurants));

/*
 EXAMPLE WHICH IS SHORTER:

function ratings(restaurants) {
    return restaurants.filter(restaurant => restaurant.rating >= 4);
}
*/

/* Tehtävä 4
Määrittele olio nimeltä `bankAccount`, jossa on ominaisuudet `accountHolder`, `balance` ja `transactions` (numeroiden taulukko).
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/

const bankAccount = {
  accountHolder: "Amy Platt",
  balance: 1200,
  transactions: [100, -200, 500, 170, 30],
};

function balance(account) {
  const transactionsTotal = account.transactions.reduce(
    (total, transaction) => total + transaction,
    0
  );
  return account.balance + transactionsTotal;
}

console.log(balance(bankAccount));

/*EXAMPLE 2 

function finalBalance(acc) {
  return acc.balance + acc.transactions.reduce((sum, t) => sum + t, 0);
}
*/

/* Tehtävä 5
Luo taulukko `students`, jossa jokaisella opiskelijalla on `name`, `scores` (numeroiden taulukko) ja `averageScore` (aluksi null).
Kirjoita funktio, joka laskee ja päivittää kunkin opiskelijan `averageScore`-arvon.
*/

const students = [
  { name: "Amy", scores: [45, 30, 15], averageScore: null },
  { name: "Eliott", scores: [15, 70, 25], averageScore: null },
  { name: "Nathaniel", scores: [10, 50, 5], averageScore: null },
];

function totalScores(students) {
  for (let student of students) {
    const totalScore = student.scores.reduce(
      (total, score) => total + score,
      0
    );
    const averageScore = totalScore / student.scores.length; // Calculate the average
    student.averageScore = averageScore;
  }
  return students;
}
console.log(totalScores(students));

/* Tehtävä 6
Määrittele taulukko nimeltä `courses`, jossa jokaisessa kurssissa on `courseName`, `instructor` ja `studentsEnrolled`.
Kirjoita funktio, joka tulostaa niiden kurssien nimet, joissa on yli 30 opiskelijaa.
*/

const courses = [
  {
    courseName: "Web Development",
    instructor: "Laura",
    studentsEnrolled: [
      "Amy",
      "Tomas",
      "Mike",
      "Lina",
      "Chris",
      "Jade",
      "Leo",
      "Sophia",
      "Noah",
      "Emma",
      "Ava",
      "Liam",
      "Mia",
      "Zoe",
      "Max",
      "Ella",
      "Ethan",
      "Olivia",
      "Ben",
      "Chloe",
      "Jack",
      "Nora",
      "Lucas",
      "Isla",
      "Owen",
      "Aria",
      "Caleb",
      "Lily",
      "Mason",
      "Grace",
      "Elijah",
    ],
  },
  {
    courseName: "Graphic Design",
    instructor: "Paavo",
    studentsEnrolled: [
      "Derek",
      "Sam",
      "Katie",
      "Brian",
      "Mei",
      "Jamal",
      "Hugo",
      "Nina",
      "Alex",
      "Sophia",
      "Noah",
      "Emma",
      "Max",
      "Ella",
      "Ethan",
      "Olivia",
      "Ben",
      "Chloe",
      "Jack",
      "Nora",
      "Lucas",
      "Isla",
      "Owen",
      "Aria",
    ],
  },
  {
    courseName: "Cybersecurity Basics",
    instructor: "Damien",
    studentsEnrolled: [
      "Tariq",
      "Julia",
      "Fern",
      "Silas",
      "Yuki",
      "Ravi",
      "Luca",
      "Cleo",
      "Ray",
    ],
  },
];

function popularCourses(courses) {
  let result = [];
  for (let course of courses) {
    if (course.studentsEnrolled.length > 30) {
      result.push(course);
    }
  }
  return result;
}

console.log(popularCourses(courses));

/*EXAMPLE 2

function bigCourses(cs) {
  cs.forEach((c) => {
    if (c.studentsEnrolled > 30) {
      console.log(c.courseName);
    }
  });
}
*/

/* Tehtävä 7
Luo olio `pet`, jossa on ominaisuudet `species`, `name` ja `isVaccinated`.
Kirjoita funktio, joka palauttaa `"Rokotusta tarvitaan"` jos lemmikkiä ei ole rokotettu.
*/

const pet = { species: "Cat", name: "Cairo", isVaccinated: true };

function checkIfVaccinated(pet) {
  if (pet.isVaccinated === false) {
    // can do it like this aswell if (!pet.isVaccinated)
    return "Rokotusta tarvitaan!";
  } else {
    return "Kaikki kunnossa";
  }
}
console.log(checkIfVaccinated(pet));

/* Tehtävä 8
Määrittele olio nimeltä `city`, jossa on ominaisuudet `name`, `population` ja `landmark`.
Kirjoita funktio, joka tulostaa `"Tämä on suuri kaupunki!"` jos väkiluku ylittää 1 000 000.
*/

const city = { name: "Helsinki", population: 1500000, landmark: "Suomenlinna" };

function checkIfbigCity(city) {
  if (city.population > 1000000) {
    console.log("Tämä on suuri kaupunki!");
  } else {
    console.log("Tämä ei ole suuri kaupunki");
  }
}
checkIfbigCity(city);

/* Tehtävä 9
Luo taulukko `transactions`, jossa jokainen tapahtuma on olio, jolla on `type` ("credit" tai "debit") ja `amount`.
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/

const transactions = [
  { type: "credit", amount: "1000" },
  { type: "debit", amount: "550" },
  { type: "debit", amount: "100" },
];

function fullAmount(transactions) {
  let resultAmount = 0;
  for (let transaction of transactions) {
    if (transaction.type === "credit") {
      resultAmount += transaction.amount;
    } else if (transaction.type === "debit") {
      resultAmount -= transaction.amount;
    }
  }
  return resultAmount;
}
console.log(fullAmount(transactions));

/*EXAMPLE 2

function calculateBalance(txns) {
  return txns.reduce((balance, t) => {
    return t.type === "credit" ? balance + t.amount : balance - t.amount;
  }, 0);
} 
*/

/* Tehtävä 10
Määrittele olio nimeltä `foxPack`, joka sisältää taulukon kettuolioita.
Jokaisella ketulla on `name`, `age` ja `furColor`.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne ketut, jotka ovat alle 2-vuotiaita.
*/

const foxPack = [
  { name: "Cairo", age: 1, furColor: "Dark Grey" },
  { name: "Kicki", age: 14, furColor: "White" },
  { name: "Daisy", age: 10, furColor: "Polkadot" },
];

function checkAge(foxPack) {
  return foxPack.filter((fox) => fox.age < 2);
}
console.log(checkAge(foxPack));

/* Tehtävä 11
Luo olio nimeltä `gameCharacter`, jolla on ominaisuudet `name`, `level`, `health` ja `inventory` (taulukko).
Kirjoita funktio, joka tulostaa hahmon koko varustelistan.
*/

const gameCharacter = {
  name: "Bean",
  level: 25,
  health: 100,
  inventory: ["book", "knife", "noodles"],
};

function fullInventory(gameCharacter) {
  console.log(`${gameCharacter.name} varusteet:`);
  gameCharacter.inventory.forEach((item) => {
    console.log("- " + item);
  });
}
fullInventory(gameCharacter);

/* Tehtävä 12
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `role` ja `workingHours`.
Kirjoita funktio, joka etsii ja tulostaa ne työntekijät, jotka työskentelevät yli 40 tuntia viikossa.
*/

const employees = [
  { name: "Amy", role: "Manager", workingHours: 38 },
  { name: "Nathaniel", role: "Customer service", workingHours: 50 },
  { name: "Eliott", role: "Sales", workingHours: 41 },
];

function noLife(list) {
  list.forEach((employees) => {
    if (employees.workingHours > 40) {
      console.log(employees.name);
    }
  });
}
noLife(employees);

/* Tehtävä 13
Luo taulukko `musicAlbums`, jossa jokaisella albumilla on `title`, `artist` ja `releaseYear`.
Kirjoita funktio, joka tulostaa ne albumit, jotka on julkaistu vuoden 2000 jälkeen.
*/

const musicAlbums = [
  { title: "Eternal Sunshine", artist: "Ariana", releaseYear: 2025 },
  { title: "Brandy", artist: "Looking Glass", releaseYear: 1990 },
  { title: "Seventeen Going Under", artist: "Sam Fender", releaseYear: 2022 },
  { title: "My Favourite Game", artist: "The Cardigans", releaseYear: 1998 },
  { title: "Oops i did it again", artist: "Birtney Spears", releaseYear: 2005 },
];

function newSoungs(albums) {
  albums.forEach((album) => {
    if (album.releaseYear > 2000) {
      console.log(album.title);
    }
  });
}

newSoungs(musicAlbums);

/* Tehtävä 14
Määrittele taulukko nimeltä `cars`, jossa jokaisella autolla on `brand`, `model` ja `horsepower`.
Kirjoita funktio, joka etsii ja palauttaa auton, jolla on suurin hevosvoimamäärä.
*/

const cars = [
  { brand: "Tesla", model: "X", horsepower: 200 },
  { brand: "Mustang", model: "GT Fastback", horsepower: 486 },
  { brand: "Toyota", model: "Camry", horsepower: 225 },
  { brand: "Ferrari", model: "F8 Tributo", horsepower: 710 },
];

function bestHorsepower(cars) {
  let mostHorsepower = cars[0];
  for (let i = 1; i < cars.length; i++)
    if (cars[i].horsepower > mostHorsepower.horsepower) {
      mostHorsepower = cars[i];
    }
  return mostHorsepower;
}
console.log(bestHorsepower(cars));

/* EXAMPLE 2 

function strongestCar(list) {
  return list.reduce((best, car) =>
    car.horsepower > best.horsepower ? car : best
  );
}
*/

/* Tehtävä 15
Luo taulukko `airports`, jossa jokaisella lentokentällä on `name`, `country` ja `flightsPerDay`.
Kirjoita funktio, joka etsii lentokentän, jolla on eniten lentoja päivässä.
*/

const airports = [
  {
    name: "Helsinki-Vantaa",
    country: "Finland",
    flightsPerDay: 350,
  },
  {
    name: "Atlanta, Georgia",
    country: "USA",
    flightsPerDay: 2700,
  },
  {
    name: "Dubai International Airport",
    country: "Dubai",
    flightsPerDay: 2500,
  },
  { name: "Haneda Tokyo", country: "Japan", flightsPerDay: 293 },
];

function mostFlights(airports) {
  let result = airports[0];
  for (let i = 1; i < airports.length; i++) {
    if (airports[i].flightsPerDay > result.flightsPerDay) {
      result = airports[i];
    }
    return result;
  }
}

console.log(mostFlights(airports));

/*EXAMPLE 2

function busiestAirport(list) {
  return list.reduce((max, ap) =>
    ap.flightsPerDay > max.flightsPerDay ? ap : max
  );
}
*/
