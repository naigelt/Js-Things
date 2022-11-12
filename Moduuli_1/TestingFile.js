
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
