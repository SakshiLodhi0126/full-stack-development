//Multilevel Inheritance means one class inherits another class which in turn inherits from another class.
class Vehicle {
  start() { console.log("Vehicle started."); }
}

class Car extends Vehicle {
  drive() { console.log("Car is driving."); }
}

class ElectricCar extends Car {
  charge() { console.log("Battery charging."); }
}

const myTesla = new ElectricCar();
myTesla.start();  
myTesla.drive(); 
myTesla.charge(); 
