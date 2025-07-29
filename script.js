let currentInput = '';
let memory = 0;
let resetScreen = false;

const resultDisplay = document.getElementById('result');
resultDisplay.value = '0';

function appendToDisplay(value) {
  if (value === '.' && currentInput.includes('.')) return;

  if (resultDisplay.value === '0' || resetScreen) {
    currentInput = '';
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
    if (/\/0(?!\d)/.test(currentInput)) {
      alert("Division by zero is not allowed!");
      clearDisplay();
      return;
    }

    const result = eval(currentInput);
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
  try {
    const num = parseFloat(currentInput || resultDisplay.value);
    if (isNaN(num) || num < 0) {
      alert("Invalid input for square root");
      return;
    }
    const result = Math.sqrt(num);
    resultDisplay.value = result;
    currentInput = result.toString();
    resetScreen = true;
  } catch {
    alert("Error");
  }
}

function calculatePercent() {
  try {
    const num = parseFloat(currentInput || resultDisplay.value);
    if (isNaN(num)) return;
    const result = num / 100;
    resultDisplay.value = result;
    currentInput = result.toString();
    resetScreen = true;
  } catch {
    alert("Error");
  }
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
  resultDisplay.value = memory.toString();
  currentInput = memory.toString();
  resetScreen = true;
}

function memoryClear() {
  memory = 0;
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  const allowedKeys = '0123456789/*-+.';
  if (allowedKeys.includes(e.key)) appendToDisplay(e.key);
  if (e.key === 'Enter' || e.key === '=') calculate();
  if (e.key === 'Backspace') backspace();
  if (e.key === 'Escape') clearDisplay();
});