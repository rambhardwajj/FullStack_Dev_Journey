"use strict";
var Arthematic;
(function (Arthematic) {
    Arthematic[Arthematic["Add"] = 0] = "Add";
    Arthematic[Arthematic["Sub"] = 1] = "Sub";
    Arthematic[Arthematic["Div"] = 2] = "Div";
    Arthematic[Arthematic["Mul"] = 3] = "Mul";
})(Arthematic || (Arthematic = {}));
function renderShape(shape) {
    console.log(shape);
}
function calculateArea(shape) {
    console.log("calc Area");
}
renderShape({
    radius: 10,
    side: 4,
    width: 3,
    height: 1
});
function calculator(a, b, type) {
    console.log(type); // 2 is logged
    // return Arthematic.Add ; // you can do this
    // return interface : // no interfaces cant be returned
}
const ans = calculator(1, 3, Arthematic.Div);
console.log(ans);
