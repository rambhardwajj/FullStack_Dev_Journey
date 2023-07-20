// Q 6
// implement a function parallelFileOperation that returns an array of size 2 with the first index containing the contents
// of the file a.txt, in utf-8 encoding , If a.txt doenst exist then throwan error . The second element of an array contains
// 1 if the text 'Hello' is successfully written to the file 'b.txt' and 0 if the write operation fails

const fs = require('fs');
function parallelFileOperation(){
    var a = [];
    var c=0;
    function readCallback(err,data){
        if( err){
            throw err;
        }else{
            a[0]= data;
        }
        c++;
        if(c==2) console.log(a);
    }
    function writeCallback(err){
        if( err){
            a[1]=0;
        }else{
            a[1]=1;
        }
        c++;
        if(c==2) console.log(a);
    }
    fs.readFile('a.txt', "utf-8" , readCallback );
    
    fs.writeFile('b.txt', "ram", "utf-8", writeCallback);
    
    
}
parallelFileOperation();
