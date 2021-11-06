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
if (now >= 0 && now <= 120) {
  choice ='Rieko Aizawa <i>Piano</i>';
  document.getElementById('rieko_aizawa').src += "?&autoplay=1"; 
  document.getElementById('am12-2').style.display = "block";
} 

//2:00-4:00
if (now >= 121 && now <= 240) {
  choice ='Timo Andres <i>Piano</i>';
  document.getElementById('timo_andres').src += "?&autoplay=1"; 
  document.getElementById('am2-4').style.display = "block";
} 
//4:00-6:00
if (now >= 241 && now <= 360) {
  choice = 'Benjamin Beilman<br><i>Violin</i>';
  document.getElementById('benjamin_beilman').src += "?&autoplay=1"; 
  document.getElementById('am4-6').style.display = "block";
}

//6:00-8:00
if (now >= 361 && now <= 480) {
  choice = 'Alessio Bax <i>Piano</i>';
  //document.getElementById('bela_fleck').src += "?&autoplay=1";
  document.getElementById('alessio_bax').src += "?&autoplay=1";
  document.getElementById('am6-8').style.display = "block";
}

//8:00-10:00
if (now >= 481 && now <= 600) {
  choice = 'Sarah Jarosz <i>Vocal</i>';
  document.getElementById('sarah_jarosz').src += "?&autoplay=1";
  document.getElementById('am8-10').style.display = "block";
}
//10:00-12:00
if (now >= 601 && now <= 720) {
  choice = 'Emi Ferguson <i>Flute</i>';
  document.getElementById('emi_ferguson').src += "?&autoplay=1";
  document.getElementById('am10-12').style.display = "block";
}

//12:00-13:00
if (now >= 721 && now <= 780) {
  choice = 'Adele Anthony <i>Violin</i>';
  document.getElementById('adele_anthony').src += "?&autoplay=1";
  document.getElementById('pm12-2').style.display = "block";
}
//13:00-14:00
if (now >= 781 && now <= 840) {
  choice = 'Bridget Kibbey <i>Harp</i>';
  document.getElementById('bridget_kibbey').src += "?&autoplay=1";
  document.getElementById('pm12-2').style.display = "block";
}

//14:00-15:00
if (now >= 841 && now <= 900) {
  choice = 'Inon Barnatan <i>Piano</i>';
  document.getElementById('inon_barnatan').src += "?&autoplay=1";
  document.getElementById('pm2-4').style.display = "block";
}
//15:00-16:00
if (now >= 901 && now <= 960) {
  choice = 'Béla Fleck <i>Improvisatio</i>';
  document.getElementById('bela_fleck').src += "?&autoplay=1";
  document.getElementById('pm2-4').style.display = "block";
}
//16:00-18:00
if (now >= 961 && now <= 1080) {
  choice = 'Brooklyn Rider <i>Ensemble</i>';
  document.getElementById('brooklyn_rider').src += "?&autoplay=1";
  document.getElementById('pm4-6').style.display = "block";
}
//18:00-20:00
if (now >= 1081 && now <= 1200) {
  choice = 'Tiffany Poon <i>Piano</i>';
  document.getElementById('tiffany_poon').src += "?&autoplay=1";
  document.getElementById('pm6-8').style.display = "block";
}

else{
  document.getElementById('rieko_aizawa').style.display = "none";
  document.getElementById('timo_andres').style.display = "none";
  document.getElementById('benjamin_beilman').style.display = "none";
  document.getElementById('alessio_bax').style.display = "none";
}

console.log(now);
document.getElementById('result').innerHTML = choice;
console.log(choice);
console.log(date);
//!!!!!important!!!!!!!! time must be in const. no var. otherwise it won't work!!!!!!!!!!!!!


//test time
// if (time_bg < 17){
//   console.log ('false');
// }
// else{
//   console.log('true');
// }

const time_bg = date.getHours();
console.log(time_bg);
if (4 > time_bg > 0){
  document.body.style.backgroundColor = 'rgb(0,0,0)';
  document.getElementById('result').style.color = 'rgb(255,255,255)';
  document.getElementById('container_title').style.color = 'rgb(255,255,255)';
  document.getElementById('detail').style.color = 'rgb(255,255,255)';
  document.getElementById('am12-2').style.color = 'rgb(255,255,255)';
  document.getElementById('am2-4').style.color = 'rgb(255,255,255)';
}

else if (8 > time_bg){
  var r = parseInt(time)*30;
  var g = parseInt(time)*30;
  var b = parseInt(time)*30;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  document.getElementById("result").style.color = 'rgb(' + (255-r) + ',' +(255-g) + ',' + (255-b) + ')';
  document.getElementById('container_title').style.color = 'rgb(' + (255-r) + ',' + (255-g) + ',' + (255-b) + ')';
  document.getElementById('detail').style.color = 'rgb(' + (255-r) + ',' + (255-g) + ',' + (255-b) + ')';
  document.getElementById('result').style.color = 'rgb(' + (255-r) + ',' + (255-g) + ',' + (255-b) + ')';
  document.getElementById('am4-6').style.color = 'rgb(' + (255-r) + ',' + (255-g) + ',' + (255-b) + ')';
}

else if (time_bg <= 15){
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
document.getElementById('pm6-8').style.color = 'rgb(' + (255-r) + ',' + (255-g) + ',' + (255-b) + ')';
}

else{
document.body.style.backgroundColor = 'rgb(20,20,20)';
document.getElementById("result").style.color = 'rgb(255,255,255)';
}

var time_0 = date.getHours();
const angle = (parseInt(time_0)-4.5)*12 - 90;

//if time is earlier than 4 am, no shadow
if (time_0 <= 5){
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
//document.getElementById('hl').style.top += '' + line_height + 'px';
document.getElementById('am12-2').style.top = '' + line_height + 'px';
document.getElementById('am2-4').style.top = '' + line_height  + 'px';
document.getElementById('am4-6').style.top = '' + line_height -190 + 'px';
document.getElementById('am6-8').style.top = '' + line_height -210 + 'px';
document.getElementById('am8-10').style.top = '' + line_height -210 + 'px';
document.getElementById('am10-12').style.top = '' + line_height -190 + 'px';
document.getElementById('pm12-2').style.top = '' + line_height -210 + 'px';
document.getElementById('pm2-4').style.top = '' + line_height -230 + 'px';
document.getElementById('pm4-6').style.top = '' + line_height -260 + 'px';
document.getElementById('pm6-8').style.top = '' + line_height -260 + 'px';
//}

})