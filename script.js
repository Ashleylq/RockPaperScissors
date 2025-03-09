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

 function Playround(){
     let computerChoice = Computerchoice();
     console.log(`Your choice: ${playerChoice}
         Computer's choice: ${computerChoice}`);
     if ((playerChoice === "rock" && computerChoice === "scissors")||
 (playerChoice === "paper" && computerChoice === "rock")||
 (playerChoice === "scissors" && computerChoice === "paper")){
     console.log(`You win! ${playerChoice} beats ${computerChoice}`);
     playerScore += 1;
 }
     else if ((computerChoice === "rock" && playerChoice === "scissors")||
 (computerChoice === "paper" && playerChoice === "rock")||
 (computerChoice === "scissors" && playerChoice === "paper")){
     console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
     computerScore += 1;
 }
 else{
     console.log("It's a tie!");
 }
 console.log(`Your score: ${playerScore}
     Computer's score: ${computerScore}`);
 }
 
 const container = document.querySelector(".container");

 const rockButton = document.createElement("button");
 rockButton.textContent = "rock"
 rockButton.addEventListener("click", () => {
    playerChoice = "rock";
    Playround()})
 container.appendChild("rockButton");

 const paperButton = document.createElement("button");
 paperButton.textContent = "paper"
 paperButton.addEventListener("click", () => {
    playerChoice = "paper";
    Playround()})
 container.appendChild("paperButton")

 const scissorsButton = document.createElement("button");
 scissorsButton.textContent = "scissors"
 scissorsButton.addEventListener("click", () => {
    playerChoice = "scissors"
    Playround()
 })
 container.appendChild("scissorsButton")