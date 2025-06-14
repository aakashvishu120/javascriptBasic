let testArray1 = [
    {
        id : 1,
        name : "Aakash",
        age : 24,
        email : 'aakash@gmail.com',
        books : [
            {
                name : 'John Book',
                published : '2010'
            },
            {
                name : "One thousand mile",
                published : '2012'
            }
        ]
    },
    {
        id : 2,
        name : "John",
        age : 15,
        email : 'john@gmail.com',
        books : [
            {
                name : 'Hanging fruit',
                published : '2022'
            },
            {
                name : "Vikas web",
                published : '2025'
            }
        ]
    }
]

//finding the index of the array
let index = testArray1.findIndex(item => item.name === 'John')
//changing the array by chaning john age to 20
testArray1[index].age = 20
console.log(JSON.stringify(testArray1, null, 2));

//changing the published year for the book with the name 'John Book' to 2025
let newArray = testArray1.map(item => {
    item.books.map(book => {
        if(book.name === 'John Book'){
            book.published = 2025
        }
        return book
    })
    return item
})
console.log("newArray = ", JSON.stringify(newArray, null, 2));

testArray1[0].books[0].name = "Alice in wonderland"
console.log("using hardcode = ", JSON.stringify(testArray1, null, 2));



//get an array with all the books as object attaching userEmail
const booksArrayWithEmail = testArray1.map(user => {
    return user.books.map(book => {
        return {
            ...book,
            userEmail : user.email
        }
    })
})
console.log("list of book having email = ", JSON.stringify(booksArrayWithEmail, null, 2));



let object1 = {
    helsinki : {
        population : 253220,
        languages : ['Finnish', 'Swedish' , 'English']
    },
    turku : {
        population : 23252,
        languages : ['Finnish', 'Swedish' , 'English', 'Russian']
    },
    tampere : {
        population : 32320,
        languages : ['Finnish', 'English']
    },
}

console.log("objects keys are" , Object.keys(object1))

Object.keys(object1).map(key=>{
    console.log("city = ", key)
    console.log("population = ", object1[key].population)
})