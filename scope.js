// Global Scope:
// Variables declared outside of any function or block have global scope. They can be accessed from anywhere within the program.


// Function Scope (Local Scope):
// Variables declared inside a function have function scope. They are only accessible within that function.


// Block Scope:
// Variables declared inside a block (e.g., within an if statement, for loop, or {}) using let or const have block scope. They are only accessible within that block.

// Lexical Scope
// The variable is declared inside the function and can only be accessed inside that block or nested block is called lexical scope.

var a = 5, b = 10
function myfunc(x,y){
    console.log(x+y)
    console.log(a)   
}
myfunc(1,2)
console.log(b)




console.log("example of lex scope")
//example of lex scope
function outerfunction(){
    var outer = "aakash"
    function innerfunction(){
        var inner = "kumar"
        console.log(`${outer} ${inner}`);
    }
    innerfunction();
}
outerfunction();