let currentValue = "";

function calculatePercentage() {
  currentValue = eval(currentValue + "* 0.01");
  display.value = currentValue;
}

function calculateResult() {
  currentValue = eval(currentValue);
  document.querySelector("#display").value = currentValue;
}

// document.addEventListener('keypress', function(event) {
//     const keyValue = event.key;
//     if (/\d/.test(keyValue)) {
//         // If a digit is pressed
//         appendToDisplay(keyValue);
//     } else if (keyValue === '+' || keyValue === '-' || keyValue === '*' || keyValue === '/') {
//         // If an operator is pressed
//         appendToDisplay(keyValue);
//     } else if (keyValue === '%' || keyValue === 'Enter') {
//         // If percentage or Enter key is pressed
//         calculatePercentage();
//     } else if (keyValue === '=' || keyValue === 'Enter') {
//         // If equals sign or Enter key is pressed
//         calculateResult();
//     }
// });






