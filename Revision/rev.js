document.getElementById('button').addEventListener('click',loadData);


function loadData() {
    //Create an XHR object
    const xhr = new XMLHttpRequest();

    //the "open" method
    xhr.open('GET','revdata.txt',true);

    xhr.onprogress = function () {
        console.log("used as a loader");
    }

    xhr.onerror = function () {
        console.log("request error");
    }

    xhr.onload = function()
    {
        if(this.status==200)
        {
            console.log(this.responseText);
        }
    }
    xhr.send();
}