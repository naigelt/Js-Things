'use strict';
let target = document.querySelector('#target')
let item_amount = parseInt(prompt('Give number of items'))
let items = []

// read the names
for(let i = 0; i <item_amount; i++){
    items[i] = prompt("Item: ")
}

// Generate html-lista
let html = '<ul class="my-list">';
html += '<ol>';
for(let i = 0; i< item_amount; i++){
    html += '<li>';
    html += items[i];
    html += '</li>'

}

html += '</ol></ul>';
target.innerHTML = html