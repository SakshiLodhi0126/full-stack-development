let colours = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray', 'black'];

// 1. For loop (Fixed to loop through all 10 colours)
console.log("For Loop: ");
for(let i = 0; i < colours.length; i++){
    console.log(colours[i]);
}

// 2. For...of loop
console.log("For Of Loop: ");
for(let colour of colours){
    console.log(colour);
}

//3. For each loop
console.log("For Each Loop: ");
colours.forEach(function(colour){
    console.log(colour);
});

