let re;

//literal charecters

re = /hello/;
re = /hello/i;

//meta charecters

re = /^h/i;    //must start with h
re = /d$/i;    //must end with d
re = /world$/i;
re = /^h$/i;   //begin and end with an h
re = /h.llo world/i; //any(only one) letter can be there in place of dot
re = /h*llo/i; //star can be replaced by any number of charecters
re = /gre?a?y/i; //it can be either e or a  or niether one of them is also fine
re = /gre?a?y\?/i;


//brackets: charecter sets

re = /gr[ae]y/i;  //must be an a or e
re = /[gt]ray/i;
re = /[^gt]ray/i; //must be anything except a or e
re = /[a-z]ray/i;
re = /[0-9]ray/i;
re = /[0-9][0-9][a-z]ray/i;


//braces - quantifiers

re = /hello/i;
re = /hel{2}o/i; //l must occur exactly 2 times
re = /hel{2,4}o/i; //2 to 4 l's are permitted
re = /hel{2,}o/i; //atleast 2 times

//parenthesis

re = /[0-9]g(3)/i; //2xxx,4xxx and so
re = /([0-9]x)(3)/i; //2x2x2x,4x4x4x,2x2x2x2x2x2x and so //more than 3 times
re = /^([0-9]x)(3)/i; //only 3 times


//const str = 'Hello world';
const str = 'hello';
//const str = 'gray?';
const result = re.exec(str); 
console.log(result);


function retest(re,str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    }
    else{
        console.log(`${str} does not matches ${re.source}`);
    }
}

retest(re,str);