const arr = [12 , 6 , 32 , 54 , 2 , 90 , 24 , 43 , 65 , 98 , 26]
const arr2 = [501, 555, 623, 589, 540]
console.log(arr) 


console.log("after using array push")
arr.push(100)
console.log(arr)

console.log("after using array pop")
arr.pop(100)
console.log(arr)

console.log("after using array at")
let value = arr.at(5)
console.log(value)

//The shift() method removes the first array element 
console.log("after using  array shift")
arr.shift();
console.log(arr)


//The unshift() method adds a new element to an array (at the beginning),
console.log("after using  array unshift")
arr.unshift(50);
console.log(arr)

//The concat() method creates a new array by merging (concatenating) existing arrays:
console.log("after using  array concat")
const concatArray = arr.concat(arr2);
console.log(concatArray)

console.log("after using  array join")
const arrayJoin = arr.join(" - ");
console.log(arrayJoin)

console.log("after using  array sort")
arr.sort();
console.log(arr)

console.log("after using  array reverse")
arr.reverse();
console.log(arr)

//The toString() method returns the elements of an array as a comma separated string.
console.log("after using array toString")
let myString = arr.toString();
console.log(myString)

