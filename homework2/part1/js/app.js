function setup () {
    createCanvas(400,300);
}

function draw () {
    circle(mouseX,mouseY,25)
        if (mouseX > 200) {
            fill (255, 0, 0);
        } else {
            fill (0,0,255)
        }
}
 
