let age = 25;
let hasID = false;

console.log("Age:", age);
console.log("Has ID:", hasID);
console.log("Can enter:", age >= 18 && hasID === true);
let isStudent = false;
let isEmployee = false;

console.log("Student:", isStudent);
console.log("Employee:", isEmployee);
console.log("Has access:", isStudent || isEmployee);
let isLoggedIn = true;

console.log("Logged in :", isLoggedIn);
console.log("Not logged in:", !isLoggedIn);
let hasPermission = false;

let canAccess = age >= 18 && (isStudent || hasPermission);

console.log("Age:", age);
console.log("Student:", isStudent);
console.log("Permission:", hasPermission);
console.log("Can access:", canAccess);