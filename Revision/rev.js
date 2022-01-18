//object.prototytpe
//person.prototype

function Person(firstName,lastName,dob){  //constructor shd start with capital letters
    this.firstName = firstName;  //name is the property of the contructor person
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.getAge = function(){ //method within a constructor
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

//calculate age

Person.prototype.getAge = function(){ //method within a constructor
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//get full name

Person.prototype.getfullname = function (){
    return `${this.firstName} ${this.lastName}`
}

//gets married

Person.prototype.getsMarried = function (newLastName) {
    this.lastName = newLastName;
}

const john = new Person('John','Doe','8-12-99');
const mary = new Person('Mary','Miller','7-12-90');

console.log(mary.getAge());
console.log(john.getfullname());
mary.getsMarried('smith');
console.log(mary.getfullname());

//console.log(mary);