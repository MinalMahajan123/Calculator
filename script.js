let display = document.getElementById('display');
let calculation = '';

function appendChar(char) {
    calculation += char;
    display.value = calculation;
}

function clearDisplay() {
    calculation = '';
    display.value = calculation;
}

function deleteChar() {
    calculation = calculation.slice(0, -1);
    display.value = calculation;
}

function calculate() {
    try {
        let result = eval(calculation);
        display.value = result;
        calculation = result.toString();
    } catch (error) {
        display.value = 'Error';
        calculation ='';
   }
}
