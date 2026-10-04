let students = [
    { name: "Sadik", score: 85 },
    { name: "Ahmed", score: 45 },
    { name: "Amina", score: 72 },
    { name: "John", score: 90 }
];

// 1. Get all student names
let names = students.map(function(student) {
    return student.name;
});

// 2. Get students who passed
let passedStudents = students.filter(function(student) {
    return student.score >= 50;
});

// 3. Find Amina
let amina = students.find(function(student) {
    return student.name === "Amina";
});

console.log("Names:", names);
console.log("Passed:", passedStudents);
console.log("Amina:", amina);