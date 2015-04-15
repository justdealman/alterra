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
		sortview($(this));
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
			gotop();
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
	//$('.compare table thead td > div').append('<span class="remove"></span>');
	$('.delivery .move h5, .delivery .information ul li h5').each(function() {
		$(this).find('img').css({
			'margin-top': -($(this).find('img').attr('height')-18)/2+2+'px'
		});
	});
	$('.product .description > div').hide();
	$('.product .description > ul li a').bind('click', function() {
		productDescriptionTabs($(this));
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
		inputMinus($(this));
		return false;
	});
	$('.basket .plus').click(function () {
		inputPlus($(this));
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
		callModal($(this));
		$('.fade').stop(true,true).fadeIn(500);
		bh = $(document).scrollTop();
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
		sort($(this));
		return false;
	});
	$('.rb .sort .method ul li:first-child a:last-child').trigger('click');
	$('.delivery .information > ul li a').bind('click', function() {
		deliveryTabs($(this));
		return false;
	}).filter(':first').click();
	$('.alert').append('<span class="close"></span>');
	$('button[data-basket="add"]').bind('click', function() {
		basketAdd();
		return false;
	});
	$('.alert .close, .alert .continue span').bind('click', function() {
		$('.alert, .fade').stop(true,true).fadeOut(500);
		return false;
	});
	$('.header .address a').bind('click', function() {
		cityDrop($(this));
		return false;
	});
	$('.header .citysel li span').bind('click', function() {
		citySel($(this));
		return false;
	});
	$('html, body').click(function() {
		$('.header .citysel').slideUp(500);
	});
	$('.header .address a, .header .citysel').click(function(e) {
		e.stopPropagation();
	});
	$('.modal h4 em, .career .send h4 em, .cooperation .form h4 em, .customers .form h4 em, .providers .form h4 span').bind('click', function() {
		$(this).parent().find('input[type="file"]').trigger('click');
	});
	if ( $('.about').length > 0 && $('.benefits').length > 0 ) {
		$('.benefits').css({
			'background': '#f9f9f9'
		});
	}
	if ( $('div.store').length > 0 ) {
		$('.fade').show();
		/*var st = ($(window).height()-$('div.store').outerHeight())/2;
		if ( st < 0 ) {
			st = 0;
		}
		$('div.store').css({
			'margin-top': st+'px'
		});*/
	}
	$('div.store ul li h5 a').bind('click', function() {
		selStore($(this));
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
			contactDetails($(this));
			return false;
		});
	}
	if ( $('.compare').length > 0 ) {
		$('.compare table').each(function() {
			$(this).css({
				'width': 232+$(this).find('thead td').size()*181+'px'
			});
			$(this).find('tbody th').each(function() {
				$(this).css({
					'top': $(this).parents('tr').find('td').position().top+'px'
				});
				var td = $(this).parent('tr').outerHeight();
				var th = $(this).outerHeight();
				if ( td > th ) {
					$(this).outerHeight(td);
				}
				if ( th > td ) {
					var td = $(this).parent('tr').find('td').outerHeight(th);
				}
			});
		});
		$('.compare > div > div').mousewheel(function(event, delta) {
			this.scrollLeft -= (delta*30);
			event.preventDefault();
		});
		$('.compare > div > div').bind('scroll', function() {
			console.log($(this).scrollLeft());
			$(this).find('table th').css({
				'left': $(this).scrollLeft()+'px'
			});
		});
	}
	$('.lb .nav > ul > li').each(function() {
		var t = $(this).children('div').children('ul');
		if ( t.children('li').length > 1 ) {
			t.children('li:nth-child(1)').append('<span class="vertical"></span>');
		}
		if ( t.children('li').length > 2 ) {
			t.children('li:nth-child(2)').append('<span class="vertical"></span>');
		}
		var lines = Math.ceil(t.children('li').size()/3);
		for ( var i = 1; i < lines; i++ ) {
			t.children('li:nth-child('+eval(i*3+1)+')').append('<span class="horizontal"></span>');
		}
		$(this).hover(function() {
			t.find('.vertical').css({
				'height': t.outerHeight()-96+'px'
			});
		});
	});
	if ( $('.introduction').length > 0 ) {
		$('.menu').addClass('mainpage');
	}
});