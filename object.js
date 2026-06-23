let student = {
    name: 'John',
    age: 22, isStudent: true, city: 'Delhi'}

console.log(student);

//Dot Notation
student.name = 'Jane';
console.log(student.name);

//Bracket Notation
console.log(student['age']);

//Adding new property using bracket notation
student['phone'] = 35456;
console.log(student);

//Deleting a property
delete student.city;
console.log(student);

//Updating a property
student.isStudent = false;
console.log(student);

//Methods in Objects
let obj = {
    name: 'Sakshi',
    greet(){
        console.log("Hello");
    }
}
obj.greet();

//Looping through objects using for...in loop
for(key in student){
    console.log(key, student[key]);
}

//Nested Objects
let person={
    name: 'Muskan', age: 22, address: {city: "Indore", place: "Antim Chauraha", state: "MP"}
};
console.log(person);

//Array of Objects
let array = [a = {name: "a"}, b = {name: "b"}, c = {name: "c"}];
console.log(array);
console.log(person.address.city);
console.log(person["address"]["city"]);
console.log(array[0].name);

//Template Literals
let name = "Sakshi";
console.log("Hello" + name + "!");
console.log(`Hello ${name} !`) // ` is a backtick 

//Default Parameters
function greet(name="Guest"){
    console.log(`hello ${name}`);
    // Default parameter value is used if no argument is passed or if the argument is undefined
}
greet("Kanishka");

//Destructuring
let [a,b] = [10,20];
console.log(a,b);

//Destructuring Objects
let {name1, age1} = student;
console.log(name1, age1);

//Spread Operator
let arr1 = [1,2,3,4,5];
let arr2 = [...arr1];
console.log(arr2);

//Rest Operator
function sum(...nums){
    nums++;
    nums =  nums+1;
    return nums;
}
console.log(sum(nums));

//Enhanced Object Literals
let name2 = "Tulsi";
let student2 = {  name2, age2: 22 }
console.log(student2);

//Merging Objects
let obj3 = {a:1}
let obj4 = {b:2}
let merged = {...obj3, ...obj4}
console.log(merged);

//Getting Object Keys
console.log(Object.keys(student));

//Getting Object Values
console.log(Object.values(student));

//Getting Object Entries
console.log(Object.entries(student));

//Assigning Objects
console.log(Object.assign({}, student));
console.log(copy);

let copy1 = {...student}
console.log(copy1);

//in operator
console.log("name" in student);

//hasOwnProperty
console.log(student.hasOwnProperty("name"));

//Object Freeze
console.log(Object.freeze(student));

//Object Seal
Object.seal(student);
student.name="Himi";
console.log(student.name);

//Deep vs Shallow Copy
let copy = {...student};
console.log(copy);

//Shallow Copy
const fj = structuredClone(student);
console.log(fj);