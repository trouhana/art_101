function getAjax(){
$.ajax({
  url:"https://en.wikipedia.org/api/rest_v1/page/title/Warren_G._Harding",
  type:"GET",
  dataType:"json",
  success: successFun,
  error:errorFun,
  complete: function (xhr, staus){
    console.log("request is complete"+xhr);
  

});
}
function successFun(result){
  console.log(result);
  $("#ajax_text").html(result.items[0].title);
}
function errorFun(xhr, status, strErr){
  console.log("error "+strErr);
}
$("#click_ajax").click(getAjax);
