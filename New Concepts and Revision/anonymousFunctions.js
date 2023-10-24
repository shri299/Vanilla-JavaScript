//In JavaScript, an anonymous function is a function that is defined without a name. 
//Are also sometimes referred to as nameless functions or lambda functions. 
//These functions can be defined inline and are often used in situations where a function is used only once or in places where a function reference is not needed. 


//An inline function, also known as an anonymous function or a lambda function.
//it is a function that is defined and used in one line of code, without a separate declaration.


// Syntax of an anonymous function
var myFunction = function(parameters) {
    // Function body
    // Code to be executed
};


// Example of using an anonymous function as a callback
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number * 2); // Doubles each number and logs the result
});

//Arrow functions, introduced in ECMAScript 6 (ES6), provide a more concise syntax for defining anonymous functions, especially for simple functions.

// Using an arrow function as a callback
var numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log(number * 2); // Doubles each number and logs the result
});



//just the opposite of anonymous function we have named functions : 


// Named function definition
function calculateArea(radius) {
    return Math.PI * radius * radius;
}

// Using the named function in multiple places
var circleRadius = 5;
var area = calculateArea(circleRadius);
console.log("Area of the circle: " + area);

var anotherRadius = 10;
var anotherArea = calculateArea(anotherRadius);
console.log("Area of another circle: " + anotherArea);


