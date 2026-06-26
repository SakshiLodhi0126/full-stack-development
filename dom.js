// DOM Element Selection

// Get element by ID (single element)
let headingById = document.getElementById("heading");
console.log(headingById);

// Get elements by Class Name (HTMLCollection)
let paragraphsByClass = document.getElementsByClassName("paragraph");
console.log(paragraphsByClass);

// Get elements by Tag Name (HTMLCollection)
let paragraphsByTag = document.getElementsByTagName("p");
console.log(paragraphsByTag[0]);
console.log(paragraphsByTag);

// Query Selector (first matching element)
let headingByQuery = document.querySelector("h1");
console.log(headingByQuery);

// Query Selector All (NodeList)
let paragraphsByQueryAll = document.querySelectorAll("p");
console.log(paragraphsByQueryAll);