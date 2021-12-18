for(let i = 0; i<=10; i++)   //we cant use const i here
{
    
    if(i===2)
    {
        console.log('2 is my fav number');
        continue; //goes back again to for loop instead of executing the below statement
    }
    if(i===5)
    {
        console.log('stop the loop');
        break; //comes outof all the loops
    }
    console.log('number ' + i );
}   


//while loop

let j =0;

while(j<10)
{
    console.log('num '+ j);
    j++;
}

//do while loop

let k=0;
do{
    console.log('numb '+k);
    k++;
}
while(k<10);


//array in loops

const cars = ['ford','chevy','honda','toyota'];

for(let i=0;i<cars.length;i++)
{
    console.log(cars[i]);
}

//for each

cars.forEach(function(car,index,array){
    console.log(`${index} : ${car}`);
    console.log(array);


});

//map

const users = [
    {idd: 1, namee:'john'},
    {idd: 2, namee: 'sara'},
    {idd: 3, namee: 'karen'}
];

const ids = users.map(function(user){
    return user.idd;
});

console.log(ids);

//for in loop

const userr = {
    firstname:'ok',
    lastname:'bye',
    age: 40
}

for(let x in userr)
{
    console.log(x);
    console.log(`${x} : ${userr[x]}`);
}
