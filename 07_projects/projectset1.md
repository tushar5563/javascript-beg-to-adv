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