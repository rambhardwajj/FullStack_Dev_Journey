// Q 2 
// write a fuction higherOrderAsync  pass an argument callback in to it , call the callback function asynchronously using setTimeout after a delay of n seconds wehre n is the current day of the month according to utc 

function higherOrderAsync( callback ){
    setTimeout(callback , getdatofMonth()*1000);
}
function getdatofMonth(){
    const date = new Date();
    return date.getUTCDate;
}
function callback(){
    console.log("iam callback");
}

higherOrderAsync(callback);