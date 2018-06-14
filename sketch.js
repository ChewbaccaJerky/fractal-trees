var angle,
    color1,
    color2,
    color3,
    len,
    animate;

var redSlider,
    blueSlider,
    greenSlider,
    angleSlider,
    lenSlider,
    animateBtn,
    randColor;

function setup(){
    let sliderContainer = document.getElementsByClassName('slider-container')[0];
    createCanvas(window.innerWidth - sliderContainer.clientWidth, window.innerHeight);
    angleSlider = document.getElementById('angle');
    lenSlider = document.getElementById('len');
    redSlider = document.getElementById('r');
    greenSlider = document.getElementById('g');
    blueSlider = document.getElementById('b');
    animateBtn = document.getElementById('animate');
    randColor = document.getElementById('rand-color');
}

function draw(){
    background(256);
    if(animateBtn.checked) {
        angle += 0.01;
    }
    else {
        angle = parseFloat(angleSlider.value);
    }

    if(randColor.checked) {
        color1 = Math.floor(Math.random() * 256);
        // redSlider.value = color1;
        color2 = Math.floor(Math.random() * 256);
        // greenSlider.value = color2;
        color3 = Math.floor(Math.random() * 256);
        // blueSlider.value = color3;
    }
    else {
        color1 = parseInt(redSlider.value);
        color2 = parseInt(greenSlider.value);
        color3 = parseInt(blueSlider.value);
    }
    
    len = parseInt(lenSlider.value);
    stroke(color1, color2, color3);
    translate(width/2, height - height/4);
    fractalBranch(len);

    // switch(fractal) {
    //     case "Fractal Tree":
    //         fractalBranch(len);
    //         break;

    //     case "L-System":
    //         break;

    //     default:
    //         break;
    // }
}

function fractalBranch(len) {
    if(len < 5) return;
    line(0, 0, 0, -len);
    translate(0, -len);
    push();
    rotate(angle);
    fractalBranch(len * 0.78);
    pop();
    push();
    rotate(angle * -1);
    fractalBranch(len * 0.78);
    pop();
}