let button = document.getElementById("clickButton");
let title = document.getElementById("title");

button.addEventListener("click", function() {
    title.textContent = "You clicked the button!";
});

let box = document.getElementById("box");

box.addEventListener("mousemove", function() {
    box.textContent = "Mouse is moving!";
});

let nameInput = document.getElementById("nameInput");
let keyboardMessage = document.getElementById("keyboardMessage");

nameInput.addEventListener("keydown", function() {
    keyboardMessage.textContent = "You pressed a key!";
});

nameInput.addEventListener("input", function() {
    keyboardMessage.textContent = `You typed: ${nameInput.value}`;
});