// JavaScript Promises are objects representing the eventual result of an asynchronous operation. They provide a structured way to handle tasks that don't complete immediately, such as API calls or file reads, improving code readability and error handling compared to traditional callback functions.

let checkEven = new Promise((resolve, reject) => {
    let number  = 7;
    if(number % 2 == 0){
        resolve("Number is Even")
    }
    else{
        reject("number is odd")
    }
})

checkEven.then((value) => console.log(value)).catch((err) => console.log(err));