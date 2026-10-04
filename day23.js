function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or older.");
    }

    return "Access allowed.";
}

try {
    console.log(checkAge(15));
} catch (error) {
    console.log("Error:", error.message);
}
try {
    let result = unknownVariable;

    console.log(result);
} catch (error) {
    console.log("Something went wrong!");
    console.log(error.message);
}
try {
    let result = 10 / 2;

    console.log(result);

} catch (error) {

    console.log("Something went wrong!");
    console.log(error.message);

} finally {

    console.log("Program finished.");
}