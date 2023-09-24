//rock paper scissors game
//user presented with prompt 'let's play rock paper scissors!'
//player makes one choice from rock paper scissors
    //player choice should be case-insensitive
//computer makes one choice from rock paper scissors at random
//compare computer choice with player choice
//rock>scissors
//scissors>paper
//paper>scissors
//if player choice is greater than computer choice, player wins
//else player loses and computer wins
//reset game to start again


const randomValue = Math.random();
const numOutcomes = 3;
const outcomeProbability = 1 / numOutcomes;
function getComputerChoice() {
    if (randomValue < outcomeProbability) {
        return "rock";
    }   else if (randomValue < 2 * outcomeProbability) {
        return "paper";
    }   else {
        return "scissors";
    }
}
console.log(getComputerChoice())

let playerSelection = prompt("Rock, Paper, Scissors!");
    console.log(playerSelection)





const computerSelection = getComputerChoice();



function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats Scissors";
    }   else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win! Paper beats Rock";
    }   else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You Win! Scissors beats Paper";
    }   else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You Lose! Paper beats Rock";
    }   else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You Lose! Scissors beats Paper";
    }   else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You Lose! Rock beats Scissors";
    }   
    else (playerSelection == computerSelection)
    return "You Tied!";
}



console.log(playRound(playerSelection, computerSelection));