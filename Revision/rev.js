//prototypal Inheritence

function Person(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greeting = function () {
    return `Hello ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('john','Doe');


function Customer(firstName,lastName,membership) {
    Person.call(this,firstName,lastName);
    this.membership = membership;
}

//Inherit the Person prototypes

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

const cust = new Customer('Tom','Smith','Standard');

console.log(cust.greeting());

Customer.prototype.greeting = function () {
    console.log("Overriden");
}

cust.greeting()

