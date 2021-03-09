
function changeBio(){
  var name = document.getElementById('name').value;
  var bio = document.getElementById('message').value;
   document.getElementById('name_id').innerHTML = name;
   document.getElementById('bio_id').innerHTML = bio;
}
document.getElementById("submit_bio").addEventListener("click", changeBio);
