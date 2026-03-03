// // Read on arrow function with and without parameters.
const greet = () => {
    console.log("Hello!");
};

greet();

const sayHello = () => console.log("Hello World!");

const add = (a, b) =>  a + b;
console.log(add(4, 6));

console.log("*******************")

// research on modules in Javascript
import greet from "./lesson4a.js";

greet();