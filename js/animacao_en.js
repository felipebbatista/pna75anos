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


(lib.cima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAA683").s().p("AjgDhIAAnBIHBAAIAABkIldAAIAAFdg");
	this.shape.setTransform(22.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cima, new cjs.Rectangle(0,0,45,45), null);


// stage content:
(lib.PNA_AnimacaoHotsite_EN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cantoneira Baixo
	this.instance = new lib.cima();
	this.instance.parent = this;
	this.instance.setTransform(417.5,288.5,1,1,180,0,0,22.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({x:399.5},0).wait(1).to({x:374.3,y:274.1},0).wait(1).to({x:350.7,y:260.6},0).wait(1).to({x:328.6,y:248},0).wait(1).to({x:308.1,y:236.3},0).wait(1).to({x:289.2,y:225.5},0).wait(1).to({x:271.9,y:215.6},0).wait(1).to({x:256.1,y:206.6},0).wait(1).to({x:242,y:198.5},0).wait(1).to({x:229.3,y:191.3},0).wait(1).to({x:218.3,y:185},0).wait(1).to({x:208.9,y:179.6},0).wait(2).to({rotation:207.5},0).wait(1).to({rotation:230},0).wait(1).to({rotation:247.5},0).wait(1).to({rotation:260},0).wait(1).to({rotation:267.5},0).wait(1).to({rotation:270},0).wait(1).to({rotation:180},0).wait(1).to({x:220.5,y:186.7},0).wait(1).to({x:234,y:194.9},0).wait(1).to({x:249.3,y:204.3},0).wait(1).to({x:266.3,y:214.7},0).wait(1).to({x:285.2,y:226.2},0).wait(1).to({x:305.8,y:238.8},0).wait(1).to({x:328.3,y:252.5},0).wait(1).to({x:352.5,y:267.3},0).wait(1).to({x:378.6,y:283.2},0).wait(1).to({x:406.4,y:300.2},0).wait(1).to({x:436.1,y:318.3},0).wait(1).to({x:467.5,y:337.5},0).wait(86).to({x:418.4,y:307.5},0).wait(1).to({x:374.4,y:280.6},0).wait(1).to({x:335.6,y:256.9},0).wait(1).to({x:302,y:236.4},0).wait(1).to({x:273.6,y:219},0).wait(1).to({x:250.3,y:204.8},0).wait(1).to({x:232.2,y:193.7},0).wait(1).to({x:219.2,y:185.8},0).wait(1).to({x:211.5,y:181.1},0).wait(1).to({x:208.9,y:179.5},0).wait(2).to({rotation:212.4},0).wait(1).to({rotation:237.6},0).wait(1).to({rotation:255.6},0).wait(1).to({rotation:266.4},0).wait(1).to({rotation:270},0).wait(1).to({rotation:180},0).wait(1).to({x:219.2,y:184.9},0).wait(1).to({x:231.3,y:191.2},0).wait(1).to({x:245.1,y:198.4},0).wait(1).to({x:260.6,y:206.5},0).wait(1).to({x:277.9,y:215.5},0).wait(1).to({x:296.8,y:225.4},0).wait(1).to({x:317.5,y:236.2},0).wait(1).to({x:339.9,y:248},0).wait(1).to({x:364,y:260.6},0).wait(1).to({x:389.9,y:274.1},0).wait(1).to({x:417.5,y:288.5},0).wait(1));

	// Cantoneira Cima
	this.instance_1 = new lib.cima();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.5,72.5,1,1,0,0,0,22.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({x:47.1,y:86.7},0).wait(1).to({x:70.3,y:99.9},0).wait(1).to({x:91.8,y:112.3},0).wait(1).to({x:111.8,y:123.9},0).wait(1).to({x:130.3,y:134.5},0).wait(1).to({x:147.3,y:144.2},0).wait(1).to({x:162.7,y:153.1},0).wait(1).to({x:176.5,y:161},0).wait(1).to({x:188.9,y:168.1},0).wait(1).to({x:199.6,y:174.3},0).wait(1).to({x:208.9,y:179.7},0).wait(2).to({rotation:27.5},0).wait(1).to({rotation:50},0).wait(1).to({rotation:67.5},0).wait(1).to({rotation:80,y:179.6},0).wait(1).to({rotation:87.5,y:179.7},0).wait(1).to({rotation:90},0).wait(1).to({rotation:0},0).wait(1).to({x:200.5,y:172.6},0).wait(1).to({x:190.8,y:164.4},0).wait(1).to({x:179.8,y:155.1},0).wait(1).to({x:167.5,y:144.7},0).wait(1).to({x:153.9,y:133.3},0).wait(1).to({x:139,y:120.7},0).wait(1).to({x:122.8,y:107.1},0).wait(1).to({x:105.4,y:92.4},0).wait(1).to({x:86.6,y:76.5},0).wait(1).to({x:66.5,y:59.6},0).wait(1).to({x:45.2,y:41.6},0).wait(1).to({x:22.5,y:22.5},0).wait(86).to({x:57.9,y:52.3},0).wait(1).to({x:89.6,y:79.1},0).wait(1).to({x:117.6,y:102.6},0).wait(1).to({x:141.8,y:123.1},0).wait(1).to({x:162.3,y:140.4},0).wait(1).to({x:179.1,y:154.5},0).wait(1).to({x:192.1,y:165.5},0).wait(1).to({x:201.4,y:173.4},0).wait(1).to({x:207,y:178.1},0).wait(1).to({x:208.9,y:179.7},0).wait(2).to({rotation:32.4,y:179.6},0).wait(1).to({rotation:57.6},0).wait(1).to({rotation:75.6,y:179.7},0).wait(1).to({rotation:86.4,y:179.6},0).wait(1).to({rotation:90,y:179.7},0).wait(1).to({rotation:0,y:179.5},0).wait(1).to({x:199.7,y:174.2},0).wait(1).to({x:188.9,y:168},0).wait(1).to({x:176.6,y:160.9},0).wait(1).to({x:162.7,y:153},0).wait(1).to({x:147.3,y:144.1},0).wait(1).to({x:130.3,y:134.4},0).wait(1).to({x:111.9,y:123.8},0).wait(1).to({x:91.8,y:112.3},0).wait(1).to({x:70.3,y:99.9},0).wait(1).to({x:47.2,y:86.7},0).wait(1).to({x:22.5,y:72.5},0).wait(1));

	// Camada 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A+3SqMAAAglTMA9vAAAMAAAAlTg");
	var mask_graphics_53 = new cjs.Graphics().p("A+3SqMAAAglTMA9vAAAMAAAAlTg");
	var mask_graphics_54 = new cjs.Graphics().p("A4FOwIAA9fMAwLAAAIAAdfg");
	var mask_graphics_55 = new cjs.Graphics().p("AyNLWIAA2rMAkbAAAIAAWrg");
	var mask_graphics_56 = new cjs.Graphics().p("AtPIfIAAw9IafAAIAAQ9g");
	var mask_graphics_57 = new cjs.Graphics().p("ApLGIIAAsPISXAAIAAMPg");
	var mask_graphics_58 = new cjs.Graphics().p("AmAEUIAAomIMBAAIAAImg");
	var mask_graphics_59 = new cjs.Graphics().p("AjwDAIAAl/IHhAAIAAF/g");
	var mask_graphics_60 = new cjs.Graphics().p("AiZCOIAAkbIEzAAIAAEbg");
	var mask_graphics_61 = new cjs.Graphics().p("Ah8B9IAAj5ID5AAIAAD5g");
	var mask_graphics_75 = new cjs.Graphics().p("Ah8B9IAAj5ID5AAIAAD5g");
	var mask_graphics_76 = new cjs.Graphics().p("AiWCPIAAkdIEtAAIAAEdg");
	var mask_graphics_77 = new cjs.Graphics().p("AjkDEIAAmHIHJAAIAAGHg");
	var mask_graphics_78 = new cjs.Graphics().p("AlmEdIAAo5ILNAAIAAI5g");
	var mask_graphics_79 = new cjs.Graphics().p("AobGaIAAs0IQ3AAIAAM0g");
	var mask_graphics_80 = new cjs.Graphics().p("AsFI7IAAx1IYLAAIAAR1g");
	var mask_graphics_81 = new cjs.Graphics().p("AwiL/IAA39MAhGAAAIAAX9g");
	var mask_graphics_82 = new cjs.Graphics().p("A10PnIAA/NMArpAAAIAAfNg");
	var mask_graphics_83 = new cjs.Graphics().p("A75TyMAAAgnjMA3zAAAMAAAAnjg");
	var mask_graphics_84 = new cjs.Graphics().p("EgiyAYiMAAAgxDMBFlAAAMAAAAxDg");
	var mask_graphics_169 = new cjs.Graphics().p("EgiyAYiMAAAgxDMBFlAAAMAAAAxDg");
	var mask_graphics_170 = new cjs.Graphics().p("A6ESiMAAAglDMA0KAAAMAAAAlDg");
	var mask_graphics_171 = new cjs.Graphics().p("AytNeIAA67MAlaAAAIAAa7g");
	var mask_graphics_172 = new cjs.Graphics().p("AsrJVIAAypIZXAAIAASpg");
	var mask_graphics_173 = new cjs.Graphics().p("An+GGIAAsMIP9AAIAAMMg");
	var mask_graphics_174 = new cjs.Graphics().p("AkoDzIAAnlIJQAAIAAHlg");
	var mask_graphics_175 = new cjs.Graphics().p("AinCbIAAk1IFPAAIAAE1g");
	var mask_graphics_176 = new cjs.Graphics().p("Ah8B9IAAj5ID5AAIAAD5g");
	var mask_graphics_190 = new cjs.Graphics().p("Ah8B9IAAj5ID5AAIAAD5g");
	var mask_graphics_191 = new cjs.Graphics().p("AiiCTIAAklIFFAAIAAElg");
	var mask_graphics_192 = new cjs.Graphics().p("AkTDUIAAmnIInAAIAAGng");
	var mask_graphics_193 = new cjs.Graphics().p("AnQFCIAAqDIOhAAIAAKDg");
	var mask_graphics_194 = new cjs.Graphics().p("ArZHaIAAuzIWyAAIAAOzg");
	var mask_graphics_195 = new cjs.Graphics().p("AwsKfIAA08MAhZAAAIAAU8g");
	var mask_graphics_196 = new cjs.Graphics().p("A3MOOIAA8bMAuZAAAIAAcbg");
	var mask_graphics_197 = new cjs.Graphics().p("A+3SqMAAAglTMA9vAAAMAAAAlTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:208.6,y:179.9}).wait(53).to({graphics:mask_graphics_53,x:208.6,y:179.9}).wait(1).to({graphics:mask_graphics_54,x:208.7,y:179.9}).wait(1).to({graphics:mask_graphics_55,x:208.8,y:179.8}).wait(1).to({graphics:mask_graphics_56,x:208.8,y:179.8}).wait(1).to({graphics:mask_graphics_57,x:208.9,y:179.7}).wait(1).to({graphics:mask_graphics_58,x:208.9,y:179.7}).wait(1).to({graphics:mask_graphics_59,x:208.9,y:179.7}).wait(1).to({graphics:mask_graphics_60,x:209,y:179.7}).wait(1).to({graphics:mask_graphics_61,x:209,y:179.7}).wait(1).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_graphics_75,x:209,y:179.7}).wait(1).to({graphics:mask_graphics_76,x:209.4,y:179.7}).wait(1).to({graphics:mask_graphics_77,x:210.7,y:179.7}).wait(1).to({graphics:mask_graphics_78,x:212.9,y:179.7}).wait(1).to({graphics:mask_graphics_79,x:216,y:179.7}).wait(1).to({graphics:mask_graphics_80,x:220,y:179.7}).wait(1).to({graphics:mask_graphics_81,x:224.8,y:179.7}).wait(1).to({graphics:mask_graphics_82,x:230.5,y:179.7}).wait(1).to({graphics:mask_graphics_83,x:237.2,y:179.7}).wait(1).to({graphics:mask_graphics_84,x:244.6,y:179.7}).wait(85).to({graphics:mask_graphics_169,x:244.6,y:179.7}).wait(1).to({graphics:mask_graphics_170,x:235.2,y:179.7}).wait(1).to({graphics:mask_graphics_171,x:227.2,y:179.7}).wait(1).to({graphics:mask_graphics_172,x:220.6,y:179.7}).wait(1).to({graphics:mask_graphics_173,x:215.5,y:179.7}).wait(1).to({graphics:mask_graphics_174,x:211.9,y:179.7}).wait(1).to({graphics:mask_graphics_175,x:209.7,y:179.7}).wait(1).to({graphics:mask_graphics_176,x:209,y:179.7}).wait(14).to({graphics:mask_graphics_190,x:209,y:179.7}).wait(1).to({graphics:mask_graphics_191,x:208.9,y:179.7}).wait(1).to({graphics:mask_graphics_192,x:208.9,y:179.7}).wait(1).to({graphics:mask_graphics_193,x:208.9,y:179.7}).wait(1).to({graphics:mask_graphics_194,x:208.9,y:179.8}).wait(1).to({graphics:mask_graphics_195,x:208.8,y:179.8}).wait(1).to({graphics:mask_graphics_196,x:208.7,y:179.9}).wait(1).to({graphics:mask_graphics_197,x:208.6,y:179.9}).wait(1));

	// Frases
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAA683").s().p("AhEBuIAAjbICFAAIAAATIhxAAIAABOIBqAAIAAASIhqAAIAABVIB1AAIAAATg");
	this.shape.setTransform(387.7,254.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AAA683").s().p("AgKBuIhSjbIAWAAIBGDAIBHjAIAWAAIhUDbg");
	this.shape_1.setTransform(359.6,254.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AAA683").s().p("AgJBuIAAjbIATAAIAADbg");
	this.shape_2.setTransform(337.4,254.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AAA683").s().p("AgJBuIAAjIIhLAAIAAgTICpAAIAAATIhLAAIAADIg");
	this.shape_3.setTransform(315.4,254.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AAA683").s().p("ABSBuIgYg7Ih0AAIgYA7IgWAAIBhjbIAUAAIBbDbgAAyAhIgxh3IgzB3IBkAAg");
	this.shape_4.setTransform(289,254.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AAA683").s().p("AAxBuIg9hoIgmAAIAABoIgVAAIAAjbIA6AAIAOABQAJAAALADQALADAKAGQAJAGAHALQAGALAAARQAAAVgJALQgJAMgNAGQgMAEgNABIBABqgAgygMIArAAQAVAAALgHQALgGAEgJQAEgJAAgIQAAgIgEgJQgEgJgLgGQgLgHgVAAIgrAAg");
	this.shape_5.setTransform(261.2,254.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AAA683").s().p("Ag7BkQgZgOgOgaQgPgaABgiQgBghAPgaQAOgaAZgOQAagPAhAAQAiAAAZAPQAaAOAOAaQAOAaAAAhQAAAigOAaQgOAagaAOQgZAPgiAAQghAAgagPgAgxhTQgUANgMAWQgLAVAAAbQAAAcALAVQAMAWAUANQAVAMAcABQAdgBAUgMQAWgNALgWQAKgVABgcQgBgbgKgVQgLgWgWgNQgUgMgdgBQgcABgVAMg");
	this.shape_6.setTransform(229.2,254.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AAA683").s().p("AhHBuIAAjbIA/AAQARAAAQAEQAQAFAKAMQALANAAAYQAAARgKAMQgKANgTAEIAAAAQAWACANAOQAOAOAAAXQAAATgHAMQgIAMgLAHQgLAHgMACQgNADgLAAgAgyBbIAvAAQAWAAAMgHQANgHAEgKQAEgKgBgIQAAgQgHgKQgIgKgMgFQgMgEgMAAIgyAAgAgygOIAqAAQAUAAALgGQALgHAEgIQAEgJAAgHQAAgPgHgJQgGgIgLgEQgLgDgMAAIgtAAg");
	this.shape_7.setTransform(197.8,254.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AAA683").s().p("ABRBuIgXg7IhzAAIgZA7IgVAAIBfjbIAVAAIBcDbgAAzAhIgyh3IgyB3IBkAAg");
	this.shape_8.setTransform(168,254.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AAA683").s().p("Ag9BuIAAjbIAVAAIAADIIBmAAIAAATg");
	this.shape_9.setTransform(142.1,254.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AAA683").s().p("Ag8BuIAAjbIAUAAIAADIIBlAAIAAATg");
	this.shape_10.setTransform(117.6,254.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AAA683").s().p("Ag7BkQgZgOgOgaQgOgaAAgiQAAghAOgaQAOgaAZgOQAagPAhAAQAiAAAZAPQAaAOAOAaQAOAaAAAhQAAAigOAaQgOAagaAOQgZAPgiAAQghAAgagPgAgxhTQgUANgMAWQgLAVAAAbQAAAcALAVQAMAWAUANQAVAMAcABQAdgBAUgMQAWgNALgWQAKgVABgcQgBgbgKgVQgLgWgWgNQgUgMgdgBQgcABgVAMg");
	this.shape_11.setTransform(86.5,254.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AAA683").s().p("AAQBzQghAAgZgPQgagOgOgaQgOgaAAgiQAAghAOgaQAOgaAagOQAZgPAhAAQAXAAASAIQAUAIAPASIgRAOQgLgPgPgHQgQgIgRAAQgcABgUAMQgWANgLAWQgLAVAAAbQAAAcALAVQALAWAWANQAUAMAcABQALAAAMgEQAMgEALgHQALgIAIgLIAQAMQgQAWgUAJQgUAJgXAAIgCAAg");
	this.shape_12.setTransform(54.1,254.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AAA683").s().p("Ag8BuIAAjbIAUAAIAADIIBmAAIAAATg");
	this.shape_13.setTransform(191,204.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AAA683").s().p("ABSBuIgYg7Ih0AAIgYA7IgWAAIBhjbIATAAIBcDbgAAyAhIgxh3IgzB3IBkAAg");
	this.shape_14.setTransform(162.2,204.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AAA683").s().p("AAxBuIg9hoIgmAAIAABoIgVAAIAAjbIA6AAIAOABQAJAAALADQALADAKAGQAJAGAHALQAGALAAARQAAAVgJALQgJAMgNAGQgMAEgNABIBABqgAgygMIArAAQAVAAALgHQALgGAEgJQAEgJAAgIQAAgIgEgJQgEgJgLgGQgLgHgVAAIgrAAg");
	this.shape_15.setTransform(134.4,204.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AAA683").s().p("AguBkQgSgNgIgUQgHgUAAgYIAAiHIAVAAIAACCQAAAMACANQACANAGALQAGAMAMAHQAMAIASAAQATAAAMgIQAMgHAGgMQAGgLADgNQACgNAAgMIAAiCIAUAAIAACHQAAAYgIAUQgHAUgRANQgSAMgeAAQgcAAgSgMg");
	this.shape_16.setTransform(104.7,205.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AAA683").s().p("Ag9BuIAAjbIAVAAIAADIIBmAAIAAATg");
	this.shape_17.setTransform(78.7,204.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AAA683").s().p("AhCBuIAAjbIA/AAQALAAANADQALADALAGQALAHAGALQAHALAAARQgBAUgIANQgKANgPAFQgPAGgRAAIgvAAIAABogAgugMIAuAAQAMAAALgEQAKgDAHgJQAGgIAAgPQAAgOgGgIQgIgJgKgEQgLgEgLAAIguAAg");
	this.shape_18.setTransform(52.5,204.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#AAA683").s().p("AgJBuIAAjIIhLAAIAAgTICpAAIAAATIhLAAIAADIg");
	this.shape_19.setTransform(337.8,155.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AAA683").s().p("ABABuIiFi/IAAAAIAAC/IgVAAIAAjbIAbAAICFDAIAAAAIAAjAIAUAAIAADbg");
	this.shape_20.setTransform(308,155.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#AAA683").s().p("AhFBuIAAjbICGAAIAAATIhxAAIAABOIBpAAIAAASIhpAAIAABVIB2AAIAAATg");
	this.shape_21.setTransform(278.5,155.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AAA683").s().p("AAxBuIg9hoIgmAAIAABoIgVAAIAAjbIA6AAIAOABQAJAAALADQALADAKAGQAJAGAHALQAGALAAARQAAAVgJALQgJAMgNAGQgMAEgNABIBABqgAgygMIArAAQAVAAALgHQALgGAEgJQAEgJAAgIQAAgIgEgJQgEgJgLgGQgLgHgVAAIgrAAg");
	this.shape_22.setTransform(251.4,155.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AAA683").s().p("ABRBuIgXg7IhzAAIgZA7IgVAAIBfjbIAVAAIBcDbgAAzAhIgyh3IgyB3IBkAAg");
	this.shape_23.setTransform(221.6,155.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AAA683").s().p("AhCBuIAAjbIA/AAQALAAAMADQAMADALAGQALAHAHALQAGALAAARQAAAUgKANQgIANgPAFQgPAGgSAAIguAAIAABogAgtgMIAtAAQAMAAAKgEQALgDAGgJQAIgIgBgPQABgOgIgIQgGgJgMgEQgKgEgLAAIgtAAg");
	this.shape_24.setTransform(196.2,155.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AAA683").s().p("AgmBsQgSgIgNgSIAUgNQAIAOANAHQANAHAPAAQAOAAALgGQALgFAHgJQAGgKAAgNQAAgPgIgJQgIgIgNgFIgagKQgPgEgMgFQgNgHgJgMQgIgNAAgUQAAgUAKgNQAKgOAQgGQAQgHASAAQARAAAQAGQAPAHALAOIgRANQgIgLgLgFQgKgGgOAAQgNAAgLAFQgLAEgGAKQgHAJAAAOQAAAQAIAJQAIAJANAFIAaAJQAPAEAMAFQANAHAIAMQAIALABAVQgBAUgJANQgKAOgPAHQgPAHgSAAIgCAAQgUAAgSgHg");
	this.shape_25.setTransform(168.8,155.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AAA683").s().p("ABABuIiFi/IAAAAIAAC/IgVAAIAAjbIAbAAICFDAIAAAAIAAjAIAUAAIAADbg");
	this.shape_26.setTransform(139.2,155.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#AAA683").s().p("ABSBuIgYg7Ih0AAIgYA7IgWAAIBhjbIATAAIBdDbgAAzAhIgyh3IgzB3IBlAAg");
	this.shape_27.setTransform(107.5,155.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AAA683").s().p("AAxBuIg9hoIgmAAIAABoIgVAAIAAjbIA6AAIAOABQAJAAALADQALADAKAGQAJAGAHALQAGALAAARQAAAVgJALQgJAMgNAGQgMAEgNABIBABqgAgygMIArAAQAVAAALgHQALgGAEgJQAEgJAAgIQAAgIgEgJQgEgJgLgGQgLgHgVAAIgrAAg");
	this.shape_28.setTransform(79.7,155.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AAA683").s().p("AgJBuIAAjIIhLAAIAAgTICpAAIAAATIhLAAIAADIg");
	this.shape_29.setTransform(51.6,155.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#AAA683").s().p("AgsBtQgSgHgQgOIAjgmQAHAKALAFQALAGAMAAQAHAAAIgDQAIgCAFgFQAFgFAAgIQAAgKgIgGQgHgGgMgEIgYgIQgNgEgLgHQgMgFgHgMQgIgLAAgSQAAgYAMgPQAMgQATgIQATgIAUAAQATAAASAFQARAFAOANIghAkQgHgIgJgDQgKgEgJAAQgHAAgHADQgHACgFAFQgFAFgBAIQABAKAGAFQAIAGAKADIAZAIQAMAEAMAGQAMAGAHALQAHAMAAATQAAAZgMAQQgLAQgTAHQgUAIgWAAQgUAAgTgGg");
	this.shape_30.setTransform(352.1,105.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#AAA683").s().p("AAeBuIgthYIgYAAIAABYIgwAAIAAjbIBVAAQAWAAASAGQATAGALAPQAMAOAAAaQAAAXgNAQQgLAPgYAFIA4BdgAgngSIAdAAIARgBQAKgBAFgFQAHgGAAgLQAAgLgGgGQgFgFgIgCQgJgCgIAAIggAAg");
	this.shape_31.setTransform(325.6,105.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#AAA683").s().p("AA9BuIgTgvIhUAAIgTAvIg1AAIBfjbIAnAAIBfDbgAAZAWIgahDIgaBDIA0AAg");
	this.shape_32.setTransform(294,105.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#AAA683").s().p("AhMBuIAAjbICUAAIAAAtIhkAAIAAAoIBeAAIAAAsIheAAIAAAtIBpAAIAAAtg");
	this.shape_33.setTransform(264.2,105.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#AAA683").s().p("AgXBuIAAheIhTh9IA9AAIAtBSIAxhSIA6AAIhTB9IAABeg");
	this.shape_34.setTransform(235,105.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AAA683").s().p("AgzBhQgTgOgIgcIAxgLQACAMAIAHQAIAIALAAQAPgBAJgJQAIgJAAgOQAAgPgHgIQgIgHgLgEQgLgDgMAAQgMAAgLACIgXAGIADh4ICEAAIAAApIhXAAIgBAiIAJgCIAKgBQAWABARAIQARAJAKAQQAKAPAAAXQAAAZgLASQgLARgTAJQgTAJgXABQgcAAgTgPg");
	this.shape_35.setTransform(188.3,105.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#AAA683").s().p("Ag9BuIBZiwIhrAAIAAgrICfAAIAAApIhWCyg");
	this.shape_36.setTransform(161.3,105.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#AAA683").s().p("AAeBuIgthYIgYAAIAABYIgwAAIAAjbIBVAAQAWAAASAGQATAGALAPQAMAOAAAaQAAAXgNAQQgMAPgXAFIA4BdgAgngSIAdAAIARgBQAKgBAFgFQAHgGAAgLQAAgLgGgGQgFgFgIgCQgJgCgIAAIggAAg");
	this.shape_37.setTransform(116,105.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#AAA683").s().p("Ag8BlQgbgOgPgaQgPgaAAgjQAAgiAPgaQAPgaAbgOQAbgOAhAAQAjAAAaAOQAbAOAPAaQAPAaABAiQgBAjgPAaQgPAagbAOQgaAOgjAAQghAAgbgOgAgjg8QgPAJgJAQQgIAPAAAUQAAAVAIAPQAJAQAPAJQAPAKAUAAQAVAAAPgKQAPgJAIgQQAJgPAAgVQAAgUgJgPQgIgQgPgJQgPgKgVAAQgUAAgPAKg");
	this.shape_38.setTransform(83,105.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#AAA683").s().p("AhJBuIAAjbICTAAIAAAtIhiAAIAAAtIBaAAIAAArIhaAAIAABWg");
	this.shape_39.setTransform(52.5,105.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#AAA683").s().p("ABBBuIiFi/IgBAAIAAC/IgUAAIAAjbIAaAAICEDAIABAAIAAjAIAVAAIAADbg");
	this.shape_40.setTransform(342.1,303.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AAA683").s().p("AAQBzQghAAgagPQgZgOgOgaQgPgaAAgiQAAghAPgaQAOgaAZgOQAagPAhAAQAXAAASAIQAUAIAOASIgRAOQgKgPgQgHQgPgIgRAAQgcABgVAMQgUANgMAWQgLAVAAAbQAAAcALAVQAMAWAUANQAVAMAcABQALAAAMgEQAMgEALgHQAKgIAJgLIARAMQgQAWgVAJQgUAJgXAAIgCAAg");
	this.shape_41.setTransform(241.7,303.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#AAA683").s().p("AguBkQgSgNgHgUQgIgUAAgYIAAiHIAUAAIAACCQAAAMACANQADANAGALQAGAMAMAHQAMAIASAAQATAAAMgIQAMgHAGgMQAGgLACgNQACgNAAgMIAAiCIAVAAIAACHQAAAYgHAUQgIAUgSANQgRAMgeAAQgdAAgRgMg");
	this.shape_42.setTransform(166.4,304.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#AAA683").s().p("Ag7BkQgZgOgOgaQgPgaAAgiQAAghAPgaQAOgaAZgOQAagPAhAAQAiAAAZAPQAaAOAOAaQAOAaAAAhQAAAigOAaQgOAagaAOQgZAPgiAAQghAAgagPgAgxhTQgUANgMAWQgLAVAAAbQAAAcALAVQAMAWAUANQAVAMAcABQAdgBAUgMQAWgNALgWQALgVAAgcQAAgbgLgVQgLgWgWgNQgUgMgdgBQgcABgVAMg");
	this.shape_43.setTransform(133.9,303.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#AAA683").s().p("AhBBuIAAjbICDAAIAAATIhuAAIAABOIBmAAIAAASIhmAAIAABog");
	this.shape_44.setTransform(87.2,303.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#AAA683").s().p("Ag6BkQgagOgOgaQgOgaAAgiQAAghAOgaQAOgaAagOQAZgPAhAAQAiAAAZAPQAZAOAPAaQAOAaAAAhQAAAigOAaQgPAagZAOQgZAPgiAAQghAAgZgPgAgwhTQgWANgLAWQgLAVAAAbQAAAcALAVQALAWAWANQAUAMAcABQAcgBAWgMQAVgNAKgWQALgVABgcQgBgbgLgVQgKgWgVgNQgWgMgcgBQgcABgUAMg");
	this.shape_45.setTransform(55.7,303.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#AAA683").s().p("AgJBuIAAjbIATAAIAADbg");
	this.shape_46.setTransform(397.4,254.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#AAA683").s().p("AhBBuIAAjbICDAAIAAATIhuAAIAABOIBmAAIAAASIhmAAIAABog");
	this.shape_47.setTransform(376.7,254.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#AAA683").s().p("AhEBuIAAjbICFAAIAAATIhxAAIAABOIBqAAIAAASIhqAAIAABVIB1AAIAAATg");
	this.shape_48.setTransform(349.8,254.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#AAA683").s().p("ABBBuIiFi/IgBAAIAAC/IgUAAIAAjbIAaAAICEDAIABAAIAAjAIAVAAIAADbg");
	this.shape_49.setTransform(318.8,254.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#AAA683").s().p("AhEBuIAAjbICFAAIAAATIhxAAIAABOIBqAAIAAASIhqAAIAABVIB1AAIAAATg");
	this.shape_50.setTransform(289.4,254.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#AAA683").s().p("AA+BuIAAhoIh7AAIAABoIgUAAIAAjbIAUAAIAABhIB7AAIAAhhIAUAAIAADbg");
	this.shape_51.setTransform(186.3,254.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#AAA683").s().p("Ag7BkQgZgOgOgaQgPgaAAgiQAAghAPgaQAOgaAZgOQAagPAhAAQAhAAAaAPQAZAOAPAaQAOAaABAhQgBAigOAaQgPAagZAOQgaAPghAAQghAAgagPgAgwhTQgWANgLAWQgLAVAAAbQAAAcALAVQALAWAWANQAUAMAcABQAdgBAVgMQAUgNALgWQAMgVAAgcQAAgbgMgVQgLgWgUgNQgVgMgdgBQgcABgUAMg");
	this.shape_52.setTransform(82,254.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#AAA683").s().p("AhBBuIAAjbICDAAIAAATIhuAAIAABOIBmAAIAAASIhmAAIAABog");
	this.shape_53.setTransform(52.3,254.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#AAA683").s().p("AgJBuIAAjIIhLAAIAAgTICpAAIAAATIhLAAIAADIg");
	this.shape_54.setTransform(348.6,204.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#AAA683").s().p("AhFBuIAAjbICGAAIAAATIhxAAIAABOIBpAAIAAASIhpAAIAABVIB2AAIAAATg");
	this.shape_55.setTransform(289.3,204.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#AAA683").s().p("ABZBuIAAjBIAAAAIhUDBIgIAAIhVjBIAAAAIAADBIgVAAIAAjbIAfAAIBPC3IBQi3IAdAAIAADbg");
	this.shape_56.setTransform(256.6,204.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#AAA683").s().p("ABABuIiFi/IAAAAIAAC/IgUAAIAAjbIAaAAICFDAIAAAAIAAjAIAUAAIAADbg");
	this.shape_57.setTransform(221.8,204.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#AAA683").s().p("Ag7BkQgZgOgOgaQgPgaAAgiQAAghAPgaQAOgaAZgOQAagPAhAAQAiAAAZAPQAaAOAOAaQAOAaAAAhQAAAigOAaQgOAagaAOQgZAPgiAAQghAAgagPgAgxhTQgUANgMAWQgLAVAAAbQAAAcALAVQAMAWAUANQAVAMAcABQAdgBAUgMQAWgNALgWQALgVAAgcQAAgbgLgVQgLgWgWgNQgUgMgdgBQgcABgVAMg");
	this.shape_58.setTransform(187.9,204.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#AAA683").s().p("AgJBuIAAjbIATAAIAADbg");
	this.shape_59.setTransform(134.5,204.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#AAA683").s().p("AgKBuIhSjbIAWAAIBGDAIBHjAIAWAAIhTDbg");
	this.shape_60.setTransform(112.4,204.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#AAA683").s().p("ABABuIiEi/IgBAAIAAC/IgVAAIAAjbIAbAAICEDAIABAAIAAjAIAUAAIAADbg");
	this.shape_61.setTransform(82.2,204.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#AAA683").s().p("AhFBuIAAjbICGAAIAAATIhxAAIAABOIBpAAIAAASIhpAAIAABVIB2AAIAAATg");
	this.shape_62.setTransform(52.7,204.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#AAA683").s().p("ABRBuIgXg7IhzAAIgZA7IgVAAIBfjbIAVAAIBbDbgAAyAhIgxh3IgyB3IBjAAg");
	this.shape_63.setTransform(389.6,154.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#AAA683").s().p("AAQBzQghAAgZgPQgagOgOgaQgOgaAAgiQAAghAOgaQAOgaAagOQAZgPAhAAQAYAAAUAHQAUAIAPAPIgPAQQgHgIgLgHQgJgGgNgDQgMgEgMAAQgcABgUAMQgVANgMAWQgLAVAAAbQAAAcALAVQAMAWAVANQAUAMAcABQARAAAQgDQAQgDAMgHIAAhKIg1AAIAAgSIBJAAIAABoQgSAKgVAFQgTAEgTAAIgEAAg");
	this.shape_64.setTransform(357.3,154.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#AAA683").s().p("AhFBuIAAjbICGAAIAAATIhxAAIAABOIBpAAIAAASIhpAAIAABVIB2AAIAAATg");
	this.shape_65.setTransform(328.6,154.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#AAA683").s().p("ABBBuIiFi/IgBAAIAAC/IgVAAIAAjbIAbAAICEDAIABAAIAAjAIAVAAIAADbg");
	this.shape_66.setTransform(256.1,154.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#AAA683").s().p("AgJBuIAAjbIATAAIAADbg");
	this.shape_67.setTransform(200.7,154.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#AAA683").s().p("Ag8BuIAAjbIAUAAIAADIIBlAAIAAATg");
	this.shape_68.setTransform(181.4,154.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#AAA683").s().p("AgJBuIAAjbIATAAIAADbg");
	this.shape_69.setTransform(159.2,154.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#AAA683").s().p("AhOBuIAAgQICAi4Ih+AAIAAgTICYAAIAAARIiBC3ICEAAIAAATg");
	this.shape_70.setTransform(137.5,154.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#AAA683").s().p("ABRBuIgXg7IhzAAIgZA7IgVAAIBfjbIAVAAIBbDbgAAyAhIgxh3IgyB3IBjAAg");
	this.shape_71.setTransform(109.3,154.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#AAA683").s().p("AhHBuIAAjbIA/AAQARAAAQAEQAQAFAKAMQALANAAAYQAAARgKAMQgKANgTAEIAAAAQAWACANAOQAOAOAAAXQAAATgHAMQgIAMgLAHQgLAHgMACQgNADgLAAgAgyBbIAvAAQAWAAAMgHQANgHAEgKQAEgKgBgIQAAgQgHgKQgIgKgMgFQgMgEgMAAIgyAAgAgygOIAqAAQAUAAALgGQALgHAEgIQAEgJAAgHQAAgPgHgJQgGgIgLgEQgLgDgMAAIgtAAg");
	this.shape_72.setTransform(52.9,154.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#AAA683").s().p("AhEBuIAAjbICFAAIAAATIhxAAIAABOIBqAAIAAASIhqAAIAABVIB1AAIAAATg");
	this.shape_73.setTransform(434.3,105.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#AAA683").s().p("AA9BuIAAhoIh5AAIAABoIgVAAIAAjbIAVAAIAABhIB5AAIAAhhIAVAAIAADbg");
	this.shape_74.setTransform(404.1,105.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#AAA683").s().p("AgJBuIAAjIIhLAAIAAgTICpAAIAAATIhLAAIAADIg");
	this.shape_75.setTransform(375,105.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#AAA683").s().p("AAQBzQghAAgZgPQgagOgOgaQgOgaAAgiQAAghAOgaQAOgaAagOQAZgPAhAAQAYAAAUAHQAUAIAPAPIgPAQQgHgIgKgHQgKgGgNgDQgMgEgMAAQgcABgVAMQgVANgLAWQgLAVAAAbQAAAcALAVQALAWAVANQAVAMAcABQASAAAPgDQAQgDAMgHIAAhKIg1AAIAAgSIBKAAIAABoQgUAKgUAFQgTAEgTAAIgEAAg");
	this.shape_76.setTransform(327.4,105.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#AAA683").s().p("ABABuIiEi/IgBAAIAAC/IgVAAIAAjbIAbAAICEDAIABAAIAAjAIAUAAIAADbg");
	this.shape_77.setTransform(295,105.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#AAA683").s().p("AgJBuIAAjbIATAAIAADbg");
	this.shape_78.setTransform(269.9,105.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#AAA683").s().p("AgJBuIAAjIIhLAAIAAgTICpAAIAAATIhLAAIAADIg");
	this.shape_79.setTransform(248,105.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#AAA683").s().p("Ag9BuIAAjbIAVAAIAADIIBmAAIAAATg");
	this.shape_80.setTransform(195.6,105.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#AAA683").s().p("AgmBsQgSgIgNgSIAUgNQAIAOANAHQANAHAPAAQAOAAALgGQALgFAHgJQAGgKAAgNQAAgPgIgJQgIgIgNgFIgagKQgPgEgMgFQgNgHgJgMQgIgNAAgUQAAgUAKgNQAKgOAQgGQAQgHASAAQARAAAQAGQAPAHALAOIgRANQgIgLgLgFQgKgGgOAAQgNAAgLAFQgLAEgGAKQgHAJAAAOQAAAQAIAJQAIAJANAFIAaAJQAPAEAMAFQANAHAIAMQAIALABAVQgBAUgJANQgKAOgPAHQgPAHgSAAIgCAAQgUAAgSgHg");
	this.shape_81.setTransform(168.8,105.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#AAA683").s().p("AAxBuIg9hoIgmAAIAABoIgVAAIAAjbIA6AAIAOABQAJAAALADQALADAKAGQAJAGAHALQAGALAAARQAAAVgJALQgJAMgNAGQgMAEgNABIBABqgAgygMIArAAQAVAAALgHQALgGAEgJQAEgJAAgIQAAgIgEgJQgEgJgLgGQgLgHgVAAIgrAAg");
	this.shape_82.setTransform(79.7,105.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#AAA683").s().p("AgJBuIAAjIIhLAAIAAgTICpAAIAAATIhLAAIAADIg");
	this.shape_83.setTransform(51.6,105.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#AAA683").s().p("AhMBwIAAgxIBVhMIAJgJQAEgEADgGQADgFAAgHQgBgLgHgGQgIgHgLAAQgMABgHAHQgHAIgBAMIgvgDQACgXAKgPQAKgPARgHQARgIAUAAQAVAAAPAIQARAHAJAPQAJAPAAAWQAAAUgIAOQgHANgNALIhCA5IBgAAIAAApg");
	this.shape_84.setTransform(290,55.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#AAA683").s().p("AALBuIAAgsIheAAIAAgnIBYiIIAzAAIAACIIAcAAIAAAnIgcAAIAAAsgAglAbIAwAAIAAhLIAAAAg");
	this.shape_85.setTransform(262.7,55.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#AAA683").s().p("AgwBwIAyhPIgGACIgIAAQgVAAgPgJQgPgKgJgQQgJgPAAgUQABgXAKgRQALgRATgJQASgJAWgBQAXABATAJQASAJALARQALARAAAXQAAAQgEAMQgDALgGALIgNAWIgwBLgAgYg6QgKAKAAAPQAAAPAKAJQAJAJAPAAQAQAAAKgJQAJgJABgPQgBgPgJgKQgKgJgQgBQgPABgJAJg");
	this.shape_86.setTransform(235.4,55.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#AAA683").s().p("AANBuIAAinIgrAnIgbgeIBHg9IAsAAIAADbg");
	this.shape_87.setTransform(206.6,55.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#AAA683").s().p("AgoBlQgbgOgPgaQgPgagBgjQABgiAPgaQAPgaAbgOQAagOAhAAQANAAANADQAOADAMAHQANAHAKAMIgmAeQgHgIgKgFQgLgFgNAAQgRAAgPAKQgOAJgIAQQgJAPABAUQgBAVAJAPQAHAQAOAJQAOAKASAAQAOAAAMgHQALgGAIgLIAoAeQgKANgMAJQgNAIgOAEQgPAEgQAAQghAAgagOg");
	this.shape_88.setTransform(132.9,55.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#AAA683").s().p("AApBuIhfibIgBAAIAACbIgwAAIAAjbIBCAAIBcCYIABAAIAAiYIAwAAIAADbg");
	this.shape_89.setTransform(100.3,55.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#AAA683").s().p("AgXBuIAAjbIAvAAIAADbg");
	this.shape_90.setTransform(74.2,55.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#AAA683").s().p("AgsBtQgSgHgQgOIAigmQAIAKALAFQALAGANAAQAGAAAIgDQAIgCAFgFQAFgFAAgIQgBgKgGgGQgIgGgMgEIgXgIQgNgEgMgHQgMgFgHgMQgIgLAAgSQAAgYAMgPQAMgQATgIQATgIAUAAQAUAAAQAFQASAFAOANIghAkQgHgIgJgDQgKgEgJAAQgIAAgFADQgIACgGAFQgEAFAAAIQAAAKAGAFQAIAGAKADIAYAIQANAEAMAGQAMAGAHALQAHAMAAATQAAAZgMAQQgLAQgUAHQgSAIgXAAQgUAAgTgGg");
	this.shape_91.setTransform(51.3,55.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:264.2,y:105.5}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:51.6,y:155.1}},{t:this.shape_28,p:{x:79.7,y:155.1}},{t:this.shape_27,p:{y:155.1}},{t:this.shape_26,p:{y:155.1}},{t:this.shape_25,p:{x:168.8,y:155.1}},{t:this.shape_24},{t:this.shape_23,p:{y:155.1}},{t:this.shape_22,p:{x:251.4,y:155.1}},{t:this.shape_21,p:{x:278.5,y:155.1}},{t:this.shape_20,p:{x:308,y:155.1}},{t:this.shape_19,p:{x:337.8,y:155.1}},{t:this.shape_18},{t:this.shape_17,p:{x:78.7,y:204.8}},{t:this.shape_16},{t:this.shape_15,p:{x:134.4,y:204.8}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:117.6,y:254.4}},{t:this.shape_9,p:{x:142.1,y:254.4}},{t:this.shape_8,p:{x:168,y:254.4}},{t:this.shape_7,p:{x:197.8,y:254.4}},{t:this.shape_6},{t:this.shape_5,p:{x:261.2,y:254.4}},{t:this.shape_4},{t:this.shape_3,p:{x:315.4,y:254.4}},{t:this.shape_2,p:{x:337.4,y:254.4}},{t:this.shape_1},{t:this.shape,p:{x:387.7,y:254.4}}]}).to({state:[]},62).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_33,p:{x:162.4,y:55.5}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_27,p:{y:105.2}},{t:this.shape_26,p:{y:105.2}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_23,p:{y:105.2}},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_28,p:{x:81.5,y:154.8}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_8,p:{x:224.4,y:154.8}},{t:this.shape_66},{t:this.shape_17,p:{x:303.3,y:154.8}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_10,p:{x:418.4,y:154.8}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_22,p:{x:157.7,y:204.5}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_20,p:{x:318.8,y:204.5}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_15,p:{x:114,y:254.1}},{t:this.shape_29,p:{x:157.1,y:254.1}},{t:this.shape_51},{t:this.shape_21,p:{x:216.4,y:254.1}},{t:this.shape_7,p:{x:261,y:254.1}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_19,p:{x:419.3,y:254.1}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_5,p:{x:196.1,y:303.8}},{t:this.shape_41},{t:this.shape_9,p:{x:270.3,y:303.8}},{t:this.shape_2,p:{x:289.7,y:303.8}},{t:this.shape,p:{x:312.7,y:303.8}},{t:this.shape_40},{t:this.shape_3,p:{x:372,y:303.8}},{t:this.shape_25,p:{x:398.5,y:303.8}}]},13).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_33,p:{x:162.4,y:55.5}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_27,p:{y:105.2}},{t:this.shape_26,p:{y:105.2}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_23,p:{y:105.2}},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_28,p:{x:81.5,y:154.8}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_8,p:{x:224.4,y:154.8}},{t:this.shape_66},{t:this.shape_17,p:{x:303.3,y:154.8}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_10,p:{x:418.4,y:154.8}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_22,p:{x:157.7,y:204.5}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_20,p:{x:318.8,y:204.5}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_15,p:{x:114,y:254.1}},{t:this.shape_29,p:{x:157.1,y:254.1}},{t:this.shape_51},{t:this.shape_21,p:{x:216.4,y:254.1}},{t:this.shape_7,p:{x:261,y:254.1}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_19,p:{x:419.3,y:254.1}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_5,p:{x:196.1,y:303.8}},{t:this.shape_41},{t:this.shape_9,p:{x:270.3,y:303.8}},{t:this.shape_2,p:{x:289.7,y:303.8}},{t:this.shape,p:{x:312.7,y:303.8}},{t:this.shape_40},{t:this.shape_3,p:{x:372,y:303.8}},{t:this.shape_25,p:{x:398.5,y:303.8}}]},101).to({state:[]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:264.2,y:105.5}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:51.6,y:155.1}},{t:this.shape_28,p:{x:79.7,y:155.1}},{t:this.shape_27,p:{y:155.1}},{t:this.shape_26,p:{y:155.1}},{t:this.shape_25,p:{x:168.8,y:155.1}},{t:this.shape_24},{t:this.shape_23,p:{y:155.1}},{t:this.shape_22,p:{x:251.4,y:155.1}},{t:this.shape_21,p:{x:278.5,y:155.1}},{t:this.shape_20,p:{x:308,y:155.1}},{t:this.shape_19,p:{x:337.8,y:155.1}},{t:this.shape_18},{t:this.shape_17,p:{x:78.7,y:204.8}},{t:this.shape_16},{t:this.shape_15,p:{x:134.4,y:204.8}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:117.6,y:254.4}},{t:this.shape_9,p:{x:142.1,y:254.4}},{t:this.shape_8,p:{x:168,y:254.4}},{t:this.shape_7,p:{x:197.8,y:254.4}},{t:this.shape_6},{t:this.shape_5,p:{x:261.2,y:254.4}},{t:this.shape_4},{t:this.shape_3,p:{x:315.4,y:254.4}},{t:this.shape_2,p:{x:337.4,y:254.4}},{t:this.shape_1},{t:this.shape,p:{x:387.7,y:254.4}}]},13).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(245,230,440,261);
// library properties:
lib.properties = {
	id: '7C04D575E6327843A44051E720A64680',
	width: 490,
	height: 360,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
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
an.compositions['7C04D575E6327843A44051E720A64680'] = {
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