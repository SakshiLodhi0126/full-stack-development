let sentence = "The fox is quick. The fox is smart.";

sentence = sentence.toLowerCase();

let words = sentence.split(" ");

let foxCount = words.filter(word => word === "fox").length;

console.log(foxCount);