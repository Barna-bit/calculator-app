let currentInput = '0';
let shouldReset = false;

function appendToDisplay(value) {
    if (currentInput === '0' || shouldReset) {
        currentInput = value;
        shouldReset = false;
    } else {
        currentInput += value;
    }
    document.getElementById('display').innerText = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    document.getElementById('display').innerText = currentInput;
    shouldReset = false;
}

function calculate() {
    try {
        currentInput = eval(
            currentInput.replace(/÷/g, '/').replace(/×/g, '*')
        ).toString();
        document.getElementById('display').innerText = currentInput;
        shouldReset = true;
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
        currentInput = '0';
        setTimeout(clearDisplay, 1000);
    }
}