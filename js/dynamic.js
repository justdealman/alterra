$(document).ready(function() {
	$('input[type="checkbox"]').uniform();
	$('.lb .nav > ul > li > div').css({
		'min-height': $('.lb .nav > ul').height()+'px'
	});
	$('.lb .nav > ul > li').hover(
		function() {
			$(this).children('div').stop(true,true).show();
		},
		function() {
			$(this).children('div').stop(true,true).hide();
		}
	)
});