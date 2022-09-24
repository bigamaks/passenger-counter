// let firstCard = getRandomCard();
// let secondcard = getRandomCard();
let allCards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player = {
     name : "Amaks",
     chips : 150
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips;
// console.log(cards);

// let age = 100;
// if (age < 100){
//     alert("Go home!");
// } else if (age === 100){
//     alert("Come in!");
// } else {
//     alert ("run");
// }
function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    allCards[firstCard, secondCard]
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
}

function getRandomCard() {
    let randomGame = Math.floor(Math.random() * 13) + 1;
    if (randomGame > 10){
        return 10
    } else if (randomGame === 1){
        return 11
    } else {
        return randomGame
    }
}
function renderGame() {
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < allCards.length; i++){
        cardEl.textContent += allCards[i] + " ";
    }
    
    sumEl.textContent = "sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw out a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got a blackjack";
        isAlive = true;
    } else {
        message = "You're out!";
        isAlive = false;
        
    }
    messageEl.textContent = message;
    // console.log(message);

}


 function newCard() {
     if (isAlive === true && hasBlackJack === false) {
         let card = getRandomCard();
         sum += card;
         allCards.push(card);
         // console.log(allCards);
         renderGame();
     }
 } 

