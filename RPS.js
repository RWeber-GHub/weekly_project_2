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

function winnerCalc(){
switch (gameOutput) {
    case 'Rock':
        winner = comPlayer - rpsSelector
        
        break;
    case 'Paper':
        winner = comPlayer - rpsSelector

        break;
    case 'Scissors':
        winner = comPlayer - rpsSelector

        break;
    default:
        winner = comPlayer - rpsSelector
        
        break;
}

return { randomProblem, answer };
}