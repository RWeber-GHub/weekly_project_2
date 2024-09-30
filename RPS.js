function RNG(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function randomOperation() {
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
