var numNumb=25;
var nameVar="toni";
function firstFunction(){
  console.log("this is my first function");
  console.log(numNumb);
  console.log(nameVar);
}
//firstFunction();
function testBigger (firstNum,secondNum){
  console.log("First Number: "+firstNum+" Second Number: "+secondNum+" comparison: " + (firstNum>secondNum) );

}

function testBiggerWithReturn (firstNum,secondNum){
  var result;
  result = firstNum+secondNum;
  return result;
}
var sum = testBiggerWithReturn(8,5);
console.log(sum);
// First Name: Toni Last Name: Rouhana
sum = sum + 8;
console.log(sum);

var myVarFun = function(){
  console.log("Functions are nice!");
}


setTimeout(myVarFun,2000)
setTimeout(function(){
    console.log("I am so tiered");
},2000);
