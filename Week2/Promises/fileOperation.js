// ### File Operations

// Description: Implement a function that reads a file in UTF-8 encoding, applies the transform function on the file's contents, and then writes the transformed data to a new file.
// Example usage:
// ```js
// processFile('input.txt', 'output.txt', transform)
//   .then(() => console.log('File processing completed.'))
//   .catch(error => console.error('Error:', error));
// ```

const fs = require('fs');
function f(){
    function transform( data){
        data= data+ "dsfs";
    }
    function transformCall( err, data ){
        var newData = transform( data);
        fs.writeFile('b.txt', newData, "utf-8", writecall);
    }
    function writecall( err){
        console.log("done");
    }
    fs.readFile( 'a.txt', 'utf-8',transformCall );
}

f();