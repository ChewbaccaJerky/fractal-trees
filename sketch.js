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
    createCanvas(600, 600);
    angleSlider = createSlider(0, TWO_PI, TWO_PI, 0.1);
    blueSlider = createSlider(0, 256, 0, 1);
    redSlider = createSlider(0, 256, 0, 1);
    greenSlider = createSlider(0, 256, 0, 1);
    lenSlider = createSlider(0, 100, 10, 1);
}

function draw(){
    background(50);
    angle = angleSlider.value();
    color1 = blueSlider.value();
    color2 = redSlider.value();
    color3 = greenSlider.value();
    len = lenSlider.value();
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