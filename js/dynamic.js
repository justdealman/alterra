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
	$('.rb .sort .view li a').bind('click', function() {
		$(this).addClass('active').parent().siblings().find('a').removeClass('active');
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
	$('.delivery .move h5, .delivery .information ul li h5').each(function() {
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
	$('.same .jcarousel, .index .jcarousel, .categories .jcarousel, .partners .jcarousel').jcarousel({
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
	$('.compare table tbody tr:last-child th, .compare table tbody tr:last-child td').css({
		'padding-bottom': '17px'
	});
	$('.delivery table tr.type1 td').css({
		'background': '#f1fde6'
	});
	$('.delivery table tr.type2 td').css({
		'background': '#eff7ff'
	});
	$('.delivery table tr.type3 td').css({
		'background': '#f1fde6'
	});
	$('.delivery table tr.type4 td').css({
		'background': '#fff0d7'
	});
	$('.delivery table tr.type5 td').css({
		'background': '#e9dfec'
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
		bh = $(document).scrollTop();
		if ( $('.modal[data-modal="'+$(this).attr('data-call')+'"]').outerHeight() > $(window).height() ) {
			$('.modal[data-modal="'+$(this).attr('data-call')+'"]').css({
				'position': 'relative',
				'left': '0',
				'top': '0',
				'margin': '0 auto'
			});
		}
		else {
			$('.modal[data-modal="'+$(this).attr('data-call')+'"]').css({
				'position': 'fixed',
				'left': '50%',
				'top': '50%',
				'margin': -$('.modal[data-modal="'+$(this).attr('data-call')+'"]').outerHeight()/2+'px 0 0 -240px'
			});
		}
		$('.modal[data-modal="'+$(this).attr('data-call')+'"]').stop(true,true).fadeIn(500);
		$('body').css({'overflow-y': 'scroll'});
		$('.wrapper').css({'position': 'fixed', 'top': -bh+'px'});
		$('.footer').css({'position': 'fixed', 'top': -bh+$('.wrapper').height()+'px'});
		$('.cover').css({
			'position': 'fixed',
			'top': -bh+$('.rb .main .special').offset().top-22+'px'
		});
		return false;
	});
	$('.modal .close, .fade').bind('click', function() {
		$('.fade, .modal, .alert').stop(true,true).fadeOut(500);
		if ( $('.modal').is(':visible') ) {
			$('body').css({'overflow-y': 'auto'});
			$('.wrapper, .footer').css({'position': 'relative', 'top': '0'});
			$('.cover').css({
				'position': 'absolute',
				'top': $('.rb .main .special').offset().top-22+'px'
			});
			$(document).scrollTop(bh);
		}
		return false;
	});
	$('.rb .sort .method ul li a').bind('click', function() {
		$(this).addClass('active').siblings('a').removeClass('active').parent().siblings().children().removeClass('active');
		$(this).parent().addClass('active').siblings().removeClass('active');
		return false;
	});
	$('.rb .sort .method ul li:first-child a:last-child').trigger('click');
	$('.delivery .information > ul li a').bind('click', function() {
		$(this).parents('.information').children('div').children('div:nth-child('+$(this).attr('href')+')').show().siblings().hide();
		$(this).parent().addClass('active').siblings().removeClass('active');
		return false;
	}).filter(':first').click();
	$('.alert').append('<span class="close"></span>');
	$('button[data-basket="add"]').bind('click', function() {
		$('.alert').css({
			'margin-top': -$('.alert').outerHeight()/2+'px'
		}).stop(true,true).fadeIn(500).delay(10000).fadeOut(500);
		$('.fade').stop(true,true).fadeIn(500).delay(10000).fadeOut(500);
		return false;
	});
	$('.alert .close, .alert .continue span').bind('click', function() {
		$('.alert, .fade').stop(true,true).fadeOut(500);
		return false;
	});
	$('.header .address a').bind('click', function() {
		$(this).parents('.header').stop(true,true).find('.citysel').slideDown(500);
		return false;
	});
	$('.header .citysel li span').bind('click', function() {
		if ( $(this).attr('data-pre') ) {
			$(this).parents('.header').find('h5.address a span').html($(this).attr('data-pre')+': '+$(this).html());
		}
		else {
			$(this).parents('.header').find('h5.address a span').html($(this).html());
		}
		$(this).parents('.citysel').stop(true,true).slideUp(500);
		return false;
	});
	$('html, body').click(function() {
		$('.header .citysel').stop(true,true).slideUp(500);
	});
	$('.header .address a, .header .citysel').click(function(e) {
		e.stopPropagation();
	});
	$('.modal h4 em, .career .send h4 em, .cooperation .form h4 em').bind('click', function() {
		$(this).parent().find('input[type="file"]').trigger('click');
	});
	if ( $('.about').length > 0 && $('.benefits').length > 0 ) {
		$('.benefits').css({
			'background': '#f9f9f9'
		});
	}
	if ( $('div.store').length > 0 ) {
		$('.fade').show();
		var st = ($(window).height()-$('div.store').outerHeight())/2;
		if ( st < 0 ) {
			st = 0;
		}
		$('div.store').css({
			'margin-top': st+'px'
		});
	}
	$('div.store ul li h5 a').bind('click', function() {
		$('.header .address a span').text($(this).attr('data-short'));
		$('.fade, div.store').stop(true,true).fadeOut(500);
		return false;
	});
	if ( $('.contacts .details').length > 0 ) {
		$('.contacts .details').append('<span class="close"></span>');
		$('.contacts .details .close').bind('click', function() {
			$(this).parent().stop(true,true).fadeOut(500);
			$('.content .contacts > div > div  > div h6 span em').removeClass('active');
			return false;
		});
		$('html, body').click(function() {
			$('.contacts .details').fadeOut(500);
			$('.content .contacts > div > div  > div h6 span em').removeClass('active');
		});
		$('.contacts .details').click(function(e) {
			e.stopPropagation();
		});
		$('.contacts [data-more="details"]').bind('click', function() {
			$('.content .contacts > div > div  > div h6 span em').removeClass('active');
			$('.contacts .details').stop(true,true).fadeOut(500);
			$(this).parents('h6').parent().find('.details').css({
				'top': $(this).parents('h6').parent().outerHeight()+8+'px'
			}).stop(true,true).fadeIn(500);
			$(this).addClass('active');
			return false;
		});
	}
});