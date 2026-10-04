let title = document.getElementById("title");
let button = document.getElementById("changeButton");

let name = "Sadik";
let count = 0;

button.onclick = function() {
    count = count + 1;
    title.textContent = `${name} clicked the button ${count} time(s)!`;
};