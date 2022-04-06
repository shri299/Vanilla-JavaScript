//inheritance in es6

class person{
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting() {
        return `hello there ${this.firstName} ${this.lastName}`;
    }
}

class customer extends person{
    constructor(firstName,lastName,phone,membership) {

        super(firstName,lastName);

        this.phone = phone;
        this.membership=membership;

    }
    static getMembershipCost() {
        return 500;
    }
}

const john = new customer('john','snow','222222222','standard');

console.log(john);
console.log(john.greeting());

console.log(customer.getMembershipCost());


// The extends keyword is used to create a child class of another class (parent).

// The child class inherits all the methods from another class.

// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

// Note: From the example above; The super() method refers to the parent class. By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.