const words = ["apple", "banana", "cherry", "date", "elderberry"];
const filterLongWords = (arr, n) => arr.filter(word => word.length > n);
console.log(filterLongWords(words, 5));
