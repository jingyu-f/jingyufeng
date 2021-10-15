$(document).ready(function(){
console.log('script loaded');


//let button = document.querySelector('#button0');
let itemb = document.querySelector('#secret');


//button.addEventListener('click', ()=>{
  //itemb.classList.toggle('reveal');
 //itemb.classList.toggle('reveal');
//})

$('#button0').click(function(e){
	e.preventDefault();
	$('#secret').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 2s',
    })
})

$('#button_creatures').click(function(e){
	e.preventDefault();
	$('#sad').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'none',
    })
})

$('#button_physical').click(function(e){
	e.preventDefault();
	$('#physical').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 2s',
    })
    $('#link_physical').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })
})

$('#button_spiritual').click(function(e){
	e.preventDefault();
	$('#zhuangzi').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 2s',
    })

    $('#veneration').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 2s',
    })
    $('#link_old').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })
    $('#link_zhuangzi').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })
})

$('#button_rainforest').click(function(e){
	e.preventDefault();
	$('#rainforest').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 2s',
    })
})

$('#button_zhuangzi').click(function(e){
	e.preventDefault();
	$('#zhuangzi_1').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 2s',
    })
})


$('#button_capitalist').click(function(e){
	e.preventDefault();
	$('#capitalist').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 2s',
    })
    $('#capitalocene').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 2s',
    })
})

$('#button_test').click(function(e){
	e.preventDefault();
	$('#test').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 3s',
    })
    $('#link_test').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })
    $('#cartier').css({
		'display': 'none',
    })
 })

$('#button_landscape').click(function(e){
	e.preventDefault();
	$('#johanna').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 3s',
    })
    $('#link_johanna').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })
    $('#physical').css({
		'display': 'none',
    })
 })

$('#button_junya').click(function(e){
	e.preventDefault();
	$('#junya').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 3s',
    })
    $('#link_junya').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })
 })

$('#button_biotopes').click(function(e){
	e.preventDefault();
	$('#biotopes').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 3s',
    })
    $('#link_biotopes').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })
  })

$('#button_damage').click(function(e){
	e.preventDefault();
	$('#damage').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 3s',
    })
    $('#link_damage').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })
  })

$('#button_deforestation').click(function(e){
	e.preventDefault();
	$('#cartier').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 3s',
    })
    $('#link_exhibit').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })
  })

$('#button_old').click(function(e){
	e.preventDefault();
	$('#old').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 3s',
    })
    $('#link_logging').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })
  })

$('#button_old').click(function(e){
	e.preventDefault();
	$('#old').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 3s',
    })
    $('#link_logging').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })
  })

$('#button_logging').click(function(e){
	e.preventDefault();
	$('#early').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 3s',
    })
    $('#link_early').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })
  })

$('#button_sharing').click(function(e){
	e.preventDefault();
	$('#talk').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 3s',
    })

    $('#selfish').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 3s',
    })

    $('#link_talk').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })
     $('#link_selfish').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })
  })

$('#button_creatures').click(function(e){
	e.preventDefault();
	$('#talk').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 3s',
    })
    $('#sad').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 3s',
    })
    $('#link_talk').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })
    $('#link_sad').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })
  })

$('#button_vast').click(function(e){
	e.preventDefault();
	$('#mushroom').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 3s',
    })
    $('#link_mushroom').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })
  })

$('#button_capitalist').click(function(e){
	e.preventDefault();
	$('#capitalocene').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 3s',
    })
    $('#link_capitalocene').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })
  })

$('#button_rainforest').click(function(e){
	e.preventDefault();
	$('#rainforest').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 3s',
    })
    $('#link_rainforest').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })
  })



//let button1 = document.querySelector('#button1');
//let itemc = document.querySelector('#talk');


	button1.addEventListener('click', ()=>{
	  itemc.classList.toggle('reveal');
	})

	let button_physical = document.querySelector('#button_physical');
	let physical = document.querySelector('#physical');


	button_physical.addEventListener('click', ()=>{
	  physical.classList.toggle('reveal');
	})

	let button_spiritual = document.querySelector('#button_spiritual');
	let spiritual = document.querySelectorAll('.hide0');

	button_spiritual.addEventListener('click', ()=>{
	  spiritual[0].classList.toggle('reveal');
	  spiritual[1].classList.toggle('reveal');
	})

	let button_zhuangzi = document.querySelector('#button_zhuangzi');
	let zhuangzi = document.querySelector('#zhuangzi_1');


	button_zhuangzi.addEventListener('click', ()=>{
	  zhuangzi.classList.toggle('reveal');
	})

	let button_damage= document.querySelector('#button_damage');
	let damage = document.querySelector('#damage');


	button_damage.addEventListener('click', ()=>{
	  damage.classList.toggle('reveal');
	 })

	  let button_biotopes= document.querySelector('#button_biotopes');
	let biotopes = document.querySelector('#biotopes');


	button_biotopes.addEventListener('click', ()=>{
	 biotopes.classList.toggle('reveal');
	})

	  let button_junya= document.querySelector('#button_junya');
	let junya = document.querySelector('#junya');


	button_junya.addEventListener('click', ()=>{
	 junya.classList.toggle('reveal');
	})

	  let button_deforestation= document.querySelector('#button_deforestation');
	let cartier = document.querySelector('#cartier');


	button_deforestation.addEventListener('click', ()=>{
	 cartier.classList.toggle('reveal');
	})

	  let button_old= document.querySelector('#button_old');
	let old = document.querySelector('#old');


	button_old.addEventListener('click', ()=>{
	 old.classList.toggle('reveal');
	})

	  let button_logging= document.querySelector('#button_logging');
	let early= document.querySelector('#early');


	button_logging.addEventListener('click', ()=>{
	 early.classList.toggle('reveal');
	})


  


})