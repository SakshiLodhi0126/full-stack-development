const users = [
    { user: "A", actions: ["login", "logout"] },
    { user: "B", actions: ["login", "purchase", "logout"] }
];

let count = {};

for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].actions.length; j++) {
        let action = users[i].actions[j];

        if (count[action]) {
            count[action]++;
        } else {
            count[action] = 1;
        }
    }
}

console.log("Action Count:", count);

let mostCommon = "";
let max = 0;

for (let action in count) {
    if (count[action] > max) {
        max = count[action];
        mostCommon = action;
    }
}

console.log("Most Common Action:", mostCommon);


