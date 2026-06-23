let cart = [
    { item: "Book", price: 200 },
    { item: "Pen", price: 20 },
    { item: "Bag", price: 500 }
];

let totalValue = cart.reduce(
    (total, item) => total + item.price,
    0
);

console.log(totalValue);