function generateRandomNumber(x, y) {
  return Math.floor(Math.random() * (y - x + 1)) + x;
}
//Generating a random number between x and y with the math.random()
//Scaling that number to the range size(y-x+1)
//Using math.floor() to convert it to an integer
//Shifting the result by x so that the range starts at x instead of 0

console.log(generateRandomNumber(1, 10));

/* Luo funktio nimeltä generateRandomNumber, joka:
Ottaa kaksi parametria, min ja max.
Palauttaa satunnaisen kokonaisluvun min:n ja max:n väliltä (mukaan lukien).
Kutsu funktiota arvoilla 1 ja 10.
Tulosta tulos käyttäen console.log().

Vinkki: Käytä Math.random(), Math.floor() ja yksinkertaista matikkaa.
*/
