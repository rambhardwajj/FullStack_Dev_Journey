"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
function greet(person) {
    return "hello " + person.name + " your age " + person.age;
}
exports.greet = greet;
console.log(greet({
    name: "ram",
    age: 21
}));
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Mr " + this.name;
    };
    return Person;
}());
var personObj = new Person("ram", 21);
console.log(personObj.name);
console.log(personObj.greet());
function greeting(person) {
    console.log(person);
}
console.log(greeting({
    name: "ram",
    age: 21,
    genderDetail: {
        gender: "male",
        orientation: "straight"
    }
}));
function capture(bird) {
    console.log(bird.name);
    console.log(bird.habitat);
    console.log(bird.eats());
}
console.log(capture({
    name: "bibibib",
    habitat: "air",
    type: "bhadiya",
    color: "red",
    eats: function () {
        return "bread";
    }
}));
