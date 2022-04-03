document.getElementById('button').addEventListener('click',loadData);

function loadData(){
    //create an XHR object
    const xhr = new XMLHttpRequest();

    //OPEN
    xhr.open('GET','data.txt',true);
    //console.log('READYSTATE',xhr.readyState);

    //optional:- used for spinners/loaders
    xhr.onprogress = function(){
        console.log('READYSTATE',xhr.readyState);

    }

    

    xhr.onload = function(){  //earlier we used onreadystatechange

        //HTTP Status:-
         //200: "OK"
         //403: "Forbidden"
         //404: "Not Found"

         
         if(this.status === 200){
            
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
            
         }

    }
    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE',xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }
    xhr.onerror = function(){
        console.log('request error...');
    }
    xhr.send();

    //readyState Values
     //0: request not initialized
     //1: server connection established
     //2: request recieved
     //3: processing request
     //4: request finished and response is ready


}