// for (var index=0; index<10; index++){
//   //block of code
//   console.log(index);
//   //create 10 div elements with a class name box inside the container div
//   var boxEl = document.createElement("div");
//   boxEl.className="box";
//   //add an id box_id_0,box_id_1...
//   //boxEl.id="box_id_"+(index+1);
//   //boxEl.id="box_id_"+(index);
//   document.getElementById('container').appendChild(boxEl);
// }
//translate to jquery
for (var index=0;index<500;index++){
  //jquery block of code
  //$('#container').append("<div id='box_id_"+(index+1)+"' class='box'></div>");
  //color the even boxes with red and odd boxes with green
  if(index%2 == 0){
    $('#container').append(`<div id=box_id_${index} class=box_even>${index}</div>`);
  }else{
    $('#container').append(`<div id=box_id_${index} class=box_odd>${index}</div>`);
  }
}
