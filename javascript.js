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
    displayValue = displayValue.toString().slice(0, -1); 
    
    if (displayValue === 0 || displayValue === "-") {
        display.innerText = "";
    } else {
        display.innerText = displayValue;
    }
});

window.onkeydown = function(e) {
    e.preventDefault();
    let x = e.key;
    let choice;

    switch(x) {
        case '1': 
            choice = document.querySelector(`button[value="1"]`);
            choice.click();
            break;
        case '2':
            choice = document.querySelector(`button[value="2"]`);
            choice.click();
            break;
        case '3':
            choice = document.querySelector(`button[value="3"]`);
            choice.click();
            break;
        case '4':
            choice = document.querySelector(`button[value="4"]`);
            choice.click();
            break;
        case '5': 
            choice = document.querySelector(`button[value="5"]`);
            choice.click();
            break;
        case '6':
            choice = document.querySelector(`button[value="6"]`);
            choice.click();
            break;
        case '7':
            choice = document.querySelector(`button[value="7"]`);
            choice.click();
            break;
        case '8':
            choice = document.querySelector(`button[value="8"]`);
            choice.click();
            break;
        case '9': 
            choice = document.querySelector(`button[value="9"]`);
            choice.click();
            break;
        case '0':
            choice = document.querySelector(`button[value="0"]`);
            choice.click();
            break;
        case '+':
            choice = document.querySelector(`button[value="addition"]`);
            choice.click();
            break;
        case '-':
            choice = document.querySelector(`button[value="subtraction"]`);
            choice.click();
            break;
        case '/':
            choice = document.querySelector(`button[value="division"]`);
            choice.click();
            break;
        case '*':
            choice = document.querySelector(`button[value="multiplication"]`);
            choice.click();
            break;
        case '.':
            choice = document.querySelector(`button[value="."]`);
            choice.click();
            break;
        case '=':
        case 'Enter':
            choice = document.querySelector(`button[value="equal"]`);
            choice.click();
            break;
        case 'Backspace':
            choice = document.getElementById("delete");
            choice.click();
            break;
        case 'c':
            choice = document.getElementById("clear");
            choice.click();
            break;
    }
}