document.getElementById('get-jokes').addEventListener('click',GetJokes);

function GetJokes(e) {
    const number = document.getElementById('number').value;
    // console.log(number);
    const xhr = new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

    xhr.onload = function()
    {
        if(xhr.status===200)
        {
            const response = JSON.parse(this.responseText);
            let output = '';
            if(response.type ==='success')
            {
                response.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`;
                });
            }
            else{
                output += `<li>Something Went Wrong</li>`;
            }
        }

        document.querySelector('.jokes').innerHTML = output;
    }
    xhr.send();
    e.preventDefault();
}