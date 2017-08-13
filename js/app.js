$(document).foundation();

jQuery(document).ready(function(){
	
	jQuery('.scroll-pane').jScrollPane();
	
	carrossel = jQuery('.bxslider').bxSlider({
		mode: 'vertical',
		minSlides: 5,
		maxSlides: 5,
		moveSlides: 1,
		pager: false,
		touchEnabled: false,
		infiniteLoop: false,
		onSliderLoad: function() {
			jQuery('.bx-prev').addClass('inativo');
			jQuery('.foto.ativo').prev().addClass('inativo').prev().addClass('inativo');
			jQuery('.foto.last').next().addClass('inativo').next().addClass('inativo');
			jQuery('.foto.first .cantoneira-left').css({
				'top': 5,
				'left': -10
			}, 100);
			jQuery('.foto.first .cantoneira-right').css({
				'bottom': 5,
				'left': 133
			}, 100);
		},
		onSlideBefore: function(){
			jQuery('.foto.ativo .cantoneira-left').animate({
				'top': 15,
				'left': 0,
			}, 80, function(){
				jQuery('.cantoneira-left').fadeOut(150);
			});
			jQuery('.foto.ativo .cantoneira-right').animate({
				'bottom': 15,
				'left': 123,
			}, 80, function(){
				jQuery('.cantoneira-right').fadeOut(150);
			});
		},
		onSlideAfter: function(){
			jQuery('.foto.ativo .cantoneira-left').fadeIn(100).animate({
				'top': 5,
				'left': -10
			}, 80);
			jQuery('.foto.ativo .cantoneira-right').fadeIn(100).animate({
				'bottom': 5,
				'left': 133
			}, 80);
		},
		onSlidePrev: function(){
			jQuery('.foto.ativo').prev().addClass('ativo');
			jQuery('.foto.ativo').next().removeClass('ativo');
			jQuery('.bx-next').removeClass('inativo');
			jQuery('.depoimentos-completos .depoimento.ativo').removeClass('ativo').prev().addClass('ativo');
			if ( 3 == jQuery('.foto.ativo').attr('data-foto-id') ) {
				jQuery('.bx-prev').addClass('inativo');
			} else {
				jQuery('.bx-prev').removeClass('inativo');
			}
		},
		onSlideNext: function(slider){
			jQuery('.depoimentos-completos .depoimento.ativo').removeClass('ativo').next().addClass('ativo');
			jQuery('.bx-prev').removeClass('inativo');
			jQuery('.foto.ativo').next().addClass('ativo');			
			jQuery('.foto.ativo').prev().removeClass('ativo');
			
			if ( 73 == jQuery('.foto.ativo').attr('data-foto-id') ) {
				jQuery('.bx-next').addClass('inativo');
			} else {
				jQuery('.bx-next').removeClass('inativo');
			}
		}
	});
	
 	var lastAnimation = 0;
	var animationTime = 800; // in ms
	var quietPeriod = 100; // in ms, time after animation to ignore mousescroll	

	function scrollThis(event, delta, deltaX, deltaY) {
	    var timeNow = new Date().getTime();
	
	    // change this to deltaX/deltaY depending on which
	    // scrolling dir you want to capture
	    deltaOfInterest = deltaY;
	
	    if (deltaOfInterest == 0) {
	        // Uncomment if you want to use deltaX
	        // event.preventDefault();
	        return;
	    }
	
	    // Cancel scroll if currently animating or within quiet period
	    if(timeNow - lastAnimation < quietPeriod + animationTime) {
	        event.preventDefault();
	        return;
	    }
	
	    if (deltaOfInterest < 0) {
	        if ($('.foto.ativo').next().length) {
	            lastAnimation = timeNow;
		        jQuery('.bx-next').trigger('click');
				return false;	
	        }
	    } else {
	        if ($('.foto.ativo').prev().length) {
	            lastAnimation = timeNow;
		        jQuery('.bx-prev').trigger('click');
				return false;	
	        }
	    }
	}
	
	jQuery('.bx-viewport').mousewheel(scrollThis);
	

	jQuery('.ler-na-integra').click(function(e){
		e.preventDefault();
		jQuery('.depoimentos-expanded').addClass('show');
		jQuery('.depoimentos-resumidos').css('opacity', 0);
		
	});

	jQuery('.ler-na-integra').each(function(){
		var slide_number = jQuery(this).attr('href');
		var slide_to_go = parseFloat(slide_number) - parseFloat(1);
	
			
		jQuery(this).click(function(e){
			e.preventDefault();
			jQuery('.foto').removeClass('ativo');
			jQuery('.depoimento').removeClass('ativo');
			carrossel.goToSlide(slide_to_go);
			jQuery('.foto[data-foto-id="' + ( parseFloat(slide_number) + parseFloat(2) ) + '"]').addClass('ativo');
			jQuery('.foto[data-foto-id="3"').find('.cantoneira-left').show();
			jQuery('.foto[data-foto-id="3"').find('.cantoneira-right').show();
			jQuery('.depoimento[data-depoimento-completo-id="' + ( parseFloat(slide_number) + parseFloat(2) ) + '"]').addClass('ativo');
			if ( slide_to_go > 0 ) {
				jQuery('.bx-prev').removeClass('inativo');
			}
			if ( slide_to_go == 74 ) {
				jQuery('.bx-next').addClass('inativo');
			}
		});
	});	
	
	jQuery('.depoimentos-expanded .close').click(function(){
		jQuery('.depoimentos-expanded').removeClass('show');	
		jQuery('.depoimentos-resumidos').css('opacity', 1);
	});

	jQuery(window).on('scroll', function(){
		if ( jQuery(window).scrollTop() > 30 ) {
			jQuery('.secao-pagina.intro .conteudo .before').stop().animate({
				'top': 0,
				'bottom': -75
			}, 500);
			jQuery('.secao-pagina.intro .conteudo .after').stop().animate({
				'top': -75,
				'bottom': 0
			}, 500);
		} else {
			jQuery('.secao-pagina.intro .conteudo .before').stop().animate({
				'top': -75,
				'bottom': 0
			}, 500);
			jQuery('.secao-pagina.intro .conteudo .after').stop().animate({
				'top': 0,
				'bottom': -75
			}, 500);
		}
	});
});

jQuery(window).on('load', function(){
	jQuery('.loading').fadeOut('slow');
	
	jQuery('.secao-pagina.intro .conteudo .before, .secao-pagina.intro .conteudo .after').stop().animate({
		'opacity': 1
	}, 500);
	
	jQuery('.simple-depoimentos-slider').flexslider({
		selector: '.slides > .slide',
		animation: 'slide',
		direction: 'vertical',
		customDirectionNav: jQuery('.custom-navigation a'),	
		controlNav: false,
		slideshow: true,
		slideshowSpeed: 6000,
		mousewheel: true,
		after: function() {
			var slide_ativo = jQuery('.slide.flex-active-slide');
			jQuery('.slider-75-anos .ponto').removeClass('flex-active flex-active-slide');
			jQuery('.slider-75-anos .ponto[ponto-id = ' + slide_ativo.data('depoimento-id') + ']').addClass('flex-active flex-active-slide');
		}
	});	

    jQuery('.slider-75-anos').flexslider({
		selector: '.pontos > .ponto',
        manualControls: '.ponto',
        controlsContainer: '.pontos',
        sync: '.simple-depoimentos-slider',
        directionNav: false,
        slideshow: false
    });
});