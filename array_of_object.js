const fruits = [
    {name : "apple" , color : "red", calories : 95},
    {name : "orange" , color : "orange", calories : 45},
    {name : "banana" , color : "yellow", calories : 105},
    {name : "coconut" , color : "white", calories : 159},
    {name : "pineapple" , color : "yellow", calories : 37},
]

console.log("after pushing an object")
fruits.push({name : "grapes" , color : "purple" , calories : 62})
console.log(fruits)


console.log("after pop an object")
fruits.pop()
console.log(fruits)

console.log("after splice an object")
splicedElement = fruits.splice(1,1)   //splice(starting index, deletecount)
console.log("splicedElement" , splicedElement)
console.log(fruits)

console.log("looping through array of object")
fruits.forEach(fruit => console.log(fruit.name))