let employees = [
    { name: "A", salary: 50000 },
    { name: "B", salary: 40000 },
    { name: "C", salary: 60000 }
];

let salaries = employees.map(employee => employee.salary);

let totalSalary = salaries.reduce(
    (total, salary) => total + salary,
    0
);

console.log(salaries);
console.log(totalSalary);