let n = document.getElementById("div")
let rgb = ["000000","#ff0000", "#ff8000", "#ffff00","#80ff00", "#00ff00","#00ff80","#00ffff", "#0080ff", "#0000ff","#8000ff","#ff00ff","#ff0080"]
let nomen = ["dummy","Red", "Orange", "Yellow", "Lime", "Green", "Aquamarine", "Cyan", "Azure", "Blue", "Indigo", "Purple", "Magenta"]
let v = 0;

n.style.backgroundColor = "#000000";
n.style.width = "100px" ;
n.style.height = "100px" ;





document.body.appendChild(n);


function color_change () {
   v = v +1;
    n.style.backgroundColor = (rgb[v]);
    n.style.width = "100px" ;
    n.style.height = "100px" ;
    n.innerHTML = (nomen[v])
    document.body.appendChild(n);
    console.log(n);
      if (v > 11) {v = 0}}

