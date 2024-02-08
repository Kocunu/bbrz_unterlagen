let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = parseAndCalculate(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function parseAndCalculate(expression) {
    const tokens = expression.match(/[+\-*/]|\d+/g);
    if (!tokens) return NaN;

    let result = parseFloat(tokens[0]);
    let currentOperator = null;

    for (let i = 1; i < tokens.length; i++) {
        const token = tokens[i];

        if (['+', '-', '*', '/'].includes(token)) {
            currentOperator = token;
        } else {
            const operand = parseFloat(token);

            switch (currentOperator) {
                case '+':
                    result += operand;
                    break;
                case '-':
                    result -= operand;
                    break;
                case '*':
                    result *= operand;
                    break;
                case '/':
                    if (operand !== 0) {
                        result /= operand;
                    } else {
                        throw new Error('Division by zero');
                    }
                    break;
                default:
                    throw new Error('Invalid operator');
            }
        }
    }

    return result;
}

