//Subclasses or inheritance in ES6

class Person
{
    constructor(firstName,lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person{
    constructor(firstName,lastName,phone)
    {
        super(firstName,lastName);//inheriting from parent
        this.phone = phone;
    }

    static getMemebershipCost()
    {
        return 500;
    }
} 

const john = new Customer("John","Doe","12345677");
console.log(john); 
console.log(john.greeting());
console.log(Customer.getMemebershipCost());