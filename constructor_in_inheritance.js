class Animal {
    constructor(name,age,breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
    makeSound() {
        console.log(`${this.name} is making a sound.`);
    }
    }
class Cat extends Animal {
    constructor(name, age, breed) {
        super(name, age, breed);
        this.breed = breed;
    }
}
const c = new Cat("Whiskers", 2, "Siamese");
console.log(c.name, c.age, c.breed);
