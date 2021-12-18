//primitive datatypes and reference datatypes: read from copy what are they
//javascript is a dynamically typed language
//datatypes are assoiciated with the values and the not the variable holding them
//it means that same varialble can hold multiple type values
//we do not specify types here whilr declaring variable(like we used to do in c int,float eats)
//most other languages are statically typed(java,c#,c++)
//there are supertsets and addons(like typescript,flow) which change js into static typed language.

//primitive

    //string
    const name = 'srishti';
    console.log(typeof name);

    //number
    const num = 50;
    console.log(typeof num);

    //boolean
    const boo = true;
    console.log(typeof boo);

    //null
    //number+null=gives the same number itself(3+null=3)
    //in JavaScript null is "nothing". It is supposed to be something that doesn't exist.
    // Unfortunately, in JavaScript, the data type of null is an object. You can consider it a bug in JavaScript that typeof null is an object.
    //In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was 0.
    // null was represented as the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the "object" typeof return value.
    const nl = null;
    console.log(typeof nl); //object

    //undefined
    //number+undefined=NaN
    let qw;
    console.log(typeof qw);

    //symbol
    //Symbol is a primitive data type of JavaScript, along with string, number, boolean, null and undefined.
    //It was introduced in ECMAScript 2015, so just a few years ago.
    //It’s a very peculiar data type. Once you create a symbol, its value is kept private and for internal use.
    //Every time you invoke Symbol() we get a new and unique symbol, guaranteed to be different from all other symbols
    const sym = Symbol();
    console.log(typeof sym);


//reference

    //array:- we get object as the type here
    const hobbies =['movies', 'singing'];
    console.log(typeof hobbies);

    //object literal
    const address = {
        city: 'boston',
        state: 'whatever'
    }
    console.log(typeof address); //object

    //dates:- object type
    const today = new Date();
    console.log(today);
    console.log(typeof today); //object
