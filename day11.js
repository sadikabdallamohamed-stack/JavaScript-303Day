let students = ["Sadik", "Mohamed", "Amina", "John"];

students.push("Hassan");
students.unshift("Ali");

console.log("===== STUDENT LIST =====");

for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1}. ${students[i]}`);
}

console.log(`Total students: ${students.length}`);
students[0]          // access an item
students[1] = "Ali"  // change an item
students.push()      // add to end
students.pop()       // remove from end
students.unshift()   // add to beginning
students.shift()     // remove from beginning
students.length      // count items