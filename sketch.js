var angle = 0,
    color1 = 0,
    color2 = 0,
    color3 = 0,
    len = 0;
var redSlider = 0,
    blueSlider = 0,
    greenSlider = 0,
    angleSlider = 0,
    lenSlider = 0;

function setup(){
    let sliderContainer = document.getElementsByClassName('slider-container')[0];
    createCanvas(window.innerWidth - sliderContainer.clientWidth, window.innerHeight);
    angleSlider = document.getElementById('angle');
    lenSlider = document.getElementById('len');
    redSlider = document.getElementById('r');
    greenSlider = document.getElementById('g');
    blueSlider = document.getElementById('b');
}

function draw(){
    background(256);
    angle = parseFloat(angleSlider.value);
    color1 = parseInt(blueSlider.value);
    color2 = parseInt(redSlider.value);
    color3 = parseInt(greenSlider.value);
    len = parseInt(lenSlider.value);
    stroke(color1, color2, color3);
    translate(width/2, height - height/4);
    branch(len);
}

function branch(len) {
    if(len < 5) return;
    line(0, 0, 0, -len);
    translate(0, -len);
    push();
    rotate(angle);
    branch(len * 0.78);
    pop();
    push();
    rotate(angle * -1);
    branch(len * 0.78);
    pop();
}