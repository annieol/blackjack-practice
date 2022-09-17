let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")
let thirdCard = 7


function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent += " " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    message = "Drawing out a new card from the deck!"
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard + " " + thirdCard
    sum = firstCard + secondCard + thirdCard
    sumEl.textContent = "Sum: " + sum
}

