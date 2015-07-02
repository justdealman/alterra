function slider() {
	$('.slider .temp > div').each(function() {
		var path = $(this).children('img').attr('src');
		$(this).css({
			'background': 'url("'+path+'") no-repeat center center',
			'-webkit-background-size': 'cover',
			'-moz-background-size': 'cover',
			'-o-background-size': 'cover',
			'background-size': 'cover'
		});
	})
	$('.slider .container').empty();
	$('.slider .prev, .slider .next, .slider .pagination').remove();
	$('.slider .container').html($('.slider .temp').html());
	$('.slider, .slider .container, .slider .container > div').width($('.wrapper').width());
	$('.slider').slides({
		generatePagination: true,
		generateNextPrev: false,
		container: 'container',
		effect: 'slide',
		slideSpeed: 500,
		slideEasing: 'easeInOutQuad',
		play: 10000,
		pause: 2500
	});
}
function sortview(e) {
	$(e).addClass('active').parent().siblings().find('a').removeClass('active');
}
function gotop() {
	$('body, html').animate({
		scrollTop: 0
	}, 500);
}
function productDescriptionTabs(e) {
	e.parent().addClass('active').siblings().removeClass('active');
	e.parents('.description').find('div[data-tab="'+e.attr('href')+'"]').show().siblings('div').hide();
}
function inputMinus(e) {
	var $input = e.parent().find('input');
	var count = parseInt($input.val()) - 1;
	count = count < 1 ? 1 : count;
	$input.val(count);
	$input.change();
}
function inputPlus(e) {
	var $input = e.parent().find('input');
	$input.val(parseInt($input.val()) + 1);
	$input.change();
}
function callModal(e) {
	if ( $('.modal[data-modal="'+e.attr('data-call')+'"]').outerHeight() > $(window).height() ) {
		$('.modal[data-modal="'+e.attr('data-call')+'"]').css({
			'position': 'relative',
			'left': '0',
			'top': '0',
			'margin': '0 auto'
		});
	}
	else {
		$('.modal[data-modal="'+e.attr('data-call')+'"]').css({
			'position': 'fixed',
			'left': '50%',
			'top': '50%',
			'margin': -$('.modal[data-modal="'+e.attr('data-call')+'"]').outerHeight()/2+'px 0 0 -240px'
		});
	}
	$('.modal[data-modal="'+e.attr('data-call')+'"]').stop(true,true).fadeIn(500);
}
function sort(e) {
	e.addClass('active').siblings('a').removeClass('active').parent().siblings().children().removeClass('active');
	e.parent().addClass('active').siblings().removeClass('active');
}
function deliveryTabs(e) {
	e.parents('.information').children('div').children('div:nth-child('+e.attr('href')+')').show().siblings().hide();
	e.parent().addClass('active').siblings().removeClass('active');
}
function basketAdd(e) {
	$('.alert').css({
		'margin-top': -$('.alert').outerHeight()/2+'px'
	}).stop(true,true).fadeIn(500).delay(10000).fadeOut(500);
	$('.fade').stop(true,true).fadeIn(500).delay(10000).fadeOut(500);
}
function cityDrop(e) {
	e.parents('.header').stop(true,true).find('.citysel').slideDown(500);
}
function citySel(e) {
	if ( e.attr('data-pre') ) {
		e.parents('.header').find('h5.address a span').html(e.attr('data-pre')+': '+e.html());
	}
	else {
		e.parents('.header').find('h5.address a span').html(e.html());
	}
	e.parents('.citysel').stop(true,true).slideUp(500);
}
function selStore(e) {
	$('.header .address a span').text(e.attr('data-short'));
	$('.fade, div.store').stop(true,true).fadeOut(500);
}
function contactDetails(e) {
	$('.content .contacts > div > div  > div h6 span em').removeClass('active');
	$('.contacts .details').stop(true,true).fadeOut(500);
	e.parents('h6').parent().find('.details').css({
		'top': e.parents('h6').parent().outerHeight()+8+'px'
	}).stop(true,true).fadeIn(500);
	e.addClass('active');
}
function panelLinks() {
	var l = $('.wrapper').width()+$('.wrapper').offset().left;
	if ( l + $('.panel-links').outerWidth() > $(window).width() ) {
		l = $(window).width()-$('.panel-links').outerWidth();
	}
	$('.panel-links').css({
		'left': l+'px'
	});
}