document
  .getElementById("inputText")
  .addEventListener("input", function (event) {
    document.getElementById("displayText").textContent = event.target.value;
  });

/* EXAMPLE TWO

function liveUpdate(event){
  document.getElementById("tuoteInput").textContent = event.target.value;
}

document.getElementById("tuoteInput").addEventListener("input", liveUpdate)

*/

/*
Kirjoita JavaScript-koodi, joka:
- Päivittää jatkuvasti <div>-elementin sisällön input-kentän arvolla sitä mukaa, kun käyttäjä kirjoittaa.
- Käyttää input-tapahtumaa, jotta päivitys tapahtuu reaaliajassa.
*/
