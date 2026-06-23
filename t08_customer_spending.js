let customers = [
    { customer: "John", amount: 50000 },
    { customer: "Emma", amount: 20000 }
];

let totalSpending = customers.reduce(
    (total, customer) => total + customer.amount,
    0
);

console.log(totalSpending);