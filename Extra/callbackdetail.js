const ul = document.querySelector('.people');

const people = [1,2,3,4,5,6,7,8,9,10];

people.forEach(function(person){
    ul.innerHTML += `<li> ${person} </li>`;
})