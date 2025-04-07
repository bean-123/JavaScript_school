let description = " JavaScript is fun and powerful!";
let noSpaces = description.trim();

console.log(noSpaces.toLocaleLowerCase());
console.log("Does it include 'fun'? " + noSpaces.includes("fun"));
console.log(noSpaces.replace("powerful", "amazing"));
