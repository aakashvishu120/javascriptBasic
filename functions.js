
//regular functions
function add(a, b){
    console.log(a+b);
}
add(5, 3)



//arrow functions : An arrow function is a shorter syntax for writing functions in JavaScript
let subtract = (a, b) => console.log(a-b); 
subtract(10,8)


//no Name function : In JavaScript, a "no-name function" is known as an anonymous function. It is a function that is defined without a specific name or identifier.
const multiply = function (a, b){   
    return a*b;
}
console.log(multiply(5,4))