class person {
    constructor(firstName,lastName,dob){
            this.firstName = firstName;
            this.lastName = lastName;
            this.birthday = new Date(dob);
    }
    greeting() {
        return `hello there ${this.firstName} ${this.lastName}`;
    }
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    gestMarried(newLastName) {

        this.lastName = newLastName;


    }

    static addNumbers(x,y) {
        return x+y;
    }
}

const mary = new person('mary','williams','11-13-1988');

mary.gestMarried('jason');

console.log(mary);

console.log(mary.greeting());
console.log(mary.calculateAge());

console.log(person.addNumbers(1,2));
// The static keyword defines static methods for classes.

// Static methods are called directly on the class (Car from the example above) - without creating an instance/object (mycar) of the class.

