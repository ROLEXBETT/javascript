//Create a for loop that is able to print out all the leap years from 2000 to 2026
for (let year = 2000; year <= 2026; year += 4) {
    console.log(year);
}
for (let year = 2000; year <= 2026; year++) {
  if (year % 4 === 0) {
    console.log(year);
  }
}

console.log("*******************")

// Write a for loop to print all odd numbers from 1 to 19.
for (let number = 1; number <=19; number++){
    if (number % 2 !==0){
        console.log(number);
    }
}

console.log("*******************")

// Write a for loop to count down from 10 to 1 and print the numbers in the console.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("*******************")

 //Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1].
 let numbers = [10, 20, 4, 45, 99, 1];
let largest = numbers[0];  // Assume first number is the largest

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];  // Update largest if bigger number is found
    }
}

console.log("Largest number is:", largest);

console.log("*******************")

//Write a for loop to print the multiplication table of 5 from 5 x 1 to 5 x 10.

for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}


console.log("*******************")

/// Research on arrow function, functions with parameters and anonymous functions in javascript.
const greet = (name) => {
    return "Hello " + name;
};

function add(a, b) {
    return a + b;
}

console.log(add(5, 3));

setTimeout(function() {
    console.log("Hello after 2 seconds");
}, 2000);


console.log("*******************")

let salary = 38000;  
let contribution;

if (salary < 6000) {
    contribution = 150;
} 
else if (salary >= 6000 && salary <= 7999) {
    contribution = 300;
} 
else if (salary >= 8000 && salary <= 11999) {
    contribution = 400;
} 
else if (salary >= 12000 && salary <= 14999) {
    contribution = 500;
} 
else if (salary >= 15000 && salary <= 19999) {
    contribution = 600;
} 
else if (salary >= 20000 && salary <= 24999) {
    contribution = 750;
} 
else if (salary >= 25000 && salary <= 29999) {
    contribution = 850;
} 
else if (salary >= 30000 && salary <= 49999) {
    contribution = 1000;
} 
else if (salary >= 50000 && salary <= 99999) {
    contribution = 1500;
} 
else {
    contribution = 2000;
}

console.log("Gross Salary: Ksh", salary);
console.log("NHIF Contribution: Ksh", contribution);