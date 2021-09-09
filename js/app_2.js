let xPos = 0

function setup () {
    createCanvas(400,300);

}

function draw () {
    background (0);
    xPos= xPos + 1;
        if (xPos > 400) {
        xPos = 0;
    }
    circle(xPos, 150, 50);
}
 
