let colors = ["#ff0000", "#ff8000", "#ffff00","#80ff00", "#00ff00","#00ff80","#00ffff", "#0080ff", "#0000ff","#8000ff","#ff00ff","#ff0080"]

function setup () {
    createCanvas(1200,1200);
    background(0);
}


function draw () {
    for (let i = 0; i < colors.length; i++) {
        circle(mouseX * i,600,100);
        fill(colors[i])
    }
}
