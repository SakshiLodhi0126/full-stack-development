const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
//return: {apple:3, banana:2, orange:1}
const count = fruits.reduce(function (occ, curr) {
    occ[curr] = (occ[curr] || 0) + 1;
    return occ;
}, {});
console.log(count);

//const count = fruits.reduce((occ,fruit) => {occ[fruit] = (occ[fruit] || 0) + 1; return occ, {}});