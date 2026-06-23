class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    // Method Overriding
    speak() {
        console.log(`${this.name} is barking.`);
    }
}

const d = new Dog("Tommy", "Labrador");

console.log(d.name, d.breed);
d.speak();