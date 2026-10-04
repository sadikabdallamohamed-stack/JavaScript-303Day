let username = "Sadik";
let age = 25;
let isStudent = false;
let isAdmin = false;
let passwordCorrect = true;

if (!passwordCorrect) {
    console.log("Login failed.");
} else if (isAdmin) {
    console.log("Welcome Admin!");
} else if (age >= 18 && isStudent) {
    console.log("Welcome Student!");
} else if (age >= 18) {
    console.log("welcome User!");
} else {
    console.log("Access denied");
}