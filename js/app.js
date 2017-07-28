$(document).foundation();

jQuery(document).ready(function(){
	jQuery('.parallax-window').parallaxBackground();	

	jQuery(window).on('scroll', function(){
		if ( jQuery(window).scrollTop() > 50 ) {
			jQuery('.secao-pagina.intro .conteudo .before').stop().animate({
				'top': 0,
				'bottom': -75
			}, 1000);
			jQuery('.secao-pagina.intro .conteudo .after').stop().animate({
				'top': -75,
				'bottom': 0
			}, 1000);
		} else {
			jQuery('.secao-pagina.intro .conteudo .before').stop().animate({
				'top': -75,
				'bottom': 0
			}, 1000);
			jQuery('.secao-pagina.intro .conteudo .after').stop().animate({
				'top': 0,
				'bottom': -75
			}, 1000);
		}
	});
});

jQuery(window).on('load', function(){
	jQuery('.secao-pagina.intro .conteudo .before, .secao-pagina.intro .conteudo .after').stop().animate({
		'opacity': 1
	}, 2000);
});
