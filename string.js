//PROPERTIES OF STRING

//length of string
let str = "Sakshi Lodhi";
console.log(str.length);

//convert to uppercase
console.log(str.toUpperCase());

//convert to lowercase
console.log(str.toLowerCase());

//slice the string
console.log(str .slice(0, 3)); 

//removes whitespace from both ends
let string = "   Hello   ";
console.log(string.trim());
console.log(string.trim().length);

//checks if a string contains a specified value
console.log(str.includes("sakshi lodhi"));
console.log(str.includes("Sakshi Lodhi"));

//checks if a string starts with a specified value
console.log(str.startsWith("S"));


//checks if a string ends with a specified value
console.log(str.endsWith("a"));

//replaces a specified value with another value
console.log(str.replace("Sakshi", "Hello"));

//tells the index of a specified value
console.log(str.indexOf("Sakshi"))
console.log(str.indexOf("Lodhi"))

//to find the last index of a specified value
console.log(str.lastIndexOf("Lodhi"))

//extracts a part of a string and returns a new string
console.log(str.substring(3, 5))

//replaces all occurrences of a specified value with another value
console.log(str.replaceAll("a", "i"))

//splits a string into an array of substrings
console.log(str.split(" "))
