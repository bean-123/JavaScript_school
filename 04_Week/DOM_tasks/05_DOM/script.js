function changeBackgroundColor() {
  // Math.random generates random decimal number between 0-1
  // Multiplies that by 16777215, this is the maximum value for a 24-bit color which equals #FFFFFF in hex
  // Floor rounds number down to an integer
  // toString converts integer to a hexdecimal string which HTML/CSS uses for colors
  // '#' at the beginning so its a proper hex color
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

function inputTextColor() {
  // Accessing the current value from the input field
  let userInput = document.getElementById("colorInput").value;
  // Finds textToChange ID and sets the color as the user inputted with style.color
  document.getElementById("textToChange").style.color = userInput;
}

/*
Kirjoita JavaScript-koodi, joka:
- Vaihtaa taustavärin satunnaiseksi, kun painiketta klikataan.
- Päivittää kappaleen tekstivärin vastaamaan käyttäjän syöttämää arvoa.
*/

/* EXAMPLE 2 (need to just change html, take onClick away and give just id for them that you use)

const backgroundBTN = document.getElementById("backgroundcolor")
const textColorInput = document.getElementById("textColor")
const paragraph = document.getElementById("text")

function changeBackgroundColor(){
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}
backgroundBTN.addEventListener("click", changeBackgroundColor) // these will trigger the function

function changeTextColor(){
  paragraph.style.color = textColorInput.value //it makes the paragraph the input color
}
textColorInput.addEventListener("input", changeTextColor) // these will trigger the function

*/
