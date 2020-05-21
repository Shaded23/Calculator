//TO DO:
//

let num1 = { value: '0' };
let num2 = { value: '' };
let hasOperation = false;
let operator = null;

//Display and Number Functions
function updateDisplay() {
	let display = document.getElementById('display');

	if (!hasOperation) {
		display.innerHTML = `${num1.value}`;
	} else if (num2.value === '') {
		display.innerText = `${num1.value} ${operator}`;
	} else {
		display.innerText = `${num1.value} ${operator} ${num2.value}`;
	}
}
function findNumberToAppend() {
	if (!hasOperation) {
		return num1;
	} else {
		return num2;
	}
}
function numberSelect(num) {
	let number = findNumberToAppend();
	if (number.value === '0' && num === '0') {
		return;
	} else if (number.value === '0' && num !== '0') {
		number.value = num;
	} else {
		number.value += num;
	}
	updateDisplay();
}

//Operation and Equal Functions
function operationSelect(operation) {
	operator = operation;
	hasOperation = true;
	updateDisplay();
}
function equalSelect() {
	let number1 = Number(num1.value);
	let number2 = Number(num2.value);

	switch (operator) {
		case '+':
			num1.value = String(number1 + number2);
			break;
		case '-':
			num1.value = String(number1 - number2);
			break;
		case '*':
			num1.value = String(number1 * number2);
			break;
		case '/':
			if (number2 === 0) {
				num1.value = 'Cannot divide by zero';
				divideByZeroClear();
				return;
			} else {
				num1.value = String(number1 / number2);
			}
			break;
	}

	resetAfterEqual();
	updateDisplay();
}

//Clear and Reset Functions
function resetAfterEqual() {
	operator = null;
	hasOperation = false;
	num2.value = '';
}
function clearSelect() {
	num1.value = '0';
	num2.value = '';
	hasOperation = false;
	operator = null;
	updateDisplay();
}
function clearEntrySelect() {
	let number = findNumberToAppend();
	number.value = '0';
	updateDisplay();
}
function divideByZeroClear() {
	operator = null;
	hasOperation = false;
	updateDisplay();
	num1.value = '0';
}
function backspaceSelect() {
	let number = findNumberToAppend();

	if (number.value.length >= 2) {
		number.value = number.value.slice(0, -1);
	} else {
		number.value = '0';
	}

	updateDisplay();
}

//Decimal and Plus Minus
function decimalSelect() {
	let number = findNumberToAppend();

	if (!number.value.includes('.')) {
		number.value += '.';
	}

	updateDisplay();
}
function plusMinusSelect() {
	let number = findNumberToAppend();

	if (number.value === '0') {
		return;
	} else if (number.value.includes('-')) {
		number.value = number.value.substring(1);
	} else {
		number.value = '-' + number.value;
	}

	updateDisplay();
}
