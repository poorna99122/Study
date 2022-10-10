console.log(1 == '1'); //Lax Equality
console.log(1 === 1);  //Strict Equality

//JS equality type-coercion rules

/*
strings => truned into numbers
Objects/arrays/complex data => forced into primitive values
*/

let a = 1;
let b = '1';
console.log(a == b);


let p = '';
let q = 0;
let r = ' ';
console.log(p == q); //true
console.log(q == r); //true
console.log(p == r); //false


