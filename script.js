function Computerchoice(){
    let randomChoice = Math.floor(Math.random()*3);
    if (randomChoice === 1){
        return "rock";
    }
    else if (randomChoice === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

let playerChoice = "";

let playerScore = 0;
let computerScore = 0;

const choiceMessage = document.createElement("div")
const resultMessage = document.createElement("div")
const scoreMessage = document.createElement("div")

 function Playround(){
     let computerChoice = Computerchoice();
     choiceMessage.textContent = `Your choice: ${playerChoice} \n Computer's choice: ${computerChoice}`;
     if ((playerChoice === "rock" && computerChoice === "scissors")||
 (playerChoice === "paper" && computerChoice === "rock")||
 (playerChoice === "scissors" && computerChoice === "paper")){
     resultMessage.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
     playerScore += 1;
 }
     else if ((computerChoice === "rock" && playerChoice === "scissors")||
 (computerChoice === "paper" && playerChoice === "rock")||
 (computerChoice === "scissors" && playerChoice === "paper")){
     resultMessage.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
     computerScore += 1;
 }
 else{
     resultMessage.textContent = "It's a tie!";
 }
 scoreMessage.textContent = `Your score: ${playerScore} \n Computer's score: ${computerScore}`;
 }
 
 const container = document.querySelector(".container");

 const rockButton = document.createElement("button");
 rockButton.textContent = "Rock"
 rockButton.addEventListener("click", () => {
    playerChoice = "rock";
    Playround()})
 container.appendChild(rockButton);

 const paperButton = document.createElement("button");
 paperButton.textContent = "Paper"
 paperButton.addEventListener("click", () => {
    playerChoice = "paper";
    Playround()})
 container.appendChild(paperButton)

 const scissorsButton = document.createElement("button");
 scissorsButton.textContent = "Scissors"
 scissorsButton.addEventListener("click", () => {
    playerChoice = "scissors"
    Playround()
 })
 container.appendChild(scissorsButton)

 container.appendChild(choiceMessage);
 container.appendChild(resultMessage);
 container.appendChild(scoreMessage);