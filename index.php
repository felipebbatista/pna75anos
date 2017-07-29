<?php 
	get_header(); 
	$pagina_inicio = get_page_by_path('inicio');
	$pagina_depoimentos = get_page_by_path('depoimentos');
	$depoimentos = get_posts('posts_per_page=75');
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
					<script>
						var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
						function init() {
							canvas = document.getElementById("canvas");
							anim_container = document.getElementById("animation_container");
							dom_overlay_container = document.getElementById("dom_overlay_container");
							var comp=AdobeAn.getComposition("8C4ED495067F4EAC8F21665D81C556E6");
							var lib=comp.getLibrary();
							handleComplete({},comp);
						}
						function handleComplete(evt,comp) {
							//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
							var lib=comp.getLibrary();
							var ss=comp.getSpriteSheet();
							canvas.style.display = 'block';
							exportRoot = new lib.Semtítulo2();
							stage = new lib.Stage(canvas);
							stage.addChild(exportRoot);	
							//Registers the "tick" event listener.
							fnStartAnimation = function() {
								createjs.Ticker.setFPS(lib.properties.fps);
								createjs.Ticker.addEventListener("tick", stage);
							}	    
							//Code to support hidpi screens and responsive scaling.
							function makeResponsive(isResp, respDim, isScale, scaleType) {		
								var lastW, lastH, lastS=1;		
								window.addEventListener('resize', resizeCanvas);		
								resizeCanvas();		
								function resizeCanvas() {			
									var w = lib.properties.width, h = lib.properties.height;			
									var iw = window.innerWidth, ih=window.innerHeight;			
									var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
									if(isResp) {                
										if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
											sRatio = lastS;                
										}				
										else if(!isScale) {					
											if(iw<w || ih<h)						
												sRatio = Math.min(xRatio, yRatio);				
										}				
										else if(scaleType==1) {					
											sRatio = Math.min(xRatio, yRatio);				
										}				
										else if(scaleType==2) {					
											sRatio = Math.max(xRatio, yRatio);				
										}			
									}			
									canvas.width = w*pRatio*sRatio;			
									canvas.height = h*pRatio*sRatio;
									canvas.style.width = anim_container.style.width = dom_overlay_container.style.width = w*sRatio+'px';				
									canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
									stage.scaleX = pRatio*sRatio;			
									stage.scaleY = pRatio*sRatio;			
									lastW = iw; lastH = ih; lastS = sRatio;		
								}
							}
							makeResponsive(false,'both',false,1);	
							AdobeAn.compositionLoaded(lib.properties.id);
							fnStartAnimation();
						}
					</script>
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
				<div class="small-12 cell">
					<h2><?php echo $titulo_depoimentos; ?></h2>
				</div>
			</div>
		</div>
		<div class="grid-container">
			<div class="grid-x">
				<div class="small-12 medium-7 cell">
					<div class="container-depoimentos-completos">
						<div class="depoimentos-completos scroll-pane">
							<div class="depoimento">
								<p>
									Nos próximos anos, assistiremos à automatização de certas atribuições do advogado. De auditorias à elaboração de minutas e exame de jurisprudência, a inteligência artificial executará diversos trabalhos em menos tempo e com custo reduzido. Se, de um lado, essa mecanização prejudicará a percepção do valor do trabalho jurídico pelo cliente, de outro, ela ajudará a resgatar a pessoalidade nas relações cliente-advogado. Os valores individuais, a cultura, a sensibilidade e a capacidade de improviso diante do complexo e do imprevisível serão o novo selo dos grandes advogados. Mais do que profissionais tecnicamente capacitados, os clientes buscarão pessoas aptas a demonstrar empatia e a superar a análise robotizada de questões jurídicas. 								
								</p>
								<p>
									Nos próximos anos, assistiremos à automatização de certas atribuições do advogado. De auditorias à elaboração de minutas e exame de jurisprudência, a inteligência artificial executará diversos trabalhos em menos tempo e com custo reduzido. Se, de um lado, essa mecanização prejudicará a percepção do valor do trabalho jurídico pelo cliente, de outro, ela ajudará a resgatar a pessoalidade nas relações cliente-advogado. Os valores individuais, a cultura, a sensibilidade e a capacidade de improviso diante do complexo e do imprevisível serão o novo selo dos grandes advogados. Mais do que profissionais tecnicamente capacitados, os clientes buscarão pessoas aptas a demonstrar empatia e a superar a análise robotizada de questões jurídicas. 								
								</p>
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
				<div class="small-12 medium-5 cell"></div>
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
									echo '<div class="ponto p' . $count .  '" depoimento-id="' . $count .  '"></div>';
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
									$resumo_do_depoimento = get_field('resumo_do_depoimento', $depoimento->ID);
									echo '
										<div class="slide depoimento-' . $count .  '">
											<span class="conteudo">
												<span class="texto">“' . $resumo_do_depoimento . '”</span>
												<span class="autor">— ' . $depoimento->post_title . '</span>
												<a class="ler-na-integra" href="">[' . __('ler na íntegra', 'pna') . ']</a>
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