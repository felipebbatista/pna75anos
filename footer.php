<footer>
    <div class="grid-container">
        <div class="grid-x">
            <div class="small-12 medium-3 cell grow-767">
                <a class="logo" href="<?php bloginfo('url'); ?>">
                    <img src="<?php bloginfo('template_url'); ?>/imgs/logo.png" alt="Pinheiro Neto Advogados" />
                </a>
            </div>
            <div class="small-12 medium-1 cell"></div>
            <div class="small-12 medium-2 cell grow-767">
	            <ul class="escritorio">
					<li class="cidade">SÃO PAULO</li>
					<li>Rua Hungria, 1100.<br>01455-906</li>
					<li><?php _e('Tel', 'pna'); ?>: +55 (11) 3247-8400</li>
					<li>Fax: +55 (11) 3247-8600</li>
					<?php 
						if ( 'en' == ICL_LANGUAGE_CODE ) {
							echo '<li>Brazil</li>';
						}
					?>
	            </ul>
            </div>
            <div class="small-12 medium-2 cell grow-767">
	            <ul class="escritorio">
					<li class="cidade">RIO DE JANEIRO</li>
					<li>Rua Humaitá, 275 - 16º andar.<br>22261-005</li>
					<li><?php _e('Tel', 'pna'); ?>: +55 (21) 2506-1600</li>
					<li>Fax: +55 (21) 2506-1660</li>
					<?php 
						if ( 'en' == ICL_LANGUAGE_CODE ) {
							echo '<li>Brazil</li>';
						}
					?>
	            </ul>
            </div>
            <div class="small-12 medium-2 cell grow-767">
	            <ul class="escritorio">
					<li class="cidade">BRASÍLIA</li>
					<li>SAFS, Qd. 2, Bloco B</li>
					<li>Ed. Via Office 3º andar. 70070-600</li>
					<li><?php _e('Tel', 'pna'); ?>: +55 (61) 3312-9400</li>
					<li>Fax: +55 (61) 3312-9444</li>
					<?php 
						if ( 'en' == ICL_LANGUAGE_CODE ) {
							echo '<li>Brazil</li>';
						}
					?>
	            </ul>
            </div>
            <div class="small-12 medium-2 cell grow-767">
				<a href="" target="_blank">www.pinheironeto.com.br</a>
				<span class="copyright">© Pinheiro Neto Advogados</span>
            </div>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>