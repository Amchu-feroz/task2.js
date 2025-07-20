function greetUser(name) {
    return "Hello, " + name + "! 👋";
}
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

function multiplyNumbers(a, b) {
    return a * b;
}

let greeting = greetUser("Amrish");
let evenOrOdd = checkEvenOdd(9);
let product = multiplyNumbers(4, 5);

console.log(greeting);
console.log("9 is:", evenOrOdd);
console.log("Product of 4 and 5 is:", product);
