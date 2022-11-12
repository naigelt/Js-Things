"use strict";
console.log("Howdy partner!");

alert("Hi from here too!");

const name1 = "Pirjo";
document.querySelector("#target").innerHTML = "Good morning, " + name1 + "!";

let number, name;
number = 153;
name = "Anna";
console.log(number);
console.log(name);
number = "-17";
name = "Pekka";
console.log(number);
console.log(name);

const name3 = "Ahmed";
console.log(typeof name3);

const student = {
  firstName: 'Greg',
  lastName: 'Focker',
  studentId: '234359',
  phone: '040 5902123',
}
console.log(student)

function greet() {
  console.log('Well, hello!');
  return;
}
greet();

function greet(text, times) {
  for (let i = 1; i <= times; i++) {
    console.log(text + ' ' + i + '. time!');
  }
  return;
}

greet('Hi', 4);

       function quadraticSum(first, second) {
                const result = first * first + second * second;
                return result;
        }

        const num1 = prompt('Enter 1. number.');
        const num2 = prompt('Enter 2. number.');
        const quad = quadraticSum(num1, num2);
        console.log('The quadratic sum of ' + num1 + ' and ' + num2 + ' is ' + quad );