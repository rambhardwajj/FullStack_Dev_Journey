// arrays in type script 
function getFir(arr) {
    return arr[0];
}
console.log(getFir([0, 2, 3]));
console.log(getFir(["one", "two"]));
// rather do this
// Generics -> It refers to a programming concept which allows you to make classes methods or interfaces which can work with different types maintaning type safety 
function getFirst(arr) {
    return arr[0];
}
console.log(getFir([0, 2, 3]));
console.log(getFir(["one", "two"]));
// swap two numbers
function swap(a, b) {
    return [b, a];
}
console.log(swap(1, 3));
console.log(swap("dfs", "sdfdsf"));
console.log(swap("dfs", 1));
// useState is a great example of generic
