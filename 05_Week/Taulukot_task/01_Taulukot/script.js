let teamMembers = ["Joni", "Emilia", "Mikko", "Sade"];
let teamMembers2 = ["", "", "Mikko", "Sade"];
let newMembers = ["Tiina", "Myrsky"];

console.log();

/* 
Alkuperäinen data:
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade'];

1. Käy `teamMembers`-taulukko läpi ja tulosta jokainen nimi konsoliin.  
2. Poista taulukon ensimmäinen jäsen.  // teamMembers.shift();
3. Poista taulukon viimeinen jäsen.  // teamMembers.pop();
4. Lisää uusi jäsen "Alex" taulukon alkuun.  // teamMembers.unshift("Alex");
5. Lisää uusi jäsen "Linda" taulukon loppuun.  // teamMembers.push("Alex");
6. Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä ja jätä alkuperäinen muuttumattomaksi.  //  map()
7. Etsi "Mikko":n indeksi taulukossa.  // console.log(teamMembers.indexOf("Mikko")); result 2
8. Yritä etsiä "Jake":n indeksi (ei ole taulukossa).  // console.log(teamMembers2.indexOf("Jake")); result -1
9. Korvaa "Mikko" kahdella uudella jäsenellä: "Maria" ja "Netta". // teamMembers2.splice(2, 1, "Maria", "Netta"); 
10. Liitä "Ahmad" taulukkoon ja tallenna tulos uuteen taulukkoon, alkuperäistä muuttamatta.  // teamMembers2.push("Ahmad");
11. Kopioi koko `teamMembers`-taulukko `slice`-metodilla ja tallenna se uuteen muuttujaan.  
12. Luo `newMembers`-taulukko, jossa on "Tiina" ja "Myrsky", ja yhdistä se `teamMembers`-taulukkoon uuteen taulukkoon.  // teamMembers.push(newMembers);
13. Etsi kaikki "Joni":in esiintymät ja tallenna niiden indeksit uuteen taulukkoon.  
14. Muunna kaikki nimet taulukossa isoiksi kirjaimiksi, muuttamatta alkuperäistä taulukkoa.  
15. Lajittele `teamMembers` aakkosjärjestykseen.  // console.log(teamMembers.sort());
16. Käännä `teamMembers`-taulukon järjestys päinvastaiseksi.  // console.log(teamMembers.reverse());
17. Tarkista, onko ainakin yksi jäsen nimeltään "Joni".  // console.log(teamMembers.includes("Joni"));
18. Tarkista, onko kaikilla nimillä yli kolme kirjainta. // .every
*/
