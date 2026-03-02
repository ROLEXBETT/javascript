// Functions with parameters - they are values that get passsed as arguments when invoke a function
// They help us create functions that can be reusable through out a program

function greeting(name){
    console.log("Hello", name, "How have you been?")
}
greeting("Rolex")
greeting("John")

console.log("*******************")
//Below is a function with parameters
function addition(number1, number2){
    sum = number1 + number2
    console.log("The sum of the numbers is: ", sum)
}
addition(45, 60)

console.log("*******************")

// by use of a function that accepts parameters, calculate the area of triangle whose base is 20cm ad height is 12cm.

function area(base, height){
    area = (base * height)/2
    console.log("The area of the triangle is:" ,area, "cm\u00B2")
}
area(20,12)

console.log("*******************")

//Find the simple interest given the principal as 50000, rate as 5% and time as 8 years

function SI(p, r, t){
    SI = (p * r * t)/100
    console.log("The simple interest is:"  ,SI)
}
SI(50000, 5, 8)