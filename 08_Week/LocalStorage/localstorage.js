/* Tehtävä 1
Tallenna merkkijono `"Hello, LocalStorage!"` LocalStorageen avaimella `"message"`.
Hae se ja tulosta konsoliin.
*/

localStorage.setItem("message", "Hello, LocalStorage!");

const message = localStorage.getItem("message");
console.log(message);

/* Tehtävä 2
Luo olio `userSettings`, jossa on:
- `theme` ("dark" tai "light")
- `language` ("English", "Spanish" jne.)

Muunna se JSON-merkkijonoksi ja tallenna LocalStorageen.
Hae se, pura JSON ja tulosta `theme`-ominaisuus.
*/

let userSettings = {
  theme: "dark",
  language: "Spanish",
};

const userSettingsJSON = JSON.stringify(userSettings);
localStorage.setItem("userSettings", userSettingsJSON);

const storedSettingsJSON = localStorage.getItem("userSettings");
const userSettingsJS = JSON.parse(storedSettingsJSON);

console.log(userSettingsJS.theme);

/* Tehtävä 3
Määrittele taulukko `favoriteBooks`, jossa on vähintään kolme kirjaoliota (`title` ja `author`).
Tallenna taulukko LocalStorageen.
Hae ja pura se, sitten tulosta kaikkien kirjojen nimet.
*/

let favoriteBooks = [
  { title: "Fourth Wing", author: "Rebecca Yarros" },
  { title: "Iron Flame", author: "Rebecca Yarros" },
  { title: "Onyx Storm", author: "Rebecca Yarros" },
];

const favoriteBooksJSON = JSON.stringify(favoriteBooks);
localStorage.setItem("favBooks", favoriteBooksJSON);

const storedBooksJSON = localStorage.getItem("favBooks");
const favoriteBooksJS = JSON.parse(storedBooksJSON);

favoriteBooksJS.forEach((book) => {
  console.log(book.title);
});

/* Tehtävä 4
Kirjoita funktio `saveToLocalStorage(key, object)`, joka:
- Muuntaa olion JSONiksi.
- Tallentaa sen LocalStorageen annetulla avaimella.
Testaa tallentamalla olio ja hakemalla se.
*/

function saveToLocalStorage(key, object) {
  const olio = JSON.stringify(object);

  localStorage.setItem(key, olio);

  const storedOlioJSON = localStorage.getItem(key);
  const olioJS = JSON.parse(storedOlioJSON);

  console.log(olioJS);
}

/* Tehtävä 5
Kirjoita funktio `getFromLocalStorage(key)`, joka:
- Hakee arvon LocalStoragesta.
- Purkaa sen jos se on JSON.
- Tulostaa haetun arvon.
*/

function getFromLocalStorage(key) {
  const storedKey = localStorage.getItem(key);

  if (storedKey !== null) {
    if (storedKey.startsWith("{") || storedKey.startsWith("[")) {
      const keyJS = JSON.parse(storedKey);
      console.log(keyJS);
    } else {
      console.log(storedKey);
    }
  }
}

/* Tehtävä 6
Luo olio `userProfile`, jossa on:
- `username`
- `email`
- `preferences` (olio, jossa on `theme` ja `notifications`)

Tallenna se LocalStorageen.
Hae se ja päivitä `theme` arvoksi `"dark mode"`, sitten tulosta päivitetty olio.
*/

let userProfile = {
  username: "bean",
  email: "bean@gmail.com",
  preferences: { theme: "light", notifications: true },
};

const userProfileJSON = JSON.stringify(userProfile);
localStorage.setItem("userProfile", userProfileJSON);

const storedUserProfileJSON = localStorage.getItem("userProfile");
const userProfileJS = JSON.parse(storedUserProfileJSON);

userProfileJS.preferences.theme = "dark mode";

console.log(userProfileJS);

/* Tehtävä 7
Määrittele olio `shoppingList`, jossa on taulukko `items` (merkkijonoja).
Tallenna se LocalStorageen.
Kirjoita funktio `addItemToList(item)`, joka:
- Hakee `shoppingList` LocalStoragesta.
- Lisää uuden tuotteen.
- Tallentaa päivitetyn listan takaisin LocalStorageen.
- Tulostaa päivitetyn listan.
*/

let shoppingList = {
  items: [
    { item: "item 1" },
    { item: "item 2" },
    { item: "item 3" },
    { item: "item 4" },
  ],
};

const shoppingListJSON = JSON.stringify(shoppingList);
localStorage.setItem("shoppingList", shoppingListJSON);

function addItemToList(item) {
  const storedItemJSON = localStorage.getItem("shoppingList");
  const shoppingListJS = JSON.parse(storedItemJSON);

  shoppingListJS.items.push(item);

  localStorage.setItem("shoppingList", JSON.stringify(shoppingListJS));

  console.log(shoppingListJS);
}
addItemToList("item 5");

/* Tehtävä 8
Luo olio `counter`, jossa on:
- `count` (alkaa arvosta 0)
Tallenna se LocalStorageen.
Kirjoita funktio `incrementCounter()`, joka:
- Hakee counterin.
- Kasvattaa `count` arvoa yhdellä.
- Tallentaa päivitetyn counterin.
- Tulostaa uuden arvon.
*/

const counter = { count: 0 };

const counterJSON = JSON.stringify(counter);
localStorage.setItem("counter", counterJSON);

function incrementCounter() {
  const storedCounterJSON = localStorage.getItem("counter");
  const counterJS = JSON.parse(storedCounterJSON);

  counterJS.count += 1;

  localStorage.setItem("counter", JSON.stringify(counterJS));

  console.log("Counter count is: ", counterJS.count);
}
incrementCounter();

/* Tehtävä 9
Luo taulukko `tasks`, jossa jokainen tehtävä on olio (`id`, `description`, `completed`).
Tallenna se LocalStorageen.
Kirjoita funktio `markTaskComplete(taskId)`, joka:
- Hakee `tasks` LocalStoragesta.
- Etsii annetulla ID:llä olevan tehtävän ja asettaa `completed` arvoksi `true`.
- Tallentaa päivitetyt tehtävät.
- Tulostaa päivitetyn listan.
*/

const tasks = [
  { id: 1, description: "task one", completed: false },
  { id: 2, description: "task two", completed: false },
  { id: 3, description: "task three", completed: true },
  { id: 4, description: "task four", completed: false },
];

const tasksJSON = JSON.stringify(tasks);
localStorage.setItem("tasks", tasksJSON);

function markTaskComplete(taskId) {
  const storedTasksJSON = localStorage.getItem(tasksJSON);
  const tasksJS = JSON.parse(storedTasksJSON);
}

/* Tehtävä 10
Kirjoita funktio `clearLocalStorage()`, joka poistaa kaiken LocalStorageen tallennetun datan.
Kutsu funktiota ja varmista että LocalStorage on tyhjä.
*/

function clearLocalStorage() {
  localStorage.clear();
}
