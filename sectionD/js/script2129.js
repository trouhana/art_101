//author:Toni Rouhana
//date: 2021/02/09
//Lisence: MIT
//create a div element that has id="div_1" and text that says "this is annoying"
//console.log that text
//add a button
//change the text from this is annoying into " this is more annoying than I thought!" when Clicking the button
var divEl = document.getElementById("div_1");
divEl.innerHTML="This is annoying";
console.log(divEl.innerHTML);
var buttonEl = document.createElement("button");
document.body.appendChild(buttonEl);
buttonEl.innerHTML="press Me!";

buttonEl.onclick=function(){
  divEl.innerHTML="this is more annoying than I thought";
}
