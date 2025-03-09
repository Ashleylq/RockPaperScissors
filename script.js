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