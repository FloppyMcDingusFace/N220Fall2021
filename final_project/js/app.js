let xPositions = [];
let yPositions = [];
let rgb = ["#ff0000","#FF0300","#FF0600","#FF0900","#FF0C00","#FF0F00","#FF1100","#FF1400","#FF1700","#FF1A00","#FF1D00", "#FF2000","#FF2900","#FF3100","#FF3A00","#FF4300","#FF4C00","#FF5400","#FF5400","#FF6600","#FF6F00","#FF7700", "#ff8000","#FF8C00", "#FF9700","#FFA300","#FFAE00","#FFBA00","#FFC500","#FFD100","#FFDC00","#FFE800","#FFF300","#ffff00","#F3FF00","#E8FF00","#DCFF00","#D1FF00","#C5FF00","#BAFF00","#AEFF00","#A3FF00","#97FF00","#8CFF00","#80ff00","#80FF00","#74FF00","#69FF00","#5DFF00","#51FF00","#46FF00","#3AFF00","#2FFF00","#23FF00","#17FF00","#0CFF00", "#00ff00","#00FF0C","#00FF17","#00FF23","#00FF2F","#00FF3A","#00FF46","#00FF51","#00FF5D","#00FF69","#00FF74","#00ff80","#00FF8C", "#00FF97", "#00FFA3","#00FFAE","#00FFBA","#00FFC5","#00FFD1","#00FFDC","#00FFE8","#00FFF3","#00ffff", "#00F3FF", "#00E8FF","#00DCFF","#00D1FF","#00C5FF","#00BAFF","#00AEFF","#00A3FF","#0097FF","#008CFF","#0080ff","#0074FF","#0069FF","#005DFF","#0051FF","#0046FF","#003AFF","#002FFF","#0023FF","#0017FF","#000CFF", "#0000ff","#0C00FF","#1700FF","#2300FF","#2F00FF","#3A00FF","#4600FF","#5100FF","#5D00FF","#6900FF","#7400FF","#8000ff","#8C00FF","#9700FF","#A300FF","#AE00FF","#BA00FF","#C500FF","#D100FF","#DC00FF","#E800FF","#F300FF","#ff00ff","#FF00F3","#FF00E8","#FF00DC","#FF00D1","#FF00C5","#FF00BA","#FF00AE","#FF00A3","#FF0097","#FF008C","#ff0080","#FF0074","#FF0069","#FF005D","#FF0051","#FF0046","#FF003A","#FF002F","#FF0023","#FF0017","#FF000C"]
let g = 0
let b = 0
let n = 1
let id = document.getElementById("id")
function setup () {
    createCanvas(1000,1000);
}

function draw () {

    background(0);
        if(xPositions.length > 10) {xPositions.shift();}
        if(yPositions.length > 10) {yPositions.shift();} 
    xPositions.push(mouseX); 
    yPositions.push(mouseY);
    for(let i = 0; i < xPositions.length; i++) {
        circle(xPositions[i],yPositions[i], 50);

        }
 

setTimeout(function onTick()   {    
    g = g + 1; 
    if (g > rgb.length) {g=0}
    fill(rgb[g]) }, 100)}

    function changeStyle () {
        id.style.height="100px"
        id.style.width="100px"
        id.style.backgroundColor = rgb[g];
        document.body.appendChild(f);}