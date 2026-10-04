import {
    calculateTotal,
    calculateDiscount,
    calculateFinalPrice
} from "./invoice.js";

import { createCustomer } from "./customer.js";


// ===== INVOICE =====

let price = 800;
let quantity = 2;
let discountPercent = 15;

let total = calculateTotal(price, quantity);
let discount = calculateDiscount(total, discountPercent);
let finalPrice = calculateFinalPrice(total, discount);

console.log(`Total: ${total}`);
console.log(`Discount: ${discount}`);
console.log(`Final price: ${finalPrice}`);


// ===== CUSTOMER =====

let customer = createCustomer("Sadik", "Kenya");

console.log(`Customer: ${customer.name}`);
console.log(`Country: ${customer.country}`);