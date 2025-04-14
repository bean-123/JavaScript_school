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
