var nameVar = "Toni";
var numVar = 5;

numVar = 25;


function myfirstFunction (){
  console.log("this is my first function!!!");
}
//myfirstFunction();

function comparingNumbers(firstNum, secondNum){
  console.log("First Number: "+firstNum+" second Number: "+secondNum);
  console.log("First Number is greater than second Number " + (firstNum>secondNum));
  console.log(numVar);
  firstNum = 11;
  secondNum = 12;
  console.log("First Number: "+firstNum+" second Number: "+secondNum);
  console.log("First Number is greater than second Number " + (firstNum>secondNum));
  numVar=numVar+3;
}
function userName(first,last){
  var result;
  result = "My first name is: "+first+" My last name is: "+last;
  return result;
}
var resultReturned = userName("Toni","Rouhana");
console.log(resultReturned);
resultReturned = resultReturned +"!!!!!!!!!!!!!!!!!"
console.log(resultReturned);


var funFunction = function(){
console.log("Functions are fun!!!!");
}

setTimeout(map functio,2000);
