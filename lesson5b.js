// Arrow functions with parameters

const greet = (name) =>{
    console.log("Hello" + name +  "How have you been? I trust that you are good.")
}

greet("Rolex");

//Example 2
console.log("=======================")
//Below is afunction to find the area of a circle
const circleArea = (pi, radius) =>{
    let area = pi * radius * radius
    console.log("  The area of the Circlr is:" + area + "cm\u00B2")
}

circleArea(3.142, 7);
circleArea(3.142, 28);

console.log("=======================")
// come up with your own example of an arrow function that utilises 3 parameters.

const volume = (l, w, h) => {
    let volume = l*w*h
    console.log(" The volume of the cuboid is:", volume)
}

volume(12, 15, 18);