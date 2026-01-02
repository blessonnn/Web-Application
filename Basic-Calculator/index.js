let num1 = 8;
let num2 = 10;
document.getElementById("num1").textContent = num1;
document.getElementById("num2").textContent = num2;
let result = document.getElementById("result");

function add() {
    console.log("Add button clicked!");
    let sum = num1 + num2;
    result.textContent = "Result: " + sum;
}

function substract() {
    console.log("Substract button clicked!");
    let difference = num1 - num2;
    result.textContent = "Result: " + difference;
}

function multiply() {
    console.log("Multiply button clicked!");
    let product = num1 * num2;
    result.textContent = "Result: " + product;
}
