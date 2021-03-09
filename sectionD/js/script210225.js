//var original_text = $("#original_text").children().html();
//var original_text = $("#original_text p").html();
var original_text = $("#original_text").text();
console.log(original_text);
function matchingFunction(){
  var input_text = $("#input_text").val();
  if(input_text.length>original_text.length){
    //alert("This is too long! and annoying!");
    $("#input_text").css('color','red');
  }else{
    $("#input_text").css('color','black');
      var substing_var = original_text.substring(0,input_text.length)
    }
  //console.log(input_text);
  console.log(substing_var);
  if(input_text==original_text){
    $("#input_text").css('border-color','green');
  }else if(input_text==substing_var){
  //color blue
   $("#input_text").css('border-color','blue');
  }
  else{
    //color red
     $("#input_text").css('border-color','red');
  }
}
$("#input_text").keyup(matchingFunction);
//keyup
