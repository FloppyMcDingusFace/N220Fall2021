let ren = 1000;

function setup () {
    createCanvas(1000,1000);
}

function draw () {
    ren = ren-10;
    if (ren < 2) {ren= 10};
 circle(500,500,ren);
}
 
