//Hoisting is a JavaScript mechanism where declarations of variables, functions, and classes are moved to the top of their scope before code execution. This means that you can use these elements before they are declared in your code. 


greet();  //function hoisting
function greet() {
    console.log("Hello, world!");
}


console.log(a);
var a = 5; 

//it will give reference error
// console.log(b);
// let b = 5; 