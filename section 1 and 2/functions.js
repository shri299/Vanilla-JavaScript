//function declerations

    function greet(name='srishti')  //function declaration
    {
        console.log(`hello ${name}`);
    }

    greet(); //calling the function

    function greeet()  //function declaration
    {
        return 'hello';
    }

    console.log(greeet());

    function greett(firstname,lastname)  //function declaration
    {
        return 'hello '+firstname + ' '+ lastname;
    }

    console.log(greett('john','doe'));


//function expressions

    const square = function(x)
    {
        return x*x;
    };

    console.log(square(8));


//immediately invokable function expressions:- iifes
//it means that a function that we declare and run at the same time

    (
        function()
        {
            console.log('iife ran...');
        }
    )();


    (
        function(name)
        {
            console.log('iife ran...' + name);
        }
    )('brad');


//property methods :- when afunction is put inside an object its called method

    const todo = {
        add: function()
        {
            console.log('add todo');
        },

        edit: function(id = 'nothing')
        {
            console.log(`todo ${id}`);
        }
    }

    todo.delete = function()  //defining method outside the object braces
    {
        console.log('deletes something');
    }

    todo.add();
    todo.edit();
    todo.delete();

//arrow function

    // const calcArea = (radius) => {
    //     return 3.14*radius*radius;
    // };

    //when we have only one return statement
    const calcArea = (radius) =>  3.14*radius*radius;
        
    console.log(calcArea(4));



    //when we have only one parameter we can take away the parenthesis
    //when we dont have any argument to pass then also we must put parenthesis
    const Area = rad =>{
        return 3.14*rad**2;
    };
    console.log(Area(4));

    const intro = () => {

        console.log('i am srishti');
    };
    intro();

    //more examples

    // const meet = () => 'hello world';

    const bill = (products,tax) =>{
        let total=0;
        for(let i=0;i<products.length;i++){
            total += products[i]+products[i]*tax;
        }
        return total;
    }


//fuctions Vs methods

    //fuction
    const meet = () => 'hello world';
    let resultOne = meet();
    console.log(resultOne);

    //methods

    //used using dot operator
    console.log( resultOne.toUpperCase());
