let pass1=document.getElementById("password1")
pass1.textContent=""
let pass2=document.getElementById("password2")
pass2.textContent=""
 

let characters=["a","b","c","d","e","f","g","h","i","j","k",
    "l","m","n","o","p","q","r","s","t","u","v","w","x","y",
    "z","A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "0","1","2","3","4","5","6","7","8","9","!","@","#","$",
    "%","^","&","*","(",")","_","+","-","=","{","}",
    "[","]","|",";",":","'",",","<",">","?","/","\\"]
function generatePassword(){
    pass1.textContent = ""
    pass2.textContent = ""
    for(let i=0;i<16;i++){
        let index=Math.floor(Math.random()*characters.length)
        pass1.textContent+=characters[index];
         let index2=Math.floor(Math.random()*characters.length)
        pass2.textContent+=characters[index2];
    }
}