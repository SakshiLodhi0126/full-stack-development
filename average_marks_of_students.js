const marks = [80,90,70,60]
const average = marks.reduce(function(total,n){
    return total + n
},0)
console.log(average/marks.length);
