const http = new EasyHTTP;

//get users

    // http.get('https://jsonplaceholder.typicode.com/users').then(data=>console.log(data)).catch(err=>console.log(err));
  
//user data
 const data = {
     name: 'john doe',
     username:'johndoe',
     email:'johndoe@gmail.com'
 }

 //create post request
//  http.post('https://jsonplaceholder.typicode.com/users',data).then(data=>console.log(data)).catch(err=>console.log(err));

 //make a put request(update)
//  http.put('https://jsonplaceholder.typicode.com/users/2',data).then(data=>console.log(data)).catch(err=>console.log(err));

//delete request
http.delete('https://jsonplaceholder.typicode.com/users/2').then(data=>console.log(data)).catch(err=>console.log(err));

