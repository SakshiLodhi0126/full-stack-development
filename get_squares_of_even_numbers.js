const nums = [1,2,3,4,5,6,7,8];
const squaresOfEvens = nums.filter(n => n % 2 === 0).map(n => n ** 2);
console.log(squaresOfEvens);
