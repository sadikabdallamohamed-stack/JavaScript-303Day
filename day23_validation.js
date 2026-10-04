function registerUser(name, age) {

    if (name === "") {
        throw new Error("Name is required.");
    }

    if (age < 18) {
        throw new Error("User must be 18 or older.");
    }

    return `Registration successful for ${name}.`;
}

try {
    console.log(registerUser("", 25));
} catch (error) {
    console.log("Registration failed:", error.message);
}