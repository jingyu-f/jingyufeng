$(document).ready(function(){

console.log('script loaded');

})


var random_color = Math.floor(Math.random()*16777215).toString(16);
var random_color1 = Math.floor(Math.random()*16777215).toString(16);
var random_color2 = Math.floor(Math.random()*16777215).toString(16);
var random_color3 = Math.floor(Math.random()*16777215).toString(16);
var random_color4 = Math.floor(Math.random()*16777215).toString(16);
var random_color5 = Math.floor(Math.random()*16777215).toString(16);
var random_color6 = Math.floor(Math.random()*16777215).toString(16);
var random_color7 = Math.floor(Math.random()*16777215).toString(16);
var random_color8 = Math.floor(Math.random()*16777215).toString(16);
var random_color9 = Math.floor(Math.random()*16777215).toString(16);
var random_color10 = Math.floor(Math.random()*16777215).toString(16);

console.log(random_color);
color = "#" + random_color;
color1 = "#" + random_color1;
color2 = "#" + random_color2;
color3 = "#" + random_color3;
color4 = "#" + random_color5;
color6 = "#" + random_color6;
color7 = "#" + random_color7;
color8 = "#" + random_color8;
color9 = "#" + random_color9;
color10 = "#" + random_color10;




var name = window.prompt("you are invited to type a sentence. (no caps/punctuations)");
var splits = name.split(" ");
console.log(splits);
var apiKey = "tbg4mgdq7yh7hlnfnaz9odor7vecv30wrsdw4aas54fejyqnu";
let html = "";

const arr = Math.floor(Math.random()*4)+1;

console.log(arr);
//$.getJSON('https://api.wordnik.com/v4/word.json/'+ word + '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=tbg4mgdq7yh7hlnfnaz9odor7vecv30wrsdw4aas54fejyqnu', function(data) {

//   console.log(data);
//  let synonym = data[0]["words"][1];
//  console.log(synonym);//list of the first word
//  //document.getElementById('pppp').innerHTML = synonym;
// //document.write(splits);
// console.log(splits);

//create button for each object in an array
// function addbutton () {
//   for (var i = 0; i < splits.length; i++) {
//     document.getElementById("more").innerHTML += "<button>" + splits[i] + "</button>";
//   }
// }

// addbutton();

// document.getElementById("more").onclick = function(data){
// 	word = synonym[1];
// 	document.getElementById('pppp').innerHTML += "<button>" + synonym + "</button>";


// }


//var word = document.getElementById('word').textContent;
var word0 = splits[0];
var word1 = splits[1];
var word2 = splits[2];
var word3 = splits[3];
var word4 = splits[4];
var word5 = splits[5];
var word6 = splits[6];
var word7 = splits[7];
var word8 = splits[8];
var word9 = splits[9];
var word10 = splits[10];

console.log(word0);
console.log(word2);

var searchWord0 = word0
var searchWord1 = word1
var searchWord2 = word2
var searchWord3 = word3
var searchWord4 = word4
var searchWord5 = word5
var searchWord6 = word6
var searchWord7 = word7
var searchWord8 = word8
var searchWord9 = word9
var searchWord10 = word10

document.getElementById('word0').innerHTML = word0;
document.getElementById('word1').innerHTML = word1;
document.getElementById('word2').innerHTML = word2;
document.getElementById('word3').innerHTML = word3;
document.getElementById('word4').innerHTML = word4;
document.getElementById('word5').innerHTML = word5;
document.getElementById('word6').innerHTML = word6;
document.getElementById('word7').innerHTML = word7;
document.getElementById('word8').innerHTML = word8;
document.getElementById('word9').innerHTML = word9;
document.getElementById('word10').innerHTML = word10;



$(document).on('click', '.mybtn0', function(){
     $(this).removeClass('mybtn0');
	$.getJSON('https://api.wordnik.com/v4/word.json/'+ searchWord0+ '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=tbg4mgdq7yh7hlnfnaz9odor7vecv30wrsdw4aas54fejyqnu', function(data) {

     $('.wrapper0').append('<div class="mybtn0">'+ data[0]["words"][2] + '</div>');
     searchWord0 =  data[0]["words"][2]
     console.log(searchWord0)
     //document.getElementById('sentence').innerHTML = searchWord0;
console.log(color);
     $('.mybtn0').css('color', color);

});
     //$(document).on('click', '.mybtn0', function(){ 
    // $(this).removeClass('mybtn0');
    // });
      });


$(document).on('click', '.mybtn', function(){ 
     $(this).removeClass('mybtn');
     $.getJSON('https://api.wordnik.com/v4/word.json/'+ searchWord1+ '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=tbg4mgdq7yh7hlnfnaz9odor7vecv30wrsdw4aas54fejyqnu', function(data) {

     $('.wrapper').append('<div class="mybtn">'+ data[0]["words"][2] + '</div>');
     searchWord1 =  data[0]["words"][2]
     console.log(searchWord1)
     $('.mybtn').css('color', color1);
     
 });


// $(document).on('click', '.mybtn', function(){ 
//      $(this).removeClass('mybtn');
//      });
});
     

$(document).on('click', '.mybtn2', function(){ 
     $(this).removeClass('mybtn2');
     $.getJSON('https://api.wordnik.com/v4/word.json/'+ searchWord2+ '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=tbg4mgdq7yh7hlnfnaz9odor7vecv30wrsdw4aas54fejyqnu', function(data) {

     $('.wrapper2').append('<div class="mybtn2">'+ data[0]["words"][2] + '</div>');
     searchWord2 =  data[0]["words"][2]
     console.log(searchWord2)
     $('.mybtn2').css('color', color2);
     
 });


// $(document).on('click', '.mybtn2', function(){ 
//      $(this).removeClass('mybtn2');
//      });
});

$(document).on('click', '.mybtn3', function(){ 
     $(this).removeClass('mybtn3');
     $.getJSON('https://api.wordnik.com/v4/word.json/'+ searchWord3+ '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=tbg4mgdq7yh7hlnfnaz9odor7vecv30wrsdw4aas54fejyqnu', function(data) {

     $('.wrapper3').append('<div class="mybtn3">'+ data[0]["words"][2] + '</div>');
     searchWord3 =  data[0]["words"][2]
     console.log(searchWord3)
     $('.mybtn3').css('color', color3);
     
 });


// $(document).on('click', '.mybtn3', function(){ 
//      $(this).removeClass('mybtn3');
//      });
});

$(document).on('click', '.mybtn4', function(){
     $(this).removeClass('mybtn4'); 
     $.getJSON('https://api.wordnik.com/v4/word.json/'+ searchWord4+ '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=tbg4mgdq7yh7hlnfnaz9odor7vecv30wrsdw4aas54fejyqnu', function(data) {

     $('.wrapper4').append('<div class="mybtn4">'+ data[0]["words"][2] + '</div>');
     searchWord4 =  data[0]["words"][2]
     console.log(searchWord4)
     $('.mybtn4').css('color', color4);
 });


// $(document).on('click', '.mybtn4', function(){ 
//      $(this).removeClass('mybtn4');
//      });
});

$(document).on('click', '.mybtn5', function(){
     $(this).removeClass('mybtn5'); 
     $.getJSON('https://api.wordnik.com/v4/word.json/'+ searchWord5+ '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=tbg4mgdq7yh7hlnfnaz9odor7vecv30wrsdw4aas54fejyqnu', function(data) {

     $('.wrapper5').append('<div class="mybtn5">'+ data[0]["words"][2] + '</div>');
     searchWord5 =  data[0]["words"][2]
     console.log(searchWord5)
     $('.mybtn5').css('color', color5);
     
 });


// $(document).on('click', '.mybtn5', function(){ 
//      $(this).removeClass('mybtn5');
//      });
});

$(document).on('click', '.mybtn6', function(){
     $(this).removeClass('mybtn6'); 
     $.getJSON('https://api.wordnik.com/v4/word.json/'+ searchWord6+ '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=tbg4mgdq7yh7hlnfnaz9odor7vecv30wrsdw4aas54fejyqnu', function(data) {

     $('.wrapper6').append('<div class="mybtn6">'+ data[0]["words"][2] + '</div>');
     searchWord6 =  data[0]["words"][2]
     console.log(searchWord6)
     $('.mybtn6').css('color', color6);
     
 });


// $(document).on('click', '.mybtn6', function(){ 
//      $(this).removeClass('mybtn6');
//      });
});

$(document).on('click', '.mybtn7', function(){ 
     $(this).removeClass('mybtn7');
     $.getJSON('https://api.wordnik.com/v4/word.json/'+ searchWord7+ '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=tbg4mgdq7yh7hlnfnaz9odor7vecv30wrsdw4aas54fejyqnu', function(data) {

     $('.wrapper7').append('<div class="mybtn7">'+ data[0]["words"][2] + '</div>');
     searchWord7 =  data[0]["words"][2]
     console.log(searchWord7)
     $('.mybtn7').css('color', color7);
     
 });


// $(document).on('click', '.mybtn7', function(){ 
//      $(this).removeClass('mybtn7');
//      });
});
$(document).on('click', '.mybtn8', function(){ 
     $(this).removeClass('mybtn8');
     $.getJSON('https://api.wordnik.com/v4/word.json/'+ searchWord8+ '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=tbg4mgdq7yh7hlnfnaz9odor7vecv30wrsdw4aas54fejyqnu', function(data) {

     $('.wrapper8').append('<div class="mybtn8">'+ data[0]["words"][2] + '</div>');
     searchWord8 =  data[0]["words"][2]
     console.log(searchWord8)
     $('.mybtn8').css('color', color8);
     
 });


// $(document).on('click', '.mybtn8', function(){ 
//      $(this).removeClass('mybtn8');
//      });
});
$(document).on('click', '.mybtn9', function(){ 
     $(this).removeClass('mybtn9');
     $.getJSON('https://api.wordnik.com/v4/word.json/'+ searchWord9+ '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=tbg4mgdq7yh7hlnfnaz9odor7vecv30wrsdw4aas54fejyqnu', function(data) {

     $('.wrapper9').append('<div class="mybtn9">'+ data[0]["words"][2] + '</div>');
     searchWord9 =  data[0]["words"][2]
     console.log(searchWord9)
     $('.mybtn9').css('color', color9);
     
 });


// $(document).on('click', '.mybtn9', function(){ 
//      $(this).removeClass('mybtn9');
//      });
});
$(document).on('click', '.mybtn10', function(){ 
     $(this).removeClass('mybtn10');
     $.getJSON('https://api.wordnik.com/v4/word.json/'+ searchWord10+ '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=tbg4mgdq7yh7hlnfnaz9odor7vecv30wrsdw4aas54fejyqnu', function(data) {

     $('.wrapper10').append('<div class="mybtn10">'+ data[0]["words"][2] + '</div>');
     searchWord10 =  data[0]["words"][2]
     console.log(searchWord10)
     $('.mybtn10').css('color', color10);
     
 });


// $(document).on('click', '.mybtn10', function(){ 
//      $(this).removeClass('mybtn10');
//      });

});

// $(document).on('click', '.mybtn', function(){ 
//      $.getJSON('https://api.wordnik.com/v4/word.json/'+ searchWord+ '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=tbg4mgdq7yh7hlnfnaz9odor7vecv30wrsdw4aas54fejyqnu', function(data) {

//      $('body').append('<div class="mybtn">'+ data[0]["words"][1] + '</div>');
//      console.log(searchWord);


     
// });




