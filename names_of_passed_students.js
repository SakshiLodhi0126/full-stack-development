const passingMarks = 40;
const students = [{name: "A", marks:35},{name: "B", marks: 75},{name: "C", marks: 45},{name: "D", marks: 55}];
//const passedStudents = students.filter(student => student.marks >= passingMarks).map(student => student.name);
const passedStudents = students.filter(function(mark){
    return mark.marks>40;
}).map(function(student){
    return student.name;
});
console.log(passedStudents);
