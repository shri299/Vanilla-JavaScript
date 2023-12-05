function createPost(post){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({
            "title" : post.title,
            "body" : post.body
        }),
        headers: {
            'Content-type':'application/json',
            token: 'abc123'
        }
    }).then((resObj)=>{
        return resObj.json();
    }).then((actual_data)=>{
        console.log(actual_data);
    })
}

createPost({
    "title":"something",
    "body":"some other something"
})