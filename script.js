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

function Playerchoice(){
    let randomChoice = prompt("What do you choose?");
    let choice = randomChoice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice;
    }
    else{
        alert("Invalid input");
        Playerchoice();
    }
}

let playerScore = 0;
 let computerScore = 0;
 function Playround(){
     let computerChoice = Computerchoice();
     let playerChoice = Playerchoice();
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
 
 function Playgame(){
     playerScore = 0;
     computerScore = 0;
     for (let i = 0; i < 5; i++){
         Playround();
     }
 }