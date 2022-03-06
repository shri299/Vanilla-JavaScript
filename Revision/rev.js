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
//Make an HTTP GET request
//Make an HTTP GET request
//Make an HTTP GET request