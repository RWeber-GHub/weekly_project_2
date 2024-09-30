const rock = 1;
const paper = 2;
const scissors = 3;

let tie = 0;
let winner = 0;
let comScore = 0;
let playerScore = 0;



function RNG() {
    return Math.floor(Math.random()* 3)
}


function comChoice() {
    let comPlayer = RNG(0, 2)
    switch (comPlayer) {
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        case 2:
            return 'Scissors'
        default:
            return 'invalid'
    }
}

function runGame() {
    const computerChoice = comChoice();

    document.getElementById("yourChoice").innerHTML = playerChoice;
    document.getElementById("comChoice").innerHTML = computerChoice;
       
            if (playerChoice === computerChoice) {
                winner = 1;
                tie++; }
         
            else if (
                (playerChoice === "Rock" && computerChoice === "Scissors") ||
                (playerChoice === "Paper" && computerChoice === "Rock") ||
                (playerChoice === "Scissors" && computerChoice === "Paper")
            ) {
                winner = 2;
            playerScore++; } 
            
            else {
                winner = 3;
                comScore++; }
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
        button.addEventListener('click', (event) => {
            const playerChoice = event.target.value;
            runGame(playerChoice);
        });
    });