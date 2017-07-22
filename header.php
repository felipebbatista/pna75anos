<?php 
    global $post;
?>
<!DOCTYPE html>
<!--[if lt IE 7]>
<html id="ie6" class="no-js lt-ie9 lt-ie8 lt-ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 7]>
<html id="ie7" class="no-js lt-ie9 lt-ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html id="ie8" class="no-js lt-ie9" <?php language_attributes(); ?>>
<![endif]-->
<!--[if gt IE 8]>
<html class="no-js" <?php language_attributes(); ?>>
<![endif]-->
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="format-detection" content="telephone=no">
    <meta name="author" content="Felipe Batista - felipe@felipebatista.net" />
    <link rel="Shortcut Icon" href="<?php bloginfo( 'template_url' ); ?>/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" href="<?php bloginfo( 'template_url' ); ?>/icon-iphone.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="<?php bloginfo( 'template_url' ); ?>/icon-ipad.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="<?php bloginfo( 'template_url' ); ?>/icon-iphone4.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="<?php bloginfo( 'template_url' ); ?>/icon-ipad3.png" />
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
    <title><?php bloginfo( 'name' ); ?> | <?php bloginfo( 'description' ); ?></title>
    <?php if ( is_home() ) { ?>
        <meta property="og:site_name" content="<?php bloginfo('name'); ?>" />
        <meta property="og:url" content="<?php bloginfo('url'); ?>" />
        <meta property="og:title" content="<?php bloginfo('name'); ?>" />
        <meta property="og:description" content="<?php bloginfo('description'); ?>" />
        <meta property="og:image" content="<?php bloginfo('template_url'); ?>/screenshot.png" />    
    <?php } else { ?>
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="<?php bloginfo('name'); ?>" />
        <meta property="og:url" content="<?php echo get_permalink($post->ID); ?>" />
        <meta property="og:title" content="<?php echo $post->post_title; ?>" />
        <meta property="og:description" content="<?php echo strip_tags( substr($post->post_content, 0, 160) ); ?>..." />
        <meta property="og:image" content="<?php echo get_field('imagem_de_topo', $post->ID); ?>" />    
    <?php } ?>

    <!-- Set the viewport width to device width for mobile -->
    <link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
    <link rel="stylesheet" href="<?php bloginfo('template_url') ?>/css/foundation.css">
    <link rel="stylesheet" href="<?php bloginfo('template_url') ?>/css/app.css">
    <link rel="stylesheet" href="<?php bloginfo('template_url') ?>/css/75anos.css">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>