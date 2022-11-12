"use strict";
const num1 = parseInt(prompt("Give a number: "));
const num2 = parseInt(prompt("Give a number: "));
const num3 = parseInt(prompt("Give a number: "));
const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = (num1 + num2 + num3) / sum;

document.querySelector("#target").innerHTML = "The sum is:  "
 + sum +  ". The product is: "+ product +". And the average is: "+ average+".";
