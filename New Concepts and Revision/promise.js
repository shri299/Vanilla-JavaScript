// const promise = new Promise((resolve,reject)=>{
//     //doing something async
//     setTimeout(()=>{
//         console.log("task completed");
//         resolve(); //everything went ok
//     },3000);
// });

// promise.then(()=>{
//     console.log("promise consumed");
// })




// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve("passing some data");
//         } else{
//             reject("something went wrong");
//         }
//     },1000)
// }).then((data)=>{
//     console.log(data);
// }).catch((data)=>{
//     console.log(data);
// }).finally(()=>{
//     console.log("run no matter what");
// });


// console.log("hello from global scope");


function testing(name){
    return new Promise((resolve,reject)=>{
        console.log(name);
        resolve();
    });
}

testing("srishti").then(()=>{
    console.log("promise reolved");
    return testing("runjhun");
}).then(()=>{
    console.log("second promise resolved");;
});

//console.log(testing("srishti"));

