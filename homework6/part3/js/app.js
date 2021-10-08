let n = document.getElementById("n")

let rgb = ["#ff0000","#ff0000", "#69002d","#000000","#425720","#000000","#000000","#009600","#0073ff","#ffa600","#0793f7","#020080"]


let points =0

let i=0


let Patrol = 100
let small_battlion = 200
let small_force = 300
let large_force = 500
let full_force = 1000


let blank = {
  points: Patrol,
  Name: "N/A"
}

let Admech = {
  Name: "Adeptus Mechanicus-",
  subfaction:"Mars-",
  start:"2021",
  points: Patrol+points
}

let  Chaos_Daemons = {
  Name: "Demons of Chaos-",
  subfaction: "Khrone, Nurgle, and Tzeentch-",
  start: "2019",
  points: small_battlion,
}

let Chaos_Space_Marines = {
  Name: "Chaos Space Marines-",
  subfaction: "Sons of Malice-",
  start: "2018",
  points: full_force+points ,

}

let Death_Guard = {
  Name: "Death Guard-",
  subfaction: "Mortarion's Chosen Sons-",
  start:  "2018",
  points: full_force,
}

let Deathwatch = {
  Name: "Deathwatch-",
  subfaction:"N/A-",
  start: "2018",
  points: small_force,
}

let Necrons = {
  Name: "Necrons-",
  subfaction:"Custom-",
  start: "2018",
  points: full_force,
}

let Orks= {
  Name: "Orks-",
  subfaction:"Gorgutz's Boyz-",
  start: "2019",
  points: full_force,
}

let Space_Marines= {
  Name: "Space Marines-",
  subfaction:"Mixed-",
  start:"2018",
  points: Patrol,
}

let Tau = {
  Name: "Tau-",
  subfaction: "Custom-",
  start: "2018",
  points: full_force,
}

let Thousand_Sons  = { 
Name: "Thousand Sons-",  
subfaction: "Mixed-",
start: "2018",
points: small_force}

let Tyranids =   {
Name: "Tyranids-",  
subfaction: "Hydra-",
start: "2019",
points: full_force}

let Warhammer40k  = [blank, Admech, Chaos_Daemons, Chaos_Space_Marines,Death_Guard,Deathwatch,Necrons,Orks,Space_Marines,Tau,Thousand_Sons,Tyranids,]

function clickthrough()
{ i=i+1;
  if(i>Warhammer40k.length){i=1};
  n.style.backgroundColor = (rgb[i]);
  n.style.width=1000 + "px";
    if (i>5) {n.style.width=1010}
  n.style.height=1000 + "px";
    if (i>5) {n.style.height=1010}
  n.innerHTML = (Warhammer40k[i].Name)+(Warhammer40k[i].subfaction)+(Warhammer40k[i].start);
  n.style.fontSize="x-large";
  n.style.color="#FFFFFF";


}