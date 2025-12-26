

let countEl=document.getElementById("count")
//console.log(countEl)
let count=0
function increment() {
    count++;
    countEl.innerText=count
    //console.log(count)
}
function decrement() {
    count--;
   countEl.innerText=count
}
function reset(){
    count=0;
    countEl.innerText=count

}




