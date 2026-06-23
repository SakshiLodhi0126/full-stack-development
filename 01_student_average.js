let students = [
    { name: "John", marks: [80, 90, 85] },
    { name: "Emma", marks: [95, 92, 98] }
];

let result = students.map(student => {

    let total = student.marks.reduce(
        (sum, mark) => sum + mark, 0);

    let average = total / student.marks.length;

    return {
        name: student.name,
        average: average
    };

});

console.log(result);