let left;
let right;

let a = 4;
let b = 3;
let c = 2;

console.log("Addition commutative?");
left = a + b;
right = b + a;
console.log(left === right);
console.log();

console.log("Addition associative?");
left = a + (b + c);
right = (a + b) + c;
console.log(left === right);
console.log();

console.log("Subtraction commutative?");
left = a - b;
right = b - a;
console.log(left === right);
console.log();

console.log("Subtraction associative?");
left = a - (b - c);
right = (a - b) - c;
console.log(left === right);
console.log();

console.log("Multiplication commutative?");
left = a * b;
right = b * a;
console.log(left === right);
console.log();

console.log("Multiplication associative?");
left = a * (b * c);
right = (a * b) * c;
console.log(left === right);
console.log();

console.log("Division commutative?");
left = a / b;
right = b / a;
console.log(left === right);
console.log();

console.log("Division associative?");
left = a / (b / c);
right = (a / b) / c;
console.log(left === right);
console.log();

