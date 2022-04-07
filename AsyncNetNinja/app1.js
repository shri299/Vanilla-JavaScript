//HTTP REQUESTS

//make http requests to get data froma another server  
//we make these requests to api endpoints(urls)  
//we can make our own api using any server side language :-)
//we typically get back data in json format


//create a request object
const request = new XMLHttpRequest();

//checking change in state after each step 
request.addEventListener('readystatechange',()=>{
    //console.log(request,request.readyState);

    //we can use or access the data only at ready state 4
    if (request.readyState===4 && request.status===200) {
        console.log(request.responseText);
    }
    else if (request.readyState===4) {
        console.log("could not fetch the data");
    }
})

//preparing to send the request
request.open('GET','https://jsonplaceholder.typicode.com/posts/');


//sending the request
request.send();