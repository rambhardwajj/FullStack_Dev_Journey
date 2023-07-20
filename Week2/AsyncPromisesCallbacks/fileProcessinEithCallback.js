// Q 5
// Write a function readFileCallback that takes a filename and a callback function . 'readFileCallback' should read 
// the contents of the file asynchronously and pass the data to the callback function 

const fs = require('fs');
function readFileCallback( filename ,   callback ){
    fs.readFile(filename, "utf-8", callback);
}

function print( err, data){
    console.log((data));
}
readFileCallback('a.txt', print);
