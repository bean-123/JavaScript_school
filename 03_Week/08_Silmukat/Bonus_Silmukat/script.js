function countEvenNumbers() {
  let evenCount = 0;

  for (let x = 0; x < 20; x++) {
    let input = prompt(`Syötä luku ${x + 1}/20`);
    let number = parseInt(input);

    //Checks that it is a valid number and that it is even
    if (!isNaN(number) && number % 2 === 0) {
      evenCount++;
    }
  }
  console.log(`Parillisia lukuja: ${evenCount}`);
}
countEvenNumbers();

/* 
Muokkaa harjoituksen 4 (tehty opettajan kanssa) ohjelmaa niin, että 
ohjelma laskee KAIKKIEN annettujen matkojen keskinopeuden. 

Luo funktio allTripsAverageSpeed, joka pyytää jatkuvasti käyttäjää syöttämään 
etäisyyden (kilometreinä) ja ajan (tunteina). 
Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi.
Silloin ohjelma tulostaa kaikkien matkojen yhteenlasketun keskinopeuden. 
 */
