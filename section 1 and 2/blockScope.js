//global scope

    var a =1;
    let b = 2;
    const c= 3;

    function test()
    {
        //function scope
        var a= 4;
        let b= 5;
        const c= 6;
        console.log('function scope',a,b,c);
    }

    test();

    if(true){
        //block scope
        var a=4;
        let b= 5;  //if we will remove let then the value of b will be 5 in block and global scope as well.
        const c= 6;
        console.log('if scope',a,b,c);
    }



    


for(var a=0;a<10;a++)
{
    console.log(`loop ${a}`);
}
console.log('global scope',a,b,c);