// types cannot extends interfaces or cannot implemets other types 4
// types can have an interface 
// need to be equated
// usefull for unions and ORs 

interface Circle {
	radius : number
}
interface Square{
	side : number
}
interface  Rectangel{
	wid: number;
	len: number;
}
 

// without types you ll have to take all the interfaces as  in the function 
// function renderShape( shape: Rectangel | Square | Circle){
// 	console.log( "rendered");
// }

// function renderShape2( shape: Rectangel | Square | Circle){
// 	console.log( "another render ");
// }


//By types you can do this 

// ORs
type Shape = Rectangel | Square | Circle;

// Unions
type AllShape = Rectangel & Square & Circle;

function renderShape( shape: Shape){
	console.log( "rendered");
}

function renderShape2( shape:AllShape){
	console.log( "another render ");
}

console.log(renderShape( {
	radius: 10,
	side:2
}))
console.log(renderShape2({
	radius: 10,
	side: 2,
	wid: 3,
	len: 3
}))


