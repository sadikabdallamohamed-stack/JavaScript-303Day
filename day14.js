let customers = [
    {
        name: "Sadik",
        age: 25,
        country: "Kenya"
    },
    {
        name: "Ahmed",
        age: 22,
        country: "Somalia"
    },
    {
        name: "Amina",
        age: 24,
        country: "Kenya"
    },
    {
        name: "John",
        age: 30,
        country: "Uganda"
    }
];

console.log(customers);
let customerNames = customers.map(function(customer) {
    return customer.name;
});

console.log("Customer Names:");
console.log(customerNames);
let kenyanCustomers = customers.filter(function(customer) {
    return customer.country === "Kenya";
});

console.log("Customers from Kenya:");
console.log(kenyanCustomers);
let customer = customers.find(function(customer) {
    return customer.name === "Amina";
});

console.log("Found Customer:");
console.log(customer);customers.push({
    name: "Hassan",
    age: 27,
    country: "Kenya"
});

console.log("Updated Customers:");
console.log(customers);
console.log(`Total customers: ${customers.length}`);
let searchName = "John";

let foundCustomer = customers.find(function(customer) {
    return customer.name === searchName;
});

console.log("Search Result:");
console.log(foundCustomer);
let customerToUpdate = customers.find(function(customer) {
    return customer.name === "John";
});

customerToUpdate.country = "Kenya";

console.log("Updated Customer:");
console.log(customerToUpdate);
let updatedCustomers = customers.filter(function(customer) {
    return customer.name !== "Ahmed";
});

customers = updatedCustomers;

console.log("After Removing Ahmed:");
console.log(customers);
console.log(`Total customers: ${customers.length}`);
let kenyanCount = customers.filter(function(customer) {
    return customer.country === "Kenya";
}).length;

console.log(`Kenyan customers: ${kenyanCount}`);