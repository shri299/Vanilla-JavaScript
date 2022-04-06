//creating library using es5 prototype constructors

    function easyhttp(){
        this.http = new XMLHttpRequest();
    }

    //creating prototype methods
    
        //make an http get request
            easyhttp.prototype.get = function(url , callback){
                this.http.open('GET',url,true);

                let self = this;

                // this.http.onload = function(){
                //     if(self.http.status === 200){
                //         console.log(self.http.responseText);
                //     }
                // }

                this.http.onload = function(){
                    if(self.http.status === 200){
                        callback(null,self.http.responseText);
                    }else{
                        callback('Error:' + self.http.status);
                    }
                }


                this.http.send();
            }

        //make a post request
            easyhttp.prototype.post = function(url,data,callback){ //when we pass data it just an object here
 
                this.http.open('POST',url,true);

                this.http.setRequestHeader('content-type','application/json');

                let self = this;

                this.http.onload = function(){
                    
                        callback(null,self.http.responseText);
                    
                    }


                this.http.send(JSON.stringify(data)); //to pass it here we need to convert data in string

            }

        //make a put request
            easyhttp.prototype.put = function(url,data,callback){ //when we pass data it just an object here
    
                this.http.open('PUT',url,true);

                this.http.setRequestHeader('content-type','application/json');

                let self = this;

                this.http.onload = function(){
                    
                        callback(null,self.http.responseText);
                    
                    }


                this.http.send(JSON.stringify(data)); //to pass it here we need to convert data in string

            }

        //make a delete request
            
        easyhttp.prototype.delete = function(url , callback){
            this.http.open('DELETE',url,true);

            let self = this;

            // this.http.onload = function(){
            //     if(self.http.status === 200){
            //         console.log(self.http.responseText);
            //     }
            // }

            this.http.onload = function(){
                if(self.http.status === 200){
                    callback(null,'post deleted');
                }else{
                    callback('Error:' + self.http.status);
                }
            }


            this.http.send();
        }
