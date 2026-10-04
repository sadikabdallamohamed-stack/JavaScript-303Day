let product = {
    name: "Laptop",
    price: 800,
    quantity: 2,
    category: "Electronics",
    discount: 10
};

let total = product.price * product.quantity;
let discountAmount = total * (product.discount / 100);
let finalPrice = total - discountAmount;

console.log("===== PRODUCT =====");
console.log(`Name: ${product.name}`);
console.log(`Price: ${product.price}`);
console.log(`Quantity: ${product.quantity}`);
console.log(`Category: ${product.category}`);
console.log(`Total: ${total}`);
console.log(`Discount: ${discountAmount}`);
console.log(`Final price: ${finalPrice}`);