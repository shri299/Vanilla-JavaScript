const posts = [
    {title: 'post one', body: 'this is post one'},
    {title: 'post two', body: 'this is post two'}

];

//synchronous method

    function createPost(post){

        setTimeout(function(){
            posts.push(post); //adding on to an array using push
        },2000);

    }

    function getPost(){

        setTimeout(function(){

            let output = '';
            posts.forEach(function(post){
                output += `<li>${post.title}</li>`
            });
            document.body.innerHTML = output;

        },1000);

    }

    createPost({title:'post3',body:'this is post three'});
    getPost();


//asynchronous method

    // function createPost(post , callback){

    //         setTimeout(function(){
    //             posts.push(post);
    //             callback();
    //         },2000);

    //     }

    // function getPost(){

    //     setTimeout(function(){

    //         let output = '';
    //         posts.forEach(function(post){
    //             output += `<li>${post.title}</li>`;
    //         });
    //         document.body.innerHTML = output;

    //     },1000);

    // }

    // createPost({title:'post three',body:'this is post three'},getPost);
    
