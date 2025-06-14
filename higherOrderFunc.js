
//using normal function
const radius = [3,1,2,4]

const calculateArea = function (radius){
    const output = []
    for(let i =0 ; i <  radius.length ; i++){
        output.push(Math.PI * radius[i] * radius[i])
    }
    return output;
}

console.log("area" , calculateArea(radius));

const calculateCircumference = function (radius){
    const output = []
    for(let i =0 ; i <  radius.length ; i++){
        output.push(2 * Math.PI * radius[i])
    }
    return output;
}

console.log("circumference" , calculateCircumference(radius));

const calculateDiameter = function (radius){
    const output = []
    for(let i =0 ; i <  radius.length ; i++){
        output.push(2 * radius[i])
    }
    return output;
}

console.log("diameter" , calculateDiameter(radius));



//using higher order function
console.log("after using higher order function")
const area2 = function (radius){
    return Math.PI * radius * radius;
}

const circumference2 = function (radius){
    return 2 * Math.PI * radius;
}

const diameter2 = function (radius){
    return 2 * radius;
}

const calculate = function (radius, logic){
    const output = [];
    for(let i =0  ; i < radius.length ; i++){
        output.push(logic(radius[i]))
    }
    return output;
}


console.log(calculate(radius, area2));
console.log(calculate(radius, circumference2));
console.log(calculate(radius, diameter2));

