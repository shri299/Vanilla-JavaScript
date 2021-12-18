const id = 100;


//equal to
if(id == 100){   //two equal signs dosent test the type it only test the value.(looase comparison)
    console.log('correct');
}
else{
    console.log('incorrect');
}


if(id == '100'){
    console.log('correct');
}
else{
    console.log('incorrect');
}


//not equal to
if(id != 101){
    console.log('correct');
}
else{
    console.log('incorrect');
}


//equal to value and type
if(id === 100){ //strict comparison
    console.log('correct');
}
else{
    console.log('incorrect');
}

if(id === '100'){
    console.log('correct');
}
else{
    console.log('incorrect');
}


//not equal to the value and type
if(id !== '102'){
    console.log('correct');
}
else{
    console.log('incorrect');
}

if(id !== 100){
    console.log('correct');
}
else{
    console.log('incorrect');
}




if(id){  //is id defined above?
    console.log(`the id is ${id}`);
}
else{
    console.log('no id');
}

if(typeof id !== 'undefined'){  
    console.log(`the id is ${id}`);
}
else{
    console.log('no id');
}

//greater or less than

if(id > 200){ 
    console.log(`the id is ${id}`);
}
else{
    console.log('no id');
}

if(id < 200){ 
    console.log(`the id is ${id}`);
}
else{
    console.log('no id');
}


//if else

const color = 'yellow';

if(color === 'yellow')
{
    console.log('color is yellow');
}
else if(color === 'blue')
{
    console.log('color is blue');
}
else
{
    console.log('color is not red or blue');
}


let name = 'shaun';
console.log(name=='shaun');//true
console.log(name == 'Shaun');//false bcz s is capital
console.log(name > 'hahaha'); //returns true s>h as well as s>H
console.log(name>'Shaun');//true lowercase>uppercase letters