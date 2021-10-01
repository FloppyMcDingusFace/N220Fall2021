let n = document.createElement("div")
let wid = 100;
let hei = 100;

n.style.backgroundColor = "#00ff00";
n.style.width = wid + "px" ;
n.style.height = hei + "px" ;





document.body.appendChild(n);


function grow () {
wid = wid * 1.1; 
hei = hei * 1.1;
n.style.width = wid + "px" ;
n.style.height = hei + "px" ;
document.body.appendChild(n);
console.log(n);
}
