// method chaining = calling one method after another in one continous line of code


//no method chaning
let username = "aaKASH viSHwaKARma"
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();


let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);


//method chaining
console.log("using method chaining")
fullname = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(fullname)
