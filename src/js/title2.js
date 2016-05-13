console.log('main.js');

// TweenMax.fromTo(".mid-stroke", 3, {drawSVG:"49% 50%"}, {drawSVG:"100%"});

// TweenMax.fromTo(".end-stroke",3, {drawSVG:"98% 99%"}, {drawSVG:"100%"});

// TweenMax.from(".start-stroke", 3, {drawSVG:0});

TweenMax.set('svg',{css:{visibility:'visible'}});

var tl = new TimelineMax(
	{repeat: -1, repeatDelay: 2, yoyo: true});

tl.to(".nothing-stroke", 2, {drawSVG:0, delay: 2});
tl.from(".exactly-stroke", 2, {drawSVG:0}, '-=.5');
tl.to(".exactly-stroke", 2, {drawSVG:0, delay: 2});
tl.to(".nothing-stroke", 2, {drawSVG:"100%"}, '-=.5');

