function calculateTotal(price, quantity) {
    return price * quantity;
}

function calculateDiscount(total, discountPercent) {
    return total * (discountPercent / 100);
}

let customerName = "Sadik";
let product = "0112003310";
let price = 800;
let quantity = 2;
let discountPercent = 15;

let total = calculateTotal(price, quantity);
let discount = calculateDiscount(total, discountPercent);
let finalPrice = total - discount;

console.log("===== BUSINESS INVOICE =====");
console.log(`Customer: ${customerName}`);
console.log(`Product: ${product}`);
console.log(`Price: ${price}`);
console.log(`Quantity: ${quantity}`);
console.log(`Total: ${total}`);
console.log(`Discount: ${discount}`);
console.log(`Final price: ${finalPrice}`);