//This is the library


class EasyHttp{
    //make an http get request
    get(url){
        fetch(url)
        .then(res=>res.json())
        .then(data=> console.log(data))
        .catch(err=>console.log(err));
    }
}