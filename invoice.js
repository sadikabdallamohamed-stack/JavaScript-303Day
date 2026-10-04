export function calculateTotal(price, quantity) {
    return price * quantity;
}

export function calculateDiscount(total, discountPercent) {
    return total * (discountPercent / 100);
}

export function calculateFinalPrice(total, discount) {
    return total - discount;
}