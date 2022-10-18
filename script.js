console.log("Hello World");
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};
// defined function to get computer choice
const getPlayerChoice = () => {
  let answer = prompt("What do you choose?").toLowerCase();
  if (answer == null) {
    answer = "";
  }
  return answer;
};
// defined function to get player choice
function playRound(playerSelection, computerSelection) {
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
  } else {
    string = "Please choose valid option.";
  }
  return string;
}
// defined function to play 1 round of the game
function play() {
  alert("You will play 5 rounds, first to 3 win.");
  for (var i = 1, p = 0, c = 0; i < 6; i++) {
    alert("Round " + i);
    document.getElementById("player").innerHTML = p;
    document.getElementById("computer").innerHTML = c;
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const a = playRound(playerSelection, computerSelection);
    alert(a);
    const aSlice = a.slice(4, 5);
    console.log(aSlice);
    if (a == "Please choose valid option." || aSlice === "G") {
      i--; //mean don't count that round
    } else if (aSlice === "W") {
      p++;
      if (p > 3) {
        return alert("Yayyy, You are the Winner!");
      }
      document.getElementById("player").innerHTML = p;
      document.getElementById("computer").innerHTML = c;
    } else if (aSlice === "L") {
      c++;
      if (c > 3) {
        return alert("Oh noo, You are the Loser!");
      }
      document.getElementById("player").innerHTML = p;
      document.getElementById("computer").innerHTML = c;
    }
  }
  document.getElementById("player").innerHTML = p;
  document.getElementById("computer").innerHTML = c;
  // return;
}
