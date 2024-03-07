const currentNumber = document.getElementById("currentNumber");

function increase() {
    let number = Number(currentNumber.textContent);
    number += 1;
    currentNumber.textContent = number.toString();
}

function decrease() {
    let number = Number(currentNumber.textContent);
    number -= 1;
    currentNumber.textContent = number.toString();
}

function reset() {
    currentNumber.textContent = "0";
}