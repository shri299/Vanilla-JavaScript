const xhr = new XMLHttpRequest();

document.querySelector('button').addEventListener('click',()=>{
    xhr.open('GET',"https://api.chucknorris.io/jokes/random");

xhr.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        document.querySelector('ul').innerText = JSON.parse(this.responseText).value;
    }
}
    xhr.send();
})
