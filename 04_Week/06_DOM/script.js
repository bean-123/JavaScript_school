//This line finds the form with id="myForm" and adds an event listener that watches for the "submit" event.
document.getElementById("myForm").addEventListener("submit", function (event) {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let errorMessage = document.getElementById("errorMessage");

  if (name === "" || email === "") {
    //tarkista onko tyhjiä kenttiä
    event.preventDefault(); // Estetään lomakkeen lähetys
    errorMessage.textContent = "Täytä nimi että sähköposti!";
  } else {
    errorMessage.textContent = ""; // If both fields have values, we clear the error message n send the form
  }
});

/* 
Kirjoita JavaScript-koodi, joka:
- Estää lomakkeen lähetyksen, jos jompikumpi kenttä on tyhjä.
- Näyttää virheilmoituksen, jos kenttiä on tyhjänä.
*/
