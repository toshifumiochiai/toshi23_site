(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.omikuji = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{move:1,cover:8,result1:11,result2:16,result3:21,result4:26,result5:31},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		if(this.onCoverEnd) { this.onCoverEnd(this); }
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(3).call(this.frame_10).wait(5).call(this.frame_15).wait(5).call(this.frame_20).wait(5).call(this.frame_25).wait(5).call(this.frame_30).wait(5).call(this.frame_35));

	// cover
	this.instance = new lib.grWhiteCover("synched",0);
	this.instance.setTransform(160,240);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({startPosition:0,_off:false},0).to({alpha:1},2).wait(1).to({startPosition:0},0).to({alpha:0},3).wait(2).to({alpha:1},0).to({alpha:0},3).wait(2).to({alpha:1},0).to({alpha:0},3).wait(2).to({alpha:1},0).to({alpha:0},3).wait(2).to({alpha:1},0).to({alpha:0},3).wait(2));

	// dai kiti
	this.instance_1 = new lib.grResult_daikiti("synched",0);
	this.instance_1.setTransform(160,240);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({startPosition:0,_off:false},0).to({_off:true},5).wait(20));

	// chu kiti
	this.instance_2 = new lib.grResult_chukiti("synched",0);
	this.instance_2.setTransform(160,240);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({startPosition:0,_off:false},0).to({_off:true},5).wait(15));

	// syo kiti
	this.instance_3 = new lib.grResult_syokiti("synched",0);
	this.instance_3.setTransform(160,240);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({startPosition:0,_off:false},0).to({_off:true},5).wait(10));

	// kiti
	this.instance_4 = new lib.grResult_kiti("synched",0);
	this.instance_4.setTransform(160,240);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({startPosition:0,_off:false},0).to({_off:true},5).wait(5));

	// kyo
	this.instance_5 = new lib.grResult_kyo("synched",0);
	this.instance_5.setTransform(160,240);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({startPosition:0,_off:false},0).wait(5));

	// paper
	this.instance_6 = new lib.grResult_Paper("synched",0);
	this.instance_6.setTransform(160,240);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({startPosition:0,_off:false},0).wait(25));

	// lot box
	this.LotBoxMC = new lib.mcLotBox();
	this.LotBoxMC.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.LotBoxMC).wait(1).to({x:280,y:40},6).to({_off:true},4).wait(25));

	// area
	this.LotBoxAreaMC = new lib.mcLotBoaArea();
	this.LotBoxAreaMC.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.LotBoxAreaMC).to({_off:true},1).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62.5,32.7,194.8,415.1);


// symbols:
(lib.lotbox = function() {
	this.initialize(img.lotbox);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,553);


(lib.stick = function() {
	this.initialize(img.stick);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,451);


(lib.mcLotBoaArea = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("APM4sMAAAAv7IgBAAIAAABIAAAnIgCADIgDgCInZIUIAGAFIvWAAIkJksIgBAAIjaj1IgEAEMAAAgvyIHooSIPmAEIGxHgIAYAA").cp();

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.1,-206.4,194.5,413.1);


(lib.grWhiteCover = function() {
	this.initialize();

	// レイヤー 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AXHRWMguNAAAMAAAgirMAuNAAAMAAAAir").cp();
	this.shape_1.setTransform(0,0,1.081,2.162);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-159.9,-239.9,320,480);


(lib.grStick = function() {
	this.initialize();

	// stick
	this.instance = new lib.stick();
	this.instance.setTransform(-14.9,-169,0.75,0.75);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.9,-169,30,338.3);


(lib.grResult_syokiti = function() {
	this.initialize();

	// syokiti
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABu8UQBvAjAAA8QAAAIgJAOQg7BzgGBjQgUCQAACGQAAGOAaEdQAAB+hMB9Qg/BWgpAAQg9AAgXg/QghhOjbjdQAAglAZAAQAOAAA9AiQAlAcAjAAQAfAAAIglQAVgwAMiwQAYj4AAkRQAAixgSh9QgKh7g4hVQgMgMAAgIQAAgpA+AAQBiAACNA9IAAAAAG20HQBkA1BpBGQCHBlArBTQAjBMAABYQAAAsgdAyQgfAngxAAQgjAAgzg3QgjgthHiMQh1jcgpgnQgxg0AAg1QAAgPAIAAQAaAAA4APIAAAAAnezPQAlBTAAAyQAAB0hGCBQgpBYg/A4Qg3AiglAAQhOAAgtg1QgZgxAAgvQAAgrAdgvQD0jpAUhDQALgwAxAAQAOAAAKAfIAAAAAjeBVQAAgpBIAAQBiAAB3AtQB1A1AAAtQAAAIgJANQgUApgOB7IgCA9QCkglCmgtQBFgQA8AAQBFAABQA1QBGAvAABQQAABWgvAAQlQAAkuAhIgHDlQAOgEASgGQA8gSA1AAQA8AABOAlQBZBBAAA1QAAATgYAaQgVAZgZAAQkcAAi4AXQhxAMimApQgGACgMAAQgfAAg3hCQgwg7AAgXQAAgIAPAAQBzgWBFgLQBAgKBYgQIgGj8QiuAcjHA6QhMAYgTAAQgzAAhKhJQhBg8AAgnQAAgQAaAAQFjg1ERg0QgDiNgWh9QgEg+g5g5QgFgMAAgGIAAAAAEWSCQBEAACTBMQCvBrAAAzQAAAKgTAKQg1AZgZAjQg5A3gZBeQgCANgTAKQA8BSAAAjQgGAMgRAAQjnAAjlAZQi3AYgvAAQgWA4gtAAQg2AAgngyQgpgtAAgeQgehCgTiiQgWhkgdg6QgUg1glgWQAAg4ApAAQBHAABhAZQAMACAIAEQCwgGCKgdQBqgUBrgnQAjgPAeAAIAAAAAAMZcQBugLBRgOQAKgfAIg3QAKgzAAgdQAAhWg2AAQg0AAieAZQh7AUg7AIIAeD4QBOgGB3gSIAAAA").cp();

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85.6,-187.4,171.3,374.9);


(lib.grResult_Paper = function() {
	this.initialize();

	// paper
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Axu4MMAjdAAAMAAAAwZMgjdAAAMAAAgwZ").cp();
	this.shape_3.setTransform(0,0,1.322,1.291);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-149.9,-199.9,300,400);


(lib.grResult_kyo = function() {
	this.initialize();

	// kyo
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AGSozQAAAMgOAGQgNATgUApQhcCkhvCLQBWBOA3BMQA+BLAAA8QAACkiWAAQgYAAgPgTQgagcgjg4QgxhLhAhbQhBA+hEAxQhzBchwAvQgtATgLAAIAAgPQCMihBuiaQAbgrAZgrQiAimiujRQgQgZAAgaQAAgPAQAAQATAAAaAPQDPCFCWBzQAxhlAbhmQAMgrAAgZQghhCAAgeQAAgXA4AAQBcAACFBCQBYAeAAA2IAAAAAHQkEQgRgSAAgjQAAgXA4AAQBaAACLA8QBcAgAAAnQAAATgIAfQgWAigDAyQgzISgYBjQgRBOgYAiQg4AsgtAAQgtAAgng6QgrgjAAhHQACAAAGgfQACgMACgJQgQAEgSAEQpAA4jNArQiSAWisBCQg7AAgbg1Qg/hUAAgyQAAgOAagKQA4gTAIgOQArglAAhcQAAh9gZi4QgKhUgzhCQgKgSAAgPQAAgpApAAQBHAAB/AnQB7AhAAAlIg9HwQE3ghJGgzQAxgEAhgCQANh/AAk8QAAhWgnghIAAAA").cp();

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.3,-71.4,164.9,143);


(lib.grResult_kiti = function() {
	this.initialize();

	// kiti
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AJGpvQBFAABQA1QBGAvAABQQAABWgvAAQlQAAkuAhIgGDlQANgEASgGQA9gSA0AAQA9AABOAlQBYBBAAAzQAAATgYAaQgVAZgZAAQkcAAi3AXQhyAMimApQgFACgMAAQgfAAg3hCQgxg7AAgXQAAgIAQAAQBzgWBEgJQBBgKBYgQIgGj8QiuAcjHA6QhMAYgUAAQgzAAhKhJQhAg8AAgnQAAgQAZAAQFjg1ESg0QgEiNgVh9QgEg+g5g5QgGgMAAgGQAAgpBIAAQBiAAB3AtQB1A1AAAtQAAAIgJANQgUApgOB7IgCA9QCkglCmgtQBFgQA8AAIAAAAADGDRQAjgPAdAAQBEAACTBMQCwBrAAAzQAAAKgUAKQg1AZgZAjQg5A3gZBeQgCAOgTAKQA8BRAAAjQgGAMgRAAQjnAAjkAZQi4AYgvAAQgVA4gtAAQg3AAgngyQgpgtAAgeQgdhCgUiiQgVhkgeg6QgTg1glgWQAAg4ApAAQBGAABiAZQAMACAHAEQCwgGCLgdQBpgUBsgnIAAAAAgwGgQh7AUg7AIIAdD4QBOgGB5gSQBsgLBSgOQAKgfAHg3QAKgzAAgdQAAhWg2AAQgzAAieAZIAAAA").cp();

	this.addChild(this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.1,-91.4,160.4,183);


(lib.grResult_daikiti = function() {
	this.initialize();

	// daikiti
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAX5DQgEB1gNCBQBhgYBggZQAzgMAtAAQBKAABUA3QBMAxAABUQAABdgvAAQj8AAjiAWQATAVAQAWQCkDqCeCNQCkCkF7DBQAGAIAAAYQAAARg7AEQkfApjhAAQgwAAgSgXQh5i2i2mmQgLgXgOgcQgSBFgXBCQgrBrhMBqQhFBShvBSQiJBUjwBGQhMAMgjAAQgaAAAAgQQDAhnBQhBQBghABGheQBah5AriLQAnhlAMh9QhUAQhaAVQg5AQgOAAQg2AAhShNQhFhCAAgtQAAgOAaAAQD4glDBglQAChIAAhUQAAhkgRiKQgGhQgpggQgUgdAAgQQAAghAvAAQCUAABeAlQCJAeAAA8QAAAYgWAVQgdAlAABFIAAAAAIoFXQBFAABQA1QBGAuAABRQAABVgvAAQlQAAkuAiIgGDkQANgEASgGQA9gRA0AAQA9AABOAlQBYBAAAA1QAAAUgYAZQgVAZgZAAQkcAAi3AYQhyAMimApQgFACgMAAQgfAAg3hDQgxg6AAgYQAAgIAQAAQBzgVBEgMQBBgKBYgPIgGj8QiuAbjHA7QhMAXgUAAQgzAAhKhIQhAg9AAgnQAAgPAZAAQFjg1ESg1QgEiMgVh9QgEg/g5g5QgGgLAAgGQAAgpBIAAQBiAAB3AtQB1A0AAAtQAAAIgJAOQgUApgOB7IgCA8QCkglCmgtQBFgPA8AAIAAAAAJvV0QAAAJgUAKQg1AZgZAkQg5A2gZBeQgCAOgTAKQA8BSAAAjQgGALgRAAQjnAAjkAaQi4AXgvAAQgVA5gtAAQg3AAgngzQgpgtAAgdQgdhDgUiiQgVhjgeg7QgTg1glgVQAAg5ApAAQBGAABiAaQAMACAHAEQCwgGCLgeQBpgTBsgnQAjgQAdAAQBEAACTBMQCwBsAAAzIAAAAACDVOQgzAAieAaQh7ATg7AIIAdD4QBOgGB5gRQBsgMBSgOQAKgfAHg3QAKgyAAgeQAAhWg2AAIAAAA").cp();

	this.addChild(this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90.9,-188.1,182.1,376.5);


(lib.grResult_chukiti = function() {
	this.initialize();

	// chukiti
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AJx3aQDEBmAAAtQAAAPgcASQhMArgjA2Qg3BBgwBtQgKAIgMAGQAzBOAAAhQgIAQgXAAQj6AAj3AZQgDC4gIBaQgKDmgrCJQgpCLgtAAQgxAAgPiTQgUgfgGo8QikATg6ACQgYA5g1AAQg8AAgtg7QgrgxAAgjQgnhKgXi2QgYhtglhBQgXg8gpgYQAAhIAsAAQBRAABxAdQAbAKAWAMQA4gEAggKQCKgZB1gSQAAhIAAhOQAAiWg0hcQAAgYAnAAQBaAABUAWQCQAvAAApQAAAbgMAdQgtAxAACJQAAARAAAQQAigEAbgCQBngGB0gnQAbgGAQAAQAVAADFBiIAAAAABU1dQAACqgCCHQB4gQBXgTQAUgpAKgvQAPg9AAg+QAAhBhWgEQhCAAhiAKIAAAAAIzGCQBEAABQA1QBHAuAABRQAABVgvAAQlQAAkvAiIgGDkQAOgEARgGQA9gRA1AAQA8AABOAlQBYBAAAA1QAAAUgXAZQgWAZgZAAQkbAAi4AYQhxAMimApQgGACgMAAQgfAAg3hDQgwg6AAgYQAAgIAPAAQBzgVBFgMQBAgKBYgPIgGj8QiuAbjHA7QhMAXgTAAQgzAAhKhIQhBg9AAgnQAAgPAaAAQFjg1ERg1QgDiMgWh9QgEg/g5g5QgFgLAAgGQAAgpBIAAQBiAAB3AtQB1A0AAAtQAAAIgKAOQgTApgOB7IgCA8QCkglCmgtQBEgPA9AAIAAAAAJ5WfQAAAJgTAKQg1AZgZAkQg5A2gZBeQgCAOgUAKQA9BSAAAjQgGALgSAAQjmAAjlAaQi3AXgvAAQgWA5gtAAQg2AAgngzQgpgtAAgdQgehDgTiiQgWhjgdg7QgUg1glgVQAAg5ApAAQBHAABhAaQAMACAIAEQCwgGCKgeQBqgTBrgnQAjgQAeAAQBEAACSBMQCwBsAAAzIAAAAADEXPQAAhWg3AAQgzAAieAaQh7ATg7AIIAeD4QBOgGB5gRQBrgMBSgOQAKgfAIg3QAKgyAAgeIAAAAAiiwLQAAiNAAioQh9AUiDAfIAoEZQBbgHB9gQIAAAA").cp();

	this.addChild(this.shape_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82,-192.4,164.3,385.1);


(lib.grLotBox = function() {
	this.initialize();

	// hole
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AImAAQAAApgdAdQgdAegqAAIuDAAQgpAAgegeQgdgdAAgpQAAgoAdgdQAegeApAAIODAAQAqAAAdAeQAdAdAAAoIAAAA").cp();
	this.shape_8.setTransform(0,-152.3);

	// box
	this.instance_1 = new lib.lotbox();
	this.instance_1.setTransform(-97,-207.3,0.75,0.75);

	this.addChild(this.instance_1,this.shape_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97,-207.3,194.3,414.8);


(lib.mcLotBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0,shake:13},true);

	// timeline functions:
	this.frame_12 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_31 = function() {
		this.stop();
		if(this.onStickOut) { this.onStickOut(this); }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(19).call(this.frame_31));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_25 = new cjs.Graphics().p("EAQ5gqLIX8UGMg8PBHyI380FMA8PhHz").cp();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_graphics_25,x:-277.4,y:318.2}).wait(7));

	// stick
	this.instance_2 = new lib.grStick("synched",0);
	this.instance_2.setTransform(5,-5.9,1,1,40);
	this.instance_2._off = true;

	this.instance_2.mask = mask;
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({startPosition:0,_off:false},0).to({x:-252.8,y:301},6).wait(1));

	// lot box
	this.instance_3 = new lib.grLotBox("synched",0);
	this.instance_3.setTransform(0,0,1,1,-139.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({startPosition:0,_off:false},0).wait(7));

	// lot box
	this.instance_4 = new lib.grLotBox("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({startPosition:0},0).to({rotation:-139.8},6).wait(1).to({x:10,y:-9.8},0).wait(1).to({x:0,y:0},0).wait(1).to({x:10,y:-9.8},0).wait(1).to({x:0,y:0},0).wait(1).to({x:10,y:-9.8},0).to({_off:true},1).wait(7));

	// box area
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("APM4sMAAAAv7IgBAAIAAABIAAAnIgCADIgDgCInZIUIAGAFIvWAAIkJksIgBAAIjaj1IgEAEMAAAgvyIHooSIPmAEIGxHgIAYAA").cp();
	this.shape_9.setTransform(-0.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[]},13).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.4,-207.3,194.7,415.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;