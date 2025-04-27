const myButton = document.getElementsById("myButton");
const myLabel = document.getElementsById("myLabel");
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function() {
    randomNum = Math.floor(Math.random * max) + min;
    myLabel.textContent = randomNum;
};