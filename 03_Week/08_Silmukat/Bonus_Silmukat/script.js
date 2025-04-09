function allTripsAverageSpeed() {
  let totaldistance = 0;
  let totaltime = 0;

  while (true) {
    let distance = parseFloat(
      prompt("Please insert a distance, 0 will end the program: ")
    );

    if (distance === 0) {
      console.log("End of the program.");
      break;
    }

    if (isNaN(distance) || distance < 0) {
      alert("Please insert correct distance: ");
      continue;
    }

    let time = parseFloat(prompt("Please insert a time: "));

    if (isNaN(time) || time < 0) {
      alert("Please insert correct time: ");
      continue;
    }
    totaldistance += distance;
    totaltime += time;
  }

  if (totaltime > 0) {
    let averageSpeed = totaldistance / totaltime;
    console.log(`Kaikkien matkujen yhteenlaskettu nopeus: ${averageSpeed}km/h`);
  } else {
    console.log("Ei matkoja syötetty.");
  }
}
allTripsAverageSpeed();

/* 
Muokkaa harjoituksen 4 (tehty opettajan kanssa) ohjelmaa niin, että 
ohjelma laskee KAIKKIEN annettujen matkojen keskinopeuden. 

Luo funktio allTripsAverageSpeed, joka pyytää jatkuvasti käyttäjää syöttämään 
etäisyyden (kilometreinä) ja ajan (tunteina). 
Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi.
Silloin ohjelma tulostaa kaikkien matkojen yhteenlasketun keskinopeuden. 
 */
