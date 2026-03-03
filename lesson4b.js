// Anonymous Functions in JS.
// Thse are functions that exist without a name

// example of such functions
//The below functions shall take the name of the variable they are contained in.

const greet = function(){
    console.log("Hello there, hope your Monday is fine...")
}
greet();

//Below is another anonymous function
//IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("Welcome to the world of programming...")
})();


(function(){
    let secret = "Hidden value";
    console.log(secret);
})();


