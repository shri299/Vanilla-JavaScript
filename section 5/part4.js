//person constructor

    function person(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

//greeting method for above constructor

    person.prototype.greeting = function(){
        return `hello there ${this.firstName} ${this.lastName}`;
    }

//object instances for above constructor

    const person1 = new person('john','doe');

    console.log(person1.greeting());

//customer constructor

    function customer(firstName,lastName,phone,membership){
        person.call(this,firstName,lastName);
        this.phone = phone;
        this.membership = membership;
    }

    //inherit the person prototype method

        customer.prototype = Object.create(person.prototype);

        //make customer.prototype return customer

            customer.prototype.constructor = customer;

//create object instances for above aonstructor

    const  cust1 = new customer('tom','smith','12345678','standard');

    //console.log(cust1);
    //console.log(cust1.greeting());

    //customer greeting(to ovveride above greeting)

        customer.prototype.greeting = function(){

            return `hello there ${this.firstName} ${this.lastName} welcome to our company`;

        }

        //console.log(cust1.greeting());