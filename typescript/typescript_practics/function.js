function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(10, 20));
var addNumbers5 = function (a, b) { return a + b; };
console.log(addNumbers5(10, 20));
var addNumbers1 = function (a, b, c) { return a + b + (c !== null && c !== void 0 ? c : 0); };
console.log(addNumbers1(1, 2, 3));
var addNumbers2 = function (a, b, c) {
    if (c === void 0) { c = 10; }
    return a + b + c;
};
console.log(addNumbers2(10, 20, 20));
