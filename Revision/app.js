// document.getElementById('button1').addEventListener('click',getText);
//document.getElementById('button2').addEventListener('click',getJSON);
//document.getElementById('button3').addEventListener('click',getExternal);

//Text File

// function getText(){
//     fetch('test.txt')
//     .then((res)=>{
//         return res.text();
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }

//JSON File


// function getJSON(){
//     fetch('test.json')
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }


//External API

// function getExternal(){
//     fetch('https://api.github.com/users')
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }


//another lecture 

const http = new EasyHTTP;

//get users

// http.get('https://jsonplaceholder.typicode.com/users')
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// });

//post users

const data = {
    name :'srishti',
    email:'abc@gmail.com',
    username:'srsrivas'
}

// http.post('https://jsonplaceholder.typicode.com/users',data)
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// });


//put request

// http.put('https://jsonplaceholder.typicode.com/users/2',data)
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// });

//delete request

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});


//async and await

// async function myfunc()
// {

//     const promise = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Hello")
//         }, 2000);
//     })

//     const error = false;
//     if (!error) {
//         const res = await promise;
//         return res;
//     }
//     else{
//         await Promise.reject(new Error('Something Went Wrong!'));

//     }
// }

// console.log(1);
// console.log(2);
// myfunc().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// console.log(3);
// console.log(4);


//using asyn with fetch


// async function getusers()
// {
//     //await response of fetch call
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');

//     //only proceed once first promise is resolved
//     const data = await response.json();

//     //only proceed once second promise is resolved
//     return data;
// }

// getusers().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })



