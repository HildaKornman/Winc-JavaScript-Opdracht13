//Opdracht 13 Guess the number-game
function getRandom(){
  return Math.floor(Math.random() * 26);
}
console.log("Random number was: " + getRandom());
resultName = prompt ("Welkom! Wat is je naam?", ["Typ hier je naam"]);
resultGuess = prompt ("Hey " + resultName + ". Voer een nummer in van 0 tot 25 om te raden:", ["Typ hier een nummer"]);
for (i=1;i<=5;i++){
  if (resultGuess!=getRandom){ 
  console.log("resultGuess is: " + resultGuess);
  resultGuess = prompt ("Dat is niet correct. Probeer het nog een keer (max. 5x): ", ["Typ hier"])
  } else {
  document.write("Gefeliciteerd " + resultName + " je hebt gewonnen.");
  }
}
alert ("Dag " + resultName + ". Tot de volgende keer!" )
;
//De if functie werkt nog niet goed want het lukt niet om Gefeliciteerd te tonen als goed geraden; wat doe ik fout?