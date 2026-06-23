class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    study(name){
        console.log(`${name} is studying.`);
    }
}
let student1 = new Student("John", 20);
student1.study("Yami");
