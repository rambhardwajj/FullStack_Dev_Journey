
export function greet(person : {
	name : string,
	age : number
}) : string {
	return "Hello Mr " + person.name + " glad that you are "+  person.age ;
}

console.log( greet( {
	name: "ram",
	age: 21
}));
