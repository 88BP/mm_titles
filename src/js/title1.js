console.log('main.js');

TweenMax.set('svg',{css:{visibility:'visible'}});

TweenMax.fromTo(".mid-stroke", 3, {drawSVG:"49% 50%"}, {drawSVG:"100%"});

TweenMax.fromTo(".end-stroke",3, {drawSVG:"98% 99%"}, {drawSVG:"100%"});

TweenMax.from(".start-stroke", 3, {drawSVG:0});


TweenMax.to(".nothing-stroke", 2, {drawSVG:0, delay: 3.25});
TweenMax.from(".exactly-stroke", 2, {drawSVG:0, delay: 5.25});