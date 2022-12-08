// Init

let humanScore = 0;
let computerScore = 0;
// let isThereWiner = false;
const results = document.querySelector(`.result`);
const buttons = document.querySelectorAll("button");
const leaderboard = document.querySelector(`.leaderboard`);
const resetbtn = document.querySelector(`.resetbutton`);

buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    winner(e.target.id, rockpaper());
  })
);

// Reset Game
const reset = function () {
  humanScore = 0;
  computerScore = 0;
  leaderboardUpdate();
};

resetbtn.addEventListener(`click`, reset);

// Leader Board Update
const leaderboardUpdate = function () {
  leaderboard.textContent = `Human Score : ${humanScore}   Computer Score: ${computerScore}`;
};

// Computer selection
const rockpaper = function () {
  let a = Math.floor(Math.random() * 3);
  if (a === 1) {
    return "Paper";
  } else if (a === 2) {
    return "Rock";
  } else {
    return "Scissor";
  }
};

// Winnder of Current Round
const scoreboard = function (wins) {
  if (wins === 0) {
    humanScore++;
    leaderboardUpdate();
  } else {
    computerScore++;
    leaderboardUpdate();
  }
  // console.log(`Score is Human ${humanScore} and Computer ${computerScore}`);
  // if (computerScore === 5) {
  //   console.log(`Computer  Reached 5 points first they Win`);
  //   humanScore = 0;
  //   computerScore = 0;
  //   isThereWiner = true;
  // } else if (humanScore === 5) {
  //   console.log(`Human  Reached 5 points first they Win`);
  //   humanScore = 0;
  //   computerScore = 0;
  //   isThereWiner = true;
  // }
};

// Main Game Logic
const winner = function (human, computer) {
  if (human == "Rock" && computer == "Paper") {
    scoreboard(1);
    results.textContent = `Computer wins with ${computer} against ${human}`;
  } else if (human == "Paper" && computer == "Scissor") {
    scoreboard(1);
    results.textContent = `Computer wins with ${computer} against ${human}`;
  } else if (human == "Scissor" && computer == "Rock") {
    scoreboard(1);
    results.textContent = `Computer wins with ${computer} against ${human}`;
  } else if (human === computer) {
    results.textContent = "Its a draw";
  } else if (computer == "Paper" && human == "Scissor") {
    scoreboard(0);
    results.textContent = `Human wins with ${human} against ${computer}`;
  } else if (computer == "Rock" && human == "Paper") {
    scoreboard(0);
    results.textContent = `Human wins with ${human} against ${computer}`;
  } else if (computer == "Scissor" && human == "Rock") {
    scoreboard(0);
    results.textContent = `Human wins with ${human} against ${computer}`;
  }
};
// for (let i = 0; i < 15; i++) {
//   console.log(winner(prompt(), rockpaper()), humanScore, computerScore);
// }

// const capitalize = function () {
//   const str = prompt();
//   return str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase();
// };
// while (!isThereWiner) {
//   console.log(winner(capitalize(), rockpaper()));
// }
// console.log(winner(rockpaper(), rockpaper()));
