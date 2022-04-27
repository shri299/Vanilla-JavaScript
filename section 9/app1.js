let re;
re = /hello/;
re = /hello/i; //adding an i flag makes it case insensitive
//re = /hello/g; //adding g flag will search whole paragraph now just first word

console.log(re);
console.log(re.source);

//Different types of evaluation functions

//exec()  return result in array if match or else null.

//const result = re.exec("hello world");
//const result = re.exec("world");
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);


//test() Return true if match else false

//const result = re.test("hello");
// const result = re.test("Hello");
// console.log(result);


//match() return array or null

// const str = "Hello there";
// const result = str.match(re);
// console.log(result);

//search() return index of first match else returns -1

// const str = "brad hello there";
// const result = str.search(re);
// console.log(result);

//replace() return new string with some or all matches of a pattern

// const str = "hello world";
// const newstr = str.replace(re,'hi');
// console.log(newstr);