class Employee {
constructor(id, name) {
    this.id = id;
    this.name = name;
}
work() {
    console.log(`${this.name} is performing general duties.`);
}
showDetails() {
    console.log(`ID: ${this.id}, Name: ${this.name}`);
}
}
class Developer extends Employee {
    constructor(id, name, language) {
        super(id, name);
        this.language = language;
    }
    writeCode() {
        console.log(`${this.name} is writing code in ${this.language}.`);
    }
    work() {
        console.log(`${this.name} is writing code in ${this.language}.`);
    }
}
class FrontendDeveloper extends Developer {
    constructor(id, name, language, framework) {
        super(id, name. language);
        this.framework = framework;
    }
    buildUI() {
        console.log(`${this.name} is building user interface using ${this.framework}
        `)
    }
    work() {
        console.log(`${this.name} is creating responsive web designs.`);
        }
    }
class Manager extends Employee {
    constructor(id, name, teamSize) {
        super(id, name);
        this.teamSize = teamSize;
    }
    conductMeeting() {
        console.log(`${this.name} is conducting a meeting for ${this.teamSize} members.`);
    }
}
const employee = new Employee(1, "A");
const developer = new Developer(2, "B", "JavaScript");
const frontendDeveloper = new FrontendDeveloper(3, "C", "JavaScript", "React");
const manager = new Manager(4, "D", 10);

console.log("Employee actions:");
employee.work();
employee.showDetails();

console.log("Frontend Developer actions:");
frontendDeveloper.work();
frontendDeveloper.writeCode();
frontendDeveloper.buildUI();

console.log("Manager actions:");
manager.work();
manager.conductMeeting();