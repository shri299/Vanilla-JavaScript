//We are using JSONtypicode(JSONPlaceholder)//fake online restAPI
function easyHTTP() { //contructor
    this.http = new XMLHttpRequest(); //property of the constructor
}

//Make an HTTP GET request
easyHTTP.prototype.get = function(url,callback) {
    this.http.open('GET',url,true);
    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200){
            callback(null,self.http.responseText);
        }
        else{
            callback("ERROR" + self.http.status);
        }
    }
    this.http.send();
}
//Make an HTTP POST request
easyHTTP.prototype.post = function(url,data,callback) {
    this.http.open('POST',url,true);
    //set the content type
    this.http.setRequestHeader('Content-type','application/json');

    let self = this;
    this.http.onload = function() {
        callback(null,self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}
//Make an HTTP GET request
//Make an HTTP GET request