//object.prototype(when you deal with object literals you inherit from object.prototype)
//person.prototype(for below person contructor it will inherit fron this)
//all objects inherit their methods and properties from their prototype

function Person(firstName,lastName,dob){  //constructor shd start with capital letters
    this.firstName = firstName;  //name is the property of the contructor person
    this.lastName = lastName;
    this.birthday = new Date(dob);
    this.getAge = function(){ //method within a constructor
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}


    //adding new methods and properties to constructor using prototype

        //calculate age

        // Person.prototype.getAge = function(){ //method within a constructor
        //     const diff = Date.now() - this.birthday.getTime();
        //     const ageDate = new Date(diff);
        //     return Math.abs(ageDate.getUTCFullYear() - 1970);
        // }

        //get full name

        Person.prototype.getFullName = function(){
            return `${this.firstName} ${this.lastName}` ;
        }

        //get married
        Person.prototype.getMarried = function(newLastName){
            this.lastName=newLastName;

        }



const john = new Person('john','mike','8-12-96');
const shree = new Person('shree','srivastava','9-13-90');
console.log(john);

// console.log(shree.getFullName());

// shree.getMarried('srishti');


// console.log(shree);
// console.log(john.getAge());
// console.log(shree.getFullName());


// console.log(shree.hasOwnProperty('firstName'));




// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype
// The Object.prototype is on the top of the prototype inheritance chain:

// Date objects, Array objects, and Person objects inherit from Object.prototype.

