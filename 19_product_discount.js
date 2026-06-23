let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 }
];

let discountedProducts = products.map(product => ({
    name: product.name,
    price: product.price * 0.9
}));

console.log(discountedProducts);