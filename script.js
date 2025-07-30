//memory variable to store values
let memory = 0;
//function to append input to the display
function appendToDisplay(value){
    const display = document.getElementById('result');

    // If the display shows '0' and the new value is a number (not operator), replace '0'
if(display.value === '0' && !isOperator(value)){
    display.value = value;
}
// If last character is an operator and new value is operator, replace it
    else if (isOperator(display.value.slice(-1)) && isOperator(value)) {
        display.value = display.value.slice(0, -1) + value;
    }
    // Otherwise, append the value
    else {
        display.value += value;
    }
}
// Helper function to check if a value is an operator
function isOperator(char) {
    return ['+', '-', '*', '/', '%'].includes(char);
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('result').value = '0';
}

// Function to delete the last character
function backspace() {
    const display = document.getElementById('result');
    if (display.value.length === 1) {
        display.value = '0';
    } else {
        display.value = display.value.slice(0, -1);
    }
}
// Main calculation function
function calculate() {
    const display = document.getElementById('result');
    try {
        // Replace × with * for proper evaluation
        let expression = display.value.replace(/×/g, '*');
        // Use JavaScript's eval() to calculate the result
        const result = eval(expression);
        
        // Display the result or 'Error' if something went wrong
        display.value = isFinite(result) ? result.toString() : 'Error';
    } catch (error) {
        display.value = 'Error';
    }
}
// Function to calculate square root
function calculateSqrt() {
    const display = document.getElementById('result');
    try {
        const value = parseFloat(display.value);
        if (value >= 0) {
            display.value = Math.sqrt(value).toString();
        } else {
            display.value = 'Error';
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to calculate percentage
function calculatePercent() {
    const display = document.getElementById('result');
    try {
        const value = parseFloat(display.value);
        display.value = (value / 100).toString();
    } catch (error) {
        display.value = 'Error';
    }
}

// Memory functions
function memoryAdd() {
    const display = document.getElementById('result');
    try {
        const value = parseFloat(display.value);
        memory += value;
    } catch (error) {
        display.value = 'Error';
    }
}

function memorySubtract() {
    const display = document.getElementById('result');
    try {
        const value = parseFloat(display.value);
        memory -= value;
    } catch (error) {
        display.value = 'Error';
    }
}

function memoryRecall() {
    document.getElementById('result').value = memory.toString();
}

function memoryClear() {
    memory = 0;
}