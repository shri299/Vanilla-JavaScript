//callback
const myFunc = (callbackFunc) =>{
    //do something
    let value=50;
    callbackFunc(value);
};

// myFunc(function(value){ //passing the callbackfunc as an argument
//     //do something
//     console.log(value);
// });

myFunc(value=>{
    console.log(value);
});


//Foreach

numbers = [1,2,3,4,5,6,7,8];

// numbers.forEach(function(num,index,array){
//     //console.log('something');
//     console.log(num,index);
//     //console.log(array);
// })

numbers.forEach(num =>{
    console.log(num);
} );

//we cam also create seperate function and paas it in the for each




