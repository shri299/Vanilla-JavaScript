const http = new easyhttp;

//get post
    //  http.get('https://jsonplaceholder.typicode.com/posts',function(err,response){
    //      if(err){
    //          console.log(err);
            
    //      }else{

    //         console.log(response);

    //      }
        
    //  });

    //get single post

        //      http.get('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
        //      if(err){
        //          console.log(err);
                
        //      }else{

        //         console.log(response);

        //      }
            
        //  });

//post request

         const data ={
             title: 'custom post',
             body: 'this is a custom post'
         };
        //  http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post){
        //     if(err){
        //         console.log(err);
               
        //     }else{

        //        console.log(post);

        //     }
           
        //  });

//put request
        //  http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err,post){
        //     if(err){
        //                 console.log(err);
                       
        //             }else{
        
        //                console.log(post);
        
        //             }
        //  });


//delete request

            http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
            if(err){
                console.log(err);
                
            }else{

                console.log(response);

            }
            
        });


