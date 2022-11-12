"use strict";
// kysytään osanottajien määrä
let target = document.querySelector("#target");
let nof_p = parseInt(prompt("How many participants: "));
let participants = [];

// Luetaan osanottajien nimet
for (let i = 0; i < nof_p; i++)
{
  participants[i] = prompt("Name: ")
}

// Generoidaan html-lista osanottajien nimistä

let html = "<ol>";
for (let i = 0; i < nof_p; i++)
{
  html += "<li>";
  html += participants[i];
  html += "</li>";
}

//Lisätään generoitu html sivulle
html += "</ol>";
target.innerHTML = html
