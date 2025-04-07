function averageSpeed() {
  while (true) {
    let distance = parseFloat(prompt("Anna etäisyys (0 lopettaa): "));

    if (distance == 0) {
      console.log("Ohejelma lopetettu");
      break;
    }
    //Jos ei ole luku tai negatiivinen
    if (isNaN(distance) || distance < 0) {
      alert("Syötä kelvollinen etäisyys.");
      //Palaa silmukan alkuun
      continue;
    }

    let time = parseFloat(prompt("Anna aika: "));

    //Jos ei ole luku tai negatiivinen
    if (isNaN(time) || time < 0) {
      alert("Syötä kelvollinen aika.");
      //Palaa silmukan alkuun
      continue;
    }

    let average = distance / time;
    alert("Average speed is " + average);
    console.log(
      `Etäisyys: ${distance}km, Aika: ${time}h => keskinopeus: ${average.toFixed(
        2
      )}km/h`
    );
  }
}

averageSpeed();

/* Luo funktio averageSpeed, joka pyytää jatkuvasti käyttäjää syöttämään etäisyyden (kilometreinä)
 ja ajan (tunteina) ja laskee sitten keskinopeuden.
 Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi.
 Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä. */

// Tehdään tämä opettajan esimerkkinä, koska promptin käyttö ei ole vielä tuttua.
