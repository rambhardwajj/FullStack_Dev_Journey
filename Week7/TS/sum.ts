interface Circle {
	radius : number
}
interface Square {
	side : number
}
interface Rectangle{
	width: number,
	height: number 
}

enum Arthematic {
	Add,
	Sub,
	Div,
	Mul
}

type ShapeOR = Rectangle | Circle | Square;
type ShapeUnion = Rectangle | Circle| Square;

function renderShape( shape : ShapeOR ){
	console.log(shape);
}
function calculateArea ( shape :ShapeUnion ){
	console.log("calc Area");
}

renderShape(
	{
		radius: 10,
		side: 4,
		width: 3,
		height:1
	}
)

function calculator( a: number, b:number , type : Arthematic)  {
	console.log(type); // 2 is logged
	// return Arthematic.Add ; // you can do this
	// return interface : // no interfaces cant be returned
}

const ans = calculator( 1, 3, Arthematic.Div);
console.log(ans);
