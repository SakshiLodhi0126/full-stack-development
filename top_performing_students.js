//Calculate average marks and keep average >= 85. Also return names sorted by average descending
const students = [{
    name: "Utkarsh", marks:[80,90,85]
},
{
    name: "Yukta", marks:[95,92,96]
},
{
    name: "Harsh", marks:[60,70,65]
}];
const topStudents = students.map((s) => {
    return{
        name: s.name,
        avg:s.marks.reduce((total,m) => {
            return total + m;
        },0)/s.marks.length
    };
}).filter((s) => s.avg >= 85).sort((a, b) => b.avg - a.avg).map(s => s.name);
console.log(topStudents);
