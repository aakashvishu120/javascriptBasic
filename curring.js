//Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument

let multiply = function (x, y) {
    console.log(x*y)
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);