function getDayName(day) {
  switch (day) {
    case 1:
      return "Maanantai";
    case 2:
      return "Tiistai";
    case 3:
      return "Keskiviikko";
    case 4:
      return "Torstai";
    case 5:
      return "Perjantai";
    case 6:
      return "Lauantai";
    case 7:
      return "Sunnuntai";
    default:
      return "Epäkelpo päivä";
  }
}

console.log(getDayName(1));
console.log(getDayName(2));
console.log(getDayName(3));
console.log(getDayName(4));
console.log(getDayName(5));
console.log(getDayName(6));
console.log(getDayName(7));
console.log(getDayName(12));

/* 
Kirjoita funktio nimeltä getDayName:
Ota parametri day.
Käytä switch-rakennetta seuraavasti:
Palauta viikonpäivän nimi (1 = "Maanantai", 2 = "Tiistai", jne.).
Käytä default-haaraa palauttaaksesi "Epäkelpo päivä" virheellisille arvoille.
Kutsu funktiota sekä kelvollisilla että virheellisillä päivämääränumeroilla.
*/
