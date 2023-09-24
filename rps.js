//ROCK PAPER SCISSORS game
//user presented with prompt 'let's play ROCK PAPER SCISSORS!'
//player makes one choice from ROCK PAPER SCISSORS
    //player choice should be case-insensitive
//computer makes one choice from ROCK PAPER SCISSORS at random
//compare computer choice with player choice
//ROCK>SCISSORS
//SCISSORS>PAPER
//PAPER>SCISSORS
//if player choice is greater than computer choice, player wins
//else player loses and computer wins
//reset game to start again



//randomized computer play with equal chance at selection
const randomValue = Math.random();
const numOutcomes = 3;
const outcomeProbability = 1 / numOutcomes;
function getComputerChoice() {
    if (randomValue < outcomeProbability) {
        return "ROCK";
    }   else if (randomValue < 2 * outcomeProbability) {
        return "PAPER";
    }   else {
        return "SCISSORS";
    }
}
console.log(getComputerChoice())

//player input provided via prompt in js
let playerChoice = prompt("ROCK, PAPER, SCISSORS!");
let playerSelection = playerChoice.toUpperCase();    
console.log(playerSelection)



const computerSelection = getComputerChoice();


//main game logic, comparing strings indirectly by providing context of ROCK PAPER SCISSORS
function playRound(playerSelection, computerSelection) {

        if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
    return "You Win! ROCK beats SCISSORS";
    }   else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    return "You Win! PAPER beats ROCK";
    }   else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
    return "You Win! SCISSORS beats PAPER";
    }   else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
    return "You Lose! PAPER beats ROCK";
    }   else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
    return "You Lose! SCISSORS beats PAPER";
    }   else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
    return "You Lose! ROCK beats SCISSORS";
    }   
    else (playerSelection == computerSelection)
    return "You Tied!";
}



console.log(playRound(playerSelection, computerSelection));