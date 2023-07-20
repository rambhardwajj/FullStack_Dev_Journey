// Q 4 
// Write a function FilterArray that takes an array and a callback functio as an argument . filter array function should filter the 
// array based on the condition specified by the callback function and return a new Array with the filter array 
function isEven(el){
    if(el%2==0){
        return true;
    }else{
        return false;
    }
}

var arr = [1,2,3,4,77,5,55,777,333,,11,44,5555,,666222,,66];
function filterArray( arr, callback){
    var filterdArray = arr.filter( callback);
    return filterdArray;
}

// Writing testcases
function isEqualArr( arr1, arr2){
    if (arr1.length !== arr2.length) {
        return false;
      }
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
}

function testCases( func, inputs, expectedValues){
    var flag= true;
    for(var i =0 ; i< inputs.length; i++){
        if(!isEqualArr(func(...inputs[i]), expectedValues[i])){
            flag=false;
            break;
        }
    }
    return flag;
}

inpArray= [
    [[1,2,3,4], isEven],
    [[2,3,4,5,6,7,8,1], isEven],
]
expectedValues= [
    [2,4],
    [2,4,6,8]
]
console.log(testCases(filterArray, inpArray, expectedValues));
console.log( filterArray(arr, isEven ));