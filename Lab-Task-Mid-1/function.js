function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("alice");

function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);

console.log(result);

//arrow function
let greet2 = name => console.log(`Hello, ${name}!`);
greet2('faisal');

//passing Function as a parameter
function operateOneNumber(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

let resultAddition = operateOneNumber(5, 3, add);
let resultMultiply = operateOneNumber(5, 3, multiply);

console.log(resultAddition);
console.log(resultMultiply);
