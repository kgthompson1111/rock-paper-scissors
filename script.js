 /*
 function game() {
 humanPlay();
 computerPlay();
 roundPlay(humanGuess, computerGuess);
 console.log(humanScore);
 console.log(computerScore);
 if (humanScore === 5 || computerScore === 5) {
     winner = true;
     return winner;
 } */
 
/*
 if (humanScore === 5) {
     console.log("With 5 points, you are the ultimate winner - congratulations!");
 } else if (computerScore === 5) {
     console.log("The computer scored 5 points - you are the ultimate loser!");
 } */

 //initialize the human score and set to 0, append to human score holder div
let humanScoreHolder = document.querySelector('#humanScoreHolder');
let humanScore;
humanScore = 0;
humanScoreHolder.textContent = humanScore;

//initialize the computer score and set to 0, append to computer score holder div
let computerScoreHolder = document.querySelector('#computerScoreHolder');
let computerScore;
computerScoreHolder.textContent = computerScore;
computerScore = 0;
computerScoreHolder.textContent = computerScore;

//initialize the round text holder for round feedback
let roundTextHolder = document.querySelector('#roundTextHolder');
let roundText = "";

//set winner to false for while loop
let winner = false;

//create humanGuess and computerGuess variables for round
let computerGuess;
let humanGuess;

//define choice buttons into javascript
const choiceButtons = document.querySelectorAll('.choiceButton');

//computer guessing function - chooses rock, paper or scissors
function computerPlay() {
    let randomizedGuess = Math.floor(Math.random() * 3) + 1;
    switch (randomizedGuess) {
        case 1:
            computerGuess = "rock";
            break;
        case 2:
            computerGuess = "paper";
            break;
        case 3:
            computerGuess = "scissors";
            break;   
        }
    return computerGuess;
    }

// play a round - takes humanGuess and computerGuess as an arguement and compares value
    function takeScore(humanGuess, computerGuess) {
        if (humanGuess === computerGuess) {
        // Tie scenario
            roundTextHolder.setAttribute('style', 'color: blue');
            roundText = `You both chose ${humanGuess} - it's a tie! Choose again.`
            roundTextHolder.textContent = roundText;
        //Computer win scenarios
        } else if (humanGuess === "rock" && computerGuess === "paper") {
            roundText = `Computer wins - ${computerGuess} beats ${humanGuess}`
            roundTextHolder.setAttribute('style', 'color: red');
            roundTextHolder.textContent = roundText;
            computerScore += 1;
            computerScoreHolder.textContent = computerScore;

        } else if (humanGuess === "paper" && computerGuess === "scissors") {
            roundText = `Computer wins - ${computerGuess} beats ${humanGuess}`
            roundTextHolder.setAttribute('style', 'color: red');
            roundTextHolder.textContent = roundText;
            computerScore += 1;
            computerScoreHolder.textContent = computerScore;

        } else if (humanGuess === "scissors" && computerGuess === "rock") {
            roundText = `Computer wins - ${computerGuess} beats ${humanGuess}`
            roundTextHolder.setAttribute('style', 'color: red');
            roundTextHolder.textContent = roundText;
            computerScore += 1;
            computerScoreHolder.textContent = computerScore;

        //Human win scenarios
        } else if (humanGuess === "rock" && computerGuess === "scissors") {
            roundText = `You win - ${humanGuess} beats ${computerGuess}`
            roundTextHolder.setAttribute('style', 'color: green');
            roundTextHolder.textContent = roundText;
            humanScore += 1;
            humanScoreHolder.textContent = humanScore;

        } else if (humanGuess === "paper" && computerGuess === "rock") {
            roundText = `You win - ${humanGuess} beats ${computerGuess}`
            roundTextHolder.setAttribute('style', 'color: green');
            roundTextHolder.textContent = roundText;
            humanScore += 1;
            humanScoreHolder.textContent = humanScore;

        } else if (humanGuess === "scissors" && computerGuess === "paper") {
            roundText = `You win - ${humanGuess} beats ${computerGuess}`
            roundTextHolder.setAttribute('style', 'color: green');
            roundTextHolder.textContent = roundText;
            humanScore += 1;
            humanScoreHolder.textContent = humanScore;
        }
    }

        // Call game function - make buttons active and call a round when player selects a choice
        choiceButtons.forEach((button) => {
            button.addEventListener('click', () => {
            humanGuess = button.id;
            computerPlay();
            takeScore(humanGuess, computerGuess);
        // After a round - check to see if there's a winner
            if(humanScore === 5) {
                alert("YOU WIN");
                roundText = "With 5 points, you are the ultimate winner! Play again?"
                roundTextHolder.setAttribute('style', 'color:green');
                roundTextHolder.textContent = roundText;
                winner = true;
            } else if (computerScore === 5) {
                alert("YOU LOSE!");
                roundText = "LOSER! The computer scored 5 points before you. Play again?"
                roundTextHolder.setAttribute('style', 'color:red');
                roundTextHolder.textContent = roundText;
                winner = true;
            }
            if (winner === true) {
                humanScore = 0;
                humanScoreHolder.textContent = humanScore;
                computerScore = 0;
                computerScoreHolder.textContent = computerScore;
                winner = false;
            }
            })
        })
    