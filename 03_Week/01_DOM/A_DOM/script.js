//Jos on vain yksi nappula joka tekee tätä yhtä työtä, käytä tätä:

document.getElementById("press").addEventListener("click", function () {
  document.getElementById("content").textContent = "Hi World!";
});

//jos on USEAMPI eri elementti joka käyttäytyy samanlailla, käytä tätä:

document.getElementById("press").addEventListener("click", hello);

function hello() {
  document.getElementById("content");
  textContent = "Hi World!";
}

/* 
Kirjoita JavaScript-koodi, joka valitsee sisällön tunnuksen käyttämällä getElementById-metodia.
Kirjoita funktio, joka päivittää valitun elementin tekstisisällön painamalla nappia tekstiksi "Hei, maailma!".
*/
