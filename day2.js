// Data types

let name = "Sadik";
let age  = 25; 
let country = "Kenya";
let isStudent = true;

console.log(name);
console.log(age);
console.log(country);
console.log(isStudent);

console.log(typeof name);
console.log(typeof age);
console.log(typeof country);
console.log(typeof isStudent);


// Template literals

console.log(`My name is ${name}.`);
console.log(`I am ${age} years old.`);
console.log(`I live in ${country}.`);


// String methods

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());

let message = "I am learning JavaScript";
console.log(message.includes("JavaScript"));
let fullName = "Sadik Abdalla";
let profileAge = 25;
let profileCountry = "Kenya";
let profession = "JavaScript Developer";

console.log("==== MY PROFILE ====");
console.log(`Name: ${fullName}`);
console.log(`Age: ${profileAge}`);
console.log(`Country: ${profileCountry}`);
console.log(`profession: ${profession}`);
console.log(`My name has ${fullName.length} characters.`);
console.log(`My profession in uppercase: ${profession.toUpperCase()}`);
console.log(10 > 5);
console.log(10 < 5);
console.log(10 === 10);
console.log(10 === 20);
console.log(10 % 3);