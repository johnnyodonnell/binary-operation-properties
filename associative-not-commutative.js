let func = (a, b) => (x) => {
    return a(b(x));
};

let left;
let right;

let a = (x) => {
    return Math.pow(x, 2);
};

let b = (x) => {
    return x + 1;
};

let c = (x) => {
    return x * 10;
};

console.log("func commuative?");
left = func(a, b)(4);
right = func(b, a)(4);
console.log(left === right);
console.log();

console.log("func associative?");
left = func(a, func(b, c))(4);
right = func(func(a, b), c)(4);
console.log(left === right);
console.log();

