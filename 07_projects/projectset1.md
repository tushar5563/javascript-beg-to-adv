## Projects related to dom
## Project Link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-5hoxsz?file=1-colorChanger%2Findex.html,1-colorChanger%2Fstyle.css,1-colorChanger%2Fchaiaurcode.js)

## solution code
## Project one
``` JavaScript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'pink') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'brown') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```
## Project Link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-5hoxsz?file=2-BMICalculator%2Fchaiaurcode.js)

## solution code
## Project one
``` JavaScript
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (!height || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height.`;
  } else if (!weight || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let message = '';

    // Determine the message based on BMI value
    if (bmi < 18.6) {
      message = `Your BMI is ${bmi}, which means you are underweight.`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message = `Your BMI is ${bmi}, which is within the normal range.`;
    } else {
      message = `Your BMI is ${bmi}, which means you are overweight.`;
    }

    // Display the result with the BMI value and message
    results.innerHTML = `<span>${message}</span>`;
  }
});


```
## Project Link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-5hoxsz?file=3-DigitalClock%2Fchaiaurcode.js)

## Solution Code

```JavaScript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleDateString());
  clock.innerHTML=date.toLocaleTimeString()

}, 1000);


```
## Project Link
[clcik here](https://stackblitz.com/edit/dom-project-chaiaurcode-5hoxsz?file=4-GuessTheNumber%2Fchaiaurcode.js)

## Solution Code
``` Javascript
let radnomNumber = Math.round(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid Number');
  } else if (guess < 1) {
    alert('Please enter a Number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number  less than 100');
  }
  else {
    prevGuess.push()
    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`Game Over. Random Number was ${radnomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if(guess===radnomNumber){
    displayMessage(`you guessed it right`)
    endGame()
  }else if(guess<radnomNumber){
   displayMessage(`Number is TOOOOOO Low`)
  }
  else if(guess>radnomNumber){
    displayMessage(`Number is TOOOOO High`)
  }
}
function displayGuess(guess) {
  userInput.value=''
  guessSlot.innerHTML +=  ` ${ guess },   `
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message) {
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endGame() {
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame=false
  newGame();
}

function newGame() {
 const newGameButton=  document.querySelector('#newGame')
 newGameButton.addEventListener('click',function(e){
   radnomNumber=Math.round(Math.random() * 100 + 1);
   prevGuess=[]
   numGuess=1
   guessSlot.innerHTML=''
   remaining.innerHTML=`${11-numGuess}`;
   userInput.removeAttribute('disabled')
   startOver.removeChild(p)
   playGame=true

 })
```