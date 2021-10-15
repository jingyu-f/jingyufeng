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

$('#link_secret').css({
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
    $('#junya').css({
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

    $('#link_noticing').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
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

$('#button_growth').click(function(e){
	e.preventDefault();
	$('#growth').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 3s',
    })
    $('#link_growth').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })
     $('#mushroom').css({
		'display': 'none',
    })
  })

$('#button_metaphor').click(function(e){
	e.preventDefault();
	$('#metaphor').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 3s',
    })
    $('#link_metaphor').css({
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

$('#button_pine').click(function(e){
	e.preventDefault();
	$('#pine').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 3s',
    })
    $('#link_pine').css({
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

$('#button_0').click(function(e){
	e.preventDefault();
	$('#social').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'color':'black',
        'opacity':'1',
        'animation': 'movieSkew_clear 3s',
    })
    $('#link_social').css({
		'-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
        'opacity':'1',
        'color':'#3afc35',
        'animation': 'movieSkew_clear 2s',
    })

    $('#question').css({
		'display': 'none',
    })
     $('#intro').css({
		'display': 'none',
    })
  })





	//let button_spiritual = document.querySelector('#button_spiritual');
	//let spiritual = document.querySelectorAll('.hide0');

	//button_spiritual.addEventListener('click', ()=>{
	  //spiritual[0].classList.toggle('reveal');
	  //spiritual[1].classList.toggle('reveal');
	//})

	

  


})