//a function passed into another function is known as a callback function


// setTimeout(()=>{
//     console.log("function called");
// },3000);

// function x(callback){
//     console.log("x");
//     callback();
// }

// x(function y(){
//     console.log("y");
// });


function checking(){
    let count = 0;
    function xyz(callback){
        console.log(count);
        callback();
    }
    xyz(()=>{
        console.log(count);
    });
}

checking();






//not every callback provides async support

// function x(callback){
//     console.log("something");
//     callback();
// }

// function callback(){
//     let i = 0;
//     while (i<10) {
//         console.log("hmm");
//         i++;
//     }
// }

// x(callback);

// function noncallback() {
//     console.log("non call back function");
// }

// noncallback();