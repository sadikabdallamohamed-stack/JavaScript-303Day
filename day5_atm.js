let balance = 1000;
let choice = 2;
let amount = 200;

switch (choice) {
    case 1:
        console.log(`Your balance is: ${balance}`);
        break;

    case 2:
        if (amount <= balance) {
            balance = balance - amount;
            console.log(`You withdrew: ${amount}`);
            console.log(`New balance: ${balance}`);
        } else {
            console.log("Insufficient balance.");
        }
        break;

    case 3:
        balance = balance + amount;
        console.log(`You deposited: ${amount}`);
        console.log(`New balance: ${balance}`);
        break;

    case 4:
        console.log("Thank you for using the ATM.");
        break;

    default:
        console.log("Invalid choice.");
}