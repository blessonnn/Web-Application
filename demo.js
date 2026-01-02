let player1time = 5
let player2time = 7

function winner(){
    if(player1time<player2time){
        return player1time
    }
    else{
        return player2time
    }
}

let result = winner()