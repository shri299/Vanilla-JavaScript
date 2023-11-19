function fetchUser(){
    fetch('https://randomuser.me/api/')
    .then((responseObject)=>{
        return responseObject.json();
    }).then((data)=>{
        console.log(data.results[0]);
        displayUser(data.results[0]);
    });
}

function displayUser(user){
    if(user.gender==='female'){
        document.body.style.backgroundColor = 'purple';
    } else{
        document.body.style.backgroundColor = 'blue';
    }

    document.body.innerHTML = `<p>${JSON.stringify(user)}</p>`;
}

document.body.innerHTML = "<button>CLICK</button><br><br><br>";
document.addEventListener('click',fetchUser);
fetchUser();