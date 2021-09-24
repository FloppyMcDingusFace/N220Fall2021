let xPositions = [];
let yPositions = [];
let rgb = ["#ff0000", "#ff8000", "#ffff00","#80ff00", "#00ff00","#00ff80","#00ffff", "#0080ff", "#0000ff","#8000ff","#ff00ff","#ff0080"]
let g = 0

function setup () {
    createCanvas(1000,1000);
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function draw () {
    background(0);
        if(xPositions.length > 10) {xPositions.shift();}
        if(yPositions.length > 10) {yPositions.shift();} 
        if(rgb.length > 12) {rgb.pop();}
    xPositions.push(mouseX); 
    yPositions.push(mouseY);
        for(let i = 0; i < xPositions.length; i++) {
            circle(xPositions[i],yPositions[i], 50);}
        for(let g = 0; g < rgb.length; g++){
            fill(rgb[g])
        }
        }



