function createBill(customer, product, price, quantity, discountPercent) {
    let total = price * quantity;
    let discount = total * (discountPercent / 100);
    let finalPrice = total - discount;

    return {
        customer: customer,
        product: product,
        total: total,
        discount: discount,
        finalPrice: finalPrice
    };
}

let bill = createBill("Sadik", "Phone", 800, 2, 15);

console.log("===== BUSINESS INVOICE =====");
console.log(`Customer: ${bill.customer}`);
console.log(`Product: ${bill.product}`);
console.log(`Total: ${bill.total}`);
console.log(`Discount: ${bill.discount}`);
console.log(`Final price: ${bill.finalPrice}`);