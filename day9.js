function calculate(a, b, operator) {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        return a / b;
    } else {
        return "Invalid operator";
    }
}

let result1 = calculate(20, 5, "+");
let result2 = calculate(20, 5, "-");
let result3 = calculate(20, 5, "*");
let result4 = calculate(20, 5, "/");

console.log(`Addition: ${result1}`);
console.log(`Subtraction: ${result2}`);
console.log(`Multiplication: ${result3}`);
console.log(`Division: ${result4}`);
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet("Sadik");
greet();
function createInvoice(customer, product, price, quantity) {
    let total = price * quantity;

    console.log("===== INVOICE =====");
    console.log(`Customer: ${customer}`);
    console.log(`Product: ${product}`);
    console.log(`Price: ${price}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Total: ${total}`);
}

createInvoice("Sadik", "Laptop", 500, 2);
function calculateInvoice(price, quantity) {
    let total = price * quantity;
    return total;
}

let invoiceTotal = calculateInvoice(800, 2);

console.log(`Invoice total: ${invoiceTotal}`);
function calculateFinalPrice(price, quantity, discountPercent) {
    let total = price * quantity;
    let discount = total * (discountPercent / 100);
    let finalPrice = total - discount;

    return finalPrice;
}

let finalPrice = calculateFinalPrice(500, 3, 20);

console.log(`Final price: ${finalPrice}`);
function calculateFinalPrice(price, quantity, discountPercent) {
    let total = price * quantity;
    let discount = total * (discountPercent / 100);
    return total - discount;
}