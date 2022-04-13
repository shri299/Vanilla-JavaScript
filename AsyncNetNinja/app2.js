//callback hell

const getpost = (resource,callback) =>
{
    const req = new XMLHttpRequest();
    req.addEventListener('readystatechange',() => {
        if (req.readyState===4 && req.status===200) {
            const data = JSON.parse(req.responseText);
            callback(data);
        }
        else if(req.readyState===4)
        {
            callback(req.responseText);
        }
    })

    req.open('GET',resource);
    req.send();
}


getpost('post.json',(data)=>{
    console.log(data);
    getpost('post1.json',(data)=>{
        console.log(data);
        getpost('post2.json',(data)=>{
            console.log(data);
        })
    });
})


//promise example

const getsomething = () =>{
    //resolve and reject are built in parameters
    //resolve : we get the data we want
    //reject : we get error and reject the promise
    return new Promise((resolve,reject)=>{
        //make a network request
        //resolve("some data");
        reject("some error");
    });
}

//if promise is resolved and data is returned then what to do with data
//even if its error i need to display it
//1st callback is resolve function and 2nd callback is reject function
getsomething().then((data)=>{
    console.log(data);
},(err)=>{
    console.log(err);
})


getsomething().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

