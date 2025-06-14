// A callback function is a function that is passed as an argument to another function and executed later.

// A function can accept another function as a parameter.
// Callbacks allow one function to call another at a later time.
// A callback function can execute after another function has finished.

console.log("example 1")
function greet(name, callback){
    console.log("Hello " + name)
    callback();
}

function bye(){
    console.log("goodbye")
}

greet("aakash", bye)



console.log("example 2")
function calc(a, b, callback){
    callback(a,b)
}

function sum(a,b){
    console.log(a+b);
}

function subtract(a, b){
    console.log(a-b);
}


calc(10, 4, sum);
calc(10, 4, subtract);
