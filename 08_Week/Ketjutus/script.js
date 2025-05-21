"use strict";

/* Tehtävä 1: Korjaa käyttäjädatan käsittely  
Korjaa metodiketjutus niin, että se suodattaa aktiiviset käyttäjät ja palauttaa heidän nimensä isoilla kirjaimilla.
*/

const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
];

const activeUsers = users
  .filter((user) => user.active)
  .map((user) => user.name.toUpperCase());

console.log(activeUsers); // Odotettu: ["ALICE", "CHARLIE"]

/* Tehtävä 2: Korjaa valinnainen ketjutus  
Käytä turvallisesti `email`-ominaisuutta objektin `user.details` sisältä.
*/

const userData = { details: { contact: { email: "jane@example.com" } } };

// Korjaa tämä
console.log(userData.details?.contact?.email); // Odotettu: "jane@example.com"

/* Tehtävä 3: Korjaa valinnainen ketjutus taulukoiden kanssa  
Käytä turvallisesti taulukon `orders` toista alkiota, jos se on olemassa.
*/

const customer = { orders: [1001] };

// Korjaa tämä
console.log(customer.orders?.[1]); // Odotettu: undefined

/* Tehtävä 4: Korjaa ketjutettu merkkijonojen käsittely  
Poimi nimikirjaimet koko nimestä metodiketjutuksella.
*/

const fullName = "John Doe";

// Korjaa tämä
const initials = fullName
  .split(" ") // jakaa nimen välilyönnistä
  .map((word) => word[0].toUpperCase()) //sanojen eka kirjain uuteen array
  .join(" "); // liittää kirjaimet välilyönnillä
console.log(initials); // Odotettu: "J D"

/* Tehtävä 5: Luo oma funktio  
Kirjoita funktio, joka vastaanottaa `products`-taulukon ja palauttaa pilkulla erotetun merkkijonon **vain varastossa olevien** tuotteiden nimistä **isoilla kirjaimilla**.
Testaa seuraavalla taulukolla:
`[{ name: "Laptop", stock: 10 }, { name: "Phone", stock: 0 }]`
Odotettu tuloste: `"LAPTOP"`
*/

const items = [
  { name: "Laptop", stock: 10 },
  { name: "Phone", stock: 0 },
  { name: "Book", stock: 5 },
  { name: "iPad", stock: 0 },
  { name: "Stereo", stock: 9 },
];

const inStock = (products) => {
  products.forEach((product) => {
    if (product.stock > 0) {
      console.log(product.name.toUpperCase());
    }
  });
};
inStock(items);

/*

const products = [
  { name: "Laptop", stock: 10 },
  { name: "Phone", stock: 0 },
  { name: "Book", stock: 5 },
  { name: "iPad", stock: 0 },
  { name: "Stereo", stock: 9 },
];

function isAvailable(products) {
  const available = products
    .filter((products) => products.stock > 0)
    .map((available) => available.name.toUpperCase())
    .join(", ");
  return available;
}

console.log(isAvailable(products)); // LAPTOP, BOOK, STEREO

*/
