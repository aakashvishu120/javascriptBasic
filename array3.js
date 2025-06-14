const obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); 

console.log(Object.values("foo")); 

// Other primitives except undefined and null have no own properties
console.log(Object.values(100)); // []


//string sorting
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);