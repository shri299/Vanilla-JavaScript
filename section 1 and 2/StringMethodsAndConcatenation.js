const firstName = 'william';
const lastName = 'johnson';
const age = 38;
const str = 'hello there my name is brad';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName; //the output will have no space in between

//concatenation
    val = firstName+ " " +lastName;

//apending
    val = "brad ";
    val += "traversy";


val = 'hello my name is ' + firstName + ' and i am ' + age;

//escaping
    val = "that's awsome i can't wait";
    val = 'that\'s awsome i can\'t wait'; 

//lenght--this is a property and not a method
    val= firstName.length;
    val = firstName.concat(' ', lastName);

//change case--this is a method. a method has parenthesis ath the end.
    val = firstName.toUpperCase();
    val = firstName.toLowerCase();

//indexof()

    val = firstName[0];
    val = firstName.indexOf('i');  //if we dont get the searched alphabet we get -1 as output.
    val = firstName.lastIndexOf('i');


//charAt()

    val = firstName.charAt('2');
    //to get the last charecter we use
    val = firstName.charAt(firstName.length -1);


//substring()

    val = firstName.substring(0,4);

//slice()

    val = firstName.slice(0,4);
    val = firstName.slice(-3);

//split()

    val = str.split(' ');
    val = tags.split(',');

//replace()

    val = str.replace('brad','jack');


//includes()

    val = str.includes('is'); //returns either true or false
    val = str.includes('kyuu');



console.log(val);