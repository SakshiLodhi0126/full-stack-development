let actions = [
    { user: "A", action: "login" },
    { user: "B", action: "logout" },
    { user: "C", action: "login" }
];

let loginCount = actions
    .filter(action => action.action === "login")
    .length;

console.log(loginCount);