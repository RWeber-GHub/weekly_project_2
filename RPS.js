const rock = 1;
const paper = 2;
const scissors = 3;

let tie = 0;
let winner = 0;
let comScore = 0;
let playerScore = 0;

function RNG(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function comChoice() {
    let comPlayer = RNG(0, 3)
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
    const playerChoice = document.getElementById("rpsSelector").value

            if (playerChoice === "Rock" && comPlayer === 'Rock') {
            winner = 1
            tie = tie + 1
        } 
            else if (playerChoice === "Rock" && comPlayer === 'Scissors') {
                winner = 2
                playerScore = playerScore + 1
        } 
            else if (playerChoice === "Rock" && comPlayer === 'Paper') {
                winner = 3
                comScore = comScore + 1
        } 

            else if (playerChoice === "Paper" && comPlayer === 'Paper') {
                winner = 1
                tie = tie + 1
        }   
            else if (playerChoice === "Paper" && comPlayer === 'Rock') {
                winner = 2
                playerScore = playerScore + 1
        } 
            else if (playerChoice === "Paper" && comPlayer === 'Scissors') {
                winner = 3
                comScore = comScore + 1
        } 
        
            else if (playerChoice === "Scissors" && comPlayer === 'Scissors') {
                winner = 1
                tie = tie + 1
        }
            else if (playerChoice === "Scissors" && comPlayer === 'Paper') {
                winner = 2
                playerScore = playerScore + 1
        } 
            else if (playerChoice === "Scissors" && comPlayer === 'Rock') {
                winner = 3
                comScore = comScore + 1
        }  
        
    
            else if (playerChoice === "End") {
            console.log(`Game Over the final score was Player:${playerScore} - Computer:${comScore} - Ties:${tie} `)
        } 
   
    

    document.getElementById("rpsSelector").selectedIndex = 0;
}