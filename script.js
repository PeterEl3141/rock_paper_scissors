function getComputerChoice (){
    let ranNum = Math.random()
    let compChoice;
    
    if (ranNum < 1/3) {
        compChoice = "rock";
    } else if (ranNum > 2/3) {
        compChoice = "paper";
    } else {
        compChoice = "scissors"}
    return compChoice;
}


const bod = document.querySelector("body");
const rock = document.createElement("button");
rock.textContent = "rock";
rock.id = "rock";
const paper = document.createElement("button");
paper.textContent = "paper";
paper.id = "paper";
const scissors = document.createElement("button");
scissors.textContent = "scissors";
scissors.id = "scissors";



const results = document.createElement("div");
const firstMessage = document.createElement("p");
const lastMessage = document.createElement("p");
let humanCount = document.createElement('span');
humanCount.textContent = "human score: "
let humanScore = document.createElement("span");
humanScore.textContent = 0;
let compCount = document.createElement('span');
compCount.textContent = "\ncomputer score: "
let computerScore = document.createElement("span");
computerScore.textContent = 0;
const choices = document.createElement("div");
const reset = document.createElement("button");
reset.textContent = "play again?"

choices.append(rock, paper, scissors);
results.append(firstMessage, humanCount, humanScore, compCount, computerScore, lastMessage);
bod.append(choices, results);

//update the human choice, play a round, and check the outcome
let choice = "";
choices.addEventListener("click", (e) => {
    let target = e.target;
    switch (target.id) {
        case 'rock': 
        choice = "rock";
        break;

        case 'paper': 
        choice = "paper";
        break;

        case 'scissors': 
        choice = "scissors";
        break;

    }

    playRound();
    winChecker ();

    
})

reset.addEventListener("click", () => {
    resetter ();
}
)

function playRound (computer, human) {
    computer = getComputerChoice()
    human = choice;

    if (computer === "rock" && human === "paper"){
        firstMessage.textContent = "you win! Paper beats rock";
        humanScore.textContent++;
        return;
    } else if (computer === "rock" && human === "scissors"){
        firstMessage.textContent = "you lose! rock beats scissors";
        computerScore.textContent++;
        return;
    } else  if (computer === "paper" && human === "scissors"){
        firstMessage.textContent = "you win! Paper beats rock";
        humanScore.textContent++;
        return;
    } else if (computer === "paper" && human === "rock"){
        firstMessage.textContent = "you lose! Paper beats rock"
        computerScore.textContent++;
        return;
    } else  if (computer === "scissors" && human === "rock"){
        firstMessage.textContent = "you win! rock beats scissors"
        humanScore.textContent++;
        return;
    } else if (computer === "scissors" && human === "paper"){
        firstMessage.textContent = "you lose! scissors beats paper";
        computerScore.textContent++;
        return;
    } else {
        firstMessage.textContent = "it's a tie!";
        return;
}

}

function winChecker () { 
    if (computerScore.textContent > 4 || humanScore.textContent > 4) {
        if (humanScore.textContent > computerScore.textContent) { 
            lastMessage.textContent = "you win!!";
            firstMessage.textContent = "";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
            bod.appendChild(reset); 

        }   else { 
            lastMessage.textContent = "you lose!";
            firstMessage.textContent = "";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
            bod.appendChild(reset); 

        }
    }
}


function resetter () {
    humanScore.textContent = 0;
    computerScore.textContent = 0;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    lastMessage.textContent = "";
    bod.removeChild(reset);
    return;
}






