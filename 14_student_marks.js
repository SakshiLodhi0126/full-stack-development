let marks = [45, 80, 60, 90, 30];

let passedMarks = marks.filter(mark => mark > 50);

let total = passedMarks.reduce(
    (sum, mark) => sum + mark,
    0
);

let average = total / passedMarks.length;

console.log(average);