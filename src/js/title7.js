
TweenMax.set('svg',{css:{visibility:'visible'}});

var tl = new TimelineMax(
	{repeat: -1, repeatDelay: 3, yoyo: true});

tl.to(".nothing-text", 2, {drawSVG:0, delay: 3});
tl.from(".exactly-text", 2, {drawSVG:0});
tl.to(".exactly-text", 2, {drawSVG:0, delay: 3});
tl.to(".nothing-text", 2, {drawSVG:"100%"});