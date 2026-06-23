const employees = [{name: 'John', salary: 50000}, {name: 'Jane', salary: 60000}]
const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
console.log(totalSalary);
