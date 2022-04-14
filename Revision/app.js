// document.getElementById('button1').addEventListener('click',getText);
//document.getElementById('button2').addEventListener('click',getJSON);
document.getElementById('button3').addEventListener('click',getExternal);

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

function getExternal(){
    fetch('https://api.github.com/users')
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
}
