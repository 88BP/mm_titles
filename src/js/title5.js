TweenMax.set('svg',{css:{visibility:'visible'}});

TweenMax.from("#title-line", .5, {y:"100%", delay:1, ease: Power2.easeOut});
TweenMax.from("#title-first", 1.5, {x:"100%", delay:2, ease: Power2.easeOut});
TweenMax.from("#title-second", 1.5, {x:"-100%", delay:3.75, ease: Power2.easeOut});
TweenMax.to(".logocontainer", 1.5, {opacity: "1", delay: 5.5});