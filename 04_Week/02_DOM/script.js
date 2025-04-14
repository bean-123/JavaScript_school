document.getElementById("tuoteBTN").addEventListener("click", function () {
  let tuote = document.getElementById("tuoteInput");

  if (tuote.value !== "") {
    let listItem = document.createElement("li");
    listItem.textContent = tuote.value;

    document.getElementById("tuoteLista").appendChild(listItem);
    tuote.value = "";
  }
});

/*  EXAMPLE 2 // Tehty vähän eri tavalla + ei tarvitse painaa nappulaa voi vain painaa Enter

 function lisaaTuote(){
    let tuote = document.getElementById("tuoteInput");

  if (tuote.value !== "") {
    let listItem = document.createElement("li");
    listItem.textContent = tuote.value;

    document.getElementById("tuoteLista").appendChild(listItem);
    tuote.value = "";
 }
    document.getElementById("tuoteBTN").addEventListener("click", lisaaTuote)
    document.getElementById("tuoteInput").addEventListener("keydown", function (event){
        if(event.key=== "Enter"){
            lisaaTuote()
        }
    })
*/

/*
Kirjoita JavaScript-koodi, joka:
- Hakee arvon input-kentästä, kun painiketta klikataan.
- Luo uuden <li>-elementin ja asettaa sen tekstisisällöksi input-kentän arvon.
- Lisää <li>-elementin listaan.
- Tyhjentää input-kentän hedelmän lisäämisen jälkeen.
BONUS
-ei lisää tyhjiä kenttiä listaan! Kaikki teksti menee if (tuote.value !== ""){} sisään
*/
