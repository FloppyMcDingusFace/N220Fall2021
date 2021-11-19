let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")

let colors = ["#999999","#650205","#0e6502","#0414a7"]

a.style.width = "200px" ;
a.style.height = "200px" ;
a.style.margin = "5px" ;
a.style.backgroundColor=colors[0] ;
//document.getElementById("a").addEventListener("click", color_change1());
a.style.float = "left";
b.style.width = "200px" ;
b.style.height = "200px" ;
b.style.margin = "5px" ;
b.style.float = "left";
b.style.backgroundColor=colors[0]
//document.getElementById("b").addEventListener("click", color_change2())
c.style.width = "200px" ;
c.style.height = "200px" ;
c.style.margin = "5px" ;
c.style.float = "left";
c.style.backgroundColor=colors[0] ;
//document.getElementById("c").addEventListener("click", color_change3()) ;


function color_change1() {
a.style.backgroundColor=colors[1];}
function color_change2() 
{b.style.backgroundColor=colors[2]}
function color_change3() {c.style.backgroundColor=colors[3]}