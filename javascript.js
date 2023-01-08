// Calculator operator functions
const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};

// Operate function takes on an operator and two numbers, then calls the addition
// subtraction, multiplication, and division functions on them
function operate(operator, a, b) {
    switch (operator) {
        case addSign:
            add(a, b);
            break;
        case subtractSign:
            subtract(a, b);
            break;
        case multiplySign(a, b):
            multiply(a, b);
            break;
        case divideSign(a, b):
            divide(a, b);
            break;
    }
}


const buttons = document.querySelectorAll('.buttons');
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("value");
        const display = document.querySelector('.display');

        // Populate the display when numbers are selected
        while (button.classList.contains('numbers')) {
            display.innerText += value;
            displayValue = display.innerText;
            console.log(displayValue);
            return displayValue;
        }
    })
})                                                                                                                                                                                                                         

