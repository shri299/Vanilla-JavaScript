const getpost = (resource) => {
    
    return new Promise((resolve,reject)=>{
        const req = new XMLHttpRequest();
        req.addEventListener('readystatechange',() => {
            if (req.readyState===4 && req.status===200) {
                const data = JSON.parse(req.responseText);
                resolve(data);
            }
            else if(req.readyState===4)
            {
                reject("error");
            }
        })
    
        req.open('GET',resource);
        req.send();
    })
};


getpost('post.json').then((data)=>{
    console.log(data);
    return getpost('post1.json');
}).then((data)=>{
    console.log(data);
    return getpost('post2.json');
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})