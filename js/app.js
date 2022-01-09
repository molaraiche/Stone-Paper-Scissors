// Variables
const TPT = document.querySelector(".TPT");
const TPO = document.querySelector(".TPO");
const start = document.querySelector(".play");
const reset = document.querySelector(".reset");
const result = document.querySelector(".rtxt");

// Set the game logique

let stone = 1;
let scissors = 2;
let paper = 3;
let logiqueOne = 2 > 3;
let logiqueTwo = 1 < 3;
let logiqueThree = 1 > 3;
let shuffleOne = Math.trunc(Math.random() * 3) + 1;
let shuffleTwo = Math.trunc(Math.random() * 3) + 1;

let RPOT = document.querySelector(".RPO");
let RPTT = document.querySelector(".RPT");
let RPO = 0;
let RPT = 0;

// Set Events
start.addEventListener("click", (e) => {
  shuffleOne = Math.trunc(Math.random() * 3) + 1;
  shuffleTwo = Math.trunc(Math.random() * 3) + 1;
  TPO.src = `../img/${shuffleOne}.jpg`;
  TPT.src = `../img/${shuffleTwo}.jpg`;

  // logique :o

  if (shuffleOne === shuffleTwo) {
    result.textContent = "Draw";
    result.style.color = "#222";
  } else if (shuffleOne === 1 && shuffleTwo == 2) {
    result.textContent = " Player One Win";
    result.style.color = "#8854d0";
    RPO++;
    rslt(RPOT, RPO);
  } else if (shuffleOne === 1 && shuffleTwo == 3) {
    result.textContent = " Player Two Win";
    result.style.color = "#8854d0";
    RPT++;
    rslt(RPTT, RPT);
  } else if (shuffleOne === 2 && shuffleTwo == 1) {
    result.textContent = " Player Two Win";
    result.style.color = "#8854d0";
    RPT++;
    rslt(RPTT, RPT);
  } else if (shuffleOne === 2 && shuffleTwo == 3) {
    result.textContent = " Player One Win";
    result.style.color = "#8854d0";
    RPO++;
    rslt(RPOT, RPO);
  } else if (shuffleOne === 3 && shuffleTwo == 1) {
    result.textContent = " Player One Win";
    result.style.color = "#8854d0";
    RPO++;
    rslt(RPOT, RPO);
  } else if (shuffleOne === 3 && shuffleTwo == 2) {
    result.textContent = " Player Two Win";
    result.style.color = "#8854d0";
    RPT++;
    rslt(RPTT, RPT);
  }
});

reset.addEventListener("click", function (e) {
  e.preventDefault();
  RPO = 0;
  RPT = 0;
  result.textContent = "Start New Round";
  result.style.color = "green";
  RPOT.textContent = 0;
  RPTT.textContent = 0;
});

function rslt(PT, PR) {
  PT.textContent = PR;
}
