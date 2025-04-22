let currentInput = '';
let operator = '';
let previousInput = '';

function inputNumber(num) {
  currentInput += num;
  updateDisplay(currentInput);
}

function inputOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function inputDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay(currentInput);
  }
}

function squareNumber() {
  if (currentInput !== '') {
    currentInput = (parseFloat(currentInput) ** 2).toString();
    updateDisplay(currentInput);
  }
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+': result = prev + current; break;
    case '-': result = prev - current; break;
    case '*': result = prev * current; break;
    case '/': result = prev / current; break;
    case '%': result = prev % current; break;
    default: return;
  }

  currentInput = result.toString();
  operator = '';
  previousInput = '';
  updateDisplay(currentInput);
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay('0');
}

function updateDisplay(value) {
  document.getElementById('display').innerText = value;
}

// Listen for keyboard input
document.addEventListener('keydown', function(event) {
  const key = event.key;

  // Handle number keys and decimal
  if (!isNaN(key) || key === '.') {
    if (key === '.') {
      inputDecimal();
    } else {
      inputNumber(key);
    }
  }

  // Handle operators
  if (['+', '-', '*', '/', '%'].includes(key)) {
    inputOperator(key);
  }

  // Enter or = to calculate
  if (key === 'Enter' || key === '=') {
    event.preventDefault();
    calculate();
  }

  // AC - All Clear
  if (key === 'Escape' || key.toLowerCase() === 'c') {
    clearDisplay();
  }

  // Square with 's'
  if (key.toLowerCase() === 's') {
    squareNumber();
  }

  // Backspace to delete last character
  if (key === 'Backspace') {
    deleteLastCharacter();
  }
});

// ***********************************************************
//  Delete function from the calculator
// ***********************************************************
function deleteLastCharacter() {
  if (currentInput.length > 0) {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || '0');
  }
}

const btn = document.querySelector(`button[data-key="${key}"]`);
if (btn) {
  btn.classList.add('active');
  setTimeout(() => btn.classList.remove('active'), 150);
}






// // Listen for keyboard input
// document.addEventListener('keydown', function(event) {
//   const key = event.key;

//   // Check if key is a number or decimal
//   if (!isNaN(key) || key === '.') {
//     if (key === '.') {
//       inputDecimal();
//     } else {
//       inputNumber(key);
//     }
//   }

//   // Check for operators
//   if (['+', '-', '*', '/', '%'].includes(key)) {
//     inputOperator(key);
//   }

//   // Handle Enter or =
//   if (key === 'Enter' || key === '=') {
//     event.preventDefault(); // Prevent form submission on Enter
//     calculate();
//   }

//   // Clear (AC) with Escape or 'c'
//   if (key === 'Escape' || key.toLowerCase() === 'c') {
//     clearDisplay();
//   }

//   // Handle square with 's' key
//   if (key.toLowerCase() === 's') {
//     squareNumber();
//   }
// });
