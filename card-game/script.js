let cards = []
let sum=0;
let hasBlackjack = false
let isAlive = false
let messages=""
let messageEl = document.getElementById("message")
let sumEl = document.querySelector("#sum")
let cardsEl = document.querySelector("#cards")

let player={
    name:"Adil",
    chips:100
}
let playerEl=document.querySelector(".player")
playerEl.textContent=player.name+": ₹"+player.chips
function startGame(){
    isAlive=true
    let firstcard=getRandomCard()
    let secondcard=getRandomCard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
    renderGame()
}
function newCard(){
    console.log("New Card!")
    if(isAlive===true && hasBlackjack===false){
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    renderGame()
}
    }
function renderGame(){
   // alert("The button was clicked!");
   cardsEl.textContent="Cards: "
   for(let i=0;i<cards.length;i++){
    cardsEl.textContent+=cards[i]+" "
   }
    sumEl.textContent = "Sum: " + sum
    if(sum<21){
        messages = "Do you want to draw a new card?"
    }
    else if(sum===21){
        messages = "Wohoo! You've got Blackjack!"
        hasBlackjack = true
    }
    else{   
        messages = "You're out of the game!"
        sumEl.textContent = "Sum: " + sum
        isAlive = false
        console.log("You're out of the game!")
    }   
    messageEl.textContent = messages
}
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber>10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    
    }
    else{
        return randomNumber
    }
}


