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

$(document).foundation();

jQuery(document).ready(function(){
	jQuery('.scroll-pane').jScrollPane();
	
	jQuery('.bxslider').bxSlider({
		mode: 'vertical',
		minSlides: 5,
		maxSlides: 5,
		moveSlides: 1,
		pager: false,
		touchEnabled: false,
		infiniteLoop: false,
		onSlideBefore: function(){
			jQuery('.foto img').width(135);
		},
		onSlidePrev: function(){
			jQuery('.foto.ativo').prev().addClass('ativo');
			jQuery('.foto.ativo').next().removeClass('ativo');
			jQuery('.foto.ativo img').width(170);
			jQuery('.depoimentos-completos .depoimento.ativo').removeClass('ativo').prev().addClass('ativo');
		},
		onSlideNext: function(slider){
			jQuery('.foto.ativo').next().addClass('ativo');			
			jQuery('.foto.ativo').prev().removeClass('ativo');
			jQuery('.foto.ativo img').width(170);
			jQuery('.depoimentos-completos .depoimento.ativo').removeClass('ativo').next().addClass('ativo');
			jQuery('.bx-prev').css('opacity', 1);
		}
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
	jQuery('.secao-pagina.intro .conteudo .before, .secao-pagina.intro .conteudo .after').stop().animate({
		'opacity': 1
	}, 500);
	
	jQuery('.simple-depoimentos-slider').flexslider({
		selector: '.slides > .slide',
		animation: 'slide',
		direction: 'vertical',
		customDirectionNav: jQuery('.custom-navigation a'),	
		controlNav: false,
		slideshow: false,
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

//animacao da home
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAA683").s().p("AjgDhIAAnBIHBAAIAAHBgAh8B9ID5AAIAAj5Ij5AAg");
	this.shape.setTransform(22.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,45,45), null);


(lib.cima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAA683").s().p("AjgDhIAAnBIHBAAIAABkIldAAIAAFdg");
	this.shape.setTransform(22.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cima, new cjs.Rectangle(0,0,45,45), null);


// stage content:
(lib.Semtítulo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 4 Cópia (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_72 = new cjs.Graphics().p("AgbAcIAAg3IA3AAIAAA3g");
	var mask_graphics_73 = new cjs.Graphics().p("AkcDBIAAmAII5AAIAAGAg");
	var mask_graphics_74 = new cjs.Graphics().p("AoeFlIAArIIQ9AAIAALIg");
	var mask_graphics_75 = new cjs.Graphics().p("AsfIJIAAwRIY/AAIAAQRg");
	var mask_graphics_76 = new cjs.Graphics().p("AwgKtIAA1ZMAhBAAAIAAVZg");
	var mask_graphics_77 = new cjs.Graphics().p("A0iNSIAA6iMApFAAAIAAaig");
	var mask_graphics_78 = new cjs.Graphics().p("A4jP2IAA/qMAxHAAAIAAfqg");
	var mask_graphics_79 = new cjs.Graphics().p("A8kSaMAAAgkzMA5JAAAMAAAAkzg");
	var mask_graphics_80 = new cjs.Graphics().p("EggmAU+MAAAgp7MBBNAAAMAAAAp7g");
	var mask_graphics_81 = new cjs.Graphics().p("EgknAXjMAAAgvEMBJPAAAMAAAAvEg");
	var mask_graphics_169 = new cjs.Graphics().p("Egq1AeeMAAAg87MBVrAAAMAAAA87g");
	var mask_graphics_170 = new cjs.Graphics().p("EgliAauMAAAg1bMBLFAAAMAAAA1bg");
	var mask_graphics_171 = new cjs.Graphics().p("EggPAW+MAAAgt7MBAfAAAMAAAAt7g");
	var mask_graphics_172 = new cjs.Graphics().p("A67TNMAAAgmZMA13AAAMAAAAmZg");
	var mask_graphics_173 = new cjs.Graphics().p("A1oPdIAA+5MArRAAAIAAe5g");
	var mask_graphics_174 = new cjs.Graphics().p("AwVLtIAA3ZMAgrAAAIAAXZg");
	var mask_graphics_175 = new cjs.Graphics().p("ArBH8IAAv4IWEAAIAAP4g");
	var mask_graphics_176 = new cjs.Graphics().p("AluEMIAAoXILdAAIAAIXg");
	var mask_graphics_177 = new cjs.Graphics().p("AgbAcIAAg3IA3AAIAAA3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(72).to({graphics:mask_graphics_72,x:235.3,y:195}).wait(1).to({graphics:mask_graphics_73,x:239.6,y:195}).wait(1).to({graphics:mask_graphics_74,x:243.9,y:195}).wait(1).to({graphics:mask_graphics_75,x:248.3,y:195}).wait(1).to({graphics:mask_graphics_76,x:252.6,y:195}).wait(1).to({graphics:mask_graphics_77,x:256.9,y:195}).wait(1).to({graphics:mask_graphics_78,x:261.2,y:195}).wait(1).to({graphics:mask_graphics_79,x:265.6,y:195}).wait(1).to({graphics:mask_graphics_80,x:269.9,y:195}).wait(1).to({graphics:mask_graphics_81,x:274.2,y:195}).wait(1).to({graphics:null,x:0,y:0}).wait(87).to({graphics:mask_graphics_169,x:274.2,y:195}).wait(1).to({graphics:mask_graphics_170,x:269.3,y:188.1}).wait(1).to({graphics:mask_graphics_171,x:264.5,y:181.3}).wait(1).to({graphics:mask_graphics_172,x:259.6,y:174.4}).wait(1).to({graphics:mask_graphics_173,x:254.8,y:167.5}).wait(1).to({graphics:mask_graphics_174,x:249.9,y:160.6}).wait(1).to({graphics:mask_graphics_175,x:245.1,y:153.8}).wait(1).to({graphics:mask_graphics_176,x:240.2,y:146.9}).wait(1).to({graphics:mask_graphics_177,x:235.3,y:140}).wait(18));

	// Camada 3 Cópia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAA683").s().p("AgsB9QgKgEgKgIQgJgHgHgLIAXgPQAFAJAFAFQAGAGAIAEQAPAJASAAQAMgBALgDQAKgEAIgHQAHgGAFgJQAFgJAAgMQgBgNgGgJQgFgJgJgFQgKgGgMgEIgXgIIgXgIQgMgEgKgJQgJgIgFgMQgGgMAAgSQAAgRAHgNQAGgNAMgJQALgJAPgFQAPgEAOAAQAPAAAYAHQASAIANARIgUAPQgKgMgMgHQgMgGgQAAQgKgBgLADQgKAEgIAGQgIAFgFAKQgEAJAAAMQAAAKACAHQADAHAFAGQAJAJAOAGQAQAHAPAEQARAEAPAHQAOAIAKANQAKAOAAAXQAAASgGANQgHANgLAJQgLAKgOAFQgPAEgPAAQgYAAgWgJg");
	this.shape.setTransform(495.3,332.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AAA683").s().p("AhQCAIAAj/ICbAAIAAAWIiDAAIAABbIB7AAIAAAUIh7AAIAABkICJAAIAAAWg");
	this.shape_1.setTransform(465.5,332.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AAA683").s().p("AgLCAIAAjpIhXAAIAAgWIDFAAIAAAWIhYAAIAADpg");
	this.shape_2.setTransform(433.7,332.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AAA683").s().p("ABKCAIiajeIgBAAIAADeIgXAAIAAj/IAfAAICZDfIABAAIAAjfIAYAAIAAD/g");
	this.shape_3.setTransform(399.3,332.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AAA683").s().p("AhQCAIAAj/ICbAAIAAAWIiDAAIAABbIB7AAIAAAUIh7AAIAABkICJAAIAAAWg");
	this.shape_4.setTransform(365.6,332.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AAA683").s().p("AgLCAIAAj/IAXAAIAAD/g");
	this.shape_5.setTransform(339.3,332.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AAA683").s().p("AhGCAIAAj/IAXAAIAADpIB2AAIAAAWg");
	this.shape_6.setTransform(317.3,332.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AAA683").s().p("AgiB8QgYgKgSgSQgRgRgKgZQgFgNgCgNQgCgOAAgOQAAgNACgOQACgNAFgMQAKgZARgSQASgRAYgLQAMgFANgCQANgDAOAAQAaAAAXAKQAWAIARAWIgTARQgMgSgTgJIgSgGIgUgCQgXgBgUAJQgUAJgOAPQgOAPgIAVQgIAVAAAWQAAAYAIAUQAIAVAOAPQAOAPAUAJQAUAIAXABQAKgBALgCQAKgCAKgFQAKgFAJgHQAJgIAHgKIATAOQgJANgLAJQgKAJgMAFQgZALgcAAQgcAAgYgKg");
	this.shape_7.setTransform(284.5,332.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AAA683").s().p("AgsB9QgKgEgKgIQgJgHgHgLIAXgPQAFAJAFAFQAGAGAIAEQAPAJASAAQAMgBALgDQAKgEAIgHQAHgGAFgJQAFgJAAgMQgBgNgGgJQgFgJgJgFQgKgGgLgEIgYgIIgXgIQgMgEgKgJQgJgIgFgMQgGgMAAgSQAAgRAHgNQAGgNAMgJQALgJAPgFQAPgEAOAAQAPAAAYAHQASAIANARIgUAPQgKgMgMgHQgMgGgQAAQgKgBgLADQgKAEgIAGQgIAFgFAKQgEAJAAAMQAAAKACAHQADAHAFAGQAJAJAOAGQAQAHAQAEQAQAEAPAHQAOAIAKANQAKAOAAAXQAAASgGANQgHANgLAJQgLAKgOAFQgPAEgPAAQgYAAgWgJg");
	this.shape_8.setTransform(232,332.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AAA683").s().p("Ag1B8QgYgKgRgSQgRgRgKgZQgFgNgDgNQgCgOAAgOQAAgNACgOQADgNAFgMQAKgZARgSQARgRAYgLQANgFANgCQANgDAOAAQAOAAAOADQANACAMAFQAZALARARQARASAKAZQAFALACAOQADAOAAANQAAAOgDAOQgCANgFANQgKAZgRARQgRASgZAKQgYAKgdAAQgcAAgZgKgAgshnQgUAJgOAPQgOAPgIAVQgHAVAAAWQAAAYAHAUQAIAVAOAPQAOAPAUAJQAUAIAYABQAZgBAUgIQAUgJAOgPQAOgPAHgVQAIgUAAgYQAAgWgIgVQgHgVgOgPQgOgPgUgJQgUgJgZABQgYgBgUAJg");
	this.shape_9.setTransform(197,332.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AAA683").s().p("AgrB9QgLgEgKgIQgIgHgIgLIAXgPQAFAJAFAFQAHAGAHAEQAPAJASAAQAMgBALgDQAKgEAIgHQAIgGAEgJQAEgJABgMQAAgNgHgJQgFgJgJgFQgKgGgMgEIgWgIIgYgIQgNgEgIgJQgKgIgFgMQgGgMAAgSQAAgRAGgNQAHgNAMgJQALgJAPgFQAOgEAPAAQAOAAAaAHQARAIANARIgUAPQgKgMgMgHQgLgGgRAAQgLgBgKADQgKAEgIAGQgIAFgFAKQgEAJAAAMQgBAKADAHQADAHAEAGQAKAJAPAGQAPAHAPAEQARAEAPAHQAPAIAJANQAKAOAAAXQAAASgGANQgHANgLAJQgLAKgOAFQgPAEgPAAQgZAAgUgJg");
	this.shape_10.setTransform(162,332.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AAA683").s().p("AgsB9QgKgEgJgIQgKgHgHgLIAXgPQAFAJAGAFQAFAGAIAEQAPAJASAAQAMgBALgDQAKgEAIgHQAHgGAFgJQAFgJAAgMQgBgNgFgJQgGgJgJgFQgJgGgMgEIgYgIIgXgIQgMgEgKgJQgJgIgFgMQgGgMAAgSQAAgRAHgNQAGgNAMgJQALgJAPgFQAPgEAPAAQANAAAZAHQASAIANARIgVAPQgIgMgNgHQgLgGgRAAQgKgBgLADQgKAEgIAGQgIAFgFAKQgEAJAAAMQAAAKACAHQADAHAFAGQAJAJAOAGQAPAHARAEQAQAEAPAHQAOAIAKANQAKAOAAAXQAAASgHANQgGANgLAJQgLAKgOAFQgPAEgPAAQgYAAgWgJg");
	this.shape_11.setTransform(132,332.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AAA683").s().p("Ag1B8QgYgKgRgSQgRgRgKgZQgFgNgDgNQgCgOAAgOQAAgNACgOQADgNAFgMQAKgZARgSQARgRAYgLQANgFANgCQANgDAOAAQAOAAAOADQANACAMAFQAZALARARQARASAKAZQAFALACAOQADAOAAANQAAAOgDAOQgCANgFANQgKAZgRARQgRASgZAKQgYAKgdAAQgcAAgZgKgAgshnQgUAJgOAPQgOAPgIAVQgHAVAAAWQAAAYAHAUQAIAVAOAPQAOAPAUAJQAUAIAYABQAZgBAUgIQAUgJAOgPQAOgPAHgVQAIgUAAgYQAAgWgIgVQgHgVgOgPQgOgPgUgJQgUgJgZABQgYgBgUAJg");
	this.shape_12.setTransform(97,332.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AAA683").s().p("ABKCAIiZjeIgBAAIAADeIgYAAIAAj/IAfAAICaDfIABAAIAAjfIAXAAIAAD/g");
	this.shape_13.setTransform(58,332.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AAA683").s().p("AgrB9QgLgEgJgIQgJgHgIgLIAXgPQAEAIAGAHQAHAFAHAEQAPAJASAAQAMgBAKgDQALgEAHgHQAJgGAEgJQAEgJAAgMQABgNgHgIQgFgKgJgFQgJgFgNgFIgWgIIgZgIQgMgFgIgHQgKgJgGgMQgFgMAAgSQAAgRAGgNQAHgNALgJQAMgJAOgFQAPgEAQAAQAOAAAZAHQARAIANARIgVAPQgJgMgLgHQgNgGgQAAQgLAAgKACQgLAEgHAGQgIAGgEAJQgGAJAAAMQABAJACAIQADAHAEAGQAKAJAPAGQAOAHAQAEQASAEAOAHQAOAIALANQAJAOAAAXQAAASgHANQgGANgLAJQgLAJgOAGQgOAEgQAAQgYAAgVgJg");
	this.shape_14.setTransform(427.3,277.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AAA683").s().p("Ag1B8QgYgKgRgSQgRgRgKgZQgFgNgDgNQgCgOAAgOQAAgNACgOQADgNAFgNQAKgYARgSQARgRAYgLQANgFANgCQANgDAOAAQAOAAAOADQANACAMAFQAZALARARQARASAKAYQAFAMACAOQADAOAAANQAAAOgDAOQgCANgFANQgKAZgRARQgRASgZAKQgYAKgdAAQgcAAgZgKgAgshmQgUAIgOAPQgOAPgIAVQgHAVAAAWQAAAYAHAUQAIAVAOAPQAOAPAUAJQAUAJAYAAQAZAAAUgJQAUgJAOgPQAOgPAHgVQAIgUAAgYQAAgWgIgVQgHgVgOgPQgOgPgUgIQgUgKgZABQgYgBgUAKg");
	this.shape_15.setTransform(392.3,277.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AAA683").s().p("AhsCAIAAj/IBPAAQAhABAWAHQAXAJAQAMQAPANAJAQQAJAPAEAOQAFAOAAALIACAPIgCAQQAAAMgFANQgEAOgJAPQgJAQgPAMQgXAQgQAGQgWAHghABgAhUBqIAyAAQAYAAAWgHIAUgHQAJgFAIgHQAJgGAHgIQAFgJAGgJQAJgVAAgbQAAgNgCgLQgDgMgEgKQgFgKgGgJQgHgIgJgHQgIgGgJgFIgUgIQgegGgQAAIgyAAg");
	this.shape_16.setTransform(354.6,277.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AAA683").s().p("Ag1B8QgYgKgRgSQgRgRgKgZQgFgNgDgNQgCgOAAgOQAAgNACgOQADgNAFgNQAKgYARgSQARgRAYgLQANgFANgCQANgDAOAAQAOAAAOADQANACAMAFQAZALARARQARASAKAYQAFAMACAOQADAOAAANQAAAOgDAOQgCANgFANQgKAZgRARQgRASgZAKQgYAKgdAAQgcAAgZgKgAgshmQgUAIgOAPQgOAPgIAVQgHAVAAAWQAAAYAHAUQAIAVAOAPQAOAPAUAJQAUAJAYAAQAZAAAUgJQAUgJAOgPQAOgPAHgVQAIgUAAgYQAAgWgIgVQgHgVgOgPQgOgPgUgIQgUgKgZABQgYgBgUAKg");
	this.shape_17.setTransform(296.3,277.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AAA683").s().p("AgLCAIAAj/IAXAAIAAD/g");
	this.shape_18.setTransform(266.6,277.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#AAA683").s().p("AgiB8QgYgKgSgSQgRgRgKgZQgFgNgCgNQgCgOAAgOQAAgNACgOQACgNAFgNQAKgYARgSQASgRAYgLQAMgFANgCQANgDAOAAQAaAAAXAKQAWAIARAWIgTARQgMgTgTgIIgSgGIgUgCQgXgBgUAKQgUAIgOAPQgOAPgIAVQgIAVAAAWQAAAYAIAUQAIAVAOAPQAOAPAUAJQAUAJAXAAQAKgBALgCQAKgCAKgFQAKgFAJgIQAJgHAHgKIATAOQgJANgLAJQgKAJgMAFQgZALgcAAQgcAAgYgKg");
	this.shape_19.setTransform(239.8,277.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AAA683").s().p("AgXChIAAj+IAXAAIAAD+gAgghsIAkg0IAdAAIgvA0g");
	this.shape_20.setTransform(213.2,273.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#AAA683").s().p("AhLCAIAAj/ICXAAIAAAWIiAAAIAABbIB3AAIAAAUIh3AAIAAB6g");
	this.shape_21.setTransform(188.4,277.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AAA683").s().p("AhQCAIAAj/ICbAAIAAAWIiDAAIAABbIB7AAIAAAUIh7AAIAABkICJAAIAAAWg");
	this.shape_22.setTransform(157.5,277.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AAA683").s().p("ABLCAIiajeIgCAAIAADeIgXAAIAAj/IAeAAICaDfIACAAIAAjfIAXAAIAAD/g");
	this.shape_23.setTransform(122,277.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AAA683").s().p("AhQCAIAAj/ICbAAIAAAWIiDAAIAABbIB7AAIAAAUIh7AAIAABkICJAAIAAAWg");
	this.shape_24.setTransform(88.2,277.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AAA683").s().p("AhSCAIAAj/IBJAAQANABAPACQAPACAMAIQALAHAIANQADAHACAJIACATQAAAKgDAIQgDAIgFAIQgGAHgJAFQgIAFgMACIAAABQANABAKAEQALAFAIAIQAHAHAEAMQAEALAAANQAAALgCAJQgCAJgEAHQgJAOgMAIQgNAHgPADQgPADgMABgAg7BqIA3AAQAUAAANgFQAMgFAHgIQAHgHACgJIADgPQAAgOgGgKQgFgKgJgHQgIgGgLgDQgLgCgLAAIg6AAgAg7gQIAyAAQARAAAMgFQALgEAHgGQAGgHACgIIACgNQAAgOgEgIQgFgJgHgFQgIgGgKgBQgKgDgKAAIg1AAg");
	this.shape_25.setTransform(55.8,277.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AAA683").s().p("ABoB/IAAjfIgBAAIhhDfIgKAAIhijfIgBAAIAADfIgXAAIAAj+IAjAAIBcDWIBdjWIAhAAIAAD+g");
	this.shape_26.setTransform(408.6,222.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#AAA683").s().p("AhQB/IAAj+ICbAAIAAAWIiDAAIAABbIB7AAIAAAVIh7AAIAABjICJAAIAAAVg");
	this.shape_27.setTransform(372.8,222.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AAA683").s().p("Ag1B8QgYgKgRgRQgRgSgKgZQgFgMgDgOQgCgNAAgPQAAgNACgOQADgNAFgNQAKgYARgSQARgRAYgLQANgFANgCQANgDAOAAQAOAAAOADQANACAMAFQAZALARARQARASAKAYQAFANACANQADAOAAANQAAAPgDANQgCAOgFAMQgKAZgRASQgRARgZAKQgYAKgdAAQgcAAgZgKgAgshmQgUAIgOAPQgOAPgIAVQgHAUAAAXQAAAYAHAUQAIAVAOAPQAOAPAUAJQAUAJAYAAQAZAAAUgJQAUgJAOgPQAOgPAHgVQAIgUAAgYQAAgXgIgUQgHgVgOgPQgOgPgUgIQgUgKgZABQgYgBgUAKg");
	this.shape_28.setTransform(316.9,222.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AAA683").s().p("AA4B/IhGh4IgtAAIAAB4IgXAAIAAj+IBDAAIANABIASACIAVAGQAKAEAIAHQAJAIAFALQAFAMAAARQAAASgGAMQgGAMgKAHQgJAIgMACIgWAFIBKB6gAg7gOIAzAAQASAAALgFQAMgFAGgGQAHgHACgIIADgOIgDgPQgCgHgHgIQgGgGgMgFQgLgFgSAAIgzAAg");
	this.shape_29.setTransform(282.4,222.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#AAA683").s().p("AgLB/IAAj+IAXAAIAAD+g");
	this.shape_30.setTransform(255.9,222.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#AAA683").s().p("AhQB/IAAj+ICbAAIAAAWIiDAAIAABbIB7AAIAAAVIh7AAIAABjICJAAIAAAVg");
	this.shape_31.setTransform(231.5,222.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#AAA683").s().p("AhGB/IAAj+IAXAAIAADpIB2AAIAAAVg");
	this.shape_32.setTransform(202.6,222.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#AAA683").s().p("AgLB/IAAj+IAXAAIAAD+g");
	this.shape_33.setTransform(177.3,222.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#AAA683").s().p("AgsB9QgKgEgJgHQgKgIgHgKIAXgQQAEAIAHAHQAFAGAIAEQAPAHASABQAMgBALgDQAKgEAIgHQAHgGAFgJQAFgJgBgMQAAgNgFgIQgGgKgJgFQgJgGgMgEIgYgIIgYgIQgLgFgKgHQgJgJgGgMQgFgMAAgSQAAgRAHgNQAGgNAMgJQALgJAOgEQAQgFAPAAQANAAAZAHQASAIANARIgVAPQgIgNgNgGQgLgGgRAAQgLAAgKACQgLAEgHAGQgIAGgEAJQgFAJgBAMQAAAJADAIQACAHAGAFQAJALAOAFQAQAHAQAEQARAFAOAGQAOAIALANQAJANAAAYQAAARgHAOQgGANgLAJQgLAJgOAGQgPAEgPAAQgYAAgWgJg");
	this.shape_34.setTransform(152.6,222.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AAA683").s().p("ABfB/IgchDIiGAAIgdBDIgYAAIBvj+IAXAAIBsD+gAA7AmIg6iLIg6CLIB0AAg");
	this.shape_35.setTransform(120.3,222.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#AAA683").s().p("AA4B/IhGh4IgtAAIAAB4IgXAAIAAj+IBDAAIANABIASACIAVAGQAKAEAIAHQAJAIAFALQAFAMAAARQAAASgGAMQgGAMgKAHQgJAIgMACIgWAFIBKB6gAg7gOIAzAAQASAAALgFQAMgFAGgGQAHgHACgIIADgOIgDgPQgCgHgHgIQgGgGgMgFQgLgFgSAAIgzAAg");
	this.shape_36.setTransform(88.5,222.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#AAA683").s().p("AhSB/IAAj+IBJAAQANABAPACQAPADAMAGQALAIAIANQADAHACAIIACAUQAAAJgDAJQgDAIgFAIQgGAHgJAFQgIAFgMACIAAABQANABAKAEQALAFAIAIQAHAHAEAMQAEALAAANQAAALgCAJQgCAJgEAHQgJAOgMAIQgNAIgPACQgPADgMAAgAg7BqIA3AAQAUAAANgFQAMgFAHgIQAHgHACgJIADgPQAAgOgGgKQgFgKgJgHQgIgGgLgDQgLgCgLAAIg6AAgAg7gQIAyAAQARAAAMgEQALgFAHgGQAGgHACgIIACgNQAAgOgEgIQgFgJgHgFQgIgGgKgBQgKgDgKAAIg1AAg");
	this.shape_37.setTransform(55.8,222.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#AAA683").s().p("AhGB/IAAj+IAXAAIAADpIB2AAIAAAVg");
	this.shape_38.setTransform(465.8,167.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#AAA683").s().p("ABfB/IgchDIiGAAIgdBDIgYAAIBuj+IAYAAIBrD+gAA7AmIg6iKIg7CKIB1AAg");
	this.shape_39.setTransform(432.9,167.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#AAA683").s().p("AgiB8QgYgKgSgRQgRgTgKgYQgFgMgCgOQgCgNAAgPQAAgNACgOQACgNAFgNQAKgYARgSQASgRAYgLQAMgFANgCQANgDAOAAQA5AAAjAjIgRASQgGgGgIgGQgJgHgKgDIgUgHQgLgCgLAAQgXAAgUAJQgUAIgOAPQgOAPgIAVQgIAUAAAXQAAAYAIAUQAIAVAOAPQAOAPAUAJQAUAJAXAAQAVAAASgEQASgDAPgJIAAhWIg+AAIAAgUIBVAAIAAB4QgWANgYAEQgYAGgZAAQgcAAgYgKg");
	this.shape_40.setTransform(395.7,167.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AAA683").s().p("AhQB/IAAj+ICbAAIAAAWIiDAAIAABbIB7AAIAAAVIh7AAIAABjICJAAIAAAVg");
	this.shape_41.setTransform(362.8,167.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#AAA683").s().p("AhGB/IAAj+IAXAAIAADpIB2AAIAAAVg");
	this.shape_42.setTransform(333.9,167.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#AAA683").s().p("AhQB/IAAj+ICbAAIAAAWIiDAAIAABbIB7AAIAAAVIh7AAIAABjICJAAIAAAVg");
	this.shape_43.setTransform(284.2,167.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#AAA683").s().p("AgLB/IAAjoIhXAAIAAgWIDFAAIAAAWIhYAAIAADog");
	this.shape_44.setTransform(252.3,167.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#AAA683").s().p("ABKB/IiajdIgBAAIAADdIgXAAIAAj+IAfAAICZDfIABAAIAAjfIAYAAIAAD+g");
	this.shape_45.setTransform(218,167.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#AAA683").s().p("AhQB/IAAj+ICbAAIAAAWIiDAAIAABbIB7AAIAAAVIh7AAIAABjICJAAIAAAVg");
	this.shape_46.setTransform(184.2,167.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#AAA683").s().p("AgLB/IAAj+IAXAAIAAD+g");
	this.shape_47.setTransform(158,167.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#AAA683").s().p("AhSB/IAAj+IBJAAQANABAPACQAPADAMAGQALAIAIANQADAHACAIIACAUQAAAJgDAJQgDAJgFAHQgGAHgJAFQgIAEgMADIAAAAQANACAKAEQALAEAIAJQAHAHAEAMQAEALAAANQAAALgCAJQgCAJgEAHQgJAOgMAIQgNAIgPADQgPACgMAAgAg7BqIA3AAQAUAAANgFQAMgFAHgIQAHgIACgIIADgPQAAgOgGgKQgFgKgJgGQgIgHgLgDQgLgCgLAAIg6AAgAg7gQIAyAAQARAAAMgEQALgFAHgGQAGgHACgIIACgNQAAgOgEgIQgFgJgHgGQgIgEgKgCQgKgDgKAAIg1AAg");
	this.shape_48.setTransform(132.5,167.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#AAA683").s().p("ABoB/IAAjfIgBAAIhhDfIgJAAIhjjfIgBAAIAADfIgXAAIAAj+IAjAAIBcDWIBdjWIAhAAIAAD+g");
	this.shape_49.setTransform(94.7,167.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#AAA683").s().p("ABeB/IgbhDIiGAAIgdBDIgZAAIBvj+IAYAAIBrD+gAA6AmIg5iKIg7CKIB0AAg");
	this.shape_50.setTransform(56.4,167.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#AAA683").s().p("Ag1B8QgYgKgRgRQgRgTgKgYQgFgMgDgOQgCgNAAgPQAAgOACgNQADgNAFgNQAKgYARgSQARgRAYgLQANgFANgDQANgCAOAAQAOAAAOACQANADAMAFQAZALARARQARASAKAYQAFAMACAOQADANAAAOQAAAPgDANQgCAOgFAMQgKAYgRATQgRARgZAKQgYAKgdAAQgcAAgZgKgAgshmQgUAIgOAPQgOAPgIAVQgHAUAAAXQAAAYAHAUQAIAVAOAPQAOAPAUAJQAUAJAYAAQAZAAAUgJQAUgJAOgPQAOgPAHgVQAIgUAAgYQAAgXgIgUQgHgVgOgPQgOgPgUgIQgUgJgZAAQgYAAgUAJg");
	this.shape_51.setTransform(410.2,112.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#AAA683").s().p("Ag1B8QgYgKgRgRQgRgTgKgYQgFgMgDgOQgCgNAAgPQAAgOACgNQADgNAFgNQAKgYARgSQARgRAYgLQANgFANgDQANgCAOAAQAOAAAOACQANADAMAFQAZALARARQARASAKAYQAFAMACAOQADANAAAOQAAAPgDANQgCAOgFAMQgKAYgRATQgRARgZAKQgYAKgdAAQgcAAgZgKgAgshmQgUAIgOAPQgOAPgIAVQgHAUAAAXQAAAYAHAUQAIAVAOAPQAOAPAUAJQAUAJAYAAQAZAAAUgJQAUgJAOgPQAOgPAHgVQAIgUAAgYQAAgXgIgUQgHgVgOgPQgOgPgUgIQgUgJgZAAQgYAAgUAJg");
	this.shape_52.setTransform(350.9,112.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#AAA683").s().p("AhsB/IAAj9IBPAAQAhgBAWAJQAXAIAQAMQAPANAJAPQAJAPAEAOQAFAPAAALIACAPIgCAQQAAAMgFAOQgEAOgJAPQgJAPgPAMQgXAQgQAFQgWAJghgBgAhUBqIAyAAQAYAAAWgHIAUgIQAJgEAIgGQAJgHAHgJQAFgHAGgLQAJgTAAgcQAAgMgCgNQgDgLgEgKQgGgKgFgIQgHgJgJgHQgIgGgJgEIgUgIQgegHgQAAIgyAAg");
	this.shape_53.setTransform(313.2,112.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#AAA683").s().p("ABLB/IibjeIgBAAIAADeIgXAAIAAj9IAfAAICZDeIABAAIAAjeIAYAAIAAD9g");
	this.shape_54.setTransform(275.2,112.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#AAA683").s().p("AgLB/IAAj9IAXAAIAAD9g");
	this.shape_55.setTransform(246.5,112.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#AAA683").s().p("AhbB/IAAgSICUjWIiSAAIAAgVICxAAIAAATIiVDVICZAAIAAAVg");
	this.shape_56.setTransform(221.9,112.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#AAA683").s().p("AgqB6QgTgIgKgPQgLgOgFgTQgFgTAAgUIAAidIAYAAIAACXQAAANACAQQADAPAHAOQAIANAOAJQAGAEAJACQAJACAKAAQAXAAANgIQAOgJAHgNQAHgOACgPQADgQAAgNIAAiXIAYAAIAACdQAAAUgFATQgFATgKAOQgGAHgHAGQgHAGgJAEQgSAJgaAAQgZAAgRgJg");
	this.shape_57.setTransform(189.6,112.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#AAA683").s().p("AhsB/IAAj9IBPAAQAhgBAWAJQAYAIAPAMQAPANAJAPQAJAPAEAOQAEAPABALIABAPIgBAQQgBAMgEAOQgEAOgJAPQgJAPgPAMQgXAQgQAFQgWAJghgBgAhTBqIAwAAQAZAAAWgHIAUgIQAJgEAJgGQAIgHAGgJQAGgHAGgLQAIgTABgcQAAgMgDgNQgCgLgEgKQgGgKgGgIQgGgJgIgHQgJgGgJgEIgUgIQgegHgRAAIgwAAg");
	this.shape_58.setTransform(154.6,112.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#AAA683").s().p("ABeB/IgbhDIiGAAIgdBDIgZAAIBwj9IAXAAIBrD9gAA6AmIg5iKIg7CKIB0AAg");
	this.shape_59.setTransform(118.3,112.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#AAA683").s().p("AA4B/IhGh4IgtAAIAAB4IgXAAIAAj9IBDAAIANAAIASACIAVAGQAKAEAIAHQAJAIAFALQAFAMAAAQQAAATgGAMQgGAMgKAHQgJAHgMADIgWAFIBKB6gAg7gOIAzAAQASAAALgFQAMgEAGgHQAHgHACgIIADgPIgDgOQgCgHgHgIQgGgGgMgFQgLgFgSAAIgzAAg");
	this.shape_60.setTransform(86.5,112.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#AAA683").s().p("AgLB/IAAjoIhXAAIAAgVIDFAAIAAAVIhXAAIAADog");
	this.shape_61.setTransform(54.4,112.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#AAA683").s().p("AhUCCIAAguIBhhfIAJgJIAJgKIAGgMQADgFAAgHQAAgIgDgGQgDgGgFgEQgFgFgHgCQgHgCgHAAQgQAAgKAJQgKAJgDAQIgtgDQABgSAHgOQAIgNALgJQALgJAPgFQAOgFARAAQARAAAPAFQAPAFALAIQALAJAHAOQAGAOAAASQAAAYgLASQgLAQgRAQIhOBJIB1AAIAAAng");
	this.shape_62.setTransform(338.4,56.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#AAA683").s().p("AAOB/IAAg0IhrAAIAAgqIBlifIAxAAIAACjIAlAAIAAAmIglAAIAAA0gAgyAlIBAAAIAAhmIgBAAg");
	this.shape_63.setTransform(307.1,57.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#AAA683").s().p("AgyCCIA9hfIgBAAIgKADIgNABQgRAAgOgGQgOgHgKgLQgLgLgFgOQgGgPAAgQQAAgUAHgQQAHgRAMgLQAMgLARgGQAQgHATAAQAUAAAQAGQASAGAMAMQAMALAGAQQAHAQgBAUQABAVgHAQQgGAPgLARIhBBngAgShUQgIAEgHAGQgGAGgEAJQgDAIgBAKQABAKADAIQAEAJAGAGQAHAGAIADQAIADAKAAQAIAAAJgDQAIgDAHgGQAGgGAEgJQADgIAAgKQAAgKgDgIQgEgJgGgGQgHgGgIgEQgJgDgIAAQgKAAgIADg");
	this.shape_64.setTransform(275.8,56.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#AAA683").s().p("AAPB/IAAjMIgvAsIgZgdIBMhAIAnAAIAAD9g");
	this.shape_65.setTransform(242,57.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#AAA683").s().p("AhWB/IAAj9ICnAAIAAAoIh6AAIAAA/IBzAAIAAApIhzAAIAABFICAAAIAAAog");
	this.shape_66.setTransform(192.8,57.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#AAA683").s().p("AhyB/IAAj9IBkAAQAYgBAYAJQAYAHARAQQATAPAKAZQAFAMADAOQADAOAAAPQAAAhgNAYQgGAMgHAKQgJAJgJAJQgUAPgYAIQgfAHgPAAgAhFBXIAiAAQAWgBARgEQATgFAOgLQAPgKAHgQQAIgQAAgYQABgWgIgQQgHgRgNgKQgMgLgSgEQgRgFgUgBIgqAAg");
	this.shape_67.setTransform(158.3,57.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#AAA683").s().p("AgbCEIgWgGQgXgIgPgTIAighQAIANAOAHQANAHAPAAQAHAAAIgCQAIgDAGgEQAHgEAEgHQAEgGAAgJQAAgOgJgIQgJgHgOgFIgcgKQgPgFgOgIQgNgHgJgNQgJgOAAgXQAAgTAIgPQAIgPAOgJQANgKAQgEQARgFARAAQAUAAATAHQAJACAJAGQAIAEAIAHIghAkQgIgLgMgFQgMgFgNAAIgOACQgHACgHAEQgFAEgEAGQgEAHABAIQgBANAKAHQAIAGAOAGIAcAKQAQAEANAIQAOAIAIANQAFAHACAJQADAKgBALQAAAUgHAQQgIAPgNAKQgMAKgRAFQgRAFgSAAg");
	this.shape_68.setTransform(123.2,57.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#AAA683").s().p("AhWB/IAAj9ICnAAIAAAoIh6AAIAAA/IBzAAIAAApIhzAAIAABFICAAAIAAAog");
	this.shape_69.setTransform(92.9,57.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#AAA683").s().p("AhyB/IAAj9IBkAAQAYgBAYAJQAYAHARAQQATAPAKAZQAFAMADAOQADAOAAAPQAAAhgNAYQgGAMgHAKQgJAJgJAJQgUAPgYAIQgfAHgPAAgAhFBXIAiAAQAWgBARgEQATgFAOgLQAPgKAHgQQAIgQAAgYQABgWgIgQQgHgRgNgKQgMgLgSgEQgRgFgUgBIgqAAg");
	this.shape_70.setTransform(58.4,57.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},72).to({state:[]},106).wait(17));

	// Camada 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_56 = new cjs.Graphics().p("A+YRiMAAAgjEMA8xAAAMAAAAjEg");
	var mask_1_graphics_57 = new cjs.Graphics().p("A7DPpIAA/RMA2HAAAIAAfRg");
	var mask_1_graphics_58 = new cjs.Graphics().p("A3uNvIAA7dMAvdAAAIAAbdg");
	var mask_1_graphics_59 = new cjs.Graphics().p("A0ZL2IAA3rMAozAAAIAAXrg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AxEJ8IAAz3MAiJAAAIAAT3g");
	var mask_1_graphics_61 = new cjs.Graphics().p("AtvICIAAwDIbfAAIAAQDg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AqaGJIAAsRIU1AAIAAMRg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AnFEPIAAodIOLAAIAAIdg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AjwCWIAAkqIHhAAIAAEqg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AgbAcIAAg3IA3AAIAAA3g");
	var mask_1_graphics_185 = new cjs.Graphics().p("AgbAcIAAg3IA3AAIAAA3g");
	var mask_1_graphics_186 = new cjs.Graphics().p("AjwCWIAAkqIHhAAIAAEqg");
	var mask_1_graphics_187 = new cjs.Graphics().p("AnFEPIAAodIOLAAIAAIdg");
	var mask_1_graphics_188 = new cjs.Graphics().p("AqaGJIAAsRIU1AAIAAMRg");
	var mask_1_graphics_189 = new cjs.Graphics().p("AtvICIAAwDIbfAAIAAQDg");
	var mask_1_graphics_190 = new cjs.Graphics().p("AxEJ8IAAz3MAiJAAAIAAT3g");
	var mask_1_graphics_191 = new cjs.Graphics().p("A0ZL2IAA3rMAozAAAIAAXrg");
	var mask_1_graphics_192 = new cjs.Graphics().p("A3uNvIAA7dMAvdAAAIAAbdg");
	var mask_1_graphics_193 = new cjs.Graphics().p("A7DPpIAA/RMA2HAAAIAAfRg");
	var mask_1_graphics_194 = new cjs.Graphics().p("A+YRiMAAAgjEMA8xAAAMAAAAjEg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(56).to({graphics:mask_1_graphics_56,x:235,y:195.1}).wait(1).to({graphics:mask_1_graphics_57,x:235,y:195.1}).wait(1).to({graphics:mask_1_graphics_58,x:235.1,y:195}).wait(1).to({graphics:mask_1_graphics_59,x:235.1,y:195}).wait(1).to({graphics:mask_1_graphics_60,x:235.1,y:195}).wait(1).to({graphics:mask_1_graphics_61,x:235.2,y:195}).wait(1).to({graphics:mask_1_graphics_62,x:235.2,y:195}).wait(1).to({graphics:mask_1_graphics_63,x:235.2,y:195}).wait(1).to({graphics:mask_1_graphics_64,x:235.3,y:195}).wait(1).to({graphics:mask_1_graphics_65,x:235.3,y:195}).wait(1).to({graphics:null,x:0,y:0}).wait(119).to({graphics:mask_1_graphics_185,x:235.3,y:195}).wait(1).to({graphics:mask_1_graphics_186,x:235.3,y:195}).wait(1).to({graphics:mask_1_graphics_187,x:235.2,y:195}).wait(1).to({graphics:mask_1_graphics_188,x:235.2,y:195}).wait(1).to({graphics:mask_1_graphics_189,x:235.2,y:195}).wait(1).to({graphics:mask_1_graphics_190,x:235.1,y:195}).wait(1).to({graphics:mask_1_graphics_191,x:235.1,y:195}).wait(1).to({graphics:mask_1_graphics_192,x:235.1,y:195}).wait(1).to({graphics:mask_1_graphics_193,x:235,y:195.1}).wait(1).to({graphics:mask_1_graphics_194,x:235,y:195.1}).wait(1));

	// Camada 3
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#AAA683").s().p("Ag1B8QgYgKgRgRQgRgTgKgYQgFgNgDgNQgCgOAAgOQAAgOACgNQADgNAFgMQAKgZARgSQARgSAYgKQANgFANgDQANgCAOAAQAOAAAOACQANADAMAFQAZAKARASQARASAKAZQAFAMACANQADANAAAOQAAAOgDAOQgCANgFANQgKAYgRATQgRARgZAKQgYAKgdAAQgcAAgZgKgAgshnQgUAJgOAPQgOAPgIAVQgHAVAAAWQAAAYAHAVQAIAUAOAPQAOAPAUAJQAUAJAYgBQAZABAUgJQAUgJAOgPQAOgPAHgUQAIgVAAgYQAAgWgIgVQgHgVgOgPQgOgPgUgJQgUgIgZgBQgYABgUAIg");
	this.shape_71.setTransform(414.6,276.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#AAA683").s().p("AgMB/Ihfj9IAaAAIBRDeIBTjeIAZAAIhhD9g");
	this.shape_72.setTransform(379,276.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#AAA683").s().p("AgLB/IAAj9IAXAAIAAD9g");
	this.shape_73.setTransform(353.6,276.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#AAA683").s().p("AgLB/IAAjoIhXAAIAAgVIDFAAIAAAVIhYAAIAADog");
	this.shape_74.setTransform(328.7,276.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#AAA683").s().p("ABeB/IgbhDIiGAAIgdBDIgZAAIBvj9IAYAAIBrD9gAA6AmIg5iKIg7CKIB0AAg");
	this.shape_75.setTransform(298.5,276.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#AAA683").s().p("AA4B/IhGh4IgtAAIAAB4IgXAAIAAj9IBDAAIANAAIASACIAVAGQAKAEAIAIQAJAHAFALQAFAMAAAQQAAATgGAMQgGAMgKAHQgJAIgMACIgWAFIBKB6gAg7gOIAzAAQASAAALgFQAMgFAGgGQAHgHACgIIADgPIgDgOQgCgIgHgGQgGgIgMgEQgLgFgSAAIgzAAg");
	this.shape_76.setTransform(266.6,276.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#AAA683").s().p("Ag1B8QgYgKgRgRQgRgTgKgYQgFgNgDgNQgCgOAAgOQAAgOACgNQADgNAFgMQAKgZARgSQARgSAYgKQANgFANgDQANgCAOAAQAOAAAOACQANADAMAFQAZAKARASQARASAKAZQAFAMACANQADANAAAOQAAAOgDAOQgCANgFANQgKAYgRATQgRARgZAKQgYAKgdAAQgcAAgZgKgAgshnQgUAJgOAPQgOAPgIAVQgHAVAAAWQAAAYAHAVQAIAUAOAPQAOAPAUAJQAUAJAYgBQAZABAUgJQAUgJAOgPQAOgPAHgUQAIgVAAgYQAAgWgIgVQgHgVgOgPQgOgPgUgJQgUgIgZgBQgYABgUAIg");
	this.shape_77.setTransform(229.8,276.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#AAA683").s().p("AhSB/IAAj9IBJAAQANAAAPACQAPADAMAHQALAHAIANQADAHACAIIACAUQAAAJgDAJQgDAIgFAIQgGAHgJAFQgIAEgMADIAAAAQANABAKAFQALAFAIAHQAHAIAEALQAEAMAAANQAAALgCAJQgCAJgEAHQgJAOgMAIQgNAHgPAEQgPACgMAAgAg7BqIA3AAQAUAAANgFQAMgFAHgHQAHgJACgHIADgQQAAgOgGgKQgFgLgJgFQgIgHgLgCQgLgEgLAAIg6AAgAg7gQIAyAAQARAAAMgFQALgEAHgHQAGgGACgHIACgOQAAgNgEgJQgFgJgHgGQgIgFgKgCQgKgCgKAAIg1AAg");
	this.shape_78.setTransform(194,276.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#AAA683").s().p("ABeB/IgbhDIiGAAIgdBDIgZAAIBvj9IAYAAIBrD9gAA6AmIg5iKIg7CKIB0AAg");
	this.shape_79.setTransform(159.9,276.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#AAA683").s().p("AhGB/IAAj9IAXAAIAADoIB2AAIAAAVg");
	this.shape_80.setTransform(130.1,276.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#AAA683").s().p("Ag1B8QgYgKgRgRQgRgTgKgYQgFgNgDgNQgCgOAAgOQAAgOACgNQADgNAFgMQAKgZARgSQARgSAYgKQANgFANgDQANgCAOAAQAOAAAOACQANADAMAFQAZAKARASQARASAKAZQAFAMACANQADANAAAOQAAAOgDAOQgCANgFANQgKAYgRATQgRARgZAKQgYAKgdAAQgcAAgZgKgAgshnQgUAJgOAPQgOAPgIAVQgHAVAAAWQAAAYAHAVQAIAUAOAPQAOAPAUAJQAUAJAYgBQAZABAUgJQAUgJAOgPQAOgPAHgUQAIgVAAgYQAAgWgIgVQgHgVgOgPQgOgPgUgJQgUgIgZgBQgYABgUAIg");
	this.shape_81.setTransform(94.5,276.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#AAA683").s().p("AgiB8QgYgKgSgRQgRgTgKgYQgFgNgCgNQgCgOAAgOQAAgOACgNQACgNAFgMQAKgZARgSQASgSAYgKQAMgFANgDQANgCAOAAQAaAAAXAJQAWAKARAVIgTAQQgMgSgTgIIgSgGIgUgDQgXABgUAIQgUAJgOAPQgOAPgIAVQgIAVAAAWQAAAYAIAVQAIAUAOAPQAOAPAUAJQAUAJAXgBQAKAAALgCQAKgDAKgEQAKgFAJgHQAJgIAHgKIATAPQgJAMgLAJQgKAJgMAFQgZALgcAAQgcAAgYgKg");
	this.shape_82.setTransform(57.4,276.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#AAA683").s().p("AhGCAIAAj+IAXAAIAADoIB2AAIAAAWg");
	this.shape_83.setTransform(214,221.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#AAA683").s().p("ABeCAIgbhEIiGAAIgdBEIgZAAIBwj+IAXAAIBrD+gAA6AmIg5iLIg7CLIB0AAg");
	this.shape_84.setTransform(181.1,221.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#AAA683").s().p("AA4CAIhGh6IgtAAIAAB6IgXAAIAAj+IBDAAIANAAIASACIAVAGQAKAEAIAIQAJAHAFAMQAFALAAAQQAAATgGAMQgGAMgKAHQgJAIgMACIgWAFIBKB7gAg7gOIAzAAQASAAALgFQAMgFAGgGQAHgHACgIIADgPIgDgOQgCgIgHgGQgGgIgMgEQgLgFgSAAIgzAAg");
	this.shape_85.setTransform(149.3,221.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#AAA683").s().p("AgrB6QgRgIgLgPQgMgOgEgTQgFgTAAgUIAAidIAYAAIAACXQAAANADAQQACAPAIAOQAHANANAJQAHAEAJACQAJACAKAAQAWAAAOgIQANgJAIgNQAHgOACgPQAEgQAAgNIAAiXIAXAAIAACdQAAAUgEATQgGATgKAOQgGAHgHAGQgHAGgJAEQgSAJgaAAQgZAAgSgJg");
	this.shape_86.setTransform(115.2,221.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#AAA683").s().p("AhGCAIAAj+IAXAAIAADoIB2AAIAAAWg");
	this.shape_87.setTransform(85.5,221.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#AAA683").s().p("AhNCAIAAj+IBKAAQAMAAAOADQAPADAMAHQAMAIAIANQAIANAAAUQAAARgHANQgGAMgLAJQgKAHgOADQgOAEgPAAIg2AAIAAB6gAg1gOIA1AAQAKAAAKgCQAJgDAIgFQAIgFAEgJQAFgJAAgMQAAgMgFgJQgFgIgIgGQgHgGgKgDQgKgCgJAAIg1AAg");
	this.shape_88.setTransform(55.5,221.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#AAA683").s().p("AhQCAIAAj/ICbAAIAAAWIiDAAIAABbIB7AAIAAAUIh7AAIAABkICJAAIAAAWg");
	this.shape_89.setTransform(414.3,166.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#AAA683").s().p("AgLCAIAAjpIhXAAIAAgWIDFAAIAAAWIhXAAIAADpg");
	this.shape_90.setTransform(382.4,166.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#AAA683").s().p("ABKCAIiZjfIgBAAIAADfIgYAAIAAj/IAeAAICbDfIABAAIAAjfIAXAAIAAD/g");
	this.shape_91.setTransform(348.1,166.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#AAA683").s().p("AhQCAIAAj/ICbAAIAAAWIiDAAIAABbIB7AAIAAAUIh7AAIAABkICJAAIAAAWg");
	this.shape_92.setTransform(314.3,166.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#AAA683").s().p("AA4CAIhGh6IgtAAIAAB6IgXAAIAAj/IBDAAIANABIASACIAVAGQAKAEAIAIQAJAHAFAMQAFALAAARQAAASgGAMQgGAMgKAHQgJAHgMADIgWAFIBKB7gAg7gOIAzAAQASAAALgFQAMgEAGgHQAHgHACgIIADgOIgDgPQgCgIgHgGQgGgIgMgEQgLgFgSAAIgzAAg");
	this.shape_93.setTransform(283.3,166.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#AAA683").s().p("ABeCAIgbhEIiGAAIgdBEIgZAAIBwj/IAXAAIBrD/gAA6AmIg5iLIg7CLIB0AAg");
	this.shape_94.setTransform(249.2,166.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#AAA683").s().p("AhNCAIAAj/IBKAAQAMABAOADQAPADAMAIQAMAHAIANQAIANAAAUQAAARgHANQgGANgLAIQgKAIgOADQgOADgPAAIg2AAIAAB6gAg1gOIA1AAQAKAAAKgCQAJgDAIgFQAIgFAEgJQAFgJAAgMQAAgMgFgJQgFgJgIgFQgHgGgKgDQgKgCgJAAIg1AAg");
	this.shape_95.setTransform(220.1,166.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#AAA683").s().p("AgsB9QgKgEgKgIQgJgHgHgLIAXgOQAFAIAGAFQAFAHAIADQAPAJASgBQAMAAALgDQAKgEAIgGQAHgHAFgJQAFgJAAgLQgBgOgGgJQgFgJgJgFQgKgFgMgFIgXgHIgXgJQgMgFgKgIQgJgHgFgNQgGgMAAgSQAAgRAHgNQAGgNAMgJQALgJAPgFQAPgEAOAAQAPAAAYAIQASAHANARIgUAPQgKgMgMgHQgMgGgQgBQgKAAgLADQgKAEgIAGQgIAFgFAKQgEAJAAAMQAAAJACAIQADAHAFAGQAJAKAOAGQAQAGAPAEQARAFAPAGQAOAHAKAOQAKAOAAAYQAAAQgGAOQgHANgLAJQgLAKgOAEQgPAFgPAAQgYAAgWgJg");
	this.shape_96.setTransform(188.8,166.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#AAA683").s().p("ABLCAIiajfIgCAAIAADfIgXAAIAAj/IAeAAICaDfIACAAIAAjfIAXAAIAAD/g");
	this.shape_97.setTransform(154.8,166.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#AAA683").s().p("ABfCAIgchEIiGAAIgdBEIgYAAIBuj/IAYAAIBsD/gAA7AmIg6iLIg6CLIB0AAg");
	this.shape_98.setTransform(118.5,166.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#AAA683").s().p("AA4CAIhGh6IgtAAIAAB6IgXAAIAAj/IBDAAIANABIASACIAVAGQAKAEAIAIQAJAHAFAMQAFALAAARQAAASgGAMQgGAMgKAHQgJAHgMADIgWAFIBKB7gAg7gOIAzAAQASAAALgFQAMgEAGgHQAHgHACgIIADgOIgDgPQgCgIgHgGQgGgIgMgEQgLgFgSAAIgzAAg");
	this.shape_99.setTransform(86.7,166.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#AAA683").s().p("AgLCAIAAjpIhXAAIAAgWIDFAAIAAAWIhXAAIAADpg");
	this.shape_100.setTransform(54.6,166.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#AAA683").s().p("AgbCEIgXgGQgWgIgQgSIAjghQAIAMANAHQAOAHAQAAQAGAAAIgCQAIgDAHgDQAGgFAEgGQAEgIAAgIQAAgOgJgHQgJgIgOgGIgbgJQgQgFgNgIQgOgHgJgOQgJgNAAgXQAAgUAIgOQAIgOANgKQAOgJARgFQARgFAQAAQAUAAATAGQAKAEAIAEQAJAGAHAHIghAiQgHgKgMgFQgMgFgOAAIgOACQgIACgFAEQgGADgEAHQgEAHAAAIQABANAIAHQAJAGAOAFIAcAKQAQAFANAJQANAGAKAOQAEAHACAJQACAKABAKQgBAVgHAPQgHAQgNAKQgNAKgRAFQgRAFgSAAg");
	this.shape_101.setTransform(345.2,111.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#AAA683").s().p("AgcCDQgNgBgNgGQgYgJgTgSQgIgIgHgLQgHgLgFgLQgKgZAAgeQAAgdAKgaQAFgMAHgKQAHgLAIgJQATgSAYgJQANgFANgCQAOgDAOAAQAOAAAOACQAOADAMAEQANAEALAIQAKAGAJAJQASARAKAZQAFAMACAOQADAOAAAPQAAAPgDANQgCAOgFAMQgKAYgSASQgJAJgKAHQgLAHgNAEQgZALgdAAQgOAAgOgDgAgjhVQgQAHgMAMQgLANgHAQQgGARAAATQAAAUAGARQAHARALANQAMAMAQAHQAQAIATAAQAUAAAQgIQAQgHALgMQAMgNAGgRQAHgRgBgUQABgTgHgRQgGgQgMgNQgLgMgQgHQgQgHgUAAQgTAAgQAHg");
	this.shape_102.setTransform(310.3,111.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#AAA683").s().p("AA5CAIh9jDIAAAAIAADDIguAAIAAj/IA8AAIB7C9IAAAAIAAi9IAuAAIAAD/g");
	this.shape_103.setTransform(271,111.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#AAA683").s().p("ABOCAIgYg7IhtAAIgXA7IgzAAIBvj/IAmAAIBuD/gAAmAfIgmhoIgnBoIBNAAg");
	this.shape_104.setTransform(233.7,111.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#AAA683").s().p("Ag4BzQgVgOgJgeIAtgMQAEAOALAIQAKAIAQAAQAJAAAJgEQAIgDAGgGQAGgGADgIQADgIAAgJQAAgNgFgKQgFgJgIgGQgIgGgLgCQgKgCgMAAQgOAAgOADQgOACgLAGIACiJICRAAIAAAnIhmAAIgBAzIANgCIANgBQATAAAQAGQAPAGALALQAMALAGAOQAGAQAAATQAAAVgHAQQgHARgMALQgNALgRAGQgQAHgTAAQgfAAgVgPg");
	this.shape_105.setTransform(179.1,111.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#AAA683").s().p("AhBCAIBnjVIh8AAIAAgqICtAAIAAAoIhlDXg");
	this.shape_106.setTransform(147.6,111.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#AAA683").s().p("ABOCiIgYg6IhtAAIgXA6IgzAAIBvj+IAmAAIBuD+gAAnBBIgnhnIgnBnIBOAAgAgQhtIAig0IAyAAIgzA0g");
	this.shape_107.setTransform(93.9,107.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#AAA683").s().p("AA8CAIAAhxIh3AAIAABxIgtAAIAAj/IAtAAIAABmIB3AAIAAhmIAtAAIAAD/g");
	this.shape_108.setTransform(57.6,111.2);

	var maskedShapeInstanceList = [this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]}).to({state:[]},66).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},119).wait(10));

	// Camada 5
	this.instance = new lib.Símbolo1();
	this.instance.parent = this;
	this.instance.setTransform(235.1,195,1,1,0,0,0,22.5,22.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65).to({_off:false},0).wait(1).to({rotation:12.9},0).wait(1).to({rotation:25.7,x:235},0).wait(1).to({rotation:38.6},0).wait(1).to({rotation:51.4,x:235.1},0).wait(1).to({rotation:64.3},0).wait(1).to({rotation:77.1,x:235},0).wait(1).to({rotation:90,x:235.1},0).to({_off:true},1).wait(105).to({_off:false,rotation:0},0).wait(1).to({rotation:12.9},0).wait(1).to({rotation:25.7,x:235},0).wait(1).to({rotation:38.6},0).wait(1).to({rotation:51.4,x:235.1},0).wait(1).to({rotation:64.3},0).wait(1).to({rotation:77.1,x:235},0).wait(1).to({rotation:90,x:235.1},0).to({_off:true},1).wait(9));

	// Camada 1 Cópia
	this.instance_1 = new lib.cima();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.5,77.5,1,1,0,0,0,22.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(57).to({x:46.1,y:90.6},0).wait(1).to({x:69.7,y:103.6},0).wait(1).to({x:93.4,y:116.7},0).wait(1).to({x:117,y:129.7},0).wait(1).to({x:140.6,y:142.8},0).wait(1).to({x:164.2,y:155.9},0).wait(1).to({x:187.9,y:168.9},0).wait(1).to({x:211.5,y:182},0).wait(1).to({x:235.1,y:195},0).to({_off:true},1).wait(6).to({_off:false},0).wait(1).to({x:211.4,y:175.8},0).wait(1).to({x:187.8,y:156.7},0).wait(1).to({x:164.2,y:137.5},0).wait(1).to({x:140.6,y:118.3},0).wait(1).to({x:117,y:99.1},0).wait(1).to({x:93.3,y:80},0).wait(1).to({x:69.7,y:60.8},0).wait(1).to({x:46.1,y:41.6},0).wait(1).to({x:22.5,y:22.5},0).wait(89).to({x:46.1,y:41.6},0).wait(1).to({x:69.7,y:60.8},0).wait(1).to({x:93.3,y:80},0).wait(1).to({x:116.9,y:99.1},0).wait(1).to({x:140.6,y:118.3},0).wait(1).to({x:164.2,y:137.5},0).wait(1).to({x:187.8,y:156.7},0).wait(1).to({x:211.4,y:175.8},0).wait(1).to({x:235.1,y:195},0).to({_off:true},1).wait(6).to({_off:false,x:212.6,y:172.6},0).wait(1).to({x:191.5,y:162},0).wait(1).to({x:170.3,y:151.4},0).wait(1).to({x:149.2,y:140.9},0).wait(1).to({x:128.1,y:130.3},0).wait(1).to({x:107,y:119.7},0).wait(1).to({x:85.8,y:109.2},0).wait(1).to({x:64.7,y:98.6},0).wait(1).to({x:43.6,y:88},0).wait(1).to({x:22.5,y:77.5},0).wait(1));

	// Camada 1
	this.instance_2 = new lib.cima();
	this.instance_2.parent = this;
	this.instance_2.setTransform(447.5,312.5,1,1,180,0,0,22.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(57).to({x:423.9,y:299.4},0).wait(1).to({x:400.3,y:286.4},0).wait(1).to({x:376.7,y:273.3},0).wait(1).to({x:353.1,y:260.3},0).wait(1).to({x:329.5,y:247.2},0).wait(1).to({x:305.8,y:234.1},0).wait(1).to({x:282.2,y:221.1},0).wait(1).to({x:258.6,y:208},0).wait(1).to({x:235,y:195},0).to({_off:true},1).wait(6).to({_off:false,x:235.1},0).wait(1).to({x:267.4,y:214.2},0).wait(1).to({x:299.7,y:233.3},0).wait(1).to({x:332,y:252.5},0).wait(1).to({x:364.4,y:271.7},0).wait(1).to({x:396.7,y:290.8},0).wait(1).to({x:429,y:310},0).wait(1).to({x:461.4,y:329.2},0).wait(1).to({x:493.7,y:348.3},0).wait(1).to({x:526,y:367.5},0).wait(89).to({x:493.6,y:348.3},0).wait(1).to({x:461.3,y:329.2},0).wait(1).to({x:429,y:310},0).wait(1).to({x:396.7,y:290.8},0).wait(1).to({x:364.3,y:271.7},0).wait(1).to({x:332,y:252.5},0).wait(1).to({x:299.7,y:233.3},0).wait(1).to({x:267.4,y:214.2},0).wait(1).to({x:235.1,y:195},0).to({_off:true},1).wait(6).to({_off:false},0).wait(1).to({x:258.7,y:208.1},0).wait(1).to({x:282.3,y:221.1},0).wait(1).to({x:305.9,y:234.2},0).wait(1).to({x:329.5,y:247.2},0).wait(1).to({x:353.1,y:260.3},0).wait(1).to({x:376.7,y:273.3},0).wait(1).to({x:400.3,y:286.4},0).wait(1).to({x:423.9,y:299.4},0).wait(1).to({x:447.5,y:312.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(292.5,250,518.5,280);
// library properties:
lib.properties = {
	id: '8C4ED495067F4EAC8F21665D81C556E6',
	width: 585,
	height: 390,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8C4ED495067F4EAC8F21665D81C556E6'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;