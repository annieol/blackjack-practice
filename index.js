let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false

if (sum <= 20) {
    console.log("Do you want to draw a new card? :-)")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! :-D")
    hasBlackJack = true
} else {
    console.log("You're out of the game! :-(")
}
age = 10

if (age < 100) {
    console.log("Not elegible!")
} else if (age === 100) {
    console.log("Here is your birthday card from the king!")
} else {
    console.log("Not elegible, you have already gotten one")
}