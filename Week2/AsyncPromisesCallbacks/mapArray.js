// Q 3
// Implement the function mapArray that takes an array and a callback function as an argument . 
// mapArray should apply the callback function to each element of the array and return a new array with the modified values;


var arr= [1,2,3,4,5,6];


function mapArray( callback , arr){
    var newArray = arr.map(callback);
    return newArray;
}

function callback( num ){
    num = num+1;
}

mapArray(callback, arr);



// using foreach 
function mapArrayUseForEach( arr, callback ){
    let newArray = [];
    function f( element , index, arr){
        newArray[index] = callback(arr[index]);
    }
    arr.forEach(f);
    return newArray;
}
function add( el, i , arr){
    return arr[i]+1;
}
mapArrayUseForEach(arr,add );


