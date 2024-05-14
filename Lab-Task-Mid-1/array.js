let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banan", "orange"];
let mixedArray = [1, "two", { name: "Alice" }, [7, 8, 9]];

let firstNumber = numbers[0];
let secondFruit = fruits[1];
let thirdElement = mixedArray[2];
let fourthElement = mixedArray[3];

// console.log(fourthElement);
// console.log(thirdElement);

console.log(numbers);
console.log(fruits);
console.log(mixedArray);

console.log("After operation: ");

numbers.push(6);
fruits.pop();
fruits.unshift("pear");
numbers.shift();

console.log(numbers);
console.log(fruits);
console.log(mixedArray);

numbers.forEach(function (number) {
  console.log(number);
});

let doubleNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(doubleNumbers);

let evenNumbers = numbers.filter(function (number) {
  return number % 2 == 0;
});

console.log(evenNumbers);
