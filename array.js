//  creating arrays using Array literals
let fruits = ["Apple", "Banana", "Cherry"]; // This is the preferred method

//creating arrays using Array Constructor 
//let fruits = new Array("Apple", "Banana", "Cherry"); // This is not the preferred method, but it works


//length of array (number of elements in the array)
console.log("Length of array:", fruits.length);


//push element to array (adds the element to the end of the array)
fruits.push("Mango");
console.log("After pushing Mango:", fruits);

//pop element from array (removes the last element of the array)
fruits.pop("Mango");
console.log("After popping Mango:", fruits);

//unshift element to array (adds the element to the beginning of the array)
fruits.unshift("Apple");
console.log("After unshifting Apple:", fruits);

//shift element from array (removes the first element of the array)
fruits.shift();
console.log("After shifting:", fruits);

//includes element in array (checks if the element is present in the array)
fruits.includes("Apple");
console.log("Does the array include Apple?", fruits.includes("Apple"));
console.log("Does the array include Watermelon?", fruits.includes("Watermelon"));

//index of element in array (returns the first index at which a given element can be found in the array, or -1 if it is not present)
fruits.indexOf("Apple");
console.log("Index of Apple:", fruits.indexOf("Apple"));
console.log("Index of Watermelon:", fruits.indexOf("Watermelon"));

//join elements of array (returns a string with all the array elements joined by a specified separator)
fruits.join();
console.log("After joining with ~:", fruits.join(" ~ "));

//reverse elements of array (reverses the order of the elements in the array)
fruits.reverse();
console.log("After reversing:", fruits);

//sort elements of array (sorts the elements of an array in place and returns the array)
fruits.sort();
console.log("After sorting:", fruits);

//slice elements of array (returns a new array containing a slice of the original array)
fruits.slice(1, 3);
console.log("After slicing from index 1 to 3:", fruits.slice(1, 3));

//splice elements of array (changes the content of an array by removing or replacing existing elements and/or adding new elements)
fruits.splice(1, 3);
console.log("After splicing from index 1 to 3:", fruits);

//concatenating arrays (combining two or more arrays)
let fruits2 = ["Watermelon", "Mango"];
console.log("After concatenating:", fruits.concat(fruits2));


