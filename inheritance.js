class Animal{
    eat(){
        console.log("Eating...")
    }
    sleep(){
        console.log("Sleeping...")
    }
}
class Dog extends Animal{
    bark(){
        console.log("Barking...")
    }
}
const dog = new Dog();
dog.eat();
dog.sleep();
dog.bark();
