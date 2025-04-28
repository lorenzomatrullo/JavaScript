/*
    IF STATEMENTS = if a condition is true, execute some code
                    if not, do something else
*/

let age = 20;

if (age >= 18) {
    console.log("You are old enough to enter this site");
} else if (age < 0) {
    console.log("You are not born yet");
} else {
    console.log("You must be 18+ to enter this site");
}

///////////////////

let isDeveloper = true;

if (isDeveloper) {
    console.log("You are a developer!");
} else {
    console.log("You are NOT a developer!");
}