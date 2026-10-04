function getGrade(score) {
    if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}

function getStatus(score) {
    if (score >= 50) {
        return "PASS";
    } else {
        return "FAIL";
    }
}

let studentName = "Sadik";
let studentScore = 45;

let grade = getGrade(studentScore);
let status = getStatus(studentScore);

console.log(`Student: ${studentName}`);
console.log(`Score: ${studentScore}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);