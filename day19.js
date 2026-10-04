let nameInput = document.getElementById("nameInput");
let saveButton = document.getElementById("saveButton");
let message = document.getElementById("message");

saveButton.addEventListener("click", function() {

    let name = nameInput.value;

    if (name === "") {
        message.textContent = "Please enter your name.";
    } else {
        localStorage.setItem("name", name);
        message.textContent = `Saved name: ${name}`;
    }

});

let savedName = localStorage.getItem("name");

if (savedName) {
    message.textContent = `Welcome back, ${savedName}!`;
}
let deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener("click", function() {
    localStorage.removeItem("name");

    message.textContent = "Saved name deleted.";
});