//fetch api

//fetch('post.json'); //this returns a promise hence we can use dot then

fetch('post.json').then((data)=>{
    console.log("success",data); //here logging wont give actual json data he we need to use json function on data.
    //data.json(); // you cant directly console log it as it returns a promise.
    return data.json(); //hence we can add one more dot then
}).then((data)=>{
    console.log(data);
}).catch(()=>{
    console.log("error");
})


//the promise is only rejected when we get some kind of network error.
//so to manually keep track of some spelling mistake in url or some other error we need to use and if status===200 b4 doing something with the data