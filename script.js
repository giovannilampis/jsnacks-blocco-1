"use script"

// SNACK 1 

const firstNumber = prompt("Inserire il primo numero");

const secondNumber = prompt("Inserire il secondo numero");

const resultOp = document.getElementById("result");

if ( firstNumber > secondNumber ) {
    resultOp.innerHTML += ` ${firstNumber}`
} else if ( secondNumber > firstNumber ) {
    resultOp.innerHTML += ` ${secondNumber}`;

} else {
    resultOp.innerHTML = "I due numeri inseriti sono uguali";
}



// SNACK 2

