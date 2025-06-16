const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
const resultat = document.getElementById("resultat");
const buttons = document.querySelectorAll("#choice button");

let playerScore = 0;
let computerScore = 0;
let resultatFinale = false;
document.getElementById("restart").hidden = true;

function playGame (playerChoice) {
    if (resultatFinale) return;
const computerChoice = choices [Math.floor(Math.random() * 3)];
let result = "";
if (playerChoice === computerChoice) {
result = "IT'S A TIE!";
}
else{
    switch(playerChoice){
        case "rock":

        result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!"
        break;
        case "paper":
        result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
        break;
        case "scissors":
        result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
        break;

    }

    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}` ;
    computerDisplay.textContent = `Computer: ${computerChoice}` ;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText", "redText");
    switch(result){
        case "YOU WIN!":
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        break;
        case "YOU LOSE!":
        resultDisplay.classList.add("redText");
        computerScore++; 
        computerScoreDisplay.textContent = computerScore;
        break;
    }
    if (playerScore === 3 || computerScore === 3) {
        resultatFinale = true;
        resultat.textContent = playerScore === 3 ? "🎉 Player Wins the Game!" : "💻 Computer Wins the Game!";
        resultat.style.color = playerScore === 3 ? "green" : "red";
        buttons.forEach(btn => btn.disabled = true);
        document.getElementById("restart").hidden = false;
    }
    
}
function restart() {
        playerScore = 0;
        computerScore = 0;
        resultatFinale = false;

        playerScoreDisplay.textContent = "0";
        computerScoreDisplay.textContent = "0";
        resultDisplay.textContent = "";
        playerDisplay.textContent = "PLAYER: ";
        computerDisplay.textContent = "COMPUTER: ";
        resultat.textContent = "";
        buttons.forEach(btn => btn.disabled = false);
        document.getElementById("restart").hidden = true;
    }