
//calling the function before creating it

//a();   //works normally
//b();   //not a function error(because b is treated as variable and is apparently undefined in the memory context of the EC)

//this(hoisting) is a difference between function statement and function epression

//function statement

function a() {
    console.log("function statement");
}
a();

//function expression

var b = function () {
    console.log("function expression");
}
b();



//named function expression

var t = function xyz() {
    console.log("named function epression");
}
t();
//xyz(); //xyz is not defined



//diffrence between paramentrs and arguments

var b = function (param1, param2) {
    console.log("function expression");
}
b("argument1","argument2");



//First class functions

//the ability to be used functions as values and can be passedas argument and returned from a function
//functions are first class citizens

var fun = function check(params) {
    console.log(params);
    return function hi(){

    };
}
fun(function () {
    
});
console.log(fun(null));



