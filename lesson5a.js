// Arrow functions 
// This is a function that was introduced in the ECMA  Script 6 and they give us the latest/modern way of defining functions in compact manner.
// At times the arrow function can be used to be anonymous functions why? This is because they bused = the names of the variables they are contained in


const sayHello = () =>{
    console.log("This is an arrow function")
}

sayHello();

console.log("==============================")

// create an arrow function that is able to find the product of three numbers.
const product = (a, b, c) => {
    return a * b * c;
};

console.log(product(2,3,4));

const products = (a, b, c) => a * b * c;

console.log(product(5, 2, 3));

const producta = () => {
    let num1 = 3
    let num2 = 5
    let num3 = 4
    answer = num1*num2*num3
    console.log("This is the product:",answer)
}
producta();