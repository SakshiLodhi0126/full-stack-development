const user = {
    name: 'John',
    age: 30,
    city: 'New York'
};
const {city = 'Indore'} = user;
console.log(city);
