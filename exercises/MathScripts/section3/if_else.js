"use strict";

//Exercise: Write a program that checks if a number is even or odd. If the number is even, print "The number is even." If the number is odd, print "The number is odd."

//Hint: You can use the modulo operator (%) to check if a number is divisible by 2.
//can replace var number with odd or even and this still works. 2 ways to do this


var number = 9;

var remainder =  number % 2 ;
console.log(remainder);

var condition = remainder == 0

if (condition) {
  console.log("The number is even");
} else
{
  console.log("The number is odd");
}

console.log("always happens");

//example 2

var number = 9;
var condition = (number % 2) == 0
console.log(condition);

if (condition) {
console.log("The number is even");
} else {
console.log("The number is odd");  
}
//can replace var number with odd or even and this still works. 2 ways to do this

//Exercise: Write a program that checks if a user is logged in. If the isLoggedIn variable is true, print "Welcome, user!" If the isLoggedIn variable is false, print "Please log in."


var isLoggedIn = false // false=varible that can change. This can be true/false.
var condition = isLoggedIn //always need var condition because condition is the operator of true/false

if (condition) { // NOTHING should be between ) {. This makes the code more complicated and is in the wrong place
    console.log("Welcome, user!");
} else {
    console.log("Please log in.");
}

//understood oct/10/24