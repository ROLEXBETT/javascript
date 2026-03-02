// While loop
// below is a simple synthax
//1. Initialization of a variable
//2. While key word
//3. condition to be checked
//4. body of the while loop
//5. increament/decreament


let i = 0; while(i <=10){
    console.log("The new value of i is:", i)
    i++
}

console.log("*******************")

// come up with js example of a map loop
//The map() method in JavaScript is used to iterate over an array and return a new array by applying a function to each element.
// .map() is used on arrays.

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(function(num) {
    return num * 2;
});

console.log(doubled);


console.log("*******************")

let names = ["Rolex", "Brian", "Kevin"];

let messages = names.map(name => 
    `Hello ${name}`
);

console.log(messages);

console.log("*******************")


const users = [
{ id: 1, name: 'Andrew', email: 'andrew@gmail.com' },
{ id: 2, name: 'Bob', email: 'bob@gmail.com' },
{ id: 3, name: 'Charlie', email: 'charlie@gmail.com' }
];
// Extract only the names into a simple string array
const userNames = users.map(user => user.name);
console.log(userNames);
// Output: ["Andrew", "Bob", "Charlie"]

console.log("*******************")

// it creates a new array
let number =[1,2,3,4,5];
let squares =number.map(num => num**2);
console.log(squares)

//Task: Write a for loop to print all odd numbers from 1 to 19. Task: Write a for loop to count down from 10 to 1 and print the numbers in the console.