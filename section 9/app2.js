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


//const str = 'Hello world';
const str = 'gry';
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