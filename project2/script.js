 $(document).ready(function(){
console.log('script loaded');

$('.list_wrapper').hide();
$('.list_wrapper, #list').on(
  'click',
  function(){

    $('.list_wrapper, #list').toggle()
  }
);

$('#about').hide();
$('#about, #description').on(
  'click',
  function(){

    $('#about, #description').toggle()
  }
);

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
  choice ='Rieko Aizawa (Piano)';
  document.getElementById('rieko_aizawa').src += "?&autoplay=1"; 
  document.getElementById('am12-2').style.display = "block";
} 

//2:00-4:00
if (now >= 121 && now <= 240) {
  choice ='12. Timo Andres (Piano)';
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
  choice = '12: Sarah Jarosz (Vocal)';
  document.getElementById('sarah_jarosz').src += "?&autoplay=1";
  document.getElementById('am8-10').style.display = "block";
}
//10:00-12:00
if (now >= 601 && now <= 720) {
  choice = '13: Emi Ferguson (Flute)';
  document.getElementById('emi_ferguson').src += "?&autoplay=1";
  document.getElementById('am10-12').style.display = "block";
}

//12:00-13:00
if (now >= 721 && now <= 780) {
  choice = 'Adele Anthony (Violin)';
  document.getElementById('adele_anthony').src += "?&autoplay=1";
  document.getElementById('pm12-2').style.display = "block";
}
//13:00-14:00
if (now >= 781 && now <= 840) {
  choice = '79: Bridget Kibbey (Harp)';
  document.getElementById('bridget_kibbey').src += "?&autoplay=1";
  document.getElementById('pm12-2').style.display = "block";
}

//14:00-15:00
if (now >= 841 && now <= 900) {
  choice = 'Inon Barnatan (Piano)';
  document.getElementById('inon_barnatan').src += "?&autoplay=1";
  document.getElementById('pm2-4').style.display = "block";
}
//15:00-16:00
if (now >= 901 && now <= 960) {
  choice = '17: Béla Fleck (Improvisatio)';
  document.getElementById('bela_fleck').src += "?&autoplay=1";
  document.getElementById('pm2-4').style.display = "block";
}
//16:00-18:00
if (now >= 961 && now <= 1080) {
  choice = '18: Brooklyn Rider (Ensemble)';
  document.getElementById('brooklyn_rider').src += "?&autoplay=1";
  document.getElementById('pm4-6').style.display = "block";
}
//18:00-20:00
if (now >= 1081 && now <= 1200) {
  choice = 'Tiffany Poon (Piano)';
  document.getElementById('tiffany_poon').src += "?&autoplay=1";
  document.getElementById('pm6-8').style.display = "block";
}
//20:00-22:00
if (now >= 1201 && now <= 1320) {
  choice = 'Abigel Kralik (Violin)';
  document.getElementById('abigel_kralik').src += "?&autoplay=1";
  document.getElementById('pm8-10').style.display = "block";
}
//22:00-0:00
if (now >= 1321 && now <= 1440) {
  choice = '122: Emi Ferguson (Flute)';
  document.getElementById('emi_ferguson').src += "?&autoplay=1";
  document.getElementById('pm10-12').style.display = "block";
}


  document.getElementById('rieko_aizawa').style.display = "none";
  document.getElementById('timo_andres').style.display = "none";
  document.getElementById('benjamin_beilman').style.display = "none";
  document.getElementById('alessio_bax').style.display = "none";


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
if (5 > time_bg > 0){
  document.body.style.backgroundColor = 'rgb(0,0,0)';
  document.getElementById('result').style.color = 'rgb(255,255,255)';
  document.getElementById('container_title').style.color = 'rgb(255,255,255)';
  document.getElementById('detail').style.color = 'rgb(255,255,255)';
  document.getElementById('am12-2').style.color = 'rgb(255,255,255)';
  document.getElementById('am2-4').style.color = 'rgb(255,255,255)';
  document.getElementById('time').style.color = 'white';
  document.getElementById('description').style.color = 'white';
  document.getElementById('vl').style.border = '1px solid white';
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
  document.getElementById('am6-8').style.color = 'rgb(' + (255-r) + ',' + (255-g) + ',' + (255-b) + ')';
}

else if (time_bg <= 17){
document.body.style.backgroundColor = 'white';
document.getElementById('result').style.color = 'black';
}

else if (time_bg <= 23){
var r = 255-parseInt(time)*10;
var g = 255-parseInt(time)*10;
var b = 255-parseInt(time)*10;
document.body.style.backgroundColor = 'black';
document.getElementById('container_title').style.color = 'white';
document.getElementById('detail').style.color = 'white';
document.getElementById('result').style.color = 'white';
document.getElementById('pm4-6').style.color = 'white';
document.getElementById('pm6-8').style.color = 'white';
document.getElementById('pm8-10').style.color = 'white';
document.getElementById('pm10-12').style.color = 'white';
document.getElementById('time').style.color = 'white';
document.getElementById('vl').style.border = '1px solid white';
document.getElementById('description').style.color = 'white';

}

else{
document.body.style.backgroundColor = 'rgb(20,20,20)';
document.getElementById("result").style.color = 'rgb(255,255,255)';
}

var time_0 = date.getHours();
var time_1 = date.getMinutes();
console.log(time_1);
const angle = (parseInt(time_0)-4.5)*12 - 90;
const angle_text = parseInt(time_1)*6-90;
console.log(angle_text);

var random_color = Math.floor(Math.random()*16777215).toString(16);
color1 = "#" + random_color;
console.log(color1);
document.getElementById('shadow').style = 'background-color:' + color1;
document.getElementById('shadow').style = 'background-color: #3e374c';

//if time is earlier than 4 am, no shadow
if (time_0 <= 5){
  document.getElementById('shadow').style = 'display: none';
  }

else if (time_0 >= 20){
  document.getElementById('shadow').style = 'display: none';
  // document.getElementById('result').style.transform = 'rotate('+ angle_text + 'deg)';
  }

else{
console.log(angle);
document.getElementById('shadow').style.transform = 'skewX(' + angle + 'deg)';
// document.getElementById('result').style.transform = 'rotate('+ angle_text + 'deg)';
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
document.getElementById('am6-8').style.top = '' + line_height -220 + 'px';
document.getElementById('am8-10').style.top = '' + line_height -210 + 'px';
document.getElementById('am10-12').style.top = '' + line_height -190 + 'px';
document.getElementById('pm12-2').style.top = '' + line_height -210 + 'px';
document.getElementById('pm2-4').style.top = '' + line_height -230 + 'px';
document.getElementById('pm4-6').style.top = '' + line_height -260 + 'px';
document.getElementById('pm6-8').style.top = '' + line_height -260 + 'px';
document.getElementById('pm8-10').style.top = '' + line_height -200 + 'px';
document.getElementById('pm10-12').style.top = '' + line_height -200 + 'px';
//}

})