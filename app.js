/* eslint-disable no-plusplus */
/* eslint-disable max-len */
const container = document.querySelector('#container');
const display = container.querySelector('.calcDisplay');
const numbers = container.querySelectorAll('.num');
const operations = container.querySelectorAll('.op');
const equal = container.querySelector('[data-equal]');
const clear = document.querySelector('.clear');
let currentOperation = [];
let displayValue;
let firstValue = [];
const secondValue = [];

function add(num1, num2) {
  return num1 + num2;
}
function substract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function devide(num1, num2) {
  return num1 / num2;
}
function operate(num1, num2, op) {
  let result = 0;
  for (let i = 0; i < op.length; i++) {
    switch (op[i]) {
      case 'add':
        if (result === 0) {
          result = add(num1[i], num1[i + 1]);
        } else {
          result = add(result, num1[i + 1]);
        }
        console.log(result);
        break;
      case 'substract':
        if (result === 0) { result = substract(num1[i], num1[i + 1]); } else { result = substract(result, num1[i + 1]); }
        break;
      case 'multiply':
        if (result === 0) { result = multiply(num1[i], num1[i + 1]); } else { result = multiply(result, num1[i + 1]); }
        console.log(result);
        break;
      case 'devide':
        if (result === 0) { result = devide(num1[i], num1[i + 1]); } else { result = devide(result, num1[i + 1]); }
        break;
      default:
        break;
    }
  }
  return result;
}
function clearDisplay() {
  display.textContent = '';
}
function updateDisplay(val) {
  display.textContent += val;
}
function resetVals() {
  firstValue = [];
  currentOperation = [];
}
numbers.forEach((number) => {
  number.addEventListener('click', () => {
    displayValue = number.textContent;
    updateDisplay(displayValue);
  });
});
clear.addEventListener('click', () => { clearDisplay(); });
operations.forEach((operation) => {
  operation.addEventListener('click', () => {
    if (display.textContent === '') { /* empty */ } else {
      if (currentOperation.length === 0) {
        switch (operation.textContent) {
          case '+':
            currentOperation.push('add');
            break;
          case '-':
            currentOperation.push('substract');
            break;
          case 'x':
            currentOperation.push('multiply');
            break;
          case '/':
            currentOperation.push('devide');
            break;
          default:
            break;
        }
        firstValue.push(parseInt(display.textContent, 10));
        clearDisplay();
      } else {
        switch (operation.textContent) {
          case '+':
            currentOperation.push('add');
            break;
          case '-':
            currentOperation.push('substract');
            break;
          case 'x':
            currentOperation.push('multiply');
            break;
          case '/':
            currentOperation.push('devide');
            break;
          default:
            break;
        }
        // if(firstValue.length > secondValue.length){
        //     secondValue.push(parseInt(display.textContent));
        // }else{
        //     firstValue.push(parseInt(display.textContent));
        // }
        firstValue.push(parseInt(display.textContent, 10));
        clearDisplay();
      }
      console.log(currentOperation, firstValue);
    }
  });
});
equal.addEventListener('click', () => {
  if (display.textContent === '') {
    // empty
  } else {
    firstValue.push(parseInt(display.textContent, 10));
    clearDisplay();
    updateDisplay(operate(firstValue, secondValue, currentOperation));
    resetVals();
  }
});
