 $(document).ready(function(){
console.log('script loaded');

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
//display time
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();

var date = new Date();
var time = date.getHours();
var now = time * 60 + date.getMinutes();

//12:00-2:00
//12:00-12:12
if (now >= 0 && now <= 100) {
  choice ='Rieko Aizawa <i>Piano</i>';
  document.getElementById('rieko_aizawa').style.display = "none";
  document.getElementById('rieko_aizawa').src += "?&autoplay=1";
  
} 
//if time is between 9:30 to 9:45
if (now >= 570 && now <= 585) {
  choice ='Sarah Jarosz <i>Vocal/Guitar</i>';
} 
//9:45-10:00
if (now >= 585 && now <= 600) {
  choice = 'Charles Young<br><i>Violin</i>';
}
//10:00-13:00 demo
if (now >= 600 && now <= 900) {
  choice = 'Béla Fleck<br><i>Improvisatio</i>';
  document.getElementById('bela_fleck').style = "display: none";
  //document.getElementById('bela_fleck').src += "?&autoplay=1";
  document.getElementById('rieko_aizawa').src += "?&autoplay=1";
  //document.getElementById('rieko_aizawa').src += "?&autoplay=1&playlist=ZucYKlsCFxs&loop=1";
}

if (now >= 1320 && now <= 1500) {
  choice = 'Béla Fleck<br><i>Improvisatio</i>';
  document.getElementById('bela_fleck').src += "?&autoplay=1";
}
else{
  document.getElementById('rieko_aizawa').style.display = "none";
  
}

if (now >=0 && now <= 120){
  document.getElementById('am12-2').style.display = "block";
}

console.log(now);
document.getElementById('result').innerHTML = choice;
console.log(choice);
console.log(date);
//!!!!!important!!!!!!!! time must be in const. no var. otherwise it won't work!!!!!!!!!!!!!
const time_bg = date.getHours();
console.log(time_bg);

//test time
// if (time_bg < 17){
//   console.log ('false');
// }
// else{
//   console.log('true');
// }

if (4 >= time_bg >= 0){
  document.body.style.backgroundColor = 'rgb(0,0,0)';
  document.getElementById('result').style.color = 'rgb(255,255,255)';
  document.getElementById('list').style.color = 'rgb(255,255,255)';
}

if (8 >= time_bg){
var r = parseInt(time)*30;
var g = parseInt(time)*30;
var b = parseInt(time)*30;
document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
document.getElementById("result").style.color = 'rgb(' + (255-r) + ',' +(255-g) + ',' + (255-b) + ')';
document.getElementById('container_title').style.color = 'rgb(' + (255-r) + ',' + (255-g) + ',' + (255-b) + ')';
document.getElementById('detail').style.color = 'rgb(' + (255-r) + ',' + (255-g) + ',' + (255-b) + ')';
document.getElementById('result').style.color = 'rgb(' + (255-r) + ',' + (255-g) + ',' + (255-b) + ')';
document.getElementById('list').style.color = 'rgb(' + (255-r) + ',' + (255-g) + ',' + (255-b) + ')';
}

else if (time_bg <= 16){
document.body.style.backgroundColor = 'white';
  document.getElementById('result').style.color = 'black';

}

else if (time_bg <= 23){
var r = 255-parseInt(time)*10;
var g = 255-parseInt(time)*10;
var b = 255-parseInt(time)*10;
document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
document.getElementById('container_title').style.color = 'rgb(' + (255-r) + ',' + (255-g) + ',' + (255-b) + ')';
document.getElementById('detail').style.color = 'rgb(' + (255-r) + ',' + (255-g) + ',' + (255-b) + ')';
document.getElementById('result').style.color = 'rgb(' + (255-r) + ',' + (255-g) + ',' + (255-b) + ')';

}

else{
document.body.style.backgroundColor = 'rgb(20,20,20)';
document.getElementById("result").style.color = 'rgb(0,20,255)';
}

var time_0 = date.getHours();
const angle = (parseInt(time_0)-4.5)*12 - 90;

//if time is earlier than 4 am, no shadow
if (time_0 < 4){
  document.getElementById('shadow').style = 'display: none';
  }

else if (time_0 >= 20){
  document.getElementById('shadow').style = 'display: none';
  }

else{
console.log(angle);
document.getElementById('shadow').style.transform = 'skewX(' + angle + 'deg)';
}

let viewportHeight = window.innerHeight;
const line_hour = date.getHours();
const line_min = date.getMinutes();
const line_height = (viewportHeight / 24) * line_hour ;

console.log(viewportHeight);
console.log(line_height);
document.getElementById('vl').style.height = '' + line_height + 'px';
document.getElementById('hl').style.top += '' + line_height + 'px';
document.getElementById('am12-2').style.top = '' + line_height + 'px';
//}

})