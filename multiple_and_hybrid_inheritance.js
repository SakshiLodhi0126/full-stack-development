//Multiple Inheritance and Hybrid Inheritance is not supported in JavaScript so we use mixins to achieve similar functionality.

// Base Parent Class
class Device {
  turnOn() { console.log("Device powered on."); }
}

// Mixin for Camera features
const CameraMixin = (Base) => class extends Base {
  takePhoto() { console.log("Photo captured."); }
};

// Mixin for Phone features
const PhoneMixin = (Base) => class extends Base {
  makeCall() { console.log("Calling..."); }
};

// SmartPhone combines Device, Camera, and Phone (Multiple/Hybrid structure)
class SmartPhone extends PhoneMixin(CameraMixin(Device)) {}

const myPhone = new SmartPhone();
myPhone.turnOn();    
myPhone.takePhoto(); 
myPhone.makeCall();  