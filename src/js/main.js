console.log('main.js');

TweenMax.fromTo(".mid-stroke", 3, {drawSVG:"49% 50%"}, {drawSVG:"100%"});

TweenMax.fromTo(".end-stroke",3, {drawSVG:"98% 99%"}, {drawSVG:"100%"});

TweenMax.from(".start-stroke", 3, {drawSVG:0});


// TweenMax.to(".nothing-stroke", 2, {drawSVG:0, delay: 3.25});
// TweenMax.from(".exactly-stroke", 2, {drawSVG:0, delay: 5.25});

// MIGHTY MORPHIN POWER RANGERS ///


TweenMax.to("#nothing-n", 2, {morphSVG:"#exactly-e", delay:3.25, ease:Power2.easeInOut, repeat: -1, repeatDelay: 1.25, yoyo: true});
TweenMax.to("#nothing-o", 2, {morphSVG:"#exactly-x", delay:3.65, ease:Power2.easeInOut, repeat: -1, repeatDelay: 1.25, yoyo: true});
TweenMax.to("#nothing-t", 2, {morphSVG:"#exactly-a", delay:3.5, ease:Power2.easeInOut, repeat: -1, repeatDelay: 1.25, yoyo: true});
TweenMax.to("#nothing-h", 2, {morphSVG:"#exactly-c", delay:3.7, ease:Power2.easeInOut, repeat: -1, repeatDelay: 1.25, yoyo: true});
TweenMax.to("#nothing-i", 2, {morphSVG:"#exactly-t", delay:3.4, ease:Power2.easeInOut, repeat: -1, repeatDelay: 1.25, yoyo: true});
TweenMax.to("#nothing-n2", 2, {morphSVG:"#exactly-l", delay:3.6, ease:Power2.easeInOut, repeat: -1, repeatDelay: 1.25, yoyo: true});
TweenMax.to("#nothing-g", 2, {morphSVG:"#exactly-y", delay:3.3, ease:Power2.easeInOut, repeat: -1, repeatDelay: 1.25, yoyo: true});

