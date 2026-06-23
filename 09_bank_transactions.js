let transactions = [
    { type: "credit", amount: 1000 },
    { type: "debit", amount: 300 },
    { type: "credit", amount: 500 }
];

let totalCredit = transactions
    .filter(transaction => transaction.type === "credit")
    .reduce((total, transaction) => total + transaction.amount, 0);

console.log(totalCredit);