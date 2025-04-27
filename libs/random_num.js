// RANDOM NUMBER GENERATOR

const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * 5) + 1;
let randomNum2 = Math.floor(Math.random() * (max - min) + min);

console.log(randomNum);
console.log(randomNum2);