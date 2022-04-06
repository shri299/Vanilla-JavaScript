//this is an object literal which is good when we want to create one object or instance.
// instance" can be used informally to mean an object created using a particular constructor function.


    // const brad ={
    //     name: 'brad',
    //     age: 23
    // };
    // console.log(brad);
    // console.log(brad.age);

//but if we want to create multiple objects or instances we need constructors

    //person constructor
    function Person(name,age,dob){  //constructor shd start with capital letters
        this.name = name;  //name is the property of the contructor person
        this.age = age;   //this can be used to access any property and method inside person constructor
        this.birthday = new Date(dob);
        this.getAge = function(){ //method within a constructor
            const diff = Date.now() - this.birthday.getTime();
            const ageDate = new Date(diff);
            return Math.abs(ageDate.getUTCFullYear() - 1970); //math is one of the object for which you dont use new keyword
        }
        // console.log(this); //(function scope)in local scope it gives the two instances created(gives the current instances)
    }
    //console.log(this); //when this is in the global scope it gives the window object
    //this.alert(1); (this will execute)

    const brad = new Person('Brad',24,'12-12-12');
    const John = new Person('John',25,'11-9-12');

    console.log(brad.getAge());
    console.log(John.getAge());



//scopes in javascript

//     In JavaScript there are two types of scope:

//     Local scope
//     Global scope
//     JavaScript has function scope: Each function creates a new scope.
    
//     Scope determines the accessibility (visibility) of these variables.
    
//     Variables defined inside a function are not accessible (visible) from outside the function.

//     Variables declared within a JavaScript function, become LOCAL to the function.

// Local variables have Function scope: They can only be accessed from within the function.
// Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

// Local variables are created when a function starts, and deleted when the function is completed.





// A variable declared outside a function, becomes GLOBAL.

// A global variable has global scope: All scripts and functions on a web page can access it.


// Automatically Global:
// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.




// The lifetime of a JavaScript variable starts when it is declared.

// Local variables are deleted when the function is completed.

// In a web browser, global variables are deleted when you close the browser window (or tab).