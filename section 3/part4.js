//they all are multiple element selector they either give the output as html collection or nodelist



// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item'); //returns html collection
// console.log(items); //gives an html collection
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';


// const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); for specifically selecting only those class name which comes inside ul only.

// console.log(listItems);

// document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Convert HTML Collection(output of above statements are all html collection) into array
// lis = Array.from(lis);

// lis.reverse(); //reverse is an array method

// lis.forEach(function(li, index){
    //console.log(li);
//   console.log(li.className); gives the classname of all the li tags
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// document.querySelectorAll:-gives output as a node list hence no need to convert to an array for applying foreach or reverse
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){  //for can be applied to html collection even withought converting it into an array
  liEven[i].style.background = '#f4f4f4';
}


console.log(items);
