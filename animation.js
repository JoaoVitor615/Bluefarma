function Animate(dealy, duration, reset, origin, distance){
    const objAnimate = {
        delay: dealy, 
        duration: duration,
        reset: reset,
        origin: origin,
        distance: distance
    };

    return objAnimate;
}

const optionsText1 = Animate(100, 2000, false, 'left', '5rem');

const optionsText2 = Animate(100, 2000, false, 'right', '5rem');

const optionsCircle1 = Animate(900, 3000, false, 'top', '5rem');

const optionsCircle2 = Animate(900, 2000, false, 'top', '5rem');

const optionsImgDog = Animate(100, 1000, false, 'bottom', '5rem');

ScrollReveal(optionsText1).reveal('.reveal-text1');
ScrollReveal(optionsText2).reveal('.reveal-text2');

ScrollReveal(optionsCircle1).reveal('.reveal-circle1');
ScrollReveal(optionsCircle2).reveal('.reveal-circle2');

ScrollReveal(optionsImgDog).reveal('.dog');

