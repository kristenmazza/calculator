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