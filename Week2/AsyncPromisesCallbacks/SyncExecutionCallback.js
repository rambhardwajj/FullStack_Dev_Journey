// Q -> 7

// ## Sequential Execution with Callbacks:
// - Create a function 'series' that sequentially does the following.
    
//     1. Read the contents of `a.txt` using UTF-8 encoding.
//     2. Wait for 3 seconds.
//     3. Write the contents of `a.txt` in `b.txt`.
//     4. Remove any extra spacing from `a.txt`.
//        (refer to kirat's async 'file-cleaner' problem from week 1)
//     5. delete the contents of `a.txt`.
//     6. delete the contents of `b.txt`.


const fs = require('fs');
function series(){
    fs.readFile('a.txt',"utf-8", wait);
    function remExtraSpaces( str){
        let newStr = str.replace(/\s+/g, ' ');
        return newStr;
    }
    function wait( err, data){  // wait callback

        function writeinb() {
            fs.writeFile('b.txt', data, "utf-8", remSpace );
        }
        function remSpace(err){
            let newData = remExtraSpaces(data);
            fs.writeFile('a.txt', newData, 'utf-8', deleteA);
        }

        setTimeout( writeinb ,3000);
    }
    function deleteA(err){
        fs.writeFile('a.txt', "", "utf-8", deleteB);
    }
    function deleteB(err){
        fs.writeFile('b.txt', "", "utf-8", finalCall);   
    }
    function finalCall(err){
        console.log("done");
    }
}
series();