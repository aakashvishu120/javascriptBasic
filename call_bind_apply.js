let name = {
    firstName : "Aakash",
    lastName : "Vishwakarma"
}

let printFullName = function (hometown, state){
    console.log(this.firstName + " " + this.lastName + " from " + hometown + " " + state)
}

printFullName.call(name, "Ghaziabad" , "UP");


let name2 = {
    firstName : "Rohan",
    lastName : "Mokashi"
}

//function borrowing
printFullName.call(name2 , "Mumbai" , "Maharashtra")

//apply takes the seoncd argument as array
printFullName.apply(name2 , ["Mumbai" , "Maharashtra"])

//bind will return the function which can be invoke later
let printMyName = printFullName.bind(name2, "Mumbai" , "Maharashtra");
console.log(printMyName)
printMyName();
