const products = [
    {id : 1, name : 'Laptop'},
    {id : 2, name : 'Phone'},
    {id : 3, name : 'Tablet'}
];
const productNames = function(products) {
    return products.map(product => product.name);
}
//const productNames = products.map(product => product.name);
//console.log(productNames);
