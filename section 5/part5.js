//other methods to create object


const personPrototype = {
    greeting: function(){
        return `hello there ${this.firstName} ${this.lastName}`;
    },
    gestMarried : function(newLastName){

        this.lastName = newLastName;


    }
}

const mary = Object.create(personPrototype);

mary.firstName = 'mary';
mary.lastName = 'williams';
mary.age = 25;

console.log(mary);
mary.gestMarried('thompson');
console.log(mary.greeting());


const brad = Object.create(personPrototype,{
    firstName: {value: 'brad'},
    lastName: {value: 'traversy'},
    age: {value: 16}

});
console.log(brad);
console.log(brad.greeting());