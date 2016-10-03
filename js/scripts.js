$(".button-collapse").sideNav();

$(document).ready(function(){
	$('.modal-trigger').leanModal();
});

$(".slide").cycle({
	fx:     'fade', 
    speed:  'slow', 
    timeout: 5000, 
	next: ".next",
	prev: ".prev"
});

$(document).ready(function() {
	$('select').material_select();
});

$(document).ready(function() {
	$(".quero-trigger").click(function(){
		$("#quero").css({"opacity":"1","z-index":"999"})
		$("#quero .exit").css({"right":"20px"})
	})
	$(".exit").click(function(){
		$("#quero").css({"opacity":"0","z-index":"0"})
	})
});