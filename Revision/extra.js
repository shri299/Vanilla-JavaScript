document.getElementById('button1').addEventListener('click',getText);

function getText(){
    //fetch returns promises hence used .then
    fetch('revdata.txt').then(function(res){
        return res.text();
    }).then(function(data){
        // console.log(data);
        document.getElementById('output').innerHTML = data;
    }).catch(function(err){
        console.log(err);
    });
}


document.getElementById('button2').addEventListener('click',getJson);

function getJson(){
    //fetch returns promises hence used .then
    fetch('rev1.json').then(function(res){
        return res.text();
    }).then(function(data){
        //console.log(data);
        let output = '';
        data.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });

        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    });
}