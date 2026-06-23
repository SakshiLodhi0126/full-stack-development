const words = ["hello", "world","javascript"];
const nums = words.reduce((total,word) => {
    return total + word.length;
}, 0);
console.log(nums);

const joinedWords = words.reduce((join,word) => join += word);
console.log(joinedWords);
