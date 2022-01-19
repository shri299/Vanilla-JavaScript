//Different way to create objects

const personPrototype = {
    greeting: function () {
        return "Hello There!"
    },
    getsMarried: function (newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototype);
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 30;

console.log(mary);
console.log(mary.greeting());
mary.getsMarried('Thompson');


const brad = Object.create(personPrototype,{
    firstName:{value:"Brad"},
    lastName:{value:"Traversy"},
    age:{value:30}
})

console.log(brad);
console.log(brad.greeting());
