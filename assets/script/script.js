console.log("Hello World");
("use strict");

const play = () => {
  let computerSelection;
  let playerSelection;
  let playerScore = 0;
  let computerScore = 0;
  let index = 1; //index to show the round we play
  const buttons = document.querySelectorAll(`button[name="weapon"]`);
  // initialize variables
  const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
  }; //FIXME
  // defined function to get computer choice
  const showPlayerScore = () => {
    let playerScoreCtn = document.querySelector(".score-you");
    playerScoreCtn.textContent = playerScore;
  }; //to display player score
  const showComputerScore = () => {
    let computerScoreCtn = document.querySelector(".score-ai");
    computerScoreCtn.textContent = computerScore;
  }; //to display computer score

  const roundCount = () => {
    document.querySelector(".round-count").innerHTML = index;
  }; // to display round index
  // when a button is clicked then play 1 round

  buttons.forEach((buttons) => {
    buttons.addEventListener("click", () => {
      playerSelection = buttons.value;
      // defined function to get player choice
      playRound(playerSelection, computerSelection);
      if (playerScore === 5) {
        window.location.href = "./../pages/win.html"; //go to win page if player have won the game
      }
      if (computerScore === 5) {
        window.location.href = "./../pages/lose.html"; //go to lose page if player have lost the game
      }
    });
  });
  const playRound = (playerSelection, computerSelection) => {
    computerSelection = getComputerChoice();
    //assign random computer choice to computer selection
    let string = "";
    let result = ["Tie Game!", "You Win!", "You Lose!"];
    let sentence = [
      " Paper beats Rock",
      " Rock beats Scissors",
      " Scissors beats Paper",
    ];
    if (playerSelection == "rock") {
      switch (computerSelection) {
        case "rock":
          string = result[0];
          break;
        case "paper":
          string = result[2] + sentence[0];
          break;
        case "scissors":
          string = result[1] + sentence[1];
          break;
      }
    } else if (playerSelection == "paper") {
      switch (computerSelection) {
        case "paper":
          string = result[0];
          break;
        case "rock":
          string = result[1] + sentence[0];
          break;
        case "scissors":
          string = result[2] + sentence[2];
          break;
      }
    } else if (playerSelection == "scissors") {
      switch (computerSelection) {
        case "scissors":
          string = result[0];
          break;
        case "paper":
          string = result[1] + sentence[2];
          break;
        case "rock":
          string = result[2] + sentence[1];
          break;
      }
    }
    const results = document.querySelector(".results");
    results.innerHTML = string;

    const increaseThings = () => {
      //this function increase numbers and change computer choice to something else
      if (string[4] == "W") {
        playerScore = ++playerScore;
        index = ++index;
      } //you win score ++,round index ++
      if (string[4] == "L") {
        computerScore = ++computerScore;
        index = ++index;
      } //you lose computer score ++,round index ++
      showPlayerScore();
      showComputerScore();
      roundCount(); //FIXME
    };
    increaseThings();

    return string;
  };
  // defined function to play 1 round of the game
  playRound(playerSelection, computerSelection);
};
