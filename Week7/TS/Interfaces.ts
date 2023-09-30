
interface Personn {
	name : string;
	age : number;
}

export function greet( person : Personn): string {
	return "hello " + person.name + " your age " + person.age;
}

console.log( greet( {
	name: "ram",
	age: 21
}));

// Interfaces can be implemented by classes 
// types cant be implemented by classes

interface PersonInterface {
	name : string;
	age : number;
	greet(): string;
}

class Person implements PersonInterface{
	name : string;
	age : number;
	constructor( name :string , age : number ){
		this.name  = name;
		this.age = age;
	}
	greet(): string{
		return "Mr " + this.name;
	}
}

const personObj = new Person( "ram", 21);
console.log( personObj.name);
console.log(personObj.greet());


// one interface using another interface 

interface GenderProps {
	gender : string;
	orientation : string;
}
interface PersonDetail{
	name : string;
	age : number;
	genderDetail: GenderProps;
}

function greeting( person : PersonDetail){
	console.log( person);
}

console.log( greeting({
	name: "ram",
	age : 21,
	genderDetail: {
		gender : "male",
		orientation: "straight"
	}
}))

// Interfaces can extends other Interfaces as well 
interface Animal {
	type : string;
	color : string;
	eats(): string;
}

interface Bird extends Animal{
	name: string;
	habitat: string;
}

function capture(bird : Bird){
	console.log(bird.name);
	console.log(bird.habitat);
	console.log(bird.eats());
}

console.log(capture( {
	name: "bibibib", 
	habitat:"air",
	type: "bhadiya",
	color: "red",
	eats() {
		return "bread";
	}
}))