var angle = 0;
var color = 0;
var slider;

function setup(){
    createCanvas(600, 600);
    slider = createSlider(0, TWO_PI, PI/2, 0.1);
    // console.log(Math.floor(Math.random() * 256));
}

function draw(){
    background(50);
    angle = slider.value();
    // color = Math.floor(Math.random() * 256);
    stroke(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
    translate(width/2, height - height/4);
    branch(85);
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