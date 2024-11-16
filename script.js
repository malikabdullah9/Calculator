function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); 
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        
        let expression = display.value;

        
        expression = expression.replace(/10\^(\d+)/g, 'Math.pow(10, $1)');

        
        expression = expression.replace(/√(\d+)/g, 'Math.sqrt($1)');

        
        expression = expression.replace(/sin\(([^)]+)\)/g, (_, angle) => `Math.sin(${angle} * Math.PI / 180)`);
        expression = expression.replace(/cos\(([^)]+)\)/g, (_, angle) => `Math.cos(${angle} * Math.PI / 180)`);
        expression = expression.replace(/tan\(([^)]+)\)/g, (_, angle) => `Math.tan(${angle} * Math.PI / 180)`);

        
        let result = eval(expression);
        display.value = result;
    } catch (e) {
        alert('Error: Invalid expression');
        clearDisplay();
    }
}

function calculateSqrt() {
    appendToDisplay('√'); 
}

function calculatePower() {
    appendToDisplay('10^'); 
}

function calculateSin() {
    appendToDisplay('sin(');
}

function calculateCos() {
    appendToDisplay('cos(');
}

function calculateTan() {
    appendToDisplay('tan(');
}
