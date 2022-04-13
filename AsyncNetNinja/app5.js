//async and await

//the below function is called as asynchronous function
//and it always returns a promise
//await makes res and data variable wait, so that promise returned by fetch and res.json() is resolved and then assign the data returned by these two to respective variables

const getpost = async ()=>{
    const res = await fetch('postt.json');
    //console.log(res);
    if (res.status!==200) {
        throw new Error('Cannot fetch the data');
    }
    const data = await res.json();
    //console.log(data);
    return data;
};

//does not blocks the rest of the code

const test = getpost().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("Error",err.message);
});