Scope
var is function-scoped. This means a variable declared with var is accessible throughout the function it's declared in, even before the line where it's declared.
let and const are block-scoped. Variables declared with let or const are only accessible within the block (denoted by curly braces {}) they are defined in.


Hoisting
var declarations are hoisted to the top of their scope. This means they can be accessed before they are declared, but their value will be undefined until the actual declaration line is reached.
let and const declarations are also hoisted, but they are not initialized. Accessing them before their declaration results in a ReferenceError (Temporal Dead Zone).


Reassignment
var variables can be reassigned and redeclared within their scope.
let variables can be reassigned but not redeclared within their scope. 
const variables cannot be reassigned after their initial assignment. They must also be initialized when declared.




