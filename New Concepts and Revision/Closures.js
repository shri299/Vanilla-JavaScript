// function x(){
//     var a = 6;
//     function y(){
//         console.log(a);
//     }
//    // y();
//    a = 100; //the refrence to a is returned in the closure, not the value, now since a has 100, we will log 100 when z is called
//    return y; //the function is returned along with its lexical scope / a closure is returned
// }

// var z = x();
// console.log(z);
// z();

//function bundled along with its lexical scope forms a closure




function z(){
    var b = 200;
    function x(){
        var a= 6;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}

z();