let p = 1


function setup () {
    createCanvas(400,400);

}

function draw () {
    background (0);
    p = p + 1;
    circle (200,200,p);
    if (p > 200) {
        p = 1
    }
}

