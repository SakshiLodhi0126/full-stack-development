let numbers = [1, 2, 3, 4, 5, 6];

let result = numbers
    .filter(number => number % 2 === 0)
    .map(number => number * number);

console.log(result);