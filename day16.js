let title = document.getElementById("title");
let message = document.getElementById("message");
let button = document.getElementById("changeButton");
button.onclick = function() {
    title.textContent = "Welcome, Sadik!";
    message.textContent = "JavaScript is controlling this page!";

    title.style.color = "blue";
    title.style.fontSize = "40px";
    title.style.textAlign = "center";

    message.style.color = "green";
    message.style.fontSize = "20px";
};