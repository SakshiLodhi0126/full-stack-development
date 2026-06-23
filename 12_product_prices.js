let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Tablet", price: 15000 }
];

let prices = products.map(product => product.price);

let highestPrice = Math.max(...prices);

console.log(prices);
console.log(highestPrice);