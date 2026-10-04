let number1 = 20;
let number2 = 5;
let operator = "*";

switch (operator) {
    case "+":
        console.log(`Result: ${number1 + number2}`);
        break;

    case "-":
        console.log(`Result: ${number1 - number2}`);
        break;

    case "*":
        console.log(`Result: ${number1 * number2}`);
        break;

    case "/":
        console.log(`Result: ${number1 / number2}`);
        break;

    default:
        console.log("Invalid operator");
}