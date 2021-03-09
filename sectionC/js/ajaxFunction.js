function getAjax(){
 $.ajax({
  "async": true,
 	"crossDomain": true,
  url:"https://genius.p.rapidapi.com/artists/16775/songs",
   type:"GET",
   dataType:"json",
   headers: {
 		"x-rapidapi-key": "77f9d9ff88msh9bc93d96fb25dacp1b7291jsn5be61e72cb6e",
 		"x-rapidapi-host": "genius.p.rapidapi.com"
 	},
   success: successFun,
   error:errorFun,
   complete: function (xhr, staus){
    console.log("request is complete"+xhr);
   }

 });
 }
 function successFun(result){
   console.log(result);
   $("#ajax_text").html('<img src="'+result.response.songs[10].song_art_image_url+'"/>"')
   //$("#ajax_text").html(result.items[0].title);
 }
 function errorFun(xhr, status, strErr){
   console.log("error "+strErr);
 }
// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://genius.p.rapidapi.com/artists/16775/songs",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "77f9d9ff88msh9bc93d96fb25dacp1b7291jsn5be61e72cb6e",
// 		"x-rapidapi-host": "genius.p.rapidapi.com"
// 	}
// };
//
// $.ajax(settings).done(function (response) {
// 	console.log(response);
//   $("#ajax_text").html('<img src="'+response.response.songs[10].song_art_image_url+'"/>"')
// });
//}
$("#click_ajax").click(getAjax);
