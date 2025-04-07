let answers = [
  "Ehdottomasti!",
  "Ei todellakaan!",
  "Kyllä.",
  "Ei.",
  "Ehkä..",
  "Ehkä myöhemmin.",
  "En osaa sanoa varmasti.",
];

let question = ""; //Declaring variable w/out a value bc we will do it later (empty string rn)
let output = ""; // This will hold the HTML content to display on the page

//Create div to show the result(outside the loop)
let resultDiv = document.createElement("div");
document.body.appendChild(resultDiv); //Makes it visible on the page, document=ur html body=the body section append=add the element

function askQuestion() {
  //Ask the user for a question or to stop
  question = prompt(
    "Kysy kyllä tai ei kysymys tai kirjoita stop lopettaaksesi: "
  );

  //If the user types stop, stop asking
  if (question.toLowerCase() === "stop") {
    output += "<p>Ohjelma lopetettu!</p>"; //Stop message
    resultDiv.innerHTML = output; //Update the resultDiv in the html with the stop message
    return; //Stop the function
  }

  //Pick random answer
  let randomIndex = Math.floor(Math.random() * answers.length); //Making it choose a random answer from our answers
  let answer = answers[randomIndex];

  //Update the output content with the question and answer
  output += `<p><strong>Kysymyksesi: </strong>${question}</p><p><strong>Vastaus: </strong>${answer}</p>`;

  //Display the updated content on the page
  resultDiv.innerHTML = output; //Update the resultDiv in html to show it on the page

  //Ask the question after a short delay
  setTimeout(askQuestion, 1000); //1 second delay before asking again
}

askQuestion();
