function addNumbers(a: number, b:number) {
    return a + b;
}
console.log(addNumbers(10, 20));

let addNumbers5 = (a: number, b: number): number => a + b;
console.log(addNumbers5(10, 20));

let addNumbers1 = (a: number, b:number, c?: number): number => a + b + (c ?? 0);
console.log(addNumbers1(1, 2, 3));

let addNumbers2 = (a: number, b:number, c: number = 10): number => a + b + c;
console.log(addNumbers2(10, 20, 20));

// function addNumbers3 