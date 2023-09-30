// types cannot extends interfaces or cannot implemets other types 4
// types can have an interface 
// need to be equated
// usefull for unions and ORs 
function renderShape(shape) {
    console.log("rendered");
}
function renderShape2(shape) {
    console.log("another render ");
}
console.log(renderShape({
    radius: 10,
    side: 2
}));
console.log(renderShape2({
    radius: 10,
    side: 2,
    wid: 3,
    len: 3
}));
