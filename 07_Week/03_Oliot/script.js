/* Tehtävä 1
Luo konstruktori-funktio `User`, joka ottaa parametreina `username` ja `email`.
Sen tulee luoda olio, jolla on nämä ominaisuudet sekä metodi `showInfo`, joka tulostaa käyttäjän tiedot.
Luo uusi käyttäjä ja kutsu `showInfo()`.
*/

function User(username, email) {
  this.username = username;
  this.email = email;
  this.showInfo = function () {
    console.log(`User: ${this.username} and email: ${this.email}`);
  };
}

const user1 = new User("bean", "amy.platt@hotmail.com");

user1.showInfo();

/* Tehtävä 2
Muokkaa tehtävää 1: Käytä ES6 `class`-syntaksia `User`-luokan määrittelyyn.
Lisää metodi `changeEmail(newEmail)`, joka päivittää käyttäjän sähköpostiosoitteen.
*/

class newUser {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  showInfo() {
    console.log(`User: ${this.username} and email: ${this.email}`);
  }

  changeEmail(newEmail) {
    this.email = newEmail;
    console.log(`Email updated: ${this.email}`);
  }
}

const user2 = new newUser("Amy", "amy@gmail.com");
user2.showInfo();
user2.changeEmail("bean@gmail.com");
user2.showInfo();

/* Tehtävä 3
Luo olio `theme`, jolla on ominaisuudet `name` (light tai dark) ja `isActive`.
Lisää HTML:ään painike. Kun sitä klikataan, vaihdetaan teema light ↔ dark ja päivitetään `isActive`-arvo.
*/

const theme = { name: "light", isActive: true };

document.getElementById("mode").addEventListener("click", () => {
  if (theme.name === "light") {
    theme.name = "dark";
    theme.isActive = false;
  } else {
    theme.name = "light";
    theme.isActive = true;
  }
  document.body.className = theme.name; //this updates it in the body
  console.log(theme);
});

/* Tehtävä 4
Luo olio `counter`, jolla on ominaisuus `value`.
Lisää HTML:ään kaksi painiketta: toinen kasvattaa `value`, toinen pienentää.
Näytä `value` HTML-elementissä ja päivitä se reaaliaikaisesti painikkeiden avulla.
*/

const counter = { value: 0 };

const display = document.getElementById("valueDisplay");
const decreaseBtn = document.getElementById("reduce");
const increaseBtn = document.getElementById("add");

function updateDisplay() {
  display.textContent = counter.value;
}

decreaseBtn.addEventListener("click", () => {
  counter.value--;
  updateDisplay();
});

increaseBtn.addEventListener("click", () => {
  counter.value++;
  updateDisplay();
});

updateDisplay();

/* Tehtävä 5
Luo olio `product`, jolla on `name`, `price` ja `quantity`.
Lisää HTML:ään syöttökenttä, johon käyttäjä voi syöttää ostettavan määrän.
Päivitä `quantity` ja näytä kokonaishinta dynaamisesti.
*/

const product = { name: "Cat toy", price: 5, quantity: 0 };

const displayQt = document.getElementById("displayQuantity");
const input = document.getElementById("userInput");
const total = document.getElementById("totalPrice");

function updateQuantity() {
  const value = parseInt(input.value) || 0; // get value from input filed n convert to integer

  product.quantity = value; //update quantity in the product object

  displayQt.textContent = product.quantity; //update quantity in the display

  total.textContent = product.price * product.quantity; //update total price
}

input.addEventListener("input", updateQuantity); //listen for input changes

updateQuantity();

/* Tehtävä 6
Määrittele konstruktori `Task`, joka ottaa `title`, `description` ja `completed`.
Lisää HTML:ään painike, jota painamalla lisätään uusi `Task`-olio `tasks`-taulukkoon ja näytetään se sivulla.
*/

function Task(title, description, completed) {
  this.title = title;
  this.description = description;
  this.completed = completed;
}

const tasks = [];

const titleInput = document.getElementById("titleInput");
const descInput = document.getElementById("descInput");
const completedInput = document.getElementById("completedInput");
const taskList = document.getElementById("taskList");
const taskBtn = document.getElementById("taskBtn");

function displayTask(task) {
  const div = document.createElement("div");
  div.className = "task" + (task.completed ? "completed" : "");
  div.innerHTML = `<strong>${task.title}</strong><br>${task.description}<br>${
    task.completed ? "Valmis" : "Kesken"
  }`;
  taskList.appendChild(div);
}

taskBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const desc = descInput.value.trim();
  const completed = completedInput.checked;

  if (title === "" || desc === "") return;

  const newTask = new Task(title, desc, completed);
  tasks.push(newTask);
  displayTask(newTask);

  //empty fields
  titleInput.value = "";
  descInput.value = "";
  completedInput.checked = false;
});

/* Tehtävä 7
Luo olio `weatherApp`, jossa on metodi `fetchWeather(city)`.
Käytä `fetch`-funktiota hakeaksesi säätietoja API:sta ja näytä ne HTML-elementissä.
(API: OpenWeather tai jokin muu ilmainen sää-API)
*/

const apiKey = "357d53ab958bb585ae2adf7274713cee";

const weatherApp = {
  fetchWeather(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Weather data fetch failed.");
        }
        return response.json();
      })
      .then((data) => {
        document.getElementById(
          "weatherInfo"
        ).textContent = `City: ${data.name}, Temperature: ${data.main.temp}°C`;
      })
      .catch((error) => {
        document.getElementById("weatherInfo").textContent =
          "Error: " + error.message;
      });
  },
};

document.getElementById("fetchBtn").addEventListener("click", () => {
  const city = document.getElementById("inputCity").value;
  weatherApp.fetchWeather(city);
});

/* Tehtävä 8
Luo konstruktori-funktio `Car`, joka ottaa `brand`, `model` ja `year`.
Lisää konstruktoriin metodi `age()`, joka laskee auton iän.
Luo uusi `Car`-olio ja näytä sen ikä verkkosivulla.
*/

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.age = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  };
}

const car1 = new Car("Rolls Royce", "Old", 1962);

document.getElementById(
  "carAge"
).textContent = `The car is ${car1.age()} years old.`;

/* Tehtävä 9
Luo taulukko `users`, jossa jokaisella käyttäjällä on `name` ja `score`.
Lisää HTML:ään painike, joka lajittelee käyttäjät pistemäärän mukaan laskevasti ja päivittää näkyvän listan.
*/

const users = [
  { name: "Amy", score: 200 },
  { name: "Eliott", score: 280 },
  { name: "Nathaniel", score: 190 },
  { name: "Guest", score: 50 },
];

function pointsBtn() {
  users.sort((a, b) => b.score - a.score);
  let output = "";
  users.forEach((user) => {
    output += user.name + "-" + user.score + "<br>";
  });
  document.getElementById("users").innerHTML = output;
}

document.getElementById("pointsBtn").addEventListener("click", pointsBtn);

/* Tehtävä 10
Luo olio `shoppingList`, jolla on taulukko `items`.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia tuotteita `items`-taulukkoon ja päivittää näkyvän listan.
*/

const shoppingList = {
  items: [],
};
document.getElementById("itemsBtn").addEventListener("click", function () {
  const item = document.getElementById("inputItem").value;
  shoppingList.items.push(item);

  document.getElementById("inputItem").value = ""; //clearing the field

  let output = "";
  shoppingList.items.forEach((item) => {
    output += `<li>${item}</li>`; //adding them as a list
  });

  document.getElementById("shoppingList").innerHTML = output;
});

/* Tehtävä 11
Luo taulukko `posts`, jossa jokaisella postauksella on `title`, `content` ja `likes`.
Lisää jokaisen postauksen viereen "Tykkää"-painike, joka kasvattaa `likes`-määrää ja päivittää näkymän.
*/

const posts = [
  { title: "One", content: "Picture", likes: 0 },
  { title: "Two", content: "Picture", likes: 0 },
  { title: "Three", content: "Picture", likes: 0 },
];

function renderPosts() {
  const container = document.getElementById("postsContainer");
  container.innerHTML = "";

  posts.forEach((post, index) => {
    //wrapper div for each post
    const postDiv = document.createElement("div");
    postDiv.className = "post";

    //create a title element
    const titleEl = document.createElement("h3");
    titleEl.textContent = post.title;

    //create the content paragraph
    const contentEl = document.createElement("p");
    contentEl.textContent = post.content;

    //likes display
    const likesEl = document.createElement("div");
    likesEl.textContent = `Likes: ${post.likes}`;

    //like button
    const likeBtn = document.createElement("button");
    likeBtn.textContent = "tykkää";

    //when button is clicked, increase likes n re-render list
    likeBtn.addEventListener("click", () => {
      posts[index].likes++;
      renderPosts();
    });
    //add everything to post div
    postDiv.appendChild(titleEl);
    postDiv.appendChild(contentEl);
    postDiv.appendChild(likesEl);
    postDiv.appendChild(likeBtn);
    //add post div to container
    container.appendChild(postDiv);
  });
}
renderPosts();

/* Tehtävä 12
Luo konstruktori-funktio `Employee`, jolla on `name`, `position` ja `salary`.
Lisää metodi `increaseSalary(percent)`, joka kasvattaa palkkaa annetulla prosentilla.
Luo työntekijä ja nosta hänen palkkaansa dynaamisesti.
*/

// Kirjoita koodisi tähän

/* Tehtävä 13
Luo olio `timer`, jolla on `seconds` ja metodi `start()`, joka laskee sekunteja ylöspäin.
Näytä ajastin HTML-elementissä ja päivitä se sekunnin välein.
*/

// Kirjoita koodisi tähän

/* Tehtävä 14
Luo konstruktori-funktio `Book`, joka ottaa parametreina `title`, `author` ja `pages`.
Luo yksinkertainen kirjastosovellus, jonka avulla käyttäjät voivat lisätä kirjoja HTML-lomakkeen kautta ja näyttää ne dynaamisesti.
*/

// Kirjoita koodisi tähän

/* Tehtävä 15
Luo olio `foxTracker`, jolla on `foxes`-taulukko.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia kettuja (nimi ja sijainti) taulukkoon.
Näytä kettujen lista dynaamisesti HTML-elementissä.
*/

// Kirjoita koodisi tähän
