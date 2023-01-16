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
let operatorValue = null;
const display = document.querySelector('.display');
let operatorLastSelected = false;

const numbers = document.querySelectorAll('.numbers');
numbers.forEach(number => {
    number.addEventListener("click", () => {

        if (operatorLastSelected === true) {
            // Reset display value
            display.innerText = "";

            operatorLastSelected = false;
        }

        const value = number.getAttribute("value");

        // Do nothing if display already contains a decimal point and user attempts to
        // add another decimal point
        if (value === "." && (display.innerText).includes(".")) {
            return;
        }

        // Populate the display when numbers are selected, up to a certain length
        if ((display.innerText).length < 9) {
            display.innerText += value;
            displayValue = parseFloat(display.innerText);
        } else {
            return;
        }
    });
})                                                                                                                                                                                                                         

const operators = document.querySelectorAll('.operators');
operators.forEach(operator => {
    operator.addEventListener("click", () => {

        const previousOperator = operatorValue;
        operatorValue = operator.getAttribute("value");

        // Prevents unexpected events when repeatedly selecting equal sign without 
        // a previous operator
        if (previousOperator === "equal" && operatorValue === "equal") {
            return;
        }

        if (calculatedValue === null) {
            calculatedValue = displayValue;
        } else {
            calculatedValue = operate(previousOperator, calculatedValue, displayValue);

            // Display calculation if finite number. If result is infinity, display error.
            if (isFinite(calculatedValue)) {
                display.innerText = +(calculatedValue.toFixed(5));
            } else {
                display.innerText = "ERROR";
            }
        }

        // If a calculation is made using the equal sign, and then a new number is immediately 
        // entered, reset the calculation to start fresh with the newly entered number
        if (calculatedValue != null && operatorValue === "equal") {
            calculatedValue = null;
            displayValue = parseFloat(display.innerText);
        }

        operatorLastSelected = true;
    });
});
                                                                                                                                                                                              
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener("click", () => {
    displayValue = "";
    calculatedValue = null;
    operatorValue = null;

    display.innerText = displayValue;
});

const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener("click", () => {
    displayValue = +(displayValue.toString().slice(0, -1)); 
    display.innerText = displayValue;
});