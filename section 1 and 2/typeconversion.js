let val;

//number to string

   // val = 5;
    val = String(5555);
    val = String(4+4); //overriding above value //returs 8 as string.

//bool to string
    val = String(true);

//date to a string
    val= String(new Date()); //returns todays date as a string

//array to string
    val = String([1,2,3,4]); //returns "1,2,3,4" no brackets:-)

//toString method
    val = (5).toString();
    val = (true).toString();

//string to numbers 
    val = Number('5');
    val = Number(true); //gives 1
    val = Number(false); //gives 0
    val = Number(null); //gives 0
    val = Number('hello'); //NaN
    val = Number([1,2,3]); //NaN

    val = parseInt('4'); //u cannot pass decimal values here
    val = parseFloat('3.6'); //u can pass decimal value here
    val = parseInt('100.23')//we will get 100 only cuz we r using parse int

//convert to boolean

    let result = Boolean(123); //returs true for every positive or negative non zero number
    result = Boolean(0); //returns false
    result = Boolean('o') //returs true on string on non zero lenght
    result = Boolean('') //returns false for zero lenght string

//output
    console.log(val);
    console.log(typeof val);
   // console.log(val.length);//lenght property only works on string...in other case it will return undefined.
   console.log(val.toFixed(2)); //decimal precision

//type coversion
   const val1 = String(5); //val1 is of type string
   const val2 =6; //val2 is of type number
   const sum = val1 + val2;
   //js identifies the issue and converts val2 into string and concatenates both of them.

   console.log(sum);
   console.log(typeof sum);//string