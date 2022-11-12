let year = parseInt(prompt('Give a year: '))
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
{
target.innerHTML = 'The year ' + year + ' is a leap year'
 }
else
{
target.innerHTML = 'The year ' + year + ' is not a leap year'
}