let currentInput = '';
let memory = 0;
let resetScreen = false;

const resultDisplay = document.getElementById('result');
resultDisplay.value = '0';

function appendToDisplay(value) {
    if (value === '.' && /\.\d*$/.test(currentInput)) return;
    
    if ('+-*/'.includes(value)) {
        const lastChar = currentInput.slice(-1);
        if ('+-*/'.includes(lastChar)) {
            currentInput = currentInput.slice(0, -1);
        }
    }

    if (resultDisplay.value === '0' || resetScreen) {
        if (value !== '.') {
            currentInput = '';
        }
        resetScreen = false;
    }

    currentInput += value;
    resultDisplay.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    resultDisplay.value = '0';
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    resultDisplay.value = currentInput || '0';
}

function calculate() {
    try {
        if (!currentInput) return;
        
        // Replace × with * for proper evaluation
        const expression = currentInput.replace(/×/g, '*');
        
        if (/\/0(?!\.|\d)/.test(expression)) {
            alert("Division by zero is not allowed!");
            clearDisplay();
            return;
        }

        const result = eval(expression);
        resultDisplay.value = result;
        currentInput = result.toString();
        resetScreen = true;
    } catch (error) {
        alert("Invalid Expression");
        clearDisplay();
    }
}

// Advanced Functions
function calculateSqrt() {
    const num = parseFloat(resultDisplay.value);
    if (isNaN(num) || num < 0) {
        alert("Invalid input for square root");
        return;
    }
    const result = Math.sqrt(num);
    resultDisplay.value = result;
    currentInput = result.toString();
    resetScreen = true;
}

function calculatePercent() {
    const num = parseFloat(resultDisplay.value);
    if (isNaN(num)) return;
    const result = num / 100;
    resultDisplay.value = result;
    currentInput = result.toString();
    resetScreen = true;
}

// Memory Functions
function memoryAdd() {
    const value = parseFloat(resultDisplay.value);
    if (!isNaN(value)) memory += value;
}

function memorySubtract() {
    const value = parseFloat(resultDisplay.value);
    if (!isNaN(value)) memory -= value;
}

function memoryRecall() {
    resultDisplay.value = memory;
    currentInput = memory.toString();
    resetScreen = true;
}

function memoryClear() {
    memory = 0;
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') appendToDisplay(e.key);
    if (['+', '-', '*', '/', '.'].includes(e.key)) appendToDisplay(e.key);
    if (e.key === 'Enter' || e.key === '=') calculate();
    if (e.key === 'Backspace') backspace();
    if (e.key === 'Escape') clearDisplay();
    if (e.key === '%') calculatePercent();
    if (e.key === 's' || e.key === 'S') calculateSqrt();
});