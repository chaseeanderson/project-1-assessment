// State Variables
let runningTotal;

// Cached Elements
const plusBtnEl = document.querySelector('#plus');
const minusBtnEl = document.querySelector('#minus');
const inputValEl = document.querySelector('input')
const totalEl = document.querySelector('h1');

// Event Handlers
plusBtnEl.addEventListener('click', handlePlus)
minusBtnEl.addEventListener('click', handleMinus)

// Functions
init()

function handlePlus() {
  let inputVal = parseInt(inputValEl.value);
  runningTotal += inputVal;
  render()
}

function handleMinus() {
  let inputVal = parseInt(inputValEl.value);
  runningTotal -= inputVal;
  render()
}

function init() {
  runningTotal = 0;
  inputVal = 1;
  render();
}

function render() {
  runningTotal < 0 ? totalEl.style.color = 'red' : totalEl.style.color = 'black';
  totalEl.textContent = runningTotal;
  inputValEl.value = inputVal;
}