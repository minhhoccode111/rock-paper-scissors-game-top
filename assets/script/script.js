"use strict";

let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let roundIndex = 1; // Renamed from 'index' to avoid confusion

// DOM Elements
const wrapper = document.getElementById("wrapper");
const sectionHome = document.getElementById("section-home");
const sectionNotPlay = document.getElementById("section-notplay");
const sectionPlay = document.getElementById("section-play");
const sectionWin = document.getElementById("section-win");
const sectionLose = document.getElementById("section-lose");
const backToHomeBtn = document.getElementById("back-to-home-btn");
const surrenderPlayBtn = document.getElementById("surrender-play-btn");

const playGameBtn = document.getElementById("play-game-btn");
const notPlayGameBtn = document.getElementById("not-play-game-btn");
const chooseAgainBtn = document.getElementById("choose-again-btn");
const surrenderNotPlayBtn = document.getElementById("surrender-notplay-btn");
const playAgainWinBtn = document.getElementById("play-again-win-btn");
const playAgainLoseBtn = document.getElementById("play-again-lose-btn");

const weaponButtons = document.querySelectorAll(`button[name="weapon"]`);
const playerScoreCtn = document.getElementById("player-score");
const computerScoreCtn = document.getElementById("ai-score");
const roundCountSpan = document.querySelector(".round-count");
const resultsDisplay = document.querySelector(".results");

// Helper to show a section and hide others
const showSection = (sectionToShow) => {
  [sectionHome, sectionNotPlay, sectionPlay, sectionWin, sectionLose].forEach(section => {
    section.classList.add("hidden");
  });
  sectionToShow.classList.remove("hidden");

  // Show/hide surrender button based on section-play
  if (sectionToShow === sectionPlay) {
    surrenderPlayBtn.classList.remove("hidden");
  } else {
    surrenderPlayBtn.classList.add("hidden");
  }
};

// Game Logic Functions
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

const updateScoresDisplay = () => {
  playerScoreCtn.textContent = playerScore;
  computerScoreCtn.textContent = computerScore;
  roundCountSpan.textContent = roundIndex;
};

const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  roundIndex = 1;
  resultsDisplay.textContent = "";
  updateScoresDisplay();
};

const playRound = (playerSelection) => {
  computerSelection = getComputerChoice();
  let resultString = "";
  let outcome = ""; // "win", "lose", "tie"

  if (playerSelection === computerSelection) {
    resultString = "Tie Game!";
    outcome = "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    resultString = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    outcome = "win";
  } else {
    resultString = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
    outcome = "lose";
  }

  resultsDisplay.textContent = resultString;
  roundIndex++;
  updateScoresDisplay();

  if (playerScore === 5) {
    showSection(sectionWin);
  } else if (computerScore === 5) {
    showSection(sectionLose);
  }
};

// Event Listeners
playGameBtn.addEventListener("click", () => {
  resetGame();
  showSection(sectionPlay);
});

notPlayGameBtn.addEventListener("click", () => {
  showSection(sectionNotPlay);
});

chooseAgainBtn.addEventListener("click", () => {
  showSection(sectionHome);
});

surrenderNotPlayBtn.addEventListener("click", () => {
  resetGame();
  showSection(sectionLose); // Surrendering from "not play" leads to a loss
});

playAgainWinBtn.addEventListener("click", () => {
  resetGame();
  showSection(sectionPlay);
});

playAgainLoseBtn.addEventListener("click", () => {
  resetGame();
  showSection(sectionPlay);
});

backToHomeBtn.addEventListener("click", () => {
  resetGame();
  showSection(sectionHome);
});

surrenderPlayBtn.addEventListener("click", () => {
  resetGame();
  showSection(sectionLose); // Surrendering from "play" leads to a loss
});

weaponButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.value);
  });
});

// Skip Animation Function (from skip.js)
const skipAnime = () => {
  const animatedElements = document.querySelectorAll(
    `[class*="animate__animated"]`
  ); // Select elements with class containing "animate__animated"
  animatedElements.forEach((animatedElement) =>
    animatedElement.classList.add("skip")
  );
};

// Attach skipAnime to body events
document.body.addEventListener("click", skipAnime);
document.body.addEventListener("keydown", skipAnime);

// Initial setup
const init = () => {
  showSection(sectionHome);
  updateScoresDisplay();
};

// Run initial setup when DOM is fully loaded
document.addEventListener("DOMContentLoaded", init);