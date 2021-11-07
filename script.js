 // declare two variables - the computer's guess, and the human's guess
 /*
 let computerGuess, humanGuess;
 let computerScore = 0;
 let humanScore = 0;

 function computerPlay() {
     let randomizedGuess = Math.floor(Math.random() * 3) + 1;
     if (randomizedGuess === 1) {
         computerGuess = "rock";
     } else if (randomizedGuess === 2) {
         computerGuess = "paper";
     } else if (randomizedGuess === 3) {
         computerGuess = "scissors";
     }
     return computerGuess;
 }

 function humanPlay() {
     let guessed = false;
     let humanGuessInput;
     while (guessed === false) {
         humanGuessInput = prompt("Choose your weapon!", "");
         humanGuessInput = humanGuessInput.toLowerCase();
         if (humanGuessInput === "rock" || humanGuessInput === "paper" || humanGuessInput === "scissors") {
             humanGuess = humanGuessInput;
             return humanGuess;
             guessed = true;
         } 
     }   
 }

 function roundPlay(humanGuess, computerGuess) {
     if (humanGuess === computerGuess) {
         console.log("It's a tie! Play again");
     } else if (humanGuess === "rock" && computerGuess === "paper") {
         console.log("You lose!");
         computerScore += 1;
     } else if (humanGuess === "rock" && computerGuess === "scissors") {
         console.log("You win!");
         humanScore += 1;
     } else if (humanGuess === "paper" && computerGuess === "rock") {
         console.log("You win!");
         humanScore += 1;
     } else if (humanGuess === "paper" && computerGuess === "scissors") {
         console.log("You lose!");
         computerScore += 1;
     } else if (humanGuess === "scissors" && computerGuess === "rock") {
         console.log("You lose!");
         computerScore += 1;
     } else if (humanGuess === "scissors" && computerGuess === "paper") {
         console.log("You win!");
         humanScore += 1;
     }
 }


 function game() {
 humanPlay();
 computerPlay();
 roundPlay(humanGuess, computerGuess);
 console.log(humanScore);
 console.log(computerScore);
 if (humanScore === 5 || computerScore === 5) {
     winner = true;
     return winner;
 }
 }

 while (winner === false) {
 game();
 }

 if (humanScore === 5) {
     console.log("With 5 points, you are the ultimate winner - congratulations!");
 } else if (computerScore === 5) {
     console.log("The computer scored 5 points - you are the ultimate loser!");
 }

 */

let playerScore = 0;
let playerScoreHolder = document.querySelector('#playerScoreHolder');
playerScoreHolder.textContent = playerScore;

let computerScore = 0
let computerScoreHolder = document.querySelector('#computerScoreHolder');
computerScoreHolder.textContent = computerScore;

let winner = false;

 const choiceButtons = document.querySelectorAll('.choiceButton');
 choiceButtons.forEach((button) => {
     button.addEventListener('click', () => {
         console.log(button.id);
         return button.id;
     })
 })