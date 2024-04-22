/* 
    Math = built-in object that provides a collection of properties and methods
*/


console.log(`PI = ${Math.PI}`);       // PI = 3.14159
console.log(`e = ${Math.E}`);        // e = 2.71

let x = 10;
let y = 2;
let z;

z = Math.round(x);                  // rounds the number
z = Math.floor(x);                  // rounds the number down
z = Math.ceil(x);                   // rounds the number up
z = Math.trunc(x);                  // eliminates any decimal portion
z = Math.pow(x, y);                 // "x to the power of y"
z = Math.sqrt(x);                   // square root of x
z = Math.log(x);                    // logarithm of x
z = Math.sin(x);                    // sine of x
z = Math.cos(x);                    // cosine of x
z = Math.tan(x);                    // tangent of x
z = Math.abs(x);                    // absolute value of a number
z = Math.sign(x);                   // finds the sign of a number
let max = Math.max(x, y);           // finds the maximum number
let min = Math.min(x, y);           // finds the minimum number

console.log(min);