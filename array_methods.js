let nums = [1,2,3,4,5,6,7,8,9,10];

//Advanced array methods

//MAP - applies changes to each item in an array and returns a new array.
const double = nums.map(function (x) {
    return x * 2;
});
const doubledemo = nums.map(x => x * 2);
console.log(double);
console.log(doubledemo);
console.log(nums);

//FILTER - checks the items in an array and returns a new array with the items that pass the check.
const even = nums.filter(function (x) {
    return x % 2 === 0;
});
const evendemo = nums.filter(x => x % 2 === 0); 
console.log(even);
console.log(evendemo);
const odd = nums.filter(function (x) {
    return x % 2 !== 0;
});
console.log(odd);

//REDUCE - reduces an array to a single value.
const sum = nums.reduce(function (sum, x) {
    return sum + x;
}, 0); // The initial value of the sum is set to 0.
const sum1 = nums.reduce((sum, x) => sum + x, 0);
const sum2 = nums.reduce((sum, x) => sum + x);

console.log(sum);
console.log(sum1);
console.log(sum2);

//FIND - returns the first item in an array that passes a check.
const f = nums.find(function (x) {
    return x > 5;
});
const fDemo = nums.find(x => x > 5);
console.log(f);
console.log(fDemo);

//SOME - checks if at least one item in an array passes a check.
const s = nums.some(function (x) {
    return x > 3;
});
const sDemo = nums.some(x => x > 3);
console.log(s);
console.log(sDemo);

//EVERY - checks if all items in an array pass a check.
const e = nums.every(function (x) {
    return x > 2;
});
const eDemo = nums.every(x => x > 2);
console.log(e);
console.log(eDemo);
