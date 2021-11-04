
 $(document).ready(function(){
console.log('script loaded');

var date = new Date();
var time = date.getHours();
var now = time * 60 + date.getMinutes();

console.log(now);
if (now >= 600 && now <= 800) {
//document.querySelector('#bela_fleck').autoplay();
document.getElementById("bela_fleck").src += "?&&autoplay=1";
}

})