function canEat(isHungry, hasFood) {
  if (isHungry && hasFood) {
    return "Aika syödä!";
  } else {
    return "Sinun täytyy löytää ruokaa!";
  }
}

console.log(canEat("isHungry"));
console.log(canEat("isHungry", "hasFood"));
console.log(canEat("hasFood"));
console.log(canEat("hasFood", "isHungry"));

/* 
Kirjoita funktio nimeltä canEat:
Ota kaksi parametria: isHungry ja hasFood.
Jos molemmat ovat tosi, palauta "Aika syödä!".
Jos jompikumpi on epätosi, palauta "Sinun täytyy löytää ruokaa!"
Kutsu funktiota eri isHungry ja hasFood yhdistelmillä.
*/
