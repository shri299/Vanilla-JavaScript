//object:- properties,thisgs they can do(method)

const person = {
    firstname: 'steve',
    lastname: ' smith',
    age: 30,
    email: 'ohokyabaat@gmail.com',
    hobbies: ['music','sport','dancing'],
    address: {
        city: 'lucknow',
        state: 'uutarP'
    },
    // getbirthyear: function(){
    //     return 2017-this.age;
    // },

    //can also write the above function as

    getbirthyear(){
        return 2017-this.age;
    },


    haha: function(){ //cannot use arrow function here(will identify the this keyword as window object and not as user object)
        console.log(this.getbirthyear());
        console.log('hello i am srishti');
        console.log(this);//this gives the person object


        this.hobbies.forEach(hob =>{
            console.log(hob);
        });
    }
}
console.log(this); //refers to window(global) object;
person.haha();

let val;

val = person;

//get specific value
    val= person.firstname;
    //or
    val = person['firstname'];
    val = person.age;
    val = person.hobbies[1];
    val = person.address.state;
    val = person.address['city'];
    val = person.getbirthyear();

console.log(val);

//objects inside an array
    const people = [
        {name: 'priya', age:23},
        {name: 'shriya', age:25}
    ];
    for(let i=0;i<people.length;i++)
    {
        console.log(people[i].name);
    }