//What is the difference between a dictionary in python, an object in javascript and a json data when dealing with APIs
 
//A Python dictionary is a data structure in Python used to store key-value pairs.

//A JavaScript object is a similar key-value structure used in JavaScript.

//JSON is a text-based data format used to transfer data between systems, especially in APIs.



// Triple equal sign -Research in javascript
// ->It compares value AND data type.
console.log(5 === "5"); // false
console.log(true === 1);   // false



let distance = 350;  

let amount;

if (distance >= 0 && distance <= 100) {
    amount = 5;
} 
else if (distance >= 101 && distance <= 500) {
    amount = 10;
} 
else if (distance >= 501 && distance <= 1000) {
    amount = 20;
} 
else if (distance >= 1001) {
    amount = 40;
} 
else {
    amount = "Invalid distance";
}

console.log("Amount to pay: $");