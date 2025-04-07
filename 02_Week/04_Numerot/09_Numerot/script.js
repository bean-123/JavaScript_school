let userInput = "25.75 omenaa";
let result1 = parseFloat(userInput);
let result2 = result1.toFixed(1);

console.log(result2);

/* 
Luo muuttuja userInput ja anna sille arvo "25.75 omenaa".
Käytä parseFloat() metodia irrottamaan numeerinen arvo muuttujasta.
Käytä .toFixed() tuloksen pyöristämiseen 1 desimaalin tarkkuudella.
Tulosta luku console.log().


(Jos syöte eli input ei ala numerolla, tulos on NaN.)
Esimerkkivastaukset:
"25.8" (kun syöte alkaa numerolla).
"NaN" (kun syöte ei kelpaa).

 */
