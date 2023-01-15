// Calculator operator functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Operate function takes on an operator and two numbers, then calls the addition
// subtraction, multiplication, and division functions on them
function operate(operator, a, b) {
    let result = null;
    switch (operator) {
        case "addition":
            result = add(a, b);
            break;
        case "subtraction":
            result = subtract(a, b);
            break;
        case "multiplication":
            result = multiply(a, b);
            break;
        case "division":
            result = divide(a, b);
            break;
        case "equal":
            result = a;
    }
    return result;
}

let displayValue = "";
let calculatedValue = null;
let secondValue = null;
let operatorValue = null;
const display = document.querySelector('.display');

let operatorLastSelected = false;
const numbers = document.querySelectorAll('.numbers');
numbers.forEach(number => {
    number.addEventListener("click", () => {

        if (operatorLastSelected === true) {
            // reset display value
            display.innerText = "";

            operatorLastSelected = false;
        }

        const value = number.getAttribute("value");

        // Populate the display when numbers are selected
        display.innerText += value;
        displayValue = parseFloat(display.innerText);
    });
})                                                                                                                                                                                                                         

const operators = document.querySelectorAll('.operators');
operators.forEach(operator => {
    operator.addEventListener("click", () => {

        const previousOperator = operatorValue;
        operatorValue = operator.getAttribute("value");

        if (previousOperator === "equal" && operatorValue === "equal") {
            return;
        }

        if (calculatedValue === null) {
            calculatedValue = displayValue;
        } else {
            calculatedValue = operate(previousOperator, calculatedValue, displayValue);
            display.innerText = calculatedValue;
        }

        operatorLastSelected = true;
    });
});
                                                                                                                                                                                              

