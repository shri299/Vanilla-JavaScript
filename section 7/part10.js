document.getElementById('button1').addEventListener('click',getText);

function getText(){
    fetch('data1.txt').then(function(res){
        return res.text();
    }).then(function(data){
        //console.log(data);
        document.getElementById('output').innerHTML = data;
    }).catch(function(err){
        console.log(err);
    });
}


document.getElementById('button2').addEventListener('click',getJSON);

function getJSON(){
    fetch('part10.JSON').then(function(res){
        return res.json();
    }).then(function(data){
        //console.log(data);
        let output="";
        data.forEach(function(post){
            output += `<li>${post.title}:${post.body}</li>
            `;
        });
        document.getElementById('output').innerHTML = output;
    }).catch(function(err){
        console.log(err);
    });
}

document.getElementById('button3').addEventListener('click',getAPIdata);

function getAPIdata(){
    fetch('https://api.github.com/users').then(function(res){
        return res.json();
    }).then(function(data){
        //console.log(data);
        let output="";
        data.forEach(function(user){
            output += `<li>${user.login}</li>
            `;
        });
        document.getElementById('output').innerHTML = output;
    }).catch(function(err){
        console.log(err);
    });
}