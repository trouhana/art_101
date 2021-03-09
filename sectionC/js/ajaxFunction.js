function getAjax(){
$.ajax({
  url:"https://xkcd.com/info.0.json",
  type:"GET",
  dataType:"json",
  success: successFun,
  error:errorFun,
  complete: function (xhr, staus){
    console.log("request is complete"+xhr);
  }

});
}
function successFun(result){
  console.log(result);
  $("#ajax_text").html(result.img);
}
function errorFun(xhr, status, strErr){
  console.log("error "+strErr);
}
$("#click_ajax").click(getAjax);
