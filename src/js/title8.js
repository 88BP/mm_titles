TweenMax.set('svg',{css:{visibility:'visible'}});

TweenMax.from("#title-line", .5, {y:"100%", delay:1, ease: Power2.easeOut});
TweenMax.from("#title-first", 1.5, {x:"100%", delay:2, ease: Power2.easeOut});
TweenMax.from("#title-second", 1.5, {x:"-100%", delay:3.75, ease: Power2.easeOut});
TweenMax.to(".logocontainer", 1.5, {opacity: "1", delay: 5.5});

var tl = new TimelineMax(
	{delay: 6.5, repeat: -1, repeatDelay: .4});

tl.to(".nothing-color", 1.2, {fill: '#b02a4d'})
	.to(".nothing-color", 1.2, {fill: '#FFFFFF'}, '+=1.5')
	.to(".exactly-color", 1.2, {fill: '#F8A11E'}, '+=0.4')
	.to(".exactly-color", 1.2, {fill: '#FFFFFF'}, '+=1.5');





