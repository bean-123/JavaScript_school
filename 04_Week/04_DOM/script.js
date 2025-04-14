function changeText() {
  let change1 = document.getElementById("text1");
  if (change1.innerHTML === "Hello World!") {
    change1.innerHTML = "Bye World!";
  } else {
    change1.innerHTML = "Hello World!";
  }
}

/*
Luo HTML tiedosto, jossa on <p> elementti ja nappi. 
Kirjoita JavaScript-koodi, joka vaihtaa tekstiosion näkyvyyttä - päälle ja pois - nappia painamalla.
 */
