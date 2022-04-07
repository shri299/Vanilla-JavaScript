//example of asyn js code

console.log(1);
console.log(2);
//this does not block the code because of callback function
setTimeout(() => {
    console.log("callback fucntion fired");
}, 2000);
console.log(3);
console.log(4);

//Important points about async js

    //aync js governs how we perform tasks which take some time to complete(eg. getting data from database)
    //start something now finish later

//sync js

    //only one statement is executed at a time in sequence.
    //this makes js a threaded language