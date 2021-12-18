//built in constructors

//string

    const name1 = 'srishti'; //primitive way of creating strings
    const name2 = new String('srishti'); //creating strings as a constructor

    // name2.foo = 'bar';

    console.log(name1);
    console.log(name2); //returns in the form of object

    console.log(typeof name2); //string
    console.log(typeof name1); //object


    if(name1==='srishti'){
        console.log('yes');
    }
    else{
        console.log('no');
    }
    if(name2==='srishti'){
        console.log('yes');
    }
    else{
        console.log('no');
    }

//numbers

    const num1 =5;
    const num2 = new Number(56437);

    console.log(num2);
    console.log(typeof num2); //object
    console.log(num1);
    console.log(typeof num1); //number

//boolean

    const boo1 = true;
    const boo2 = new Boolean(true);

    console.log(boo1);
    console.log(boo2);
    console.log(typeof boo1); //boolean
    console.log(typeof boo2); //object

//functions

    const getWhat = function(x,y){
        console.log(x+y);
    };

    getWhat(2,3);

    // const getWhat2 = new function('a','b','return 1 + 1');

    // console.log(getWhat2(1,1));

//objects

    const obj = {
        name: 'srishti'
    };
    console.log(obj);

    const obj2 = new Object({name:'srivastava'});
    console.log(obj2);

//array

    const arr1 = [1,2,3,4,5,6];
    const arr2 = new Array(1,2,3,4,5,6);

    console.log(arr1);
    console.log(arr2);
    console.log(typeof arr1);
    console.log(typeof arr2);


//regular expression

    const rel = /\w+/;
    const rel2 = new RegExp('\\w+');

    console.log( typeof rel);
    console.log(typeof rel2);