/* 1.1
'use strict';
console.log('I´m printing to console');

 */
/* 1.2
"use strict";
 name = prompt("Type your name.");
 document.querySelector("#target").innerHTML = " Hello " + name + "!";

 */
/* 1.3
"use strict";
const num1 = parseInt(prompt("Give a number: "));
const num2 = parseInt(prompt("Give a number: "));
const num3 = parseInt(prompt("Give a number: "));
const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = (num1 + num2 + num3) / sum;

document.querySelector("#target").innerHTML = "The sum is:  "
 + sum +  ". The product is: "+ product +". And the average is: "+ average+".";
 */
/* 1.4
'use strict';
let target = document.querySelector('#target')
const name = prompt('Type your name.');
let result = Math.floor(Math.random()*4)+1;
{
  if (result === 1)
    target.innerHTML = name + ', you are Gryffindor';
  else if (result === 2)
    target.innerHTML = name + ', you are Slytherin';
  else if (result === 3)
    target.innerHTML = name + ', you are Hufflepuff';
  else if (result === 4)
    target.innerHTML = name + ', you are Ravenclaw';
}
 */
/* 1.5
let year = parseInt(prompt('Give a year: '))
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
{
target.innerHTML = 'The year ' + year + ' is a leap year'
 }
else
{
target.innerHTML = 'The year ' + year + ' is not a leap year'
}
 */
/* 1.8
let start = parseInt(prompt('Give the starting year'))
let end = parseInt(prompt('Give the last year'))
let html = '<ul>';
for(let y = start; y <= end; y++)
{
if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0))
{
html += ' <li>';
html += y;
html += '</li>'
}
}
html += '</ul>';
target.innerHTML = html
 */
/* 1.10
"use strict";

let target = document.querySelector('#target');
let dice = parseInt(prompt("How many dice do you want to throw?"));
let probability = parseInt(prompt("Which sum do you want the probability of?"));
let repetitions = 10000
let correct = 0

for (let r = 0; r != repetitions; r++) {
    let sum = 0
    for (let d = 0; d != dice; d++) {
        let result = Math.floor(Math.random() * 6) + 1
        sum = sum + result
        if (sum == probability) {
            correct++
        }
    }
}
target.innerHTML = "The probability to get " + probability +
    " with " + dice +" dice is " + (correct / 100) + "%";
 */
