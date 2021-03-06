<?php 
	global $is_IE;
	get_header(); 
	if ( 'en' == ICL_LANGUAGE_CODE ) {
		$pagina_inicio = get_page_by_path('start');
		$pagina_depoimentos = get_page_by_path('testimonials');
		$depoimentos = get_posts('posts_per_page=79&orderby=menu_order');
		$depoimentos_resumos = get_posts('posts_per_page=79&orderby=menu_order&exclude=753,750,950,949');
		$pagina_video = get_page_by_path('video_en');
	} else {
		$pagina_inicio = get_page_by_path('inicio');
		$pagina_depoimentos = get_page_by_path('depoimentos');
		$depoimentos = get_posts('posts_per_page=79&orderby=menu_order');
		$depoimentos_resumos = get_posts('posts_per_page=79&orderby=menu_order&exclude=443,445,447,449');
		$pagina_video = get_page_by_path('video');
	}
	$redirecionamento = get_field('redirecionamento', $pagina_inicio->ID);
	$citacao = get_field('citacao', $pagina_inicio->ID);
	$referencia = get_field('referencia', $pagina_inicio->ID);
	$titulo_depoimentos = get_field('titulo', $pagina_depoimentos->ID);
	$texto_de_apoio = get_field('texto_de_apoio', $pagina_depoimentos->ID);
	$titulo_video = get_field('titulo', $pagina_video->ID);
	$video = get_field('video', $pagina_video->ID);
?>

<section class="intro secao-pagina">
	<div class="header">
	    <div class="grid-container">
	        <div class="grid-x">
	            <div class="small-12 medium-8 cell">
	                <a class="logo" href="<?php bloginfo('url'); ?>">
	                    <img src="<?php bloginfo('template_url'); ?>/imgs/logo.png" alt="Pinheiro Neto Advogados" />
	                </a>
	            </div>
	            <div class="small-12 medium-4 cell">
	                <a class="linkedin" href="https://br.linkedin.com/company/pinheiro-neto-advogados" target="_blank">Linkedin</a>
		            <div class="seletor-de-idiomas">
		            	<?php icl_post_languages(); ?>
		            </div>
		            <?php 
			            if ( $redirecionamento ) {
				            echo '<a class="retornar-ao-site" href="' . $redirecionamento . '">' . __('< Retorne ao site', 'pna') . '</a>';
			            }
		            ?>
	            </div>
	        </div>        
	    </div>        
	</div>
	<div class="centraliza">
	    <div class="grid-container">
	        <div class="grid-x">
	            <div class="small-12 medium-5 cell grow-767">
		            <?php
			            if ( 'en' == ICL_LANGUAGE_CODE ) {
				            include('animacao_en.php'); 
			            } else {
				            include('animacao.php'); 
			            }
			        ?>
	            </div>
	            <div class="small-12 medium-5 medium-offset-2 cell grow-767">
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
	<?php if ( $is_IE ) { ?>
		<div class="fullwidth-video">
			<video preload="auto" autoplay loop muted="">
				<source src="<?php bloginfo('template_url'); ?>/imgs/PNA_VideoHotsiteBackground.mp4" type="video/mp4">
				<source src="<?php bloginfo('template_url'); ?>/imgs/PNA_VideoHotsiteBackground.webm" type="video/webm">
			</video>
		</div>
	<?php } else { ?>
		<video class="bv-video"></video>
	<?php } ?>
</section>
<section class="secao-pagina depoimentos">
	<div class="depoimentos-before"><span class="before"></span></div>
	<section class="depoimentos-expanded">
		<div class="grid-container depoimentos-mobile">
			<div class="small-12 cell">
				<h2><?php echo $titulo_depoimentos; ?></h2>
				<div class="container-frase">
					<p class="frase-inferior-depoimentos"><?php echo $texto_de_apoio; ?></p>
				</div>
				<div class="carrossel-depoimentos-mobile">
					<span class="close">X</span>
					<ul class="bxslider-mobile">
						<?php
							$count = 1;
							foreach( $depoimentos_resumos as $depoimento )  {
								$count_class = '';
								if ( 1 == $count ) {
									$count_class = ' first';
								}
								
								$foto = get_field('foto', $depoimento->ID);
								$cargo = get_field('cargo', $depoimento->ID);
								$ano = get_field('ano', $depoimento->ID);
								echo '
									<li class="slide' . $count_class . ' ' . $depoimento->post_name . '" data-slide-mobile-id="' . $count .  '">
										<figure>
											<img src="' . ( $foto ? $foto : 'http://felipebatista.net/pna/pna75anos/wp-content/uploads/2017/08/BNO.jpg' ) . '" alt="' . $depoimento->post_title . '" />
											<div class="nome-ano-cargo">
												<span class="nome">' . $depoimento->post_title . '</span>
												<span class="cargo">' . $cargo . '</span>
												<span class="ano">' . __('Conosco desde', 'pna') . ' ' . $ano . '</span>
											</div>
										</figure>
										<div class="texto-depoimento">' . apply_filters('the_content', $depoimento->post_content) . '</div>
									</li>
								';
								$count++;
							}
						?>
					</ul>
				</div>
			</div>
		</div>
		<div class="grid-container depoimentos-desktop">
			<div class="grid-x">
				<div class="small-12 medium-7 cell">
					<h2>
						<?php echo $titulo_depoimentos; ?>
					</h2>
					<div class="container-depoimentos-completos">
						<div class="slider-depoimentos-completos">
							<div class="depoimentos-completos">
								<?php
									$count = 1;
									foreach( $depoimentos as $depoimento )  {
										$count_class = '';
										if ( 2 == $count || 1 == $count || 78 == $count || 79 == $count ) {
											$count_class = ' display-none';
										} elseif ( 3 == $count ) {
											$count_class = ' ativo';
										}
										
										echo '
											<div class="depoimento scroll-pane' . $count_class . ' ' . $depoimento->post_name . '" data-depoimento-completo-id="' . $count .  '">
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
					<div class="grid-x padding-top-30">
						<div class="small-12 medium-7 cell text-right">
							<div class="container-frase">
								<p class="frase-inferior-depoimentos"><?php echo $texto_de_apoio; ?></p>
							</div>
						</div>
						<div class="small-12 medium-5 cell">
							<div class="container-75-small">
								<div class="pontos-small">
									<?php
										$count = 1;
										foreach ( $depoimentos as $depoimento )  {
											$count_class = '';
											if ( 76 == $count || 77 == $count || 78 == $count || 79 == $count ) {
												$count_class = ' display-none';
											}
											
											echo '<div class="ponto-small p' . $count . $count_class . '" ponto-small-id="' . $count .  '"></div>';
											$count++;
										}
									?>
								</div>
							</div>
						</div>						
					</div>
				</div>
				<div class="small-12 medium-5 cell">
					<div class="container-carrossel-depoimentos">
						<span class="close">X</span>
						<div class="carrossel-depoimentos-completos">
							<ul class="bxslider">
								<?php
									$count = 1;
									foreach( $depoimentos as $depoimento )  {
										$count_class = '';
										if ( 3 == $count ) {
											$count_class = ' ativo first';
										} elseif ( 77 == $count ) {
											$count_class = ' last';
										}
										
										$foto = get_field('foto', $depoimento->ID);
										$cargo = get_field('cargo', $depoimento->ID);
										$ano = get_field('ano', $depoimento->ID);
										echo '
											<li class="foto' . $count_class . ' ' . $depoimento->post_name . '" data-foto-id="' . $count .  '">
												<span class="cantoneira-left"></span>
												<span class="cantoneira-right"></span>
												<img src="' . ( $foto ? $foto : 'http://felipebatista.net/pna/pna75anos/wp-content/uploads/2017/08/BNO.jpg' ) . '" alt="' . $depoimento->post_title . '" />
												<div class="nome-ano-cargo">
													<span class="nome">' . $depoimento->post_title . '</span>
													<span class="cargo">' . $cargo . '</span>
													<span class="ano">' . __('Conosco desde', 'pna') . ' ' . $ano . '</span>
												</div>
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
	<section class="depoimentos-resumidos">
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
										$count_class = '';
										if ( 76 == $count || 77 == $count || 78 == $count || 79 == $count ) {
											$count_class = ' display-none';
										}
										
										echo '<div class="ponto p' . $count . $count_class . '" ponto-id="' . $count .  '"></div>';
										$count++;
									}
								?>
							</div>
						</div>
					</section>
				</div>
				<div class="small-12 medium-5 cell grow">
					<div class="slider-container">
						<div class="simple-depoimentos-slider">
							<div class="slides">
								<?php
									$count = 1;
									foreach( $depoimentos_resumos as $depoimento )  {
										$count_class = '';
										if ( 76 == $count || 77 == $count || 78 == $count || 79 == $count ) {
											$count_class = ' display-none';
										}
										
										$resumo_do_depoimento = $depoimento->post_excerpt;
										echo '
											<div class="slide depoimento-' . $count . $count_class . '" data-depoimento-id="' . $count .  '">
												<span class="conteudo">
													<span class="table-cell">
														<a class="ler-na-integra" href="' . $count . '">
														<span class="texto">“' . $resumo_do_depoimento . '”</span>
														<span class="autor">— ' . $depoimento->post_title . '</span>
														<span class="ler-na-integra-button">[' . __('ler na íntegra', 'pna') . ']</a>
														</a>
													</span>
												</span>
											</div>
										';
										$count++;
									}
								?>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="grid-container">
	        <div class="grid-x">
	            <div class="small-12 medium-6 cell grow">
					<section class="conteudo">
						<p><?php echo apply_filters('the_content', $pagina_depoimentos->post_content); ?></p>
					</section>
	            </div>
	        </div>
		</div>
	</section>
</section>
<section class="secao-pagina video">
    <div class="grid-container">
        <div class="grid-x">
            <div class="small-12 cell">
	            <h2><?php echo $titulo_video; ?></h2>				
				<div class="responsive-embed">					
					<iframe width="420" height="315" src="https://www.youtube.com/embed/<?php echo $video; ?>?rel=0" frameborder="0" allowfullscreen></iframe>
				</div>	
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>

<script type="text/javascript">
	const backgroundVideo = new BackgroundVideo('.bv-video', {
		src: [
			'<?php bloginfo('template_url'); ?>/imgs/PNA_VideoHotsiteBackground.mp4',
			'<?php bloginfo('template_url'); ?>/imgs/PNA_VideoHotsiteBackground.webm'
		],
		parallax: {
			effect: 1.2
		},      
		onReady: function () {
			const vidParent = document.querySelector('.' + this.bvVideoWrapClass);
			vidParent.classList.add('bv-video-wrap--ready');
		}
	});
</script>
