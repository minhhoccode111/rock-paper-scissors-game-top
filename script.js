console.log("Hello World");
// switch ((playerSelection, computerSelection)) {
//   case ("rock", "paper"):
//     string = "You Lose! Paper beats Rock!";
//     break;
//   case ("paper", "scissors"):
//     string = "You Lose! Scissors beats Paper!";
//     break;
//   case ("scissors", "rock"):
//     string = "You Lose! Rock beats Scissors!";
//     break;
//   case ("paper", "rock"):
//     string = "You Win! Paper beats Rock!";
//     break;
//   case ("scissors", "paper"):
//     string = "You Win! Scissors beats Paper!";
//     break;
//   case ("rock", "scissors"):
//     string = "You Win! Rock beats Scissors!";
//     break;
//   default:
//     string = "Tie Game!";
// }
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};
// console.log(getComputerChoice());
function playRound(playerSelection, computerSelection) {
  let string = "";
  let result = ["Tie Game!", "You Win!", "You Lose!"];
  let sentence = [
    " Paper beats Rock",
    " Rock beats Scissors",
    " Scissors beats Paper",
  ];
  let caseInsensitivePlayerSelection = playerSelection.toLowerCase();
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
        string = result[2] + sentence[1];
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
  } else {
    string = "Please choose valid option.";
  }
  return string;
}

const playerSelection = prompt("What do you choose?");
const computerSelection = getComputerChoice();
alert(playRound(playerSelection, computerSelection));
