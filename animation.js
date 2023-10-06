const optionsText1 = { 
    delay: 100, 
    duration: 2000,
    reset: false,
    origin: 'left',
    distance: '5rem'
}

const optionsText2 = { 
    delay: 100, 
    duration: 2000,
    reset: false,
    origin: 'right',
    distance: '5rem'
}

const optionsCircle1 = {
    delay: 900, 
    duration: 3000,
    reset: false,
    origin: 'top',
    distance: '5rem'
}

const optionsCircle2 = {
    delay: 900, 
    duration: 2000,
    reset: false,
    origin: 'top',
    distance: '5rem'
}

const optionsImgDog = {
    delay: 100, 
    duration: 1000,
    reset: false,
    origin: 'bottom',
    distance: '5rem'
}

ScrollReveal(optionsText1).reveal('.reveal-text1');
ScrollReveal(optionsText2).reveal('.reveal-text2');

ScrollReveal(optionsCircle1).reveal('.reveal-circle1');
ScrollReveal(optionsCircle2).reveal('.reveal-circle2');

ScrollReveal(optionsImgDog).reveal('#dog');