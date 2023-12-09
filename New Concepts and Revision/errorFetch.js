// fetch('https://httpstat.us/200')
// .then((resObj)=>{
//     console.log(resObj);
// })
// .then(()=>{
//     console.log("success");
// })


//now the catch will run, you need to throw it some how first

fetch('https://httpstat.us/413')
.then((resObj)=>{
    console.log(resObj);
    console.log(resObj.status);
    // if(!resObj.ok){
    //     throw new Error("request failed");
    // }
    if(resObj.status === 404){
        throw new Error("Not found");
    }
    else if(resObj.status === 500){
        throw new Error("server error");
    }
    else if(resObj.status !== 200){
        throw new Error("request failed");
    }
})
.then(()=>{
    console.log("success");
})
.catch((err)=>{
    console.log(err);
})


//the catch runs in network error cases

// fetch('https://httat.us/404')
// .then((resObj)=>{
//     console.log(resObj);
// })
// .then(()=>{
//     console.log("success");
// })
// .catch((err)=>{
//     console.log("internal server error");
//     console.log(err);
// })