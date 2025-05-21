"use strict";
/* Tehtävä 1: Käytä \"strict mode\" -tilaa

Luo funktio `task1`, joka käyttää \"use strict\" -tilaa.
Yritä käyttää muuttujaa ilman sen julistamista.
Ota virhe kiinni ja loggaa: \"Strict mode -virhe: [virheilmoitus]\"
*/

function task1() {
  try {
    tehtava1 = 20;
  } catch (error) {
    console.error("Strict mode -virhe: ", error.message);
  }
}
task1();

/* Tehtävä 2: Muuttujien oikea julistus
  
  Julista vakio `MAX_USERS = 100` ja muuttuja `currentUsers = 10`.
  Yritä muuttaa vakion arvoa ja ota virhe kiinni.
  */

function task2() {
  const MAX_USERS = 100;
  let currentUsers = 10;

  try {
    currentUsers += 20; // if this part is below the max_user which gives the code an error, it wont count this, so put this above it which gives error
    MAX_USERS += 200;
  } catch (error) {
    console.error("Vakiota ei voi muuttaa! ", error.message);
  }
  console.log(MAX_USERS, "MAX_USERS");
  console.log(currentUsers, "currentUsers");
}
task2();

/* Tehtävä 3: Luo objekti ja tulosta se
  
  Luo objekti `userProfile`, jossa kentät:
  - name
  - email
  - isAdmin
  Tulosta objekti konsoliin.
  */

class UserProfile {
  constructor(name, email, isAdmin) {
    this.name = name;
    this.email = email;
    this.isAdmin = isAdmin;
  }
}

function task3() {
  const user1 = new UserProfile("Amy", "amy@gmail.com", true);
  console.log(user1);
}
task3();

/* Tehtävä 4: Yksinkertainen funktio pinta-alan laskemiseen
  
  Luo funktio `calculateArea(width, height)`, joka palauttaa suorakulmion pinta-alan.
  */

function calculateArea(width, height) {
  return width * height;
}
console.log("Alue 10x10 = ", calculateArea(10, 10));

/* Tehtävä 5: Vältä taikalukuja
  
  Määritä vakio `DISCOUNT = 0.1`.
  Luo funktio `applyDiscount(price)`, joka laskee hinnasta alennuksen.
  */

const DISCOUNT = 0.1;
function applyDiscount(price) {
  return price - price * DISCOUNT;
}
console.log(applyDiscount(100));

/* Tehtävä 6: Kirjoita hyödyllisiä kommentteja
  
  Kirjoita funktio `greetUser(name)`, joka palauttaa tervehdyksen käyttäjälle.
  Lisää funktioon kommentti, joka selittää sen tarkoituksen.
  */

/**
 *
 * @param {string} name - The name of the user to greet.
 * @returns {string} A greeting message including the user's name.
 */

function greetUser(name) {
  return `Hello ${name}!`;
}
console.log(greetUser("Amy"));

/* Tehtävä 7: Refaktoroi epäselvä koodi selkeämmäksi
  
  Paranna epäselvää funktiota käyttämällä parempia nimiä ja muotoilua.
  
  Ennen:
  function f(n){
    return n<0 ? 'negative' : 'positive';
  }
  */

function checkNumber(number) {
  if (number < 0) {
    return "number is negative";
  } else {
    return "number is positive";
  }
}
console.log(checkNumber(-2));

/* Tehtävä 8: Korjaa koodin muotoilu
  
  Kirjoita koodi uudelleen käyttäen oikeaa muotoilua ja sisennystä.
  
  Ennen:
  let x=10; 
  function example(){
    console.log(x);
  }
  */

function example() {
  let x = 10;

  console.log(x);
}
example();
