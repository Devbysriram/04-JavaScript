// Alert vs Console

// alert("hello world");
// console.log("hello world")

// variables

// var team = "MERN Developers"   // ES5 Declaration
// let myName = "Sriram"          // ES6 Declaration
// const yourName = "Stephen"     // ES6 Declaration


// team = "Web Developers"
// myName = "Sriram R Krishnan"
// // yourName = "Monica"     will show error cannot reassign a value to constant variable
// console.log(team , myName);

// Datatypes

// String

// let miName = "Sriram" // sriram is a string data type
// let myAge = 29  // 29 is a number data type
// let Big = BigInt("123456789652328754589545") // 


// console.log( typeof(myAge) == "number" );  // boolean expression

// // Arrays

// const cars = ["Saab", "Volvo", "BMW"];

// // Objects

// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// for loop

// for(i=0 ; i<=50 ; i++)
//     {
//         console.log(i);
//     }

// const cars = ["Saab", "Volvo", "BMW"];

// for(i=0 ; i<cars.length ; i++)
//     {
//         console.log(cars[i]);
//     }

// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// for( x in person )
//     {
//         console.log('hi '+person[x]);
//     }

// while

// let i = 0;

// while(i<50){
//     console.log(i);
//     i++
// }


// ======================================================================

// control statements

// let a = 70;
// let b = 60;

// if(a>b)
//     {
//         console.log("a is bigger");
//     }
// else if (a==b) {
//         console.log("both are same")
//     }
// else{
//     console.log("b is bigger");
// }


// Switch Statements

// let a = 70;
// let b = 60;

// switch (false) {
//     case (a > b):
//         console.log("a is bigger");
//         break;
//     case (a < b):
//         console.log("b is bigger");
//         break;
//     default:
//         console.log("a & b are same");
//         break;
// }


// Pure Functions

// given the same input, will always return the same output and has no side effects.

// function sum(a,b){
//     return a+b
// }

// console.log(sum(2,5));

// Arrow Function

// let sum = ( a, b ) =>{
//     return a+b
// }

// console.log(sum(2,9));


// IIFE

// (function(message) {
//     console.log(message);
// })("Hello, IIFE!");

//   ==================================================================

// This Keyword in js

// console.log(this === window);

// function newFunc () {
//     this.name = "hello world"
//     return window.name
// }

// console.log(newFunc());

// =========================================================================

// const person = {
//     firstName: "John",
//     lastName: "Doe", 
//     age: 50,
//     welcome : function(){
//         console.log( "Hello " + this.firstName);
//     }
// };

// person.welcome()

// ==============================================================================

// let button = document.querySelector("#myButton")

// button.addEventListener("click" , ()=>{
//     localStorage.setItem("key" , "token" )
//     console.log( localStorage.getItem("key") );
// })

// ======================================================================================