//Single Inheritance means one class inherits another class.
class Animal {
  constructor(name) { this.name = name; }
  eat() { console.log(`${this.name} is eating.`); }
}

class Dog extends Animal {
  bark() { console.log(`${this.name} barks.`); }
}

const myDog = new Dog("Buddy");
myDog.eat();  
myDog.bark(); 
