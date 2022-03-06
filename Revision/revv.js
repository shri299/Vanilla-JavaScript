//using the library rev.js
const http = new easyHTTP;


//get posts

// http.get('https://jsonplaceholder.typicode.com/posts',function(err,response){
//     if (err) {
//         console.log(err);
//     }
//     else{
//         console.log(response);
//     }
// });

//post

//create data to be added

const data = {
    title: "Custom Post",
    body: "This is Custom Post"
};

// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,postdata){
//     if (err) {
//         console.log(err);
//     }
//     else{
//         console.log(postdata);
//     }
    
// });

//PUT REQUEST

http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,postdata){
    if (err) {
                 console.log(err);
             }
            else{
                console.log(postdata);
            }
});




