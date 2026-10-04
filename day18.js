let form = document.getElementById("registerForm");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (nameInput.value === "") {
        message.textContent = "Please enter your name.";
    }
    else if (emailInput.value === "") {
        message.textContent = "Please enter your email.";
    }
    else if (!emailInput.value.includes("@")) {
    message.textContent = "Please enter a valid email.";
}
    else if (passwordInput.value === "") {
        message.textContent = "Please enter your password.";
    }
    else if (passwordInput.value.length < 8) {
        message.textContent = "Password must be at least 8 characters.";
    }
    else {
        message.textContent = `Welcome, ${nameInput.value}!`;
    }
});