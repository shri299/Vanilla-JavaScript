document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e){
    // console.log('get jokes');

    const number = document.querySelector('input[type="number"]').value;

    // console.log(number);

    const xhr = new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

    xhr.onload = function(){
        if(this.status===200){
            const response = JSON.parse(this.responseText);
            console.log(response);

            //putting it in the dom
            let output = '';
            if(response.type === 'success'){

                response.value.forEach(function(joke){  //we used response.value because it is and array whereas response is an object and we cannot use foreach for an object.
                    output += `<li>${joke.joke}</li>`
                });

            }else{
                output += '<li>Something went wrong</li>';
            }

            document.querySelector('.jokes').innerHTML = output;

        }
    }



    xhr.send();


    e.preventDefault();
}