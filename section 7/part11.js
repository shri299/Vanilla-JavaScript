// const sayhello = function(){
//     console.log('hello');
// }
// sayhello();

//converting the above function into arrow function

// const sayhello = () =>{  //we can avoid the curly braces in this case as we have just one statement inside it.
//     console.log('hello');
// }
// sayhello();

//const sayhello = () => 'hello'   //one line returns
// console.log(sayhello());

// const sayhello = () => ({msg: 'hello'})
// console.log(sayhello());

// const sayhello=name=> console.log(`hello ${name}`);  //single parameter does not need parenthesis
// sayhello('brad');


//arrow functions as callbacks
    const users = ['nathan','john','william'];

    // const nameLenght = users.map(function(name){
    //     return name.length;
    // })
    // const nameLenght = users.map((name)=>{
    //     return name.length;
    // });;
    const nameLenght = users.map(name=>name.length);
    console.log(nameLenght);


//fetch example

// function getText(){
//     fetch('data1.txt').then((res)=> res.text()
        
//     ).then((data)=>{
//         console.log(data);
//         document.getElementById('output').innerHTML = data;
//     }).catch((err)=>console.log(err)
        
//     );
// }







