//Error handling

const user = {email : "abc@gmail.com"};

try {
    //this will produce a reference error
        //myfunc();
    //type error
        //null.myfunc();
    //syntax error
       //console.log(eval('Hello World')); 
    //URI Error
        //decodeURIComponent('%');

    if (!user.name) {
        //throw 'User has no name';
        throw new SyntaxError('User has no name');
    }
} catch (e) {
    console.log("Error is hadled in catch");
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
    console.log(e instanceof TypeError);
}
finally{
    console.log("Finally runs regsrdless of result");
}

console.log("Program Continues and is not effected by error");