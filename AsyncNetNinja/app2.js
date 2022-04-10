//callback hell

const getpost = (resource,callback) =>
{
    const req = new XMLHttpRequest();
    req.addEventListener('readystatechange',() => {
        if (req.readyState===4 && req.status===200) {
            const data = JSON.parse(req.responseText);
            callback(data);
        }
        else if(req.readyState===4)
        {
            callback(req.responseText);
        }
    })

    req.open('GET',resource);
    req.send();
}


getpost('post.json',(data)=>{
    console.log(data);
    getpost('post1.json',(data)=>{
        console.log(data);
        getpost('post2.json',(data)=>{
            console.log(data);
        })
    });
})

