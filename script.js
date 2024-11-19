console.log("hello world")

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

function getHumanChoice (){
let tryChoice;
let choice;
    while (true){
        tryChoice = prompt('rock, paper, or scissors').toLowerCase()
        if (tryChoice === "rock"){
            choice = "rock";
            break
        } else if (tryChoice === "paper"){
            choice = "paper";
            break
        } else if (tryChoice === "scissors"){
            choice = "scissors";
            break
        } else { 
            console.log("invalid response")
            continue
        }
    }
return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound (computer, human) {
    computer = getComputerChoice()
    human = getHumanChoice()

    console.log(`you choose: ${human} and the computer chooses ${computer}`)

    if (computer === "rock" && human === "paper"){
        console.log("you win! Paper beats rock")
        humanScore++;
        console.log(`human score: ${humanScore}`)
        console.log(`computer score ${computerScore}`)
        return;
    } else if (computer === "rock" && human === "scissors"){
        console.log("you lose! rock beats scissors")
        computerScore++;
        console.log(`human score: ${humanScore}`)
        console.log(`computer score ${computerScore}`)
        return;
    } else  if (computer === "paper" && human === "scissors"){
        console.log("you win! Paper beats rock")
        humanScore++;
        console.log(`human score: ${humanScore}`)
        console.log(`computer score ${computerScore}`)
        return;
    } else if (computer === "paper" && human === "rock"){
        console.log("you lose! Paper beats rock")
        computerScore++;
        console.log(`human score: ${humanScore}`)
        console.log(`computer score ${computerScore}`)
        return;
    } else  if (computer === "scissors" && human === "rock"){
        console.log("you win! rock beats scissors")
        humanScore++;
        console.log(`human score: ${humanScore}`)
        console.log(`computer score ${computerScore}`)
        return;
    } else if (computer === "scissors" && human === "paper"){
        console.log("you lose! scissors beats paper")
        computerScore++;
        console.log(`human score: ${humanScore}`)
        console.log(`computer score ${computerScore}`)
        return;
    } else {
        console.log("it's a tie!")
        console.log(`human score: ${humanScore}`)
        console.log(`computer score ${computerScore}`)
        return;
    }

}



function playGame(){
let roundNumber = 1;
    for (i = 0; i < 5; i++){
        console.log(`round number ${roundNumber}`)
        playRound()
        roundNumber++
       }
if (humanScore > computerScore){
    console.log(`you win, with a score of ${humanScore}, against the computer's score of ${computerScore}`)
} else if (computerScore > humanScore){
    console.log(`you lose, with a score of ${humanScore}, against the computer's score of ${computerScore}`)
} else {
    console.log(`it's a tie (${computerScore}, ${humanScore})`)
}
}

playGame()