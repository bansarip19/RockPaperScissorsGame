console.log("Welcome to Rock Paper Scissors Game")
function getComputerChoice(){
 //store rock paper scissor in array
 let choice=['rock','paper','scissors']
 //loop through array and return random index
 let computerChoice=choice[Math.floor(Math.random()*choice.length)];
return computerChoice
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection==="rock" && computerSelection==="scissors" || playerSelection==="scissors" && computerSelection==="paper" || playerSelection==="paper" && computerSelection==="rock"){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
   function game(){
    let playerScore=0;
    let computerScore=0;
    for(let i=0; i<5; i++){
        const playerSelection = prompt("Please type in your choice: Rock or Paper or Scissors");
        const computerSelection = getComputerChoice();
        const result=playRound(playerSelection, computerSelection)
        console.log(`Round ${i + 1}: ${result}`);

    if (result.includes('Win')) {
      playerScore++;
    } else if (result.includes('Lose')) {
      computerScore++;
    }
  }

  console.log(`\nFinal Score\nPlayer: ${playerScore}\nComputer: ${computerScore}`);

  if (playerScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (playerScore < computerScore) {
    console.log("Sorry, you lost the game. Better luck next time!");
  } else {
    console.log("It's a tie!");
  }
    }
   
 game()