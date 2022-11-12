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