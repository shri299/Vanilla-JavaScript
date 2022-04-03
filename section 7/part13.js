//async and await(ES7 feature)

    // async function myfunc(){ //by adding async makes the function return a promise
    //     return 'hello';

    //     const promise = new Promise((resolve,reject)=>{
    //             setTimeout(()=>resolve('hello',1000));
    //     });

    //     const error = true;

    //     if(!error){

    //         const res = await promise; //wait until promise is resolved
    //     return res;

    //     }
    //     else{
    //         await Promise.reject(new Error('something went wrong'));
    //     }

        
    // }
    // // console.log(myfunc());
    // myfunc()
    // .then(res => console.log(res)).catch(err=>console.log(err));


async function getusers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json();

    return data;
}
getusers().then(users=>console.log(users));
