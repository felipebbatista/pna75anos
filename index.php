<?php 
	get_header(); 
	$pagina_inicio = get_page_by_path('inicio');
	$pagina_depoimentos = get_page_by_path('depoimentos');
	$pagina_video = get_page_by_path('video');
	$citacao = get_field('citacao', $pagina_inicio->ID);
	$referencia = get_field('referencia', $pagina_inicio->ID);
	$titulo_depoimentos = get_field('titulo', $pagina_depoimentos->ID);
	$titulo_video = get_field('titulo', $pagina_video->ID);
?>

<!--<section class="parallax-window intro secao-pagina" data-parallax-direction="down" data-parallax-bg-size="auto" data-parallax-speed="1" data-parallax-bg-image="<?php bloginfo('template_url'); ?>/imgs/bg-header.jpg">-->
<section class="parallax-window intro secao-pagina">
    <div class="grid-container">
        <div class="grid-x">
            <div class="small-9 cell">
                <a class="logo" href="#">
                    <img src="<?php bloginfo('template_url'); ?>/imgs/logo.png" alt="Pinheiro Neto Advogados" />
                </a>
            </div>
            <div class="small-1 cell">
                <a class="linkedin" href="#" target="_blank">
                    <img src="<?php bloginfo('template_url'); ?>/imgs/linkedin.png" alt="Linkedin" />
                </a>
            </div>
        </div>        
    </div>        
	<div class="centraliza">
	    <div class="grid-container">
	        <div class="grid-x">
	            <div class="small-12 medium-5 cell">A</div>
	            <div class="small-12 medium-5 medium-offset-2 cell">
		            <section class="conteudo">
			            <span class="before"></span>
			            <p><?php echo $pagina_inicio->post_content; ?></p>
			            <span class="after"></span>
		            </section>
	            </div>
	        </div>        
	    </div>
	</div>
	<div class="container-citacao">
	    <div class="citacao">
		    <p class="frase">“<?php echo $citacao; ?>”<p>
			<p class="referencia">O Advogado, Rodrigo Leal Rodrigues, 2004</p>
	    </div>
	</div>  
</section>
<section class="secao-pagina depoimentos">
	<div class="depoimentos-before"><span class="before"></span></div>
	<div class="grid-container">
		<div class="small-12 cell">
			<h2><?php echo $titulo_depoimentos; ?></h2>
			<section class="container-75-anos">
				<div class="ponto p1"></div>
				<div class="ponto p2"></div>
				<div class="ponto p3"></div>
				<div class="ponto p4"></div>
				<div class="ponto p5"></div>
				<div class="ponto p6"></div>
				<div class="ponto p7"></div>
				<div class="ponto p8"></div>
				<div class="ponto p9"></div>
				<div class="ponto p10"></div>
				<div class="ponto p11"></div>
				<div class="ponto p12"></div>
				<div class="ponto p13"></div>
				<div class="ponto p14"></div>
				<div class="ponto p15"></div>
				<div class="ponto p16"></div>
				<div class="ponto p17"></div>
				<div class="ponto p18"></div>
				<div class="ponto p19"></div>
				<div class="ponto p20"></div>
				<div class="ponto p21"></div>
				<div class="ponto p22"></div>
				<div class="ponto p23"></div>
				<div class="ponto p24"></div>
				<div class="ponto p25"></div>
				<div class="ponto p26"></div>
				<div class="ponto p27"></div>
				<div class="ponto p28"></div>
				<div class="ponto p29"></div>
				<div class="ponto p30"></div>
				<div class="ponto p31"></div>
				<div class="ponto p32"></div>
				<div class="ponto p33"></div>
				<div class="ponto p34"></div>
				<div class="ponto p35"></div>
				<div class="ponto p36"></div>
				<div class="ponto p37"></div>
				<div class="ponto p38"></div>
				<div class="ponto p39"></div>
				<div class="ponto p40"></div>
				<div class="ponto p41"></div>
				<div class="ponto p42"></div>
				<div class="ponto p43"></div>
				<div class="ponto p44"></div>
				<div class="ponto p45"></div>
				<div class="ponto p46"></div>
				<div class="ponto p47"></div>
				<div class="ponto p48"></div>
				<div class="ponto p49"></div>
				<div class="ponto p50"></div>
				<div class="ponto p51"></div>
				<div class="ponto p52"></div>
				<div class="ponto p53"></div>
				<div class="ponto p54"></div>
				<div class="ponto p55"></div>
				<div class="ponto p56"></div>
				<div class="ponto p57"></div>
				<div class="ponto p58"></div>
				<div class="ponto p59"></div>
				<div class="ponto p60"></div>
				<div class="ponto p61"></div>
				<div class="ponto p62"></div>
				<div class="ponto p63"></div>
				<div class="ponto p64"></div>
				<div class="ponto p65"></div>
				<div class="ponto p66"></div>
				<div class="ponto p67"></div>
				<div class="ponto p68"></div>
				<div class="ponto p69"></div>
				<div class="ponto p70"></div>
				<div class="ponto p71"></div>
				<div class="ponto p72"></div>
				<div class="ponto p73"></div>
				<div class="ponto p74"></div>
				<div class="ponto p75"></div>
			</section>
	        <div class="grid-x">
	            <div class="small-12 medium-6 cell">
					<section class="conteudo">
						<p><?php echo $pagina_depoimentos->post_content; ?></p>
					</section>
	            </div>
	        </div>
		</div>
	</div>
</section>
<section class="secao-pagina video">
    <div class="grid-container">
        <div class="grid-x">
            <div class="small-12 cell">
	            <h2><?php echo $titulo_video; ?></h2>
				<div class="responsive-embed">
					<iframe width="420" height="315" src="https://www.youtube.com/embed/R3AKlscrjmQ" frameborder="0" allowfullscreen></iframe>
				</div>	
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
<script>
	jQuery('.parallax-window').parallax({imageSrc: '<?php bloginfo('template_url'); ?>/imgs/bg-header.jpg'});
</script>