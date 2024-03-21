let currentInput = '0';

function updateDisplay () {
    document.getElementById('display').innerHTML = currentInput;
};

function appendNum(number) {
    if(currentInput === '0'){
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
};

function appendOperator(operator) {
    currentInput += operator;
    updateDisplay();
};

function appendDecimal() {
    if(!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
};