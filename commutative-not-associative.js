let func = (a, b) => {
    return (a * b) + 1;
};

let left;
let right;

let a = 4;
let b = 3;
let c = 2;

console.log("func commuative?");
left = func(a, b);
right = func(b, a);
console.log(left === right);
console.log();

console.log("func associative?");
left = func(a, func(b, c));
right = func(func(a, b), c);
console.log(left === right);
console.log();

