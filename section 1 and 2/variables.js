// var let const

    var name = 'srishti';
    console.log(name);
    name = 'kavita'; // reassigning is possible in var
    console.log(name);


    //Init var
    var greeting;
    console.log(greeting); //undefined output here
    greeting = 'hello';
    console.log(greeting);

    //we can include letters numbers underscore dollor sign in naming a variable
    //cannot start with a number


    //multiword variable name
        var whatElse = 'john'; //camalcase
        var what_else = 'sara'; //underscore convention
        var FirstName = 'tom';  //pascal case
        var firstname = 'haha'; 


    //let
        let w;
        console.log(w);
        let q = 'heyaa';
        console.log(q);
        q = 'bye';
        console.log(q);


    //const
        //we cannot reassign a value
        //we cannot assign no value we will get error
        //but not in case of objects for example

        const person = {
            namee: 'priya',
            age: 25
        }

        person.namee = 'prachi';
        person.age = 24;

        console.log(person);

        //same exception is an array we can add or remove elemnt from an array
        const numberss =[1, 2, 3, 4, 5];
        numberss.push(6); //adding an element to array
        console.log(numberss);
