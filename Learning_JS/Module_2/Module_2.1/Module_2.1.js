
let numbers = [];
let target = document.querySelector("#target")

for(let i = 0; i < 5; i++)
{
  numbers[i] = parseInt(prompt('Give a number'+ (i +1)));
}

for(let i = 0; i < 5; i++)
{
  console.log(numbers[4 - i]);
}

