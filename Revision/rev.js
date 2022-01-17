function Person(name,dob) {
    this.name = name,
    this.birthday  = new Date(dob);
    this.getAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970);
    }
    //console.log(this);
}

// console.log(this);
// this.alert("heya");

const brad = new Person("Brad",'9-10-1981');
//const john = new Person("John",40);

console.log(brad);
console.log(brad.getAge());
// console.log(john);