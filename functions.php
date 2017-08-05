<?php

// desabilita a barra do admin no frontend
add_filter( 'show_admin_bar', '__return_false' );

// remove a versao do WP no header
remove_action('wp_head', 'wp_generator');

// adiciona excerpt às páginas
add_post_type_support( 'page', 'excerpt' );

// sobrepoe o numero de palavras padrao para o excerpt
function new_excerpt_length($length) {
	return 14;
}
add_filter('excerpt_length', 'new_excerpt_length');

// sobrepoe o read more padrao do excerpt
function new_excerpt_more($more) {
    global $post;
    return '...';
}
add_filter('excerpt_more', 'new_excerpt_more');

// identifica se o browser utilizado é o IE
function using_ie() {
    $u_agent = $_SERVER['HTTP_USER_AGENT'];
    $ub = False;
    if(preg_match('/MSIE/i',$u_agent))
    {
        $ub = True;
    }

    return $ub;
}

add_filter('body_class','my_class_names');
function my_class_names($classes) {
	// add 'class-name' to the $classes array
	if ( ! is_home() )
        $classes[] = 'internas';
	// return the $classes array
    return $classes;
}

add_filter( 'wp_head' , 'ie_head' );
function ie_head() {
    echo '
        <!--[if lte IE 9]>
        <link rel="stylesheet" href="' . get_stylesheet_directory_uri() . '/css/ie9.css">
        <![endif]-->

        <!--[if lt IE 9]>
        <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <link rel="stylesheet" href="' . get_stylesheet_directory_uri() . '/css/ie8grid.css">
        <link rel="stylesheet" href="' . get_stylesheet_directory_uri() . '/css/ie.css">
        <style type="text/css" media="screen">
        .pie {
                behavior: url("' . get_stylesheet_directory_uri() . '/PIE.php");
                position: relative;
                zoom: 1;
        }
        </style>
        <![endif]-->
    ';
}

function icl_post_languages(){
	$languages = icl_get_languages('skip_missing=1');
	if ( 1 < count($languages) ) {
		foreach($languages as $l) {
			if ( 'pt-br' == $l['language_code'] ) {
				$idioma = 'pt';
			} else {
				$idioma = $l['language_code'];
			}
			if( ! $l['active'] ) {
				$langs[] = '<a href="' . $l['url'] . '">' . $l['native_name'] . '</a>';
			}
		}
		echo join(', ', $langs);
	}
}

function my_init_method() {
    if ( !is_admin() ) {
		// não carrega o jquery padrão do WP
		wp_deregister_script('jquery');
		// carrega meu jQuery e o resto dos scripts
        wp_register_script( 'jquery', get_bloginfo('template_directory') . '/js/jquery.js', false, false, true);
        wp_enqueue_script( 'jquery' );
		wp_register_script('foundation', get_bloginfo('template_directory') . '/js/foundation.js', array('jquery'), false, true );
		wp_enqueue_script('foundation');
		wp_register_script('plugins', get_bloginfo('template_directory') . '/js/plugins.js', array('jquery', 'foundation'), false, true );
		wp_enqueue_script('plugins');
		wp_register_script('app', get_bloginfo('template_directory') . '/js/app.js', array('jquery', 'foundation', 'plugins'), false, true );
		wp_enqueue_script('app');
    }
}

add_action('init', 'my_init_method');