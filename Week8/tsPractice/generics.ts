// arrays in type script 

type Input = (string | number)[];

function getFir( arr: Input ): string | number{
	return arr[0];
}

console.log(getFir([0,2,3]));
console.log(getFir(["one", "two"])); 

// rather do this
// Generics -> It refers to a programming concept which allows you to make classes methods or interfaces which can work with different types maintaning type safety 

function getFirst<T>(arr: T[]): T{
	return arr[0];
}
console.log(getFir([0,2,3]));
console.log(getFir(["one", "two"])); 

// swap two numbers

function swap<T,U>(a:T, b:U) : [U,T]{
	return  [b,a];
}

console.log( swap(1,3));
console.log( swap("dfs","sdfdsf"));
console.log( swap("dfs",1));


// useState is a great example of generic


