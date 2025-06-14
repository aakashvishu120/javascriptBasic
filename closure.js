//A closure is a function that retains access to the variables from its outer (enclosing) scope even after the outer function has finished executing. Every function in JavaScript has an associated closure, which is created at the time the function is defined. This closure allows the function to "remember" its lexical environment, meaning the variables in its scope at the time of its creation.

function outer() {
    var outerVar = "I am present in outer scope";
    function inner() {
        console.log(outerVar);
    }
    return inner;
}

const closure = outer();
closure(); // Output: I am present in outer scope
