//getting data from a file

fetch('./movies.json').then((responseObject)=>{
    console.log(responseObject);
    return responseObject.json();
}).then((data)=>{
    console.log(data);
})

//fetching from text file

fetch('./movies.json').then((responseObject)=>{
    console.log(responseObject);
    return responseObject.text();
}).then((data)=>{
    console.log(data);
})


fetch('http://api.github.com/users/shri299').then((responseObject)=>{
    console.log(responseObject);
    return responseObject.json();
}).then((data)=>{
    console.log(data);
    document.querySelector('body').textContent = JSON.stringify(data);
    document.querySelector('body').textContent += data.login;
})
