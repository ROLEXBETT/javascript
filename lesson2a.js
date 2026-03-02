// Objects data type:
// An oblect in javascript is data type that stores data in form of key value pairs.

let person = {
    Name : "Bernard James",
    Age : 70,
    isRegistered : true
}

console.log("The Details of the person is", person)

//First method is by use of the square brackets
console.log(person["Age"])

//second method is by use of the dot (.)notation
console.log(person.Name)

//check the data type
console.log(typeof(person))



// Array data type
// This refers to collection of items that are on indexes
let fruits = ["Mango", "Pineaple", "Apple", "Banana", "Melon", "Lemon", "Grapes"]
fruits.unshift("berries")
fruits.pop()
console.log("The entire array of fruits is: ", fruits)

//To access the items of an array we use the index
console.log(fruits[3])

// you can slice items of an array
console.log(fruits.slice(2,5))
