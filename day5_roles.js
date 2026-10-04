let role = "admin";

switch (role) {
    case "admin":
        console.log("Welcome Admin");
        console.log("You have full access.");
        break;

    case "student":
        console.log("Welcome Student");
        console.log("You can access your courses.");
        break;

    case "teacher":
        console.log("Welcome Teacher");
        console.log("You can manage students.");
        break;

    default:
        console.log("Unknown role");
}