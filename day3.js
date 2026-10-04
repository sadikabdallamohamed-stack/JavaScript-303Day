let a = 20;
let b = 5;


console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
let price = 500;
let quantity = 3;

let total = price * quantity;

console.log(`Price: ${price}`);
console.log(`Quantity: ${quantity}`);
console.log(`Total: ${total}`);

let discount = 10;
let discountAmount = total * (discount / 100);
let finalPrice = total - discountAmount;

console.log(`Price: ${price}`);
console.log(`Quantity: ${quantity}`);
console.log(`Total: ${total}`);
console.log(`Discount: ${discount}%`);
console.log(`Discount amount: ${discountAmount}`);
console.log(`Final price: ${finalPrice}`);
let age = 25;

console.log(age > 18);
console.log(age < 18);
console.log(age === 25);
console.log(age !==25);
console.log(age >= 25);
console.log(age <= 25);

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}
let score = 95;

if (score >= 80){
    console.log("Grade: A");
} else if (score >= 70) {
    console.log("Grade: B");
} else if (score >=60) {
    console.log("Grade: C");
}else if (score >= 50) {
    console.log("Grade: D");
}else {
    console.log("Grade: F");
}
let shopProduct = "Laptop";
let shopPrice = 500;
let shopQuantity = 5;

let shopTotal = shopPrice * shopQuantity;
let shopDiscount = 0;

if (shopTotal >= 2000) {
    shopDiscount = 20;
} else if (shopTotal >= 1000) {
    shopDiscount = 10;
} else {
    shopDiscount = 5;
}

let shopDiscountAmount = shopTotal * (shopDiscount / 100);
let shopFinalPrice = shopTotal - shopDiscountAmount;

console.log("===== SHOPPING BILL =====");
console.log(`Product: ${shopProduct}`);
console.log(`Price: ${shopPrice}`);
console.log(`Quantity: ${shopQuantity}`);
console.log(`Total: ${shopTotal}`);
console.log(`Discount: ${shopDiscount}%`);
console.log(`Discount amount: ${shopDiscountAmount}`);
console.log(`Final price: ${shopFinalPrice}`);