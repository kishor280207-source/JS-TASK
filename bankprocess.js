// 1. User Input
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let salary = prompt("Enter your monthly salary:");
let loanAmount = prompt("Enter loan amount:");

console.log("Enter Name: " + name);
console.log("Enter Age: " + age);
console.log("Enter Salary: " + salary);
console.log("Enter loan Amount: " + loanAmount);


// 2.Eligibility Check
if (age >= 21 && age <= 60 && salary >= 25000) {
    console.log("Eligible ✅");
} else {
    console.log("Not Eligible ❌");
}

//3.EMI Calculation (Assignment operator)
let emi = loanAmount;
emi /= 12;

console.log("EMI:", emi);

//4. Loan Category (If-Else)
if (loanAmount > 500000) {
    console.log("Loan Category: High Loan");
} else if (loanAmount > 200000) {
    console.log("Loan Category: Medium Loan");
} else {
    console.log("Loan Category: Low Loan");
}

// 5. Risk Level (Ternary)
let risk = (salary > 50000) ? "Low Risk" : "High Risk";
console.log("Risk Level:", risk);

// 6.Customer Type (Switch)
switch (true) {
    case (emi > 40000):
        console.log("Customer Type: Premium Customer");
        break;
    case (emi > 20000):
        console.log("Customer Type: Standard Customer");
        break;
    default:
        console.log("Customer Type: Basic Customer");
};
