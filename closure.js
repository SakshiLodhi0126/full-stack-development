function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
const counter = outer();
const c = outer();
counter();
counter();
counter();
c();

function createBankAccount(initialBalance) {
    let balance = initialBalance;
    function deposit(amount) {
        balance += amount;
        console.log(balance);
    }
    function withdraw(amount) {
        balance -= amount;
        console.log(balance);
    }
    function checkBalance() {
        console.log(balance);
    }
    return {deposit, withdraw, checkBalance};
}
const bankAccount = createBankAccount(100);
bankAccount.deposit(50);
bankAccount.withdraw(20);
bankAccount.checkBalance();
console.log(bankAccount.balance);

function multiplier (factor) {
    return function (number){
        return number * factor;
    }
    const t = multiplier(3);
    console.log(t(5));
}
