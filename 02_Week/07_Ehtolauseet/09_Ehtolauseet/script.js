function canEnterEvent(age, hasID) {
  if (age >= 18 && hasID) {
    return "Sisäänpääsy myönnetty";
  } else {
    return "Sisäänpääsy evätty";
  }
}

console.log(canEnterEvent(18, true));
console.log(canEnterEvent(18, false));
console.log(canEnterEvent(17, true));
console.log(canEnterEvent(22, false));

/* 
Kirjoita funktio nimeltä canEnterEvent:
Ota kaksi parametria: age ja hasID.
Jos ikä on 18 tai enemmän JA hasID on tosi, palauta "Sisäänpääsy myönnetty."
Muussa tapauksessa palauta "Sisäänpääsy evätty."
Kutsu funktiota eri yhdistelmillä age ja hasID.
*/
