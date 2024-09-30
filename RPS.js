const rock = 1;
const paper = 2;
const scissors = 3;

let tie = 0;
let winner = 0;
let comScore = 0;
let playerScore = 0;

function RNG() {
    return Math.floor(Math.random() * 3); 
}

function comChoice() {
    let comPlayer = RNG();
    switch (comPlayer) {
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
        default: return 'invalid';
    }
}

function runGame(playerChoice) {
    const computerChoice = comChoice();
    
   
    document.getElementById("yourChoice").innerHTML = playerChoice;
    document.getElementById("comChoice").innerHTML = computerChoice;

  
    if (playerChoice === computerChoice) {
        winner = 1;
        tie++;
        document.getElementById("result").innerHTML = "You Tied";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        winner = 2;
        playerScore++;
        document.getElementById("result").innerHTML = "You Won";
    } else {
        winner = 3;
        comScore++;
        document.getElementById("result").innerHTML = "You Lost";
    }

   
    document.getElementById("yourScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = comScore;
    document.getElementById("ties").innerHTML = tie;
}

function resetGame() {
    tie = 0;
    winner = 0;
    comScore = 0;
    playerScore = 0;
    
    document.getElementById("yourChoice").innerHTML = '';
    document.getElementById("comChoice").innerHTML = '';
    document.getElementById("result").innerHTML = '';
    document.getElementById("yourScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = comScore;
    document.getElementById("ties").innerHTML = tie;
}


document.querySelectorAll('.rpsSelector').forEach(button => {
    if (button.value !== "Reset") {
        button.addEventListener('click', (event) => {
            const playerChoice = event.target.value;
            runGame(playerChoice);
        });
    }
});
