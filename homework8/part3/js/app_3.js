let fn = document.getElementById("fn")
let un = document.getElementById("un")
let nn = document.getElementById("bn")

let f = document.getElementById("f")
let u = document.getElementById("u")
let n = document.getElementById("n")

f.style.backgroundColor = "#ff0000";
f.style.width = "100px" ;
f.style.height = "100px" ;

u.style.backgroundColor = "#ff0000";
u.style.width = "100px" ;
u.style.height = "100px" ;

n.style.backgroundColor = "#ff0000";
n.style.width = "100px" ;
n.style.height = "100px" ;




function changeStyle () {
 
 f.style.backgroundColor = "#0000ff";
 f.style.width = "80px" ;
 f.style.height = "100px" ;
 document.body.appendChild(f);}
  
function changeStyle2 () {    
 u.style.backgroundColor = "#ff00ff";
 u.style.width = "110px" ;
 u.style.height = "100px" ;
 document.body.appendChild(u);}
 
 function changeStyle3 () {  
    n.style.backgroundColor = "#f0ff0f";
    n.style.width = "100px" ;
   n.style.height = "1500px" ;
    document.body.appendChild(n);}
