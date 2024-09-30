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
       
            if (playerChoice === "Rock" && comChoice === 'Rock') {
                winner = 1
                tie = tie + 1

                document.getElementById("yourChoice").innerHTML = "Rock";
                document.getElementById("comChoice").innerHTML = "Rock";
        } 
            else if (playerChoice === "Rock" && comChoice === 'Scissors') {
                winner = 2
                playerScore = playerScore + 1

                document.getElementById("yourChoice").innerHTML = "Rock";
                document.getElementById("comChoice").innerHTML = "Scissors";
        } 
            else if (playerChoice === "Rock" && comChoice === 'Paper') {
                winner = 3
                comScore = comScore + 1

                document.getElementById("yourChoice").innerHTML = "Rock";
                document.getElementById("comChoice").innerHTML = "Paper";
        } 

            else if (playerChoice === "Paper" && comChoice === 'Paper') {
                winner = 1
                tie = tie + 1

                document.getElementById("yourChoice").innerHTML = "Paper";
                document.getElementById("comChoice").innerHTML = "Paper";
        }   
            else if (playerChoice === "Paper" && comChoice === 'Rock') {
                winner = 2
                playerScore = playerScore + 1

                document.getElementById("yourChoice").innerHTML = "Paper";
                document.getElementById("comChoice").innerHTML = "Rock";
        } 
            else if (playerChoice === "Paper" && comChoice === 'Scissors') {
                winner = 3
                comScore = comScore + 1
                document.getElementById("yourChoice").innerHTML = "Paper";
                document.getElementById("comChoice").innerHTML = "Scissors";
        } 
        
            else if (playerChoice === "Scissors" && comChoice === 'Scissors') {
                winner = 1
                tie = tie + 1
                document.getElementById("yourChoice").innerHTML = "Scissors";
                document.getElementById("comChoice").innerHTML = "Scissors";
        }
            else if (playerChoice === "Scissors" && comChoice === 'Paper') {
                winner = 2
                playerScore = playerScore + 1
                document.getElementById("yourChoice").innerHTML = "Scissors";
                document.getElementById("comChoice").innerHTML = "Paper";
        } 
            else if (playerChoice === "Scissors" && comChoice === 'Rock') {
                winner = 3
                comScore = comScore + 1
                document.getElementById("yourChoice").innerHTML = "Scissors";
                document.getElementById("comChoice").innerHTML = "Rock";
        }  
        
    
            else if (playerChoice === "End") {
            console.log(`Game Over the final score was Player:${playerScore} - Computer:${comScore} - Ties:${tie} `)
        } 
   
    

    document.getElementById("rpsSelector").selectedIndex = 0;
}