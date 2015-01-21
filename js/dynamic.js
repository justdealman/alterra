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
	$('.slider, .slider .container, .slider .container > div').width($(window).width());
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
$(window).resize(function() {
	if ( $('.slider').length > 0 ) {
		slider();
	}
});
$(document).ready(function() {
	if ( $('.slider').length > 0 ) {
		slider();
	}
	$('input[type="checkbox"], input[type="radio"]').uniform();
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
	$('.rb .sort .view li span').bind('click', function() {
		$(this).addClass('active').parent().siblings().find('span').removeClass('active');
		return false;
	});
	if ( $('.filter .range').length > 0 ) {
		$('.filter .range').slider({
			range: true,
			min: 0,
			max: 2000,
			values: [200, 1500],
			step: 50,
			slide: function(event, ui) {
				$('.filter input.from').val(ui.values[0]);
				$('.filter input.to').val(ui.values[1]);
			}
		});
	}
	if ( $('.wrapper').height() > $(window).height() ) {
		$('body').append('<span class="gotop"></span>');
		$(window).bind('scroll', function() {
			if ( $(window).scrollTop() > $('.panel').height()+$('.header').height()+$('.menu').height()+5 ) {
				$('.gotop').fadeIn(500);
			}
			else {
				$('.gotop').fadeOut(500);
			}
		});
		$('.gotop').bind('click', function() {
			$('body, html').animate({
				scrollTop: 0
			}, 500);
		});
	}
	$('.content .contacts > div > div  > div .chief ul li.phone, .content .contacts > div > div > ul li ul li.phone').each(function() {
		if ( $(this).find('span').length == 1 ) {
			$(this).css({
				'margin-bottom': '6px'
			});
		}
	});
	if ( $('select').length > 0 ) {
		$('select').selectbox();
	}
	$('.rb h1').siblings('.breadcrumbs').css({
		'margin-bottom': '33px'
	});
	$('.compare table thead td > div').append('<span class="remove"></span>');
	$('.delivery .information ul li h5').each(function() {
		$(this).find('img').css({
			'margin-top': -($(this).find('img').attr('height')-18)/2+2+'px'
		});
	});
	$('.product .description > div').hide();
	$('.product .description > ul li a').bind('click', function() {
		$(this).parent().addClass('active').siblings().removeClass('active');
		$(this).parents('.description').find('div[data-tab="'+$(this).attr('href')+'"]').show().siblings('div').hide();
		return false;
	}).filter(':first').click();
	if ( $('.rating').length > 0 ) {
		$('.rating > div').raty({
			showHalf: true,
			readOnly: true,
			score: function() {
				return $(this).attr('data-score');
			}
		});
	}
	$('.basket .minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.basket .plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
	$('.same .jcarousel, .index .jcarousel').jcarousel({
		scroll: 1,
		animation: 500,
		easing: 'easeInOutQuart',
		wrap: 'circular'
	});
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
	$('ul.photos li:nth-child(5n), .content .contacts > div > div > ul li:nth-child(4n), ul.gallery li:nth-child(4n), .stat > ul li:nth-child(2n)').css({
		'margin-right': '-3px'
	});
	$('.lb .nav > ul > li:last-child > a').css({
		'padding-bottom': '14px'
	});
	$('.delivery .information ul li table tr:last-child th, .delivery .information ul li table tr:last-child td').css({
		'padding-bottom': '13px'
	});
	$('.compare table tbody tr:last-child th, .compare table tbody tr:last-child td').css({
		'padding-bottom': '17px'
	});
	if ( $('.rb .main .special').length > 0 ) {
		$('body').append('<div class="cover"></div>');
		$('.cover').css({
			'top': $('.rb .main .special').offset().top-22+'px',
			'height': $('.rb .main .special').height()+45+'px'
		});
	}
	$('.modal').append('<span class="close"></span>');
	var bh = 0;
	$('[data-call]').bind('click', function() {
		$('.fade').stop(true,true).fadeIn(500);
		$('.modal[data-modal="'+$(this).attr('data-call')+'"]').css({
			'margin-top': -$('.modal[data-modal="'+$(this).attr('data-call')+'"]').outerHeight()/2+'px'
		}).stop(true,true).fadeIn(500);
		bh = $(document).scrollTop();
		$('body').css({'position': 'fixed', 'top': -bh+'px', 'overflow-y': 'scroll'});
		return false;
	});
	$('.modal .close, .fade').bind('click', function() {
		$('.fade, .modal').stop(true,true).fadeOut(500);
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$(document).scrollTop(bh);
		return false;
	});
});