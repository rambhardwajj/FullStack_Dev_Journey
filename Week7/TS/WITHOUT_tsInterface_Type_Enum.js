"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
function greet(person) {
    return "Hello Mr " + person.name + " glad that you are " + person.age;
}
exports.greet = greet;
console.log(greet({
    name: "ram",
    age: 21
}));
