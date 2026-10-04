const userName = "Sadik";
const userAge = 25;

const user2 = {
    name: userName,
    age: userAge
};

console.log(user2);
const introduce = (name, age) =>
    `My name is ${name} and I am ${age} years old.`;

console.log(introduce("Sadik", 25));
let numbers = [1, 2, 3, 4];

let doubled = numbers.map(number => number * 2);

console.log(doubled);
const add = (a, b) => a + b;

console.log(add(10, 20));
let name = "Sadik";
let age = 25;

const country = "Kenya";
const profession = "JavaScript Developer";

console.log("===== MY PROFILE =====");
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Country: ${country}`);
console.log(`Profession: ${profession}`);

// Arrow Function
const greet = (name) => {
    return `Hello, ${name}!`;
};

console.log(greet("Sadik"));
console.log(name);
console.log(age);
console.log(country);
const fruits = ["Apple", "Banana"];
const vegetables = ["Carrot", "Tomato"];
const food = [...fruits, ...vegetables];

console.log(food);
const person = {
    name: "Sadik",
    age: 25
};

const job = {
    profession: "JavaScript Developer",
    country: "Kenya"
};
const profile = {
    ...person,
    ...job
};

console.log(profile);