$(document).ready(function(){
	$('#nav li').mouseenter(function(){
		$(this).fadeTo('slow',.4);
	})
	$('#nav li').mouseleave(function(){
		$(this).fadeTo('slow',1);
	})	
});