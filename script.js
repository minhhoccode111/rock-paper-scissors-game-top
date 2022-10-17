console.log("Hello World");
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  console.log(choices[Math.floor(Math.random() * 3)]);
};
getComputerChoice();
