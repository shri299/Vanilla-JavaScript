//async and await

//the below function is called as asynchronous function
//and it always returns a promise
//await makes res and data variable wait, so that promise returned by fetch and res.json() is resolved and then assign the data returned by these two to respective variables

const getpost = async ()=>{
    const res = await fetch('post.json');
    //console.log(res);
    const data = await res.json();
    //console.log(data);
    return data;
};

//does not blocks the rest of the code

const test = getpost().then((data)=>{
    console.log(data);
});