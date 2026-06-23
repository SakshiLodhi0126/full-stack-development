const users = [{name: 'John', age: 17}, {name: 'Jane', age: 21}, {name: 'Jim', age: 15}, {name: 'Jill', age: 20}]
const adults = users.filter(user => user.age >= 18);
console.log(adults);