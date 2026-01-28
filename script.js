let display = document.getElementById('display');

function appendValue(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value); // evaluates the expression
    } catch {
        display.value = 'Error!';
    }
}
