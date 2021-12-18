let val;

const today= new Date();//if we dont pass anything here it will be todays date
let birthday = new Date('9-10-1999 11:25:00');
birthday = new Date('september 10 1999');
birthday = new Date('9/10/1999');

//in js the month stats from 0 and ends with 11

//val =today;
//val = birthday;
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(32);
birthday.setSeconds(37);






console.log(val);
console.log(birthday);
//console.log(typeof val);