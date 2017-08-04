<?php 
	get_header(); 
	$pagina_inicio = get_page_by_path('inicio');
	$pagina_depoimentos = get_page_by_path('depoimentos');
	$depoimentos = get_posts('posts_per_page=75&order=ASC');
	$pagina_video = get_page_by_path('video');
	$citacao = get_field('citacao', $pagina_inicio->ID);
	$referencia = get_field('referencia', $pagina_inicio->ID);
	$titulo_depoimentos = get_field('titulo', $pagina_depoimentos->ID);
	$titulo_video = get_field('titulo', $pagina_video->ID);
?>

<section class="parallax-window intro secao-pagina">
    <div class="grid-container">
        <div class="grid-x">
            <div class="small-11 cell">
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
	            <div class="small-12 medium-5 cell">
					<script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
					<div id="animation_container" style="background-color: transparent; width:585px; height:390px">
						<canvas id="canvas" width="585" height="390" style="position: absolute; display: none; background:transparent;"></canvas>
						<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:585px; height:390px; position: absolute; left: 0px; top: 0px; display: none;">
						</div>
					</div>
	            </div>
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
			<p class="referencia"><?php echo $referencia; ?></p>
	    </div>
	</div>  
</section>
<section class="secao-pagina depoimentos">
	<div class="depoimentos-before"><span class="before"></span></div>
	<section class="depoimentos-expanded">
		<div class="grid-container">
			<div class="grid-x">
				<div class="small-12 medium-7 cell">
					<h2><?php echo $titulo_depoimentos; ?></h2>
					<div class="container-depoimentos-completos">
						<div class="slider-depoimentos-completos">
							<div class="depoimentos-completos">
								<?php
									$count = 1;
									foreach( $depoimentos as $depoimento )  {
										echo '
											<div class="depoimento scroll-pane' . ( '3' == $count ? ' ativo' : '' ) . ' ' . $depoimento->post_name . '" data-depoimento-completo-id="' . $count .  '">
												<div class="texto">' 
													. ( $depoimento->post_content ? apply_filters('the_content', $depoimento->post_content) : $depoimento->post_name . ': ESTE DEPOIMENTO NÃO TEM CONTEÚDO' ) . '
												</div>
											</div>
										';
										$count++;
									}
								?>
							</div>
						</div>
					</div>
					<div class="grid-x">
						<div class="small-12 medium-7 cell text-right">
							<p class="frase-inferior-depoimentos">Estimulamos nosso time a olhar além e pensar o que mudará nos próximos 75 anos – no Direito, na advocacia, no ambiente de negócios etc. Selecionamos 75 pensamentos e convidamos você a navegar por essas ideias.</p>
						</div>
						<div class="small-12 medium-5 cell"></div>						
					</div>
				</div>
				<div class="small-12 medium-5 cell">
					<div class="container-carrossel-depoimentos">
						<div class="carrossel-depoimentos-completos">
							<span class="cantoneira-left"></span>
							<span class="cantoneira-right"></span>
							<ul class="bxslider">
								<?php
									$count = 1;
									foreach( $depoimentos as $depoimento )  {
										$foto = get_field('foto', $depoimento->ID);
										$cargo = get_field('cargo', $depoimento->ID);
										$ano = get_field('ano', $depoimento->ID);
										echo '
											<li class="foto' . ( '3' == $count ? ' ativo' : '' ) . ' ' . $depoimento->post_name . '" data-foto-id="' . $count .  '">
												<img src="http://felipebatista.net/pna/pna75anos/wp-content/uploads/2017/07/alexandre-bertoldi.jpg" alt="' . $depoimento->post_title . '" />
											</li>
										';
										$count++;
									}
								?>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<div class="grid-container">
		<div class="grid-x">
			<div class="small-12 cell">
				<h2><?php echo $titulo_depoimentos; ?></h2>
			</div>
		</div>
	</div>
	<div class="grid-container">
		<div class="grid-x">
			<div class="small-12 medium-7 cell">
				<section class="container-75-anos">
					<div class="slider-75-anos">
						<div class="pontos">
							<?php
								$count = 1;
								foreach( $depoimentos as $depoimento )  {
									echo '<div class="ponto p' . $count .  '" ponto-id="' . $count .  '"></div>';
									$count++;
								}
							?>
						</div>
					</div>
				</section>
			</div>
			<div class="small-12 medium-5 cell">
				<div class="slider-container">
					<div class="simple-depoimentos-slider">
						<div class="slides">
							<?php
								$count = 1;
								foreach( $depoimentos as $depoimento )  {
									$resumo_do_depoimento = $depoimento->post_excerpt;
									echo '
										<div class="slide depoimento-' . $count .  '" data-depoimento-id="' . $count .  '">
											<span class="conteudo">
												<span class="texto">“' . $resumo_do_depoimento . '”</span>
												<span class="autor">— ' . $depoimento->post_title . '</span>
												<a class="ler-na-integra" data-goto-integra-id="' . $count .  '" href="">[' . __('ler na íntegra', 'pna') . ']</a>
											</span>
										</div>
									';
									$count++;
								}
							?>
					</div>
					<div class="custom-navigation">
						<a href="#" class="flex-prev"><img src="<?php bloginfo('template_url'); ?>/imgs/slide-up.png" alt="Prev" /></a>
						<a href="#" class="flex-next"><img src="<?php bloginfo('template_url'); ?>/imgs/slide-down.png" alt="next" /></a>
					</div>		            
				</div>
			</div>
		</div>
	</div>
	<div class="grid-container">
        <div class="grid-x">
            <div class="small-12 medium-6 cell">
				<section class="conteudo">
					<p><?php echo $pagina_depoimentos->post_content; ?></p>
				</section>
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