let xPos = 0;
let yPos = 0;
let yPos2 = 0;
let xPos2 = 0;
let yPos3 = 0;let yPos4 = 75; let yPos5 = 150;let yPos6 = 225;

function setup () {
    createCanvas(450,445);

}

function draw () {
    yPos= yPos + 75;
    xPos = 0;
    xPos2= xPos2 + 75; yPos2 = yPos2 +75; yPos3 = yPos3 + 75; yPos4 = yPos4 + 75; yPos5 = yPos5 + 75; yPos6 = yPos6 +75;
    rect(xPos2,yPos2, 50, 50);
    fill(255,0,0);
    rect(xPos,yPos, 50, 50);
    fill(255,0,0);
    rect(75,yPos3, 50, 50);
    rect(150,yPos4, 50, 50);
    rect(225,yPos5, 50, 50);
    rect(300,yPos6, 50, 50);
}
 
