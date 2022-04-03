const name = 'steve';
const age = 20;
const id = 100;

if(age>0 && age<12)
{
    console.log(`${name} is a child`)
}
else if(age>=13 && age<=19)
{
    console.log(`${name} is a teen`);
}
else
{
    console.log(`${name} is adult`);
}

//or operator
if(age<16 || age>65)
{
    console.log(`${name} can not run in race`)
}
else
{
    console.log(`${name} is registered for race`)
}


//terinary operator
console.log(id===100 ? 'correct': 'incorrect');

//withought braces
if(id===100)
    console.log('correct');
else
    console.log('incorrect');