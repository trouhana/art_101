//keypress
//subtring
// var original_text = $("#original_text p").text();
// function matchString(){
//
//   var input_text = $("#input_text").val();
//   var substring_var = original_text.substring(0, input_text.length);
//   console.log(substring_var);
//   console.log(input_text);
//   if (input_text == substring_var){
//     $("#input_text").css("border-color","blue");
//   }else{
//     $("#input_text").css("border-color","red");
//   }
// }
// $("#input_text").keyup(matchString);
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://genius.p.rapidapi.com/artists/16775",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "77f9d9ff88msh9bc93d96fb25dacp1b7291jsn5be61e72cb6e",
		"x-rapidapi-host": "genius.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response.response.artist.image_url);
});
