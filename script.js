const buttonContainer = document.querySelector('.buttons-container');
const resultText = document.querySelector('.result-text');
let currentNum = '0';
let lastNum = null;
let result = '0';
let lastResult = '0';
resultText.innerText = result;
let currentFunction;


buttonContainer.addEventListener('click', (event) => {
    let currentButton = event.target.innerText;
    let targetClass = event.target.className;

    if (targetClass == 'num-button') {
        if (currentNum == '0') {
            currentNum = currentButton;
        } else {
            currentNum += currentButton;
        }
        resultText.innerText = currentNum;
    } else if (currentButton == 'C' || (currentButton == 'CE' && lastNum == null)) {
        clearCalc();
        resultText.innerText = '0';
    } else if (currentButton == 'CE' && lastNum != null) {
        currentNum = lastNum;
        lastNum, result, lastResult = null;
        resultText.innerText = currentNum;
    } else if (currentButton == 'CE') {
        currentNum = '0';
    } else if (currentButton == '<<') {
        lastNum = currentNum;
        if (currentNum >= 10) {
            currentNum = currentNum.slice(0,-1);
        } else {
            currentNum = '0';
        }
        resultText.innerText = currentNum;
    } else if (currentButton == '%') {
        lastNum = currentNum;
        currentNum = currentNum/100;
        resultText.innerText = currentNum;
    } else if (currentButton == '1/x') {
        lastNum = currentNum;
        currentNum = 1/currentNum;
        resultText.innerText = currentNum;
    } else if (currentButton == 'x^2') {
        lastNum = currentNum;
        currentNum = currentNum*currentNum;
        resultText.innerText = currentNum;
    } else if (currentButton == 'sqrt') {
        lastNum = currentNum;
    } else if (currentButton == '+/-') {
        lastNum = currentNum;
        currentNum *= -1;
        resultText.innerText = currentNum;
    }  else if (targetClass == 'num-function' && currentButton != '=') {
        currentFunction = currentButton;
        lastNum = currentNum;
        currentNum = '0';
        console.log('entered');
    } else if (currentButton == '=') {
        if (currentFunction == '+') {
            currentNum = Number(lastNum) + Number(currentNum);
        } else if (currentFunction == '-') {
            currentNum = Number(lastNum) - Number(currentNum);
        } else if (currentFunction == '*') {
            currentNum = Number(lastNum) * Number(currentNum);
        } else if (currentFunction == '/') {
            currentNum = Number(lastNum) / Number(currentNum);
        }
        resultText.innerText = currentNum;
        currentFunction == null;
    }
  event.stopPropagation;
});

function doMathOperation(operationType, num1) {

}

function clearCalc() {
    lastNum = null;
    result, lastResult, currentNum = '0';
}