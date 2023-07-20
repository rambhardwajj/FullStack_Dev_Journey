// making a server ------------------------------
const express = require('express')
const app = express()
const port = 3000
app.get('/handleSum1', handlefirstReq);
app.post('/createuser', handlefirstReq);
app.get('/:wildcard', handlefirstReq);
app.listen(port, started);

function handlefirstReq(req, res){
  // http://localhost:3000/handleSum1?counter=1000000
  // taking an input from an end user using query param | counter
  var counter = req.query.counter;
  var calcSum = sum(counter);
  console.log(calcSum);
  var answer = "sum is " + calcSum;
   res.send(answer);
}
function started(){
  console.log(`Example app running on port ${port}`)
}
function sum(c){
  var sum=0;
    for( var i =0 ;i< c; i++){
      sum+=i;
    }
    return sum;
}